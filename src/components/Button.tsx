import React from "react";
import type { Button as ButtonType } from "@mantine/core";
import { Button as MantineButton, ButtonProps } from "@mantine/core";
import { AnalyticsEvent } from "../helpers/AnalyticsEvent";

interface TWButtonProps extends ButtonProps {
  analyticsLabel?: string;
  analyticsPayload?: any;
  onClick?: () => void;
}

export const Button: React.FC & typeof ButtonType = ({
  ...props
}: TWButtonProps) => {
  console.log("----------------------");
  console.log("TW Custom Button Used!");
  console.log("Props", props);
  console.log("----------------------");

  let onClickEvent = () => {
    if (props.analyticsLabel)
      AnalyticsEvent(props.analyticsLabel, props.analyticsPayload);
    if (props.onClick) props.onClick();
  };

  return <MantineButton {...props} onClick={onClickEvent} />;
};
