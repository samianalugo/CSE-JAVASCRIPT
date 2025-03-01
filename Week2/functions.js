//functions
/*function name(){
    return
}
name()*/

//function to add two numbers without parameters

function add(a,b){
let sum=a+b
return sum;
}
console.log(add(5,3));

//function square
function square(side){
    let product = side*side
    return product
   // return a*a;
}
console.log("the square is: " +square(10))

//arrow function
let areaOfTriangle = (base, height) =>{
    let area = 0.5*base*height
    return area
}
console.log("the area of the triangle is: " + areaOfTriangle(10,5))

/*
const square =(a)=>a*a;


function cal(produce,priceperkg,quantity)
{
    let totalprice= priceperkg*quantity;
    console.log("the total price " + quantity + " kg of " + produce + " is: " + totalprice + " ugx.");
}

/*
square(4)
square(7)
square(2)
square(8)*/