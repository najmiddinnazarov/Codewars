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

// #6kyu Array Helpers
/* Array.prototype.square = function () {
  return this.map((value) => value * value);
};
Array.prototype.cube = function () {
  return this.map((value) => value * value * value);
};
Array.prototype.average = function () {
  return this.reduce((total, current) => total + current, 0) / this.length;
};
Array.prototype.sum = function () {
  return this.reduce((total, current) => total + current, 0);
};
Array.prototype.even = function () {
  return this.filter((value) => value % 2 === 0);
};
Array.prototype.odd = function () {
  return this.filter((value) => value % 2);
};
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.sum()); */

// #6kyu Twisted Sum
/* function twistedSum(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += i;
  }
  return eval(str.split("").join("+"));
}
console.log(twistedSum(10)); */

// #6kyu Arabian String
/* function camelize(str) {
  return str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}
console.log(camelize("java scri?pt")); */

// #6kyu Make the Deadfish Swim
/* function parse(data) {
  let array = [];
  data = data.replace(/[A-Za-z]/gi, (x) => {
    if ("idso".includes(x)) return x;
    else return "";
  });
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") {
      sum++;
    } else if (data[i] === "d") {
      sum--;
    } else if (data[i] === "s") {
      sum = sum * sum;
    } else {
      array.push(sum);
    }
  }
  return array;
}
console.log(parse("iiisdoso")); */

// #6kyu String array duplicates
/* function dup(s) {
  let array = [];
  for (let i = 0; i < s.length; i++) {
    let str = "";
    for (let k = 0; k < s[i].length; k++) {
      if (s[i][k] !== s[i][k + 1]) {
        str += s[i][k];
      }
    }
    array.push(str);
    str = "";
  }
  return array;
}
console.log(dup(["abracadabra", "allottee", "assessee"])); */

// #6kyu Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?
/* function balance(left, right) {
  left = eval(
    left
      .replace(/[!?]/g, (x) => (x === "!" ? 2 : 3))
      .split("")
      .join("+")
  );
  right = eval(
    right
      .replace(/[!?]/g, (x) => (x === "!" ? 2 : 3))
      .split("")
      .join("+")
  );
  if (left > right) {
    return "Left";
  } else if (right > left) {
    return "Right";
  } else {
    return "Balance";
  }
}
console.log(balance("!??", "?!!")); */

// #6kyu String transformer
/* function stringTransformer(str) {
  str = str.split(" ").reverse().join(" ");
  let string = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      string += str[i].toUpperCase();
    } else {
      string += str[i].toLowerCase();
    }
  }
  return string;
}
console.log(stringTransformer("Example Input")); */

// #6kyu Mix Fruit Juice
/* function mixFruit(arr) {
  let regularFruits = ["banana", "orange", "apple", "lemon", "grapes"];
  let specialFruits = ["avocado", "strawberry", "mango"];
  return Math.round(
    arr
      .map((value) => value.toLowerCase())
      .reduce((sum, curr) => {
        if (regularFruits.includes(curr)) {
          return sum + 5;
        } else if (specialFruits.includes(curr)) {
          return sum + 7;
        } else {
          return sum + 9;
        }
      }, 0) / arr.length
  );
}
console.log(mixFruit(["banana", "mango", "avocado"])); */

// #6kyu Smart Sum
/* function smartSum(...args) {
  return args.flat(Infinity).reduce((sum, curr) => sum + curr, 0);
}
console.log(smartSum(1, 2, [[3, 4], 5], 6)); */

// #6kyu Remember
/* function remember(str) {
  let dublicate = [];
  let array = str.split("");
  let spreadArray = array.filter(
    (value, index, arr) => arr.indexOf(value) !== index
  );
  return [...new Set(spreadArray)];
}
console.log(remember("limbojackassin the garden")); */

// #6kyu Odd/Even number of divisors
/* function oddity(n) {
  let sum = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      sum++;
      if (i != n / i) {
        sum++;
      }
    }
  }
  return sum % 2 === 0 ? "even" : "odd";
}
console.log(oddity(5)); */

// #6kyu Mirror object - tcejbo rorriM
/* const mirror = (obj) => {
  let object = {};
  for (const key in obj) {
    object[key] = key.split("").reverse().join("");
  }
  return object;
};
console.log(mirror({ abc: undefined, arara: undefined })); */

