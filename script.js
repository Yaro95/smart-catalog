// Функция для динамической загрузки CSS
function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}

// Функция для динамической загрузки скриптов
function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
}


// Автоматическая загрузка скриптов для различных компонентов
loadScript('home/logo/logo.js');
loadScript('home/menu/menu.js');
loadScript('home/slide/slide.js');
loadScript('about/about.js');
loadScript('map/map.js');
loadScript('Residentialcomplexes/Residentialcomplexes.js');


// Загрузка меню
fetch('home/menu/menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu-container').innerHTML = data;
  })
  .catch(error => console.error('Ошибка загрузки меню:', error));

// Загрузка лого
fetch('home/logo/logo.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('logo-container').innerHTML = data;
  })
  .catch(error => console.error('Ошибка загрузки меню:', error));

// Загрузка слайда
fetch('home/slide/slide.html')
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
