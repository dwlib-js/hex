'use strict';

const MathFloor = require('#primordials/MathFloor');
const {
  LOWERCASE_ALPHABET,
  UPPERCASE_ALPHABET
} = require('#internal/alphabets');

const EncodeInt = (integer, uppercase) => {
  const alphabet = uppercase ? UPPERCASE_ALPHABET : LOWERCASE_ALPHABET;
  if (!integer) {
    return alphabet[0];
  }
  let string = '';
  let carry = integer < 0 ? -integer : integer;
  while (carry) {
    const charIndex = carry % 16;
    const char = alphabet[charIndex];
    string = `${char}${string}`;
    carry = MathFloor(carry / 16);
  }
  return string;
}

module.exports = EncodeInt;
