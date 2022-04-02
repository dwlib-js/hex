'use strict';

const BufferSourceAsUint8Array = require('#abstract/BufferSourceAsUint8Array');
const EncodeBytes = require('#abstract-functions/EncodeBytes');

const encode = (source, uppercase) => {
  const buffer = BufferSourceAsUint8Array(source);
  return EncodeBytes(buffer, uppercase);
}

module.exports = encode;
