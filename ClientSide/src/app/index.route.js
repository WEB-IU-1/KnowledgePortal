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
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('schedulerCourse', {
        url: '/scheduler',
        templateUrl: 'app/scheduler/scheduler.html',
        controller: 'SchedulerCourseController',
        controllerAs: 'scheduler'
      })
      .state('category',{
        url: "/category",
        templateUrl: 'app/category/category.html',
        controller: 'CategoryController',
        controllerAs: 'category'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'app/users/users.html',
        controller: 'UsersController',
        controllerAs: 'users'

      })
      .state('managers', {
        url: '/managers',
        templateUrl: 'app/managers/managers.html',
        controller: 'ManagersController',
        controllerAs: 'managers'
        })
      .state('product', {
        url: '/product/:id',
        templateUrl: 'app/product/product.html',
        controller: 'ProductController',
        controllerAs: 'product',

      });

    $urlRouterProvider.otherwise('/');
  }

})();
