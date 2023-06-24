const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const container = document.querySelector('.container');
const date = document.querySelector('#date');


let addzero = num => num<10 ? `0${num}` : num;

date.addEventListener('input' , ()=>{
	let i = setInterval(reminder, 1000);
});

function reminder(){
	const endDete = new Date(date.value);
	let endTime = endDete.getTime();
	const newDate = new Date();
	const remindTime = endTime - newDate;

	if(endDete < newDate){
		clearInterval(i)
		container.innerHTML = '<h1>Countdown had expired!</h1>'
	}

	const oneSecond = 1000;
	const oneMinute = oneSecond * 60;
	const oneHour = oneMinute * 60;
	const oneDay = oneHour * 24;

	const leftDay = Math.floor(remindTime / oneDay);
	const leftHour = Math.floor((remindTime % oneDay) / oneHour);
	const leftMinute = Math.floor((remindTime % oneHour) / oneMinute);
	const leftSecond = Math.floor((remindTime % oneMinute) / oneSecond);

	days.textContent = addzero(leftDay);
	hours.textContent = addzero(leftHour);
	minutes.textContent = addzero(leftMinute);
	seconds.textContent = addzero(leftSecond);
}

