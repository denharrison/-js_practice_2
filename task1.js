let products = [
  {
    name: "Ручка",
    price: 100,
    category: "Канцелярия",
  },
  {
    name: "Карандаш",
    price: 70,
    category: "Канцелярия",
  },
  {
    name: "Шоколад",
    price: 120,
    category: "Сладости",
  },
];

const getTotalPriceByCategory = (category = String(prompt('Введите пожалуйста категорию продукта !'))) => {

let categoryIsers = products.filter((item) => item.category === category);

let result = 0; 

categoryIsers.forEach((item) => {


result += item['price']

return result

})

alert(`Общая стоимость товаров данной категории составляет: ${result} рублей`)

}

getTotalPriceByCategory()