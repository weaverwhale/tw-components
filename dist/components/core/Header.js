import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from "@mantine/core";
import { Link } from "react-router-dom";
export function Header({ darkMode, setDarkMode }) {
    return (_jsx("header", { children: _jsxs("div", { className: "header-inner", children: [_jsx("div", { children: _jsx("a", { href: "/", children: _jsx("img", { src: "/tw-logo.svg", alt: "Triple Whale", width: "150", height: "21" }) }) }), _jsxs("nav", { children: [_jsx(Link, { to: "/", children: "Home" }), _jsx(Link, { to: "/404", children: "404" }), _jsx("div", { id: "dark-light-toggle", className: `${darkMode && "dark"}`, children: darkMode ? (_jsx("i", { id: "dark", "aria-label": "Dark Mode", onClick: () => setDarkMode(false), children: _jsx(Text, { c: "white", children: "\uD83C\uDF1A Dark Mode" }) })) : (_jsx("i", { id: "light", "aria-label": "Light Mode", onClick: () => setDarkMode(true), children: _jsx(Text, { c: "white", children: "\uD83C\uDF1D Light Mode" }) })) })] })] }) }));
}
//# sourceMappingURL=Header.js.map