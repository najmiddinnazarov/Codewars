// #8kyu Get Nth Even Number
/* const nthEven = (n) => n * 2 - 2;
console.log(nthEven(3)); */

// #8kyu Hex to Decimal
/* function hexToDec(hexString) {
  return parseInt(hexString, 16);
}
console.log(hexToDec("-C")); */

// #8kyu Training JS #12: loop statement --for..in and for..of
/* function giveMeFive(obj) {
  let result = [];
  for (const key in obj) {
    if (key.length == 5) result.push(key);
    if (obj[key].length == 5) result.push(obj[key]);
  }
  return result;
}
console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" })); */

// #8kyu Training JS #14: Methods of Number object--toString() and toLocaleString()
/* function colorOf(r, g, b) {
 return `#${r.toString(16).padStart(2, "0")}${g
   .toString(16)e
   .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
console.log(colorOf(0, 111, 0)); */

// #8kyu Add Length
/* function addLength(str) {
  let arr = str.split(" ");
  return Array.from(arr, (x) => `${x} ${x.length}`);
}
console.log(addLength("apple ban")); */

// #8kyu strCount
/* function strCount(str, letter) {
  let count = 0;
  for (const i of str) {
    if (i === letter) count++;
  }
  return count;
}
console.log(strCount("Hello", "H")); */

// #8kyu String to Number
/* const stringToNumber = function (str) {
  return +str;
};
console.log(stringToNumber("1234")); */

// #8kyu Make negative number
/* function makeNegative(num) {
  return num <= 0 ? num : -num;
}
console.log(makeNegative(0.12)); */

// #8kyu Return to Sanity
/* function mystery() {
  var results = { sanity: "Hello" };
  return results;
}
console.log(mystery()); */

// #8kyu Vowel remover
/* function shortcut(string) {
  let res = "";
  for (const i of string) {
    if (!i.match(/[aeiou]/gi)) res += i;
  }
  return res;
}
console.log(shortcut("hello")); */

// #8kyu Training JS #8: Conditional statement--switch
/* function howManydays(month) {
  let days;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
    default:
      return "Days not found!";
  }
  return days;
}
console.log(howManydays(12)); */

// #8kyu Training JS #9: loop statement --while and do..while
/* function padIt(str, n) {
  let start = 0;
  while (start < n) {
    if (start % 2 === 0) str = `*${str}`;
    else str = `${str}*`;
    start++;
  }
  return str;
}
console.log(padIt("a", 1)); */

// #8kyu Training JS #10: loop statement --for
/* function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even.push(arr[i]);
    else odd.push(arr[i]);
  }
  return [odd, even];
}
console.log(pickIt([1, 2, 3])); */

// #8kyu String Templates - Bug Fixing #5
/* function buildString(...template) {
  return `I like ${template.join(", ")}!`;
} */

// #8kyu ASCII Total
/* function uniTotal(string) {
  let res = 0;
  for (const i of string) {
    res += i.charCodeAt();
  }
  return res;
}
console.log(uniTotal("Mary Had A Little Lamb")); */

// #8kyu Unexpected parsing
/* function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return {
    status: msg,
  };
}
 */

// #8kyu Power
/* function numberToPower(number, power) {
  let res = 1;
  for (let i = 1; i <= power; i++) {
    res *= number;
  }
  return res;
}
console.log(numberToPower(3, 2));
 */

// #8kyu Find Nearest square number
/* function nearestSq(n) {
  return Math.round(Math.sqrt(n)) ** 2;
}
console.log(nearestSq(26));
 */

// #8kyu What is between?
/* function between(a, b) {
  let res = [];
  for (let i = a; i <= b; i++) {
    res.push(i);
  }
  return res;
}
console.log(between(1, 4)); */

// #8kyu USD => CNY
/* function usdcny(usd) {
  let usdToCny = 6.75;
  return `${(usd * usdToCny).toFixed(2)} Chinese Yuan`;
}
console.log(usdcny(7770)); */

