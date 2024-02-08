import React, {FC} from "react";
import {IComponentDensityProps} from "../../props";
import {ExampleBlock} from "../../ExampleBlock";
import {Hearts} from "../index";

export const Example: FC<IComponentDensityProps> = (props) => {
    return (
        <Hearts color={props.color} density={props.density}>
            <ExampleBlock />
        </Hearts>
    );
};