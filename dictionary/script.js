const inpWord = document.querySelector('.search input');
const search = document.querySelector('.search button');
const result = document.querySelector('.result');
const audio = document.querySelector('audio');
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

search.addEventListener('click' , ()=>{
	fetch(`${url}${inpWord.value}`)
	.then((response)=> response.json())
	.then((data)=> {
		result.innerHTML = `
		<div class="word">
			<h2>${inpWord.value}</h2>
			<button onclick="playAdiue()"><i class="fa fa-play-circle" aria-hidden="true"></i></button>
		</div>
		<p class="accent">${data[0].meanings[0].partOfSpeech} <span>${data[0].phonetic}</span></p>
		<p class="def">${data[0].meanings[0].definitions[0].definition}</p>
		<p class="example">${data[0].meanings[0].definitions[0].example || ''}</p>
		`
		audio.setAttribute('src' , `${data[0].phonetics[0].audio}`);
	})
	.catch(result.innerHTML = `<div class="word"><h2>couldn't find the${inpWord.value}</h2></div>`)
})

function playAdiue(){
	audio.play()
}