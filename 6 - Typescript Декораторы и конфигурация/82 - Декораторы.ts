// Декоратор - это функция которая может модифицировать объект.
const myCar = {
    fuel: '50%',
    open: true,
    freeSeats: 3,
    isOpen() {
        console.log(this.fuel);
        return this.open ? "open" : "close"
    },
}
// Функция closeCar называется декоратором. Мы провели модификацию и вернули объект но уже с какими то изменениями, т.е. мы задекорировали этот объект. Такая функция и называется декоратором.
function closeCar(car: typeof myCar) {
    car.open = false;
    console.log('close car');
    return car;
}
console.log(closeCar(myCar).isOpen());
// Дальше мы можем комбинировать декораторы проводя композицию декораторов. Композиция по простому это когда функция запускается внутри другой функции пример - f(x(y())). Результат мы получаем сначала из внутренней и по пути к крайней функции. Сначала результат y() потом x() потом f().
function addFuel(car: typeof myCar) {
    car.fuel = '100%';
    console.log('add fuel');
    return car;
}
console.log(addFuel(closeCar(myCar)).isOpen());  // Композиция двух функций.



