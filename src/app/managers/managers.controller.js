(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('ManagersController', ManagersController);

  /** @ngInject */
  function ManagersController() {
    var vm = this;
    vm.gridData = new kendo.data.DataSource({
      data: [
        {surname:"Yes", name:"Jane", partner:"James No", phone:"+7978xxxxx", email:"aa@gmail.com", activity: "true"},
        {surname:"Yes", name:"Jane", partner:"James No", phone:"+7978xxxxx", email:"aa@gmail.com", activity: "true"}
      ],
      pageSize: 10
    });
    vm.gridColumns = [
      { field: "surname", title: "Фамилия" },
      { field: "name", title: "Имя" },
      { field: "partner", title: "Партнер" },
      { field: "phone", title: "Мобильный телефон" },
      { field: "email", title: "Почта" },
      { command: [
        {text: "Редактировать", click: vm.editManager},
        {text: "Удалить", click: vm.deleteManager},
        {text: "Установить права", click: vm.setRightsManager}],
        title: "Действия"},
      {template: '<input type="checkbox" #= activity ? \'checked="checked"\' : "" # class="chkbx" />',
        title: "Активность"}
    ];
    vm.gridOptions = {
      dataSource: vm.gridData,
      columns: vm.gridColumns,
      pageable: true
    };
    vm.editManager = function(e){
      e.preventDefault();
    };
    vm.deleteManager = function(e){
      e.preventDefault();
    };
    vm.setRightsManager = function(e){
      e.preventDefault();
    };
  }
})();
