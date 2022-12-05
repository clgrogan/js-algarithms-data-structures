// Sum of two numbers and all numbers between
const sumAll = (arr) => {
  const newArr = [...arr].sort((a, b) => a - b);
  let total = 0;
  for (let i = newArr[0]; i <= newArr[1]; i++) {
    total += i;
  }
  return total;
}
console.log(sumAll([1, 4]));

// Merge two arrays with only unique values between them.
const diffArray = (arr1, arr2) => {
  const reArr = [];
  for (let e of arr1) { if (!arr2.includes(e)) reArr.push(e); }
  for (let e of arr2) { if (!arr1.includes(e)) reArr.push(e); }
  return reArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// Another persons solution I like. 
// I had tried similar, but wasn't getting the filter working quickly.
function diffArrayOption(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

// Remove items from array. Need to accept the array, and unknown number of args.
const destroyer = (arr, ...rest) => arr.filter(e => !rest.includes(e));
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// Return array of objects from an array 
// where the element object matches the source object value pairs.
const whatIsInAName = (collection, source) => collection.filter(e => {
  for (let key in source) {
    console.log("key: " + key);
    if (!e.hasOwnProperty(key) || !(source[key] == e[key]))
      return false;
  }
  return true;
});
console.log("\n\twhatIsInAName");
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));

// Convert string to spinal case all-lowercase-words-joined-by-dashes
const spinalCase = (str) => str.replace(/_/g, '-').replace(/(\B[A-Z])/g, '-$1').split(/\W/).join("-").toLowerCase();
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("thisIsSpinalTap"));

// Translate String into Pig Latin
const translatePigLatin = (str) => {
  const reArr = str.split(/\s+/).map(e => {
    if ('aeiou'.includes(e[0]))
      return e + "way";
    else
      for (let i = 0; i < e.length && !'aeiou'.includes(e[0]); i++) {
        e = e.substr(1).concat(e.substr(0, 1));
      }
    // return e.substr(1).concat(e.substr(0,1)).concat("ay");
    return e.concat("ay");
  });
  return reArr[0];
}
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("bcd"));
console.log(translatePigLatin("tap"));
// Translate String into Pig Latin OPC (Other People's Code)
function translatePigLatinOPC(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}
console.log(translatePigLatinOPC("consonant"));
console.log(translatePigLatinOPC("california"));
console.log(translatePigLatinOPC("eight"));
console.log(translatePigLatinOPC("glove"));
console.log(translatePigLatinOPC("bcd"));
console.log(translatePigLatinOPC("tap"));

// Search and Replace a word in a sentance 
// retain the case of the replaced word.
const myReplace = (str, before, after) => str.replace(before, ((before[0] ==
  before[0].toUpperCase()) ?
  after[0].toUpperCase().concat(after.substr(1)) :
  after[0].toLowerCase().concat(after.substr(1))));

/* let afterCase = (before[0] == 
     before[0].toUpperCase()) ? 
     after[0].toUpperCase().concat(after.substr(1)) :
     after[0].toLowerCase().concat(after.substr(1));
*/
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped"));

// DNA Pairing Given a string single strand, create a second strand.
// Return a two dimensional array with the nested array being the nucleabase pairs
// Pairing is AT or CG for the four nucleobases.
const pairElement = (str) => [...str].map(e =>
  [e,
    (e == "G") ?
      "C" : (e == "C") ?
        "G" : (e == "T") ?
          "A" : "T"]);
console.log(pairElement("GCGTA"));

// find the missing letter in an ascending string sequence
// return the letter or undefined
const fearNotLetter = (str) => {
  const asciiArr = [...str].map(e => e.charCodeAt());
  for (let i = 1; i < asciiArr.length; i++) {
    if (asciiArr[i - 1] + 1 != asciiArr[i])
      return String.fromCharCode(asciiArr[i - 1] + 1);
  }
  return undefined; // Not required, but I prefer to be explicit
}
console.log(fearNotLetter("abce")); // returns 'd'
console.log(fearNotLetter("abcde")); // returns undefined
// Down with the OPC (Other People's Code)

// Join arrays, remove duplicates
// arrays are provided as separate parameters
const uniteUnique = (...arr) =>
  arr.flat().filter(((e, i, array) => array.indexOf(e) === i));
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Convert HTML Reserved Characters in a string to HTML Entity Names
/* 
 Character	Entity Number	Entity Name	Description
 "	&#34;	&quot;	quotation mark
 '	&#39;	&apos;	apostrophe 
 &	&#38;	&amp;	ampersand
 <	&#60;	&lt;	less-than
 >	&#62;	&gt;	greater-than
*/
const convertHTML = (str) => {
  const reservedChars = ['"', "'", "&", "<", ">"];
  const reservedCharNames = ["&quot;", "&apos;", "&amp;", "&lt;", "&gt;"];
  let reStr = "";
  const chars = [...str];
  for (e of chars) {
    switch (e) {
      case reservedChars[0]:
        reStr += reservedCharNames[0];
        break;
      case reservedChars[1]:
        reStr += reservedCharNames[1];
        break;
      case reservedChars[2]:
        reStr += reservedCharNames[2];
        break;
      case reservedChars[3]:
        reStr += reservedCharNames[3];
        break;
      case reservedChars[4]:
        reStr += reservedCharNames[4];
        break;
      default:
        reStr += e;
    }
  }
  return reStr;
}
console.log(convertHTML('Dolce & "Gabbana"'));

