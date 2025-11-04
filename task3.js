let books = [
  {
    title: "Преступление и наказание",
    author: "Достоевский",
    genres: ["Психологический триллер", "Драма", "Криминал"],
    isRead: false,
  },
  {
    title: "Великий Гэтсби",
    author: "Фицджеральд",
    genres: ["Романтика", "Драма", "Криминал"],
    isRead: false,
  },
  {
    title: "Война и мир",
    author: "Лев Толстой",
    genres: ["История", "Драма", "Романтика"],
    isRead: false,
  },
];

const getBooksByGenre = (genre = String(prompt('Введите пожалуйста жанр книги, который вам интересен !'))) => {

    let result = []

    books.forEach((element) => {
  

    if (element["genres"].includes(genre) === true){ 
        result.push(element["title"])
    } 

   })

   let joinResult = result.join(", ")

   alert(`Мы можем предложить вам такие книги как: ${joinResult}.`)
}

const markAsRead = (title = String(prompt('Введите пожалуйста название книги'))) => {


    books.forEach((obj) => {

        if (obj['title'] === title) {
            obj['isRead'] = true
        }

    })
    console.log(books)
}

markAsRead("Преступление и наказание");
