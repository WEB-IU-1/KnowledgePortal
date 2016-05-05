![alt tag](http://cs628521.vk.me/v628521723/38e40/GKB5HQtqaSk.jpg)

## KnowledgePortal
Ресурс представляет информацию по мероприятиям, их расписанию, стоимости и местоположению. Система фильтров позволяет быстро и учитывая различные параметры отбирать мероприятия, оплачивать их. Система напоминает о записи, уведомляет пользователей о новых потенциально интересных мероприятиях.

## Installing application:
  1. Download and install last version of node.js from: http://nodejs.org/
  2. Go to the frontend folder and run cmd. Write command: npm install
  3. Write next command to cmd.exe: npm install -g bower . Afterwards, you need to install dependencies (write command to cmd.exe): bower install .
  4. Add to bower.json dependencies: "kendo-ui": "*"
  5. For using grunt you need to install gulp globally. Put this command to cmd.exe: npm install -g gulp
  6 If you have any others questions you can ask me: bloodlanser@gmail.com.


## e2e tests:
  1. Open cmd.exe into frontend folder of application and put next commands: "npm install -g protractor", "webdriver-manager update", "webdriver-manager start".
  2. Open another instance of cmd.exe and put next command: "protractor test/e2e/config.js"
