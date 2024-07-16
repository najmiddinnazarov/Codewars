// #6kyu Who likes it?
/* function likes(names) {
  if (names.length == 1) {
    return `${names} likes this`;
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  } else {
    return "no one likes this";
  }
}
 */

// #6kyu Split Strings
/* function solution(str) {
  let arr = [];
  let k = 2;
  for (let i = 0; i < str.length; i += 2) {
    arr.push(str.slice(i, k));
    k += 2;
  }
  arr.forEach((x) => {
    if (x.length == 1) {
      arr.pop();
      arr.push(`${x}_`);
    }
  });
  return arr;
}
console.log(solution("abcdefg")); */

// #6kyu Counting Duplicates
/* function duplicateCount(text) {
  const obj = {};
  let count = 0;
  for (const i of text.toLowerCase()) {
    if (i in obj) obj[i]++;
    else obj[i] = 1;
  }
  for (const key in obj) {
    if (obj[key] > 1) count++;
  }
  return count;
}
console.log(duplicateCount("abcdefghABCDABCABA")); */

// #6kyu Find The Parity Outlier
/* function findOutlier(integers) {
  let even = 0;
  let odd = 0;
  for (const i of integers) {
    if (i % 2 === 0) even++;
    else odd++;
  }
  for (const j of integers) {
    if (even < odd) {
      if (j % 2 === 0) return j;
    } else if (even > odd) {
      if (j % 2 !== 0) return j;
    }
  }
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); */

// #6kyu Maximum and minimum
/* function max(...max) {
  let arr = max.flat(Infinity);
  if (arr.length !== 0) {
    arr.sort((a, b) => a - b);
    return +arr[arr.length - 1];
  } else return 0;
}
 */

// #6kyu Your order, please
// function order(words) {
//   let arr = words.split(" ");
//   let res = arr.filter((value, index) => {
//     return value;
//   });
//   return res;
// }
// console.log(order("is2 Thi1s T4est 3a")); // Error

// #6kyu String average
/* let obj = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
function averageString(str) {
  let arr = str.split(" ");
  let res = arr.every((value) => value in obj);
  if (!res) return "n/a";
  let num =
    Array.from(arr, (x) => obj[x]).reduce((a, c) => a + c, 0) / arr.length;
  for (const key in obj) {
    if (obj[key] === parseInt(num)) return key;
  }
}
console.log(averageString("five four two")); */

// #6kyu Encrypt this!
/* var encryptThis = function (text) {
  let result = [];
  let array = text.split(" ");
  for (const i of array) {
    let newArr = i.split("");
    if (newArr.length === 1) result.push(newArr.join("").codePointAt(0));
    if (newArr.length > 1) {
      newArr.splice(newArr[0], 1, newArr.join("").codePointAt(0));
      let letter = newArr.pop();
      newArr.push(newArr[1]);
      newArr.splice(1, 1, letter);
      result.push(newArr.join(""));
    }
  }
  return result.join(" ");
};
console.log(encryptThis("A wise old owl lived in an oak")); */

// #6kyu Bit Counting
/* var countBits = function (n) {
  let binary = n.toString(2);
  let count = 0;
  for (const i of binary) {
    if (i > 0) count++;
  }
  return count;
};
console.log(countBits(1234)); */

// #6kyu Convert string to camel case
/* function toCamelCase(str) {
  let arr = str.split("");
  for (const i of arr) {
    if (i == "_") {
      let index = arr.indexOf("_");
      arr.splice(index, 2, arr[index + 1].toUpperCase());
    } else if (i == "-") {
      let index = arr.indexOf("-");
      arr.splice(index, 2, arr[index + 1].toUpperCase());
    }
  }
  return arr.join("");
}
console.log(toCamelCase("A-B-C")); */

// #6kyu CamelCase Method
/* String.prototype.camelCase = function () {
  if (this == String("")) return "";
  else {
    return this.split(" ")
str((str) => vl[0].toUpperCase() + vl.slice(1))
      .join("");
  }
};
console.log("hello world".camelCase());
 */

// #6kyu Array.diff
/* function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}
console.log(arrayDiff([1, 2, 3], [1, 2]));
 */

// #6kyu Count characters in your string
/* function count(string) {
  let obj = {};
  for (const i of string) {
    i in obj ? obj[i]++ : (obj[i] = 1);
  }
  return obj;
}
console.log(count("aba"));
 */

