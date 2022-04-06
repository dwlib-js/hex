import BigInt from '#primordials/BigInt';
import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';
import StringStartsWithPrefix from './StringStartsWithPrefix.mjs';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';

const BASE = BigInt(16);
const ZERO = BigInt(0);

const DecodeBigIntStrict = (string, allowedCase, ignorePrefix) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  let bigint = ZERO;
  const startIndex = !ignorePrefix && StringStartsWithPrefix(string) ? 2 : 0;
  for (let i = startIndex; i < length; i++) {
    const char = string[i];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(i);
    }
    bigint = bigint * BASE + BigInt(charIndex);
  }
  return bigint;
}

export default DecodeBigIntStrict;
