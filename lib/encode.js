'use strict';

const IsBufferSource = require('#types/isBufferSource');
const BufferSourceAsUint8Array = require('#abstract/BufferSourceAsUint8Array');
const ToString = require('#abstract/ToString');
const UTF8EncodeString = require('#utf8/EncodeString');
const EncodeBytes = require('#abstract-functions/EncodeBytes');
const ToTargetCase = require('#abstract-functions/ToTargetCase');

const encode = (input, targetCase) => {
  let buffer;
  if (IsBufferSource(input)) {
    buffer = BufferSourceAsUint8Array(input);
  } else {
    const string = ToString(input);
    buffer = UTF8EncodeString(string);
  }
  const finalCase = targetCase === undefined ? 'lower' : ToTargetCase(targetCase);
  return EncodeBytes(buffer, finalCase);
}

module.exports = encode;
