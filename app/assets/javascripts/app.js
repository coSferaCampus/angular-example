(function(){
  // App module
  var app = angular.module('mallesti', ['templates']);

  // Controllers
  app.controller('CustomerController', function(){
    this.customer = customer;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ProjectFormController', function(){
    this.newProject = {};
    this.errors = false;

    this.addProject = function(customer, form) {
      if (form.$valid) {
        customer.projects.push(this.newProject);
        this.newProject = {};
        this.errors = false;
      }
      else {
        this.errors = true;
      }
    };
  });

  // Directives
  app.directive('customerTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'customer-title.html'
    };
  });

  app.directive('customerPanels', function(){
    return {
      restrict:     'E',
      templateUrl:  'customer-panels.html',
      controller:   'PanelController',
      controllerAs: 'panelCtrl'
    };
  });

  app.directive('customerTabs', function(){
    return {
      restrict: 'E',
      templateUrl: 'customer-tabs.html'
    };
  });

  app.directive('customerExtendedInformation', function(){
    return {
      restrict: 'E',
      templateUrl: 'customer-extended-information.html'
    };
  });

  app.directive('customerProjects', function(){
    return {
      restrict: 'E',
      templateUrl: 'customer-projects.html'
    };
  });

  app.directive('projectsTable', function(){
    return {
      restrict: 'E',
      templateUrl: 'projects-table.html'
    };
  });

  app.directive('newProject', function(){
    return {
      restrict:     'E',
      templateUrl:  'new-project.html',
      controller:   'ProjectFormController',
      controllerAs: 'projectFormCtrl'
    };
  });

  var customer = {
    name: "Melyna Rau",
    address: "7220 Jakubowski Freeway",
    town: "Lake Juliofurt",
    city: "Hilbertside",
    country: "Republic of Korea",
    zip_code: "43650-0519",
    phone: "1-206-502-0584",
    cif: "00000001R",
    email: "user1@email.com",
    image: "http://lorempixel.com/400/200/people",
    projects: [
      {
        name: 'Mallesti',
        description: 'Aumentar la productividad'
      },
      {
        name: 'Procastinator',
        description: 'Perder el tiempo'
      }
    ]
  }

})();
