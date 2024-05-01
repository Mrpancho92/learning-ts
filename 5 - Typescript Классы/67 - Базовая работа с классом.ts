// class Box {
//     // width: number; // - использование без конструктора дает ошибку
//     width!: number; // - так мы можем избавиться от ошибки с помощью "!".
// }
// Или Споособ более глобальный это зайти в конфиг и свойство "strictPropertyInitialization": true - по началу в конфиге стоит true это значит что когда мы создаем класс все свойства должны быть инициализированы при помощи конструктора. Убрать эту настройку просто поставить в false.

//  Класс - это такой шаблон объекта, формочка для их выпекания. А конкретный объект это рабочая единица с которой можно в дальнейшем работать. Инстанс класс - т.е. его экземпляр.
class Box {
    width: number;
    height: number;
    constructor(width: number) {
        this.width = width;
        this.height = 500;
    }
}

const firstBox = new Box(250);
console.log(firstBox);
// Чтоб компиляция подтягивала файлик tsconfig.json нужно указать в самом файлике tsconfig.json в его конце поставить запятую и прописать "files": ["1-test.ts"]. И компилировать просто командой tsc без имен файлов.

class User {
    name: string;
}
const ivan = new User();
ivan.name = 'Ivan';
console.log(ivan);