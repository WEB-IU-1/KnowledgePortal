(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
