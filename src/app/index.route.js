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
      .state('users', {
        url: '/users',
        templateUrl: 'app/users/users.html',
        controller: 'UsersController',
        controllerAs: 'users',
        resolve:{
          userData: function($http){
            return $http({url:"./app/users/users.json", type:"GET"}).then(function(data){
              return(angular.fromJson(data));
            })
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
