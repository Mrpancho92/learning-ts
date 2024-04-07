const userData = '{"isBirthdaydata": true, "ageData": 40, "userNameData": "John"}';
// Если не указать что будет распарсино в userData то по умолчанию будет тип ANY 
// Тип Any всегда по возможности лучше избегать!
// Поэтому для userObj нужно указать что конкретно мы принимает какие типы данных
const userObj: {
    isBirthdaydata: boolean;
    userNameData: string;
    ageData: number;
} = JSON.parse(userData);

console.log(userObj.smt()); // Скрипт сломается если мы вызовем несуществующий метод у объекта 