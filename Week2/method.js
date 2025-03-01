//creating an object for a car

let Car = {name: "wish",
    color: "blue",
    milleage: 40,
start:function(){
    console.log("the car has started")
}
}
console.log(Car.name)
Car.start()
//object for a person

let Person = {name: "samia",
    speak: function(){
console.log("hello my name is samia")
    }
}
console.log(Person.name)
Person.speak()
 //you can design a whole store using objects
let store = {name: "kgl",
    location:"matugga",
    stock: {
        beans: 100,
        maize: 400,
        cowpeas: 300
    },

    sellProduce: function(){
        console.log("sold successfully")

    }

}
store.sellProduce()

let calculator = {
    add: function(a,b){
        return a+b
    },
        subtract: function(a,b){
return a-b
        
    }
}
console.log(calculator.add(5,4))
console.log(calculator.subtract(10,5))
