// #7kyu Vowel Count
/* function getCount(str) {
  const vowel = "aeiou";
  let count = 0;
  for (const i of str) {
    if (vowel.includes(i)) count++;
  }
  return count;
} */

// #7kyu Ordered Count of Characters
/* const orderedCount = function (text) {
  let obj = {};
  for (const i of text) {
    if (i in obj) obj[i]++;
    else obj[i] = 1;
  }
  return Object.entries(obj);
};
console.log(orderedCount("233312")); */

// #7kyu Squares sequence
/* function squares(x, n) {
  let result = [];
  n > 0 && n !== undefined ? result.push(x) : [];
  for (let i = 1; i < n; i++) {
    result.push((x = x ** 2));
  }
  return result;
}
console.log(squares(2, -1)); */

// #7kyu shorter concat [reverse longer]
/* function shorter_reverse_longer(a, b) {
  let reverseLetterA = a.split("").reverse().join("");
  let reverseLetterB = b.split("").reverse().join("");
  if (a.length >= b.length) {
    return `${b}${reverseLetterA}${b}`;
  } else {
    return `${a}${reverseLetterB}${a}`;
  }
}
console.log(shorter_reverse_longer("fghi", "abcde")); */

// #7kyu Find Count of Most Frequent Item in an Array
/* function mostFrequentItemCount(collection) {
  let res = [];
  let obj = {};
  if (collection.length !== 0) {
    for (const i of collection) {
      if (i in obj) obj[i]++;
      else obj[i] = 1;
    }
  } else return 0;
  for (const key in obj) {
    res.push(obj[key]);
  }
  return Math.max(...res);
}
console.log(mostFrequentItemCount([])); */

// #7kyu Debug Sum of Digits of a Number
/* function getSumOfDigits(integer) {
  var sum = [];
  var digits = Math.trunc(integer).toString();
  for (var ix = 0; ix < digits.length; ix++) {
    sum.push(digits[ix]);
  }
  return eval(sum.join("+"));
}
console.log(getSumOfDigits(223)); */

// 7kyu V A P O R C O D E
/* function vaporcode(string) {
  let str = string.split(" ").join("").toUpperCase();
  return str.split("").join("  ");
}
console.log(vaporcode("Why isnt my code working")); */

// #7kyu Get the Middle Character
/* function getMiddle(s) {
  if (s.length % 2 === 0) {
    return s
      .split("")
      .splice(s.length / 2 - 1, 2)
      .join("");
  } else {
    return s
      .split("")
      .splice(Math.floor(s.length / 2), 1)
      .join("");
  }
}
console.log(getMiddle("A")); */

// #7kyu Mumbling
/* function accum(s) {
  let str = s.toLowerCase();
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase();
    result += `${str[i].repeat(i)}-`;
  }
  return result.substring(-1, result.length - 1);
}
console.log(accum("abcd")); */

// #7kyu Shortest Word
/* function findShort(s) {
  let str = s.toLowerCase();
  let obj = {};
  let arr = str.split(" ");
  let uniqueChars = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
  for (const i of uniqueChars) {
    for (const j of i) {
      if (i in obj) obj[i]++;
      else obj[i] = 1;
    }
  }
  return Math.min(...Object.values(obj));
}
console.log(
  findShort(
    "Monero Steem LiteCoin BTC Dogecoin Bitcoin Classic Dash Ethereum 21inc Bitcoin Classic Lisk BTC LiteCoin ProofOfStake Dash"
  )
); */

// #7kyu Friend or Foe?
/* function friend(friends) {
  return friends.filter((value) => value.length == 4);
}
console.log(friend(["Love", "Your", "Face", "1"])); */

// #7kyu Binary Addition
/* function addBinary(a, b) {
  return (a + b).toString(2);
}
console.log(addBinary(1, 1)); */

// #7kyu Ones and Zeros
/* const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};
console.log(binaryArrayToNumber([0, 1, 0, 1, 1])); */

// #7kyu Hex Hash Sum
/* function hexHash(code) {
  let str = "";
  for (let i = 0; i < code.length; i++) {
    str += code.charCodeAt(i).toString(16);
  }
  let result = str.split("").filter((value) => !isNaN(value));
  return eval(result.join("+")) == undefined ? 0 : eval(result.join("+"));
}
console.log(hexHash("")); */

// #7kyu Flatten
/* var flatten = function (array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(...array[i]);
  }
  return arr;
};
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]));
var flatten = function (array) {
  let arr = [];
  return arr.concat(array).flat(1);
};
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]])); */

// #7kyu Fizz Buzz
/* function fizzbuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) arr.push("FizzBuzz");
    else if (i % 3 === 0) arr.push("Fizz");
    else if (i % 5 === 0) arr.push("Buzz");
    else arr.push(i);
  }
  return arr;
}
console.log(fizzbuzz(15)); */

// #7kyu Simple Fun #176: Reverse Letter
/* function reverseLetter(str) {
  let arr = [];
  for (const i of str) {
    if (i.toLowerCase() !== i.toUpperCase()) arr.push(i);
  }
  return arr.reverse().join("");
}
console.log(reverseLetter("ultr53o?n")); */

// #7kyu String ends with?
/* function solution(str, ending) {
  return str.endsWith(ending);
}
console.log(solution("abcde", "de")); */

// #7kyu MinMinMax
/* function minMinMax(array) {
  let newArr = array;
  let arr = [];
  array.sort((a, b) => a - b);
  arr.push(array[0]);
  function rec(x) {
    if (!newArr.includes(x)) return x;
    else return rec(x + 1);
  }
  arr.push(rec(arr[0]), array[array.length - 1]);
  return arr;
}
console.log(minMinMax([1, 3, -3, -2, 8, -1])); */

// #7kyu Count consonants
/* function consonantCount(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const i of str) {
    if (!i.match(/^[^a-zA-Z]+$/) && !vowel.includes(i)) count++;
  }
  return count;
}
console.log(consonantCount("h^$&^#$&^elLo world")); */

// #7kyu How Many Unique Consonants?
/* function countConsonants(str) {
  let dublicate = [...new Set(str.toLowerCase())];
  console.log(dublicate);
  return (
    dublicate.length -
    (dublicate.join("").match(/[a, e, i, o, u,0-9,' ']/gi)?.length == null
      ? 0
      : dublicate.join("").match(/[a, e, i, o, u,0-9,!]/gi).length)
  );
}
console.log(countConsonants("Count my unique consonants!!")); */

// #7kyu Number of People in the Bus
/* var number = function (busStops) {
  return (
    busStops.reduce((a, b) => a + b[0], 0) -
    busStops.reduce((a, b) => a + b[1], 0)
  );
};
console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
 */

// #7kyu Beginner Series #3 Sum of Numbers
/* function getSum(a, b) {
  if (a == b) return a;
  let count = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      count += i;
    }
  } else {
    for (let i = a; i <= b; i++) {
      count += i;
    }
  }
  return count;
}
console.log(getSum(-1, 2)); */

// #7kyu Simple string characters
/* function solve(s) {
  let arr = [0, 0, 0, 0];
  for (const i of s) {
    if (i == i.toUpperCase() && isNaN(i) && i.toLowerCase() !== i.toUpperCase())
      arr[0]++;
    else if (
      i == i.toLowerCase() &&
      isNaN(i) &&
      i.toLowerCase() !== i.toUpperCase()
    )
      arr[1]++;
    else if (!isNaN(i)) arr[2]++;
    else arr[3]++;
  }
  return arr;
}
console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft")); */

// #7kyu Ch4113ng3
/* function nerdify(txt) {
  let arr = txt.split("");
  let res = [];
  arr.map((vl) => {
    if (vl.match(/A|a/g)) res.push(4);
    else if (vl.match(/E|e/g)) res.push(3);
    else if (vl.match(/l/g)) res.push(1);
    else res.push(vl);
  });
  return res.join("");
}
console.log(nerdify("SeAoijselawuue")); */

// #7kyu Vowel one
/* function vowelOne(s) {
  let arr = [];
  s.split("").map((vl) =>
    vl.match(/^[aeiou]$/gi) ? arr.push(1) : arr.push(0)
  );
  return arr.join("");
}
console.log(vowelOne("123, arou"));
 */

// #7kyu Band name generator
/* function bandNameGenerator(str) {
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return (
      str.replace(str.charAt(0), str.charAt(0).toUpperCase()) + str.slice(1)
    );
  } else {
    return "The " + str.replace(str.charAt(0), str.charAt(0).toUpperCase());
  }
}
console.log(bandNameGenerator("tarta")); */

// #7kyu Greet Me
/* var greet = function (name) {
  let lower = name.toLowerCase();
  return "Hello " + lower[0].toUpperCase() + lower.slice(1) + "!";
};
console.log(greet("RILEY")); */

// #7kyu Fix string case
/* function solve(s) {
  let lower = 0;
  let upper = 0;
  for (const i of s) {
    if (i === i.toLowerCase()) lower++;
    else upper++;
  }
  return lower >= upper ? s.toLowerCase() : s.toUpperCase();
}
console.log(solve("CODe")); */

// #7kyu Minimize Sum Of Array (Array Series #1)
/* function minSum(arr) {
  let sortNum = arr.sort((a, b) => b - a);
  let array = [];
  let res = [];
  while (sortNum.length > 0) {
    array.push([sortNum[0], sortNum[sortNum.length - 1]]);
    sortNum.splice(0, 1);
    sortNum.splice(-1, 1);
  }
  array.map((vl) => {
    res.push(eval(vl.join("*")));
  });
  return res.reduce((a, b) => a + b, 0);
}
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6])); */

// #7kyu Product Of Maximums Of Array (Array Series #2)
/* function maxProduct(numbers, size) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((a, b) => a * b, 1);
}
console.log(maxProduct([4, 3, 5], 2));
 */

// #7kyu Maximum Triplet Sum (Array Series #7)
/* function maxTriSum(numbers) {
  return numbers
    .filter((vl, index) => numbers.indexOf(vl) === index)
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((sum, curr) => (sum += curr), 0);
}
console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
 */

// #7kyu Divide and Conquer
/* function divCon(x) {
  let str = 0;
  let number = 0;
  x.map((num) => {
    if (typeof num == "string") str += Number(num);
    else number += num;
  });
  return number - Number(str);
}
console.log(divCon([9, 3, "7", "3"]));
 */

// #7kyu Alphabet war
/* function alphabetWar(fight) {
  let left = 0;
  let right = 0;
  for (const i of fight) {
    if (i == "w") left += 4;
    if (i == "p") left += 3;
    if (i == "b") left += 2;
    if (i == "s") left += 1;
    if (i == "m") right += 4;
    if (i == "q") right += 3;
    if (i == "d") right += 2;
    if (i == "z") right += 1;
  }
  if (left == right) return "Let's fight again!";
  else if (left > right) return "Left side wins!";
  else return "Right side wins!";
}
console.log(alphabetWar("z"));
 */

// #7kyu Sum a list but ignore any duplicates
/* function sumNoDuplicates(numList) {
  let filterList = numList.filter((vl, index) => numList.indexOf(vl) !== index);
  let a = new Set([...filterList]);
  let b = new Set([...numList]);
  return [...a, ...b]
    .filter((x) => ![...a].includes(x))
    .reduce((sum, curr) => (sum += curr), 0);
}
console.log(sumNoDuplicates([1, 9, 2, 1, 5, 5, 1, 1, 5, 10, 5, 9, 5, 2, 1])); */

// #7kyu Convert Hash To An Array
/* function convertHashToArray(hash) {
  return Object.entries(hash).sort((a, b) => a[0].localeCompare(b[0]));
}
console.log(convertHashToArray({ name: "Jeremy", age: 24 }));
 */

// #7kyu Covfefe
/* function covfefe(str) {
  if (str.includes("coverage")) return str.replace(/coverage/g, "covfefe");
  else return [...str.split(" "), "covfefe"].join(" ");
}
console.log(
  covfefe(
    "sryzxamftj vhkrgujbrlab uxtdqtlxnz ghykquor coverage bdsyh dciuk coverage bsbsmsxqhyco tdbvoyxs lsoru smoxpx tihznmmtcnofzu uyfjclmv zpwwpudzjul hynveshwmxgn jvftl"
  )
); */

// #7kyu Sum of Cubes
/* function sumCubes(n) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += i ** 3;
  }
  return res;
}
console.log(sumCubes(3)); */

// #7kyu Incrementer
/* function incrementer(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(Number(`${nums[i] + (i + 1)}`.slice(-1, 2)));
  }
  return res;
}
console.log(incrementer([4, 6, 7, 1, 3])); */

// #7kyu Testing 1-2-3
/* var number = function (array) {
  return array.map((vl, index) => `${index + 1}: ${vl}`);
};
console.log(number(["a", "b", "c"]));
 */

// #7kyu Sort array by string length
/* function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));
 */

// #7kyu Filter Coffee
/* function search(budget, prices) {
  return prices
    .sort((a, b) => a - b)
    .filter((num) => num <= budget)
    .join(",");
}
console.log(search(14, [7, 3, 23, 9, 14, 20, 7])); */

// #7kyu Sorting Dictionaries
/* function sortDict(dict) {
  return Object.entries(dict)
    .sort((a, b) => b[1] - a[1])
    .map((num) => {
      if (!isNaN(num[0])) return [+num[0], num[1]];
      else return [num[0], num[1]];
    });
}
console.log(sortDict({ a: 6, b: 2, c: 4 })); */

// #7kyu Changing letters
/* function swap(string) {
  return string.replace(/[aouei]/gi, (letter) => letter.toUpperCase());
}
console.log(swap("Codewars"));
 */

