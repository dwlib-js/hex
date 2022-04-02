import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import HasIntrinsic from '#intrinsics/HasIntrinsic';
import ObjectCreate from '#primordials/ObjectCreate';
import ReflectDefineProperty from '#primordials/ReflectDefineProperty';
import HexDecode from './decode.mjs';
import HexDecodeInt from './decodeInt.mjs';
import HexDecodeString from './decodeString.mjs';
import HexDecodeText from './decodeText.mjs';
import HexEncode from './encode.mjs';
import HexEncodeInt from './encodeInt.mjs';
import HexEncodeString from './encodeString.mjs';
import HexEncodeText from './encodeText.mjs';

const ImportFunction = async name => {
  const module = await import(`./${name}.mjs`);
  return module.default;
}

const hasBigInt = HasIntrinsic('BigInt');

const HexDecodeBigInt = hasBigInt ? await ImportFunction('decodeBigInt') : undefined;
const HexEncodeBigInt = hasBigInt ? await ImportFunction('encodeBigInt') : undefined;

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

export default Hex;
