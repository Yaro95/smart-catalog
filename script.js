document.addEventListener('DOMContentLoaded', function() {
  const modeToggle = document.getElementById('mode-toggle');
  const buyerSection = document.getElementById('buyer-section');
  const developerSection = document.getElementById('developer-section');
  
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

  // Пример динамической загрузки блоков для покупателя
  const blocksContainer = document.querySelector('.blocks');
  const blocks = ['Block A', 'Block B', 'Block C'];
  blocks.forEach(block => {
    const blockElement = document.createElement('div');
    blockElement.classList.add('block');
    blockElement.textContent = block;
    blocksContainer.appendChild(blockElement);
  });
});
