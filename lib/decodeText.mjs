import ToString from '#abstract/ToString';
import DecodeText from '#abstract-functions/DecodeText';
import DecodeTextOrThrow from '#abstract-functions/DecodeTextOrThrow';

const decodeText = (encodedString, fatal) => {
  const string = ToString(encodedString);
  return fatal ? DecodeTextOrThrow(string) : DecodeText(string);
}

export default decodeText;
