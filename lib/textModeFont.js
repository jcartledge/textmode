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

export default TextModeFont;