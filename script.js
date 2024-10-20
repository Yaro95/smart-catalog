document.addEventListener('DOMContentLoaded', function() {
  const modeToggle = document.getElementById('mode-toggle');
  const buyerSection = document.getElementById('buyer-section');
  const developerSection = document.getElementById('developer-section');
  const uploadBlocks = document.getElementById('upload-blocks');
  const blocksContainer = document.querySelector('.blocks');
  
  // Смена режима (покупатель/застройщик)
  modeToggle.addEventListener('change', function() {
    if (modeToggle.checked) {
      // Показываем панель застройщика
      buyerSection.style.display = 'none';
      developerSection.style.display = 'block';
    } else {
      // Показываем каталог для покупателя
      buyerSection.style.display = 'block';
      developerSection.style.display = 'none';
    }
  });

  // Обработка загрузки блоков
  uploadBlocks.addEventListener('change', function(event) {
    const files = event.target.files; // Получаем загруженные файлы
    blocksContainer.innerHTML = ''; // Очищаем контейнер блоков

    // Проходим по загруженным файлам и отображаем их
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = function(e) {
        const blockElement = document.createElement('div');
        blockElement.classList.add('block');
        blockElement.innerHTML = `<img src="${e.target.result}" alt="${file.name}" width="100">`;
        blocksContainer.appendChild(blockElement); // Добавляем блок на страницу
      };
      reader.readAsDataURL(file); // Читаем файл как URL
    });
  });
  
  // Заполнение блоков для покупателя
  const blocks = ['Block A', 'Block B', 'Block C'];
  blocks.forEach(block => {
    const blockElement = document.createElement('div');
    blockElement.classList.add('block');
    blockElement.textContent = block;
    blockElement.addEventListener('click', () => loadFloors(block)); // Загружаем этажи при клике на блок
    blocksContainer.appendChild(blockElement);
  });

  // Функция загрузки этажей
  function loadFloors(block) {
    document.getElementById('floor-selection').style.display = 'block'; // Показать секцию этажей
    const floorContainer = document.querySelector('.floors');
    floorContainer.innerHTML = ''; // Очистить контейнер этажей

    const floors = ['Floor 1', 'Floor 2', 'Floor 3'];
    floors.forEach(floor => {
      const floorElement = document.createElement('div');
      floorElement.classList.add('floor');
      floorElement.textContent = floor;
      floorElement.addEventListener('click', () => loadApartments(floor)); // Загружаем квартиры при клике на этаж
      floorContainer.appendChild(floorElement);
    });
  }

  // Функция загрузки квартир
  function loadApartments(floor) {
    document.getElementById('apartment-selection').style.display = 'block'; // Показать секцию квартир
    const apartmentContainer = document.querySelector('.apartments');
    apartmentContainer.innerHTML = ''; // Очистить контейнер квартир

    const apartments = ['Apartment 1', 'Apartment 2', 'Apartment 3'];
    apartments.forEach(apartment => {
      const apartmentElement = document.createElement('div');
      apartmentElement.classList.add('apartment');
      apartmentElement.textContent = apartment;
      apartmentElement.addEventListener('click', () => {
        alert(`Вы выбрали ${apartment} на ${floor}`);
      });
      apartmentContainer.appendChild(apartmentElement);
    });
  }
});
