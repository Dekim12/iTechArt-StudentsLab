let count = 0;

export const generateKey = () => {
  count += 1;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index = Math.floor(Math.random() * (alphabet.length - 0) + 0);
  const key = count + alphabet[index];
  return key;
};

export const defineClassName = (indicator, className) => {
  if (indicator) {
    return className;
  }
  return '';
};
