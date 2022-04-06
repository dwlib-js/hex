'use strict';

const GetAlphabetIndexOf = require('#internal/GetAlphabetIndexOf');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');
const ThrowInvalidLengthError = require('./ThrowInvalidLengthError');

const ValidateString = (string, allowedCase) => {
  const length = string.length;
  if (length % 2) {
    ThrowInvalidLengthError();
  }
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  for (let i = 0; i < length; i++) {
    const char = string[i];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(i);
    }
  }
  return string;
}

module.exports = ValidateString;
