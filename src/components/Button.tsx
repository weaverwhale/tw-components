import React from "react";
import { Button as MantineButton, ButtonProps } from "@mantine/core";

interface BaseButtonProps extends ButtonProps {}

export const Button: React.FC = ({ ...props }: ButtonProps) => {
  console.log("----------------------");
  console.log("TW Custom Button Used!");
  console.log("Props", props);
  console.log("----------------------");

  return <MantineButton {...props} />;
};
