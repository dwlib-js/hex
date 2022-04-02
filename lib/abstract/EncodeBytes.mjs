import TypedArrayLength from '#primordials/TypedArrayLength';
import {
  LOWERCASE_ALPHABET,
  UPPERCASE_ALPHABET
} from '#internal/alphabets';

const EncodeBytes = (buffer, uppercase) => {
  const length = TypedArrayLength(buffer);
  const alphabet = uppercase ? UPPERCASE_ALPHABET : LOWERCASE_ALPHABET;
  let string = ''
  for (let i = 0; i < length; i++) {
    const byte = buffer[i];
    const charIndex1 = byte >> 4;
    const charIndex2 = byte & 0xf;
    const char1 = alphabet[charIndex1];
    const char2 = alphabet[charIndex2];
    string += `${char1}${char2}`;
  }
  return string;
}

export default EncodeBytes;
