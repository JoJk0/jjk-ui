(async () => {
  try {
    "paintWorklet" in CSS || await import("./css-paint-polyfill-DEWV1JSC.js");
    const { default: t } = await import("./squircle-Btq4ycrS.js");
    CSS.paintWorklet.addModule(t);
  } catch {
  }
})();
