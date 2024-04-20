// const num = new Number(5); // Создание экземпляра занимает больше времени чем литерала(const num = 5)

const x = 500;
const y = new Number(500);
console.log(x == y); // true не строгое по значению
console.log(x === y); // false строгое сравнение с учетом типов

// В TS существует отдельный тип Number(с большой буквы) представляющий конструктор одноименного типа. 
// тип number неявно преобразуется в тип Number(с большой буквы) но не наоборот.
let num: Number = new Number(5);
let num3: number = 5;
let num4 = Number(5); // получается примитив с малой буквы number

// num = num3; // ошибки нету
// num3 = num;  // ошибка есть  

const numm = 5;
const strNum: string = num.toString();
const str2 = '5';
const numStr: number = +str;

interface Department {
    name: string,
    budget: number
}
const department1 = {
    name: 'web-dev',
    budget: 50000
}
interface Project {
    name: string,
    projectBudget: number
}
// const mainProject: Project = {
//     ...department1,
//     projectBudget: 5000
// } // Тут мы получим свойтсво budget которое должно быть скрыто. 
// Чтобы получить нужные свойства можно создать функцию:
function transformDepartment(department: Department, amount: number): Project {
    return {
        name: department1.name,
        projectBudget: amount
    }
}
const mainProject: Project = transformDepartment(department1, 4000);
