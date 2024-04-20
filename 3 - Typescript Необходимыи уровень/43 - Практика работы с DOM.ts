// const formData = {
//     email: "",
//     title: "",
//     text: "",
//     checkbox: false,
// };

// // Последовательность действий:
// // 1) Происходит submit любой из форм
// // 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// // 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// // 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

// function validateFormData(data) {
//     // Если каждое из свойств объекта data правдиво...
//     if ("condition") {
//         return true;
//     } else {
//         console.log("Please, complete all fields");
//         return false;
//     }
// }

// function checkFormData(data) {
//     const { email } = data;
//     const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

//     // Если email совпадает хотя бы с одним из массива
//     if ("condition") {
//         console.log("This email is already exist");
//     } else {
//         console.log("Posting data...");
//     }
// }


// Решение из ответов.
// const forms = document.querySelectorAll("form");
// const email = document.querySelector("#email") as HTMLInputElement;
// const title = document.querySelector("#title") as HTMLInputElement;
// const text = document.querySelector("#text") as HTMLTextAreaElement;
// const checkbox = document.querySelector("#checkbox") as HTMLInputElement;

// interface IFormData {
// 	email: string;
// 	title: string;
// 	text: string;
// 	checkbox: boolean;
// }

// const formData: IFormData = {
// 	email: "",
// 	title: "",
// 	text: "",
// 	checkbox: false,
// };

// forms.forEach((form) =>
// 	form.addEventListener("submit", (e) => {
// 		e.preventDefault();

// 		// Можно и создавать другой объект для соблюдения иммутабельности, но пока не обязательно
// 		formData.email = email?.value ?? "";
// 		formData.title = title?.value ?? "";
// 		formData.text = text?.value ?? "";
// 		formData.checkbox = checkbox?.checked ?? false;

// 		if (validateFormData(formData)) {
// 			checkFormData(formData);
// 		}
// 	})
// );

// function validateFormData(data: IFormData): boolean {
// 	// Если каждое из свойств объекта правдиво...
// 	if (Object.values(data).every((value) => value)) {
// 		return true;
// 	} else {
// 		console.log("Please, complete all fields");
// 		return false;
// 	}
// }

// function checkFormData(data: IFormData) {
// 	const { email } = data;
// 	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

// 	if (emails.some((e) => e === email)) {
// 		console.log("This email is already exist");
// 	} else {
// 		console.log("Posting data...");
// 	}
// }

//  Моё решение
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
interface FormsData {
    email: string,
    title: string,
    text: string,
    checkbox: boolean,
}
const formData: FormsData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};
const form = document.querySelectorAll('form');
form[0]?.addEventListener('submit', (e) => {
    e.preventDefault();
})
form[1]?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email') as HTMLInputElement,
        title = document.getElementById('title') as HTMLInputElement,
        text = document.getElementById('text') as HTMLTextAreaElement,
        checkbox = document.getElementById('checkbox') as HTMLInputElement;
    if (title && text && checkbox && email) {
        formData.email = email.value;
        formData.title = title.value;
        formData.text = text.value;
        formData.checkbox = checkbox.checked;
        validateFormData(formData);
    }
})

function validateFormData(data: FormsData): boolean {
    // Если каждое из свойств объекта data правдиво...
    if (data.email && data.title && data.text && data.checkbox === true) {
        console.log(true);
        checkFormData(data);
        return true;
    } else {
        console.log("Please, complete all fields");
        return false;
    }
}

function checkFormData(data: FormsData): void {
    const { email } = data;
    const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    // Если email совпадает хотя бы с одним из массива
    for (let i = 0; i < emails.length; i++) {
        if (email === emails[i]) {
            console.log("This email is already exist");
            break;
        } else if (i === emails.length - 1) {
            console.log("Posting data...");
        }
    }
}
