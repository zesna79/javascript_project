const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');
const range = document.querySelector('.range');
const slider_track = document.querySelector('.slider-track')
const mingap = 0;

slider1.addEventListener('input' , ()=>{
	if((parseInt(slider2.value) - parseInt(slider1.value)) <= mingap){
		slider1.value = parseInt(slider2.value) - mingap;
	}
	range.innerHTML = `${slider1.value}-${slider2.value} <div id="triangle"></div>`

	fillColor()
})

slider2.addEventListener('input' , ()=>{
	if((parseInt(slider2.value) - parseInt(slider1.value)) <= mingap){
		slider2.value = parseInt(slider1.value) + mingap;
	}
	range.innerHTML = `${slider1.value}-${slider2.value} <div id="triangle"></div>`

	fillColor()
})

function fillColor(){
	let max_Value = slider1.max;

	const start = (slider1.value / max_Value) * 100;
	const end = (slider2.value / max_Value) * 100;

	slider_track.style.background = `linear-gradient(to right , #ffffff ${start}% , rgb(194, 194, 192) ${start}% , rgb(194, 194, 192) ${end}% , #ffffff ${end}%)`
}
fillColor()