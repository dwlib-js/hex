'use strict';

const ToBigInt = require('#abstract/ToBigInt');
const ToInteger = require('#abstract/ToInteger');
const EncodeBigInt = require('#abstract-functions/EncodeBigInt');
const ToTargetCase = require('#abstract-functions/ToTargetCase');

const encodeBigInt = (bigint, targetCase, pad, prefix, digits) => {
  const value = ToBigInt(bigint);
  const finalCase = targetCase === undefined ? 'lower' : ToTargetCase(targetCase);
  const minDigits = digits === undefined ? 1 : ToInteger(digits);
  return EncodeBigInt(value, finalCase, pad, prefix, minDigits);
}

module.exports = encodeBigInt;
