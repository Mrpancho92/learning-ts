class Box1 {
    width: number;
    height: number;
    vloume: string;
    // Для конструктора класса можно делать перегрузки
    constructor(volume: string)
    constructor(width: number)
    constructor(widthOrVolume: number | string) {
        // super() // - есди есть наследование и он используется перед this.
        // Используем простой тайпГард:
        if (typeof widthOrVolume === 'number') {
            this.width = widthOrVolume
        } else {
            this.vloume = widthOrVolume;
        }
        this.height = 500;
    }
}
// class Box2<T> {// так допускается
//     width: T; // так допускается
//     height: number;
//     constructor(width: number) { // Дженерики не используются в конструкторах будет ошибка
//         this.width = width;
//         this.height = T; // нельзя использовать как значение потому что мы передаем Тип а не значение. Тип удаляется при компиляции
//     }
// }