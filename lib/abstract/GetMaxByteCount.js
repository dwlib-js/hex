'use strict';

const MathFloor = require('#primordials/MathFloor');

const GetMaxByteCount = charCount => MathFloor(charCount / 2);

module.exports = GetMaxByteCount;
