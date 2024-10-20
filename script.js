function showMessage() {
    alert('Приветики, this is a message from script.js!');
}
document.addEventListener("DOMContentLoaded", function () {
  const blocks = ['А', 'Б', 'В', 'Г', 'Д'];
  const floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
  const blockSection = document.querySelector("#block-selection .blocks");
  const floorSection = document.querySelector("#floor-selection .floors");
  const apartmentSection = document.querySelector("#apartment-selection .apartments");
  
  // Отображение блоков
  blocks.forEach(block => {
    const blockElement = document.createElement('div');
    blockElement.classList.add('block');
    blockElement.textContent = `Блок ${block}`;
    blockElement.addEventListener('click', () => selectBlock(block));
    blockSection.appendChild(blockElement);
  });

  // Функция выбора блока
  function selectBlock(block) {
    document.querySelector("#floor-selection").style.display = 'block';
    document.querySelector("#floor-selection h2").textContent = `Выберите этаж для Блока ${block}`;
    floorSection.innerHTML = ''; // Очистить предыдущие этажи

    // Отображаем этажи для выбранного блока
    floors.forEach(floor => {
      const floorElement = document.createElement('div');
      floorElement.classList.add('floor');
      floorElement.textContent = `Этаж ${floor}`;
      floorElement.addEventListener('click', () => selectFloor(block, floor));
      floorSection.appendChild(floorElement);
    });
  }

  // Функция выбора этажа
  function selectFloor(block, floor) {
    document.querySelector("#apartment-selection").style.display = 'block';
    document.querySelector("#apartment-selection h2").textContent = `Квартиры на Этаж ${floor} в Блоке ${block}`;
    apartmentSection.innerHTML = ''; // Очистить предыдущие квартиры

    // Пример: Добавляем 5 квартир на выбранном этаже (их можно загрузить из JSON)
    for (let i = 1; i <= 5; i++) {
      const apartmentElement = document.createElement('div');
      apartmentElement.classList.add('apartment');
      apartmentElement.textContent = `Квартира ${i}`;
      apartmentElement.addEventListener('click', () => showApartmentDetails(block, floor, i));
      apartmentSection.appendChild(apartmentElement);
    }
  }

  // Функция для отображения деталей квартиры
  function showApartmentDetails(block, floor, apartment) {
    alert(`Блок ${block}, Этаж ${floor}, Квартира ${apartment}`);
  }
});
