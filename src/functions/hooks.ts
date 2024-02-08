import {RefObject, useEffect, useLayoutEffect, useState,} from "react";
import {FIGURE_DENSITY, FigureStep, ROW_POSITION} from "../type";

export function useContainerSize(ref: RefObject<HTMLDivElement> | null) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        if (!ref || !ref.current) {
            console.log("No element");
            return;
        }
        const element = ref.current;
        const observer = new ResizeObserver(() => {
            console.log("New height");
            setHeight(element.clientHeight);
            setWidth(element.clientWidth);
        });

        observer.observe(element);
        setHeight(element?.clientHeight);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return {width, height};
}

export const usePositionsFigureArray = (
    maxTop: number,
    maxLeft: number,
    density: FIGURE_DENSITY
) => {
    const [lastMaxTop, setLastMaxTop] = useState(0);
    const [lastMaxLeft, setLastMaxLeft] = useState(0);
    const [array, setArray] = useState<{ top: number; left: number }[]>([]);

    useEffect(() => {
        const step = FigureStep[density];
        let newArray: { top: number; left: number }[] = [];
        const hInitial = lastMaxTop < maxTop ? lastMaxTop : 0;
        newArray = array.length ? getNewPositionedArray(array,
                lastMaxTop, maxTop,
                lastMaxLeft, maxLeft,
                step, hInitial)
            : fillArray(
                0,
                maxTop,
                0,
                maxLeft,
                step,
            );
        setArray(newArray);
        setLastMaxLeft(maxLeft);
        setLastMaxTop(maxTop);
    }, [density, lastMaxTop, lastMaxLeft, maxTop, maxLeft]);

    console.log("Positions:", array);
    return array;
};

export const usePositionsOneRowFigureArray = (
    maxTop: number,
    maxLeft: number,
    density: FIGURE_DENSITY,
    row: ROW_POSITION,
) => {
    const [lastMaxTop, setLastMaxTop] = useState(0);
    const [lastMaxLeft, setLastMaxLeft] = useState(0);
    const [array, setArray] = useState<{ top: number; left: number }[]>([]);

    useEffect(() => {
        const step = FigureStep[density];
        let newArray: { top: number; left: number }[] = [];
        const hInitial =
            // eslint-disable-next-line no-nested-ternary
            row === "up"
                ? 0
                : row === "middle"
                    ? Math.floor(maxTop) / 2
                    : maxTop - 1;
        newArray = array.length
            ? getNewPositionedArray(
                array,
                lastMaxTop,
                maxTop,
                lastMaxLeft,
                maxLeft,
                step,
                hInitial,
            )
            : fillArray(hInitial, maxTop, 0, maxLeft, step);
        setArray(newArray);
        setLastMaxLeft(maxLeft);
        setLastMaxTop(maxTop);
    }, [density, lastMaxTop, lastMaxLeft, maxTop, maxLeft]);

    console.log("Positions:", array);
    return array;
};

function fillArray(
    heightInitial: number,
    heightMax: number,
    widthInitial: number,
    widthMax: number,
    step: number,
) {
    const array = [];
    for (let height = heightInitial; height < heightMax; height += step) {
        for (let width = widthInitial; width < widthMax; width += step) {
            const top =
                Math.random() * (height + step / 2 - (height - step / 2) + 1) +
                (height - step / 2);
            const left =
                Math.random() * (width - (width - step / 2) + 1) +
                (width - step / 2);
            array.push({top, left});
        }
    }
    return array;
}

function getNewPositionedArray(array: { top: number; left: number }[],
                               lastMaxTop: number, maxTop: number,
                               lastMaxLeft: number, maxLeft: number,
                               step: number, hInitial: number) {
    let newArray = [...array];
    if (lastMaxTop > maxTop) {
        // new height is less
        newArray = newArray.filter((item) => item.top < maxTop + step);
    }
    if (lastMaxLeft > maxLeft) {
        // new width is less
        newArray = newArray.filter(
            (item) => item.left < maxLeft + step,
        );
    }
    if (lastMaxTop < maxTop || lastMaxLeft < maxLeft) {
        const wInitial = lastMaxLeft < maxLeft ? lastMaxLeft : 0;
        const newPartOfArray = fillArray(
            hInitial,
            maxTop,
            wInitial,
            maxLeft,
            step,
        );
        newArray.push(...newPartOfArray);
    }
    return newArray;
}
