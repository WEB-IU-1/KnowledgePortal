/**
 * Created by ann on 06.05.2016.
 */
(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('ScheduleCourseController', ScheduleCourseController);

  function ScheduleCourseController() {
    var vsc=this;
    vsc.schedulerOptions = {
      date: new Date("2014/09/08"),
      views: [
        "day",
        "workWeek",
        "week",
        { type: "month", selected: true }
      ],
      timezone: "Etc/UTC",
      eventTemplate: "<span class='custom-event'> -- </span>",

      allDayEventTemplate: "<div class='custom-all-day-event'> *</div>",
      dataSource: {
        batch: true,
        transport: {
          read: {
            url: "//demos.telerik.com/kendo-ui/service/tasks",
            dataType: "jsonp"
          },
          update: {
            url: "//demos.telerik.com/kendo-ui/service/tasks/update",
            dataType: "jsonp"
          },
          create: {
            url: "//demos.telerik.com/kendo-ui/service/tasks/create",
            dataType: "jsonp"
          },
          destroy: {
            url: "//demos.telerik.com/kendo-ui/service/tasks/destroy",
            dataType: "jsonp"
          },
          parameterMap: function(options, operation) {
            if (operation !== "read" && options.models) {
              return {models: kendo.stringify(options.models)};
            }
          }
        },
        schema: {
          model: {
            id: "taskId",
            fields: {
              taskId: { from: "TaskID", type: "number" },
              title: { from: "Title", defaultValue: "No title", validation: { required: true } },
              start: { type: "date", from: "Start" },
              end: { type: "date", from: "End" },
              startTimezone: { from: "StartTimezone" },
              endTimezone: { from: "EndTimezone" },
              description: { from: "Description" },
              recurrenceId: { from: "RecurrenceID" },
              recurrenceRule: { from: "RecurrenceRule" },
              recurrenceException: { from: "RecurrenceException" },
              ownerId: { from: "OwnerID", defaultValue: 1 },
              isAllDay: { type: "boolean", from: "IsAllDay" }
            }
          }
        },
        filter: {
          logic: "or",
          filters: [
            { field: "ownerId", operator: "eq", value: 1 },
            { field: "ownerId", operator: "eq", value: 2 }
          ]
        }
      },
      resources: [
        {
          field: "ownerId",
          title: "Owner",
          dataSource: [
            { text: "Alex", value: 1, color: "#f8a398" },
            { text: "Bob", value: 2, color: "#51a0ed" },
            { text: "Charlie", value: 3, color: "#56ca85" }
          ]
        }
      ]
    };

  }
})();
