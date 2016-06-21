/**
 * Created by ann on 14.06.2016.
 */
(function () {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('ProductController', ProductController);

  function ProductController($stateParams,$http,productRes) {
    var vm=this;
    vm.resolveResult=productRes.data.article;

  }
})();
