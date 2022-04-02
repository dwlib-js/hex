import ToString from '#abstract/ToString';
import EncodeText from '#abstract-functions/EncodeText';

const encodeText = (text, uppercase) => {
  const string = ToString(text);
  return EncodeText(string, uppercase);
}

export default encodeText;
