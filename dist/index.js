import * as Nn from "vue";
import { defineComponent as $, h as xe, createBlock as T, openBlock as A, unref as p, normalizeClass as V, mergeDefaults as $e, useCssVars as Lr, computed as P, ref as k, withDirectives as Ze, resolveDynamicComponent as Ot, withKeys as Jt, withCtx as _, createCommentVNode as H, renderSlot as O, createTextVNode as de, toDisplayString as Ee, createElementBlock as W, shallowRef as $o, watch as q, getCurrentScope as Oo, onScopeDispose as Po, shallowReadonly as Ne, Fragment as st, Comment as To, mergeProps as B, cloneVNode as Fr, inject as ko, provide as Io, getCurrentInstance as it, customRef as Vr, toValue as gt, onBeforeUnmount as gn, readonly as Nr, nextTick as se, onUnmounted as yn, toRefs as qe, toHandlerKey as Wr, camelize as Do, toRef as jr, onMounted as Q, Teleport as Bo, watchEffect as Y, reactive as Mo, normalizeStyle as Pt, createVNode as D, markRaw as Hr, renderList as bn, withModifiers as De, watchPostEffect as Ro, normalizeProps as Ge, guardReactiveProps as at, createElementVNode as ne, toHandlers as Kr, useSlots as Ur, mergeModels as lt, useModel as Ke, Transition as zr, useAttrs as qr, useCssModule as Gr, isRef as Wn, vModelText as Yr, vModelDynamic as Xr } from "vue";
import { useMouseInElement as Qr, unrefElement as Re, defaultWindow as Jr, useVModel as et, useMounted as Zr, onKeyStroke as es, createGlobalState as ts, createSharedComposable as ns, useEventListener as Zt, toValue as os, computedEager as rs, useResizeObserver as ss, useTimeoutFn as is, useTextareaAutosize as as } from "@vueuse/core";
const Lo = /^[a-z0-9]+(-[a-z0-9]+)*$/, Tt = (e, t, n, r = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    r = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const a = o.pop(), l = o.pop(), u = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : r,
      prefix: l,
      name: a
    };
    return t && !yt(u) ? null : u;
  }
  const s = o[0], i = s.split("-");
  if (i.length > 1) {
    const a = {
      provider: r,
      prefix: i.shift(),
      name: i.join("-")
    };
    return t && !yt(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: s
    };
    return t && !yt(a, n) ? null : a;
  }
  return null;
}, yt = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, Fo = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Ct = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), kt = Object.freeze({
  ...Fo,
  ...Ct
}), en = Object.freeze({
  ...kt,
  body: "",
  hidden: !1
});
function ls(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function jn(e, t) {
  const n = ls(e, t);
  for (const r in en)
    r in Ct ? r in e && !(r in n) && (n[r] = Ct[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function us(e, t) {
  const n = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function s(i) {
    if (n[i])
      return o[i] = [];
    if (!(i in o)) {
      o[i] = null;
      const a = r[i] && r[i].parent, l = a && s(a);
      l && (o[i] = [a].concat(l));
    }
    return o[i];
  }
  return Object.keys(n).concat(Object.keys(r)).forEach(s), o;
}
function cs(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function i(a) {
    s = jn(
      r[a] || o[a],
      s
    );
  }
  return i(t), n.forEach(i), jn(e, s);
}
function Vo(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = us(e);
  for (const o in r) {
    const s = r[o];
    s && (t(o, cs(e, o, s)), n.push(o));
  }
  return n;
}
const ds = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Fo
};
function Kt(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function No(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Kt(e, ds))
    return null;
  const n = t.icons;
  for (const o in n) {
    const s = n[o];
    if (
      // Name cannot be empty
      !o || // Must have body
      typeof s.body != "string" || // Check other props
      !Kt(
        s,
        en
      )
    )
      return null;
  }
  const r = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in r) {
    const s = r[o], i = s.parent;
    if (
      // Name cannot be empty
      !o || // Parent must be set and point to existing icon
      typeof i != "string" || !n[i] && !r[i] || // Check other props
      !Kt(
        s,
        en
      )
    )
      return null;
  }
  return t;
}
const Hn = /* @__PURE__ */ Object.create(null);
function fs(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function Ue(e, t) {
  const n = Hn[e] || (Hn[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = fs(e, t));
}
function Wo(e, t) {
  return No(t) ? Vo(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function ps(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let tt = !1;
function jo(e) {
  return typeof e == "boolean" && (tt = e), tt;
}
function ms(e) {
  const t = typeof e == "string" ? Tt(e, !0, tt) : e;
  if (t) {
    const n = Ue(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function hs(e, t) {
  const n = Tt(e, !0, tt);
  if (!n)
    return !1;
  const r = Ue(n.provider, n.prefix);
  return t ? ps(r, n.name, t) : (r.missing.add(n.name), !0);
}
function vs(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), tt && !t && !e.prefix) {
    let o = !1;
    return No(e) && (e.prefix = "", Vo(e, (s, i) => {
      hs(s, i) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!yt({
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = Ue(t, n);
  return !!Wo(r, e);
}
const Ho = Object.freeze({
  width: null,
  height: null
}), Ko = Object.freeze({
  // Dimensions
  ...Ho,
  // Transformations
  ...Ct
}), gs = /(-?[0-9.]*[0-9]+[0-9.]*)/g, ys = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Kn(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(gs);
  if (r === null || !r.length)
    return e;
  const o = [];
  let s = r.shift(), i = ys.test(s);
  for (; ; ) {
    if (i) {
      const a = parseFloat(s);
      isNaN(a) ? o.push(s) : o.push(Math.ceil(a * t * n) / n);
    } else
      o.push(s);
    if (s = r.shift(), s === void 0)
      return o.join("");
    i = !i;
  }
}
function bs(e, t = "defs") {
  let n = "";
  const r = e.indexOf("<" + t);
  for (; r >= 0; ) {
    const o = e.indexOf(">", r), s = e.indexOf("</" + t);
    if (o === -1 || s === -1)
      break;
    const i = e.indexOf(">", s);
    if (i === -1)
      break;
    n += e.slice(o + 1, s).trim(), e = e.slice(0, r).trim() + e.slice(i + 1);
  }
  return {
    defs: n,
    content: e
  };
}
function ws(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function Cs(e, t, n) {
  const r = bs(e);
  return ws(r.defs, t + r.content + n);
}
const xs = (e) => e === "unset" || e === "undefined" || e === "none";
function Es(e, t) {
  const n = {
    ...kt,
    ...e
  }, r = {
    ...Ko,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let s = n.body;
  [n, r].forEach((g) => {
    const v = [], w = g.hFlip, b = g.vFlip;
    let y = g.rotate;
    w ? b ? y += 2 : (v.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), v.push("scale(-1 1)"), o.top = o.left = 0) : b && (v.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), v.push("scale(1 -1)"), o.top = o.left = 0);
    let C;
    switch (y < 0 && (y -= Math.floor(y / 4) * 4), y = y % 4, y) {
      case 1:
        C = o.height / 2 + o.top, v.unshift(
          "rotate(90 " + C.toString() + " " + C.toString() + ")"
        );
        break;
      case 2:
        v.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        C = o.width / 2 + o.left, v.unshift(
          "rotate(-90 " + C.toString() + " " + C.toString() + ")"
        );
        break;
    }
    y % 2 === 1 && (o.left !== o.top && (C = o.left, o.left = o.top, o.top = C), o.width !== o.height && (C = o.width, o.width = o.height, o.height = C)), v.length && (s = Cs(
      s,
      '<g transform="' + v.join(" ") + '">',
      "</g>"
    ));
  });
  const i = r.width, a = r.height, l = o.width, u = o.height;
  let d, c;
  i === null ? (c = a === null ? "1em" : a === "auto" ? u : a, d = Kn(c, l / u)) : (d = i === "auto" ? l : i, c = a === null ? Kn(d, u / l) : a === "auto" ? u : a);
  const f = {}, m = (g, v) => {
    xs(v) || (f[g] = v.toString());
  };
  m("width", d), m("height", c);
  const h = [o.left, o.top, l, u];
  return f.viewBox = h.join(" "), {
    attributes: f,
    viewBox: h,
    body: s
  };
}
const _s = /\sid="(\S+)"/g, As = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Ss = 0;
function $s(e, t = As) {
  const n = [];
  let r;
  for (; r = _s.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((s) => {
    const i = typeof t == "function" ? t(s) : t + (Ss++).toString(), a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + i + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const tn = /* @__PURE__ */ Object.create(null);
function Os(e, t) {
  tn[e] = t;
}
function nn(e) {
  return tn[e] || tn[""];
}
function wn(e) {
  let t;
  if (typeof e.resources == "string")
    t = [e.resources];
  else if (t = e.resources, !(t instanceof Array) || !t.length)
    return null;
  return {
    // API hosts
    resources: t,
    // Root path
    path: e.path || "/",
    // URL length limit
    maxURL: e.maxURL || 500,
    // Timeout before next host is used.
    rotate: e.rotate || 750,
    // Timeout before failing query.
    timeout: e.timeout || 5e3,
    // Randomise default API end point.
    random: e.random === !0,
    // Start index
    index: e.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: e.dataAfterTimeout !== !1
  };
}
const Cn = /* @__PURE__ */ Object.create(null), Xe = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], bt = [];
for (; Xe.length > 0; )
  Xe.length === 1 || Math.random() > 0.5 ? bt.push(Xe.shift()) : bt.push(Xe.pop());
Cn[""] = wn({
  resources: ["https://api.iconify.design"].concat(bt)
});
function Ps(e, t) {
  const n = wn(t);
  return n === null ? !1 : (Cn[e] = n, !0);
}
function xn(e) {
  return Cn[e];
}
const Ts = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Un = Ts();
function ks(e, t) {
  const n = xn(e);
  if (!n)
    return 0;
  let r;
  if (!n.maxURL)
    r = 0;
  else {
    let o = 0;
    n.resources.forEach((i) => {
      o = Math.max(o, i.length);
    });
    const s = t + ".json?icons=";
    r = n.maxURL - o - n.path.length - s.length;
  }
  return r;
}
function Is(e) {
  return e === 404;
}
const Ds = (e, t, n) => {
  const r = [], o = ks(e, t), s = "icons";
  let i = {
    type: s,
    provider: e,
    prefix: t,
    icons: []
  }, a = 0;
  return n.forEach((l, u) => {
    a += l.length + 1, a >= o && u > 0 && (r.push(i), i = {
      type: s,
      provider: e,
      prefix: t,
      icons: []
    }, a = l.length), i.icons.push(l);
  }), r.push(i), r;
};
function Bs(e) {
  if (typeof e == "string") {
    const t = xn(e);
    if (t)
      return t.path;
  }
  return "/";
}
const Ms = (e, t, n) => {
  if (!Un) {
    n("abort", 424);
    return;
  }
  let r = Bs(t.provider);
  switch (t.type) {
    case "icons": {
      const s = t.prefix, a = t.icons.join(","), l = new URLSearchParams({
        icons: a
      });
      r += s + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const s = t.uri;
      r += s.slice(0, 1) === "/" ? s.slice(1) : s;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let o = 503;
  Un(e + r).then((s) => {
    const i = s.status;
    if (i !== 200) {
      setTimeout(() => {
        n(Is(i) ? "abort" : "next", i);
      });
      return;
    }
    return o = 501, s.json();
  }).then((s) => {
    if (typeof s != "object" || s === null) {
      setTimeout(() => {
        s === 404 ? n("abort", s) : n("next", o);
      });
      return;
    }
    setTimeout(() => {
      n("success", s);
    });
  }).catch(() => {
    n("next", o);
  });
}, Rs = {
  prepare: Ds,
  send: Ms
};
function Ls(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  e.sort((o, s) => o.provider !== s.provider ? o.provider.localeCompare(s.provider) : o.prefix !== s.prefix ? o.prefix.localeCompare(s.prefix) : o.name.localeCompare(s.name));
  let r = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((o) => {
    if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider)
      return;
    r = o;
    const s = o.provider, i = o.prefix, a = o.name, l = n[s] || (n[s] = /* @__PURE__ */ Object.create(null)), u = l[i] || (l[i] = Ue(s, i));
    let d;
    a in u.icons ? d = t.loaded : i === "" || u.missing.has(a) ? d = t.missing : d = t.pending;
    const c = {
      provider: s,
      prefix: i,
      name: a
    };
    d.push(c);
  }), t;
}
function Uo(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function Fs(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let n = !1;
    const r = e.provider, o = e.prefix;
    t.forEach((s) => {
      const i = s.icons, a = i.pending.length;
      i.pending = i.pending.filter((l) => {
        if (l.prefix !== o)
          return !0;
        const u = l.name;
        if (e.icons[u])
          i.loaded.push({
            provider: r,
            prefix: o,
            name: u
          });
        else if (e.missing.has(u))
          i.missing.push({
            provider: r,
            prefix: o,
            name: u
          });
        else
          return n = !0, !0;
        return !1;
      }), i.pending.length !== a && (n || Uo([e], s.id), s.callback(
        i.loaded.slice(0),
        i.missing.slice(0),
        i.pending.slice(0),
        s.abort
      ));
    });
  }));
}
let Vs = 0;
function Ns(e, t, n) {
  const r = Vs++, o = Uo.bind(null, n, r);
  if (!t.pending.length)
    return o;
  const s = {
    id: r,
    icons: t,
    callback: e,
    abort: o
  };
  return n.forEach((i) => {
    (i.loaderCallbacks || (i.loaderCallbacks = [])).push(s);
  }), o;
}
function Ws(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const s = typeof o == "string" ? Tt(o, t, n) : o;
    s && r.push(s);
  }), r;
}
var js = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Hs(e, t, n, r) {
  const o = e.resources.length, s = e.random ? Math.floor(Math.random() * o) : e.index;
  let i;
  if (e.random) {
    let E = e.resources.slice(0);
    for (i = []; E.length > 1; ) {
      const S = Math.floor(Math.random() * E.length);
      i.push(E[S]), E = E.slice(0, S).concat(E.slice(S + 1));
    }
    i = i.concat(E);
  } else
    i = e.resources.slice(s).concat(e.resources.slice(0, s));
  const a = Date.now();
  let l = "pending", u = 0, d, c = null, f = [], m = [];
  typeof r == "function" && m.push(r);
  function h() {
    c && (clearTimeout(c), c = null);
  }
  function g() {
    l === "pending" && (l = "aborted"), h(), f.forEach((E) => {
      E.status === "pending" && (E.status = "aborted");
    }), f = [];
  }
  function v(E, S) {
    S && (m = []), typeof E == "function" && m.push(E);
  }
  function w() {
    return {
      startTime: a,
      payload: t,
      status: l,
      queriesSent: u,
      queriesPending: f.length,
      subscribe: v,
      abort: g
    };
  }
  function b() {
    l = "failed", m.forEach((E) => {
      E(void 0, d);
    });
  }
  function y() {
    f.forEach((E) => {
      E.status === "pending" && (E.status = "aborted");
    }), f = [];
  }
  function C(E, S, I) {
    const M = S !== "success";
    switch (f = f.filter((R) => R !== E), l) {
      case "pending":
        break;
      case "failed":
        if (M || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (S === "abort") {
      d = I, b();
      return;
    }
    if (M) {
      d = I, f.length || (i.length ? x() : b());
      return;
    }
    if (h(), y(), !e.random) {
      const R = e.resources.indexOf(E.resource);
      R !== -1 && R !== e.index && (e.index = R);
    }
    l = "completed", m.forEach((R) => {
      R(I);
    });
  }
  function x() {
    if (l !== "pending")
      return;
    h();
    const E = i.shift();
    if (E === void 0) {
      if (f.length) {
        c = setTimeout(() => {
          h(), l === "pending" && (y(), b());
        }, e.timeout);
        return;
      }
      b();
      return;
    }
    const S = {
      status: "pending",
      resource: E,
      callback: (I, M) => {
        C(S, I, M);
      }
    };
    f.push(S), u++, c = setTimeout(x, e.rotate), n(E, t, S.callback);
  }
  return setTimeout(x), w;
}
function zo(e) {
  const t = {
    ...js,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, l, u) {
    const d = Hs(
      t,
      a,
      l,
      (c, f) => {
        r(), u && u(c, f);
      }
    );
    return n.push(d), d;
  }
  function s(a) {
    return n.find((l) => a(l)) || null;
  }
  return {
    query: o,
    find: s,
    setIndex: (a) => {
      t.index = a;
    },
    getIndex: () => t.index,
    cleanup: r
  };
}
function zn() {
}
const Ut = /* @__PURE__ */ Object.create(null);
function Ks(e) {
  if (!Ut[e]) {
    const t = xn(e);
    if (!t)
      return;
    const n = zo(t), r = {
      config: t,
      redundancy: n
    };
    Ut[e] = r;
  }
  return Ut[e];
}
function Us(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const s = nn(e);
    if (!s)
      return n(void 0, 424), zn;
    o = s.send;
    const i = Ks(e);
    i && (r = i.redundancy);
  } else {
    const s = wn(e);
    if (s) {
      r = zo(s);
      const i = e.resources ? e.resources[0] : "", a = nn(i);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), zn) : r.query(t, o, n)().abort;
}
function qn() {
}
function zs(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Fs(e);
  }));
}
function qs(e) {
  const t = [], n = [];
  return e.forEach((r) => {
    (r.match(Lo) ? t : n).push(r);
  }), {
    valid: t,
    invalid: n
  };
}
function Qe(e, t, n) {
  function r() {
    const o = e.pendingIcons;
    t.forEach((s) => {
      o && o.delete(s), e.icons[s] || e.missing.add(s);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!Wo(e, n).length) {
        r();
        return;
      }
    } catch (o) {
      console.error(o);
    }
  r(), zs(e);
}
function Gn(e, t) {
  e instanceof Promise ? e.then((n) => {
    t(n);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function Gs(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    if (delete e.iconsToLoad, !o || !o.length)
      return;
    const s = e.loadIcon;
    if (e.loadIcons && (o.length > 1 || !s)) {
      Gn(
        e.loadIcons(o, r, n),
        (d) => {
          Qe(e, o, d);
        }
      );
      return;
    }
    if (s) {
      o.forEach((d) => {
        const c = s(d, r, n);
        Gn(c, (f) => {
          const m = f ? {
            prefix: r,
            icons: {
              [d]: f
            }
          } : null;
          Qe(e, [d], m);
        });
      });
      return;
    }
    const { valid: i, invalid: a } = qs(o);
    if (a.length && Qe(e, a, null), !i.length)
      return;
    const l = r.match(Lo) ? nn(n) : null;
    if (!l) {
      Qe(e, i, null);
      return;
    }
    l.prepare(n, r, i).forEach((d) => {
      Us(n, d, (c) => {
        Qe(e, d.icons, c);
      });
    });
  }));
}
const Ys = (e, t) => {
  const n = Ws(e, !0, jo()), r = Ls(n);
  if (!r.pending.length) {
    let l = !0;
    return t && setTimeout(() => {
      l && t(
        r.loaded,
        r.missing,
        r.pending,
        qn
      );
    }), () => {
      l = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), s = [];
  let i, a;
  return r.pending.forEach((l) => {
    const { provider: u, prefix: d } = l;
    if (d === a && u === i)
      return;
    i = u, a = d, s.push(Ue(u, d));
    const c = o[u] || (o[u] = /* @__PURE__ */ Object.create(null));
    c[d] || (c[d] = []);
  }), r.pending.forEach((l) => {
    const { provider: u, prefix: d, name: c } = l, f = Ue(u, d), m = f.pendingIcons || (f.pendingIcons = /* @__PURE__ */ new Set());
    m.has(c) || (m.add(c), o[u][d].push(c));
  }), s.forEach((l) => {
    const u = o[l.provider][l.prefix];
    u.length && Gs(l, u);
  }), t ? Ns(t, r, s) : qn;
};
function Xs(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], s = typeof o;
    r in Ho ? (o === null || o && (s === "string" || s === "number")) && (n[r] = o) : s === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const Qs = /[\s,]+/;
function Js(e, t) {
  t.split(Qs).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function Zs(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, "");
  function r(o) {
    for (; o < 0; )
      o += 4;
    return o % 4;
  }
  if (n === "") {
    const o = parseInt(e);
    return isNaN(o) ? 0 : r(o);
  } else if (n !== e) {
    let o = 0;
    switch (n) {
      case "%":
        o = 25;
        break;
      case "deg":
        o = 90;
    }
    if (o) {
      let s = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(s) ? 0 : (s = s / o, s % 1 === 0 ? r(s) : 0);
    }
  }
  return t;
}
function ei(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function ti(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function ni(e) {
  return "data:image/svg+xml," + ti(e);
}
function oi(e) {
  return 'url("' + ni(e) + '")';
}
const Yn = {
  ...Ko,
  inline: !1
}, ri = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, si = {
  display: "inline-block"
}, on = {
  backgroundColor: "currentColor"
}, qo = {
  backgroundColor: "transparent"
}, Xn = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Qn = {
  webkitMask: on,
  mask: on,
  background: qo
};
for (const e in Qn) {
  const t = Qn[e];
  for (const n in Xn)
    t[e + n] = Xn[n];
}
const wt = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  wt[e + "-flip"] = t, wt[e.slice(0, 1) + "-flip"] = t, wt[e + "Flip"] = t;
});
function Jn(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Zn = (e, t) => {
  const n = Xs(Yn, t), r = { ...ri }, o = t.mode || "svg", s = {}, i = t.style, a = typeof i == "object" && !(i instanceof Array) ? i : {};
  for (let g in t) {
    const v = t[g];
    if (v !== void 0)
      switch (g) {
        // Properties to ignore
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
        case "ssr":
          break;
        // Boolean attributes
        case "inline":
        case "hFlip":
        case "vFlip":
          n[g] = v === !0 || v === "true" || v === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof v == "string" && Js(n, v);
          break;
        // Color: override style
        case "color":
          s.color = v;
          break;
        // Rotation as string
        case "rotate":
          typeof v == "string" ? n[g] = Zs(v) : typeof v == "number" && (n[g] = v);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          v !== !0 && v !== "true" && delete r["aria-hidden"];
          break;
        default: {
          const w = wt[g];
          w ? (v === !0 || v === "true" || v === 1) && (n[w] = !0) : Yn[g] === void 0 && (r[g] = v);
        }
      }
  }
  const l = Es(e, n), u = l.attributes;
  if (n.inline && (s.verticalAlign = "-0.125em"), o === "svg") {
    r.style = {
      ...s,
      ...a
    }, Object.assign(r, u);
    let g = 0, v = t.id;
    return typeof v == "string" && (v = v.replace(/-/g, "_")), r.innerHTML = $s(l.body, v ? () => v + "ID" + g++ : "iconifyVue"), xe("svg", r);
  }
  const { body: d, width: c, height: f } = e, m = o === "mask" || (o === "bg" ? !1 : d.indexOf("currentColor") !== -1), h = ei(d, {
    ...u,
    width: c + "",
    height: f + ""
  });
  return r.style = {
    ...s,
    "--svg": oi(h),
    width: Jn(u.width),
    height: Jn(u.height),
    ...si,
    ...m ? on : qo,
    ...a
  }, xe("span", r);
};
jo(!0);
Os("", Rs);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !vs(r)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let n in t) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const o = t[n];
          if (typeof o != "object" || !o || o.resources === void 0)
            continue;
          Ps(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
const ii = {
  ...kt,
  body: ""
}, rn = $({
  // Do not inherit other attributes: it is handled by render()
  inheritAttrs: !1,
  // Set initial data
  data() {
    return {
      // Current icon name
      _name: "",
      // Loading
      _loadingIcon: null,
      // Mounted status
      iconMounted: !1,
      // Callback counter to trigger re-render
      counter: 0
    };
  },
  mounted() {
    this.iconMounted = !0;
  },
  unmounted() {
    this.abortLoading();
  },
  methods: {
    abortLoading() {
      this._loadingIcon && (this._loadingIcon.abort(), this._loadingIcon = null);
    },
    // Get data for icon to render or null
    getIcon(e, t, n) {
      if (typeof e == "object" && e !== null && typeof e.body == "string")
        return this._name = "", this.abortLoading(), {
          data: e
        };
      let r;
      if (typeof e != "string" || (r = Tt(e, !1, !0)) === null)
        return this.abortLoading(), null;
      let o = ms(r);
      if (!o)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", o !== null && (this._loadingIcon = {
          name: e,
          abort: Ys([r], () => {
            this.counter++;
          })
        })), null;
      if (this.abortLoading(), this._name !== e && (this._name = e, t && t(e)), n) {
        o = Object.assign({}, o);
        const i = n(o.body, r.name, r.prefix, r.provider);
        typeof i == "string" && (o.body = i);
      }
      const s = ["iconify"];
      return r.prefix !== "" && s.push("iconify--" + r.prefix), r.provider !== "" && s.push("iconify--" + r.provider), { data: o, classes: s };
    }
  },
  // Render icon
  render() {
    this.counter;
    const e = this.$attrs, t = this.iconMounted || e.ssr ? this.getIcon(e.icon, e.onLoad, e.customise) : null;
    if (!t)
      return Zn(ii, e);
    let n = e;
    return t.classes && (n = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + t.classes.join(" ")
    }), Zn({
      ...kt,
      ...t.data
    }, n);
  }
}), ai = /* @__PURE__ */ $({
  __name: "AppIcon",
  props: {
    icon: null
  },
  setup(e) {
    return (t, n) => (A(), T(p(rn), {
      inline: "",
      icon: typeof e.icon == "string" ? e.icon : e.icon[1],
      class: V(t.$style.icon)
    }, null, 8, ["icon", "class"]));
  }
}), li = "_icon_6dc929d", ui = { icon: li }, oe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, ci = {
  $style: ui
}, It = /* @__PURE__ */ oe(ai, [["__cssModules", ci]]);
var di = Object.defineProperty, fi = Object.defineProperties, pi = Object.getOwnPropertyDescriptors, eo = Object.getOwnPropertySymbols, mi = Object.prototype.hasOwnProperty, hi = Object.prototype.propertyIsEnumerable, to = (e, t, n) => t in e ? di(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ce = (e, t) => {
  for (var n in t || (t = {}))
    mi.call(t, n) && to(e, n, t[n]);
  if (eo)
    for (var n of eo(t))
      hi.call(t, n) && to(e, n, t[n]);
  return e;
}, Go = (e, t) => fi(e, pi(t)), vi = {
  directive: "wave",
  color: "currentColor",
  initialOpacity: 0.2,
  finalOpacity: 0.1,
  duration: 0.4,
  dissolveDuration: 0.15,
  waitForRelease: !0,
  easing: "ease-out",
  cancellationPeriod: 75,
  trigger: "auto",
  tagName: "div",
  disabled: !1,
  respectDisabledAttribute: !0,
  respectPrefersReducedMotion: !0,
  stopPropagation: !1
}, gi = (e) => "config" in e && "globalProperties" in e.config, yi = (e) => {
  let t;
  return e === "vue2" ? t = !1 : e === "vue3" ? t = !0 : t = gi(e), t ? {
    mounted: "mounted",
    updated: "updated"
  } : {
    mounted: "inserted",
    updated: "componentUpdated"
  };
}, Yo = (e) => typeof e == "string" && e !== "auto", no = (e, t) => {
  e.dataset.vWaveBoundary = Yo(t) ? t : "true";
}, bi = ({ borderTopLeftRadius: e, borderTopRightRadius: t, borderBottomLeftRadius: n, borderBottomRightRadius: r }, o) => {
  const s = document.createElement(o);
  return s.style.top = "0", s.style.left = "0", s.style.width = "100%", s.style.height = "100%", s.style.display = "block", s.style.position = "absolute", s.style.borderRadius = `${e} ${t} ${r} ${n}`, s.style.overflow = "hidden", s.style.pointerEvents = "none", s.style.webkitMaskImage = "-webkit-radial-gradient(white, black)", s.dataset.vWaveContainerInternal = "true", s;
}, wi = ({ x: e, y: t }, n, r) => {
  const o = document.createElement("div");
  return o.style.position = "absolute", o.style.width = `${n}px`, o.style.height = `${n}px`, o.style.top = `${t}px`, o.style.left = `${e}px`, o.style.background = r.color, o.style.borderRadius = "50%", o.style.opacity = `${r.initialOpacity}`, o.style.transform = "translate(-50%,-50%) scale(0)", o.style.transition = `transform ${r.duration}s ${r.easing}, opacity ${r.duration}s ${r.easing}`, o;
};
function ft(e, t, n, r) {
  const o = e - n, s = t - r;
  return Math.sqrt(o * o + s * s);
}
function Ci({ x: e, y: t }, { width: n, height: r }) {
  const o = ft(e, t, 0, 0), s = ft(e, t, n, 0), i = ft(e, t, 0, r), a = ft(e, t, n, r);
  return Math.max(o, s, i, a);
}
var xi = ({ x: e, y: t }, { top: n, left: r }) => ({
  x: e - r,
  y: t - n
}), Ei = (e, t) => {
  t.position === "static" && (["top", "left", "right", "bottom"].forEach((n) => {
    t[n] && t[n] !== "auto" && console.warn(
      "[v-wave]:",
      e,
      `You're using a \`static\` positioned element with a non-auto value (${t[n]}) for \`${n}\`.`,
      "It's position will be changed to relative while displaying the wave which might cause the element to visually jump."
    );
  }), e.dataset.originalPositionValue = e.style.position, e.style.position = "relative");
}, oo = (e) => {
  var t;
  e.style.position = (t = e.dataset.originalPositionValue) != null ? t : "", delete e.dataset.originalPositionValue;
}, En = "vWaveCountInternal";
function _i(e) {
  const t = xt(e);
  Xo(e, t + 1);
}
function ro(e) {
  const t = xt(e);
  Xo(e, t - 1);
}
function Xo(e, t) {
  e.dataset[En] = t.toString();
}
function xt(e) {
  var t;
  return Number.parseInt((t = e.dataset[En]) != null ? t : "0", 10);
}
function so(e) {
  delete e.dataset[En];
}
var Ai = 2.05, sn = (e, t, n) => {
  if (n.disabled || n.respectDisabledAttribute && t.hasAttribute("disabled") || n.respectPrefersReducedMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const r = t.getBoundingClientRect(), o = window.getComputedStyle(t), s = xi(e, r), i = Ai * Ci(s, r), a = t.querySelector("[data-v-wave-container-internal]"), l = a ?? bi(o, n.tagName), u = wi(s, i, n);
  _i(t), Ei(t, o), l.appendChild(u), a || t.appendChild(l);
  let d = !n.waitForRelease;
  const c = (g) => {
    typeof g < "u" && (document.removeEventListener("pointerup", c), document.removeEventListener("pointercancel", c)), d ? f() : d = !0;
  }, f = () => {
    u.style.transition = `opacity ${n.dissolveDuration}s linear`, u.style.opacity = "0", setTimeout(() => {
      u.remove(), ro(t), xt(t) === 0 && (so(t), l.remove(), oo(t));
    }, n.dissolveDuration * 1e3);
  };
  n.waitForRelease && (document.addEventListener("pointerup", c), document.addEventListener("pointercancel", c));
  const m = setTimeout(() => {
    document.removeEventListener("pointercancel", h), requestAnimationFrame(() => {
      u.style.transform = "translate(-50%,-50%) scale(1)", u.style.opacity = `${n.finalOpacity}`, setTimeout(() => c(), n.duration * 1e3);
    });
  }, n.cancellationPeriod), h = () => {
    clearTimeout(m), u.remove(), ro(t), xt(t) === 0 && (so(t), l.remove(), oo(t)), document.removeEventListener("pointerup", c), document.removeEventListener("pointercancel", c), document.removeEventListener("pointercancel", h);
  };
  document.addEventListener("pointercancel", h);
}, Je = /* @__PURE__ */ new WeakMap(), Si = (e, t) => (n, r) => {
  if (!Je.has(t)) return;
  const o = Ce(Ce({}, e), Je.get(t));
  if (o.stopPropagation && n.stopPropagation(), o.trigger === !1) return sn(n, t, o);
  if (Yo(o.trigger)) return;
  const s = t.querySelector('[data-v-wave-trigger="true"]');
  !s && o.trigger === !0 || s && !n.composedPath().includes(s) || sn(r ?? n, t, Go(Ce({}, o), { waitForRelease: r ? !1 : o.waitForRelease }));
}, $i = (e = {}, t = "vue3") => {
  const n = Ce(Ce({}, vi), e), r = yi(t), o = (a) => {
    if (a.detail !== 0) return;
    const l = a.currentTarget, u = l.dataset.vWaveTrigger;
    document.querySelectorAll(
      `[data-v-wave-boundary="${u}"]`
    ).forEach((c) => {
      const f = a.type === "click";
      let m;
      if (f) {
        const g = l.getBoundingClientRect();
        m = {
          x: g.left + g.width / 2,
          y: g.top + g.height / 2
        };
      } else
        m = a;
      const h = Ce(Ce({}, n), Je.get(c));
      sn(m, c, Go(Ce({}, h), { waitForRelease: f ? !1 : h.waitForRelease }));
    });
  }, s = {
    [r.mounted](a, { value: l = {} }) {
      var u;
      Je.set(a, l), no(a, (u = l == null ? void 0 : l.trigger) != null ? u : n.trigger);
      const d = Si(n, a);
      a.addEventListener("pointerdown", d), a.addEventListener("click", (c) => {
        if (c.detail !== 0) return;
        const f = a.getBoundingClientRect(), m = {
          x: f.left + f.width / 2,
          y: f.top + f.height / 2
        };
        d(c, m);
      });
    },
    [r.updated](a, { value: l = {} }) {
      var u;
      Je.set(a, l), no(a, (u = l == null ? void 0 : l.trigger) != null ? u : n.trigger);
    }
  }, i = {
    [r.mounted](a, { arg: l = "true" }) {
      a.dataset.vWaveTrigger = l, l !== "true" && (a.addEventListener("pointerdown", o), a.addEventListener("click", o));
    },
    [r.updated](a, { arg: l = "true" }) {
      a.dataset.vWaveTrigger = l, l === "true" ? (a.removeEventListener("pointerdown", o), a.removeEventListener("click", o)) : (a.addEventListener("pointerdown", o), a.addEventListener("click", o));
    }
  };
  return {
    wave: s,
    vWave: s,
    waveTrigger: i,
    vWaveTrigger: i
  };
}, Oi = {
  createLocalWaveDirective: $i
}, Qo = Oi;
const Pi = /* @__PURE__ */ $({
  __name: "AppButton",
  props: $e({
    text: null,
    variant: null,
    icon: null,
    iconBefore: null,
    href: null,
    tag: null,
    disabled: { type: Boolean },
    iconAfter: null
  }, { variant: "secondary" }),
  setup(e) {
    Lr((c) => ({
      d1803a54: u.value,
      d17f5196: d.value
    }));
    const { createLocalWaveDirective: t } = Qo, { vWave: n } = t({
      duration: 0.2
    }), r = k(null), { elementX: o, elementY: s, elementWidth: i, elementHeight: a, isOutside: l } = Qr(r), u = P(
      () => l.value ? void 0 : `${o.value / i.value * 100}%`
    ), d = P(
      () => l.value ? void 0 : `${s.value / a.value * 100}%`
    );
    return (c, f) => {
      const m = It;
      return Ze((A(), T(Ot(c.tag ?? "button"), {
        ref_key: "buttonEl",
        ref: r,
        href: c.href,
        disabled: c.disabled,
        tabindex: "0",
        class: V([
          c.$style["app-button"],
          c.$style[c.variant],
          {
            [c.$style["v-border-shine"]]: !(p(l) && c.disabled)
          }
        ]),
        onKeydown: [
          f[0] || (f[0] = Jt((h) => c.$emit("click", h), ["enter"])),
          f[1] || (f[1] = Jt((h) => c.$emit("click", h), ["space"]))
        ]
      }, {
        default: _(() => [
          c.icon ?? c.iconBefore ? (A(), T(m, {
            key: 0,
            icon: c.icon ?? c.iconBefore,
            class: V(c.$style["icon-before"])
          }, null, 8, ["icon", "class"])) : H("", !0),
          O(c.$slots, "default", {}, () => [
            de(Ee(c.text), 1)
          ]),
          c.iconAfter ? (A(), T(m, {
            key: 1,
            icon: c.iconAfter,
            class: V(c.$style["icon-after"])
          }, null, 8, ["icon", "class"])) : H("", !0)
        ]),
        _: 3
      }, 40, ["href", "disabled", "class"])), [
        [p(n), { disabled: c.disabled }]
      ]);
    };
  }
}), Ti = "_app-button_f9040b0", ki = "_v-border-shine_8419f80", Ii = "_primary_5785c37", Di = "_secondary_31cb9f8", Bi = "_text_7e1c00c", Mi = "_icon-before_fb07300", Ri = "_icon-after_4d342ca", Li = "_label_bdd07c7", Fi = { "app-button": Ti, "v-border-shine": ki, primary: Ii, secondary: Di, text: Bi, "icon-before": Mi, "icon-after": Ri, label: Li }, Vi = {
  $style: Fi
}, Ni = /* @__PURE__ */ oe(Pi, [["__cssModules", Vi]]), Wi = /* @__PURE__ */ $({
  __name: "AppCard",
  props: $e({
    variant: null
  }, { variant: "raised" }),
  setup(e) {
    return (t, n) => (A(), W("div", {
      class: V([t.$style["app-card"], { [t.$style.variant]: t.variant }])
    }, [
      O(t.$slots, "default")
    ], 2));
  }
}), ji = "_app-card_7a12d7d", Hi = "_sunken_b1cf9a9", Ki = { "app-card": ji, sunken: Hi }, Ui = {
  $style: Ki
}, zi = /* @__PURE__ */ oe(Wi, [["__cssModules", Ui]]), qi = ["top", "right", "bottom", "left"], _e = Math.min, Z = Math.max, Et = Math.round, pt = Math.floor, ce = (e) => ({
  x: e,
  y: e
}), Gi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Yi = {
  start: "end",
  end: "start"
};
function an(e, t, n) {
  return Z(e, _e(t, n));
}
function ge(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ye(e) {
  return e.split("-")[0];
}
function Ye(e) {
  return e.split("-")[1];
}
function _n(e) {
  return e === "x" ? "y" : "x";
}
function An(e) {
  return e === "y" ? "height" : "width";
}
function Ae(e) {
  return ["top", "bottom"].includes(ye(e)) ? "y" : "x";
}
function Sn(e) {
  return _n(Ae(e));
}
function Xi(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ye(e), o = Sn(e), s = An(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = _t(i)), [i, _t(i)];
}
function Qi(e) {
  const t = _t(e);
  return [ln(e), t, ln(t)];
}
function ln(e) {
  return e.replace(/start|end/g, (t) => Yi[t]);
}
function Ji(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function Zi(e, t, n, r) {
  const o = Ye(e);
  let s = Ji(ye(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(ln)))), s;
}
function _t(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Gi[t]);
}
function ea(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Jo(e) {
  return typeof e != "number" ? ea(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function At(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function io(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Ae(t), i = Sn(t), a = An(i), l = ye(t), u = s === "y", d = r.x + r.width / 2 - o.width / 2, c = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: c
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: c
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ye(t)) {
    case "start":
      m[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      m[i] += f * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const ta = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: c
  } = io(u, r, l), f = r, m = {}, h = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: v,
      fn: w
    } = a[g], {
      x: b,
      y,
      data: C,
      reset: x
    } = await w({
      x: d,
      y: c,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: m,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = b ?? d, c = y ?? c, m = {
      ...m,
      [v]: {
        ...m[v],
        ...C
      }
    }, x && h <= 50 && (h++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (u = x.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : x.rects), {
      x: d,
      y: c
    } = io(u, f, l)), g = -1);
  }
  return {
    x: d,
    y: c,
    placement: f,
    strategy: o,
    middlewareData: m
  };
};
async function nt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: c = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = ge(t, e), h = Jo(m), v = a[f ? c === "floating" ? "reference" : "floating" : c], w = At(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = c === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), C = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = At(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: y,
    strategy: l
  }) : b);
  return {
    top: (w.top - x.top + h.top) / C.y,
    bottom: (x.bottom - w.bottom + h.bottom) / C.y,
    left: (w.left - x.left + h.left) / C.x,
    right: (x.right - w.right + h.right) / C.x
  };
}
const na = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: d = 0
    } = ge(e, t) || {};
    if (u == null)
      return {};
    const c = Jo(d), f = {
      x: n,
      y: r
    }, m = Sn(o), h = An(m), g = await i.getDimensions(u), v = m === "y", w = v ? "top" : "left", b = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", C = s.reference[h] + s.reference[m] - f[m] - s.floating[h], x = f[m] - s.reference[m], E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let S = E ? E[y] : 0;
    (!S || !await (i.isElement == null ? void 0 : i.isElement(E))) && (S = a.floating[y] || s.floating[h]);
    const I = C / 2 - x / 2, M = S / 2 - g[h] / 2 - 1, R = _e(c[w], M), L = _e(c[b], M), U = R, z = S - g[h] - L, j = S / 2 - g[h] / 2 + I, X = an(U, j, z), J = !l.arrow && Ye(o) != null && j !== X && s.reference[h] / 2 - (j < U ? R : L) - g[h] / 2 < 0, K = J ? j < U ? j - U : j - z : 0;
    return {
      [m]: f[m] + K,
      data: {
        [m]: X,
        centerOffset: j - X - K,
        ...J && {
          alignmentOffset: K
        }
      },
      reset: J
    };
  }
}), oa = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: l,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: c = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...v
      } = ge(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = ye(o), b = Ae(a), y = ye(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), x = f || (y || !g ? [_t(a)] : Qi(a)), E = h !== "none";
      !f && E && x.push(...Zi(a, g, h, C));
      const S = [a, ...x], I = await nt(t, v), M = [];
      let R = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && M.push(I[w]), c) {
        const j = Xi(o, i, C);
        M.push(I[j[0]], I[j[1]]);
      }
      if (R = [...R, {
        placement: o,
        overflows: M
      }], !M.every((j) => j <= 0)) {
        var L, U;
        const j = (((L = s.flip) == null ? void 0 : L.index) || 0) + 1, X = S[j];
        if (X)
          return {
            data: {
              index: j,
              overflows: R
            },
            reset: {
              placement: X
            }
          };
        let J = (U = R.filter((K) => K.overflows[0] <= 0).sort((K, le) => K.overflows[1] - le.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!J)
          switch (m) {
            case "bestFit": {
              var z;
              const K = (z = R.filter((le) => {
                if (E) {
                  const ue = Ae(le.placement);
                  return ue === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ue === "y";
                }
                return !0;
              }).map((le) => [le.placement, le.overflows.filter((ue) => ue > 0).reduce((ue, Ve) => ue + Ve, 0)]).sort((le, ue) => le[1] - ue[1])[0]) == null ? void 0 : z[0];
              K && (J = K);
              break;
            }
            case "initialPlacement":
              J = a;
              break;
          }
        if (o !== J)
          return {
            reset: {
              placement: J
            }
          };
      }
      return {};
    }
  };
};
function ao(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function lo(e) {
  return qi.some((t) => e[t] >= 0);
}
const ra = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = ge(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await nt(t, {
            ...o,
            elementContext: "reference"
          }), i = ao(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: lo(i)
            }
          };
        }
        case "escaped": {
          const s = await nt(t, {
            ...o,
            altBoundary: !0
          }), i = ao(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: lo(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function sa(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = ye(n), a = Ye(n), l = Ae(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, d = s && l ? -1 : 1, c = ge(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: h
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: c.mainAxis || 0,
    crossAxis: c.crossAxis || 0,
    alignmentAxis: c.alignmentAxis
  };
  return a && typeof h == "number" && (m = a === "end" ? h * -1 : h), l ? {
    x: m * d,
    y: f * u
  } : {
    x: f * u,
    y: m * d
  };
}
const ia = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, l = await sa(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, aa = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (v) => {
            let {
              x: w,
              y: b
            } = v;
            return {
              x: w,
              y: b
            };
          }
        },
        ...l
      } = ge(e, t), u = {
        x: n,
        y: r
      }, d = await nt(t, l), c = Ae(ye(o)), f = _n(c);
      let m = u[f], h = u[c];
      if (s) {
        const v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", b = m + d[v], y = m - d[w];
        m = an(b, m, y);
      }
      if (i) {
        const v = c === "y" ? "top" : "left", w = c === "y" ? "bottom" : "right", b = h + d[v], y = h - d[w];
        h = an(b, h, y);
      }
      const g = a.fn({
        ...t,
        [f]: m,
        [c]: h
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [f]: s,
            [c]: i
          }
        }
      };
    }
  };
}, la = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = ge(e, t), d = {
        x: n,
        y: r
      }, c = Ae(o), f = _n(c);
      let m = d[f], h = d[c];
      const g = ge(a, t), v = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const y = f === "y" ? "height" : "width", C = s.reference[f] - s.floating[y] + v.mainAxis, x = s.reference[f] + s.reference[y] - v.mainAxis;
        m < C ? m = C : m > x && (m = x);
      }
      if (u) {
        var w, b;
        const y = f === "y" ? "width" : "height", C = ["top", "left"].includes(ye(o)), x = s.reference[c] - s.floating[y] + (C && ((w = i.offset) == null ? void 0 : w[c]) || 0) + (C ? 0 : v.crossAxis), E = s.reference[c] + s.reference[y] + (C ? 0 : ((b = i.offset) == null ? void 0 : b[c]) || 0) - (C ? v.crossAxis : 0);
        h < x ? h = x : h > E && (h = E);
      }
      return {
        [f]: m,
        [c]: h
      };
    }
  };
}, ua = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...u
      } = ge(e, t), d = await nt(t, u), c = ye(o), f = Ye(o), m = Ae(o) === "y", {
        width: h,
        height: g
      } = s.floating;
      let v, w;
      c === "top" || c === "bottom" ? (v = c, w = f === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (w = c, v = f === "end" ? "top" : "bottom");
      const b = g - d.top - d.bottom, y = h - d.left - d.right, C = _e(g - d[v], b), x = _e(h - d[w], y), E = !t.middlewareData.shift;
      let S = C, I = x;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = y), (r = t.middlewareData.shift) != null && r.enabled.y && (S = b), E && !f) {
        const R = Z(d.left, 0), L = Z(d.right, 0), U = Z(d.top, 0), z = Z(d.bottom, 0);
        m ? I = h - 2 * (R !== 0 || L !== 0 ? R + L : Z(d.left, d.right)) : S = g - 2 * (U !== 0 || z !== 0 ? U + z : Z(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: I,
        availableHeight: S
      });
      const M = await i.getDimensions(a.floating);
      return h !== M.width || g !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Dt() {
  return typeof window < "u";
}
function Le(e) {
  return $n(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ee(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function pe(e) {
  var t;
  return (t = ($n(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function $n(e) {
  return Dt() ? e instanceof Node || e instanceof ee(e).Node : !1;
}
function ie(e) {
  return Dt() ? e instanceof Element || e instanceof ee(e).Element : !1;
}
function fe(e) {
  return Dt() ? e instanceof HTMLElement || e instanceof ee(e).HTMLElement : !1;
}
function uo(e) {
  return !Dt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ee(e).ShadowRoot;
}
function ut(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ae(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ca(e) {
  return ["table", "td", "th"].includes(Le(e));
}
function Bt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function On(e) {
  const t = Pn(), n = ie(e) ? ae(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function da(e) {
  let t = Se(e);
  for (; fe(t) && !ze(t); ) {
    if (On(t))
      return t;
    if (Bt(t))
      return null;
    t = Se(t);
  }
  return null;
}
function Pn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ze(e) {
  return ["html", "body", "#document"].includes(Le(e));
}
function ae(e) {
  return ee(e).getComputedStyle(e);
}
function Mt(e) {
  return ie(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Se(e) {
  if (Le(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    uo(e) && e.host || // Fallback.
    pe(e)
  );
  return uo(t) ? t.host : t;
}
function Zo(e) {
  const t = Se(e);
  return ze(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : fe(t) && ut(t) ? t : Zo(t);
}
function ot(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Zo(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ee(o);
  if (s) {
    const a = un(i);
    return t.concat(i, i.visualViewport || [], ut(o) ? o : [], a && n ? ot(a) : []);
  }
  return t.concat(o, ot(o, [], n));
}
function un(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function er(e) {
  const t = ae(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = fe(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = Et(n) !== s || Et(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function Tn(e) {
  return ie(e) ? e : e.contextElement;
}
function He(e) {
  const t = Tn(e);
  if (!fe(t))
    return ce(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = er(t);
  let i = (s ? Et(n.width) : n.width) / r, a = (s ? Et(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const fa = /* @__PURE__ */ ce(0);
function tr(e) {
  const t = ee(e);
  return !Pn() || !t.visualViewport ? fa : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function pa(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ee(e) ? !1 : t;
}
function Be(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Tn(e);
  let i = ce(1);
  t && (r ? ie(r) && (i = He(r)) : i = He(e));
  const a = pa(s, n, r) ? tr(s) : ce(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, d = o.width / i.x, c = o.height / i.y;
  if (s) {
    const f = ee(s), m = r && ie(r) ? ee(r) : r;
    let h = f, g = un(h);
    for (; g && r && m !== h; ) {
      const v = He(g), w = g.getBoundingClientRect(), b = ae(g), y = w.left + (g.clientLeft + parseFloat(b.paddingLeft)) * v.x, C = w.top + (g.clientTop + parseFloat(b.paddingTop)) * v.y;
      l *= v.x, u *= v.y, d *= v.x, c *= v.y, l += y, u += C, h = ee(g), g = un(h);
    }
  }
  return At({
    width: d,
    height: c,
    x: l,
    y: u
  });
}
function kn(e, t) {
  const n = Mt(e).scrollLeft;
  return t ? t.left + n : Be(pe(e)).left + n;
}
function nr(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    kn(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function ma(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = pe(r), a = t ? Bt(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ce(1);
  const d = ce(0), c = fe(r);
  if ((c || !c && !s) && ((Le(r) !== "body" || ut(i)) && (l = Mt(r)), fe(r))) {
    const m = Be(r);
    u = He(r), d.x = m.x + r.clientLeft, d.y = m.y + r.clientTop;
  }
  const f = i && !c && !s ? nr(i, l, !0) : ce(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function ha(e) {
  return Array.from(e.getClientRects());
}
function va(e) {
  const t = pe(e), n = Mt(e), r = e.ownerDocument.body, o = Z(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Z(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + kn(e);
  const a = -n.scrollTop;
  return ae(r).direction === "rtl" && (i += Z(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function ga(e, t) {
  const n = ee(e), r = pe(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = Pn();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
function ya(e, t) {
  const n = Be(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = fe(e) ? He(e) : ce(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, u = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function co(e, t, n) {
  let r;
  if (t === "viewport")
    r = ga(e, n);
  else if (t === "document")
    r = va(pe(e));
  else if (ie(t))
    r = ya(t, n);
  else {
    const o = tr(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return At(r);
}
function or(e, t) {
  const n = Se(e);
  return n === t || !ie(n) || ze(n) ? !1 : ae(n).position === "fixed" || or(n, t);
}
function ba(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ot(e, [], !1).filter((a) => ie(a) && Le(a) !== "body"), o = null;
  const s = ae(e).position === "fixed";
  let i = s ? Se(e) : e;
  for (; ie(i) && !ze(i); ) {
    const a = ae(i), l = On(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ut(i) && !l && or(e, i)) ? r = r.filter((d) => d !== i) : o = a, i = Se(i);
  }
  return t.set(e, r), r;
}
function wa(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Bt(t) ? [] : ba(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((u, d) => {
    const c = co(t, d, o);
    return u.top = Z(c.top, u.top), u.right = _e(c.right, u.right), u.bottom = _e(c.bottom, u.bottom), u.left = Z(c.left, u.left), u;
  }, co(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Ca(e) {
  const {
    width: t,
    height: n
  } = er(e);
  return {
    width: t,
    height: n
  };
}
function xa(e, t, n) {
  const r = fe(t), o = pe(t), s = n === "fixed", i = Be(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ce(0);
  if (r || !r && !s)
    if ((Le(t) !== "body" || ut(o)) && (a = Mt(t)), r) {
      const f = Be(t, !0, s, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = kn(o));
  const u = o && !r && !s ? nr(o, a) : ce(0), d = i.left + a.scrollLeft - l.x - u.x, c = i.top + a.scrollTop - l.y - u.y;
  return {
    x: d,
    y: c,
    width: i.width,
    height: i.height
  };
}
function zt(e) {
  return ae(e).position === "static";
}
function fo(e, t) {
  if (!fe(e) || ae(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return pe(e) === n && (n = n.ownerDocument.body), n;
}
function rr(e, t) {
  const n = ee(e);
  if (Bt(e))
    return n;
  if (!fe(e)) {
    let o = Se(e);
    for (; o && !ze(o); ) {
      if (ie(o) && !zt(o))
        return o;
      o = Se(o);
    }
    return n;
  }
  let r = fo(e, t);
  for (; r && ca(r) && zt(r); )
    r = fo(r, t);
  return r && ze(r) && zt(r) && !On(r) ? n : r || da(e) || n;
}
const Ea = async function(e) {
  const t = this.getOffsetParent || rr, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: xa(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function _a(e) {
  return ae(e).direction === "rtl";
}
const Aa = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ma,
  getDocumentElement: pe,
  getClippingRect: wa,
  getOffsetParent: rr,
  getElementRects: Ea,
  getClientRects: ha,
  getDimensions: Ca,
  getScale: He,
  isElement: ie,
  isRTL: _a
};
function sr(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Sa(e, t) {
  let n = null, r;
  const o = pe(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: c,
      width: f,
      height: m
    } = u;
    if (a || t(), !f || !m)
      return;
    const h = pt(c), g = pt(o.clientWidth - (d + f)), v = pt(o.clientHeight - (c + m)), w = pt(d), y = {
      rootMargin: -h + "px " + -g + "px " + -v + "px " + -w + "px",
      threshold: Z(0, _e(1, l)) || 1
    };
    let C = !0;
    function x(E) {
      const S = E[0].intersectionRatio;
      if (S !== l) {
        if (!C)
          return i();
        S ? i(!1, S) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !sr(u, e.getBoundingClientRect()) && i(), C = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, y);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function $a(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Tn(e), d = o || s ? [...u ? ot(u) : [], ...ot(t)] : [];
  d.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const c = u && a ? Sa(u, n) : null;
  let f = -1, m = null;
  i && (m = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === u && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var y;
      (y = m) == null || y.observe(t);
    })), n();
  }), u && !l && m.observe(u), m.observe(t));
  let h, g = l ? Be(e) : null;
  l && v();
  function v() {
    const w = Be(e);
    g && !sr(g, w) && n(), g = w, h = requestAnimationFrame(v);
  }
  return n(), () => {
    var w;
    d.forEach((b) => {
      o && b.removeEventListener("scroll", n), s && b.removeEventListener("resize", n);
    }), c == null || c(), (w = m) == null || w.disconnect(), m = null, l && cancelAnimationFrame(h);
  };
}
const Oa = ia, Pa = aa, po = oa, Ta = ua, ka = ra, Ia = na, Da = la, Ba = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Aa,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return ta(e, t, {
    ...o,
    platform: s
  });
};
function Ma(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function cn(e) {
  if (Ma(e)) {
    const t = e.$el;
    return $n(t) && Le(t) === "#comment" ? null : t;
  }
  return e;
}
function je(e) {
  return typeof e == "function" ? e() : p(e);
}
function Ra(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = cn(je(e.element));
      return n == null ? {} : Ia({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function ir(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function mo(e, t) {
  const n = ir(e);
  return Math.round(t * n) / n;
}
function La(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = P(() => {
    var S;
    return (S = je(n.open)) != null ? S : !0;
  }), s = P(() => je(n.middleware)), i = P(() => {
    var S;
    return (S = je(n.placement)) != null ? S : "bottom";
  }), a = P(() => {
    var S;
    return (S = je(n.strategy)) != null ? S : "absolute";
  }), l = P(() => {
    var S;
    return (S = je(n.transform)) != null ? S : !0;
  }), u = P(() => cn(e.value)), d = P(() => cn(t.value)), c = k(0), f = k(0), m = k(a.value), h = k(i.value), g = $o({}), v = k(!1), w = P(() => {
    const S = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return S;
    const I = mo(d.value, c.value), M = mo(d.value, f.value);
    return l.value ? {
      ...S,
      transform: "translate(" + I + "px, " + M + "px)",
      ...ir(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: I + "px",
      top: M + "px"
    };
  });
  let b;
  function y() {
    if (u.value == null || d.value == null)
      return;
    const S = o.value;
    Ba(u.value, d.value, {
      middleware: s.value,
      placement: i.value,
      strategy: a.value
    }).then((I) => {
      c.value = I.x, f.value = I.y, m.value = I.strategy, h.value = I.placement, g.value = I.middlewareData, v.value = S !== !1;
    });
  }
  function C() {
    typeof b == "function" && (b(), b = void 0);
  }
  function x() {
    if (C(), r === void 0) {
      y();
      return;
    }
    if (u.value != null && d.value != null) {
      b = r(u.value, d.value, y);
      return;
    }
  }
  function E() {
    o.value || (v.value = !1);
  }
  return q([s, i, a, o], y, {
    flush: "sync"
  }), q([u, d], x, {
    flush: "sync"
  }), q(o, E, {
    flush: "sync"
  }), Oo() && Po(C), {
    x: Ne(c),
    y: Ne(f),
    strategy: Ne(m),
    placement: Ne(h),
    middlewareData: Ne(g),
    isPositioned: Ne(v),
    floatingStyles: w,
    update: y
  };
}
function In(e) {
  return e ? e.flatMap((t) => t.type === st ? In(t.children) : [t]) : [];
}
const dn = $({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var l, u;
      if (!n.default)
        return null;
      const r = In(n.default()), o = r.findIndex((d) => d.type !== To);
      if (o === -1)
        return r;
      const s = r[o];
      (l = s.props) == null || delete l.ref;
      const i = s.props ? B(t, s.props) : t;
      t.class && ((u = s.props) != null && u.class) && delete s.props.class;
      const a = Fr(s, i);
      for (const d in i)
        d.startsWith("on") && (a.props || (a.props = {}), a.props[d] = i[d]);
      return r.length === 1 ? a : (r[o] = a, r);
    };
  }
}), N = $({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: n }) {
    const r = e.asChild ? "template" : e.as;
    return typeof r == "string" && ["area", "img", "input"].includes(r) ? () => xe(r, t) : r !== "template" ? () => xe(e.as, t, { default: n.default }) : () => xe(dn, t, { default: n.default });
  }
}), Dn = /* @__PURE__ */ $({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (A(), T(p(N), {
      as: t.as,
      "as-child": t.asChild,
      "aria-hidden": t.feature === "focusable" ? "true" : void 0,
      "data-hidden": t.feature === "fully-hidden" ? "" : void 0,
      tabindex: t.feature === "fully-hidden" ? "-1" : void 0,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      }
    }, {
      default: _(() => [
        O(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
}), ho = Object.freeze({
  ignoreUnknown: !1,
  respectType: !1,
  respectFunctionNames: !1,
  respectFunctionProperties: !1,
  unorderedObjects: !0,
  unorderedArrays: !1,
  unorderedSets: !1,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function vo(e, t) {
  t ? t = { ...ho, ...t } : t = ho;
  const n = ar(t);
  return n.dispatch(e), n.toString();
}
const Fa = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function ar(e) {
  let t = "", n = /* @__PURE__ */ new Map();
  const r = (o) => {
    t += o;
  };
  return {
    toString() {
      return t;
    },
    getContext() {
      return n;
    },
    dispatch(o) {
      return e.replacer && (o = e.replacer(o)), this[o === null ? "null" : typeof o](o);
    },
    object(o) {
      if (o && typeof o.toJSON == "function")
        return this.object(o.toJSON());
      const s = Object.prototype.toString.call(o);
      let i = "";
      const a = s.length;
      a < 10 ? i = "unknown:[" + s + "]" : i = s.slice(8, a - 1), i = i.toLowerCase();
      let l = null;
      if ((l = n.get(o)) === void 0)
        n.set(o, n.size);
      else
        return this.dispatch("[CIRCULAR:" + l + "]");
      if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(o))
        return r("buffer:"), r(o.toString("utf8"));
      if (i !== "object" && i !== "function" && i !== "asyncfunction")
        this[i] ? this[i](o) : e.ignoreUnknown || this.unkown(o, i);
      else {
        let u = Object.keys(o);
        e.unorderedObjects && (u = u.sort());
        let d = [];
        e.respectType !== !1 && !go(o) && (d = Fa), e.excludeKeys && (u = u.filter((f) => !e.excludeKeys(f)), d = d.filter((f) => !e.excludeKeys(f))), r("object:" + (u.length + d.length) + ":");
        const c = (f) => {
          this.dispatch(f), r(":"), e.excludeValues || this.dispatch(o[f]), r(",");
        };
        for (const f of u)
          c(f);
        for (const f of d)
          c(f);
      }
    },
    array(o, s) {
      if (s = s === void 0 ? e.unorderedArrays !== !1 : s, r("array:" + o.length + ":"), !s || o.length <= 1) {
        for (const l of o)
          this.dispatch(l);
        return;
      }
      const i = /* @__PURE__ */ new Map(), a = o.map((l) => {
        const u = ar(e);
        u.dispatch(l);
        for (const [d, c] of u.getContext())
          i.set(d, c);
        return u.toString();
      });
      return n = i, a.sort(), this.array(a, !1);
    },
    date(o) {
      return r("date:" + o.toJSON());
    },
    symbol(o) {
      return r("symbol:" + o.toString());
    },
    unkown(o, s) {
      if (r(s), !!o && (r(":"), o && typeof o.entries == "function"))
        return this.array(
          Array.from(o.entries()),
          !0
          /* ordered */
        );
    },
    error(o) {
      return r("error:" + o.toString());
    },
    boolean(o) {
      return r("bool:" + o);
    },
    string(o) {
      r("string:" + o.length + ":"), r(o);
    },
    function(o) {
      r("fn:"), go(o) ? this.dispatch("[native]") : this.dispatch(o.toString()), e.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(o.name)), e.respectFunctionProperties && this.object(o);
    },
    number(o) {
      return r("number:" + o);
    },
    xml(o) {
      return r("xml:" + o.toString());
    },
    null() {
      return r("Null");
    },
    undefined() {
      return r("Undefined");
    },
    regexp(o) {
      return r("regex:" + o.toString());
    },
    uint8array(o) {
      return r("uint8array:"), this.dispatch(Array.prototype.slice.call(o));
    },
    uint8clampedarray(o) {
      return r("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(o));
    },
    int8array(o) {
      return r("int8array:"), this.dispatch(Array.prototype.slice.call(o));
    },
    uint16array(o) {
      return r("uint16array:"), this.dispatch(Array.prototype.slice.call(o));
    },
    int16array(o) {
      return r("int16array:"), this.dispatch(Array.prototype.slice.call(o));
    },
    uint32array(o) {
      return r("uint32array:"), this.dispatch(Array.prototype.slice.call(o));
    },
    int32array(o) {
      return r("int32array:"), this.dispatch(Array.prototype.slice.call(o));
    },
    float32array(o) {
      return r("float32array:"), this.dispatch(Array.prototype.slice.call(o));
    },
    float64array(o) {
      return r("float64array:"), this.dispatch(Array.prototype.slice.call(o));
    },
    arraybuffer(o) {
      return r("arraybuffer:"), this.dispatch(new Uint8Array(o));
    },
    url(o) {
      return r("url:" + o.toString());
    },
    map(o) {
      r("map:");
      const s = [...o];
      return this.array(s, e.unorderedSets !== !1);
    },
    set(o) {
      r("set:");
      const s = [...o];
      return this.array(s, e.unorderedSets !== !1);
    },
    file(o) {
      return r("file:"), this.dispatch([o.name, o.size, o.type, o.lastModfied]);
    },
    blob() {
      if (e.ignoreUnknown)
        return r("[blob]");
      throw new Error(
        `Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`
      );
    },
    domwindow() {
      return r("domwindow");
    },
    bigint(o) {
      return r("bigint:" + o.toString());
    },
    /* Node.js standard native objects */
    process() {
      return r("process");
    },
    timer() {
      return r("timer");
    },
    pipe() {
      return r("pipe");
    },
    tcp() {
      return r("tcp");
    },
    udp() {
      return r("udp");
    },
    tty() {
      return r("tty");
    },
    statwatcher() {
      return r("statwatcher");
    },
    securecontext() {
      return r("securecontext");
    },
    connection() {
      return r("connection");
    },
    zlib() {
      return r("zlib");
    },
    context() {
      return r("context");
    },
    nodescript() {
      return r("nodescript");
    },
    httpparser() {
      return r("httpparser");
    },
    dataview() {
      return r("dataview");
    },
    signal() {
      return r("signal");
    },
    fsevent() {
      return r("fsevent");
    },
    tlswrap() {
      return r("tlswrap");
    }
  };
}
const lr = "[native code] }", Va = lr.length;
function go(e) {
  return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-Va) === lr;
}
function St(e, t, n = {}) {
  return e === t || vo(e, n) === vo(t, n);
}
function rt(e) {
  return e == null;
}
function yo(e, t) {
  return rt(e) ? !1 : Array.isArray(e) ? e.some((n) => St(n, t)) : St(e, t);
}
function te(e, t) {
  const n = typeof e == "string" ? `${e}Context` : t, r = Symbol(n);
  return [(i) => {
    const a = ko(r, i);
    if (a || a === null)
      return a;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (i) => (Io(r, i), i)];
}
const [Rt, id] = te("ConfigProvider");
function Na(e) {
  const t = Rt({
    dir: k("ltr")
  });
  return P(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function F() {
  const e = it(), t = k(), n = P(() => {
    var i, a;
    return ["#text", "#comment"].includes((i = t.value) == null ? void 0 : i.$el.nodeName) ? (a = t.value) == null ? void 0 : a.$el.nextElementSibling : Re(t);
  }), r = Object.assign({}, e.exposed), o = {};
  for (const i in e.props)
    Object.defineProperty(o, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i]
    });
  if (Object.keys(r).length > 0)
    for (const i in r)
      Object.defineProperty(o, i, {
        enumerable: !0,
        configurable: !0,
        get: () => r[i]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function s(i) {
    t.value = i, i && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => i instanceof Element ? i : i.$el
    }), e.exposed = o);
  }
  return { forwardRef: s, currentRef: t, currentElement: n };
}
let Wa = 0;
function Me(e, t = "reka") {
  const n = Rt({ useId: void 0 });
  return Nn.useId ? `${t}-${Nn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Wa}`;
}
function Bn(e) {
  return Oo() ? (Po(e), !0) : !1;
}
function ja() {
  const e = /* @__PURE__ */ new Set(), t = (s) => {
    e.delete(s);
  };
  return {
    on: (s) => {
      e.add(s);
      const i = () => t(s);
      return Bn(i), {
        off: i
      };
    },
    off: t,
    trigger: (...s) => Promise.all(Array.from(e).map((i) => i(...s))),
    clear: () => {
      e.clear();
    }
  };
}
const Oe = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const bo = /* @__PURE__ */ Ha();
function Ha() {
  var e, t;
  return Oe && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Ka(e) {
  return it();
}
function ur(e, t = 1e4) {
  return Vr((n, r) => {
    let o = gt(e), s;
    const i = () => setTimeout(() => {
      o = gt(e), r();
    }, gt(t));
    return Bn(() => {
      clearTimeout(s);
    }), {
      get() {
        return n(), o;
      },
      set(a) {
        o = a, r(), clearTimeout(s), s = i();
      }
    };
  });
}
function Ua(e, t) {
  Ka() && gn(e, t);
}
function za(e, t, n = {}) {
  const {
    immediate: r = !0,
    immediateCallback: o = !1
  } = n, s = $o(!1);
  let i = null;
  function a() {
    i && (clearTimeout(i), i = null);
  }
  function l() {
    s.value = !1, a();
  }
  function u(...d) {
    o && e(), a(), s.value = !0, i = setTimeout(() => {
      s.value = !1, i = null, e(...d);
    }, gt(t));
  }
  return r && (s.value = !0, Oe && u()), Bn(l), {
    isPending: Nr(s),
    start: u,
    stop: l
  };
}
function qa(e, t) {
  const n = k(e);
  function r(s) {
    return t[n.value][s] ?? n.value;
  }
  return {
    state: n,
    dispatch: (s) => {
      n.value = r(s);
    }
  };
}
function Ga(e, t) {
  var v;
  const n = k({}), r = k("none"), o = k(e), s = e.value ? "mounted" : "unmounted";
  let i;
  const a = ((v = t.value) == null ? void 0 : v.ownerDocument.defaultView) ?? Jr, { state: l, dispatch: u } = qa(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  }), d = (w) => {
    var b;
    if (Oe) {
      const y = new CustomEvent(w, { bubbles: !1, cancelable: !1 });
      (b = t.value) == null || b.dispatchEvent(y);
    }
  };
  q(
    e,
    async (w, b) => {
      var C;
      const y = b !== w;
      if (await se(), y) {
        const x = r.value, E = mt(t.value);
        w ? (u("MOUNT"), d("enter"), E === "none" && d("after-enter")) : E === "none" || ((C = n.value) == null ? void 0 : C.display) === "none" ? (u("UNMOUNT"), d("leave"), d("after-leave")) : b && x !== E ? (u("ANIMATION_OUT"), d("leave")) : (u("UNMOUNT"), d("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const c = (w) => {
    const b = mt(t.value), y = b.includes(
      w.animationName
    ), C = l.value === "mounted" ? "enter" : "leave";
    if (w.target === t.value && y && (d(`after-${C}`), u("ANIMATION_END"), !o.value)) {
      const x = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = a == null ? void 0 : a.setTimeout(() => {
        var E;
        ((E = t.value) == null ? void 0 : E.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = x);
      });
    }
    w.target === t.value && b === "none" && u("ANIMATION_END");
  }, f = (w) => {
    w.target === t.value && (r.value = mt(t.value));
  }, m = q(
    t,
    (w, b) => {
      w ? (n.value = getComputedStyle(w), w.addEventListener("animationstart", f), w.addEventListener("animationcancel", c), w.addEventListener("animationend", c)) : (u("ANIMATION_END"), i !== void 0 && (a == null || a.clearTimeout(i)), b == null || b.removeEventListener("animationstart", f), b == null || b.removeEventListener("animationcancel", c), b == null || b.removeEventListener("animationend", c));
    },
    { immediate: !0 }
  ), h = q(l, () => {
    const w = mt(t.value);
    r.value = l.value === "mounted" ? w : "none";
  });
  return yn(() => {
    m(), h();
  }), {
    isPresent: P(
      () => ["mounted", "unmountSuspended"].includes(l.value)
    )
  };
}
function mt(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const ct = $({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    var u;
    const { present: r, forceMount: o } = qe(e), s = k(), { isPresent: i } = Ga(r, s);
    n({ present: i });
    let a = t.default({ present: i.value });
    a = In(a || []);
    const l = it();
    if (a && (a == null ? void 0 : a.length) > 1) {
      const d = (u = l == null ? void 0 : l.parent) != null && u.type.name ? `<${l.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${d}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((c) => `  - ${c}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => o.value || r.value || i.value ? xe(t.default({ present: i.value })[0], {
      ref: (d) => {
        const c = Re(d);
        return typeof (c == null ? void 0 : c.hasAttribute) > "u" || (c != null && c.hasAttribute("data-reka-popper-content-wrapper") ? s.value = c.firstElementChild : s.value = c), c;
      }
    }) : null;
  }
});
function Lt(e) {
  const t = it(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    r[Wr(Do(o))] = (...s) => e(o, ...s);
  }), r;
}
function Ft(e) {
  const t = it(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, s) => {
    const i = (t == null ? void 0 : t.type.props[s]).default;
    return i !== void 0 && (o[s] = i), o;
  }, {}), r = jr(e);
  return P(() => {
    const o = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((i) => {
      o[Do(i)] = s[i];
    }), Object.keys({ ...n, ...o }).reduce((i, a) => (r.value[a] !== void 0 && (i[a] = r.value[a]), i), {});
  });
}
function cr(e, t) {
  const n = Ft(e), r = t ? Lt(t) : {};
  return P(() => ({
    ...n.value,
    ...r
  }));
}
const [me, Ya] = te("DialogRoot"), Xa = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = et(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = k(), i = k(), { modal: a } = qe(n);
    return Ya({
      open: o,
      modal: a,
      openModal: () => {
        o.value = !0;
      },
      onOpenChange: (l) => {
        o.value = l;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: s,
      contentElement: i
    }), (l, u) => O(l.$slots, "default", { open: p(o) });
  }
}), Qa = /* @__PURE__ */ $({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = me(), { forwardRef: r, currentElement: o } = F();
    return n.contentId || (n.contentId = Me(void 0, "reka-dialog-content")), Q(() => {
      n.triggerElement.value = o.value;
    }), (s, i) => (A(), T(p(N), B(t, {
      ref: p(r),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": p(n).open.value || !1,
      "aria-controls": p(n).open.value ? p(n).contentId : void 0,
      "data-state": p(n).open.value ? "open" : "closed",
      onClick: p(n).onOpenToggle
    }), {
      default: _(() => [
        O(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Mn = /* @__PURE__ */ $({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Zr();
    return (n, r) => p(t) || n.forceMount ? (A(), T(Bo, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      O(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : H("", !0);
  }
});
function Rn(e, t, n) {
  const r = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
const Ja = "dismissableLayer.pointerDownOutside", Za = "dismissableLayer.focusOutside";
function dr(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && r === n || o.indexOf(r) < o.indexOf(n));
}
function el(e, t) {
  var s;
  const n = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = k(!1), o = k(() => {
  });
  return Y((i) => {
    if (!Oe)
      return;
    const a = async (u) => {
      const d = u.target;
      if (t != null && t.value) {
        if (dr(t.value, d)) {
          r.value = !1;
          return;
        }
        if (u.target && !r.value) {
          let c = function() {
            Rn(
              Ja,
              e,
              f
            );
          };
          const f = { originalEvent: u };
          u.pointerType === "touch" ? (n.removeEventListener("click", o.value), o.value = c, n.addEventListener("click", o.value, {
            once: !0
          })) : c();
        } else
          n.removeEventListener("click", o.value);
        r.value = !1;
      }
    }, l = window.setTimeout(() => {
      n.addEventListener("pointerdown", a);
    }, 0);
    i(() => {
      window.clearTimeout(l), n.removeEventListener("pointerdown", a), n.removeEventListener("click", o.value);
    });
  }), {
    onPointerDownCapture: () => r.value = !0
  };
}
function tl(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = k(!1);
  return Y((s) => {
    if (!Oe)
      return;
    const i = async (a) => {
      t != null && t.value && (await se(), !(!t.value || dr(t.value, a.target)) && a.target && !r.value && Rn(
        Za,
        e,
        { originalEvent: a }
      ));
    };
    n.addEventListener("focusin", i), s(() => n.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => r.value = !0,
    onBlurCapture: () => r.value = !1
  };
}
const ve = Mo({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ln = /* @__PURE__ */ $({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: s } = F(), i = P(
      () => {
        var h;
        return ((h = s.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), a = P(() => ve.layersRoot), l = P(() => s.value ? Array.from(a.value).indexOf(s.value) : -1), u = P(() => ve.layersWithOutsidePointerEventsDisabled.size > 0), d = P(() => {
      const h = Array.from(a.value), [g] = [...ve.layersWithOutsidePointerEventsDisabled].slice(-1), v = h.indexOf(g);
      return l.value >= v;
    }), c = el(async (h) => {
      const g = [...ve.branches].some(
        (v) => v == null ? void 0 : v.contains(h.target)
      );
      !d.value || g || (r("pointerDownOutside", h), r("interactOutside", h), await se(), h.defaultPrevented || r("dismiss"));
    }, s), f = tl((h) => {
      [...ve.branches].some(
        (v) => v == null ? void 0 : v.contains(h.target)
      ) || (r("focusOutside", h), r("interactOutside", h), h.defaultPrevented || r("dismiss"));
    }, s);
    es("Escape", (h) => {
      l.value === a.value.size - 1 && (r("escapeKeyDown", h), h.defaultPrevented || r("dismiss"));
    });
    let m;
    return Y((h) => {
      s.value && (n.disableOutsidePointerEvents && (ve.layersWithOutsidePointerEventsDisabled.size === 0 && (m = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), ve.layersWithOutsidePointerEventsDisabled.add(s.value)), a.value.add(s.value), h(() => {
        n.disableOutsidePointerEvents && ve.layersWithOutsidePointerEventsDisabled.size === 1 && (i.value.body.style.pointerEvents = m);
      }));
    }), Y((h) => {
      h(() => {
        s.value && (a.value.delete(s.value), ve.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (h, g) => (A(), T(p(N), {
      ref: p(o),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: Pt({
        pointerEvents: u.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: p(f).onFocusCapture,
      onBlurCapture: p(f).onBlurCapture,
      onPointerdownCapture: p(c).onPointerDownCapture
    }, {
      default: _(() => [
        O(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function G() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function nl(e) {
  return e ? "open" : "closed";
}
function wo(e) {
  const t = G();
  for (const n of e)
    if (n === t || (n.focus(), G() !== t))
      return;
}
const ol = "DialogTitle", rl = "DialogContent";
function sl({
  titleName: e = ol,
  contentName: t = rl,
  componentLink: n = "dialog.html#title",
  titleId: r,
  descriptionId: o,
  contentElement: s
}) {
  const i = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, a = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  Q(() => {
    var d;
    document.getElementById(r) || console.warn(i);
    const u = (d = s.value) == null ? void 0 : d.getAttribute("aria-describedby");
    o && u && (document.getElementById(o) || console.warn(a));
  });
}
const qt = "focusScope.autoFocusOnMount", Gt = "focusScope.autoFocusOnUnmount", Co = { bubbles: !1, cancelable: !0 };
function il(e, { select: t = !1 } = {}) {
  const n = G();
  for (const r of e)
    if (we(r, { select: t }), G() !== n)
      return !0;
}
function al(e) {
  const t = fr(e), n = xo(t, e), r = xo(t.reverse(), e);
  return [n, r];
}
function fr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function xo(e, t) {
  for (const n of e)
    if (!ll(n, { upTo: t }))
      return n;
}
function ll(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function ul(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function we(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = G();
    e.focus({ preventScroll: !0 }), e !== n && ul(e) && t && e.select();
  }
}
const cl = ts(() => k([]));
function dl() {
  const e = cl();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Eo(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Eo(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Eo(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function fl(e) {
  return e.filter((t) => t.tagName !== "A");
}
const pr = /* @__PURE__ */ $({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { currentRef: o, currentElement: s } = F(), i = k(null), a = dl(), l = Mo({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    Y((d) => {
      if (!Oe)
        return;
      const c = s.value;
      if (!n.trapped)
        return;
      function f(v) {
        if (l.paused || !c)
          return;
        const w = v.target;
        c.contains(w) ? i.value = w : we(i.value, { select: !0 });
      }
      function m(v) {
        if (l.paused || !c)
          return;
        const w = v.relatedTarget;
        w !== null && (c.contains(w) || we(i.value, { select: !0 }));
      }
      function h(v) {
        c.contains(i.value) || we(c);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const g = new MutationObserver(h);
      c && g.observe(c, { childList: !0, subtree: !0 }), d(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), Y(async (d) => {
      const c = s.value;
      if (await se(), !c)
        return;
      a.add(l);
      const f = G();
      if (!c.contains(f)) {
        const h = new CustomEvent(qt, Co);
        c.addEventListener(qt, (g) => r("mountAutoFocus", g)), c.dispatchEvent(h), h.defaultPrevented || (il(fl(fr(c)), {
          select: !0
        }), G() === f && we(c));
      }
      d(() => {
        c.removeEventListener(qt, (v) => r("mountAutoFocus", v));
        const h = new CustomEvent(Gt, Co), g = (v) => {
          r("unmountAutoFocus", v);
        };
        c.addEventListener(Gt, g), c.dispatchEvent(h), setTimeout(() => {
          h.defaultPrevented || we(f ?? document.body, { select: !0 }), c.removeEventListener(Gt, g), a.remove(l);
        }, 0);
      });
    });
    function u(d) {
      if (!n.loop && !n.trapped || l.paused)
        return;
      const c = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, f = G();
      if (c && f) {
        const m = d.currentTarget, [h, g] = al(m);
        h && g ? !d.shiftKey && f === g ? (d.preventDefault(), n.loop && we(h, { select: !0 })) : d.shiftKey && f === h && (d.preventDefault(), n.loop && we(g, { select: !0 })) : f === m && d.preventDefault();
      }
    }
    return (d, c) => (A(), T(p(N), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": d.asChild,
      as: d.as,
      onKeydown: u
    }, {
      default: _(() => [
        O(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), mr = /* @__PURE__ */ $({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = me(), { forwardRef: s, currentElement: i } = F();
    return o.titleId || (o.titleId = Me(void 0, "reka-dialog-title")), o.descriptionId || (o.descriptionId = Me(void 0, "reka-dialog-description")), Q(() => {
      o.contentElement = i, G() !== document.body && (o.triggerElement.value = G());
    }), process.env.NODE_ENV !== "production" && sl({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: i
    }), (a, l) => (A(), T(p(pr), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: l[5] || (l[5] = (u) => r("openAutoFocus", u)),
      onUnmountAutoFocus: l[6] || (l[6] = (u) => r("closeAutoFocus", u))
    }, {
      default: _(() => [
        D(p(Ln), B({
          id: p(o).contentId,
          ref: p(s),
          as: a.as,
          "as-child": a.asChild,
          "disable-outside-pointer-events": a.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": p(o).descriptionId,
          "aria-labelledby": p(o).titleId,
          "data-state": p(nl)(p(o).open.value)
        }, a.$attrs, {
          onDismiss: l[0] || (l[0] = (u) => p(o).onOpenChange(!1)),
          onEscapeKeyDown: l[1] || (l[1] = (u) => r("escapeKeyDown", u)),
          onFocusOutside: l[2] || (l[2] = (u) => r("focusOutside", u)),
          onInteractOutside: l[3] || (l[3] = (u) => r("interactOutside", u)),
          onPointerDownOutside: l[4] || (l[4] = (u) => r("pointerDownOutside", u))
        }), {
          default: _(() => [
            O(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var pl = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, We = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), vt = {}, Yt = 0, hr = function(e) {
  return e && (e.host || hr(e.parentNode));
}, ml = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = hr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, hl = function(e, t, n, r) {
  var o = ml(t, Array.isArray(e) ? e : [e]);
  vt[n] || (vt[n] = /* @__PURE__ */ new WeakMap());
  var s = vt[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(c) {
    !c || a.has(c) || (a.add(c), u(c.parentNode));
  };
  o.forEach(u);
  var d = function(c) {
    !c || l.has(c) || Array.prototype.forEach.call(c.children, function(f) {
      if (a.has(f))
        d(f);
      else
        try {
          var m = f.getAttribute(r), h = m !== null && m !== "false", g = (We.get(f) || 0) + 1, v = (s.get(f) || 0) + 1;
          We.set(f, g), s.set(f, v), i.push(f), g === 1 && h && ht.set(f, !0), v === 1 && f.setAttribute(n, "true"), h || f.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", f, w);
        }
    });
  };
  return d(t), a.clear(), Yt++, function() {
    i.forEach(function(c) {
      var f = We.get(c) - 1, m = s.get(c) - 1;
      We.set(c, f), s.set(c, m), f || (ht.has(c) || c.removeAttribute(r), ht.delete(c)), m || c.removeAttribute(n);
    }), Yt--, Yt || (We = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), vt = {});
  };
}, vl = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = pl(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), hl(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function vr(e) {
  let t;
  q(() => Re(e), (n) => {
    n ? t = vl(n) : t && t();
  }), yn(() => {
    t && t();
  });
}
const gl = /* @__PURE__ */ $({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = me(), s = Lt(r), { forwardRef: i, currentElement: a } = F();
    return vr(a), (l, u) => (A(), T(mr, B({ ...n, ...p(s) }, {
      ref: p(i),
      "trap-focus": p(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        var c;
        d.defaultPrevented || (d.preventDefault(), (c = p(o).triggerElement.value) == null || c.focus());
      }),
      onPointerDownOutside: u[1] || (u[1] = (d) => {
        const c = d.detail.originalEvent, f = c.button === 0 && c.ctrlKey === !0;
        (c.button === 2 || f) && d.preventDefault();
      }),
      onFocusOutside: u[2] || (u[2] = (d) => {
        d.preventDefault();
      })
    }), {
      default: _(() => [
        O(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), yl = /* @__PURE__ */ $({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = Lt(t);
    F();
    const s = me(), i = k(!1), a = k(!1);
    return (l, u) => (A(), T(mr, B({ ...n, ...p(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        var c;
        d.defaultPrevented || (i.value || (c = p(s).triggerElement.value) == null || c.focus(), d.preventDefault()), i.value = !1, a.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        var m;
        d.defaultPrevented || (i.value = !0, d.detail.originalEvent.type === "pointerdown" && (a.value = !0));
        const c = d.target;
        ((m = p(s).triggerElement.value) == null ? void 0 : m.contains(c)) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && a.value && d.preventDefault();
      })
    }), {
      default: _(() => [
        O(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bl = /* @__PURE__ */ $({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = me(), s = Lt(r), { forwardRef: i } = F();
    return (a, l) => (A(), T(p(ct), {
      present: a.forceMount || p(o).open.value
    }, {
      default: _(() => [
        p(o).modal.value ? (A(), T(gl, B({
          key: 0,
          ref: p(i)
        }, { ...n, ...p(s), ...a.$attrs }), {
          default: _(() => [
            O(a.$slots, "default")
          ]),
          _: 3
        }, 16)) : (A(), T(yl, B({
          key: 1,
          ref: p(i)
        }, { ...n, ...p(s), ...a.$attrs }), {
          default: _(() => [
            O(a.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function Xt(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function fn(e, t, n = ".", r) {
  if (!Xt(t))
    return fn(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const i = e[s];
    i != null && (r && r(o, s, i, n) || (Array.isArray(i) && Array.isArray(o[s]) ? o[s] = [...i, ...o[s]] : Xt(i) && Xt(o[s]) ? o[s] = fn(
      i,
      o[s],
      (n ? `${n}.` : "") + s.toString(),
      r
    ) : o[s] = i));
  }
  return o;
}
function wl(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => fn(n, r, "", e), {})
  );
}
const Cl = wl(), xl = ns(() => {
  const e = k(/* @__PURE__ */ new Map()), t = k(), n = P(() => {
    for (const i of e.value.values())
      if (i)
        return !0;
    return !1;
  }), r = Rt({
    scrollBody: k(!0)
  });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", bo && (o == null || o()), t.value = void 0;
  };
  return q(n, (i, a) => {
    var c;
    if (!Oe)
      return;
    if (!i) {
      a && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const l = window.innerWidth - document.documentElement.clientWidth, u = { padding: l, margin: 0 }, d = (c = r.scrollBody) != null && c.value ? typeof r.scrollBody.value == "object" ? Cl({
      padding: r.scrollBody.value.padding === !0 ? l : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? l : r.scrollBody.value.margin
    }, u) : u : { padding: 0, margin: 0 };
    l > 0 && (document.body.style.paddingRight = typeof d.padding == "number" ? `${d.padding}px` : String(d.padding), document.body.style.marginRight = typeof d.margin == "number" ? `${d.margin}px` : String(d.margin), document.body.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), bo && (o = Zt(
      document,
      "touchmove",
      (f) => El(f),
      { passive: !1 }
    )), se(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function gr(e) {
  const t = Math.random().toString(36).substring(2, 7), n = xl();
  n.value.set(t, e ?? !1);
  const r = P({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return Ua(() => {
    n.value.delete(t);
  }), r;
}
function yr(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : yr(n);
  }
}
function El(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && yr(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const _l = /* @__PURE__ */ $({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = me();
    return gr(!0), F(), (n, r) => (A(), T(p(N), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": p(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: _(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Al = /* @__PURE__ */ $({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = me(), { forwardRef: n } = F();
    return (r, o) => {
      var s;
      return (s = p(t)) != null && s.modal.value ? (A(), T(p(ct), {
        key: 0,
        present: r.forceMount || p(t).open.value
      }, {
        default: _(() => [
          D(_l, B(r.$attrs, {
            ref: p(n),
            as: r.as,
            "as-child": r.asChild
          }), {
            default: _(() => [
              O(r.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : H("", !0);
    };
  }
}), Sl = /* @__PURE__ */ $({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const n = me();
    return (r, o) => (A(), T(p(N), B(t, {
      type: r.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (s) => p(n).onOpenChange(!1))
    }), {
      default: _(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), $l = /* @__PURE__ */ $({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = me();
    return F(), (r, o) => (A(), T(p(N), B(t, {
      id: p(n).titleId
    }), {
      default: _(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ol = /* @__PURE__ */ $({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    F();
    const n = me();
    return (r, o) => (A(), T(p(N), B(t, {
      id: p(n).descriptionId
    }), {
      default: _(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function pn() {
  const e = k(), t = P(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : Re(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const Pl = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Tl(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function kl(e, t, n) {
  const r = Tl(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Pl[r];
}
function Il(e, t = !1) {
  const n = G();
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), G() !== n))
      return;
}
function Dl(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const _o = "data-reka-collection-item";
function Fe(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const d = k(/* @__PURE__ */ new Map());
    o = {
      collectionRef: k(),
      itemMap: d
    }, Io(r, o);
  } else
    o = ko(r);
  const s = (d = !1) => {
    const c = o.collectionRef.value;
    if (!c)
      return [];
    const f = Array.from(c.querySelectorAll(`[${_o}]`)), h = Array.from(o.itemMap.value.values()).sort(
      (g, v) => f.indexOf(g.ref) - f.indexOf(v.ref)
    );
    return d ? h : h.filter((g) => g.ref.dataset.disabled !== "");
  }, i = $({
    name: "CollectionSlot",
    setup(d, { slots: c }) {
      const { primitiveElement: f, currentElement: m } = pn();
      return q(m, () => {
        o.collectionRef.value = m.value;
      }), () => xe(dn, { ref: f }, c);
    }
  }), a = $({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(d, { slots: c, attrs: f }) {
      const { primitiveElement: m, currentElement: h } = pn();
      return Y((g) => {
        if (h.value) {
          const v = Hr(h.value);
          o.itemMap.value.set(v, { ref: h.value, value: d.value }), g(() => o.itemMap.value.delete(v));
        }
      }), () => xe(dn, { ...f, [_o]: "", ref: m }, c);
    }
  }), l = P(() => Array.from(o.itemMap.value.values())), u = P(() => o.itemMap.value.size);
  return { getItems: s, reactiveItems: l, itemMapSize: u, CollectionSlot: i, CollectionItem: a };
}
const [Bl, ad] = te("RovingFocusGroup");
function br(e) {
  return P(() => {
    var t;
    return os(e) ? !!((t = Re(e)) != null && t.closest("form")) : !0;
  });
}
const Ml = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {},
    value: {},
    checked: { type: Boolean, default: void 0 },
    required: { type: Boolean },
    disabled: { type: Boolean },
    feature: { default: "fully-hidden" }
  },
  setup(e) {
    const t = e, { primitiveElement: n, currentElement: r } = pn(), o = P(() => t.checked ?? t.value);
    return q(o, (s, i) => {
      if (!r.value)
        return;
      const a = r.value, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "value").set;
      if (d && s !== i) {
        const c = new Event("input", { bubbles: !0 }), f = new Event("change", { bubbles: !0 });
        d.call(a, s), a.dispatchEvent(c), a.dispatchEvent(f);
      }
    }), (s, i) => (A(), T(Dn, B({
      ref_key: "primitiveElement",
      ref: n
    }, { ...t, ...s.$attrs }, { as: "input" }), null, 16));
  }
}), Rl = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    checked: { type: Boolean, default: void 0 },
    required: { type: Boolean },
    disabled: { type: Boolean },
    feature: { default: "fully-hidden" }
  },
  setup(e) {
    const t = e, n = P(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((r, o) => typeof r == "object" ? Object.entries(r).map(([s, i]) => ({ name: `[${t.name}][${o}][${s}]`, value: i })) : { name: `[${t.name}][${o}]`, value: r }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([r, o]) => ({ name: `[${t.name}][${r}]`, value: o })) : []);
    return (r, o) => (A(!0), W(st, null, bn(n.value, (s) => (A(), T(Ml, B({
      key: s.name,
      ref_for: !0
    }, { ...t, ...r.$attrs }, {
      name: s.name,
      value: s.value
    }), null, 16, ["name", "value"]))), 128));
  }
}), [Ll, ld] = te("CheckboxGroupRoot"), Fl = /* @__PURE__ */ $({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: !0 },
    active: { type: Boolean, default: !0 },
    allowShiftKey: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Bl(), r = Me(), o = P(() => t.tabStopId || r), s = P(
      () => n.currentTabStopId.value === o.value
    ), { getItems: i, CollectionItem: a } = Fe();
    Q(() => {
      t.focusable && n.onFocusableItemAdd();
    }), yn(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function l(u) {
      if (u.key === "Tab" && u.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (u.target !== u.currentTarget)
        return;
      const d = kl(
        u,
        n.orientation.value,
        n.dir.value
      );
      if (d !== void 0) {
        if (u.metaKey || u.ctrlKey || u.altKey || !t.allowShiftKey && u.shiftKey)
          return;
        u.preventDefault();
        let c = [...i().map((f) => f.ref).filter((f) => f.dataset.disabled !== "")];
        if (d === "last")
          c.reverse();
        else if (d === "prev" || d === "next") {
          d === "prev" && c.reverse();
          const f = c.indexOf(
            u.currentTarget
          );
          c = n.loop.value ? Dl(c, f + 1) : c.slice(f + 1);
        }
        se(() => Il(c));
      }
    }
    return (u, d) => (A(), T(p(a), null, {
      default: _(() => [
        D(p(N), {
          tabindex: s.value ? 0 : -1,
          "data-orientation": p(n).orientation.value,
          "data-active": u.active,
          "data-disabled": u.focusable ? void 0 : "",
          as: u.as,
          "as-child": u.asChild,
          onMousedown: d[0] || (d[0] = (c) => {
            u.focusable ? p(n).onItemFocus(o.value) : c.preventDefault();
          }),
          onFocus: d[1] || (d[1] = (c) => p(n).onItemFocus(o.value)),
          onKeydown: l
        }, {
          default: _(() => [
            O(u.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
});
function $t(e) {
  return e === "indeterminate";
}
function wr(e) {
  return $t(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const [Vl, Nl] = te("CheckboxRoot"), Wl = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "CheckboxRoot",
  props: {
    defaultValue: { type: [Boolean, String] },
    modelValue: { type: [Boolean, String, null], default: void 0 },
    disabled: { type: Boolean },
    value: { default: "on" },
    id: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: s } = F(), i = Ll(null), a = et(n, "modelValue", r, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), l = P(() => (i == null ? void 0 : i.disabled.value) || n.disabled), u = P(() => rt(i == null ? void 0 : i.modelValue.value) ? a.value === "indeterminate" ? "indeterminate" : a.value : yo(i.modelValue.value, n.value));
    function d() {
      if (rt(i == null ? void 0 : i.modelValue.value))
        a.value = $t(a.value) ? !0 : !a.value;
      else {
        const m = [...i.modelValue.value || []];
        if (yo(m, n.value)) {
          const h = m.findIndex((g) => St(g, n.value));
          m.splice(h, 1);
        } else
          m.push(n.value);
        i.modelValue.value = m;
      }
    }
    const c = br(s), f = P(() => {
      var m;
      return n.id && s.value ? (m = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : m.innerText : void 0;
    });
    return Nl({
      disabled: l,
      state: u
    }), (m, h) => {
      var g, v;
      return A(), T(Ot((g = p(i)) != null && g.rovingFocus.value ? p(Fl) : p(N)), B(m.$attrs, {
        id: m.id,
        ref: p(o),
        role: "checkbox",
        "as-child": m.asChild,
        as: m.as,
        type: m.as === "button" ? "button" : void 0,
        "aria-checked": p($t)(u.value) ? "mixed" : u.value,
        "aria-required": m.required,
        "aria-label": m.$attrs["aria-label"] || f.value,
        "data-state": p(wr)(u.value),
        "data-disabled": l.value ? "" : void 0,
        disabled: l.value,
        focusable: (v = p(i)) != null && v.rovingFocus.value ? !l.value : void 0,
        onKeydown: Jt(De(() => {
        }, ["prevent"]), ["enter"]),
        onClick: d
      }), {
        default: _(() => [
          O(m.$slots, "default", {
            modelValue: p(a),
            state: u.value
          }),
          p(c) && m.name && !p(i) ? (A(), T(p(Rl), {
            key: 0,
            type: "checkbox",
            checked: !!u.value,
            name: m.name,
            value: m.value,
            disabled: l.value,
            required: m.required
          }, null, 8, ["checked", "name", "value", "disabled", "required"])) : H("", !0)
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "focusable", "onKeydown"]);
    };
  }
}), jl = /* @__PURE__ */ $({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = F(), n = Vl();
    return (r, o) => (A(), T(p(ct), {
      present: r.forceMount || p($t)(p(n).state.value) || p(n).state.value === !0
    }, {
      default: _(() => [
        D(p(N), B({
          ref: p(t),
          "data-state": p(wr)(p(n).state.value),
          "data-disabled": p(n).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": r.asChild,
          as: r.as
        }, r.$attrs), {
          default: _(() => [
            O(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Cr, Hl] = te("PopperRoot"), xr = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = k();
    return Hl({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => O(n.$slots, "default");
  }
});
function Er(e) {
  const t = ur("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, s) => {
      t.value = t.value + o;
      {
        const i = G(), a = s.map((f) => {
          var m, h;
          return {
            ...f,
            textValue: ((m = f.value) == null ? void 0 : m.textValue) ?? ((h = f.ref.textContent) == null ? void 0 : h.trim()) ?? ""
          };
        }), l = a.find((f) => f.ref === i), u = a.map((f) => f.textValue), d = Ul(u, t.value, l == null ? void 0 : l.textValue), c = a.find((f) => f.textValue === d);
        return c && c.ref.focus(), c == null ? void 0 : c.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Kl(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Ul(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = Kl(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const _r = /* @__PURE__ */ $({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = F(), o = Cr();
    return Ro(() => {
      o.onAnchorChange(t.reference ?? r.value);
    }), (s, i) => (A(), T(p(N), {
      ref: p(n),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: _(() => [
        O(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function zl(e) {
  return e !== null;
}
function ql(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var v, w, b;
      const { placement: n, rects: r, middlewareData: o } = t, i = ((v = o.arrow) == null ? void 0 : v.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, d] = mn(n), c = { start: "0%", center: "50%", end: "100%" }[d], f = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + a / 2, m = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
      let h = "", g = "";
      return u === "bottom" ? (h = i ? c : `${f}px`, g = `${-l}px`) : u === "top" ? (h = i ? c : `${f}px`, g = `${r.floating.height + l}px`) : u === "right" ? (h = `${-l}px`, g = i ? c : `${m}px`) : u === "left" && (h = `${r.floating.width + l}px`, g = i ? c : `${m}px`), { data: { x: h, y: g } };
    }
  };
}
function mn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function Gl(e) {
  const t = k(), n = P(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = P(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return Q(() => {
    const o = Re(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const s = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const a = i[0];
        let l, u;
        if ("borderBoxSize" in a) {
          const d = a.borderBoxSize, c = Array.isArray(d) ? d[0] : d;
          l = c.inlineSize, u = c.blockSize;
        } else
          l = o.offsetWidth, u = o.offsetHeight;
        t.value = { width: l, height: u };
      });
      return s.observe(o, { box: "border-box" }), () => s.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: r
  };
}
const Yl = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [Xl, Ql] = te("PopperContent"), Ar = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ $e({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Yl
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Cr(), { forwardRef: s, currentElement: i } = F(), a = k(), l = k(), { width: u, height: d } = Gl(l), c = P(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = P(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), m = P(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), h = P(() => ({
      padding: f.value,
      boundary: m.value.filter(zl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), g = rs(() => [
      Oa({
        mainAxis: n.sideOffset + d.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && po({
        ...h.value
      }),
      n.avoidCollisions && Pa({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Da() : void 0,
        ...h.value
      }),
      !n.prioritizePosition && n.avoidCollisions && po({
        ...h.value
      }),
      Ta({
        ...h.value,
        apply: ({ elements: L, rects: U, availableWidth: z, availableHeight: j }) => {
          const { width: X, height: J } = U.reference, K = L.floating.style;
          K.setProperty(
            "--reka-popper-available-width",
            `${z}px`
          ), K.setProperty(
            "--reka-popper-available-height",
            `${j}px`
          ), K.setProperty(
            "--reka-popper-anchor-width",
            `${X}px`
          ), K.setProperty(
            "--reka-popper-anchor-height",
            `${J}px`
          );
        }
      }),
      l.value && Ra({ element: l.value, padding: n.arrowPadding }),
      ql({
        arrowWidth: u.value,
        arrowHeight: d.value
      }),
      n.hideWhenDetached && ka({ strategy: "referenceHidden", ...h.value })
    ]), v = P(() => n.reference ?? o.anchor.value), { floatingStyles: w, placement: b, isPositioned: y, middlewareData: C } = La(
      v,
      a,
      {
        strategy: n.positionStrategy,
        placement: c,
        whileElementsMounted: (...L) => $a(...L, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), x = P(
      () => mn(b.value)[0]
    ), E = P(
      () => mn(b.value)[1]
    );
    Ro(() => {
      y.value && r("placed");
    });
    const S = P(
      () => {
        var L;
        return ((L = C.value.arrow) == null ? void 0 : L.centerOffset) !== 0;
      }
    ), I = k("");
    Y(() => {
      i.value && (I.value = window.getComputedStyle(i.value).zIndex);
    });
    const M = P(() => {
      var L;
      return ((L = C.value.arrow) == null ? void 0 : L.x) ?? 0;
    }), R = P(() => {
      var L;
      return ((L = C.value.arrow) == null ? void 0 : L.y) ?? 0;
    });
    return Ql({
      placedSide: x,
      onArrowChange: (L) => l.value = L,
      arrowX: M,
      arrowY: R,
      shouldHideArrow: S
    }), (L, U) => {
      var z, j, X;
      return A(), W("div", {
        ref_key: "floatingRef",
        ref: a,
        "data-reka-popper-content-wrapper": "",
        style: Pt({
          ...p(w),
          transform: p(y) ? p(w).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: I.value,
          "--reka-popper-transform-origin": [
            (z = p(C).transformOrigin) == null ? void 0 : z.x,
            (j = p(C).transformOrigin) == null ? void 0 : j.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((X = p(C).hide) == null ? void 0 : X.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        D(p(N), B({ ref: p(s) }, L.$attrs, {
          "as-child": n.asChild,
          as: L.as,
          "data-side": x.value,
          "data-align": E.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: p(y) ? void 0 : "none"
          }
        }), {
          default: _(() => [
            O(L.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
function Jl(e) {
  const t = Rt({
    nonce: k()
  });
  return P(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const Zl = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, eu = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, tu = /* @__PURE__ */ $({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    rounded: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return F(), (n, r) => (A(), T(p(N), B(t, {
      width: n.width,
      height: n.height,
      viewBox: n.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: n.asChild ? void 0 : "none"
    }), {
      default: _(() => [
        O(n.$slots, "default", {}, () => [
          n.rounded ? (A(), W("path", eu)) : (A(), W("path", Zl))
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
}), nu = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Sr = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    rounded: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const { forwardRef: t } = F(), n = Xl(), r = P(() => nu[n.placedSide.value]);
    return (o, s) => {
      var i, a, l, u;
      return A(), W("span", {
        ref: (d) => {
          p(n).onArrowChange(d);
        },
        style: Pt({
          position: "absolute",
          left: (i = p(n).arrowX) != null && i.value ? `${(a = p(n).arrowX) == null ? void 0 : a.value}px` : void 0,
          top: (l = p(n).arrowY) != null && l.value ? `${(u = p(n).arrowY) == null ? void 0 : u.value}px` : void 0,
          [r.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[p(n).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[p(n).placedSide.value],
          visibility: p(n).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [
        D(tu, B(o.$attrs, {
          ref: p(t),
          style: {
            display: "block"
          },
          as: o.as,
          "as-child": o.asChild,
          rounded: o.rounded,
          width: o.width,
          height: o.height
        }), {
          default: _(() => [
            O(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "rounded", "width", "height"])
      ], 4);
    };
  }
});
let Qt = 0;
function ou() {
  Y((e) => {
    if (!Oe)
      return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Ao()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Ao()
    ), Qt++, e(() => {
      Qt === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), Qt--;
    });
  });
}
function Ao() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
const ru = /* @__PURE__ */ $({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (A(), T(p(Mn), Ge(at(t)), {
      default: _(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function su(e, t) {
  const n = ur(!1, 300), r = k(null), o = ja();
  function s() {
    r.value = null, n.value = !1;
  }
  function i(a, l) {
    const u = a.currentTarget, d = { x: a.clientX, y: a.clientY }, c = iu(d, u.getBoundingClientRect()), f = au(d, c), m = lu(l.getBoundingClientRect()), h = cu([...f, ...m]);
    r.value = h, n.value = !0;
  }
  return Y((a) => {
    if (e.value && t.value) {
      const l = (d) => i(d, t.value), u = (d) => i(d, e.value);
      e.value.addEventListener("pointerleave", l), t.value.addEventListener("pointerleave", u), a(() => {
        var d, c;
        (d = e.value) == null || d.removeEventListener("pointerleave", l), (c = t.value) == null || c.removeEventListener("pointerleave", u);
      });
    }
  }), Y((a) => {
    var l;
    if (r.value) {
      const u = (d) => {
        var v, w;
        if (!r.value)
          return;
        const c = d.target, f = { x: d.clientX, y: d.clientY }, m = ((v = e.value) == null ? void 0 : v.contains(c)) || ((w = t.value) == null ? void 0 : w.contains(c)), h = !uu(f, r.value), g = !!c.closest("[data-grace-area-trigger]");
        m ? s() : (h || g) && (s(), o.trigger());
      };
      (l = e.value) == null || l.ownerDocument.addEventListener("pointermove", u), a(() => {
        var d;
        return (d = e.value) == null ? void 0 : d.ownerDocument.removeEventListener("pointermove", u);
      });
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: o.on
  };
}
function iu(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function au(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function lu(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function uu(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s].x, l = t[s].y, u = t[i].x, d = t[i].y;
    l > r != d > r && n < (u - a) * (r - l) / (d - l) + a && (o = !o);
  }
  return o;
}
function cu(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), du(t);
}
function du(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
        t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
        n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
function So(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
const fu = /* @__PURE__ */ $({
  __name: "BubbleSelect",
  props: {
    autocomplete: {},
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    form: {},
    multiple: { type: Boolean },
    name: {},
    required: { type: Boolean },
    size: {},
    value: {}
  },
  setup(e) {
    const t = e, n = k();
    return q(() => t.value, (r, o) => {
      var l;
      const s = window.HTMLSelectElement.prototype, a = Object.getOwnPropertyDescriptor(
        s,
        "value"
      ).set;
      if (r !== o && a) {
        const u = new Event("change", { bubbles: !0 });
        a.call(n.value, r), (l = n.value) == null || l.dispatchEvent(u);
      }
    }), (r, o) => (A(), T(p(Dn), { "as-child": "" }, {
      default: _(() => [
        ne("select", B({
          ref_key: "selectElement",
          ref: n
        }, t), [
          O(r.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), pu = [" ", "Enter", "ArrowUp", "ArrowDown"], mu = [" ", "Enter"], re = 10;
function hn(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((r) => vn(r, t, n)) : vn(e, t, n);
}
function vn(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : St(e, t);
}
const hu = {
  key: 0,
  value: ""
}, [Pe, $r] = te("SelectRoot"), vu = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "SelectRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: { default: void 0 },
    by: {},
    dir: {},
    multiple: { type: Boolean },
    autocomplete: {},
    disabled: { type: Boolean },
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t, { required: o, disabled: s, multiple: i, dir: a } = qe(n), l = et(n, "modelValue", r, {
      defaultValue: n.defaultValue ?? (i.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    }), u = et(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), d = k(), c = k(), f = k({
      x: 0,
      y: 0
    }), m = P(() => {
      var y;
      return i.value && Array.isArray(l.value) ? ((y = l.value) == null ? void 0 : y.length) === 0 : rt(l.value);
    });
    Fe({ isProvider: !0 });
    const h = Na(a), g = br(d), v = k(/* @__PURE__ */ new Set()), w = P(() => Array.from(v.value).map((y) => y.value).join(";"));
    function b(y) {
      if (i.value) {
        const C = Array.isArray(l.value) ? [...l.value] : [], x = C.findIndex((E) => vn(E, y, n.by));
        x === -1 ? C.push(y) : C.splice(x, 1), l.value = [...C];
      } else
        l.value = y;
    }
    return $r({
      triggerElement: d,
      onTriggerChange: (y) => {
        d.value = y;
      },
      valueElement: c,
      onValueElementChange: (y) => {
        c.value = y;
      },
      contentId: "",
      modelValue: l,
      // @ts-expect-error Missing infer for AcceptableValue
      onValueChange: b,
      by: n.by,
      open: u,
      multiple: i,
      required: o,
      onOpenChange: (y) => {
        u.value = y;
      },
      dir: h,
      triggerPointerDownPosRef: f,
      disabled: s,
      isEmptyModelValue: m,
      optionsSet: v,
      onOptionAdd: (y) => v.value.add(y),
      onOptionRemove: (y) => v.value.delete(y)
    }), (y, C) => (A(), T(p(xr), null, {
      default: _(() => [
        O(y.$slots, "default", {
          modelValue: p(l),
          open: p(u)
        }),
        p(g) ? (A(), T(fu, {
          key: w.value,
          "aria-hidden": "true",
          tabindex: "-1",
          multiple: p(i),
          required: p(o),
          name: y.name,
          autocomplete: y.autocomplete,
          disabled: p(s),
          value: p(l)
        }, {
          default: _(() => [
            p(rt)(p(l)) ? (A(), W("option", hu)) : H("", !0),
            (A(!0), W(st, null, bn(Array.from(v.value), (x) => (A(), W("option", B({
              key: x.value ?? "",
              ref_for: !0
            }, x), null, 16))), 128))
          ]),
          _: 1
        }, 8, ["multiple", "required", "name", "autocomplete", "disabled", "value"])) : H("", !0)
      ]),
      _: 3
    }));
  }
}), gu = /* @__PURE__ */ $({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Pe(), { forwardRef: r, currentElement: o } = F(), s = P(() => {
      var f;
      return ((f = n.disabled) == null ? void 0 : f.value) || t.disabled;
    });
    n.contentId || (n.contentId = Me(void 0, "reka-select-content")), Q(() => {
      n.onTriggerChange(o.value);
    });
    const { getItems: i } = Fe(), { search: a, handleTypeaheadSearch: l, resetTypeahead: u } = Er();
    function d() {
      s.value || (n.onOpenChange(!0), u());
    }
    function c(f) {
      d(), n.triggerPointerDownPosRef.value = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      };
    }
    return (f, m) => (A(), T(p(_r), {
      "as-child": "",
      reference: f.reference
    }, {
      default: _(() => {
        var h, g, v, w;
        return [
          D(p(N), {
            ref: p(r),
            role: "combobox",
            type: f.as === "button" ? "button" : void 0,
            "aria-controls": p(n).contentId,
            "aria-expanded": p(n).open.value || !1,
            "aria-required": (h = p(n).required) == null ? void 0 : h.value,
            "aria-autocomplete": "none",
            disabled: s.value,
            dir: (g = p(n)) == null ? void 0 : g.dir.value,
            "data-state": (v = p(n)) != null && v.open.value ? "open" : "closed",
            "data-disabled": s.value ? "" : void 0,
            "data-placeholder": (w = p(n).modelValue) != null && w.value ? void 0 : "",
            "as-child": f.asChild,
            as: f.as,
            onClick: m[0] || (m[0] = (b) => {
              var y;
              (y = b == null ? void 0 : b.currentTarget) == null || y.focus();
            }),
            onPointerdown: m[1] || (m[1] = (b) => {
              if (b.pointerType === "touch")
                return b.preventDefault();
              const y = b.target;
              y.hasPointerCapture(b.pointerId) && y.releasePointerCapture(b.pointerId), b.button === 0 && b.ctrlKey === !1 && (c(b), b.preventDefault());
            }),
            onPointerup: m[2] || (m[2] = De(
              (b) => {
                b.pointerType === "touch" && c(b);
              },
              ["prevent"]
            )),
            onKeydown: m[3] || (m[3] = (b) => {
              const y = p(a) !== "";
              !(b.ctrlKey || b.altKey || b.metaKey) && b.key.length === 1 && y && b.key === " " || (p(l)(b.key, p(i)()), p(pu).includes(b.key) && (d(), b.preventDefault()));
            })
          }, {
            default: _(() => [
              O(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }, 8, ["reference"]));
  }
}), yu = /* @__PURE__ */ $({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (A(), T(p(Mn), Ge(at(t)), {
      default: _(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Fn, bu] = te("SelectItemAlignedPosition"), wu = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, { getItems: o } = Fe(), s = Pe(), i = Te(), a = k(!1), l = k(!0), u = k(), { forwardRef: d, currentElement: c } = F(), { viewport: f, selectedItem: m, selectedItemText: h, focusSelectedItem: g } = i;
    function v() {
      if (s.triggerElement.value && s.valueElement.value && u.value && c.value && (f != null && f.value) && (m != null && m.value) && (h != null && h.value)) {
        const y = s.triggerElement.value.getBoundingClientRect(), C = c.value.getBoundingClientRect(), x = s.valueElement.value.getBoundingClientRect(), E = h.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const he = E.left - C.left, be = x.left - he, ke = y.left - be, Ie = y.width + ke, Wt = Math.max(Ie, C.width), jt = window.innerWidth - re, Ht = So(be, re, Math.max(re, jt - Wt));
          u.value.style.minWidth = `${Ie}px`, u.value.style.left = `${Ht}px`;
        } else {
          const he = C.right - E.right, be = window.innerWidth - x.right - he, ke = window.innerWidth - y.right - be, Ie = y.width + ke, Wt = Math.max(Ie, C.width), jt = window.innerWidth - re, Ht = So(
            be,
            re,
            Math.max(re, jt - Wt)
          );
          u.value.style.minWidth = `${Ie}px`, u.value.style.right = `${Ht}px`;
        }
        const S = o().map((he) => he.ref), I = window.innerHeight - re * 2, M = f.value.scrollHeight, R = window.getComputedStyle(c.value), L = Number.parseInt(
          R.borderTopWidth,
          10
        ), U = Number.parseInt(R.paddingTop, 10), z = Number.parseInt(
          R.borderBottomWidth,
          10
        ), j = Number.parseInt(
          R.paddingBottom,
          10
        ), X = L + U + M + j + z, J = Math.min(
          m.value.offsetHeight * 5,
          X
        ), K = window.getComputedStyle(f.value), le = Number.parseInt(K.paddingTop, 10), ue = Number.parseInt(
          K.paddingBottom,
          10
        ), Ve = y.top + y.height / 2 - re, Br = I - Ve, Nt = m.value.offsetHeight / 2, Mr = m.value.offsetTop + Nt, dt = L + U + Mr, Rr = X - dt;
        if (dt <= Ve) {
          const he = m.value === S[S.length - 1];
          u.value.style.bottom = "0px";
          const be = c.value.clientHeight - f.value.offsetTop - f.value.offsetHeight, ke = Math.max(
            Br,
            Nt + (he ? ue : 0) + be + z
          ), Ie = dt + ke;
          u.value.style.height = `${Ie}px`;
        } else {
          const he = m.value === S[0];
          u.value.style.top = "0px";
          const ke = Math.max(
            Ve,
            L + f.value.offsetTop + (he ? le : 0) + Nt
          ) + Rr;
          u.value.style.height = `${ke}px`, f.value.scrollTop = dt - Ve + f.value.offsetTop;
        }
        u.value.style.margin = `${re}px 0`, u.value.style.minHeight = `${J}px`, u.value.style.maxHeight = `${I}px`, r("placed"), requestAnimationFrame(() => a.value = !0);
      }
    }
    const w = k("");
    Q(async () => {
      await se(), v(), c.value && (w.value = window.getComputedStyle(c.value).zIndex);
    });
    function b(y) {
      y && l.value === !0 && (v(), g == null || g(), l.value = !1);
    }
    return ss(s.triggerElement, () => {
      v();
    }), bu({
      contentWrapper: u,
      shouldExpandOnScrollRef: a,
      onScrollButtonChange: b
    }), (y, C) => (A(), W("div", {
      ref_key: "contentWrapperElement",
      ref: u,
      style: Pt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: w.value
      })
    }, [
      D(p(N), B({
        ref: p(d),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...y.$attrs, ...n }), {
        default: _(() => [
          O(y.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Cu = /* @__PURE__ */ $({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: re },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Ft(e);
    return (r, o) => (A(), T(p(Ar), B(p(n), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-select-content-available-width": "var(--reka-popper-available-width)",
      "--reka-select-content-available-height": "var(--reka-popper-available-height)",
      "--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
    } }), {
      default: _(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Or = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Te, Pr] = te("SelectContent"), xu = /* @__PURE__ */ $({
  __name: "SelectContentImpl",
  props: {
    position: { default: "item-aligned" },
    bodyLock: { type: Boolean, default: !0 },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Pe();
    ou(), gr(n.bodyLock);
    const { CollectionSlot: s, getItems: i } = Fe(), a = k();
    vr(a);
    const { search: l, handleTypeaheadSearch: u } = Er(), d = k(), c = k(), f = k(), m = k(!1), h = k(!1);
    function g() {
      c.value && a.value && wo([c.value, a.value]);
    }
    q(m, () => {
      g();
    });
    const { onOpenChange: v, triggerPointerDownPosRef: w } = o;
    Y((x) => {
      if (!a.value)
        return;
      let E = { x: 0, y: 0 };
      const S = (M) => {
        var R, L;
        E = {
          x: Math.abs(
            Math.round(M.pageX) - (((R = w.value) == null ? void 0 : R.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(M.pageY) - (((L = w.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, I = (M) => {
        var R;
        M.pointerType !== "touch" && (E.x <= 10 && E.y <= 10 ? M.preventDefault() : (R = a.value) != null && R.contains(M.target) || v(!1), document.removeEventListener("pointermove", S), w.value = null);
      };
      w.value !== null && (document.addEventListener("pointermove", S), document.addEventListener("pointerup", I, {
        capture: !0,
        once: !0
      })), x(() => {
        document.removeEventListener("pointermove", S), document.removeEventListener("pointerup", I, {
          capture: !0
        });
      });
    });
    function b(x) {
      const E = x.ctrlKey || x.altKey || x.metaKey;
      if (x.key === "Tab" && x.preventDefault(), !E && x.key.length === 1 && u(x.key, i()), ["ArrowUp", "ArrowDown", "Home", "End"].includes(x.key)) {
        let I = [...i().map((M) => M.ref)];
        if (["ArrowUp", "End"].includes(x.key) && (I = I.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(x.key)) {
          const M = x.target, R = I.indexOf(M);
          I = I.slice(R + 1);
        }
        setTimeout(() => wo(I)), x.preventDefault();
      }
    }
    const y = P(() => n.position === "popper" ? n : {}), C = Ft(y.value);
    return Pr({
      content: a,
      viewport: d,
      onViewportChange: (x) => {
        d.value = x;
      },
      itemRefCallback: (x, E, S) => {
        const I = !h.value && !S, M = hn(o.modelValue.value, E, o.by);
        I && (o.isEmptyModelValue.value || M) && (h.value = !0, c.value = x);
      },
      selectedItem: c,
      selectedItemText: f,
      onItemLeave: () => {
        var x;
        (x = a.value) == null || x.focus();
      },
      itemTextRefCallback: (x, E, S) => {
        const I = !h.value && !S;
        (hn(o.modelValue.value, E, o.by) || I) && (f.value = x);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: m,
      searchRef: l
    }), (x, E) => (A(), T(p(s), null, {
      default: _(() => [
        D(p(pr), {
          "as-child": "",
          onMountAutoFocus: E[6] || (E[6] = De(() => {
          }, ["prevent"])),
          onUnmountAutoFocus: E[7] || (E[7] = (S) => {
            var I;
            r("closeAutoFocus", S), !S.defaultPrevented && ((I = p(o).triggerElement.value) == null || I.focus({ preventScroll: !0 }), S.preventDefault());
          })
        }, {
          default: _(() => [
            D(p(Ln), {
              "as-child": "",
              "disable-outside-pointer-events": "",
              onFocusOutside: E[2] || (E[2] = De(() => {
              }, ["prevent"])),
              onDismiss: E[3] || (E[3] = (S) => p(o).onOpenChange(!1)),
              onEscapeKeyDown: E[4] || (E[4] = (S) => r("escapeKeyDown", S)),
              onPointerDownOutside: E[5] || (E[5] = (S) => r("pointerDownOutside", S))
            }, {
              default: _(() => [
                (A(), T(Ot(
                  x.position === "popper" ? Cu : wu
                ), B({ ...x.$attrs, ...p(C) }, {
                  id: p(o).contentId,
                  ref: (S) => {
                    a.value = p(Re)(S);
                  },
                  role: "listbox",
                  "data-state": p(o).open.value ? "open" : "closed",
                  dir: p(o).dir.value,
                  style: {
                    // flex layout so we can place the scroll buttons properly
                    display: "flex",
                    flexDirection: "column",
                    // reset the outline by default as the content MAY get focused
                    outline: "none"
                  },
                  onContextmenu: E[0] || (E[0] = De(() => {
                  }, ["prevent"])),
                  onPlaced: E[1] || (E[1] = (S) => m.value = !0),
                  onKeydown: b
                }), {
                  default: _(() => [
                    O(x.$slots, "default")
                  ]),
                  _: 3
                }, 16, ["id", "data-state", "dir", "onKeydown"]))
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Eu = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return $r(e.context), Pr(Or), (n, r) => O(n.$slots, "default");
  }
}), _u = { key: 1 }, Au = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = cr(n, t), s = Pe(), i = k();
    Q(() => {
      i.value = new DocumentFragment();
    });
    const a = k(), l = P(() => n.forceMount || s.open.value);
    return (u, d) => {
      var c;
      return l.value ? (A(), T(p(ct), {
        key: 0,
        ref_key: "presenceRef",
        ref: a,
        present: !0
      }, {
        default: _(() => [
          D(xu, Ge(at({ ...p(o), ...u.$attrs })), {
            default: _(() => [
              O(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = a.value) != null && c.present) && i.value ? (A(), W("div", _u, [
        (A(), T(Bo, { to: i.value }, [
          D(Eu, { context: p(s) }, {
            default: _(() => [
              O(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : H("", !0);
    };
  }
}), Su = /* @__PURE__ */ $({
  __name: "SelectArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    rounded: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e, n = Pe(), r = Te(Or);
    return (o, s) => p(n).open.value && p(r).position === "popper" ? (A(), T(p(Sr), Ge(B({ key: 0 }, t)), {
      default: _(() => [
        O(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : H("", !0);
  }
}), [Tr, $u] = te("SelectItem"), Ou = /* @__PURE__ */ $({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, r = t, { disabled: o } = qe(n), s = Pe(), i = Te(), { forwardRef: a, currentElement: l } = F(), { CollectionItem: u } = Fe(), d = P(() => {
      var C;
      return hn((C = s.modelValue) == null ? void 0 : C.value, n.value, s.by);
    }), c = k(!1), f = k(n.textValue ?? ""), m = Me(void 0, "reka-select-item-text"), h = "select.select";
    async function g(C) {
      if (C.defaultPrevented)
        return;
      const x = { originalEvent: C, value: n.value };
      Rn(h, v, x);
    }
    async function v(C) {
      await se(), r("select", C), !C.defaultPrevented && (o.value || (s.onValueChange(n.value), s.multiple.value || s.onOpenChange(!1)));
    }
    async function w(C) {
      var x;
      await se(), !C.defaultPrevented && (o.value ? (x = i.onItemLeave) == null || x.call(i) : C.currentTarget.focus({ preventScroll: !0 }));
    }
    async function b(C) {
      var x;
      await se(), !C.defaultPrevented && C.currentTarget === G() && ((x = i.onItemLeave) == null || x.call(i));
    }
    async function y(C) {
      var E;
      await se(), !(C.defaultPrevented || ((E = i.searchRef) == null ? void 0 : E.value) !== "" && C.key === " ") && (mu.includes(C.key) && g(C), C.key === " " && C.preventDefault());
    }
    if (n.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Q(() => {
      l.value && i.itemRefCallback(
        l.value,
        n.value,
        n.disabled
      );
    }), $u({
      value: n.value,
      disabled: o,
      textId: m,
      isSelected: d,
      onItemTextChange: (C) => {
        f.value = ((f.value || (C == null ? void 0 : C.textContent)) ?? "").trim();
      }
    }), (C, x) => (A(), T(p(u), {
      value: { textValue: f.value }
    }, {
      default: _(() => [
        D(p(N), {
          ref: p(a),
          role: "option",
          "aria-labelledby": p(m),
          "data-highlighted": c.value ? "" : void 0,
          "aria-selected": d.value,
          "data-state": d.value ? "checked" : "unchecked",
          "aria-disabled": p(o) || void 0,
          "data-disabled": p(o) ? "" : void 0,
          tabindex: p(o) ? void 0 : -1,
          as: C.as,
          "as-child": C.asChild,
          onFocus: x[0] || (x[0] = (E) => c.value = !0),
          onBlur: x[1] || (x[1] = (E) => c.value = !1),
          onPointerup: g,
          onPointerdown: x[2] || (x[2] = (E) => {
            E.currentTarget.focus({ preventScroll: !0 });
          }),
          onTouchend: x[3] || (x[3] = De(() => {
          }, ["prevent", "stop"])),
          onPointermove: w,
          onPointerleave: b,
          onKeydown: y
        }, {
          default: _(() => [
            O(C.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Pu = /* @__PURE__ */ $({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Tr();
    return (r, o) => p(n).isSelected.value ? (A(), T(p(N), B({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: _(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : H("", !0);
  }
}), Tu = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Pe(), r = Te(), o = Tr(), { forwardRef: s, currentElement: i } = F(), a = P(() => {
      var l, u;
      return {
        value: o.value,
        disabled: o.disabled.value,
        textContent: ((l = i.value) == null ? void 0 : l.textContent) ?? ((u = o.value) == null ? void 0 : u.toString()) ?? ""
      };
    });
    return Q(() => {
      i.value && (o.onItemTextChange(i.value), r.itemTextRefCallback(
        i.value,
        o.value,
        o.disabled.value
      ), n.onOptionAdd(a.value));
    }), gn(() => {
      n.onOptionRemove(a.value);
    }), (l, u) => (A(), T(p(N), B({
      id: p(o).textId,
      ref: p(s)
    }, { ...t, ...l.$attrs }), {
      default: _(() => [
        O(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ku = /* @__PURE__ */ $({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = qe(t), r = Jl(n), o = Te(), s = o.position === "item-aligned" ? Fn() : void 0, { forwardRef: i, currentElement: a } = F();
    Q(() => {
      o == null || o.onViewportChange(a.value);
    });
    const l = k(0);
    function u(d) {
      const c = d.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: m } = s ?? {};
      if (f != null && f.value && (m != null && m.value)) {
        const h = Math.abs(l.value - c.scrollTop);
        if (h > 0) {
          const g = window.innerHeight - re * 2, v = Number.parseFloat(
            m.value.style.minHeight
          ), w = Number.parseFloat(m.value.style.height), b = Math.max(v, w);
          if (b < g) {
            const y = b + h, C = Math.min(g, y), x = y - C;
            m.value.style.height = `${C}px`, m.value.style.bottom === "0px" && (c.scrollTop = x > 0 ? x : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      l.value = c.scrollTop;
    }
    return (d, c) => (A(), W(st, null, [
      D(p(N), B({
        ref: p(i),
        "data-reka-select-viewport": "",
        role: "presentation"
      }, { ...d.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "hidden auto"
        },
        onScroll: u
      }), {
        default: _(() => [
          O(d.$slots, "default")
        ]),
        _: 3
      }, 16),
      D(p(N), {
        as: "style",
        nonce: p(r)
      }, {
        default: _(() => c[0] || (c[0] = [
          de(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")
        ])),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), kr = /* @__PURE__ */ $({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { getItems: r } = Fe(), o = Te(), s = k(null);
    function i() {
      s.value !== null && (window.clearInterval(s.value), s.value = null);
    }
    Y(() => {
      const u = r().map((d) => d.ref).find(
        (d) => d === G()
      );
      u == null || u.scrollIntoView({ block: "nearest" });
    });
    function a() {
      s.value === null && (s.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    function l() {
      var u;
      (u = o.onItemLeave) == null || u.call(o), s.value === null && (s.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return gn(() => i()), (u, d) => {
      var c;
      return A(), T(p(N), B({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (c = u.$parent) == null ? void 0 : c.$props, {
        onPointerdown: a,
        onPointermove: l,
        onPointerleave: d[0] || (d[0] = () => {
          i();
        })
      }), {
        default: _(() => [
          O(u.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Iu = /* @__PURE__ */ $({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Te(), n = t.position === "item-aligned" ? Fn() : void 0, { forwardRef: r, currentElement: o } = F(), s = k(!1);
    return Y((i) => {
      var a, l;
      if ((a = t.viewport) != null && a.value && ((l = t.isPositioned) != null && l.value)) {
        let u = function() {
          s.value = d.scrollTop > 0;
        };
        const d = t.viewport.value;
        u(), d.addEventListener("scroll", u), i(() => d.removeEventListener("scroll", u));
      }
    }), q(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (i, a) => s.value ? (A(), T(kr, {
      key: 0,
      ref: p(r),
      onAutoScroll: a[0] || (a[0] = () => {
        const { viewport: l, selectedItem: u } = p(t);
        l != null && l.value && (u != null && u.value) && (l.value.scrollTop = l.value.scrollTop - u.value.offsetHeight);
      })
    }, {
      default: _(() => [
        O(i.$slots, "default")
      ]),
      _: 3
    }, 512)) : H("", !0);
  }
}), Du = /* @__PURE__ */ $({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Te(), n = t.position === "item-aligned" ? Fn() : void 0, { forwardRef: r, currentElement: o } = F(), s = k(!1);
    return Y((i) => {
      var a, l;
      if ((a = t.viewport) != null && a.value && ((l = t.isPositioned) != null && l.value)) {
        let u = function() {
          const c = d.scrollHeight - d.clientHeight;
          s.value = Math.ceil(d.scrollTop) < c;
        };
        const d = t.viewport.value;
        u(), d.addEventListener("scroll", u), i(() => d.removeEventListener("scroll", u));
      }
    }), q(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (i, a) => s.value ? (A(), T(kr, {
      key: 0,
      ref: p(r),
      onAutoScroll: a[0] || (a[0] = () => {
        const { viewport: l, selectedItem: u } = p(t);
        l != null && l.value && (u != null && u.value) && (l.value.scrollTop = l.value.scrollTop + u.value.offsetHeight);
      })
    }, {
      default: _(() => [
        O(i.$slots, "default")
      ]),
      _: 3
    }, 512)) : H("", !0);
  }
}), Bu = /* @__PURE__ */ $({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = F(), o = Pe();
    Q(() => {
      o.valueElement = r;
    });
    const s = P(() => {
      var d;
      let a = [];
      const l = Array.from(o.optionsSet.value), u = (c) => l.find((f) => f.value === c);
      return Array.isArray(o.modelValue.value) ? a = o.modelValue.value.map((c) => {
        var f;
        return ((f = u(c)) == null ? void 0 : f.textContent) ?? "";
      }) : a = [((d = u(o.modelValue.value)) == null ? void 0 : d.textContent) ?? ""], a.filter(Boolean);
    }), i = P(() => s.value.length ? s.value.join(", ") : t.placeholder);
    return (a, l) => (A(), T(p(N), {
      ref: p(n),
      as: a.as,
      "as-child": a.asChild,
      style: { pointerEvents: "none" },
      "data-placeholder": s.value.length ? void 0 : t.placeholder
    }, {
      default: _(() => [
        O(a.$slots, "default", {
          selectedLabel: s.value,
          modelValue: p(o).modelValue.value
        }, () => [
          de(Ee(i.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-placeholder"]));
  }
}), Mu = /* @__PURE__ */ $({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (A(), T(p(N), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: _(() => [
        O(t.$slots, "default", {}, () => [
          n[0] || (n[0] = de("▼"))
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ir = "tooltip.open", [Vn, Ru] = te("TooltipProvider"), Lu = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 700 },
    skipDelayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean, default: !1 },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { delayDuration: n, skipDelayDuration: r, disableHoverableContent: o, disableClosingTrigger: s, ignoreNonKeyboardFocus: i, disabled: a } = qe(t);
    F();
    const l = k(!0), u = k(!1), { start: d, stop: c } = za(() => {
      l.value = !0;
    }, r, { immediate: !1 });
    return Ru({
      isOpenDelayed: l,
      delayDuration: n,
      onOpen() {
        c(), l.value = !1;
      },
      onClose() {
        d();
      },
      isPointerInTransitRef: u,
      disableHoverableContent: o,
      disableClosingTrigger: s,
      disabled: a,
      ignoreNonKeyboardFocus: i
    }), (f, m) => O(f.$slots, "default");
  }
}), [Vt, Fu] = te("TooltipRoot"), Vu = /* @__PURE__ */ $({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: void 0 },
    disableHoverableContent: { type: Boolean, default: void 0 },
    disableClosingTrigger: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    ignoreNonKeyboardFocus: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t;
    F();
    const o = Vn(), s = P(() => n.disableHoverableContent ?? o.disableHoverableContent.value), i = P(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), a = P(() => n.disabled ?? o.disabled.value), l = P(() => n.delayDuration ?? o.delayDuration.value), u = P(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), d = et(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    q(d, (y) => {
      o.onClose && (y ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Ir))) : o.onClose());
    });
    const c = k(!1), f = k(), m = P(() => d.value ? c.value ? "delayed-open" : "instant-open" : "closed"), { start: h, stop: g } = is(() => {
      c.value = !0, d.value = !0;
    }, l, { immediate: !1 });
    function v() {
      g(), c.value = !1, d.value = !0;
    }
    function w() {
      g(), d.value = !1;
    }
    function b() {
      h();
    }
    return Fu({
      contentId: "",
      open: d,
      stateAttribute: m,
      trigger: f,
      onTriggerChange(y) {
        f.value = y;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? b() : v();
      },
      onTriggerLeave() {
        s.value ? w() : g();
      },
      onOpen: v,
      onClose: w,
      disableHoverableContent: s,
      disableClosingTrigger: i,
      disabled: a,
      ignoreNonKeyboardFocus: u
    }), (y, C) => (A(), T(p(xr), null, {
      default: _(() => [
        O(y.$slots, "default", { open: p(d) })
      ]),
      _: 3
    }));
  }
}), Nu = /* @__PURE__ */ $({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Vt(), r = Vn();
    n.contentId || (n.contentId = Me(void 0, "reka-tooltip-content"));
    const { forwardRef: o, currentElement: s } = F(), i = k(!1), a = k(!1), l = P(() => n.disabled.value ? {} : {
      click: g,
      focus: m,
      pointermove: c,
      pointerleave: f,
      pointerdown: d,
      blur: h
    });
    Q(() => {
      n.onTriggerChange(s.value);
    });
    function u() {
      setTimeout(() => {
        i.value = !1;
      }, 1);
    }
    function d() {
      i.value = !0, document.addEventListener("pointerup", u, { once: !0 });
    }
    function c(v) {
      v.pointerType !== "touch" && !a.value && !r.isPointerInTransitRef.value && (n.onTriggerEnter(), a.value = !0);
    }
    function f() {
      n.onTriggerLeave(), a.value = !1;
    }
    function m(v) {
      var w, b;
      i.value || n.ignoreNonKeyboardFocus.value && !((b = (w = v.target).matches) != null && b.call(w, ":focus-visible")) || n.onOpen();
    }
    function h() {
      n.onClose();
    }
    function g() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (v, w) => (A(), T(p(_r), {
      "as-child": "",
      reference: v.reference
    }, {
      default: _(() => [
        D(p(N), B({
          ref: p(o),
          "aria-describedby": p(n).open.value ? p(n).contentId : void 0,
          "data-state": p(n).stateAttribute.value,
          as: v.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Kr(l.value)), {
          default: _(() => [
            O(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
}), Dr = /* @__PURE__ */ $({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: { default: 0 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: !0 },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    arrowPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: !1 },
    positionStrategy: {},
    updatePositionStrategy: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Vt(), { forwardRef: s } = F(), i = Ur(), a = P(() => {
      var d;
      return (d = i.default) == null ? void 0 : d.call(i, {});
    }), l = P(() => {
      var f;
      if (n.ariaLabel)
        return n.ariaLabel;
      let d = "";
      function c(m) {
        typeof m.children == "string" && m.type !== To ? d += m.children : Array.isArray(m.children) && m.children.forEach((h) => c(h));
      }
      return (f = a.value) == null || f.forEach((m) => c(m)), d;
    }), u = P(() => {
      const { ariaLabel: d, ...c } = n;
      return c;
    });
    return Q(() => {
      Zt(window, "scroll", (d) => {
        const c = d.target;
        c != null && c.contains(o.trigger.value) && o.onClose();
      }), Zt(window, Ir, o.onClose);
    }), (d, c) => (A(), T(p(Ln), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: c[0] || (c[0] = (f) => r("escapeKeyDown", f)),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        var m;
        p(o).disableClosingTrigger.value && ((m = p(o).trigger.value) != null && m.contains(f.target)) && f.preventDefault(), r("pointerDownOutside", f);
      }),
      onFocusOutside: c[2] || (c[2] = De(() => {
      }, ["prevent"])),
      onDismiss: c[3] || (c[3] = (f) => p(o).onClose())
    }, {
      default: _(() => [
        D(p(Ar), B({
          ref: p(s),
          "data-state": p(o).stateAttribute.value
        }, { ...d.$attrs, ...u.value }, { style: {
          "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
          "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
          "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
        } }), {
          default: _(() => [
            O(d.$slots, "default"),
            D(p(Dn), {
              id: p(o).contentId,
              role: "tooltip"
            }, {
              default: _(() => [
                de(Ee(l.value), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }));
  }
}), Wu = /* @__PURE__ */ $({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {}
  },
  setup(e) {
    const n = Ft(e), { forwardRef: r, currentElement: o } = F(), { trigger: s, onClose: i } = Vt(), a = Vn(), { isPointerInTransit: l, onPointerExit: u } = su(s, o);
    return a.isPointerInTransitRef = l, u(() => {
      i();
    }), (d, c) => (A(), T(Dr, B({ ref: p(r) }, p(n)), {
      default: _(() => [
        O(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ju = /* @__PURE__ */ $({
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Vt(), s = cr(n, r), { forwardRef: i } = F();
    return (a, l) => (A(), T(p(ct), {
      present: a.forceMount || p(o).open.value
    }, {
      default: _(() => [
        (A(), T(Ot(p(o).disableHoverableContent.value ? Dr : Wu), B({ ref: p(i) }, p(s)), {
          default: _(() => [
            O(a.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Hu = /* @__PURE__ */ $({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return F(), (n, r) => (A(), T(p(Sr), Ge(at(t)), {
      default: _(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ku = /* @__PURE__ */ $({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (A(), T(p(Mn), Ge(at(t)), {
      default: _(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uu = /* @__PURE__ */ $({
  __name: "AppCheckbox",
  props: /* @__PURE__ */ lt({
    disabled: { type: Boolean },
    name: null,
    required: { type: Boolean },
    error: { type: Boolean }
  }, {
    modelValue: { type: [Boolean, String], default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Ke(e, "modelValue");
    return (n, r) => (A(), T(p(Wl), B({ ...n.$props, ...n.$attrs }, {
      modelValue: t.value,
      "onUpdate:modelValue": r[0] || (r[0] = (o) => t.value = o),
      class: [
        n.$style["app-checkbox"],
        {
          [n.$style.disabled]: e.disabled,
          [n.$style.indeterminate]: t.value === "indeterminate",
          [n.$style.checked]: t.value,
          [n.$style.error]: e.error
        }
      ]
    }), {
      default: _(() => [
        D(p(jl), {
          class: V(n.$style.indicator)
        }, {
          default: _(() => [
            t.value === "indeterminate" ? (A(), T(p(rn), {
              key: 0,
              icon: "line-md:minus"
            })) : H("", !0),
            t.value === !0 ? (A(), T(p(rn), {
              key: 1,
              icon: "line-md:confirm",
              dur: "3s",
              "stroke-width": "5"
            })) : H("", !0)
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    }, 16, ["modelValue", "class"]));
  }
}), zu = "_app-checkbox_1409483", qu = "_error_37514bb", Gu = "_disabled_c7121c3", Yu = "_indicator_9a6129e", Xu = { "app-checkbox": zu, error: qu, disabled: Gu, indicator: Yu }, Qu = {
  $style: Xu
}, ud = /* @__PURE__ */ oe(Uu, [["__cssModules", Qu]]), Ju = /* @__PURE__ */ $({
  __name: "AppChip",
  props: $e({
    size: null,
    transparent: { type: Boolean }
  }, { size: "medium", transparent: !1 }),
  setup(e) {
    return (t, n) => (A(), W("div", {
      class: V([
        t.$style["app-chip"],
        t.$style[t.size],
        { [t.$style.transparent]: t.transparent }
      ])
    }, [
      O(t.$slots, "default")
    ], 2));
  }
}), Zu = "_app-chip_707ac6f", ec = "_small_1d451e9", tc = "_large_97f6530", nc = "_transparent_8a38eaa", oc = { "app-chip": Zu, small: ec, large: tc, transparent: nc }, rc = {
  $style: oc
}, cd = /* @__PURE__ */ oe(Ju, [["__cssModules", rc]]), sc = { class: "gradiented step-3 strong" }, ic = /* @__PURE__ */ $({
  __name: "AppDialog",
  props: /* @__PURE__ */ lt({
    persistent: { type: Boolean },
    title: null,
    description: null
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = Ke(e, "open");
    return (n, r) => (A(), T(p(Xa), {
      open: t.value,
      "onUpdate:open": r[4] || (r[4] = (o) => t.value = o),
      class: V(n.$style["app-dialog"])
    }, {
      default: _(() => [
        D(p(Qa), {
          class: V(n.$style.trigger),
          "as-child": ""
        }, {
          default: _(() => [
            O(n.$slots, "trigger")
          ]),
          _: 3
        }, 8, ["class"]),
        D(p(ru), null, {
          default: _(() => [
            D(zr, { name: "fade" }, {
              default: _(() => [
                D(p(Al), {
                  class: V(n.$style.overlay)
                }, null, 8, ["class"])
              ]),
              _: 1
            }),
            D(p(bl), {
              "as-child": "",
              "trap-focus": !e.persistent,
              onPointerDownOutside: r[1] || (r[1] = (o) => e.persistent ? o.preventDefault() : null),
              onEscapeKeyDown: r[2] || (r[2] = (o) => e.persistent ? o.preventDefault() : null),
              onFocusOutside: r[3] || (r[3] = (o) => e.persistent ? o.preventDefault() : null)
            }, {
              default: _(() => [
                D(zi, B({
                  class: n.$style.content
                }, n.$attrs), {
                  default: _(() => [
                    ne("header", null, [
                      ne("div", {
                        class: V(n.$style.start)
                      }, [
                        D(p($l), { "as-child": "" }, {
                          default: _(() => [
                            ne("h2", sc, [
                              O(n.$slots, "title", {}, () => [
                                de(Ee(e.title), 1)
                              ])
                            ])
                          ]),
                          _: 3
                        }),
                        D(p(Ol), { "as-child": "" }, {
                          default: _(() => [
                            ne("div", {
                              class: V(n.$style.description)
                            }, [
                              O(n.$slots, "description", {}, () => [
                                de(Ee(e.description), 1)
                              ])
                            ], 2)
                          ]),
                          _: 3
                        })
                      ], 2),
                      O(n.$slots, "header-actions"),
                      D(p(Sl), {
                        "aria-label": "Close",
                        "as-child": ""
                      }, {
                        default: _(() => [
                          e.persistent ? H("", !0) : (A(), T(Ni, {
                            key: 0,
                            variant: "text",
                            class: V(n.$style["close-button"]),
                            icon: "material-symbols:close-rounded",
                            onClick: r[0] || (r[0] = (o) => t.value = !1)
                          }, null, 8, ["class"]))
                        ]),
                        _: 1
                      })
                    ]),
                    O(n.$slots, "default"),
                    ne("footer", null, [
                      O(n.$slots, "actions")
                    ])
                  ]),
                  _: 3
                }, 16, ["class"])
              ]),
              _: 3
            }, 8, ["trap-focus"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open", "class"]));
  }
}), ac = "_trigger_eed4348", lc = "_overlay_3482df4", uc = "_content_22a8642", cc = "_start_62c7e32", dc = "_description_768894d", fc = "_close-button_fb0abea", pc = { trigger: ac, overlay: lc, content: uc, start: cc, description: dc, "close-button": fc }, mc = {
  $style: pc
}, dd = /* @__PURE__ */ oe(ic, [["__cssModules", mc]]), hc = /* @__PURE__ */ $({
  __name: "AppField",
  props: {
    label: null,
    error: null,
    disabled: { type: Boolean }
  },
  setup(e) {
    return (t, n) => {
      const r = It;
      return A(), W("label", {
        class: V([t.$style["app-field"], { [t.$style.disabled]: e.disabled }])
      }, [
        ne("div", {
          class: V(t.$style["label-input"])
        }, [
          e.label ?? t.$slots.label ? (A(), W("div", {
            key: 0,
            class: V([t.$style.label, { [t.$style.error]: e.error }])
          }, [
            O(t.$slots, "label", {}, () => [
              de(Ee(e.label), 1)
            ])
          ], 2)) : H("", !0),
          O(t.$slots, "default")
        ], 2),
        e.error ? (A(), W("div", {
          key: 0,
          class: V(t.$style.error)
        }, [
          D(r, { icon: "material-symbols:error-outline-rounded" }),
          de(Ee(e.error), 1)
        ], 2)) : H("", !0)
      ], 2);
    };
  }
}), vc = "_app-field_c5e2831", gc = "_disabled_f4fb29f", yc = "_label-input_d62543a", bc = "_label_bf91a85", wc = "_error_77cdf2a", Cc = { "app-field": vc, disabled: gc, "label-input": yc, label: bc, error: wc }, xc = {
  $style: Cc
}, fd = /* @__PURE__ */ oe(hc, [["__cssModules", xc]]), Ec = {}, _c = {
  class: "app-loading-spinner",
  viewBox: "0 0 68 68",
  xmlns: "http://www.w3.org/2000/svg"
};
function Ac(e, t) {
  return A(), W("svg", _c, t[0] || (t[0] = [
    ne("defs", null, [
      ne("linearGradient", {
        id: "primary-gradient",
        x1: "0",
        x2: "0",
        y1: "0",
        y2: "1"
      }, [
        ne("stop", {
          offset: "0%",
          "stop-color": "rgb(121, 126, 247)"
        }),
        ne("stop", {
          offset: "100%",
          "stop-color": "rgb(0, 255, 206)"
        })
      ])
    ], -1),
    ne("circle", {
      class: "path",
      fill: "none",
      "stroke-width": "8",
      "stroke-linecap": "round",
      cx: "34",
      cy: "34",
      r: "30"
    }, null, -1)
  ]));
}
const pd = /* @__PURE__ */ oe(Ec, [["render", Ac], ["__scopeId", "data-v-d7f1df05"]]), Sc = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2027.6.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_2_00000039126939024823027680000017407098825655584941_'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2090.9%20125.8'%20style='enable-background:new%200%200%2090.9%20125.8;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{opacity:0.5;fill:%23C5FFFE;enable-background:new%20;}%20.st1{fill:%23C5FFFE;}%20.st2{clip-path:url(%23SVGID_00000160187787671385330840000011365503337429337474_);}%20%3c/style%3e%3cg%20id='Layer_1-2_00000138552681162585653310000003376327086979018656_'%3e%3cg%20id='Layer_2-2_00000089575700792075398270000016475314756721804971_'%3e%3cg%20id='Layer_1-2'%3e%3cg%20id='Layer_2-2'%3e%3cg%20id='Layer_1-2-2'%3e%3cg%20id='Logo'%3e%3cg%20id='Secondary_j'%3e%3crect%20x='71.7'%20y='14.4'%20class='st0'%20width='5.8'%20height='46.7'/%3e%3cpath%20class='st0'%20d='M43.5,115.3c-18.2,0-33.1-14.8-33.1-33.1s14.9-33.1,33.1-33.1S76.6,64,76.6,82.2S61.8,115.3,43.5,115.3z%20M43.5,55.1c-14.9,0-27.1,12.2-27.1,27.1s12.2,27.1,27.1,27.1s27.1-12.2,27.1-27.1S58.5,55.1,43.5,55.1z'/%3e%3ccircle%20class='st0'%20cx='42.2'%20cy='77.4'%20r='8.2'/%3e%3c/g%3e%3cg%20id='Main_j'%3e%3ccircle%20id='Dot3'%20class='st1'%20cx='74.6'%20cy='16.4'%20r='16.4'/%3e%3ccircle%20id='Dot2'%20class='st1'%20cx='74.5'%20cy='61.1'%20r='12'/%3e%3ccircle%20id='Dot'%20class='st1'%20cx='12'%20cy='82.2'%20r='12'/%3e%3cg%20id='SquareCircle'%3e%3cg%3e%3cdefs%3e%3crect%20id='SVGID_1_'%20y='81.1'%20width='86.5'%20height='44.7'/%3e%3c/defs%3e%3cclipPath%20id='SVGID_00000170246492928372989520000014416670913551062949_'%3e%3cuse%20xlink:href='%23SVGID_1_'%20style='overflow:visible;'/%3e%3c/clipPath%3e%3cg%20style='clip-path:url(%23SVGID_00000170246492928372989520000014416670913551062949_);'%3e%3cpath%20class='st1'%20d='M43.2,124.4c-23.9,0-43.3-19.4-43.3-43.3s19.4-43.3,43.3-43.3s43.3,19.4,43.3,43.3%20S67.1,124.4,43.2,124.4z%20M43.2,61.8C32.6,61.8,24,70.4,24,81.1s8.7,19.3,19.3,19.3s19.3-8.7,19.3-19.3%20S53.9,61.8,43.2,61.8z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3crect%20x='62.6'%20y='61.1'%20class='st1'%20width='23.9'%20height='20.9'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", $c = ["src"], Oc = /* @__PURE__ */ $({
  __name: "AppLogo",
  props: $e({
    size: null
  }, { size: "medium" }),
  setup(e) {
    return (t, n) => (A(), W("img", {
      src: p(Sc),
      class: V(["app-logo", t.size]),
      alt: "Jojko's logo'"
    }, null, 10, $c));
  }
}), md = /* @__PURE__ */ oe(Oc, [["__scopeId", "data-v-6abc7d2e"]]), Pc = ["disabled"], Tc = /* @__PURE__ */ $({
  __name: "AppSelectField",
  props: /* @__PURE__ */ lt($e({
    items: null,
    disabled: { type: Boolean },
    error: null,
    name: null,
    multiple: null,
    required: { type: Boolean },
    placeholder: null
  }, { items: () => [], disabled: !1, multiple: !1, required: !1, placeholder: "Select an option" }), {
    modelValue: {},
    modelModifiers: {},
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:modelValue", "update:open"],
  setup(e) {
    const t = Ke(e, "modelValue"), n = Ke(e, "open"), { createLocalWaveDirective: r } = Qo, { vWave: o } = r({
      duration: 0.2
    });
    return (s, i) => {
      const a = It;
      return A(), T(p(vu), {
        open: n.value,
        "onUpdate:open": i[0] || (i[0] = (l) => n.value = l),
        modelValue: t.value,
        "onUpdate:modelValue": i[1] || (i[1] = (l) => t.value = l),
        name: s.name,
        multiple: s.multiple,
        required: s.required
      }, {
        default: _(() => [
          D(p(gu), {
            "as-child": "",
            disabled: s.disabled
          }, {
            default: _(() => [
              O(s.$slots, "trigger", {}, () => [
                Ze((A(), W("button", {
                  disabled: s.disabled,
                  class: V([s.$style.trigger, { [s.$style.placeholder]: !t.value }])
                }, [
                  D(p(Bu), { placeholder: s.placeholder }, null, 8, ["placeholder"]),
                  D(p(Mu), { "as-child": "" }, {
                    default: _(() => [
                      D(a, {
                        class: V(s.$style["select-icon"]),
                        icon: "material-symbols:expand-more-rounded"
                      }, null, 8, ["class"])
                    ]),
                    _: 1
                  })
                ], 10, Pc)), [
                  [p(o)]
                ])
              ])
            ]),
            _: 3
          }, 8, ["disabled"]),
          D(p(yu), null, {
            default: _(() => [
              D(p(Au), {
                position: "item-aligned",
                class: V(s.$style.content)
              }, {
                default: _(() => [
                  D(p(Iu)),
                  D(p(ku), {
                    class: V(s.$style.viewport)
                  }, {
                    default: _(() => [
                      (A(!0), W(st, null, bn(s.items, (l) => Ze((A(), T(p(Ou), {
                        key: JSON.stringify(l),
                        class: V(s.$style.item),
                        value: l.value
                      }, {
                        default: _(() => [
                          D(p(Tu), null, {
                            default: _(() => [
                              O(s.$slots, "item", B({ ref_for: !0 }, l), () => [
                                de(Ee(l.label ?? l.value), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          D(p(Pu))
                        ]),
                        _: 2
                      }, 1032, ["class", "value"])), [
                        [p(o)]
                      ])), 128))
                    ]),
                    _: 3
                  }, 8, ["class"]),
                  D(p(Du)),
                  D(p(Su))
                ]),
                _: 3
              }, 8, ["class"])
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["open", "modelValue", "name", "multiple", "required"]);
    };
  }
}), kc = "_item_d25a3ba", Ic = "_content_5242832", Dc = "_viewport_34f6182", Bc = "_trigger_d455d52", Mc = "_error_123b438", Rc = "_select-icon_b60910e", Lc = "_placeholder_189bfa7", Fc = { item: kc, content: Ic, viewport: Dc, trigger: Bc, error: Mc, "select-icon": Rc, placeholder: Lc }, Vc = {
  $style: Fc
}, hd = /* @__PURE__ */ oe(Tc, [["__cssModules", Vc]]), Nc = /* @__PURE__ */ $({
  __name: "AppTextField",
  props: /* @__PURE__ */ lt($e({
    placeholder: null,
    disabled: { type: Boolean },
    error: { type: Boolean },
    iconBefore: null,
    icon: null,
    iconAfter: null,
    type: null
  }, { disabled: !1 }), {
    modelValue: {
      default: void 0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const [t, n] = Ke(e, "modelValue"), r = qr(), o = Gr(), { textarea: s, input: i } = as({
      input: P({
        get: () => `${t.value ?? ""}`,
        set: (l) => t.value = typeof t.value == "number" ? +l : l
      })
    }), a = P(() => ({
      ...r,
      ...n,
      class: o.input,
      type: e.type,
      disabled: e.disabled,
      placeholder: e.placeholder
    }));
    return (l, u) => {
      const d = It;
      return A(), W("div", {
        class: V([
          l.$style["app-text-field"],
          { [l.$style.interactive]: !l.disabled, [l.$style.error]: l.error }
        ])
      }, [
        l.iconBefore ?? l.icon ? (A(), T(d, {
          key: 0,
          icon: l.iconBefore ?? l.icon,
          class: V(l.$style["icon-before"])
        }, null, 8, ["icon", "class"])) : H("", !0),
        l.type === "textarea" ? Ze((A(), W("textarea", B({
          key: 1,
          ref_key: "textarea",
          ref: s
        }, p(a), {
          "onUpdate:modelValue": u[0] || (u[0] = (c) => Wn(i) ? i.value = c : null),
          class: l.$style.textarea
        }), null, 16)), [
          [Yr, p(i)]
        ]) : Ze((A(), W("input", B({ key: 2 }, p(a), {
          "onUpdate:modelValue": u[1] || (u[1] = (c) => Wn(t) ? t.value = c : null)
        }), null, 16)), [
          [Xr, p(t)]
        ]),
        l.iconAfter ? (A(), T(d, {
          key: 3,
          icon: l.iconAfter,
          class: V(l.$style["icon-after"])
        }, null, 8, ["icon", "class"])) : H("", !0),
        l.$slots.actions ? (A(), W("div", {
          key: 4,
          class: V(l.$style.actions)
        }, [
          O(l.$slots, "actions")
        ], 2)) : H("", !0)
      ], 2);
    };
  }
}), Wc = "_icon-before_fccb21f", jc = "_icon-after_eb3b2c5", Hc = "_actions_baaebea", Kc = "_app-text-field_18e12e8", Uc = "_interactive_3dc4aaf", zc = "_error_692dad4", qc = "_textarea_db370d2", Gc = "_input_c63c5c2", Yc = { "icon-before": Wc, "icon-after": jc, actions: Hc, "app-text-field": Kc, interactive: Uc, error: zc, textarea: qc, input: Gc }, Xc = {
  $style: Yc
}, vd = /* @__PURE__ */ oe(Nc, [["__cssModules", Xc]]), Qc = /* @__PURE__ */ $({
  __name: "AppTooltip",
  props: /* @__PURE__ */ lt($e({
    position: null,
    align: null,
    ariaLabel: null,
    avoidCollisions: { type: Boolean }
  }, { position: "block-start" }), {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = {
      "block-start": "top",
      "block-end": "bottom",
      "inline-start": "left",
      "inline-end": "right"
    }, n = Ke(e, "open");
    return (r, o) => (A(), T(p(Lu), { "delay-duration": 0 }, {
      default: _(() => [
        D(p(Vu), {
          open: n.value,
          "onUpdate:open": o[0] || (o[0] = (s) => n.value = s)
        }, {
          default: _(() => [
            D(p(Nu), { "as-child": "" }, {
              default: _(() => [
                O(r.$slots, "trigger")
              ]),
              _: 3
            }),
            D(p(Ku), null, {
              default: _(() => [
                D(p(ju), B(r.$attrs, {
                  as: "div",
                  align: r.align,
                  "avoid-collisions": r.avoidCollisions,
                  position: t[r.position],
                  "align-offset": 20,
                  "aria-label": r.ariaLabel,
                  class: [r.$attrs.class, r.$style["app-tooltip"]]
                }), {
                  default: _(() => [
                    D(p(Hu), {
                      class: V(r.$style.arrow)
                    }, null, 8, ["class"]),
                    O(r.$slots, "default")
                  ]),
                  _: 3
                }, 16, ["align", "avoid-collisions", "position", "aria-label", "class"])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      _: 3
    }));
  }
}), Jc = "_app-tooltip_6b0961c", Zc = "_slideIn_3e7dd36", ed = "_arrow_7e59031", td = { "app-tooltip": Jc, slideIn: Zc, arrow: ed }, nd = {
  $style: td
}, gd = /* @__PURE__ */ oe(Qc, [["__cssModules", nd]]);
export {
  Ni as AppButton,
  zi as AppCard,
  ud as AppCheckbox,
  cd as AppChip,
  dd as AppDialog,
  fd as AppField,
  It as AppIcon,
  pd as AppLoadingSpinner,
  md as AppLogo,
  hd as AppSelectField,
  vd as AppTextField,
  gd as AppTooltip
};
