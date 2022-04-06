import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';
import ThrowInvalidLengthError from './ThrowInvalidLengthError.mjs';

const ValidateString = (string, allowedCase) => {
  const length = string.length;
  if (length % 2) {
    ThrowInvalidLengthError();
  }
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  for (let i = 0; i < length; i++) {
    const char = string[i];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(i);
    }
  }
  return string;
}

export default ValidateString;
