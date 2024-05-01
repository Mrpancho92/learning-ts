// Condition ? true : false
// SomeType extends OtherType ? TrueType : FalseType 
type Example1 = "string" extends "Hello" ? string : number; // Example будет number
type Example2 = "string" extends string ? string : number; // Example будет string
// const strr: string = "Hello";
// type Example3 = "string" extends strr ? string : number; // Будет ошибка т.к. мы должны использовать типы а в данном случае strr - это значение переменной

type FromUserOrFromBase<T extends string | number> = T extends string ? IDataFromUser : IDataFromBase;

interface User0<T extends 'created' | Date> {
    created: T extends 'created' ? 'created' : Date
}

const user01: User0<'created'> = {
    created: 'created' // благодаря таким ограничениям можно использовать в объекте только 1 значение.
}

interface IDataFromUser {
    weight: string;
}
interface IDataFromBase {
    calories: number;
}

// Функции
// Добавим перегрузки функции
// function calculateDailyCalories(str: string): IDataFromUser;
// function calculateDailyCalories(num: number): IDataFromBase;
// function calculateDailyCalories(numOrStr: string | number): IDataFromUser | IDataFromBase {
//     if (typeof numOrStr === 'string') {
//         const obj: IDataFromUser = {
//             weight: numOrStr,
//         };
//         return obj
//     } else {
//         const obj: IDataFromBase = {
//             calories: numOrStr,
//         };
//         return obj
//     }
// }
// Превратим функцию в дженерик без перегрузок
function calculateDailyCalories<T extends string | number>(numOrStr: T): T extends string ? IDataFromUser : IDataFromBase {
    if (typeof numOrStr === 'string') {
        const obj: IDataFromUser = {
            weight: numOrStr,
        };
        // return obj as T extends string ? IDataFromUser :IDataFromBase; 
        // Можно вынести в отдельный дженерик
        return obj as FromUserOrFromBase<T>;
    } else {
        const obj: IDataFromBase = {
            calories: numOrStr,
        };
        return obj as FromUserOrFromBase<T>;
    }
}

type GetStringtype<T extends 'hello' | 'world' | string> = T extends 'hello'
    ? 'hello'
    : T extends "world"
    ? "world"
    : string;

type GetFirstType<T> = T extends Array<infer First> ? First : T;
type Ex = GetFirstType<number[]>

// Задачка на собесах пример. Как реализовать тип который называется ToArray, который будет дженериком и который принимает в себя любой тип и возвращает массив этого типа (Type[]).
type ToArray<Type> = Type extends any ? Type[] : never;
type ExArray1 = ToArray<Ex>; // Получаем массив чисел 
type ExArray2 = ToArray<Ex | string>; // Получаем массив чисел или строк 
// Если как аргумент передается union тип <Ex | string> - называется распределительные условные типы.
