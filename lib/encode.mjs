import IsBufferSource from '#types/isBufferSource';
import BufferSourceAsUint8Array from '#abstract/BufferSourceAsUint8Array';
import ToString from '#abstract/ToString';
import UTF8EncodeString from '#utf8/EncodeString';
import EncodeBytes from '#abstract-functions/EncodeBytes';
import ToTargetCase from '#abstract-functions/ToTargetCase';

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

export default encode;
