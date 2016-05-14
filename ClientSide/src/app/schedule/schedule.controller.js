/**
 * Created by ann on 06.05.2016.
 */
(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('ScheduleCourseController', ScheduleCourseController);

  function ScheduleCourseController($scope) {
    var dataTypes = [
      {text: "Активная", value: true, key: "#aabbcc"},
      {text: "Не активная", value: false, key: "green"}
    ];
    var eventTemplate = "<div><img src= #: image #/> #: title #</div>";
    $scope.schedulerOptions = {
      date: new Date(),
      views: [
        {type: "day"},
        {type: "week"},
        {type: "workWeek"},
        {type: "month", selected: true},
        {type: "agenda"},
        {type: "timeline"},
        {type: "timelineWeek"},
        {type: "timelineWorkWeek"},
        {type: "timelineMonth"},
      ],
      dataSource: {
        batch: true,
        transport: {
          read: {
            url: "http://localhost:1337/api/product/",
            dataType: "json"
          },
          update: {
            url: "http://localhost:1337/api/product/",
            dataType: "json"
          },
          create: {
            url: "http://localhost:1337/api/product/",
            dataType: "json"
          },
          destroy: {
            url: "http://localhost:1337/api/product/",
            dataType: "json"
          },
          parameterMap: function (options, operation) {
            if (operation !== "read" && options.models) {
              return {models: kendo.stringify(options.models)};
            }
          }
        },
        schema: {
          model: {
            id: "_id",
            fields: {
              taskId: {from: "_id", type: "String"},
              title: {from: "name", defaultValue: "No title", validation: {required: true}},
              start: {type: "date", from: "start"},
              end: {type: "date", from: "end"},
              startTimezone: {from: "StartTimezone"},
              endTimezone: {from: "EndTimezone"},
              description: {from: "description"},
              recurrenceId: {from: "RecurrenceID"},
              recurrenceRule: {from: "RecurrenceRule"},
              recurrenceException: {from: "RecurrenceException"},
              active: {from: "active", defaultValue: true},
              isAllDay: {type: "boolean", from: "IsAllDay"}
            }
          }
        },
      },
      //eventTemplate: eventTemplate,
      resources: [
        {
          field: "active",
          dataSource: dataTypes
        }
      ]
    };
  }
})();
