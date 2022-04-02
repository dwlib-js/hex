import BigInt from '#primordials/BigInt';
import {
  LOWERCASE_ALPHABET,
  UPPERCASE_ALPHABET
} from '#internal/alphabets';

const BASE = BigInt(16);
const ZERO = BigInt(0);

const EncodeBigInt = (bigint, uppercase) => {
  const alphabet = uppercase ? UPPERCASE_ALPHABET : LOWERCASE_ALPHABET;
  if (!bigint) {
    return alphabet[0];
  }
  let string = '';
  let carry = bigint < ZERO ? -bigint : bigint;
  while (carry) {
    const charIndex = carry % BASE;
    const char = alphabet[charIndex];
    string = `${char}${string}`;
    carry /= BASE;
  }
  return string;
}

export default EncodeBigInt;
