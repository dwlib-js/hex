import ToBigInt from '#abstract/ToBigInt';
import ToInteger from '#abstract/ToInteger';
import EncodeBigInt from '#abstract-functions/EncodeBigInt';
import ToTargetCase from '#abstract-functions/ToTargetCase';

const encodeBigInt = (bigint, targetCase, pad, prefix, digits) => {
  const value = ToBigInt(bigint);
  const finalCase = targetCase === undefined ? 'lower' : ToTargetCase(targetCase);
  const minDigits = digits === undefined ? 1 : ToInteger(digits);
  return EncodeBigInt(value, finalCase, pad, prefix, minDigits);
}

export default encodeBigInt;
