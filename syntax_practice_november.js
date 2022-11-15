// LESSON 2
/* TERNARY && IF ELSE STATEMENTS 
JS ternary operators to utilize in place of an if/else statement
One thing to look into for sure is which one is faster, ternary or if else statement*/
var age = 42;
var isAdult = (age < 18) ? "Too young": "Old enough";
// used to write html to webpage
document.write(isAdult);

// If Else statement syntax below for reference to write same equation for practice and syntax comparison
var isAlsoAdult
if (age < 18) {
    isAlsoAdult = "Too young";
} else {
    isAlsoAdult = "Old Enough"
}
console.log(isAlsoAdult);

// EXAMPLE PROBLEM
/* Time flies when you’re having fun.  Given a clock that measures 24 hours in a day, write a program that takes the hour as input. If the hour is in the range of 0 to 12, output am to the console, and output pm if it's not. */
hour = 13;
var dayAndNight = (hour <= 11) ? "am" : "pm";
console.log(dayAndNight);

// CODE PROJECT: TRIP PLANNER
/* You need to plan a road trip. You are traveling at an average speed of 40 miles an hour.
Given a distance in miles as input (the code to take input is already present), output to the console the time it will take you to cover it in minutes.
Sample Input: 150 > Sample Output: 225 */



