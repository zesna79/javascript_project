const generate = document.querySelector('.generate');
const copy = document.querySelector('.copy');
const color = document.querySelector('.color');
const hexCode = document.querySelector('.hex-code');
const alert = document.querySelector('.alert');
const hexNumber = '0123456789abcdef';

generate.addEventListener('click' , ()=>{
	let hex = '#';
	for(let i = 0; i < 6; i++){
		hex += hexNumber[Math.floor(Math.random()*hexNumber.length)]
	}
	hexCode.value = hex;
	color.style.backgroundColor = hex;

	color.classList.remove('show');
	setTimeout(() => { 
		color.classList.add('show')
		alert.style.transform = 'translateX(calc(100% + 10px))'
	}, 10);
})

copy.addEventListener('click' , ()=>{
	hexCode.select();
	document.execCommand('copy');
	let alertTxt = setTimeout(() => {
		alert.style.transform = 'translateX(calc(-10px))'
	}, 100);	
})