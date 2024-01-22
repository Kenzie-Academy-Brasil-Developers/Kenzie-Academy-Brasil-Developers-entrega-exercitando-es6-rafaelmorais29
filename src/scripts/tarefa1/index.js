import { productsList } from './database.js';

console.log(`TAREFA 1

`)

const calculateTotalCost = (customerName, products, discount = 0 ) => {
    let total = 0
    for(let i = 0; i < products.length; i++){
       total = total + (products[i].price * products[i].quantity)
    }

    if (discount==0){
        return `Olá, ${customerName}! O total da sua compra é R$ ${total} (sem desconto).`
    }else{
        return `Olá, ${customerName}! O total da sua compra é R$ ${(total * (100 - discount)/100 )} (${discount}% de desconto).`
    }
    
};

console.log(calculateTotalCost('João', productsList ))

console.log(calculateTotalCost('João', productsList, 15))