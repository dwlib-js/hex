import RangeError from '#primordials/RangeError';

const ThrowInvalidCharacterError = index => {
  throw new RangeError(`Invalid Hex character at index ${index}`);
}

export default ThrowInvalidCharacterError;
