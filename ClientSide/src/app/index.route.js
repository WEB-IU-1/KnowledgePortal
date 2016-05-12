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
      .state('scheduleCourse', {
        url: '/schedule',
        templateUrl: 'app/schedule/schedule.html',
        controller: 'ScheduleCourseController',
        controllerAs: 'scheduleCourse'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
