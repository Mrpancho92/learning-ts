// Mapped types так же работает и для интерфейсов, только их можно сувать в проперти дженерика.
// ну т.е. 
// interface Currencies = {
//     usa: "usd";
//     china: "cny";
//     europe: "eur";
//     kz: "tenge";
// };
type Currencies = {
    usa: "usd";
    china: "cny";
    europe: "eur";
    kz: "tenge";
    readonly gr: "eur";
    spain?: "eur"
};

type CreateCustomCurr<T> = {
    // [P in keyof T]: string
    // readonly [P in keyof T]: string // Можно readonly
    // readonly [P in keyof T]?: string // Можно optional оператор
    // +readonly [P in keyof T]+?: string // Можно добавлять readonly и обязательные и необязательный поля 
    -readonly [P in keyof T]-?: string // Можно убирать readonly и обязательные и необязательный поля
}
// Создадим СustomCurrencies с помощью CreateCustomCurr.
type CustomCurrencies = CreateCustomCurr<Currencies>;

type ROnlyCurr = Readonly<Currencies>; // Создадим копию типа, где каждое свойство будет неизменяемое.

// type CustomCurrencies = {
//     usa: string;
//     china: string;
//     europe: string;
//     kz: string;
// };

// type СопоставимыйТип = {
//     [произвольныйИдентификатор in Множество] : ПроизвольныйТипДанных
// }
type Keys = 'name' | 'age' | 'role';
// Создадим тип User00 и заполним его данными
type User00 = {
    [K in Keys]: string
}
// Примерчик:
const alex00: User00 = {
    name: 'Alex',
    age: '25',
    role: 'admin'
}
