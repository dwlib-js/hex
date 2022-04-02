import ToString from '#abstract/ToString';
import EncodeString from '#abstract-functions/EncodeString';
import EncodeStringOrThrow from '#abstract-functions/EncodeStringOrThrow';

const encodeString = (string, uppercase, fatal) => {
  const chars = ToString(string);
  return fatal ? EncodeStringOrThrow(chars, uppercase) : EncodeString(chars, uppercase);
}

export default encodeString;
