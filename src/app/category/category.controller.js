(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController() {
    var vm = this;

    var crudServiceBaseUrl = "//demos.telerik.com/kendo-ui/service";

    vm.treelistOptions = {
      dataSource: {
        transport: {
          read:  {
            url: crudServiceBaseUrl + "/EmployeeDirectory/All",
            dataType: "jsonp"
          },
          update: {
            url: crudServiceBaseUrl + "/EmployeeDirectory/Update",
            dataType: "jsonp"
          },
          destroy: {
            url: crudServiceBaseUrl + "/EmployeeDirectory/Destroy",
            dataType: "jsonp"
          },
          create: {
            url: crudServiceBaseUrl + "/EmployeeDirectory/Create",
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