// #6kyu Custom Setters and Getters
/* function Archiver() {
  var temperature = null;
  var archive = [];
  Object.defineProperty(this, "temperature", {
    get: function () {
      return temperature;
    },
    set: function (value) {
      temperature = value;
      archive.push({ date: new Date(), val: temperature });
    },
  });
  this.getArchive = function () {
    return archive;
  };
} */

// #6kyu If you can read this...
/* function to_nato(words) {
  let natoAlphabet = {
    A: "Alfa",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliett",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "Xray",
    Y: "Yankee",
    Z: "Zulu",
  };
  return [...words.toUpperCase()]
    .map((letter) => natoAlphabet[letter] || letter)
    .filter((emptyStr) => emptyStr.trim() != "")
    .join(" ");
}
console.log(to_nato("If you can read")); */

// #6kyu Hamming Distance
/* function hamming(a, b) {
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) res++;
  }
  return res;
}
console.log(hamming("espresso", "Expresso")); */

// #6kyu Break camelCase
/* function solution(string) {
  return string
    .split("")
    .map((vl) => {
      if (vl == vl.toUpperCase()) return ` ${vl}`;
      else return vl;
    })
    .join("");
}
console.log(solution("")); */

// #6kyu Reverse every other word in the string
/* function reverse(str) {
  return str
    .split(" ")
    .map((vl, index) => (index % 2 !== 0 ? [...vl].reverse().join("") : vl))
    .join(" ")
    .trim();
}
console.log(reverse("abm, bbc"));
 */

// #6kyu Unique In Order
/* const uniqueInOrder = (value) => {
  return [...value].filter((item, i) => item !== value[i + 1]);
};
 */

// #6kyu Persistent Bugger.
/* function persistence(num) {
  if (num < 10) return 0;
  return (
    1 +
    persistence(
      num
        .toString()
        .split("")
        .reduce((s, n) => {
          return s * n;
        }, 1)
    )
  );
}
console.log(persistence(39));
 */

// #6kyu Corner circle
/* const cornerCircle = (r) =>
  +((r * Math.sqrt(2) - r) / (1 + Math.sqrt(2))).toFixed(2);
 */

// #6kyu Your order, please
/* function order(words) {
  let num = words
    .split("")
    .filter((vl) => /\d/.test(vl))
    .sort((a, b) => a - b)
    .join("");
  let arr = [];
  for (const k of num) {
    for (const i of words.split(" ")) {
      if (i.includes(k)) arr.push(i);
    }
  }
  return arr.join(" ");
}
console.log(order("is2 Thi1s T4est 3a")); */

// #6kyu Sort the odd
/* function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));
 */

// #6kyu Replace With Alphabet Position
/* const letter = [
  "",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function alphabetPosition(text) {
  let array = text.toUpperCase().split("");
  return array
    .map((vl) => letter.indexOf(vl))
    .filter((minusNum) => minusNum !== -1)
    .join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
 */

// #6kyu Does my number look big in this?
/* function narcissistic(value) {
  let sum = 0;
  let n;
  n = [...`${value}`].reduce((sum, curr) => sum + curr ** `${value}`.length, 0);
  n.toString()
    .split("")
    .forEach((i) => {
      sum += parseInt(i) ** n.toString().length;
    });
  return sum == n;
}
console.log(narcissistic(1652)); */

// #6kyu Highest Scoring Word
/* const letter = [
  "",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function high(x) {
  let obj = {};
  for (const i of x.toUpperCase().split(" ")) {
    if (!(i in obj))
      obj[i] = [...i].reduce((sum, curr) => sum + letter.indexOf(curr), 0);
  }
  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])[0][0]
    .toLowerCase();
}
console.log(high("man i need a taxi up to ubud"));
 */

// #6kyu Multiplication table
/* multiplicationTable = function (size) {
  return Array.from({ length: size }, (v, i) => {
    return Array.from({ length: size }, (a, j) => (j + 1) * (i + 1));
  });
};
console.log(multiplicationTable(3));
 */

// #6kyu The Vowel Code
/* function encode(string) {
  return string.replace(
    /[aeiou]/g,
    (x) => ({ a: 1, e: 2, i: 3, o: 4, u: 5 }[x])
  );
}
function decode(string) {
  return string.replace(
    /[12345]/g,
    (x) => ({ 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" }[x])
  );
}
console.log(decode("h2ll4"));
 */

