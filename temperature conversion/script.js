const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');

celsius.addEventListener('input' , ()=>{
	let output1 = (parseFloat(celsius.value) * 9/5) + 32;
	fahrenheit.value = parseFloat(output1.toFixed(2))
})

fahrenheit.addEventListener('input' , ()=>{
	let output2 = (parseFloat(fahrenheit.value) - 32) * 5/9;
	celsius.value = parseFloat(output2.toFixed(2))
})
