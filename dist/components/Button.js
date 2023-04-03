import { jsx as _jsx } from "react/jsx-runtime";
import { Button as MantineButton } from "@mantine/core";
export const Button = ({ ...props }) => {
    console.log("----------------------");
    console.log("TW Custom Button Used!");
    console.log("Props", props);
    console.log("----------------------");
    return _jsx(MantineButton, { ...props });
};
//# sourceMappingURL=Button.js.map