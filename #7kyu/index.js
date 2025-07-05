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

// #7kyu Inspiring Strings
/* function longestWord(stringOfWords) {
  stringOfWords = stringOfWords.split(" ");
  return stringOfWords.sort((a, b) => a.length - b.length)[
    stringOfWords.length - 1
  ];
}
console.log(longestWord("one two three")); */

// #7kyu Powers of i
/* function pofi(n) {
  let remainder = n % 4;
  if (remainder === 0) {
    return "1";
  } else if (remainder === 1) {
    return "i";
  } else if (remainder === 2) {
    return "-1";
  } else if (remainder === 3) {
    return "-i";
  }
}
console.log(pofi(0)); */

// #7kyu The highest profit wins!
/* function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
console.log(minMax([1, 2, 3, 4, 5])); */

// #7kyu Dan's great power generator
/* function danspower(num, power) {
  let number = num ** power;
  return number % 2 === 0 ? number : Math.round(number / 10) * 10;
}
console.log(danspower(6, 0)); */

// #7kyu Simple Fun #147: Find The Missing Tree
/* function findTheMissingTree(trees) {
  let numbers = {};
  for (let i = 0; i < trees.length; i++) {
    if (trees[i] in numbers) {
      numbers[trees[i]]++;
    } else {
      numbers[trees[i]] = 1;
    }
  }
  let minNumber = Math.min(...Object.values(numbers));
  for (const key in numbers) {
    if (numbers[key] === minNumber) {
      return +key;
    }
  }
}
console.log(findTheMissingTree([1, 2, 2, 3, 3])); */

// #7kyu Odd Ones Out!
/* function oddOnesOut(nums) {
  let object = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in object) {
      object[nums[i]]++;
    } else {
      object[nums[i]] = 1;
    }
  }
  let entries = Object.entries(object);
  let odds = [];
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] % 2) {
      odds.push(+entries[i][0]);
    }
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!odds.includes(nums[i])) {
      result.push(nums[i]);
    }
  }
  return result;
}
console.log(oddOnesOut([1, 2, 3, 1, 3, 3])); */

// #7kyu Find how many times did a team from a given country win the Champions League?
/* function countWins(winnerList, country) {
  let sum = 0;
  winnerList.forEach((object) => {
    if (country === object.country) {
      sum++;
    }
  });
  return sum;
}
console.log(
  countWins(
    [
      { season: "1996–97", team: "Borussia Dortmund", country: "Germany" },
      { season: "1997–98", team: "Real Madrid", country: "Spain" },
      { season: "1998–99", team: "Manchester United", country: "England" },
      { season: "1999–00", team: "Real Madrid", country: "Spain" },
      { season: "2000–01", team: "Bayern Munich", country: "Germany" },
      { season: "2001–02", team: "Real Madrid", country: "Spain" },
      { season: "2002–03", team: "Milan", country: "Italy" },
      { season: "2003–04", team: "Porto", country: "Portugal" },
      { season: "2004–05", team: "Liverpool", country: "England" },
      { season: "2005–06", team: "Barcelona", country: "Spain" },
      { season: "2006–07", team: "Milan", country: "Italy" },
      { season: "2007–08", team: "Manchester United", country: "England" },
      { season: "2008–09", team: "Barcelona", country: "Spain" },
      { season: "2009–10", team: "Internazionale", country: "Italy" },
      { season: "2010–11", team: "Barcelona", country: "Spain" },
      { season: "2011–12", team: "Chelsea", country: "England" },
      { season: "2012–13", team: "Bayern", country: "Germany" },
      { season: "2013–14", team: "Real Madrid", country: "Spain" },
      { season: "2014–15", team: "Barcelona", country: "Spain" },
      { season: "2015–16", team: "Real Madrid", country: "Spain" },
    ],
    "Portugal"
  )
); */

// #7kyu Extra Perfect Numbers (Special Numbers Series #7)
/* function extraPerfect(n) {
  let array = [];
  for (let i = 1; i <= n; i += 2) {
    array.push(i);
  }
  return array;
}
console.log(extraPerfect(39)); */

// #7kyu Fizz Buzz Cuckoo Clock
/* function fizzBuzzCuckooClock(time) {
  time = time.split(":");
  if (time[1] === "00") {
    let numbers = {
      "00": 12,
      13: 1,
      14: 2,
      15: 3,
      16: 4,
      17: 5,
      18: 6,
      19: 7,
      20: 8,
      21: 9,
      22: 10,
      23: 11,
    };
    let str = "";
    for (let i = 1; i <= (numbers[time[0]] || time[0]); i++) {
      str += "Cuckoo ";
    }
    return str.trim();
  } else if (time[1] === "30") {
    return "Cuckoo";
  } else if (time[1] % 3 === 0 && time[1] % 5 === 0) {
    return "Fizz Buzz";
  } else if (time[1] % 3 === 0) {
    return "Fizz";
  } else if (time[1] % 5 === 0) {
    return "Buzz";
  } else {
    return "tick";
  }
}
console.log(fizzBuzzCuckooClock("13:00")); */

// #7kyu Inverting a Hash
/* function invertHash(hash) {
  return Object.fromEntries(
    Object.entries(hash).map((value) => value.reverse())
  );
}
console.log(invertHash({ a: "1", b: "2", c: "3" })); */

// #7kyu Simple Fun #238: Tennis Game Points
/* function tennisGamePoints(score) {
  score = score.split("-");
  let ball = {
    love: 0,
    15: 1,
    30: 2,
    40: 3,
  };
  let sum = 0;
  if (score[0] === "all") {
    return (sum += ball[score[1]] + ball[score[1]]);
  } else if (score[1] === "all") {
    return (sum += ball[score[0]] + ball[score[0]]);
  } else {
    return (sum += ball[score[0]] + ball[score[1]]);
  }
}
console.log(tennisGamePoints("30-all")); */

// #7kyu Who is the killer?
/* function killer(suspectInfo, dead) {
  for (const key in suspectInfo) {
    for (let i = 0; i < dead.length; i++) {
      if (suspectInfo[key].includes(dead[i])) {
        return key;
      }
    }
  }
}
console.log(
  killer(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
    },
    ["Lucas", "Bill"]
  )
); */

// #7kyu Sum of angles
/* function angle(n) {
  return (n - 2) * 180;
}
console.log(angle(3)); */

// #7kyu Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
/* function product(string) {
  let exclamation = 0;
  let question = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "!") {
      exclamation++;
    } else if (string[i] === "?") {
      question++;
    }
  }
  return exclamation * question;
}
console.log(product("!!!???")); */

// #7kyu Indexed capitalization
/* function capitalize(s, arr) {
  s = s.split("");
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (arr.includes(i)) {
      str += s[i].toUpperCase();
    } else {
      str += s[i];
    }
  }
  return str;
}
console.log(capitalize("abcdef", [1, 2, 5])); */

// #7kyu Calculate Meal Total
/* function calculate_total(subtotal, tax, tip) {
  tax = subtotal * (tax / 100);
  tip = subtotal * (tip / 100);
  total = subtotal + tax + tip;
  return parseFloat(total.toFixed(2));
}
console.log(calculate_total(5, 5, 10)); */

// #7kyu FIXME: Get Full Name
/* class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    if (this.firstName && this.lastName) {
      return this.firstName + " " + this.lastName;
    } else if (this.firstName) {
      return this.firstName;
    } else if (this.lastName) {
      return this.lastName;
    } else {
      return "";
    }
  }
}
console.log(new Dinglemouse("Clint", "Eastwood").getFullName()); */

// #7kyu Averages of numbers
/* function averages(numbers) {
  if (!numbers || numbers.length < 2) {
    return [];
  }
  const result = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    const avg = (numbers[i] + numbers[i + 1]) / 2;
    result.push(avg);
  }
  return result;
}
console.log(averages([1, 3, 5, 1, -10])); */

// #7kyu Multiples and Digit Sums
/* function procedure(n) {
  let sum = 0;
  for (let i = n; i <= 100; i += n) {
    sum += eval(eval(i.toString().split("").join("+")));
  }
  return sum;
}
console.log(procedure(30)); */

// #7kyu The Ladies of ENIAC
/* function radLadies(name) {
  let string = "";
  for (let i = 0; i < name.length; i++) {
    if (!/[0-9%$&/£?@]/.test(name[i])) {
      string += name[i];
    }
  }
  return string.toUpperCase();
}
console.log(
  radLadies("k?%35a&&/y@@@£5599 m93753&$$$c$n///79u??@@%l?975$t?%5y%&$3$1!")
); */

// #7kyu Filter unused digits
/* function unusedDigits(...args) {
  let number = "";
  args = args.join("");
  for (let i = 0; i <= 9; i++) {
    if (!args.includes(i)) {
      number += i;
    }
  }
  return number;
}
console.log(unusedDigits(2015, 8, 26)); */

// #7kyu 80's Kids #1: How Many Licks Does it Take?
/* function totalLicks(env) {
  let licks = 252;
  let challenge;
  for (const effect in env) {
    if (env[effect] > 0 && (!challenge || env[effect] > env[challenge])) {
      challenge = effect;
    }
    licks += env[effect];
  }
  return (
    `It took ${licks} licks to get to the tootsie roll center of a tootsie pop.` +
    (challenge ? ` The toughest challenge was ${challenge}.` : "")
  );
}
console.log(totalLicks({ "freezing temps": 10, "clear skies": -2 })); */

// #7kyu Password validator
/* function password(str) {
  let upper = /[A-Z]/.test(str);
  let lower = /[a-z]/.test(str);
  let number = /[0-9]/.test(str);
  return upper && lower && number && str.length >= 8;
}
console.log(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890")); */

