//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

let event, ok;

let answers = []; // массив для ответов

/**
 * Функция принимает на вход объект 
 * запрашивает у пользователя ответ,
 * выполняет проверку если пользователь решил выйти или ввел некоректные данные
 * И записывает ответ в массив в зависимости от выбранного ответа
 * @param {object} obj 
 */
function chooseQuest(obj){
    ok = false;
    event = +prompt(obj.n00 + obj.n1 + obj.n2 + '-1 - Выход из игры');
    while(!ok) {
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(obj.n0, event);
        }
    }
    if(event == 1){
        let ans = new Answer(obj.n00, obj.n1);
        answers.push(ans);
    }else{
        let ans = new Answer(obj.n00, obj.n2);
        answers.push(ans);
    }
}

/**
 * Конструктор ответов которые записываются в массив ответов
 * @param {string} question 
 * @param {string} answer 
 */
function Answer(question, answer){
    this.question = question,
    this.answer = answer
}

chooseQuest(work1); // Выводим первый вопрос
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        chooseQuest(work2);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2:
                chooseQuest(work4, event, ok);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        chooseQuest(work3);
        switch (event) {
            case 1: // Второе действие
            case 2: 
                chooseQuest(work4);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
let askAnswer = +prompt('Введите номер вопроса');
for(let i = 1; i <= answers.length; i++){
    if(i == askAnswer){
        alert(answers[i - 1].question + answers[i - 1].answer);
    }
}
//------------------------------------------
function isAnswer(quant, ev) {
    if (isNaN(ev) || !isFinite(ev)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (ev < 1 || ev > quant) {
        alert('Ваше число выходит из допустимого диапозона'); // не понял почему но при вводе некорректых данных
        return false;                                         // вывод сообщения забаговывался и выводился постоянно
    }
	return true;
    
}

