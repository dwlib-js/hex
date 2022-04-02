'use strict';

const ToString = require('#abstract/ToString');
const EncodeText = require('#abstract-functions/EncodeText');

const encodeText = (text, uppercase) => {
  const string = ToString(text);
  return EncodeText(string, uppercase);
}

module.exports = encodeText;
