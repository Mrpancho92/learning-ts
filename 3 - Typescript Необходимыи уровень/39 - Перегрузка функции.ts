interface Square {
    side: number;
    area: number;
}
interface Rect {
    a: number;
    b: number;
    area: number;
}
// 1) Перегрузка функции записывается всегда ДО основного тела.
// 2) Аргументы могут называться другими именами.
// 3) Все перегрузки должны быть совместимы с главной функцией.
function calculateArea(side: number): Square; // Перегрузка функции
function calculateArea(a: number, b: number): Rect; // Перегрузка функции
function calculateArea(a: number, b?: number): Square | Rect {
    if (b) {
        const rect: Rect = {
            a, b,
            area: a * b
        };
        return rect;
    } else {
        const square: Square = {
            side: a,
            area: a * a,
        };
        return square;
    }
}
calculateArea(1);
calculateArea(1, 2);