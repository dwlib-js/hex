'use strict';

const StringCodePointAt = require('#primordials/StringCodePointAt');
const ThrowInvalidCodePointError = require('#utf8/ThrowInvalidCodePointError');
const {
  LOWERCASE_ALPHABET,
  UPPERCASE_ALPHABET
} = require('#internal/alphabets');

const EncodeText = (text, uppercase) => {
  const length = text.length;
  const alphabet = uppercase ? UPPERCASE_ALPHABET : LOWERCASE_ALPHABET;
  let string = '';
  for (let i = 0; i < length; i++) {
    const codePoint = StringCodePointAt(text, i);
    if (codePoint <= 0x7f) {
      const charIndex1 = codePoint >> 4;
      const charIndex2 = codePoint & 0xf;
      const char1 = alphabet[charIndex1];
      const char2 = alphabet[charIndex2];
      string += `${char1}${char2}`;
    } else if (codePoint <= 0x7ff) {
      const byte1 = (codePoint >> 6) | 0xc0;
      const byte2 = (codePoint & 0x3f) | 0x80;
      const charIndex1 = byte1 >> 4;
      const charIndex2 = byte1 & 0xf;
      const charIndex3 = byte2 >> 4;
      const charIndex4 = byte2 & 0xf;
      const char1 = alphabet[charIndex1];
      const char2 = alphabet[charIndex2];
      const char3 = alphabet[charIndex3];
      const char4 = alphabet[charIndex4];
      string += `${char1}${char2}${char3}${char4}`;
    } else if (codePoint <= 0xffff) {
      const byte1 = (codePoint >> 12) | 0xe0;
      const byte2 = ((codePoint >> 6) & 0x3f) | 0x80;
      const byte3 = (codePoint & 0x3f) | 0x80;
      const charIndex1 = byte1 >> 4;
      const charIndex2 = byte1 & 0xf;
      const charIndex3 = byte2 >> 4;
      const charIndex4 = byte2 & 0xf;
      const charIndex5 = byte3 >> 4;
      const charIndex6 = byte3 & 0xf;
      const char1 = alphabet[charIndex1];
      const char2 = alphabet[charIndex2];
      const char3 = alphabet[charIndex3];
      const char4 = alphabet[charIndex4];
      const char5 = alphabet[charIndex5];
      const char6 = alphabet[charIndex6];
      string += `${char1}${char2}${char3}${char4}${char5}${char6}`;
    } else if (codePoint <= 0x10ffff) {
      const byte1 = (codePoint >> 18) | 0xf0;
      const byte2 = ((codePoint >> 12) & 0x3f) | 0x80;
      const byte3 = ((codePoint >> 6) & 0x3f) | 0x80;
      const byte4 = (codePoint & 0x3f) | 0x80;
      const charIndex1 = byte1 >> 4;
      const charIndex2 = byte1 & 0xf;
      const charIndex3 = byte2 >> 4;
      const charIndex4 = byte2 & 0xf;
      const charIndex5 = byte3 >> 4;
      const charIndex6 = byte3 & 0xf;
      const charIndex7 = byte4 >> 4;
      const charIndex8 = byte4 & 0xf;
      const char1 = alphabet[charIndex1];
      const char2 = alphabet[charIndex2];
      const char3 = alphabet[charIndex3];
      const char4 = alphabet[charIndex4];
      const char5 = alphabet[charIndex5];
      const char6 = alphabet[charIndex6];
      const char7 = alphabet[charIndex7];
      const char8 = alphabet[charIndex8];
      string += `${char1}${char2}${char3}${char4}${char5}${char6}${char7}${char8}`;
      i++;
    } else {
      ThrowInvalidCodePointError(i);
    }
  }
  return string;
}

module.exports = EncodeText;
