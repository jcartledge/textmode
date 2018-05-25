/**
textmode

OK:
- font
  - proper support for different sizes - e.g. 7x5 (requires perf measurement?)
  - should be passed to the tm constructor as well?
- palette
  - class for palette - pass into constructor
- tm
  + render callbacks
    + textModeBeforeRender
    + textModeBeforeRenderChar
    + textModeBeforeRenderRow
  - use diff/dirty to rerender only when needed.
  - input
- demos
  - colour cycling
  - render callbacks
- tests?
- flow/ts
*/

class TextModeFont {
  constructor () {
    this.defineFont();
  }
  chr (charCode) {
    return this.data[charCode] || new Uint8ClampedArray(this.height);
  }
  defineFont () {
    this.width = 8;
    this.height = 8;
    this.data = [];
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
  constructor (canvas, numRows=30,  numCols=40, hscale=4, vscale=4) {

    // Number of chars across and down.
    this.numCols = numCols;
    this.numRows = numRows;

    // Scaling factors.
    this.hscale = hscale;
    this.vscale = vscale;

    this.font = new TextModeFont();

    // Canvas.
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.tabIndex = 0;
      canvas.width = this.realPixelWidth;
      canvas.height = this.realPixelHeight;
    }
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    // Indexed color palette.
    // Fg and bg refer to a palette index.
    // Palette entries are arrays of RGBA.
    // @FIXME this is pretty gross.
    this.palette = palette;
    this.bg = 0;
    this.fg = 1;

    // Render events - these are off by default.
    this.events = {
      'BeforeRender': false,
      'BeforeRenderChar': false,
      'BeforeRenderCharRow': false
    };

    // Initialise the text and imagedata buffers and set up the render loop.
    this.pos = 0;
    this.textBuffer = new Array(this.numCols * this.numRows);
    this.imageData = this.ctx.createImageData(this.realPixelWidth, this.realPixelHeight);
    const buf = new ArrayBuffer(this.imageData.data.length);
    this.buf8 = new Uint8ClampedArray(buf);
    this.buf32 = new Uint32Array(buf);
    this.cls();
    this._render();
  }

  get virtualPixelHeight () {
    return this.font.height * this.numRows;
  }

  get virtualPixelWidth () {
    return this.font.width * this.numCols;
  }

  get realPixelWidth () {
    return this.virtualPixelWidth * this.hscale;
  }

  get realPixelHeight () {
    return this.virtualPixelHeight * this.vscale;
  }

  get row () {
    return Math.floor(this.pos / this.numCols);
  }

  set row (_row) {
    this._setPos(Math.max(0, Math.min(this.numRows - 1, _row)), this.col);
  }

  get col() {
    return this.pos % this.numCols;
  }

  set col (_col) {
    this._setPos(this.row, Math.max(0, Math.min(this.numCols - 1, _col)));
  }

  /**
   * Fills the viewport with the background colour and moves the cursor to 0,0.
   */
  cls () {
    this.textBuffer.fill({bg: this.bg});
    this.moveTo(0, 0);
    return this;
  }

  /**
   * Moves the cursor to the specified row and column.
   * Values less than  or greater then the viewport size - 1 will be
   * constrained to the viewport.
   */
  moveTo (row, col) {
    this.row = row;
    this.col = col;
    return this;
  }

  // Move the text insertion point to the first column of the next line.
  newLine () {
    this.cr();
    this.lf();
    return this;
  }

  crlf () {
    this.newLine();
    return this;
  }

  // Move the text insertion point to the first column of the current line.
  cr () {
    this.moveTo(this.row, 0);
    return this;
  }

  // Move the text insertion point to the same column on the next line.
  lf () {
    this.moveTo(this.row + 1, this.col);
    return this;
  }

  print (text) {
    text.split('').forEach(chr => {
      const asciiCode = chr.charCodeAt() || 0;
      this.chr(asciiCode);
    });
    return this;
  }

  println (text) {
    if (this.col !== 0) {
      this.newLine();
    }
    this.print(text);
    this.newLine();
    return this;
  }

  chr(asciiCode) {
    if (asciiCode < 32) {
      this._escape(asciiCode);
    } else {
      this.textBuffer[this.pos] = {asciiCode, fg: this.fg, bg: this.bg};
      this._forward();
      return this;
    }
  }

