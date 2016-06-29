(function () {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('TestController', TestController);

  function TestController() {
    var vm = this;
    vm.winvisible = false;
    vm.product = {
      name:"йога",
      start:"12.01",
      end:"13.01",
      description:"медленно меняйте позы",
      location:"подвал",
      cost: 200,
      seats_count: 40,
      busy_seats_count: 35
    }
  }
})();
