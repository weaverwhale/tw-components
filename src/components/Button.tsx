import React from "react";
import { Button as MantineButton, ButtonProps } from "@mantine/core";
import { AnalyticsEvent } from "../helpers/AnalyticsEvent";

interface TWButtonProps extends ButtonProps {
  analyticsLabel?: string;
  onClick?: () => void;
}

export const Button: React.FC = ({ ...props }: TWButtonProps) => {
  console.log("----------------------");
  console.log("TW Custom Button Used!");
  console.log("Props", props);
  console.log("----------------------");

  let onClickEvent = () => {
    if (props.analyticsLabel) AnalyticsEvent(props.analyticsLabel);
    if (props.onClick) props.onClick();
  };

  return <MantineButton {...props} onClick={onClickEvent} />;
};
