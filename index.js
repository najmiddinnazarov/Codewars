// #7kyu Vowel Count
// function getCount(str) {
//   const vowel = "aeiou";
//   let count = 0;
//   for (const i of str) {
//     if (vowel.includes(i)) count++;
//   }
//   return count;
// }

// #6kyu Who likes it?
// function likes(names) {
//   if (names.length == 1) {
//     return `${names} likes this`;
//   } else if (names.length == 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   } else if (names.length == 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else if (names.length > 3) {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   } else {
//     return "no one likes this";
//   }
// }

// #7kyu Ordered Count of Characters
// const orderedCount = function (text) {
//   let obj = {};
//   for (const i of text) {
//     if (i in obj) obj[i]++;
//     else obj[i] = 1;
//   }
//   return Object.entries(obj);
// };
// console.log(orderedCount("233312"));

// #7kyu Squares sequence
// function squares(x, n) {
//   let result = [];
//   n > 0 && n !== undefined ? result.push(x) : [];
//   for (let i = 1; i < n; i++) {
//     result.push((x = x ** 2));
//   }
//   return result;
// }
// console.log(squares(2, -1));

// #8kyu Get Nth Even Number
// const nthEven = (n) => n * 2 - 2;
// console.log(nthEven(3));

// #7kyu shorter concat [reverse longer]
// function shorter_reverse_longer(a, b) {
//   let reverseLetterA = a.split("").reverse().join("");
//   let reverseLetterB = b.split("").reverse().join("");
//   if (a.length >= b.length) {
//     return `${b}${reverseLetterA}${b}`;
//   } else {
//     return `${a}${reverseLetterB}${a}`;
//   }
// }
// console.log(shorter_reverse_longer("fghi", "abcde"));

// #7kyu Find Count of Most Frequent Item in an Array
// function mostFrequentItemCount(collection) {
//   let res = [];
//   let obj = {};
//   if (collection.length !== 0) {
//     for (const i of collection) {
//       if (i in obj) obj[i]++;
//       else obj[i] = 1;
//     }
//   } else return 0;
//   for (const key in obj) {
//     res.push(obj[key]);
//   }
//   return Math.max(...res);
// }
// console.log(mostFrequentItemCount([]));

// #6kyu Convert string to camel case
// function toCamelCase(str) {
//   let arr = str.split("");
//   for (const i of arr) {
//     if (i == "_") {
//       let index = arr.indexOf("_");
//       arr.splice(index, 2, arr[index + 1].toUpperCase());
//     } else if (i == "-") {
//       let index = arr.indexOf("-");
//       arr.splice(index, 2, arr[index + 1].toUpperCase());
//     }
//   }
//   return arr.join("");
// }
// console.log(toCamelCase("A-B-C"));

// #7kyu Debug Sum of Digits of a Number
// function getSumOfDigits(integer) {
//   var sum = [];
//   var digits = Math.trunc(integer).toString();
//   for (var ix = 0; ix < digits.length; ix++) {
//     sum.push(digits[ix]);
//   }
//   return eval(sum.join("+"));
// }
// console.log(getSumOfDigits(223));

// 7kyu V A P O R C O D E
// function vaporcode(string) {
//   let str = string.split(" ").join("").toUpperCase();
//   return str.split("").join("  ");
// }
// console.log(vaporcode("Why isnt my code working"));

// #6kyu Bit Counting
// var countBits = function (n) {
//   let binary = n.toString(2);
//   let count = 0;
//   for (const i of binary) {
//     if (i > 0) count++;
//   }
//   return count;
// };
// console.log(countBits(1234));

// #7kyu Get the Middle Character
// function getMiddle(s) {
//   if (s.length % 2 === 0) {
//     return s
//       .split("")
//       .splice(s.length / 2 - 1, 2)
//       .join("");
//   } else {
//     return s
//       .split("")
//       .splice(Math.floor(s.length / 2), 1)
//       .join("");
//   }
// }
// console.log(getMiddle("A"));

// #7kyu Mumbling
// function accum(s) {
//   let str = s.toLowerCase();
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result += str[i].toUpperCase();
//     result += `${str[i].repeat(i)}-`;
//   }
//   return result.substring(-1, result.length - 1);
// }
// console.log(accum("abcd"));

