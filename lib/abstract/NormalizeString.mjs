import NormalizeStringBreak from './NormalizeStringBreak.mjs';
import NormalizeStringIgnore from './NormalizeStringIgnore.mjs';
import NormalizeStringStrict from './NormalizeStringStrict.mjs';

const NormalizeString = (string, errorMode, allowedCase, targetCase) => {
  const normalize = (
    errorMode === 'strict' ? NormalizeStringStrict :
    errorMode === 'ignore' ? NormalizeStringIgnore : NormalizeStringBreak
  );
  return normalize(string, allowedCase, targetCase);
}

export default NormalizeString;
