function sum(){
		console.log('Hello Mirketa welcom');
}

function printAdd(){
	var firstnumber = document.getElementById('firstno').value;
	var lastnnumber = document.getElementById('lastno').value;
	const sum = parseInt(firstnumber) + parseInt(lastnnumber)
	console.log(sum);
	
}
   function printSubtract (){
   var firstnumber = document.getElementById('firstno').value;
	var lastnnumber = document.getElementById('lastno').value;
	const Subtract = parseInt(firstnumber) - parseInt(lastnnumber)
	console.log(Subtract);
   }
   
   function PrintMultiply (){
   var firstnumber = document.getElementById('firstno').value;
	var lastnnumber = document.getElementById('lastno').value;
	const Multiply = parseInt(firstnumber) * parseInt(lastnnumber)
	console.log(Multiply);
   }

function printDivide (){
   var firstnumber = document.getElementById('firstno').value;
	var lastnnumber = document.getElementById('lastno').value;
	const Divide = parseInt(firstnumber) / parseInt(lastnnumber)
	console.log(Divide);
   }
