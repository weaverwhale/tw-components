import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { GenericEventLogger } from "../helpers/GenericEventLogger";
export const ErrorBoundary = ({ ...props }) => {
    let logError = (error, info) => {
        GenericEventLogger("error boundary reached!", { error, info });
    };
    return (_jsx(ReactErrorBoundary, { ...props, onError: logError, fallback: _jsx("div", { children: _jsx("h1", { children: "Something went wrong." }) }) }));
};
//# sourceMappingURL=ErrorBoundary.js.map