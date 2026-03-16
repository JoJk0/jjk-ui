import e from "unplugin-vue-components/vite";
//#region src/vite.ts
var t = (t = { componentPrefix: "App" }) => [e({
	dts: !0,
	dirs: [],
	resolvers: [(e) => {
		if (e.startsWith(t.componentPrefix)) return {
			name: e,
			from: "./src/index"
		};
	}]
})];
//#endregion
export { t as default };
