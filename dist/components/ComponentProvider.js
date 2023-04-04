import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { MantineProvider } from "@mantine/core";
export const ComponentProvider = ({ ...props }) => {
    return (_jsx(MantineProvider, { withNormalizeCSS: true, withGlobalStyles: true, ...props, theme: {
            ...props.theme,
            /** Put your mantine theme override here */
        } }));
};
//# sourceMappingURL=ComponentProvider.js.map