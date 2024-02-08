import React, { FC } from "react";
import { Clouds } from "../index";
import { IComponentRowProps } from "../../props";
import { ExampleBlock } from "../../ExampleBlock";

export const Example: FC<IComponentRowProps> = (props) => {
    return (
        <Clouds row={props.row}>
            <ExampleBlock />
        </Clouds>
    );
};

