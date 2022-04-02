'use strict';

const RangeError = require('#primordials/RangeError');

const ThrowLengthOddError = () => {
  throw new RangeError('Hex length cannot be odd');
}

module.exports = ThrowLengthOddError;
