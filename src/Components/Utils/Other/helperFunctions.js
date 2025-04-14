export const isSpecificCharacterUpperCase = (str, index) => {
  return (
    str.length > index &&
    str[index] === str[index].toUpperCase() &&
    /[A-Z]/.test(str[index])
  );
};
