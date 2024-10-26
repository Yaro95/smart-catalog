// Массив с изображениями для слайд-шоу
    const images = ['https://raw.githubusercontent.com/Yaro95/smart-catalog/main/home/slide/1.jpeg', 
                    'https://raw.githubusercontent.com/Yaro95/smart-catalog/main/home/slide/2.jpeg']; 
    let currentIndex = 0; // Текущий индекс слайда
    let slideshowInterval; // Интервал для слайд-шоу
    let mapInitialized = false; // Флаг для проверки инициализации карты
    let startPosX = 0;
    let currentPosX = 0;
    let isDragging = false;

    // Элементы DOM
    // Элементы для слайд-шоу
    const slideshowImage = document.getElementById('slideshowImage');
    const imageContainer = document.getElementById('imageContainer');

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

