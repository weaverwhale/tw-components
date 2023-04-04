import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Button as MantineButton } from "@mantine/core";
import { AnalyticsEvent } from "../helpers/AnalyticsEvent";
export const Button = ({ ...props }) => {
    console.log("----------------------");
    console.log("TW Custom Button Used!");
    console.log("Props", props);
    console.log("----------------------");
    // https://legacy.reactjs.org/warnings/unknown-prop.html
    const { analyticsLabel, analyticsPayload, ...rest } = props;
    let onClickEvent = () => {
        if (analyticsLabel)
            AnalyticsEvent(analyticsLabel, analyticsPayload);
        if (props.onClick)
            props.onClick();
    };
    return _jsx(MantineButton, { ...rest, onClick: onClickEvent });
};
//# sourceMappingURL=Button.js.map