(function () {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('TestController', TestController);

  function TestController(DataSource, $kWindow) {
    var vm = this;

    vm.product = DataSource.getDataSource('//localhost:1337/api/product').read()[0];
    vm.openWindow = function(){
      var windowInstance = $kWindow.open({
        options:{
          modal: true,
          title: "Покупка",
          resizable: true,
          height: 150,
          width: 400,
          visible: false
        },
        templateUrl: 'app/testpurchase/test.html',
        controller: 'TestController',
        resolve: {
          product: function () {
            vm.product
          }
        }
      });
    }

    }
})();
