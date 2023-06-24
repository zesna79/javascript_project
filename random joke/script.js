const getJoke = document.querySelector('.container button');
const jokeContainer = document.querySelector('.container p');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

getJoke.addEventListener('click' , ()=>{
	jokeContainer.style.opacity = 0;
	fetch(url)
	.then(data => data.json())
	.then((item)=>{
		jokeContainer.textContent = item.joke;
		jokeContainer.style.opacity = 1;
	})
})