document.getElementById('fileUpload').addEventListener('change', function (event) {
  const file = event.target.files[0]; // Получаем загруженный файл
  if (file) {
    const reader = new FileReader(); // Создаем объект для чтения файла

    reader.onload = function (e) {
      // Получаем URL изображения и вставляем его в <img>
      const preview = document.getElementById('preview');
      preview.src = e.target.result;
      preview.style.display = 'block'; // Делаем картинку видимой
    };

    reader.readAsDataURL(file); // Читаем содержимое файла как URL
  }
});
