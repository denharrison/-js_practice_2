const categories = {
  name: "Electronics",
  subcategories: [
    {
      name: "Phones",
      subcategories: [
        { name: "Smartphones", subcategories: [] },
        { name: "Feature Phones", subcategories: [] },
      ],
    },
    {
      name: "Computers",
      subcategories: [
        { name: "Laptops", subcategories: [] },
        { name: "Desktops", subcategories: [] },
      ],
    },
  ],
};

const findCategory = (name = String(prompt('Введите пожалуста категорию, которая вам интересна')), tree) => {

  if (Array.isArray(tree) === true) {

      tree.forEach((element) => {

          if (element['name'] === name) {
            console.log(element) 
          } else {
            findCategory(name, element.subcategories);
          }
      }) 


  } else if (typeof tree === 'object') {

    if (tree.name === name) {
        console.log(tree) 
        return 
    } 

    findCategory(name, tree["subcategories"]);
    
  } else {
    console.log('Ничего не найдено')

  }


}


findCategory("Laptops", categories);
