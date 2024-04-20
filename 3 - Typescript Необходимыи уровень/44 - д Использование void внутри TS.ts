//  Void это не только когда нет какого то return т.е. возвращаемого значения , но и когда мы полностью хотим проигнорировать то что будет возвращено из этой функции.

type voidFunc = () => void;

const retString: voidFunc = () => {
    // ... some magic
    return "string";
};

const s = retString();
console.log(s);
const retNum: voidFunc = () => {
    // ... some magic
    return 5;
};

const n = retNum();
console.log(n);

// а вот так если объявлять то будет ошибка при вызове return
// function f2(): void {
//     return true;
// }
// И так тоже бдует ошибка 
// const f3 = function (): void {
//     return true;
// }

// Ещё пример где можно наглядно увидеть что push возвращает number а forEach возвращает void. Игнорирование в действии)). forEach ---> (method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void. push ---> (method) Array<string>.push(...items: string[]): number.
const names = ['Anna', 'John'];
const newArr = names.slice();
names.forEach((name, i, arr) => arr.push('Hey!'));