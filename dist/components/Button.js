import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Button as MantineButton } from "@mantine/core";
export const Button = ({ ...props }) => {
    console.log("----------------------");
    console.log("TW Custom Button Used");
    console.log("Props", props);
    console.log("----------------------");
    if (props.analyticsLabel) {
        console.log("Analytics Label", props.analyticsLabel);
    }
    return _jsx(MantineButton, { ...props });
};
//# sourceMappingURL=Button.js.map