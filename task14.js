// Мемоизация — это способ ускорить функцию, сохраняя её результаты в "кэше" (как в хранилище). 
// Если функция вызвана с теми же входными данными (аргументами), она не пересчитывает всё заново, а просто берёт готовый ответ из кэша.

function func(arg1, arg2) {
  return arg1 + arg2;
}; 

function memoFunc(fn, resolver) {

  const cach = {} // кэш (хранилище)

  return function (...args) { 
    const key = resolver ? resolver(...args) : args.join("_"); // Генерируем ключ
    if (cache[key] !== undefined) {
      return cache[key]; // Берём из кэша
    }
    const result = func(...args); // Считаем
    cache[key] = result; // Сохраняем
    return result;
  };


}