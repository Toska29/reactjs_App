//number 1
function mergeTwoArrays(a,b){
    let counter = 0;
    let newArray = []
    for (let i= 0; i < a.length; i++) {
        if(newArray.includes(a[i]) == false)
        newArray[counter++] = a[i];        
    }
    for (let j = 0; j < b.length; j++) {
        if(newArray.includes(b[j]) == false)
        newArray[counter++] = b[j];   
    }
    return newArray;
} 

// let myArray = mergeTwoArrays([1, 2, 3], [2,5,3,6])
// console.log(myArray)

//number 2a
function sortInAscendingOrder(array){
   let newArray = array.sort(function(a,b){ return a-b})
   return newArray
}

// console.log(sortInAscendingOrder([2,3,1,4]))

//number 2b
function sortInDescendingOrder(array){
    let newArray = array.sort(function(a,b){return b-a})
    return newArray
}
// console.log(sortInDescendingOrder([2,3,1,4]))

//number 3
function arrayOfArrays(firstArray, secondArray){
    let globalArray = []
    let stringArray = []
    let numberArray = []
    let booleanArray = []

    for (let i = 0; i < firstArray.length; i++) {
        if(typeof firstArray[i] === "string")
        stringArray.push(firstArray[i])
        if(typeof firstArray[i] === "number")
        numberArray.push(firstArray[i])
        if(typeof firstArray[i] === "boolean")
        booleanArray.push(firstArray[i])
    }

    for (let i = 0; i < secondArray.length; i++) {
        if(typeof secondArray[i] === "string")
        stringArray.push(secondArray[i])
        if(typeof secondArray[i] === "number")
        numberArray.push(secondArray[i])
        if(typeof secondArray[i] === "boolean")
        booleanArray.push(secondArray[i])
    }

    globalArray.push(stringArray, numberArray, booleanArray)
    return globalArray
}

// console.log(arrayOfArrays(["a", 1, true], ["b", 2, false]))

//number 4

let arrayObject = [ 
    {
       id:3,
       firstname:"saheed",
       lastname: "adesuwa"
    },
    {
       id:2,
       firstname:"yetunde",
       lastname: "Ahmad"
    },
    {
       id:1,
       firstname:"goodnews",
       lastname: "confidence"
    }, 
    {
       id:4,
       firstname:"gideon",
       lastname: "mojoyin"
    },
    
    ]
    
function sortArrayOfObjectInAscendingOrder(array){
    let newArray = array.sort(function(a,b){ return a.id - b.id})
    return newArray
}

// console.log(sortArrayOfObjectInAscendingOrder(arrayObject))

function sortArrayOfObjectInDescendingOrder(array){
    let newArray = array.sort(function(a,b){ return b.id - a.id})
    return newArray
}

console.log(sortArrayOfObjectInDescendingOrder(arrayObject))