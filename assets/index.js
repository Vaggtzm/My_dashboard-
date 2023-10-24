
//budget Function

let Save_Btn = document.getElementById("SaveBudget");

Save_Btn.addEventListener('click', () => {
    let InputBudget = document.getElementById('CurrenBudget');
    let Budget_Text_Display = document.getElementById("Budget_text_display");

    let NewBudget = InputBudget.value;
    Budget_Text_Display.innerText = NewBudget + "€";

    let progressBar = document.getElementById("budgetProgressBar");
    let maxBudget = parseFloat(NewBudget); // set maxBudget to the NewBudget value
    let percentage = 100; // at this point, the progress is 100% as it's the initial value

    progressBar.style.width = percentage + "%";
    progressBar.setAttribute("aria-valuenow", percentage);
    progressBar.innerText = "€" + NewBudget;

    let InputAccount = document.getElementById("Account");
    let AcountText_display = document.getElementById("Αccount_display");
    let NewAcount = InputAccount.value;
    AcountText_display.innerText = NewAcount;
});
let SaveExpense = document.getElementById("SaveExpense");

SaveExpense.addEventListener('click', () => {
    let ExpenseNumber = document.getElementById("ExpenseNumber"); // input for the expense
    let ExpenseDisplay = document.getElementById("expense-display");
    let FromAcount = document.getElementById("From_Account");//account input 
    let AcountDisplay = document.getElementById("AccountDisplay")
    let Budget_Text_Display = document.getElementById("Budget_text_display");
    let progressBar = document.getElementById("budgetProgressBar");
     
    //print the account 
    let Account = FromAcount.value;
    AcountDisplay.innerText = Account;

 
    // Parse current budget and expense values
    let CurrentBudget = parseFloat(Budget_Text_Display.innerText) || 0;
    let ExpenseNum = parseFloat(ExpenseNumber.value) || 0;
    let PrevExpense = parseFloat(ExpenseDisplay.innerText) || 0;
    
    // Ensure the new expense value is valid (greater than 0) before processing
    if(ExpenseNum > 0) {
        ExpenseDisplay.innerText = ExpenseNum + PrevExpense;

        // Subtract expense from the budget
        let NewBudgetValue = CurrentBudget - ExpenseNum;
        
        // Update budget display
        Budget_Text_Display.innerText = NewBudgetValue.toFixed(2) + "€";

        // Calculate new percentage for the progress bar
        let maxBudget = parseFloat(progressBar.innerText.split("€")[1]); // Parse the original budget value from progressBar's text
        let percentage = (NewBudgetValue / maxBudget) * 100;

        // Update the progress bar
        progressBar.style.width = percentage + "%";
        progressBar.setAttribute("aria-valuenow", percentage);
        progressBar.innerText = "€" + NewBudgetValue.toFixed(2);
    }
});

//incomes

let SaveIncomeBtn = document.getElementById("Save_Income");

SaveIncomeBtn.addEventListener('click', () => {
    let IncomeNumber = document.getElementById("Income_Number"); // input for the income
    let IncomeDisplay = document.getElementById("incomeDisplay"); // display for the total income
    let Budget_Text_Display = document.getElementById("Budget_text_display");
    let progressBar = document.getElementById("budgetProgressBar");
    let ToAccount = document.getElementById("To_Account"); // account input

    // Parse current budget, income, and total income values
    let CurrentBudget = parseFloat(Budget_Text_Display.innerText.replace("€", "")) || 0;
    let IncomeValue = parseFloat(IncomeNumber.value) || 0;
    let TotalIncome = parseFloat(IncomeDisplay.innerText) || 0;

    // Ensure the income value is valid (greater than 0) before processing
    if (IncomeValue > 0) {
        // Add income to the budget
        let NewBudgetValue = CurrentBudget + IncomeValue;

        // Update total income
        TotalIncome += IncomeValue;
        IncomeDisplay.innerText = TotalIncome.toFixed(2) + "€";

        // Update the account display (if you want to track the source of the latest income)
        document.getElementById("AccountDisplay").innerText = ToAccount.value;

        // Update budget display
        Budget_Text_Display.innerText = NewBudgetValue.toFixed(2) + "€";

        // Calculate new percentage for the progress bar
        let maxBudget = parseFloat(progressBar.innerText.split("€")[1]); // Parse the original budget value from progressBar's text
        let percentage = (NewBudgetValue / maxBudget) * 100;

        // Update the progress bar
        progressBar.style.width = percentage + "%";
        progressBar.setAttribute("aria-valuenow", percentage);
        progressBar.innerText = "€" + NewBudgetValue.toFixed(2);
    }
});