// #8kyu Thinkful - Logic Drills: Traffic light
/* function updateLight(current) {
  return current === "green"
    ? "yellow"
    : current === "yellow"
    ? "red"
    : "green";
}
console.log(updateLight("green"));
 */

// #8kyu Welcome
/* const lang = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};
function greet(language) {
  return language in lang ? lang[language] : "welcome";
}
console.log(greet("dutch"));
 */

// #8kyu Grasshopper - Array Mean
/* var findAverage = function (nums) {
  return eval(nums.join("+")) / nums.length;
};
console.log(findAverage([1, 3, 5, 7])); */

// #8kyu Sum The Strings
/* function sumStr(a, b) {
  return eval(`${a || "0"} + ${b || "0"}`).toString();
}
console.log(sumStr("", ""));
 */

// #8kyu Multiplication table for number
/* function multiTable(number) {
  let res = "";
  for (let i = 1; i <= 10; i++) {
    for (let k = number; k <= number; k++) {
      res += `${i} * ${k} = ${i * k}\n`;
    }
  }
  return res.slice(0, -1);
}
console.log(multiTable(50));
 */

// #8kyu Calculate BMI
/* function bmi(weight, height) {
  let bmi = weight / height ** 2;
  if (bmi <= 18.5) return "Underweight";
  else if (bmi <= 25.0) return "Normal";
  else if (bmi <= 30.0) return "Overweight";
  else return "Obese";
}
console.log(bmi(80, 1.8)); */

// #8kyu Safen User Input Part I - htmlspecialchars
/* function htmlspecialchars(formData) {
  return [...formData]
    .map((letter) => {
      if (letter === "&") return letter.replace("&", "&amp;");
      if (letter === "<") return letter.replace("<", "&lt;");
      if (letter === ">") return letter.replace(">", "&gt;");
      if (letter === '"') return letter.replace('"', "&quot;");
      else return letter;
    })
    .join("");
}
console.log(htmlspecialchars("<h2>Hello World</h2>")); */

// #8kyu CSV representation of array
/* function toCsvText(array) {
  return array.join("\n");
}
console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);
 */

// #8kyu Polish alphabet
/* function correctPolishLetters(string) {
  return string.replace(
    /[ąćęłńóśźż]/g,
    (x) =>
      ({
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        ó: "o",
        ś: "s",
        ź: "z",
        ż: "z",
      }[x])
  );
}
console.log(correctPolishLetters("Jędrzej Błądziński"));
 */

// #8kyu How good are you really?
/* function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((sum, curr) => sum + curr, 0) / classPoints.length <
    yourPoints
  );
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
 */

// #8kyu Will you make it?
/* const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false;
}; */

// #8kyu My head is at the wrong end!
/* function fixTheMeerkat(arr) {
  return arr.reverse();
}
console.log(fixTheMeerkat(["tail", "body", "head"]));
 */

// #8kyu Contamination #1 -String-
/* function contamination(text, char) {
  if (text === "" || char === "") return "";
  let str = "";
  for (let i = 1; i <= text.length; i++) {
    str += char;
  }
  return str;
}
console.log(contamination("_3ebzgh4", "&")); */

// #8kyu Filter out the geese
/* function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((bird) => !geese.includes(bird));
}
 */

// #8kyu Enumerable Magic #4 - True for None?
/* function none(arr, fun) {
  let func = arr.filter(fun);
  return func.length === 0 ? true : false;
}
console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 4;
  })
); */

// #8kyu Find Multiples of a Number
/* function findMultiples(integer, limit) {
  let num = limit;
  let arr = [];
  for (let i = 1; num <= limit; i++) {
    arr.push(integer * i);
    num = integer * i;
  }
  return arr.slice(0, -1);
}
console.log(findMultiples(5, 25));
 */

// #8kyu Did she say hallo?
/* function validateHello(greetings) {
  let regex = /hello|ciao|salut|hallo|hola|ahoj|czesc/gi;
  let res = regex.test(greetings);
  return res;
}
console.log(validateHello("ahoj"));
 */