// #7kyu Every nth array element. (Basic)
/* function every(arr, interval = 1, start = 0) {
  let array = [];
  for (let i = start; i < arr.length; i += interval) {
    array.push(arr[i]);
  }
  return array;
}
console.log(every([0, 1, 2, 3, 4])); */

// #7kyu Find the number of trailing zeros in the binary representation of a number.
/* function trailingZeros(n) {
  n = n.toString(2);
  let sum = 0;
  while (n > 0 && n % 2 === 0) {
    sum++;
    n = n / 2;
  }
  return sum;
}
console.log(trailingZeros(25)); */

// #7kyu Return the first M multiples of N
/* function multiples(m, n) {
  let array = [];
  for (let i = 1; i <= m; i++) {
    array.push(n * i);
  }
  return array;
}
console.log(multiples(3, 5)); */

// #7kyu Interlocking Binary Pairs
/* function interlockable(a, b) {
  return (a & b) == 0;
}
console.log(interlockable(3n, 6n)); */

// #7kyu Authenticate a list of usernames
/* function authList(arr) {
  for (let i = 0; i < arr.length; ) {
    if (/^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/.test(arr[i])) {
      i++;
    } else {
      return false;
    }
  }
  return true;
}
console.log(authList(["john123", "alex222", "sandra1"])); */

// #7kyu Map function issue
/* var func = function (item) {
  return item.map((value) => value % 2 === 0);
};

function map(arr, somefunction) {
  if (somefunction !== func) {
    return "given argument is not a function";
  }
  for (let i = 0; i < arr.length; i++) {
    if (!Number(arr[i])) {
      return "array should contain only numbers";
    }
  }
  return somefunction(arr);
}
console.log(map([27, 18, 5, "8", "1"], "s")); */

// #7kyu Cut array into smaller parts
/* function makeParts(arr, chunkSize) {
  let result = [];
  for (let i = 0; i < arr.length; ) {
    result.push(arr.slice(i, (i += chunkSize)));
  }
  return result;
}
console.log(makeParts([1, 2, 3, 4, 5], 2)); */

// #7kyu Find the calculation type
/* function calcType(a, b, res) {
  if (a + b === res) {
    return "addition";
  } else if (a - b === res) {
    return "subtraction";
  } else if (a * b === res) {
    return "multiplication";
  } else {
    return "division";
  }
}
console.log(calcType(1, 2, 3)); */

// #7kyu Find the sum of the roots of a quadratic equation
/* function roots(a, b, c) {
  let sum = 0;
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return null;
  } else {
    sum = -b / a;
  }
  return Number(sum.toFixed(2));
}
console.log(roots(1, -35, -23)); */

// #7kyu Two Oldest Ages
/* function twoOldestAges(ages) {
  ages = ages.sort((a, b) => b - a);
  return [ages[1], ages[0]];
}
console.log(twoOldestAges([1, 5, 87, 45, 8, 8])); */

// #7kyu Make a function that does arithmetic!
/* function arithmetic(a, b, operator) {
  if ("add" === operator) {
    return a + b;
  } else if ("subtract" === operator) {
    return a - b;
  } else if ("multiply" === operator) {
    return a * b;
  } else {
    return a / b;
  }
}
console.log(arithmetic(1, 2, "add")); */

// #7kyu Looking for a benefactor
/* function newAvg(arr, newavg) {
  let n = arr.length;
  let sum = arr.reduce((acc, num) => acc + num, 0);
  let newDonation = newavg * (n + 1) - sum;
  if (newDonation <= 0) {
    throw new Error("Expected New Average is too low");
  } else {
    return Math.ceil(newDonation);
  }
}
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92)); */

// #7kyu Alphabetical Addition
/* function addLetters(...letters) {
  const alphabet = "0abcdefghijklmnopqrstuvwxyz";
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    count += alphabet.indexOf(letters[i]);
  }
  return count % 26 === 0 ? "z" : alphabet[count] || alphabet[count % 26];
}
console.log(addLetters("l", "x", "p")); */

// #7kyu Count the divisors of a number
/* function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count += 1;
      if (i !== n / i) {
        count += 1;
      }
    }
  }
  return count;
}
console.log(getDivisorsCnt(11)); */

// #7kyu The Office I - Outed
/* function outed(meet, boss) {
  let sum = 0;
  let team = 1;
  for (const key in meet) {
    if (key !== boss) {
      sum += meet[key];
      team++;
    } else {
      sum += meet[key] + meet[key];
    }
  }
  return sum / team <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
console.log(
  outed(
    {
      tim: 7,
      jim: 4,
      randy: 5,
      sandy: 4,
      andy: 8,
      katie: 9,
      laura: 3,
      saajid: 9,
      alex: 0,
      john: 5,
      mr: 5,
    },
    "jim"
  )
); */

// #7kyu Number to digit tiers
/* function createArrayOfTiers(num) {
  num = num.toString();
  let result = [];
  for (let i = 1; i <= num.length; i++) {
    result.push(num.slice(0, i));
  }
  return result;
}
console.log(createArrayOfTiers(2017)); */

// #7kyu Odder Than the Rest
/* function oddOne(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      return arr.indexOf(arr[i]);
    }
  }
  return -1;
}
console.log(oddOne([2, 4, 6, 7, 10])); */

// #7kyu Thinkful - String Drills: Quotable
/* function quotable(name, quote) {
  return `${name} said: "${quote}"`;
}
console.log(quotable("Grae", "Practice makes perfect")); */

// #7kyu String Scramble
/* function scramble(str, arr) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i];
  }
  return result.join("");
}
console.log(scramble("abcd", [0, 3, 1, 2])); */

// #7kyu Password maker
/* function makePassword(phrase) {
  let words = {
    I: 1,
    i: 1,
    O: "0",
    o: "0",
    S: 5,
    s: 5,
  };
  phrase = phrase.split(" ");
  let str = "";
  for (let i = 0; i < phrase.length; i++) {
    str += phrase[i].slice(0, 1);
  }
  return str.replace(/[IiOoSs]/gi, (x) => {
    if (words[x]) {
      return words[x];
    } else {
      return x;
    }
  });
}
console.log(makePassword("Give me liberty or give me death")); */

// #7kyu Speed Control
/* function gps(s, x) {
  let maxSpeed = 0;
  if (x.length <= 1) return 0;
  for (let i = 0; i < x.length - 1; i++) {
    let speed = (3600 * (x[i + 1] - x[i])) / s;
    if (speed > maxSpeed) {
      maxSpeed = speed;
    }
  }
  return Math.floor(maxSpeed);
}
console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25])); */

// #7kyu Dominant array elements
/* function solve(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Math.max(...arr.slice(i + 1))) {
      result.push(arr[i]);
    }
  }
  return [...new Set(result)];
}
console.log(solve([5, 4, 3, 2, 1]));
 */

// #7kyu Super Secret Password Generator
/* var superSecretChars = [
  ["a", "@"],
  ["s", "$"],
  ["o", "0"],
  ["h", "5"],
  ["x", "*"],
];
function createSSP(password) {
  let object = Object.fromEntries(superSecretChars);
  return password.replace(/[A-Za-z]/gi, (x) => object[x.toLowerCase()] || x);
}
console.log(createSSP("Haxorpassword")); */

// #7kyu Wise drunk man
/* function wdm(talk) {
  return talk
    .split(/puke|hiccup/gi)
    .join(" ")
    .replace(/ +/g, " ")
    .trim();
}
console.log(wdm("puke All's well hiccup     that ends hiccup well puke")); */

// #7kyu Longest vowel chain
/* function solve(s) {
  return s.match(/[aeiou]+/gi).sort((a, b) => b.length - a.length)[0].length;
}
console.log(solve("chrononhotonthuooaos")); */

// #7kyu Insert Dashes 2
/* function insertDashII(num) {
  let result = "";
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    result += num[i];
    if (i < num.length - 1) {
      let current = parseInt(num[i]);
      let next = parseInt(num[i + 1]);
      if (current % 2 === 0 && next % 2 === 0 && current !== 0 && next !== 0) {
        result += "*";
      } else if (current % 2 === 1 && next % 2 === 1) {
        result += "-";
      }
    }
  }
  return result;
}
console.log(insertDashII(40546793)); */

// #7kyu "Very Even" Numbers.
/* function isVeryEvenNumber(n) {
  let sum = n;
  n = n.toString();
  while (n.length > 1) {
    n = eval(n.split("").join("+")).toString();
    sum = n;
  }
  return sum % 2 === 0;
}
console.log(isVeryEvenNumber(841)); */

// #7kyu Cryptanalysis Word Patterns
/* function wordPattern(word) {
  word = word.toLowerCase();
  let pattern = [];
  let letterCodes = {};
  let currentCode = 0;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!(letter in letterCodes)) {
      letterCodes[letter] = currentCode;
      currentCode++;
    }
    pattern.push(letterCodes[letter]);
  }
  return pattern.join(".");
}
console.log(wordPattern("hello")); */

// #7kyu Unscrambled eggs
/* function unscrambleEggs(word) {
  let string = "";
  for (let i = 0; i < word.length; i++) {
    if (word.slice(i).startsWith("egg")) {
      i += 2;
    } else {
      string += word[i];
    }
  }
  return string;
}
console.log(unscrambleEggs("Beggegeggineggneggeregg")); */

// #7kyu Find the lucky numbers
/* var filterLucky = (x) => {
  return x.filter((value) => /[7]/.test(value.toString()));
};
console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17])); */

