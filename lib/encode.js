'use strict';

const BufferSourceAsUint8Array = require('#abstract/BufferSourceAsUint8Array');
const EncodeBytes = require('#abstract-functions/EncodeBytes');
const ToTargetCase = require('#abstract-functions/ToTargetCase');

const encode = (source, targetCase) => {
  const buffer = BufferSourceAsUint8Array(source);
  const finalCase = targetCase === undefined ? 'lower' : ToTargetCase(targetCase);
  return EncodeBytes(buffer, finalCase);
}

module.exports = encode;
