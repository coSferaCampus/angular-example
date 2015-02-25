(function(){
  var app = angular.module('mallesti-project', []);

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
})();
