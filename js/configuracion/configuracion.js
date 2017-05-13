miApp.config(function($stateProvider,$urlRouterProvider,$authProvider){

$authProvider.loginUrl = 'TpPizzeriaNodar/servidor/jwt/php/auth.php';
$authProvider.signupUrl = '/auth/signup';
$authProvider.unlinkUrl = '/auth/unlink/';
$authProvider.tokenName = 'pizzeriaTP';
$authProvider.tokenPrefix = 'usuario';
$authProvider.authHeader = 'data';
$authProvider.tokenHeader = 'Authorization';
$authProvider.httpInterceptor = function() { return true; },
$authProvider.withCredentials = false;
$authProvider.tokenRoot = null;



$stateProvider
		.state(
			"inicio",{
				url: "/inicio",
				templateUrl: "vistas/inicio.html",
				controller:"controlInicio"
			})
			.state(
			"menu",{
				url:"/menu",
				abstract:true,
				templateUrl:"vistas/menuAbstracto.html"

			})
			.state(
			"menu.login",{
				url:"/login",
				views: {
					"contenido":{
					templateUrl:"vistas/login.html",
					controller:"controlLoginMenu"
						}
				}
			})	
			.state(
			"menu.carta",{
				url:"/carta",
				views: {
					"contenido":{
					templateUrl:"pizza.html",
					controller:"controlCarta"
						}
				}
			})	
				.state(
			"menu.postres",{
				url:"/carta",
				views: {
					"contenido":{
					templateUrl:"postres.html",
					controller:"controlPostres"
						}
				}
			})	
			.state(
			"menu.empanadas",{
				url:"/carta",
				views: {
					"contenido":{
					templateUrl:"empanadas.html",
					controller:"controlEmpanadas"
						}
				}
			})	
			.state(
			"menu.tartas",{
				url:"/carta",
				views: {
					"contenido":{
					templateUrl:"tartas.html",
					controller:"controlTartas"
						}
				}
			})
			
			.state(
			"menu.logueado",{
				url:"/logueado",
				views: {
					"contenido":{
					templateUrl:"vistas/inicio.html",
					controller:"controlInicio"
						}
				}
			}).state(
			"menu.ABM",{
				url:"/ABM",
				views: {
					"contenido":{
					templateUrl:"vistas/ABM.html",
					controller:"controlABM"
						}
				}
			}).state(
			"menu.Grillas",{
				url:"/grillas",
				views: {
					"contenido":{
					templateUrl:"vistas/grillas.html",
					controller:"controlGrillas"
						}
				}
			}).state(
			"menu.AltaLocal",{
				url:"/altaLocal",
				views: {
					"contenido":{
					templateUrl:"vistas/altaLocal.html",
					controller:"altaLocal"
						}
				}
			}).state(
			"menu.GrillaLocal",{
				url:"/GrillaLocal",
				views: {
					"contenido":{
					templateUrl:"vistas/grillaLocal.html",
					controller:"grillaLocal"
						}
				}
			}).state(
			"menu.Registro",{
				url:"/Registro",
				views: {
					"contenido":{
					templateUrl:"vistas/registro.html",
					controller:"controlABM"
						}
				}
			}).state(
			"menu.AltaProducto",{
				url:"/AltaProducto",
				views: {
					"contenido":{
					templateUrl:"vistas/AltaProducto.html",
					controller:"productoCtrl"
						}
				}
			}).state(
			"menu.AltaPromocion",{
				url:"/AltaPromocion",
				views: {
					"contenido":{
					templateUrl:"vistas/AltaPromocion.html",
					controller:"promocionCtrl"
						}
				}
			}).state(
			"menu.GrillaPromociones",{
				url:"/promociones",
				views: {
					"contenido":{
					templateUrl:"vistas/grillaPromociones.html",
					controller:"promocionCtrl"
						}
				}
			}).state(
			"menu.altaPedidos",{
				url:"/altapedidos",
				views: {
					"contenido":{
					templateUrl:"vistas/altaPedido.html",
					controller:"pedidosCtrl"
						}
				}
			}).state(
			"menu.grillaPedidos",{
				url:"/pedidos",
				views: {
					"contenido":{
					templateUrl:"vistas/grillaPedidos.html",
					controller:"pedidosCtrl"
						}
				}
			}).state(
			"menu.grillasEmpleados",{
				url:"/grillasEmpleados",
				views: {
					"contenido":{
					templateUrl:"vistas/grillasEmpleados.html",
					controller:"controlGrillas"
						}
				}
			})




		$urlRouterProvider.otherwise("/inicio");

});
