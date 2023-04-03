import React from "react";
import { MantineProvider, MantineProviderProps } from "@mantine/core";

interface ComponentProviderProps extends MantineProviderProps {}

export const ComponentProvider: React.FC = ({
  ...props
}: ComponentProviderProps) => {
  return (
    <MantineProvider
      theme={{
        ...props.theme,
        /** Put your mantine theme override here */
      }}
      {...props}
    />
  );
};
