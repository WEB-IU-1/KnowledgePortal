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
      //dataSource: {
        //schema: {
        //  model: {
        //    id: "_id",
        //    fields: {
        //      _id: { editable: true, nullable: false, hidden: true },
        //      name: { validation: { required: true } },
        //      full_name: { validation: { required: true, min: 1}, hidden: true },
        //      logo: {},
        //      credentials: { hidden: true, validation: { required: true }},
        //      address: { hidden: true, validation: { required: true }},
        //      phone: { validation: { required: true }},
        //      email: { validation: { required: true }},
        //      contact_people: { hidden: true },
        //      categories: { hidden: true },
        //      teachers: { hidden: true },
        //      offices_addresses: { hidden: true },
        //      comment: { }
        //    }
        //  }
        //}
      //},
      toolbar: ["create"],
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
        title: "Полное название компании"
      },{
        field: "logo",
        title: "Лого"
      },{
        field: "credentials",
        title: "Реквизиты"
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
        title: "Направления"
      },{
        field: "teachers",
        title: "Преподаватели"
      },{
        field: "offices_addresses",
        title: "Список адресов филиалов"
      },{
        field: "comment",
        title: "Комментарий"
      },{
        command: ["edit", "destroy"],
        title: "Действия"
      }],
      editable: "popup"
    };
  }
})();
