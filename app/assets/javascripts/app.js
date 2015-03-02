(function(){
  // App module
  var app = angular.module(
    'mallesti',
    ['ui.router', 'templates', 'mallesti-customer', 'mallesti-project', 'mallesti-auth']
  );

  // Esto pasa el token y el email en cada petición que hagamos a la API
  app.factory("httpInterceptor", ['AuthService', function(AuthService) {
    return {
      request: function(config) {
        config.headers['X-User-Email'] = AuthService.currentUserEmail();
        config.headers['X-User-Token'] = AuthService.currentUserToken();
        return config;
      }
    };
  }]);

  app.config(function($urlRouterProvider, $stateProvider, $httpProvider){
    // Configuramos todas las peticiones para pasar el token de usuario
    $httpProvider.interceptors.push("httpInterceptor");

    // Para las urls que no se encuentren, redirigimos a la raíz.
    $urlRouterProvider.otherwise("/login");

    // Aquí establecemos los estados de nuestra applicación.
    $stateProvider
      .state("login", {
        url: "/login",
        templateUrl: "login.html",
        controller: "LoginController",
        controllerAs: "loginCtrl"
      })
      .state("home", {
        url: "/home",
        templateUrl: "home.html",
        controller: "CustomerController",
        controllerAs: "customerCtrl"
      })
      .state("home.info", {
        url: "/info",
        templateUrl: "customer-extended-information.html"
      })
      .state("home.projects", {
        url: "/projects",
        templateUrl: "customer-projects.html"
      });
  });
})();
