'use strict';

const BigInt = require('#primordials/BigInt');
const GetAlphabet = require('#internal/GetAlphabet');

const BASE = BigInt(16);
const ZERO = BigInt(0);

const EncodeBigInt = (bigint, targetCase, pad, prefix, digits) => {
  const alphabet = GetAlphabet(targetCase);
  let string = '';
  let carry = bigint < ZERO ? -bigint : bigint;
  while (carry) {
    const charIndex = carry % BASE;
    const char = alphabet[charIndex];
    string = `${char}${string}`;
    carry /= BASE;
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

module.exports = EncodeBigInt;
