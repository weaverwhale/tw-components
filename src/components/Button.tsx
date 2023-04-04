import React from "react";
import type { Button as ButtonType } from "@mantine/core";
import { Button as MantineButton, ButtonProps } from "@mantine/core";
import { genericEventLogger } from "../helpers/genericEventLogger";

interface TWButtonProps extends ButtonProps {
  analyticsLabel?: string;
  analyticsPayload?: any;
  onClick?: () => void;
}

export const Button: React.FC & typeof ButtonType = ({
  ...props
}: TWButtonProps) => {
  // https://legacy.reactjs.org/warnings/unknown-prop.html
  const { analyticsLabel, analyticsPayload, ...rest } = props;

  let onClickEvent = () => {
    if (analyticsLabel) genericEventLogger(analyticsLabel, analyticsPayload);
    if (props.onClick) props.onClick();
  };

  return <MantineButton {...rest} onClick={onClickEvent} />;
};
