import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Button as MantineButton } from "@mantine/core";
import { AnalyticsEvent } from "../helpers/AnalyticsEvent";
export const Button = ({ ...props }) => {
    console.log("----------------------");
    console.log("TW Custom Button Used!");
    console.log("Props", props);
    console.log("----------------------");
    let onClickEvent = () => {
        if (props.analyticsLabel)
            AnalyticsEvent(props.analyticsLabel);
        if (props.onClick)
            props.onClick();
    };
    return _jsx(MantineButton, { ...props, onClick: onClickEvent });
};
//# sourceMappingURL=Button.js.map