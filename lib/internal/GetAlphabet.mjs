const LOWERCASE_ALPHABET = '0123456789abcdef';
const UPPERCASE_ALPHABET = '0123456789ABCDEF';

const GetAlphabet = targetCase => targetCase === 'upper' ? UPPERCASE_ALPHABET : LOWERCASE_ALPHABET;

export default GetAlphabet;
