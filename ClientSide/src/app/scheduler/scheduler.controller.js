/**
 * Created by ann on 06.05.2016.
 */
(function () {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('SchedulerCourseController', SchedulerCourseController);

  function SchedulerCourseController(DataSource) {
    var vm = this;
    var crudServiceBaseUrl = "//localhost:1337/api/product/";

    vm.schedulerOptions = {
      editable: {
        window: {
          title: "Событие"
        },
        template: $("#customEditorTemplate").html(),
      },

      date: new Date(),
      views: [
        {type: "day", title: "День"},
        {type: "week", title: "Неделя"},
        {type: "workWeek", title: "Рабочая неделя"},
        {type: "month", title: "Месяц", selected: true},
        {type: "agenda", title: "Повестка дня"},
        {type: "timeline", title: "График"},
        {type: "timelineWeek", title: "График на неделю"},
        {type: "timelineWorkWeek", title: "График на рабочию неделю"},
        {type: "timelineMonth", title: "График на месяц"},
      ],
      dataSource: DataSource.getDataSource(crudServiceBaseUrl),
      eventTemplate: $("#template").html(),

    };
  }
})();
