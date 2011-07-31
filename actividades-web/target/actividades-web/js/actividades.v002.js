var PANELES_ACTIVIDADES = {};

	PANELES_ACTIVIDADES.ALTA 		= null; 
	PANELES_ACTIVIDADES.UPDATE 	= null; 
	PANELES_ACTIVIDADES.BUSQUEDA 	= null; 
	PANELES_ACTIVIDADES.LISTA 	= null; 
	
	PANELES_ACTIVIDADES.ocultarTodos = 	function (){
		PANELES_ACTIVIDADES.ALTA.hide(); 
		PANELES_ACTIVIDADES.UPDATE.hide(); 
		PANELES_ACTIVIDADES.BUSQUEDA.hide(); 
		PANELES_ACTIVIDADES.LISTA.hide(); 
	};


var PANELES_ACCIONES = {};

	PANELES_ACCIONES.ALTA 		= null;
	PANELES_ACCIONES.LISTA  		= null;
	PANELES_ACCIONES.ocultarTodos = function (){
		PANELES_ACCIONES.ALTA.hide(); 
		PANELES_ACCIONES.LISTA.hide(); 
		
	};

	

var PANELES_CATEGORIAS = {};

	PANELES_CATEGORIAS.ALTA 		= null;
	PANELES_CATEGORIAS.LISTA 		= null;
	
	PANELES_CATEGORIAS.ocultarTodos = 	function (){
		PANELES_CATEGORIAS.ALTA.hide(); 
		PANELES_CATEGORIAS.LISTA.hide(); 
		
	};
	
var MENSAJES = {};

	MENSAJES.OP_CATEGORIA_ADD_CONFIRM = "¿Confirma que desea guardar la categoría?";
	MENSAJES.OP_CATEGORIA_NOMBRECORTO_ERROR = "Se requiere un nombre para la categoría.";
	MENSAJES.OP_CATEGORIA_DESCRIPCIONCORTA_ERROR = "La descripción de la categoría es demasiado corta.";

	MENSAJES.OP_ACCION_ADD_CONFIRM = "¿Confirma que desea guardar la acción?";
	MENSAJES.OP_ACCION_NOMBRECORTO_ERROR = "Se requiere un nombre para la acción.";
	MENSAJES.OP_ACCION_DESCRIPCIONCORTA_ERROR = "La descripción de la acción es demasiado corta.";
	

