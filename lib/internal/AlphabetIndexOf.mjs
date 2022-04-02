import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import Map from '#primordials/Map';
import MapSet from '#primordials/MapSet';
import {
  LOWERCASE_ALPHABET,
  UPPERCASE_ALPHABET
} from './alphabets.mjs';

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

export default AlphabetIndexOf;