// #8kyu Opposites Attract
/* function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 0 ? false : true;
}
console.log(lovefunc(0, 0));
 */

// #8kyu Get the mean of an array
/* function getAverage(marks) {
  return Math.trunc(marks.reduce((sum, curr) => sum + curr, 0) / marks.length);
}
console.log(getAverage([1, 2, 3, 4, 5]));
 */

// #8kyu Is the string uppercase?
/* String.prototype.isUpperCase = function () {
  return this.split(" ").join("") === this.split(" ").join("").toUpperCase();
};
console.log("hello I AM DONALD".isUpperCase()); */

// #8kyu Volume of a Cuboid
/* class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return width * height * length;
  }
}
console.log(Kata.getVolumeOfCuboid(6, 2, 5));
 */

// #8kyu Remove First and Last Character Part Two
/* function array(string) {
  return string.split(",").length > 2
    ? string.split(",").slice(1, -1).join(" ")
    : null;
}
console.log(array("A,1,23,456,78,9,Z"));
 */

// #8kyu Is there a vowel in there?
/* function isVow(a) {
  return a.map((vl) =>
    ["a", "e", "i", "o", "u"].includes(String.fromCharCode(vl))
      ? String.fromCharCode(vl)
      : vl
  );
}
console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
); */

// #8kyu Count the Monkeys!
/* function monkeyCount(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}
console.log(monkeyCount(5));
 */

// #8kyu Reversed sequence
/* const reverseSeq = (n) => {
  let res = [];
  for (let i = n; i > 0; i--) {
    res.push(i);
  }
  return res;
};
console.log(reverseSeq(5));
 */

// #8kyu Is he gonna survive?
/* function hero(bullets, dragons) {
  return dragons * 2 >= bullets;
}
console.log(hero(10, 5));
 */

// #8kyu DNA to RNA Conversion
/* function DNAtoRNA(dna) {
  return dna.replace(/[A-Z]/g, (x) => ({ T: "U" }[x] || x));
}
console.log(DNAtoRNA("GCAT"));
 */

// #8kyu Sum Mixed Array
/* function sumMix(x) {
  return x.reduce((sum, curr) => sum + +curr, 0);
}
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
 */

// #8kyu L1: Set Alarm
/* function setAlarm(employed, vacation) {
  if (employed === vacation) return false;
  else if (employed === true) return true;
  else return false;
}
console.log(setAlarm(true, false));
 */

// #8kyu Name Shuffler
/* function nameShuffler(str) {
  const arr = str.split(" ");
  return `${arr[1]} ${arr[0]}`;
}
console.log(nameShuffler("john McClane"));
 */

// #8kyu Count by X
/* function countBy(x, n) {
  let arr = [];
  for (let i = 1; ; i++) {
    if (i % x === 0 && arr.length !== n) arr.push(i);
    if (arr.length === n) return arr;
  }
}
console.log(countBy(2, 5));
 */

// #8kyu Removing Elements
/* function removeEveryOther(arr) {
  return arr.filter((vl, index) => index % 2 === 0);
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
 */

// #8kyu Regex count lowercase letters
/* function lowercaseCount(str) {
  return str === "" || str === str.toUpperCase()
    ? 0
    : str.match(/[a-z]/g).length;
}
console.log(lowercaseCount("avsA"));
 */

// #8kyu Double Char
/* function doubleChar(str) {
  return [...str].map((vl) => vl.repeat(2)).join("");
}
console.log(doubleChar("abcd"));
 */

// #8kyu Switch it Up!
/* const obj = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};
function switchItUp(number) {
  return obj[number];
}
console.log(switchItUp(9));
 */

// #8kyu Find the position!
/* let alphabet = "abcdefghijklmnopqrstuvwxyz";
function position(letter) {
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}
console.log(position("z")); */

// #8kyu Bin to Decimal
/* function binToDec(bin) {
  return parseInt(bin, 2);
}
console.log(binToDec(1));
 */

