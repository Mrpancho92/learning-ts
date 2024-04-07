// Можно отдельно прописывать типы данных. tyoe.
// Еасли скопилировать в js код то там type нету они существуют только внутри ts.

type AnimatonTimingFunc = "ease" | "ease-out" | "ease-in";
type ID = string | number;

function createAnimation(
    id: ID,
    animate: string,
    timingFunc: AnimatonTimingFunc = "ease",
    duration: number,
    iterCount: "infinite" | number
): void {
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    // if (elem) {
        console.log(`${animate} ${timingFunc} ${duration} ${iterCount}`);
        // elem.style.animation = `${animate} ${timingFunc} ${duration} ${iterCount}`;
    // }
}
createAnimation('id', 'fade', 'ease', 5, 'infinite');