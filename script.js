document.getElementById('fileUpload').addEventListener('change', function (event) {
  const file = event.target.files[0]; // Получаем загруженный файл


  if (file) {
    const fileType = file.type; // Определяем тип файла
    const reader = new FileReader();

    reader.onload = function (e) {
      if (fileType.startsWith('image/')) {
        // Если файл - изображение
        const previewImage = document.getElementById('previewImage');
        const previewVideo = document.getElementById('previewVideo');
        
        previewImage.src = e.target.result;
        previewImage.style.display = 'block'; // Показать изображение
        previewVideo.style.display = 'none';  // Скрыть видео
      } else if (fileType.startsWith('video/')) {
        // Если файл - видео
        const previewVideo = document.getElementById('previewVideo');
        const previewImage = document.getElementById('previewImage');
        
        previewVideo.src = e.target.result;
        previewVideo.style.display = 'block'; // Показать видео
        previewImage.style.display = 'none';  // Скрыть изображение
      }
    };

    reader.readAsDataURL(file); // Читаем содержимое файла как URL
  }
});
