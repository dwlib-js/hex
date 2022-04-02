import ToString from '#abstract/ToString';
import DecodeInt from '#abstract-functions/DecodeInt';
import DecodeIntOrThrow from '#abstract-functions/DecodeIntOrThrow';

const decodeInt = (encodedString, fatal) => {
  const string = ToString(encodedString);
  return fatal ? DecodeIntOrThrow(string) : DecodeInt(string);
}

export default decodeInt;
