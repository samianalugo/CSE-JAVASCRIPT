//for loops - everything
//while loop
//do while loop
//for of loop - arrays
//for is loop - objects
// a graph that represents a loop

/*for (initialization,condition,increment/decrement){



}
for (let number = 0; number<=100;number++){
console.log('$number)
}*/
for (let number= 0; number<=5; number++) {
    console.log(`${number}*${number}=${number*number}`);
    }

    let numbers = [1,2,3,4,5];
    let sum = 0;
    for (let i=0; i<numbers.length; i++){
        sum = sum+numbers[i];
console.log(sum)
    }