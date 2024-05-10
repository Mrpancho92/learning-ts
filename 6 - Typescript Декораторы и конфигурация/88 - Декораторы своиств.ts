
interface ICar7 {
    fuel: string;
    open: boolean;
    freeSeats: number;
}

// @changeDoorStatus7(false)
// @changeAmountOfFuel7(95)
class myCar7 implements ICar7 {
    // .....................................
    // тут срабатывает конструктор хоть мы его и не видим из за современного синтаксиса
    fuel: string = '50%';
    open: boolean = false;
    errors: any;

    @checkNumberOfSeats(4)
    freeSeats: number;
    // ......................................
    // @checkAmountOfFuel7
    isOpen(value: string) {
        // console.log(this.fuel);
        return this.open ? "open" : `close ${value}`;
    }
}
function checkNumberOfSeats(limit: number) {
    return function (target: Object, propertyKey: string | symbol) {
        // let value: number;
        let symbol = Symbol(); // Благодаря Symbol() можено записать свойство не в прототип а в сам объект.

        const getter = function (this: any) {
            return this[symbol];
        }

        const setter = function (this: any, newAmount: number) {
            if (newAmount >= 1 && newAmount < limit) {
                // value = newAmount;
                this[symbol] = newAmount;
                // value = `value: ${newAmount}`
            } else {
                // console.log(`Больше ${limit} сидений быть не может`);
                Object.defineProperty(target, 'errors', {
                    value: `Больше ${limit} сидений быть не может`
                })
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}



function checkAmountOfFuel7<T, A extends any[], R>(
    target: (this: T, ...args: A) => R,
    context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
) {
    return function (this: T, ...args: A): R {
        // console.log(this.fuel); // не можем обратиться к чему то конкретному
        console.log(`${String(context.name)} был запущен`);
        return target.apply(this, args);
    }
}
function changeDoorStatus7(status: boolean) { // Фабрика декоратора
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
function changeAmountOfFuel7(amount: number) {
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
const car7 = new myCar7();
car7.freeSeats = 3;
console.log(car7);
// Работаем в прототипе там значение и лежит поэтому чтобы его увидеть:
// console.log(car7.freeSeats);
console.log(car7.errors);
// errors: any;
