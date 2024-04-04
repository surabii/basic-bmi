console.log("external main js file linking")
//verbs

// use this function to update html heading after html is parsed in the browser
function updateHeading() {
    console.log("update heading function is called")
    // create a constant names "heading"
    const heading = document.getElementById("heading");


    // update the textContent of the constant
    heading.textContent = "Updated Heading";
}
console.log("type of function", typeof updateHeading);

// function heading() {

// }


// updateHeading();

const x = 1; // how we declare constant
//constants are a type of variable

let y = 2; //how we declare variables;

z = 5; // variable created automatically

const addNumber = z ** y;
console.log("z and y operators", addNumber);

const world = 1234567;
// world = 7654321; => TypeError | your code will break
console.log("world", world);

let nickName = "sura";
console.log("nickName on line 28", nickName);

nickName = "ela"; //string
console.log("nickName on line 31", nickName)
console.log("what is type of nickName variable", typeof nickName);

nickName = 20; //number
console.log("nickName on line 34", nickName)

console.log("what is type of nickName variable", typeof nickName);

//data types

const isUserLoggedIn = false;
console.log("isUserLoggedIn", typeof isUserLoggedIn)

const userDetails = {
    firstNAme: "surabiha",
    lastName: "muraleedaran",
    job: "dev"
};

console.log("userDetails", typeof userDetails);

const cars = ["Saab", "Volvo", "BMW"];

console.log("cars", typeof cars);

const userName1 = "surabiha 'sura' ";
console.log("userName1", userName1);
const userName2 = "muraleedaran";
let userName3 = "sura";
console.log("userName3", userName3);

userName = `${userName1} ${userName2} surabiha`

console.log(`userName3`, userName3);

const carBrand = "volvo";
const username = "John";

const finalMessage = `${userName} is using brand ${carBrand}`
console.log("finalMessage", finalMessage);

let initialNumber;
console.log("initialNumber", initialNumber, typeof initialNumber);
initialNumber = 10;
console.log("initialNumber", initialNumber, typeof initialNumber);
const updatedInitialNumber = --initialNumber;
console.log("updatedInitialnumber", updatedInitialNumber);

let addedValue1 = "5" + 2 + 3; //523
let addedValue2 = 2 + 3 + "5"; //235
console.log("addedValue1", addedValue1);
console.log("addedValue2", addedValue2);

let initId = 1;
initId += 2
console.log("initId", initId);

//initId = initId - 2
initId -= 2;
console.log("initId", initId);

// if (condition) {
//     // block of code to be executed if the condition is true
// } 

// if ( 1 == 1 ) {
//     console.log("condition is true")
// } else {
//     console.log("condition is false")
// }


// there is no type check - it is only double checking the values
// if ( 1 == "1" ) {
//     console.log("condition is true")
// } else {
//     console.log("condition is false")
// }


if ( 1 === "1" ) {
    // block scope
    console.log("condition is true")
} else {
    console.log("condition is false")
}

const user1 = {id: 1};
const user2 = {id: 1};
if (user1 == user2) {
// object.values(user1) => [1]
// object.values(user1) => [1]
// user1.id === user2.id


    console.log("users are same")
} else {
    console.log("users are different")
}

const userInfo = []; // type script example: typeof array {1, 2, 3};
const userInfo2 = [];

// if (userInfo !== userInfo2) {
//     console.log("user info is same")
// } else (
//     console.log("user info is different")
// ) 

const comparisonResult = userInfo === userInfo2 ? "equal" : 0;

console.log("comparisonResult", comparisonResult);