// #7kyu Multiples By Permutations II
/* function findLowestInt(k) {
  let k1 = k;
  let k2 = k + 1;
  for (let i = 1; true; i++) {
    let product1 = (k1 * i).toString();
    let product2 = (k2 * i).toString();
    if (
      product1.split("").sort().join("") === product2.split("").sort().join("")
    ) {
      return i;
    }
  }
}
console.log(findLowestInt(325)); */

// #7kyu Simple string reversal II
/* function solve(st, a, b) {
  let splitText = st.slice(a, b + 1 || st.length);
  return (
    st.slice(0, a) +
    splitText.split("").reverse().join("") +
    st.slice(b + 1 || st.length)
  );
}
console.log(solve("codewars", 1, 5)); */

// #7kyu The Most Amicable of Numbers
/* function amicableNumbers(num1, num2) {
  let number1Sum = 0;
  let number2Sum = 0;
  for (let i = 1; i <= Math.max(num1, num2) / 2; i++) {
    number1Sum += num1 % i === 0 ? i : 0;
    number2Sum += num2 % i === 0 ? i : 0;
  }
  return number1Sum === num2 && number2Sum === num1;
}
console.log(amicableNumbers(220, 284)); */

// #7kyu Multiply Adjacent Digits
/* function digitMultiplication(expr) {
  let string = "";
  for (let i = 0; i < expr.length; i++) {
    if (/[0-9]/.test(expr[i])) {
      string += expr[i];
      string += /[0-9]/.test(expr[i + 1]) ? "*" : "";
    } else {
      string += expr[i];
    }
  }
  return eval(string);
}
console.log(digitMultiplication("10000345+77-2")); */

// #7kyu Round to nearest 0 or 5
/* function roundToFive(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let num = Math.round(numbers[i] / 5);
    result.push(num * 5);
  }
  return result;
}
console.log(roundToFive([34.5, 56.2, 11, 13])); */

// #7kyu Ghostbusters (whitespace removal)
/* function ghostBusters(building) {
  if (building.includes(" ")) {
    return building.split(" ").join("");
  } else {
    return "You just wanted my autograph didn't you?";
  }
}
console.log(ghostBusters("Factor y")); */

// #7kyu DigitAll
/* function digitAll(x) {
  if (typeof x !== "string") {
    return "Invalid input !";
  }
  let result = "";
  for (let i = 0; i < x.length; i++) {
    if (/[0-9]/.test(x[i])) {
      result += x[i];
    }
  }
  return result;
}
console.log(digitAll(["yes", "i", "am", "kidding", "you", "!"])); */

// #7kyu Find missing numbers
/* function findMissingNumbers(arr) {
  if (arr === undefined) {
    return [];
  }
  let result = [];
  for (let i = Math.min(...arr); i < Math.max(...arr); i++) {
    if (!arr.includes(i)) {
      result.push(i);
    }
  }
  return result;
}
console.log(findMissingNumbers(undefined)); */

// #7kyu Lucky Bus Ticket
/* function isLucky(ticket) {
  if (ticket.length !== 6 || !/^\d{6}$/.test(ticket)) {
    return false;
  }
  const firstHalf = ticket.slice(0, 3);
  const secondHalf = ticket.slice(3);
  const sumFirstHalf = firstHalf
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
  const sumSecondHalf = secondHalf
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
  return sumFirstHalf === sumSecondHalf;
}
console.log(isLucky("")); */

// #7kyu Diving Scores
/* function scoreOfDive(scores, tariff) {
  let array = scores.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 2; i < array.length - 2; i++) {
    sum += array[i];
  }
  return (sum * tariff).toFixed(2);
}
console.log(scoreOfDive([7, 7.5, 8, 7.5, 6, 7, 7], 3)); */

// #7kyu Mew Cipher
/* function decipher(code) {
  let alphabet = " abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < code[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < code.length; j++) {
      sum += alphabet.indexOf(code[j][i]);
    }
    let avg = Math.floor(sum / code.length);
    result += alphabet[avg];
  }
  return result;
}
console.log(decipher(["a  ", " b ", "  c", "   ", "   "])); */

// #7kyu Say "Hello World" JS Style
/* var say = function (string1) {
  return (x) => string1 + " " + x;
};
console.log(say("Hello")("World")); */

// #7kyu Scoring Tests
/* function scoreTest(str, right, omit, wrong) {
  let rightAnswer = 0;
  let omitAnswer = 0;
  let wrongAnswer = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 0) {
      rightAnswer++;
    } else if (str[i] === 1) {
      omitAnswer++;
    } else {
      wrongAnswer++;
    }
  }
  return rightAnswer * right + omitAnswer * omit - wrongAnswer * wrong;
}
console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1)); */

// #7kyu Offload your work!
/* function workNeeded(projectMinutes, freelancers) {
  let freelancerTime = 0;
  for (let i = 0; i < freelancers.length; i++) {
    freelancerTime += freelancers[i][0] * 60 + freelancers[i][1];
  }
  let projectTime = projectMinutes - freelancerTime;
  if (projectTime <= 0) {
    return "Easy Money!";
  } else if (projectTime >= 60) {
    return `I need to work ${Math.floor(
      projectTime / 60
    )} hour(s) and ${Math.floor(projectTime % 60)} minute(s)`;
  } else {
    return `I need to work 0 hour(s) and ${projectTime} minute(s)`;
  }
}
console.log(workNeeded(60, [[1, 0]])); */

// #7kyu Swap items in a dictionary
/* function switchDict(dic) {
  let result = {};
  for (const key in dic) {
    if (dic[key] in result) {
      result[dic[key]] = [...result[dic[key]], key];
    } else {
      result[dic[key]] = [key];
    }
  }
  return result;
}
console.log(
  switchDict({
    Ice: "Cream",
    Age: "21",
    Light: "Cream",
    Double: "Cream",
  })
); */

// #7kyu Recursive Ninja
/* function chirp(n) {
  if (n === 1) {
    return "chirp";
  } else {
    return "chirp-" + chirp(n - 1);
  }
}
console.log(chirp(2)); */

// #7kyu Find your caterer
/* function findCaterer(budget, people) {
  if (people === 0 || budget < 15 * people) {
    return -1;
  }
  const sum1 = 15 * people;
  const sum2 = 20 * people;
  let sum3 = 30 * people;
  if (people > 60) {
    sum3 *= 0.8;
  }
  if (sum3 <= budget) {
    return 3;
  }
  if (sum2 <= budget) {
    return 2;
  }
  if (sum1 <= budget) {
    return 1;
  }
  return -1;
}
console.log(findCaterer(200, 9)); */

// #7kyu Simple Fun #182: Happy "g"
/* function gHappy(str) {
  return str.replace(/[gg]{2,}/gi, "").includes("g") === false;
}
console.log(gHappy("gg0gg3gg0gggog213g2g")); */

// #7kyu Find The Duplicated Number in a Consecutive Unsorted List
/* function findDup(arr) {
  return +arr.filter((value, index) => arr.indexOf(value) !== index).join("");
}
console.log(findDup([1, 2, 2, 3])); */

// #7kyu Katastrophe!
/* function strongEnough(earthquake, age) {
  let sum = 1;
  for (let i = 0; i < earthquake.length; i++) {
    sum *= eval(earthquake[i].join("+"));
  }
  return 1000 * 0.99 ** age >= sum ? "Safe!" : "Needs Reinforcement!";
}
console.log(
  strongEnough(
    [
      [2, 3, 1],
      [3, 1, 1],
      [1, 1, 2],
    ],
    2
  )
); */

// #7kyu Credit Card Checker
/* function validCard(card) {
  let string = card.split(" ").join("");
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  let sort = [];
  for (let i = 0; i < reverse.length; i++) {
    if (i % 2) {
      sort.push(reverse[i] * 2);
    } else {
      sort.push(parseInt(reverse[i]));
    }
  }
  let adjusted = sort.map((value) => (value > 9 ? value - 9 : value));
  let total = adjusted.reduce((sum, value) => sum + value, 0);
  return total % 10 === 0;
}
console.log(validCard("5457 6238 9823 4311")); */

// #7kyu Valid HK Phone Number
/* function isValidHKPhoneNumber(params) {
  let array = params.split(" ");
  return /[0-9]{4}/.test(array[0]) && /[0-9]{4}/.test(array[1]);
}
function hasValidHKPhoneNumber(params) {
  let array = params.split(" ");
  for (let i = 0; i < array.length; i++) {
    if (/[0-9]{4}/.test(array[i]) && /[0-9]{4}/.test(array[i + 1])) {
      return true;
    }
  }
  return false;
}
console.log(isValidHKPhoneNumber("836g 2986"));
console.log(hasValidHKPhoneNumber("What about 9684 2396?")); */

// #7kyu Debug the functions EASY
/* function multi(arr) {
  return eval(arr.join("*"));
}
function add(arr) {
  return eval(arr.join("+"));
}
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(multi([5, 1, 5])); */

// #7kyu Is Undefined?
/* function isUndefined(value) {
  return value == undefined;
}
console.log(isUndefined(1)); */

// #7kyu JS Golfing #7: Join
/* x=a=>a.join``
console.log(x([undefined, null])); */

// #7kyu Give me the k first digits. Odd digits.
/* function findOddDigits(n, k) {
  let oddNumbers = "";
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    oddNumbers += n[i] % 2 ? n[i] : "";
  }
  return oddNumbers.length >= k ? +oddNumbers.slice(0, k) : 0;
}
console.log(findOddDigits(123456789111, 5)); */

