const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const claculate = document.querySelector('button');
const date = document.querySelector('input');
const year = document.querySelector('.year');
const month = document.querySelector('.month');
const day = document.querySelector('.day');
let Y , M , D;

claculate.addEventListener('click' , () => {
	let today = new Date();
	let birthDate = new Date(date.value);
	
	let birthYear = birthDate.getFullYear();
	let birthMonth = birthDate.getMonth() + 1;
	let birthDay = birthDate.getDate();

	let currentYear = today.getFullYear();
	let currentMonth = today.getMonth() + 1;
	let currentDay = today.getDate();

	leapChecker(currentYear);

	if((birthYear > currentYear) || (birthMonth > currentMonth && birthYear == currentYear) || (birthDay > currentDay && birthMonth == currentMonth && birthYear == currentYear))
		{
			alert('not born yet');
			year.innerHTML = '-';
			month.innerHTML = '-';
			day.innerHTML = '-';
			return;
		}
	
	Y  = currentYear - birthYear;

	if(currentMonth < birthMonth){
		Y--;
		M = 12 + currentMonth - birthMonth;
	}else{
		M = currentMonth - birthMonth;
	}

	if(currentDay < birthDay){
		M--;
		D = months[currentMonth -2] + currentDay - birthDay;
		if(M < 0){
			Y--;
			M = 11;
		}
	}else{
		D = currentDay - birthDay;
	}

	year.innerHTML = Y;
	month.innerHTML = M;
	day.innerHTML = D;
})

function leapChecker(year){
	if(year % 4 == 0 || (year % 100 == 0  && year % 400 == 0)){
		months[1] = 29;
	}else{
		months[1] = 28;
	}
}