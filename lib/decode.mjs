import ToString from '#abstract/ToString';
import DecodeBytes from '#abstract-functions/DecodeBytes';
import DecodeBytesOrThrow from '#abstract-functions/DecodeBytesOrThrow';

const decode = (encodedString, fatal) => {
  const string = ToString(encodedString);
  return fatal ? DecodeBytesOrThrow(string) : DecodeBytes(string);
}

export default decode;
