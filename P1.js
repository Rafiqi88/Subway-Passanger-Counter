// let welcomeEl = document.getElementById("welcome-el")


// let name = "Waris Rafiqi"
// let greeting = "Hi, How are you ?"
// let renderGreeting = name + "  " + greeting

// welcomeEl.innerText = renderGreeting


// let welcomeEl = document.getElementById("welcome-el")


// let name = "Waris Rafiqi"
// let greeting = "Hi, How are you ?"

// welcomeEl.innerText = name + "  " + greeting

// welcomeEl.innerText += "   -_-"


// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
// let count = 0 

// function increment(){
//     count += 1
//     countEl.textContent = count
//     // 2 mistake 
// }
 
// function save(){
//     let countStr = count +  ' - '
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0 // 1 mistake 
//     console.log(count)
// }

let  countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0 

function increment() {
    count += 1
    countEl.textContent = count
}
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
