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
