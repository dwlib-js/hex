import GetAlphabet from '#internal/GetAlphabet';
import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';

const NormalizeStringBreak = (string, allowedCase, targetCase) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  const alphabet = GetAlphabet(targetCase);
  let normalized = '';
  let char1 = '';
  let evenChar = true;
  for (let i = 0; i < length; i++) {
    const char = string[i];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      break;
    }
    if (evenChar) {
      char1 = alphabet[charIndex];
    } else {
      const char2 = alphabet[charIndex];
      normalized += `${char1}${char2}`;
    }
    evenChar = !evenChar;
  }
  return normalized;
}

export default NormalizeStringBreak;
