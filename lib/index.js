'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const HasIntrinsic = require('#intrinsics/HasIntrinsic');
const ObjectCreate = require('#primordials/ObjectCreate');
const ReflectDefineProperty = require('#primordials/ReflectDefineProperty');
const HexDecode = require('./decode');
const HexDecodeInt = require('./decodeInt');
const HexDecodeString = require('./decodeString');
const HexDecodeText = require('./decodeText');
const HexEncode = require('./encode');
const HexEncodeInt = require('./encodeInt');
const HexEncodeString = require('./encodeString');
const HexEncodeText = require('./encodeText');

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
  decodeString: {
    value: HexDecodeString
  },
  decodeText: {
    value: HexDecodeText
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
  encodeString: {
    value: HexEncodeString
  },
  encodeText: {
    value: HexEncodeText
  }
});
ReflectDefineProperty(Hex, SymbolToStringTag, {
  value: 'Hex'
});

module.exports = Hex;
