const fetchData = (url: string, method: "GET" | "POST"): void => {
    console.log(method);
}

const reqOptions = {
    url: "https://someurl.com",
    method: "GET",
} as const;

const str = "str";
const method = "GET";

fetchData("qqq", "GET");
// fetchData(reqOptions.url, reqOptions.method as "GET");
// fetchData(reqOptions.url, <"GET">reqOptions.method);
fetchData(reqOptions.url, reqOptions.method);

const box = document.querySelector(".box") as HTMLElement;
const input = <HTMLInputElement>document.querySelector("input");

const someNumber: number = +input.value;
// const someNumber: number = input.value as any as number; // так тоже можно записать

console.log(someNumber.toFixed());

let a1 = 'value' as const;
let b1 = { f: 100 } as const;
let c1 = [] as const;

let value = 'value';
let arr1 = ['sd', 'dff'];
let obj = { f: 100 };

// let T0 = obj as const;  нельзя так утверждать по ссылке, только напрямую присваивая значение и рядом as const.

// let T5 = (Math.round(Math.random() * 1) ? 'yes' : 'no') as const; // Будет ошибка так как ts не знает какое значение будет точно на выходе условия заранее.