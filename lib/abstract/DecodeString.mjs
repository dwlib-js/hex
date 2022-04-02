import StringFromCharCode from '#primordials/StringFromCharCode';
import AlphabetIndexOf from '#internal/AlphabetIndexOf';

const DecodeString = encodedString => {
  const length = encodedString.length;
  const charCount = length % 2 ? length - 1 : length;
  let string = '';
  for (let i = 0; i < charCount; i++) {
    const char1 = encodedString[i];
    const charIndex1 = AlphabetIndexOf(char1);
    if (charIndex1 === undefined) {
      break;
    }
    const char2 = encodedString[++i];
    const charIndex2 = AlphabetIndexOf(char2);
    if (charIndex2 === undefined) {
      break;
    }
    const charCode = (charIndex1 << 4) + charIndex2;
    string += StringFromCharCode(charCode);
  }
  return string;
}

export default DecodeString;