// #7kyu UniDecoder
/* function uniDecoder(...args) {
  let boolean = args.some(
    (value) => typeof value === "number" && Number.isInteger(value)
  );
  let result = "";
  if (boolean) {
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] === "number") {
        result += String.fromCharCode(args[i]);
      }
    }
  } else {
    return "not a valid character code";
  }
  return result;
}
console.log(uniDecoder("test", true, 99)); */

// #7kyu Unique Sum
/* function uniqueSum(lst) {
  if (lst.length === 0) {
    return null;
  }
  let unique = [...new Set(lst)];
  return unique.reduce((sum, curr) => sum + curr, 0);
}
console.log(uniqueSum([1, 3, 8, 1, 8])); */

// #7kyu Wordsearch
/* function wordSearch(word, text) {
  text = text.replace(/[,!@.]/gi, "").split(" ");
  return text.includes(word);
}
console.log(
  wordSearch(
    "beautiful",
    "what makes the desert beautiful, said the little prince is that somewhere it hides a well"
  )
); */

// #7kyu We Have Liftoff
/* function liftoff(instructions) {
  return instructions.sort((a, b) => b - a).join(" ") + " " + "liftoff!";
}
console.log(liftoff([2, 8, 10, 9, 1, 3, 4, 7, 6, 5])); */

// #7kyu Deletion in an array
/* function deleteValues(array, pred) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (pred(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
}
console.log(
  deleteValues([1, 3, 2, 4, 5, 7, 6, 8, 10, 9], function isEven(n) {
    return n % 2 === 0;
  })
); */

// #7kyu isAN(value)
/* function isAN(value) {
  if (typeof value === "number") {
    return true;
  }
  if (value instanceof Number) {
    return !Number.isNaN(value.valueOf());
  }
  return false;
}
console.log(isAN(123)); */

// #7kyu Swap two elements
/* function swapTwo(array, a, b) {
  let result = array.slice();
  let firstIndex = result.indexOf(a);
  let lastIndex = result.lastIndexOf(b);
  if (firstIndex !== -1 && lastIndex !== -1) {
    [result[firstIndex], result[lastIndex]] = [
      result[lastIndex],
      result[firstIndex],
    ];
  }
  return result;
}
console.log(swapTwo([1, 2, 3, 4, 1, 2, 3, 4], 2, 4)); */

// #7kyu [Code Golf] Return Odd No Matter What
/* alwaysOdd=n=>n%2?n:n-1
console.log(alwaysOdd(1)); */

// #7kyu Comfortable words
/* const comfortableWord = (word) => {
  let left = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "a",
    "s",
    "d",
    "f",
    "g",
    "z",
    "x",
    "c",
    "v",
    "b",
  ];
  let right = ["y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m"];
  let currentWord = right.includes(word[0]) ? 1 : 0;
  for (let i = 1; i < word.length; i++) {
    if (currentWord) {
      if (left.includes(word[i])) {
        currentWord = 0;
      } else {
        return false;
      }
    } else {
      if (right.includes(word[i])) {
        currentWord = 1;
      } else {
        return false;
      }
    }
  }
  return true;
};
console.log(comfortableWord("yams")); */

// #7kyu How sexy is your name?
/* function sexyName(name) {
  name = name.toUpperCase();
  const scores = {
    A: 100,
    B: 14,
    C: 9,
    D: 28,
    E: 145,
    F: 12,
    G: 3,
    H: 10,
    I: 200,
    J: 100,
    K: 114,
    L: 100,
    M: 25,
    N: 450,
    O: 80,
    P: 2,
    Q: 12,
    R: 400,
    S: 113,
    T: 405,
    U: 11,
    V: 10,
    W: 10,
    X: 3,
    Y: 210,
    Z: 23,
  };
  let score = 0;
  for (let i = 0; i < name.length; i++) {
    score += scores[name[i]] || 0;
  }
  if (score <= 60) {
    return "NOT TOO SEXY";
  } else if (61 <= score && score <= 300) {
    return "PRETTY SEXY";
  } else if (301 <= score && score <= 599) {
    return "VERY SEXY";
  } else if (score >= 600) {
    return "THE ULTIMATE SEXIEST";
  }
}
console.log(sexyName("GUV")); */

// #7kyu Make the small words big!
/* function smallWordHelper(sentence) {
  sentence = sentence.split(" ");
  return sentence
    .map((value) => {
      if (value.length <= 3) {
        return value.toUpperCase();
      } else if (value.length >= 4) {
        return value.replace(/["a", "e", "i", "o", "u", ]/gi, "");
      }
    })
    .join(" ");
}
console.log(smallWordHelper("The quick brown fox jumps over the lazy dog")); */

// #7kyu Tea for two
/* function tea42(input) {
  input = input.toString();
  return input.replace(/[2]/gi, "t");
}
console.log(tea42("2ea2")); */

// #7kyu What rank is this card?
/* function rank(card) {
  let cardObject = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  card = card[0];
  return cardObject[card] || 0;
}
console.log(rank("2s")); */

// #7kyu I'm everywhere!
/* function i(word) {
  if (word === "") {
    return "Invalid word";
  }
  if (word[0] === word[0].toUpperCase()) {
    if (word[0] !== "I") {
      let vowel = 0;
      let consonant = 0;
      for (let i = 0; i < word.length; i++) {
        if (/[aeiou]/gi.test(word[i])) {
          vowel++;
        } else {
          consonant++;
        }
      }
      return consonant > vowel ? "i" + word : "Invalid word";
    }
  }
  return "Invalid word";
}
console.log(i("Phone")); */

// #7kyu ASCII Shift Encryption/Decryption
/* function asciiEncrypt(plaintext) {
  let result = "";
  for (let i = 0; i < plaintext.length; i++) {
    result += String.fromCharCode(plaintext[i].charCodeAt() + i);
  }
  return result;
}
function asciiDecrypt(ciphertext) {
  let result = "";
  for (let i = 0; i < ciphertext.length; i++) {
    result += String.fromCharCode(ciphertext[i].charCodeAt() - i);
  }
  return result;
}
console.log(asciiEncrypt("PASSWORD"));
console.log(asciiDecrypt("PBUV[TXK")); */

// #7kyu Sushi-go-round (Beginner's)
/* function totalBill(str) {
  let rLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "r") {
      rLength++;
    }
  }
  return (rLength - Math.floor(rLength / 5)) * 2;
}
console.log(totalBill("rr rrr rrr rr")); */

// #7kyu Extending JavaScript Objects: Get First & Last Array Element
/* Array.prototype.first = function () {
  return this[0];
};
Array.prototype.last = function () {
  return this[this.length - 1];
};
console.log([2, 5, 7, 3, 4].last()); */

// #7kyu Zebulan's Nightmare
/* function zebulansNightmare(functionName) {
  functionName = functionName.split("_");
  let result = functionName[0];
  for (let i = 1; i < functionName.length; i++) {
    result += functionName[i][0].toUpperCase() + functionName[i].slice(1);
  }
  return result;
}
console.log(zebulansNightmare("camel_case")); */

// #7kyu Is It Negative Zero (-0)?
/* function isNegativeZero(n) {
  return (n == 0 && 1 / n) === -Infinity;
}
console.log(isNegativeZero(+0)); */

// #7kyu Deutschstunde
/* function derDieDas(wort) {
  let wortLenght = (wort.match(/[aeiouäöü]/gi) || "0").length;
  if (wortLenght < 2) {
    return "das " + wort;
  } else if (wortLenght >= 2 && wortLenght <= 3) {
    return "die " + wort;
  } else {
    return "der " + wort;
  }
}
console.log(derDieDas("ZXp")); */

// #7kyu EZ code golf #2 : 8 -> 10
/* f=x=>+('0o'+x)
console.log(f("2")); */

// #7kyu Russian postal code checker
/* function zipvalidate(postcode) {
  if (postcode.length === 6 && Number(postcode)) {
    if (!"05789".includes(postcode[0])) {
      return true;
    }
  }
  return false;
}
console.log(zipvalidate("198328")); */

// #7kyu Shorten Me: Array Declaration II (undefined)
/* array=x=>[...`${x}`] */

// #7kyu sPoNgEbOb MeMe
/* function spongeMeme(sentence) {
  let result = "";
  for (let i = 0; i < sentence.length; i++) {
    if (i % 2 === 0) {
      result += sentence[i].toUpperCase();
    } else {
      result += sentence[i].toLowerCase();
    }
  }
  return result;
}
console.log(spongeMeme("stop Making spongebob Memes!")); */

// #7kyu Baby shark lyrics generator
/* function babySharkLyrics() {
  let verses=["Baby","Mommy","Daddy","Grandma","Grandpa"];result='';
  for (let v of verses)result+=`${v} shark, doo doo doo doo doo doo\n`.repeat(3) + `${v} shark!\n`;
  return result+"Let's go hunt, doo doo doo doo doo doo\n".repeat(3) + "Let's go hunt!\nRun away,…"
}
console.log(babySharkLyrics()); */

// #7kyu Hëävÿ Mëtäl Ümläüts
/* function heavyMetalUmlauts(boringText) {
  const replacements = {
    A: "Ä",
    E: "Ë",
    I: "Ï",
    O: "Ö",
    U: "Ü",
    Y: "Ÿ",
    a: "ä",
    e: "ë",
    i: "ï", 
    o: "ö",
    u: "ü",
    y: "ÿ",
  };
  return boringText.replace(/[A-Za-z]/gi, (value) =>
    replacements[value] ? replacements[value] : value
  );
}
console.log(heavyMetalUmlauts("Announcing the Macbook Air Guitar")); */

