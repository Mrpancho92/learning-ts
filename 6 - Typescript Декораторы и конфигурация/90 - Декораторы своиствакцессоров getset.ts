interface ICar9 {
    fuel: string;
    open: boolean;
    freeSeats: number;
}
// @changeDoorStatus7(false)
// @changeAmountOfFuel7(95)
class myCar9 implements ICar9 {
    // .....................................
    // тут срабатывает конструктор хоть мы его и не видим из за современного синтаксиса
    fuel: string = '50%';
    open: boolean = false;
    errors: any;
    _weight: number = 1000;

    @log
    set weight(num: number) {
        this._weight = this._weight + num;
    }
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
// Декоратор set и get.
function log(
    target: Object, // Объект к которому относится этот метот к которому применим декоратор это прототип объекта поэтому до инициализации он будет пустым.
    propertyKey: string | symbol,   // Название метода который может быть строкой или символом
    descriptor: PropertyDescriptor  //  
): PropertyDescriptor | void {
    // descriptor.enumerable = false;
    const oldSet = descriptor.set; // старая ссылка на метод.
    const oldGet = descriptor.get;
    descriptor.set = function (this: any, ...args: any) {
        console.log(`Изменяем значение на ${[...args]}`);
        return oldSet?.apply(this, args); // вызываем метод класса
    };
    descriptor.get = function () {
        console.log(`Test`);
        return oldGet?.apply(this); // вызываем метод класса
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
const car9 = new myCar9();
// car8.freeSeats = 5;
car9.weight = 3;
console.log(car9.weight);
// Работаем в прототипе там значение и лежит поэтому чтобы его увидеть:
// console.log(car7.freeSeats);
// console.log(car9.errors);
// errors: any;