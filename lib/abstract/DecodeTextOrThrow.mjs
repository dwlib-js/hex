import StringFromCodePoint from '#primordials/StringFromCodePoint';
import ThrowInvalidSequenceError from '#utf8/ThrowInvalidSequenceError';
import AlphabetIndexOf from '#internal/AlphabetIndexOf';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';
import ThrowLengthOddError from './ThrowLengthOddError.mjs';

const DecodeTextOrThrow = encodedString => {
  const length = encodedString.length;
  if (length % 2) {
    ThrowLengthOddError();
  }
  let string = '';
  for (let i = 0; i < length; i++) {
    const char1 = encodedString[i];
    const charIndex1 = AlphabetIndexOf(char1);
    if (charIndex1 === undefined) {
      ThrowInvalidCharacterError(i);
    }
    const char2 = encodedString[++i];
    const charIndex2 = AlphabetIndexOf(char2);
    if (charIndex2 === undefined) {
      ThrowInvalidCharacterError(i);
    }
    const byte = (charIndex1 << 4) + charIndex2;
    if (byte <= 0x7f) {
      string += StringFromCodePoint(byte);
    } else if (byte <= 0xdf) {
      if (i + 2 >= length) {
        ThrowInvalidSequenceError(i);
      }
      const char3 = encodedString[++i];
      const charIndex3 = AlphabetIndexOf(char3);
      if (charIndex3 === undefined) {
        ThrowInvalidCharacterError(i);
      }
      const char4 = encodedString[++i];
      const charIndex4 = AlphabetIndexOf(char4);
      if (charIndex4 === undefined) {
        ThrowInvalidCharacterError(i);
      }
      const byte2 = (charIndex3 << 4) + charIndex4;
      const codePoint = ((byte & 0x1f) << 6) | (byte2 & 0x3f);
      string += StringFromCodePoint(codePoint);
    } else if (byte <= 0xef) {
      if (i + 4 >= length) {
        ThrowInvalidSequenceError(i);
      }
      const char3 = encodedString[++i];
      const charIndex3 = AlphabetIndexOf(char3);
      if (charIndex3 === undefined) {
        ThrowInvalidCharacterError(i);
      }
      const char4 = encodedString[++i];
      const charIndex4 = AlphabetIndexOf(char4);
      if (charIndex4 === undefined) {
        ThrowInvalidCharacterError(i);
      }
      const char5 = encodedString[++i];
      const charIndex5 = AlphabetIndexOf(char5);
      if (charIndex5 === undefined) {
        ThrowInvalidCharacterError(i);
      }
      const char6 = encodedString[++i];
      const charIndex6 = AlphabetIndexOf(char6);
      if (charIndex6 === undefined) {
        ThrowInvalidCharacterError(i);
      }
      const byte2 = (charIndex3 << 4) + charIndex4;
      const byte3 = (charIndex5 << 4) + charIndex6;
      const codePoint = ((byte & 0xf) << 12) | ((byte2 & 0x3f) << 6) | (byte3 & 0x3f);
      string += StringFromCodePoint(codePoint);
    } else if (byte <= 0xf4) {
      if (i + 6 >= length) {
        ThrowInvalidSequenceError(i);
      }
      const char3 = encodedString[++i];
      const charIndex3 = AlphabetIndexOf(char3);
      if (charIndex3 === undefined) {
        ThrowInvalidCharacterError(i);
      }
      const char4 = encodedString[++i];
      const charIndex4 = AlphabetIndexOf(char4);
      if (charIndex4 === undefined) {
        ThrowInvalidCharacterError(i);
      }
      const char5 = encodedString[++i];
      const charIndex5 = AlphabetIndexOf(char5);
      if (charIndex5 === undefined) {
        ThrowInvalidCharacterError(i);
      }
      const char6 = encodedString[++i];
      const charIndex6 = AlphabetIndexOf(char6);
      if (charIndex6 === undefined) {
      ThrowInvalidCharacterError(i);
      }
      const char7 = encodedString[++i];
      const charIndex7 = AlphabetIndexOf(char7);
      if (charIndex7 === undefined) {
        ThrowInvalidCharacterError(i);
      }
      const char8 = encodedString[++i];
      const charIndex8 = AlphabetIndexOf(char8);
      if (charIndex8 === undefined) {
        ThrowInvalidCharacterError(i);
      }
      const byte2 = (charIndex3 << 4) + charIndex4;
      const byte3 = (charIndex5 << 4) + charIndex6;
      const byte4 = (charIndex7 << 4) + charIndex8;
      const codePoint = ((byte & 7) << 18) | ((byte2 & 0x3f) << 12) | ((byte3 & 0x3f) << 6) | (byte4 & 0x3f);
      string += StringFromCodePoint(codePoint);
    } else {
      ThrowInvalidSequenceError(i);
    }
  }
  return string;
}

export default DecodeTextOrThrow;
