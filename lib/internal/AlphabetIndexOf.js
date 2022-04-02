'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const Map = require('#primordials/Map');
const MapSet = require('#primordials/MapSet');
const {
  LOWERCASE_ALPHABET,
  UPPERCASE_ALPHABET
} = require('./alphabets');

const MapPrototypeGet = GetIntrinsicOrThrow('Map.prototype.get');

const ALPHABET_LOOKUP = new Map();

for (let i = 0; i < 16; i++) {
  const char1 = LOWERCASE_ALPHABET[i];
  const char2 = UPPERCASE_ALPHABET[i];
  MapSet(ALPHABET_LOOKUP, char1, i);
  if (char2 !== char1) {
    MapSet(ALPHABET_LOOKUP, char2, i);
  }
}

const AlphabetIndexOf = FunctionBind(MapPrototypeGet, ALPHABET_LOOKUP);

module.exports = AlphabetIndexOf;
