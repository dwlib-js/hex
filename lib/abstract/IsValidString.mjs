import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';

const IsValidString = (string, allowedCase) => {
  const length = string.length;
  if (length % 2) {
    return false;
  }
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  for (let i = 0; i < length; i++) {
    const char = string[i];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      return false;
    }
  }
  return true;
}

export default IsValidString;