// #7kyu Tetration
/* function tetration(x, y) {
  if (y == 0) {
    return 1;
  } else if (y == 1) return x;
  else {
    return x ** tetration(x, y - 1);
  }
}
console.log(tetration(4, 0)); */

// #7kyu Sort deck of cards
/* function sortCards(array) {
  const rankOrder = {
    A: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
  };
  return array.sort((a, b) => rankOrder[a] - rankOrder[b]);
}
console.log(sortCards([3, 9, "A", 5, "T", 8, 2, 4, "Q", 7, "J", 6, "K"])); */

// #7kyu ATM
/* function solve(n) {
  const banknotes = [10, 20, 50, 100, 200, 500];
  let sum = 0;
  for (let i = banknotes.length - 1; i >= 0; i--) {
    while (n >= banknotes[i]) {
      n -= banknotes[i];
      sum++;
    }
  }
  return n === 0 ? sum : -1;
}
console.log(solve(22)); */

// #7kyu Find Screen Size
/* function findScreenHeight(width, ratio) {
  const [w, h] = ratio.split(":").map(Number);
  const result = Math.floor((width / w) * h);
  return `${width}x${result}`;
}
console.log(findScreenHeight(1024, "4:3")); */

// #7kyu Jenny the youngest detective
/* function missingWord(nums, str) {
  str = str.split(" ").join("");
  nums = nums.sort((a, b) => a - b);
  let result = "";
  for (let i = 0; i < nums.length; i++) {
    if (str[nums[i]]) {
      result += str[nums[i]];
    } else {
      return "No mission today";
    }
  }
  return result.toLowerCase();
}
console.log(missingWord([5, 0, 3], "I love you")); */

// #7kyu Count up the points for the 7 Wonders board game! Easy version
/* function solve(compasses, gears, tablets) {
  const distinctSets = Math.min(compasses, gears, tablets);
  const distinctSetPoints = distinctSets * 7;
  const squarePoints =
    compasses * compasses + gears * gears + tablets * tablets;
  return distinctSetPoints + squarePoints;
}
console.log(solve(0, 0, 0)); */

// #7kyu Sum of numbers from 0 to N
/* var SequenceSum = (function () {
  function SequenceSum() {}
  SequenceSum.showSequence = function (count) {
    let sum = 0;
    let result = "";
    if (count < 0) {
      return count + "<" + "0";
    } else if (count === 0) {
      return "0=0";
    }
    for (let i = 0; i <= count; i++) {
      sum += i;
      result += i + 1 <= count ? i + "+" : i + " " + "=" + " " + sum;
    }
    return result;
  };
  return SequenceSum;
})();
console.log(SequenceSum.showSequence(-15)); */

// #7kyu Simple Fun #28: Html End Tag By Start Tag
/* function htmlEndTagByStartTag(startTag) {
  let tag = startTag.slice(startTag.indexOf("<") + 1, startTag.indexOf(" "));
  return `</${tag}>`;
}
console.log(htmlEndTagByStartTag("<button type='button' disabled>")); */

// #7kyu Price is right
/* function priceIsRight(numbers, target) {
  numbers = numbers.sort((a, b) => a - b);
  let result;
  for (let i = 0; i < numbers.length; i++) {
    if (target >= numbers[i]) {
      result = numbers[i];
    }
  }
  return result;
}
console.log(priceIsRight([1, 2, 3, 4, 5], 5)); */

// #7kyu Multidimensional array
/* function getElement(array, indexes) {
  let result;
  for (let i = 0; i < indexes.length; i++) {
    if (result) {
      result = result[indexes[i]];
    } else {
      result = array[indexes[i]];
    }
  }
  return result;
}
console.log(getElement([[[1, 2, 3]]], [0, 0, 1])); */

// #7kyu Negation of a Value
/* function negationValue(string, value) {
  for (let i = 0; i < string.length; i++) {
    value = !value;
  }
  return value;
}
console.log(negationValue("!!", 0)); */

// #7kyu An English Twist on a Japanese Classic
/* function shiritori(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let last = words[i][words[i].length - 1];
    let first = words[i + 1] ? words[i + 1][0] : 0;
    if (last === first) {
      result.push(words[i]);
    } else {
      result.push(words[i]);
      return result.join("").length ? result : [];
    }
  }
  return result;
}
console.log(shiritori(["", "", "", "", "", ""])); */

// #7kyu Lost number in number sequence
/* function findDeletedNumber(arr, mixArr) {
  for (let i = 0; i < arr.length; i++) {
    if (!mixArr.includes(arr[i])) {
      return arr[i];
    }
  }
  return 0;
}
console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5])); */

// #7kyu Words to sentence
/* function wordsToSentence(words) {
  return words.join(" ");
}
console.log(wordsToSentence(["hello", "world"])); */

// #7kyu Chicken Sexing
/* function correctness(bobsDecisions, expertDecisions) {
  let sum = 0;
  for (let i = 0; i < bobsDecisions.length; i++) {
    if (bobsDecisions[i] === expertDecisions[i]) {
      sum++;
    } else if (bobsDecisions[i] === "?" || expertDecisions[i] === "?") {
      sum += 0.5;
    } else {
      sum += 0;
    }
  }
  return sum;
}
console.log(correctness(["M", "?", "M"], ["M", "F", "?"])); */

// #7kyu Fac Recursion (Pest control - find the bugs and fix them)
/* function facRecursion(value) {
  if (value < 0) {
    return 0;
  } else if (value === 1 || value === 0) {
    return 1;
  }
  return value * facRecursion(value - 1);
}
console.log(facRecursion(4)); */

// #7kyu Remove duplication
/* function removeDuplication(arr) {
  let object = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in object) {
      object[arr[i]]++;
    } else {
      object[arr[i]] = 1;
    }
  }
  let result = [];
  for (const key in object) {
    if (object[key] === 1) {
      if (/[0-9]/.test(Number(key))) {
        result.push(Number(key));
      }
    }
  }
  return result;
}
console.log(removeDuplication([1, 2, 3, 2, 4, 6, 2, 6, 7, undefined])); */

// #7kyu Sorted? yes? no? how?
/* function isSortedAndHow(array) {
  let ascendingClone = [...array];
  let descendingClone = [...array];
  let ascending = ascendingClone.sort((a, b) => a - b).join("");
  let descending = descendingClone.sort((a, b) => b - a).join("");
  array = array.join("");
  return ascending == array
    ? "yes, ascending"
    : descending == array
    ? "yes, descending"
    : "no";
}
console.log(isSortedAndHow([3, 2, 3])); */

// #7kyu Closure Counter
/* function counter() {
  let sum = 1;
  return function () {
    return sum++;
  };
}
const newCounter = counter();
console.log(newCounter());
console.log(newCounter()); */

// #7kyu Javascript filter - 1
/* function searchNames(logins) {
  return logins.filter((value) => value[0][value[0].length - 1] == "_");
}
console.log(
  searchNames([
    ["foo", "foo@foo.com"],
    ["bar_", "bar@bar.com"],
  ])
); */

// #7kyu Train to remove duplicates from an array with filter()
/* function unique(arr) {
  return arr.filter((value, index, temp) => temp.indexOf(value) === index);
}
console.log(unique([1, 2, 2, 3, 3])); */

// #7kyu Exclamation marks series #9: Remove or add a exclamation mark at the end of words of the sentence
/* function removeOrAdd(string) {
  let result = [];
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    let once = string[i][string[i].length - 1];
    let twice = string[i][string[i].length - 2];
    if (twice !== "!" && once === "!") {
      result.push(string[i].slice(0, -1));
    } else if (once !== "!") {
      result.push(string[i] + "!");
    } else {
      result.push(string[i]);
    }
  }
  return result.join(" ");
}
console.log(removeOrAdd("Hi! Hi!")); */

// #7kyu Automorphic Number (Special Numbers Series #6)
/* function automorphic(n) {
  n = n.toString();
  let number = (n * n).toString();
  return number.slice(number.length - n.length) === n ? "Automorphic" : "Not!!";
}
console.log(automorphic(25)); */

// #7kyu Fizz / Buzz
/* function solution(number) {
  let A = 0;
  let B = 0;
  let C = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
      A += 1;
    } else if (i % 5 == 0 && i % 3 != 0) {
      B += 1;
    } else if (i % 3 == 0 && i % 5 == 0) {
      C += 1;
    }
  }
  return [A, B, C];
}
console.log(solution(20)); */

// #7kyu PopShift
/* function popShift(s) {
  let stringNumber = Math.floor(s.length / 2);
  if (s.length % 2) {
    return [
      [...s.slice(stringNumber + 1)].reverse().join(""),
      s.slice(0, stringNumber),
      s.slice(stringNumber, stringNumber + 1),
    ];
  } else {
    return [
      [...s.slice(stringNumber)].reverse().join(""),
      s.slice(0, stringNumber),
      "",
    ];
  }
}
console.log(popShift("exampleesthere")); */

// #7kyu Power of 4
/* function powerOf4(n) {
  if (n === 1) {
    return true;
  }
  if (typeof n === "number") {
    return (Math.log(n) / Math.log(4)) % 1 === 0;
  } else {
    return false;
  }
}
console.log(powerOf4(2)); */

// #7kyu Every archer has its arrows
/* function archersReady(archers) {
  if (archers.length === 0) {
    return false;
  }
  return archers.every((value) => value >= 5) === true;
}
console.log(archersReady([])); */

// #7kyu Sorted Union
/* function uniteUnique(...args) {
  return [...new Set(args.flat())];
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); */

