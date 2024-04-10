//  readonly можно использовать для interface, type, аннотаций обычных объектов, классов.
interface User {
    readonly login: string; // readonly используется для того чтобы свойство нельзя было изменить.
    password: string;
    age: number;
    readonly addr?: string;   // если поставить знак вопроса ?(optional оператора) перед : то этим говорим что это поле не обязательно. И уже при описании объекта этим интерфейсом ошибки не будет если не добавить это поле.
    // addr: string | undefined // Если свойство обязательно используем union type и указываем помимо строки еще undefined.
    parents?: {
        mother?: string;
        father?: string;
    }
}
const user: User = {
    login: 'first',
    password: 'qwerty',
    age: 50,
    addr: 'frfrfrf'
}

const userFreeze: Readonly<User> = {   // Readonly<User> сделал весь интерфейс неизменяемым.
    login: 'first',
    password: 'qwerty',
    age: 50
}

// Похожее поведение у optional оператора и в аргументах функции.
const dbName = '12345';
function sendUserData(obj: User, db?: string): void {
    console.log(obj.parents?.mother?.toLowerCase(), db?.toLowerCase());
}

// class Animal {
//     readonly name: string = 'name';
// }

const basicPorts: readonly number[] = [3000, 3001, 5555]; // readonly для массива
const basicPorts1: ReadonlyArray<number> = [3000, 3001, 5555]; // ReadonlyArray<number> сделал весь массив неизменяемым.
const basicPorts2: readonly [number, ...string[]] = [3000, 'dwdwd', 'deded']; // readonly для кортежей

