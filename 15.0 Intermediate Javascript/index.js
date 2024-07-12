//love calculator
prompt("What is your name?");
prompt("What is their name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //1-100
if (loveScore > 70) {
  alert(
    "Your love score is " +
      loveScore +
      "%" +
      "You love each other like Kanye loves Kanye."
  );
}
if (loveScore > 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%");
}
if (loveScore <= 30) {
  alert(
    "Your love score is " +
      loveScore +
      "%" +
      "You go together like oil and water."
  );
}

//=== vs ==
//Strict Equality vs Loose Equality
var a = 1;
var b = "1";
if (a === b) {
  console.log("yes");
} else {
  console.log("no");
}
// Output: no
if (a == b) {
  console.log("yes");
} else {
  console.log("no");
}
// Output: yes

//BMI Calculator Advanced (IF/ELSE)
function bmiCalculator(weight, height) {
  var interpretation = weight / (height * height);
  if (interpretation < 18.5)
    return "Your BMI is " + interpretation + ", so you are underweight.";
  if (interpretation <= 24.9 && interpretation >= 18.5)
    return "Your BMI is " + interpretation + ", so you have a normal weight.";
  if (interpretation > 24.9)
    return "Your BMI is " + interpretation + ", so you are overweight.";
  return interpretation;
}

/*
Leap Year Challenge Exercise
e.g. Is the year 2000 a leap year?:
2000 ÷ 4 = 500 (Leap)
2000 ÷ 100 = 20 (Not Leap)
2000 ÷ 400 = 5 (Leap!)
So the year 2000 is a leap year.

But the year 2100 is not a leap year because:
2100 ÷ 4 = 525 (Leap)
2100 ÷ 100 = 21 (Not Leap)
2100 ÷ 400 = 5.25 (Not Leap)
*/
function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

//GuestList Array
var guestList = ["Angela", "Jack", "Pam", "James"];
console.log(guestList);
//Output: (4)["Angela", "Jack", "Pam", "James"]
console.log(guestList[2]);
//Output: Pam
var guestName = prompt("What is your name?");
if (guestList.includes(guestName)) {
  alert("Welcome!");
} else {
  alert("Sorry, maybe next time.");
}
//Output: Welcome!

//FizzBuzz Challenge
//array.push() adds an element to the end of an array
//array.pop() removes the last element from an array
//array.unshift() adds an element to the beginning of an array
//array.shift() removes the first element from an array
var output = [];
var count = 1;
function fizzBuzz() {
  /*
    if (count % 3 === 0) {
      output.pop();
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.pop();
      output.push("Buzz");
    } else if (count % 3 === 0 && count % 5 === 0) {
      output.pop();
      output.push("FizzBuzz");
    }  
    Does not work because it returns Fizz first instead of FizzBuzz
    Order matters in if statements
    */
  /*
  while (count <= 100) {
    output.push(count++);
    if (count % 3 === 0 && count % 5 === 0) {
      output.pop();
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.pop();
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.pop();
      output.push("Buzz");
    }
    console.log(output);
    */
  for (count = 1; count < 101; count++) {
    output.push(count++);
    if (count % 3 === 0 && count % 5 === 0) {
      output.pop();
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.pop();
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.pop();
      output.push("Buzz");
    }
    console.log(output);
  }
}

/*Who's Buying Lunch? Code Challenge
You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.
Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

Example Input
["Angela", "Ben", "Jenny", "Michael", "Chloe"]

Example Output
Michael is going to buy lunch today!

Hint
1. You might need to think about Array.length.
2. Remember that Arrays start at position 0!
*/
function whosPaying(names) {
  var name = names[Math.floor(Math.random() * names.length)];
  return name + " is going to buy lunch today!";
}

//99 Bottles Challenge
var numberOfBottles = 99;
while (numberOfBottles >= 0) {
  var bottleWord = "bottles";
  if (numberOfBottles === 1) {
    bottleWord = "bottle";
  } else if (numberOfBottles === 0) {
    bottleWord = "No more";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
  console.log(numberOfBottles + " " + bottleWord + " of beer,");
  console.log("Take one down, pass it around,");
  numberOfBottles--;
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

/*Fibonacci Exercise
Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
Where every number is the sum of the two previous ones.
e.g. 0, 1, 1, 2, 3, 5 comes from
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
etc.
Create a function where you can call it by writing the code:
fibonacciGenerator (n)
Where n is the number of items in the sequence.
So I should be able to call:
fibonacciGenerator(3) and get
[0,1,1]
as the output.
IMPORTANT: The solution checker is expecting an array as the correct output.
Do NOT change any of the existing code.
You do NOT need any alerts or prompts, the result should be returned from the function as an output.
The first two numbers in the sequence must be 0 and 1.
Also, if you decide to create a for loop, make sure you explicitly specify var i = 0 rather than simply writing i = 0 . This is a quirk of the testing suite.
e.g. for (var i = 0; i < 10; i ++)
HINT: Use this Repl.it Playground to test out your solution.
HINT: Use this flow chart to understand the logic if you get stuck.
*/
function fibonacciGenerator(n) {
  var solution = [0, 1];
  if (n === 1) return (solution = [0]);
  else if (n === 2) return (solution = [0, 1]);
  for (var i = 2; i < n; i++) {
    solution.push(solution[i - 2] + solution[i - 1]);
  }
  return solution;
}
