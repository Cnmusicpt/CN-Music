const menuMobileAdd = document.querySelector("#menu-mobile-add");
const menuMobileRemove = document.querySelector("#menu-mobile-remove");
const ul = document.querySelector("#ul");
const btnSearch = document.querySelector("#btnSearch");
const search = document.querySelector("#search");

menuMobileAdd.addEventListener("click", (el) => {
    ul.classList.add("open");
});

menuMobileRemove.addEventListener("click", (el) => {
    ul.classList.remove("open");
});

ul.addEventListener("click", (el) => {
    ul.classList.remove("open");
});

btnSearch.addEventListener("click", (el) => {
    search.value = "";
    alert("Esta funçao ainda nao esta funcionando, fale com o Pedro Moniz.");
});

