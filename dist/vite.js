import e from "unplugin-vue-components/vite";
const s = (t) => [
  e({
    dts: !0,
    dirs: [],
    resolvers: [
      (r) => {
        if (r.startsWith(t.componentPrefix || "App"))
          return {
            name: r,
            from: "./src/index"
          };
      }
    ]
  })
];
export {
  s as default
};
