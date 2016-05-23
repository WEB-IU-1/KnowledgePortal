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
        { field: "name",expandable: true, title: "Название категории", width: "150px" },
        { field:"description",title:"Описание"},
        { field:"created_date",title:"Создано", format:"{0:d MMM yyyy}"},
        { field:"updated_date",title:"Обновлено", format:"{0:d MMMM yyyy, hh:mm}"},
        { title:"Активно",
          template:
          '<input type="checkbox" #= active ? \'checked="checked"\' : "" # class="chkbx" />',
          width: 60,
          attributes: {
            style: "text-align: center;"
          }},
        { title: "Редактирование", command: [ "edit", "destroy" ], width: 190,
          attributes: {
            style: "text-align: center;"
          }
        }
      ]
    };
  }
})();
