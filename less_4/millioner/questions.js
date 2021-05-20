"use strict";

function Question(quest, ans1, ans2, ans3, ans4, rigthsAns){
    this.quest = quest,
    this.ans1 = ans1,
    this.ans2 = ans2,
    this.ans3 = ans3,
    this.ans4 = ans4,
    this.rigthsAns = rigthsAns
}
let questions = [];
let quest1 = new Question('Откуда сотрудники офисов наливают в чашки воду?','из принтера','из сканера','из степлера','из кулера','из кулера');
let quest2 = new Question('Что построил Джек в стихотворении, переведенным с английского Маршаком?','маршрут','график','дом','коммунизм','дом');
let quest3 = new Question('Что может возникнуть на шахматной доске?','вечный шах','вечный мат','вечный зов','вечный двигатель','вечный шах');
questions.push(quest1);
questions.push(quest2);
questions.push(quest3);