// #6kyu Perfect Square.
/* function perfectSquare(string) {
  const stringSplit = string.split("\n");
  return (
    doesEveryRowConsistOnlyFromDots(stringSplit) &&
    isRowLengthSameAsRowsNumber(stringSplit) &&
    doesEveryRowLengthIsTheSame(stringSplit)
  );
}
const doesEveryRowConsistOnlyFromDots = (stringSplit) =>
  stringSplit.every((row) => /^[.]+$/.test(row));
const isRowLengthSameAsRowsNumber = (stringSplit) =>
  stringSplit[0].length === stringSplit.length;
const doesEveryRowLengthIsTheSame = (stringSplit) =>
  stringSplit.every((item) => item.length === stringSplit[0].length);
 */

// #6kyu ASCII hex converter
/* var Converter = {
  toAscii: function (hex) {
    var str = "";
    for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
  },
  toHex: function (ascii) {
    return ascii
      .split("")
      .map((vl) => vl.charCodeAt(0).toString(16))
      .join("");
  },
};
console.log(Converter.toHex("Look mom, no hands"));
console.log(Converter.toAscii("4c6f6f6b206d6f6d2c206e6f2068616e6473"));
 */

// #6kyu Pyramid Array
/* const pyramid = (num) => {
  const arrs = [];
  for (let i = 1; i <= num; i++) {
    arrs.push(Array(i).fill(1));
  }
  return arrs;
};
console.log(pyramid(1)); */

// #6kyu Simple Simple Simple String Expansion
/* function stringExpansion(s) {
  let prepared_string = "";
  if (s.length < 1 || isNumeric(s)) {
    return prepared_string;
  }
  let symbols = s.split("");
  for (let i = 0, i_size = symbols.length, repeat_times = 1; i < i_size; i++) {
    let symbol = symbols[i];
    if (isNumeric(symbol)) {
      repeat_times = symbol;
      continue;
    }
    prepared_string += symbol.repeat(repeat_times);
  }
  return prepared_string;
}
function isNumeric(value) {
  return /^-?\d+$/.test(value);
}
console.log(stringExpansion("3abc"));
 */

// #6kyu Binary to Text (ASCII) Conversion
/* function binaryToString(binary) {
  let result = [];
  let arr = binary.split("");
  while (arr.length) {
    result.push(arr.splice(0, 8).join(""));
  }
  return result.map((x) => (x = String.fromCharCode(parseInt(x, 2)))).join("");
}
console.log(binaryToString("001111000011101000101001"));
 */

// #6kyu (L33T + Grεεκ) Case
/* function GrεεκL33t(str) {
  let obj = {
    A: "α",
    B: "β",
    D: "δ",
    E: "ε",
    I: "ι",
    K: "κ",
    N: "η",
    O: "θ",
    P: "ρ",
    R: "π",
    T: "τ",
    U: "μ",
    V: "υ",
    W: "ω",
    X: "χ",
    Y: "γ",
  };
  return str
    .toUpperCase()
    .replace(/[A-Z]/g, (x) => (obj[x] ? obj[x] : x.toLowerCase()));
}
console.log(GrεεκL33t("CodeWars"));
 */

// #6kyu Count the days!
/* function countDays(d) {
  let time = d;
  let today = new Date();
  let todayCheck =
    time.getFullYear() === today.getFullYear() &&
    time.getMonth() === today.getMonth() &&
    time.getDay() === today.getDay();
  if (todayCheck) return "Today is the day!";
  let past = today.getTime() > time.getTime();
  if (past) return "The day is in the past!";
  return `${Math.round(
    (time.getTime() - today.getTime()) / 1000 / 60 / 60 / 24
  )} days`;
}
console.log(countDays(new Date("February 28, 2016")));
 */

// #6kyu Playing with digits
/* function digPow(n, p) {
  let arr =
    n
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, cur, i, arr) => acc + Math.pow(arr[i], p + i), 0) / n;
  return ("" + arr).includes(".") ? -1 : arr;
}
console.log(digPow(89, 1)); */

// #6kyu Reverse Vowels In A String
/* function reverseVowels(str) {
  let vowel = [...str].filter((vl) => vl.match(/[aeiou]/i));
  return str.replace(/[aeiou]/gi, (_) => vowel.pop());
}
console.log(reverseVowels("Hello!"));
 */

