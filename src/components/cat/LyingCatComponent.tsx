import {LyingCatSvg} from "./LyingCatSvg";
import {FartyCloudSvg} from "./FartyCloudSvg";
import {useRef} from "react";
import {throttle} from "lodash";
import {AnimatedFart} from "../animations";
import {CLOUD_UP, LEFT_CLOSED_EYE, LEFT_OPENED_EYE, RIGHT_CLOSED_EYE, RIGHT_OPENED_EYE, TONGUE_ID} from "./constants";

export const LyingCatComponent = () => {
    const ref = useRef<HTMLDivElement>(null);
    const catRef = useRef<SVGSVGElement>(null);
    const onBodyTouch = throttle((e: MouseEvent) => {
        if (!ref || !ref.current || !catRef || !catRef?.current) {
            return;
        }

        ref.current.className += CLOUD_UP;
        const tongue = catRef.current.getElementById(TONGUE_ID) as (HTMLElement | null);
        if (tongue) {
            tongue.style.visibility = "visible";
        }
        const leftClosedEye = catRef.current.getElementById(LEFT_CLOSED_EYE) as (HTMLElement | null);
        const leftOpenEye = catRef.current.getElementById(LEFT_OPENED_EYE) as (HTMLElement | null);
        if (leftClosedEye && leftOpenEye) {
            leftClosedEye.style.visibility = "visible";
            leftOpenEye.style.visibility = "hidden";
        }
        const rightClosedEye = catRef.current.getElementById(RIGHT_CLOSED_EYE) as (HTMLElement | null);
        const rightOpenEye = catRef.current.getElementById(RIGHT_OPENED_EYE) as (HTMLElement | null);
        if (rightClosedEye && rightOpenEye) {
            rightClosedEye.style.visibility = "visible";
            rightOpenEye.style.fill = "#e6b2aa";
        }

        setTimeout(() => {
            if (!ref.current) {
                return;
            }
            const currentClassname = ref.current!.className;
            if (rightClosedEye && rightOpenEye) {
                rightClosedEye.style.visibility = "hidden";
                rightOpenEye.style.fill = "black";
            }
            if (leftClosedEye && leftOpenEye) {
                leftClosedEye.style.visibility = "hidden";
                leftOpenEye.style.visibility = "visible";
            }
            if (tongue) {
                tongue.style.visibility = "hidden";
            }
            const index = currentClassname.indexOf(CLOUD_UP);
            ref.current!.className =
                currentClassname.slice(0, index).concat(currentClassname.slice(index + String(CLOUD_UP).length));
        }, 5000);
    }, 6000);

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <LyingCatSvg ref={catRef} onBodyTouch={onBodyTouch}/>
            <AnimatedFart ref={ref}>
                <FartyCloudSvg/>
            </AnimatedFart>
        </div>
    );
};