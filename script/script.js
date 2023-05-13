document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
    document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});

    }
}
let buttons = document.getElementsByClassName("prodiuct-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
    document.getElementById("order").scrollIntoView({behavior: "smooth"});

    }
}

let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function () {
    let hasError = false;

    [burger, name, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";

        }
    });
    if (!hasError) {
    [burger, name, phone].forEach(item => {
        item.value = "";
    });

        alert("Спасибо за заказ. Мы скоро свяжемся с вами!")
    }
}

let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 77.36;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 2.53;
    } else if (currentCurrency === "BYN") {
        newCurrency = "€";
        coefficient = 0.91;
    } else if (currentCurrency === "€") {
        newCurrency = "¥";
        coefficient = 6.96;
    } else if (currentCurrency === "¥") {
        newCurrency = "₽☭ CCCP";
        coefficient = 0.56; //  по данным википедии https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D0%B1%D0%BB%D1%8C_%D0%A1%D0%A1%D0%A1%D0%A0
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
}