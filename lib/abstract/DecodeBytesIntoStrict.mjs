import TypedArrayLength from '#primordials/TypedArrayLength';
import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';
import ThrowInvalidLengthError from './ThrowInvalidLengthError.mjs';

const DecodeBytesIntoStrict = (string, destination, allowedCase) => {
  const length = string.length;
  if (length % 2) {
    ThrowInvalidLengthError();
  }
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
      ThrowInvalidCharacterError(index);
    }
    if (evenChar) {
      carry = charIndex;
    } else {
      destination[destinationIndex++] = (carry << 4) | charIndex;
    }
    evenChar = !evenChar;
    index++;
  }
  return {
    read: index,
    written: destinationIndex
  };
}

export default DecodeBytesIntoStrict;
