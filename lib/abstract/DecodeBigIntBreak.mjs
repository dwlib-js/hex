import BigInt from '#primordials/BigInt';
import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';
import StringStartsWithPrefix from './StringStartsWithPrefix.mjs';

const BASE = BigInt(16);
const ZERO = BigInt(0);

const DecodeBigIntBreak = (string, allowedCase, ignorePrefix) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  let bigint = ZERO;
  const startIndex = !ignorePrefix && StringStartsWithPrefix(string) ? 2 : 0;
  for (let i = startIndex; i < length; i++) {
    const char = string[i];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      break;
    }
    bigint = bigint * BASE + BigInt(charIndex);
  }
  return bigint;
}

export default DecodeBigIntBreak;