// #7kyu Shortest Word
// function findShort(s) {
//   let str = s.toLowerCase();
//   let obj = {};
//   let arr = str.split(" ");
//   let uniqueChars = arr.filter((element, index) => {
//     return arr.indexOf(element) === index;
//   });
//   for (const i of uniqueChars) {
//     for (const j of i) {
//       if (i in obj) obj[i]++;
//       else obj[i] = 1;
//     }
//   }
//   return Math.min(...Object.values(obj));
// }
// console.log(
//   findShort(
//     "Monero Steem LiteCoin BTC Dogecoin Bitcoin Classic Dash Ethereum 21inc Bitcoin Classic Lisk BTC LiteCoin ProofOfStake Dash"
//   )
// );

// #7kyu Friend or Foe?
// function friend(friends) {
//   return friends.filter((value) => value.length == 4);
// }
// console.log(friend(["Love", "Your", "Face", "1"]));

// #7kyu Binary Addition
// function addBinary(a, b) {
//   return (a + b).toString(2);
// }
// console.log(addBinary(1, 1));

// #7kyu Ones and Zeros
// const binaryArrayToNumber = (arr) => {
//   return parseInt(arr.join(""), 2);
// };
// console.log(binaryArrayToNumber([0, 1, 0, 1, 1]));

// #6kyu Encrypt this!
// var encryptThis = function (text) {
//   let result = [];
//   let array = text.split(" ");
//   for (const i of array) {
//     let newArr = i.split("");
//     if (newArr.length === 1) result.push(newArr.join("").codePointAt(0));
//     if (newArr.length > 1) {
//       newArr.splice(newArr[0], 1, newArr.join("").codePointAt(0));
//       let letter = newArr.pop();
//       newArr.push(newArr[1]);
//       newArr.splice(1, 1, letter);
//       result.push(newArr.join(""));
//     }
//   }
//   return result.join(" ");
// };
// console.log(encryptThis("A wise old owl lived in an oak"));

// #8kyu strCount
// function strCount(str,letter) {
//     let count = 0;
//     for (const i of str) {
//         if (i === letter) count++;
//     }
//     return count;
// }
// console.log(strCount('Hello','H'));

// #8kyu String to Number
// const stringToNumber = function(str) {
//     return +str;
// }
// console.log(stringToNumber("1234"));

// #8kyu Make negative number
// function makeNegative(num) {
//     return num <= 0 ? num : -num;
// }
// console.log(makeNegative(0.12));

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
// let obj = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
// };
// function averageString(str) {
//   let arr = str.split(" ");
//   let res = arr.every((value) => value in obj);
//   if (!res) return "n/a";
//   let num =
//     Array.from(arr, (x) => obj[x]).reduce((a, c) => a + c, 0) / arr.length;
//   for (const key in obj) {
//     if (obj[key] === parseInt(num)) return key;
//   }
// }
// console.log(averageString("five four two"));

// #6kyu Maximum and minimum
// function max(...max) {
//   let arr = max.flat(Infinity);
//   if (arr.length !== 0) {
//     arr.sort((a, b) => a - b);
//     return +arr[arr.length - 1];
//   } else return 0;
// }

// function min(...min) {
//   let arr = min.flat(Infinity);
//   if (arr.length !== 0) {
//     arr.sort((a, b) => a - b);
//     return isNaN(+arr[arr.length - 1]) ? NaN : +arr[0];
//   } else return 0;
// }
// console.log(max(1, 2, [3, ["4r"]]));
// console.log(min(1, 2, [3, ["4r"]]));

// #5kyu The Hashtag Generator
// function generateHashtag(str) {
//   let strLength = str.split(" ").join("").length;
//   if (strLength < 140 && strLength) {
//     let arr = str.split(" ");
//     let result = [];
//     for (const i of arr) {
//       result.push(i.replace(i.charAt(0), i.charAt(0).toUpperCase()));
//     }
//     result.splice(0, 0, "#");
//     return result.join("");
//   } else return false;
// }
// console.log(generateHashtag(""));

