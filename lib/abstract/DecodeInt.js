'use strict';

const DecodeIntBreak = require('./DecodeIntBreak');
const DecodeIntIgnore = require('./DecodeIntIgnore');
const DecodeIntStrict = require('./DecodeIntStrict');

const DecodeInt = (string, errorMode, allowedCase, ignorePrefix) => {
  const decodeInt = (
    errorMode === 'strict' ? DecodeIntStrict :
    errorMode === 'ignore' ? DecodeIntIgnore : DecodeIntBreak
  );
  return decodeInt(string, allowedCase, ignorePrefix);
}

module.exports = DecodeInt;
