// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

// Наприклад:

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, charString) {
  let randomChars = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charString.length);
    randomChars += charString[randomIndex];
  }
  return randomChars;
}
const key = generateKey(16, characters);
console.log(key); 





/* ========================  заметки для себя для памяти ======================
ограничиваем перебор и подбор символов циклом параметром функции

случайные индексы генерируем 
const randomIndex = Math.floor(Math.random() * charString.length);

Math.random() * charString.length)  - 
стандартное выражение которое генерирует случайное число от 0 до 1 
умножая на длину строки - получаем случайный символ 
например в строке 10 символов 0.156 * 10 = 1.56 
Math.floor(Math.random() * charString.length)
полученное значение округляем в меньшую сторону до целого числа 
 1.56  == 1  - будет взят второй символ с индексом 1.

 randomChars += charString[randomIndex]; - стандартная 
 процедура накапливания стрки (суммирования строка + строка)

 функция не ограничивает максимальное число генерируемых символов случайных 
*/