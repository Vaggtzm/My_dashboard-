let To_DoLink = document.getElementById("manipulation_Todo");

//manipulate the main tag to change its content
To_DoLink.addEventListener("click", () => {
  //Get the element
  let Main = document.getElementById("MainArea");

  //change this element on click
  Main.innerHTML = `<div class="container"> 
    <h4 class ="text-muted m-2 pt-1">Yποχρεωσης Μηνα</h4>
    <hr class = "bg-dark">
    <div class ="row">
    <div class ="col-md-12">
    <div class="form-group">
     <label for ="Task">Υποχρεωση</label>
      <input class = "form-control m-2 p-1" name ="Task" 
      placeholder="Καταχωρηση Υποχρεωσης" type="text" id="Task">
      <div class = "date-group d-flex justify-content-evenly">

      <div class = "flex-child d-flex flex-column">
      <label for ="fromDate">Απο</label>
      <input class = "form-control m-2 p-1 w-100"
       name="fromDate" type="date" id="From_date">
      </div>
      <div class = "flex child d-flex flex-column">
      <label for ="ToDate">Mεχρι</label>
      <input class = "form-control m-2 p-1 w-100" 
      name="ToDate" type="date" id="To_date">
      </div>
      </div>
     <button class = "btn btn-primary  m-2" 
     id="TaskSave">Save</button>
    </div>
    </div>
    </div>
    <hr class ="bg-dark">
    <div id="Tasks" class="mt-2 p-2">
    <h4>Αποθηκευμενες Υποχρεωσεις</h4>
    </div>
    </div>`;

  //Task Functions

  let saveTask = document.getElementById("TaskSave");

  saveTask.addEventListener("click", () => {
    let taskInput = document.getElementById("Task").value;
    let Input_DateFrom = document.getElementById("From_date").value;
    let Input_DateTo = document.getElementById("To_date").value;

    //print the tasks
    let newTask = taskInput.value;
    //check the inputs
    if (taskInput && Input_DateFrom && Input_DateTo) {
      let TaskDiv = document.createElement("div");
      TaskDiv.innerHTML = `
    <div class = "d-flex flex-column text-center ">
    <span class = "d-flex flex-row">
    <strong>Υποχρεωση:</strong> ${taskInput}
    </span>
    <hr class ="bg-dark">
    <span class = "d-flex flex-row"> 
    <strong>Απο :</strong> ${Input_DateFrom} 
    </span>
    <hr class ="bg-dark">
    <span class = "d-flex flex-row">
    <strong>Μεχρι :</strong>${Input_DateTo}
    </span>
    <hr class ="bg-dark">
    <button class = "btn btn-success w-50" id="TaskDone">Done</button>
    </div>
    `;
      //append the div to the list
      document.getElementById("Tasks").appendChild(TaskDiv);
    } else {
      //handle empty input
      alert("please fill out the form ");
    }
    //code  to remove tasks:
    let tasksContainer = document.getElementById("Tasks");

    tasksContainer.addEventListener("click", (event) => {
      if (event.target.id === "TaskDone") {
        // Find the closest parent div and remove it
        let taskDiv = event.target.closest("div").parentNode;
        tasksContainer.removeChild(taskDiv);
      }
    });
  });
});
