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

      $(document).ready(function () {
        var trigger = $('.hamburger'),
          overlay = $('.overlay'),
          isClosed = false;

        trigger.click(function () {
          hamburger_cross();
        });

        function hamburger_cross() {

          if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
          } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
          }
        }

        $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
        });

        console.log("OK")
      });
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
