import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Link as MantineLink } from "react-router-dom";
import { GenericEventLogger } from "../helpers/GenericEventLogger";
export const Link = ({ ...props }) => {
    // https://legacy.reactjs.org/warnings/unknown-prop.html
    let { analyticsLabel, analyticsPayload, ...rest } = props;
    if (!analyticsLabel)
        analyticsLabel = props.children.toString().trim();
    let onClickEvent = () => {
        if (analyticsLabel)
            GenericEventLogger(analyticsLabel, analyticsPayload);
        if (props.onClick)
            props.onClick();
    };
    return _jsx(MantineLink, { ...rest, onClick: onClickEvent });
};
//# sourceMappingURL=Link.js.map