// #7kyu Hex Hash Sum
// function hexHash(code) {
//   let str = "";
//   for (let i = 0; i < code.length; i++) {
//     str += code.charCodeAt(i).toString(16);
//   }
//   let result = str.split("").filter((value) => !isNaN(value));
//   return eval(result.join("+")) == undefined ? 0 : eval(result.join("+"));
// }
// console.log(hexHash(""));

// #8kyu Return to Sanity
// function mystery() {
//   var results = { sanity: "Hello" };
//   return results;
// }
// console.log(mystery());

// #6kyu Find The Parity Outlier
// function findOutlier(integers) {
//   let even = 0;
//   let odd = 0;
//   for (const i of integers) {
//     if (i % 2 === 0) even++;
//     else odd++;
//   }
//   for (const j of integers) {
//     if (even < odd) {
//       if (j % 2 === 0) return j;
//     } else if (even > odd) {
//       if (j % 2 !== 0) return j;
//     }
//   }
// }
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

// #6kyu Counting Duplicates
// function duplicateCount(text) {
//   const obj = {};
//   let count = 0;
//   for (const i of text.toLowerCase()) {
//     if (i in obj) obj[i]++;
//     else obj[i] = 1;
//   }
//   for (const key in obj) {
//     if (obj[key] > 1) count++;
//   }
//   return count;
// }
// console.log(duplicateCount("abcdefghABCDABCABA"));

// #6kyu Remove the parentheses
// function removeParentheses(s) {
//   let first = s.indexOf("(");
//   let second = s.lastIndexOf(")") + 1;
//   let arr = s.split(" ");
//   return arr;
// }
// console.log(removeParentheses("(first group) (second group) (third group)")); // Error

// #5kyu Simple Pig Latin
// function pigIt(str) {
//   let array = str.split(" ");
//   let result = [];
//   for (const i of array) {
//     if (!i.match(/^[.,:!?]/)) {
// let first = i.charAt(0) + "ay";
// let second = i.slice(1);
//       result.push(i.slice(1) + (i.charAt(0) + "ay"));
//     } else result.push(i);
//   }
//   return result.join(" ");
// }
// console.log(pigIt("Hello world !"));

// #5kyu Moving Zeros To The End
// function moveZeros(arr) {
//   let result = [];
//   let array = [];
//   arr.map((value) => {
//     if (value !== 0) result.push(value);
//     else array.push(value);
//   });
//   return result.concat(array);
// }
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// #5kyu Human Readable Time
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
// function humanReadable(seconds) {
//   let hour = 0;
//   let min = 0;
//   let sec = 0;
//   if (seconds > 0 && seconds <= 59) sec = seconds;
//   if (seconds > 59 && seconds <= 119) {
//     min++;
//     sec = seconds - 60;
//   }
//   if (seconds > 119) {
//     min = parseInt(seconds / 2);
//     sec = seconds % 2;
//   }
//   let result = `${hour}:${min}:${sec}`;
//   return result;
// }
// console.log(humanReadable(129)); // Error

// #8kyu Vowel remover
// function shortcut(string) {
//   let res = "";
//   for (const i of string) {
//     if (!i.match(/[aeiou]/gi)) res += i;
//   }
//   return res;
// }
// console.log(shortcut("hello"));

// #8kyu Training JS #8: Conditional statement--switch
// function howManydays(month) {
//   let days;
//   switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       days = 31;
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       days = 30;
//       break;
//     case 2:
//       days = 28;
//       break;
//     default:
//       return "Days not found!";
//   }
//   return days;
// }
// console.log(howManydays(12));

// #8kyu Training JS #9: loop statement --while and do..while
// function padIt(str, n) {
//   let start = 0;
//   while (start < n) {
//     if (start % 2 === 0) str = `*${str}`;
//     else str = `${str}*`;
//     start++;
//   }
//   return str;
// }
// console.log(padIt("a", 1));

// #8kyu Training JS #10: loop statement --for
// function pickIt(arr) {
//   var odd = [],
//     even = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) even.push(arr[i]);
//     else odd.push(arr[i]);
//   }

