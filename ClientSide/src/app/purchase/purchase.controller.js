(function () {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('PurchaseController', PurchaseController);

  function PurchaseController($windowInstance, product) {
    var vm = this;
    vm.present = false;
    vm.product = product;
    vm.quantity = 1;
    vm.mail =  {
      gifted: "",
      sender: ""
    };
    vm.phone="";
    vm.cancel = function(){
    };
    vm.pay = function(){
    }
  };
})();
