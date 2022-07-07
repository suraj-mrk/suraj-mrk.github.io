function ABC(){
	
	var rad = document.getElementById('R').value;
	var area = (rad * rad * 3.14);
	var peri = 2 * 3.14 * rad;
	document.getElementById('A').value= area;
	document.getElementById('P').value= peri;
	
	var are = document.getElementById('AA').value;
	var sqr = are * are;
	document.getElementById('SQ').value= sqr;
	
	var len = document.getElementById('L').value;
	var wid = document.getElementById('W').value;
	var reg = len * wid;
	var preg = 2 * (len + wid);
	document.getElementById('RE').value= reg;
	document.getElementById('REP').value= preg;
	
	var rad1 = document.getElementById('R').value;
	var hei = document.getElementById('H').value;
	var acyd = (2*3.14*rad1*hei) + (2*3.14*rad1*rad1);
	document.getElementById('ACY').value= acyd;
	
	var rad2 = document.getElementById('R').value;
	var hei = document.getElementById('H').value;
	var vcyd = 3.14 * rad2 * rad2 * hei;
	document.getElementById('VCY').value= vcyd;

    var pri = document.getElementById('PI').value;
	var rat = document.getElementById('RI').value;
	var net = document.getElementById('N').value;
	var tim2 = document.getElementById('T').value;
	var rn = ( 1 + (rat / net));
	var nt = (rn)^(rat * net);
	var com = pri * nt ;
	document.getElementById('CMI').value= com;
	
	var pri2 = document.getElementById('PI').value;
	var rat2 = document.getElementById('RI').value;
	var tim = document.getElementById('T').value;
	var add1 = (1 + (rat2 * tim));
	var sim = pri2 * add1;
	document.getElementById('SIT').value= sim;
}