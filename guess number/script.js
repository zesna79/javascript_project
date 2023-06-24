const btn = document.querySelector('button');
const answer_number = Math.floor(Math.random()*100) + 1;
const massage1 = document.querySelector('.msg1');
const massage2 = document.querySelector('.msg2');
const massage3 = document.querySelector('.msg3');
let sum_of_guess = 0;
const gussed = [];

btn.addEventListener('click' , ()=>{
	const guess_number = document.querySelector('input').value;

	if(guess_number < 1 || guess_number > 100){
		alert('please enter number between 1-100')
	}
	else{
		sum_of_guess += 1;
		gussed.push(guess_number);

		if(guess_number > answer_number){
			massage1.textContent = 'your guess is too high'
			massage2.textContent = `of guess: ${sum_of_guess}`
			massage3.textContent = `guessed a number are: ${gussed}`
		}
		else if(guess_number < answer_number){
			massage1.textContent = 'your guess is too low'
			massage2.textContent = `of guess: ${sum_of_guess}`
			massage3.textContent = `guessed a number are: ${gussed}`
		}
		else if(guess_number == answer_number){
			massage1.textContent = 'yeesss. you win!'
			massage2.textContent = `of guess: ${sum_of_guess}`
			massage3.textContent = `guessed a number are: ${gussed}`
		}
	}
})