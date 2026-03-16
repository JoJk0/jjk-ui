//#region src/setup.ts
(async () => {
	try {
		"paintWorklet" in CSS || await import("./css-paint-polyfill-9Ra4Wguq.js");
		let { default: e } = await import("./squircle-O_u6wd7G.js");
		CSS.paintWorklet.addModule(e);
	} catch {}
})();
//#endregion
