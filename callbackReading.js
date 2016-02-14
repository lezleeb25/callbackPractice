//
// underscore.js

sayHi('Hi Katie', function(thingToSay){
	alert(thingToSay);
});

var favNum = function(myString, callback) {
	callback(myString);
};

// /////////////////////////////////////

var sayHi = function(str, cb){
   	cb(str);
};

sayHi('Hi Katie', function(thingToSay){
	alert(thingToSay); //should alert ('Hi Katie')'
});

// /////////////////////////////////////

var friends = ["Mike", "Stacy", "Andy", "Rick"];
​
friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick​
});


// /////////////////////////////////////


function genericPoemMaker(name, gender) {
    console.log(name + " is finer than fine wine.");
    console.log("Altruistic and noble for the modern time.");
    console.log("Always admirably adorned with the latest style.");
    console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}

//The callback, which is the last item in the parameter, will be our //genericPoemMaker function we defined above.​
function getUserInput(firstName, lastName, gender, callback) {
    var fullName = firstName + " " + lastName;

    // Make sure the callback is a function​
    if (typeof callback === "function") {
    // Execute the callback function and pass the parameters to it​
    callback(fullName, gender);
    }
}

getUserInput("Michael", "Fassbender", "Man", genericPoemMaker);


// 4/21/2015
// Beginning of class exercise
var myString = function(newString){
	alert(newString);
};
myString('Hello World');


var temp = function(str) {
	return prompt(str);
};
temp("What's your name?");
// //////////////////////////////////////
// Passing functions as arguments into other functions
// //////////////////////////////////////
var favNum = function(myString, callback) {
	callback(myString);
};

sayHi('Hi Katie', function(thingToSay){
	alert(thingToSay);
});
// //////////////////////////////////

var multiply = function(x, y, callback) {
	callback(x * y);
};

var processAnswer = function(input){
	var modifiedAnswer = input * 15;
	return modifiedAnswer - 4;
});
multiply(2, 5, processAnswer;)



// multiply(2, 5, function(answer){
// 	var modifiedAnswer = answer * 15;
// 	return modifiedAnswer - 4;
// });

























