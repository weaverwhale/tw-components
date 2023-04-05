import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { GenericEventLogger } from "../helpers/GenericEventLogger";

import { FourOhFour } from "../pages/FourOhFour";

export const ErrorBoundary: React.FC | any = ({ ...props }: any) => {
  let logError = (error: Error, info: { componentStack: string }) => {
    GenericEventLogger("error boundary reached!", { error, info });
  };
  return (
    <ReactErrorBoundary
      {...props}
      onError={logError}
      fallback={<FourOhFour catastrophic={true} />}
      fallbackRender={<FourOhFour catastrophic={true} />}
    />
  );
};
