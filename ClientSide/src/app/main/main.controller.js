(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1460273909238;
    vm.showToastr = showToastr;

    activate();

    vm.mainGridOptions = {
      dataSource: {
        type: "odata",
        transport: {
          read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
        },
        pageSize: 5,
        serverPaging: true,
        serverSorting: true
      },
      sortable: true,
      pageable: true,
      dataBound: function() {
        this.expandRow(this.tbody.find("tr.k-master-row").first());
      },
      columns: [{
        field: "FirstName",
        title: "First Name",
        width: "120px"
      },{
        field: "LastName",
        title: "Last Name",
        width: "120px"
      },{
        field: "Country",
        width: "120px"
      },{
        field: "City",
        width: "120px"
      },{
        field: "Title"
      }]
    };

    vm.detailGridOptions = function(dataItem) {
      return {
        dataSource: {
          type: "odata",
          transport: {
            read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
          },
          serverPaging: true,
          serverSorting: true,
          serverFiltering: true,
          pageSize: 5,
          filter: { field: "EmployeeID", operator: "eq", value: dataItem.EmployeeID }
        },
        scrollable: false,
        sortable: true,
        pageable: true,
        columns: [
          { field: "OrderID", title:"ID", width: "56px" },
          { field: "ShipCountry", title:"Ship Country", width: "110px" },
          { field: "ShipAddress", title:"Ship Address" },
          { field: "ShipName", title: "Ship Name", width: "190px" }
        ]
      };
    };
    

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
