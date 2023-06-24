let theme = document.querySelector(':root');
let buttons = document.querySelectorAll('.btn');

buttons.forEach((btn)=>{
	btn.addEventListener('click' , ()=>{
		let color = btn.classList;
		if(color.contains('btn1')){
			theme.style.setProperty('--theme-color' , 'rgb(191, 68, 92)')
		}
		else if(color.contains('btn2')){
			theme.style.setProperty('--theme-color' , 'rgb(54, 80, 144)')
		}
		else if(color.contains('btn3')){
			theme.style.setProperty('--theme-color' , 'rgb(85, 165, 104)')
		}
		else if(color.contains('btn4')){
			theme.style.setProperty('--theme-color' , 'rgb(161, 105, 197)')
		}
		else{
			theme.style.setProperty('--theme-color' , 'rgb(68, 156, 191)')
		}
	})
})