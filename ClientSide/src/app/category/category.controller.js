(function () {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController(DataSource) {
    var vm = this;

    var crudServiceBaseUrl = "//localhost:1337/api/category/";

    function onDragEnd() {
      vm.dataSource.sync();
    }

    vm.treelistOptions = {
      dataSource: DataSource.getDataSource(crudServiceBaseUrl),
      dragAndDrop: true,
      editable: {move: true, mode: "popup"},
      dragend: onDragEnd,
      toolbar: [
        {
          name: "create",
          text:"Добавить категорию"
        }
      ],
      sortable: true,
      height: 540,
      columns: [
        {field: "name", expandable: true, title: "Название категории", width: "150px"},
        {field: "description", title: "Описание"},
        {
          field: "created_date",
          title: "Создано",
          format: "{0:d MMM yyyy}",
          width: 100,
          attributes: {
            style: "text-align: center;"
          }
        },
        {
          field: "updated_date",
          title: "Обновлено",
          format: "{0:d MMMM yyyy, H:mm}",
          width: 150,
          attributes: {
            style: "text-align: center;"
          }
        },
        {
          field: "active",
          title: "Активно",


          width: 60,
          attributes: {
            style: "text-align: center;"
          }
        },
        {
          title: "Редактирование",
          command: [
            {name: "edit",text: "Править"},
            {name: "destroy",text:"Удалить"}
          ],
          width: 190,
          attributes: {
            style: "text-align: center;"
          }
        }
      ]
    };
  }
})();
