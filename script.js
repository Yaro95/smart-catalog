// Загрузка меню
fetch('menu/menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu-container').innerHTML = data;
  })
  .catch(error => console.error('Ошибка загрузки меню:', error));

// Загрузка лого
fetch('logo/logo.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('logo-container').innerHTML = data;
  })
  .catch(error => console.error('Ошибка загрузки меню:', error));

// Загрузка слайда
fetch('slide/slide.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('slide-container').innerHTML = data;
  })
  .catch(error => console.error('Ошибка загрузки меню:', error));

// Загрузка страницы "О компании"
fetch('about/about.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('content-container').innerHTML = data;
  })
  .catch(error => console.error('Ошибка загрузки о компании:', error));

// Загрузка карты
fetch('map/map.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('map-container').innerHTML = data;
  })
  .catch(error => console.error('Ошибка загрузки карты:', error))

// Загрузка жилых комплексов
fetch('Residentialcomplexes/Residentialcomplexes.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('complex-container').innerHTML = data;
  })
  .catch(error => console.error('Ошибка загрузки жилых комплексов:', error));
