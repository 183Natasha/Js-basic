// Задача: Написать функцию, определяющую, может ли пользователь позволить себе покупку товара исходя из его финансов и возможности получения кредита.

// Условия:

// Пользователь хочет купить MacBook стоимостью $2000.
// Параметры пользователя: возраст, наличие работы, собственные деньги.
// Кредит:

// $500, если возраст > 24 года и есть работа.
// $100, если возраст > 24 года, работы нет.
// $0 в остальных случаях.


function computeCreadite(age, hasJob = false){
    switch (true){
        case age >= 24 && hasJob:
            return 500;
        case age >= 24:
            return 100;
        default:
            return 0;
    }
}

function canBay(productPrice, age, money, hasJob = false){
    const creditMoney = computeCreadite(age, hasJob);
    return productPrice <= money + computeCreadite;
    
}

console.log(canBay(2000, 25, 1000));

