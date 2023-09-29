let list = [];
userInput = prompt("What would you like to do?");

while (userInput !== "quit") {
  if (userInput == "new") {
    userInput = prompt("Enter new todo");
    list.push(userInput);
    console.log(`${userInput} is added to the list`);
  }
  if (userInput == "list") {
    if (list.length == 0) {
      console.log("There's no todo listed at the moment");
    } else {
      console.log("*********Todo-List*********");
      for (let todo of list) {
        console.log(`${list.indexOf(todo)}:${todo}`);
      }
      console.log("**************************");
    }
  }

  if (userInput == "delete") {
    if (list.length == 0) {
      console.log("There's nothing to delete at the moment");
    } else {
      console.log("Which one do you want to delete?");
      console.log("*********Todo-List*********");
      for (let todo of list) {
        console.log(`${list.indexOf(todo)}:${todo}`);
      }
      console.log("**************************");
      userInput = prompt("Which one do you want to delete?");
      list.splice(userInput, 1);
      console.log("Successfully deleted");
    }
  }
  userInput = prompt("What would you like to do?");
}
console.log("OK so you quit the app");
