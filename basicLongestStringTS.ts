// Remove special characters from string and return only characters a-z, A-Z, 0-9, and spaces
const removeSpecialCharacters = (inputString: string): string => {
  return inputString.replace(/[^a-zA-Z0-9 ]/g, "");
};

// Options for sort order
enum StringSortOrder {
  ascending,
  descending,
}

// Sort array in place by length of word descending or ascending
const sortStringsArrayByLength = (
  stringArray: string[],
  order: StringSortOrder
): string[] => {
  return stringArray.sort((a, b) => {
    if (order === StringSortOrder.ascending) {
      return a.length - b.length;
    } else if (order === StringSortOrder.descending) {
      return b.length - a.length;
    } else {
      return 0;
    }
  });
};

// Split string on whitespace characters to find all words
const splitStringIntoWords = (inputString: string): string[] => {
  return inputString.split(/\s+/);
};

// Find longest substring containing only basic characters (a-z, A-Z, 0-9)
export const findLongestBasicSubstring = (inputString: string): string => {
  // Remove all special characters
  const basicInputString = removeSpecialCharacters(inputString);

  const arrayOfWords = splitStringIntoWords(basicInputString);

  // Sort array of words by length descending
  const sortedArrayOfWords = sortStringsArrayByLength(
    arrayOfWords,
    StringSortOrder.descending
  );

  // Return the first longest word found
  return sortedArrayOfWords[0];
};
