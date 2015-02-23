(function(){
  var app = angular.module('mallesti', []);

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
