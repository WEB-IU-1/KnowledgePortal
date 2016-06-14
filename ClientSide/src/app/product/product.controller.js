/**
 * Created by ann on 14.06.2016.
 */
(function () {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('ProductController', ProductController);

  function ProductController() {
    var vm = this;
    var crudServiceBaseUrl = "//localhost:1337/api/product/";
    vm.get = function (id)
    {
      return $http({method: 'GET', url: crudServiceBaseUrl+id});
    }
  }
})();
