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

  // https://legacy.reactjs.org/warnings/unknown-prop.html
  const { analyticsLabel, analyticsPayload, ...rest } = props;

  let onClickEvent = () => {
    if (analyticsLabel) AnalyticsEvent(analyticsLabel, analyticsPayload);
    if (props.onClick) props.onClick();
  };

  return <MantineButton {...rest} onClick={onClickEvent} />;
};
