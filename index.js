/**
textmode

font.load
font.save

loadFont
setPalette
setFgColor
setBgColor
print
moveTo
printAt
cls
chr


OK:
- keep a matrix?array? of chars and colors - render it every frame
- this enables:
  - colour cycling
  - dynamic font changes
- move the font stuff into a class and use a getter for the access
- use this to implement side-effect chars e.g. beep and cr.
*/

function defineFont() {
  let font = [];
  font[32] = [
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000
  ];
  font[33] = [
    0b00011000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00000000,
    0b00011000,
    0b00011000,
    0b00000000
  ];
  font[34] = [
    0b01101100,
    0b01101100,
    0b01101100,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000
  ];
  font[35] = [
    0b01101100,
    0b01101100,
    0b11111110,
    0b01101100,
    0b11111110,
    0b01101100,
    0b01101100,
    0b00000000
  ];
  font[36] = [
    0b00011000,
    0b00111110,
    0b01011000,
    0b00111100,
    0b00011010,
    0b01111100,
    0b00011000,
    0b00000000
  ];
  font[37] = [
    0b00000000,
    0b11000110,
    0b11001100,
    0b00011000,
    0b00110000,
    0b01100110,
    0b11000110,
    0b00000000
  ];
  font[38] = [
    0b00111000,
    0b01101100,
    0b00111000,
    0b01110110,
    0b11011100,
    0b11001100,
    0b01110110,
    0b00000000
  ];
  font[39] = [
    0b00011000,
    0b00011000,
    0b00110000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000
  ];
  font[40] = [
    0b00001100,
    0b00011000,
    0b00110000,
    0b00110000,
    0b00110000,
    0b00011000,
    0b00001100,
    0b00000000
  ];
  font[41] = [
    0b00110000,
    0b00011000,
    0b00001100,
    0b00001100,
    0b00001100,
    0b00011000,
    0b00110000,
    0b00000000
  ];
  font[42] = [
    0b00000000,
    0b01100110,
    0b00111100,
    0b11111111,
    0b00111100,
    0b01100110,
    0b00000000,
    0b00000000
  ];
  font[43] = [
    0b00000000,
    0b00011000,
    0b00011000,
    0b01111110,
    0b00011000,
    0b00011000,
    0b00000000,
    0b00000000
  ];
  font[44] = [
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00011000,
    0b00011000,
    0b00110000
  ];
  font[45] = [
    0b00000000,
    0b00000000,
    0b00000000,
    0b01111110,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000
  ];
  font[46] = [
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00011000,
    0b00011000,
    0b00000000
  ];
  font[47] = [
    0b00000110,
    0b00001100,
    0b00011000,
    0b00110000,
    0b01100000,
    0b11000000,
    0b10000000,
    0b00000000
  ];
  font[48] = [
    0b01111100,
    0b11000110,
    0b11001110,
    0b11010110,
    0b11100110,
    0b11000110,
    0b01111100,
    0b00000000
  ];
  font[49] = [
    0b00011000,
    0b00111000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b01111110,
    0b00000000
  ];
  font[50] = [
    0b00111100,
    0b01100110,
    0b00000110,
    0b00111100,
    0b01100000,
    0b01100110,
    0b01111110,
    0b00000000
  ];
  font[51] = [
    0b00111100,
    0b01100110,
    0b00000110,
    0b00011100,
    0b00000110,
    0b01100110,
    0b00111100,
    0b00000000
  ];
  font[52] = [
    0b00011100,
    0b00111100,
    0b01101100,
    0b11001100,
    0b11111110,
    0b00001100,
    0b00011110,
    0b00000000
  ];
  font[53] = [
    0b01111110,
    0b01100010,
    0b01100000,
    0b00111100,
    0b00000110,
    0b01100110,
    0b00111100,
    0b00000000
  ];
  font[54] = [
    0b00111100,
    0b01100110,
    0b01100000,
    0b01111100,
    0b01100110,
    0b01100110,
    0b00111100,
    0b00000000
  ];
  font[55] = [
    0b01111110,
    0b01100110,
    0b00000110,
    0b00001100,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00000000
  ];
  font[56] = [
    0b00111100,
    0b01100110,
    0b01100110,
    0b00111100,
    0b01100110,
    0b01100110,
    0b00111100,
    0b00000000
  ];
  font[57] = [
    0b00111100,
    0b01100110,
    0b01100110,
    0b00111110,
    0b00000110,
    0b01100110,
    0b00111100,
    0b00000000
  ];
  font[58] = [
    0b00000000,
    0b00000000,
    0b00011000,
    0b00011000,
    0b00000000,
    0b00011000,
    0b00011000,
    0b00000000
  ];
  font[59] = [
    0b00000000,
    0b00000000,
    0b00011000,
    0b00011000,
    0b00000000,
    0b00011000,
    0b00011000,
    0b00110000
  ];
  font[60] = [
    0b00001100,
    0b00011000,
    0b00110000,
    0b01100000,
    0b00110000,
    0b00011000,
    0b00001100,
    0b00000000
  ];
  font[61] = [
    0b00000000,
    0b00000000,
    0b01111110,
    0b00000000,
    0b00000000,
    0b01111110,
    0b00000000,
    0b00000000
  ];
  font[62] = [
    0b01100000,
    0b00110000,
    0b00011000,
    0b00001100,
    0b00011000,
    0b00110000,
    0b01100000,
    0b00000000
  ];
  font[63] = [
    0b00111100,
    0b01100110,
    0b01100110,
    0b00001100,
    0b00011000,
    0b00000000,
    0b00011000,
    0b00000000
  ];
  font[64] = [
    0b01111100,
    0b11000110,
    0b11011110,
    0b11011110,
    0b11011110,
    0b11000000,
    0b01111100,
    0b00000000
  ];
  font[65] = [
    0b00011000,
    0b00111100,
    0b01100110,
    0b01100110,
    0b01111110,
    0b01100110,
    0b01100110,
    0b00000000
  ];
  font[66] = [
    0b11111100,
    0b01100110,
    0b01100110,
    0b01111100,
    0b01100110,
    0b01100110,
    0b11111100,
    0b00000000
  ];
  font[67] = [
    0b00111100,
    0b01100110,
    0b11000000,
    0b11000000,
    0b11000000,
    0b01100110,
    0b00111100,
    0b00000000
  ];
  font[68] = [
    0b11111000,
    0b01101100,
    0b01100110,
    0b01100110,
    0b01100110,
    0b01101100,
    0b11111000,
    0b00000000
  ];
  font[69] = [
    0b11111110,
    0b01100010,
    0b01101000,
    0b01111000,
    0b01101000,
    0b01100010,
    0b11111110,
    0b00000000
  ];
  font[70] = [
    0b11111110,
    0b01100010,
    0b01101000,
    0b01111000,
    0b01101000,
    0b01100000,
    0b11110000,
    0b00000000
  ];
  font[71] = [
    0b00111100,
    0b01100110,
    0b11000000,
    0b11000000,
    0b11001110,
    0b01100110,
    0b00111110,
    0b00000000
  ];
  font[72] = [
    0b01100110,
    0b01100110,
    0b01100110,
    0b01111110,
    0b01100110,
    0b01100110,
    0b01100110,
    0b00000000
  ];
  font[73] = [
    0b01111110,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b01111110,
    0b00000000
  ];
  font[74] = [
    0b00011110,
    0b00001100,
    0b00001100,
    0b00001100,
    0b11001100,
    0b11001100,
    0b01111000,
    0b00000000
  ];
  font[75] = [
    0b11100110,
    0b01100110,
    0b01101100,
    0b01111000,
    0b01101100,
    0b01100110,
    0b11100110,
    0b00000000
  ];
  font[76] = [
    0b11110000,
    0b01100000,
    0b01100000,
    0b01100000,
    0b01100010,
    0b01100110,
    0b11111110,
    0b00000000
  ];
  font[77] = [
    0b11000110,
    0b11101110,
    0b11111110,
    0b11111110,
    0b11010110,
    0b11000110,
    0b11000110,
    0b00000000
  ];
  font[78] = [
    0b11000110,
    0b11100110,
    0b11110110,
    0b11011110,
    0b11001110,
    0b11000110,
    0b11000110,
    0b00000000
  ];
  font[79] = [
    0b00111000,
    0b01101100,
    0b11000110,
    0b11000110,
    0b11000110,
    0b01101100,
    0b00111000,
    0b00000000
  ];
  font[80] = [
    0b11111100,
    0b01100110,
    0b01100110,
    0b01111100,
    0b01100000,
    0b01100000,
    0b11110000,
    0b00000000
  ];
  font[81] = [
    0b00111000,
    0b01101100,
    0b11000110,
    0b11000110,
    0b11011010,
    0b11001100,
    0b01110110,
    0b00000000
  ];
  font[82] = [
    0b11111100,
    0b01100110,
    0b01100110,
    0b01111100,
    0b01101100,
    0b01100110,
    0b11100110,
    0b00000000
  ];
  font[83] = [
    0b00111100,
    0b01100110,
    0b01100000,
    0b00111100,
    0b00000110,
    0b01100110,
    0b00111100,
    0b00000000
  ];
  font[84] = [
    0b01111110,
    0b01011010,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00111100,
    0b00000000
  ];
  font[85] = [
    0b01100110,
    0b01100110,
    0b01100110,
    0b01100110,
    0b01100110,
    0b01100110,
    0b00111100,
    0b00000000
  ];
  font[86] = [
    0b01100110,
    0b01100110,
    0b01100110,
    0b01100110,
    0b01100110,
    0b00111100,
    0b00011000,
    0b00000000
  ];
  font[87] = [
    0b11000110,
    0b11000110,
    0b11000110,
    0b11010110,
    0b11111110,
    0b11101110,
    0b11000110,
    0b00000000
  ];
  font[88] = [
    0b11000110,
    0b01101100,
    0b00111000,
    0b00111000,
    0b01101100,
    0b11000110,
    0b11000110,
    0b00000000
  ];
  font[89] = [
    0b01100110,
    0b01100110,
    0b01100110,
    0b00111100,
    0b00011000,
    0b00011000,
    0b00111100,
    0b00000000
  ];
  font[90] = [
    0b11111110,
    0b11000110,
    0b10001100,
    0b00011000,
    0b00110010,
    0b01100110,
    0b11111110,
    0b00000000
  ];
  font[91] = [
    0b01111000,
    0b01100000,
    0b01100000,
    0b01100000,
    0b01100000,
    0b01100000,
    0b01111000,
    0b00000000
  ];
  font[92] = [
    0b11000000,
    0b01100000,
    0b00110000,
    0b00011000,
    0b00001100,
    0b00000110,
    0b00000010,
    0b00000000
  ];
  font[93] = [
    0b01111000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b01111000,
    0b00000000
  ];
  font[94] = [
    0b00010000,
    0b00111000,
    0b01101100,
    0b11000110,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000
  ];
  font[95] = [
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b11111111
  ];
  font[96] = [
    0b00110000,
    0b00011000,
    0b00001100,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000
  ];
  font[97] = [
    0b00000000,
    0b00000000,
    0b01111000,
    0b00001100,
    0b01111100,
    0b11001100,
    0b01110110,
    0b00000000
  ];
  font[98] = [
    0b11100000,
    0b01100000,
    0b01111100,
    0b01100110,
    0b01100110,
    0b01100110,
    0b11011100,
    0b00000000
  ];
  font[99] = [
    0b00000000,
    0b00000000,
    0b00111100,
    0b01100110,
    0b01100000,
    0b01100110,
    0b00111100,
    0b00000000
  ];
  font[100] = [
    0b00011100,
    0b00001100,
    0b01111100,
    0b11001100,
    0b11001100,
    0b11001100,
    0b01110110,
    0b00000000
  ];
  font[101] = [
    0b00000000,
    0b00000000,
    0b00111100,
    0b01100110,
    0b01111110,
    0b01100000,
    0b00111100,
    0b00000000
  ];
  font[102] = [
    0b00011100,
    0b00110110,
    0b00110000,
    0b01111000,
    0b00110000,
    0b00110000,
    0b01111000,
    0b00000000
  ];
  font[103] = [
    0b00000000,
    0b00000000,
    0b00111110,
    0b01100110,
    0b01100110,
    0b00111110,
    0b00000110,
    0b01111100
  ];
  font[104] = [
    0b11100000,
    0b01100000,
    0b01101100,
    0b01110110,
    0b01100110,
    0b01100110,
    0b11100110,
    0b00000000
  ];
  font[105] = [
    0b00011000,
    0b00000000,
    0b00111000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00111100,
    0b00000000
  ];
  font[106] = [
    0b00000110,
    0b00000000,
    0b00001110,
    0b00000110,
    0b00000110,
    0b01100110,
    0b01100110,
    0b00111100
  ];
  font[107] = [
    0b11100000,
    0b01100000,
    0b01100110,
    0b01101100,
    0b01111000,
    0b01101100,
    0b11100110,
    0b00000000
  ];
  font[108] = [
    0b00111000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00111100,
    0b00000000
  ];
  font[109] = [
    0b00000000,
    0b00000000,
    0b01101100,
    0b11111110,
    0b11010110,
    0b11010110,
    0b11000110,
    0b00000000
  ];
  font[110] = [
    0b00000000,
    0b00000000,
    0b11011100,
    0b01100110,
    0b01100110,
    0b01100110,
    0b01100110,
    0b00000000
  ];
  font[111] = [
    0b00000000,
    0b00000000,
    0b00111100,
    0b01100110,
    0b01100110,
    0b01100110,
    0b00111100,
    0b00000000
  ];
  font[112] = [
    0b00000000,
    0b00000000,
    0b11011100,
    0b01100110,
    0b01100110,
    0b01111100,
    0b01100000,
    0b11110000
  ];
  font[113] = [
    0b00000000,
    0b00000000,
    0b01110110,
    0b11001100,
    0b11001100,
    0b01111100,
    0b00001100,
    0b00011110
  ];
  font[114] = [
    0b00000000,
    0b00000000,
    0b11011100,
    0b01100110,
    0b01100000,
    0b01100000,
    0b11110000,
    0b00000000
  ];
  font[115] = [
    0b00000000,
    0b00000000,
    0b00111100,
    0b01100000,
    0b00111100,
    0b00000110,
    0b00111100,
    0b00000000
  ];
  font[116] = [
    0b00110000,
    0b00110000,
    0b01111100,
    0b00110000,
    0b00110000,
    0b00110110,
    0b00011100,
    0b00000000
  ];
  font[117] = [
    0b00000000,
    0b00000000,
    0b01100110,
    0b01100110,
    0b01100110,
    0b01100110,
    0b00111110,
    0b00000000
  ];
  font[118] = [
    0b00000000,
    0b00000000,
    0b01100110,
    0b01100110,
    0b01100110,
    0b00111100,
    0b00011000,
    0b00000000
  ];
  font[119] = [
    0b00000000,
    0b00000000,
    0b11000110,
    0b11010110,
    0b11010110,
    0b11111110,
    0b01101100,
    0b00000000
  ];
  font[120] = [
    0b00000000,
    0b00000000,
    0b11000110,
    0b01101100,
    0b00111000,
    0b01101100,
    0b11000110,
    0b00000000
  ];
  font[121] = [
    0b00000000,
    0b00000000,
    0b01100110,
    0b01100110,
    0b01100110,
    0b00111110,
    0b00000110,
    0b01111100
  ];
  font[122] = [
    0b00000000,
    0b00000000,
    0b01111110,
    0b01001100,
    0b00011000,
    0b00110010,
    0b01111110,
    0b00000000
  ];
  font[123] = [
    0b00001110,
    0b00011000,
    0b00011000,
    0b01110000,
    0b00011000,
    0b00011000,
    0b00001110,
    0b00000000
  ];
  font[124] = [
    0b00011000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00011000,
    0b00000000
  ];
  font[125] = [
    0b01110000,
    0b00011000,
    0b00011000,
    0b00001110,
    0b00011000,
    0b00011000,
    0b01110000,
    0b00000000
  ];
  font[126] = [
    0b01110110,
    0b11011100,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000,
    0b00000000
  ];
  return font;
}

