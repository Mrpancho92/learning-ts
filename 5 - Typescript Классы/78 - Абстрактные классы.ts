interface IEngine {
    model: string;
    capacity: number;
    startEngine: (time: Date) => string;
}

// Если мы ходим добавить не тип заглушку а прям готовый метод в класс то надо создать абстрактный класс c модификатором abstract. 
// Только абстрактные методы созадавать нельзя будет ошибка. Абстрактные методы могут находиться только внутри абстрактных классов.
// У абстрактных классов невозможно создать экземпляры.
// Абстрактные методы и классы исчезают при компиляции в обычный JS ну не то что исчезают они преобразются в правильный JS без модификаторов abstract.
abstract class AbstractVehicle {
    model: string;
    capacity: number;
    abstract startEngine: (time: Date) => string;
    stopEngine(time: Date): string {
        // Можно использовать абстратный метод внутри другого метода внутри самого абстрактного класса.
        this.startEngine(new Date());
        return 'Engine Stopped'
    }
}

class Vehicle extends AbstractVehicle {
    // model: string;
    // capacity: number;
    startEngine = (time: Date) => {
        return 'Started';
    }
}
