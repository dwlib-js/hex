'use strict';

const ToBigInt = require('#abstract/ToBigInt');
const EncodeBigInt = require('#abstract-functions/EncodeBigInt');

const encodeBigInt = (bigint, uppercase) => {
  const value = ToBigInt(bigint);
  return EncodeBigInt(value, uppercase);
}

module.exports = encodeBigInt;
