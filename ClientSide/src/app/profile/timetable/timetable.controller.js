/**
 * Created by ann on 14.06.2016.
 */
(function () {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('TimeTableController', TimeTableController);

  function TimeTableController(DataSource) {
    var tt = this;
    var crudServiceBaseUrl = "//localhost:1337/api/product/";

    tt.schedulerOptions = {
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
        {type: "timelineMonth", title: "График на месяц"}
      ],
      dataSource: DataSource.getDataSource(crudServiceBaseUrl),
      eventTemplate: $("#template").html(),
      resources: [
        {
          field: "active",
          dataSource: [
            { text: "Активный", value: true, color: "#51a0ed" },
            { text: "Неактивный", value: false, color: "#afafaf" }
          ]
        },
        {
          field: "assigned_user_id",
          dataSource: [
            { text: "Иванов Иван Иванович", value: "asd" },
            { text: "Сергей Сергей Сергеевич", value: "asаd" }
          ]
        },
        {
          field: "professional_level",
          dataSource: [
            { text: "Начальный", value: 1 },
            { text: "Средний", value: 2 },
            { text: "Професиональный", value: 3 }
          ]
        }
      ],

      messages: {
        cancel: "Отмена",
        save: "Сохранить",
        destroy: "Удалить",
        recurrenceEditor: {
          daily: {
            interval: " дней"
          }
        }
      },
      editable: false
    };

  }
})();
