(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('managers', {
        url: '/managers',
        templateUrl: 'app/managers/managers.html',
        controller: 'ManagersController',
        controllerAs: 'managers',
        resolve: {
          managersData: function ($http) {
            return $http({url: "./app/managers/managers.json", type: "GET"}).then(function (data) {
              return (angular.fromJson(data));
            })
          },
          rolesData: function($http) {
            return $http({url: "./app/managers/roles.json", type: "GET"}).then(function (data) {
              return (angular.fromJson(data));
            })
          }
        }
        });

    $urlRouterProvider.otherwise('/');
  }

})();
