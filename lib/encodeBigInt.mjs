import ToBigInt from '#abstract/ToBigInt';
import EncodeBigInt from '#abstract-functions/EncodeBigInt';

const encodeBigInt = (bigint, uppercase) => {
  const value = ToBigInt(bigint);
  return EncodeBigInt(value, uppercase);
}

export default encodeBigInt;
