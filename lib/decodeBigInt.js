'use strict';

const ToString = require('#abstract/ToString');
const DecodeBigInt = require('#abstract-functions/DecodeBigInt');
const DecodeBigIntOrThrow = require('#abstract-functions/DecodeBigIntOrThrow');

const decodeBigInt = (encodedString, fatal) => {
  const string = ToString(encodedString);
  return fatal ? DecodeBigIntOrThrow(string) : DecodeBigInt(string);
}

module.exports = decodeBigInt;
