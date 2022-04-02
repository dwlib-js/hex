'use strict';

const ToInteger = require('#abstract/ToInteger');
const EncodeInt = require('#abstract-functions/EncodeInt');

const encodeInt = (integer, uppercase) => {
  const value = ToInteger(integer);
  return EncodeInt(value, uppercase);
}

module.exports = encodeInt;
