'use strict';

const TypedArraySlice = require('#primordials/TypedArraySlice');
const Uint8Array = require('#primordials/Uint8Array');
const GetAlphabetIndexOf = require('#internal/GetAlphabetIndexOf');
const GetMaxByteCount = require('./GetMaxByteCount');

const DecodeBytesIgnore = (string, allowedCase) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  const maxByteCount = GetMaxByteCount(length);
  const bytes = new Uint8Array(maxByteCount);
  let index = 0;
  let carry = 0;
  let evenChar = true;
  for (let i = 0; i < length; i++) {
    const char = string[i];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      continue;
    }
    if (evenChar) {
      carry = charIndex;
    } else {
      bytes[index++] = (carry << 4) | charIndex;
    }
    evenChar = !evenChar;
  }
  return index !== maxByteCount ? TypedArraySlice(bytes, 0, index) : bytes;
}

module.exports = DecodeBytesIgnore;
