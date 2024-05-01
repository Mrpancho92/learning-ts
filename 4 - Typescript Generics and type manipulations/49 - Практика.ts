// Задача 1
// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:
interface PlayerData<Game, Hours> {
    game: Game;
    hours: Hours;
    server: string;
}

const player1: PlayerData<string, number> = {
    game: "CS:GO",
    hours: 300,
    server: "basic",
};

const player2: PlayerData<number, string> = {
    game: 2048,
    hours: "300 h.",
    server: "arcade",
};

const player3: PlayerData<string, object> = {
    game: "Chess",
    hours: {
        total: 500,
        inMenu: 50,
    },
    server: "chess",
};
// Задача 2
// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

enum FigureNames {
    rect = "rect",
    triangle = "triangle",
    line = "line",
    circle = "circle"
}

interface RequiredFieldData {
    name: FigureNames;
}

interface AmountOfFigures {
    squares: number;
    circles: number;
    triangles: number;
    others: number;
}

function calculateAmountOfFigures<T extends RequiredFieldData>(figure: T[]): AmountOfFigures {
    let AmountOfFigures: AmountOfFigures = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0
    }
    figure.forEach(item => {
        switch (item.name) {
            case FigureNames.rect:
                AmountOfFigures.squares += 1;
                break;
            case FigureNames.circle:
                AmountOfFigures.circles += 1;
                break;
            case FigureNames.triangle:
                AmountOfFigures.triangles += 1;
                break;
            default:
                AmountOfFigures.others += 1;
        }
    })
    return AmountOfFigures;
}

const dataG = [
    {
        name: FigureNames.rect,
        data: { a: 5, b: 10 },
    },
    {
        name: FigureNames.rect,
        data: { a: 6, b: 11 },
    },
    {
        name: FigureNames.triangle,
        data: { a: 5, b: 10, c: 14 },
    },
    {
        name: FigureNames.line,
        data: { l: 15 },
    },
    {
        name: FigureNames.circle,
        data: { r: 10 },
    },
    {
        name: FigureNames.circle,
        data: { r: 5 },
    },
    {
        name: FigureNames.rect,
        data: { a: 15, b: 7 },
    },
    {
        name: FigureNames.triangle,
    },
];

console.log(calculateAmountOfFigures(dataG));