(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('IndexController', ['$document', IndexController]);

  /** @ngInject */
  function IndexController($document) {
    var vm = this;
    vm.dropdown = false;
    vm.showDropdown = function() {
      vm.dropdown = !vm.dropdown;
    };
    /*$document.bind('click', function(event) {
      var isClickedElementChildOfPopup = element
          .find(event.target)
          .length > 0;

      if (isClickedElementChildOfPopup)
        return;

      vm.dropdown = false;
      vm.$apply();
    });*/

  }
})();
