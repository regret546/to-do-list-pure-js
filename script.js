let list = [];
userInput = prompt("What would you like to do?");

while (userInput !== "quit") {
  if (userInput == "new") {
    if (list.length == 0) {
      userInput = prompt("New todo");
      list.push(userInput);
    } else {
      userInput = prompt("What else do you want to do?");
      list.push(userInput);
    }
  }
  if (userInput == "list") {
    if (list.length == 0) {
      console.log("There's no todo listed at the moment");
    } else {
      console.log("**********Todo-List**********");
      for (let todo of list) {
        console.log(`${list.indexOf(todo)}:${todo}`);
      }
      console.log("****************************");
    }
  }
  userInput = prompt("What would you like to do?");
}
