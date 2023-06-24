const rgbInput = document.querySelector('#rgb');
const hexInput = document.querySelector('#hex');
let rgbArray = [];

function valid(element){
	element.style.color = 'green'
}
function invalid(element){
	element.style.color = 'red' 
}

rgbInput.addEventListener('input' , ()=>{
	let rgbCode = rgbInput.value;
	let rgbRex1 = /^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/
	let rgbRex2 = /^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}$/
	let hex = '#'

	if(rgbRex1.test(rgbCode) || rgbRex2.test(rgbCode)){
		rgbCode = rgbCode.replace(/[rgb()]+/g , '') || rgbCode;
		rgbCode = Array.from(rgbCode.split(','));

		let condition = rgbCode.every((value)=>{
			return parseInt(value) <= 255;
		}); 
		if(condition){
			valid(rgbInput);
			for(let i = 0 ; i < rgbCode.length ; i++){
				let value = parseInt(rgbCode[i]).toString(16);
				hex += value.length == 1 ? 0+value : value;
			}
		}else{
			invalid(rgbInput);
		}
	}else{
		invalid(rgbInput)
	}

	hexInput.value = hex;
	document.body.style.backgroundColor = hex;
})

hexInput.addEventListener('input' , ()=>{
	let hexCode = hexInput.value;

	if(/^#?[a-fA-F0-9]{6}$/.test(hexCode)){
		valid(hexInput);
		hexCode = hexCode.split("#")[1] || hexCode;
		for(let i = 0 ; i < hexCode.length ; i+=2){
			rgbArray.push(parseInt(hexCode[i] + hexCode[i+1] , 16));
		}
	}else{
		invalid(hexInput);
		rgbArray = [];
	}
	
	rgbInput.value = `rgb(${rgbArray})`;
	document.body.style.backgroundColor = `rgb(${rgbArray})`;
})