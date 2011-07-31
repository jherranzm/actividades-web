<%@ page pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>B2Consulting: Gestión de actividades</title>

<!-- css -->
<!-- 
	<link type="text/css" rel="Stylesheet" href="css/base2.css" />
	 -->
<link type="text/css" rel="Stylesheet" href="css/estiloB2.css" />
<link type="text/css" rel="Stylesheet" href="css/actividades_v002.css" />

<link type="text/css" rel="Stylesheet"
	href="css/redmond/jquery-ui-1.8.14.custom.css" />

<!-- js -->
<script type="text/javascript" src="js/jquery-1.6.2.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.8.14.custom.min.js"></script>
<script type="text/javascript" src="js/jquery.validate.js"></script>
<script type="text/javascript" src="js/jquery.livequery.js"></script>
<!-- http://docs.jquery.com/Plugins/livequery -->


<script type="text/javascript" src="js/actividades.v002.js"></script>

</head>
<body>
	<div id="logo">
		<img src="img/LogoB2_BandaNaranja_20091121-090200.png" />
	</div>


	<div id="tabs">

		<!-- las pestañas -->
		<ul>
			<li><a href="#tabs-1">Actividades</a>
			</li>
			<li><a href="#tabs-2">Acciones</a>
			</li>
			<li><a href="#tabs-3">Categorías</a>
			</li>
		</ul>

		<!-- los paneles -->

		<div id="tabs-1">

			<div id="barraMenuActividades">
				<img id="altaActividad" src="img/Button-Add-icon.png" /> 
				<img id="listarActividades" src="img/Actions-view-calendar-list-icon.png" /> 
				<img id="buscarActividades" src="img/Search-icon.png" />
			</div>

			<div id="panelActividadesAlta">
				<h1>Alta de una actividad</h1>
				<img id="closeformActividadesAlta" src="img/Button-Close-icon.png" />
				<form id="formActividadesAlta" action="actividades?op=add"
					method="post">
					<div id="panelNombreDescripcion">
						<label for="actividadNombre">Nombre:</label><input type="text"
							id="actividadNombre" name="actividadNombre"
							style="height: 33px; width: 447px;" /><br /> <label
							for="actividadDescripcion">Descripcion:</label><br />
						<textarea id="actividadDescripcion" name="actividadDescripcion"
							cols="60" rows="10"></textarea>
						<br />
					</div>
					<div id="panelAcciones">
						<label for="actividadAccion">Accion:</label> <select
							id="actividadAccion" name="actividadAccion">

						</select><br />
					</div>
					<div id="panelCategorias"></div>

					<div class="clear"></div>


					<div class="botones">
						<input type="submit" value="Guardar Actividad" />
					</div>
				</form>
				<!-- formActividadesAlta -->

			</div>
			<!-- panelActividadesAlta -->

			<div id="panelActividadesUpdate">
				<h1>Modificación de una actividad</h1>
				<img id="closeformActividadesUpdate" src="img/Button-Close-icon.png" />
				<form id="formActividadesUpdate" action="actividades?op=update"
					method="post">
					<div id="panelNombreDescripcionUpdate">
						<label for="actividadNombreUpdate">Nombre:</label><input type="text"
							id="actividadNombreUpdate" name="actividadNombreUpdate"
							style="height: 33px; width: 447px;" /><br /> <label
							for="actividadDescripcionUpdate">Descripcion:</label><br />
						<textarea id="actividadDescripcionUpdate" name="actividadDescripcionUpdate"
							cols="60" rows="10"></textarea>
						<br />
					</div>
					<div id="panelAccionesUpdate">
						<label for="actividadAccionUpdate">Accion:</label> 
						<select id="actividadAccionUpdate" name="actividadAccionUpdate">

						</select><br />
					</div>
					<div id="panelCategoriasUpdate"></div>

					<div class="clear"></div>

					<div class="botones">
						<input type="submit" value="Guardar Actividad" />
						<input type="hidden" id="actividadIdUpdate" name="actividadIdUpdate" value="" /> 
					</div>
				</form>
				<!-- formActividadesUpdate -->

			</div>
			<!-- panelActividadesUpdate -->

			<div id="panelActividadesBusqueda">
				<h1>Búsqueda de actividades</h1>
				<img id="closeformActividadesBusqueda" src="img/Button-Close-icon.png" />
				<form id="formActividadesBusqueda" action="actividades?op=find"
					method="post">
					<div id="panelFindByNombreDescripcion">
						<label for="actividadNombreFindBy">Nombre:</label> <input
							type="text" id="actividadNombreFindBy" name="actividadNombre"
							style="height: 33px; width: 447px;" /><br /> <label
							for="actividadDescripcionFindBy">Descripcion:</label><br /> <input
							type="text" id="actividadDescripcionFindBy"
							name="actividadDescripcion"
							style="height: 33px; width: 447px;" /><br />
					</div>
					<div id="panelFindByAcciones">
						<label for="actividadAccionFindBy">Accion:</label> <select
							id="actividadAccionFindBy" name="actividadAccion">

						</select><br />
					</div>
					<div id="panelFindByCategorias"></div>

					<div class="clear"></div>

					<div class="botones">
						<input type="submit" value="Buscar Actividad" />
					</div>




				</form>
				<!-- formActividadesAlta -->

			</div>
			<!-- panelActividadesAlta -->


			<div id="panelActividadesLista">
				<div id="panelActividadesListaMsgError">
					<div class="ui-widget">
						<div class="ui-state-error ui-corner-all">
							<p>
								<span class="ui-icon ui-icon-alert"
									style="float: left; margin-right: 0.3em;" /><strong>Atención:</strong>No
								se han recogido actividades!
							</p>
						</div>
					</div>
				</div>
				<div id="panelActividadesListaTitulo">
					<h1>Lista de Actividades</h1>
					<img id="closePanelActividadesLista" src="img/Button-Close-icon.png" />
				</div>
				<div id="panelActividadesListaContenido">
				</div>
			</div>


		</div>
		<!-- tabs-1 -->

		<div id="tabs-2">
			<div id="barraMenuAcciones">
				<img id="altaAccion" src="img/Button-Add-icon.png" /> 
				<img id="listarAcciones" src="img/Actions-view-calendar-list-icon.png" />
			</div>
			<div id="panelAccionesAlta">
				<h1>Alta de una nueva Acción</h1>
				<img id="closeformAccionesAlta" src="img/Button-Close-icon.png" />
				<form id="formAccionesAlta" action="acciones?op=add" method="post">
					<div id="panelNombreDescripcion">
						<label for="accionNombre">Nombre:</label><input type="text"
							id="accionNombre" name="accionNombre"
							style="height: 33px; width: 447px;" /><br /> <label
							for="accionDescripcion">Descripción:</label><br />
						<textarea id="accionDescripcion" name="accionDescripcion"
							cols="60" rows="10"></textarea>
						<br />
					</div>
					
					<div class="clear"></div>
					<div class="botones">
						<input type="submit" value="Guardar Acción" />
					</div>
				</form>
				<!-- formAccionesAlta -->

			</div>
			<!-- panelAccionesAlta -->

			<div id="listaAcciones">
			
				<div id="listaAccionesMsgError">
					<div class="ui-widget">
						<div class="ui-state-error ui-corner-all">
							<p>
								<span class="ui-icon ui-icon-alert"
									style="float: left; margin-right: 0.3em;" /><strong>Atención:</strong>No
								se han recogido acciones!
							</p>
						</div>
					</div>
				</div>
				<div id="listaAccionesTitulo">
					<h1>Lista de Acciones</h1>
					<img id="closePanelAccionesLista" src="img/Button-Close-icon.png" />
				</div>
				<div id="listaAccionesContenido">
				</div>

			</div>
		</div>

		<div id="tabs-3">
			<div id="barraMenuCategorias">
				<img id="altaCategoria" src="img/Button-Add-icon.png" /> 
				<img id="listarCategorias" src="img/Actions-view-calendar-list-icon.png" />
			</div>

			<div id="panelCategoriasAlta">
				<h1>Alta de una nueva Categoría</h1>
				<img id="closeformCategoriasAlta" src="img/Button-Close-icon.png" />
				<form id="formCategoriasAlta" action="categorias?op=add"
					method="post">
					<div id="panelNombreDescripcion">
						<label for="categoriaNombre">Nombre:</label><input type="text"
							id="categoriaNombre" name="categoriaNombre"
							style="height: 33px; width: 447px;" /><br /> <label
							for="categoriaDescripcion">Descripción:</label><br />
						<textarea id="categoriaDescripcion" name="categoriaDescripcion"
							cols="60" rows="10"></textarea>
						<br />
					</div>

					<div class="clear"></div>
					<div class="botones">
						<input type="submit" value="Guardar Categoría" />
					</div>
				</form>
				<!-- formCategoriasAlta -->

			</div>
			<!-- panelCategoriasAlta -->

			<div id="listaCategorias">
				<div id="listaCategoriasMsgError">
					<div class="ui-widget">
						<div class="ui-state-error ui-corner-all">
							<p>
								<span class="ui-icon ui-icon-alert"
									style="float: left; margin-right: 0.3em;" /><strong>Atención:</strong>No
								se han recogido Categorias!
							</p>
						</div>
					</div>
				</div>
				<div id="listaCategoriasTitulo">
					<h1>Lista de Categorias</h1>
					<img id="closePanelCategoriasLista" src="img/Button-Close-icon.png" />
				</div>
				<div id="listaCategoriasContenido">
				</div>
			</div>
		</div>

	</div>




	<div id="showMensajes">Mostrar/Ocultar Mensajes!</div>
	<div id="mensajes"></div>


</body>
</html>
