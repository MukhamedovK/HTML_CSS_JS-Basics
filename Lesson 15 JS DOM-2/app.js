const body = document.body

const text2 = document.createElement("p")

text2.innerText = "Text 2"

const text1 = document.querySelector('#text1')

text1.after(text2)

const btn = document.querySelector("button")


//JS events

// btn.addEventListener("click", function() {
//     alert('Кнопка нажата')
// })

// btn.addEventListener("mouseenter", function() {
//     text2.style.color = "red"
// })

// btn.addEventListener("mouseleave", function() {
//     text2.style.color = "black"
// })

const input = document.querySelector("#inp")

// input.addEventListener("input", function() {
//     console.log("Инпут работает")
// })

// input.addEventListener("input", function() {
//     console.log(input.value)
// })

const span = document.querySelector("span")

btn.addEventListener("click", function() {
    span.innerText = input.value
})

