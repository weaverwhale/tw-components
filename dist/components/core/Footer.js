import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text, Flex } from "@mantine/core";
import { Button } from "../Button";
import { useErrorBoundary } from "react-error-boundary";
export function Footer({ activateErrorBoundary = (err) => null }) {
    const today = new Date();
    const err = "You dropped a bomb in me 💣";
    const { showBoundary } = useErrorBoundary();
    const buttons = [
        {
            href: "https://github.com/weaverwhale/tw-components-playground",
            text: "Github",
            analyticsLabel: "Footer Link - Github",
            color: "dark",
        },
        {
            href: "https://www.npmjs.com/package/@weaverwhale/tw-components",
            text: "NPM Package",
            analyticsLabel: "Footer Link NPM Package",
            color: "red",
        },
        {
            href: "/reports/lighthouse.html",
            text: "Lighthouse Report",
            analyticsLabel: "Footer Link - Lighthouse Report",
            color: "blue",
        },
        {
            text: "💣 Active Error Boundary",
            analyticsLabel: "Footer Link - 💣 Active Error Boundary",
            color: "orange",
            onClick: () => {
                showBoundary(err);
            },
        },
    ];
    return (_jsxs("footer", { children: [_jsx(Flex, { gap: "sm", justify: { base: "center" }, align: "flex-start", direction: "row", wrap: "wrap", mb: 20, children: buttons.map((button) => (_jsx(Button, { component: "a", radius: "xl", color: button.color || "dark", size: "xs", compact: true, href: button.href || null, onClick: button.onClick || null, target: "_blank", rel: "noopener noreferrer", analyticsLabel: button.analyticsLabel, analyticsPayload: { href: button.href, text: button.text }, children: button.text }, button.color))) }), _jsxs(Text, { align: "center", children: ["\u00A9 ", today.getFullYear(), " Triple Whale. All rights reserved."] })] }));
}
//# sourceMappingURL=Footer.js.map