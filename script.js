document.addEventListener('DOMContentLoaded', function() {
  // Пример блоков
  const blocks = ['Block A', 'Block B', 'Block C'];
  
  // Заполняем блоки
  const blockContainer = document.querySelector('.blocks');
  blocks.forEach(block => {
    const blockElement = document.createElement('div');
    blockElement.classList.add('block');
    blockElement.textContent = block;
    blockElement.addEventListener('click', () => {
      loadFloors(block); // Загрузка этажей при клике на блок
    });
    blockContainer.appendChild(blockElement);
  });

  // Функция загрузки этажей
  function loadFloors(block) {
    document.getElementById('floor-selection').style.display = 'block'; // Показать секцию этажей
    const floorContainer = document.querySelector('.floors');
    floorContainer.innerHTML = ''; // Очистить контейнер этажей

    // Пример этажей для выбранного блока
    const floors = ['Floor 1', 'Floor 2', 'Floor 3'];
    floors.forEach(floor => {
      const floorElement = document.createElement('div');
      floorElement.classList.add('floor');
      floorElement.textContent = floor;
      floorElement.addEventListener('click', () => {
        loadApartments(floor); // Загрузка квартир при клике на этаж
      });
      floorContainer.appendChild(floorElement);
    });
  }

  // Функция загрузки квартир
  function loadApartments(floor) {
    document.getElementById('apartment-selection').style.display = 'block'; // Показать секцию квартир
    const apartmentContainer = document.querySelector('.apartments');
    apartmentContainer.innerHTML = ''; // Очистить контейнер квартир

    // Пример квартир для выбранного этажа
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
