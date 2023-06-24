const slider = document.querySelector('input');
const my_img = document.querySelector('#my-img')

slider.addEventListener('input' , ()=>{
	my_img.style.clipPath = `polygon(0 0, ${slider.value}% 0, ${slider.value}% 100%, 0 100%)`
})