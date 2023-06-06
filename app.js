//  Function One
// Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
const maxOfTwoNumbers = (a, b) => {
  if (parseInt(a) > parseInt(b)) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return "They are the same number";
  }
};

console.log(maxOfTwoNumbers(100, 20));

// Function Two
// Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = (a, b, c) => {
  if (a > b) {
    if (a > c) return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
};

console.log(maxOfThree(100, 20, 78));

// Function Three
// Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
function isAVowel(char) {
  if (char === "a") {
    return "True";
  } else if (char === "e") {
    return "True";
  } else if (char === "i") {
    return "True";
  } else if (char === "o") {
    return "True";
  } else if (char === "u") {
    return "True";
  } else {
    return "False";
  }
}

console.log(isAVowel("u"));
console.log(isAVowel("b"));
console.log(isAVowel("app"));
console.log(isAVowel("3"));

// Function Four
// Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

const sumArray = (arr) => {
  let finalNum = 0;
  arr.forEach((num) => {
    finalNum = +num;
  });
  console.log("ArrValues added = ", finalNum);
};

sumArray([1, 2, 3, 4, 5]);
sumArray([2, 2, 7, 0, 59]);

// Function Five
// Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
const multiplyArray = (arr) => {
  let finalNum = 1;
  arr.forEach((num) => {
    finalNum = finalNum * num;
  });
  console.log("ArrValues multipled = ", finalNum);
};

multiplyArray([1, 2, 3, 4, 5]);
multiplyArray([4, 2, 5, 8]);

// Function Six
// Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.
const numArgs = (...args) => {
  let numOfArgs = args.length;
  console.log(`The number of Arguements: ${numOfArgs}`);
};

numArgs(1, 5, 9);
numArgs(1);
numArgs(1, 5, 9, 12, 15);

// Function Seven
// Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
const reverseString = (string) => {
  let newString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("12345"));

// Function Eight
// Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.
const longestStringArray = (arr) => {
  let longestCount = 0;
  let longestWord;
  arr.forEach((str) => {
    if (str.length > longestCount) {
      longestWord = str;
      longestCount = str.length;
    }
  });
  console.log(
    `The longest string is ${longestWord} with ${longestCount} characters`
  );
};

longestStringArray(["green", "red", "violet"]);

// Function Nine
// Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
const stringLongerThan = (str, num) => {
  let longerThan = [];
  str.forEach((word) => {
    if (word.length >= num) {
      longerThan.push(word);
    }
  });
  console.log(longerThan);
};

stringLongerThan(["cindylou", "max", "billybob", "christucker"], 5);
