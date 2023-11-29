import { findLongestBasicSubstring } from "./basicLongestStringTS";

test("Should take basic string and return longest word", () => {
  const input = "one two three four";
  const expectedOutput = "three";
  const actualOutput = findLongestBasicSubstring(input);
  expect(actualOutput).toBe(expectedOutput);
});

test("Should take basic string with a single word and return it", () => {
  const input = "singleword";
  const expectedOutput = "singleword";
  const actualOutput = findLongestBasicSubstring(input);
  expect(actualOutput).toBe(expectedOutput);
});

test("Should take an empty string and return nothing", () => {
  const input = "";
  const expectedOutput = "";
  const actualOutput = findLongestBasicSubstring(input);
  expect(actualOutput).toBe(expectedOutput);
});

test("Should take a string with only special characters and return nothing", () => {
  const input = "#$%#&^*%$^#";
  const expectedOutput = "";
  const actualOutput = findLongestBasicSubstring(input);
  expect(actualOutput).toBe(expectedOutput);
});

test("Should take a string with single digit number strings and return the first", () => {
  const input = "5 4 3 6 5 8 9 3 9 0 9 1 3 5 7 8";
  const expectedOutput = "5";
  const actualOutput = findLongestBasicSubstring(input);
  expect(actualOutput).toBe(expectedOutput);
});

test("Should take a string with two words lots of spaces and return the second word", () => {
  const input = "first                      second";
  const expectedOutput = "second";
  const actualOutput = findLongestBasicSubstring(input);
  expect(actualOutput).toBe(expectedOutput);
});

test("Should take string where all subtrings are the same length minus special characters and return the first word", () => {
  const input =
    "one%^&#$ two#$&$% ^&*thr#$%#$%#$%#$% $%#fou@@## %f&#$#$#$#$#$$##$#$*iv $%s%^*ix";
  const expectedOutput = "one";
  const actualOutput = findLongestBasicSubstring(input);
  expect(actualOutput).toBe(expectedOutput);
});

test("Should take string where one string contains more special characters than a shorter string but the shorter string contains more accepted characters", () => {
  const input =
    "Thiswordisnotactuallythelongest!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Thiswordactuallyisactuallythelongestword";
  const expectedOutput = "Thiswordactuallyisactuallythelongestword";
  const actualOutput = findLongestBasicSubstring(input);
  expect(actualOutput).toBe(expectedOutput);
});
