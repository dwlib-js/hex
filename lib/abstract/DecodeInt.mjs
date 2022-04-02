import AlphabetIndexOf from '#internal/AlphabetIndexOf';

const DecodeInt = encodedString => {
  const length = encodedString.length;
  let integer = 0;
  for (let i = 0; i < length; i++) {
    const char = encodedString[i];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      break;
    }
    integer = integer * 16 + charIndex;
  }
  return integer;
}

export default DecodeInt;
