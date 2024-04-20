interface Car {
    name: 'car';
    engine: string;
    wheels: {
        number: number;
        type: string;
    }
}
interface Ship {
    name: 'ship';
    engine: string;
    sail: string;
}
interface Airplane {
    name: 'airplane';
    engine: string;
    wings: string;
}
interface SuperAirPlane {
    name: 'smth';
    engine: string;
    wings: string;
}
type Vehicle = Car | Ship | Airplane | SuperAirPlane;

function repairVehicle(vehicle: Vehicle) {
    // if (isCar(vehicle)) {
    //     vehicle.wheels
    // } else if (isShip(vehicle)) {
    //     vehicle.sail
    // } else {
    //     // const smth: never = vehicle;
    //     vehicle.wings;
    // }

    // Тип never нужен чтобы увидеть ошибку на этапе разработки.
    // В данном примере если убрать какой нить кейс то переменная smth выдаст ошибку, потому что условие станет доступным а тип never это недостижимый код. 
    switch (vehicle.name) {
        case 'car':
            console.log(vehicle.wheels);
            break;
        case 'ship':
            console.log(vehicle.sail);
            break;
        case 'airplane':
            console.log(vehicle.wings);
            break;
        case 'smth':
            console.log(vehicle.wings);
            break;
        default:
            const smth: never = vehicle;
            console.log('Ouuuups!');
    }
}
function isCar(car: Vehicle): car is Car {
    // return "wheels" in car;
    return (car as Car).wheels.number !== undefined;
}
function isShip(ship: Vehicle): ship is Ship {
    // return "wheels" in car;
    return "sail" in ship;
}