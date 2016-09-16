(function() {
  'use strict';
  angular
    .module('KnowledgePortal')
    .controller('ManagersController', ManagersController);

  /** @ngInject */
  function ManagersController(DataSource) {
    var vm = this;
    var crudServiceBaseUrl = "//localhost:1337/api/user/";
    vm.gridColumns = [
      { field: "LastName", title: "Фамилия" },
      { field: "FirstName", title: "Имя" },
      { field: "PartnerLink", title: "Партнер",
        template:"<a href=${PartnerLink}>Партнер</a>"},
      { field: "Phone", title: "Мобильный телефон" },
      { field: "Email", title: "Почта" },
      { field: "password", title: "Пароль", hidden: true, editor: passwordEditor,},
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
      $('<input required data-bind="value:' + options.field + '"/>')
        .appendTo(container)
        .kendoDropDownList({
          dataTextField: "RoleName",
          dataValueField: "RoleId",
          autoBind: false,
          dataSource:{
            data: [
              {
                "RoleId": 0,
                "RoleName": "Пользователь"
              },
              {
                "RoleId": 1,
                "RoleName": "Менеджер"
              },
              {
                "RoleId": 1,
                "RoleName": "Администратор"
              }
            ]
          }
        }
        )}
      }
  function passwordEditor(container, options)
  {
    $('<input type="password" required class="k-textbox" ' +
      'data-bind="value:' + options.field + '"/>').appendTo(container);
  };
})();
