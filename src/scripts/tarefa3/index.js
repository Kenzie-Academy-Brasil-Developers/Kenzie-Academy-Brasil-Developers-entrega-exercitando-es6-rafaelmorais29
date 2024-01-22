import { userTypeDiscount, bookStoreBooks } from './database.js';

console.log(`
TAREFA 3

`)


// Função para procurar livro por categoria
const findBooksByCategory = (booksList, category) => {

    const returnDescrpt = booksList.filter(cat => cat.categories.includes(category));
    console.log( returnDescrpt)

}
console.log(findBooksByCategory(bookStoreBooks, 'Política'))


// Função para procurar livro por ID
const findBookById = (booksList, bookId) => {
    
    const livro  = booksList.filter(buscaid => (buscaid.id === bookId));
    if(livro.length===0){
        return 'undefined'
    }else{
        return livro [0]
    }
}
console.log(findBookById(bookStoreBooks, 3))
console.log(findBookById(bookStoreBooks, 300))


// Função para vender livro
const sellBook = (booksList, bookId, userType = 'normal') => {

    const findBook = booksList.filter(element => element.id === bookId)
    if( findBook.length == 0){
        return 'Livro indisponível para compra'
    }else{
    
        if(findBook[0].quantity > 0){
            findBook[0].quantity = findBook[0].quantity -1
           
            let Price = findBook[0].price
            let finalPrice = 0
            if(userType != 'normal'){
                finalPrice = Price * (1 - userTypeDiscount[userType])
            }else{
                finalPrice = Price
            }

            return `'Livro ${ findBook[0].title } vendido com sucesso por R$ ${ finalPrice } ( ${ userTypeDiscount[userType] * 100 }% de desconto).'`
        }else{
            return 'Livro indisponível para compra'
        }
    }

}
console.log(sellBook(bookStoreBooks, 1, "platinum"));



// Função para exibir o rating do livro
const calculateAverageRating = (booksList, bookId) => {

    const Book = booksList.filter(element => element.id === bookId)
    if(Book.length == 0){
        return 'Livro não encontrado.'
    }

    if(Book[0].ratings.length === 0){
        return `O livro ${ Book[0].title } não possui nenhuma avaliação.`
    }else{
        const  rating = Book[0].ratings.reduce( (plus, number) => plus + number);
        return `O livro ${ Book[0].title } possui uma média de avaiação igual a ${(rating / Book[0].ratings.length).toFixed(1)}`
    }

}
// Livro não encontrado
console.log(calculateAverageRating(bookStoreBooks, 131313));
'Livro não encontrado.'

// Livro encontrado, mas sem ratings
console.log(calculateAverageRating(bookStoreBooks, 1));
'O livro Dom Quixote não possui nenhuma avaliação.'

// Livro encontrado e com ratings
console.log(calculateAverageRating(bookStoreBooks, 2));
"O livro Harry Potter and the Sorcerer's Stone possui uma média de avaliação igual a 4.83."