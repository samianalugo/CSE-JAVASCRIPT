//syntax for if statement
/*if (condition){
    //this part of code run if condition is true
    
};*/

let number= -5;
if (number>0){
console.log(number + " is a positive integer")
} else{
    console.log(number + " is a negative integer")
};


let weather ="rainning";
if (weather === "rainning"){
    console.log("remember to carry an umbrella")
};

//boolean
let IsRainning = true;
if (IsRainning){
console.log("remember to bring your rain coat")
} else{
    console.log("you dont need an umbrella")
};
//else if statements
let weatherNow = "sunny";
if (weatherNow==="rainy"){
    console.log("you need an umbrella")
} else if(weatherNow==="cloudy"){
console.log("you might need an umbrella")
} else if(weatherNow==="sunny"){
    console.log("wear light clothes")
} else{
    console.log("no need an umbrella")
};

