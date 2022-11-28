var num;
var obj = null;

//document.getElementById('txt').innerHTML = '어지러워요ㅡㅡ ';
document.getElementById('txt').innerHTML = '100 type :' +typeof 100 + '<br>';
document.getElementById('txt').innerHTML =
	document.getElementById('txt').innerHTML + '3.14 type :' + typeof 3.14 + '<br>';
document.getElementById('txt').innerHTML =
	document.getElementById('txt').innerHTML + 'dooly type :' + typeof dooly + '<br>';
document.getElementById('txt').innerHTML =
	document.getElementById('txt').innerHTML + '[1,2,3] type :' + typeof [1,2,3] + '<br>';
document.getElementById('txt').innerHTML =
	document.getElementById('txt').innerHTML + '{name:"루피",job:"해적"} type :' + typeof {name:"루피",job:"해적"} + '<br>';
document.getElementById('txt').innerHTML =
	document.getElementById('txt').innerHTML + 'num type :' + typeof num + '<br>';
document.getElementById('txt').innerHTML =
	document.getElementById('txt').innerHTML + 'obj type :' + typeof obj + '<br>';
	
console.log(document.getElementById('txt').innerHTML + 'obj type :' + typeof obj + '<br>');