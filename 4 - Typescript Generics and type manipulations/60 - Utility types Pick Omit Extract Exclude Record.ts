type Currencies60 = {
    usa: "usd";
    china: "cny";
    europe: "eur";
    kz: "tenge";
};

// *********************
type CurrWithoutUSA = Omit<Currencies60, "usa">; // исключение
type CurrUSAAndEurope = Pick<Currencies60, 'usa' | 'europe'>; // Фильтрация по свойству
type CountriesWithoutUSA = Exclude<keyof Currencies60, 'usa'>; // Получили union type между ключами без usa.


type FadeType = Exclude<MyAnimation, 'swipe'>; // Удаление из union type
type SwipeType = Extract<MyAnimation, 'swipe'>; // Выбор подходящего типа. Вытащить определенный тип из union type.
type SwipeType2 = Extract<MyAnimation | Direction1, 'swipe'>; // Можно и так MyAnimation | Direction1  
// *********************


type CreateCustomCurr60<T> = {
    // [P in keyof T]: string
    // [P in keyof T as MyAnimation2]: string // Можно и так
    [P in keyof T as `custom${Capitalize<string & P>}`]: string // можно так создавать менять названия ключей.
}

// *********************
type PlayersNames = 'alex' | 'john';
type CustomCurrencies60 = CreateCustomCurr60<Currencies60>;
// Record - это удобный способ сказать typescript что тут будет объект ключами котрого Record<ключи, значение>
type GameDataCurr = Record<PlayersNames, CustomCurrencies60>;


const gameData: GameDataCurr = {
    alex: {
        customChina: 'qqqq',
        customEurope: 'fefef',
        customKz: 'fereffr',
        customUsa: 'fff'
    },
    john: {
        customChina: 'qqqq',
        customEurope: 'fefef',
        customKz: 'fereffr',
        customUsa: 'fff'
    }
}
// *********************

type MyAnimation = 'fade' | 'swipe';
type Direction1 = 'in' | 'out';
type MyNewAnimation = `${MyAnimation}${Capitalize<Direction1>}`; // получаем тип "fadeIn" | "swipeIn" | "fadeOut" | "swipeOut"