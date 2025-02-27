//date object qn1 breakout questions
var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var hours= d.getHours();
    var min = d.getMinutes();
    var c = new Date(year, month, day, hours, min);
    console.log(c);

//base of the triangle
let b= 20;
let h= 10;
let area=0.5*b*h;
console.log("enter the base " +b)
console.log("enter the height " + h)
console.log("the area of the triangle is " + area)