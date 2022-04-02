import ToString from '#abstract/ToString';
import DecodeString from '#abstract-functions/DecodeString';
import DecodeStringOrThrow from '#abstract-functions/DecodeStringOrThrow';

const decodeString = (encodedString, fatal) => {
  const string = ToString(encodedString);
  return fatal ? DecodeStringOrThrow(string) : DecodeString(string);
}

export default decodeString;
