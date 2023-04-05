export const GenericEventLogger = (label: string, payload?: any) => {
  if (label) {
    console.log("genericEventLogger", label, payload);
    // posthog.capture(label, payload);
  }
};
