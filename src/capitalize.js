const capitalize = (str) => {
  const str1 = str.slice(0, 1).toUpperCase();
  const str2 = str.slice(1, str.length);
  return str1 + str2;
};
module.exports = capitalize;
