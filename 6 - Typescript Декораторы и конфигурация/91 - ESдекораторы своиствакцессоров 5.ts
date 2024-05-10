interface ICar10 {
    fuel: string;
    open: boolean;
    freeSeats: number;
}
// @changeDoorStatus7(false)
// @changeAmountOfFuel7(95)
class myCar10 implements ICar10 {
    // .....................................
    // тут срабатывает конструктор хоть мы его и не видим из за современного синтаксиса
    fuel: string = '50%';
    open: boolean = false;
    errors: any;
    _weight: number = 1000;

    // Начиная с ts 5 версии декораторы get и set применяются раздельно и немного другой синтаксис смотри ниже.
    @logOnSet
    set weight(num: number) {
        this._weight = this._weight + num;
    }
    @logOnGet
    get weight() {
        return this._weight;
    }

    // @checkNumberOfSeats(4)
    freeSeats: number = 2;
    // ......................................
    // @checkAmountOfFuel7
    isOpen(value: string) {
        // console.log(this.fuel);
        return this.open ? "open" : `close ${value}`;
    }
}
// Декоратор set. 
// function logOnSet(
//     target: (value: number) => void,
//     context: ClassSetterDecoratorContext
// ) {
//     return function (this: any, ...args: any) {
//         console.log(`Изменяем значение на ${[...args]}`);
//         return target.apply(this, args); // вызываем метод класса
//     };
// }
// С добавлением дженерика для подробного типирования и избавления от any
function logOnSet<T, R>(
    target: (this: T, value: number) => R,
    context: ClassSetterDecoratorContext<T, number>
) {
    return function (this: T, ...args: any) {
        console.log(`Изменяем значение на ${[...args]}`);
        return target.apply(this, args); // вызываем метод класса
    };
}

// Декоратор get.
function logOnGet<T, R>(
    target: (this: T) => R,
    context: ClassGetterDecoratorContext<T, number>
) {
    return function (this: T): R {
        console.log(`Test`);
        return target.apply(this); // вызываем метод класса
    }
}



function checkNumberOfSeats(limit: number) {
    return function (target: undefined, context: ClassFieldDecoratorContext) {
        // Работает тлько на этапе инициализации класса. Не срабатывает на конечный объект.
        return function (this: any, newAmount: number) {
            if (newAmount >= 1 && newAmount < limit) {
                return newAmount;
            } else {
                throw Error(`Больше ${limit} сидений быть не может`)
            }
        }
    };
}
const car10 = new myCar10();
// car8.freeSeats = 5;
car10.weight = 3;
console.log(car10.weight);
// Работаем в прототипе там значение и лежит поэтому чтобы его увидеть:
// console.log(car7.freeSeats);
// console.log(car9.errors);
// errors: any;