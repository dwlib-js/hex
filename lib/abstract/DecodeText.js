'use strict';

const StringFromCodePoint = require('#primordials/StringFromCodePoint');
const AlphabetIndexOf = require('#internal/AlphabetIndexOf');

const DecodeText = encodedString => {
  const length = encodedString.length;
  const charCount = length % 2 ? length - 1 : length;
  let string = '';
  for (let i = 0; i < charCount; i++) {
    const char1 = encodedString[i];
    const charIndex1 = AlphabetIndexOf(char1);
    if (charIndex1 === undefined) {
      break;
    }
    const char2 = encodedString[++i];
    const charIndex2 = AlphabetIndexOf(char2);
    if (charIndex2 === undefined) {
      break;
    }
    const byte = (charIndex1 << 4) + charIndex2;
    if (byte <= 0x7f) {
      string += StringFromCodePoint(byte);
    } else if (byte <= 0xdf) {
      if (i + 2 >= length) {
        string += '\ufffd';
        break;
      }
      const char3 = encodedString[++i];
      const charIndex3 = AlphabetIndexOf(char3);
      if (charIndex3 === undefined) {
        break;
      }
      const char4 = encodedString[++i];
      const charIndex4 = AlphabetIndexOf(char4);
      if (charIndex4 === undefined) {
        break;
      }
      const byte2 = (charIndex3 << 4) + charIndex4;
      const codePoint = ((byte & 0x1f) << 6) | (byte2 & 0x3f);
      string += StringFromCodePoint(codePoint);
    } else if (byte <= 0xef) {
      if (i + 4 >= length) {
        string += '\ufffd';
        break;
      }
      const char3 = encodedString[++i];
      const charIndex3 = AlphabetIndexOf(char3);
      if (charIndex3 === undefined) {
        break;
      }
      const char4 = encodedString[++i];
      const charIndex4 = AlphabetIndexOf(char4);
      if (charIndex4 === undefined) {
        break;
      }
      const char5 = encodedString[++i];
      const charIndex5 = AlphabetIndexOf(char5);
      if (charIndex5 === undefined) {
        break;
      }
      const char6 = encodedString[++i];
      const charIndex6 = AlphabetIndexOf(char6);
      if (charIndex6 === undefined) {
        break;
      }
      const byte2 = (charIndex3 << 4) + charIndex4;
      const byte3 = (charIndex5 << 4) + charIndex6;
      const codePoint = ((byte & 0xf) << 12) | ((byte2 & 0x3f) << 6) | (byte3 & 0x3f);
      string += StringFromCodePoint(codePoint);
    } else if (byte <= 0xf4) {
      if (i + 6 >= length) {
        string += '\ufffd';
        break;
      }
      const char3 = encodedString[++i];
      const charIndex3 = AlphabetIndexOf(char3);
      if (charIndex3 === undefined) {
        break;
      }
      const char4 = encodedString[++i];
      const charIndex4 = AlphabetIndexOf(char4);
      if (charIndex4 === undefined) {
        break;
      }
      const char5 = encodedString[++i];
      const charIndex5 = AlphabetIndexOf(char5);
      if (charIndex5 === undefined) {
        break;
      }
      const char6 = encodedString[++i];
      const charIndex6 = AlphabetIndexOf(char6);
      if (charIndex6 === undefined) {
        break;
      }
      const char7 = encodedString[++i];
      const charIndex7 = AlphabetIndexOf(char7);
      if (charIndex7 === undefined) {
        break;
      }
      const char8 = encodedString[++i];
      const charIndex8 = AlphabetIndexOf(char8);
      if (charIndex8 === undefined) {
        break;
      }
      const byte2 = (charIndex3 << 4) + charIndex4;
      const byte3 = (charIndex5 << 4) + charIndex6;
      const byte4 = (charIndex7 << 4) + charIndex8;
      const codePoint = ((byte & 7) << 18) | ((byte2 & 0x3f) << 12) | ((byte3 & 0x3f) << 6) | (byte4 & 0x3f);
      string += StringFromCodePoint(codePoint);
    } else {
      string += '\ufffd';
    }
  }
  return string;
}

module.exports = DecodeText;
