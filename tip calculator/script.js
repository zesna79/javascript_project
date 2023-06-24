const pillInput = document.querySelector('input[type="number"]');
const sliders = document.querySelectorAll('input[type="range"]');

pillInput.addEventListener('change' , calculator);

sliders.forEach(slider => {
	slider.addEventListener('input' , calculator)
});


function calculator(){
	let pill = parseFloat(pillInput.value);
	pillInput.value = pill.toFixed(2);

	let tipPresent = document.querySelector('#tip-present').value / 100;
	let tipPresentAmount = document.querySelector('#tip-present-amount');
	let tip = pill * tipPresent;
	let tipPresentTxt = document.querySelector('#tip-present-txt');
	tipPresentTxt.textContent = tipPresent;
	tipPresentAmount.textContent = `$ ${tip.toFixed(2)}`;

	let totalAmount = document.querySelector('#total-amount');
	let total = pill + tip;
	totalAmount.textContent = `$ ${total}`;

	let numPeopleTxt = document.querySelector('#num-people-txt');
	let numPeople = document.querySelector('#num-people').value;
	numPeopleTxt.textContent = numPeople;

	let tipPre = tip / numPeople;
	let totalPre = total / numPeople;
	let tipPreTxt = document.querySelector('#tip-pre');
	let totalPreTxt = document.querySelector('#total-pre');
	tipPreTxt.textContent = tipPre.toFixed(2);
	totalPreTxt.textContent = totalPre.toFixed(2);

}