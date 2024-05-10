import "reflect-metadata";
const limitMetadataKey = Symbol('limit');

interface ICar11 {
    fuel: string;
    open: boolean;
    freeSeats: number;
}
// @changeDoorStatus7(false)
// @changeAmountOfFuel7(95)
class myCar11 implements ICar11 {
    // .....................................
    // тут срабатывает конструктор хоть мы его и не видим из за современного синтаксиса
    fuel: string = '50%';
    open: boolean = false;
    errors: any;
    // @checkNumberOfSeats(4)
    freeSeats: number = 2;

    // ......................................
    // @checkAmountOfFuel7
    isOpen(value: string) {
        // console.log(this.fuel);
        return this.open ? "open" : `close ${value}`;
    }
    // Если мы хотим провалидировать аргумент функции чтоб он соответствовал каким то ограничениям на этапе передачи его в метод то мы используем декоратор. Во время работы этого декоратора мы устанавливаем определенные метаданные а после прописываем декоратор самого метода который на этапе своей работы будет проверять уже параметры на соответствие т.е. на то условие которые мы зададим.
    // Для начала надо установить в проект библитеку командой npm install reflect-metadata и использовать объект reflect.
    @validate
    startTravel(@limit passengers: number) {
        console.log(`Started with ${passengers} passengers`);
    }
}

function limit(
    target: Object,
    propertyKey: string | symbol, // ссылается на сам метод startTravel
    parameterIndex: number  // показывает номер параметра по порядку (passengers: number - будет 0 индекс, passengersNew: number - будет 1 индекс)
) {
    let limitedParametrs: number[] = Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
    limitedParametrs.push(parameterIndex);
    Reflect.defineMetadata(limitMetadataKey, limitedParametrs, target, propertyKey);
    // console.log(Reflect.getOwnMetadata("design:type", target, propertyKey));
    // console.log(Reflect.getOwnMetadata("design:paramtypes", target, propertyKey));
    // console.log(Reflect.getOwnMetadata("design:returntype", target, propertyKey));
}
function validate(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) {
    let method = descriptor.value;
    descriptor.value = function (...args: any) {
        let limitedParametrs: number[] = Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey);
        if (limitedParametrs) {
            for (let index of limitedParametrs) {
                if (args[index] > 4) {
                    throw new Error("Нельзя больше 4х пассажиров")
                }
            }
        }
        return method?.apply(this, args)
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
const car11 = new myCar11();
car11.startTravel(3);
// car11.weight = 3;
// console.log(car11.weight);
