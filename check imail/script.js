const email = document.querySelector('input');
const mail_regex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{3,}\.[c,o,m]{3,}$/;
const icon = document.querySelector('.icon');
const invalid = document.querySelector('.invalid');

email.addEventListener('input' , ()=>{
	if(email.value.match(mail_regex)){
		icon.innerHTML = '<i class="fa fa-check"></i>';
		icon.style.color = 'darkgreen';
		email.style.border = '1px solid darkgreen';
		invalid.textContent = '';
	}else if(email.value == ''){
		icon.innerHTML = '';
		invalid.textContent = ''
	}else{
		icon.innerHTML = '<i class="fa fa-exclamation"></i>';
		invalid.textContent = 'Please Enter A Valid Email ID';
		icon.style.color = 'darkred';
		email.style.border = '1px solid darkred';
	}
})