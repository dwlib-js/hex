'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const HasIntrinsic = require('#intrinsics/HasIntrinsic');
const ObjectCreate = require('#primordials/ObjectCreate');
const ReflectDefineProperty = require('#primordials/ReflectDefineProperty');
const HexDecode = require('./decode');
const HexDecodeInt = require('./decodeInt');
const HexDecodeInto = require('./decodeInto');
const HexEncode = require('./encode');
const HexEncodeInt = require('./encodeInt');
const HexIsValid = require('./isValid');
const HexValidate = require('./validate');

const hasBigInt = HasIntrinsic('BigInt');

const HexDecodeBigInt = hasBigInt ? require('./decodeBigInt') : undefined;
const HexEncodeBigInt = hasBigInt ? require('./encodeBigInt') : undefined;

const ObjectPrototype = GetIntrinsicOrThrow('Object.prototype');
const SymbolToStringTag = GetIntrinsicOrThrow('@@toStringTag');

const Hex = ObjectCreate(ObjectPrototype, {
  decode: {
    value: HexDecode
  },
  decodeBigInt: {
    value: HexDecodeBigInt
  },
  decodeInt: {
    value: HexDecodeInt
  },
  decodeInto: {
    value: HexDecodeInto
  },
  encode: {
    value: HexEncode
  },
  encodeBigInt: {
    value: HexEncodeBigInt
  },
  encodeInt: {
    value: HexEncodeInt
  },
  isValid: {
    value: HexIsValid
  },
  validate: {
    value: HexValidate
  }
});
ReflectDefineProperty(Hex, SymbolToStringTag, {
  value: 'Hex'
});

module.exports = Hex;
