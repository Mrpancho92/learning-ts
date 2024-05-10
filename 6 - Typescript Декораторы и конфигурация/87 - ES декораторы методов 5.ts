
interface ICar6 {
    fuel: string;
    open: boolean;
    freeSeats: number;
}

@changeDoorStatus6(false)
@changeAmountOfFuel6(95)
class myCar6 implements ICar6 {
    // .....................................
    // тут срабатывает конструктор хоть мы его и не видим из за современного синтаксиса
    fuel: string = '50%';
    open: boolean = false;
    freeSeats: number;
    // ......................................
    @checkAmountOfFuel6
    isOpen(value: string) {
        // console.log(this.fuel);
        return this.open ? "open" : `close ${value}`;
    }
}
// из функции декоратора теперь нужно возвращать функцию
// function checkAmountOfFuel6(
//     target: any,
//     context: ClassMethodDecoratorContext
// ) {
//     return function (this: any, ...args: any[]) {
//         console.log(this.fuel);
//         return target.apply(this, args);
//     }
// }
//  Напишем более типизированный декоратор
function checkAmountOfFuel6<T, A extends any[], R>(
    target: (this: T, ...args: A) => R,
    context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
) {
    return function (this: T, ...args: A): R {
        // console.log(this.fuel); // не можем обратиться к чему то конкретному
        console.log(`${String(context.name)} был запущен`);
        return target.apply(this, args);
    }
}





function changeDoorStatus6(status: boolean) { // Фабрика декоратора
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
function changeAmountOfFuel6(amount: number) {
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
const car6 = new myCar6();
console.log(car6.isOpen('checked'));