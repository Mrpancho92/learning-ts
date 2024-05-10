interface ICar2 {
    fuel: string;
    open: boolean;
    freeSeats: number;
}

@closeCar2
class myCar2 implements ICar2 {
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
// function closeCar2(constructor: Function) {
//     constructor.prototype.open = false;   
// }
// необходимо создать декоратор который будет менять свойства уже после этапа конструирования класса
// Основным отличием будет то что наш декоратор превратится в дженерик
// Это базовая запись которая используется при работе с классами 
function closeCar2<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        open = false;
    }
}
// function addFuel2(car: myCar2) {
//     car.fuel = '100%';
//     return car;
// }
const car = new myCar2();
console.log(car.isOpen());