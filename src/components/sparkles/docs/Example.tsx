import React, {FC} from "react";
import {IComponentDensityProps} from "../../props";
import {ExampleBlock} from "../../ExampleBlock";
import {Sparkles} from "../index";

export const Example: FC<IComponentDensityProps> = (props) => {
    return (
        <Sparkles color={props.color} density={props.density}>
            <ExampleBlock />
        </Sparkles>
    );
};