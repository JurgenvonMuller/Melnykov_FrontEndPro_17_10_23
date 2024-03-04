/*
У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg 
Вивести зображення з цієї папки, отримане випадковим 
чином (Math.random)
*/

    // Создаем массив с названиями изображений
    let imageNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

    // Получаем ссылку на изображение по его id
    let randomImage = document.getElementById("randomImage");

    // Генерируем случайный индекс для выбора изображения из массива 
    //умножая случайное число на длину массива и округляя его до наименьшего целого
    let randomIndex = Math.floor(Math.random() * imageNames.length);

    // Получаем случайное изображение из массива
    let randomImageName = imageNames[randomIndex];

    // Формируем путь к конкретному изображению:
    let imagePath = "/src/images/" + randomImageName;

    // Устанавливаем путь к случайному изображению в атрибут src тега img
    randomImage.src = imagePath;
