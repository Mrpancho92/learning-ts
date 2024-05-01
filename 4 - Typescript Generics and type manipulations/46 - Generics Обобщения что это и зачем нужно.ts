function processingData<T>(data: T): T {
    // ...
    return data;
}
let res1 = processingData(1);
let res2 = processingData('1');

const num10 = 10;

const res3 = processingData<number>(num10); // конкретизируем с чем вызывать функцию с помощью <number>.

interface PrintUK {
    design: number;
}
interface PrintES {
    design: string;
}
interface Print<Type> {
    design: Type;
}
const somePrint: Print<string> = {
    design: 'ten'
}
const someOtherPrint: Print<number> = {
    design: 10
}
// Generics(обобщения) можно использовать для type, interfaces, functions, методов и классов.
// Для enum(перечислений) нельзя!.
// В TS существуют встроенные generics пример Array<T>.
// Array<T>
// RefferalSystem<T, S>
// RefferalSystem<UserID, UserReferrals> Названия этих заглушек зависит от сложности функционала.В сложной части используются слова чтоб понимать что передать.
// T, U, V, S, P, K/V - эти буквы в осоновном используются в generics (P - как проперти, K/V - ключ,значение)