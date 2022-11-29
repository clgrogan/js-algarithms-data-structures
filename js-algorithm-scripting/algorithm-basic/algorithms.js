console.log("\n - - - Basic Algorithms - - -")
// Reverse the string parameter
function reverseString(str) {
  let revStr = "";

  for (let i = str.length-1; i >=0; i--){
    revStr += str[i];
  }
  return revStr;
}
// Return the factorial for a number
function factorialize(num) {

  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
}

// Find the Longest Word in a String
function findLongestWordLength(str) {
  console.log("Find the Longest Word in a String");
  let words = str.split(' ');
  let longest = 0;
  for (let i = 0; i < words.length; i++){
    if (words[i].length > longest) longest = words[i].length;
  }
  return longest;
}
// Return Largest Numbers in Arrays
const largestOfFour = (arr) => {
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    let maxVal = -999999;
    for (let j = 0; j < arr[i].length; j++){
      if(arr[i][j]>maxVal) maxVal = arr[i][j];
    }
    returnArr[i] = maxVal;

  }
  return returnArr;
}
// Substring end of string
const confirmEnding = (str, target) =>  target.length <= str.length && target == str.substr((str.length - target.length), target.length);
// Repeat a string
const repeatStringNumTimes = (str, num) => {
  let returnString = "";
  for (let i = 0; i < num && num > 0; i++) returnString += str;
  return returnString;
}
// Truncate a string
const truncateString = (str, num) => {
  return str.length > num ? str.substr(0, num) + '...': str;
}

// Truth test using a variable that is a function
const findElement = (arr, func) => {
  for (let i = 0; i < arr.length; i++){
    if (func(arr[i])) return arr[i];
  }
  return undefined;
}

// Is typeOf boolean
const booWho = (bool) => typeof bool == "boolean";
// Capitalize first letter of each word in a string
const titleCase = (str) => {
  let words = str.toLowerCase().split(" ");
  let reStr = "";
  for (let i = 0; i < words.length;i++){
    if (i>0) reStr += " ";
    reStr += words[i].substr(0,1).toUpperCase() + words[i].substr(1,words[i].length-1);
  }
  return reStr;
}
// Splice and Slice one array into another array
const frankenSplice = (arr1, arr2, n) =>  
  [...arr2.slice(0,n),...arr1,...arr2.slice(n)];

// Filter falsey values
const bouncer = (arr) => {
  let reArr = arr.filter( e => {
    if ( e != null ) return e;
  });
  return reArr;
}
// Return index for insertion
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < arr.length; i++){
    if ( num <= arr[i] ) return i;
  }
  return arr.length;
}
// String contains characters in another string
function mutation(arr) {
  for (let i = 0; i < arr[1].length;i++){
    if (!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) return false;
  }
  return true;
}
// Chunk array into smaller arrays and insert/return in a new array.
const chunkArrayInGroups = (arr, size) => {
  let reArr = [];
  let startI = 0;
  for (let i = 0; i < arr.length/size; i++){
    // console.log("\n\narr.slice(startI, startI + size) "+ arr.slice(startI, startI + size));
    reArr.push(arr.slice(startI, startI + size));
    startI += size; 
  }
  return reArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "olleHo"]));

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(bouncer([7, "ate", "", false, 9]));

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

console.log(titleCase("I'm a little tea pot"));

console.log(booWho(null));

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

console.log(repeatStringNumTimes("abc", 3));



console.log(confirmEnding("Bastian", "n"));
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(factorialize(5));
console.log(reverseString("hello"));
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));