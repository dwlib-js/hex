'use strict';

const HasIntrinsic = require('#intrinsics/HasIntrinsic');

const hasBigInt = HasIntrinsic('BigInt');

const DecodeBigInt = hasBigInt ? require('./DecodeBigInt') : undefined;
const DecodeBigIntOrThrow = hasBigInt ? require('./DecodeBigIntOrThrow') : undefined;
const DecodeBytes = require('./DecodeBytes');
const DecodeBytesOrThrow = require('./DecodeBytesOrThrow');
const DecodeInt = require('./DecodeInt');
const DecodeIntOrThrow = require('./DecodeIntOrThrow');
const DecodeString = require('./DecodeString');
const DecodeStringOrThrow = require('./DecodeStringOrThrow');
const DecodeText = require('./DecodeText');
const DecodeTextOrThrow = require('./DecodeTextOrThrow');
const EncodeBigInt = hasBigInt ? require('./EncodeBigInt') : undefined;
const EncodeBytes = require('./EncodeBytes');
const EncodeInt = require('./EncodeInt');
const EncodeString = require('./EncodeString');
const EncodeStringOrThrow = require('./EncodeStringOrThrow');
const EncodeText = require('./EncodeText');
const GetMaxByteCount = require('./GetMaxByteCount');
const GetMaxCharCount = require('./GetMaxCharCount');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');
const ThrowLengthOddError = require('./ThrowLengthOddError');

module.exports = {
  DecodeBigInt,
  DecodeBigIntOrThrow,
  DecodeBytes,
  DecodeBytesOrThrow,
  DecodeInt,
  DecodeIntOrThrow,
  DecodeString,
  DecodeStringOrThrow,
  DecodeText,
  DecodeTextOrThrow,
  EncodeBigInt,
  EncodeBytes,
  EncodeInt,
  EncodeString,
  EncodeStringOrThrow,
  EncodeText,
  GetMaxByteCount,
  GetMaxCharCount,
  ThrowInvalidCharacterError,
  ThrowLengthOddError
};
