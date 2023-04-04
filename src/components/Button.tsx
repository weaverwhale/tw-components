import React from "react";
import type { Button as ButtonType } from "@mantine/core";
import { Button as MantineButton, ButtonProps } from "@mantine/core";
import { GenericEventLogger } from "../helpers/GenericEventLogger";

interface TWButtonProps extends ButtonProps {
  analyticsLabel?: string;
  analyticsPayload?: any;
  onClick?: () => void;
}

export const Button: React.FC | typeof ButtonType | any = ({
  ...props
}: TWButtonProps | any) => {
  // https://legacy.reactjs.org/warnings/unknown-prop.html
  const { analyticsLabel, analyticsPayload, ...rest } = props;

  let onClickEvent = () => {
    if (analyticsLabel) GenericEventLogger(analyticsLabel, analyticsPayload);
    if (props.onClick) props.onClick();
  };

  return <MantineButton {...rest} onClick={onClickEvent} />;
};
