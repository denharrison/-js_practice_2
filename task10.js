const array = [
  { name: "width", value: 123 },
  { name: "height", value: 222 },
];

const obj = array.reduce((object, value ) => {
  // object - аккумулятор (начинается с {})
  // value - текущий объект из массива

  object[value.name] = value.value;
  return object;

}, {});

console.log(obj); // { width: 123, height: 222 }
