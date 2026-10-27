let number = document.getElementById("number");

let Btn = document.getElementById("Btn");

let Screen = document.getElementById("Screen");

Btn.addEventListener("click", function() {

    let num = Number(number.value);

    let result = "";

    for (let num1 = 1; num1 <= 5; num1++) {

        let stars = "";

        for (let a = 1; a <= num1; a++) {

            stars += "*";
        }

        result += num + " x " + num1 + " = " + (num * num1) + "   " + stars + "\n";
    }

    Screen.innerText = result;
});