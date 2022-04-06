import MathFloor from '#primordials/MathFloor';
import GetAlphabet from '#internal/GetAlphabet';

const EncodeInt = (integer, targetCase, pad, prefix, digits) => {
  const alphabet = GetAlphabet(targetCase);
  let string = '';
  let carry = integer < 0 ? -integer : integer;
  while (carry) {
    const charIndex = carry % 16;
    const char = alphabet[charIndex];
    string = `${char}${string}`;
    carry = MathFloor(carry / 16);
  }
  if (!string.length) {
    string = '0';
  }
  if (pad && string.length % 2) {
    string = `0${string}`;
  }
  while (string.length < digits) {
    string = `0${string}`;
  }
  if (prefix) {
    string = `0x${string}`;
  }
  return string;
}

export default EncodeInt;
