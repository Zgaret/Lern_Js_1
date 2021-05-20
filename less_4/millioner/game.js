"use strict";


let money = 100; // сумма денег за правильные ответы
let gameCheck = true; // флаг для запуска игры

game(); // запускаем игру

/**
 * Функция запускает игру и цыклом задает все вопросы
 */
function game(){
    while(gameCheck){ // true
        for(let i = 0; i < questions.length; i++){  // пока итератор меньше длинны масива с вопросами...
            let answer = getAnswer(questions[i]);   // задаем вопрос
            let check = rigthsAnswer(questions[i],answer); // сравниваем ответ пользователя с верным и записываем в пепеменную true или false
            if(i < questions.length - 1 && check){ // если итератор меньше длинны масива с вопросами и юзер ответил верно
                alert('Следующий вопрос');    
            }else{                                  // если нет то сообщаем что игра окончена
                alert(`Игра окончена, ваш выйгрыш составил ${money}`);
                gameCheck = false;                  // останавливаем игру
                break;
            }
        }
        
    }
}

/**
 * Функция выводит вопрос и варианты ответа и запрашивает ответ
 * @param {object} obj 
 * @returns ответ введенный пользователем
 */
function getAnswer(obj){
    let answer = prompt(`${obj.quest} \n ${obj.ans1} \n ${obj.ans2} \n ${obj.ans3} \n ${obj.ans4}`);
    return answer;
}

/**
 * Функция сравнивает ответ пользователя с правильным
 * @param {object} obj 
 * @param {string} answer 
 * @returns в зависимости от ответа возвращает булево значение
 */
function rigthsAnswer(obj, answer){
    if(answer == obj.rigthsAns){
        money *= 2;
        alert(`Верно! Вы заработали ${money}`);
        gameCheck = true;
        return gameCheck;
    }else{
        alert('Вы не угодали');
        gameCheck = false;
    }
}