  beep (duration=0.3, freq=440, amp=0.5) {
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

  input (prompt='> ', cursor='_') {
    this.print(prompt);
    this.print(cursor);
    return new Promise((resolve) => {
      let input = '';
      let key = 0;
      const textModeInputListener = (e) => {
        key = e.key.charCodeAt();
        if (e.key.length === 1) {
          input += e.key;
          this.pos--;
          this.print(e.key);
          this.print(cursor);
        } else if (e.keyCode === 13) {
          this.canvas.removeEventListener('keypress', textModeInputListener);
          this.pos--;
          this.chr(32);
          this.crlf();
          resolve(input);
        }
      };
      this.canvas.addEventListener('keypress', textModeInputListener);
    });
  }

  _escape (asciiCode) {
    switch (asciiCode) {
      case 7:
        this.beep();
        break;
      case 10:
        this.lf();
        break;
      case 13:
        this.cr();
        break;
    }
  }

  /**
   * This does not check input.
   */
  _setPos(row, col) {
    this.pos = (row * this.numCols) + col;
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
   * Sets a pixel.
   */
  _setPixel (virtualPixelPos, pixel) {
    this._virtualPixelPosToRealPixels(virtualPixelPos).forEach(realPixelPos => {
      this.buf32[realPixelPos] = pixel;
    });
  }

  _render () {
    this._dispatchEvent('BeforeRender');
    this.textBuffer.forEach(({asciiCode, fg, bg}, pos) => {
      this._renderChar(asciiCode, fg, bg, pos);
    });
    this.imageData.data.set(this.buf8);
    this.ctx.putImageData(this.imageData, 0, 0);
    window.requestAnimationFrame(this._render.bind(this));
  }

  _renderChar (asciiCode, fg, bg, textBufferPos) {
    let args = {asciiCode, fg, bg, textBufferPos}
    this._dispatchEvent('BeforeRenderChar', {args});
    const virtualPixelOrigin = this._textBufferPosToVirtualPixelPos(args.textBufferPos);
    this.font.chr(args.asciiCode).forEach((charRow, charRowIndex) => {
      args = {...args, charRowIndex};
      this._dispatchEvent('BeforeRenderCharRow', {args});
      let pixelPos = virtualPixelOrigin + (charRowIndex * this.virtualPixelWidth);
      for (let mask = 1 << (this.font.width - 1); mask; mask >>= 1) {
        const pixel = this.palette[charRow & mask ? args.fg : args.bg];
        this._setPixel(pixelPos++, pixel);
      }
    });
  }

  _textBufferPosToVirtualPixelPos (textBufferPos) {
    const {numCols, font, virtualPixelWidth} = this;
    const textRow = Math.floor(textBufferPos / numCols);
    const textCol = textBufferPos % numCols;
    return (textCol * font.width) + (textRow * virtualPixelWidth * font.height);
  }

  _virtualPixelPosToRealPixels (virtualPixelPos) {
    const {hscale, vscale, virtualPixelWidth, realPixelWidth} = this;
    const realPixels = [];
    const virtualPixelRow = Math.floor(virtualPixelPos / virtualPixelWidth);
    const realOrigin = virtualPixelPos * hscale + (realPixelWidth * virtualPixelRow * (vscale - 1));
    for (let x = 0; x < hscale; x++) {
      for (let y = 0; y < vscale; y++) {
        realPixels.push(realOrigin + (y * realPixelWidth) + x);
      }
    }
    return realPixels;
  }

  _dispatchEvent (name, extraDetail={}) {
    if (this.events[name]) {
      const detail = Object.assign({textMode: this}, extraDetail);
      this.canvas.dispatchEvent(new CustomEvent(`textMode${name}`, {detail}));
    }
  }
}

var tm = new TextMode();
document.body.appendChild(tm.canvas);

tm.canvas.addEventListener('textModeBeforeRenderChar', e => {
  const {args} = event.detail;
  if (args.asciiCode) {
    args.bg = args.asciiCode % 8;
  }
});

tm.canvas.addEventListener('textModeBeforeRenderCharRow', e => {
  const {args} = event.detail;
  if (args.asciiCode) {
    args.fg = args.charRowIndex % 7 + 1;
  }
});

for (let i = 32; i < 127; i++) {
  tm.print(String.fromCharCode(i));
}


