/*
У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg Вивести зображення з цієї папки, отримане випадковим 
чином (Math.random)
*/




    // Создаем массив с названиями изображений
    var imageNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

    // Получаем ссылку на изображение по его id
    var randomImage = document.getElementById("randomImage");

    // Генерируем случайный индекс для выбора изображения из массива
    var randomIndex = Math.floor(Math.random() * imageNames.length);

    // Получаем случайное изображение из массива
    var randomImageName = imageNames[randomIndex];

    // Формируем путь к изображению
    var imagePath = "images/" + randomImageName;

    // Устанавливаем путь к случайному изображению в атрибут src тега img
    randomImage.src = imagePath;
