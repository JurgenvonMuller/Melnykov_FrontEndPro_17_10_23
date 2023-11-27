
/*
У вас є
масив із 10 кольорів
const colors = ['color-1', 'color-2', ..., 'color-10'];
масив юзерів (об"єкт із властивостями name та color)
const users = [
	{name: 'Slava', color: 'color-4'},
	{name: 'Lena', color: 'color-7'},
];
Вам треба реалізувати функцію addUser, яка буде приймати ім"я 
як аргумент та записувати нового юзера в масив
Єдина умова - колір кожного юзера має бути вибраним із 
масиву кольорів та має бути унікальним в межах користувачів масиву
Наприклад color-4 та color-7 вже зайняті і новим користувачам 
не можуть бути додані
*/

const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8', 'color-9', 'color-10'];

const users = [
  { name: 'Slava', color: 'color-4' },
  { name: 'Lena', color: 'color-7' },
];

function addUser(name) {
  // Перевіряємо, чи ім'я користувача не порожнє
  if (!name.trim()) {
    console.log('Ім\'я користувача не може бути порожнім.');
    return;
  }

  // Вибираємо доступні кольори (кольори, які не зайняті іншими користувачами)
  const availableColors = colors.filter((color) => !users.some((user) => user.color === color));

  // Перевіряємо, чи є доступні кольори для нового користувача
  if (availableColors.length === 0) {
    console.log('Немає доступних кольорів для нового користувача.');
    return;
  }

  // Вибираємо перший доступний колір для нового користувача
  const selectedColor = availableColors[0];

  // Додаємо нового користувача до масиву users
  users.push({ name, color: selectedColor });

  console.log(`Користувач ${name} успішно доданий з коліром ${selectedColor}.`);
}

// Приклад виклику функції
addUser('John');
console.log(users);

addUser('Mary');
console.log(users);

addUser('Bob');
console.log(users);

addUser('Mike');
console.log(users);

