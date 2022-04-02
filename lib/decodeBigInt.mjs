import ToString from '#abstract/ToString';
import DecodeBigInt from '#abstract-functions/DecodeBigInt';
import DecodeBigIntOrThrow from '#abstract-functions/DecodeBigIntOrThrow';

const decodeBigInt = (encodedString, fatal) => {
  const string = ToString(encodedString);
  return fatal ? DecodeBigIntOrThrow(string) : DecodeBigInt(string);
}

export default decodeBigInt;
