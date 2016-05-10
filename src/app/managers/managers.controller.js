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
      {managerID: 1, surname:"Yes", name:"Jane", partner:"James No", phone:"+7978xxxxx", email:"aa@gmail.com", activity: "true"},
      {managerID: 2, surname:"Yes", name:"Jane", partner:"James No", phone:"+7978xxxxx", email:"aa@gmail.com", activity: "true"}
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
          vm.sampleData.push(e.data);
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
            managerID: {editable: false, nullable: true},
            surname: {validation: {required: true}},
            name: {validation: {required: true}},
            partner: {},
            phone: {type: "phone"},
            email: { validation: {required: true}},
            activity: {type: "boolean"},
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
        { name: "edit", text: "Редактировать" },
        { name: "destroy", text: "Удалить" },
        { text: "Установить права", click: vm.setRightsManager}],
        title: "Действия"},
        { template: '<input type="checkbox" #= activity ? \'checked="checked"\' : "" # class="chkbx" />',
        title: "Активность"}
    ];
    vm.gridOptions = {
      dataSource: vm.gridData,
      toolbar: [{name: "create", text: "Добавить менеджера"}],
      columns: vm.gridColumns,
      pageable: true,
      editable: "popup"
    };
    vm.setRightsManager = function(e){
      e.preventDefault();
    };
  }
})();
