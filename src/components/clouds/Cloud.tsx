import {IFigureProps} from "../props";
import {AnimatedCloud} from "../animations";
import {FirstCloudSvg} from "./svg/FirstCloudSvg";
import {SecondCloudSvg} from "./svg/SecondCloudSvg";
import {ISvgProps} from "./svg/type";
import {ComponentType} from "react";
import {ThirdCloudSvg} from "./svg/ThirdCloudSvg";

export const Cloud = (props: Pick<Required<IFigureProps>, "top" | "delay" | "parentWidth">) => {
    const {top, parentWidth, delay} = props;
    const sizeOfCloud = Math.floor(parentWidth / (Math.random() * 3 + 6));
    const array: ComponentType<ISvgProps>[] = [FirstCloudSvg, SecondCloudSvg, ThirdCloudSvg];
    const Component = array[Math.floor(Math.random() * array.length)];
    return (
        <AnimatedCloud
            $parentWidth={parentWidth ? parentWidth - sizeOfCloud / 2 : 0}
            $delay={delay}
            style={{top: `${top}px`}}
            {...props}>
            <Component width={sizeOfCloud} height={sizeOfCloud}/>
        </AnimatedCloud>
    );
};

Cloud.defaultProps = {
    top: 0,
    left: 0
};