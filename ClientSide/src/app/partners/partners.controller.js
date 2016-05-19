(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('PartnersController', PartnersController);

  /** @ngInject */
  function PartnersController() {
    var vm = this;

    vm.mainGridOptions = {
      dataSource: {
        transport: {
            read: {
              url: "http://localhost:1337/api/partner/all",
              dataType: "json"
            },
            update: {
              url: "http://localhost:1337/api/partner/",
              dataType: "json"
            },
            create: {
              url: "http://localhost:1337/api/partner/",
              type: "post",
              dataType: "json"
            },
            destroy: {
              url: "http://localhost:1337/api/partner/",
              dataType: "json"
            }
        },
        //schema: {
        //  model: {
        //    id: "ID",
        //    fields: {
        //      ID: { editable: true, nullable: true },
        //      name: { validation: { required: true } },
        //      full_name: { validation: { required: true, min: 1} },
        //      logo: {},
        //      credentials: {validation: { required: true }},
        //      Discontinued: { type: "boolean" },
        //      UnitsInStock: { type: "number", validation: { min: 0, required: true } }
        //    }
        //  }
        //}
      },
      toolbar: ["create"],
      sortable: true,
      pageable: true,
      dataBound: function() {
        this.expandRow(this.tbody.find("tr.k-master-row").first());
      },
      columns: [{
        field: "ID",
        title: "ID",
        hidden: true
      },{
        field: "name",
        title: "Название компании"
      },{
        field: "full_name",
        title: "Полное название компании",
        hidden: true
      },{
        field: "logo",
        title: "Лого"
      },{
        field: "credentials",
        title: "Реквизиты",
        hidden: true
      },{
        field: "address",
        title: "Адрес",
        hidden: true
      },{
        field: "phone",
        title: "Телефон"
      },{
        field: "email",
        title: "Email"
      },{
        field: "contact_people",
        title: "Контактные лица",
        hidden: true
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
