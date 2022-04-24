// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
//  return str
//  .split('')
// .reverse('')
// .join('');
/////////////////////////////////////////////// ** decreasing Array **

// let revStr = ''; 
// for (let i = str.length - 1; i >= 0; i--) {
//    revStr+= str[i];
//   }
//   return revStr;
// }
  //////////////////////////////  // **increment Array**
// let revStr = ''; 
// for (let i = 0; i <= str.length-1; i++) {
// revStr = str[i] + revStr;
// }
// return revStr;
// }
////////////////////////////////////////////**CHAR***/////////////////////
// let revStr = ''; 
// for (let char of str) {
// revStr = char + revStr;
// }
// return revStr;
// }
///////////////////////////////////***FOR EACH ES6**////////////////////
// let revStr = '';
// str.split('').forEach(char => revStr = char + revStr);
// return revStr;
}


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {   
//  const revStr = str.split('').reverse().join('');
//  return str === revStr;
/////////////////////////////////////////////// ** decreasing Array **
// let revStr = ''; 
// for (let i = str.length - 1; i >= 0; i--) {
//   revStr+= str[i]
// };
//   if (str !== revStr) {
//     return false;
//   } 
//   else {
//     return true;
//   }
}

// const output = isPalindrome('racecar');


//*** */ CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  // const revStr = int.toString().split('').reverse().join('');
  // return parseInt(revStr) * Math.sign(int);
}

// const output = reverseInt(-456);

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  // const words = str.split(' ');
  // const capitalizedWords = words.map(word =>  word[0].toUpperCase() + word.slice(1));
  //  return capitalizedWords.join(' ');
}


// const output = capitalizeLetters('i love javascript');

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  // first we need to create an object to store the characters and their count
  charMap = {};
  let maxNum = 0;
  let maxChar = '';
  // loop through the string
  str.split('').forEach(char => {
    // if the character is not in the object, add it
    if (!charMap[char]) {
      charMap[char] = 1;
    }
    // if the character is in the object, increment the count
    else {
      charMap[char]++;
    }
  });
  // return the character with the highest count
  for(let char in charMap) {
    // if (charMap[char] > 1) {
    //   return char;
    // }
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

const output = maxCharacter('javascript');


// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}






// Call Function
// const output = isPalindrome('hello');

console.log(output);