// #8kyu Capitalization and Mutability
/* function capitalizeWord(word) {
  return word
    .split(" ")
    .map((value) => value[0].toUpperCase() + value.slice(1))
    .join("");
}
console.log(capitalizeWord("word"));
 */

// #8kyu Total amount of points
/* function points(games) {
  let win = 0;
  games.map((value) => {
    if (value[0] >= value[2]) value[0] > value[2] ? (win += 3) : win++;
    else return 0;
  });
  return win;
}
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "4:3", "1:4", "2:3", "2:4", "3:4"])
); */

// #8kyu get character from ASCII Value
/* const getChar = (c) => String.fromCharCode(c);
console.log(getChar(65)); */

// #8kyu Drink about
/* function peopleWithAgeDrink(old) {
  if (old < 14) return "drink toddy";
  else if (old >= 14 && old < 18) return "drink coke";
  else if (old >= 18 && old < 21) return "drink beer";
  else return "drink whisky";
}
console.log(peopleWithAgeDrink(22));
 */

// #8kyu Sum of Multiples
/* function sumMul(n, m) {
  if (m < n || m === 0) return "INVALID";
  let count = 0;
  for (let i = n; i < m; i += n) count += i;
  return count;
}
console.log(sumMul(471, 185)); */

// #8kyu Correct the mistakes of the character recognition software
/* function correct(string) {
  let obj = {
    0: "O",
    1: "I",
    5: "S",
  };
  return string.replace(/[501]/g, (num) => obj[num]);
}
console.log(correct("L0ND0N")); */

// #8kyu Stringy Strings
/* function stringy(size) {
  let result = new Array(size);
  for (let i = 0; i < size; i++)
    i % 2 === 0 ? result.fill(1, i, i + 1) : result.fill(0, i, i + 1);
  return result.join("");
}
console.log(stringy(5));
 */

// #8kyu No zeros for heros
/* function noBoringZeros(n) {
  return +`${n}`.replace(/0+$/, "");
}
console.log(noBoringZeros(1450)); */

// #8kyu Lario and Muigi Pipe Problem
/* function pipeFix(numbers) {
  let result = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    result.push(i);
  }
  return result;
}
console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])); */

// #8kyu FIXME: Replace all dots
/* var replaceDots = function (str) {
  return str.replace(/[.]/g, "-");
};
console.log(replaceDots("one.two.three")); */

// #8kyu Triple Trouble
/* function tripleTrouble(one, two, three) {
  let arr = [];
  for (let i = 0; i < one.length; i++) {
    arr.push([one[i], two[i], three[i]].join(""));
  }
  return arr.join("");
}
console.log(tripleTrouble("aaa", "bbb", "ccc")); */

// #8kyu Is this my tail?
/* function correctTail(bod, tail) {
  return bod.endsWith(tail);
}
console.log(correctTail("fox", "x")); */

// #8kyu Broken Counter
/* function Counter() {
  this.value = 0;
}
Counter.prototype.increase = function () {
  return this.value++;
};

Counter.prototype.getValue = function () {
  return this.value;
};

Counter.prototype.reset = function () {
  return (this.value = 0);
}; */

// #8kyu Generate user links
/* function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}
console.log(generate_link("matt c")); */

// #8kyu Who ate the cookie?
/* function cookie(x) {
  if (typeof x === "string") return "Who ate the last cookie? It was Zach!";
  else if (typeof x === "number")
    return "Who ate the last cookie? It was Monica!";
  else return "Who ate the last cookie? It was the dog!";
}
console.log(cookie("Ryan")); */

// #8kyu Multiple of index
/* function multipleOfIndex(array) {
  let result = array.filter((value, index) => value % index === 0);
  return array[0] === 0 ? [0, ...result] : result;
}
console.log(multipleOfIndex([0, 2, 3, 6, 9])); */

// #8kyu Count Odd Numbers below n
/* function oddCount(n) {
  return Math.floor(n / 2);
}
console.log(oddCount(15)); */

// #8kyu Sort and Star
/* function twoSort(s) {
  return s.sort()[0].split("").join("***");
}
console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
); */

