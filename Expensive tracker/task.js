

let date = document.getElementById("data");

let desc = document.getElementById("desc");

let price = document.getElementById("price");

let addBtn = document.getElementById("addBtn");

let balance = document.getElementById("Balance");

let income = document.getElementById("Income");

let expense = document.getElementById("Expense");

let transactionList = document.getElementById("transactionList");


let totalIncome = 5200;

let totalExpense = 2350;


// Add Button

addBtn.addEventListener("click", function () {

    if (date.value === "") {
        alert("Please select date");
        return;
    }

    if (desc.value === "") {
        alert("Please enter description");
        return;
    }

    if (price.value === "") {
        alert("Please enter price")
        return;
    }


    let amount = Number(price.value);
    let description = desc.value;


    // Date

    let dateParts = date.value.split("-");

    let showDate =
        dateParts[2] + "-" +
        dateParts[1] + "-" +
        dateParts[0];


    // Salary = Income

    if (description.toLowerCase() === "salary") {

        totalIncome = totalIncome + amount;


        let li = document.createElement("li");

        li.className = "transaction-item";


        li.innerHTML = `
            <div>
                <strong>${description}</strong>
                <br>
                <small>Date: ${showDate}</small>
            </div>

            <span class="income-text">
                + ${amount}
            </span>
        `;


        transactionList.appendChild(li);

    }


    // Baqi sab Expense

    else {

        totalExpense = totalExpense + amount;


        let li = document.createElement("li");

        li.className = "transaction-item";


        li.innerHTML = `
            <div>
                <strong>${description}</strong>
                <br>
                <small>Date: ${showDate}</small>
            </div>

            <span class="expense-text">
                - ${amount}
            </span>
        `;


        transactionList.appendChild(li);

    }


    // Balance

    let totalBalance = totalIncome - totalExpense;


    balance.innerText = "AED " + totalBalance;

    income.innerText = "AED " + totalIncome;

    expense.innerText = "AED " + totalExpense;


    // Clear inputs

    date.value = "";

    desc.value = "";

    price.value = "";

});
