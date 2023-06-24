const btn = document.querySelector('button');
const images = document.querySelectorAll('img');
let msg = document.querySelector('p');

btn.addEventListener('click' , function roll(){
	let random1 = Math.ceil(Math.random()*6);
	let random2 = Math.ceil(Math.random()*6);

	images.forEach((img)=>{
		img.classList.add('shake');
	})

	setTimeout(() => {
		images.forEach((img)=>{
			img.classList.remove('shake');
		})
		const dice1 = document.getElementById('dice1');
		const dice2 = document.getElementById('dice2');
		dice1.setAttribute('src' , `./dice${random1}.png`);
		dice2.setAttribute('src' , `./dice${random2}.png`);

		msg.textContent = `your roll is ${random1 + random2}`
	}, 1000);
})

roll();
