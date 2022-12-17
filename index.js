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
//https://www.codewars.com/kata/5966847f4025872c7d00015b/train/javascript
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
//   let res = [];
//   let arr = str.split(" ");
//   if (arr.length > 1) {
//     for (const key in obj) {
//       for (const i of arr) {
//         if (key == i) res.push(obj[key]);
//       }
//     }
//   } else {
//     return "n/a";
//   }
//   let result = Math.floor(eval(res.join("+")) / arr.length);
//   for (const value in obj) {
//     if (result == obj[value]) return value;
//   }
// }
// console.log(averageString(""));

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
