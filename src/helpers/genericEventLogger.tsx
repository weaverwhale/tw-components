export const genericEventLogger = (label: string, payload?: any) => {
  if (label) {
    console.log("genericEventLogger", label, payload);
  }
};
