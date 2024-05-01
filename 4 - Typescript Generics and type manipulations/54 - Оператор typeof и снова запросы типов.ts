const google1 = {
    name: 'Google',
    open: 'true'
}

// Сначала определяем тип а потом накидываем keyof.
// Если есть интерфейс у объекта то тип будет показан как интерфейс если нет то как литералы ключей объекта.
type GoogleKeys = keyof typeof google1;
const keys1: GoogleKeys = 'name';