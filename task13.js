/* Дан целочисленный параметр n. 
Верните функцию-счётчик. Эта функция-счётчик изначально возвращает n, 
а затем каждый последующий раз при вызове возвращает значение на 1 больше предыдущего (n, n + 1, n + 2 и т.д.). */

// 1 cлучай

 const createCounter = (n) => {

   return function () {
     return n++;
   };

 };
 
 let count = createCounter(10)

console.log( count() )    
console.log( count() );  


// 2 случай

 const createCounter2 = (n) => {

   return function () {
     return n++;
   };


 }

 console.log(createCounter2(10)());
 console.log(createCounter2(10)());  