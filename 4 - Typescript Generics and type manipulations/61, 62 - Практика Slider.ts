interface ISlider {
    container?: string;
    numberOfSlides?: number;
    speed?: 300 | 500 | 700;
    direction?: "horizontal" | "vertical";
    dots?: boolean;
    arrows?: boolean;
    animationName?: string;
}

function createSlider({
    container = "",
    numberOfSlides = 1,
    speed = 300,
    direction = "horizontal",
    dots = true,
    arrows = true,
}: ISlider = {}): void {
    console.log(container, numberOfSlides, speed, direction, dots, arrows);
}

createSlider();

// Необходимо типизировать объект настроек, который будет зависим
// от интерфейса ISlider
// Все поля в нем обязательны для заполнения

// interface CustomSliderOptions extends ISlider {

// }
type CustomSlider<Type> = {
    [Property in keyof Type]-?: Type[Property];
};
type CustomSliderOptions = Omit<CustomSlider<ISlider>, "animationName" | "speed">;
interface CustomSliderOptionsFinal extends CustomSliderOptions {
    speed: number;
}

const customSliderOptions: CustomSliderOptionsFinal = {
    container: "id",
    numberOfSlides: 4,
    speed: 1100,
    direction: "horizontal",
    dots: true,
    arrows: true,
};

function createCustomSlider(options: CustomSliderOptions): void {
    if ("container" in options) {
        console.log(options);
    }
}
