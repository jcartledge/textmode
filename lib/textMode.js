/** @module */
import TextModeFont from './textModeFont.js';
import textModePalette from './textModePalette.js';
import numberInRange from '../util/numberInRange.js';

const escape = Symbol('escape');
const setPos = Symbol('setPos');
const rowFromPos = Symbol('rowFromPos');
const colFromPos = Symbol('colFromPos');
const forward = Symbol('forward');
const scrollDown = Symbol('scrollDown');
const render = Symbol('render');
const renderChar = Symbol('renderChar');
const dispatchEvent = Symbol('dispatchEvent');

class TextMode {
  /**
   * @param {Object} options - Configuration object.
   * @param {HTMLCanvasElement} [options.canvas] - If supplied, use this canvas.
   * @param {TextModeFont} [options.font] - If supplied, use this font.
   * @param {TextModePalette} [options.palette] - If supplied, use this palette.
   * @param {number} [options.numRows=30] - Number of text rows.
   * @param {number} [options.numCols=40] - Number of text columns.
   * @param {number} [options.hscale=1] - Horizontal scaling factor.
   * @param {number} [options.vscale=1] - Vertical scaling factor.
   */
  constructor ({canvas, font, palette, numRows = 30, numCols = 40, hscale = 1, vscale = 1} = {}) {
    /**
     * Number of chars across.
     * @readonly
     * @property
     * @type {number}
     */
    this.numCols = numCols;

    /**
     * Number of chars down.
     * @readonly
     * @property
     * @type {number}
     */
    this.numRows = numRows;

    // Scaling factors.
    this.hscale = hscale;
    this.vscale = vscale;

    this.font = font || new TextModeFont();

    // Canvas.
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.tabIndex = 0;
      canvas.width = this.realPixelWidth;
      canvas.height = this.realPixelHeight;
    }
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;

    // Indexed color palette.
    // Fg and bg refer to a palette index.
    // Palette entries are arrays of RGBA.
    // @FIXME this is pretty gross.
    this.palette = palette || textModePalette;
    this.bg = 0;
    this.fg = 1;

    // Render events - these are off by default.
    this.events = {
      'BeforeRender': false,
      'BeforeRenderChar': false,
      'BeforeRenderCharRow': false
    };

    // Initialise the text and imagedata buffers and set up the render loop.
    this.textBuffer = new Array(this.numCols * this.numRows);
    this.pos = 0;

