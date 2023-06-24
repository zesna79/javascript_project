const btns = document.querySelectorAll('.wrapper button');
const content = document.querySelectorAll('.content');
const icon = document.querySelectorAll('.wrapper i');

for(let i=0 ; i < btns.length ; i++){
	btns[i].addEventListener('click' , ()=>{
		
		if(parseInt(content[i].style.height) != content[i].scrollHeight ){
			content[i].style.height = content[i].scrollHeight + 'px';
			icon[i].classList.remove('fa-plus');
			icon[i].classList.add('fa-minus');
		}else{
			content[i].style.height = '0';
			icon[i].classList.add('fa-plus');
			icon[i].classList.remove('fa-minus');
		}
	})
}
