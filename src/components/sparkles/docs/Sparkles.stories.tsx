import type { Meta, StoryObj } from "@storybook/react";
import {Example} from "./Example";

const meta: Meta<typeof Example> = {
    title: "Components/Sparkles",
    component: Example,
    parameters: {
        layout: "centered",
    },
};
type Story = StoryObj<typeof Example>;

export const Pink_Rare: Story = {
    args: {
        density: "rare",
        color: "pink"
    },
};

export const Yellow_Average: Story = {
    args: {
        density: "average",
        color: "yellow"
    },
};

export const Blue_Often: Story = {
    args: {
        density: "often",
        color: "blue"
    },
};
export default meta;