// #8kyu Well of Ideas - Easy Version
/* function well(x) {
  let count = 0;
  x.map((value) => {
    if (value.includes("good")) count++;
  });
  return count > 2
    ? "I smell a series!"
    : count > 0 && count <= 2
    ? "Publish!"
    : "Fail!";
}
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
); */

// #8kyu UEFA EURO 2016
/* function uefaEuro2016(teams, scores) {
  let team = `At match ${teams[0]} - ${teams[1]}`;
  if (scores[0] === scores[1]) return `${team}, teams played draw.`;
  return `${team}, ${scores[0] > scores[1] ? teams[0] : teams[1]} won!`;
}
console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0])); */

// #8kyu Remove the time
/* function shortenToDate(longDate) {
  return longDate.split(",").slice(0, -1).join(" ");
}
console.log(shortenToDate("Friday May 2, 9am"));
 */

// #8kyu Remove duplicates from list
/* function distinct(a) {
  let arr = [];
  for (let i = 0; i < a.length; i++) if (!arr.includes(a[i])) arr.push(a[i]);
  return arr;
}
console.log(distinct([1, 2, 1, 1, 3, 2])); */

// #8kyu Welcome to the City
/* function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}
console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona")); */

// #8kyu "this" is a problem
/* function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
}
var n = new NameMe("John", "Doe");
console.log(n.firstName); */

// #8kyu Return the day
/* function whatday(num) {
  const week = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  return week[num] || "Wrong, please enter a number between 1 and 7";
}
console.log(whatday(1)); */

// #8kyu get ascii value of character
/* function getASCII(c) {
  return c.charCodeAt(0);
}
console.log(getASCII("A")); */

// #8kyu Return Two Highest Values in List
/* function twoHighest(arr) {
  if (arr.length <= 1) return arr;
  const array = arr.filter((value) => value !== Math.max(...arr));
  return [Math.max(...arr), Math.max(...array)];
}
console.log(twoHighest([15, 20, 20, 17])); */

// #8kyu Get number from string
/* function getNumberFromString(s) {
  return +s.replace(/[^0-9]/g, "");
}
console.log(getNumberFromString("this is n6umber: 7")); */

// #8kyu Neutralisation
/* function neutralise(s1, s2) {
  let result = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) result += s1[i];
    else result += 0;
  }
  return result;
}
console.log(neutralise("--++--", "++--++")); */

// #8kyu Fuel Calculator: Total Cost
/* const fuelPrice = (litres, pricePerLiter) => {
  let discountCents = 0;
  if (litres >= 2) discountCents = 0.05;
  if (litres >= 4) discountCents = 0.1;
  if (litres >= 6) discountCents = 0.15;
  if (litres >= 8) discountCents = 0.2;
  if (litres >= 10) discountCents = 0.25;
  const totalPrice = litres * pricePerLiter - litres * discountCents;
  return Number(totalPrice.toFixed(2));
};
console.log(fuelPrice(5, 1.23)); */

// #8kyu Classy Classes
/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}
var john = new Person("john", 34);
console.log(john.info); */

// #8kyu Merging sorted integer arrays (without duplicates)
/* function mergeArrays(a, b) {
  return [...new Set(a.concat(b).sort((a, b) => a - b))];
}
console.log(mergeArrays([1, 3, 5], [2, 4, 6])); */

// #8kyu Count words
/* function countWords(str) {
  return str.split(/\s/gi).filter((value) => value).length;
}
console.log(countWords("Nelson ")); */

// #8kyu To square(root) or not to square(root)
/* function squareOrSquareRoot(array) {
  return array.map((value) =>
    Number.isInteger(Math.sqrt(value)) ? Math.sqrt(value) : value ** 2
  );
}
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); */