// Return the sum of odd Fibonacci numbers that are less than or equal to the number provided
const sumFibs = (num) => {
  let oddFibs = 0;
  let priorFib = 0;
  let currentFib = 1;
  while (currentFib <= num) {
    oddFibs += (currentFib % 2 == 0) ? 0 : currentFib;
    currentFib += priorFib;
    priorFib = currentFib - priorFib;
  }
  return oddFibs;
}

console.log(sumFibs(4));
console.log(sumFibs(1));

// Sum Prime Numbers Up To the Number Provided
const sumPrimes = (num) => {
  const isPrime = (num) => {
    // return 0 if the number is not prime
    // return the number if the number is prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return 0;
    }
    return num;
  }
  let sumOfPrimes = 0;
  for (let i = 2; i <= num; i++) {
    sumOfPrimes += isPrime(i);
  }
  return sumOfPrimes;
}
console.log(sumPrimes(10));

// Drop elements from the array until the function is true
function dropElements(arr, func) {
  let reArr = [...arr];
  for (e of arr) {
    if (func(e)) return reArr;
    else reArr.shift();
  }
  return reArr;
}
console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));

// Flatten a nested array
const steamrollArray = (arr, finalArr = []) => {
  arr.forEach(e => Array.isArray(e) ? steamrollArray(e, finalArr) : finalArr.push(e));
  return finalArr;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));

// Construct a sentence from a string of binary codes
const binaryToCharCode = (bi) => parseInt(bi, 2);
const binaryToString = (bi) => String.fromCharCode(binaryToCharCode(bi));
const binaryAgent = (str) =>
  str.split(" ").map(e => binaryToString(e)).join("");

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// Test if all objects in an array have a specified property
const truthCheck = (collection, pre) =>
  collection.every(e => e[pre]);
console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"));
console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"));

// isNaN
var a = 123;
var b = "sometext";
var c = true;
var d;
var e = null;

console.log("isNaN " + a + ": " + isNaN(a));
console.log("isNaN " + b + ": " + isNaN(b));
console.log("isNaN " + c + ": " + isNaN(c));
console.log("isNaN " + d + ": " + isNaN(d));
console.log("isNaN " + e + ": " + isNaN(e));

// Optional Argument
// function to accept one or two numbers and add them together.
// if only one argument provided, then return a function requesting an argument.
function addTogether(...args) {
  if (typeof args[0] !== 'number') return undefined;
  if (args.length == 1) {
    function addSecond(second) {
      // New argument is not a number
      if (typeof second !== 'number') {
        return undefined;
      }
      // New argument is a number
      else {
        return args[0] + second;
      }
      // Note: returning a *function*
    }
    return addSecond;
  }
  if (typeof args[1] !== 'number') return undefined;
  return args[0] + args[1];
}
console.log(addTogether("null", 3)); // undefined
console.log(addTogether(null, 3)); // undefined
console.log(addTogether(2, 3)); // 5
console.log(addTogether(2)); // Return function
console.log(addTogether(2, "3")); // undefined per fcc ...excludes isNaN
console.log(addTogether(5)(7)); // should return 12.

// Make a person. Demonstrate encapsulation and data protection.
const Person = function (firstAndLast) {
  // Only change code below this line
  // let firstName = "";
  // let lastName = "";
  let fullName = firstAndLast;
  // Complete the method below and implement the others similarly
  this.getFullName = function () { return fullName };
  this.getFirstName = () => { return fullName.split(" ")[0] };
  this.getLastName = () => { return fullName.split(" ")[1] };
  this.setFirstName = (firstName) => { fullName = firstName + " " + fullName.split(" ")[1] };
  this.setLastName = (lastName) => { fullName = fullName.split(" ")[0] + " " + lastName };
  this.setFullName = (firstAndLast) => { fullName = firstAndLast };
};
const bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(Object.keys(bob).length);
bob.setFirstName("Jim");
console.log(bob.getFullName());
console.log(bob.getFullName());

// Process an array of objects like {name : "sputnik", avgAlt : 35873.5553}.
// Return an array of objects {name: "sputnik", orbitalPeriod: 86400}
/*
  According to Kepler's Third Law, the orbital period  T  of two point masses 
  orbiting each other in a circular or elliptic orbit is: T=2π√‾‾‾a3/μ

  My psuedocode representation of Kepler's Third Law
     T=2π * squareRoot((a*a*a)/GM)
  
  - a  is the orbit's semi-major axis
  - μ=GM  is the standard gravitational parameter
  - G  is the gravitational constant,
  - M  is the mass of the more massive body.
  Given:
  M = 6367.4447 kilometers Radius of the Earth, and the 
  GM = 398600.4418 km3s-2 -- Gravitational Constant of Earth
*/
const calcPeriodOfSatOfEarth = (avgAlt) => {
  // T (period) =2π * squareRoot((a*a*a)/GM)
  const GM = 398600.4418; // Gravitiational Constant of Earth
  const earthRadius = 6367.4447;
  let a = avgAlt + earthRadius;
  return 2 * Math.PI * (Math.sqrt((Math.pow(a, 3) / GM)));
}
const orbitalPeriod = (arr) =>
  arr.map(e => (
    {
      name: e.name,
      orbitalPeriod: Math.round(calcPeriodOfSatOfEarth(e.avgAlt))
    }));
console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));