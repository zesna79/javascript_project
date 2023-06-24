const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelectorAll('.img-container img');
const button = document.querySelectorAll('.btn-container button');
let i = 0;
let j = 4;

next.addEventListener('click' , ()=>{
	images.forEach(element => {
		element.style.display = 'none'
	});
	i = (i+1+j) % j
	document.querySelector('#img' + i).style.display = 'inline';
})

prev.addEventListener('click' , ()=>{
	images.forEach(element => {
		element.style.display = 'none'
	});
	i = (i-1+j) % j
	document.querySelector('#img' + i).style.display = 'inline';
})

function dot(i){
	button.forEach(btn =>{
		btn.style.backgroundColor = 'transparent'
	})
	document.querySelector('#btn' + i).style.backgroundColor = 'rgba(48, 148, 151, 0.5)';
	images.forEach(element => {
		element.style.display = 'none'
	});
	document.querySelector('#img' + i).style.display = 'inline';
}
// button.forEach((btn , index) => {
// 	btn.addEventListener('click' , ()=>{
// 		btn.classList.add('active-btn');

// 		images.forEach(element => {
// 			element.style.display = 'none'
// 		});
// 		document.querySelector('#img' + index).style.display = 'inline';
// 	})
// })