    // Hidden canvas used for rendering and scaling.
    const [w, h] = [this.font.width, this.font.height];
    this.canvasBuffer = new Array(this.textBuffer.length).fill(0).map(_ => {
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      const imageData = ctx.createImageData(w, h);
      const buf = new ArrayBuffer(imageData.data.length);
      const buf8 = new Uint8ClampedArray(buf);
      const buf32 = new Uint32Array(buf);
      return {
        canvas,
        ctx,
        imageData,
        buf8,
        buf32
      };
    });
    this.cls();
    this[render]();
  }

  /**
   * The height of the textmode object without scaling applied.
   * @type {number}
   */
  get virtualPixelHeight () {
    return this.font.height * this.numRows;
  }

  /**
   * The width of the textmode object without scaling applied.
   * @type {number}
   */
  get virtualPixelWidth () {
    return this.font.width * this.numCols;
  }

  /**
   * The height of the textmode object with scaling applied.
   * @type {number}
   */
  get realPixelWidth () {
    return this.virtualPixelWidth * this.hscale;
  }

  /**
   * The width of the textmode object with scaling applied.
   * @type {number}
   */
  get realPixelHeight () {
    return this.virtualPixelHeight * this.vscale;
  }

  get loc () {
    const pos = this.pos;
    return {
      row: this[rowFromPos](pos),
      col: this[colFromPos](pos),
      pos
    };
  }

  /**
   * Sets the cursor location withinthe textBuffer.
   * Values less than or greater then the viewport size - 1 will be
   * constrained to the viewport.
   *
   * @param {number|[number]|{x:number, y:number}|{row:number, col:number}} val - Absolute position or row and column.
   */
  set loc (val) {
    let rowOrPos;
    let col = null;
    if (val instanceof Array && val.length === 2) {
      [rowOrPos, col] = val;
    } else if (val.hasOwnProperty('row') && val.hasOwnProperty('col')) {
      ({row: rowOrPos, col} = val);
    } else if (val.hasOwnProperty('x') && val.hasOwnProperty('y')) {
      ({y: rowOrPos, x: col} = val);
    } else {
      rowOrPos = val;
    }
    this.pos = (col === null)
      ? numberInRange(rowOrPos, this.textBuffer.length - 1)
      : numberInRange(rowOrPos, this.numRows - 1) * this.numCols + numberInRange(col, this.numCols - 1);
  }

  set debug (flag) {
    this._debug = !!flag;
    if (this._debug) {
      this._attachFPSMonitor();
    } else {
      this._detachFPSMonitor();
    }
  }

  /**
   * Fills the viewport with the background colour and moves the cursor to 0,0.
   * @return {TextMode} - TextMode instance for chaining.
   */
  cls () {
    this.textBuffer.fill({bg: this.bg});
    this.loc = 0;
    return this;
  }

  /**
   * Move the text insertion point to the first column of the next line.
   * @return {TextMode} instance for chaining.
   */
  newLine () {
    this.cr();
    this.lf();
    return this;
  }

  /**
   * Move the text insertion point to the first column of the next line.
   * Alias for `newLine()`.
   * @return {TextMode} instance for chaining.
   */
  crlf () {
    this.newLine();
    return this;
  }

  /**
   * Move the text insertion point to the first column of the current line.
   * @return {TextMode} instance for chaining.
   */
  cr () {
    this.loc = this[rowFromPos](this.pos) * this.numCols;
    return this;
  }

  /**
   * Move the text insertion point to the same column on the next line.
   * @return {TextMode} instance for chaining.
   */
  lf () {
    this.loc = this.loc.pos + this.numCols;
    return this;
  }

  inv () {
    [this.fg, this.bg] = [this.bg, this.fg];
    return this;
  }

  print (text = '') {
    text.split('').forEach(chr => {
      const asciiCode = chr.charCodeAt() || 0;
      this.chr(asciiCode);
    });
    return this;
  }

  println (text = '') {
    if (this.loc.col !== 0) {
      this.newLine();
    }
    this.print(text);
    return this.newLine();
  }

  center (text = '', fullWidth = false) {
    if (fullWidth) {
      return this.println(text.padStart(Math.floor(this.numCols / 2 + text.length / 2)).padEnd(this.numCols));
    } else {
      this.loc = [this.loc.row, Math.floor(this.numCols / 2 - text.length / 2)];
      return this.print(text).newLine();
    }
  }

  chr (asciiCode) {
    if (asciiCode < 32) {
      this[escape](asciiCode);
    } else {
      this.textBuffer[this.pos] = {asciiCode, fg: this.fg, bg: this.bg};
      this[forward]();
      return this;
    }
  }

  beep (duration = 0.3, freq = 440, amp = 0.5) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = AudioContext && new AudioContext();
    if (audioContext) {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.connect(gain);
      osc.value = freq;
      gain.connect(audioContext.destination);
      gain.gain.value = amp;
      osc.start(audioContext.currentTime);
      osc.stop(audioContext.currentTime + duration);
    }
    return this;
  }

  backspace (stop = 0) {
    if (this.pos - 1 >= stop) {
      this.pos -= 1;
      this.textBuffer[this.pos].asciiCode = 0;
    } else {
      this.beep();
    }
    return this;
  }

  inputln (prompt = '> ') {
    if (this.col !== 0) {
      this.newLine();
    }
    return this.input(prompt);
  }

  getKey () {
    this.canvas.focus();
    return new Promise(resolve => {
      const textModeKeyListener = e => {
        e.preventDefault();
        this.canvas.removeEventListener('keydown', textModeKeyListener);
        resolve(e);
      };
      this.canvas.addEventListener('keydown', textModeKeyListener);
    });
  }

  input (prompt = '> ') {
    const saveCursor = this.cursor;
    this.cursor = true;
    this.print(prompt);
    return new Promise(resolve => {
      let input = '';
      const start = this.pos;
      const nextKey = (e = {}) => {
        if (e.key && e.key.length === 1) {
          input += e.key;
          this.print(e.key);
        } else {
          switch (e.keyCode) {
            case 8:
              this.backspace(start);
              input = input.slice(0, -1);
              break;
            case 13:
              this.crlf();
              this.cursor = saveCursor;
              resolve(input);
              return;
          }
        }
        this.getKey().then(nextKey);
      };
      nextKey();
    });
  }

  [escape] (asciiCode) {
    switch (asciiCode) {
      case 7:
        this.beep();
        break;
      case 8:
        this.backspace();
        break;
      case 10:
        this.lf();
        break;
      case 13:
        this.cr();
        break;
    }
  }

  [setPos] (row, col) {
    this.pos = (row * this.numCols) + col;
  }

  [rowFromPos] (pos) {
    return pos / this.numCols | 0;
  }

  [colFromPos] (pos) {
    return pos % this.numCols;
  }

  [forward] (n = 1) {
    this.pos += n;
    while (this.pos >= this.textBuffer.length) {
      this[scrollDown]();
    }
  }

  /*
   * @TODO: implement
   */
  [scrollDown] (n = 1) {
    this.pos = this.textBuffer.length - 1;
  }

  [render] (timestamp) {
    if (this._debug && this._fpsMonitor) {
      this._updateFPSMonitor(timestamp);
    }
    const args = {textBuffer: this.textBuffer.slice()};
    this[dispatchEvent]('BeforeRender', {args});
    args.textBuffer.forEach(({asciiCode, fg, bg}, pos) => {
      this[renderChar](asciiCode, fg, bg, pos);
    });
    window.requestAnimationFrame(this[render].bind(this));
  }

  [renderChar] (asciiCode, fg, bg, textBufferPos) {
    const cursor = this.cursor && (this.pos === textBufferPos);
    if (cursor) {
      [fg, bg] = [bg, this.fg];
    }
    let args = {asciiCode, fg, bg, textBufferPos, cursor};
    this[dispatchEvent]('BeforeRenderChar', {args});
    const canvasBuffer = this.canvasBuffer[textBufferPos];
    let pixelPos = 0;
    this.font.chr(args.asciiCode).forEach((charRow, charRowIndex) => {
      args = {...args, charRowIndex};
      this[dispatchEvent]('BeforeRenderCharRow', {args});
      for (let mask = 1 << (this.font.width - 1); mask; mask >>= 1) {
        const pixel = this.palette[charRow & mask ? args.fg : args.bg];
        canvasBuffer.buf32[pixelPos++] = pixel;
      }
    });
    canvasBuffer.imageData.data.set(canvasBuffer.buf8);
    canvasBuffer.ctx.putImageData(canvasBuffer.imageData, 0, 0);
    const row = this[rowFromPos](textBufferPos);
    const col = this[colFromPos](textBufferPos);
    const dw = this.font.width * this.hscale;
    const dh = this.font.height * this.vscale;
    const dx = col * dw;
    const dy = row * dh;
    this.ctx.drawImage(canvasBuffer.canvas, dx, dy, dw, dh);
  }

  [dispatchEvent] (name, extraDetail = {}) {
    if (this.events[name]) {
      const detail = Object.assign({textMode: this}, extraDetail);
      this.canvas.dispatchEvent(new window.CustomEvent(`textMode${name}`, {detail}));
    }
  }

  _attachFPSMonitor () {
    if (!this._fpsMonitor) {
      this._fpsMonitor = document.createElement('input');
      document.body.appendChild(this._fpsMonitor);
    }
  }

  _detachFPSMonitor () {
    if (this._fpsMonitor) {
      this._fpsMonitor.parentNode.removeChild(this._fpsMonitor);
      delete this._fpsMonitor;
    }
  }

  _updateFPSMonitor (timestamp) {
    const elapsed = timestamp - (this._lastRenderTime || 0);
    this._lastRenderTime = timestamp;
    this._fpsMonitor.value = (1000 / elapsed) | 0;
  }
}

export {TextMode, TextModeFont, textModePalette};
