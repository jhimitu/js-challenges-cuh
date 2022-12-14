/* ========== *
* Challenge 1 ✅ *
Replace the blank underscores inside the console logs 
with the data type (i.e. 'string') you think each value will be. (Leave the quotes)
* =========== */

//Uncomment the lines below to test your code
// console.log(typeof 7.0 === "number")
// console.log(typeof 22 === "number")
// console.log(typeof true === "boolean")

// var myVar;
// console.log(typeof myVar === "undefined")

myVar = "Jhia"
// console.log(typeof myVar === "string")

//Comment them back out with two forward slashes at the beginning once you have finished


/* ========== *
* Challenge 2 ✅ *
Create a functon buildSentence that takes three words (strings) and adds them together 
and console.logs the whole sentence (string) complete with capitalization and punctuation.
* =========== */


function buildSentence(word1, word2, word3) {
  let capitalizedWord = word1[0].toUpperCase() + word1.slice(1);
  console.log(`${capitalizedWord} ${word2} ${word3}`);

}

// buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
// buildSentence("we're", "number", "1") //=> "We're number 1."


/* ========== *
* Challenge 3 ✅ *
Create a function lastLetter that takes a word (string) and console.logs the last character/letter of that word.
Hint: Remember that each character/letter in a string has an index position that you can access with brackets: []
* =========== */


function lastLetter(word) {
  console.log(word[word.length - 1]);
}

//Uncomment the lines below to test your code
// lastLetter("hello") //=> "o"
// lastLetter("goodbye!") //=> "!"
// lastLetter("ZeltoiD") //=> "D"


/* ========== *
* Challenge 4 ✅ *
Create a function buildGreeting that takes a time (integer) and a name (string) and print a greeting based on the following rules:
If time is between 0 (inclusive) and 11 (inclusive): "Good Morning, <name>!
If time is between 12 (inclusive) and 16 (inclusive): "Good Afternoon, <name>!
If time is between 17 (inclusive) and 23 (inclusive): "Good Evening, <name>!
If time is anything else: "That's not a real time, <name>. Maybe you need some sleep!
* =========== */


function buildGreeting(time, name) {
  if (time >= 0 && time <= 11) {
    console.log(`Good Morning, ${name}!`)
  } else if (time >= 12 && time <= 16) {
    console.log(`Good Afternoon, ${name}!`)
  } else if (time >= 17 && time <= 23) {
    console.log(`Good Evening, ${name}!`)
  } else {
    console.log(`That's not a real time, ${name}. Maybe you need some sleep!`)
  }
}


// buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
// buildGreeting(12, "John") //=> "Good Afternoon, John!"
// buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
// buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"


/* ========== *
* Challenge 5 ✅ *
indexOf is a function that you can call on a string (string1) and accepts another string (string2) as an argument.
It searches through string1 from left to right checking each character to see if it can find string2.
If it finds string2 it returns the index position of the FIRST character that matches string2. If it cannot find string2 it returns negative one: -1.
Enter the index position you think indexOf will return for each below.
* =========== */


// console.log( "CodeSmith".indexOf("o") === 1)
// console.log( "hello".indexOf("ll") === 2)
// console.log( "zebra".indexOf("z") === 0)
// console.log( "banana".indexOf("B") === -1)


/* ========== *
* Challenge 6 ✅ *
Create a function letterExists that takes a word (string) and a 
character (string), and console.logs whether that letter can be found inside that word.
* =========== */


function letterExists(word, letter) {
  console.log(word.includes(letter));
}

// letterExists("superman", "e") //=> true
// letterExists("starship", "S") //=> false
// letterExists("th1s", "1") //=> true
// letterExists("he!lo", "!") //=> true


/* =========== *
* Challenge 7 ❌ *
Create a function isPrime that console.logs a boolean indicating if `number` is prime or not.
* ============ */


function isPrime(number) {
  // your code here...

}

// isPrime(-7): // => false
// isPrime(2); // => true
// isPrime(11); // => true
// isPrime(15); // => false


/* ========== *
* Challenge 8 ✅ *
Create a function range that console.logs all numbers between 'start' and 'end' in sequential order.
* =========== */


function range(start, end) {
  for (let i = start; i < end + 1; i++) {
    console.log(i);
  }

}

//Uncomment the lines below to test your code
// range(1,4) //=> 1, 2, 3, 4
// range(4,2) //=>


/* =========== *
* Challenge 9 ✅ *
Create a function myIndexOf that takes an array and an element and console.logs the index of the element in the array, or -1 if it doesn't exist.
Assume the `ele` will be a primitive data type (no arrays or objects).
DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!
* ============ */


