function setName() {
    return 'COOD';
}
class Player222 {
    static game: string = "COD"; // при static свойство можно использовать без создания экземпляра т.е. без new ну и нельзя использовать названия которые уже зарезервированы в классе. К static можно применять private свойства.
    private static game2: string = "COD2";

    #login: string;
    private _password: string; // private делает свойство доступным только внутри текущего класса
    public server: string;
    protected consent: boolean;

    // private constructor() {}  // ЗАПРЕТИТЬ СОЗДАНИЕ НОВОГО ЭКЗЕМПЛЯРА при попмощи new. И запретить наследоваться от него.
    // protected constructor() {}  // В таком случае наследоваться можно, но создавать экземпляры у наследников и этого же класса будет нельзя.

    // Есть статичные блоки их может быть несколько. Он запускается один раз при вызове и все. Установливает значения свойств один раз при вызове.
    static {
        Player222.game2 = setName();
    }

    // constructor(game: string) {
    //     Player222.game2 = game;  // будет всегда меняться статичное свойство при создании нового экземпляра
    // }

    // get и set можно менять приватные свойства 
    get password() {
        return this._password;
    }
    set password(newPass: string) {
        // validation
        this._password = newPass;
    }

    static getGameName() {
        // В теории можно и this.game2 - но в this может и не быть такого свойства. Лучше всегда обращаться напрямую к классу где было задано это статичное свойство.
        return Player222.game2;
    }
}
console.log(Player222.game); // пример использования static свойства.
console.log(Player222.getGameName());

