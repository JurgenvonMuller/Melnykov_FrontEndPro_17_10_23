/*Вивести таблицю 10 × 10, заповнену числами від 1 до 100 
(таблиця створюється динамічно)
*/

// Получаем ссылку на контейнер, в котором будет наша таблица
let tableContainer = document.getElementById("table-container");

// Создаем элемент таблицы и заполняем ее
let tableHTML = "<table>";
for (let i = 1; i <= 10; i++) {
  tableHTML += "<tr>";
  for (let j = 1; j <= 10; j++) {
    let cellValue = (i - 1) * 10 + j;
    tableHTML += "<td>" + cellValue + "</td>";
  }
  tableHTML += "</tr>";
}
tableHTML += "</table>";

tableContainer.innerHTML = tableHTML;

// // Получаем ссылку на контейнер, в котором будет наша таблица
// let tableContainer = document.getElementById("table-container");

// // Создаем элемент таблицы
// let table = document.createElement("table");

// // Заполняем таблицу
// for (let i = 1; i <= 10; i++) {
//   // Создаем строку таблицы
//   let row = document.createElement("tr");

//   for (let j = 1; j <= 10; j++) {
//     // Создаем ячейку таблицы
//     let cell = document.createElement("td");

//     // Вычисляем значение ячейки
//     let cellValue = (i - 1) * 10 + j;

//     // Создаем текстовый узел с числом и добавляем его в ячейку
//     let cellText = document.createTextNode(cellValue);
//     cell.appendChild(cellText);

//     // Добавляем ячейку в строку
//     row.appendChild(cell);
//   }

//   // Добавляем строку в таблицу
//   table.appendChild(row);
// }

// // Добавляем таблицу в контейнер
// tableContainer.appendChild(table);
