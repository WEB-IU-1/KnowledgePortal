(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController() {
    var vm = this;

    var crudServiceBaseUrl = "//localhost:25000/api";

    vm.treelistOptions = {
      dataSource: {
        transport: {
          read:  {
            url: crudServiceBaseUrl + "/db",
            dataType: "jsonp"
          },
          ///EmployeeDirectory/Update
          update: {
            url: crudServiceBaseUrl + "/db",
            dataType: "jsonp"
          },
          ////EmployeeDirectory/Destroy
          destroy: {
            url: crudServiceBaseUrl + "/db",
            dataType: "jsonp"
          },
          ////EmployeeDirectory/Create
          create: {
            url: crudServiceBaseUrl + "/db",
            dataType: "jsonp"
          },
          parameterMap: function(options, operation) {
            if (operation !== "read" && options.models) {
              return {models: kendo.stringify(options.models)};
            }
          }
        },
        schema: {
          model: {
            id: "EmployeeId",
            parentId: "ReportsTo",
            fields: {
              EmployeeId: { type: "number", editable: false, nullable: false },
              ReportsTo: { nullable: true, type: "number" },
              FirstName: { validation: { required: true } },
              LastName: { validation: { required: true } },
              HireDate: { type: "date" },
              Phone: { type: "string" },
              BirthDate: { type: "date" },
              Extension: { type: "number", validation: { min: 0, required: true } },
              Position: { type: "string" }
            }
          }
        }
      },
      sortable: true,
      editable: true,
      columns: [
        { field: "FirstName", title: "First Name", width: "150px" },
        { field: "LastName", title: "Last Name", width: "150px" },
        { field: "Position" },
        { title: "Location",
          template: "{{ dataItem.City }}, {{ dataItem.Country }}"
        },
        { command: ["edit"] }
      ]
    };
  }
})();
