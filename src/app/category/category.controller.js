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
            id: "category_id",
            parentId: "parent_id",
            fields: {
              category_id: { type: "number", editable: false, nullable: false },
              parent_id: { nullable: true, type: "number" },
              name: { type: "string", validation: { required: true } },
              created_date: { type: "date" },
              updated_date: { type: "date" },
              active: {type:"boolean"}
            }
          }
        }
      },
      sortable: true,
      editable: true,
      columns: [
        { field: "category_id", title: "Id", width: "40px" },
        { field: "name", title: "Category name", width: "150px" },
        { field: "created_date",title: "Created date"},
        { field:"updated_date",title: "Updated date"},
        { field:"active",title:"Active",
          template: "<input type='checkbox' data-bind='checked: checked' />",
          width: "100px"
        },
        { command: ["edit"] }
      ]
    };
  }
})();