// #7kyu Are the numbers in order?
/* function inAscOrder(arr) {
  let cloneArr = arr.join("");
  let sortArr = arr.sort((a, b) => a - b).join("");
  return Object.is(sortArr, cloneArr);
}
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));
 */

// #7kyu Odd or Even?
/* function oddOrEven(array) {
  return array.reduce((sum, curr) => sum + curr, 0) % 2 === 0 ? "even" : "odd";
}
console.log(oddOrEven([-1023, -1, 3]));
 */

// #7kyu Remove the minimum
/* function removeSmallest(numbers) {
  let arr = numbers;
  return numbers.filter(
    (vl, index) => numbers.indexOf(Math.min(...numbers)) !== index
  );
}
console.log(removeSmallest([1, 2, 3, 4, 5]));
 */

// #7kyu char_to_ascii
/* function charToAscii(string) {
  if (string === "") return null;
  let onlyLetter = string.match(/[A-Za-z]/g);
  let obj = {};
  for (const i of onlyLetter) {
    if (!(i in obj)) obj[i] = i.charCodeAt();
  }
  return obj;
}
console.log(charToAscii(""));
 */

// #7kyu Largest Elements
/* function largest(n, array) {
  return array
    .sort((a, b) => b - a)
    .slice(0, n)
    .reverse();
}
console.log(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]));
 */

// #7kyu Sum even numbers
/* function sumEvenNumbers(input) {
  return input.reduce((sum, curr) => (curr % 2 === 0 ? sum + curr : sum), 0);
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
 */

// #7kyu Odd-Even String Sort
/* function sortMyString(S) {
  let even = "";
  let odd = "";
  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) even += S[i];
    else odd += S[i];
  }
  return even + " " + odd;
}
console.log(sortMyString("CodeWars"));
 */

// #7kyu Decreasing Inputs
/* function add(...args) {
  let res = 0;
  for (let i = 0; i < [...args].length; i++) {
    res += [...args][i] / (i + 1);
  }
  return Math.round(res);
}
console.log(add(4, -3, -2));
 */

// #7kyu C.Wars
/* function initials(n) {
  let str = n.split(" ").map((vl) => vl[0].toUpperCase());
  return str.join(".") + n.split(" ").slice(-1).join("").slice(1);
}
console.log(initials("Barack hussain obama"));
 */

// #7kyu Get key/value pairs as arrays
/* function keysAndValues(data) {
  return [Object.keys(data), Object.values(data)];
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
 */

// #7kyu Between Extremes
/* function betweenExtremes(numbers) {
  return Math.max(...numbers) - Math.min(...numbers);
}
console.log(betweenExtremes([21, 34, 54, 43, 26, 12]));
 */

// #7kyu Maid Ep2: Christmas Trash Party
/* const openOrSenior = (data) =>
  data.map((el) => ((el[0] >= 55) & (el[1] > 7) ? "Senior" : "Open"));
console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
 */

// #7kyu Dot Calculator
/* function dotCalculator(equation) {
  let arr = equation.split(" ");
  let a = arr[0].length;
  let b = arr[2].length;
  if (equation.includes("+")) return ".".repeat(a + b);
  else if (equation.includes("-")) {
    if (a > b) return ".".repeat(a - b);
    else return ".".repeat(b - a);
  } else if (equation.includes("*")) return ".".repeat(a * b);
  else return ".".repeat(a / b);
}
console.log(dotCalculator("..... - ..............."));
 */

// #7kyu No oddities here
/* function noOdds(values) {
  return values.filter((vl) => vl % 2 === 0);
}
console.log(noOdds([0, 1, 2, 3]));
 */

// #7kyu Jaden Casing Strings
/* String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");
};
console.log("How can mirrors be real if our eyes aren't real".toJadenCase()); */

// #7kyu Don't give me five!
/* function dontGiveMeFive(start, end) {
  arr = [];
  for (i = start; i <= end; i++) {
    if (!/[5]/i.test(i)) {
      arr.push(i);
    }
  }
  return arr.length;
}
console.log(dontGiveMeFive(1, 9));
 */

// #7kyu Green Glass Door
/* function stepThroughWith(s) {
  let regex = /[^\w\s]|(.)\1/gi;
  return regex.test(s);
}
console.log(stepThroughWith("mon"));
 */

// #7kyu Flatten and sort an array
/* "use strict";
function flattenAndSort(array) {
  return array.flat(Infinity).sort((a, b) => a - b);
}
console.log(
  flattenAndSort(
    flattenAndSort([
      [3, 2, 1],
      [7, 9, 8],
      [6, 4, 5],
    ])
  )
);
 */

// #7kyu Reverse list
/* function reverseList(arr) {
  return arr.reverse();
}
console.log(reverseList([1, 2, 3]));
 */

// #7kyu Sort arrays - 1
/* sortme = function (names) {
  return names.sort();
};
console.log(sortme(["one", "two", "three"])); */

// #7kyu Find the stray number
/* function stray(numbers) {
  let obj = {};
  for (const i of numbers) {
    if (i in obj) obj[i]++;
    else obj[i] = 1;
  }
  for (const key in obj) {
    if (obj[key] === 1) return +key;
  }
}
console.log(stray([1, 2, 1]));
 */

// #7kyu Factorial
/* function factorial(n) {
  return n != 0 ? n * factorial(n - 1) : 1;
}
console.log(factorial(4));
 */

// #7kyu Alphabetically ordered
/* function alphabetic(s) {
  return s.split("").sort().join("") === s;
}
console.log(alphabetic("codewars"));
 */

// #7kyu Find the index of the second occurrence of a letter in a string
/* function secondSymbol(s, symbol) {
  let a = s.split("").map((vl, index) => (vl === symbol ? index : null));
  return a.filter((value) => value !== null)[1] || null;
}
console.log(secondSymbol("Hello world!!!", "A"));
 */

// #7kyu Fibonacci's FizzBuzz
/* var fibsFizzBuzz = function (n) {
  var output = [];
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (let i = 1; i <= n; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    output.push(n1);
  }
  return output.map((vl) =>
    vl % 3 === 0 && vl % 5 === 0
      ? "FizzBuzz"
      : vl % 3 === 0
      ? "Fizz"
      : vl % 5 === 0
      ? "Buzz"
      : vl
  );
};
console.log(fibsFizzBuzz(5)); */

// #7kyu Make acronym
/* function toAcronym(inp) {
  return inp
    .split(" ")
    .map((vl) => vl[0].toUpperCase())
    .join("");
}
console.log(toAcronym("hyper text markup language"));
 */

// #7kyu Length and two values.
/* function alternate(n, firstValue, secondValue) {
  let output = [];
  let num = n;
  while (n--) {
    output.push(firstValue, secondValue);
  }
  return output.slice(0, num);
}
console.log(alternate(5, true, false));
 */

// #7kyu esreveR
/* reverse = function (array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
};
console.log(reverse([767, 918, 621, 883, 367, 41, 829]));
 */

// #7kyu Cats and shelves
/* function solution(start, finish) {
  let difference = finish - start;
  return Math.floor(difference / 3) + (difference % 3);
}
console.log(solution(1, 5));
 */

// #7kyu Complementary DNA
/* function DNAStrand(dna) {
  const obj = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return dna.replace(/[A-Z]/g, (x) => (obj[x] ? obj[x] : x));
}
console.log(DNAStrand("GTAT"));
 */

// #7kyu Credit Card Mask
/* function maskify(cc) {
  let slice = cc.slice(-4);
  if (cc.length <= 4) return cc;
  else return "#".repeat(cc.length - 4) + slice;
}
console.log(maskify("4556364607935616"));
 */

// #7kyu Find the divisors!
/* function divisors(integer) {
  let res = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) res.push(i);
  }
  return res.length === 0 ? `${integer} is prime` : res;
}
console.log(divisors(253)); */

// #7kyu Switcheroo
/* function switcheroo(x) {
  return x.replace(/[a | b]/g, (x) => {
    return { a: "b", b: "a" }[x];
  });
}
console.log(switcheroo("abc"));
 */

// #7kyu Build a square
/* function generateShape(integer) {
  let str = "";
  for (let i = 1; i <= integer; i++) {
    for (let k = 1; k <= integer; k++) {
      str += `+`;
    }
    str += `\n`;
  }
  return str.slice(0, -1);
}
console.log(generateShape(8)); */

// #7kyu Running out of space
/* function spacey(array) {
  let res = [];
  for (let i = 1; i <= array.length; ) {
    res.push(array.slice(array[i], i++).join(""));
  }
  return res;
}
console.log(spacey(["kevin", "has", "no", "space"]));
 */

// #7kyu Remove All The Marked Elements of a List
/* Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((vl) => !values_list.includes(vl));
};
let l = new Array();
console.log(l.remove_([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]));
 */

// #7kyu Likes Vs Dislikes
/* function likeOrDislike(buttons) {
  return buttons.reduce((sum, curr) => (curr == sum ? Nothing : curr), Nothing);
}
console.log(likeOrDislike([Dislike]));
 */

// #7kyu Chain me
/* function chain(input, fs) {
  return fs.reduce((input, fn) => fn(input), input);
}
 */

// #7kyu 99 Problems, #1: last in list
/* const last = (xs) => (xs.length > 0 ? xs[xs.length - 1] : null);
console.log(last([])); */

// #7kyu Return the closest number multiple of 10
/* const closestMultiple10 = (num) => {
  return +`${num}`.slice(-1) < 5
    ? +`${Math.round(num / 10)}0`
    : +`${Math.round(num / 10)}0`;
};
console.log(closestMultiple10(37));
 */

// #7kyu Basic JS - Building a calculator
/* var Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : false),
};
console.log(Calculator.add(2, 2));
console.log(Calculator.subtract(2, 2));
console.log(Calculator.multiply(2, 2));
console.log(Calculator.divide(2, 2));
 */

// #7kyu Find array
/* function findArray(arr1, arr2) {
  return !arr1.length || !arr2.length ? [] : arr2.map((value) => arr1[value]);
}
console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7])); */

// #7kyu Sorting Arrays
/* function sortArray(a1, a2) {
  return a1.map((value) => {
    for (const i of a2) {
      if (i[0] === value[0]) return i;
    }
  });
}
console.log(
  sortArray(
    ["giraffe", "orangutan", "impala", "elephant", "rhino"],
    ["rattlesnake", "eagle", "geko", "iguana", "octopus"]
  )
);
 */

// #7kyu [JS] Parse integers in array
/* var parseNumbers = function (intStrs) {
  return intStrs.map((value) => parseInt(value));
};
console.log(parseNumbers(["2.48"]));

 */

// #7kyu Regex validate PIN code
/* const validatePIN = (pin) => {
  if (pin.length == 4 || pin.length == 6)
    return pin.match(/[0-9]/gm).length === pin.length;
  return false;
};
console.log(validatePIN("1234")); */

// #7kyu Sum - Square Even, Root Odd
/* const sumSquareEvenRootOdd = (ns) => {
  return +ns
    .reduce(
      (sum, curr) => (sum += curr % 2 === 0 ? curr ** 2 : Math.sqrt(curr)),
      0
    )
    .toFixed(2);
};
console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]));
 */

// #7kyu Complete The Pattern #1
// function pattern(n) {
//   var output = "";
//   for (let i = 1; i <= n; i++) {
//     output += `${i}`.repeat(i) + "\n";
//   }
//   return output.slice(0, -1);
// }
// console.log(pattern(5));

// #7kyu Array Array Array
/* function explode(x) {
  let number = x.join("").match(/[0-9]/g);
  if (number == null) return "Void!";
  let finishNumber = eval(number.join("+"));
  let result = [];
  for (let i = 0; i < finishNumber; i++) { 
    result.push(x);
  }
  return result;
}
console.log(explode(["a", "b"]));
 */

// #7kyu Anagram Detection
/* var isAnagram = function (test, original) {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
};
console.log(isAnagram("Buckethead", "DeathCubeK")); */

// #7kyu Cat and Mouse - Easy Version
/* function catMouse(x) {
  return (x.match(/\./g) || []).length > 3 ? "Escaped!" : "Caught!";
}
console.log(catMouse("C....m"));
 */

// #7kyu Converting 12-hour time to 24-hour time
/* function to24hourtime(hour, minute, period) {
  if (period === "pm") {
    if (hour === 12) return `${`12`}${minute > 9 ? minute : `0${minute}`}`;
    return `${hour + 12}${minute > 9 ? minute : `0${minute}`}`;
  } else {
    if (hour === 12) return `${`00`}${minute > 9 ? minute : `0${minute}`}`;
    return `${hour > 9 ? hour : `0${hour}`}${
      minute > 9 ? minute : `0${minute}`
    }`;
  }
}
console.log(to24hourtime(4, 0, "pm")); */

// #7kyu Find the capitals
/* var capitals = function (word) {
  let result = [];
  for (let i = 0; i < word.length; i++)
    if (word[i] === word[i].toUpperCase()) result.push(i);
  return result;
};
console.log(capitals("CodEWaRs")); */

// #7kyu The Coupon Code
/* function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const curDate = new Date(currentDate);
  const expDate = new Date(expirationDate);
  if (enteredCode === correctCode && curDate <= expDate) return true;
  return false;
}
console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014")); */

// #7kyu Waiting room
/* function lastChair(N) {
  return N - 1;
}
console.log(lastChair(lastChair(10))); */

// #7kyu Convert an array of strings to array of numbers
/* function toNumberArray(stringarray) {
  return stringarray.map((value) => Number(value));
}
console.log(toNumberArray(["1.1", "2.2", "3.3"]));
 */

// #7kyu Insert dashes
/* function insertDash(num) {
  let arr = num.toString().split("");
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 && arr[i + 1] % 2) result += `${arr[i]}-`;
    else result += arr[i];
  }
  return result;
}
console.log(insertDash(454793)); */

