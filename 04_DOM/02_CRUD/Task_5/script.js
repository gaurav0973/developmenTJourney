const tasks = document.querySelector(".tasks");

// Remove element with id "remove-me"
document.getElementById("remove-me").remove();

// Create and insert new task before last task
const newTask = document.createElement("div");
newTask.className = "task";
newTask.textContent = "Task 4 ✅";

tasks.children[tasks.children.length - 1].before(newTask);

// Remove first task
tasks.firstElementChild.remove();