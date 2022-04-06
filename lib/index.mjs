import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import HasIntrinsic from '#intrinsics/HasIntrinsic';
import ObjectCreate from '#primordials/ObjectCreate';
import ReflectDefineProperty from '#primordials/ReflectDefineProperty';
import HexDecode from './decode.mjs';
import HexDecodeInt from './decodeInt.mjs';
import HexDecodeInto from './decodeInto.mjs';
import HexEncode from './encode.mjs';
import HexEncodeInt from './encodeInt.mjs';
import HexIsValid from './isValid.mjs';
import HexValidate from './validate.mjs';

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

export default Hex;
