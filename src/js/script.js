// Создаем массив с разными смайликами
let emojis = ["😄", "🙂", "😐", "😢"];

// Функция для создания смайликов
function createPollOptions(numOptions) {
    let optionsContainer = document.querySelector('.options');
    let votesContainer = document.querySelector('.votes');

    emojis.slice(0, numOptions).forEach((emoji, index) => {
        let option = document.createElement('div');
        option.classList.add('emoji');
        option.textContent = emoji;
        option.addEventListener('click', () => updateVotes(index));
        optionsContainer.appendChild(option);

        let count = document.createElement('div');
        count.classList.add('count');
        count.textContent = '0';
        votesContainer.appendChild(count);
    });
}

// Счетчик голосов 
function updateVotes(optionIndex) {
  let countElements = document.querySelectorAll('.count');
  let count = parseInt(countElements[optionIndex].textContent);
  count++;
  countElements[optionIndex].textContent = count;
}
// Запускаем программу с 4 вариантами ответов
createPollOptions(4);