// #7kyu Unix command line `ls -l` extract the file type.
/* function linuxType(fileAttribute) {
  const command = {
    "-": "file",
    d: "directory",
    l: "symlink",
    s: "socket",
    p: "pipe",
    c: "character_file",
    b: "block_file",
    D: "door",
  };
  return command[fileAttribute[0]];
}
console.log(linuxType("srwxrwxrwx")); */

// #7kyu Club Doorman
/* function passTheDoorMan(word) {
  const alphabet = " abcdefghijklmnopqrstuvwxyz";
  const doubleLetter = alphabet.indexOf(word.match(/(.)\1/)[1]);
  return doubleLetter * 3;
}
console.log(passTheDoorMan("lettuce")); */

// #7kyu Test's results
/* function testResult(array) {
  const classAverage =
    array.reduce((curr, sum) => curr + sum, 0) / array.length;
  let ball = {
    h: 0,
    a: 0,
    l: 0,
  };
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 9) {
      ball["h"]++;
    } else if (array[i] >= 7) {
      ball["a"]++;
    } else {
      ball["l"]++;
    }
  }
  let result;
  if (ball["a"] === 0 && ball["l"] === 0) {
    result = [ball, "They did well"];
  } else {
    result = [ball];
  }
  return [Number(classAverage.toFixed(3)), ...result];
}
console.log(testResult([10, 9, 7, 10, 9, 10, 9]));
 */

// #7kyu Functional Addition
/* function add(n) {
  return (number) => n + number;
}
console.log(add(1)(-5)); */

// #7kyu Oh come on! Hello world! once again?
/* f = (_) =>
  "\u0048" +
  "\u0065" +
  "\u006C" +
  "\u006C" +
  "\u006F" +
  "\u002C" +
  "\u0020" +
  "\u0077" +
  "\u006F" +
  "\u0072" +
  "\u006C" +
  "\u0064" +
  "\u0021";
console.log(f()); */

// #7kyu Arithmetic sequence - sum of n elements
/* function ArithmeticSequenceSum(a, r, n) {
  let sum = a;
  for (let i = 2; i <= n; i++) {
    sum += a;
    sum += r * (i - 1);
  }
  return sum;
}
console.log(ArithmeticSequenceSum(2, 3, 5)); */

// #7kyu Get the 𝑟𝑒𝑎𝑙 length of a string
/* function getRealLength(string) {
  return Array.from(string.split(/[\ufe00-\ufe0f]/).join("")).length;
}
console.log(getRealLength("1")); */

// #7kyu Sum of all arguments
/* function sum(...args) {
  return args.reduce((curr, sum) => curr + sum, 0);
}
console.log(sum(5, 7, 9)); */

// #7kyu Arithmetic progression
/* function arithmeticSequenceElements(a, d, n) {
  let sum = [];
  for (let i = a; ; i += d) {
    if (sum.length === n) {
      return sum.join(", ");
    } else {
      sum.push(i);
    }
  }
}
console.log(arithmeticSequenceElements(1, 2, 5)); */

// #7kyu What is my name score? #1
/* function nameScore(name) {
  const alpha = ["Z", "ABCDE", "FGHIJ", "KLMNO", "PQRST", "UVWXY"];
  let sum = 0;
  let result = {};
  let clearName = name.toUpperCase().split(" ").join("");
  for (let i = 0; i < clearName.length; i++) {
    for (let k = 0; k < alpha.length; k++) {
      if (alpha[k].includes(clearName[i])) {
        sum += k;
      }
    }
  }
  result[name] = sum;
  return result;
}
console.log(nameScore("Mary Jane")); */

// #7kyu Operations With Sets
/* function process2Arrays(arr1, arr2) {
  let bothArray = arr1.concat(arr2).filter((value, index, temp) => {
    return temp.indexOf(value) !== index;
  });
  let onlyArray = arr1.concat(arr2).filter((value) => {
    return !bothArray.includes(value);
  });
  let firstArray = arr1.filter((value) => !bothArray.includes(value));
  let secondArray = arr2.filter((value) => !bothArray.includes(value));
  return [
    bothArray.length,
    onlyArray.length,
    firstArray.length,
    secondArray.length,
  ];
}
console.log(
  process2Arrays([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8, 10, 12, 14])
); */

// #7kyu The Hidden Word
/* function hiddenWord(num) {
  const maya = {
    6: "a",
    1: "b",
    7: "d",
    4: "e",
    3: "i",
    2: "l",
    9: "m",
    8: "n",
    0: "o",
    5: "t",
  };
  num = num.toString();
  return num.replace(/[0-9]/g, (value) => maya[value] || "");
}
console.log(hiddenWord(942547)); */

// #7kyu Number Manipulation I (Easy)
/* function manipulate(num) {
  num = num.toString();
  const result =
    num.slice(0, Math.floor(num.length / 2)) +
    "0".repeat(num.length - Math.floor(num.length / 2));
  return Number(result);
}
console.log(manipulate(8384737)); */

// #7kyu Character Concatenation
/* function charConcat(string) {
  let originalSize = Math.floor(string.length / 2);
  let result = "";
  for (let i = 0; i < originalSize; i++) {
    result += string[i] + string[string.length - 1 - i] + (i + 1);
  }
  return result;
}
console.log(charConcat("abc!def")); */

// #7kyu Credit card issuer checking
/* function getIssuer(number) {
  number = number.toString();
  const len = number.length;
  if ((len === 13 || len === 16) && number.startsWith("4")) {
    return "VISA";
  }
  if (len === 16 && /^5[1-5]/.test(number)) {
    return "Mastercard";
  }
  if (len === 16 && number.startsWith("6011")) {
    return "Discover";
  }
  if (len === 15 && /^3[4|7]/.test(number)) {
    return "AMEX";
  }
  return "Unknown";
}
console.log(getIssuer(4111111111111111)); */

// #7kyu Well of Ideas - Harder Version
/* function well(x) {
  let good = 0;
  let array = x.flat(Infinity);
  for (let i = 0; i < array.length; i++) {
    if (array[i].toString().toLowerCase() === "good") {
      good++;
    }
  }
  if (good === 1 || good === 2) {
    return "Publish!";
  } else if (good > 2) {
    return "I smell a series!";
  } else {
    return "Fail!";
  }
}
console.log(well([[]])); */

// #7kyu Regexp Basics - is it a letter?
/* String.prototype.isLetter = function () {
  return this.length === 1 ? /[A-Za-z]/.test(this) : false;
};
console.log("ab".isLetter()); */

// #7kyu Multiply array values and filter non-numeric
/* function multiplyAndFilter(array, multiplier) {
  let checkArray = [];
  for (let i = 0; i < array.length; i++) {
    if (/[0-9]/.test(array[i])) {
      checkArray.push(array[i]);
    }
  }
  let result = [];
  for (let i = 0; i < checkArray.length; i++) {
    result.push(multiplier * checkArray[i]);
  }
  return result;
}
console.log(
  multiplyAndFilter(
    [1, null, function () {}, 2.5, "string", 10, undefined, {}, []],
    2
  )
); */

// #7kyu Combine objects
/* function combine(...args) {
  let object = {};
  for (let i = 0; i < args.length; i++) {
    let keys = Object.keys(args[i]);
    let values = Object.values(args[i]);
    for (let k = 0; k < keys.length; k++) {
      if (keys[k] in object) {
        object[keys[k]] += values[k];
      } else {
        object[keys[k]] = values[k];
      }
    }
  }
  return object;
}
console.log(
  combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }, { a: 5, d: 11, e: 8 })
); */

// #7kyu Multiply Word in String
/* function modifyMultiply(str, loc, num) {
  str = str.split(" ");
  return (str[loc] + "-").repeat(num).slice(0, -1);
}
console.log(modifyMultiply("This is a string", 3, 5));
 */

// #7kyu Regexp Basics - is it a vowel?
/* String.prototype.vowel = function () {
  const regex = /[aeiou]/i;
  return this.length === 1 ? regex.test(this) : false;
};
console.log("aa".vowel()); */

// #7kyu Maximum Product
/* function adjacentElementsProduct(array) {
  let result = array[0] * array[1];
  for (let i = 0; i < array.length; i++) {
    let multiple = array[i] * array[i + 1];
    if (multiple >= result) {
      result = multiple;
    }
  }
  return result;
}
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])); */

// #7kyu Get initials from person name
/* function toInitials(name) {
  let array = name.split(" ");
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += array[i + 1] ? array[i][0] + "." + " " : array[i][0] + ".";
  }
  return result;
}
console.log(toInitials("Robert C. Martin")); */

// #7kyu Broken Collatz
/* function collatz(n, count = 1) {
  if (n === 1) return count;
  n = n % 2 === 0 ? n / 2 : n * 3 + 1;
  return collatz(n, count + 1);
}
console.log(collatz(4)); */

// #7kyu Bug fix: Is this component visible?
/* class Component {
  #id;
  #parent;
  #children;
  #visibility;
  constructor(id, children) {
    this.#id = id;
    this.#children = children;
    this.#visibility = null; 
    this.#parent = null;
    this.#children.forEach(child => child.#parent = this);
  }
  set visibility(value) {
    this.#visibility = value;
  }
  get isVisible() {
    if (this.#visibility !== null) {
      return this.#visibility;
    }
    if (this.#parent) {
      return this.#parent.isVisible;
    }
    return true;
  }
  toString() {
    return this.#id;
  }
} */

// #7kyu For the sake of argument
/* function numbers(...args) {
  return args.every((value) => typeof value === "number");
}
console.log(numbers(1, 4, 3, NaN, 5)); */