// #7kyu Slaphead
/* function bald(x) {
  let count = 0;
  let str = "";
  for (let i = 0; i < x.length; i++) if (x[i] === "/") count++;
  switch (count) {
    case 0:
      str += "Clean!";
      break;
    case 1:
      str += "Unicorn!";
      break;
    case 2:
      str += "Homer!";
      break;
    case 3:
    case 4:
    case 5:
      str += "Careless!";
      break;
    default:
      str += "Hobo!";
      break;
  }
  return ["-".repeat(x.length), str];
}
console.log(bald("/---------")); */

// #7kyu Scrolling Text
/* function scrollingText(text) {
  let result = [];
  let upper = text.toUpperCase();
  for (let i = 0; i < text.length; i++) {
    result.push(upper.slice(i) + upper.slice(0, i));
  }
  return result;
}
console.log(scrollingText("codewars")); */

// #7kyu Sort by Last Char
/* function last(x) {
  return x
    .split(" ")
    .sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));
}
console.log(last("take me to semynak")); */

// #7kyu The average length
/* function averageLength(arr) {
  let letterLength = Math.round(arr.join("").length / arr.length);
  return arr.map((value) => value[0].repeat(letterLength));
}
console.log(averageLength(["aa", "bb", "ddd", "eee"]));
 */

// #7kyu That unites us
/* function thatUnitesUs(array1, array2, n) {
  return [...new Set(array1.concat(array2).sort())].slice(0, n);
}
console.log(thatUnitesUs(["z", "g", "f"], ["g", "f", "c"], 3));
 */

// #7kyu Lowercase strings in array
/* function arrayLowerCase(arr) {
  return arr.map((value) =>
    typeof value === "string" ? value.toLowerCase() : value
  );
}
console.log(arrayLowerCase(["Red", 1]));
 */

// #7kyu Absent vowel
/* function absentVowel(x) {
  if (!x.match(/a/)) return 0;
  if (!x.match(/e/)) return 1;
  if (!x.match(/i/)) return 2;
  if (!x.match(/o/)) return 3;
  if (!x.match(/u/)) return 4;
}
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"));
 */

// #7kyu Always perfect
/* function checkRoot(string) {
  const arr = string.split(",").map((v) => v * 1);
  if (arr.some((v) => isNaN(v) || v === 0) || arr.length !== 4)
    return "incorrect input";
  const sum = arr.reduce((a, b) => a * b, 1);
  if (
    arr.map((v, i, arr) => arr[i] + 1 === arr[i + 1]).filter((v) => v === false)
      .length > 1
  )
    return "not consecutive";
  return `${sum + 1}, ${Math.sqrt(sum + 1)}`;
}
console.log(checkRoot("4,5,6,7")); */

// #7kyu A Rule of Divisibility by 7
/* const seven = (m) => {
  let times = 0;
  while (("" + m).length > 2) {
    times++;
    m = Math.floor(m / 10) - (m % 10) * 2;
  }
  return [m, times];
};
console.log(seven(1021));
 */

// #7kyu All unique
/* function hasUniqueChars(str) {
  return new Set(str).size === str.length;
}
console.log(hasUniqueChars("  nAa")); */

// #7kyu Calculate Julie's Age
/* function age(x, y) {
  return (x * y) / (y - 1);
}
console.log(age(-15, 0.25));
 */

// #7kyu Move 10
/* function moveTen(s){
  const str = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  const arr = s.split('').map(v => v = str.indexOf(v)+10);
  return arr.map(v => v = str[v]).join('');
}
console.log(moveTen("testcase")); */

// #7kyu Numbers to Letters
/* function switcher(x) {
  const obj = {
    1: "z",
    2: "y",
    3: "x",
    4: "w",
    5: "v",
    6: "u",
    7: "t",
    8: "s",
    9: "r",
    10: "q",
    11: "p",
    12: "o",
    13: "n",
    14: "m",
    15: "l",
    16: "k",
    17: "j",
    18: "i",
    19: "h",
    20: "g",
    21: "f",
    22: "e",
    23: "d",
    24: "c",
    25: "b",
    26: "a",
    27: "!",
    28: "?",
    29: " ",
  };
  return x.map((v) => obj[v * 1]).join("");
}
console.log(switcher(["24", "12", "23", "22", "4", "26", "9", "8"])); */

// #7kyu Multiply the strings in the array
/* function arrMultiply(arr) {
  return `${arr[0] * arr[1]}`;
}
console.log(arrMultiply(["4", "5"])); */

// #7kyu Name Array Capping
/* function capMe(names) {
  return names.map(
    (value) => value[0].toUpperCase() + value.slice(1).toLowerCase()
  );
}
console.log(capMe(["jo", "nelson", "jurie"])); */

// #7kyu By 3, or not by 3? That is the question . . .
/* function divisibleByThree(str) {
  return str.split("").reduce((a, b) => a + b * 1, 0) % 3 === 0;
}
console.log(divisibleByThree("123")); */

// #7kyu Binary Calculator
/* function calculate(n1, n2, o) {
  n1 = parseInt(n1, 2);
  n2 = parseInt(n2, 2);
  switch (o) {
    case "add":
      return (n1 + n2).toString(2);
    case "subtract":
      return (n1 - n2).toString(2);
    case "multiply":
      return (n1 * n2).toString(2);
  }
}
console.log(calculate("1", "1", "add")); */

// #7kyu Differential Averaging
/* function addToAverage(current, points, add) {
  return (current * points + add) / (points + 1);
}
console.log(addToAverage(0, 0, 1)); */

// #7kyu Check digit
/* function checkDigit(number, index1, index2, digit) {
  if (index1 > index2) {
    [index1, index2] = [index2, index1];
  }
  return ("" + number).slice(index1, index2 + 1).indexOf("" + digit) > -1;
}
console.log(checkDigit(1234567, 1, 0, 1)); */

// #7kyu Filter the number
/* var filterString = function (value) {
  let result = "";
  for (let i = 0; i < value.length; i++) {
    if (!isNaN(value[i])) result += value[i];
  }
  return +result;
};
console.log(filterString("a1b2c3")); */

// #7kyu Check your arguments
/* function objectType(obj) {
  return Object.prototype.toString.call(arguments.length == 0 ? null : obj);
}
console.log(objectType(false)); */

// #7kyu max diff - easy
/* function maxDiff(list) {
  return list.length ? Math.max(...list) - Math.min(...list) : 0;
}
console.log(maxDiff([])); */

// #7kyu TIY-FizzBuzz
/* function tiyFizzBuzz(sentence) {
  return sentence.split``.map((v) => {
    if (/[\W]/.test(v)) return v;
    if (/[^AEIUO \d]/.test(v) && v === v.toUpperCase()) return "Iron";
    if (/[AEIUO]/.test(v)) return "Iron Yard";
    if (/[aeiou]/.test(v)) return "Yard";
    return v;
  }).join``;
}
console.log(tiyFizzBuzz("a")); */

// #7kyu Debug Basic Calculator
/* const calculate = (a, o, b) => {
  if (o === "+") return a + b;
  if (o === "-") return a - b;
  if (o === "/") return b !== 0 ? a / b : null;
  if (o === "*") return a * b;
  return null;
};
console.log(calculate(2, "+", 4)); */

// #7kyu Easy wallpaper
/* function wallpaper(l, w, h) {
  var numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ];
  return w * h * l === 0
    ? numbers[0]
    : numbers[Math.ceil(((l * h * 2 + w * h * 2) * 1.15) / 5.2)];
}
console.log(wallpaper(6.3, 4.5, 3.29)); */

// #7kyu Where's Wally
/* function wheresWally(string) {
  return (" " + string).search(/ Wally\b/);
}
console.log(wheresWally("DWally")); */

// #7kyu Count the Digit
/* function nbDig(n, d) {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    let square = (i * i + "").split("");
    square.forEach((value) => (value == d ? res++ : null));
  }
  return res;
}
console.log(nbDig(5750, 0)); */

// #7kyu Christmas baubles on the tree
/* function baublesOnTree(baubles, branches) {
  let arr = Array(branches).fill(0);
  if (arr.length === 0)
    return "Grandma, we will have to buy a Christmas tree first!";
  for (let i = 0; ; i++) {
    if (arr.reduce((a, b) => a + b, 0) === baubles) {
      break;
    }
    arr[i % arr.length] += 1;
  }
  return arr;
}
console.log(baublesOnTree(5, 5)); */

// #7kyu Selective fear of numbers
/* var AmIAfraid = function (day, num) {
  if (day === "Monday" && num === 12) return true;
  else if (day === "Tuesday" && num > 95) return true;
  else if (day === "Wednesday" && num === 34) return true;
  else if (day === "Thursday" && num === 0) return true;
  else if (day === "Friday" && num % 2 === 0) return true;
  else if (day === "Saturday" && num === 56) return true;
  else if (day === "Sunday" && (num === 666 || num === -666)) return true;
  else return false;
};
console.log(AmIAfraid("Monday", 13)); */

// #7kyu Love vs friendship
/* function wordsToMarks(string) {
  const alphabet = "Aabcdefghijklmnopqrstuvwxyz";
  let result = 0;
  for (let i = 0; i < string.length; i++) result += alphabet.indexOf(string[i]);
  return result;
}
console.log(wordsToMarks("friends")); */

// #7kyu Send in the Clones
/* const clonewars = (n) => [
  Math.round(Math.pow(2, n - 1)),
  Array(n)
    .fill(1)
    .map((_, i, arr) => Math.pow(2, i) * (arr.length - i))
    .reduce((a, b) => a + b, 0),
];
console.log(clonewars(1)); */

// #7kyu 254 shades of grey
/* function shadesOfGrey(n) {
  const shades = [];
  for (let i = 1; i <= Math.min(n, 254); i++) {
    const grey = ("0" + i.toString(16)).slice(-2);
    shades.push("#" + grey + grey + grey);
  }
  return shades;
}
console.log(shadesOfGrey(-2)); */

// #7kyu Dropcaps
/* var dropCap = (n) => {
  const array = n.split(" ");
  return array
    .map((value) => {
      if (value.length > 2)
        return value[0].toUpperCase() + value.slice(1).toLowerCase();
      else return value;
    })
    .join(" ");
};
console.log(dropCap("  Apple banana of")); */

// #7kyu NATO Phonetic Alphabet
/* function nato(word) {
  const alphabet = {
    A: "Alpha",
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
    X: "X-ray",
    Y: "Yankee",
    Z: "Zulu",
  };
  return [...word.toUpperCase()].map((x) => alphabet[x]).join(" ");
}
console.log(nato("hi")); */

// #7kyu Cats in hats
/* function height(n) {
  return ((2000000 * (1 - Math.pow(0.4, n + 1))) / (1 - 0.4)).toFixed(3);
}
console.log(height(7)); */

// #7kyu Reversed Message
/* function reverseMessage(str) {
  const firstReverse = str
    .split(" ")
    .map((value) => [...value].reverse().join(""))
    .join(" ");
  const secondReverse = firstReverse
    .split(` `)
    .map(
      (value) => value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()
    );
  return secondReverse.reverse().join` `;
}
console.log(reverseMessage("Hello there")); */

// #7kyu A Gift Well Spent
/* var buy = function (x, arr) {
  for (var i = 0; i < arr.length - 1; ++i)
    for (var j = i + 1; j < arr.length; ++j)
      if (arr[i] + arr[j] == x) return [i, j];
  return null;
};
console.log(buy(2, [1, 1])); */

// #7kyu Bubblesort Once
/* const bubblesortOnce = function ([h, ...t]) {
  return t
    .reduce(function (acc, v) {
      if (h < v) [h, v] = [v, h];
      return [...acc, v];
    }, [])x
    .concat(h || []);
}; */

// #7kyu Count the Ones
/* function hammingWeight(x) {
  let i = 0;
  while (x > 0) {
    i += x & 1;
    x >>= 1;
  }
  return i;
}
console.log(hammingWeight(10)); */

// #7kyu Slope of a Line
/* function getSlope(p1, p2) {
  if ((p2[0] == p1[0] && p2[1] == p1[1]) || p2[0] == p1[0]) return null;
  return (p2[1] - p1[1]) / (p2[0] - p1[0]);
}
console.log(getSlope([1, 1], [2, 2])); */

// #7kyu Numbers in strings
/* function solve(s) {
  return Math.max(...s.match(/\d+/g));
}
console.log(solve("gh12cdy695m1")); */

// #7kyu Candy problem
/* function candies(kids) {
  if (kids.length <= 1) return -1;
  const maxCandies = Math.max(...kids);
  return kids.reduce((total, kid) => total + maxCandies - kid, 0);
}
console.log(candies([5, 8, 6, 4])); */

// #7kyu Dinner Plans
/* function commonGround(s1, s2) {
  let arr1 = s1.split(" ");
  let arr2 = s2.split(" ");
  let search = arr1.length > arr2.length ? arr1 : arr2;
  let temp = arr1.length > arr2.length ? arr2 : arr1;
  let res = "";
  for (let i = 0; i < temp.length; i++) {
    if (search.includes(temp[i])) res += temp[i] + " ";
  }
  res = res.trim();
  return res.length ? res : "death";
}
console.log(commonGround("eat chicken", "eat chicken and rice")); */

// #7kyu Consecutive letters
/* function solve(s) {
  const sorted = s
    .split(``)
    .sort()
    .map((v) => v.charCodeAt());
  return (
    sorted.map((v, i, arr) => v + 1 === arr[i + 1]).filter((v) => v === false)
      .length < 2
  );
}
console.log(solve("abc")); */

// #7kyu Cost of my ride
/* function insurance(age, size, numofdays) {
  let insur = 0;
  if (age < 25) insur += 10;
  if (size === "economy") insur += 0;
  else if (size === "medium") insur += 10;
  else if (size === "full-size") insur += 15;
  else insur += 15;
  insur = numofdays * (50 + insur);
  return insur >= 0 ? insur : 0;
}
console.log(insurance(18, "medium", 7)); */

