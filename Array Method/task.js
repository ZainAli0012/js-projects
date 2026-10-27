let input = document.getElementById("Input");
let method = document.getElementById("method");
let btn = document.getElementById("btn");
let page = document.getElementById("pages");
let value = document.getElementById("value");
let userValue = document.getElementById("userValue");


btn.addEventListener("click", function () {

    let arr = input.value.split(",").map(Number);

    page.innerText = "Original: [" + arr + "]";


    if (method.value == "slice") {

        let result = arr.slice(1, 4);

        value.innerText = "Result: [" + result + "]";
    }


    else if (method.value == "push") {

        arr.push(Number(userValue.value));

        value.innerText = "Result: [" + arr + "]";
    }


    else if (method.value == "pop") {

        arr.pop();

        value.innerText = "Result: [" + arr + "]";
    }


    else if (method.value == "shift") {

        arr.shift();

        value.innerText = "Result: [" + arr + "]";
    }


    else if (method.value == "unshift") {

        arr.unshift(Number(userValue.value));

        value.innerText = "Result: [" + arr + "]";
    }


    else if (method.value == "reverse") {

        arr.reverse();

        value.innerText = "Result: [" + arr + "]";
    }


    else if (method.value == "map") {

        let result = arr.map(function (num) {

            return num * Number(userValue.value);

        });

        value.innerText = "Result: [" + result + "]";
    }


    else if (method.value == "filter") {

        let result = arr.filter(function (num) {

            return num > Number(userValue.value);

        });

        value.innerText = "Result: [" + result + "]";
    }


    else if (method.value == "find") {

        let result = arr.find(function (num) {

            return num > Number(userValue.value);

        });

        value.innerText = "Result: " + result;
    }


    else if (method.value == "includes") {

        let result = arr.includes(Number(userValue.value));

        value.innerText = "Result: " + result;
    }


    else if (method.value == "indexOf") {

        let result = arr.indexOf(Number(userValue.value));

        value.innerText = "Result: " + result;
    }


    else if (method.value == "join") {

        let result = arr.join("-");

        value.innerText = "Result: " + result;
    }


    else if (method.value == "concat") {

        let result = arr.concat([Number(userValue.value)]);

        value.innerText = "Result: [" + result + "]";
    }


    else if (method.value == "some") {

        let result = arr.some(function (num) {

            return num > Number(userValue.value);

        });

        value.innerText = "Result: " + result;
    }


    else if (method.value == "reduce") {

        let result = arr.reduce(function (total, num) {

            return total + num;

        }, 0);

        value.innerText = "Result: " + result;
    }

});