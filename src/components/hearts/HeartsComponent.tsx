import {IComponentRowProps} from "../props";
import React, {useMemo, useRef} from "react";
import {useContainerSize} from "../../functions/hooks";
import {PositionedRowComponent} from "../PositionedArrayComponent";
import {LovelyContainer} from "../LovelyContainer";
import {Heart} from "./Heart";

export const HeartsComponent = (props: IComponentRowProps) => {
    const {children, color, row, density} = props;
    const ref = useRef<HTMLDivElement>(null);
    const {width, height} = useContainerSize(ref);

    const itemsArray = useMemo(() => {
        if (!width && !height) return null;
        return (
            <PositionedRowComponent
                ElementComp={Heart}
                color={color}
                density={density || "average"}
                maxTop={height}
                maxLeft={width}
                row={row}
            />
        );
    }, [width, height]);

    return (
        <LovelyContainer animationsArray={itemsArray} ref={ref}>
            {children}
        </LovelyContainer>
    );
};
