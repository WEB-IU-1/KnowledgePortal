(function () {
  "use strict";

  angular
    .module('KnowledgePortal')
    .controller('SidebarController', SidebarController, ['$scope', 'sidebarService']);

  /** @ngInject */
  function SidebarController($scope, sidebarService) {

    var promise = sidebarService.getCategories();
    promise.then(function (response) {
      //see more
      console.log($scope.categories = response.data);

      console.log($scope.categoryMenu = makeObj());

    });

    function makeObj(){
      var result = [];
      $scope.categories.forEach(function (item) {
        if (item.parent_id == null) {
          var categoryObj = {
            name: item.name,
            id: item._id,
            childes: []
          };
          result.push(categoryObj);
        }
      });
      return recurFactory(result)
    }

    function recurFactory(resObj) {
      $scope.categories.forEach(function(item){
        if (item.parent_id){
          resObj.forEach(function(_item,i,resObj){
            if(item.parent_id==_item.id){
              var _categoryObj={
                name: item.name,
                id: item._id,
                childes: []
              };
              resObj[i].childes.push(_categoryObj);

              resObj[i].childes=recurFactory(resObj[i].childes)
            }
          })
        }

      });
      return resObj;
    }
  }


})();
