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
