export const GenericEventLogger = (label, payload) => {
    if (label) {
        console.log("genericEventLogger", label, payload);
        // posthog.capture(label, payload);
    }
};
//# sourceMappingURL=GenericEventLogger.js.map