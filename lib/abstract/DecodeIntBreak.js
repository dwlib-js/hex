'use strict';

const GetAlphabetIndexOf = require('#internal/GetAlphabetIndexOf');
const StringStartsWithPrefix = require('./StringStartsWithPrefix');

const DecodeIntBreak = (string, allowedCase, ignorePrefix) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  let integer = 0;
  const startIndex = !ignorePrefix && StringStartsWithPrefix(string) ? 2 : 0;
  for (let i = startIndex; i < length; i++) {
    const char = string[i];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      break;
    }
    integer = integer * 16 + charIndex;
  }
  return integer;
}

module.exports = DecodeIntBreak;
