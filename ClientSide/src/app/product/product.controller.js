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
    vm.professional_levels = [
      { text: "Начальный", value: 1 },
      { text: "Средний", value: 2 },
      { text: "Професиональный", value: 3 },
    ];
    vm.duration = function() {
    var result=new Date(new Date(vm.resolveResult.end) - new Date(vm.resolveResult.start));
     return (((result.getFullYear().valueOf()-	1970)!=0) ? result.getFullYear().valueOf()-	1970 :"")+""+
     (((result.getMonth().valueOf())!=0) ? result.getMonth().valueOf() :"")+""+
       (((result.getDay().valueOf()-4)!=0) ? result.getDay().valueOf()-4 :"")+""+
       result.getHours()-3+":"+result.getMinutes();
    };
  }
})();
