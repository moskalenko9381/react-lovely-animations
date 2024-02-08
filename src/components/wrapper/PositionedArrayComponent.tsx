import React from "react";
import {IFigureProps} from "../props";
import {FIGURE_DENSITY, ROW_POSITION} from "../../type";
import {usePositionsFigureArray, usePositionsOneRowFigureArray,} from "../../functions/hooks";

interface IPositionedArrayProps {
    ElementComp: React.ComponentType<IFigureProps>;
    density: FIGURE_DENSITY;
    maxTop: number;
    maxLeft: number;
    color?: string;
    row?: ROW_POSITION;
}

export const PositionedArrayComponent: React.FC<IPositionedArrayProps> = ({
    ElementComp,
    density,
    maxLeft,
    maxTop,
    color,
}) => {
    const positions = usePositionsFigureArray(
        maxTop,
        maxLeft,
        density,
    );
    return (
        <>
            {positions.map((item) => (
                <ElementComp
                    key={`${item.top}_${item.left}`}
                    top={item.top}
                    left={item.left}
                    color={color}
                    parentHeight={maxTop}
                />
            ))}
        </>
    );
};

export const PositionedRowComponent: React.FC<IPositionedArrayProps> = ({
    ElementComp,
    density,
    maxLeft,
    maxTop,
    row = "down",
    color,
}) => {
    const positions = usePositionsOneRowFigureArray(
        maxTop,
        maxLeft,
        density,
        row
    );
    return (
        <>
            {positions.map((item) => (
                <ElementComp
                    key={`${item.top}_${item.left}`}
                    top={item.top}
                    left={item.left}
                    color={color}
                    parentHeight={maxTop}
                />
            ))}
        </>
    );
};
