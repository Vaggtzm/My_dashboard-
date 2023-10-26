//add row function 

document.querySelector(".btn.btn-dark").addEventListener("click", function() {
    let tableBody = document.querySelector(".table tbody");
    
    // Create a new row
    let newRow = document.createElement("tr");

    // Create cells with the input fields
    newRow.innerHTML = `
        <th>
            <input type="text" name="Work Day" id="WorkDay" placeholder="Ημερα Εργασιας" class="form-control">    
        </th>
        <th>
            <input type="date" name="Date" id="workDate" class="form-control">
        </th>
        <th>
            <input type="text" name="Payment" id="PayCheck" placeholder="Ημερα Εργασιας" class="form-control">    
        </th>
    `;

    // Append the new row to the table body
    tableBody.appendChild(newRow);
});

//count the work days 

let SaveBtn = document.getElementById("SaveDays");
SaveBtn.addEventListener("click", () => {
    let WorkDaysInputs = document.querySelectorAll("[name='WorkDay']");
    let DaysDisplay = document.getElementById("DaysDisplay");
    let count = 0;

    WorkDaysInputs.forEach(input => {
        if (input.value.trim() !== "") {
            count++;
        }
    });
    
    DaysDisplay.innerText = count;
});