// #7kyu Coding 3min: Bug in Apple
/* function sc(apple) {
  let result = [];
  for (let i = 0; i < apple.length; i++) {
    for (let k = 0; k < apple[i].length; k++) {
      if (apple[i][k] === "B") {
        result[0] = i;
        result[1] = k;
      }
    }
  }
  return result;
}
console.log(
  sc([
    ["B", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
  ])
); */

// #7kyu A (no more) bugs trilogy: Episode 3 - Make a Player
/* function Player(name, position, age, dribbling, pass, shoot) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.dribbling = dribbling;
  this.pass = pass;
  this.shoot = shoot;
}
const myPlayer = new Player("Dumbo", "Kata Coder", 1, 2, 3, 4);
console.log(myPlayer.dribbling); */

// #7kyu [BUG] XCOM-141: Koko always gets treats
/* function applyFeedback(battlescape, enemy, position) {
  const battlescapeArray = [...battlescape];
  if (battlescapeArray[position] === enemy) {
    return "DISPENSE_TREAT";
  } else {
    return "RELEASE_NITROGEN_SHOWER";
  }
}
console.log(applyFeedback("👮🚗👽🏠🚒", "👽", 2)); */

// #7kyu Turn any word into a beef taco
/* function tacofy(word) {
  word = word.toLowerCase();
  let object = {
    a: "beef",
    o: "beef",
    e: "beef",
    i: "beef",
    u: "beef",
    t: "tomato",
    l: "lettuce",
    c: "cheese",
    g: "guacamole",
    s: "salsa",
  };
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (object[word[i]]) {
      result.push(object[word[i]]);
    }
  }
  result.unshift("shell");
  result.push("shell");
  return result;
}
console.log(tacofy("aggg")); */

// #7kyu Alphabetize a list by the nth character
/* function sortIt(list, n) {
  let array = list.split(", ");
  return array
    .sort((a, b) => {
      let letterA = a[n - 1].toLowerCase();
      let letterB = b[n - 1].toLowerCase();
      if (letterA !== letterB) {
        return letterA.localeCompare(letterB);
      }
      return a.toLowerCase().localeCompare(b.toLowerCase());
    })
    .join(", ");
}
console.log(
  sortIt(
    "Cornelius Lutz, Anton Ferner, Wolfgang Mittermeyer, Oskar von Reuenthal, Helmut Rennenkampf, Fritz Josef Bittenfeld, Neidhardt Muller",
    10
  )
); */

// #7kyu Number encrypting: cypher
/* function cypher(string) {
  const object = {
    O: "0",
    I: 1,
    R: 2,
    E: 3,
    A: 4,
    S: 5,
    G: 6,
    T: 7,
    B: 8,
    o: "0",
    l: 1,
    z: 2,
    e: 3,
    a: 4,
    s: 5,
    b: 6,
    t: 7,
    g: 9,
  };
  return string.replace(/[A-Za-z]/g, (x) => (object[x] ? object[x] : x));
}
console.log(cypher("Hello World")); */

// #7kyu Array element parity
/* function solve(arr) {
  let uniqueNumbers = new Set(arr);
  for (let num of uniqueNumbers) {
    if (!uniqueNumbers.has(-num)) {
      return num;
    }
  }
}
console.log(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38])); */

// #7kyu Simple Fun #144: Distinct Digit Year
/* function distinctDigitYear(year) {
  if (year === 1987) {
    return 2013;
  } else {
    year += 1;
    while (true) {
      let yearStr = year.toString();
      if ([...new Set([...yearStr])].length === yearStr.length) {
        return year;
      }
      year += 1;
    }
  }
}
console.log(distinctDigitYear(8743)); */

// #7kyu Largest Square Inside A Circle
/* function areaLargestSquare(r) {
  return r * r + r * r;
}
console.log(areaLargestSquare(5)); */

// #7kyu Spraying trees
/* function task(w, t, c) {
  let names = {
    Monday: "James",
    Tuesday: "John",
    Wednesday: "Robert",
    Thursday: "Michael",
    Friday: "William",
  };
  return `It is ${w} today, ${
    names[w]
  }, you have to work, you must spray ${t} trees and you need ${
    t * c
  } dollars to buy liquid`;
}
console.log(task("Wednesday", 10, 2)); */

// #7kyu Noonerize Me
/* function noonerize(numbers) {
  let a = numbers[1].toString()[0] + numbers[0].toString().slice(1);
  let b = numbers[0].toString()[0] + numbers[1].toString().slice(1);
  return a - b ? Math.abs(a - b) : "invalid array";
}
console.log(noonerize([1000000, 9999999])); */

// #7kyu Mirror, mirror, on the wall...
/* function mirror(data) {
  let temp1 = [...data];
  let temp2 = [...data];
  const increase = temp1.sort((a, b) => a - b);
  const decrease = temp2.sort((a, b) => b - a);
  if (increase[increase.length - 1] === decrease[0]) {
    return [...increase, ...decrease.slice(1)];
  } else {
    return [...increase, ...decrease];
  }
}
console.log(mirror([2, 3, 1])); */

// #7kyu Collatz Conjecture Length
/* function collatz(n) {
  let output = [n];
  let i = 0;
  while (output[i] !== 1) {
    if (output[i] % 2 === 0) {
      output.push(output[i] / 2);
      i++;
    } else {
      output.push(output[i] * 3 + 1);
      i++;
    }
  }
  return output.length;
}
console.log(collatz(20)); */

// #7kyu Lorraine Wants to Win the TV Contest
/* function unscramble(scramble) {
  return wordList.filter((value) => {
    if (value.length === scramble.length) {
      let sortValue = [...value].sort().join("");
      let sortScramble = [...scramble].sort().join("");
      if (sortValue === sortScramble) {
        return value;
      }
    }
  });
}
console.log(unscramble("shi")); */

// #7kyu Simple Fun #40: Timed Reading
/* function timedReading(maxLength, text) {
  const onlyRead = text.split(/\W+/g);
  return onlyRead.filter(
    (value) => value.length > 0 && value.length <= maxLength
  ).length;
}
console.log(timedReading(4, "The Fox asked the stork, 'How is the soup?'")); */

// #7kyu Guess the Sequence
/* function sequence(x) {
  let array = [];
  for (let i = 1; i <= x; i++) {
    array.push(i);
  }
  return array.sort();
}
console.log(sequence(16)); */

// #7kyu Operations with sequence
/* var calc = function (a) {
  const firstCondition = a.map((value) => (value > 0 ? value * value : value));
  const secondCondition = firstCondition.map((value, index) =>
    (index + 1) % 3 === 0 ? value * 3 : value
  );
  const thirdCondition = secondCondition.map((value, index) =>
    (index + 1) % 5 === 0 ? value * -1 : value
  );
  return thirdCondition.reduce((curr, sum) => curr + sum, 0);
};
console.log(calc([0, 2, 1, -6, -3, 3])); */

// #7kyu Simple Maths Test
/* function numberProperty(n) {
  let result = [];
  if (n > 1) {
    let isPrime = true;
    for (let i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        isPrime = false;
        break;
      }
    }
    result[0] = isPrime;
  } else {
    result[0] = false;
  }
  if (n % 2 === 0) {
    result[1] = true;
  } else {
    result[1] = false;
  }
  if (n % 10 === 0) {
    result[2] = true;
  } else {
    result[2] = false;
  }
  return result;
}
console.log(numberProperty(7)); */

// #7kyu Adding words - Part I
/* class Arith {
  constructor(number) {
    this.number = number;
  }
  add = function (n) {
    const numbers = [
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
    const calc = numbers.indexOf(this.number) + numbers.indexOf(n);
    return numbers[calc];
  };
}
var k = new Arith("three");
console.log(k.add("seven")); */

// #7kyu Elevator Distance
/* function elevatorDistance(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] || array[i + 1] === 0) {
      sum += Math.abs(array[i] - array[i + 1]);
    }
  }
  return sum;
}
console.log(elevatorDistance([19, 0, 20, 11])); */

// #7kyu Alphabetical Sequence
/* function alphaSeq(str) {
  const alphabet = " abcdefghijklmnopqrstuvwxyz";
  const sortString = [...str.toLowerCase()].sort((a, b) => a.localeCompare(b));
  return sortString
    .map(
      (value) => value.toUpperCase() + value.repeat(alphabet.indexOf(value) - 1)
    )
    .join(",");
}
console.log(alphaSeq("ZpglnRxqenU")); */

// #7kyu Equalize the array!
/* function equalize(array) {
  let result = [];
  const firstNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    result.push(
      array[i] - firstNumber >= 0
        ? "+" + (array[i] - firstNumber).toString()
        : (array[i] - firstNumber).toString()
    );
  }
  return result;
}
console.log(equalize([10, 12, 24, 50, 0, 15, 20])); */

// #7kyu Diagonals sum
/* function sum(matrix) {
  const a = matrix.map((value, index) => value[index]);
  const b = matrix.map((value, index) => value[value.length - 1 - index]);
  return [...a, ...b].reduce((sum, curr) => sum + curr, 0);
}
console.log(
  sum([
    [-2, 5, 3, 2],
    [9, -6, 5, 1],
    [3, 2, 7, 3],
    [-1, 8, -4, 8],
  ])
); */

// #7kyu Finding Remainder Without Using '%' Operator
/* const remainder = (D, d) => {
  q = parseInt(D / d);
  p = q * d;
  return D - p;
};
console.log(remainder(3, 2)); */

// #7kyu Simple Fun #136: Missing Values
/* function missingValues(arr) {
  let valueCount = {};
  for (const key in arr) {
    if (arr[key] in valueCount) {
      valueCount[arr[key]]++;
    } else {
      valueCount[arr[key]] = 1;
    }
  }
  let sum = 1;
  for (const key in valueCount) {
    if (valueCount[key] === 2) {
      sum *= key;
    } else if (valueCount[key] === 1) {
      sum *= key ** 2;
    }
  }
  return sum;
}
console.log(missingValues([1, 1, 1, 2, 2, 3])); */

