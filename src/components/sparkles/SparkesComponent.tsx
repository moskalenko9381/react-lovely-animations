import React, {useMemo, useRef} from "react";
import {Sparkle} from "./Sparkle";
import {useContainerSize} from "../../functions/hooks";
import {PositionedArrayComponent} from "../wrapper/PositionedArrayComponent";
import {LovelyContainer} from "../wrapper/LovelyContainer";
import {IComponentDensityProps} from "../props";

export const SparklesComponent = (props: IComponentDensityProps) => {
    const {children, color, density} = props;
    const ref = useRef<HTMLDivElement>(null);
    const {width, height} = useContainerSize(ref);

    const sparklesArray = useMemo(() => {
        if (!width && !height) return null;
        return (
            <PositionedArrayComponent
                ElementComp={Sparkle}
                color={color}
                density={density || "average"}
                maxTop={height}
                maxLeft={width}
            />
        );
    }, [width, height]);

    return (
        <LovelyContainer animationsArray={sparklesArray} ref={ref}>
            {children}
        </LovelyContainer>
    );
};