// #7kyu Reverse the bits in an integer
/* function reverseBits(n) {
  const bits = Number(n).toString(2).split("").reverse().join("");
  return parseInt(bits, 2);
}
console.log(reverseBits(Number.MAX_SAFE_INTEGER)); */

// #7kyu Array2Binary addition
/* function arr2bin(arr) {
  if (arr.filter((v) => typeof v != "number").length > 0) return false;
  return arr.reduce((a, b) => a + b, 0).toString(2);
}
console.log(arr2bin([1, 2])); */

// #7kyu Batman Quotes
/* function getQuote(quotes, hero) {
  return (
    { R: "Robin", J: "Joker", B: "Batman" }[hero[0]] +
    ": " +
    quotes[hero.match(/\d+/)[0]]
  );
}
console.log(getQuote(quotes, "Rob1n")); */

// #7kyu Bumps in the Road
/* function bump(str) {
  return str.replace(/_/g, "").length > 15 ? "Car Dead" : "Woohoo!";
}
console.log(bump("__nn_nnnn__n_n___n____nn__nnn")); */

// #7kyu Permutation Average
/* const cupAndBalls = (ball, pairs) =>
  pairs.reduce((ball, [a, b]) => (a == ball ? b : b == ball ? a : ball), ball);
console.log(cupAndBalls(2, [[1, 2]])); */

// #7kyu Clean up after your dog
/* function crap(x, bags, cap) {
  let crap = 0;
  let dog = 0;
  x.map((v) =>
    v.map((v) => (v === "@" ? (crap += 1) : v === "D" ? (dog += 1) : v))
  );
  if (dog > 0) return "Dog!!";
  return crap > bags * cap ? "Cr@p" : "Clean";
}
console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "_", "@", "_"],
    ],
    1,
    1
  )
); */

// #7kyu Centroid I
/* function centroid(c) {
  let x = c.map(
    (v, i) => (c.reduce((a, b) => a + b[0], 0) / c.length).toFixed(2) * 1
  )[0];
  let y = c.map(
    (v, i) => (c.reduce((a, b) => a + b[1], 0) / c.length).toFixed(2) * 1
  )[0];
  let z = c.map(
    (v, i) => (c.reduce((a, b) => a + b[2], 0) / c.length).toFixed(2) * 1
  )[0];
  return [x, y, z];
}
console.log(
  centroid([
    [1, 0, 5],
    [0, 1, 5],
    [2, 2, 5],
  ])
); */

// #7kyu Why So Serious?
/* function whySoSerious(str) {
  let J = str.includes("Jc");
  let O = str.includes("7s");
  let K = str.includes("5s");
  let E = str.includes("As");
  let R = str.includes("9c");
  return J && O && K && E && R;
}
console.log(whySoSerious("4s8cJcJs6c6s9s7s9c4c5sAs2s")); */

// #7kyu Surf is Up!
/* function surfsUp(waves) {
  for (let i = 0; i < 3; i++) {
    let w = waves[i];
    if (w > 7 && w < 11) return [w, `Johnny ${w == 8 ? "rides" : "falls"}`];
    if (i == 2 && w < 8) return [w, "Johnny rides"];
  }
  return ["Johnny waits"];
}
console.log(surfsUp([9, 8, 10])); */

// #7kyu Even odd disparity
/* function solve(a) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) even++;
    else if (a[i] % 2 === 1) odd++;
  }
  return even - odd;
}
console.log(solve([0, 15, "z", 16, "m", 13, 14, "c", 9, 10, 13, "u", 4, 3])); */

// #7kyu SillyCASE
/* function sillycase(silly) {
  return (
    silly.slice(0, Math.ceil(silly.length / 2)).toLowerCase() +
    silly.slice(Math.ceil(silly.length / 2)).toUpperCase()
  );
}
console.log(sillycase("brian")); */

// #7kyu Simple remove duplicates
/* function solve(arr) {
  return [...new Set(arr.reverse())].reverse();
}
console.log(solve([3, 4, 4, 3, 6, 3])); */

// #7kyu Put a Letter in a Column
/* function buildRowText(index, character) {
  const arr = [];
  for (let i = 0; i <= 8; i++) {
    if (i === index) {
      arr.push(`|${character}`);
    } else {
      arr.push("|");
    }
  }
  arr.push("|");
  return arr.join(" ").replace(/\w\s/g, `${character}`);
}
console.log(buildRowText(2, "A")); */

// #7kyu Initialize my name
/* function initializeNames(name) {
  if (name.split(" ").length < 2) return name;
  else {
    let array = [];
    let first = name.split(" ")[0];
    let last = name.split(" ")[name.split(" ").length - 1];
    for (let i = 1; i < name.split(" ").length - 1; i++)
      array.push(name.split(" ")[i][0] + ".");
    array.unshift(first);
    array.push(last);
    return array.join(" ");
  }
}
console.log(initializeNames("Dimitri")); */

// #7kyu The reject() function
/* function reject(array, iterator) {
  return array.filter((el) => !iterator(el));
}
console.log(reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)); */

// #7kyu ASCII letters from Number
/* function convert(number) {
  let result = "";
  for (let i = 0; i < number.length; i += 2) {
    result += String.fromCharCode(`${number[i]}${number[i + 1]}`);
  }
  return result;
}
console.log(convert("73327673756932858080698267658369")); */

// #7kyu The old switcheroo
/* function vowel2index(str) {
  return str.replace(/[aeiou]/g, (a, b) => b + 1);
}
console.log(vowel2index("this is my string")); */

// #7kyu Decoding a message
/* function decode(code, list = "abcdefghijklmnopqrstuvwxyz") {
  return code
    .toLowerCase()
    .replace(/./gi, (a) =>
      list.indexOf(a) > -1 ? list[list.length - list.indexOf(a) - 1] : a
    );
}
console.log(decode("sr")); */

// #7kyu Sort the Vowels!
/* function sortVowels(s) {
  if (typeof s !== "string") return "";
  return s.split``.map((v) => {
    if (/[aeiou]/i.test(v)) return "|" + v + "\n";
    else return v + "|" + "\n";
  }).join``.slice(0, -1);
}
console.log(sortVowels("Codewars")); */

// #7kyu Colored Hexes!
/* function hexColor(colors) {
  let b = colors.split(" ")[2] * 1;
  let g = colors.split(" ")[1] * 1;
  let r = colors.split(" ")[0] * 1;
  if (b > g && b > r) return "blue";
  if (r > g && r > b) return "red";
  if (g > r && g > b) return "green";
  if (b === g && g === b && b === r && r > 0) return "white";
  if (b === 0 && g === 0 && r === 0) return "black";
  if (r === b) return "magenta";
  if (g === r) return "yellow";
  if (g === b) return "cyan";
  return "black";
}
console.log(hexColor(hexColor("000 000 000"))); */

// #7kyu Uglify Word
/* function uglifyWord(s) {
  s = s.toLowerCase().split("");
  let flag = 1;
  for (let i = 0; i < s.length; i++) {
    if (/[a-z]/.test(s[i])) {
      if (flag === 1) {
        let str = s[i].toUpperCase();
        s[i] = str;
        flag = 0;
      } else {
        let str = s[i].toLowerCase();
        s[i] = str;
        flag = 1;
      }
    } else {
      flag = 1;
    }
  }
  return s.join(``);
}
console.log(uglifyWord("Eqwe123asdf456zxc")); */

// #7kyu Asterisk it
/* function asteriscIt(n) {
  if (Array.isArray(n))
    return n
      .join("")
      .split("")
      .map((v, i, arr) => (v % 2 === 0 && arr[i + 1] % 2 === 0 ? v + "*" : v))
      .join(``);
  return ("" + n)
    .split("")
    .map((v, i, arr) => (v % 2 === 0 && arr[i + 1] % 2 === 0 ? v + "*" : v))
    .join(``);
}
console.log(asteriscIt(5312708)); */

// #7kyu Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language
/* function sortByLanguage(list) {
  return list
    .sort((a, b) => a.firstName.localeCompare(b.firstName))
    .sort((a, b) => a.language.localeCompare(b.language));
}
console.log(
  sortByLanguage([
    {
      firstName: "Nikau",
      lastName: "R.",
      country: "New Zealand",
      continent: "Oceania",
      age: 39,
      language: "Ruby",
    },
    {
      firstName: "Precious",
      lastName: "G.",
      country: "South Africa",
      continent: "Africa",
      age: 22,
      language: "JavaScript",
    },
    {
      firstName: "Maria",
      lastName: "S.",
      country: "Peru",
      continent: "Americas",
      age: 30,
      language: "C",
    },
    {
      firstName: "Agustin",
      lastName: "V.",
      country: "Uruguay",
      continent: "Americas",
      age: 19,
      language: "JavaScript",
    },
  ])
); */

// #7kyu Driving School Series #1
/* function passed(list) {
  let count = 0;
  const result =
    list.reduce((sum, curr) => {
      if (curr <= 18) {
        count++;
        return sum + curr;
      } else return sum + 0;
    }, 0) / count;
  return Math.round(result) || "No pass scores registered.";
}
console.log(passed([21, 22, 24])); */

// #7kyu ReOrdering
/* function reOrdering(text) {
  const array = text.split(" ");
  const firstWord = array.filter((value) => value[0] === value[0].toUpperCase());
  const othersWord = array.filter((value) => value[0] === value[0].toLowerCase()).join(" ");
  return `${firstWord} ${othersWord}`.trim();
}
console.log(reOrdering("wario LoBan hello")); */

// #7kyu All Inclusive?
/* function containAllRots(str, arr) {
  for (var i = 0; i < str.length; i++)
    if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) return false;
  return true;
}
console.log(containAllRots("", ["bsjq", "qbsj"])); */

// #7kyu Sectional Array Sort
/* function sectSort(arr, start, length) {
  length === 0 ? (length = undefined) : length;
  const before = arr.slice(0, start);
  const center = arr
    .slice(start, start + length || arr.length)
    .sort((a, b) => a - b);
  let end;
  length === undefined
    ? (end = arr.slice(start, start))
    : (end = arr.slice(start + length));
  return [...before, ...center, ...end];
}
console.log(sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2)); */

// #7kyu Max-min arrays
/* function solve(arr) {
  arr = arr.sort((a, b) => b - a);
  const length = arr.slice().length;
  const arr1 = [];
  for (let i = 0; i < length; i++) {
    arr1.push(arr.shift());
    arr1.push(arr.pop());
  }
  return arr1.filter((v) => v != undefined);
}
console.log(solve([15, 11, 10, 7, 12])); */

// #7kyu reverseIt
/* function reverseIt(data){
  if (typeof data === "string") return `${data}`.split("").reverse().join("")
  else if (typeof data === "number") return +`${data}`.split("").reverse().join("")
  else return data
}
console.log(reverseIt('314159')); */

// #7kyu Find the missing element between two arrays
/* function findMissing(arr1, arr2) {
  const array = [...arr1, ...arr2]
  let obj = {}
  for (const i of array) i in obj ? obj[i]++ : obj[i] = 0;
  for (const key in obj) if (obj[key] % 2 === 0) return +key;
}
console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4])); */

// #7kyu Array Mash
/* function arrayMash (array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) result.push(array1[i], array2[i]);
  return result;
}
console.log(arrayMash([1, 1, 1, 1], [2, 2, 2, 2])); */

// #7kyu Fruit string calculator
/* function calculate(string) {
  let result = [];
  const array = string.split(" ");
  for (let i = 0; i < array.length; i++) if (!isNaN(array[i])) result.push(array[i]);
  return string.includes("gains") ? eval(result.join("+")) : eval(result.join("-"));
}
console.log(calculate("Panda has 48 apples and gains 4")); */

// #7kyu Sort by Example
/* function exampleSort(arr,exampleArr){
    let result = [];
    for (let i = 0; i < exampleArr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (exampleArr[i] === arr[j]) result.push(arr[j]);
      }
    }
  return result;
}
console.log(exampleSort([1,2,3,4,5],[2,3,4,1,5])); */

// #7kyu Return a sorted list of objects
/* function sortList (sortBy, list) {
  return [...list].sort((a,b)=>b[sortBy]-a[sortBy]);
} */

// #7kyu filterEvenLengthWords
/* function filterEvenLengthWords(words) {
  return words.filter((value) => value.length % 2 === 0)
}
console.log(filterEvenLengthWords(['word', 'words', 'word', 'words'])); */

// #7kyu Arithmetic List!
/* var seqlist = function(first,c,l){
  return  Array.from({ length: l }, (value, index) => first + c * index)
}
console.log(seqlist(0,1,20)); */

// #7kyu Failed Sort - Bug Fixing #4
/* var sortArray = function(value) {
  return value.split('').sort((c, p) => c - p ).join('');
}
console.log(sortArray('12345')); */

// #7kyu String reverse slicing 101
/* function reverseSlice(str) {
  let result = [];
  const reverse = str.split("").reverse().join("");
  for (let i = 0; i < reverse.length; i++)
    result.push(reverse.slice(i, reverse.length));
  return result;
}
console.log(reverseSlice("abcdef")); */

// #7kyu Small enough? - Beginner
/* function smallEnough(a, limit) {
  return a.every((value) => value <= limit);
}
console.log(smallEnough([110, 45, 75, 105, 99, 107], 107)); */

// #7kyu 8 towers
/* function towerCombination(n) {
  return n === 1 ? 1 : n * towerCombination(n - 1);
}
console.log(towerCombination(2)); */

