(function () {
  'use strict';

  angular
    .module('KnowledgePortal')
    .directive('sidebar', sidebar);

  /** @ngInject */
  function sidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      scope: {
        creationDate: '='
      },
      controller: 'SidebarController',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

})();
