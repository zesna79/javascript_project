const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const body = document.querySelector('body');
const btns = document.querySelectorAll('.buttons button');
const generate = document.getElementById('generator');
const txt = document.querySelector('textarea');
const copy = document.getElementById('copy');
let direction = 'to top';

function setDirection(value , _this){
	btns.forEach((btn) =>{
		btn.classList.remove('active');
	})
	_this.classList.add('active');
	direction = value;
}

generate.addEventListener('click' , ()=>{
	body.style.background = `linear-gradient(${direction} , ${color1.value} , ${color2.value})`;
	txt.value = `linear-gradient(${direction} , ${color1.value} , ${color2.value})`;
})

copy.addEventListener('click' , ()=>{
	txt.select();
	document.execCommand('copy');
	alert('Gradient Copied!');
})