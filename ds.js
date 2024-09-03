// Who Cares?
//it's imortant to have a precide vocabulary to talk about how our code performs
// Useful for discusing trade-offs between different aproaches
//when your code slows or crashes identifying parts of the code that are infficient can hepls us find pian points in our application
//Less importdnt: it comes up interviews

// suppose we want to write a fuction that calculates n numbers

// function addUpTo(n) {
//     let total = 0;
//     for (let i = 0;  i <= n; i++) {
//         total += i
//     }
//     return total;
// }

// let t1 = performance.now();
// addUpTo(1000000000)
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2-t1) /1000} seconds`)

// function addUpTo(n) {
//     return n * (n + 1)/2
// }

// let t1 = performance.now();
// addUpTo(1000000000)
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2-t1) /1000} seconds`)

// What does better means?
// Faster?
// Less memory-intensive?
// More readable?

// The Problem with Time
// Different machines will record differents times
// The sme machines will record different times
// For fast algorithms speed measurements may not be precise enough

// Introducing ...Big O
// Big O Notation is a way to formalize fuzzy counting
// it allows us to talk formally about how the runtime of algorithm grows as the inputs grow
// Big O Definition
// we say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant time f(n), as n increases


// Big O Shorthands
// 1, Arithmetic operations are constant
// 2, Variables assignment is constant
// 3, Accessing elements in an array (by index) or object(by key) is constant
// 4, In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

// function logAtLeast5(n) {
//     for (var i = 1; i <= Math.min(5, n); i++) {
//         console.log(i)
//     }
// }

// logAtLeast5(10)

// Space Complexity
// we can also use big O notatio to analyze space complexity how much additional memory do we need to allocate in order to run the code in our algorithm?

// What about the inputs?
// auxiliary space complexity to refer to space required by the algorithm not include space taken up by the inputs.

// Space Complexity in Js
// => Most primitives (booleans, number, undefined, null) are constant space
// => String require O(n)  space (where n iis the string length)
// Reference types are generally O(n) where n is the length (for arrays) or the number of key (for objects)

// function sum(arr) {
//     let total = 0;
//      for (let i = 0; i <= arr.length; i++) {
//         total += arr[i];
//      }
//      return total;

// }
// console.log(sum(2))

// Logarithms
//  Who Cares?
// Certain searching algorithms have logarithmic time complexity.
// Efficient sorting algorithms involve logarithms
// Recursion sometimes invoves logarithmic space complexity

// Recap
//To analyze the Performance of an algorithm, we use Big O Notation
//Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
//Big O Notation doesn't care about prcision, only about general trends(linear?, quadratic?, constant?)
//The time or space complexity depends on only on the algorithm, not the hardware used to run the algorithms
//Big O Notation is everwhere do get lots of practice

//OBJECTS
//Big O of Object Methods
// object.keys- O(N)
// object.values- O(N)
// object.entries -O(N)
// HASOwnProperty- O(1)
// let instructor = {
//     firsname: "amen",
//     isInsturactor: true,
//     favoriteNumbers: [1, 2, 3,4]

// }

// console.log(((instructor.favoriteNumbers[0])))
// console.log(instructor.hasOwnProperty("isInsturactor"))

//ARRAYS
//ORDERES LISTS!
//WHEN TO USER ARRAYS
//WHEN YOU NEED ORDER
//WHEN  NEED FAST ACCESS
//INSTERTION - IT DEPENDS...
//REMOVAL- IT DEPENDS.....
//SEACHING - O(N)
//ACCESS-O(1)

//BIG O OF ARRAY OPARATIONS
//PUSH - O(1)
//POP - O(1)
//SHIFT - O(N)
//UNSHIFT- O(N)
//CONCAT O(N)
//SLICE- O(N)
//SPLICE - O(N)
// SORT- O(N*LOGN)
//forEach/map/folter/reduce/etc - O(N)

//WHAT IS AN ALGORITHM?
//A PROCESS OR SET OF STEPS TO ACCOMPLISH A CERTAIN TASK.
// WHY DO I NEED TO KNOW THIS?
//ALMOST EVERYTHING THAT YOU DO IN PROGRAMMING INVOLVES SOME KIND OF ALGORITHMS

//HOW DO YOU IMPROVE
//DEVISE A PLAN FOR SOLVING PROBLEMS
//MASTER COMMON PROBLEM SOLVING PATTERNS

//UNDERSTAND THE PROBLEM
//EXPLORE CONFRETE EXAMPLES
//BREAK IT DOWN
//SOLVE/SIMPLIFY
//LOOK BACK AND REFACTOR

//UNDERSTAND THE PROBLEM
//1 CAN I RESTATE THE PROBLEM IN MY WORDS
//2 WHAT ARE THE INPUTS THAT GO INTO PROBLEM
//3 WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION TO THE PROBLEM
//4 CAN THE OUTPUTS BE DETERMINED FROM THE INPUTS IN OTHER WORDS DO I HAVE ENPUGH INFORMATION TO SOLVE THE PROBLEM
//5 HOW SHOULD I ABLE THE IMPORTANT PIECES OF DATA THAT ARE A PART OF THE PROBLEM


// function char1(str) {
//     var result = {};
   
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         if (result[char] > 0) {
//             result[char]++;
//         }
//         else {
//             result[char] = 1;
//         }
//     }
//     return result;
// }

// console.log(char1("AbushA"))


// function char2 (str) {
//    var result = {}
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase()
//         if(result[char] > 0) {
//             result[char]++
//         }
//         else {
//             result[char] = 1
//         }
//     }
//     return result
// }

// console.log(char2("this is from addis ababa"))

//Look Back & REFACTOR congrats on solving it but you're not done
//REFACTORING QUESTIONS
//CAN YOU CHEK THE RESULT
//CAN YOU DERIVE THE RESULT DIFFERENTLY
//CAN YOU UNDERSTAND IT AT A GLANCE
//CAN YOU USE THE RESULT OR METHOD FOR SOME OTHER PROBLEM
//CAN YOU IMPROVE THE PERFORMANCE OF YOUR SOLUTION
//CAN YOU THINK OF OTHER WAYS TO REFACTOR
//HOW HAVE OTHER PEOPLE SOLVED THIS PROBLEM

// function charCount(str) {
//     var obj = {}
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase()
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++
//             }
//             else {
//                 obj[char] = 1
//             }
//         }
//     }
//     return obj
// }

// console.log(charCount("this is from addis ababa"))


// function charCount(str) {
//     var obj = {}
//     for (var char of str) {
//         char = char.toLowerCase();
//         if(isAlphaNumeric(char)) {
//             obj[char] = ++obj[char] || 1
//     }
// }
//     return obj
// }

// console.log(charCount("this is for of loop11 1!!!!!"))

// function isAlphaNumeric(char) {
//     var code = char.charCodeAt(0)
//     if (!(code > 47 && code < 58) &&
//         !(code > 64 && code < 91) &&
//         !(code > 96 && code < 123)) {
//             return false
//         }
//         return true
// }

//RECAP!
//UNDERSTAND THE PROBLEM
//EXPLORE CONCREATE EXAMPLES
//BREAK IT DOWN


//HOW DO YOU IMPROVE?
//1 DEVISE A PLAN FOR SOVLING PROBLEM

// function same (arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if (correctIndex === -1) {
//                 return false
//             }
//         arr2.splice(correctIndex, 1)
//     }
//     return true
// }

// console.log(same([1,2,3], [1,4,8]))