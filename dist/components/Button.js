import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Button as MantineButton } from "@mantine/core";
import { genericEventLogger } from "../helpers/genericEventLogger";
export const Button = ({ ...props }) => {
    // https://legacy.reactjs.org/warnings/unknown-prop.html
    const { analyticsLabel, analyticsPayload, ...rest } = props;
    let onClickEvent = () => {
        if (analyticsLabel)
            genericEventLogger(analyticsLabel, analyticsPayload);
        if (props.onClick)
            props.onClick();
    };
    return _jsx(MantineButton, { ...rest, onClick: onClickEvent });
};
//# sourceMappingURL=Button.js.map