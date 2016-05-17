(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController(DataSource) {
    var vm = this;

    var crudServiceBaseUrl = "//localhost:1337/api/category/";

    vm.treelistOptions = {
      dataSource: DataSource.getDataSource(crudServiceBaseUrl),
      toolbar:["create"],
      editable: true,
      sortable: true,
      height:540,
      columns: [
        { field: "name",expandable: true, title: "Category name", width: "150px" },
        { title: "Edit", command: [
          {
            name: "destroy",
            text: " ",
            template:
              '<button data-command="destroy" class="k-button k-button-icontext k-grid-delete">' +
              '<span class="k-icon k-delete"></span>Delete</button>'
          }
          ]
        }
      ]
    };
  }
})();
