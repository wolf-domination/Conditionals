/*
Define a function isValidSubStr that takes in two string parameters. The
function should return a string of "VALID" if the second string is part of the
first string regardless of the casing of the characters. Otherwise it should
return "INVALID".
*/

// Your code here
function isValidSubStr(str1, str2) {
    if(str1.toUpperCase().includes(str2.toUpperCase())) {
        return 'VALID'
    }else return 'INVALID'
} 

// console.log(isValidSubStr("JOY", "joy"));                     // => 'VALID'
// console.log(isValidSubStr("The cat jumped!", "he cat jump")); // => 'VALID'
// console.log(isValidSubStr("Time to program", "time"));        // => 'VALID'
// console.log(isValidSubStr("happy", "happiness"));             // => 'INVALID'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isValidSubStr;
