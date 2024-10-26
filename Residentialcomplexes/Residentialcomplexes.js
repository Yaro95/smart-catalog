// Элементы для жилых комплексов
    const complexDescription = document.getElementById('complexDescription');
    const residentialComplexes = document.getElementById(‘residentialComplexes');

// ==== Обработчик кнопки "Назад" (раздел: жилые комплексы) ====
// Этот блок управляет видимостью раздела "Жилые комплексы" и кнопки "Назад" при переходе из 
// "Жилые комплексы" обратно в меню или другой раздел.
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

