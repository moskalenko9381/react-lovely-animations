import type { Meta, StoryObj } from "@storybook/react";
import {Example} from "./Example";
import {LyingCat} from "../../cat";

const meta: Meta<typeof Example> = {
    title: "Components/Clouds",
    component: Example,
    parameters: {
        layout: "centered",
    },
};
type Story = StoryObj<typeof Example>;

export const Up: Story = {
    args: {
        row: "up"
    },
};

export const Middle: Story = {
    args: {
        row: "middle"
    },
};

export const Down: Story = {
    args: {
        row: "down"
    },
};
export default meta;