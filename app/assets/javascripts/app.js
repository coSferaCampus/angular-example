(function(){
  // App module
  var app = angular.module(
    'mallesti',
    ['ui.router', 'templates', 'mallesti-customer', 'mallesti-project']
  );

  app.config(function($urlRouterProvider, $stateProvider){
    // Para las urls que no se encuentren, redirigimos a la raíz.
    $urlRouterProvider.otherwise("/home");

    // Aquí establecemos los estados de nuestra applicación.
    $stateProvider
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
