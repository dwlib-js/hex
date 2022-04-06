const StringStartsWithPrefix = string => {
  const length = string.length;
  return length > 1 && string[0] === '0' && string[1] === 'x';
}

export default StringStartsWithPrefix;
