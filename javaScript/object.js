let native = {
    name: "",
    age: "",
    gender: "",
    height: "",
    hobby: ""
}

// console.log(native.name)
// second method

let othernative = new Object()

//third method

function createObject(name, age, gender, height, hobby) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.hobby = hobby;
}

let newNative = new createObject("ujay", 12, "male", "6.1ft", "sleeping")

//RETRIEVAL
//we have two methods of retrieving data from an object
//1. Dot notation

let age = newNative.age;
let ageb = newNative["age"]
// console.log(age)

// Update data in object

newNative.age = 14;

let newAge = newNative["age"];

//DELETING DATA IN OBJECTS

delete newNative.age;
// console.log(newNative)

// CAN WE LOOP THROUGH OBJECTS

for (let n in newNative){
    console.log(n)
}

//LOOP

console.log(Object.entries(newNative))

// INTRODUCTION TO THIS KEYWORD

let cohort8Native = {
    fullname: "tife dami",
    gender: "male",
    height: "short",
    hobby: "fashion",
    getFullname: function(){
        console.log(this)
        return this.fullname
    }
}

// console.log(cohort8Native.getFullname())

//INTRODUCTION TO BIND KEYWORD

let returnFullName = cohort8Native.getFullname//.bind(cohort8Native)
// console.log(returnFullName())

//STRING

let firstname = "ozioma"

let nameArray = firstname.split("o")
// console.log(nameArray)
