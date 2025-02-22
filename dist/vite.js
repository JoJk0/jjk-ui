import e from "unplugin-vue-components/vite";
const s = (t = {
  componentPrefix: "App"
}) => [
  e({
    dts: !0,
    dirs: [],
    resolvers: [
      (r) => {
        if (r.startsWith(t.componentPrefix))
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
