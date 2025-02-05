/*
Lab 3 - simple TDD with math functions
Starter file
Create the following functions as per the instructions below.
Read the test cases carefully and write the functions accordingly.
NOTE: The name of the functions have
to match the exported names mentioned at the end of this file
in order to pass the test cases.
To run the test cases, run the following command on your terminal:
node --test
*/

//add function
const add = (a, b) => {
  const result = a + b; //write your code here
  return result; //return the result
};

//subtract function
const subtract = (a, b) => {
  const result = a - b; //write your code here
  return result; //return the result
};

//multiply function
const multiply = (a, b) => {
  const result = a * b;//write your code here
  return result; //return the result
};

//divide function
const divide = (a, b) => {
  const result = a / b;//write your code here
  return result; //return the result
};

//modulas function
const modulas = (a, b) => {
  const result = a % b; //write your code here
  return result; //return the result
};

//power function
const power = (a, b) => {
  const result = Math.pow(a, b); //write your code here
  return result; //return the result
};

//square function
const square = (a) => {
  const result = a * a; //write your code here
  return result; //return the result
};

//floor function
const floor = (a) => {
  const result = Math.floor(a);//write your code here
  return result; //return the result
};

//ceiling function
const ceiling = (a) => {
  const result = Math.ceil(a);//write your code here
  return result; //return the result
};

////////////////////////////////////////

//export functions
//Please do not change the following line.

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  square,
  floor,
  ceiling,
};