// #7kyu Failed Filter - Bug Fixing #3
/* var FilterNumbers = function (str) {
  return str
    .split("")
    .filter((c) => !c.match(/[1-9]/))
    .join("");
};
console.log(FilterNumbers("test1203")); */

// #7kyu Ordering the words!
/* function orderWord(s) {
  if (s === null || s.length) return "Invalid String!";
  else return s.split("").sort().join("");
}
console.log(orderWord(null)); */

// #7kyu Simple Fun #20: First Reverse Try
/* function firstReverseTry(arr) {
  if (arr.length === 0 || arr.length === 1) return arr;
  const array = [arr[arr.length - 1]];
  for (let i = 1; i < arr.length - 1; i++) array.push(arr[i]);
  array.push(arr[0]);
  return array;
}
console.log(firstReverseTry([])); */

// #7kyu Hello World - Without Strings
/* const helloWorld = () => {
  return String.fromCharCode(
    72,
    101,
    108,
    108,
    111,
    44,
    32,
    87,
    111,
    114,
    108,
    100,
    33
  );
};
console.log(helloWorld()); */

// #7kyu Nickname Generator
/* function nicknameGenerator(name) {
  if (name.length < 4) return "Error: Name too short";
  const sliceString = name.slice(0, 3);
  return /[aeiou]$/g.test(sliceString) ? name.slice(0, 4) : sliceString;
}
console.log(nicknameGenerator("Kaeyne")); */

// #7kyu Building Strings From a Hash
/* function solution(pairs) {
  let string = "";
  for (let key in pairs) {
    string += `${key} = ${pairs[key]},`;
  }
  return string.slice(0, -1);
}
console.log(solution({ a: 1, b: "2" })); */

// #7kyu Average Scores
/* function average(scores) {
  return Math.round(scores.reduce((sum, curr) => sum + curr, 0) / scores.length)
}
console.log(average([90, 98, 89, 100, 100, 86, 94])); */

// #7kyu Sum of a nested list
/* const sumNested = (arr) => {
  return eval(arr.flat(Infinity).join("+")) || 0;
};
console.log(
  sumNested([[[[], [], [[[[[[[[[[]]]]]]]]]]], [], [], [[[], [[]]]]], []])
); */

// #7kyu Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
/* function countDevelopers(list) {
  let count = 0;
  list.forEach((element) => {
    if (element.continent === "Europe" && element.language === "JavaScript")
      count++;
  });
  return count;
}
console.log(
  countDevelopers([
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "JavaScript",
    },
    {
      firstName: "Maia",
      lastName: "S.",
      country: "Tahiti",
      continent: "Oceania",
      age: 28,
      language: "JavaScript",
    },
    {
      firstName: "Shufen",
      lastName: "L.",
      country: "Taiwan",
      continent: "Asia",
      age: 35,
      language: "HTML",
    },
    {
      firstName: "Sumayah",
      lastName: "M.",
      country: "Tajikistan",
      continent: "Asia",
      age: 30,
      language: "CSS",
    },
  ])
); */

// #7kyu Coding Meetup #2 - Higher-Order Functions Series - Greet developers
/* function greetDevelopers(list) {
  return list.map((value) => {
    return {
      ...value,
      greeting: `Hi ${value.firstName}, what do you like the most about ${value.language}?`,
    };
  });
}
console.log(
  greetDevelopers([
    {
      firstName: "Sofia",
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java",
    },
    {
      firstName: "Lukas",
      lastName: "X.",
      country: "Croatia",
      continent: "Europe",
      age: 35,
      language: "Python",
    },
    {
      firstName: "Madison",
      lastName: "U.",
      country: "United States",
      continent: "Americas",
      age: 32,
      language: "Ruby",
    },
  ])
);
 */

// #7kyu Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
/* function countLanguages(list) {
  let result = {};
  list.forEach((value) => {
    if (value.language in result) result[value.language]++;
    else result[value.language] = 1;
  });
  return result;
}
console.log(
  countLanguages([
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "C",
    },
    {
      firstName: "Anna",
      lastName: "R.",
      country: "Liechtenstein",
      continent: "Europe",
      age: 52,
      language: "JavaScript",
    },
    {
      firstName: "Ramon",
      lastName: "R.",
      country: "Paraguay",
      continent: "Americas",
      age: 29,
      language: "Ruby",
    },
    {
      firstName: "George",
      lastName: "B.",
      country: "England",
      continent: "Europe",
      age: 81,
      language: "C",
    },
  ])
); */

// #7kyu Coding Meetup #11 - Higher-Order Functions Series - Find the average age
/* function getAverageAge(list) {
  return Math.round(
    list.reduce((sum, curr) => sum + curr.age, 0) / list.length
  );
}
console.log(
  getAverageAge([
    {
      firstName: "Noa",
      lastName: "A.",
      country: "Israel",
      continent: "Asia",
      age: 20,
      language: "Ruby",
    },
    {
      firstName: "Andrei",
      lastName: "E.",
      country: "Romania",
      continent: "Europe",
      age: 21,
      language: "C",
    },
  ])
); */

// #7kyu Easy mathematical callback
/* function processArray(arr, callback) {
  return arr.map((value) => callback(value));
}
console.log(processArray([4, 8, 2, 7, 5], (n) => n * 2)); */

// #7kyu Simple Fun #37: House Numbers Sum
/* function houseNumbersSum(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) return count;
    else count += inputArray[i];
  }
}
console.log(houseNumbersSum([4, 1, 2, 3, 0, 10, 2])); */

// #7kyu Smallest value of an array
/* function min(arr, toReturn) {
  return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}
console.log(min([10, 2, 3, 1, 5], "value")); */

// #7kyu Reduce My Fraction
/* function reduce(fraction) {
  let x = fraction[0];
  let y = fraction[1];
  for (let i = 2; i <= Math.min(...fraction); ) {
    if (x % i === 0 && y % i === 0) {
      x = x / i;
      y = y / i;
      i = 2;
    } else i++;
  }
  return [x, y];
}
console.log(reduce([4, 2])); */

// #7kyu Return the Missing Element
/* function getMissingElement(superImportantArray) {
  for (let i = 0; i < 10; i++) {
    if (superImportantArray.sort()[i] !== i) return i;
  }
}
console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])); */

// #7kyu Find the vowels
/* function vowelIndices(word) {
  let result = [];
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (["a", "o", "e", "i", "u", "y"].includes(word[i])) result.push(i + 1);
  }
  return result;
}
console.log(vowelIndices("rsaSVwsCXtwYVCxxZf")); */

// #7kyu Reverse a Number
/* function reverseNumber(n) {
  let reversed = 0;
  let number = Math.abs(n);
  while (number != 0) {
    reversed = reversed * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return n < 0 ? -reversed : reversed;
}
console.log(reverseNumber(-123)); */

// #7kyu Halving Sum
/* function halvingSum(n) {
  let count = n;
  while (n) {
    count += Math.floor(n / 2);
    n = n / 2;
  }
  return count;
}
console.log(halvingSum(25)); */

// #7kyu Frank's Sticky Calculator
/* function stickyCalc(operation, val1, val2) {
  val1 = Math.round(val1);
  val2 = Math.round(val2);
  let result;
  switch (operation) {
    case "+":
      result = +`${val1}${val2}` + val2;
      break;
    case "-":
      result = `${val1}${val2}` - val2;
      break;
    case "*":
      result = `${val1}${val2}` * val2;
      break;
    default:
      result = `${val1}${val2}` / val2;
      break;
  }
  return Math.round(result);
}
console.log(stickyCalc("+", 4.2, 7)); */

// #7kyu Fix My Phone Numbers!
/* function isItANum(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += parseInt(str[i]) || str[i] == "0" ? str[i] : "";
  }
  return result[0] == "0" && result.length >= 11
    ? result.slice(0, 11)
    : "Not a phone number";
}
console.log(isItANum("S:)0207ERGQREG88349F82!efRF)")); */

// #7kyu Substring fun
/* function nthChar(words) {
  return words.map((value, index) => value[index]).join("");
}
console.log(nthChar([])); */

// #7kyu Even or Odd - Which is Greater?
/* function evenOrOdd(str) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] % 2 === 0 ? (even += +str[i]) : (odd += +str[i]);
  }
  if (even > odd) return "Even is greater than Odd";
  else if (even < odd) return "Odd is greater than Even";
  else return "Even and Odd are the same";
}
console.log(evenOrOdd("12")); */

// #7kyu Reverse Factorials
/* function reverseFactorial(num) {
  let factorial = 1;
  let i = 1;
  while (factorial < num) {
    i++;
    factorial *= i;
  }
  if (factorial === num) {
    return i + "!";
  } else {
    return "None";
  }
}
console.log(reverseFactorial(150)); */

// #7kyu Ones' Complement
/* function onesComplement(n) {
  let reverse = "";
  for (let i = 0; i < n.length; i++) {
    reverse += n[i] === "1" ? "0" : "1";
  }
  return reverse;
}
console.log(onesComplement("1101")); */

// #7kyu Name That Number!
/* function nameThatNumber(num) {
  num = num.toString();
  let ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let numbersTenToTwenty = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  let tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  if (num === "" || num === "0") return "zero";
  else if (num < 10) return ones[num];
  else if (num > 9 && num < 20) return numbersTenToTwenty[num[1]];
  else return (tens[num[0]] + " " + ones[num[1]]).trim();
}
console.log(nameThatNumber(9)); */

// #7kyu Find the middle element
/* function gimme(triplet) {
  let temp = [...triplet];
  let index = Math.floor(triplet.length / 2);
  let sortArray = triplet.sort((a, b) => a - b)[index];
  for (let i = 0; i < triplet.length; i++) {
    if (temp[i] === sortArray) return i;
  }
}
console.log(gimme([2.1, 3.2, 1.4])); */

// #7kyu Factorial
/* function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError("Range must be between 0 and 12");
  return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(15)); */

// #7kyu Nth power rules them all!
/* function modifiedSum(a, n) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] ** n;
  }
  return sum - eval(a.join("+"));
}
console.log(modifiedSum([1, 2, 3], 3)); */

// #7kyu letters only, please!
/* function removeChars(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() !== s[i].toUpperCase() || s[i] === " ")
      result += s[i];
  }
  return result;
}
console.log(removeChars("that's a pie&ce o_f p#ie!")); */

// #7kyu Remove HTML tags using regexp
/* const reg = /<[^>]*>/g; */

// #7kyu Help Bob count letters and digits.
/* function countLettersAndDigits(input) {
  return (input.match(/[A-Za-z0-9]/g) || []).length;
}
console.log(countLettersAndDigits("..."));
 */

// #7kyu Recursive Replication
/* function replicate(times, number) {
  if (times < 0) {
    return [];
  } else if (times === 0) {
    return [];
  } else {
    return [number].concat(replicate(times - 1, number));
  }
}
console.log(replicate(3, 5)); */

// #7kyu Describe a list
/* function describeList(x) {
  return x.length === 0 ? "empty" : x.length === 1 ? "singleton" : "longer";
}
console.log(describeList([1.5])); */

// #7kyu Count number of zeros from 1 to N
/* function countZeros(n) {
  for (let i = 1; i <= n; i += 10) {
    let str = n.toString();
    let count = 0;
    for (let i = 0; i < n; i++) {
      str = str.toString();
      if (str.includes("0")) {
        count += str.replace(/[^0]/g, "").length;
      }
      str = str * 1 - 1;
    }
    return count;
  }
}
console.log(countZeros(10)); */

// #7kyu Interview Question (easy)
/* function getStrings(city) {
  city = city.toLowerCase().split(" ").join("");
  let string = "";
  const double = {};
  for (const i of city) {
    i in double ? double[i]++ : (double[i] = 1);
  }
  for (const key in double) {
    string += `${key}:${"*".repeat(double[key])},`;
  }
  return string.slice(0, -1);
}
console.log(getStrings("Las Vegas")); */

// #7kyu Bob's Short Forms
/* function shortForm(str) {
  let output = ''
  for (let i = 1; i < str.length - 1; i++) { if (str[i].match(/[^aeuio]/i)) { output += str[i] } }
  return str[0] + output + str[str.length - 1]
};
console.log(shortForm("asault")); */

// #7kyu Reversing Fun
/* function flipNumber(n) {
  let reverse = "";
  n = n.split("");
  while (n.length) {
    n = n.reverse();
    reverse += n[0];
    n = n.slice(1);
  }
  return reverse;
}
console.log(flipNumber("012345")); */

// #7kyu Chinese Zodiac
/* function chineseZodiac(year) {
  const animals = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];
  const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];
  const baseYear = 1924;
  const givenYear = year - baseYear;
  const element = elements[Math.floor(givenYear / 2) % 5];
  const animal = animals[givenYear % 12];
  return element + " " + animal;
}
console.log(chineseZodiac(1965)); */

// #7kyu Visible Dots On a Die
/* function totalAmountVisible(topNum, numOfSides) {
  return (numOfSides * (numOfSides + 1)) / 2 + (topNum - numOfSides - 1);
}
console.log(totalAmountVisible(3, 6)); */

// #7kyu Guess the Word: Count Matching Letters
/* function countCorrectCharacters(correctWord, guess) {
  let sum = 0;
  if (correctWord.length !== guess.length) {
    throw new Error("Error");
  }
  for (let i = 0; i < correctWord.length; i++) {
    if (correctWord[i] === guess[i]) sum++;
  }
  return sum;
}
console.log(countCorrectCharacters("dog", "bog")); */

// #7kyu Radio DJ helper function
/* function longestPossible(playback) {
  for (let song of songs) {
    song[`time`] =
      song[`playback`].split(":")[0] * 60 + song[`playback`].split(":")[1] * 1;
  }
  songs = songs.sort((a, b) => b.time - a.time);
  return songs.find((v) => v.time < playback) === undefined
    ? false
    : songs.find((v) => v.time < playback).title;
}
console.log(longestPossible(215)); */

