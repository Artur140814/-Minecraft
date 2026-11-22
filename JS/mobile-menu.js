const burgerElement = document.querySelector(".burger")
const menu = document.querySelector(".menu")
const backdrop = document.querySelector(".menu__backdrop")

burgerElement.addEventListener("click", () => {
    menu.classList.toggle("open")
    backdrop.classList.toggle("open")
    burgerElement.classList.toggle("open")
})