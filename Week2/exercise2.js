// answer to question 1
/*let boolVal = 4>3;
// logs out the boolean result
//console.log(boolVal.toString()) // logs out the boolean result as a string

let boolVal1=4>=3;
let boolVal2 = 4<3;  
let booVal3 =4<=3;
let booVal4 =4 == 4;
let booVal5=4 === 4;
let boolVal6=4 != 4;
let boolVa7=4 !== 4;
let boolVa8=4 != '4';
let boolVa9=4 == '4';
let boolVa10=4 === '4';
console.log(boolVal,boolVal1,boolVal2,booVal3,booVal4,booVal5,boolVal6,boolVa7,boolVa8,boolVa9,boolVa10)

//qn 2
let myAge =250;
let yourAge = 25;
let answer=myAge-yourAge;
console.log("I am " + answer + " years older than you")

//qn3
let challenge="30 days of JavaScript";
console.log(challenge)

//length of the string
console.log(challenge.length)

//changing to uppercase
console.log(challenge.toUpperCase())

//changing to lowercase
console.log(challenge.toLowerCase())

//using substring() method
console.log(challenge.substring(2,19))
console.log(challenge.substring(0,2))

//checking for a word string
*/
let text = "30 days of javascript";
let result = "javascript";
let result1="python";
console.log(text.includes(result))

//spliting the string
console.log(text.split(result))

let engine= "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(engine.split(", "))

//replace method
console.log(text.replace(result,result1))

//character at index 15
console.log(text.charAt(15))

//character code of j
console.log(text.charCodeAt("j"))

//using last index of
console.log(text.indexOf("a"))

//using last index of
console.log(text.lastIndexOf("a"))

//using indexof to find the first occurence of the word because
let sentence = "You cannot end a sentence with because because because is a conjuction";
console.log(sentence.indexOf("because"))

//using last index of to find the last occurence of the word because
console.log(sentence.lastIndexOf("because"))

//using the search function to find the position of the first occurence of the word because
console.log(sentence.search("because"))

//using the trim function
let space = " 30 Days of JavaScript ";
console.log(space.trim(""))

//using startwith function
console.log(space.startsWith(space))

//using endswith method
console.log(space.endsWith(space))

//using the match method
console.log(space.match("a"))

//using the concat method
let space1 ="30 days Of "
let space2 = "JavaScript"
console.log(space.concat(space1,space2))

//using the repeat method
console.log(space.repeat(2))

//typeof function
let number = "num('10')";
console.log(typeof(number===10))

let number1 = 10===10
console.log(number1);

let numb = parseFloat('9.8'); 

// Convert string to float
console.log(numb === 10); 
// Output: false

if (numb !== 10) {
    numb = Math.round(numb); // Round to the nearest integer
}

console.log(numb); // Output: 10
console.log(numb === 10);

//number 3 
let word = "python";
let word2 = "jargon";

console.log(word.includes("on"))
console.log(word2.includes("on"))

if (word && word2) {
    console.log("'on' is found in both Python and jargon.");
} else {
    console.log("'on' is NOT found in both.");
}
// number 4
let sentence1 ="i hope this course is not full of jargon";
console.log(sentence1.includes("jargon"))

if (sentence1){
    console.log("jargon is found in the sentence");
}else {
    console.log("not found");
}
//generating random numbers
let randomNumber = Math.floor(Math.random() * 100); 
console.log(randomNumber);

let randomNumber2 = Math.floor(Math.random() * 50) + 50;
console.log(randomNumber2);

let randomNumber3 = Math.floor(Math.random() * 255);
console.log(randomNumber3);

//using string characters
let wrd = "JavaScript";
let randomIndex = Math.floor(Math.random() * wrd.length); 
let randomChar = wrd[randomIndex];

console.log(`Random Character: ${randomChar}`);

