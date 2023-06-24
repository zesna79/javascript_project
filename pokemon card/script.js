const url = ' https://pokeapi.co/api/v2/pokemon/';
const generator = document.querySelector('.generate');
const card = document.querySelector('.card');
const typeColor = {
	bug: '#26de81',
	dragon: '#ffeaa7',
	electric: '#fed330',
	fairy: '#FF0069',
	fighting: '#30336b',
	fire: '#f0932b',
	flying: '#81ecec',
	grass: '#00b894',
	ground: '#EFB549',
	ghost: '#a55eea',
	ice: '#74b9ff',
	normal: '#95afc0',
	poison: '#6c5ce7',
	psychic: '#a29bfe',
	rock: '#2d3436',
	water: '#0190FF',
}

function getPokeData(){
	const id = Math.ceil(Math.random()*150);
	const finalUrl = url + id;
	fetch(finalUrl).then(responce => responce.json().then((data)=>{
		
		const hp = data.stats[0].base_stat;
		const src = data.sprites.other.dream_world.front_default;
		const name = data.name;
		const attack = data.stats[1].base_stat;
		const defense = data.stats[2].base_stat;
		const speed = data.stats[5].base_stat;
		const them = typeColor[data.types[0].type.name];
		card.style.background = `radial-gradient(circle at 50% -60%, ${them} 65%, snow 65%)`;

		card.innerHTML = `
		<div class="hp">
			<p>hp ${hp}</p>
		</div>
		<img src="${src}" alt="">
		<h1 class="name">${name}</h1>
		<div class="types"></div>
		<div class="info">
			<div class="attack">
				<span>${attack}</span>
				<p>Attack</p>
			</div>
			<div class="defense">
				<span>${defense}</span>
				<p>Defense</p>
			</div>
			<div class="speed">
				<span>${speed}</span>
				<p>Speed</p>
			</div>
		</div>
		`
		appendTypes(data.types , them)
	}))
}

function appendTypes(types , them){
	types.forEach(item => {
		const span = document.createElement('SPAN');
		span.style.backgroundColor = them;
		span.textContent = item.type.name;
		document.querySelector('.types').appendChild(span);
	});
}


generator.addEventListener('click', getPokeData);
window.addEventListener('load', getPokeData);