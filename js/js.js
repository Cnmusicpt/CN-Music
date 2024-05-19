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
    alert("Esta função ainda não está funcionando, fale com a Web Code.");
});

baixar1.addEventListener("click", (el) => {
    search.value = "";
    alert("Ops! Lamentamos já se fez mais de 1500 Downloads por hoje. Espere até a próxima atualização...");
   
});


lo.addEventListener("click", (el) => {
    search.value = "";
    alert("Ops! Lamentamos mais de 2100 Downloads. Por agora somente por ouvir...");
   
});


