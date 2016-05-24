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
    var dataActive = [
      {text: "Активная", value: true, key: "#aabbcc"},
      {text: "Не активная", value: false, key: "green"}
    ];

    var dataTypes = [
      {text: "Курс", value: 1, key: "#aabbcc"},
      {text: "Лекция", value: 2, key: "green"}
    ];
    var dataTeacher = [
      {text: "Иванов Иван Иванович", value: 1},
      {text: "Петров Пётр Петрович", value: 2}
    ];
    var crudServiceBaseUrl = "//localhost:1337/api/product/";
    var eventTemplate = "<div><img src= #: image #/> #: title #</div>";

    vm.schedulerOptions = {
      messages:{
        editor:{
          title:"Название",
          start:"Начало",
          end:"Конец",
          allDayEvent:"Весь день",
          repeat:"Повтор",
          description:"Описание"
        },
        recurrenceEditor: {
          daily: {
            repeatEvery: "Повторить через: ",
            interval: " день(-ей)"
          },
          end: {
            after: " После ",
            occurrence: " раз(-а) повторения(-й).",
            label:"Закончить цикл повторения",
            never: " Никогда",
            mobileLabel: " Конец: ",
            on: " в "
          },
          frequencies: {
            daily: "Ежедневно",
            monthly: "Ежемесячно",
            never: "Не повторять",
            weekly: "Еженедельно",
            yearly: "Ежегодно"
          },
          monthly: {
            day: "день ",
            interval: " месяца(-ев).",
            repeatEvery: "Повторить через: ",
            repeatOn: "Повторить каждый(е): "
          },
          offsetPositions: {
            first: "первый",
            second: "второй",
            third: "третий",
            fourth: "четвёртый",
            last: "последний"
          },
          weekly: {
            interval: " неделю(-и).",
            repeatEvery: "Повторить через: ",
            repeatOn: "Повторить каждый(е): "
          },
          weekdays: {
            day: "День",
            weekday: "Будний день",
            weekend: "Выходной день"
          },
          yearly: {
            of: " в ",
            repeatEvery: "Повторить через: ",
            repeatOn: "Повторить каждый(е): ",
            interval: " год(ы)."
          },
          recurrenceMessages: {
            deleteRecurring: "Удалить только это вхождение события или целую серию ?",
            deleteWindowOccurrence: "Удалить текущее событие",
            deleteWindowSeries: "Удалить все вхождения",
            deleteWindowTitle: "Удалить повторяющееся событие",
            editRecurring: "Вы хотите , чтобы изменить только это событие или всю серию ?",
            editWindowOccurrence: "Редактировать текущее событие",
            editWindowSeries: "Изменить все вхождения",
            editWindowTitle: "Редактирование Повторяющееся событие"
          },
          views: {
            day: "Сегодня",
            week: "Еженедельно",
            month: "Ежемесячно",
            agenda: "Список событий"
          }
        }
      },
      date: new Date(),
      views: [
        {type: "day",title:"День"},
        {type: "week", title:"Неделя"},
        {type: "workWeek", title:"Рабочая неделя"},
        {type: "month", title:"Месяц", selected: true},
        {type: "agenda", title:"Повестка дня"},
        {type: "timeline", title:"График"},
        {type: "timelineWeek", title:"График на неделю"},
        {type: "timelineWorkWeek", title:"График на рабочию неделю"},
        {type: "timelineMonth", title:"График на месяц"},
      ],
      dataSource: DataSource.getDataSource(crudServiceBaseUrl),
      //eventTemplate: eventTemplate,
      resources: [
        {
          field: "active",
          title:"Статус активности",
          dataSource: dataActive
        },
        {
          field: "type",
          title:"Тип",
          dataSource: dataTypes
        },
        {
          field: "teacher",
          title:"Преподаватель",
          dataSource: dataTeacher
        }
      ]
    };
  }
})();
