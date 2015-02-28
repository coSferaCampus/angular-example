(function(){
  var app = angular.module('mallesti-project', []);

  app.controller('ProjectFormController', ['$http', function($http){
    var scope = this;
    scope.newProject = {name: '', description: ''};
    scope.errors = {};

    scope.addProject = function(customer) {
      $http.post(
        'http://localhost:4000/customers/' + customer.id + '/projects.json',
        {project: scope.newProject}
      )
        .success(function(data){
          customer.projects.push(data.project);
          scope.newProject = {name: '', description: ''};
          scope.errors = {};
        })
        .error(function(data){
          scope.errors = data.errors;
        });
    };

    scope.hasError = function(attribute){
      return scope.errors[attribute.$name] && attribute.$invalid;
    };
  }]);

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
