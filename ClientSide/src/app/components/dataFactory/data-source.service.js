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
      '//localhost:1337/api/other':{
        model: {
          id: "_id",
          fields:{
            _id: {type: "string", nullable: false, editable: false}
          },
          expanded: true
        }
      },
      '//localhost:1337/api/partner/':{
        model: {
          id: "_id",
          fields: {
            _id: {type: "string", nullable: false, editable: false},
            name: { validation: { required: true } },
            full_name: { validation: { required: true, min: 1} },
            logo: {},
            credentials: { validation: { required: true }},
            address: { validation: { required: true }},
            phone: { validation: { required: true }},
            email: { validation: { required: true }},
            contact_people: { },
            categories: { },
            teachers: { },
            offices_addresses: { },
            comment: { }
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
  }
})();
