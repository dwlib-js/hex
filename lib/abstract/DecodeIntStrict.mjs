import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';
import StringStartsWithPrefix from './StringStartsWithPrefix.mjs';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';

const DecodeIntStrict = (string, allowedCase, ignorePrefix) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  let integer = 0;
  const startIndex = !ignorePrefix && StringStartsWithPrefix(string) ? 2 : 0;
  for (let i = startIndex; i < length; i++) {
    const char = string[i];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(i);
    }
    integer = integer * 16 + charIndex;
  }
  return integer;
}

export default DecodeIntStrict;
