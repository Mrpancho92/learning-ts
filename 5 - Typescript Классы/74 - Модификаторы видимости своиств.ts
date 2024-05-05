// По умолчанию свойство public.
class Player {
    private login: string; // private делает свойство доступным только внутри текущего класса
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

class CompatitivePlayer extends Player {
    rank: number;

    private isConsented() { // private можно использовать и для методов
        this.consent ? "Yes" : "No";
    }
    isConsented2() {
        this.consent ? "Yes" : "No";
    }

}

const player = new Player();
player.server = 'qewrqrqer'; // можно спокойно поменять свойство server
// player.login = 'qewrqrqer'; // нельзя поменять свойство login так как оно указано что private
player.password = '1qaz'; // поменяли с помощью get и set
const compatitivePlayer = new CompatitivePlayer();
compatitivePlayer.isConsented2(); // isConsented() нет доступа снаружи, isConsented2() - есть доступ т.к. публичное.


// Интересный пример со свойством public
// class User {
//     public email: string;
//     public name: string;

//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
// Теперь тоже самое то что выше только короче с использованием public.
// class User {
//     constructor(public email: string, public name: string){}
// }