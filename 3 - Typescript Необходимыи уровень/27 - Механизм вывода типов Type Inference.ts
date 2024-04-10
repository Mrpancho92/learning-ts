// Нужно ли всегда писать аннотацию типов? - нет не всегда иногда можно положиться на вывод типов.

// Если при объявлении переменной let не указать тип то по умолчанию будет тип any.
// Если при объявлении переменной const не указать тип то по умолчанию будет литерал как значение переменной.
// Наведи и посмотри).
let salary;
salary = 500;
const a = 'newString';

interface UserData {
    isBirthdayData: boolean;
    ageData: number;
    userNameData: string;
}
const userData1 = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';
const userObj1: UserData = JSON.parse(userData);
// console.log(userObj.smt); // свойства smt нету у userObj1

// По умолчанию movement будет строго boolean типа, добавить строку не сможем, поэтому если вручную задать     boolean | string то будет все окей.
let isOkay = true;
let movement: boolean | string = false;

if (isOkay) {
    movement = "moving";
}
// Объекты и массивы по умолчанию определяются как есть. Наведи и посмотри.
const userData3 = { "isBirthdayData": true, "ageData": 40, "userNameData": "John" };
const arr = ['sssss', 5, true];

