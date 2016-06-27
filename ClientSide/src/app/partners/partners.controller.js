(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('PartnersController', PartnersController);

  /** @ngInject */
  function PartnersController(DataSource) {
    var vm = this;
    var crudServiceBaseUrl = "//localhost:1337/api/partner/";

    vm.mainGridOptions = {
      dataSource: DataSource.getDataSource(crudServiceBaseUrl),
      toolbar: [{name: "create", text: "Добавить партнёра"}],
      sortable: true,
      pageable: true,
      dataBound: function() {
        this.expandRow(this.tbody.find("tr.k-master-row").first());
      },
      columns: [
        {
          field: "name",
          title: "Название компании"
      },{
          field: "full_name",
          title: "Полное название компании",
          hidden: true
        },{
          field: "logo",
          title: "Лого",
          hidden: true
      },{
          field: "credentials",
          title: "Реквизиты",
          hidden: true
      },{
          field: "address",
          title: "Адрес"
      },{
          field: "phone",
          title: "Телефон"
      },{
          field: "email",
          title: "Email"
      },{
          field: "contact_people",
          title: "Контактные лица"
      },{
          field: "categories",
          title: "Направления",
          hidden: true
      },{
          field: "teachers",
          title: "Преподаватели",
          hidden: true
      },{
          field: "offices_addresses",
          title: "Список адресов филиалов",
          hidden: true
      },{
          field: "active",
          title: "Активный?",
          template: "<input type='checkbox' data-type='number' data-bind='checked: active' #= (active !=0) ? checked='checked' : '' # class='chkbx' />"
      },{
          field: "comment",
          title: "Комментарий",
          hidden: true
      },{
        command: [{name: "edit", text: "Редактировать"}, {name: "destroy", text: "Удалить"}],
        title: "Действия"
      }],
      editable: "popup"
    };
  }
})();
