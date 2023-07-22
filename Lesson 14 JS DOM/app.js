// const text1 = window.document.getElementsByTagName("p")

// console.log(text1)

// const text2 = window.document.getElementsByClassName("text")

// console.log(text2)

// const text3 = window.document.getElementById("text")

// console.log(text3)

// text1[0].textContent = "<b>Text from JS</b>"
// text1[1].innerText = "<b>Text from JS 2</b>"
// text1[2].innerHTML = "<b>Text from JS 3</b>"


// // add, remove, replace, contains
// text1[0].classList.add("red")
// text1[0].classList.remove("red")
// // text1[0].classList.replace("red")
// // text1[0].classList.contains("red")

// console.log(document.querySelector('.text, #text')) // выбирает только первый элемент
// console.log(document.querySelectorAll('.text, #text')) // выбирает все элементы

// const image = document.createElement("img")

// image.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Abd_al-Muttalib.png')

// const body = document.body;

// body.append(image)

let heading1 = document.createElement("h1")
let heading2 = document.createElement("h2")

h1.textContent = "vsdv"
h2.textContent = "dsvsvsv"

heading1.style.color = "red"
heading2.style.color = "green"

const div = document.div

div.append(h1)
div.append(h2)