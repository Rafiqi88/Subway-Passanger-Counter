// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//     console.log("The button was clicked")
// }

// function birthday(){
//     console.log(42)
// }

// birthday()


// let lap1 = 34 
// let lap2 = 33 
// let lap3 = 36

// function LogLapTime(){
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)

//   // Way one: console.log(lap1 + lap2 + lap3)
// }

// LogLapTime()

// let lapsCompleted = 0 

// function incrementLap(){
//     lapsCompleted = lapsCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lapsCompleted)

// let count = 0 

// function  increment() {
//     count = count + 1 
//     console.log(count)
// }

// let name = "Waris Rafiqi"
// let greeting = "Hi, my name is"


// let myGreeting = name +  '   '  + greeting

// console.log(myGreeting)

let countEl = document.getElementById("count-el")
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
    console.log(count)
}