const font = defineFont();

const palette = [//{
  //AARRGGBB
  0xFF000000,
  0xFFFFFFFF,
  0xFF0000FF,
  0xFF00FF00,
  0xFFFF0000,
  0xFFFF00FF,
  0xFF0000FF,
  0xFFFFFF00
];//}

class TextMode {
  constructor (ctx, x=0, y=0, pixelWidth=320, pixelHeight=240, scale=2) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.pixelWidth = pixelWidth;
    this.pixelHeight = pixelHeight;
    this.scale = scale;

    // Font size is fixed for now. @FIXME.
    this.fontWidth = 8;
    this.fontHeight = 8;

    // Number of chars across and down.
    this.textWidth = this.pixelWidth / this.fontWidth;
    this.textHeight = this.pixelHeight / this.fontHeight;
    
    // Total size in virtual (scaled) pixels.
    this.size = pixelWidth * pixelHeight;
    
    // @FIXME this is pretty gross.
    this.font = font;

    // Indexed color palette.
    // Fg and bg refer to a palette index.
    // Palette entries are arrays of RGBA.
    // @FIXME this is pretty gross.
    this.palette = palette;
    this.bg = 0;
    this.fg = 1;

    // Initialise the text and imagedata buffers and set up the render loop.
    this.textBuffer = new Array(this.textWidth * this.textHeight);
    this.imageData = this.ctx.createImageData(this.pixelWidth * scale, this.pixelHeight * scale);
    const buf = new ArrayBuffer(this.imageData.data.length);
    this.buf8 = new Uint8ClampedArray(buf);
    this.buf32 = new Uint32Array(buf);
    this.cls();
    this._render();
  }

  /**
   * Fills the viewport with the background colour and moves the cursor to 0,0.
   */
  cls () {
    this.textBuffer.fill({bg: this.bg});
    this.moveTo(0, 0);
  }

  /**
   * Moves the cursor to the specified row and column.
   * Values less than  or greater then the viewport size - 1 will be
   * constrained to the viewport.
   */
  moveTo (row, col) {
    let _row = Math.max(0, Math.min(this.textWidth - 1, row));
    let _col = Math.max(0, Math.min(this.textHeight - 1, col));
    this.pos = (_row * this.textWidth) + _col;
  }

  print (text) {
    text.split('').forEach(chr => {
      const asciiCode = chr.charCodeAt();
      this.textBuffer[this.pos] = {asciiCode, fg: this.fg, bg: this.bg};
      this._forward();
    });
  }

  _forward (n=1) {
    this.pos += n;
    while (this.pos >= this.textBuffer.length) {
      this._scrollDown();
    }
  }

  /*
   * @TODO: implement
   */
  _scrollDown (n=1) {
    this.pos = this.textBuffer.length - 1;
  }

  /**
   * Sets a virtual (scaled) pixel.
   */
  _setPixel (pos, pixel, scale) {
    scale = scale || this.scale;
    if (scale > 1) {
      const scaledPos = pos * scale;
      const scaledPixelWidth = scale * this.pixelWidth;
      for (let _x = 0; _x < scale; _x++) {
        for (let _y = 0; _y < scale; _y++) {
          let _row = Math.floor(pos / this.pixelWidth);
          let _pos = scaledPos + ((_row - 1 + _y) * scaledPixelWidth) + _x;
          this._setPixel(_pos, pixel, 1)
        }
      }
    } else {
      this.buf32[pos] = pixel;
    }
  }

  _render () {
    this.textBuffer.forEach(({asciiCode, fg, bg}, pos) => {
      const charData = this.font[asciiCode || 0] || (new Array(this.fontWidth)).fill(0);
      this._renderChar(charData, fg, bg, pos);
    });
    this.imageData.data.set(this.buf8);
    this.ctx.putImageData(this.imageData, this.x, this.y);
    window.requestAnimationFrame(this._render.bind(this));
  }

  _renderChar (charData, fg, bg, textBufferPos) {
    const {textWidth, fontWidth, pixelWidth, fontHeight} = this;
    const textRow = Math.floor(textBufferPos / textWidth);
    const textCol = textBufferPos % textWidth;
    const pixelOrigin = (textCol * fontWidth) + (textRow * pixelWidth * fontHeight);
    charData.forEach((charRow, charRowIndex) => {
      let pixelPos = pixelOrigin + (charRowIndex * pixelWidth);
      for (let mask = 1 << (fontWidth - 1); mask; mask >>= 1) {
        const pixel = this.palette[charRow & mask ? fg : bg];
        this._setPixel(pixelPos++, pixel);
      }
    });

  }
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var tm = new TextMode(ctx);

for (let i = 32; i < 127; i++) {
//   tm.bg = i % 8;
//   tm.fg = (i + 1) % 8;
  tm.print(String.fromCharCode(i));
}


