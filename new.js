function sort(){
	
	var a = document.getElementById('T1').value;
	var b = document.getElementById('T2').value;
	console.log(a.length);
	if(a.length > b.length ){
		document.getElementById('T1').value = b;
        document.getElementById('T2').value = a;
}    
}
function descending(){
	var c = document.getElementById('T1').value;
	var d = document.getElementById('T2').value;
	console.log(d.length);
	if(c.length < d.length){
		document.getElementById('T1').value = d;
	    document.getElementById('T2').value = c;
		
	}
	
	
	
}
	
	
	  
