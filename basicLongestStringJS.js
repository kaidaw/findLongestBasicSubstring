module.exports.findLongestBasicSubstring = findLongestBasicSubstring = (
  subString
) => {
  return subString
    .split(/\s+/)
    .map((word) => {
      return word.replace(/[^a-zA-Z0-9]/g, "");
    })
    .sort((a, b) => {
      return b.length - a.length;
    })[0];
};
