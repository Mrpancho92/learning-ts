// Если мы на 100% уверены что например parents или db будет существовать всегда, 
// то нам на помощь приходит Оператор ! (Non-Null and Non-Undefined Operator) .

function sendUserData2(obj: User, db?: string): void {
    console.log(obj.parents!.mother?.toLowerCase(), db!.toLowerCase());
}

//  Интересный пример: 
//  
let dbName1: string;
// т.к. sendUserData3 - это function declaration мы можем ее вызвать до объявления.
sendUserData3(user, 'fdfdgdhgdhd');

console.log(dbName1!); // typescript не знает что это синхронная функция и выдает ошибку на вывод в консоль переменной. В этом случае можно поставить Оператор ! т.к. мы точно знаем что это будет работать.

function sendUserData3(obj: User, db?: string): void {
    dbName1 = "12345";
    console.log(obj.parents!.mother?.toLowerCase(), db!.toLowerCase());
}
