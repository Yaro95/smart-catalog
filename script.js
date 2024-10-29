  // Элементы DOM
    const imageContainer = document.getElementById('imageContainer');//Контейнер для слайд   
    const slideshowImage = document.getElementById('slideshowImage');//сам слайд 
    const menu = document.getElementById('menu');//Меню
    const complexDescription = document.getElementById('complexDescription');//Описания компании 
    const map = document.getElementById('map');//Контейнер для карты
    const residentialComplexes = document.getElementById('residentialComplexes');//Для Обьектов ЖК
const backButton = document.getElementById('backButton');





// Массив с изображениями для слайд-шоу
    const images = ['https://raw.githubusercontent.com/Yaro95/smart-catalog/main/1.jpeg', 'https://raw.githubusercontent.com/Yaro95/smart-catalog/main/2.jpeg']; 
    let currentIndex = 0; // Текущий индекс слайда
    let slideshowInterval; // Интервал для слайд-шоу
    let mapInitialized = false; // Флаг для проверки инициализации карты
    let startPosX = 0;
    let currentPosX = 0;
    let isDragging = false;

  

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
//------------------------------------------------------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------------------------------------------------------ 
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
 //-----------------------------------------------------------------------------------------------------------------------------  
// Данные комплексов
const complexes = [
  {
    id: "complex1",
    name: "Комплекс 1",
    imageUrl: "https://raw.githubusercontent.com/Yaro95/smart-catalog/main/1.jpeg",
    labels: ["Срок сдачи", "Рассрочка", "Скидка 5%"]
  },
  {
    id: "complex2",
    name: "Комплекс 2",
    imageUrl: "https://raw.githubusercontent.com/Yaro95/smart-catalog/main/2.jpeg",
    labels: ["Срок сдачи", "Рассрочка"]
  },
  {
    id: "complex3",
    name: "Комплекс 3",
    imageUrl: "https://raw.githubusercontent.com/Yaro95/smart-catalog/main/1.jpeg",
    labels: ["Скидка 10%", "Рассрочка"]
  }
];



// Функция создания HTML комплекса
function createComplexHtml(complex) {
  const complexDiv = document.createElement("div");
  complexDiv.classList.add("complex");

  const anchor = document.createElement("a");
  anchor.href = "#";
  anchor.onclick = () => showComplexDetail(complex.id);

  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");

  const img = document.createElement("img");
  img.src = complex.imageUrl;
  img.alt = complex.name;

  const labelsDiv = document.createElement("div");
  labelsDiv.classList.add("labels");

  complex.labels && complex.labels.forEach(labelText =>  {
  const label = document.createElement("span");

  // Применяем класс на основе текста метки
  if (labelText.includes("Срок сдачи")) {
    console.log("Label text:", labelText); // Показывает, какой текст обрабатывается
    console.log("Найдена Срок сдачи:", labelText);
    label.classList.add("label-srok-sdachi");
  } else if (labelText.includes("Рассрочка")) {
    console.log("Найдена Рассрочка:", labelText);
    label.classList.add("label-rassrochka");
  } else if (labelText.includes("Скидка")) {
    console.log("Найдена Скидка:", labelText);
    label.classList.add("label-skidka");
  }

  label.textContent = labelText;
  labelsDiv.appendChild(label);
});
  
  cardImage.appendChild(img);
  cardImage.appendChild(labelsDiv);
  anchor.appendChild(cardImage);

  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = complex.name;
  anchor.appendChild(nameParagraph);

  complexDiv.appendChild(anchor);

  return complexDiv;
}

// Заполняем контейнер
complexes.forEach(complex => {
  residentialComplexes.appendChild(createComplexHtml(complex));
});

// Обработчик для ссылки "Жилые комплексы"
document.getElementById('residentialLink').addEventListener('click', function(event) {
  event.preventDefault(); // Предотвращаем стандартное действие ссылки
  
  // Скрываем меню и слайд-шоу, показываем раздел с объектами и кнопку "Назад"
  menu.style.display = 'none';
  imageContainer.style.display = 'none';
  residentialComplexes.style.display = 'flex';
  backButton.style.display = 'block';
});

// Обработчик для кнопки "Назад"
backButton.addEventListener('click', function() {
  // Скрываем раздел с объектами и кнопку "Назад", показываем меню и слайд-шоу
  residentialComplexes.style.display = 'none';
  backButton.style.display = 'none';
  menu.style.display = 'block';
  imageContainer.style.display = 'flex';
});
//------------------------------------------------------------------------------------------------------------------------------  
// Элементы DOM
const complexDetailPage = document.getElementById('complexDetailPage');//чистый лист
const backToComplexesButton = document.getElementById('backToComplexesButton');//кнопка назад
const complexDetailContent = document.getElementById('complexDetailContent');//контент img 
const complexImage = document.getElementById('complexImage');

// Проверка, что все элементы DOM определены
console.log("complexDetailPage:", complexDetailPage);
console.log("backToComplexesButton:", backToComplexesButton);
console.log("complexDetailContent:", complexDetailContent);
console.log("complexImage:", complexImage);
console.log("residentialComplexes:", residentialComplexes);
console.log("backButton:", backButton);



// Функция для отображения информации о выбранном комплексе
function showComplexDetail(complexId) {
  console.log("showComplexDetail вызван с ID:", complexId);
  // Пример контента для каждого комплекса
  const complexInfo = {
    complex1: {
      title: "Комплекс 1",
      description: "Описание комплекса 1. Это красивый комплекс с уникальными характеристиками.",
      imageUrl: "https://raw.githubusercontent.com/Yaro95/smart-catalog/main/1.jpeg"
    },
    complex2: {
      title: "Комплекс 2",
      description: "Описание комплекса 2. Комплекс с замечательными удобствами.",
      imageUrl: "https://raw.githubusercontent.com/Yaro95/smart-catalog/main/2.jpeg"
    },
    complex3: {
      title: "Комплекс 3",
      description: "Описание комплекса 3. Комплекс, идеально подходящий для семей.",
      imageUrl: "https://raw.githubusercontent.com/Yaro95/smart-catalog/main/1.jpeg"
    }
  };

  // Проверка выбранного комплекса
  const selectedComplex = complexInfo[complexId];
  if (!selectedComplex) {
    console.error("Complex not found:", complexId);
    return;
  }

  console.log("Complex info:", selectedComplex);

  // Устанавливаем информацию о выбранном комплексе
  complexDetailContent.innerHTML = `
    <h1>${selectedComplex.title}</h1>
    <p>${selectedComplex.description}</p>
  `;

 // Проверка, что элемент complexImage существует
console.log("complexImage элемент:", complexImage);

// Устанавливаем изображение комплекса
complexImage.src = selectedComplex.imageUrl;
console.log("complexImage.src установлен в:", complexImage.src);

  // Показываем чистый лист и скрываем другие разделы
  complexDetailPage.style.display = 'block';
  residentialComplexes.style.display = 'none';
  backButton.style.display = 'none';
}
console.log("complexDetailPage display set to block");

// Обработчик для кнопки "Назад" на чистом листе комплекса
backToComplexesButton.addEventListener('click', function() {
  // Скрываем чистый лист и возвращаемся к списку комплексов
  complexDetailPage.style.display = 'none';
  residentialComplexes.style.display = 'flex';
  backButton.style.display = 'block';
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
});
