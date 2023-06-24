// let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
// let timerRef = document.querySelector('.timer');
// let int = null;
// document.querySelector('.start').addEventListener('click', ()=>{
//     if(int!==null){
//         clearInterval(int);
//     }
//     int = setInterval(displayTimer,10);
// });
// document.querySelector('.pause').addEventListener('click', ()=>{
//     clearInterval(int);
// });
// document.querySelector('.reset').addEventListener('click', ()=>{
//     clearInterval(int);
//     [milliseconds,seconds,minutes,hours] = [0,0,0,0];
//     timerRef.innerHTML = '00 : 00 : 00 : 000 ';
// });
// function displayTimer(){
//     milliseconds+=10;
//     if(milliseconds == 1000){
//         milliseconds = 0;
//         seconds++;
//         if(seconds == 60){
//             seconds = 0;
//             minutes++;
//             if(minutes == 60){
//                 minutes = 0;
//                 hours++;
//             }
//         }
//     }
//  let h = hours < 10 ? '0' + hours : hours;
//  let m = minutes < 10 ? '0' + minutes : minutes;
//  let s = seconds < 10 ? '0' + seconds : seconds;
//  let ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;
//  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
// }


let [millisecound , secound , minute , hour] = [0 , 0 , 0 , 0];
let timer = document.querySelector('.timer');
let start = document.querySelector('.start');
let pause = document.querySelector('.pause');
let reset = document.querySelector('.reset');
let int = null;

start.addEventListener('click' , ()=>{
	if(int !== null){
        clearInterval(int);
    }
	int = setInterval(starttimer , 10)
});

pause.addEventListener('click' , ()=>{
	clearInterval(int)
})

reset.addEventListener('click' , ()=>{
	clearInterval(int);
	[millisecound , secound , minute , hour] = [0 , 0 , 0 , 0];
	timer.innerHTML = '00 : 00 : 00 : 000'
})

function starttimer(){
	millisecound += 10;
	if(millisecound == 1000){
		millisecound = 0;
		secound++;
		if(secound == 60){
			secound = 0;
			minute++;
			if(minute == 60){
				minute = 0;
				hour++;
			}
		}
	}

	let h = hour < 10 ? '0' + hour : hour;
	let m = minute < 10 ? '0' + minute : minute;
	let s = secound < 10 ? '0' + secound : secound;
	let ms = millisecound < 10 ? '00' + millisecound :
	millisecound < 100 ? '0' + millisecound :
	millisecound;
	
	timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}