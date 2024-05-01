type Currencies1 = {
    usa: "usd";
    china: "cny";
    europe: "eur";
    kz: "tenge";
};

type CreateCustomCurr1<T> = {
    // [P in keyof T]: string
    // [P in keyof T as MyAnimation2]: string // Можно и так
    [P in keyof T as `custom${Capitalize<string & P>}`]: string // можно так создавать менять названия ключей.
}

type CustomCurrencies1 = CreateCustomCurr1<Currencies1>;

type MyAnimation1 = 'fade';
type MyNewAnimation1 = `${MyAnimation1}In`; // Получаем тип fadeIn
type MyAnimation2 = 'fade' | 'swipe';
type MyNewAnimation2 = `${MyAnimation2}In`; // Получаем тип "fadeIn" | "swipeIn"
type Direction = 'in' | 'out';
type MyNewAnimation3 = `${MyAnimation2}${Direction}`; // Получаем тип "fadein" | "fadeout" | "swipein" | "swipeout"
// есть специальные дженерики внутри шаблонных строк uppercase lowercase Capitalize incapitalize
// Capitalize - делает первую букву в CamelCase. Этот дженерик только на строках.
type MyNewAnimation4 = `${MyAnimation2}${Capitalize<Direction>}`; // получаем тип "fadeIn" | "swipeIn" | "fadeOut" | "swipeOut"
