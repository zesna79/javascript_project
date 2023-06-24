const height = document.querySelector('#height');
const width = document.querySelector('#width');
const corners = document.querySelectorAll('input[type="range"]');
const sizes = document.querySelectorAll('input[type="number"]');
const shape = document.querySelector('.shape');
let code = document.querySelector('.code input');
let copy = document.querySelector('button');

corners.forEach((corner)=>{
	corner.addEventListener('input' , creatBolb)
})
sizes.forEach((size)=>{
	size.addEventListener('change' , creatBolb)
})

function creatBolb(){
	let radius1 = corners[0].value;
	let radius2 = corners[1].value;
	let radius3 = corners[2].value;
	let radius4 = corners[3].value;

	let border_radius = `${radius1}% ${100-radius1}% ${100-radius3}% ${radius3}% / ${radius4}% ${radius2}% ${100-radius2}% ${100-radius4}%`
	shape.style.cssText = `border-radius: ${border_radius}`;
	code.value = `border-radius: ${border_radius}`;

	shape.style.height = height.value + 'px';
	shape.style.width = width.value + 'px';
}
creatBolb();

copy.addEventListener('click' , ()=>{
	code.select();
	document.execCommand('copy');
	alert('code copied!')
})
