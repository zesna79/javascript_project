let flip = document.querySelector('.flip');
let reset = document.querySelector('.reset');
let front = document.querySelector('#front');
let behind = document.querySelector('#behind');
let head = 0;
let tail = 0;


flip.addEventListener('click' , ()=>{
	let num = Math.floor(Math.random()*2);
	front.style.animation = 'none';
	behind.style.animation = 'none';

	if(num){
		setTimeout(()=>{
			front.style.animation = 'spin-tail 3s forwards';
			behind.style.animation = 'spin-head 3s forwards';
		}, 100)
		tail++;
	}else{
		setTimeout(()=>{
			behind.style.animation = 'spin-tail 3s forwards';
			front.style.animation = 'spin-head 3s forwards';
		} , 100)
		head++;
	}
	setTimeout(score, 3000);
	disable()
});

function score(){
	document.querySelector('.head').textContent = `Head: ${head}`;
	document.querySelector('.tail').textContent = `Tail: ${tail}`;
}

function disable(){
	document.querySelector('.flip').disabled = true;
	setTimeout(()=>{
		document.querySelector('.flip').disabled = false
	}, 3000)
}

function resset(){
	front.style.animation = 'none';
	behind.style.animation = 'none';
	behind.style.transform = 'rotateX(180deg)';
	front.style.transform = 'rotateX(0deg)';
	head = 0;
	tail = 0;
	score()
}