// #7kyu Filter Long Words
/* function filterLongWords(sentence, n) {
  return sentence.split(" ").filter((value) => value.length > n);
}
console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4)); */

// #7kyu Basic JS - Calculating averages
/* var Calculator = {
  average: function (...args) {
    return eval(args.join("+")) / args.length || 0;
  },
};
console.log(Calculator.average()); */

// #7kyu Sum of array singles
/* function repeats(arr) {
  const dublicate = arr.filter((value, index) => arr.indexOf(value) !== index);
  const single = arr.filter((value) => !dublicate.includes(value));
  return eval(single.join("+"));
}
console.log(repeats([4, 5, 7, 5, 4, 8])); */

// #7kyu esrever esreveR!
/* function esrever(str) {
  return (
    str
      .slice(0, -1)
      .split(" ")
      .map((value) => [...value].reverse().join(""))
      .reverse()
      .join(" ") + str.slice(str.length - 1)
  );
}
console.log(esrever("b3tTer p4ss thIS 0ne.")); */

// #7kyu esreveR gnirtS
/* String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};
console.log("Hello World".reverse()); */

// #7kyu Reducing Problems - Bug Fixing #8
/* function calculateTotal(team1, team2) {
  var t1s = team1.reduce((t, c) => t + c, 0);
  var t2s = team2.reduce((t, c) => t + c, 0);
  return t1s > t2s;
}
console.log(calculateTotal([1, 2, 2], [1, 0, 0])); */

// #7kyu SevenAte9
/* function sevenAte9(str) {
  let string = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "7" && str[i + 1] === "9" && str[i + 2] === "7") {
      string += "7";
      i++;
    } else string += str[i];
  }
  return string;
}
console.log(sevenAte9("7927")); */

// #7kyu No Loops 1 - Small enough?
/* function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); */

// #7kyu Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
/* function getFirstPython(list) {
  const firstDev = list.find((value) => {
    return value.language === "Python";
  });
  return firstDev
    ? `${firstDev.firstName}, ${firstDev.country}`
    : "There will be no Python developers";
}
console.log(
  getFirstPython([
    {
      firstName: "Mark",
      lastName: "G.",
      country: "Scotland",
      continent: "Europe",
      age: 22,
      language: "JavaScript",
    },
    {
      firstName: "Victoria",
      lastName: "T.",
      country: "Puerto Rico",
      continent: "Americas",
      age: 30,
      language: "Python",
    },
    {
      firstName: "Anna",
      lastName: "Doe",
      country: "New York",
      continent: "Americas",
      age: 44,
      language: "Python",
    },
    {
      firstName: "Emma",
      lastName: "B.",
      country: "Norway",
      continent: "Europe",
      age: 19,
      language: "Clojure",
    },
  ])
); */

// #7kyu Ce*s*r*d Strings
/* function uncensor(infected, discovered) {
  let k = 0;
  let string = "";
  for (let i = 0; i < infected.length; i++) {
    if (infected[i] === "*") {
      string += discovered[k];
      k++;
    } else {
      string += infected[i];
    }
  }
  return string;
}
console.log(uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae")); */

// #7kyu Alan Partridge III - London
/* function alan(x) {
  const dict = [
    "Rejection",
    "Disappointment",
    "Backstabbing Central",
    "Shattered Dreams Parkway",
  ];
  return dict.every((v) => x.includes(v))
    ? "Smell my cheese you mother!"
    : "No, seriously, run. You will miss it.";
}
console.log(
  alan([
    "Norwich",
    "Rejection",
    "Disappointment",
    "Backstabbing Central",
    "Shattered Dreams Parkway",
    "London",
  ])
); */

// #7kyu Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
/* function isRubyComing(list) {
  return list.some((value) => value.language === "Ruby");
}
console.log(
  isRubyComing([
    {
      firstName: "Sofia",
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java",
    },
    {
      firstName: "Lukas",
      lastName: "X.",
      country: "Croatia",
      continent: "Europe",
      age: 35,
      language: "Python",
    },
    {
      firstName: "Madison",
      lastName: "U.",
      country: "United States",
      continent: "Americas",
      age: 32,
      language: "Ruby",
    },
  ])
); */

// #7kyu Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
/* function isSameLanguage(list) {
  return list.every((value) => value.language === list[0].language);
}
console.log(
  isSameLanguage([
    {
      firstName: "Daniel",
      lastName: "J.",
      country: "Aruba",
      continent: "Americas",
      age: 42,
      language: "JavaScript",
    },
    {
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 22,
      language: "JavaScript",
    },
    {
      firstName: "Hanna",
      lastName: "L.",
      country: "Hungary",
      continent: "Europe",
      age: 65,
      language: "JavaScript",
    },
  ])
); */

// #7kyu Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
/* function findAdmin(list, lang) {
  return list.filter(
    (value) => value.language === lang && value.githubAdmin === "yes"
  );
}
console.log(
  findAdmin(
    [
      {
        firstName: "Harry",
        lastName: "K.",
        country: "Brazil",
        continent: "Americas",
        age: 22,
        language: "JavaScript",
        githubAdmin: "yes",
      },
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 49,
        language: "Ruby",
        githubAdmin: "no",
      },
      {
        firstName: "Jing",
        lastName: "X.",
        country: "China",
        continent: "Asia",
        age: 34,
        language: "JavaScript",
        githubAdmin: "yes",
      },
      {
        firstName: "Piotr",
        lastName: "B.",
        country: "Poland",
        continent: "Europe",
        age: 128,
        language: "JavaScript",
        githubAdmin: "no",
      },
    ],
    "JavaScript"
  )
); */

// #7kyu CompoundArray
/* function compoundArray(a, b) {
  let arr = [];
  for (let i = 0; i < (a.length > b.length ? a.length : b.length); i++) {
    arr.push(a[i]);
    arr.push(b[i]);
  }
  return arr.filter((v) => v != undefined);
}
console.log(compoundArray([11, 12], [21, 22, 23, 24])); */

// #7kyu Fix my method
/* function myFunction() {
  return {
    objProperty: "string",
    objMethod: function () {
      return this.objProperty;
    },
  };
}
console.log(myFunction().objMethod()); */

// #7kyu From A to Z
/* function gimmeTheLetters(sp) {
  let upperLetter = sp[0] === sp[0].toUpperCase();
  sp = sp.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = alphabet.slice(
    alphabet.indexOf(sp[0]),
    alphabet.indexOf(sp[2]) + 1
  );
  return upperLetter ? result.toUpperCase() : result;
}
console.log(gimmeTheLetters("J-J")); */

// #7kyu Digitize
/* function digitize(n) {
  return n
    .toString()
    .split("")
    .map((value) => Number(value));
}
console.log(digitize(8675309)); */

// #7kyu Substituting Variables Into Strings: Padded Numbers
/* function solution(value) {
  return "Value is " + "0".repeat(5 - `${value}`.length) + `${value}`;
}
console.log(solution(109)); */

// #7kyu Remove anchor from URL
/* function removeUrlAnchor(url) {
  return url.slice(0, url.indexOf("#") > 0 ? url.indexOf("#") : url.length);
}
console.log(removeUrlAnchor("www.codewars.com/katas/")); */

// #7kyu Simple Fun #63: Shape Area
/* function shapeArea(n) {
  let count = n + n - 1;
  for (let i = 1; i < n + n - 1; i += 2) {
    count += i * 2;
  }
  return count;
}
console.log(shapeArea(5)); */

// #7kyu Split In Parts
/* var splitInParts = function (s, partLength) {
  let string = "";
  while (s) {
    string += s.slice(0, partLength);
    s = s.slice(partLength);
    string += " ";
  }
  return string.slice(0, -1);
};
console.log(splitInParts("supercalifragilisticexpialidocious", 3)); */

// #7kyu Nothing special
/* function nothingSpecial(str) {
  if (typeof str !== "string") {
    return "Not a string!";
  }
  return str.replace(/[^A-Za-z0-9\s]/g, "");
}
console.log(nothingSpecial("M$$$$$$$y al ly!!!!!")); */

// #7kyu The Office II - Boredom Score
/* function boredom(staff) {
  let sum = 0;
  const object = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };
  for (const key in staff) {
    sum += object[staff[key]];
  }
  if (sum <= 80) return "kill me now";
  else if (sum < 100 && sum > 80) return "i can handle this";
  else return "party time!!";
}
console.log(
  boredom({
    tim: "IS",
    jim: "finance",
    randy: "pissing about",
    sandy: "cleaning",
    andy: "cleaning",
    katie: "cleaning",
    laura: "pissing about",
    saajid: "regulation",
    alex: "regulation",
    john: "accounts",
    mr: "canteen",
  })
); */

// #7kyu Find the nth Digit of a Number
/* var findDigit = function (num, nth) {
  num = Math.abs(num);
  num = num.toString();
  if (nth <= 0) return -1;
  else if (num.length < nth) return 0;
  num = num
    .split("")
    .reverse()
    .slice(nth - 1, nth)
    .join("");
  return +num;
};
console.log(findDigit(-2825, 5)); */

// #7kyu Acrostic reader
/* function readOut(acrostic) {
  let string = "";
  for (let i = 0; i < acrostic.length; i++) {
    string += acrostic[i][0];
  }
  return string;
}
console.log(readOut(["Jolly", "Amazing", "Courteous", "Keen"])); */

// #7kyu Char Code Calculation
/* function calc(x) {
  let charToString = "";
  let firstCount = 0;
  let secondCount = 0;
  for (let i = 0; i < x.length; i++) {
    charToString += x[i].charCodeAt();
  }
  let replace = charToString.replace(/[7]/g, 1);
  for (let i = 0; i < charToString.length; i++) {
    firstCount += Number(charToString[i]);
    secondCount += Number(replace[i]);
  }
  return firstCount - secondCount;
}
console.log(calc("ABC")); */

// #7kyu Holiday II - Plane Seating
/* function planeSeat(a) {
  let string = "";
  if (parseInt(a) > 0 && parseInt(a) < 21) {
    string += "Front-";
  } else if (parseInt(a) > 20 && parseInt(a) < 41) {
    string += "Middle-";
  } else if (parseInt(a) > 39 && parseInt(a) < 61) {
    string += "Back-";
  } else {
    return "No Seat!!";
  }
  if (["A", "B", "C"].includes(a.slice(-1))) string += "Left";
  else if (["D", "E", "F"].includes(a.slice(-1))) string += "Middle";
  else if (["G", "H", "K"].includes(a.slice(-1))) string += "Right";
  else return "No Seat!!";
  return string;
}
console.log(planeSeat("35B")); */

// #7kyu Check if a triangle is an equable triangle!
/* function equableTriangle(a, b, c) {
  const p = (a + b + c) / 2;
  return 4 * p == (p - a) * (p - b) * (p - c);
}
console.log(equableTriangle(5, 12, 13)); */

// #7kyu Is it a letter?
/* function isItLetter(character) {
  return character.toLowerCase() !== character.toUpperCase();
}
console.log(isItLetter("1")); */

// #7kyu Working with arrays I (and why your code fails in some katas)
/* function withoutLast(arr) {
  return arr.slice(0, -1);
}
console.log(withoutLast([1, 2, 3, 4, 5])); */

// #7kyu Find the next perfect square!
/* function findNextSquare(sq) {
  let square = Math.sqrt(sq);
  if (parseInt(square) === square) return (square + 1) ** 2;
  else return -1;
}
console.log(findNextSquare(121)); */

// #7kyu Mobile operator detector
/* function detectOperator(a) {
  let operators = {
    "039": "Golden Telecom",
    "050": "MTS",
    "063": "Life:)",
    "066": "MTS",
    "067": "Kyivstar",
    "068": "Beeline",
    "093": "Life:)",
    "095": "MTS",
    "096": "Kyivstar",
    "097": "Kyivstar",
    "098": "Kyivstar",
    "099": "MTS",
  };
  var op = a.toString().slice(1, 4);
  return operators[op] || "no info";
}
console.log(detectOperator(80931551119)); */

// #7kyu Sum of the first nth term of Series
/* function SeriesSum(n) {
  let sum = 0;
  for (let i = 1; i <= n * 3; i += 3) {
    sum += 1 / i;
  }
  return sum.toFixed(2).toString();
}
console.log(SeriesSum(5)); */

// #7kyu Concatenated Sum
/* function checkConcatenatedSum(num, repeat) {
  let sum = 0;
  let originNumber = num;
  let minus = num > 0 ? false : true;
  num = Math.abs(num);
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    if (minus) {
      sum += Number(-num[i].repeat(repeat));
    } else {
      sum += Number(num[i].repeat(repeat));
    }
  }
  return originNumber === sum;
}
console.log(checkConcatenatedSum(-2997, 3)); */

// #7kyu Frog's Dinner
/* function frogContest(n) {
  const chris = (n * (n + 1)) / 2;
  const tom = (Math.floor(chris / 2) * (Math.floor(chris / 2) + 1)) / 2;
  const cat = ((chris + tom) * (chris + tom + 1)) / 2;
  return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${cat} flies`;
}
console.log(frogContest(5)); */

// #7kyu Divisible by previous digit?
/* function divisibleByLast(n) {
  n = n.toString();
  let array = [];
  for (let i = 0; i < n.length; i++) {
    array.push(n[i] % n[i - 1] === 0);
  }
  return array;
}
console.log(divisibleByLast(73312)); */

