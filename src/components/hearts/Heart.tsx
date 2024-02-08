import {IFigureProps} from "../props";
import {AnimatedHeart} from "../animations";

export const Heart = (props: IFigureProps) => {
    const {top, left, color, parentHeight} = props;
    return (
        <AnimatedHeart
            $y={parentHeight || 1}
            $delay={Math.random() * (10 - 0.7 + 1) + 1}
            fill={color}
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            style={{top: `${top}px`, left: `${left}px`}}
            {...props}
        >
            <path
                d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 01-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
        </AnimatedHeart>
    );
};

Heart.defaultProps = {
    top: 0,
    left: 0,
    parentHeight: 0,
    color: "#f76b8a", // pink
};
