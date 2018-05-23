/**
textmode

OK:
- font
  - implement CRLF
  - proper support for different sizes - e.g. 7x5
- palette
  - class for palette - pass into constructor
- render
  - create canvas dynamically
  - render callbacks
  - use diff/dirty to rerender only when needed.
*/

class TextModeFont {
  constructor () {
    this.defineFont();
  }
  chr (charCode) {
    return this.data[charCode] || new Uint8ClampedArray(this.height);
  }
  _beepFunc () {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = AudioContext && new AudioContext();
    return function beep () {
      if (!audioContext) return;
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.connect(gain);
      osc.value = 440;
      gain.connect(audioContext.destination);
      gain.gain.value = 0.5;
      osc.start(audioContext.currentTime);
      osc.stop(audioContext.currentTime + 0.3);
    }
  }
  defineEscapeChars () {
    this.data[7] = this._beepFunc();
    this.data[10] = tm => tm.lf();
    this.data[13] = tm => tm.cr();
  }
  defineFont () {
    this.width = 8;
    this.height = 8;
    this.data = [];
    this.defineEscapeChars();
    this.data[32] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000
    );
    this.data[33] = Uint8ClampedArray.of(
      0b00011000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00000000,
      0b00011000,
      0b00011000,
      0b00000000
    );
    this.data[34] = Uint8ClampedArray.of(
      0b01101100,
      0b01101100,
      0b01101100,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000
    );
    this.data[35] = Uint8ClampedArray.of(
      0b01101100,
      0b01101100,
      0b11111110,
      0b01101100,
      0b11111110,
      0b01101100,
      0b01101100,
      0b00000000
    );
    this.data[36] = Uint8ClampedArray.of(
      0b00011000,
      0b00111110,
      0b01011000,
      0b00111100,
      0b00011010,
      0b01111100,
      0b00011000,
      0b00000000
    );
    this.data[37] = Uint8ClampedArray.of(
      0b00000000,
      0b11000110,
      0b11001100,
      0b00011000,
      0b00110000,
      0b01100110,
      0b11000110,
      0b00000000
    );
    this.data[38] = Uint8ClampedArray.of(
      0b00111000,
      0b01101100,
      0b00111000,
      0b01110110,
      0b11011100,
      0b11001100,
      0b01110110,
      0b00000000
    );
    this.data[39] = Uint8ClampedArray.of(
      0b00011000,
      0b00011000,
      0b00110000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000
    );
    this.data[40] = Uint8ClampedArray.of(
      0b00001100,
      0b00011000,
      0b00110000,
      0b00110000,
      0b00110000,
      0b00011000,
      0b00001100,
      0b00000000
    );
    this.data[41] = Uint8ClampedArray.of(
      0b00110000,
      0b00011000,
      0b00001100,
      0b00001100,
      0b00001100,
      0b00011000,
      0b00110000,
      0b00000000
    );
    this.data[42] = Uint8ClampedArray.of(
      0b00000000,
      0b01100110,
      0b00111100,
      0b11111111,
      0b00111100,
      0b01100110,
      0b00000000,
      0b00000000
    );
    this.data[43] = Uint8ClampedArray.of(
      0b00000000,
      0b00011000,
      0b00011000,
      0b01111110,
      0b00011000,
      0b00011000,
      0b00000000,
      0b00000000
    );
    this.data[44] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00011000,
      0b00011000,
      0b00110000
    );
    this.data[45] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b00000000,
      0b01111110,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000
    );
    this.data[46] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00011000,
      0b00011000,
      0b00000000
    );
    this.data[47] = Uint8ClampedArray.of(
      0b00000110,
      0b00001100,
      0b00011000,
      0b00110000,
      0b01100000,
      0b11000000,
      0b10000000,
      0b00000000
    );
    this.data[48] = Uint8ClampedArray.of(
      0b01111100,
      0b11000110,
      0b11001110,
      0b11010110,
      0b11100110,
      0b11000110,
      0b01111100,
      0b00000000
    );
    this.data[49] = Uint8ClampedArray.of(
      0b00011000,
      0b00111000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b01111110,
      0b00000000
    );
    this.data[50] = Uint8ClampedArray.of(
      0b00111100,
      0b01100110,
      0b00000110,
      0b00111100,
      0b01100000,
      0b01100110,
      0b01111110,
      0b00000000
    );
    this.data[51] = Uint8ClampedArray.of(
      0b00111100,
      0b01100110,
      0b00000110,
      0b00011100,
      0b00000110,
      0b01100110,
      0b00111100,
      0b00000000
    );
    this.data[52] = Uint8ClampedArray.of(
      0b00011100,
      0b00111100,
      0b01101100,
      0b11001100,
      0b11111110,
      0b00001100,
      0b00011110,
      0b00000000
    );
    this.data[53] = Uint8ClampedArray.of(
      0b01111110,
      0b01100010,
      0b01100000,
      0b00111100,
      0b00000110,
      0b01100110,
      0b00111100,
      0b00000000
    );
    this.data[54] = Uint8ClampedArray.of(
      0b00111100,
      0b01100110,
      0b01100000,
      0b01111100,
      0b01100110,
      0b01100110,
      0b00111100,
      0b00000000
    );
    this.data[55] = Uint8ClampedArray.of(
      0b01111110,
      0b01100110,
      0b00000110,
      0b00001100,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00000000
    );
    this.data[56] = Uint8ClampedArray.of(
      0b00111100,
      0b01100110,
      0b01100110,
      0b00111100,
      0b01100110,
      0b01100110,
      0b00111100,
      0b00000000
    );
    this.data[57] = Uint8ClampedArray.of(
      0b00111100,
      0b01100110,
      0b01100110,
      0b00111110,
      0b00000110,
      0b01100110,
      0b00111100,
      0b00000000
    );
    this.data[58] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b00011000,
      0b00011000,
      0b00000000,
      0b00011000,
      0b00011000,
      0b00000000
    );
    this.data[59] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b00011000,
      0b00011000,
      0b00000000,
      0b00011000,
      0b00011000,
      0b00110000
    );
    this.data[60] = Uint8ClampedArray.of(
      0b00001100,
      0b00011000,
      0b00110000,
      0b01100000,
      0b00110000,
      0b00011000,
      0b00001100,
      0b00000000
    );
    this.data[61] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b01111110,
      0b00000000,
      0b00000000,
      0b01111110,
      0b00000000,
      0b00000000
    );
    this.data[62] = Uint8ClampedArray.of(
      0b01100000,
      0b00110000,
      0b00011000,
      0b00001100,
      0b00011000,
      0b00110000,
      0b01100000,
      0b00000000
    );
    this.data[63] = Uint8ClampedArray.of(
      0b00111100,
      0b01100110,
      0b01100110,
      0b00001100,
      0b00011000,
      0b00000000,
      0b00011000,
      0b00000000
    );
    this.data[64] = Uint8ClampedArray.of(
      0b01111100,
      0b11000110,
      0b11011110,
      0b11011110,
      0b11011110,
      0b11000000,
      0b01111100,
      0b00000000
    );
    this.data[65] = Uint8ClampedArray.of(
      0b00011000,
      0b00111100,
      0b01100110,
      0b01100110,
      0b01111110,
      0b01100110,
      0b01100110,
      0b00000000
    );
    this.data[66] = Uint8ClampedArray.of(
      0b11111100,
      0b01100110,
      0b01100110,
      0b01111100,
      0b01100110,
      0b01100110,
      0b11111100,
      0b00000000
    );
    this.data[67] = Uint8ClampedArray.of(
      0b00111100,
      0b01100110,
      0b11000000,
      0b11000000,
      0b11000000,
      0b01100110,
      0b00111100,
      0b00000000
    );
    this.data[68] = Uint8ClampedArray.of(
      0b11111000,
      0b01101100,
      0b01100110,
      0b01100110,
      0b01100110,
      0b01101100,
      0b11111000,
      0b00000000
    );
    this.data[69] = Uint8ClampedArray.of(
      0b11111110,
      0b01100010,
      0b01101000,
      0b01111000,
      0b01101000,
      0b01100010,
      0b11111110,
      0b00000000
    );
    this.data[70] = Uint8ClampedArray.of(
      0b11111110,
      0b01100010,
      0b01101000,
      0b01111000,
      0b01101000,
      0b01100000,
      0b11110000,
      0b00000000
    );
    this.data[71] = Uint8ClampedArray.of(
      0b00111100,
      0b01100110,
      0b11000000,
      0b11000000,
      0b11001110,
      0b01100110,
      0b00111110,
      0b00000000
    );
    this.data[72] = Uint8ClampedArray.of(
      0b01100110,
      0b01100110,
      0b01100110,
      0b01111110,
      0b01100110,
      0b01100110,
      0b01100110,
      0b00000000
    );
    this.data[73] = Uint8ClampedArray.of(
      0b01111110,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b01111110,
      0b00000000
    );
    this.data[74] = Uint8ClampedArray.of(
      0b00011110,
      0b00001100,
      0b00001100,
      0b00001100,
      0b11001100,
      0b11001100,
      0b01111000,
      0b00000000
    );
    this.data[75] = Uint8ClampedArray.of(
      0b11100110,
      0b01100110,
      0b01101100,
      0b01111000,
      0b01101100,
      0b01100110,
      0b11100110,
      0b00000000
    );
    this.data[76] = Uint8ClampedArray.of(
      0b11110000,
      0b01100000,
      0b01100000,
      0b01100000,
      0b01100010,
      0b01100110,
      0b11111110,
      0b00000000
    );
    this.data[77] = Uint8ClampedArray.of(
      0b11000110,
      0b11101110,
      0b11111110,
      0b11111110,
      0b11010110,
      0b11000110,
      0b11000110,
      0b00000000
    );
    this.data[78] = Uint8ClampedArray.of(
      0b11000110,
      0b11100110,
      0b11110110,
      0b11011110,
      0b11001110,
      0b11000110,
      0b11000110,
      0b00000000
    );
    this.data[79] = Uint8ClampedArray.of(
      0b00111000,
      0b01101100,
      0b11000110,
      0b11000110,
      0b11000110,
      0b01101100,
      0b00111000,
      0b00000000
    );
    this.data[80] = Uint8ClampedArray.of(
      0b11111100,
      0b01100110,
      0b01100110,
      0b01111100,
      0b01100000,
      0b01100000,
      0b11110000,
      0b00000000
    );
    this.data[81] = Uint8ClampedArray.of(
      0b00111000,
      0b01101100,
      0b11000110,
      0b11000110,
      0b11011010,
      0b11001100,
      0b01110110,
      0b00000000
    );
    this.data[82] = Uint8ClampedArray.of(
      0b11111100,
      0b01100110,
      0b01100110,
      0b01111100,
      0b01101100,
      0b01100110,
      0b11100110,
      0b00000000
    );
    this.data[83] = Uint8ClampedArray.of(
      0b00111100,
      0b01100110,
      0b01100000,
      0b00111100,
      0b00000110,
      0b01100110,
      0b00111100,
      0b00000000
    );
    this.data[84] = Uint8ClampedArray.of(
      0b01111110,
      0b01011010,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00111100,
      0b00000000
    );
    this.data[85] = Uint8ClampedArray.of(
      0b01100110,
      0b01100110,
      0b01100110,
      0b01100110,
      0b01100110,
      0b01100110,
      0b00111100,
      0b00000000
    );
    this.data[86] = Uint8ClampedArray.of(
      0b01100110,
      0b01100110,
      0b01100110,
      0b01100110,
      0b01100110,
      0b00111100,
      0b00011000,
      0b00000000
    );
    this.data[87] = Uint8ClampedArray.of(
      0b11000110,
      0b11000110,
      0b11000110,
      0b11010110,
      0b11111110,
      0b11101110,
      0b11000110,
      0b00000000
    );
    this.data[88] = Uint8ClampedArray.of(
      0b11000110,
      0b01101100,
      0b00111000,
      0b00111000,
      0b01101100,
      0b11000110,
      0b11000110,
      0b00000000
    );
    this.data[89] = Uint8ClampedArray.of(
      0b01100110,
      0b01100110,
      0b01100110,
      0b00111100,
      0b00011000,
      0b00011000,
      0b00111100,
      0b00000000
    );
    this.data[90] = Uint8ClampedArray.of(
      0b11111110,
      0b11000110,
      0b10001100,
      0b00011000,
      0b00110010,
      0b01100110,
      0b11111110,
      0b00000000
    );
    this.data[91] = Uint8ClampedArray.of(
      0b01111000,
      0b01100000,
      0b01100000,
      0b01100000,
      0b01100000,
      0b01100000,
      0b01111000,
      0b00000000
    );
    this.data[92] = Uint8ClampedArray.of(
      0b11000000,
      0b01100000,
      0b00110000,
      0b00011000,
      0b00001100,
      0b00000110,
      0b00000010,
      0b00000000
    );
    this.data[93] = Uint8ClampedArray.of(
      0b01111000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b01111000,
      0b00000000
    );
    this.data[94] = Uint8ClampedArray.of(
      0b00010000,
      0b00111000,
      0b01101100,
      0b11000110,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000
    );
    this.data[95] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b11111111
    );
    this.data[96] = Uint8ClampedArray.of(
      0b00110000,
      0b00011000,
      0b00001100,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000
    );
    this.data[97] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b01111000,
      0b00001100,
      0b01111100,
      0b11001100,
      0b01110110,
      0b00000000
    );
    this.data[98] = Uint8ClampedArray.of(
      0b11100000,
      0b01100000,
      0b01111100,
      0b01100110,
      0b01100110,
      0b01100110,
      0b11011100,
      0b00000000
    );
    this.data[99] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b00111100,
      0b01100110,
      0b01100000,
      0b01100110,
      0b00111100,
      0b00000000
    );
    this.data[100] = Uint8ClampedArray.of(
      0b00011100,
      0b00001100,
      0b01111100,
      0b11001100,
      0b11001100,
      0b11001100,
      0b01110110,
      0b00000000
    );
    this.data[101] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b00111100,
      0b01100110,
      0b01111110,
      0b01100000,
      0b00111100,
      0b00000000
    );
    this.data[102] = Uint8ClampedArray.of(
      0b00011100,
      0b00110110,
      0b00110000,
      0b01111000,
      0b00110000,
      0b00110000,
      0b01111000,
      0b00000000
    );
    this.data[103] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b00111110,
      0b01100110,
      0b01100110,
      0b00111110,
      0b00000110,
      0b01111100
    );
    this.data[104] = Uint8ClampedArray.of(
      0b11100000,
      0b01100000,
      0b01101100,
      0b01110110,
      0b01100110,
      0b01100110,
      0b11100110,
      0b00000000
    );
    this.data[105] = Uint8ClampedArray.of(
      0b00011000,
      0b00000000,
      0b00111000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00111100,
      0b00000000
    );
    this.data[106] = Uint8ClampedArray.of(
      0b00000110,
      0b00000000,
      0b00001110,
      0b00000110,
      0b00000110,
      0b01100110,
      0b01100110,
      0b00111100
    );
    this.data[107] = Uint8ClampedArray.of(
      0b11100000,
      0b01100000,
      0b01100110,
      0b01101100,
      0b01111000,
      0b01101100,
      0b11100110,
      0b00000000
    );
    this.data[108] = Uint8ClampedArray.of(
      0b00111000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00111100,
      0b00000000
    );
    this.data[109] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b01101100,
      0b11111110,
      0b11010110,
      0b11010110,
      0b11000110,
      0b00000000
    );
    this.data[110] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b11011100,
      0b01100110,
      0b01100110,
      0b01100110,
      0b01100110,
      0b00000000
    );
    this.data[111] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b00111100,
      0b01100110,
      0b01100110,
      0b01100110,
      0b00111100,
      0b00000000
    );
    this.data[112] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b11011100,
      0b01100110,
      0b01100110,
      0b01111100,
      0b01100000,
      0b11110000
    );
    this.data[113] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b01110110,
      0b11001100,
      0b11001100,
      0b01111100,
      0b00001100,
      0b00011110
    );
    this.data[114] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b11011100,
      0b01100110,
      0b01100000,
      0b01100000,
      0b11110000,
      0b00000000
    );
    this.data[115] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b00111100,
      0b01100000,
      0b00111100,
      0b00000110,
      0b00111100,
      0b00000000
    );
    this.data[116] = Uint8ClampedArray.of(
      0b00110000,
      0b00110000,
      0b01111100,
      0b00110000,
      0b00110000,
      0b00110110,
      0b00011100,
      0b00000000
    );
    this.data[117] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b01100110,
      0b01100110,
      0b01100110,
      0b01100110,
      0b00111110,
      0b00000000
    );
    this.data[118] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b01100110,
      0b01100110,
      0b01100110,
      0b00111100,
      0b00011000,
      0b00000000
    );
    this.data[119] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b11000110,
      0b11010110,
      0b11010110,
      0b11111110,
      0b01101100,
      0b00000000
    );
    this.data[120] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b11000110,
      0b01101100,
      0b00111000,
      0b01101100,
      0b11000110,
      0b00000000
    );
    this.data[121] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b01100110,
      0b01100110,
      0b01100110,
      0b00111110,
      0b00000110,
      0b01111100
    );
    this.data[122] = Uint8ClampedArray.of(
      0b00000000,
      0b00000000,
      0b01111110,
      0b01001100,
      0b00011000,
      0b00110010,
      0b01111110,
      0b00000000
    );
    this.data[123] = Uint8ClampedArray.of(
      0b00001110,
      0b00011000,
      0b00011000,
      0b01110000,
      0b00011000,
      0b00011000,
      0b00001110,
      0b00000000
    );
    this.data[124] = Uint8ClampedArray.of(
      0b00011000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00011000,
      0b00000000
    );
    this.data[125] = Uint8ClampedArray.of(
      0b01110000,
      0b00011000,
      0b00011000,
      0b00001110,
      0b00011000,
      0b00011000,
      0b01110000,
      0b00000000
    );
    this.data[126] = Uint8ClampedArray.of(
      0b01110110,
      0b11011100,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000,
      0b00000000
    );
  }
}

