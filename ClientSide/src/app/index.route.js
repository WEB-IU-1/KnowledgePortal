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
        controllerAs: 'managers'
      })
      .state('partners', {
        url: '/partners',
        templateUrl: 'app/partners/partners.html',
        controller: 'PartnersController',
        controllerAs: 'partners'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
