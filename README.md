# gitHubDashboard

Live version https://max-github-dashboard.herokuapp.com/

Выполните ```npm i``` для установки пакетов, ```npm run build``` для создания бандла и ```npm run start``` для запуска сервера на ```localhost:3000```

Тестировалось на IE11, IOS Safari 13, Chrome 81, Firefox 77

Для хранения глобального state выбран ```react-router-dom```: 
* Легкая передача по ссылке 
* Отсутствие Redux => меньше кода на проверку

Данные поиска и номер страницы из URL парсит кастомный ```React Hook``` для правильного рендера ```Search``` и ```Pagination```

**TODO** убрать из карты репозитория лишний fetch и использовать данные из Main, если они есть.
**TODO** create SVG sprite


<p align="center">
<img src="https://github.com/maxershov/gitHubDashboard/blob/master/screenshot.PNG" width="70%">
</p>
