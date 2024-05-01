// Интерфейс аннотации функции
interface ProcessingFn {
    <T>(data: T): T
}
function processing<T>(data: T): T {
    return data;
}

let newFunc: ProcessingFn = processing;

type Smth<T> = T;
const num0: Smth<number> = 5;

interface ParentsOfUser {
    mother: string;
    father: string;
}

// type User1<T> = {
//     login: T;
//     age: number;
// }
// Type легко переделать в interface. Наследование от интерфейса помогает ограничить данные но и дает гибкость добавления новых данных.
interface User1<ParentsData extends ParentsOfUser> {
    login: string;
    age: number;
    parents: ParentsData;
}
// Можно расширить переданный объект 
const user0: User1<{ mother: string; father: string; married: boolean }> = {
    login: 'str',
    age: 54,
    parents: { mother: 'Anna', father: 'no data', married: true },
};
// const user0: User1<'str'> = {   //Можно передать и литерал 'str'
//     login: 'str',
//     age: 54
// }

// Создание generic helper types
type orNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const data1: OneOrMany<number[]> = [5];
const data222: orNull<null> = null;

const depositMoney = <T extends number | string>(amount: T): T => {
    console.log(`req to server with amount: ${amount}`);
    return amount;
}
depositMoney(500);
depositMoney('500');
// depositMoney(false) - ошибка

// Старые добрые аннотации можно использовать тоже. Если у нас простая функция где входные данные могут быть одного или двух типов, то возможно есть смысл создавать просто обычую функцию аннотацию в виде union type.
// const depositMoney = (amount: number | string): number | string => {
//     console.log(`req to server with amount: ${amount}`);
//     return amount;
// }
// depositMoney(500);
// depositMoney('500');
// // depositMoney(false) - ошибка

// Generics могут быть как type так и interface.
// Ограничения в интефейсах мы выставляем при помощи оператора extends, когда нам нужно создать шаблон от которго мы будем уже отталкиваться.

