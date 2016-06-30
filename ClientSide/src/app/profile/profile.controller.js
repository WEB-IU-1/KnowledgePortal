(function() {
  'use strict';
  angular
    .module('KnowledgePortal')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController() {
    var vm = this;
    
    vm.Gender = [
      {Gender:"Мужской"},
      {Gender:"Женский"}
    ];
    vm.user = {
      FirstName:"aaa",
      LastName:"bbb",
      Gender: "Женский",
      BirthDate: "5/31/2016"
    };
    vm.save = function() {
      window.alert(vm.user.Gender);
    }
  }
})();