// #7kyu ToLeetSpeak
/* function toLeetSpeak(str) {
  let string = "";
  const alphabet = {
    A: "@",
    B: "8",
    C: "(",
    D: "D",
    E: "3",
    F: "F",
    G: "6",
    H: "#",
    I: "!",
    J: "J",
    K: "K",
    L: "1",
    M: "M",
    N: "N",
    O: "0",
    P: "P",
    Q: "Q",
    R: "R",
    S: "$",
    T: "7",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "2",
    " ": " ",
  };
  for (let i = 0; i < str.length; i++) {
    string += alphabet[str[i]];
  }
  return string;
}
console.log(toLeetSpeak("CODEWARS"));
 */

// #7kyu Simple Fun #137: S2N
/* function S2N(m, n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    for (let k = 0; k <= m; k++) {
      sum += k ** i;
    }
  }
  return sum;
}
console.log(S2N(10, 9)); */

// #7kyu String Reordering
/* function sentence(List) {
  return List.sort((a, b) => Number(Object.keys(a)) - Number(Object.keys(b)))
    .map((value) => Object.values(value))
    .join(" ");
}
console.log(
  sentence([
    { 4: "dog" },
    { 2: "took" },
    { 3: "his" },
    { "-2": "Vatsan" },
    { 5: "for" },
    { 6: "a" },
    { 12: "spin" },
  ])
); */

// #7kyu Even numbers in an array
/* function evenNumbers(array, number) {
  return array
    .filter((value) => value % 2 === 0)
    .reverse()
    .slice(0, number)
    .reverse();
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); */

// #7kyu Is every value in the array an array?
/* const arrCheck = (value) => {
  return value.every((array) => Array.isArray(array));
};
console.log(arrCheck([[1], [2], 3])); */

// #7kyu How many e-mails we sent today?
/* function getPercentage(sent, limit = 1000) {
  if (sent >= limit) return "Daily limit is reached";
  else if (sent === 0) return "No e-mails sent";
  else return Math.floor((sent / limit) * 100) + "%";
}
console.log(getPercentage(101)); */

// #7kyu Find twins
/* function elimination(arr) {
  return +arr.filter((value, index) => arr.indexOf(value) !== index).join("") || null;
}
console.log(elimination([2, 5, 34, 1, 22, 1])); */

// #7kyu makeBackronym
/* var makeBackronym = function (string) {
  string = string.toUpperCase();
  let result = "";
  for (let i = 0; i < string.length; i++) {
    result += dict[string[i]] + (i + 1 < string.length ? " " : "");
  }
  return result;
};
console.log(makeBackronym("dgm")); */

// #7kyu Two to One
/* function longest(s1, s2) {
  s1 = s1 + s2;
  let text = "";
  const letters = new Set(s1.split("").sort());
  letters.forEach(function (value) {
    text += value;
  });
  return text;
}
console.log(longest("aretheyhere", "yestheyarehere")); */

// #7kyu Sum it continuously
/* function add(arr) {
  let newArray = [];
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (array.length <= i) {
      array.push(arr[i]);
      newArray.push(eval(array.join("+")));
    }
  }
  return newArray;
}
console.log(add([1, 2, 3, 4, 5])); */

// #7kyu Currying functions: multiply all elements in an array
/* function multiplyAll(arr) {
  return function (num) {
    return arr.map((value) => value * num);
  };
}
console.log(multiplyAll([1, 2, 3])(2)); */

// #7kyu Digital cypher
/* function encode(str, n) {
  const alphabet = "0abcdefghijklmnopqrstuvwxyz";
  n = n.toString().repeat(str.length);
  let array = [];
  for (let i = 0; i < str.length; i++) {
    array.push(alphabet.indexOf(str[i]) + +n[i]);
  }
  return array;
}
console.log(encode("scout", 1939)); */

// #7kyu Milk and Cookies for Santa
/* function timeForMilkAndCookies(date) {
  const data = new Date(date);
  return data.getMonth() === 11 && data.getDate() === 24;
}
console.log(timeForMilkAndCookies("2013-12-24T00:00:00.000Z")); */

// #7kyu Hells Kitchen
/* function gordon(a) {
  a = a.toUpperCase();
  a = a.replace(/[A]/g, "@");
  a = a.replace(/[OUEI]/g, "*");
  a = a
    .split(" ")
    .map((value) => value + "!!!!")
    .join(" ");
  return a;
}
console.log(gordon("What feck damn cake")); */

// #7kyu Reverse and Invert
/* function reverseInvert(array) {
  return array
    .filter((value) => Number.isInteger(value))
    .map((value) => {
      let reverse = Math.abs(value).toString().split("").reverse().join("");
      return value >= 0 ? -reverse : +reverse;
    });
}
console.log(reverseInvert([1, 12, "a", 3.4, 87, 99.9, -42, 50, 5.6])); */

// #7kyu Multiplication - Generators #2
/* function* generator(a) {
  let i = 1;
  while (true) {
    yield `${a} x $
    {i} = ${a * i}`;
    i++;
  }
}
var gen = generator(10);
console.log(gen.next().value); */

// #7kyu Check the exam
/* function checkExam(array1, array2) {
  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      sum += 4;
    } else if (array1[i] === "" || array2[i] === "") {
      sum += 0;
    } else {
      sum -= 1;
    }
  }
  return sum >= 0 ? sum : 0;
}
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); */

// #7kyu Make them bark!
/* function Dog(name, breed, sex, age) {
  this.name = name;
  this.breed = breed;
  this.sex = sex;
  this.age = age;
}
Dog.prototype.bark = function () {
  return "Woof!";
};
var apollo = new Dog("Apollo", "Dobermann", "male", "4");
console.log(apollo.bark()); */

// #7kyu Holiday VII - Local Talk
/* function pak(s) {
  return s.trim().replace(/ /g, " pak ");
}
console.log(pak(" ")); */

// #7kyu Thinkful - List and Loop Drills: Inverse Slicer
/* function inverseSlice(items, a, b) {
  return [...items.slice(0, a), ...items.slice(b)];
}
console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4)); */

// #7kyu Make Me Slow
/* function makeMeSlow() {
  for (let x = 0; x < 7000000000; x++) {}
} */

// #7kyu The old switcheroo 2
/* function encode(str) {
  str = str.toLowerCase();
  let alphabet = "0abcdefghijklmnopqrstuvwxyz";
  let index = "";
  for (let i = 0; i < str.length; i++) {
    index += alphabet.includes(str[i]) ? alphabet.indexOf(str[i]) : str[i];
  }
  return index;
}
console.log(encode("abc-#@5")); */

// #7kyu Class conundrum - Bug Fixing #7
/* class List {
  constructor(type) {
    this.type = type;
    this.items = [];
  }
  get count() {
    return this.items.length;
  }
  add(item) {
    if (typeof item !== this.type) {
      return `This item is not of type: ${this.type}`;
    }
    this.items.push(item);
    return this;
  }
}
const myList = new List("string");
console.log(myList.add(42)); */

// #7kyu Is that a real phone number? (British version)
/* function validateNumber(str) {
  str = str.match(/\d/g).join("");
  if (str.startsWith("07")) {
    return str.slice(2).length === 9
      ? "In with a chance"
      : "Plenty more fish in the sea";
  } else if (str.startsWith("447")) {
    return str.slice(3).length === 9
      ? "In with a chance"
      : "Plenty more fish in the sea";
  } else {
    return "Plenty more fish in the sea";
  }
}
console.log(validateNumber("+07535514555")); */

// #7kyu Colour Association
/* function colourAssociation(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(Object.fromEntries([array[i]]));
  }
  return result;
}
console.log(
  colourAssociation([
    ["white", "goodness"],
    ["blue", "tranquility"],
  ])
); */

// #7kyu Basic Math (Add or Subtract)
/* function calculate(str) {
  return eval(str.split("plus").join("+").split("minus").join("-")).toString();
}
console.log(calculate("1plus2plus3minus4")); */

// #7kyu Simple Fun #13: Magical Well
/* function magicalWell(a, b, n) {
  let sum = 0;
  while (n--) {
    sum += a * b;
    a = a + 1;
    b = b + 1;
  }
  return sum;
}
console.log(magicalWell(6, 5, 3)); */

// #7kyu Sum of a sequence
/* const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};
console.log(sequenceSum(2, 6, 2)); */

// #7kyu Evens times last
/* function evenLast(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 2) {
    sum += numbers[i];
  }
  return sum * numbers[numbers.length - 1] || 0;
}
console.log(evenLast([2, 3, 4, 5])); */

// #7kyu Sum of Minimums!
/* function sumOfMinimums(arr) {
  let sum = 0;
  arr.forEach((value) => {
    sum += Math.min(...value);
  });
  return sum;
}
console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);
 */

// #7kyu Middle Me
/* function middleMe(N, X, Y) {
  if (N % 2) return X;
  return Y.repeat(N / 2) + X + Y.repeat(N / 2);
}
console.log(middleMe(18, "z", "#")); */

// #7kyu Simple Fun #384: Is Turing's Equation?
/* function isTuringEquation(s) {
  let sum = 0;
  let array = s.split(/[+|=]/g);
  for (let i = 0; i < array.length - 1; i++) {
    sum += Number(array[i].split("").reverse().join(""));
  }
  return sum == array[array.length - 1].split("").reverse().join("");
}
console.log(isTuringEquation("73+42=16")); */

// #7kyu Round up to the next multiple of 5
/* function roundToNext5(n) {
  if (n % 5) {
    while (n % 5) {
      n += 1;
    }
    return n;
  } else {
    return n;
  }
}
console.log(roundToNext5(21)); */

// #7kyu Formatting decimal places #1
/* function twoDecimalPlaces(number) {
  let array = number.toString().split(".");
  return +array
    .map((value, index) => (index === 1 ? value.slice(0, 2) : value))
    .join(".");
}
console.log(twoDecimalPlaces(10.1289767789)); */

// #7kyu Double Every Other
/* function doubleEveryOther(a) {
  return a.map((value, index) => (index % 2 ? value * 2 : value));
}
console.log(doubleEveryOther([1, 2, 3, 4])); */

// #7kyu Remove duplicate words
/* function removeDuplicateWords(s) {
  let result = [];
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    if (!result.includes(s[i])) {
      result.push(s[i]);
    }
  }
  return result.join(" ");
}
console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
); */

// #7kyu Power of two
/* function isPowerOfTwo(n) {
  let sum;
  for (let i = 1; i <= n; i *= 2) {
    sum = i;
  }
  return sum === n;
}
console.log(isPowerOfTwo(2)); */

// #7kyu Pull your words together, man!
/* function sentencify(words) {
  let str = words[0][0].toUpperCase() + words[0].slice(1);
  for (let i = 1; i < words.length; i++) {
    str += " " + words[i];
  }
  return str + ".";
}
console.log(sentencify(["i", "go"])); */

// #7kyu isEven? - Bitwise Series
/* var isEven = function (n) {
  n = n / 2;
  let numStr = n.toString();
  let parts = numStr.split(".");
  let number = parts.length > 1 ? parts[1] : 0;
  return number === 0;
};
console.log(isEven(14)); */

// #7kyu Sort the Gift Code
/* function sortGiftCode(code) {
  return code.split("").sort().join("");
}
console.log(sortGiftCode("pqksuvy")); */

// #7kyu Multiples!
/* function multiple(x) {
  if (x % 3 === 0 && x % 5 === 0) {
    return "BangBoom";
  } else if (x % 3 === 0) {
    return "Bang";
  } else if (x % 5 === 0) {
    return "Boom";
  } else {
    return "Miss";
  }
}
console.log(multiple(65)); */

// #7kyu Paul's Misery
/* function paul(x) {
  let sum = 0;
  let obj = {
    kata: 5,
    "Petes kata": 10,
    life: 0,
    eating: 1,
  };
  for (let i = 0; i < x.length; i++) {
    sum += obj[x[i]];
  }
  if (sum < 40) {
    return "Super happy!";
  } else if (sum < 70 && sum >= 40) {
    return "Happy!";
  } else if (sum < 100 && sum >= 70) {
    return "Sad!";
  } else {
    return "Miserable!";
  }
}
console.log(
  paul([
    "Petes kata",
    "Petes kata",
    "eating",
    "Petes kata",
    "Petes kata",
    "eating",
  ])
); */

// #7kyu GA-DE-RY-PO-LU-KI cypher
/* const object = {
  G: "A",
  A: "G",
  a: "g",
  g: "a",
  D: "E",
  E: "D",
  d: "e",
  e: "d",
  R: "Y",
  Y: "R",
  r: "y",
  y: "r",
  P: "O",
  O: "P",
  p: "o",
  o: "p",
  L: "U",
  U: "L",
  l: "u",
  u: "l",
  K: "I",
  I: "K",
  k: "i",
  i: "k",
};
function encode(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (object[str[i]]) {
      result += object[str[i]];
    } else {
      result += str[i];
    }
  }
  return result;
}

function decode(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (object[str[i]]) {
      result += object[str[i]];
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(encode("Ala has a cat"));
console.log(decode("Gug hgs g cgt")); */

// #7kyu lucky number
/* function isLucky(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum % 9 === 0;
}
console.log(isLucky(1892376)); */

// #7kyu Summing a number's digits
/* function sumDigits(number) {
  number = Math.abs(number).toString();
  return eval(number.split("").join("+"));
}
console.log(sumDigits(-32)); */

// #7kyu Return String of First Characters
/* function makeString(s) {
  let string = "";
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    string += s[i].slice(0, 1);
  }
  return string;
}
console.log(makeString("brown eyes are nice")); */

// #7kyu Predict your age!
/* function predictAge(...args) {
  return Math.floor(
    Math.sqrt(args.reduce((sum, curr) => curr * curr + sum, 0)) / 2
  );
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)); */

// #7kyu Is it a vowel on this position?
/* function checkVowel(string, position) {
  return /[aouei]/.test(string.slice(position, position + 1).toLowerCase());
}
console.log(checkVowel("%WXpIEhqRc%O6o7", -2)); */

