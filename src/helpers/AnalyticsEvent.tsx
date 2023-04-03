export const AnalyticsEvent = (label: string, payload?: any) => {
  if (label) {
    console.log("AnalyticsEvent", label, payload);
  }
};
