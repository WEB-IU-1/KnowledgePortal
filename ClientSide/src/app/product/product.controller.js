/**
 * Created by ann on 14.06.2016.
 */
(function () {
  'use strict';

  angular
    .module('KnowledgePortal')
    .controller('ProductController', ProductController);

  function ProductController($stateParams,$http,productRes) {
    var vm=this;

    vm.resolveResult=productRes.data.article;

    vm.duration = function() {
    var result=new Date(new Date(vm.resolveResult.end) - new Date(vm.resolveResult.start));
     return (((result.getFullYear().valueOf()-	1970)!=0) ? (result.getFullYear().valueOf()-	1970) +" года(лет) ":"")+""+
     (((result.getMonth().valueOf())!=0) ? result.getMonth().valueOf()+" месяца(-ев) " :"")+""+
       (((result.getDay().valueOf()-4)!=0) ? (result.getDay().valueOf()-4)+" дня(-ей) " :"")+""+
       (result.getHours()-3)+" часа(-ов) "+result.getMinutes()+" минут(-ы)";
    };
    vm.repeatTransfer= {
      "DAILY": "Ежедневно",
      "MONTHLY":"Ежемесячно",
      "NEVER":"Никогда",
      "WEEKLY":"Еженедельно",
      "YEARLY":"Ежегодно",
  };
    vm.dayOfWeekTransfer={
      "SU":"Вс",
      "MO":"Пн",
      "TU":"Вт",
      "WE":"Ср",
      "TH":"Чт",
      "FR":"Пт",
      "SA":"Сб",
      "1FR":"Первый в месяце",
      "2FR":"Второй в месяце",
      "3FR":"Третий в месяце",
      "4FR":"Четвёртый в месяце",
      "-1FR":"Последний в месяце",
      " ":""
    }
    vm.freq=function(){
       return vm.repeatTransfer[vm.parseTextRecurrence(vm.resolveResult.recurrenceRule,'FREQ')];
    };
    vm.count=function(){
      return vm.parseTextRecurrence(vm.resolveResult.recurrenceRule,'COUNT');
    };
    vm.interval=function(){
      return vm.parseTextRecurrence(vm.resolveResult.recurrenceRule,'INTERVAL');
    };
    vm.byday=function(){
      if(!vm.parseTextRecurrence(vm.resolveResult.recurrenceRule,'BYMONTHDAY')) {
        var result = vm.parseTextRecurrence(vm.resolveResult.recurrenceRule, 'BYDAY');
        if(result) {
          result=result.split(',');
          result.forEach(function (item, i, result) {
            result[i] = ' ' + vm.dayOfWeekTransfer[item];
          });
          return result.toString();
        }
      }
      return "";
    };
    vm.until=function(){
      return vm.parseTextRecurrence(vm.resolveResult.recurrenceRule,'UNTIL');
    };
    vm.weekStart=function(){
      return vm.parseTextRecurrence(vm.resolveResult.recurrenceRule,'WKST')?
      " (начало недели "+ vm.dayOfWeekTransfer[vm.parseTextRecurrence(vm.resolveResult.recurrenceRule,'WKST')]+")":"";
    };
    vm.bymonthday=function(){
      if(!vm.parseTextRecurrence(vm.resolveResult.recurrenceRule,'BYMONTH')) {
        return vm.parseTextRecurrence(vm.resolveResult.recurrenceRule, 'BYMONTHDAY');
      }else return null;
    };
    vm.bymonth=function(){
      return vm.parseTextRecurrence(vm.resolveResult.recurrenceRule,'BYMONTH');
    };
    vm.parseTextRecurrence=function(text1,text2){
      var resultSplit=text1.toString().split(';');
      var resultFind =-1;
      resultSplit.forEach(function(item,i){
        if(item.search(text2)!=-1){
          resultFind=i;
        }
      });
      if(resultFind!=-1){
        return resultSplit[resultFind].toString().split('=')[1];
      }
      return "";
    }
  }
})();
