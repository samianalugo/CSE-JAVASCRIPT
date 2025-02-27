//answer to question1

/*let boolVal = 4>3;
console.log(boolVal)            // logs out the boolean result
//console.log(boolVal.toString()) // logs out the boolean result as a string

let boolVal1=4>=3;
console.log(boolVal1)

let boolVal2 = 4<3;  
console.log(boolVal2)

let booVal3 =4<=3;
console.log(booVal3)

let booVal4 =4 == 4;
console.log(booVal4)

let booVal5=4 === 4;
let boolVal6=4 != 4;
let boolVa7=4 !== 4;
let boolVa8=4 != '4';
let boolVa9=4 == '4';
let boolVa10=4 === '4';
console.log(booVal5,boolVal6,boolVa7,boolVa8,boolVa9,boolVa10)*/
//qn 2
let myAge =250;
let yourAge = 25;
let answer=myAge-yourAge;
console.log("i am " + answer + " years older than you")
//qn3
let challenge="30 days of javascript";
//console.log(challenge.length)

//changing to uppercase
console.log(challenge.toUpperCase())

//changing to lowercase
console.log(challenge.toLowerCase())

//using substring() method
console.log(challenge.substring(2,19))
console.log(challenge.substring(0,2))
//checking for a word string

let text = "30 days of javascript";
let result = "script";
let result1="python";
console.log(text.includes(result))

//spliting the string
console.log(text.split(result))

let engine= "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(engine.split(", "))
//replace method
console.log(text.replace(result1))
