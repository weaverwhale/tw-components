import React from "react";
import { MantineProvider, MantineProviderProps } from "@mantine/core";

interface ComponentProviderProps extends MantineProviderProps {
  darkMode?: boolean;
}

export const TWProvider: React.FC | any = ({
  ...props
}: ComponentProviderProps) => {
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      {...props}
      theme={{
        // Override any other properties from default theme
        spacing: {
          xs: "1rem",
          sm: "1.2rem",
          md: "1.8rem",
          lg: "2.2rem",
          xl: "2.8rem",
        },
        colorScheme: props.darkMode ? "dark" : "light",
      }}
    >
      {props.children}
    </MantineProvider>
  );
};
