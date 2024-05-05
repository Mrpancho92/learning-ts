interface IUser {
    login: string;
    password: string;
    token?: number; // Необязательное свойство не переносится в класс его нужно будет добавить в ручную.
}
interface IValidation {
    valid: boolean;
    isValid: (data: string) => boolean;
}

class UserForm implements IUser, IValidation {
    login: string;
    password: string;
    valid: boolean = false;
    token: number;  // Добавление необязательного свойства от интерфейса IUser.

    isValid(login: string) {  // Нужно обязательно указать тип принимающего значения.
        return login.length > 3;
    }
}
console.log(new UserForm().isValid('dw'));