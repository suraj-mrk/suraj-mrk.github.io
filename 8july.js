function abc(){

var str = '<table>';
for(i=1;i<=2;i++){
 str = str + '<tr><td>Apple'  + i +' </td></tr>';
}
str = str + '</table>';

 document.getElementById('s1').innerHTML = str;
}

function f2(){
	var no1 = document.getElementById('t1').value;
	var no2 = document.getElementById('t2').value;
	
	
	var str ='<table class="table table - hover">';
for(i=parseInt(no1);i<=parseInt(no2);i++){
str=str + '<tr><td>' + ( i*1 )+'</td><td>' + (i*2)+'</td><td>'+(i*3)+')</td></tr>';

}
str =str + '<<tbody> </table> >';
	
	document.getElementById('s1').innerHTML = str;
}
