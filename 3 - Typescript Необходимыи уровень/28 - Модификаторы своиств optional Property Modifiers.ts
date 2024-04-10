// interface User {
//     login: string;
//     password: string;
//     age: number;
//     // addr?: string;   // если поставить знак вопроса ?(optional оператора) перед : то этим говорим что это поле не обязательно. И уже при описании объекта этим интерфейсом ошибки не будет если не добавить это поле.
//     addr: string | undefined // Если свойство обязательно используем union type и указываем помимо строки еще undefined.
//     parents?: {
//         mother?: string;
//         father?: string;
//     }
// }
// const user: User = {
//     login: 'first',
//     password: 'qwerty',
//     age: 50,
//     addr: 'frfrfrf'
// }
// // Похожее поведение у optional оператора и в аргументах функции.
// const dbName = '12345';
// function sendUserData(obj: User, db?: string): void {
//     console.log(obj.parents?.mother?.toLowerCase(), db?.toLowerCase());
// }
