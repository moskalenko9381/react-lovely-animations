import {AnimatedSparkle} from "../animations";
import {IFigureProps} from "../props";

export const Sparkle = (props: IFigureProps) => {
    const {top, left, color} = props;
    return (
        <AnimatedSparkle
            $delay={Math.random() * (10 - 0.1 + 1) + 1}
            fill={color}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            style={{top: `${top}px`, left: `${left}px`}}
        >
            <path
                d="M12 3l-1.9 5.8a2 2 0 01-1.287 1.288L3 12l5.8 1.9a2 2 0 011.288 1.287L12
                21l1.9-5.8a2 2 0 011.287-1.288L21 12l-5.8-1.9a2 2 0 01-1.288-1.287z"
            />
        </AnimatedSparkle>
    );
};

Sparkle.defaultProps = {
    top: 0,
    left: 0,
    color: "rgb(247,191,11)",
};
