import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { MantineProvider } from "@mantine/core";
export const ComponentProvider = ({ ...props }) => {
    return (_jsx(MantineProvider, { withNormalizeCSS: true, withGlobalStyles: true, ...props, theme: {
            ...props.theme,
            /** Put your mantine theme override here */
        }, children: props.children }));
};
//# sourceMappingURL=ComponentProvider.js.map