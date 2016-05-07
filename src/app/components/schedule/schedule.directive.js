(function() {
  'use strict';

  angular
    .module('KnowledgePortal')
    .directive('schedule', schedule);

  /** @ngInject */
  function schedule() {
    return {
      restrict: 'E',
      replace: true,
      controller: function ($scope) {
        var dataEvents = [
          { id:1,image:"http://wallsfactory.com/mini/201509/53287.jpg",
            title:"Мероприятие 1", start: new Date(), end: new Date() },
          { id:2,image:"http://differentphoto.ru/uploads/11_05_2013/thrumb/201209/oboik.ru_27570.jpg",
            title:"Мероприятие 2", start: new Date(), end: new Date() }
        ];
        var dataTypes=[
          { text: "Course", value: 1, key: "#aabbcc" },
          { text: "Master-class", value: 2, key: "green" }
        ];
        var eventTemplate="<div><img src= #: image #/> #: title #</div>";
        $scope.schedulerOptions = {
          date: new Date(),
          views: [
            { type: "day" },
            {type:"week"},
            {type:"workWeek"},
            { type: "month", selected:true },
            {type:"agenda"},
            {type:"timeline"},
            {type:"timelineWeek"},
            {type:"timelineWorkWeek"},
            {type:"timelineMonth"},
          ],
          dataSource: dataEvents,
          eventTemplate:eventTemplate,
          editable:{
            template:''
          },
          resources: [
            {
              field: "type",
              dataSource: dataTypes
            }
          ]
        };
      },
      template: '<div kendo-scheduler k-options="schedulerOptions"></div>'
    }
  }
})();
