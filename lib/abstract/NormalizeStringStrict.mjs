import GetAlphabet from '#internal/GetAlphabet';
import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';
import ThrowInvalidLengthError from './ThrowInvalidLengthError.mjs';

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

export default NormalizeStringStrict;