// #6kyu Write JavaScript's 'call' function using apply.
/* Function.prototype.call = function (context, ...args) {
  return this.apply(context, args);
};
function Product(name, price) {
  this.name = name;
  this.price = price;
}
const obj = {};
Product.call(obj, "Laptop", 999); */

// #6kyu Duplicate Arguments
/* function solution(...args) {
  return (
    args.filter((value, index, arr) => arr.indexOf(value) !== index).length > 0
  );
}
console.log(solution("a", "b", "c", "a")); */

// #6kyu Find The Duplicated Number in a Consecutive Unsorted List - Tougher Version
/* function findDup(array) {
  let tortoise = array[0];
  let hare = array[0];
  do {
    tortoise = array[tortoise];
    hare = array[array[hare]];
  } while (tortoise !== hare);
  let ptr1 = array[0];
  let ptr2 = tortoise;
  while (ptr1 !== ptr2) {
    ptr1 = array[ptr1];
    ptr2 = array[ptr2];
  }
  return ptr1;
}
console.log(findDup([3, 1, 3, 4, 2])); */

// #6kyu Autocomplete! Yay!
/* function autocomplete(input, dictionary) {
  input = input.replace(/[^a-zA-Z]/g, "");
  input = input.toLowerCase();
  let matches = dictionary.filter((word) =>
    word.toLowerCase().startsWith(input)
  );
  let result = matches.slice(0, 5);
  return result;
}
console.log(autocomplete("ai", ["airplane", "airport", "apple", "ball"])); */

// #6kyu Only Duplicates
/* function onlyDuplicates(str) {
  const charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  let result = "";
  for (let char of str) {
    if (charCount[char] > 1) {
      result += char;
    }
  }
  return result;
}
console.log(onlyDuplicates("abccdefee")); */

// #6kyu Faro Shuffle Count
/* function faroCount(deckSize) {
  function faroShuffle(deck) {
    let half = deckSize / 2;
    let shuffled = [];
    for (let i = 0; i < half; i++) {
      shuffled.push(deck[i]);
      shuffled.push(deck[i + half]);
    }
    return shuffled;
  }
  let originalDeck = Array.from({ length: deckSize }, (_, i) => i);
  let currentDeck = [...originalDeck];
  let shuffleCount = 0;
  do {
    currentDeck = faroShuffle(currentDeck);
    shuffleCount++;
  } while (!currentDeck.every((card, index) => card === originalDeck[index]));
  return shuffleCount;
}
console.log(faroCount(52)); */

// #6kyu Sentence Calculator
/* function lettersToNumbers(s) {
  const alphabet = " abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase() && alphabet.includes(s[i].toLowerCase())) {
      result += alphabet.indexOf(s[i].toLowerCase()) * 2;
    } else if (alphabet.includes(s[i])) {
      result += alphabet.indexOf(s[i]);
    } else if (numbers.includes(s[i])) {
      result += numbers.indexOf(s[i]);
    }
  }
  return result;
}
console.log(lettersToNumbers("Give me 5!")); */

// #6kyu Simplify the number!
/* function simplify(number) {
  let result = [];
  number = number.toString();
  for (let i = 0; i < number.length; i++) {
    if (number[i] != 0) {
      result.push(
        number[i] +
          "*".repeat(number.length - i - 1 ? 1 : 0) +
          "1".repeat(number.length - i - 1 ? 1 : 0) +
          "0".repeat(number.length - i - 1)
      );
    }
  }
  return result.join("+");
}
console.log(simplify(560)); */

// #6kyu Custom Array Filters
/* Array.prototype.even = function () {
  if (this !== "0") {
    return this.filter((num) => num % 2 === 0 && Number.isInteger(num));
  }
};
Array.prototype.odd = function () {
  return this.filter((num) => num % 2 && Number.isInteger(num));
};
Array.prototype.inRange = function (start, end) {
  return this.filter(
    (num) => num >= start && num <= end && Number.isInteger(num)
  );
};
Array.prototype.under = function (end) {
  return this.filter((num) => num < end && Number.isInteger(num));
};
Array.prototype.over = function (start) {
  return this.filter((num) => num > start && Number.isInteger(num));
};
console.log(
  ["a", 1, "0", "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even()
); */

