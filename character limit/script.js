const txt = document.querySelector('textarea');
let character = document.querySelector('.character');

txt.addEventListener('input' , ()=>{
	let len_character = txt.value.length;
	character.textContent = `${len_character}/60`;
	if(len_character > 60){
		txt.style.borderColor = 'crimson';
		character.style.color = 'crimson';
	}else{
		txt.style.borderColor = 'lightgrey';
		character.style.color = 'gray';
	}
})