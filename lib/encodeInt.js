'use strict';

const ToInteger = require('#abstract/ToInteger');
const EncodeInt = require('#abstract-functions/EncodeInt');
const ToTargetCase = require('#abstract-functions/ToTargetCase');

const encodeInt = (integer, targetCase, pad, prefix, digits) => {
  const value = ToInteger(integer);
  const finalCase = targetCase === undefined ? 'lower' : ToTargetCase(targetCase);
  const minDigits = digits === undefined ? 1 : ToInteger(digits);
  return EncodeInt(value, finalCase, pad, prefix, minDigits);
}

module.exports = encodeInt;
