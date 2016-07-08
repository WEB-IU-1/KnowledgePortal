(function (){
  "use strict";

  angular
    .module('KnowledgePortal')
    .service('sidebarService', ['$http', '$q', function ($http, $q){

      var deferred = $q.defer();
      var url = '//localhost:1337/api/category/';

      $http.get(url).then(function (response){
        deferred.resolve(response);
      });

     //region пока не понимаю
      this.getCategories = function(){
        return deferred.promise;
      };
      //endregion
    }])

})();
