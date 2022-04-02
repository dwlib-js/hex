import HasIntrinsic from '#intrinsics/HasIntrinsic';
import DecodeBytes from './DecodeBytes.mjs';
import DecodeBytesOrThrow from './DecodeBytesOrThrow.mjs';
import DecodeInt from './DecodeInt.mjs';
import DecodeIntOrThrow from './DecodeIntOrThrow.mjs';
import DecodeString from './DecodeString.mjs';
import DecodeStringOrThrow from './DecodeStringOrThrow.mjs';
import DecodeText from './DecodeText.mjs';
import DecodeTextOrThrow from './DecodeTextOrThrow.mjs';
import EncodeBytes from './EncodeBytes.mjs';
import EncodeInt from './EncodeInt.mjs';
import EncodeString from './EncodeString.mjs';
import EncodeStringOrThrow from './EncodeStringOrThrow.mjs';
import EncodeText from './EncodeText.mjs';
import GetMaxByteCount from './GetMaxByteCount.mjs';
import GetMaxCharCount from './GetMaxCharCount.mjs';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';
import ThrowLengthOddError from './ThrowLengthOddError.mjs';

const ImportFunction = async name => {
  const module = await import(`./${name}.mjs`);
  return module.default;
}

const hasBigInt = HasIntrinsic('BigInt');

const DecodeBigInt = hasBigInt ? await ImportFunction('DecodeBigInt') : undefined;
const DecodeBigIntOrThrow = hasBigInt ? await ImportFunction('DecodeBigIntOrThrow') : undefined;
const EncodeBigInt = hasBigInt ? await ImportFunction('EncodeBigInt') : undefined;

export {
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
