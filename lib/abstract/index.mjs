import HasIntrinsic from '#intrinsics/HasIntrinsic';
import DecodeBytes from './DecodeBytes.mjs';
import DecodeBytesBreak from './DecodeBytesBreak.mjs';
import DecodeBytesIgnore from './DecodeBytesIgnore.mjs';
import DecodeBytesStrict from './DecodeBytesStrict.mjs';
import DecodeBytesInto from './DecodeBytesInto.mjs';
import DecodeBytesIntoBreak from './DecodeBytesIntoBreak.mjs';
import DecodeBytesIntoIgnore from './DecodeBytesIntoIgnore.mjs';
import DecodeBytesIntoStrict from './DecodeBytesIntoStrict.mjs';
import DecodeInt from './DecodeInt.mjs';
import DecodeIntBreak from './DecodeIntBreak.mjs';
import DecodeIntIgnore from './DecodeIntIgnore.mjs';
import DecodeIntStrict from './DecodeIntStrict.mjs';
import EncodeBytes from './EncodeBytes.mjs';
import EncodeInt from './EncodeInt.mjs';
import GetMaxByteCount from './GetMaxByteCount.mjs';
import IsValidString from './IsValidString.mjs';
import StringStartsWithPrefix from './StringStartsWithPrefix.mjs';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';
import ThrowInvalidLengthError from './ThrowInvalidLengthError.mjs';
import ToAllowedCase from './ToAllowedCase.mjs';
import ToErrorMode from './ToErrorMode.mjs';
import ToTargetCase from './ToTargetCase.mjs';
import ValidateString from './ValidateString.mjs';

const ImportFunction = async name => {
  const module = await import(`./${name}.mjs`);
  return module.default;
}

const hasBigInt = HasIntrinsic('BigInt');

const DecodeBigInt = hasBigInt ? await ImportFunction('DecodeBigInt') : undefined;
const DecodeBigIntBreak = hasBigInt ? await ImportFunction('DecodeBigIntBreak') : undefined;
const DecodeBigIntIgnore = hasBigInt ? await ImportFunction('DecodeBigIntIgnore') : undefined;
const DecodeBigIntStrict = hasBigInt ? await ImportFunction('DecodeBigIntStrict') : undefined;
const EncodeBigInt = hasBigInt ? await ImportFunction('EncodeBigInt') : undefined;

export {
  DecodeBigInt,
  DecodeBigIntBreak,
  DecodeBigIntIgnore,
  DecodeBigIntStrict,
  DecodeBytes,
  DecodeBytesBreak,
  DecodeBytesIgnore,
  DecodeBytesStrict,
  DecodeBytesInto,
  DecodeBytesIntoBreak,
  DecodeBytesIntoIgnore,
  DecodeBytesIntoStrict,
  DecodeInt,
  DecodeIntBreak,
  DecodeIntIgnore,
  DecodeIntStrict,
  EncodeBigInt,
  EncodeBytes,
  EncodeInt,
  GetMaxByteCount,
  IsValidString,
  StringStartsWithPrefix,
  ThrowInvalidCharacterError,
  ThrowInvalidLengthError,
  ToAllowedCase,
  ToErrorMode,
  ToTargetCase,
  ValidateString
};
