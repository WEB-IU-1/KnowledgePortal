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
      .state('categoryId', {
        url: '/category/:id',
        templateUrl: 'app/category/category.html',
        controller: 'sidebarController',
        controllerAs: 'categoryId',
        resolve: {
          categoryRes: function ($stateParams, $http) {
            return $http({method: 'GET', url: "//localhost:1337/api/category/" + $stateParams.id});
          }
        }
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
      .state('partners', {
        url: '/partners',
        templateUrl: 'app/partners/partners.html',
        controller: 'PartnersController',
        controllerAs: 'partners'
      })
      .state('product', {
        url: '/product/:id',
        templateUrl: 'app/product/product.html',
        controller: 'ProductController',
        controllerAs: 'product',
        resolve: {
          productRes: function ($stateParams,$http) {
            $http({method: 'PUT', url: "//localhost:1337/api/product/"+$stateParams.id});
            return $http({method: 'GET', url: "//localhost:1337/api/product/"+$stateParams.id});
          }
        }

      })
      .state('test', {
        url: '/test',
        templateUrl: 'app/testpurchase/test.html',
        controller: 'TestController',
        controllerAs: 'test'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
