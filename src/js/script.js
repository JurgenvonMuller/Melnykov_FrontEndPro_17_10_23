// Получаем ссылки на DOM-элементы
const slider = document.querySelector('.slider');
const imagesWrapper = slider.querySelector('.slider__images-wrapper');
const images = imagesWrapper.querySelectorAll('.slider__image');
const prevButton = slider.querySelector('.slider__arrow_prev'); 
const nextButton = slider.querySelector('.slider__arrow_next'); 

// Текущий индекс изображения
let currentImageIndex = 0;

// Количество изображений
const imagesCount = images.length;

// Функция для отображения указанного изображения
function showImage(index) {
  // Если индекс выходит за пределы количества изображений, возвращаем false
  if (index < 0 || index >= imagesCount) return false;

  // Скрываем все изображения
  images.forEach((image) => {
    image.style.display = 'none';
  });

  // Отображаем указанное изображение
  images[index].style.display = 'block';

  // Обновляем индекс текущего изображения
  currentImageIndex = index;

  // Возвращаем true
  return true;
}

// Отображаем первое изображение
showImage(currentImageIndex);

// Функция для перелистывания на следующее изображение
function nextImage() {
  // Перелистываем на следующее изображение
  showImage(currentImageIndex + 1);
}

// Функция для перелистывания на предыдущее изображение
function prevImage() {
  // Перелистываем на предыдущее изображение
  showImage(currentImageIndex - 1);
}
// Добавляем обработчики событий click на кнопки Next и Prev
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);