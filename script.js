document.getElementById('fileUpload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const previewImage = document.getElementById('previewImage');
  const previewVideo = document.getElementById('previewVideo');
  
  if (file) {
    const fileType = file.type;
    
    // Проверяем, является ли файл изображением
    if (fileType.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block'; // Показываем изображение
        previewVideo.style.display = 'none';  // Скрываем видео, если было
      };
      reader.readAsDataURL(file);
    }
    // Проверяем, является ли файл видео
    else if (fileType.startsWith('video/')) {
      const videoURL = URL.createObjectURL(file);
      previewVideo.src = videoURL;
      previewVideo.style.display = 'block'; // Показываем видео
      previewImage.style.display = 'none';  // Скрываем изображение, если было
    }
  }
});
