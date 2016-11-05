$(document).ready(function(){
	$("#enviarhola").click(function(){
		alert($("#hola").val());
		});
	$("#enviaradios").click(function(){
		alert($("#adios").val());
		});
	$("#enviarteamo").click(function(){
		alert($("#teamo").val());
		});
	$("#enviarrespuesta").click(function(){
		if ($("#respuesta").val() == "hola"){
			alert("Hola, ¿Cómo estás?");}
		else if ($("#respuesta").val() == "adios"){
			alert("Adiós,¡Que te vaya bien!");}
		else if ($("#respuesta").val() == "te amo"){
			alert("¡Yo tambien te amo <3!");}
		});
});
