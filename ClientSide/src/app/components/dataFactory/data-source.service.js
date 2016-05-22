(function () {
  'use strict';

  angular
    .module('KnowledgePortal')
    .factory('DataSource', DataSource);

  /** @ngInject */
  function DataSource($http) {

    var service = {
      getDataSource: getDataSource
    };

    //here you need add your api url and schema model
    var models = {
      '//localhost:1337/api/category/': {
        model: {
          id: "_id",
          parentId: "parent_id",
          fields: {
            _id: {type: "string", nullable: false, editable: false},
            parent_id: {type: "string", nullable: true},
            name: {type: "string", validation: {required: true}}
          },
          expanded: true
        }
      },
      '//localhost:1337/api/customer':{
        model : {
          id: "_id",
          fields: {
            _id:{type: "string", nullable: false, editable: false},
            LastName: {
              type: "string" ,
              validation: {
                required: true,

              lastNameValidator: function(input) {
                if (input.is("[name='LastName']") && input.val() != "") {
                  input.attr("data-lastNameValidator-msg", "Фамилия состоит только из букв");
                  return /^([A-Za-zА-Яа-я]+)$/.test(input.val())
                }
                return true;
                }
              }
            },
            FirstName: {
              type: "string" ,
              validation:
               {
                required: true,
                 firstNameValidator: function(input) {
                   if (input.is("[name='FirstName']") && input.val() != "") {
                     input.attr("data-firstNameValidator-msg", "Имя состоит только из букв");
                     return /^([A-Za-zА-Яа-я]+)$/.test(input.val())
                   }
                   return true;
                 }
               }
            },
            Gender: {type: "string" , validation: {required: true}},
            Address: {type: "string" , validation: {required: true}},
            BirthDate:
            {
              type: "date",
              validation:
              {
                required: true,
                ageValidator: function(input) {
                  if (input.is("[name='BirthDate']") && input.val() != "") {
                    input.attr("data-ageValidator-msg", "Пользователь должен быть совершеннолетним");
                    return isAdult(new Date(input.val()))
                  }
                  return true;
                }
              }
            },
            Phone:
            {
              type:"string",
              validation:
              {
                required: true,
                phoneValidator: function(input) {
                  if (input.is("[name='Phone']") && input.val() != "") {
                    input.attr("data-phoneValidator-msg", "Введите телефон в правильном формате");
                    return /^(?:\+?\d{2}[ -]?\d{3}[ -]?\d{5,8}|\d{4})$/.test(input.val());
                  }
                  return true;
                }
              }
            },
            Email: {
              type: "string" ,
              validation:
              {
                required: true,
                emailValidator: function(input) {
                  if (input.is("[name='Email']") && input.val() != "") {
                    input.attr("data-emailValidator-msg", "Введите email в формате name@smth.de");
                    return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
                      .test(input.val());
                  }
                  return true;
                }
              }
            },
            RegistrationDate: {type:"date", validation: {required: true}, editable: false},
            UpdatedDate: {type:"date", validation: {required: true}, editable:false}
          }
        }
      },
      '//localhost:1337/api/other':{
        model: {
          id: "_id",
          fields:{
            _id: {type: "string", nullable: false, editable: false}
          },
          expanded: true
        }
      }
    };

    return service;

    function getDataSource(url) {
      return new kendo.data.DataSource({
        batch: false,
        type: "json",
        transport: {
          create: function (e) {
            return $http.post(url,e.data).then(function (response) {
                e.success(response.data.article);
              },
              function () {
                e.error();
              }
            )
          },
          read: function (e) {
            return $http.get(url).then(function (response) {
                e.success(response.data);
              },
              function () {
                e.error();
              }
            )
          },
          update: function (e) {
            $http.put(url, e.data).then(function (response) {
              e.success(response.data.article);
            })
          },
          destroy: function (e) {
            $http.delete(url + "/" + e.data._id).then(function (response) {
                e.success(response.data);
              },
              function () {
                e.error();
              }
            )}
        },
        schema: models[url]
      });
    }
    function isAdult(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
		  return age >= 18;
	}
  }
})();
