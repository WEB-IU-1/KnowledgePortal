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
      '//localhost:1337/api/product/':{
        model: {
          id: "taskId",
          location:"location",
          fields: {
            taskId: {from: "_id", type: "string"},
            title: {from: "name", defaultValue: "No title", validation: {required: true}},
            start: {type: "date", from: "start"},
            end: {type: "date", from: "end"},
            isAllDay: {type: "boolean", from: "isAllDay"},
            recurrenceId: { from: "recurrenceId" },
            recurrenceRule: { from: "recurrenceRule" },
            recurrenceException: { from: "recurrenceException" },
            active: {from: "active", defaultValue: true},
            type: {from: "type", defaultValue: 1},
            teacher: {from: "teacher",type: "string", defaultValue: ""},
            location: {from: "location", type:"string"},
            seats_count: {from: "seats_count", type:"number",defaultValue: 10},
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
      return {
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
      };
    }
  }
})();
