const printResult = (testing, regex, string, result, replaceWith) => {
  console.log(`\n - - - ${testing} start - - - `);
  console.log("Regular expression:\t" + regex);
  console.log("String evaluated: \t" + string);
  if (replaceWith) console.log("Replace With: \t" + replaceWith);
  console.log("result....");
  if (result) {
    console.log(`result count is ${result.length}`);
    console.log(result.toString());
  } else console.log("\tNot Found\n");
  console.log(`......... ${testing} end .........\n`);
};
/* Extract Matches Extract Method */
const matchMethod = () => {
  let extractStr = "Extract the word 'coding' from this string.";
  let codingRegex = /codings/; // Change this line
  let result = extractStr.match(codingRegex); // Change this line

  printResult(".match() method", codingRegex, extractStr, result);
};
/* Extract Matches Extract Method Global*/
const matchMethodG = () => {
  let twinkleStar = "Twinkle, twinkle, little star";
  let starRegex = /twinkle/gi; // Change this line
  let result = twinkleStar.match(starRegex); // Change this line

  printResult(".match() method global flag", starRegex, twinkleStar, result);
};

const wildCard = () => {
  let exampleStr = "Let's have fun with regular expressions!";
  let unRegex = /.un/; // Change this line
  let result = unRegex.test(exampleStr);
  printResult("wildcard '.' ", unRegex, exampleStr, result);
};
const characterClass = () => {
  let quoteSample =
    "Beware of bugs in the above code; I have only proved it correct, not tried it.";
  let vowelRegex = /[aeiou]/gi;
  let result = quoteSample.match(vowelRegex);
  printResult("characterClass vowels ", vowelRegex, quoteSample, result);
};
const characterSets = () => {
  let quoteSample = "The quick brown fox jumps over the lazy dog.";
  let alphabetRegex = /[a-z]/gi; // Change this line
  let result = quoteSample.match(alphabetRegex);
  printResult("characterSets alphabet ", alphabetRegex, quoteSample, result);
};
const characterSetCombos = () => {
  let quoteSample = "Blueberry 3.141592653s are delicious.";
  let myRegex = /[h-s2-6]/gi; // Change this line
  let result = quoteSample.match(myRegex);
  printResult("characterSets alphanumeric ", myRegex, quoteSample, result);
};
const negatedCharacterSets = () => {
  let quoteSample = "3 blind mice.";
  let myRegex = /[^aeiou0-9]/gi; // Change this line
  let result = quoteSample.match(myRegex); // Change this line
  printResult(
    "negatedCharacterSets not a vowel or number ",
    myRegex,
    quoteSample,
    result
  );
};
const repeatCharacters = () => {
  let difficultSpelling = "Mississippi";
  let myRegex = /s+/g; // Change this line
  let result = difficultSpelling.match(myRegex);
  printResult("repeatCharacters ", myRegex, difficultSpelling, result);
};
const repeatCharactersZeroPlus = () => {
  let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);
  printResult("repeatCharactersZeroPlus ", chewieRegex, chewieQuote, result);
};
const lazyMatching = () => {
  let text = "<h1>Winter is coming</h1>";
  let myRegex = /<.*?>/;
  let result = text.match(myRegex);
  printResult("repeatCharacters ", myRegex, text, result);
};
const beginningWith = () => {
  let rickyAndCal = "Cal and Ricky both like racing.";
  let calRegex = /^Cal/; // Change this line
  let result = calRegex.test(rickyAndCal);
  printResult("beginningWith ", calRegex, rickyAndCal, result);
};
const endingWith = () => {
  let caboose = "The last car on a train is the caboose";
  let lastRegex = /caboose$/; // Change this line
  let result = lastRegex.test(caboose);
  printResult("endingWith ", lastRegex, caboose, result);
};
const alphanumericShorthand = () => {
  // Use the shorthand character class \w to count the
  // number of alphanumeric characters in various quotes and strings.
  let quoteSample = "The five boxing wizards jump quickly.";
  let alphabetRegexV2 = /\w/g; // Change this line
  let result = quoteSample.match(alphabetRegexV2).length;
  printResult("alphanumericShorthand ", alphabetRegexV2, quoteSample, result);
};
const nonAlphanumericShorthand = () => {
  let quoteSample = "The five boxing wizards jump quickly.";
  let nonAlphabetRegex = /\W/g; // Change this line
  let result = quoteSample.match(nonAlphabetRegex).length;
  printResult(
    "nonAlphanumericShorthand ",
    nonAlphabetRegex,
    quoteSample,
    result
  );
};
const restrictUsernamesChallenge = () => {
  /*
  * You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
  * 1. Usernames can only use alpha-numeric characters.
  * 2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
  * 3. Username letters can be lowercase and uppercase.
  * 4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
  */

  let username = "JackOfAllTrades111";
  let userCheck = /^[a-z]\d\d+$|^[a-z][a-z]+\d*$/i; // Change this line
  let result = userCheck.test(username);
  printResult(
    "restrictUsernamesChallenge ",
    userCheck,
    username,
    result);
};
const justDigitsShorthand = () => {
  let movieName = "2001: A Space Odyssey";
  let numRegex = /\d/g; // Change this line
  let result = movieName.match(numRegex).length;
  printResult("justDigitsShorthand ", numRegex, movieName, result);
};
const restrictUsernames = () => {
  let username = "JackOfAllTrades";
  let userCheck = /\d/; // Change this line
  let result = userCheck.test(username);
  printResult("restrictUsernames ", userCheck, username, result);
};
const whitespaceFun = () => {
  let sample = "Whitespace is important in separating words";
  let getWhitespace = /\s/g;
  let getNonWhitespace = /\S/g;
  let result = sample.match(getWhitespace);
  printResult("whitespaceFun 1 ", getWhitespace, sample, result);
  result = sample.match(getNonWhitespace);
  printResult("whitespaceFun 2 ", getNonWhitespace, sample, result);
};

