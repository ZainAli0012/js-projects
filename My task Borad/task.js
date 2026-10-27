


let finish = document.getElementById("finish");

let addBtn = document.getElementById("add-btn");

let list = document.getElementById("list");


let task1 = document.getElementById("task-1");

let title1 = document.getElementById("title-1");

let done1 = document.getElementById("done-1");

let copy1 = document.getElementById("copy-1");

let delete1 = document.getElementById("delete-1");


done1.addEventListener("click", function () {

    alert("task completed");

});

copy1.addEventListener("click", function () {

    let copyTask = task1.cloneNode(true);

    list.appendChild(copyTask);

});

delete1.addEventListener("click", function () {

    task1.remove();

});


let task2 = document.getElementById("task-2");

let title2 = document.getElementById("title-2");

let done2 = document.getElementById("done-2");

let copy2 = document.getElementById("copy-2");

let delete2 = document.getElementById("delete-2");


done2.addEventListener("click", function () {

    alert("task completed");

});

copy2.addEventListener("click", function () {

    let copyTask = task2.cloneNode(true);

    list.appendChild(copyTask);

});

delete2.addEventListener("click", function () {

    task2.remove();

});


let task3 = document.getElementById("task-3");

let title3 = document.getElementById("title-3");

let done3 = document.getElementById("done-3");

let copy3 = document.getElementById("copy-3");

let delete3 = document.getElementById("delete-3");


done3.addEventListener("click", function () {

    alert("task completed");

});

copy3.addEventListener("click", function () {

    let copyTask = task3.cloneNode(true);

    list.appendChild(copyTask);

});

delete3.addEventListener("click", function () {

    task3.remove();

});


addBtn.addEventListener("click", function () {

    let taskBtn = finish.value;

    if (taskBtn == "") {

        return;

    }

    let task = document.createElement("div");

    task.id = "task-new";


    let title = document.createElement("div");

    title.id = "title-new";

    title.innerText = taskBtn;


    let actions = document.createElement("div");

    actions.id = "actions-new";


    let doneBtn = document.createElement("button");

    doneBtn.id = "done-new";

    doneBtn.innerText = "Done";


    let copyBtn = document.createElement("button");

    copyBtn.id = "copy-new";

    copyBtn.innerText = "Copy";


    let deleteBtn = document.createElement("button");

    deleteBtn.id = "delete-new";

    deleteBtn.innerText = "Delete";


    actions.appendChild(doneBtn);

    actions.appendChild(copyBtn);

    actions.appendChild(deleteBtn);


    task.appendChild(title);

    task.appendChild(actions);

    list.appendChild(task);

    finish.value = "";


    doneBtn.addEventListener("click", function () {

        alert("task completed");

    });


    copyBtn.addEventListener("click", function () {

        let copyTask = task.cloneNode(true);

        list.appendChild(copyTask);


        let copyDelete = copyTask.querySelector("#delete-new");

        copyDelete.addEventListener("click", function () {

            copyTask.remove();

        });


        let copyDone = copyTask.querySelector("#done-new");

        copyDone.addEventListener("click", function () {

            alert("task completed");

        });

    });


    deleteBtn.addEventListener("click", function () {

        task.remove();

    });

});

