function print(){
	console.log ('hello mirketa')
}

function hello(){
	console.log('Good Morning');
}

function display(){
	var namef = document.getElementById('firstname').value;
	var namel = document.getElementById('lastname').value;
	console.log(namef);
}

function clone(){
	var fname = document.getElementById('firstname').value;
	    document.getElementById('lastname').value = fname;
}

function clear(){
	console.log("abc");
	document.getElementById().value = "";
}

function reverse(){
	var rev = document.getElementById('firstname').value;
	var revagain = document.getElementById('lastname').value;
	document.getElementById('firstname').value= revagain;
	document.getElementById('lastname').value = rev;
}