// #6kyu Number Format
/* var numberFormat = function (number) {
  let minus = `${number}`.includes("-") ? `${number}`.slice(1) : `${number}`;
  let output = [];
  for (let i = 0; i < minus.length; ) {
    output.push([...minus].reverse().slice(i, (i += 3)));
  }
  let result = output
    .reverse()
    .map((vl) => vl.reverse().join(""))
    .join(",");
  return `${number}`.includes("-") ? `-${result}` : result;
};
console.log(numberFormat(-3235678546));
 */

// #6kyu Does array x contain all values within array y?
/* Object.defineProperty(Array.prototype, "containsAll", {
  value: function containsAll(a) {
    return a.every((vl) => this.includes(vl));
  },
});
console.log(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].containsAll([1, 2, 3, 4, 5])
);
 */

// #6kyu Roman Numerals Encoder
/* function solution(number) {
  const romanNumber = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM",
  };
  
  return [...`${number}`]
    .reverse()
    .map((vl, index) => {
      if (vl > 0) return vl + "0".repeat(index);
    })
    .reverse()
    .map((roman) => romanNumber[roman])
    .join("");
}
console.log(solution(2008));
 */

// #6kyu Kebabize
/* function kebabize(str) {
  return str
    .replace(/[0-9]/g, "")
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
console.log(kebabize("myCamelCasedString")); */

// #6kyu Selective Array Reversing
/* function selReverse(array, length) {
  if (length === 0) return array;
  let output = [];
  while (array.length) {
    output.push(array.splice(0, length).reverse());
  }
  return [].concat(...output);
}
console.log(selReverse([1, 2, 3, 4, 5, 6], 10));
 */

// #6kyu Words to Hex
/* function wordsToHex(words) {
  let result = [];
  let array = [];
  let sliceWords = words.split(" ").map((word) => word.slice(0, 3));
  sliceWords.map((vl) => {
    if (vl == "") array.push("00");
    else {
      for (const i of vl) {
        array.push(i.charCodeAt().toString(16));
      }
    }
    vl.length < 3
      ? array.push(vl.length < 2 ? "00".repeat(2) : "00".repeat(1))
      : vl;
  });
  for (let i = 0; i < array.join("").length; ) {
    result.push("#" + array.join("").slice(i, (i += 6)));
  }
  return result;
}
console.log(wordsToHex("Hello world"));
 */

// #6kyu Array Deep Count
/* function deepCount(a) {
  return a.reduce(
    (acc, curr) => acc + (Array.isArray(curr) ? deepCount(curr) : 0),
    a.length
  );
}
console.log(deepCount([1, 2, 3]));
 */

// #6kyu Count the smiley faces!
/* function countSmileys(arr) {
  return arr.filter((value) => value.match(/(:|;)(-|~)?(\)|D)/)).length;
}
console.log(countSmileys([":D", ":~)", ";~D", ":)"])); */

// #6kyu Ascend, Descend, Repeat?
/* function ascendDescend(length, minimum, maximum) {
  let result = "";
  for (let i = minimum; i <= maximum; i++) result += i;
  for (let i = maximum - 1; i > minimum; i--) result += i;
  result = result.repeat(length);
  return result.substring(0, length);
}
console.log(ascendDescend(5, 1, 3));
 */

// #6kyu Dashatize it
/* function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "");
}
console.log(dashatize(274));
 */

// #6kyu Prime Factors
/* function primeFactors(n) {
  const factors = [];
  for (let i = 2; i <= n; i++) {
    while (n % i == 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors;
}
console.log(primeFactors(3));
 */

// #6kyu Consonant value
/* function solve(s) {
  const letter = [
    "",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return Math.max(
    ...s.split(/[aeiou]/gi).map((vl) => {
      if (vl.length == 1) return letter.indexOf(vl);
      else {
        let count = 0;
        for (const i of vl) count += letter.indexOf(i);
        return count;
      }
    })
  );
}
console.log(solve("zodiacs"));
 */

// #6kyu What century is it?
/* function whatCentury(year) {
  let ordinalNum = {
    11: "th",
    12: "th",
    13: "th",
    1: "st",
    2: "nd",
    3: "rd",
  };
  let count = 0;
  for (let i = 0; i < year; i += 100) count++;
  return `${count}${
    ordinalNum[count] || ordinalNum[`${count}`.slice(-1)] || "th"
  }`;
}
console.log(whatCentury("2011")); */

// #6kyu Which are in?
/* function inArray(array1, array2) {
  let result = [];
  for (let i = 0; i < array2.length; i++) {
    for (let k = 0; k < array1.length; k++) {
      if (!result.includes(array1[k]))
        if (array2[i].includes(array1[k])) result.push(array1[k]);
    }
  }
  return result.sort();
}
console.log(
  inArray(
    ["arp", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
); */

