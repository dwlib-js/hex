import RangeError from '#primordials/RangeError';

const ThrowInvalidLengthError = () => {
  throw new RangeError('Hex string length cannot be odd');
}

export default ThrowInvalidLengthError;
