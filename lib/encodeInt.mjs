import ToInteger from '#abstract/ToInteger';
import EncodeInt from '#abstract-functions/EncodeInt';
import ToTargetCase from '#abstract-functions/ToTargetCase';

const encodeInt = (integer, targetCase, pad, prefix, digits) => {
  const value = ToInteger(integer);
  const finalCase = targetCase === undefined ? 'lower' : ToTargetCase(targetCase);
  const minDigits = digits === undefined ? 1 : ToInteger(digits);
  return EncodeInt(value, finalCase, pad, prefix, minDigits);
}

export default encodeInt;
