let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
const cube = document.querySelector('.images');
let deg = 0;

nextBtn.addEventListener('click' , ()=>{
	deg -= 90;
	cube.style.transform = `rotateY(${deg}deg)`
})

prevBtn.addEventListener('click' , ()=>{
	deg += 90;
	cube.style.transform = `rotateY(${deg}deg)`
})