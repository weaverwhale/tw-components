import { Button as MantineButton } from "@mantine/core";

export const Button = ({ ...props }: any) => {
  console.log("----------------------");
  console.log("TW Custom Button Used!");
  console.log("Props", props);
  console.log("----------------------");

  return <MantineButton {...props} />;
};