//   return [odd, even];
// }

// console.log(pickIt([1, 2, 3]));

// #8kyu String Templates - Bug Fixing #5
// function buildString(...template) {
//   return `I like ${template.join(", ")}!`;
// }

// #7kyu Flatten
// var flatten = function (array) {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     arr.push(...array[i]);
//   }
//   return arr;
// };
// console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]));
// [3, 4, 5, [9, 9, 9], "a,b,c"]

// var flatten = function (array) {
//   let arr = [];
//   return arr.concat(array).flat(1);
// };
// console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]));
// [3, 4, 5, [9, 9, 9], "a,b,c"]

// #7kyu Fizz Buzz
// function fizzbuzz(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) arr.push("FizzBuzz");
//     else if (i % 3 === 0) arr.push("Fizz");
//     else if (i % 5 === 0) arr.push("Buzz");
//     else arr.push(i);
//   }
//   return arr;
// }
// console.log(fizzbuzz(15));

// #8kyu Training JS #12: loop statement --for..in and for..of
// function giveMeFive(obj) {
//   let result = [];
//   for (const key in obj) {
//     if (key.length == 5) result.push(key);
//     if (obj[key].length == 5) result.push(obj[key]);
//   }
//   return result;
// }

// console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" }));

// #8kyu Training JS #14: Methods of Number object--toString() and toLocaleString()
// function colorOf(r, g, b) {
//   return `#${r.toString(16).padStart(2, "0")}${g
//     .toString(16)e
//     .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
// }
// console.log(colorOf(0, 111, 0));

// #8kyu Add Length
// function addLength(str) {
//   let arr = str.split(" ");
//   return Array.from(arr, (x) => `${x} ${x.length}`);
// }
// console.log(addLength("apple ban"));

// #7kyu Simple Fun #176: Reverse Letter
// function reverseLetter(str) {
//   let arr = [];
//   for (const i of str) {
//     if (i.toLowerCase() !== i.toUpperCase()) arr.push(i);
//   }
//   return arr.reverse().join("");
// }
// console.log(reverseLetter("ultr53o?n"));

// #7kyu String ends with?
// function solution(str, ending) {
//   return str.endsWith(ending);
// }
// console.log(solution("abcde", "de"));

// #6kyu Split Strings
// function solution(str) {
//   let arr = [];
//   let k = 2;
//   for (let i = 0; i < str.length; i += 2) {
//     arr.push(str.slice(i, k));
//     k += 2;
//   }
//   arr.forEach((x) => {
//     if (x.length == 1) {
//       arr.pop();
//       arr.push(`${x}_`);
//     }
//   });
//   return arr;
// }
// console.log(solution("abcdefg"));

// #7kyu MinMinMax
// function minMinMax(array) {
//   let newArr = array;
//   let arr = [];
//   array.sort((a, b) => a - b);
//   arr.push(array[0]);
//   function rec(x) {
//     if (!newArr.includes(x)) return x;
//     else return rec(x + 1);
//   }
//   arr.push(rec(arr[0]), array[array.length - 1]);
//   return arr;
// }
// console.log(minMinMax([1, 3, -3, -2, 8, -1]));

// #7kyu Count consonants
// function consonantCount(str) {
//   const vowel = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (const i of str) {
//     if (!i.match(/^[^a-zA-Z]+$/) && !vowel.includes(i)) count++;
//   }
//   return count;
// }
// console.log(consonantCount("h^$&^#$&^elLo world"));

// #8kyu Hex to Decimal
// function hexToDec(hexString) {
//   return parseInt(hexString, 16);
// }
// console.log(hexToDec("-C"));

// #7kyu How Many Unique Consonants?
// function countConsonants(str) {
//   let dublicate = [...new Set(str.toLowerCase())];
//   console.log(dublicate);
//   return (
//     dublicate.length -
//     (dublicate.join("").match(/[a, e, i, o, u,0-9,' ']/gi)?.length == null
//       ? 0
//       : dublicate.join("").match(/[a, e, i, o, u,0-9,!]/gi).length)
//   );
// }
// console.log(countConsonants("Count my unique consonants!!"));
