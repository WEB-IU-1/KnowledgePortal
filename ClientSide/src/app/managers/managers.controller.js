(function() {
  'use strict';
  angular
    .module('KnowledgePortal')
    .controller('ManagersController', ManagersController);

  /** @ngInject */
  function ManagersController($timeout, webDevTec, toastr, managersData, rolesData) {
    var vm = this;
    if (!localStorage.getItem("roles")){
      localStorage.setItem("roles", angular.toJson(rolesData.data));
    }
    vm.gridData = new kendo.data.DataSource({
      batch: true,
      transport: {
        read: {
          url: "http://localhost:1337/api/manager/",
          dataType: "json",
          type: "GET"
        },
        create: {
          url: "http://localhost:1337/api/manager/",
          dataType: "json",
          type: "POST"
        },
        update: {
          url: "http://localhost:1337/api/manager/",
          dataType: "json",
          type: 'PUT'
        },
        destroy: {
          url: "http://localhost:1337/api/manager/",
          dataType: "json",
          type: "DELETE"
        },
        parameterMap: function(options, operation){
          if (operation !== "read" && options.models) {
            return {models: kendo.stringify(options.models)};
          }
        }
      },
      error: function (e) {
        alert("Status: " + e.status + "; Error message: " + e.errorThrown);
      },
      pageSize: 6,
      schema: {
        model: {
          id: "_id",
          fields: {
            id: {editable: false, nullable: true},
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
