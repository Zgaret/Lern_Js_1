"use strict";

/*
* Задание 1
* С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

let num = 2;
/**
 * Проверяет число на простоту
 * @param {number} num 
 * @returns true или false
 */
function getEasyNum(num){ //13
    let i = 2;
    while(i < num){
        if(num % i == 0){
            return false;
        }
        i++;
    }
    return true;
}


while(num <= 100){
    if(getEasyNum(num)){
        console.log(num);
    }
    num++;
}

/*
* Задание 2-3
* С этого урока начинаем работать с функционалом интернет-магазина.
* Предположим, есть сущность корзины. Нужно реализовать функционал подсчета
* стоимости корзины в зависимости от находящихся в ней товаров.
* Товары в корзине хранятся в массиве. Задачи:
* Организовать такой массив для хранения товаров в корзине;
* Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

let cart = [
    {
        title: 'Товар 1',
        price: 156,
        count: 3
    },
    {
        title: 'Товар 2',
        price: 987,
        count: 1
    },
    {
        title: 'Товар 3',
        price: 74,
        count: 12
    },
    {
        title: 'Товар 5',
        price: 211,
        count: 3
    },
    {
        title: 'Товар 7',
        price: 16,
        count: 20
    }
];

/**
 * Функция считает сумму корзины
 * @param {array} arr 
 * @returns число в виде суммы товаров в корзине
 */
function getSumCart(arr){
    let cartSum = 0;
    arr.forEach(function(item){
        cartSum += item.price * item.count;
        return cartSum;
    });
    return cartSum;
}


let sumCart = getSumCart(cart);
document.write(`<h1 style="text-align: center">Сумма вашего заказа = ${sumCart}</h1>`);
    
/**
 * Задание 4
 * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
 */

for(let i = 0; i <= 9; console.log(i++));

/**
 * Задание 5
 * Нарисовать пирамиду с помощью console.log, как показано на рисунке,
 * только у вашей пирамиды должно быть 20 рядов, а не 5:
 */

let x = '';
for(let i = 1; i <= 20; i++){
    for(let j = 1; j <= i; j++){
        x += 'x';
    }
    x += '\n';
}
console.log(x);