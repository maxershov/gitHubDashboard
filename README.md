# gitHubDashboard

Тестовое задание в **Avito**

## View online version ## 
https://max-github-dashboard.herokuapp.com/
(Trial тариф Heroku - сайт дольше загружается)

### Commands ###
Выполните ```npm i``` для установки пакетов, ```npm run build``` для создания бандла и ```npm run start``` для запуска сервера на ```localhost:3000```

### Stack ###
```Preact```, ```react-router-dom```, ```express```, ```webpack```, ```babel```, ```eslint```, ```postcss```

### Description ###
Тестировалось на IE11, IOS Safari 13, Chrome 81, Firefox 77

Поиск по репозиториям при вводе проходит автоматически, после того, как пользователь перестает печатать (или при нажатии клавиши ВВОД)
При пустом поле поиска выводится список популярных репозиториев.

Данные поиска и номер страницы из URL парсит кастомный ```React Hook``` для правильного рендера ```Search``` и ```Pagination```.

Для хранения глобального state выбран ```react-router-dom```: 
* Легкая передача по ссылке 
* Отсутствие Redux => меньше кода на проверку

**TODO** убрать из карты репозитория лишний fetch и использовать данные из Main, если они есть.
**TODO** create SVG sprite


<p align="center">
<img src="https://github.com/maxershov/gitHubDashboard/blob/master/screenshot.PNG" width="70%">
</p>