// #6kyu Find Added
/* function findAdded(st1, st2) {
  if (st1.length > st2.length) {
    return "";
  }
  let st1CountNumber = {};
  let st2CountNumber = {};
  for (let i = 0; i < st1.length; i++) {
    if (st1[i] in st1CountNumber) {
      st1CountNumber[st1[i]]++;
    } else {
      st1CountNumber[st1[i]] = 1;
    }
  }
  for (let i = 0; i < st2.length; i++) {
    if (st2[i] in st2CountNumber) {
      st2CountNumber[st2[i]]++;
    } else {
      st2CountNumber[st2[i]] = 1;
    }
  }
  let result = "";
  for (const num in st2CountNumber) {
    if (st2CountNumber[num] > st1CountNumber[num]) {
      let count = st2CountNumber[num] - st1CountNumber[num];
      result += num.repeat(count);
    } else if (st1CountNumber[num] == undefined) {
      result += num.repeat(st2CountNumber[num]);
    }
  }
  return result;
}
console.log(findAdded("026866682139", "8356026866682139595")); */

// #6kyu T.T.T.22: Left? Right? Both?
/* function leftRightOrBoth(text) {
  const left = "12345QWERTASDFGZXCVB";
  const right = "67890YUIOPHJKL'NM,./^&*()";
  if (text === "") return "";
  let leftCount = 0;
  let rightCount = 0;
  text = text.toUpperCase();
  for (let i = 0; i < text.length; i++) {
    if (left.includes(text[i])) {
      leftCount++;
    } else if (right.includes(text[i])) {
      rightCount++;
    }
  }
  if (leftCount > 0 && rightCount > 0) return "Both";
  else if (leftCount > rightCount) return "Left";
  else if (rightCount > leftCount) return "Right";
  else return "";
}
console.log(leftRightOrBoth("^&*()")); */

// #6kyu Round by 0.5 steps
/* function solution(n) {
  return n.toString().includes(".")
    ? Math.round(n * 2) / 2
    : n % 1 === 0
    ? n
    : Math.round(n * 2) / 2;
}
console.log(solution(4.8)); */

// #6kyu Deep List Reverse
/* function deepReverse(l) {
  let result = [];
  for (let i = l.length - 1; i >= 0; i--) {
    if (Array.isArray(l[i])) {
      result.push(deepReverse(l[i]));
    } else {
      result.push(l[i]);
    }
  }
  return result;
}
console.log(
  deepReverse([
    [1, 2],
    [3, 4],
  ])
);
 */

// #6kyu Split and then add both sides of an array together.
/* function splitAndAdd(arr, n) {
  if (n === 0) {
    return arr;
  } else {
    let begin;
    let end;
    let result = [];
    if (arr.length % 2 === 0) {
      begin = arr.slice(0, arr.length / 2);
      end = arr.slice(arr.length / 2);
      for (let i = 0; i < begin.length; i++) {
        result.push(begin[i] + end[i]);
      }
      return splitAndAdd(result, n - 1);
    } else {
      return splitAndAdd([0, ...arr], n);
    }
  }
}
console.log(splitAndAdd([1, 2, 3, 4, 5], 3)); */

// #6kyu The most common letter
/* function replaceCommon(string, letter) {
  let countLetter = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] in countLetter && /[A-Za-z]/.test(string[i])) {
      countLetter[string[i]]++;
    } else {
      countLetter[string[i]] = 1;
    }
  }
  const maxNumber = Math.max(...Object.values(countLetter));
  const findLetter = Object.entries(countLetter).find(
    (value) => value[1] === maxNumber
  )[0];
  return string.replaceAll(findLetter, letter);
}
console.log(replaceCommon("my mom loves me as never did", "t")); */

// #6kyu Sort Arrays (Ignoring Case)
/* function sortme(names) {
  return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}
console.log(sortme(["Hello", "there", "I'm", "fine"])); */

// #6kyu first character that repeats
/* function firstDup(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== s.lastIndexOf(s[i])) {
      count++;
      if (count === 1) {
        return s[i];
      }
    }
  }
}
console.log(firstDup("tweet")); */

