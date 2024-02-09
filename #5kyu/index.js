// #5kyu The Hashtag Generator
/* function generateHashtag(str) {
  let strLength = str.split(" ").join("").length;
  if (strLength < 140 && strLength) {
    let arr = str.split(" ");
    let result = [];
    for (const i of arr) {
      result.push(i.replace(i.charAt(0), i.charAt(0).toUpperCase()));
    }
    result.splice(0, 0, "#");
    return result.join("");
  } else return false;
}
console.log(generateHashtag("")); */

// #5kyu Simple Pig Latin
/* function pigIt(str) {
  let array = str.split(" ");
  let result = [];
  for (const i of array) {
    if (!i.match(/^[.,:!?]/)) {
      let first = i.charAt(0) + "ay";
      let second = i.slice(1);
      result.push(i.slice(1) + (i.charAt(0) + "ay"));
    } else result.push(i);
  }
  return result.join(" ");
}
console.log(pigIt("Hello world !"));
 */

// #5kyu Moving Zeros To The End
/* function moveZeros(arr) {
  let result = [];
  let array = [];
  arr.map((value) => {
    if (value !== 0) result.push(value);
    else array.push(value);
  });
  return result.concat(array);
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
 */

// #5kyu Rot13
/* function rot13(message) {
  return message.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(
      letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? 13 : -13)
    )
  );
} */

// #5kyu Convert PascalCase string into snake_case
/* function toUnderscore(string) {
  let str = "";
  if (!isNaN(string) || typeof string === "number") return (str += string);
  for (const i of string) {
    if (i === i.toUpperCase() && i.toLowerCase() !== i.toUpperCase())
      str += `_${i}`;
    else str += i;
  }
  return str.slice(1).toLowerCase();
}
console.log(toUnderscore(1));
 */

// #5kyu Convert A Hex String To RGB
/* function hexStringToRGB(hexString) {
  let removeFirstLetter = hexString.slice(1);
  let arr = [];
  for (let i = 0; i < removeFirstLetter.length; i += 2) {
    arr.push([...removeFirstLetter].splice(i, 2).join(""));
  }
  let hexToString = arr.map((vl) => parseInt(vl, 16));
  return {
    r: hexToString[0],
    g: hexToString[1],
    b: hexToString[2],
  };
}
console.log(hexStringToRGB("#FF9933")); */

// #5kyu 1's, 0's and wildcards
/* const possibilities = (str) => {
  const result = [];
  const placeholderRegExp = /(\?)/;
  const zeros = str.replace(placeholderRegExp, "0");
  const ones = str.replace(placeholderRegExp, "1");
  if (zeros.includes("?")) {
    result.push(possibilities(zeros), possibilities(ones));
    return result.flat();
  }
  if (!zeros.includes("?")) {
    result.push(zeros, ones);
    return result;
  }
};
console.log(possibilities("101?"));
 */

// #5kyu RGB To Hex Conversion
/* function rgb(r, g, b) {
  let x, y, z;
  if (r <= 0) r = "0".repeat(2);
  if (g <= 0) g = "0".repeat(2);
  if (b <= 0) b = "0".repeat(2);
  if (r > 255) r = 255;
  if (g > 255) g = 255;
  if (b > 255) b = 255;
  r.toString(16).length === 1
    ? (x = `0${r.toString(16)}`)
    : (x = r.toString(16));
  g.toString(16).length === 1
    ? (y = `0${g.toString(16)}`)
    : (y = g.toString(16));
  b.toString(16).length === 1
    ? (z = `0${b.toString(16)}`)
    : (z = b.toString(16));
  return `${x}${y}${z}`.toUpperCase();
}
console.log(rgb(10, 294, 249)); */

// #5kyu Not very secure
/* function alphanumeric(string) {
  return string
    ? string.length === string.replace(/[^a-z^0-9]/gi, "").length
    : false;
}
console.log("Mazinkaiser");
 */

// #5kyu Greed is Good
/* function score(dice) {
  let score = 0;
  let counts = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i] - 1]++;
  }
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] >= 3) {
      if (i === 0) {
        score += 1000;
      } else {
        score += (i + 1) * 100;
      }
      counts[i] -= 3;
    }
    if (i === 0) {
      score += counts[i] * 100;
    } else if (i === 4) {
      score += counts[i] * 50;
    }
  }
  return score;
}
console.log(score([2, 3, 4, 6, 2])); */

// #5kyu First non-repeating character
/* function firstNonRepeatingLetter(s) {
  if (s.length === 1) return s;
  for (let i = 0; i < s.length; i++) {
    if (
      !(s.slice(0, i).toLowerCase() + s.slice(i + 1).toLowerCase()).includes(
        s[i].toLowerCase()
      )
    ) {
      return s[i];
    }
  }
  return "";
}
console.log(firstNonRepeatingLetter("moonmen"));
 */

// #5kyu flatten()
/* function flatten(...args) {
  return args.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(...curr) : curr),
    []
  );
}
console.log(flatten([[[[[1]], 2], 3]]));
 */