// #8kyu Check same case
/* function sameCase(a, b) {
  if (`${a}`.match(/[A-Z]/g) && `${b}`.match(/[A-Z]/g)) return 1;
  else if (`${a}`.match(/[a-z]/g) && `${b}`.match(/[a-z]/g)) return 1;
  else if (`${a}`.match(/[a-z]/g) && `${b}`.match(/[A-Z]/g)) return 0;
  else if (`${a}`.match(/[A-Z]/g) && `${b}`.match(/[a-z]/g)) return 0;
  else return -1;
}
console.log(sameCase("A", "b")); */

// #8kyu Count of positives / sum of negatives
/* function countPositivesSumNegatives(input) {
  let positive = 0;
  let negative = 0;
  if (input == null || input.length === 0) return [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== 0) {
      if (input[i] < 0) negative += input[i];
      else positive++;
    }
  }
  return [positive, negative];
}
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
); */

// #8kyu Do I get a bonus?
/* function bonusTime(salary, bonus) {
  return bonus ? "£" + salary * 10 : "£" + salary;
}
console.log(bonusTime(10000, true)); */

// #8kyu Switch/Case - Bug Fixing #6
/* function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b; break;
    case'-': result = value.a - value.b; break;
    case'/': result = value.a / value.b; break;
    case'*': result = value.a * value.b; break;
    case'%': result = value.a % value.b; break;
    case'^': result = Math.pow(value.a, value.b);
  }
  return result;
}
console.log(evalObject({a:1,b:1,operation:'+'})); */

// #8kyu Simple validation of a username with regex
/* function validateUsr(username) {
  const usernameRegex = /^[a-z0-9_]{4,16}$/g;
  const isValidUsername = usernameRegex.test(username);
  return isValidUsername;
}
console.log(validateUsr("asd43 34")); */

// #8kyu Find the Remainder
/* function remainder(n, m) {
  return m > n ? m % n : n % m;
}
console.log(remainder(13, 72)); */

// #8kyu Regexp Basics - is it a digit?
/* String.prototype.digit = function () {
  return /^\d$/g.test(this);
};
console.log("0".digit()); */

// #8kyu Enumerable Magic #25 - Take the First N Elements
/* function take(arr, n) {
  return arr.slice(0, n);
}
console.log(take([0, 1, 2, 3, 5, 8, 13], 3)); */

// #8kyu Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
/* function remove(string) {
  let result = "";
  for (let i = 0; i < string.length; i++)
    if (string[i] !== "!") result += string[i];
  return result + "!";
}
console.log(remove("Hi! Hi!")); */

// #8kyu Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
/* function replace(s) {
  return s.replace(/[aeiou]/gi, "!");
}
console.log(replace("!HI! Hi!")); */

// #8kyu Cat years, Dog years
/* var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears === 1) return [1, 15, 15];
  else if (humanYears === 2) return [2, 24, 24];
  else {
    let array = [];
    array.push(humanYears);
    array.push((humanYears - 2) * 4 + 24);
    array.push((humanYears - 2) * 5 + 24);
    return array;
  }
};
console.log(humanYearsCatYearsDogYears(10)); */

// #8kyu Exclamation marks series #1: Remove an exclamation mark from the end of string
/* function remove(string) {
  return string.replace(/!$/g, "");
}
console.log(remove("Hi!!")); */

// #8kyu Template Strings
/* var templateStrings = function (noun, adjective) {
  return `${noun} are ${adjective}`;
};
console.log(templateStrings("Animals", "Good")); */

// #8kyu Exclamation marks series #2: Remove all exclamation marks from the end of sentence
/* function remove(string) {
  while (string.endsWith("!")) {
    string = string.slice(0, -1);
  }
  return string;
}
console.log(remove("Hi!!!")); */

// #8kyu Ensure question
/* function ensureQuestion(s) {
  return s.endsWith("?") ? s : s + "?";
}
console.log(ensureQuestion("Yes")); */

// #8kyu Fix your code before the garden dies!
/* function rainAmount(mm) {
  if (mm < 40)
    return "You need to give your plant " + (40 - mm) + "mm of water";
  else return "Your plant has had more than enough water for today!";
}
console.log(rainAmount(42)); */

