'use strict';

const GetAlphabet = require('#internal/GetAlphabet');
const GetAlphabetIndexOf = require('#internal/GetAlphabetIndexOf');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');
const ThrowInvalidLengthError = require('./ThrowInvalidLengthError');

const NormalizeStringStrict = (string, allowedCase, targetCase) => {
  const length = string.length;
  if (length % 2) {
    ThrowInvalidLengthError();
  }
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  const alphabet = GetAlphabet(targetCase);
  let normalized = '';
  for (let i = 0; i < length; i++) {
    const char = string[i];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(i);
    }
    normalized += alphabet[charIndex];
  }
  return normalized;
}

module.exports = NormalizeStringStrict;
