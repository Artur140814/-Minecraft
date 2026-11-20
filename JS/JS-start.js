// let artefakt = "камень из почки динозавра"
// console.log(artefakt);
// artefakt = 4554767389087654
// console.log(artefakt);
// let test;
// console.log(test);
// test = true
// console.log(test);
// const name = "Олег"
// console.log(name);
// name = "Виталик"
// console.log(name);
// const age;
// const name = prompt("введите имя")
// console.log(`привет,${name}`);
// const acces = confirm("тебя зовут Артур?")
// if (acces) {
//     alert ("доступ разрешён")
// }
// else{
//     alert ("доступ запрещён")
// }

// function sayHi(name) { //параметры функции
//     console.log(`Датуте, вы попали на осень клутой сайт (но это не точно) с Minecraft (Майнкрафт моя жизнь!). Этот сайт пренадлежит ${name}`);
// }

// sayHi("Никите")
// sayHi("Васе")
// sayHi("Пете")
// sayHi("китайскому мальчику из Японии")

// function calculator(number1, number2, operator) {
//     let result = 0
//     if (operator == "+") {
//         result = number1 + number2
//     }
//     else if (operator == "-") {
//         result = number1 - number2
//     }
//     else if (operator == "*") {
//         result = number1 * number2
//     }
//     else if (operator == ":") {
//         result = number1 / number2
//     }
//     else if (operator == "**") {
//         result = number1 ** number2
//     }
//     return result
// }

// const result = calculator(3, 2, "**")
// console.log(result)

const weapon =  {
    name: "АК-47",
    price: 15000,
    weight: 500,
    isChina: true,
    reviews: ["Мне понравился.", "Привод огонь, при открытии коробки радовался как ребёнок!", "Все соответствует описанию, доставили быстро, доволен."],
    ttk: {
        acc: "Mini - type",
        weight: 2700,
        isBelt: true
    },
    sayHi: function() {
        console.log(`Привет меня зовут ${this.name}. Я рассказываю про себя`)
    }
}

console.log(weapon.reviews[1])
weapon.sayHi()
console.log(document)

const test = document.createElement("button")
document.body.append(test)

const burgerElement = document.querySelector(".burger")
const menu = document.querySelector(".menu")
const backdrop = document.querySelector(".menu__backdrop")

burgerElement.addEventListener("click", () => {
    menu.classList.toggle("open")
    backdrop.classList.toggle("open")
    burgerElement.classList.toggle("open")
})