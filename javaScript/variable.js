// for (var i = 0; i < 10; i++){
//     let j = 1;
//     console.log(i*j);
// }

// console.log("the value of i is",i);
// console.log("the value of j is", j);

let firstName = "Tosin"
let lastName = "Akinnusi"
let qty = 5
let event = "party"
let middleName = "Emmanuel"
let price = 30.5
let ticketAgent = "Ahmad"

console.log(`
Hello ${firstName},
Thanks for ordering ${qty} tickets to ${event}.
Order Details
${firstName} ${middleName} ${lastName}
${qty} x $${price} = $${qty*price} to ${event}
You can pick your tickets up at will call 30 minutes before
the show.
Thanks,
${ticketAgent}
`)

const insideFn = (logger) => {
    logger("They can be sent to other functions as arguments") 
}

insideFn(m => console.log(m))
