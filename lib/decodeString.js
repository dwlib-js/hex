'use strict';

const ToString = require('#abstract/ToString');
const DecodeString = require('#abstract-functions/DecodeString');
const DecodeStringOrThrow = require('#abstract-functions/DecodeStringOrThrow');

const decodeString = (encodedString, fatal) => {
  const string = ToString(encodedString);
  return fatal ? DecodeStringOrThrow(string) : DecodeString(string);
}

module.exports = decodeString;
