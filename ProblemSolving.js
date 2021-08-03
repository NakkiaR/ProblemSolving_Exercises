"use strict";

//Question 1: Reverse a string, 
//Write a code that takes a string as input and returns the string reversed. i.e."hello" returned as "olleh"
//This works, but it prints each letter incrementing up until the whole word is visible, i.e. r, ra, rae, raeb...etc
function reverseString(myWord) {
    let newWord = "";
    for (let i = myWord.length -1; i >= 0; i--) {
        newWord += myWord[i];
        console.log(newWord);
    }
    return newWord;
}
reverseString('hello');

//this works but again it prints each letter incrementing up until the whole word is visible
function reverseWord(str) { 
let newStr = "";
for(let i = str.length -1; i >= 0; i--) {
 newStr += str[i];
console.log(newStr);
}
return newStr = "";
}
reverseWord('success');

//Question 2: Capitalize a letter,  
//Write a code that takes a string as input and capitalizes the first letter of each word.
//Words will be separated by only on space i.e. 'hello world" should be outputted as "Hello World"

let phrase = 'good morning';
console.log(phrase[0].toUpperCase() + phrase.slice(1));

//Question 3: Compress a string of characters, 
//Example -  an input of "aaabbbbbccccaaccc" would compress to "3a5b4c2a3c"
function compressChars(randomChars) {                
let final = "";
let count = 0;

for(let i = 0; i < randomChars.length; i++) {
    count++
    if(randomChars[i] != randomChars[i + 1]) {
        final = final + randomChars[i] + count;
        count = 0;
    }
}
    console.log(final);
}
       compressChars("aaaabbccccddd");

//Question 4: Bonus Challenge: Palindrome - a word/phrasesequence that reads the same backward and forward i.e. madam, dad, eye, 
//Write a code that takes a user input and checks to see if it is a Palindrome and reports the result.
function palindrome(checker) {

}