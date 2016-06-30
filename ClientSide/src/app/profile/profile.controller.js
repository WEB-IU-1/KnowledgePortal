/**
 * Created by ann on 14.06.2016.
 */
(function () {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('ProfileController', ProfileController);

  function ProfileController($state) {
    var pc = this;
    $state.go('profile.edit');
  }
})();
