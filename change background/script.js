let inputs = document.querySelector('input')
let red = document.querySelector('#red');
let green = document.querySelector('#green');
let blue = document.querySelector('#blue');
let body = document.querySelector('body');
let paragraph = document.querySelector('p')

paragraph.innerHTML = `rgb( ${red.value} , ${green.value} , ${blue.value})`

let change = ()=>{
	body.style.backgroundColor = `rgb( ${red.value} , ${green.value} , ${blue.value})`
	paragraph.innerHTML = `rgb( ${red.value} , ${green.value} , ${blue.value})`
}

// red.addEventListener('input' , ()=>{
// 	body.style.backgroundColor =
// 	`
// 	rgb( ${red.value} , ${green.value} , ${blue.value})
// 	`
// 	paragraph.innerHTML = `rgb( ${red.value} , ${green.value} , ${blue.value})`
// })

// green.addEventListener('input' , ()=>{
// 	body.style.backgroundColor =
// 	`
// 	rgb( ${red.value} , ${green.value} , ${blue.value})
// 	`
// 	paragraph.innerHTML = `rgb( ${red.value} , ${green.value} , ${blue.value})`
// })

// blue.addEventListener('input' , ()=>{
// 	body.style.backgroundColor =
// 	`
// 	rgb( ${red.value} , ${green.value} , ${blue.value})
// 	`
// 	paragraph.innerHTML = `rgb( ${red.value} , ${green.value} , ${blue.value})`
// })

// inputs.addEventListener('input' , ()=>{
// 	body.style.backgroundColor =
// 	`
// 	rgb( ${red.value} , ${green.value} , ${blue.value})
// 	`
// 	paragraph.innerHTML = `rgb( ${red.value} , ${green.value} , ${blue.value})`
// })

