(function (){
  "use strict";

  angular
    .module('KnowledgePortal')
    .controller('SidebarController', SidebarController)

  /** @ngInject */
  function SidebarController($scope) {

    $scope.categories = [
      {'name':'Йога'},
      {'name':'Танцы'},
      {'name':'Вокал'},
      {'name':'Гитара'}
    ]

  }

})();


