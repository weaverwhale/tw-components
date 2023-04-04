import React from "react";
import { MantineProvider, MantineProviderProps } from "@mantine/core";

interface ComponentProviderProps extends MantineProviderProps {}

export const ComponentProvider: React.FC | any = ({
  ...props
}: ComponentProviderProps) => {
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      {...props}
      theme={{
        ...props.theme,
        /** Put your mantine theme override here */
      }}
    >
      {props.children}
    </MantineProvider>
  );
};
