import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import { MantineProvider, MantineProviderProps } from "@mantine/core";
import { GenericEventLogger } from "../helpers/GenericEventLogger";

// import polaris styles
// we remap/override vars in the app
import "@shopify/polaris/build/esm/styles.css";

interface ComponentProviderProps extends MantineProviderProps {
  darkMode?: boolean;
}

export const TWProvider: React.FC | any = ({
  ...props
}: ComponentProviderProps) => {
  const location = useLocation();
  const { children, ...rest } = props;

  // analytics event on page change/load
  useEffect(() => {
    GenericEventLogger("Page View", {
      href: location.pathname,
      ...location,
    });
  }, [location]);

  // fix for dark mode
  // polaris adds classes to the body
  // we remove them
  useEffect(() => {
    document.body.style.background = "";
    document.body.style.color = "";
  }, []);

  return (
    <AppProvider i18n={{}} {...rest}>
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        {...props}
        theme={{
          // Override any other properties from default theme
          spacing: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.8rem",
            lg: "2.2rem",
            xl: "2.8rem",
          },
          colorScheme: props.darkMode ? "dark" : "light",
        }}
      >
        {children}
      </MantineProvider>
    </AppProvider>
  );
};
