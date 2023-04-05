import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createStyles, Image, Container, Title, Text, Button, SimpleGrid, rem, } from "@mantine/core";
import { useNavigate } from "react-router-dom";
const image = "https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg";
const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: rem(80),
        paddingBottom: rem(80),
    },
    title: {
        fontWeight: 900,
        fontSize: rem(34),
        marginBottom: theme.spacing.md,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        [theme.fn.smallerThan("sm")]: {
            fontSize: rem(32),
        },
    },
    control: {
        [theme.fn.smallerThan("sm")]: {
            width: "100%",
        },
    },
    mobileImage: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },
    desktopImage: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },
}));
export function FourOhFour({ catastrophic = false, }) {
    const { classes } = useStyles();
    const navigate = useNavigate();
    return (_jsx(Container, { className: classes.root, children: _jsxs(SimpleGrid, { spacing: 80, cols: 2, breakpoints: [{ maxWidth: "sm", cols: 1, spacing: 40 }], children: [_jsx(Image, { src: image, className: classes.mobileImage }), _jsxs("div", { children: [_jsx(Title, { className: classes.title, children: catastrophic
                                ? "Yikes! You blew me up!"
                                : "Something is not right..." }), _jsx(Text, { color: "dimmed", size: "lg", children: catastrophic
                                ? "A catastrophic error occurred. You must be a developer."
                                : `Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.` }), _jsx(Button, { variant: "outline", size: "md", mt: "xl", className: classes.control, onClick: () => catastrophic ? (window.location.pathname = "/") : navigate("/"), children: "Get back to home page" })] }), _jsx(Image, { src: image, className: classes.desktopImage })] }) }));
}
//# sourceMappingURL=FourOhFour.js.map