import React from "react";
import { Button as MantineButton, ButtonProps } from "@mantine/core";

interface TWButtonProps extends ButtonProps {
  analyticsLabel?: string;
}

export const Button: React.FC = ({ ...props }: TWButtonProps) => {
  console.log("----------------------");
  console.log("TW Custom Button Used");
  console.log("Props", props);
  console.log("----------------------");

  if (props.analyticsLabel) {
    console.log("Analytics Label", props.analyticsLabel);
  }

  return <MantineButton {...props} />;
};
