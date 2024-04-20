// Когда мы четко понимает что за объект будет как аргумент функции и он больше нигде не будет использоватсья то можно сделать запрос типов function fname (data: typeof dataFromControl).

const dataFromControl = {
    water: 200,
    el: 350
}

function checkreadings(data: typeof dataFromControl): boolean {
    const dataFromUser = {
        water: 200,
        el: 350
    };

    if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
        return true;
    } else return false;
}

const PI = 3.14;
let PIClone: typeof PI;