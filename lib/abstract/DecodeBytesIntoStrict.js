'use strict';

const TypedArrayLength = require('#primordials/TypedArrayLength');
const GetAlphabetIndexOf = require('#internal/GetAlphabetIndexOf');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');
const ThrowInvalidLengthError = require('./ThrowInvalidLengthError');

const DecodeBytesIntoStrict = (string, destination, allowedCase) => {
  const length = string.length;
  if (length % 2) {
    ThrowInvalidLengthError();
  }
  const destinationLength = TypedArrayLength(destination);
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  let index = 0;
  let destinationIndex = 0;
  let carry = 0;
  let evenChar = true;
  while (index < length && destinationIndex < destinationLength) {
    const char = string[index];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(index);
    }
    if (evenChar) {
      carry = charIndex;
    } else {
      destination[destinationIndex++] = (carry << 4) | charIndex;
    }
    evenChar = !evenChar;
    index++;
  }
  return {
    read: index,
    written: destinationIndex
  };
}

module.exports = DecodeBytesIntoStrict;
