interface ICar8 {
    fuel: string;
    open: boolean;
    freeSeats: number;
}
// @changeDoorStatus7(false)
// @changeAmountOfFuel7(95)
class myCar8 implements ICar8 {
    // .....................................
    // тут срабатывает конструктор хоть мы его и не видим из за современного синтаксиса
    fuel: string = '50%';
    open: boolean = false;
    errors: any;

    @checkNumberOfSeats(4)
    freeSeats: number = 2;
    // ......................................
    // @checkAmountOfFuel7
    isOpen(value: string) {
        // console.log(this.fuel);
        return this.open ? "open" : `close ${value}`;
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
const car8 = new myCar8();
car8.freeSeats = 5;
console.log(car8);
// Работаем в прототипе там значение и лежит поэтому чтобы его увидеть:
// console.log(car7.freeSeats);
console.log(car8.errors);
// errors: any;