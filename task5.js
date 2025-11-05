const original = {
  name: "Alice",
  settings: {
    theme: "dark",
    languages: ["en", "ru"],
  },
};


const deepClone = (obj) => {
let newObj = structuredClone(obj)

return newObj

}

const copy = deepClone(original);

copy.settings.theme = "light";
copy.settings.languages.push("fr");

console.log(original.settings.theme);
console.log(original.settings.languages);