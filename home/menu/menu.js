	 // Элементы меню
    const menu = document.getElementById(‘menu');
    
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
