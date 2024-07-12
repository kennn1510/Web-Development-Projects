function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
//Higher Order Functions
function calculator(num1, num2, operator) {
  return operator(num1, num2);
}
//debugger;
//calculator(3,4, multiply);
