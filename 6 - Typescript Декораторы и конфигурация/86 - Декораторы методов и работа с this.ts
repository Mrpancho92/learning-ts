
interface ICar5 {
    fuel: string;
    open: boolean;
    freeSeats: number;
}

// @changeDoorStatus5(false)
// @changeAmountOfFuel5(95)
class myCar5 implements ICar5 {
    // .....................................
    // тут срабатывает конструктор хоть мы его и не видим из за современного синтаксиса
    fuel: string = '50%';
    open: boolean = false;
    freeSeats: number;
    // ......................................
    @checkAmountOfFuel5
    isOpen(value: string) {
        // console.log(this.fuel);
        return this.open ? "open" : `close ${value}`;
    }
}
// декоратор метода должен приниматть в себя 3 аргумента
function checkAmountOfFuel5(
    target: Object, // Объект к которому относится этот метот к которому применим декоратор это прототип объекта поэтому до инициализации он будет пустым.
    propertyKey: string | symbol,   // Название метода который может быть строкой или символом
    descriptor: PropertyDescriptor  //  
): PropertyDescriptor | void {
    // descriptor.enumerable = false;
    const oldValue = descriptor.value; // старая ссылка на метод.
    descriptor.value = function (this: any, ...args: any[]) {
        console.log(this.fuel);
        return oldValue.apply(this, args); // вызываем метод класса
        // console.log(this.fuel);
        // return this.open ? "open" : "close"
    }
}

function changeDoorStatus5(status: boolean) { // Фабрика декоратора
    console.log("door init");
    return <T extends { new(...args: any[]): {} }>(
        target: T,
        context: ClassDecoratorContext<T>
    ) => { // Сам декоратор
        console.log("door changed");
        return class extends target {
            open = status;
        }
    }
}
function changeAmountOfFuel5(amount: number) {
    console.log("fuel init");
    return <T extends { new(...args: any[]): {} }>(
        target: T,
        context: ClassDecoratorContext<T>) => {
        console.log("fuel changed");
        return class extends target {
            fuel = `${amount}%`;
        }
    }
}
const car5 = new myCar5();
console.log(car5.isOpen('checked'));