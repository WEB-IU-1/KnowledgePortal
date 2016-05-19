/**
 * Created by ann on 06.05.2016.
 */
(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('SchedulerCourseController', SchedulerCourseController);

  function SchedulerCourseController(DataSource) {
    var vm = this;
    var dataTypes = [
      {text: "Активная", value: true, key: "#aabbcc"},
      {text: "Не активная", value: false, key: "green"}
    ];
    var crudServiceBaseUrl = "//localhost:1337/api/product/";
    var eventTemplate = "<div><img src= #: image #/> #: title #</div>";
    vm.schedulerOptions = {
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
      dataSource: DataSource.getDataSource(crudServiceBaseUrl),
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