const upperLowerLimitTests = () => {
  let ohStr = "Ohhh no";
  let ohStr2 = "Ohh no";
  let ohStr7 = "Ohhhhhhh no";
  let ohRegex = /Oh{3,6}\sno/; // Change this line
  let result = ohRegex.test(ohStr);
  printResult("upperLowerLimitTests ", ohRegex, ohStr, result);
  result = ohRegex.test(ohStr);
  printResult("upperLowerLimitTests ", ohRegex, ohStr2, result);
  result = ohRegex.test(ohStr);
  printResult("upperLowerLimitTests ", ohRegex, ohStr7, result);
};
const lowerLimitTest = () => {
  let haStr = "Hazzzzah";
  let haStr3 = "Hazzzah";
  let haStr100 = "Ha" + "z".repeat(100) + "ah";
  let haRegex = /Haz{4,}ah/; // Change this line
  let result = haRegex.test(haStr);
  printResult("lowerLimitTest ", haRegex, haStr, result);
  result = haRegex.test(haStr3);
  printResult("lowerLimitTest ", haRegex, haStr3, result);
  result = haRegex.test(haStr100);
  printResult("lowerLimitTest ", haRegex, haStr100, result);
};
const exactCountTest = () => {
  let haStr = "Hazzah";
  let haStr3 = "Hazzzah";
  let haStr100 = "Ha" + "z".repeat(100) + "ah";
  let haRegex = /Haz{3}ah/; // Change this line
  let result = haRegex.test(haStr);
  printResult("exactCountTest ", haRegex, haStr, result);
  result = haRegex.test(haStr3);
  printResult("exactCountTest ", haRegex, haStr3, result);
  result = haRegex.test(haStr100);
  printResult("exactCountTest ", haRegex, haStr100, result);
};

const lookaheadChecks = () => {
  let sampleWord = "astronaut";
  let pwRegex = /(?=\w{6,})(?=\w*\d{2,})/;
  let result = pwRegex.test(sampleWord);
  printResult(
    "lookaheadChecks ",
    pwRegex,
    sampleWord,
    result);

};
const mixedGroupingCharacters = () => {
  let myString = "Eleanor Roosevelt";
  let myRegex = /(Franklin\sD.|Franklin|Eleanor)\sRoosevelt/; // Change this line
  let result = myRegex.test(myString); // Change this line
  printResult(
    "lookaheadChecks ",
    myRegex,
    myString,
    result);
};
const reusePattersWithCaptureGroups = () => {
  let repeatNum = "42 42 42";
  let reRegex = /^(\d+) \1 \1$/;
  let result = reRegex.test(repeatNum); // Change this line
  printResult(
    "reusePattersWithCaptureGroups ",
    reRegex,
    repeatNum,
    result);
  repeatNum = "42 42 42 42";
  result = reRegex.test(repeatNum); // Change this line
  printResult(
    "reusePattersWithCaptureGroups ",
    reRegex,
    repeatNum,
    result);
};
const captureGroupsSearchAndReplace = () => {
  let str = "one two three";
  let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
  let replaceText = "$3 $2 $1"; // Change this line
  let result = str.replace(fixRegex, replaceText);
  printResult(
    "captureGroupsSearchAndReplace ",
    fixRegex,
    str,
    result,
    replaceText);
};
const trimWhitespaceWithRegex = () => {
  let hello = "   Hello, World!  ";
  let wsRegex = /^\s+|\s+$/g; // Change this line
  let result = hello.replace(wsRegex,''); // Change this line
  printResult(
    "trimWhitespaceWithRegex ",
    wsRegex,
    hello,
    result);
  }

matchMethod();
matchMethodG();
wildCard();
characterClass();
characterSets();
characterSetCombos();
negatedCharacterSets();
repeatCharacters();
repeatCharactersZeroPlus();
lazyMatching();
beginningWith();
endingWith();
alphanumericShorthand();
nonAlphanumericShorthand();
restrictUsernamesChallenge();
whitespaceFun();
upperLowerLimitTests();
lowerLimitTest();
exactCountTest();
lookaheadChecks();
mixedGroupingCharacters();
restrictUsernamesChallenge();
reusePattersWithCaptureGroups();
captureGroupsSearchAndReplace();
trimWhitespaceWithRegex();
