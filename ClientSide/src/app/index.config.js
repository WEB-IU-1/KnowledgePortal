(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);
    // Adding header containing token in every request
    $httpProvider.interceptors.push('TokenInterceptor');
    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
