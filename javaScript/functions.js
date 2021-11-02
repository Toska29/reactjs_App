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
// console.log("tife")

// Three ways of doing asynchronous
//1. callback function
//2. promises
//3. Async await

let details = {
    gender: "male",
    first_name: "Gideon",
    last_name :"Mojoyin",
    getFullName : function(anotherFunction){
        console.log(anotherFunction(this))
    } 
}

details.getFullName((obj) => {
    let fullname = obj.first_name + " " + obj.last_name
    if(obj.status === "male"){
        fullname = "Mr" + " " + fullname
    }else{
        fullname = "Mrs" + " " + fullname
    }
     return fullname
    }
)