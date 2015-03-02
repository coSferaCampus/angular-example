(function(){
  // App module
  var app = angular.module(
    'mallesti',
    ['ui.router', 'templates', 'mallesti-customer', 'mallesti-project', 'LocalStorageModule']
  );

  app.factory("httpInterceptor", ['AuthService', function(AuthService) {
    return {
      request: function(config) {
        config.headers['X-User-Email'] = AuthService.currentUser().email;
        config.headers['X-User-Token'] = AuthService.currentUser().authentication_token;
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

  // login
  app.controller(
    "LoginController",
    ['$http', '$state', 'AuthService', function($http, $state, AuthService){
      var scope = this;
      scope.session = {};
      scope.error = false

      scope.login = function() {
        $http.post(
          "http://localhost:4000/session.json",
          {email: scope.session.email, password: scope.session.password}
        )
          .success(function(data) {
            AuthService.saveUser(data.user);
            $state.go("home.info");
          })
          .error(function(data) {
            scope.session = {};
            scope.error = true;
          })
      };
    }]
  );

  app.factory("AuthService", ['localStorageService', function(localStorageService) {
    var currentUser = localStorageService.get("user");
    return {
      currentUser: function() {
        return currentUser;
      },
      saveUser: function(user) {
        localStorageService.set("user", user);
        currentUser = user;
      },
      destroyUser: function() {
        localStorageService.set("user", null);
        currentUser = null;
      }
    };
  }]);
})();
