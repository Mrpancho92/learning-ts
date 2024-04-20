// Тип unknown является безопасным аналогом any с которым ничего сделать нельзя пока мы не сузим его.
// Он применяется в случае когда входящие данные неизвестны.

// let smth: unknown;

// smth = 'str';

// let data: string[] = smth;
// data.find(e => e);

// const someValue: unknown = 10;
// someValue.method();

// function fetchData(data: unknown): void {
//     if (typeof data === 'string') {
//         console.log(data.toLocaleLowerCase());
//     }
// }

const userData4 = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

function safeParse(s: string): unknown {
    return JSON.parse(s);
}
const data4 = safeParse(userData4);

function transferData(d: unknown): void {
    if (typeof d === 'string') {
        console.log(d.toLowerCase());
    } else if (typeof d === 'object' && d) {
        console.log(data4);
    } else {
        console.error("Some error");
    }
}
transferData(data4);

try {
    if (1) {
        throw new Error('error');
    }
} catch (e) {
    if (e instanceof Error) {
        console.log(e.message);
    } else if (typeof e === 'string') {
        console.log(e);
    }
}
// Работа с union type и intersection type 
type T0 = any | unknown;  //  если навести на Т0 то увидиим что any перекрыл unknown
type T1 = number | unknown; // если навести на Т1 то увидиим что unknown перекрыл number
type T2 = any & unknown; // если навести на Т2 то увидиим что any перекрыл unknown
type T3 = number & unknown; // если навести на Т3 то увидиим что number перекрыл unknown