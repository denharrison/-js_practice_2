function outer() {
  let outerVar = "I am outside!";

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

let outerVar = "Inside";

const func = outer();
func(); // I am outside! 


// Создаем глобальное лексическое окружение с переменными outer(функция), outerVar (строка), далее вызываем функцию при 
// обьявлении func = outer() и при вызове создается локальное лексическое окружение в котором создаются локальные переменные 
// outerVar (строка) и inner (функция) выводим результат inner. В инер вызываем outerVar, но поднимаясь (замыкая) переменную 
// находим ее в локальное области видимости функции outer и достаем, а потом просто выводим, йоу 