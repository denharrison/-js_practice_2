// Метод flat() экземпляров Array возвращает новый массив, 
// в котором все элементы вложенных подмассивов рекурсивно "подняты" на указанный уровень.


const arr1 = [1, [2], [3, [4]]]

const flatFunction = (array, count = 1) => {

 if (count === 2) {
    return array.flat(count);
 }

 array.flat(count)

return flatFunction(array.flat(count), count + 1)


}

console.log(flatFunction(arr1))