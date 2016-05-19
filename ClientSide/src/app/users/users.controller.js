(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController(DataSource) {
    var uc = this;
    var crudServiceBaseUrl = "//localhost:1337/api/customer/";
    uc.mainGridOptions = {
      toolbar: ["create"],
      dataSource: DataSource.getDataSource(crudServiceBaseUrl),
      editable: "popup",
      filterable: {
        mode: "row"
      },
      sortable: true,
      pageable: true,
      columns: [{
        field: "LastName",
        title: "Last Name",
        width: "120px"
      },{
        field: "FirstName",
        title: "First Name"
      },{
        field: "Gender",
        title: "Gender",
        width: "120px"
      },{
        field: "Address",
        title: "Address"
      },{
        field: "Phone",
        title: "Phone"
      },{
        field: "BirthDate",
        title: "Date of birth",
        filterable: {
          ui: "datetimepicker"
        }
      },{
        field: "Email",
        title: "Email"
      },{
        field: "RegistrationDate",
        title: "RegistrationDate",
        filterable: {
          ui: "datetimepicker"
        }
      },{
        command: ["edit", "destroy"],
        title: "&nbsp;",
        width: "250px"
      }
      ]
    };
  }
})();

