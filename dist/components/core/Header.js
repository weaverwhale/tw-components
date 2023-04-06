import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from "@mantine/core";
import { Link } from "../Link";
const links = [
    { href: "/", text: "Home", analyticsLabel: "Header Link - Home" },
    { href: "/404", text: "404", analyticsLabel: "Header Link - 404 Page" },
];
export function Header({ darkMode, setDarkMode }) {
    return (_jsx("header", { children: _jsxs("div", { className: "header-inner", children: [_jsx("div", { children: _jsx("a", { href: "/", children: _jsx("img", { src: "/tw-logo.svg", alt: "Triple Whale", width: "150", height: "21" }) }) }), _jsxs("nav", { children: [links.map((link) => (_jsx(Link, { to: link.href, analyticsLabel: link.analyticsLabel, analyticsPayload: { href: link.href, text: link.text }, children: link.text }, link.href))), _jsx("div", { id: "dark-light-toggle", className: `${darkMode && "dark"}`, children: darkMode ? (_jsx("i", { id: "dark", "aria-label": "Dark Mode", onClick: () => setDarkMode(false), children: _jsx(Text, { c: "white", children: "\uD83C\uDF1A Dark Mode" }) })) : (_jsx("i", { id: "light", "aria-label": "Light Mode", onClick: () => setDarkMode(true), children: _jsx(Text, { c: "white", children: "\uD83C\uDF1D Light Mode" }) })) })] })] }) }));
}
//# sourceMappingURL=Header.js.map