// #6kyu Is a number prime?
/* function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  const max = Math.sqrt(num) + 1;
  for (let i = 2; i < max; i++) if (num % i === 0) return false;
  return true;
}
console.log(isPrime(1)); */

// #6kyu PatternCraft - Strategy
/* class Fly {
  move(unit) {
    return (unit.position += 10);
  }
}
class Walk {
  move(unit) {
    return unit.position++;
  }
}
class Viking {
  constructor() {
    this.position = 0;
    this.moveBehavior = new Walk();
  }
  move() {
    return this.moveBehavior.move(this);
  }
} */

// #6kyu Duplicate Encoder
/* function duplicateEncode(word) {
  let lower = word.toLowerCase().split("");
  let array = lower.filter((value, index) => lower.indexOf(value) !== index);
  return lower.reduce(
    (sum, curr) => (array.includes(curr) ? (sum += ")") : (sum += "(")),
    ""
  );
}
console.log(duplicateEncode("recede")); */

// #6kyu Base Conversion
/* function convert(input, source, target) {
  let s = 0;
  let str = "";
  for (let i = 0; i < input.length; i++) {
    s = s * source.length + source.indexOf(input[i]);
  }
  while (s > 0) {
    str = target[s % target.length] + str;
    s = Math.floor(s / target.length);
  }
  return str ? str : target[0];
} */

// #6kyu Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
/* function findSenior(list) {
  let ages = Math.max(...list.map((value) => value.age));
  return list.filter((value) => value.age === ages);
}
console.log(
  findSenior([
    {
      firstName: "Gabriel",
      lastName: "X.",
      country: "Monaco",
      continent: "Europe",
      age: 49,
      language: "PHP",
    },
    {
      firstName: "Odval",
      lastName: "F.",
      country: "Mongolia",
      continent: "Asia",
      age: 38,
      language: "Python",
    },
    {
      firstName: "Emilija",
      lastName: "S.",
      country: "Lithuania",
      continent: "Europe",
      age: 19,
      language: "Python",
    },
    {
      firstName: "Sou",
      lastName: "B.",
      country: "Japan",
      continent: "Asia",
      age: 49,
      language: "PHP",
    },
  ])
); */

// #6kyu WeIrD StRiNg CaSe
/* function toWeirdCase(string) {
  let result = "";
  let array = string.split(" ");
  for (let k = 0; k < array.length; k++) {
    for (let i = 0; i < array[k].length; i++) {
      i % 2 === 0
        ? (result += array[k][i].toUpperCase())
        : (result += array[k][i].toLowerCase());
    }
    result += " ";
  }
  return result.slice(0, -1);
}
console.log(toWeirdCase("This is a test")); */

// #6kyu Find the missing letter
/* function findMissingLetter(array) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperLetter = array[0].toUpperCase() === array[0];
  array = array.map((value) => value.toLowerCase());
  let firstIndex = alphabet.indexOf(array[0]);
  for (let i = 0; i < array.length; i++, firstIndex++) {
    if (alphabet[firstIndex] !== array[i]) {
      return upperLetter
        ? alphabet[firstIndex].toUpperCase()
        : alphabet[firstIndex];
    }
  }
}
console.log(findMissingLetter(["O", "Q", "R", "S"])); */

// #6kyu Highest Rank Number in an Array
/* function highestRank(arr) {
  let countNumber = {};
  for (let key of arr) {
    if (countNumber[key]) {
      countNumber[key]++;
    } else {
      countNumber[key] = 1;
    }
  }
  let maxValue = Math.max(...Object.values(countNumber));
  let maxKey = [];
  for (const key in countNumber) {
    if (countNumber[key] === maxValue) {
      maxKey.push(key);
    }
  }
  return Math.max(...maxKey);
}
console.log(highestRank([12, 4, 10, 8, 12, 7, 6, 4, 10, 12, 10])); */

// #6kyu Range function
/* function range(...args) {
  let array = [];
  step = 1;
  if (args.length === 1) {
    start = 1;
    [stop] = args;
  } else if (args.length === 2) {
    [start, stop] = args;
  } else {
    [start, step, stop] = args;
  }
  for (let i = start; i <= stop; i += step) {
    array.push(i);
  }
  return array;
}
console.log(range(7)); */
