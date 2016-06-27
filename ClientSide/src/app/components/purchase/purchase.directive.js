(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .directive('purchaseWindow', purchaseWindow);

  /** @ngInject */
  function purchaseWindow() {
    var directive = {
      restrict: 'E',
      replace: true,
      scope: {
        product: '=',
        modalWindow: '='
      },
      templateUrl: 'app/components/purchase/purchase.html',
      controller: PurchaseController,
      controllerAs: 'purchase',
      bindToController: true
    };

    return directive;

  }

  function PurchaseController() {
    var vm = this;
    vm.quantity = 1;
    vm.mail = {
      buyer:"",
      gifted:""
    };
    vm.certificate = false;
  }

})();
