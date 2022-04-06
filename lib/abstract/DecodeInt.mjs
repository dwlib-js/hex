import DecodeIntBreak from './DecodeIntBreak.mjs';
import DecodeIntIgnore from './DecodeIntIgnore.mjs';
import DecodeIntStrict from './DecodeIntStrict.mjs';

const DecodeInt = (string, errorMode, allowedCase, ignorePrefix) => {
  const decodeInt = (
    errorMode === 'strict' ? DecodeIntStrict :
    errorMode === 'ignore' ? DecodeIntIgnore : DecodeIntBreak
  );
  return decodeInt(string, allowedCase, ignorePrefix);
}

export default DecodeInt;
