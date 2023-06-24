 const settings = document.querySelectorAll('.settings');
 const blur = document.getElementById('blur');
 const contrast = document.getElementById('contrast');
 const hueRotate = document.getElementById('hueRotate');
 const sepia = document.getElementById('sepia');
 const flips = document.querySelectorAll('input[type="radio"]');
 const noFlip = document.getElementById('noFlip');
 const flipX = document.getElementById('flipX');
 const flipY = document.getElementById('flipY');
 const chooseFile = document.getElementById('chooseFile');
 const img = document.querySelector('.image img');

 chooseFile.addEventListener('change' , ()=>{
	resetFilter();
	let reader = new FileReader();
	reader.readAsDataURL(chooseFile.files[0]);
	reader.onload = ()=>{
		img.setAttribute('src' , reader.result)
	}
})

settings.forEach((setting)=>{
	setting.addEventListener('input' , addFilter)
})
function addFilter(){
	let img = document.querySelector('.image img');
	img.style.filter = `blur(${blur.value}px) contrast(${contrast.value}%)
	hue-rotate(${hueRotate.value}deg) sepia(${sepia.value}%)`
}

flips.forEach((flip)=>{
	flip.addEventListener('click' , flipImg)
})
function flipImg(){
	const img = document.querySelector('.image img');
	if(flipX.checked){
		img.style.transform = 'scaleX(-1)'
	}
	else if(flipY.checked){
		img.style.transform = 'scaleY(-1)'
	}
	else{
		img.style.transform = 'scale(1 , 1)'
	}
}

function resetFilter() {
	blur.value = '0';
	contrast.value = '100';
	hueRotate.value = '0';
	sepia.value = '0';
	noFlip.checked = true;
	addFilter();
	flipImg();
}