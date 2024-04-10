// const TOP = "Top";
// const RIGHT = "Right";
// При компиляции enum превращаются в обычные функции.
// Если прописать const enum то он исчезает при компиляции вообще, можно выиграть немного по оптимизации, но использовать const enum в целом не рекомендуется.
// //  По умолчанию значения переменных enum будут начинаться с 0 и тд 1,2,3,4.... Можно навести курсором и глянуть.
// enum Directions {
// 	TOP,
// 	RIGHT,
// 	LEFT,
// 	BOTTOM
// }
// // Если хотим задать значения самостоятельно то через оператор присваивания = можно сделать так:
// enum TimingFunc {
// 	EASE = "ease",
// 	EASE_IN = `${EASE}-in`, // Разве так теперь можно делать? надо узнать))) на счет строковых enum и возможные вычисления в них.
// 	// EASE_IN = "ease-in",
// 	LINEAR = "linear"
// 	// ERROR = 5  // Можно мешать типы да, но не желательно. Лучше строки отдельно, числа отдельно.
// }
// // Если хотим задать значения самостоятельно то через оператор присваивания = можно сделать так:
// enum TimingFuncN {
// 	EASE = 1,
// 	EASE_IN = 2,
// 	LINEAR = EASE * 2
// }
// function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
// 	if (dir === Directions.RIGHT) {
// 		console.log(tFunc);
// 	}
// }
// frame("id", Directions.RIGHT, TimingFunc.EASE_IN);