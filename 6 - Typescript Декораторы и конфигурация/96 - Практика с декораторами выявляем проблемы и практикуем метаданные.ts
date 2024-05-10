import "reflect-metadata";
interface ICuboid {
    width: number;
    length: number;
    height: number;
    calcArea: (multiply?: number) => number;
    calcVolume: (multiply?: number) => number;
}
@createdAt
class ShippingContainer implements ICuboid {
    @IsInt()
    @Min(1)
    width: number;

    @IsInt()
    @Min(1)
    length: number;

    @IsInt()
    @Min(1)
    @Max(8)
    height: number;

    constructor(width: number, length: number, height: number) {
        this.width = width;
        this.length = length;
        this.height = height;
        validate(this, 'width', width);       // this - ориентир на тот объект экземпляр который создается (ссылка на тот объект который надо провалидировать), 'width' - название свойства которое будет валидироваться, width - значение которое идет в контруктор
        validate(this, 'length', length)
        validate(this, 'height', height)
    }
    @fixLastCalculation('calcArea')
    calcArea(multiply?: number): number {
        return this.width * this.length * (multiply ? multiply : 1);
    }
    @fixLastCalculation('calcVolume')
    calcVolume(multiply?: number) {
        return this.width * this.length * this.height * (multiply ? multiply : 1);
    }
}

// 1. Необходимо создать декоратор класса, который будет записывать дату создания контейнера
// Простыми словами - создавать в нем новое свойство createdAt с датой создания экземпляра

// 2. Необходимо создать декораторы IsInt, Min и Max, которые будут валидировать свойства класса
// Применение смотрите в самом классе. При ошибке выполняйте throw new Error
// IsInt проверяет на то, что было передано целое число

// 3. Необходимо создать декоратор метода, который при каждом запуске метода будет создавать
// ИЛИ менять содержимое свойства самого класса lastCalculation
// Как значение записывать в него строку "Последний подсчет ${method} был ${Дата}",
// Где method - это название подсчета, который передается при вызове декоратора (площадь или объем)

function createdAt<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        createdAt = new Date().toLocaleString()
    }
}
// декоратор метода должен приниматть в себя 3 аргумента
function fixLastCalculation(method: string) {
    return function (
        target: Object, // Объект к которому относится этот метот к которому применим декоратор это прототип объекта поэтому до инициализации он будет пустым.
        propertyKey: string | symbol,   // Название метода который может быть строкой или символом
        descriptor: PropertyDescriptor  //  
    ): PropertyDescriptor | void {
        const oldValue = descriptor.value; // старая ссылка на метод.
        descriptor.value = function (this: any, ...args: any[]) {
            // this.lastCalculation = `Последний подсчет ${String(propertyKey)} был ${new Date().toLocaleString()}`
            this.lastCalculation = `Последний подсчет ${method} был ${new Date().toLocaleString()}`
            return oldValue.apply(this, args); // вызываем оригинальный метод уже с новыми аргументами
        }
    }
}

function IsInt() {
    return function (
        target: Object,
        propertyKey: string | symbol,
        // descriptor: PropertyDescriptor // не нужен он не существует 
    ) {
        Reflect.defineMetadata('IsInt', true, target, propertyKey)
    }
}
function Min(limit: number) {
    return function (
        target: Object,
        propertyKey: string | symbol,
    ) {
        Reflect.defineMetadata('Min', limit, target, propertyKey)
    }
}
function Max(limit: number) {
    return function (
        target: Object,
        propertyKey: string | symbol,
    ) {
        Reflect.defineMetadata('Max', limit, target, propertyKey)
    }
}
function validate(target: any, propertyKey: string, value: any): boolean {
    if (
        Reflect.getMetadata('IsInt', target, propertyKey) &&
        (!Number.isInteger(value) || value !== parseInt(value))
    ) {
        throw new Error(`свойство ${propertyKey} - не целое число`)
    }
    if (Reflect.hasMetadata('Min', target, propertyKey) &&
        value < Reflect.getMetadata('Min', target, propertyKey)
    ) {
        throw new Error(`мин значение для свойства ${propertyKey} 
        должно быть:${Reflect.getMetadata('Min', target, propertyKey)}`)
    }
    if (Reflect.hasMetadata('Max', target, propertyKey) &&
        value > Reflect.getMetadata('Max', target, propertyKey)
    ) {
        throw new Error(`макс значение для свойства ${propertyKey} 
        должно быть:${Reflect.getMetadata('Max', target, propertyKey)}`)
    }
    return true;
}
function finalValidate(obj: unknown) {
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        for (let key in obj) {
            validate(obj, key, obj[key as keyof typeof obj])
        }
    }
}


// Чтобы не пладить свойства в класс которые созданы динамически то можно создать тип
type ShippingContainerData = {
    lastCalculation: string;
    createdAt: Date;
};

//  и применить его на создании экземляра так: as ICuboid & ShippingContainerData
// Еще при использовании ручного типирования нужно быть аккуратным потому что typescript не скажет нам если в декораторах там где то свойство не совпадет по названию с типированным и на выходе будет undefined.
const container = new ShippingContainer(10, 100, 10) as ICuboid & ShippingContainerData;
container.width = 0;
container.height = 5;
console.log(container.createdAt);
console.log(container.calcVolume());
console.log(container.lastCalculation);
finalValidate(container);