const password = document.querySelector('#password');
const msg = document.querySelector('.msg');
const bar_container = document.querySelector('.bar-container');
const parameters = {
	letter: false,
	number: false,
	spical: false,
	count: false
}

password.addEventListener('input' , ()=>{
	let pass = password.value;
	parameters.letter = (/[a-zA-Z]+/.test(pass))?true:false;
	parameters.number = (/[0-9]+/.test(pass))?true:false;
	parameters.spical = (/[`~!@#$%^&*-.,;\:'"/?]+/.test(pass))?true:false;
	parameters.count = (pass.length > 7)?true:false;

	bar_container.innerHTML = ''
	let bar = Object.values(parameters).filter(value => value);
	for(let i in bar){
		const process = document.createElement('p');
		process.classList.add('process');
		bar_container.appendChild(process);
	}

	const process_bar = document.querySelectorAll('.process');
	for(let x = 0 ; x < process_bar.length ; x++){
		switch(process_bar.length -1){
			case 0:
				process_bar[0].style.width = '25%';
				process_bar[0].style.backgroundColor = 'rgb(96, 175, 129)';
				msg.textContent = 'your password is very weak';
				break;
			case 1:
				process_bar[1].style.width = '50%';
				process_bar[1].style.backgroundColor = 'rgb(66, 155, 99)';
				msg.textContent = 'your password is weak';
				break;
			case 2:
				process_bar[2].style.width = '75%';
				process_bar[2].style.backgroundColor = 'rgb(36, 135, 64)';
				msg.textContent = 'your password is good';
				break;
			case 3:
				process_bar[3].style.width = '100%';
				process_bar[3].style.backgroundColor = 'rgb(30, 115, 56)';
				msg.textContent = 'your password is strong';
		}
	}
})