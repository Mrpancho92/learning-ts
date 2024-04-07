// Кортеж это массив с четким указанием типов элементов в нем
const userDataTuple: [boolean, number , string] = [true, 40, 'John'];

// Можно вытащить с помощью деструкторизации переменные 
const [bthd, age1, userName1] = userDataTuple;
console.log(bthd);
// Можно расширить кортеж с помощью спред-оператора, только одна манипуляция, в одном месте где объявление типов данных в кортеже.
const userDataTuple2: [boolean, number , ...string[]] = [true, 40, 'John', 'Ann', 'Alex'];
console.log(userDataTuple2[3]);
