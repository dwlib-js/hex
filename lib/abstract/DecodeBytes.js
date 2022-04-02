'use strict';

const TypedArraySlice = require('#primordials/TypedArraySlice');
const Uint8Array = require('#primordials/Uint8Array');
const AlphabetIndexOf = require('#internal/AlphabetIndexOf');
const GetMaxByteCount = require('./GetMaxByteCount');

const DecodeBytes = encodedString => {
  const length = encodedString.length;
  const maxByteCount = GetMaxByteCount(length);
  const charCount = maxByteCount * 2;
  const bytes = new Uint8Array(maxByteCount);
  let index = 0;
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
    bytes[index++] = (charIndex1 << 4) + charIndex2;
  }
  return index !== maxByteCount ? TypedArraySlice(bytes, 0, index) : bytes;
}

module.exports = DecodeBytes;
