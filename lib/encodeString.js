'use strict';

const ToString = require('#abstract/ToString');
const EncodeString = require('#abstract-functions/EncodeString');
const EncodeStringOrThrow = require('#abstract-functions/EncodeStringOrThrow');

const encodeString = (string, uppercase, fatal) => {
  const chars = ToString(string);
  return fatal ? EncodeStringOrThrow(chars, uppercase) : EncodeString(chars, uppercase);
}

module.exports = encodeString;
