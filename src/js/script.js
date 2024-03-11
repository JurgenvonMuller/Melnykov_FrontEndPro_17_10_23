// Список категорий и товаров
const data = {
  categories: [
    { id: 1, name: "Категория 1" },
    { id: 2, name: "Категория 2" },
    { id: 3, name: "Категория 3" },
  ],
  products: [
    { id: 1, categoryId: 1, name: "Товар 1", price: 100 },
    { id: 2, categoryId: 1, name: "Товар 2", price: 200 },
    { id: 3, categoryId: 2, name: "Товар 3", price: 150 },
    { id: 4, categoryId: 3, name: "Товар 4", price: 120 },
  ],
};

// Получаем ссылки на DOM-элементы
const categoriesContainer = document.querySelector(".categories");
const productsContainer = document.querySelector(".products");
const productInfoContainer = document.querySelector(".product-info");


// Добавляем обработчик события click на документ
document.addEventListener('click', (event) => {
  // Если кликнут не категории, не товары и не блок с информацией о товаре
  if (!event.target.closest('.categories') && !event.target.closest('.products') && !event.target.closest('.product-info')) {
    // Скрываем блоки с категориями и товарами
    categoriesContainer.style.display = 'block';
    productsContainer.style.display = 'none';
    productInfoContainer.style.display = 'none';
  }
});
// Функция для отображения списка категорий
function renderCategories() {
  categoriesContainer.innerHTML = "";
  data.categories.forEach((category) => {
    const categoryElement = document.createElement("div");
    categoryElement.classList.add("category");
    categoryElement.textContent = category.name;
    categoryElement.addEventListener("click", () =>
      renderProducts(category.id)
    );
    categoriesContainer.appendChild(categoryElement);
  });
  productsContainer.style.display = "none"; // скрываем список товаров
  productInfoContainer.style.display = "none"; // скрываем блок с информацией о товаре
}

// Функция для отображения списка товаров выбранной категории
function renderProducts(categoryId) {
  productsContainer.innerHTML = "";
  const products = data.products.filter(
    (product) => product.categoryId === categoryId
  );
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.textContent = product.name;
    productElement.addEventListener("click", () => renderProductInfo(product));
    productsContainer.appendChild(productElement);
  });
  productsContainer.style.display = "block"; // показываем список товаров
  productInfoContainer.style.display = "none"; // скрываем блок с информацией о товаре
}

// Функция для отображения информации о товаре
function renderProductInfo(product) {
  productInfoContainer.innerHTML = "";
  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  productInfo.innerHTML = `
      <h2></h2>
      <p>Цена: ${product.price}</p>
      <button class="buy-button">Купить</button>
  `;
  productInfo.querySelector("h2").textContent = product.name; // добавляем наименование товара
  productInfoContainer.appendChild(productInfo);
  productInfoContainer.style.display = "block"; // показываем блок с информацией о товаре

  productInfo.querySelector(".buy-button").addEventListener("click", () => {
    alert("Товар куплен!");
  });
}

// Показываем список категорий при загрузке страницы
renderCategories();
