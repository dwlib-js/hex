import ToString from '#abstract/ToString';
import NormalizeString from '#abstract-functions/NormalizeString';
import ToAllowedCase from '#abstract-functions/ToAllowedCase';
import ToErrorMode from '#abstract-functions/ToErrorMode';
import ToTargetCase from '#abstract-functions/ToTargetCase';

const normalize = (string, errorMode, allowedCase, targetCase) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validCase = allowedCase === undefined ? 'mixed' : ToAllowedCase(allowedCase);
  const finalCase = targetCase === undefined ? 'lower' : ToTargetCase(targetCase);
  return NormalizeString(chars, mode, validCase, finalCase);
}

export default normalize;
