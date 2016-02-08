/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read,
simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.



## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

_.each(_.range(1,101), function(i) {
  if (i%3===0 && i%5!==0){
    console.log("Fizz");
  }
  else if(i%5===0&&i%3!==0){
    console.log("Buzz");
  }
  else if(i%3===0&&i%5===0){
    console.log("FizzBuzz");
  }
  else {
    console.log(i);
  }
});


var theArray = ['A short story.', 42, {'place': 'LA'}, 55, ['Another story'], 23, 12, 2, 4, 5, 6, 'bar', 'foo'];

// Here's the variable we need to hold our count in:
var yourSum = 0; // To count of the strings

// A loop for summing the contents of theArray
var simpleFunction = function(arrayValue, i){
  if (typeof arrayValue[i] === 'string') {         // String case
    yourSum = yourSum + arrayValue[i].length
  } else if (typeof arrayValue[i] === 'number') {  // Number case
    yourSum = yourSum + arrayValue[i]
  } else {                                      // Otherwise
    console.log("Not sure how to proceed with value:", arrayValue[i])
  }
}

var mySum = _.reduce(theArray, function(yourSum, num){
  if (typeof num === 'string') {         // String case
    return yourSum + num.length;
  } else if (typeof num === 'number') {  // Number case
    return yourSum + num;
  } else {                                      // Otherwise
    console.log("Not sure how to proceed with value:", yourSum);
    return yourSum;
  }
}, 0);

console.log("El Sum!", mySum);
