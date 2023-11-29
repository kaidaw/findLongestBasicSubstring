Find Longest String Algorithm

Algorithm to take a string containing substrings and return the longest substring after removing the special characters and leaving only letters (a-z and A-Z) and numbers (0-9).

basicLongestStringJS.js

This solution attempts to solve the problem as concisely as possible and creates a function with a single line of code employing various array/ string methods to discover and return the longest valid substring.

basicLongestStringTS.ts

This is my attempt to present a solution which is up to production standards including use of Typescript types, enums, regex, comments, and reusable functions to separate concerns.

basicLongestStringTS.test.ts & basicLongestStringJS.test.ts

These are test cases which I have used Jest to compile and run, testing various input strings against expected outcomes to verify that the solutions work as intended.

Installation and use instructions:

To install:

-Clone from github
-Run the command:

```
npm install
```

To run tests:

-Run the command:

```
run npm t
```
