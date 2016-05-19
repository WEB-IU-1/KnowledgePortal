(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController(DataSource) {
    var uc = this;
    var crudServiceBaseUrl = "//localhost:1337/api/customer";
    uc.mainGridOptions = {
      toolbar: [{name:"create", text:"Добавить"}],
      dataSource: DataSource.getDataSource(crudServiceBaseUrl),
      editable: "popup",
      filterable: {
        mode: "row"
      },
      sortable: true,
      pageable: true,
      columns: [{
        field: "LastName",
        title: "Фамилия",
        width: "120px"
      },{
        field: "FirstName",
        title: "Имя"
      },{
        field: "Gender",
        title: "Пол",
        width: "120px"
      },{
        field: "Address",
        title: "Адрес"
      },{
        field: "Phone",
        title: "Телефон"
      },{
        field: "BirthDate",
        title: "Дата рождения",
        filterable: {
          ui: "datetimepicker"
        }
      },{
        field: "Email",
        title: "Email"
      },{
        field: "RegistrationDate",
        title: "Дата регистрации",
        filterable: {
          ui: "datetimepicker"
        }
      },{
        command: [{name:"edit", text:"Редактировать"}, {name: "destroy", text: "Удалить"}],
        title: "&nbsp;",
        width: "250px"
      }
      ]
    };
  }
})();

