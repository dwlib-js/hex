import StringFromCharCode from '#primordials/StringFromCharCode';
import AlphabetIndexOf from '#internal/AlphabetIndexOf';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';
import ThrowLengthOddError from './ThrowLengthOddError.mjs';

const DecodeStringOrThrow = encodedString => {
  const length = encodedString.length;
  if (length % 2) {
    ThrowLengthOddError();
  }
  let string = '';
  for (let i = 0; i < length; i++) {
    const char1 = encodedString[i];
    const charIndex1 = AlphabetIndexOf(char1);
    if (charIndex1 === undefined) {
      ThrowInvalidCharacterError(i);
    }
    const char2 = encodedString[++i];
    const charIndex2 = AlphabetIndexOf(char2);
    if (charIndex2 === undefined) {
      ThrowInvalidCharacterError(i);
    }
    const charCode = (charIndex1 << 4) + charIndex2;
    string += StringFromCharCode(charCode);
  }
  return string;
}

export default DecodeStringOrThrow;