function myIndexOf(array, ele){
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === ele) {
      index = i;
    }
  }

  console.log(index);

}

// myIndexOf([1, 2, 3, 4, 5], 5) //=> 4
// myIndexOf(["a", "b", "c"], "a") //=> 0
// myIndexOf(["a", "b", "c"], "d") //=> -1


/* =========== *
* Challenge 10 ✅ *
Create a function unique that console.logs an array where all the 
duplicates of the input array have been removed; in other words, 
every element remaining is unique.
* ============ */

function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }

  console.log(result);
}

// unique([1, 1, 2, 3, 3]) // => [1, 2, 3]
// unique(["a", "a", "c", "aa", "b", "b"]) // => ["a", "c", "aa", "b"]


/* =========== *
* Challenge 11 ✅ *
Create a function longestWord that that retuns the longest word of a sentence.
If there are ties, the function should return the later word.
* ============ */

function longestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= longestWord.length) {
      longestWord = words[i];
    }
  }

  console.log(longestWord);

}

//Uncomment the lines below to test your function:

// console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('JavaScript')); // => 'JavaScript'
// console.log(longestWord('')); // => ''


/* =========== *
* Challenge 12 ✅ *
Create a function disemvowel that takes in a string and returns a string with all vowels removed.
* ============ */

function disemvowel(string) {
  const vowels = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
    A: "A",
    E: "E",
    I: "I",
    O: "O",
    U: "U"
  };

  let result = '';
  
  for (let i = 0; i < string.length; i++) {
    // console.log(string[i])
    if (string[i] in vowels) {
      continue;
    } else {
      result += string[i]
    }
  }

  return result;
  
}


//Uncomment the lines below to test your function:

// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'


/* =========== *
* Challenge 13 ❌ *
* ============ */

function divisibleByFivePairSum(array){
  // your code here...
}


//Uncomment the lines below to test your function:

// console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
// console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]


/* =========== *
* Challenge 14 ✅ *
Create a function highestScore that takes in an array of student objects as a parameter.

It should return a string that corresponds to the student with the highest score.

The string should contain that student's initials concatenated with their id.

Assume the array contains at least 1 student object and the student with the highest score is unique (there are no ties).
* ============ */

function highestScore(students) {
  let highestScore = 0;
  let student = '';

  for (let i = 0; i < students.length; i++) {
    if (students[i].score > highestScore) {
      highestScore = students[i].score;
      let studentNames = students[i].name.split(' ');
      let firstInitial = studentNames[0][0];
      let lastInitial = studentNames[1][0];
      student = firstInitial + lastInitial + students[i].id;
    }
  }

  return student;
}

//Uncomment the lines below to test your function:

// var students = [
// {name: 'Will Sentance', id: 128, score: -42},
// {name: 'Jamie Bradshaw', id: 32, score: 57},
// {name: 'Lisa Simpson', id: 2, score: 99},
// {name: 'Luke Skywalker', id: 256, score: 94}
// ];

// console.log(highestScore(students)); //=> 'LS2'


/* =========== *
* Challenge 15 ❌ *
* ============ */

function leastCommonMultiple(num1, num2) {
  // your code here...

}


//Uncomment the lines below to test your function:

// console.log(leastCommonMultiple(2, 3)); //=> 6
// console.log(leastCommonMultiple(6, 10)); //=> 30
// console.log(leastCommonMultiple(24, 26)); //=> 312


/* ========== *
* Extension 1 *
* =========== */

function arrayBuilder(count) {
  // your code here...

}


//Uncomment the lines below to test your function:

// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); //=> []


/* ========== *
* Extension 2 *
* =========== */

function objectBuilder(count) {
  // your code here...

}


//Uncomment the lines below to test your function:

// console.log(objectBuilder(4)); //=> {
  // 0: 0,
  // 1: 5,
  // 2: 10,
  // 3: 15,
  // 4: 20,
// }
// console.log(objectBuilder(0)); //=> { 0: 0 }


/* ========== *
* Extension 3 *
* =========== */

function secretCipher(sentence, cipher){
  // your code here...

}



//Uncomment the lines below to test your function:

// console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
// console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
// console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"


/* ========== *
* Extension 4 *
* =========== */

function passingStudents(students) {
  // your code here...

}


//Uncomment the lines below to test your function:

// var students = [
//   {
//     "name": "Marco",
//     "id": 12345,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
//   },
//   {
//     "name": "Donna",
//     "id": 55555,
//     "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
//   },
//   {
//     "name": "Jukay",
//     "id": 94110,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
//   }
// ];

// console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]



