import type { Meta, StoryObj } from "@storybook/react";
import {Example} from "./Example";

const meta: Meta<typeof Example> = {
    title: "Components/Hearts",
    component: Example,
    parameters: {
        layout: "centered",
    },
};
type Story = StoryObj<typeof Example>;

export const White_Rare: Story = {
    args: {
        density: "rare",
        color: "white"
    },
};

export const Blue_Average: Story = {
    args: {
        density: "average",
        color: "blue"
    },
};

export const Red_Often: Story = {
    args: {
        density: "often",
        color: "red"
    },
};
export default meta;