const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && taskInput.value.trim() !== "") {
        addTask(taskInput.value);
        taskInput.value = "";
    }
});

function addTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(taskItem);
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}
