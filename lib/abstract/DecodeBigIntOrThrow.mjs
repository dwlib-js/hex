import BigInt from '#primordials/BigInt';
import AlphabetIndexOf from '#internal/AlphabetIndexOf';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';

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

export default DecodeBigIntOrThrow;
