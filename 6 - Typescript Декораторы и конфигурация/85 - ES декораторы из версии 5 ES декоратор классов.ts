// Настройка в tsconfig.json а именно "experimentalDecorators": true говорит нам о том что мы используем старый экспериментальный синтаксис но с 5 версии появился новый синтаксис. Для его применения необходимо поменять отключить "experimentalDecorators": false.
interface ICar4 {
    fuel: string;
    open: boolean;
    freeSeats: number;
}

@changeDoorStatus4(false)
@changeAmountOfFuel4(95)
class myCar4 implements ICar4 {
    // .....................................
    // тут срабатывает конструктор хоть мы его и не видим из за современного синтаксиса
    fuel: string = '50%';
    open: boolean = true;
    freeSeats: number;
    // ......................................
    isOpen() {
        console.log(this.fuel);
        return this.open ? "open" : "close"
    }
}

// function changeDoorStatus(status: boolean) {
//     console.log("door init");
//     return <T extends { new(...args: any[]): {} }>(constructor: T) => {
//         console.log("door changed");
//         return class extends constructor {
//             open = status;
//         }
//     }
// }
// function changeAmountOfFuel(amount: number) {
//     console.log("fuel init");
//     return <T extends { new(...args: any[]): {} }>(constructor: T) => {
//         console.log("fuel changed");
//         return class extends constructor {
//             fuel = `${amount}%`;
//         }
//     }
// }

// Новый синтаксис декораторов:

function changeDoorStatus4(status: boolean) { // Фабрика декоратора
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
function changeAmountOfFuel4(amount: number) {
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
const car4 = new myCar4();
console.log(car4.isOpen());