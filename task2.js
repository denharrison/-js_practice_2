let users = [
  {
    id: 1,
    name: "David",
    email: "david999222@mail.com",
  },
  {
    id: 2,
    name: "Maria",
    email: "maria969422@mail.com",
  },
  {
    id: 3,
    name: "Anna",
    email: "anna102@mail.com",
  },
];

const findUserById = (array, id = null) => {

    let findId = array.find((item) => {
       
       if ((item["id"] === id)) {
            return item['id']
       } else {
            return 
       }
        
    })

    if (findId === undefined) {
        return null
    } else {
        return findId
    }


}

console.log(findUserById(users, 1)); 