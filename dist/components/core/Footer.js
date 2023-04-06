import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text, Flex } from "@mantine/core";
import { Button } from "../Button";
const buttons = [
    {
        href: "https://github.com/weaverwhale/tw-components-playground",
        text: "Github",
        analyticsLabel: "Footer Link - Github",
    },
    {
        href: "https://www.npmjs.com/package/@weaverwhale/tw-components",
        text: "NPM Package",
        analyticsLabel: "Footer Link NPM Package",
    },
    {
        href: "/reports/lighthouse.html",
        text: "Lighthouse Report",
        analyticsLabel: "Footer Link - Lighthouse Report",
    },
];
export function Footer() {
    const today = new Date();
    return (_jsxs("footer", { children: [_jsx(Flex, { gap: "sm", justify: { base: "center" }, align: "flex-start", direction: "row", wrap: "wrap", mb: 20, children: buttons.map((button) => (_jsx(Button, { component: "a", radius: "xl", color: "dark", size: "xs", compact: true, href: button.href, target: "_blank", rel: "noopener noreferrer", analyticsLabel: button.analyticsLabel, analyticsPayload: { href: button.href, text: button.text }, children: button.text }, button.href))) }), _jsxs(Text, { align: "center", children: ["\u00A9 ", today.getFullYear(), " Triple Whale. All rights reserved."] })] }));
}
//# sourceMappingURL=Footer.js.map