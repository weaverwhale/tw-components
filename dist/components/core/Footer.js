import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text, Flex, Button } from "@mantine/core";
export function Footer() {
    const today = new Date();
    return (_jsxs("footer", { children: [_jsxs(Flex, { gap: "sm", justify: { base: "center" }, align: "flex-start", direction: "row", wrap: "wrap", mb: 20, children: [_jsx(Button, { component: "a", radius: "xl", color: "dark", size: "xs", compact: true, href: "https://github.com/weaverwhale/tw-components-playground", target: "_blank", rel: "noopener noreferrer", children: "Github" }), _jsx(Button, { component: "a", radius: "xl", color: "red", size: "xs", compact: true, href: "https://www.npmjs.com/package/@weaverwhale/tw-components", target: "_blank", rel: "noopener noreferrer", children: "NPM Package" }), _jsx(Button, { component: "a", radius: "xl", color: "blue", size: "xs", compact: true, href: "/reports/lighthouse.html", target: "_blank", rel: "noopener noreferrer", children: "Lighthouse Report" })] }), _jsxs(Text, { align: "center", children: ["\u00A9 ", today.getFullYear(), " Triple Whale. All rights reserved."] })] }));
}
//# sourceMappingURL=Footer.js.map