import StringCharCodeAt from '#primordials/StringCharCodeAt';
import ThrowInvalidCharacterError from '#ascii/ThrowInvalidCharacterError';
import {
  LOWERCASE_ALPHABET,
  UPPERCASE_ALPHABET
} from '#internal/alphabets';

const EncodeStringOrThrow = (string, uppercase) => {
  const length = string.length;
  const alphabet = uppercase ? UPPERCASE_ALPHABET : LOWERCASE_ALPHABET;
  let encodedString = '';
  for (let i = 0; i < length; i++) {
    const charCode = StringCharCodeAt(string, i);
    if (charCode > 0xff) {
      ThrowInvalidCharacterError(i);
    }
    const charIndex1 = charCode >> 4;
    const charIndex2 = charCode & 0xf;
    const char1 = alphabet[charIndex1];
    const char2 = alphabet[charIndex2];
    encodedString += `${char1}${char2}`;
  }
  return encodedString;
}

export default EncodeStringOrThrow;
