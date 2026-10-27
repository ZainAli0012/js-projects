let search = document.getElementById("input");

let addBtn = document.getElementById("add-btn");

let table = document.querySelectorAll(".table-row");


// Search box
search.addEventListener("input", function () {

    let query = search.value.toLowerCase();

    table.forEach(row => {

        let name = row.querySelector(".name").textContent.toLowerCase();

        if (name.includes(query)) {
            row.style.display = "";
        } 
        else {
            row.style.display = "none";
        }

    });

});


// Add Student nme

  addBtn.addEventListener("click", function () {

    let name = prompt("Enter student name:");

    let score = prompt("Enter student score:");

    let status = prompt("Enter student status:");

    let tableBody = document.querySelector("#table tbody");

    let row = tableBody.insertRow();

    row.classList.add("table-row");

    let addName = row.insertCell(0);
    let addScore = row.insertCell(1);
    let addStatus = row.insertCell(2);

    addName.classList.add("name");
    addScore.classList.add("number");
    addStatus.classList.add(status.toLowerCase());

    addName.textContent = name;
    addScore.textContent = score + "%";
    addStatus.textContent = status;

});
