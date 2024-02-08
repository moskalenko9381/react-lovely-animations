import React from "react";
import {FIGURE_DENSITY, ROW_POSITION} from "../type";

export interface IFigureProps {
    color?: string;
    top?: number;
    left?: number;
    parentHeight?: number;
    parentWidth?: number;
    delay?: number;
}

export interface IComponentProps {
    children: React.ReactNode;
    color?: string;
}

export interface IComponentDensityProps extends IComponentProps {
    density?: FIGURE_DENSITY;
}

export interface IComponentRowProps extends IComponentDensityProps {
    row?: ROW_POSITION;
}