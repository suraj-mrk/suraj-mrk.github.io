function abc(){
	var a= document.getElementById('T1').value;
	document.getElementById("s1").textContent=a;
}
function f2(){
	var x='Apple';
	x=x + 'Banana';
	x=x + 'Oranage';
	document.getElementById('s1').textContent=x;
}
function f3(){
	var a=2;
	a=a+3;
	a++;
	a=a+2;
	a=a+'is my lucky number';
	document.getElementById('s1').textContent=a;
}
function f4(){
	var a=0;
	var t='Suraj';
	var c=document.getElementById('T1').value;
	var d=document.getElementById('T2').value;
	
	for(a=1; a<=d; a++){
		t=t+'<br>' + c +  ' ' + ' x ' + a + '=' + (c * a);
		
	}
	document.getElementById('s1').innerHTML=t;
	console.log(t);

}