'use strict';

function makeSize(size){
	return function(){
		console.log("size",size);
		document.body.style.fontSize = size + 'px';
	}
}

var size12=makeSize(12);
var size15=makeSize(15);
var size18=makeSize(18);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-15').onclick = size15;
document.getElementById('size-18').onclick = size18;