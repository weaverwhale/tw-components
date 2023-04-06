import React from "react";
import type { Link as LinkType } from "react-router-dom";
import { Link as MantineLink } from "react-router-dom";
import { GenericEventLogger } from "../helpers/GenericEventLogger";

interface LinkProps {
  analyticsLabel?: string;
  analyticsPayload?: any;
  onClick?: () => void;
}

export const Link: React.FC | typeof LinkType | any = ({
  ...props
}: LinkProps | any) => {
  // https://legacy.reactjs.org/warnings/unknown-prop.html
  let { analyticsLabel, analyticsPayload, ...rest } = props;
  if (!analyticsLabel) analyticsLabel = props.children.toString().trim();

  let onClickEvent = () => {
    if (analyticsLabel) GenericEventLogger(analyticsLabel, analyticsPayload);
    if (props.onClick) props.onClick();
  };

  return <MantineLink {...rest} onClick={onClickEvent} />;
};
