import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { MantineProvider } from "@mantine/core";
export const ComponentProvider = ({ ...props }) => {
    return (_jsx(MantineProvider, { withNormalizeCSS: true, withGlobalStyles: true, ...props, theme: {
            // Override any other properties from default theme
            spacing: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.8rem",
                lg: "2.2rem",
                xl: "2.8rem",
            },
            colorScheme: props.darkMode ? "dark" : "light",
        }, children: props.children }));
};
//# sourceMappingURL=ComponentProvider.js.map