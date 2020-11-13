function contar(){
	var total=100;
		setTimeout(function(){
		var valor=document.getElementById('cont');
		var respuesta=document.getElementById('num');
		var cantidad=valor.value.length;
		document.getElementById('num').innerHTML =  (total - cantidad) ;
		if(cantidad>total){
			respuesta.style.color = "red";
		}
		else {
			respuesta.style.color = "black";
		}
		},10);
}