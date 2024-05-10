interface ICar3 {
    fuel: string;
    open: boolean;
    freeSeats: number;
}

// Функции инициализируются снаружи во втнутрь а результат выполнения идет изнутри к внешней функции.

@changeDoorStatus(false)
@changeAmountOfFuel(95)
class myCar3 implements ICar3 {
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
// Паттерн фабрика декораторов - нам необходимо создать функцию принимающая нужные нам аргументы и которая будет просто возвращать декоратор с этими аргументами. По факту это будет паттерн в паттерне.

// Зачем ваще нужны декораторы и порядок их выполнения? -
// 1) У нас не всегда есть прямой доступ к модификации класса, не всегда мы можем что то поменять внутри объявления его сигнатруы. Иногда мы импортируем сторонний класс из других источников и можем применить декораторы чтобы что то в нем поменять 
// 2) Есть библитеки и фреймворки завязанные на декораторах например class-validator и такие инструменты могут находиться внутри вашего проекта и их придется использовать. Конкретно в class-validator декораторы служат для удобства у увелечения скорости разработки.
// 3) Все эти паттерны служат для того чтобы облегчить нам работу.
function changeDoorStatus(status: boolean) {
    console.log("door init");
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        console.log("door changed");
        return class extends constructor {
            open = status;
        }
    }
}
function changeAmountOfFuel(amount: number) {
    console.log("fuel init");
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        console.log("fuel changed");
        return class extends constructor {
            fuel = `${amount}%`;
        }
    }
}
// function closeCar3<T extends { new(...args: any[]): {} }>(constructor: T) {
//     return class extends constructor {
//         open = false;
//     }
// }
// function addFuel2(car: myCar2) {
//     car.fuel = '100%';
//     return car;
// }
const car3 = new myCar3();
console.log(car3.isOpen());