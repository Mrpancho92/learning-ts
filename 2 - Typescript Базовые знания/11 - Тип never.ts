
const isBirthdaydata2: boolean = true;
let ageData2: number = 40;
const userNameData2: string = "John";

//  Тип never который значит ничего не присваивается и ничего не возвращается может использоваться в функциях которые действительно ничего не возвращают это возврат каких то ошибок, которые выкидывают ошибку в какую нить среду например в консоль браузера. Так же его можно получить при запуске бесконечных циклов внутри функции или запуске рекурсии, которая никогда не закончится. Так же такой тип данных можно использовать внутри других фунций - называется Исчерпающей проверкой и позволяют вам вернуть в конце функции never и сказать что из этой фунции вообще ничего не возвращается даже undefined. 
const createError = (msg: string) => {
    throw new Error(msg);
};

 function logBrtMsg2(isBirthday: boolean, userName: string, age: number) : string {
    if (isBirthday === true) {
        return `Congrats ${userName.toLocaleUpperCase()}, age: ${age + 1}`;
    } else if (isBirthday === false) {
        return "To Bad";
    }
    return createError("Error");
 }

logBrtMsg(isBirthdaydata2, userNameData2, 40);