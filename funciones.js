function num_aleatorio(){
	var operacion = document.getElementById("op").innerHTML;
	var operandos = operacion.split("+");
	var resultado = parseInt(operandos[0]) + parseInt(operandos[1]);
	document.getElementById("res").innerHTML = "= " + resultado; 
}
function generar(){
	document.getElementById("res").innerHTML = "";
	var operandos = document.getElementById("op");
	operandos.innerHTML = Math.floor(Math.random()*1000) + "+" + Math.floor(Math.random()*1000);
}