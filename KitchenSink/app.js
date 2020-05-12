var name = "Alandis"; // stored my name in a variable call "name"
const states = 50 // Created a constant that contained the number of states in the US
var add = 5 + 4; //simply adding two number data types

//  A function called sayHello that displays an alert that says Hello World!
function sayHello() {
    alert("Hello World!")
};

sayHello()

// A function called checkAge that takes two arguments: one for a name and one for an age
function checkAge(Name, age) {
    if (age < 21) {
        alert("Sorry" + " " + Name + ", you arent old enough to view this page!")
    } else {
        alert("You In!")
    };

};
checkAge("Charles", 22);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

var veggies = ["carrots", "kale", "spinach", "broccoli"];

// A loop to display each of your favorite vegetables to the developer console.
for (let i in veggies) {
    console.log(veggies[i])
};

var pet = {
    name: "Mamba",
    breed: "Bullie"
};
console.log(pet.name, pet.breed);

var friends = [{
        name: "Billy",
        age: 29
    },
    {
        name: "Jane",
        age: 17
    },
    {
        name: "King",
        age: 55
    },
    {
        name: "Tommy",
        age: 14
    },
    {
        name: "Chris",
        age: 32

    }

];
// a loop to call the checkAge function for each object in the array, passing the object's name and age as arguments
for (f = 0; f < friends.length; f++) {
    console.log(friends[f].name, friends[f].age)
    checkAge(friends[f].name, friends[f].age)
}





function getlength(count) {
    return count.length

}

let str1 = getlength("hello world");
console.log(str1)
if (str1 % 2 === 0) {
    console.log("The world is nice and even!")
} else {
    console.log("The world is an odd place!")
}