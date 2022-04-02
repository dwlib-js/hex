import AlphabetIndexOf from '#internal/AlphabetIndexOf';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';

const DecodeIntOrThrow = encodedString => {
  const length = encodedString.length;
  let integer = 0;
  for (let i = 0; i < length; i++) {
    const char = encodedString[i];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(i);
    }
    integer = integer * 16 + charIndex;
  }
  return integer;
}

export default DecodeIntOrThrow;
