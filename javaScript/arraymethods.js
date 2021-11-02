// let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// function multiply(x){
//     for (let y = 0; y <= 12; y++){
//         console.log(`${x} * ${y} = ${x * y}`)
//     }
// }

// for (let i = 1; i <= 12; i++){
//     numArray.forEach(multiply)
// }

let objArray = [
    {
        gender: 'male',
        firstname: 'John',
        lastname: 'Smith'
    },
    {
        gender: 'male',
        firstname: 'demola',
        lastname: 'femi'
    },
    {
        gender: 'female',
        firstname: "kim",
        lastname: 'yetunde'
    }
]

let question1 = "Using Array method forEach, print out the firstname"

//Question 1:
function objFirstName(obj){
    console.log(obj['firstname'])
}

objArray.forEach(objFirstName)

let question2 = "Using Array method map, print out a new key fullname"
"per object and the value would be the combination of"
"the firstname and the lastname"
"Checkout Array.prototype.map on MDN Docs"
//Question2

function getFullName(obj){
    let fullname = obj.firstname + " " + obj.lastname
    return fullname
}

// console.log(objArray.map(getFullName))

function maleGender(obj){
    if(obj.gender === 'male'){
        return obj
    }
}

// console.log(objArray.filter(maleGender))

function femaleGender(obj){
    if(obj.gender === 'female'){
        return obj
    }
}

// console.log(objArray.filter(femaleGender))

function objectAge(obj){
   return obj['age'] = obj.firstname.length + obj.lastname.length
}

console.log(objArray.map(objectAge))
console.log(objArray)