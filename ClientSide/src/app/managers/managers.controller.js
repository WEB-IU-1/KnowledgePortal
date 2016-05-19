(function() {
  'use strict';
  angular
    .module('KnowledgePortal')
    .controller('ManagersController', ManagersController);

  /** @ngInject */
  function ManagersController(rolesData, DataSource) {
    var vm = this;
    if (!localStorage.getItem("roles")){
      localStorage.setItem("roles", angular.toJson(rolesData.data));
    }
    var crudServiceBaseUrl = "//localhost:1337/api/manager/";
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
      dataSource: DataSource.getDataSource(crudServiceBaseUrl),
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
