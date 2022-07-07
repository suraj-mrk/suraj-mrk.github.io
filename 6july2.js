function Hello(){
	console.log('Hello calculator');
}

function add(){
	console.log('hello');
	var add1 = document.getElementById('L1').value;
	var add2 = document.getElementById('L2').value;
	var add3 = document.getElementById ('L3').value;
	if( add1 && add2 && add3 != ' '){
	var sint = parseInt (add1) * parseInt(add2) * parseInt(add3) /100;
	
	document.getElementById('L4').value= sint;
	}
else{
	document.getElementById ('L4').value = 'Enter all value';

}
}