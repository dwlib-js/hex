import BufferSourceAsUint8Array from '#abstract/BufferSourceAsUint8Array';
import EncodeBytes from '#abstract-functions/EncodeBytes';
import ToTargetCase from '#abstract-functions/ToTargetCase';

const encode = (source, targetCase) => {
  const buffer = BufferSourceAsUint8Array(source);
  const finalCase = targetCase === undefined ? 'lower' : ToTargetCase(targetCase);
  return EncodeBytes(buffer, finalCase);
}

export default encode;
