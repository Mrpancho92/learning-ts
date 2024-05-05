// private, public, protected - существуют только в ts.
class Player111 {
    // Символ # делает свойство приватным в самом JS.
    // Приватное свойтсво # не поддерживается в старых стандартах.
    #login: string; // private делает свойство доступным только внутри текущего класса
    private _password: string; // private делает свойство доступным только внутри текущего класса
    public server: string;
    protected consent: boolean;
    // get и set можно менять приватные свойства 
    get password() {
        return this._password;
    }
    set password(newPass: string) {
        // validation
        this._password = newPass;
    }
}
const test = new Player111();
// test.#login // Property '#login' is not accessible outside class 'Player111' because it has a private identifier.
