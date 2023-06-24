const hr = document.querySelector('.hour');
const min = document.querySelector('.minute');
const sec = document.querySelector('.second');

setInterval(() => {
	const date = new Date();
	const hrNow = date.getHours();
	const minNow = date.getMinutes();
	const secNow = date.getSeconds();

	const hrDeg = (hrNow * 360) / 12 + (((minNow * 360) / 60) / 12);
	const minDeg = (minNow * 360) / 60 + (((secNow * 360) / 60) / 60);
	const secDeg = (secNow * 360) / 60;

	hr.style.transform = `rotate(${hrDeg}deg)`;
	min.style.transform = `rotate(${minDeg}deg)`;
	sec.style.transform = `rotate(${secDeg}deg)`;
}, 1000);  