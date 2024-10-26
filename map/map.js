// Элемент для карты
    const map = document.getElementById('map');   
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
