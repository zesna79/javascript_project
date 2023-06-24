const weigth = document.querySelector('#weigth');
const heigth = document.querySelector('#heigth');
const kg = document.querySelector('.kg');
const cm = document.querySelector('.cm');
let bmi_number = document.querySelector('.bmi');
const result = document.querySelector('.result')


let calc = ()=>{
	kg.textContent = weigth.value + ' kg';
	cm.textContent = heigth.value + ' cm';
	let bmi = ( weigth.value / Math.pow(( heigth.value / 100 ) , 2) ).toFixed(1);
	bmi_number.textContent = bmi;

	if(bmi < 18.5){
		result.textContent = 'UnderWeigth'
	   }
	   else if(bmi >= 18.5 && bmi <= 24.9){
		result.textContent = 'NormalWeigth'
	   }
	   else if(bmi > 24.9 && bmi <= 29.9){
		result.textContent = 'OverWeigth'
	   }
	   else{
		   result.textContent = 'OnNormal'
	   }
}

// weigth.addEventListener('input' , ()=>{
// 	kg.textContent = weigth.value + ' kg';
// 	let bmi = ( weigth.value / Math.pow(( heigth.value / 100 ) , 2) ).toFixed(1);
// 	bmi_number.textContent = bmi;

// 	if(bmi < 18.5){
// 		result.textContent = 'UnderWeigth'
// 	   }
// 	   else if(bmi >= 18.5 && bmi <= 24.9){
// 		result.textContent = 'NormalWeigth'
// 	   }
// 	   else if(bmi > 24.9 && bmi <= 29.9){
// 		result.textContent = 'OverWeigth'
// 	   }
// 	   else{
// 		   result.textContent = 'OnNormal'
// 	   }
// })
// heigth.addEventListener('input' , ()=>{
// 	cm.textContent = heigth.value + ' cm';
// 	let bmi = ( weigth.value / Math.pow(( heigth.value / 100 ) , 2) ).toFixed(1);
// 	bmi_number.textContent = bmi;

// 	if(bmi < 18.5){
// 		result.textContent = 'UnderWeigth'
// 	   }
// 	   else if(bmi >= 18.5 && bmi <= 24.9){
// 		result.textContent = 'NormalWeigth'
// 	   }
// 	   else if(bmi > 24.9 && bmi <= 29.9){
// 		result.textContent = 'OverWeigth'
// 	   }
// 	   else{
// 		   result.textContent = 'OnNormal'
// 	   }
// })