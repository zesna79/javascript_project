const Rupees = document.querySelector('.INR');
const Dollars = document.querySelector('.USD');
const Japanese = document.querySelector('.JPY');
const format = document.querySelector('.amount button');

const formatter1 = new Intl.NumberFormat('en-IN' , {style:'currency' , currency:'INR'});
const formatter2 = new Intl.NumberFormat('en-US' , {style:'currency' , currency:'USD'});
const formatter3 = new Intl.NumberFormat('ja-JP' , {style:'currency' , currency:'JPY'});

format.addEventListener('click' , ()=>{
	const amount = document.querySelector('.amount input').value;

	Rupees.textContent = formatter1.format(amount);
	Dollars.textContent = formatter2.format(amount);
	Japanese.textContent = formatter3.format(amount);
})