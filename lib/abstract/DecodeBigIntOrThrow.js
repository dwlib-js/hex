'use strict';

const BigInt = require('#primordials/BigInt');
const AlphabetIndexOf = require('#internal/AlphabetIndexOf');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');

const BASE = BigInt(16);
const ZERO = BigInt(0);

const DecodeBigIntOrThrow = encodedString => {
  const length = encodedString.length;
  let bigint = ZERO;
  for (let i = 0; i < length; i++) {
    const char = encodedString[i];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(i);
    }
    bigint = bigint * BASE + BigInt(charIndex);
  }
  return bigint;
}

module.exports = DecodeBigIntOrThrow;