// #7kyu Not all but sometimes all
/* function remove(str, what) {
  for (const key in what) {
    for (let i = 0; i < what[key]; i++) {
      str = str.replace(key, "");
    }
  }
  return str;
}
console.log(remove("this is a string", { t: 1, i: 2 })); */

// #7kyu Hungarian Vowel Harmony (easy)
/* function dative(word) {
  const frontVowel = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"];
  const backVowel = ["a", "á", "o", "ó", "u", "ú"];
  for (let i = word.length; i >= 0; i--) {
    if (frontVowel.includes(word[i])) {
      return word + "nek";
    } else if (backVowel.includes(word[i])) {
      return word + "nak";
    }
  }
}
console.log(dative("őr")); */

// #7kyu Upturn Numeral Triangle
/* function pattern(n) {
  let output = [];
  let k = n;
  let j = 1;
  for (let i = 1; i < n + 1; i++) {
    let temp = i.toString().split("")[i.toString().length - 1];
    output.push(" ".repeat(j - 1) + (" " + temp).repeat(k));
    k--;
    j++;
  }
  return output.join("\n");
}
console.log(pattern(16)); */

// #7kyu Simple Fun #270: Evil Code Medal
/* function evilCodeMedal(userTime, gold, silver, bronze) {
  userTime = +userTime.split(":").join("");
  gold = +gold.split(":").join("");
  silver = +silver.split(":").join("");
  bronze = +bronze.split(":").join("");
  if (userTime < gold) {
    return "Gold";
  } else if (userTime >= gold && userTime < silver) {
    return "Silver";
  } else if (userTime >= silver && userTime < bronze) {
    return "Bronze";
  } else {
    return "None";
  }
}
console.log(evilCodeMedal("03:15:00", "03:15:00", "03:15:01", "03:15:02")); */

// #7kyu Palindromes Here and There
/* function convertPalindromes(numbers) {
  return numbers.map((value) => {
    let string = value.toString().split("").reverse().join("");
    return Number(value == string);
  });
}
console.log(convertPalindromes([101, 2, 85, 33, 14014])); */

// #7kyu Nice Array
/* function isNice(arr) {
  if (arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!(arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1))) {
      return false;
    }
  }
  return true;
}
console.log(isNice([])); */

// #7kyu Reimplement Multiplication Part 1
/* function mul(a, b) {
  let sum = 0;
  if (a === 0 || b === 0) {
    return sum;
  }
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum;
}
console.log(mul(5, 5)); */

// #7kyu Say hello!
/* function greet(name) {
  if (name) {
    return "hello " + name + "!";
  }
  return null;
}
console.log(greet("Niks")); */

// #7kyu Coding Meetup #14 - Higher-Order Functions Series - Order the food
/* function orderFood(list) {
  let result = {};
  for (let i = 0; i < list.length; i++) {
    if (list[i].meal in result) {
      result[list[i].meal]++;
    } else {
      result[list[i].meal] = 1;
    }
  }
  return result;
}
console.log(
  orderFood([
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "C",
      meal: "vegetarian",
    },
    {
      firstName: "Anna",
      lastName: "R.",
      country: "Liechtenstein",
      continent: "Europe",
      age: 52,
      language: "JavaScript",
      meal: "standard",
    },
    {
      firstName: "Ramona",
      lastName: "R.",
      country: "Paraguay",
      continent: "Americas",
      age: 29,
      language: "Ruby",
      meal: "vegan",
    },
    {
      firstName: "George",
      lastName: "B.",
      country: "England",
      continent: "Europe",
      age: 81,
      language: "C",
      meal: "vegetarian",
    },
  ])
); */

// #7kyu Check whether a number is valid in a given numeral system
/* function validateBase(num, base) {
  const validChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, base);
  return [...num].every((char) => validChars.includes(char.toUpperCase()));
}
console.log(validateBase("7623", 8)); */

// #7kyu Gryffindor vs Slytherin Quidditch Game
/* function gameWinners(gryffindor, slytherin) {
  if (gryffindor[1] === "yes") {
    gryffindor[0] = gryffindor[0] + 150;
  }
  if (slytherin[1] === "yes") {
    slytherin[0] = slytherin[0] + 150;
  }
  if (gryffindor[0] > slytherin[0]) {
    return "Gryffindor wins!";
  } else if (slytherin[0] > gryffindor[0]) {
    return "Slytherin wins!";
  } else {
    return "It's a draw!";
  }
}
console.log(gameWinners([350, "no"], [250, "yes"])); */

// #7kyu Simple string reversal
/* function solve(str) {
  let result = [];
  let space = [];
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") {
      space.push(i);
    } else {
      result.push(str[i]);
    }
  }
  space = space.sort((a, b) => a - b);
  for (let i = 0; i < space.length; i++) {
    result.splice(space[i], 0, " ");
  }
  return result.join("");
}
console.log(solve("your code rocks")); */

// #7kyu Coding 3min : A*B=C
/* function findAB(numbers, c) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let k = i + 1; k < numbers.length; k++) {
      if (numbers[i] * numbers[k] === c) {
        result.push(numbers[i], numbers[k]);
        return result;
      }
    }
  }
  return null;
}
console.log(findAB([1, 2, 3], 6)); */

// #7kyu "Center yourself", says the monk.
/* function center(strng, width, fill = " ") {
  if (strng.length >= width) {
    return strng;
  }
  const padding = width - strng.length;
  const rightPadding = Math.floor(padding / 2);
  const leftPadding = padding - rightPadding;
  return fill.repeat(leftPadding) + strng + fill.repeat(rightPadding);
}
console.log(center("abc", 10, "_")); */

// #7kyu Is this a triangle?
/* function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
console.log(isTriangle(1, 2, 3)); */

// #7kyu Digits explosion
/* function explode(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const digit = parseInt(s[i], 10);
    if (!isNaN(digit)) {
      result += s[i].repeat(digit);
    }
  }
  return result;
}
console.log(explode("3120")); */

// #7kyu Basic Calculator
/* function calculate(num1, operation, num2) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : null;
    default:
      return null;
  }
}
console.log(calculate(2, "+", 3)); */

// #7kyu Sum of Odd Cubed Numbers
/* function cubeOdd(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || isNaN(arr[i])) {
      return undefined;
    }
    if (arr[i] % 2) {
      sum += arr[i] ** 3;
    }
  }
  return sum;
}
console.log(cubeOdd([1, 2, 3, 4])); */

// #7kyu Return a string's even characters.
/* function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  }
  let result = [];
  for (let i = 1; i < string.length; i += 2) {
    result.push(string[i]);
  }
  return result;
}
console.log(evenChars("abcdefg")); */

// #7kyu Get decimal part of the given number
/* function getDecimal(n) {
  return Number("0." + n.toString().split(".")[1]) || 0;
}
console.log(getDecimal(10)); */

// #7kyu Form The Minimum
/* function minValue(values) {
  const uniqueValues = [...new Set(values)];
  uniqueValues.sort((a, b) => a - b);
  return Number(uniqueValues.join(""));
}
console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7])); */

// #7kyu Who's Online?
/* const whosOnline = (friends) => {
  const result = {
    online: [],
    offline: [],
    away: [],
  };
  friends.forEach((friend) => {
    if (friend.status === "online" && friend.lastActivity > 10) {
      result["away"].push(friend.username);
    } else if (friend.status === "online") {
      result["online"].push(friend.username);
    } else if (friend.status === "offline") {
      result["offline"].push(friend.username);
    }
  });
  Object.keys(result).forEach((key) => {
    if (result[key].length === 0) {
      delete result[key];
    }
  });
  return result;
};
console.log(
  whosOnline([
    {
      username: "Lucy",
      status: "offline",
      lastActivity: 22,
    },
    {
      username: "Bob",
      status: "online",
      lastActivity: 104,
    },
  ])
); */

// #7kyu Use map() to double the values in an array
/* function double(array) {
  return array.map((value) => value * 2);
}
console.log(double([1, 2, 3])); */

// #7kyu Every possible sum of two digits
/* function digits(num) {
  let result = [];
  const strNum = num.toString();
  for (let i = 0; i < strNum.length; i++) {
    for (let j = i + 1; j < strNum.length; j++) {
      const sum = parseInt(strNum[i]) + parseInt(strNum[j]);
      result.push(sum);
    }
  }
  return result;
}
console.log(digits(12345)); */

// #7kyu Array Appender
/* function appendArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(appendArrays([["x", "x"], "B"], ["c", "D"])); */

// #7kyu Basic method
/* Array.prototype.max = function () {
  if (this.length === 0) {
    return null;
  }
  let max = Number(this[0]);
  if (isNaN(max)) return NaN;
  for (let i = 1; i < this.length; i++) {
    let num = Number(this[i]);
    if (isNaN(num)) return NaN;
    if (num > max) {
      max = num;
    }
  }
  return max;
};
console.log([2, "5", 1, 3].max()); */

// #7kyu Pairs of integers from m to n
/* function generatePairs(m, n) {
  let result = [];
  for (let i = m; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      result.push([i, j]);
    }
  }
  return result;
}
console.log(generatePairs(2, 4)); */

// #7kyu Complete The Pattern #4
/* function pattern(n) {
  var output = "";
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      output += j;
    }
    if (i < n) {
      output += "\n";
    }
  }
  return output;
}
console.log(pattern(6)); */
