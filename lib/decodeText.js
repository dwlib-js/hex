'use strict';

const ToString = require('#abstract/ToString');
const DecodeText = require('#abstract-functions/DecodeText');
const DecodeTextOrThrow = require('#abstract-functions/DecodeTextOrThrow');

const decodeText = (encodedString, fatal) => {
  const string = ToString(encodedString);
  return fatal ? DecodeTextOrThrow(string) : DecodeText(string);
}

module.exports = decodeText;
