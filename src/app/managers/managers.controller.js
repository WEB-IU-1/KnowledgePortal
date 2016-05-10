(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('ManagersController', ManagersController);

  /** @ngInject */
  function ManagersController() {
    var vm = this;
    // hardcode much
    vm.sampleData =  [
      {surname:"Yes", name:"Jane", partner:"James No", phone:"+7978xxxxx", email:"aa@gmail.com", activity: "true"},
      {surname:"Yes", name:"Jane", partner:"James No", phone:"+7978xxxxx", email:"aa@gmail.com", activity: "true"}
    ];
    vm.sampleDataNextID = vm.sampleData.length + 1;

    function getIndexById(id) {
      var idx,
        l = vm.sampleData.length;

      for (var j; j < l; j++) {
        if (vm.sampleData[j].ProductID == id) {
          return j;
        }
      }
      return null;
    }
  //  hardcode much end?
    vm.gridData = new kendo.data.DataSource({
      transport: {
        read: function(e){
          e.success(vm.sampleData);
        },
        create: function(e){
          e.data.ManagerID = vm.sampleDataNextID++;
          vm.sampleData.push(data);
          e.success(e.data);
        },
        update: function(e){
          vm.sampleData[getIndexById(e.data.ManagerID )] = e.data;
          e.success();
        },
        destroy: function(e){
          vm.sampleData.splice(getIndexById(e.data.ManagerID), 1);
          e.success();
        }
      },
      error: function (e) {
        alert("Status: " + e.status + "; Error message: " + e.errorThrown);
      },
      pageSize: 10,
      schema: {
        model: {
          id: "ManagerID",
          fields: {
            ManagerID: {editable: false, nullable: true},
            Surname: {validation: {required: true}},
            Name: {validation: {required: true}},
            Partner: {},
            Phone: {type: "number"},
            Email: { validation: {required: true}}
          }
        }
      }
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
      pageable: true,
      editable: inline
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
