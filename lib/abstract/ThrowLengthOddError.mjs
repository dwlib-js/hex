import RangeError from '#primordials/RangeError';

const ThrowLengthOddError = () => {
  throw new RangeError('Hex length cannot be odd');
}

export default ThrowLengthOddError;
