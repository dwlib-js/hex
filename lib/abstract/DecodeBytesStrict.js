'use strict';

const Uint8Array = require('#primordials/Uint8Array');
const GetAlphabetIndexOf = require('#internal/GetAlphabetIndexOf');
const GetMaxByteCount = require('./GetMaxByteCount');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');
const ThrowInvalidLengthError = require('./ThrowInvalidLengthError');

const DecodeBytesStrict = (string, allowedCase) => {
  const length = string.length;
  if (length % 2) {
    ThrowInvalidLengthError();
  }
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
      ThrowInvalidCharacterError(i);
    }
    if (evenChar) {
      carry = charIndex;
    } else {
      bytes[index++] = (carry << 4) | charIndex;
    }
    evenChar = !evenChar;
  }
  return bytes;
}

module.exports = DecodeBytesStrict;
