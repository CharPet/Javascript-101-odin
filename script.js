// MDN Task 01

let admin, name;

name = "John";

admin = name;

alert(admin);

// Task 02

let planet = "Earth";
let uname;

// Task 03

// "10"
// -1
// 1
// 2
// 6
// "9px"
// "$45"
// 2
// NaN
// "  -9  5"
// -14
// 1
// NaN
// -2

// Assignment ODIN

console.log(23 + 97);

console.log(34 + 687 + 32 + 11 + 79 + 903);

console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);

const max = 57;
actual = max - 13;
percentage = actual / max;



// logical operators MDN 

let username = prompt("What is your username?");

if (username === "Admin") 
{
    let password = prompt("Please enter password.");

    if (password === "TheMaster")
    {
        console.log("Welcome!");
    }
    else if (password === "" || null)
    {
        console.log("Canceled.");
    }
    else 
    {
        console.log("Wrong password.");
    }
}
else if (username === "" || null)
{
        console.log("Canceled.");
}
else 
{
    console.log("I don't know you.");
}


// conditional branching MDN

let businessName = prompt("What is the official name of JavaScript?");

if (businessName === "ECMAScript")
{
    console.log("Right!");
}
else {
    console.log("You don't know? ECMAScript!");
}


//

let number = prompt("Enter a number:");

if (number >= 0)
{
    alert("1");
}
else if (number < 0)
{
    alert("-1");
}
else {
    alert("0")
}


//

let result = (a + b < 4) ? "Below" : "Over";