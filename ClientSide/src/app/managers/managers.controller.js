(function() {
  'use strict';
  angular
    .module('KnowledgePortal')
    .controller('ManagersController', ManagersController);

  /** @ngInject */
  function ManagersController($timeout, webDevTec, toastr, managersData, rolesData) {
    var vm = this;
    if (!localStorage.getItem("managers")){
      localStorage.setItem("managers", angular.toJson(managersData.data));
    }
    if (!localStorage.getItem("roles")){
      localStorage.setItem("roles", angular.toJson(rolesData.data));
    }
    vm.gridData = new kendo.data.DataSource({
      transport: {
        read: function(e){
          e.success(angular.fromJson(localStorage["managers"]));
        },
        create: function(e){
          var managers = angular.fromJson(localStorage["managers"]);
          e.data.Id = managers[managers.length-1].Id + 1;
          managers.push(e.data);
          localStorage.setItem("managers", angular.toJson(managers));
          e.success(e.data);
        },
        update: function(e){
          var managers = angular.fromJson(localStorage["managers"]);
          managers[managers.indexOf(managers.filter(function(item) { return item.Id === e.data.Id})[0])] = e.data;
          localStorage.setItem("managers", angular.toJson(managers));
          e.success();
        },
        destroy: function(e){
          var managers = angular.fromJson(localStorage["managers"]);
          for(var i=0; i<managers.length; i++){
            if(managers[i].Id == options.data.Id){
              managers.splice(i,1);
              break;
            }
          }
          localStorage.setItem("managers", angular.toJson(managers));
          e.success();
        }
      },
      error: function (e) {
        alert("Status: " + e.status + "; Error message: " + e.errorThrown);
      },
      pageSize: 6,
      schema: {
        model: {
          id: "Id",
          fields: {
            Id: {editable: false, nullable: true},
            LastName: {validation: {required: true}},
            FirstName: {validation: {required: true}},
            PartnerLink: {},
            Phone: {type: "Phone"},
            Email: { validation: {required: true}},
            Status: {},
            Role: {defaultValue: { RoleId: 1, RoleName: "Менеджер"}}
          }
        }
      }
    });
    vm.gridColumns = [
      { field: "LastName", title: "Фамилия" },
      { field: "FirstName", title: "Имя" },
      { field: "PartnerLink", title: "Партнер",
        template:"<a href=${PartnerLink}>Партнер</a>"},
      { field: "Phone", title: "Мобильный телефон" },
      { field: "Email", title: "Почта" },
      { command: [
        { name: "edit", text: "Редактировать" },
        { name: "destroy", text: "Удалить" }],
        title: "Действия"},
      { template: "<input type='checkbox' data-type='number' data-bind='checked: Status' #= (Status !=0) ? checked='checked' : '' # class='chkbx' />",
        title: "Активность"},
      { field: "Role", title: "Роль", editor: roleDropDownEditor, template: "#=Role.RoleName#" }
    ];
    vm.gridOptions = {
      dataSource: vm.gridData,
      toolbar: [{name: "create", text: "Добавить менеджера"}],
      columns: vm.gridColumns,
      pageable: true,
      editable: "popup"
    };

    function roleDropDownEditor(container, options){
      $('<input data-text-field="RoleName" data-value-field="RoleId" required data-bind="value:' + options.field + '"/>')
        .appendTo(container)
        .kendoDropDownList({
          autoBind: false,
          dataSource:{
            type: "json",
            transport: {
              read: function(e){
                e.success(angular.fromJson(localStorage["roles"]));
              }
            }
          }}
        )}
      }
})();
