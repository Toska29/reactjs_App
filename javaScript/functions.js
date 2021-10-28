function getName(name){
    newName = "";
    for(let i = 0; i < name.length; i++){
        newName = newName + name[i] + (i+1);
    }
    return newName;
}

let value = getName("saheed")
console.log(value)

//CALLBACK FUNCTION

setTimeout(()=> {console.log("kim")}, 5000)
console.log("tife")

// Three ways of doing asynchronous
//1. callback function
//2. promises
//3. Async await