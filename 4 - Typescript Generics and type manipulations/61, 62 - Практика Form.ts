// Задача:
interface IForm {
	login: string;
	// password: Omit<Props, "errorMsg">;
	password: string;
}
// type Props = {
// 	isValid: boolean;
// 	errorMsg: string;
// }
type Validation<T> = {
	[P in keyof T]: { isValid: true } | { isValid: false; errorMsg: string };
};
// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

const validationData: Validation<IForm> = {
	login: { isValid: false, errorMsg: "At least 3 characters" },
	password: { isValid: true },
};
