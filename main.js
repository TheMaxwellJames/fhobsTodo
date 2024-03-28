document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");



     addBtn.addEventListener("click", function() {
         let taskText = taskInput.value.trim();
         if (taskText !== "") {
             createTask(taskText);
             taskInput.value = "";
         } else {
             alert("Please enter a task!");
         }
     });



       function createTask(taskText) {
         let listItem = document.createElement("li");
         listItem.textContent = taskText;
         listItem.innerHTML += `<button class="edit-btn">Edit</button><button class="delete-btn">Delete</button>`;
         taskList.appendChild(listItem);

        
         listItem.querySelector(".delete-btn").addEventListener("click", function() {
             if (confirm("Are you sure you want to delete this task?")) {
                 taskList.removeChild(listItem);
             }
         });


                 listItem.querySelector(".edit-btn").addEventListener("click", function() {
             let newText = prompt("Edit Task", taskText);
            if (newText !== null && newText.trim() !== "") {
                 taskText = newText.trim();
                listItem.textContent = taskText;
                listItem.innerHTML += `<button class="edit-btn">Edit</button><button class="delete-btn">Delete</button>`;
             }
        });
     }





   
   
});
