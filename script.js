// Массив с изображениями для слайд-шоу
    const images = ['https://raw.githubusercontent.com/Yaro95/smart-catalog/main/1.jpeg', 'https://raw.githubusercontent.com/Yaro95/smart-catalog/main/2.jpeg']; 
    let currentIndex = 0; // Текущий индекс слайда
    let slideshowInterval; // Интервал для слайд-шоу
    let mapInitialized = false; // Флаг для проверки инициализации карты
    let startPosX = 0;
    let currentPosX = 0;
    let isDragging = false;

    // Элементы DOM
    const slideshowImage = document.getElementById('slideshowImage');
    const imageContainer = document.getElementById('imageContainer');
    const menu = document.getElementById('menu');
    const complexDescription = document.getElementById('complexDescription');
    const map = document.getElementById('map');
    const residentialComplexes = document.getElementById('residentialComplexes');

    // Функция для показа следующего слайда
    function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length; // Увеличиваем индекс
      slideshowImage.src = images[currentIndex]; // Меняем изображение
    }

    // Функция для показа предыдущего слайда
    function showPreviousImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Уменьшаем индекс
      slideshowImage.src = images[currentIndex]; // Меняем изображение
    }

    // Старт перетаскивания
    function startDrag(event) {
      isDragging = true;
      startPosX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }
    
    // Движение во время перетаскивания
    function dragMove(event) {
      if (!isDragging) return;
      currentPosX = getPositionX(event);
      const diff = startPosX - currentPosX;
      slideshowImage.style.transform = `translateX(${-diff}px)`; // Визуальное перемещение изображения
    }
    
    // Завершение перетаскивания
    function endDrag(event) {
      if (!isDragging) return;
      isDragging = false;
      const endPosX = event.type.includes('mouse') ? event.pageX : event.changedTouches[0].clientX;
      const diff = startPosX - endPosX;

      if (diff > 50) {
        showNextImage(); // Переход на следующий слайд
      } else if (diff < -50) {
        showPreviousImage(); // Переход на предыдущий слайд
      }
      slideshowImage.style.transform = 'translateX(0)'; // Возвращаем изображение на место
      slideshowImage.style.transition = 'transform 0.3s ease'; // Возвращаем анимацию
    }

    // Получение позиции по X
    function getPositionX(event) {
      return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    // Добавление событий для мыши
    slideshowImage.addEventListener('mousedown', startDrag);
    slideshowImage.addEventListener('mousemove', dragMove);
    slideshowImage.addEventListener('mouseup', endDrag);
    slideshowImage.addEventListener('mouseleave', endDrag);

    // Добавление событий для сенсорных устройств
    slideshowImage.addEventListener('touchstart', startDrag);
    slideshowImage.addEventListener('touchmove', dragMove);
    slideshowImage.addEventListener('touchend', endDrag);

    // Автоматическое переключение изображений (слайд-шоу)
    function startSlideshow() {
      slideshowInterval = setInterval(showNextImage, 10000); // Интервал в 10 секунд
    }

    // Остановка слайд-шоу
    function stopSlideshow() {
      clearInterval(slideshowInterval); // Останавливаем интервал
    }

    // Старт слайд-шоу при загрузке страницы
    startSlideshow();

    // Обработчики для меню
    document.getElementById('aboutLink').addEventListener('click', function(event) {
      event.preventDefault(); // Предотвращаем стандартное действие ссылки
      complexDescription.style.display = 'block'; // Показываем описание компании
      residentialComplexes.style.display = 'none'; // Скрываем список объектов
      imageContainer.style.display = 'none'; // Скрываем слайд-шоу
      map.style.display = 'none'; // Скрываем карту
    });

    document.getElementById('homeLink').addEventListener('click', function(event) {
      event.preventDefault(); // Предотвращаем стандартное действие ссылки
      complexDescription.style.display = 'none'; // Скрываем описание компании
      residentialComplexes.style.display = 'none'; // Скрываем список объектов
      map.style.display = 'none'; // Скрываем карту
      imageContainer.style.display = 'flex'; // Показываем слайд-шоу
    });

    document.getElementById('locationLink').addEventListener('click', function(event) {
      event.preventDefault(); // Предотвращаем стандартное действие ссылки
      complexDescription.style.display = 'none'; // Скрываем описание компании
      residentialComplexes.style.display = 'none'; // Скрываем список объектов
      imageContainer.style.display = 'none'; // Скрываем слайд-шоу
      map.style.display = 'block'; // Показываем карту
      initMap(); // Инициализируем карту
    });

    document.getElementById('residentialLink').addEventListener('click', function(event) {
      event.preventDefault(); // Предотвращаем стандартное действие ссылки
      complexDescription.style.display = 'none'; // Скрываем описание компании
      map.style.display = 'none'; // Скрываем карту
      imageContainer.style.display = 'none'; // Скрываем слайд-шоу
      residentialComplexes.style.display = 'flex'; // Показываем список объектов
    });
    
    // Элемент кнопки "Назад"
const backButton = document.getElementById('backButton');

// Обработчик для ссылки "Жилые комплексы"
document.getElementById('residentialLink').addEventListener('click', function(event) {
  event.preventDefault(); // Предотвращаем стандартное действие ссылки
  
  // Скрываем меню и слайд-шоу, показываем раздел с объектами и кнопку "Назад"
  menu.style.display = 'none';
  imageContainer.style.display = 'none';
  document.getElementById('residentialComplexes').style.display = 'flex';
  backButton.style.display = 'block';
});

// Обработчик для кнопки "Назад"
backButton.addEventListener('click', function() {
  // Скрываем раздел с объектами и кнопку "Назад", показываем меню и слайд-шоу
  document.getElementById('residentialComplexes').style.display = 'none';
  backButton.style.display = 'none';
  menu.style.display = 'block';
  imageContainer.style.display = 'flex';
});

    // Инициализация Яндекс.Карт
    function initMap() {
      if (!mapInitialized) { // Проверяем, была ли уже инициализирована карта
        const myMap = new ymaps.Map("map", {
          center: [41.467977, 69.570510], // Координаты для Чирчика
          zoom: 16 // Уровень масштабирования карты
        });

        const myPlacemark = new ymaps.Placemark([41.467977, 69.570510], {
          hintContent: 'Местоположение комплекса',
          balloonContent: 'ЖК Рассвет' // Текст в информационном окне метки
        });

        myMap.geoObjects.add(myPlacemark); // Добавляем метку на карту
        mapInitialized = true; // Устанавливаем флаг после инициализации карты
      }
    }
    
    // Элементы DOM
const complexDetailPage = document.getElementById('complexDetailPage');
const backToComplexesButton = document.getElementById('backToComplexesButton');
const complexDetailContent = document.getElementById('complexDetailContent');

// Функция для отображения информации о выбранном комплексе
function showComplexDetail(complexId) {
  // Пример контента для каждого комплекса
  const complexInfo = {
    complex1: {
      title: "Комплекс 1",
      description: "Описание комплекса 1. Это красивый комплекс с уникальными характеристиками."
    },
    complex2: {
      title: "Комплекс 2",
      description: "Описание комплекса 2. Комплекс с замечательными удобствами."
    },
    complex3: {
      title: "Комплекс 3",
      description: "Описание комплекса 3. Комплекс, идеально подходящий для семей."
    }
  };

  // Устанавливаем информацию о выбранном комплексе
  const selectedComplex = complexInfo[complexId];
  complexDetailContent.innerHTML = `
    <h1>${selectedComplex.title}</h1>
    <p>${selectedComplex.description}</p>
  `;

  // Показываем чистый лист и скрываем другие разделы
  complexDetailPage.style.display = 'block';
  residentialComplexes.style.display = 'none';
  backButton.style.display = 'none';
}

// Обработчик для кнопки "Назад" на чистом листе комплекса
backToComplexesButton.addEventListener('click', function() {
  // Скрываем чистый лист и возвращаемся к списку комплексов
  complexDetailPage.style.display = 'none';
  residentialComplexes.style.display = 'flex';
  backButton.style.display = 'block';
});

