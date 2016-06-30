(function() {
  'use strict';
  angular
    .module('KnowledgePortal')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController($http) {
    var vm = this;
    vm.crudServiceBaseUrl = "//localhost:1337/api/customer";
    vm.Gender = [
      {Id: 1, Name:"Мужской"},
      {Id: 2, Name:"Женский"}
    ];
    vm.user = {
      "_id":"5774fe68565af2040ec07647","LastName":"agdsfaw","FirstName":"agfdsea","Gender":"Женский","Address":"reahger","Phone":"7978000000","BirthDate":"1989-06-01T11:10:04.940Z","Email":"tq34tert@mail.ru","UpdatedDate":"2016-06-30T11:11:36.826Z","RegistrationDate":"2016-06-30T11:11:36.826Z"
    };
    vm.save = function() {
      window.alert("save");
      if (vm.validator.validate()){
        window.alert("valid");
        $http.put(vm.crudServiceBaseUrl, vm.user).then(function (response) {
          e.success(response.data.article);
        })
      }
      else {
        window.alert("invalid");
      }
    }
  }
})();