$(document).ready(function(){ 
	
	/**
	 * 
	 * Valores en la inicialización...
	 * 
	 */
	
	PANELES_ACTIVIDADES.ALTA =			$("#panelActividadesAlta");
	PANELES_ACTIVIDADES.UPDATE =		$("#panelActividadesUpdate");
	PANELES_ACTIVIDADES.BUSQUEDA = 		$("#panelActividadesBusqueda");
	PANELES_ACTIVIDADES.LISTA = 		$("#panelActividadesLista");
	
	PANELES_ACCIONES.ALTA = 			$("#panelAccionesAlta");
	PANELES_ACCIONES.LISTA = 			$('#listaAcciones');
	
	PANELES_CATEGORIAS.ALTA = 			$("#panelCategoriasAlta");
	PANELES_CATEGORIAS.LISTA = 			$('#listaCategorias');
	
	/**
	 * 
	 * 
	 * 
	 * 
	 */
	
	
	$("#showMensajes").click(function(){$("#mensajes").toggle();});
	$("#mensajes").hide();
	
	$("#closeformActividadesAlta").css({ 'float' : 'right'});
	$("#closeformActividadesBusqueda").css({ 'float' : 'right'});
	$("#closeformActividadesUpdate").css({ 'float' : 'right'});

	$("#closeformAccionesAlta").css({ 'float' : 'right'});
	$("#closeformCategoriasAlta").css({ 'float' : 'right'});
	
	$("#closePanelActividadesLista").css({ 'float' : 'right'});
	$("#closePanelAccionesLista").css({ 'float' : 'right'});
	$("#closePanelCategoriasLista").css({ 'float' : 'right'});
	
	$('#listarActividades').click(function(){
		PANELES_ACTIVIDADES.ocultarTodos();
		populateActividades();
	});
	
	$('#listarAcciones').click(function(){
		PANELES_ACCIONES.ALTA.hide();
		listarAcciones();
	});

	$('#listarCategorias').click(function(){
		PANELES_CATEGORIAS.ALTA.hide();
		listarCategorias();
	});

	$( "#tabs" ).tabs();
	
	$("#mensajes").html("Inicio mensajes!");
	
	$("#panelCategorias").css({
		'display' : 'table',
		'height': '100px'
		});
	
	// Comportamiento...
	
	
	// Cerrar los formularios de alta
	$("#closeformActividadesAlta").click(function(){ PANELES_ACTIVIDADES.ALTA.hide(); });
	$("#closeformActividadesBusqueda").click(function(){ PANELES_ACTIVIDADES.BUSQUEDA.hide(); });
	$("#closeformActividadesUpdate").click(function(){ PANELES_ACTIVIDADES.UPDATE.hide(); });

	$("#closeformAccionesAlta").click(function(){ PANELES_ACCIONES.ALTA.hide(); });
	$("#closeformCategoriasAlta").click(function(){ PANELES_CATEGORIAS.ALTA.hide(); });

	$("#closePanelActividadesLista").click(function(){ PANELES_ACTIVIDADES.ocultarTodos(); });
	$("#closePanelAccionesLista").click(function(){ PANELES_ACCIONES.ocultarTodos(); });
	$("#closePanelCategoriasLista").click(function(){ PANELES_CATEGORIAS.ocultarTodos(); });
	
	
	//Submit formularios...
	$("#formActividadesAlta").submit(validarFormularioAltaActividad);
	$("#formAccionesAlta").submit(validarFormularioAltaAccion);
	$("#formCategoriasAlta").submit(validarFormularioAltaCategoria);
	
	$("#formActividadesUpdate").submit(validarFormularioModActividad);
	$("#formActividadesBusqueda").submit(validarFormularioFindActividad);
	
	//Gestión de las Bajas...
	$(".bajaActividad").live('click', bajaActividad);
	$(".bajaAccion").live('click', bajaAccion);
	$(".bajaCategoria").live('click', bajaCategoria);
	
	//Gestión de las Modificacioness...
	$(".editActividad").live('click', editActividad);
	$(".editAccion").live('click', editAccion);
	$(".editCategoria").live('click', editCategoria);

	$("#altaAccion").click(function(){ 
		PANELES_ACCIONES.ocultarTodos();
		PANELES_ACCIONES.ALTA.show(); 
	});
	
	$("#altaCategoria").click(function(){ 
		PANELES_CATEGORIAS.ocultarTodos();
		PANELES_CATEGORIAS.ALTA.show(); 
	});
	
	$("#altaActividad").click(function(){ 
		var selectAccion = $("#actividadAccion");
		var selectCategoria = $("#panelCategorias");
		var seleccionados = [];
		populateAcciones(selectAccion, ""); // sin opción seleccionada
		populateCategorias(selectCategoria, seleccionados);
		
		PANELES_ACTIVIDADES.ocultarTodos();
		
		PANELES_ACTIVIDADES.ALTA.show(); 
	});
	
	$("#buscarActividades").click(function(){ 
		var selectAccion = $("#actividadAccionFindBy");
		var selectCategoria = $("#panelFindByCategorias");
		populateAcciones(selectAccion, ""); // sin opción seleccionada
		populateCategorias(selectCategoria);
		
		PANELES_ACTIVIDADES.ocultarTodos();
		
		PANELES_ACTIVIDADES.BUSQUEDA.show(); 
	});
	
	var table = $('.table');
    $('caption', table).addClass('ui-state-default');
    $('th', table).addClass('ui-state-default');
    $('td', table).addClass('ui-widget-content');
	

	// No se muestran los formularios, por defecto...
	PANELES_ACTIVIDADES.ocultarTodos();
	PANELES_ACCIONES.ocultarTodos();
	PANELES_CATEGORIAS.ocultarTodos();
	
	
	
	
}); //$(function(){


		

	/**
	 * 
	 */
	function bajaActividad(){
	
		console.log("INI function bajaActividad!");
		
		if(confirm("¿Confirma la baja de la actividad?")){
			
			console.log("BAJA confirmada!");
			
		    $.ajax({  
		    	
				type: 		"POST",  
				
				url: 		$(this).attr('href'), 
				
				dataType: 	'json',
				
				beforeSend: function(){
					console.log("antes de ejecutar la baja...");
				},
				
				error: function(XMLHttpRequest, textStatus, errorThrown){
					console.log("error!");
					alert("ERROR:" + textStatus + "\n" + errorThrown);
				},
				success: function(datosJSON){
					
					console.log("success!");
					PANELES_ACTIVIDADES.ocultarTodos();

					alert(datosJSON.descRespuesta);
					console.log(datosJSON.descRespuesta);
					
				}
			});
		}else{
			console.log("BAJA desestimada!");
		}
	
	    console.log("FIN function bajaActividad!");
	
	    return false;
	    
	}

	/**
	 * 
	 */
	function editActividad(){
	
		console.log("Se ha llegado a editActividad!");
		
		var urlGetActividad = $(this).attr('href');

		var id = $(this).attr('id');
		
		console.log("URL:" + urlGetActividad);
		console.log("ID:" + id);
		id = id.substr(5);
		console.log("ID:" + id);
		console.log("Se recupera la actividad:" + id);
		
		// Se recupera la actividad
	    $.ajax({  
			type: 		"GET",  
			url: 		urlGetActividad,  
			dataType: 	'json',
			beforeSend: function(){},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				alert("ERROR:" + textStatus + "\n" + errorThrown);
			},
			success: function(datosJSON){
				console.log("Ha llegado la siguiente info:" + datosJSON);
				//alert("Ha llegado la siguiente info:" + datosJSON);
				
				// Rellenamos el formulario de modificacion
				PANELES_ACTIVIDADES.UPDATE.hide();
				var nom = datosJSON.nombre;
				var desc = datosJSON.description;
				var accionId = datosJSON.accion.id;
				var elemento1 = $("#actividadAccionUpdate");
				var elemento2 = $("#panelCategoriasUpdate");
				
				var seleccionados = [];
				var categoriasSeleccionadas = datosJSON.listaCategorias;
				console.log("categoriasSeleccionadas.length:" + categoriasSeleccionadas.length);
				for(var k = 0; k < categoriasSeleccionadas.length; k++){
					console.log("categoriasSeleccionadas["+k+"].id:" + categoriasSeleccionadas[k].id);
					seleccionados.push(categoriasSeleccionadas[k].id);
				}
				
				populateAcciones(elemento1, accionId);
				populateCategorias(elemento2, seleccionados);
				
				$("#actividadIdUpdate").val(datosJSON.id);
				
				$("#actividadNombreUpdate").val(nom);
				$("#actividadDescripcionUpdate").val(desc);
				
				PANELES_ACTIVIDADES.ocultarTodos();
				
				PANELES_ACTIVIDADES.UPDATE.show();
			}
		});
		
		// y se muestra el formulario correspondiente
	    
	    
	    console.log("Se ha salido de editActividad!");
	
	    return false;
	    
	}

	
	function bajaAccion(){
		
		console.log("Se ha llegado a bajaAccion!");
	
	    $.ajax({  
			type: 		"POST",  
			url: 		$(this).attr('href'),  
			dataType: 	'json',
			beforeSend: function(){},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				alert("ERROR:" + textStatus + "\n" + errorThrown);
			},
			success: function(datosJSON){
				PANELES_ACCIONES.ocultarTodos();
				alert(datosJSON.descRespuesta);
			}
		});
	    console.log("Se ha salido a bajaAccion!");
	
	    return false;
	    
	}

	
	function editAccion(){
		return false;
	}
	

	function bajaCategoria(){
		
		console.log("Se ha llegado a bajaCategoria!");
	
	    $.ajax({  
			type: 		"POST",  
			
			url: 		$(this).attr('href'),  
			
			dataType: 	'json',
			
			beforeSend: function(){},
			
			error: function(XMLHttpRequest, textStatus, errorThrown){
				alert("ERROR:" + textStatus + "\n" + errorThrown);
			},
			
			success: function(datosJSON){

				PANELES_CATEGORIAS.ocultarTodos();
				alert(datosJSON.descRespuesta);
			}
		});
	    addMessage("Se ha salido a bajaCategoria!");
	
	    return false;
	    
	}

	function editCategoria(){
		return false;
	}
	
	/**
	*/
	function addMessage(msg){
		var texto = $("#mensajes").html();
		$("#mensajes").html(texto + "<br/>" + msg);
		console.log(msg);
	}
	
	/**
	*/
	function validarFormularioActividad( nombre, desc, accion, listaCategorias){
		var formularioValido = true;
		if(nombre == "") {
			alert("Se requiere un nombre para la actividad.");
			formularioValido = false;
		}else if(desc == "" || desc.length < 5){
			alert("La descripción de la actividad es demasiado corta.");
			formularioValido = false;
		}else if(accion == ""){
			alert("Se necesita especificar una acción.");
			formularioValido = false;
		}else if(listaCategorias.length < 1){
			
			alert("Se necesita especificar al menos una categoría.");
			formularioValido = false;
		
		}
		return formularioValido;
	}

	
	/**
	*/
	function validarFormularioAltaActividad(){
		
		var frm = $(this);
		
		var formularioValido = true;
		
		var nombre = $("#actividadNombre").val();
		var desc = $("#actividadDescripcion").val();
		var accion = $("#actividadAccion").val();
		var listaCategorias = $("input:checked").getCheckboxValues();
		
		//var isChk = $('#checkboxId').is(':checked');
		
		formularioValido = validarFormularioActividad( nombre, desc, accion, listaCategorias);
		
		
		if(formularioValido && confirm("¿Confirma que desea guardar la actividad?")){
			// se serializan los datos
			var str = frm.serialize();
			AJAX_Alta_Actividad(str, frm);
		}
		return false;
		
	}
	
	/**
	*/
	function validarFormularioModActividad(){
		
		var frm = $(this);
		
		var formularioValido = true;
		
		var nombre = $("#actividadNombreUpdate").val();
		var desc = $("#actividadDescripcionUpdate").val();
		var accion = $("#actividadAccionUpdate").val();
		var listaCategorias = $("input:checked").getCheckboxValues();
		
		//var isChk = $('#checkboxId').is(':checked');
		
		formularioValido = validarFormularioActividad( nombre, desc, accion, listaCategorias);
		
		
		if(formularioValido && confirm("¿Confirma que desea modificar la actividad?")){
			// se serializan los datos
			var str = frm.serialize();
			AJAX_Mod_Actividad(str, frm);
		}
		return false;
		
	}

	
	/**
	*/
	function validarFormularioFindActividad(){
		
		var frm = $(this);
		
		var formularioValido = false;
		
		var nombre = $("#actividadNombreFindBy").val();
		var desc = $("#actividadDescripcionFindBy").val();
		var accion = $("#actividadAccionFindBy").val();
		var listaCategorias = $("input:checked").getCheckboxValues();
		
		//var isChk = $('#checkboxId').is(':checked');
		
		if(nombre == "") {
			formularioValido = formularioValido || false;
		}else{
			formularioValido = true;
		}
		if(desc == "" || desc.length < 5){
			formularioValido = formularioValido || false;
		}else{
			formularioValido = true;
		}
		if(accion == ""){
			formularioValido = formularioValido || false;
		}else{
			formularioValido = true;
		}
		if(listaCategorias.length < 1){
			formularioValido = formularioValido || false;
		}else{
			formularioValido = true;
		}
		
		
		if(formularioValido){
			// se serializan los datos
			var str = frm.serialize();
			AJAX_Find_Actividad(str, frm);
		}else{
			alert("No hay criterios de búsqueda...!");
		}
		return false;
		
	}
	
	
	/**
	*/
	function validarFormularioAltaAccion(){
		
		var frm = $(this);
		
		var formularioValido = true;
		
		var nombre = $("#accionNombre").val();
		var desc = $("#accionDescripcion").val();
		
		if(nombre == "") {
			alert(MENSAJES.OP_ACCION_NOMBRECORTO_ERROR);
			formularioValido = false;
		}else if(desc == "" || desc.length < 5){
			alert(MENSAJES.OP_ACCION_DESCRIPCIONCORTA_ERROR);
			formularioValido = false;
		}
		
		if(formularioValido && confirm(MENSAJES.OP_ACCION_ADD_CONFIRM)){
			// se serializan los datos
			var str = frm.serialize();
			AJAX_Alta_Accion(str, frm);
		}
		return false;
		
	}
	
	/**
	*/
	function validarFormularioAltaCategoria(){
		
		var frm = $(this);
		
		var formularioValido = true;
		
		var nombre = $("#categoriaNombre").val();
		var desc = $("#categoriaDescripcion").val();
		
		if(nombre == "") {
			alert(MENSAJES.OP_CATEGORIA_NOMBRECORTO_ERROR);
			formularioValido = false;
		}else if(desc == "" || desc.length < 5){
			alert(MENSAJES.OP_CATEGORIA_DESCRIPCIONCORTA_ERROR);
			formularioValido = false;
		}
		
		if(formularioValido && confirm(MENSAJES.OP_CATEGORIA_ADD_CONFIRM)){
			// se serializan los datos
			var str = frm.serialize();
			AJAX_Alta_Categoria(str, frm);
		}
		return false;
		
	}
	
	/**
	*/
	function AJAX_Alta_Actividad( params, frm){
		$.ajax({  
			type: 		"POST",  
			
			url: 		"actividades?op=add",  
			
			data: 		params,
			
			dataType: 	'json',
			
			beforeSend: function(){},
			
			error: function(XMLHttpRequest, textStatus, errorThrown){
				alert("ERROR:" + textStatus + "\n" + errorThrown);
			},
			success: function(datosJSON){
				alert(datosJSON.descRespuesta);
				frm.clearForm();
				//populateActividades();
				ocultarPanelesActividades();
			}
		});
	}

	/**
	*/
	function AJAX_Mod_Actividad( params, frm){
		$.ajax({  
			type: 		"POST",  
			
			url: 		"actividades?op=update",  
			
			data: 		params,
			
			dataType: 	'json',
			
			beforeSend: function(){},
			
			error: function(XMLHttpRequest, textStatus, errorThrown){
				alert("ERROR:" + textStatus + "\n" + errorThrown);
			},
			success: function(datosJSON){
				alert(datosJSON.descRespuesta);
				frm.clearForm();
				
				ocultarPanelesActividades();
			}
		});
	}
	/**
	*/
	function AJAX_Alta_Accion( params, frm){
		
		addMessage("AJAX_Alta_Accion: IN...");
		
		$.ajax({  
			type: 		"POST",  
			
			url: 		"acciones?op=add",  
			
			data: 		params,
			
			dataType: 	'json',
			
			beforeSend: function(){},
			
			error: function(XMLHttpRequest, textStatus, errorThrown){
				alert("ERROR:" + textStatus + "\n" + errorThrown);
			},
			success: function(datosJSON){
				alert("Alta de acción OK!");
				frm.clearForm();
				
				ocultarPanelesActividades();
			}
		});

		addMessage("AJAX_Alta_Accion: OUT!");
	}

	/**
	*/
	function AJAX_Alta_Categoria( params, frm){
		$.ajax({  
			type: 		"POST",  
			
			url: 		"categorias?op=add",  
			
			data: 		params,
			
			dataType: 	'json',
			
			beforeSend: function(){},
			
			error: function(XMLHttpRequest, textStatus, errorThrown){
				alert("ERROR:" + textStatus + "\n" + errorThrown);
			},
			success: function(datosJSON){
				alert("Alta de categoría OK!");
				frm.clearForm();
				
				ocultarPanelesActividades();
			}
		});
	}
	
	/**
	*/
	function populateActividades(){
		
		addMessage("Se ha llegado a populateActividades!");
		
		$.ajax({
    		method : "get",
    		url : "actividades?op=lista",
    		
    		dataType : "json",
    		
    		error : function(XMLHttpRequest, textStatus, errorThrown){
				alert("populateActividades:ERROR:" + textStatus + "\n" + errorThrown);
			}, //error 
			
    		success : function(data){
    			procesaActividades(data);
    		} //success
    	}); // $.ajax
		
		
	}
    
	/**
	*/
	function AJAX_Find_Actividad(params, frm){
		
		addMessage("Se ha llegado a populateActividades!");
		
		$.ajax({
    		method : "get",
 
    		url : "actividades?op=find",
			
			data: 		params,
    		
    		dataType : "json",
    		
    		error : function(XMLHttpRequest, textStatus, errorThrown){
				alert("AJAX_Find_Actividad:ERROR:" + textStatus + "\n" + errorThrown);
			}, //error 
			
    		success : function(data){
    			console.log("data.codigoRespuesta:" + data.codigoRespuesta);
    			if(data.codigoRespuesta == null){
    				
    				procesaActividades(data);
    			}else{
    				alert(data.descRespuesta);
    			}
    			
    		} //success
    	}); // $.ajax
		
		
	}
    
	
	/**
	 * Rellena el select de Acciones.
	 * 
	 * @param elemento, donde se ha de colocar las <option></option>
	 * @param seleccionado, se seleccionará el elemento seleccionado
	 * 
	*/
	function populateAcciones(elemento, seleccionado){
		
		console.log("Se ha llegado a populateAcciones!");
		console.log("elemento del DOM:" + elemento);
		console.log("Elemento a marcar como seleccionado: " + seleccionado);
		
    	$.ajax({
    		method : "get",

    		url : "acciones?op=lista",
    		
    		dataType : "json",
    		
    		error : function(XMLHttpRequest, textStatus, errorThrown){
				alert("populateAcciones:ERROR:" + textStatus + "\n" + errorThrown);
			}, //error 
			
    		success : function(data){
    			var options = getOptionsAcciones(data, seleccionado);
    			elemento.html(options);
    		} //success
			
    	}); // $.ajax
    	
    	console.log("Se ha salido de populateAcciones!");
	}

	/**
	 * Rellena la matriz de checkBoxes de Categorias
	 * 
	 * 
	*/
	function populateCategorias(elemento, seleccionados){
		
		console.log("Se ha llegado a populateCategorias!");
		if(seleccionados == null){
			console.log("Seleccionados ha llegado nulo!");
		}else{
			console.log("El número de seleccionados es " + seleccionados.length);
		}

    	$.ajax({
    		method : "get",
    		url : "categorias?op=lista",
    		
    		dataType : "json",
    		
    		error : function(XMLHttpRequest, textStatus, errorThrown){
				alert("populateCategorias:ERROR:" + textStatus + "\n" + errorThrown);
			}, //error 
			
    		success : function(data){
    			console.log("El número de categorías recibidas es " + data.length);
    			var options = "";
    			if(seleccionados == null){
    				console.log("Mostramos las categorías SIN marcar");
    				options = procesaCategorias(data);
    			}else{
    				console.log("Tenemos " + data.length + " categorías y " + seleccionados.length + " seleccionados!");
    				options = procesaCategoriasMarcadas(data, seleccionados);
    			}
    			elemento.html(options);
    		} //success
    	}); // $.ajax
    	
    	console.log("Se ha salido de populateCategorias!");
	}

	
	/**
	*/
	function procesaActividades(dataJSON){
		
		var strActividades = '';
		
		//vaciado...
		$('#panelActividadesLista').hide();
		
		console.log("Se ha llegado a procesaActividades!");
		
		if(dataJSON.length == 0){
			$("#panelActividadesListaMsgError").show();
			$("#panelActividadesListaTitulo").hide();
			$("#panelActividadesListaContenido").hide();
			
		}else{
			
			strActividades += '<p>Se han localizado ' + dataJSON.length +' actividades con los criterios indicados.</p>';
			
			strActividades += '<table class="ui-widget">';
			strActividades += '<tr class="ui-widget-header">';
			strActividades += '<th>Nombre</th>';
			strActividades += '<th>Descripción</th>';
			strActividades += '<th>Acción</th>';
			strActividades += '<th>Categorias</th>';
			strActividades += '<th></th>'; //Edit
			strActividades += '<th></th>'; //Delete
			strActividades += '</tr>';
			
		      for (var i = 0; i < dataJSON.length; i++) {
		    	  strActividades += '<tr>';
		    	  strActividades += '<td>' + dataJSON[i].nombre + '</td>';
		    	  strActividades += '<td>' + dataJSON[i].description + '</td>';
		    	  strActividades += '<td>' + dataJSON[i].accion.nombre + '</td>';
		    	  
		    	  //strActividades += '<td>' + dataJSON[i].accion.nombre + '</td>';
		    	  var categorias = '';
		    	  var numCategorias = dataJSON[i].listaCategorias.length;
		    	  console.log('dataJSON['+i+'].listaCategorias.length:' + numCategorias);
			    	  for(var j = 0; j < numCategorias ; j++){
			    		  if(j != 0){
			    			  categorias += ', '; 
			    		  }//if
			    	  	categorias += '<span>' + dataJSON[i].listaCategorias[j].nombre + '</span>';
			    	  }
		    	  strActividades += '<td>' + categorias + '</td>';
		    	  strActividades += '<td><a class="editActividad" id="edit_'+dataJSON[i].id+'" href="actividades?op=edit&id='+dataJSON[i].id+'" alt="Modifica la actividad ' + dataJSON[i].id+'"><img src="img/Edit-Document-icon.png" /></a></td>';
		    	  strActividades += '<td><a class="bajaActividad" id="baja_'+dataJSON[i].id+'" href="actividades?op=del&id='+dataJSON[i].id+'" alt="Baja de la actividad ' + dataJSON[i].id+'"><img src="img/Delete-icon.png" /></a></td>';
		    	  strActividades += '</tr>';
		      }//for
		      strActividades += '</table>';

			    $('#panelActividadesListaContenido').html(strActividades);
			    
		        $("#panelActividadesListaMsgError").hide();
				$("#panelActividadesListaTitulo").show();
				$("#panelActividadesListaContenido").show();

		
		}
		
	      
	      $('#panelActividadesLista').show();
	      
	      console.log("Se ha salido de procesaActividades!");
	}


	/**
	*/
	function getOptionsAcciones(dataJSON, idSelected){
		
		console.log("Se ha llegado a getOptionsAcciones!");
		console.log("El elemento a marcar como seleccionado es " + idSelected);
		
	      var options = '<option value="">Seleccione...</option>';
	      var numAcciones = dataJSON.length;
	      for (var i = 0; i < numAcciones; i++) {
	    	  if(idSelected == dataJSON[i].id){
	    		  selected = " SELECTED ";
	    	  }else{
	    		  selected = "  ";
	    	  }
	        options += '<option value="' + dataJSON[i].id + '" '+ selected +'>' + dataJSON[i].nombre + '</option>';
	      }//for
	      
	      //alert(options);
	      //$("#actividadAccion").html(options);
	      
	      console.log("Se ha salido de getOptionsAcciones!");
	      
	      return options;
	}//function getOptionsAcciones(dataJSON)
	    
	    
	    
	function procesaCategoriasMarcadas(dataJSON, seleccionados){
		
		console.log("Se ha llegado a procesaCategoriasMarcadas!");
		
		var name = "actividadCategoria";
		if(seleccionados.length > 0) name += "Update";
		
	      var options = '';
	      var numCategorias = dataJSON.length;
	      var numColumnas = 4;
	      	var divColumnaIni = '<div style = "float: left; height: 105px; width: 170px; ">'; 
	      	var divColumnaFin = '</div>'; 
	      //alert(numColumnas);
	      var k = 0;
	      for (var i = 0; i < numCategorias; i++) {
	    	  console.log("Vamos por la categoría " + i + " de " + numCategorias + " categorías");
	      	k = (i % numColumnas);
	      	//alert('i:' + i + '\tk:' + k);
	      	if(k == 0){
	      		options += divColumnaIni;
	      	}
	      	var encontrado = false;
	      	var j = 0;
	      	console.log("Hay " + seleccionados.length + " seleccionados");
	      	while (j < seleccionados.length && encontrado == false){
	      		console.log("Vamos por el elemento " + j + " de los " + seleccionados.length + " seleccionados");
	      		if(seleccionados[j] == dataJSON[i].id){
	      			encontrado = true;
	      		}
	      		j++; // de lo contrario nunca saldremos del bucle...
	      	}
	      	var checked = '';
	      	if(encontrado){
	      		checked = '  checked="checked" ';
	      	}
	        options += '<input type="checkbox" name="'+name+'" value="'+dataJSON[i].id+'" '+ checked +' />'+dataJSON[i].nombre +'<br/>';

	      	if(k == (numColumnas - 1)){
	      		options += divColumnaFin;
	      	}
	      }//for
	      
	      //alert(options);
	      
	      console.log("Se ha salido de procesaCategoriasMarcadas!");
		
	      //$("#panelCategorias").html(options);
		return options;

	}//function procesaprocesaCategorias(j)
	
	function procesaCategorias(dataJSON){
		
		console.log("Se ha llegado a procesaCategorias SIN marcar!");
		
		var name = "actividadCategoria";
		var options = '';
		var numCategorias = dataJSON.length;
		var numColumnas = 4;
		var divColumnaIni = '<div style = "float: left; height: 105px; width: 170px; ">'; 
		var divColumnaFin = '</div>'; 
		//alert(numColumnas);
		var k = 0;
		for (var i = 0; i < numCategorias; i++) {
	    	console.log("Vamos por la categoría " + i + " de " + numCategorias + " categorías");
	      	k = (i % numColumnas);

	      	if(k == 0){
	      		options += divColumnaIni;
	      	}
	        options += '<input type="checkbox" name="'+name+'" value="'+dataJSON[i].id+'"  />'+dataJSON[i].nombre +'<br/>';

	      	if(k == (numColumnas - 1)){
	      		options += divColumnaFin;
	      	}
		}//for
	      
	    console.log("Se ha salido de procesaCategorias SIN marcar!");
		
	    //$("#panelCategorias").html(options);
		return options;

	}//function procesaprocesaCategorias(j)
	
	
	/**
	 * Rellena el listado de Acciones
	 * 
	 * 
	*/
	function listarAcciones(){
		
		console.log("Se ha llegado a populateAcciones!");
		
    	//$.getJSON("getAcciones", getOptionsAcciones);//$.getJSON
    	$.ajax({
    		method : "get",
    		url : "acciones?op=lista",
    		
    		dataType : "json",
    		
    		error : function(XMLHttpRequest, textStatus, errorThrown){
				alert("listarAcciones:ERROR:" + textStatus + "\n" + errorThrown);
			}, //error 
			
    		success : function(data){
    			creaListadoAcciones(data);
    		} //success
    	}); // $.ajax
    	
    	console.log("Se ha salido de populateAcciones!");
	}
	
	/**
	 * Rellena el listado de Acciones
	 * 
	 * 
	*/
	function listarCategorias(){
		
		console.log("Se ha llegado a listarCategorias!");
		
    	//$.getJSON("getCategorias", procesaCategorias);//$.getJSON
    	$.ajax({
    		method : "get",
    		url : "categorias?op=lista",
    		
    		dataType : "json",
    		
    		error : function(XMLHttpRequest, textStatus, errorThrown){
				alert("listarCategorias:ERROR:" + textStatus + "\n" + errorThrown);
			}, //error 
			
    		success : function(data){
    			creaListadoCategorias(data);
    		} //success
    	}); // $.ajax
    	
    	console.log("Se ha salido de listarCategorias!");
	}
	

	/**
	*/
	function creaListadoAcciones(dataJSON){
		
		var strAcciones = '';
		
		//vaciado...
		PANELES_ACCIONES.LISTA.hide();
		
		console.log("Se ha llegado a creaListadoAcciones!");
		console.log("Se han recibido " + dataJSON.length + " acciones!");
		
			if(dataJSON.length == 0){
				$("#listaAccionesMsgError").show();
				$("#listaAccionesTitulo").hide();
				$("#listaAccionesContenido").hide();
				
			}else{
				strAcciones += '<table class="ui-widget">';
				
				strAcciones += '<tr class="ui-widget-header">';
				strAcciones += '	<th>Nombre</th>';
				strAcciones += '	<th>Descripción</th>';
				strAcciones += '	<th>Mod</th>';
				strAcciones += '	<th>Baja</th>';
				strAcciones += '</tr>';
				
			      for (var i = 0; i < dataJSON.length; i++) {
			    	  strAcciones += '<tr>';
			    	  strAcciones += '<td>' + dataJSON[i].nombre + '</td>';
			    	  strAcciones += '<td>' + dataJSON[i].description + '</td>';
			    	  strAcciones += '<td><a class="editAccion" id="editAccion_'+dataJSON[i].id+'" href="acciones?op=edit&id='+dataJSON[i].id+'" alt="Modifica la acción ' + dataJSON[i].id+'"><img src="img/Edit-Document-icon.png" /></a></td>';
			    	  strAcciones += '<td><a class="bajaAccion" id="bajaAccion_'+dataJSON[i].id+'" href="acciones?op=del&id='+dataJSON[i].id+'" alt="Baja de la acción ' + dataJSON[i].id+'"><img src="img/Delete-icon.png" /></a></td>';
			    	  strAcciones += '</tr>';
			      }//for
			      strAcciones += '</table>';

				    $('#listaAccionesContenido').html(strAcciones);
				    
			        $("#listaAccionesMsgError").hide();
					$("#listaAccionesTitulo").show();
					$("#listaAccionesContenido").show();
			}
			PANELES_ACCIONES.LISTA.show();
	      
	}

	    
	/**
	*/
	function creaListadoCategorias(dataJSON){
		
		var strCategorias = '';
		console.log("Se ha llegado a creaListadoCategorias!");
		console.log("Tenemos " + dataJSON.length + " categorias!");
		//vaciado...
		PANELES_CATEGORIAS.LISTA.hide();
		if(dataJSON.length == 0){
			
			$("#listaCategoriasMsgError").show();
			$("#listaCategoriasTitulo").hide();
			$("#listaCategoriasContenido").hide();
			
		}else{
		
		
			strCategorias += '<table class="ui-widget">';
			strCategorias += '<tr class="ui-widget-header">';
			strCategorias += '<th>Nombre</th>';
			strCategorias += '<th>Descripción</th>';
			strCategorias += '<th>Mod</th>';
			strCategorias += '<th>Baja</th>';
			strCategorias += '</tr>';
			
	      for (var i = 0; i < dataJSON.length; i++) {
	    	  
	    	  console.log("Tenemos la categoría " + dataJSON[i].nombre);
	    	  
	    	  strCategorias += '<tr>';
	    	  strCategorias += '<td>' + dataJSON[i].nombre + '</td>';
	    	  strCategorias += '<td>' + dataJSON[i].description + '</td>';
	    	  strCategorias += '<td><a class="editCategoria" id="editCategoria_'+dataJSON[i].id+'" href="categorias?op=edit&id='+dataJSON[i].id+'" alt="Modifica la categoría ' + dataJSON[i].id+'"><img src="img/Edit-Document-icon.png" /></a></td>';
	    	  strCategorias += '<td><a class="bajaCategoria" id="bajaCategoria_'+dataJSON[i].id+'" href="categorias?op=del&id='+dataJSON[i].id+'" alt="Baja de la categoría ' + dataJSON[i].id+'"><img src="img/Delete-icon.png" /></a></td>';
	    	  strCategorias += '</tr>';
	      }//for
	      strCategorias += '</table>';
	      
	      

		    $('#listaCategoriasContenido').html(strCategorias);
		    
	        $("#listaCategoriasMsgError").hide();
			$("#listaCategoriasTitulo").show();
			$("#listaCategoriasContenido").show();

		}
	      
		PANELES_CATEGORIAS.LISTA.show();
	}

	    
	    /**
	    
	    Métodos personalizados
	    
	    */
	    
	    // Extender jQuery con un método personalizado:
		$.fn.getCheckboxValues = function(){
		    var values = [];
		    var i = 0;
		    this.each(function(){
		        // guarda los valores en un array
		        values[i++] = $(this).val();
		    });
		    // devuelve un array con los checkboxes seleccionados
		    return values;
		};

	    // Extender jQuery con un método personalizado:
		$.fn.clearForm = function() {
        return this.each(function() {
          var type = this.type, tag = this.tagName.toLowerCase();
          if (tag == 'form')
            return $(':input',this).clearForm();
          if (type == 'text' || type == 'password' || tag == 'textarea')
            this.value = '';
          else if (type == 'checkbox' || type == 'radio')
            this.checked = false;
          else if (tag == 'select')
            this.selectedIndex = -1;
        });
      };


    

