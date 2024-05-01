//  Awaited - ожидающий тип позволяет вытащить тип внутри промиса. Работает и с вложенными структурами.

type FromPromise = Awaited<Promise<Promise<number>>>;

interface User11 {
    name: string;
}

async function fetchUsers(): Promise<User11[]> {
    const users: User11[] = [
        {
            name: 'Alex'
        }
    ]
    return users;
}

const users = fetchUsers();
// Вытаскиваем то что возвращает эта функция. 
// typeof fetchUsers - получаем тип нашей функции
// ReturnType<typeof fetchUsers> - получили то что возвращает функция именно тип(Promise<User11[]>) 
type fetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

// Старые вариант как раньше писали без Awaited
type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;
type FetchDatareturntype = UnwrappedPromise<ReturnType<typeof fetchUsers>>