// #6kyu Update inventory in your smartphone store
/* function updateInventory(curStock, newStock) {
  const array = [...curStock, ...newStock];
  let object = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i][1] in object) {
      object[array[i][1]] += array[i][0];
    } else {
      object[array[i][1]] = array[i][0];
    }
  }
  let objectToArray = Object.entries(object).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  return objectToArray.map((value) => value.reverse());
}
console.log(
  updateInventory(
    [
      [25, "HTC"],
      [1000, "Nokia"],
      [50, "Samsung"],
      [33, "Sony"],
      [10, "Apple"],
    ],
    [
      [5, "LG"],
      [10, "Sony"],
      [4, "Samsung"],
      [5, "Apple"],
    ]
  )
); */

// #6kyu replaceAll(input, find, replace)
/* function replaceAll(input, find, replace) {
  return input.replaceAll(find, replace);
}
console.log(replaceAll("string-string", "ing", "!")); */

// #6kyu Decipher this!
/* function decipherThis(str) {
  str = str.split(" ");
  let num = [];
  let string = [];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      num.push(str[i]);
    } else {
      if (Number(str[i].slice(0, 3))) {
        num.push(str[i].slice(0, 3));
      } else if (Number(str[i].slice(0, 2))) {
        num.push(str[i].slice(0, 2));
      } else {
        num.push(str[i].slice(0, 1));
      }
    }
  }
  for (let i = 0; i < num.length; i++) {
    string.push(str[i].replace(num[i], String.fromCharCode(num[i])));
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i].length > 2) {
      let second = string[i][1];
      let last = string[i][string[i].length - 1];
      string[i] = string[i].slice(0, 1) + last + string[i].slice(2);
      string[i] = string[i].slice(0, string[i].length - 1) + second;
      result.push(string[i]);
    } else {
      result.push(string[i]);
    }
  }
  return result.join(" ");
}
console.log(decipherThis("65 119esi 111dl 111lw 108dvei 105n 97n 111ka")); */

// #6kyu Basics 03: Strings, Numbers and Calculation
/* function calculateString(st) {
  let math = "0123456789/*+-.";
  let string = "";
  for (let i = 0; i < st.length; i++) {
    if (math.includes(st[i])) {
      string += st[i];
    }
  }
  let sign;
  if (string.includes("+")) {
    sign = "+";
  } else if (string.includes("-")) {
    sign = "-";
  } else if (string.includes("*")) {
    sign = "*";
  } else if (string.includes("/")) {
    sign = "/";
  } else {
    return "";
  }
  let split = string.split(sign);
  let result = eval(split.join(sign));
  return Math.round(
    result[0] == "0"
      ? eval(split.join(sign)).toString().replace(/^0./, "").replace(/^0+/, "")
      : result
  ).toString();
}
console.log(calculateString("fsdfsd235???34.4554s4234df-sdfgf2g3h4j442")); */

// #6kyu Interlace an arbitrary Number of Strings
/* function combineStrings(...args) {
  let array = [...args];
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (max < array[i].length) {
      max = array[i].length;
    }
  }
  let string = "";
  for (let i = 0; i < max; i++) {
    for (let k = 0; k < array.length; k++) {
      string += array[k][i] ? array[k][i] : ""
    }
  }
  return string;
}
console.log(combineStrings("abcd", "123", "£$%")); */

// #6kyu Polybius square cipher - encode
/* function polybius(text) {
  let polybius = {
    A: 11,
    B: 12,
    C: 13,
    D: 14,
    E: 15,
    F: 21,
    G: 22,
    H: 23,
    I: 24,
    J: 24,
    K: 25,
    L: 31,
    M: 32,
    N: 33,
    O: 34,
    P: 35,
    Q: 41,
    R: 42,
    S: 43,
    T: 44,
    U: 45,
    V: 51,
    W: 52,
    X: 53,
    Y: 54,
    Z: 55,
  };
  return text.replace(/[A-Za-z]/g, (x) => {
    if (polybius[x]) {
      return polybius[x];
    } else {
      return x;
    }
  });
}
console.log(polybius("CODEWARS")); */

// #6kyu Grouped by commas
/* function groupByCommas(n) {
  if (typeof n !== "number") return "NaN";
  let str = String(n).split("").reverse().join("");
  let result = str.replace(/(\d{3})(?=\d)/g, "$1,");
  return result.split("").reverse().join("");
}
console.log(groupByCommas(32234)); */
