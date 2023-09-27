let list = [];
userInput = prompt("What would you like to do?");

while (userInput !== "quit") {
  if (list.length !== 0) {
    userInput = prompt("What else you like to do?");
  }
  list.push(userInput);
}
