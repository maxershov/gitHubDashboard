# gitHubDashboard

Тестовое задание в **Avito**

## Онлайн версия приложения ## 
https://www.maksershov.ru/gh-dash/


### Commands ###
Выполните ```npm i``` для установки пакетов, ```npm run build``` для сборки и ```npm run start``` для запуска сервера на ```localhost:3000```

### Stack ###
```Preact```, ```react-router-dom```, ```express```, ```webpack```, ```babel```, ```eslint```, ```postcss```

### Description ###
Тестировалось на IE11, IOS Safari 13, Chrome 81, Firefox 77

Поиск по репозиториям при вводе выполняется автоматически, через 1 сек. после ввода (или при нажатии ENTER). При пустом поле поиска выводится список популярных репозиториев.

Данные поиска и номер страницы из URL парсит кастомный ```React Hook``` для правильного рендера ```Search``` и ```Pagination```. 

Для хранения глобального state выбран ```react-router-dom```: 
* Легкая передача по URL ссылке 
* Отсутствие Redux => меньше кода на проверку

**TODO** add API with GitHub token in .env => chg limit
**TODO** убрать из карты репозитория лишний fetch и использовать данные из Main, если они есть.

<p align="center">
<img src="https://github.com/maxershov/gitHubDashboard/blob/master/screenshots/screenshot0.PNG" width="70%">
</p>

<p align="center">
<img src="https://github.com/maxershov/gitHubDashboard/blob/master/screenshots/screenshot1.PNG" width="70%">
</p>
