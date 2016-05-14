(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController() {
    var vm = this;

    var crudServiceBaseUrl = "//localhost:1337/api/category";

    vm.treelistOptions = {
      dataSource: {
        transport: {
          read:  {
            url: crudServiceBaseUrl + "/all",
            dataType: "jsonp"
          },
          ///EmployeeDirectory/Update
          update: {
            url: crudServiceBaseUrl + "/",
            dataType: "jsonp"
          },
          ////EmployeeDirectory/Destroy
          destroy: {
            url: crudServiceBaseUrl + "/",
            dataType: "jsonp"
          },
          ////EmployeeDirectory/Create
          create: {
            url: crudServiceBaseUrl + "/",
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
            id: "_id",
            parentId: "parent_id",
            fields: {
              __v:{nullable:true},
              _id: { type: "string", editable: false},
              name: { type: "string", validation: { required: true } },
              description:{type:"string", nullable:true},
              created_date: { type: "date" },
              updated_date: { type: "date" },
              active: {type:"boolean"},
              parent_id: { nullable: true, type: "string"}
            }
          }
        }
      },
      sortable: true,
      editable: true,
      columns: [
        { field: "_id", title: "Id", width: "40px" },
        { field: "name", title: "Category name", width: "150px" },
        { field: "description",title:"Description"},
        { field: "created_date",title: "Created date"},
        { field:"updated_date",title: "Updated date"},
        { field:"active",title:"Active",
          template: "<input type='checkbox' data-bind='checked: active' />",
          width: "100px"
        },
        { command: ["edit"] }

      ]
    };
  }
})();
