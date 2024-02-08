import {IComponentProps} from "../props";
import React, {useMemo, useRef} from "react";
import {useContainerSize} from "../../functions/hooks";
import {LovelyContainer} from "../LovelyContainer";
import {Cloud} from "./Cloud";
import {ROW_POSITION} from "../../type";

const TOP_VALUE = (height: number, row?: ROW_POSITION) => {
    if (!row || row === "up") {
        return 0;
    }
    return row === "down" ? height * 0.8 : height / 2;
};

export const CloudComponent = (props: IComponentProps) => {
    const {children, color, row} = props;
    const ref = useRef<HTMLDivElement>(null);
    const {width, height} = useContainerSize(ref);
    const top = TOP_VALUE(height, row);

    const itemsArray = useMemo(() => {
        console.log("Width and height:", width, height);
        if (!width && !height) return null;
        const items = [];
        const len = 5;
        for (let i = 0; i < len; i++) {
            items.push(
                <Cloud parentWidth={width} top={top} delay={i * 3}/>
            );
        }
        return items;
    }, [width, height]);


    return (
        <LovelyContainer animationsArray={itemsArray} ref={ref}>
            {children}
        </LovelyContainer>
    );
};
