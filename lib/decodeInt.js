'use strict';

const ToString = require('#abstract/ToString');
const DecodeInt = require('#abstract-functions/DecodeInt');
const DecodeIntOrThrow = require('#abstract-functions/DecodeIntOrThrow');

const decodeInt = (encodedString, fatal) => {
  const string = ToString(encodedString);
  return fatal ? DecodeIntOrThrow(string) : DecodeInt(string);
}

module.exports = decodeInt;
