import TypedArrayLength from '#primordials/TypedArrayLength';
import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';

const DecodeBytesIntoBreak = (string, destination, allowedCase) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  let index = 0;
  let destinationIndex = 0;
  let carry = 0;
  let evenChar = true;
  while (index < length && destinationIndex < destinationLength) {
    const char = string[index];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      break;
    }
    if (evenChar) {
      carry = charIndex;
    } else {
      destination[destinationIndex++] = (carry << 4) | charIndex;
    }
    evenChar = !evenChar;
    index++;
  }
  if (index % 2) {
    index--;
  }
  return {
    read: index,
    written: destinationIndex
  };
}

export default DecodeBytesIntoBreak;
