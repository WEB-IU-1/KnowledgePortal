(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryController',
        controllerAs: 'category'
      })
      /*.state('category',{
        url: "/category",
        templateUrl: 'app/category/category.html',
        controller: 'CategoryController',
        controllerAs: 'category'
      })*/
      .state('users', {
        url: '/users',
        templateUrl: 'app/users/users.html',
        controller: 'UsersController',
        controllerAs: 'users'

      });
    $urlRouterProvider.otherwise('/');
  }

})();
