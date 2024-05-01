const arr10: Array<number> = [1, 2, 3];
const arr11: number[] = [1, 2, 3];

const roarr: ReadonlyArray<string> = ['dsdsds'];
// roarr[0] = 'deded'; // нелья перезаписать элемент массива с помощью встроенного дженерика ReadonlyArray.

interface IState {
    readonly data: {
        name: string
    },
    tag?: string
}

// Все свойства Partial не обязательны. Поэтому при использовании только data без tag не вызывает ошибку. 
// Partial делает не обязательными все свойства т.е. можно навести на data и увидеть optional оператор.
const state: Partial<IState> = {
    data: {
        name: 'John'
    }
}
// Required наоборот делает все свойства обязательными. 
const strictstate: Required<IState> = {
    data: {
        name: 'fdfd'
    },
    tag: 'dcsdcsd'
}
// strictstate.data = 'dafs' // ошибка потому что совойство readonly 

function action(state: Readonly<IState>) {
    // state.data = 'abc'; // нельзя изменить объект на верхнем уровне.
    state.data.name = 'abc'; //  так можно изменить на более глубоком уровне. Readonly - только на верхнем уровне.
}
