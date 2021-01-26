// best option
var choiceFunction = (param1) => {
  let number = prompt(param1);
  if (number == -1) {
    return 7;
  }

  if (number == randomNumber) {
    alert("You guessed correctly!");
  } else {
    if (number < randomNumber) {
      alert("Too low.");
    } else {
      alert("Too high.");
    }
  }
  return number;
};

// better option
// var choiceFunction = function getChoice() {
//   let number = prompt("What is your guess?");
//   if (number == 7) {
//     alert("You guessed correctly!");
//   } else {
//     alert("You have failed.");
//   }
//   return number;
// };

// worst option
// function getChoice() {
//   let number = prompt("What is your guess?");
//   if (number == 7) {
//     alert("You guessed correctly!");
//   } else {
//     alert("You have failed.");
//   }
//   return number;
// }
let randomNumber = Math.ceil(Math.random() * 10);
let choice = choiceFunction("Please enter a number (-1 to stop)");
console.log(choice);
if (choice == 0) {
  alert("Please enter a number between 1 and 10");
}
if (choice == 7) {
} else {
  choice = choiceFunction("Try again!");
}
