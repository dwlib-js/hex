import BigInt from '#primordials/BigInt';
import AlphabetIndexOf from '#internal/AlphabetIndexOf';

const BASE = BigInt(16);
const ZERO = BigInt(0);

const DecodeBigInt = encodedString => {
  const length = encodedString.length;
  let bigint = ZERO;
  for (let i = 0; i < length; i++) {
    const char = encodedString[i];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      break;
    }
    bigint = bigint * BASE + BigInt(charIndex);
  }
  return bigint;
}

export default DecodeBigInt;
