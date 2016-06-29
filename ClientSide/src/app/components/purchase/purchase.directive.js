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
    vm.maxQuantity = vm.product.seats_count - vm.product.busy_seats_count;
    vm.mail = {
      buyer:"",
      gifted:""
    };
    vm.certificate = false;

    vm.cancel = function() {
      vm.modalWindow.close()
    };
    vm.pay = function () {
      if (vm.validator.validate()){
        var result = {};
        if (vm.certificate){
          result = {
            sum: vm.quantity*vm.product.cost,
            mail: vm.mail.gifted,
            buyer:vm.mail.buyer
          }
        }
        else {
          result = {
            sum: vm.quantity*vm.product.cost,
            mail: vm.mail.buyer
          };
        }
        vm.modalWindow.close();
      }
      else {
      }
    }
  }

})();
