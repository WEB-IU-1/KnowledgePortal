(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController() {
    var vm = this;

    var crudServiceBaseUrl = "//localhost:1337/api/category/";

    vm.treelistOptions = {
      dataSource: {
        transport: {
          read:  {
            url: crudServiceBaseUrl,
            dataType: "json"
          },
          update: {
            url: crudServiceBaseUrl,
            dataType: "json"
          },
          destroy: {
            url: crudServiceBaseUrl,
            dataType: "json"
          },
          create: {
            url: crudServiceBaseUrl,
            dataType: "json"
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
              name: {field: "name", type: "string", validation: { required: true } }
            }
          }
        }
      },
      sortable: true,
      editable: true,
      columns: [
        { field: "name", title: "Category name", width: "150px" },

        { command: [
          { name: "edit" },
          { name: "createChild" },
          { name: "destroy" }]
        }
      ]
    };
  }
})();
