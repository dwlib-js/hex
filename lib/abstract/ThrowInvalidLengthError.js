'use strict';

const RangeError = require('#primordials/RangeError');

const ThrowInvalidLengthError = () => {
  throw new RangeError('Hex string length cannot be odd');
}

module.exports = ThrowInvalidLengthError;
