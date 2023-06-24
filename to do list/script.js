let tasks = document.querySelector('.tasks')
let add = document.querySelector('.new-task button')
let new_task = document.querySelector('.new-task input')


add.addEventListener('click' , ()=>{
	if(new_task.value.length > 0){
		tasks.innerHTML += 
		`
		<div class="task">
			<div class="text">${new_task.value}</div>
			<button class="delete" type="button"><i class="fa fa-trash" aria-hidden="true"></i></button>
		</div>
		`;
	}
	else alert('please write something in the box')

	let del = document.querySelectorAll('.delete');
	for(let i=0 ; i < del.length ; i++){
		del[i].addEventListener('click' , ()=>{
			del[i].parentNode.remove()
		})
	}

	let text = document.querySelectorAll('.text');
	for(let i=0 ; i < text.length ; i++){
		text[i].addEventListener('click' , ()=>{
			text[i].classList.toggle('done')
		})
	}

	new_task.value = "";
})