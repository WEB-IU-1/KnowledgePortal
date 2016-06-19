(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $location, $window, $http, $rootScope, AuthenticationService) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
      vm.logIn = function logIn(username, password){
        if (username !== undefined && password !== undefined){
          $http.post("//localhost:1337/api/user/auth", {username: username, password: password}).then(function(response) { //getting token from server, and if successful
            $http.post("//localhost:1337/api/user/userInfo", {username: username}).then(function(response) {             //getting user info from server
              $rootScope.user=response.data.user;
            }, function(response){         //processing user info getting error
              console.log(response.status);
            });
            AuthenticationService.isLogged = true;
            $window.localStorage.token=response.data.token;
          }, function(response) {         //processing token getting error
            console.log(response.status);
            console.log(response.data);
          });
        }
      }

      vm.logout = function logout() {
        if (AuthenticationService.isLogged) {
          AuthenticationService.isLogged = false;
          delete $window.localStorage.token;
          $location.path("/");
        }
      }
    }
  }

})();
