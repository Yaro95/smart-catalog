document.addEventListener('DOMContentLoaded', function() {
  const modeSelector = document.getElementById('mode-selector');
  const buyerSection = document.getElementById('buyer-section');
  const developerSection = document.getElementById('developer-section');

  // Функция для переключения режимов
  modeSelector.addEventListener('change', function() {
    const selectedMode = modeSelector.value;
    
    if (selectedMode === 'developer') {
      developerSection.style.display = 'block'; // Показать панель застройщика
      buyerSection.style.display = 'none'; // Скрыть интерфейс покупателя
    } else {
      developerSection.style.display = 'none'; // Скрыть панель застройщика
      buyerSection.style.display = 'block'; // Показать интерфейс покупателя
    }
  });
});
