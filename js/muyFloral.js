function controlador(valor){
	//alert(valor);
	
	if(valor==1){	
		document.getElementById("detArreglos").style.display 	= "";
		document.getElementById("detAmbiente").style.display 	= "none";
		document.getElementById("detEventos").style.display 	= "none";
		document.getElementById("detJardineria").style.display 	= "none";
		document.getElementById("detDetalles").style.display 	= "none";	
		window.location.href="#catalogo";
	}else{
		if(valor==2){
			document.getElementById("detArreglos").style.display 	= "none";
			document.getElementById("detAmbiente").style.display 	= "";
			document.getElementById("detEventos").style.display 	= "none";
			document.getElementById("detJardineria").style.display 	= "none";
			document.getElementById("detDetalles").style.display 	= "none";
			window.location.href="#catalogo";
		}else{
			if(valor==3){
				document.getElementById("detArreglos").style.display 	= "none";
				document.getElementById("detAmbiente").style.display 	= "none";
				document.getElementById("detEventos").style.display 	= "";
				document.getElementById("detJardineria").style.display 	= "none";
				document.getElementById("detDetalles").style.display 	= "none";
				window.location.href="#catalogo";
			}else{
				if(valor==4){
					document.getElementById("detArreglos").style.display 	= "none";
					document.getElementById("detAmbiente").style.display 	= "none";
					document.getElementById("detEventos").style.display 	= "none";
					document.getElementById("detJardineria").style.display 	= "";
					document.getElementById("detDetalles").style.display 	= "none";
					window.location.href="#catalogo";
				}else{
					if(valor==5){
						document.getElementById("detArreglos").style.display 	= "none";
						document.getElementById("detAmbiente").style.display 	= "none";
						document.getElementById("detEventos").style.display 	= "none";
						document.getElementById("detJardineria").style.display 	= "none";
						document.getElementById("detDetalles").style.display 	= "";
						window.location.href="#catalogo";
					}
				}
			}
		}
	}
}