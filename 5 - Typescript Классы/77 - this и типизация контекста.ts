function setName333() {
    return 'COOD';
}
class Player333 {
    private static game: string = "COD2";

    #login: string;
    private _password: string;
    public server: string;
    protected consent: boolean;

    constructor(login: string) {
        this.#login = login;
    }

    static {
        Player333.game = setName333();
    }

    get password() {
        return this._password;
    }
    set password(newPass: string) {
        // validation
        this._password = newPass;
    }

    static getGameName() {
        return Player333.game;
    }

    // Можно аннотировать контекст чтоб увидеть ошибку потери контекста если не использовать bind.
    // login(this: Player333 ) {
    //     return `Player ${this.#login} online`;
    // }
    // Стрелочная функция как выход не использовать bind. При использовании стрелочной функции контекст(this) будет сам привязан к экземпляру за счет стрелочной функции.
    logIn = () => {
        return `Player ${this.#login} online`;
    }

    // Из методов можем возвращать this для создания ченингов (цепочек).
    // connect(): Player333 - так не стоит делать и в комбинцаии с разным функционалом может давать ошибки
    connect() {
        // Do smth (какие то действия выполняет пользователь)
        return this;
    }

    // typeGuard. Метод будет возращать явлется ли this потомком этого класса или нет.
    isPro(): this is CompetitivePlayer333 {
        return this instanceof CompetitivePlayer333;
    }
}
const player = new Player333('test');
console.log(player.logIn());
console.log(player.connect().logIn()); // пример ченинга так же будет работать и у наследника
// Созданим переменную в которую поместим ссылку на функцию
const test333 = player.logIn;
// Можем запустить эту функци дальше в нашем функционале
test333(); // будет ошибка из за потери контекста this. Получится: undefined.#login но это бдует работать если используется стрелочная функция login в классе Player333.

// Исправить ситуацию можно привязав жестко контекст.
const test2 = player.logIn.bind(player); // Тут создается новая функция а bind() возвращает новую функцию контекст(this) которой жестко привязан к объекту player который уже является экземпляром класса Player333.
test2();

// При стрелочной login есть ньюанс при наследовании. Стрелочная функция не записывается в прототип из которго берется уже super.logIn(). И если его нет в прототипе то мы и не можем его получить через super т.е. он не виден у потомков. Решением можно использовать this.logIn().
class CompetitivePlayer333 extends Player333 {
    rank: number;

    checkLogin() {
        return this.logIn();
    }
}
const player2 = new CompetitivePlayer333('test2');
console.log(player2.checkLogin());
console.log(player2.connect().logIn());  // ченинг у наследника

// Использование typeGuard.
const somePlayer: Player333 | CompetitivePlayer333 = new CompetitivePlayer333("Test3");
somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer); // проверка является ли somePlayer потомком какого либо из этих классов т.е. К какому из классов относится объект somePlayer.