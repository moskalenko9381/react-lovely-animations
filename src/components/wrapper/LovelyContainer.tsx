import {AnimationWrapper, MainWrapper} from "./Wrapper";
import React, {ForwardedRef} from "react";

interface IProps {
    children: React.ReactNode;
    animationsArray: React.ReactNode;
}

export const LovelyContainer = React.forwardRef(
    (props: IProps, ref: ForwardedRef<HTMLDivElement>) => {
        const {children, animationsArray} = props;
        return (
            <MainWrapper $padding={"1em"}>
                <AnimationWrapper>{animationsArray}</AnimationWrapper>
                <MainWrapper className="child-wrapper" ref={ref}>
                    {children}
                </MainWrapper>
            </MainWrapper>
        );
    },
);
