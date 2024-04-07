// 8 - использование системы типов в функциях

const isBirthdaydata: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

//  function logBrtMsg(isBirthday: boolean, userName: string, age: number) : string {
//     if (isBirthday) {
//         return `Congrats ${userName.toLocaleUpperCase()}, age: ${age + 1}`;
//     } else {
//         return "Error";
//     }
//  }

// Стрелочная функция 
 const logBrtMsg = (isBirthday: boolean, userName: string, age: number) : string => {
    if (isBirthday) {
        return `Congrats ${userName.toLocaleUpperCase()}, age: ${age + 1}`;
    } else {
        return "Error";
    }
 }

 logBrtMsg(isBirthdaydata, userNameData, 40);