const palette = Uint32Array.from([//{
  //AARRGGBB
  0xFF000000,
  0xFFFFFFFF,
  0xFF0000FF,
  0xFF00FF00,
  0xFFFF0000,
  0xFFFF00FF,
  0xFF0000FF,
  0xFFFFFF00
]);//}

class TextMode {
  constructor (ctx, x=0, y=0, pixelWidth=320, pixelHeight=240, scale=2) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.pixelWidth = pixelWidth;
    this.pixelHeight = pixelHeight;
    this.scale = scale;

    // Number of chars across and down.
    this.font = new TextModeFont();
    this.textWidth = this.pixelWidth / this.font.width;
    this.textHeight = this.pixelHeight / this.font.height;
    
    // Total size in virtual (scaled) pixels.
    this.size = pixelWidth * pixelHeight;

    // Indexed color palette.
    // Fg and bg refer to a palette index.
    // Palette entries are arrays of RGBA.
    // @FIXME this is pretty gross.
    this.palette = palette;
    this.bg = 0;
    this.fg = 1;

    // Initialise the text and imagedata buffers and set up the render loop.
    this.pos = 0;
    this.textBuffer = new Array(this.textWidth * this.textHeight);
    this.imageData = this.ctx.createImageData(this.pixelWidth * scale, this.pixelHeight * scale);
    const buf = new ArrayBuffer(this.imageData.data.length);
    this.buf8 = new Uint8ClampedArray(buf);
    this.buf32 = new Uint32Array(buf);
    this.cls();
    this._render();
  }

  get row () {
    return Math.floor(this.pos / this.textWidth);
  }

  set row (_row) {
    this._setPos(Math.max(0, Math.min(this.textHeight - 1, _row)), this.col);
  }

  get col() {
    return this.pos % this.textWidth;
  }

  set col (_col) {
    this._setPos(this.row, Math.max(0, Math.min(this.textWidth - 1, _col)));
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
    this.row = row;
    this.col = col;
  }

  // Move the text insertion point to the first column of the next line.
  newLine () {
    this.cr();
    this.lf();
  }

  // Move the text insertion point to the first column of the current line.
  cr () {
    this.moveTo(this.row, 0);
  }

  // Move the text insertion point to the same column on the next line.
  lf () {
    this.moveTo(this.row + 1, this.col);
  }

  print (text) {
    text.split('').forEach(chr => {
      const asciiCode = chr.charCodeAt() || 0;
      this.chr(asciiCode);
    });
  }

  chr(asciiCode) {
    const char = this.font.chr(asciiCode);
    if (typeof char === "function") {
      // side effects
      char(this);
    } else {
      this.textBuffer[this.pos] = {char, fg: this.fg, bg: this.bg};
      this._forward();
    }
  }

  /**
   * This does not check input.
   */
  _setPos(row, col) {
    this.pos = (row * this.textWidth) + col;
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
    this.textBuffer.forEach(({char, fg, bg}, pos) => {
      this._renderChar(char, fg, bg, pos);
    });
    this.imageData.data.set(this.buf8);
    this.ctx.putImageData(this.imageData, this.x, this.y);
    window.requestAnimationFrame(this._render.bind(this));
  }

  _renderChar (charData, fg, bg, textBufferPos) {
    const {textWidth, font, pixelWidth} = this;
    const textRow = Math.floor(textBufferPos / textWidth);
    const textCol = textBufferPos % textWidth;
    const pixelOrigin = (textCol * font.width) + (textRow * pixelWidth * font.height);
    (charData || font.chr(0)).forEach((charRow, charRowIndex) => {
      let pixelPos = pixelOrigin + (charRowIndex * pixelWidth);
      for (let mask = 1 << (font.width - 1); mask; mask >>= 1) {
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


