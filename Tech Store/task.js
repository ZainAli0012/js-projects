



let productName = document.getElementById("product-name");
let productPrice = document.getElementById("product-price");
let addBtn = document.getElementById("add-btn");
let product1 = document.getElementById("product1");
let product2 = document.getElementById("product2");
let items = document.getElementById("items");
let price = document.getElementById("price");

let Card = 1;

addBtn.addEventListener("click", function () {

    let name = productName.value;
    let value = Number(productPrice.value);

    if (name === "" || productPrice.value === "") {
        alert("Enter product name and price");
        return;
    }

    if (Card === 1) {

        document.getElementById("product-name1").innerText = name;
        document.getElementById("product-price1").innerText = "AED " + value;
        Card = 2;

    } else {

        document.getElementById("product-name2").innerText = name;
        document.getElementById("product-price2").innerText = "AED " + value;

        Card = 1;
    }

    let price1 = document.getElementById("product-price1").innerText;
    let price2 = document.getElementById("product-price2").innerText;

    let value1 = Number(price1.replace("AED ", ""));
    let value2 = Number(price2.replace("AED ", ""));

    let totalPrice = value1 + value2;

    items.innerText = "2 items";
    price.innerText = "AED " + totalPrice;

    productName.value = "";
    productPrice.value = "";
});








