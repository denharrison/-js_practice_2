const products = [
  { name: "Phone", category: "Electronics" },
  { name: "TV", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
  { name: "T-shirt", category: "Clothing" },
  { name: "Blender", category: "Home" },
];

const countByCategory = (array) => {

    let category = []

    array.forEach(element => {
        
      category.push(element.category); 
        
    });


    const counts = category.reduce((acc, value) => {

      acc[value] = (acc[value] || 0) + 1;
      return acc;

    }, {});


    console.log(counts)
}

countByCategory(products)