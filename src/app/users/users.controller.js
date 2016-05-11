(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController($timeout, webDevTec, toastr, userData) {
    var uc = this;
    if (localStorage.getItem("users") == undefined){
      localStorage.setItem("users", angular.toJson(userData.data));
    }
    uc.mainGridOptions = {
      toolbar: ["create"],
      dataSource: new kendo.data.DataSource({
       transport: {
         create: function(options){
           var localData = angular.fromJson(localStorage["users"]);
           options.data.Id = localData[localData.length-1].Id + 1;
           localData.push(options.data);
           localStorage["users"] = angular.toJson(localData);
           options.success(options.data);
         },
         read: function(options){
           var localData = angular.fromJson(localStorage["users"]);
           options.success(localData);
         },
         update: function(options){
           var localData = angular.fromJson(localStorage["users"]);
           localData[getIndexById(localData, options.data.Id)] = options.data;
           localStorage["users"] = angular.toJson(localData);
           options.success(options.data);
         },
         destroy: function(options){
           var localData = angular.fromJson(localStorage["users"]);
           for(var i=0; i<localData.length; i++){
             if(localData[i].Id == options.data.Id){
               localData.splice(i,1);
               break;
             }
           }
           localStorage["users"] = angular.toJson(localData);
           options.success(localData);
         }
       },
       batch:false,
        schema: {
          model: {
            id: "Id",
            fields: {

              LastName: {type: "string" },
              FirstName: {type: "string" },
              Gender: {type: "string" },
              Address: {type: "string" },
              BirthDate:{type: "date"},
              Phone:{type:"string"},
              Email:{ type: "string" },
              RegistrationDate:{type:"date"}
            }
          }
        },
        pageSize: 10
     }),
      editable: "popup",
      filterable: {
        mode: "row"
      },
      sortable: true,
      pageable: true,
      columns: [{
        field: "LastName",
        title: "Last Name",
        width: "120px"
      },{
        field: "FirstName",
        title: "First Name"
      },{
        field: "Gender",
        title: "Gender",
        width: "120px"
      },{
        field: "Address",
        title: "Address"
      },{
        field: "Phone",
        title: "Phone"
      },{
        field: "BirthDate",
        title: "Date of birth",
        filterable: {
          ui: "datetimepicker" // use Kendo UI DateTimePicker
        }
      },{
        field: "Email",
        title: "Email"
      },{
        field: "RegistrationDate",
        title: "RegistrationDate"
      },{
        command: ["edit", "destroy"],
        title: "&nbsp;",
        width: "250px"
      }
      ]
    };
  }
  function getIndexById(data, id) {
    var idx,
      l = data.length;

    for (var j; j < l; j++) {
      if (data[j].Id == id) {
        return j;
      }
    }
    return null;
  }
})();