// #8kyu Leonardo Dicaprio and Oscars
/* function leo(oscar) {
  if (oscar === 88) return "Leo finally won the oscar! Leo is happy";
  else if (oscar === 86) return "Not even for Wolf of wallstreet?!";
  else if (oscar > 88) return "When will you give Leo an Oscar?";
  else return "Leo got one already!";
}
console.log(leo(88));
 */

// #8kyu Fix the Bugs (Syntax) - My First Kata
/* function myFirstKata(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  } else {
    return (a % b) + (b % a);
  }
}
console.log(myFirstKata(1, 2)); */

// #8kyu Grasshopper - Terminal game combat function
/* function combat(health, damage) {
  return health > damage ? health - damage : 0;
}
console.log(combat(100, 5)); */

// #8kyu Sum without highest and lowest number
/* function sumArray(array) {
  let count = 0;
  if (array === null || array === undefined) return count;
  array = array.sort((a, b) => a - b);
  for (let i = 1; i < array.length - 1; i++) {
    count += array[i];
  }
  return count;
}
console.log(sumArray(undefined)); */

// #8kyu Find numbers which are divisible by given number
/* function divisibleBy(numbers, divisor) {
  return numbers.filter((value) => value % divisor === 0);
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2)); */

// #8kyu 101 Dalmatians - squash the bugs, not the dogs!
/* function howManyDalmatians(number) {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];
  var respond =
    number < 10
      ? dogs[0]
      : number < 50
      ? dogs[1]
      : number === 101
      ? dogs[3]
      : dogs[2];
  return respond;
}
console.log(howManyDalmatians(101)); */

// #8kyu Enumerable Magic #1 - True for All?
/* function all(arr, fun) {
  return arr.every((value) => fun(value));
}
console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v > 9;
  })
); */

// #8kyu Rock Paper Scissors!
/* const rps = (p1, p2) => {
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  )
    return "Player 1 won!";
  else if (
    (p1 === "scissors" && p2 === "rock") ||
    (p1 === "paper" && p2 === "scissors") ||
    (p1 === "rock" && p2 === "paper")
  )
    return "Player 2 won!";
  else return "Draw!";
};
console.log(rps("scissors", "paper")); */

// #8kyu Powers of 2
/* function powersOfTwo(n) {
  let array = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      array[i] = 1;
    } else {
      array[i] = 2 ** i;
    }
  }
  return array;
}
console.log(powersOfTwo(2)); */

// #8kyu Fundamentals: Return
/* function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}
console.log(add(1, 2)); */

// #8kyu Grasshopper - Combine strings
/* const combineNames = (a, b) => a + " " + b;
console.log(combineNames("James", "Stevens")); */

// #8kyu Hello, Name or World!
/* function hello(name) {
  return `Hello, ${
    name
      ? `${name[0].toUpperCase() + name.toLowerCase().slice(1) + "!"}`
      : "World!"
  }`;
}
console.log(hello("alice")); */

// #8kyu pick a set of first elements
/* function first(arr, n = 1) {
  return arr.slice(0, n);
}
console.log(first(["a", "b", "c", "d", "e"])); */

// #8kyu Formatting decimal places #0
/* function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}
console.log(twoDecimalPlaces(173735326.3783732637948948));
 */

// #8kyu Grasshopper - Function syntax debugging
/* function main(verb, noun) {
  return verb + noun;
}
console.log(main("take ", "item")); */

// #8kyu isReallyNaN
/* const isReallyNaN = (val) => {
  return val !== val;
};
console.log(isReallyNaN(NaN)); */

// #8kyu Miles per gallon to kilometers per liter
/* function converter(mpg) {
  return +((mpg * 1.609344) / 4.54609188).toFixed(2);
}
console.log(converter(10)); */

// #8kyu Surface Area and Volume of a Box
/* function getSize(width, height, depth) {
  return [
    2 * width * depth + 2 * height * depth + 2 * width * height,
    width * height * depth,
  ];
}
console.log(getSize(4, 2, 6)); */
