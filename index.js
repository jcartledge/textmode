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
  - profiling
  + input
    - delete
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
  constructor (canvas, numRows=30,  numCols=40, hscale=2, vscale=3) {

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
    this.ctx.imageSmoothingEnabled = false;

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
    return this._rowFromPos(this.pos);
  }

  set row (_row) {
    this._setPos(Math.max(0, Math.min(this.numRows - 1, _row)), this.col);
  }

  get col() {
    return this._colFromPos(this.pos);
  }

  set col (_col) {
    this._setPos(this.row, Math.max(0, Math.min(this.numCols - 1, _col)));
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

  backspace (stop=0) {
    if (this.pos - 1 >= stop) {
      this.pos -= 1;
      this.textBuffer[this.pos].asciiCode = 0;
    } else {
      this.beep();
    }
    return this;
  }

  input (prompt='> ') {
    const saveCursor = this.cursor;
    this.cursor = true;
    this.print(prompt);
    this.canvas.focus();
    return new Promise((resolve) => {
      let input = '';
      let start = this.pos;
      const textModeInputListener = (e) => {
        let key = e.key.charCodeAt();
        if (e.key.length === 1) {
          input += e.key;
          this.print(e.key);
        } else {
          switch (e.keyCode) {
            case 8:
              this.backspace(start);
              input = input.slice(0, -1);
              break;
            case 13:
              this.canvas.removeEventListener('keypress', textModeInputListener);
              this.chr();
              this.crlf();
              this.cursor = saveCursor;
              resolve(input);
              break;
          }
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

  /**
   * This does not check input.
   */
  _setPos(row, col) {
    this.pos = (row * this.numCols) + col;
  }

  _rowFromPos (pos) {
    return pos / this.numCols | 0;
  }

  _colFromPos(pos) {
    return pos % this.numCols;
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

  _render () {
    if (this._debug && this._fpsMonitor) {
      this._updateFPSMonitor();
    }
    this._dispatchEvent('BeforeRender');
    this.textBuffer.forEach(({asciiCode, fg, bg}, pos) => {
      this._renderChar(asciiCode, fg, bg, pos);
    });
    window.requestAnimationFrame(this._render.bind(this));
  }

  _renderChar (asciiCode, fg, bg, textBufferPos) {
    const cursor = this.cursor && (this.pos == textBufferPos);
    if (cursor) {
      [fg, bg] = [this.bg, this.fg];
    }
    let args = {asciiCode, fg, bg, textBufferPos, cursor};
    this._dispatchEvent('BeforeRenderChar', {args});
    const canvasBuffer = this.canvasBuffer[textBufferPos];
    let pixelPos = 0;
    this.font.chr(args.asciiCode).forEach((charRow, charRowIndex) => {
      args = {...args, charRowIndex};
      this._dispatchEvent('BeforeRenderCharRow', {args});
      for (let mask = 1 << (this.font.width - 1); mask; mask >>= 1) {
        const pixel = this.palette[charRow & mask ? fg : bg];
        canvasBuffer.buf32[pixelPos++] = pixel;
      }
    });
    canvasBuffer.imageData.data.set(canvasBuffer.buf8);
    canvasBuffer.ctx.putImageData(canvasBuffer.imageData, 0, 0);
    const row = this._rowFromPos(textBufferPos);
    const col = this._colFromPos(textBufferPos);
    const dw = this.font.width * this.hscale;
    const dh = this.font.height * this.vscale;
    const dx = col * dw;
    const dy = row * dh;
    this.ctx.drawImage(canvasBuffer.canvas, dx, dy, dw, dh);
  }

  _dispatchEvent (name, extraDetail={}) {
    if (this.events[name]) {
      const detail = Object.assign({textMode: this}, extraDetail);
      this.canvas.dispatchEvent(new CustomEvent(`textMode${name}`, {detail}));
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

  _updateFPSMonitor () {
    const time = (new Date()).getTime();
    const elapsed = time - (this._lastRenderTime || 0);
    this._lastRenderTime = time;
    this._fpsMonitor.value = (1000 / elapsed) | 0;
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


