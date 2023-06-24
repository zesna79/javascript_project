const txtarea = document.querySelector('textarea');
const word = document.querySelector('.word span');
const character = document.querySelector('.character span');

txtarea.addEventListener('input' , ()=>{
	const txt = txtarea.value.trim();
	character.textContent = txt.length;
	
	const wordLen = txt.split(/\s+/).filter((item)=> item);
	word.textContent = wordLen.length;
})