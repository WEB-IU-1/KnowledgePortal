angular
  .module('KnowledgePortal')
  .service('AuthenticationService', function() {
    var auth = {
      isLogged: false
    }
    return auth;
  });

angular
  .module('KnowledgePortal')
  .service('UserInfoService', function($http) {
    return {
      getUserInfo: function(username){
        return $http.post("//localhost:1337/api/user/userInfo", {username: username});
      }
    }
  });

angular
  .module('KnowledgePortal')
  .service('TokenInterceptor', function ($q, $window, $location, AuthenticationService) {   //service, that provides header addition to http request
    return {
      request: function (config) {
        config.headers = config.headers || {};
        if ($window.localStorage.token) {
          config.headers.Authorization = 'Bearer '+ $window.localStorage.token;
        }
        return config;
      },

      requestError: function(rejection) {
        return $q.reject(rejection);
      },

      /* Set Authentication.isAuthenticated to true if 200 received */
      response: function (response) {
        if (response != null && response.status == 200 && $window.localStorage.token && !AuthenticationService.isAuthenticated) {
          AuthenticationService.isAuthenticated = true;
        }
        return response || $q.when(response);
      },

      /* Revoke client authentication if 401 is received */
      responseError: function(rejection) {
        if (rejection != null && rejection.status === 401 && ($window.localStorage.token || AuthenticationService.isAuthenticated)) {
          delete $window.localStorage.token;
          AuthenticationService.isAuthenticated = false;
        }

        return $q.reject(rejection);
      }
    };
  });
