import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { GenericEventLogger } from "../helpers/GenericEventLogger";
import { FourOhFour } from "../pages/FourOhFour";
export const ErrorBoundary = ({ ...props }) => {
    let logError = (error, info) => {
        GenericEventLogger("error boundary reached!", { error, info });
    };
    return (_jsx(ReactErrorBoundary, { ...props, onError: logError, fallback: _jsx(FourOhFour, { catastrophic: true }), fallbackRender: _jsx(FourOhFour, { catastrophic: true }) }));
};
//# sourceMappingURL=ErrorBoundary.js.map