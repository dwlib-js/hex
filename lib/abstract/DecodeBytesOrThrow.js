'use strict';

const Uint8Array = require('#primordials/Uint8Array');
const AlphabetIndexOf = require('#internal/AlphabetIndexOf');
const GetMaxByteCount = require('./GetMaxByteCount');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');
const ThrowLengthOddError = require('./ThrowLengthOddError');

const DecodeBytesOrThrow = encodedString => {
  const length = encodedString.length;
  if (length % 2) {
    ThrowLengthOddError();
  }
  const maxByteCount = GetMaxByteCount(length);
  const bytes = new Uint8Array(maxByteCount);
  let index = 0;
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
    bytes[index++] = (charIndex1 << 4) + charIndex2;
  }
  return bytes;
}

module.exports = DecodeBytesOrThrow;
