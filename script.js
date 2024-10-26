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

// Загрузка стилей для различных компонентов
document.getElementById('styleLink')?.addEventListener('click', function() {
    loadCSS('css/style.css');
});
document.getElementById('logoLink')?.addEventListener('click', function() {
    loadCSS('css/logo.css');
});
document.getElementById('menuLink')?.addEventListener('click', function() {
    loadCSS('css/menu.css');
});
document.getElementById('slideLink')?.addEventListener('click', function() {
    loadCSS('css/slide.css');
});
document.getElementById('aboutLink')?.addEventListener('click', function() {
    loadCSS('css/about.css');
});
document.getElementById('mapLink')?.addEventListener('click', function() {
    loadCSS('css/map.css');
});
document.getElementById('ResidentialcomplexesLink')?.addEventListener('click', function() {
    loadCSS('css/Residentialcomplexes.css');
});

// Загрузка скриптов для различных компонентов
document.getElementById('logoLink')?.addEventListener('click', function() {
    loadScript('js/logo.js');
});
document.getElementById('menuLink')?.addEventListener('click', function() {
    loadScript('js/menu.js');
});
document.getElementById('slideLink')?.addEventListener('click', function() {
    loadScript('js/slide.js');
});
document.getElementById('aboutLink')?.addEventListener('click', function() {
    loadScript('js/about.js');
});
document.getElementById('mapLink')?.addEventListener('click', function() {
    loadScript('js/map.js');
});
document.getElementById('ResidentialcomplexesLink')?.addEventListener('click', function() {
    loadScript('js/Residentialcomplexes.js');
});


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
