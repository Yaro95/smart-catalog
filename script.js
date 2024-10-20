document.addEventListener('DOMContentLoaded', function() {
  const modeSwitch = document.getElementById('mode-switch');
  const buyerSection = document.getElementById('buyer-section');
  const developerSection = document.getElementById('developer-section');

  // Переключение между покупателем и застройщиком
  modeSwitch.addEventListener('change', function() {
    if (modeSwitch.checked) {
      buyerSection.style.display = 'none';        // Скрыть интерфейс покупателя
      developerSection.style.display = 'block';   // Показать панель застройщика
    } else {
      developerSection.style.display = 'none';    // Скрыть панель застройщика
      buyerSection.style.display = 'block';       // Показать интерфейс покупателя
    }
  });
});
