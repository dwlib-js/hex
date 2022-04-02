import ToInteger from '#abstract/ToInteger';
import EncodeInt from '#abstract-functions/EncodeInt';

const encodeInt = (integer, uppercase) => {
  const value = ToInteger(integer);
  return EncodeInt(value, uppercase);
}

export default encodeInt;
