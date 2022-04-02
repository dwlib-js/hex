'use strict';

const ToString = require('#abstract/ToString');
const DecodeBytes = require('#abstract-functions/DecodeBytes');
const DecodeBytesOrThrow = require('#abstract-functions/DecodeBytesOrThrow');

const decode = (encodedString, fatal) => {
  const string = ToString(encodedString);
  return fatal ? DecodeBytesOrThrow(string) : DecodeBytes(string);
}

module.exports = decode;