// #7kyu ScholarStem: Unit 6- Baby count!
/* function countName(anArr, name) {
  let sum = 0;
  for (let i = 0; i < anArr.length; i++) {
    if (anArr[i] === name) {
      sum++;
    }
  }
  return sum;
}
console.log(countName(["Tom", "Bob", "Harry", "Bob"], "Bob")); */

// #7kyu Alternate case
/* function alternateCase(s) {
  let string = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      string += s[i].toLowerCase();
    } else {
      string += s[i].toUpperCase();
    }
  }
  return string;
}
console.log(alternateCase("Hello World")); */

// #7kyu Check three and two
/* function checkThreeAndTwo(array) {
  let obj = {};
  for (const key in array) {
    if (array[key] in obj) {
      obj[array[key]]++;
    } else {
      obj[array[key]] = 1;
    }
  }
  return Object.values(obj).includes(3) && Object.values(obj).includes(2);
}
console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])); */

// #7kyu Turkish Numbers, 0-99
/* const getTurkishNumber = (num) => {
  const singleNumber = {
    0: "sıfır",
    1: "bir",
    2: "iki",
    3: "üç",
    4: "dört",
    5: "beş",
    6: "altı",
    7: "yedi",
    8: "sekiz",
    9: "dokuz",
  };
  const tensNumber = {
    10: "on",
    20: "yirmi",
    30: "otuz",
    40: "kırk",
    50: "elli",
    60: "altmış",
    70: "yetmiş",
    80: "seksen",
    90: "doksan",
  };
  if (singleNumber[num] || tensNumber[num]) {
    return singleNumber[num] || tensNumber[num];
  } else {
    num = num.toString();
    return `${tensNumber[num[0] + 0]} ${singleNumber[num[1]]}`;
  }
};
console.log(getTurkishNumber(20)); */

// #7kyu Calculate mean and concatenate string
/* function mean(lst) {
  lst = lst.join("");
  let stringRegex = /[a-zA-Z]/g;
  let numberRegex = /\d/g;
  return [
    eval(lst.match(numberRegex).join("+")) / lst.match(numberRegex).length,
    lst.match(stringRegex).join(""),
  ];
}
console.log(
  mean([
    "u",
    "6",
    "d",
    "1",
    "i",
    "w",
    "6",
    "s",
    "t",
    "4",
    "a",
    "6",
    "g",
    "1",
    "2",
    "w",
    "8",
    "o",
    "2",
    "0",
  ])
); */

// #7kyu #~For Kids~# d/m/Y -> Day of the week.
/* function dayOfTheWeek(date) {
  date = date.split("/");
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date(`${date[2]}-${date[1]}-${date[0]}`);
  let day = weekday[d.getDay()];
  return day;
}
console.log(dayOfTheWeek("07/12/2000")); */

// #7kyu Number of Divisions
/* const divisions = (n, divisor) => {
  let sum = 0;
  while (n >= divisor) {
    n = Math.floor(n / divisor);
    sum++;
  }
  return sum;
};
console.log(divisions(2450, 5)); */

// #7kyu Find the anonymous function
/* var FindFunction = function (func, arr) {
  const findFunc = func.find((value) => typeof value === "function");
  return arr.filter((value) => findFunc(value));
};
console.log(FindFunction([9, 3, (a) => a % 2, 1, 0], [1, 2, 3, 4])); */

// #7kyu First-Class Function Factory
/* function factory(number) {
  return function (array) {
    return array.map(function (element) {
      return element * number;
    });
  };
}
var myArray = [1, 2, 3];
var threes = factory(3);
console.log(threes(myArray)); */

// #7kyu Find all occurrences of an element in an array
/* const findAll = (array, n) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3)); */

// #7kyu String Merge!
/* function stringMerge(string1, string2, letter) {
  return (
    string1.slice(0, string1.indexOf(letter)) +
    string2.slice(string2.indexOf(letter))
  );
}
console.log(stringMerge("person", "here", "e")); */

// #7kyu Partial Word Searching
/* function wordSearch(query, seq) {
  const result = seq.filter((value) =>
    value.toLowerCase().includes(query.toLowerCase())
  );
  return result.length ? result : ["Empty"];
}
console.log(wordSearch("ak", ["za", "ab", "abc", "zab", "zbc"])); */

// #7kyu Difference Of Squares
/* function differenceOfSquares(n) {
  let first = 0;
  let second = 0;
  for (let i = 1; i <= n; i++) {
    first += i;
    second += i ** 2;
  }
  return first ** 2 - second;
}
console.log(differenceOfSquares(10)); */

// #7kyu Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
/* function remove(string) {
  string = string.split(" ");
  return string
    .filter((value) => (value.match(/!/g) || "").length !== 1)
    .join(" ");
}
console.log(remove("Hi! !Hi Hi!")); */

// #7kyu Exes and Ohs
/* function XO(str) {
  str = str.toLowerCase();
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      x++;
    } else if (str[i] === "o") {
      o++;
    }
  }
  return x === o;
}
console.log(XO("ooom")); */

// #7kyu Simple Fun #6: Is Infinite Process?
/* function isInfiniteProcess(a, b) {
  if (b < a) return true;
  if ((b - a) % 2 == 1) return true;
  return false;
}
console.log(isInfiniteProcess(2, 6)); */

// #7kyu Do you speak retsec?
/* function reverseByCenter(s) {
  if (s.length % 2 === 0) {
    return s.slice(s.length / 2) + s.slice(0, s.length / 2);
  } else {
    return (
      s.slice(Math.ceil(s.length / 2)) +
      s.slice(Math.floor(s.length / 2), Math.ceil(s.length / 2)) +
      s.slice(0, Math.floor(s.length / 2))
    );
  }
}
console.log(reverseByCenter("agent")); */

// #7kyu Word to binary
/* function wordToBin(str) {
  return str
    .split("")
    .map((value) => value.charCodeAt(0))
    .map((value) => value.toString(2))
    .map((value) => value.padStart(8, "0"));
}
console.log(wordToBin("man")); */

// #7kyu Tail Swap
/* function tailSwap(arr) {
  return [
    arr[0].split(":")[0] + ":" + arr[1].split(":")[1],
    arr[1].split(":")[0] + ":" + arr[0].split(":")[1],
  ];
}
console.log(tailSwap(["abc:123", "cde:456"])); */

// #7kyu Number Pairs
/* function getLargerNumbers(a, b) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push(a[i] >= b[i] ? a[i] : b[i]);
  }
  return arr;
}
console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])); */

// #7kyu Sort Santa's Reindeer
/* function sortReindeer(reindeerNames) {
  return reindeerNames
    .map((value) => value.split(" "))
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map((value) => value.join(" "));
}
console.log(
  sortReindeer([
    "Dasher Tonoyan",
    "Dancer Moore",
    "Prancer Chua",
    "Vixen Hall",
    "Comet Karavani",
    "Cupid Foroutan",
    "Donder Jonker",
    "Blitzen Claus",
  ])
); */

// #7kyu No Loops 2 - You only need one
/* function check(a, x) {
  return a.includes(x);
}
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45)); */

// #7kyu Test Your Knowledge Of Function Scope
/* function add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(add(2)(5)); */

// #7kyu Exclamation marks series #8: Move all exclamation marks to the end of the sentence
/* function remove(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    string[i] === "!" && count++;
  }
  return string.replace(/[!]/g, "") + "!".repeat(count);
}
console.log(remove("Hi! !Hi Hi!")); */

// #7kyu Excessively Abundant Numbers
/* function abundantNumber(num) {
  let count = 0;
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      count += i;
    }
  }
  return count > num;
}
console.log(abundantNumber(18)); */

// #7kyu Email Address Obfuscator
/* obfuscate = function (email) {
  let string = "";
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      string += " [at] ";
    } else if (email[i] === ".") {
      string += " [dot] ";
    } else {
      string += email[i];
    }
  }
  return string;
};
console.log(obfuscate("test@123.com")); */

// #7kyu Number-Star ladder
/* function pattern(n) {
  var output = "1";
  for (let i = 2; i <= n; i++) {
    output += `\n1${"*".repeat(i - 1)}${i}`;
  }
  return output;
}
console.log(pattern(3)); */

// #7kyu How many times should I go?
/* function howManyTimes(annualPrice, individualPrice) {
  return Math.ceil(annualPrice / individualPrice);
}
console.log(howManyTimes(40, 15)); */

// #7kyu Alternate capitalization
/* function capitalize(s) {
  const upperLetter = s
    .split("")
    .map((value, index) =>
      index % 2 === 0 ? value.toUpperCase() : value.toLowerCase()
    )
    .join("");
  const lowerLetter = s
    .split("")
    .map((value, index) =>
      index % 2 ? value.toUpperCase() : value.toLowerCase()
    )
    .join("");
  return [upperLetter, lowerLetter];
}
console.log(capitalize("abcdef")); */

// #7kyu Regex Failure - Bug Fixing #2
/* function filterWords(phrase) {
  return phrase.replace(/(bad|mean|ugly|horrible|hideous)/gi, "awesome");
}
console.log(filterWords("You're Bad! timmy!")); */

// #7kyu Magic Sum of 3s
/* function magicSum(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].toString().includes(3) && numbers[i] % 2) {
      count += numbers[i];
    }
  }
  return count;
}
console.log(magicSum([3, 12, 5, 8, 30, 13])); */

// #7kyu Dad is Commatose
/* function dadFilter(str) {
  str = str.replace(/,+/g, ",").trim();
  return str.slice(-1) === "," ? str.slice(0, -1) : str;
}
console.log(dadFilter("all this,,,, used to be trees,,,,,,")); */

// #7kyu Thinkful - List and Loop Drills: Lists of lists
/* function processData(data) {
  return data.reduce((sum, curr) => sum * eval(curr.join("-")), 1);
}
console.log(
  processData([
    [2, 5],
    [3, 4],
    [8, 7],
  ])
); */

// #7kyu Evens and Odds
/* function evensAndOdds(num) {
  if (num % 2 === 0) {
    return num.toString(2);
  } else {
    return num.toString(16);
  }
}
console.log(evensAndOdds(12800)); */

// #7kyu Sum of Array Averages
/* const sumAverage = (arr) => {
  const arrayAverage = arr.map((value) => eval(value.join("+")) / value.length);
  return Math.floor(eval(arrayAverage.join("+")));
};
console.log(
  sumAverage([
    [3, 4, 1, 3, 5, 1, 4],
    [21, 54, 33, 21, 77],
  ])
); */

// #7kyu L2: Triple X
/* function tripleX(str) {
  return (
    str[str.indexOf("x")] === "x" &&
    str[str.indexOf("x") + 1] === "x" &&
    str[str.indexOf("x") + 2] === "x"
  );
}
console.log(tripleX("softx kitty, warm kitty, xxxxx")); */

// #7kyu Truthy and Falsy
/* const truthy = [1, 2, 3, 4, 5];
const falsy = [NaN, 0, false, null, undefined]; */

// #7kyu Find the Missing Number
/* function missingNo(nums) {
  const n = 100;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}
const nums = [
  9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18,
  71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84,
  94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46,
  19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58,
  55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99,
  16,
];
console.log(missingNo(nums)); */

// #7kyu My Language Skills
/* function myLanguages(results) {
  let object = {};
  for (const key in results) {
    if (results[key] >= 60) {
      object[key] = results[key];
    }
  }
  let sortArray = Object.entries(object).sort((a, b) => b[1] - a[1]);
  return sortArray.map((value) => value[0]);
}
console.log(myLanguages({ Java: 90, Ruby: 80, Python: 65 })); */

// #7kyu Leap Years
/* function isLeapYear(year) {
  let boolean = false;
  if (year % 4 === 0) {
    boolean = true;
  }
  if (year % 100 === 0) {
    boolean = false;
  }
  if (year % 400 === 0) {
    boolean = true;
  }
  return boolean;
}
console.log(isLeapYear(2020)); */

// #7kyu Sum of two lowest positive integers
/* function sumTwoSmallestNumbers(numbers) {
  let sort = numbers.sort((a, b) => a - b);
  return sort[0] + sort[1];
}
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); */

// #7kyu Squeaky Clean
/* function squeakyClean(arr) {
  return arr.filter((value) => value);
}
console.log(squeakyClean(["click1", "click2", null, "", "", "submitForm"])); */

// #7kyu Spot the Differences
/* function spot(s1, s2) {
  let result = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      result.push(i);
    }
  }
  return result;
}
console.log(spot("abcdefg", "abcqetg")); */

// #7kyu Sum of squares less than some number
/* function getNumberOfSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 2;
    if (sum >= n) {
      return i - 1;
    }
  }
}
console.log(getNumberOfSquares(15)); */

// #7kyu Figurate Numbers #2 - Pronic Number
/* function isPronic(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (sum === n) {
      return true;
    } else {
      sum = i * (i + 1);
    }
  }
  return false;
}
console.log(isPronic(3)); */

// #7kyu Larger Product or Sum
/* function sumOrProduct(array, n) {
  array = array.sort((a, b) => a - b);
  let sum = eval(array.reverse().slice(0, n).join("+"));
  let product = eval(array.reverse().slice(0, n).join("*"));
  if (sum > product) {
    return "sum";
  } else if (product > sum) {
    return "product";
  } else {
    return "same";
  }
}
console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)); */

// #7kyu Especially Joyful Numbers
/* function numberJoy(n) {
  let sum = eval(n.toString().split("").join("+"));
  let product = sum * sum.toString().split("").reverse().join("");
  return n === product;
}
console.log(numberJoy(1729)); */

// #7kyu Temperature analysis I
/* function lowestTemp(t) {
  t = t.split(" ");
  return +t.sort((a, b) => a - b)[0] || null;
}
console.log(lowestTemp("")); */
