import * as kn from "vue";
import { defineComponent as T, h as xe, createBlock as k, openBlock as S, unref as p, normalizeClass as N, mergeDefaults as Ae, useCssVars as kr, computed as $, ref as O, withDirectives as Je, resolveDynamicComponent as cn, withKeys as In, withCtx as _, createCommentVNode as K, renderSlot as P, createTextVNode as Ce, toDisplayString as We, createElementBlock as H, shallowRef as bo, watch as Y, getCurrentScope as xo, onScopeDispose as Co, shallowReadonly as Le, Fragment as Ct, Comment as Eo, mergeProps as R, cloneVNode as Ir, inject as _o, provide as So, getCurrentInstance as ot, customRef as Dr, toValue as ft, onBeforeUnmount as un, readonly as Br, nextTick as ae, onUnmounted as Ao, toRefs as Ue, toHandlerKey as Mr, camelize as Oo, toRef as Lr, onMounted as ee, Teleport as Po, watchEffect as q, reactive as To, normalizeStyle as Et, createVNode as D, markRaw as Rr, watchPostEffect as $o, normalizeProps as Ke, guardReactiveProps as rt, createElementVNode as ne, renderList as ko, withModifiers as Ne, toHandlers as Fr, useSlots as Nr, mergeModels as _t, useModel as Ze, Transition as Vr, useAttrs as Wr, useCssModule as Hr, isRef as Dn, vModelText as jr, vModelDynamic as zr } from "vue";
import { useMouseInElement as Ur, unrefElement as De, defaultWindow as Kr, useVModel as gt, useMounted as qr, onKeyStroke as Gr, createGlobalState as Yr, createSharedComposable as Xr, useEventListener as qt, toValue as Qr, computedEager as Jr, useResizeObserver as Zr, useTimeoutFn as es } from "@vueuse/core";
const Io = /^[a-z0-9]+(-[a-z0-9]+)*$/, St = (e, t, n, r = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    r = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const a = o.pop(), l = o.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : r,
      prefix: l,
      name: a
    };
    return t && !pt(c) ? null : c;
  }
  const s = o[0], i = s.split("-");
  if (i.length > 1) {
    const a = {
      provider: r,
      prefix: i.shift(),
      name: i.join("-")
    };
    return t && !pt(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: s
    };
    return t && !pt(a, n) ? null : a;
  }
  return null;
}, pt = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, Do = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), vt = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), At = Object.freeze({
  ...Do,
  ...vt
}), Gt = Object.freeze({
  ...At,
  body: "",
  hidden: !1
});
function ts(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Bn(e, t) {
  const n = ts(e, t);
  for (const r in Gt)
    r in vt ? r in e && !(r in n) && (n[r] = vt[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function ns(e, t) {
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
function os(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function i(a) {
    s = Bn(
      r[a] || o[a],
      s
    );
  }
  return i(t), n.forEach(i), Bn(e, s);
}
function Bo(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = ns(e);
  for (const o in r) {
    const s = r[o];
    s && (t(o, os(e, o, s)), n.push(o));
  }
  return n;
}
const rs = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Do
};
function Nt(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function Mo(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Nt(e, rs))
    return null;
  const n = t.icons;
  for (const o in n) {
    const s = n[o];
    if (
      // Name cannot be empty
      !o || // Must have body
      typeof s.body != "string" || // Check other props
      !Nt(
        s,
        Gt
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
      !Nt(
        s,
        Gt
      )
    )
      return null;
  }
  return t;
}
const Mn = /* @__PURE__ */ Object.create(null);
function ss(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function He(e, t) {
  const n = Mn[e] || (Mn[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = ss(e, t));
}
function Lo(e, t) {
  return Mo(t) ? Bo(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function is(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let et = !1;
function Ro(e) {
  return typeof e == "boolean" && (et = e), et;
}
function as(e) {
  const t = typeof e == "string" ? St(e, !0, et) : e;
  if (t) {
    const n = He(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function ls(e, t) {
  const n = St(e, !0, et);
  if (!n)
    return !1;
  const r = He(n.provider, n.prefix);
  return t ? is(r, n.name, t) : (r.missing.add(n.name), !0);
}
function cs(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), et && !t && !e.prefix) {
    let o = !1;
    return Mo(e) && (e.prefix = "", Bo(e, (s, i) => {
      ls(s, i) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!pt({
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = He(t, n);
  return !!Lo(r, e);
}
const Fo = Object.freeze({
  width: null,
  height: null
}), No = Object.freeze({
  // Dimensions
  ...Fo,
  // Transformations
  ...vt
}), us = /(-?[0-9.]*[0-9]+[0-9.]*)/g, ds = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Ln(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(us);
  if (r === null || !r.length)
    return e;
  const o = [];
  let s = r.shift(), i = ds.test(s);
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
function fs(e, t = "defs") {
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
function ps(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function ms(e, t, n) {
  const r = fs(e);
  return ps(r.defs, t + r.content + n);
}
const hs = (e) => e === "unset" || e === "undefined" || e === "none";
function gs(e, t) {
  const n = {
    ...At,
    ...e
  }, r = {
    ...No,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let s = n.body;
  [n, r].forEach((v) => {
    const g = [], b = v.hFlip, w = v.vFlip;
    let y = v.rotate;
    b ? w ? y += 2 : (g.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), g.push("scale(-1 1)"), o.top = o.left = 0) : w && (g.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), g.push("scale(1 -1)"), o.top = o.left = 0);
    let x;
    switch (y < 0 && (y -= Math.floor(y / 4) * 4), y = y % 4, y) {
      case 1:
        x = o.height / 2 + o.top, g.unshift(
          "rotate(90 " + x.toString() + " " + x.toString() + ")"
        );
        break;
      case 2:
        g.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        x = o.width / 2 + o.left, g.unshift(
          "rotate(-90 " + x.toString() + " " + x.toString() + ")"
        );
        break;
    }
    y % 2 === 1 && (o.left !== o.top && (x = o.left, o.left = o.top, o.top = x), o.width !== o.height && (x = o.width, o.width = o.height, o.height = x)), g.length && (s = ms(
      s,
      '<g transform="' + g.join(" ") + '">',
      "</g>"
    ));
  });
  const i = r.width, a = r.height, l = o.width, c = o.height;
  let d, u;
  i === null ? (u = a === null ? "1em" : a === "auto" ? c : a, d = Ln(u, l / c)) : (d = i === "auto" ? l : i, u = a === null ? Ln(d, c / l) : a === "auto" ? c : a);
  const f = {}, m = (v, g) => {
    hs(g) || (f[v] = g.toString());
  };
  m("width", d), m("height", u);
  const h = [o.left, o.top, l, c];
  return f.viewBox = h.join(" "), {
    attributes: f,
    viewBox: h,
    body: s
  };
}
const vs = /\sid="(\S+)"/g, ys = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let ws = 0;
function bs(e, t = ys) {
  const n = [];
  let r;
  for (; r = vs.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((s) => {
    const i = typeof t == "function" ? t(s) : t + (ws++).toString(), a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + i + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const Yt = /* @__PURE__ */ Object.create(null);
function xs(e, t) {
  Yt[e] = t;
}
function Xt(e) {
  return Yt[e] || Yt[""];
}
function dn(e) {
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
const fn = /* @__PURE__ */ Object.create(null), Ye = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], mt = [];
for (; Ye.length > 0; )
  Ye.length === 1 || Math.random() > 0.5 ? mt.push(Ye.shift()) : mt.push(Ye.pop());
fn[""] = dn({
  resources: ["https://api.iconify.design"].concat(mt)
});
function Cs(e, t) {
  const n = dn(t);
  return n === null ? !1 : (fn[e] = n, !0);
}
function pn(e) {
  return fn[e];
}
const Es = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Rn = Es();
function _s(e, t) {
  const n = pn(e);
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
function Ss(e) {
  return e === 404;
}
const As = (e, t, n) => {
  const r = [], o = _s(e, t), s = "icons";
  let i = {
    type: s,
    provider: e,
    prefix: t,
    icons: []
  }, a = 0;
  return n.forEach((l, c) => {
    a += l.length + 1, a >= o && c > 0 && (r.push(i), i = {
      type: s,
      provider: e,
      prefix: t,
      icons: []
    }, a = l.length), i.icons.push(l);
  }), r.push(i), r;
};
function Os(e) {
  if (typeof e == "string") {
    const t = pn(e);
    if (t)
      return t.path;
  }
  return "/";
}
const Ps = (e, t, n) => {
  if (!Rn) {
    n("abort", 424);
    return;
  }
  let r = Os(t.provider);
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
  Rn(e + r).then((s) => {
    const i = s.status;
    if (i !== 200) {
      setTimeout(() => {
        n(Ss(i) ? "abort" : "next", i);
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
}, Ts = {
  prepare: As,
  send: Ps
};
function $s(e) {
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
    const s = o.provider, i = o.prefix, a = o.name, l = n[s] || (n[s] = /* @__PURE__ */ Object.create(null)), c = l[i] || (l[i] = He(s, i));
    let d;
    a in c.icons ? d = t.loaded : i === "" || c.missing.has(a) ? d = t.missing : d = t.pending;
    const u = {
      provider: s,
      prefix: i,
      name: a
    };
    d.push(u);
  }), t;
}
function Vo(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function ks(e) {
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
        const c = l.name;
        if (e.icons[c])
          i.loaded.push({
            provider: r,
            prefix: o,
            name: c
          });
        else if (e.missing.has(c))
          i.missing.push({
            provider: r,
            prefix: o,
            name: c
          });
        else
          return n = !0, !0;
        return !1;
      }), i.pending.length !== a && (n || Vo([e], s.id), s.callback(
        i.loaded.slice(0),
        i.missing.slice(0),
        i.pending.slice(0),
        s.abort
      ));
    });
  }));
}
let Is = 0;
function Ds(e, t, n) {
  const r = Is++, o = Vo.bind(null, n, r);
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
function Bs(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const s = typeof o == "string" ? St(o, t, n) : o;
    s && r.push(s);
  }), r;
}
var Ms = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Ls(e, t, n, r) {
  const o = e.resources.length, s = e.random ? Math.floor(Math.random() * o) : e.index;
  let i;
  if (e.random) {
    let E = e.resources.slice(0);
    for (i = []; E.length > 1; ) {
      const A = Math.floor(Math.random() * E.length);
      i.push(E[A]), E = E.slice(0, A).concat(E.slice(A + 1));
    }
    i = i.concat(E);
  } else
    i = e.resources.slice(s).concat(e.resources.slice(0, s));
  const a = Date.now();
  let l = "pending", c = 0, d, u = null, f = [], m = [];
  typeof r == "function" && m.push(r);
  function h() {
    u && (clearTimeout(u), u = null);
  }
  function v() {
    l === "pending" && (l = "aborted"), h(), f.forEach((E) => {
      E.status === "pending" && (E.status = "aborted");
    }), f = [];
  }
  function g(E, A) {
    A && (m = []), typeof E == "function" && m.push(E);
  }
  function b() {
    return {
      startTime: a,
      payload: t,
      status: l,
      queriesSent: c,
      queriesPending: f.length,
      subscribe: g,
      abort: v
    };
  }
  function w() {
    l = "failed", m.forEach((E) => {
      E(void 0, d);
    });
  }
  function y() {
    f.forEach((E) => {
      E.status === "pending" && (E.status = "aborted");
    }), f = [];
  }
  function x(E, A, I) {
    const B = A !== "success";
    switch (f = f.filter((M) => M !== E), l) {
      case "pending":
        break;
      case "failed":
        if (B || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (A === "abort") {
      d = I, w();
      return;
    }
    if (B) {
      d = I, f.length || (i.length ? C() : w());
      return;
    }
    if (h(), y(), !e.random) {
      const M = e.resources.indexOf(E.resource);
      M !== -1 && M !== e.index && (e.index = M);
    }
    l = "completed", m.forEach((M) => {
      M(I);
    });
  }
  function C() {
    if (l !== "pending")
      return;
    h();
    const E = i.shift();
    if (E === void 0) {
      if (f.length) {
        u = setTimeout(() => {
          h(), l === "pending" && (y(), w());
        }, e.timeout);
        return;
      }
      w();
      return;
    }
    const A = {
      status: "pending",
      resource: E,
      callback: (I, B) => {
        x(A, I, B);
      }
    };
    f.push(A), c++, u = setTimeout(C, e.rotate), n(E, t, A.callback);
  }
  return setTimeout(C), b;
}
function Wo(e) {
  const t = {
    ...Ms,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, l, c) {
    const d = Ls(
      t,
      a,
      l,
      (u, f) => {
        r(), c && c(u, f);
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
function Fn() {
}
const Vt = /* @__PURE__ */ Object.create(null);
function Rs(e) {
  if (!Vt[e]) {
    const t = pn(e);
    if (!t)
      return;
    const n = Wo(t), r = {
      config: t,
      redundancy: n
    };
    Vt[e] = r;
  }
  return Vt[e];
}
function Fs(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const s = Xt(e);
    if (!s)
      return n(void 0, 424), Fn;
    o = s.send;
    const i = Rs(e);
    i && (r = i.redundancy);
  } else {
    const s = dn(e);
    if (s) {
      r = Wo(s);
      const i = e.resources ? e.resources[0] : "", a = Xt(i);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Fn) : r.query(t, o, n)().abort;
}
function Nn() {
}
function Ns(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, ks(e);
  }));
}
function Vs(e) {
  const t = [], n = [];
  return e.forEach((r) => {
    (r.match(Io) ? t : n).push(r);
  }), {
    valid: t,
    invalid: n
  };
}
function Xe(e, t, n) {
  function r() {
    const o = e.pendingIcons;
    t.forEach((s) => {
      o && o.delete(s), e.icons[s] || e.missing.add(s);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!Lo(e, n).length) {
        r();
        return;
      }
    } catch (o) {
      console.error(o);
    }
  r(), Ns(e);
}
function Vn(e, t) {
  e instanceof Promise ? e.then((n) => {
    t(n);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function Ws(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    if (delete e.iconsToLoad, !o || !o.length)
      return;
    const s = e.loadIcon;
    if (e.loadIcons && (o.length > 1 || !s)) {
      Vn(
        e.loadIcons(o, r, n),
        (d) => {
          Xe(e, o, d);
        }
      );
      return;
    }
    if (s) {
      o.forEach((d) => {
        const u = s(d, r, n);
        Vn(u, (f) => {
          const m = f ? {
            prefix: r,
            icons: {
              [d]: f
            }
          } : null;
          Xe(e, [d], m);
        });
      });
      return;
    }
    const { valid: i, invalid: a } = Vs(o);
    if (a.length && Xe(e, a, null), !i.length)
      return;
    const l = r.match(Io) ? Xt(n) : null;
    if (!l) {
      Xe(e, i, null);
      return;
    }
    l.prepare(n, r, i).forEach((d) => {
      Fs(n, d, (u) => {
        Xe(e, d.icons, u);
      });
    });
  }));
}
const Hs = (e, t) => {
  const n = Bs(e, !0, Ro()), r = $s(n);
  if (!r.pending.length) {
    let l = !0;
    return t && setTimeout(() => {
      l && t(
        r.loaded,
        r.missing,
        r.pending,
        Nn
      );
    }), () => {
      l = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), s = [];
  let i, a;
  return r.pending.forEach((l) => {
    const { provider: c, prefix: d } = l;
    if (d === a && c === i)
      return;
    i = c, a = d, s.push(He(c, d));
    const u = o[c] || (o[c] = /* @__PURE__ */ Object.create(null));
    u[d] || (u[d] = []);
  }), r.pending.forEach((l) => {
    const { provider: c, prefix: d, name: u } = l, f = He(c, d), m = f.pendingIcons || (f.pendingIcons = /* @__PURE__ */ new Set());
    m.has(u) || (m.add(u), o[c][d].push(u));
  }), s.forEach((l) => {
    const c = o[l.provider][l.prefix];
    c.length && Ws(l, c);
  }), t ? Ds(t, r, s) : Nn;
};
function js(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], s = typeof o;
    r in Fo ? (o === null || o && (s === "string" || s === "number")) && (n[r] = o) : s === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const zs = /[\s,]+/;
function Us(e, t) {
  t.split(zs).forEach((n) => {
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
function Ks(e, t = 0) {
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
function qs(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Gs(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Ys(e) {
  return "data:image/svg+xml," + Gs(e);
}
function Xs(e) {
  return 'url("' + Ys(e) + '")';
}
const Wn = {
  ...No,
  inline: !1
}, Qs = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Js = {
  display: "inline-block"
}, Qt = {
  backgroundColor: "currentColor"
}, Ho = {
  backgroundColor: "transparent"
}, Hn = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, jn = {
  webkitMask: Qt,
  mask: Qt,
  background: Ho
};
for (const e in jn) {
  const t = jn[e];
  for (const n in Hn)
    t[e + n] = Hn[n];
}
const ht = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  ht[e + "-flip"] = t, ht[e.slice(0, 1) + "-flip"] = t, ht[e + "Flip"] = t;
});
function zn(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Un = (e, t) => {
  const n = js(Wn, t), r = { ...Qs }, o = t.mode || "svg", s = {}, i = t.style, a = typeof i == "object" && !(i instanceof Array) ? i : {};
  for (let v in t) {
    const g = t[v];
    if (g !== void 0)
      switch (v) {
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
          n[v] = g === !0 || g === "true" || g === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof g == "string" && Us(n, g);
          break;
        // Color: override style
        case "color":
          s.color = g;
          break;
        // Rotation as string
        case "rotate":
          typeof g == "string" ? n[v] = Ks(g) : typeof g == "number" && (n[v] = g);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          g !== !0 && g !== "true" && delete r["aria-hidden"];
          break;
        default: {
          const b = ht[v];
          b ? (g === !0 || g === "true" || g === 1) && (n[b] = !0) : Wn[v] === void 0 && (r[v] = g);
        }
      }
  }
  const l = gs(e, n), c = l.attributes;
  if (n.inline && (s.verticalAlign = "-0.125em"), o === "svg") {
    r.style = {
      ...s,
      ...a
    }, Object.assign(r, c);
    let v = 0, g = t.id;
    return typeof g == "string" && (g = g.replace(/-/g, "_")), r.innerHTML = bs(l.body, g ? () => g + "ID" + v++ : "iconifyVue"), xe("svg", r);
  }
  const { body: d, width: u, height: f } = e, m = o === "mask" || (o === "bg" ? !1 : d.indexOf("currentColor") !== -1), h = qs(d, {
    ...c,
    width: u + "",
    height: f + ""
  });
  return r.style = {
    ...s,
    "--svg": Xs(h),
    width: zn(c.width),
    height: zn(c.height),
    ...Js,
    ...m ? Qt : Ho,
    ...a
  }, xe("span", r);
};
Ro(!0);
xs("", Ts);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !cs(r)) && console.error(n);
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
          Cs(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
const Zs = {
  ...At,
  body: ""
}, ei = T({
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
      if (typeof e != "string" || (r = St(e, !1, !0)) === null)
        return this.abortLoading(), null;
      let o = as(r);
      if (!o)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", o !== null && (this._loadingIcon = {
          name: e,
          abort: Hs([r], () => {
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
      return Un(Zs, e);
    let n = e;
    return t.classes && (n = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + t.classes.join(" ")
    }), Un({
      ...At,
      ...t.data
    }, n);
  }
}), ti = /* @__PURE__ */ T({
  __name: "AppIcon",
  props: {
    icon: null
  },
  setup(e) {
    return (t, n) => (S(), k(p(ei), {
      inline: "",
      icon: typeof e.icon == "string" ? e.icon : e.icon[1],
      class: N(t.$style.icon)
    }, null, 8, ["icon", "class"]));
  }
}), ni = "_icon_6dc929d", oi = { icon: ni }, ue = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, ri = {
  $style: oi
}, mn = /* @__PURE__ */ ue(ti, [["__cssModules", ri]]);
var si = Object.defineProperty, ii = Object.defineProperties, ai = Object.getOwnPropertyDescriptors, Kn = Object.getOwnPropertySymbols, li = Object.prototype.hasOwnProperty, ci = Object.prototype.propertyIsEnumerable, qn = (e, t, n) => t in e ? si(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, be = (e, t) => {
  for (var n in t || (t = {}))
    li.call(t, n) && qn(e, n, t[n]);
  if (Kn)
    for (var n of Kn(t))
      ci.call(t, n) && qn(e, n, t[n]);
  return e;
}, jo = (e, t) => ii(e, ai(t)), ui = {
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
}, di = (e) => "config" in e && "globalProperties" in e.config, fi = (e) => {
  let t;
  return e === "vue2" ? t = !1 : e === "vue3" ? t = !0 : t = di(e), t ? {
    mounted: "mounted",
    updated: "updated"
  } : {
    mounted: "inserted",
    updated: "componentUpdated"
  };
}, zo = (e) => typeof e == "string" && e !== "auto", Gn = (e, t) => {
  e.dataset.vWaveBoundary = zo(t) ? t : "true";
}, pi = ({ borderTopLeftRadius: e, borderTopRightRadius: t, borderBottomLeftRadius: n, borderBottomRightRadius: r }, o) => {
  const s = document.createElement(o);
  return s.style.top = "0", s.style.left = "0", s.style.width = "100%", s.style.height = "100%", s.style.display = "block", s.style.position = "absolute", s.style.borderRadius = `${e} ${t} ${r} ${n}`, s.style.overflow = "hidden", s.style.pointerEvents = "none", s.style.webkitMaskImage = "-webkit-radial-gradient(white, black)", s.dataset.vWaveContainerInternal = "true", s;
}, mi = ({ x: e, y: t }, n, r) => {
  const o = document.createElement("div");
  return o.style.position = "absolute", o.style.width = `${n}px`, o.style.height = `${n}px`, o.style.top = `${t}px`, o.style.left = `${e}px`, o.style.background = r.color, o.style.borderRadius = "50%", o.style.opacity = `${r.initialOpacity}`, o.style.transform = "translate(-50%,-50%) scale(0)", o.style.transition = `transform ${r.duration}s ${r.easing}, opacity ${r.duration}s ${r.easing}`, o;
};
function at(e, t, n, r) {
  const o = e - n, s = t - r;
  return Math.sqrt(o * o + s * s);
}
function hi({ x: e, y: t }, { width: n, height: r }) {
  const o = at(e, t, 0, 0), s = at(e, t, n, 0), i = at(e, t, 0, r), a = at(e, t, n, r);
  return Math.max(o, s, i, a);
}
var gi = ({ x: e, y: t }, { top: n, left: r }) => ({
  x: e - r,
  y: t - n
}), vi = (e, t) => {
  t.position === "static" && (["top", "left", "right", "bottom"].forEach((n) => {
    t[n] && t[n] !== "auto" && console.warn(
      "[v-wave]:",
      e,
      `You're using a \`static\` positioned element with a non-auto value (${t[n]}) for \`${n}\`.`,
      "It's position will be changed to relative while displaying the wave which might cause the element to visually jump."
    );
  }), e.dataset.originalPositionValue = e.style.position, e.style.position = "relative");
}, Yn = (e) => {
  var t;
  e.style.position = (t = e.dataset.originalPositionValue) != null ? t : "", delete e.dataset.originalPositionValue;
}, hn = "vWaveCountInternal";
function yi(e) {
  const t = yt(e);
  Uo(e, t + 1);
}
function Xn(e) {
  const t = yt(e);
  Uo(e, t - 1);
}
function Uo(e, t) {
  e.dataset[hn] = t.toString();
}
function yt(e) {
  var t;
  return Number.parseInt((t = e.dataset[hn]) != null ? t : "0", 10);
}
function Qn(e) {
  delete e.dataset[hn];
}
var wi = 2.05, Jt = (e, t, n) => {
  if (n.disabled || n.respectDisabledAttribute && t.hasAttribute("disabled") || n.respectPrefersReducedMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const r = t.getBoundingClientRect(), o = window.getComputedStyle(t), s = gi(e, r), i = wi * hi(s, r), a = t.querySelector("[data-v-wave-container-internal]"), l = a ?? pi(o, n.tagName), c = mi(s, i, n);
  yi(t), vi(t, o), l.appendChild(c), a || t.appendChild(l);
  let d = !n.waitForRelease;
  const u = (v) => {
    typeof v < "u" && (document.removeEventListener("pointerup", u), document.removeEventListener("pointercancel", u)), d ? f() : d = !0;
  }, f = () => {
    c.style.transition = `opacity ${n.dissolveDuration}s linear`, c.style.opacity = "0", setTimeout(() => {
      c.remove(), Xn(t), yt(t) === 0 && (Qn(t), l.remove(), Yn(t));
    }, n.dissolveDuration * 1e3);
  };
  n.waitForRelease && (document.addEventListener("pointerup", u), document.addEventListener("pointercancel", u));
  const m = setTimeout(() => {
    document.removeEventListener("pointercancel", h), requestAnimationFrame(() => {
      c.style.transform = "translate(-50%,-50%) scale(1)", c.style.opacity = `${n.finalOpacity}`, setTimeout(() => u(), n.duration * 1e3);
    });
  }, n.cancellationPeriod), h = () => {
    clearTimeout(m), c.remove(), Xn(t), yt(t) === 0 && (Qn(t), l.remove(), Yn(t)), document.removeEventListener("pointerup", u), document.removeEventListener("pointercancel", u), document.removeEventListener("pointercancel", h);
  };
  document.addEventListener("pointercancel", h);
}, Qe = /* @__PURE__ */ new WeakMap(), bi = (e, t) => (n, r) => {
  if (!Qe.has(t)) return;
  const o = be(be({}, e), Qe.get(t));
  if (o.stopPropagation && n.stopPropagation(), o.trigger === !1) return Jt(n, t, o);
  if (zo(o.trigger)) return;
  const s = t.querySelector('[data-v-wave-trigger="true"]');
  !s && o.trigger === !0 || s && !n.composedPath().includes(s) || Jt(r ?? n, t, jo(be({}, o), { waitForRelease: r ? !1 : o.waitForRelease }));
}, xi = (e = {}, t = "vue3") => {
  const n = be(be({}, ui), e), r = fi(t), o = (a) => {
    if (a.detail !== 0) return;
    const l = a.currentTarget, c = l.dataset.vWaveTrigger;
    document.querySelectorAll(
      `[data-v-wave-boundary="${c}"]`
    ).forEach((u) => {
      const f = a.type === "click";
      let m;
      if (f) {
        const v = l.getBoundingClientRect();
        m = {
          x: v.left + v.width / 2,
          y: v.top + v.height / 2
        };
      } else
        m = a;
      const h = be(be({}, n), Qe.get(u));
      Jt(m, u, jo(be({}, h), { waitForRelease: f ? !1 : h.waitForRelease }));
    });
  }, s = {
    [r.mounted](a, { value: l = {} }) {
      var c;
      Qe.set(a, l), Gn(a, (c = l == null ? void 0 : l.trigger) != null ? c : n.trigger);
      const d = bi(n, a);
      a.addEventListener("pointerdown", d), a.addEventListener("click", (u) => {
        if (u.detail !== 0) return;
        const f = a.getBoundingClientRect(), m = {
          x: f.left + f.width / 2,
          y: f.top + f.height / 2
        };
        d(u, m);
      });
    },
    [r.updated](a, { value: l = {} }) {
      var c;
      Qe.set(a, l), Gn(a, (c = l == null ? void 0 : l.trigger) != null ? c : n.trigger);
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
}, Ci = {
  createLocalWaveDirective: xi
}, Ko = Ci;
const Ei = /* @__PURE__ */ T({
  __name: "AppButton",
  props: Ae({
    text: null,
    variant: null,
    icon: null,
    iconBefore: null,
    href: null,
    tag: null,
    iconAfter: null
  }, { variant: "secondary" }),
  setup(e) {
    kr((u) => ({
      "5843a9f2": c.value,
      "58441e51": d.value
    }));
    const { createLocalWaveDirective: t } = Ko, { vWave: n } = t({
      duration: 0.2
    }), r = O(null), { elementX: o, elementY: s, elementWidth: i, elementHeight: a, isOutside: l } = Ur(r), c = $(
      () => l.value ? void 0 : `${o.value / i.value * 100}%`
    ), d = $(
      () => l.value ? void 0 : `${s.value / a.value * 100}%`
    );
    return (u, f) => {
      const m = mn;
      return Je((S(), k(cn(u.tag ?? "button"), {
        ref_key: "buttonEl",
        ref: r,
        href: u.href,
        tabindex: "0",
        class: N([
          u.$style["app-button"],
          u.$style[u.variant],
          {
            [u.$style["v-border-shine"]]: !(p(l) && !1)
          }
        ]),
        onKeydown: [
          f[0] || (f[0] = In((h) => u.$emit("click", h), ["enter"])),
          f[1] || (f[1] = In((h) => u.$emit("click", h), ["space"]))
        ]
      }, {
        default: _(() => [
          u.icon ?? u.iconBefore ? (S(), k(m, {
            key: 0,
            icon: u.icon ?? u.iconBefore,
            class: N(u.$style["icon-before"])
          }, null, 8, ["icon", "class"])) : K("", !0),
          P(u.$slots, "default", {}, () => [
            Ce(We(u.text), 1)
          ]),
          u.iconAfter ? (S(), k(m, {
            key: 1,
            icon: u.iconAfter,
            class: N(u.$style["icon-after"])
          }, null, 8, ["icon", "class"])) : K("", !0)
        ]),
        _: 3
      }, 40, ["href", "class"])), [
        [p(n)]
      ]);
    };
  }
}), _i = "_app-button_f9040b0", Si = "_v-border-shine_8419f80", Ai = "_primary_5785c37", Oi = "_secondary_31cb9f8", Pi = "_text_7e1c00c", Ti = "_icon-before_fb07300", $i = "_icon-after_4d342ca", ki = "_label_bdd07c7", Ii = { "app-button": _i, "v-border-shine": Si, primary: Ai, secondary: Oi, text: Pi, "icon-before": Ti, "icon-after": $i, label: ki }, Di = {
  $style: Ii
}, Bi = /* @__PURE__ */ ue(Ei, [["__cssModules", Di]]), Mi = /* @__PURE__ */ T({
  __name: "AppCard",
  props: Ae({
    variant: null
  }, { variant: "raised" }),
  setup(e) {
    return (t, n) => (S(), H("div", {
      class: N([t.$style["app-card"], { [t.$style.variant]: t.variant }])
    }, [
      P(t.$slots, "default")
    ], 2));
  }
}), Li = "_app-card_7a12d7d", Ri = "_sunken_b1cf9a9", Fi = { "app-card": Li, sunken: Ri }, Ni = {
  $style: Fi
}, Vi = /* @__PURE__ */ ue(Mi, [["__cssModules", Ni]]), Wi = /* @__PURE__ */ T({
  __name: "AppChip",
  props: Ae({
    size: null,
    transparent: { type: Boolean }
  }, { size: "medium", transparent: !1 }),
  setup(e) {
    return (t, n) => (S(), H("div", {
      class: N([
        t.$style["app-chip"],
        t.$style[t.size],
        { [t.$style.transparent]: t.transparent }
      ])
    }, [
      P(t.$slots, "default")
    ], 2));
  }
}), Hi = "_app-chip_707ac6f", ji = "_small_1d451e9", zi = "_large_97f6530", Ui = "_transparent_8a38eaa", Ki = { "app-chip": Hi, small: ji, large: zi, transparent: Ui }, qi = {
  $style: Ki
}, Au = /* @__PURE__ */ ue(Wi, [["__cssModules", qi]]), Gi = ["top", "right", "bottom", "left"], Ee = Math.min, Q = Math.max, wt = Math.round, lt = Math.floor, le = (e) => ({
  x: e,
  y: e
}), Yi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Xi = {
  start: "end",
  end: "start"
};
function Zt(e, t, n) {
  return Q(e, Ee(t, n));
}
function ge(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ve(e) {
  return e.split("-")[0];
}
function qe(e) {
  return e.split("-")[1];
}
function gn(e) {
  return e === "x" ? "y" : "x";
}
function vn(e) {
  return e === "y" ? "height" : "width";
}
function _e(e) {
  return ["top", "bottom"].includes(ve(e)) ? "y" : "x";
}
function yn(e) {
  return gn(_e(e));
}
function Qi(e, t, n) {
  n === void 0 && (n = !1);
  const r = qe(e), o = yn(e), s = vn(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = bt(i)), [i, bt(i)];
}
function Ji(e) {
  const t = bt(e);
  return [en(e), t, en(t)];
}
function en(e) {
  return e.replace(/start|end/g, (t) => Xi[t]);
}
function Zi(e, t, n) {
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
function ea(e, t, n, r) {
  const o = qe(e);
  let s = Zi(ve(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(en)))), s;
}
function bt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Yi[t]);
}
function ta(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function qo(e) {
  return typeof e != "number" ? ta(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function xt(e) {
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
function Jn(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = _e(t), i = yn(t), a = vn(i), l = ve(t), c = s === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
        y: u
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (qe(t)) {
    case "start":
      m[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      m[i] += f * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const na = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: u
  } = Jn(c, r, l), f = r, m = {}, h = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: g,
      fn: b
    } = a[v], {
      x: w,
      y,
      data: x,
      reset: C
    } = await b({
      x: d,
      y: u,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: m,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = w ?? d, u = y ?? u, m = {
      ...m,
      [g]: {
        ...m[g],
        ...x
      }
    }, C && h <= 50 && (h++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (c = C.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: d,
      y: u
    } = Jn(c, f, l)), v = -1);
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: o,
    middlewareData: m
  };
};
async function tt(e, t) {
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
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = ge(t, e), h = qo(m), g = a[f ? u === "floating" ? "reference" : "floating" : u], b = xt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), w = u === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), x = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = xt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: y,
    strategy: l
  }) : w);
  return {
    top: (b.top - C.top + h.top) / x.y,
    bottom: (C.bottom - b.bottom + h.bottom) / x.y,
    left: (b.left - C.left + h.left) / x.x,
    right: (C.right - b.right + h.right) / x.x
  };
}
const oa = (e) => ({
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
      element: c,
      padding: d = 0
    } = ge(e, t) || {};
    if (c == null)
      return {};
    const u = qo(d), f = {
      x: n,
      y: r
    }, m = yn(o), h = vn(m), v = await i.getDimensions(c), g = m === "y", b = g ? "top" : "left", w = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", x = s.reference[h] + s.reference[m] - f[m] - s.floating[h], C = f[m] - s.reference[m], E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let A = E ? E[y] : 0;
    (!A || !await (i.isElement == null ? void 0 : i.isElement(E))) && (A = a.floating[y] || s.floating[h]);
    const I = x / 2 - C / 2, B = A / 2 - v[h] / 2 - 1, M = Ee(u[b], B), L = Ee(u[w], B), z = M, U = A - v[h] - L, V = A / 2 - v[h] / 2 + I, G = Zt(z, V, U), X = !l.arrow && qe(o) != null && V !== G && s.reference[h] / 2 - (V < z ? M : L) - v[h] / 2 < 0, j = X ? V < z ? V - z : V - U : 0;
    return {
      [m]: f[m] + j,
      data: {
        [m]: G,
        centerOffset: V - G - j,
        ...X && {
          alignmentOffset: j
        }
      },
      reset: X
    };
  }
}), ra = function(e) {
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
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: v = !0,
        ...g
      } = ge(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const b = ve(o), w = _e(a), y = ve(a) === a, x = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = f || (y || !v ? [bt(a)] : Ji(a)), E = h !== "none";
      !f && E && C.push(...ea(a, v, h, x));
      const A = [a, ...C], I = await tt(t, g), B = [];
      let M = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && B.push(I[b]), u) {
        const V = Qi(o, i, x);
        B.push(I[V[0]], I[V[1]]);
      }
      if (M = [...M, {
        placement: o,
        overflows: B
      }], !B.every((V) => V <= 0)) {
        var L, z;
        const V = (((L = s.flip) == null ? void 0 : L.index) || 0) + 1, G = A[V];
        if (G)
          return {
            data: {
              index: V,
              overflows: M
            },
            reset: {
              placement: G
            }
          };
        let X = (z = M.filter((j) => j.overflows[0] <= 0).sort((j, se) => j.overflows[1] - se.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!X)
          switch (m) {
            case "bestFit": {
              var U;
              const j = (U = M.filter((se) => {
                if (E) {
                  const ie = _e(se.placement);
                  return ie === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ie === "y";
                }
                return !0;
              }).map((se) => [se.placement, se.overflows.filter((ie) => ie > 0).reduce((ie, Me) => ie + Me, 0)]).sort((se, ie) => se[1] - ie[1])[0]) == null ? void 0 : U[0];
              j && (X = j);
              break;
            }
            case "initialPlacement":
              X = a;
              break;
          }
        if (o !== X)
          return {
            reset: {
              placement: X
            }
          };
      }
      return {};
    }
  };
};
function Zn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function eo(e) {
  return Gi.some((t) => e[t] >= 0);
}
const sa = function(e) {
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
          const s = await tt(t, {
            ...o,
            elementContext: "reference"
          }), i = Zn(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: eo(i)
            }
          };
        }
        case "escaped": {
          const s = await tt(t, {
            ...o,
            altBoundary: !0
          }), i = Zn(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: eo(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function ia(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = ve(n), a = qe(n), l = _e(n) === "y", c = ["left", "top"].includes(i) ? -1 : 1, d = s && l ? -1 : 1, u = ge(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: h
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return a && typeof h == "number" && (m = a === "end" ? h * -1 : h), l ? {
    x: m * d,
    y: f * c
  } : {
    x: f * c,
    y: m * d
  };
}
const aa = function(e) {
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
      } = t, l = await ia(t, e);
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
}, la = function(e) {
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
          fn: (g) => {
            let {
              x: b,
              y: w
            } = g;
            return {
              x: b,
              y: w
            };
          }
        },
        ...l
      } = ge(e, t), c = {
        x: n,
        y: r
      }, d = await tt(t, l), u = _e(ve(o)), f = gn(u);
      let m = c[f], h = c[u];
      if (s) {
        const g = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", w = m + d[g], y = m - d[b];
        m = Zt(w, m, y);
      }
      if (i) {
        const g = u === "y" ? "top" : "left", b = u === "y" ? "bottom" : "right", w = h + d[g], y = h - d[b];
        h = Zt(w, h, y);
      }
      const v = a.fn({
        ...t,
        [f]: m,
        [u]: h
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [f]: s,
            [u]: i
          }
        }
      };
    }
  };
}, ca = function(e) {
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
        crossAxis: c = !0
      } = ge(e, t), d = {
        x: n,
        y: r
      }, u = _e(o), f = gn(u);
      let m = d[f], h = d[u];
      const v = ge(a, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const y = f === "y" ? "height" : "width", x = s.reference[f] - s.floating[y] + g.mainAxis, C = s.reference[f] + s.reference[y] - g.mainAxis;
        m < x ? m = x : m > C && (m = C);
      }
      if (c) {
        var b, w;
        const y = f === "y" ? "width" : "height", x = ["top", "left"].includes(ve(o)), C = s.reference[u] - s.floating[y] + (x && ((b = i.offset) == null ? void 0 : b[u]) || 0) + (x ? 0 : g.crossAxis), E = s.reference[u] + s.reference[y] + (x ? 0 : ((w = i.offset) == null ? void 0 : w[u]) || 0) - (x ? g.crossAxis : 0);
        h < C ? h = C : h > E && (h = E);
      }
      return {
        [f]: m,
        [u]: h
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
        ...c
      } = ge(e, t), d = await tt(t, c), u = ve(o), f = qe(o), m = _e(o) === "y", {
        width: h,
        height: v
      } = s.floating;
      let g, b;
      u === "top" || u === "bottom" ? (g = u, b = f === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = u, g = f === "end" ? "top" : "bottom");
      const w = v - d.top - d.bottom, y = h - d.left - d.right, x = Ee(v - d[g], w), C = Ee(h - d[b], y), E = !t.middlewareData.shift;
      let A = x, I = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = y), (r = t.middlewareData.shift) != null && r.enabled.y && (A = w), E && !f) {
        const M = Q(d.left, 0), L = Q(d.right, 0), z = Q(d.top, 0), U = Q(d.bottom, 0);
        m ? I = h - 2 * (M !== 0 || L !== 0 ? M + L : Q(d.left, d.right)) : A = v - 2 * (z !== 0 || U !== 0 ? z + U : Q(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: I,
        availableHeight: A
      });
      const B = await i.getDimensions(a.floating);
      return h !== B.width || v !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ot() {
  return typeof window < "u";
}
function Be(e) {
  return wn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function J(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function de(e) {
  var t;
  return (t = (wn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function wn(e) {
  return Ot() ? e instanceof Node || e instanceof J(e).Node : !1;
}
function oe(e) {
  return Ot() ? e instanceof Element || e instanceof J(e).Element : !1;
}
function ce(e) {
  return Ot() ? e instanceof HTMLElement || e instanceof J(e).HTMLElement : !1;
}
function to(e) {
  return !Ot() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof J(e).ShadowRoot;
}
function st(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = re(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function da(e) {
  return ["table", "td", "th"].includes(Be(e));
}
function Pt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function bn(e) {
  const t = xn(), n = oe(e) ? re(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function fa(e) {
  let t = Se(e);
  for (; ce(t) && !je(t); ) {
    if (bn(t))
      return t;
    if (Pt(t))
      return null;
    t = Se(t);
  }
  return null;
}
function xn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function je(e) {
  return ["html", "body", "#document"].includes(Be(e));
}
function re(e) {
  return J(e).getComputedStyle(e);
}
function Tt(e) {
  return oe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Se(e) {
  if (Be(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    to(e) && e.host || // Fallback.
    de(e)
  );
  return to(t) ? t.host : t;
}
function Go(e) {
  const t = Se(e);
  return je(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ce(t) && st(t) ? t : Go(t);
}
function nt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Go(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = J(o);
  if (s) {
    const a = tn(i);
    return t.concat(i, i.visualViewport || [], st(o) ? o : [], a && n ? nt(a) : []);
  }
  return t.concat(o, nt(o, [], n));
}
function tn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Yo(e) {
  const t = re(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ce(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = wt(n) !== s || wt(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function Cn(e) {
  return oe(e) ? e : e.contextElement;
}
function Ve(e) {
  const t = Cn(e);
  if (!ce(t))
    return le(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Yo(t);
  let i = (s ? wt(n.width) : n.width) / r, a = (s ? wt(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const pa = /* @__PURE__ */ le(0);
function Xo(e) {
  const t = J(e);
  return !xn() || !t.visualViewport ? pa : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ma(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== J(e) ? !1 : t;
}
function Ie(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Cn(e);
  let i = le(1);
  t && (r ? oe(r) && (i = Ve(r)) : i = Ve(e));
  const a = ma(s, n, r) ? Xo(s) : le(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, d = o.width / i.x, u = o.height / i.y;
  if (s) {
    const f = J(s), m = r && oe(r) ? J(r) : r;
    let h = f, v = tn(h);
    for (; v && r && m !== h; ) {
      const g = Ve(v), b = v.getBoundingClientRect(), w = re(v), y = b.left + (v.clientLeft + parseFloat(w.paddingLeft)) * g.x, x = b.top + (v.clientTop + parseFloat(w.paddingTop)) * g.y;
      l *= g.x, c *= g.y, d *= g.x, u *= g.y, l += y, c += x, h = J(v), v = tn(h);
    }
  }
  return xt({
    width: d,
    height: u,
    x: l,
    y: c
  });
}
function En(e, t) {
  const n = Tt(e).scrollLeft;
  return t ? t.left + n : Ie(de(e)).left + n;
}
function Qo(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    En(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function ha(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = de(r), a = t ? Pt(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = le(1);
  const d = le(0), u = ce(r);
  if ((u || !u && !s) && ((Be(r) !== "body" || st(i)) && (l = Tt(r)), ce(r))) {
    const m = Ie(r);
    c = Ve(r), d.x = m.x + r.clientLeft, d.y = m.y + r.clientTop;
  }
  const f = i && !u && !s ? Qo(i, l, !0) : le(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function ga(e) {
  return Array.from(e.getClientRects());
}
function va(e) {
  const t = de(e), n = Tt(e), r = e.ownerDocument.body, o = Q(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Q(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + En(e);
  const a = -n.scrollTop;
  return re(r).direction === "rtl" && (i += Q(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function ya(e, t) {
  const n = J(e), r = de(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const c = xn();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
function wa(e, t) {
  const n = Ie(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = ce(e) ? Ve(e) : le(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function no(e, t, n) {
  let r;
  if (t === "viewport")
    r = ya(e, n);
  else if (t === "document")
    r = va(de(e));
  else if (oe(t))
    r = wa(t, n);
  else {
    const o = Xo(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return xt(r);
}
function Jo(e, t) {
  const n = Se(e);
  return n === t || !oe(n) || je(n) ? !1 : re(n).position === "fixed" || Jo(n, t);
}
function ba(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = nt(e, [], !1).filter((a) => oe(a) && Be(a) !== "body"), o = null;
  const s = re(e).position === "fixed";
  let i = s ? Se(e) : e;
  for (; oe(i) && !je(i); ) {
    const a = re(i), l = bn(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || st(i) && !l && Jo(e, i)) ? r = r.filter((d) => d !== i) : o = a, i = Se(i);
  }
  return t.set(e, r), r;
}
function xa(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Pt(t) ? [] : ba(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((c, d) => {
    const u = no(t, d, o);
    return c.top = Q(u.top, c.top), c.right = Ee(u.right, c.right), c.bottom = Ee(u.bottom, c.bottom), c.left = Q(u.left, c.left), c;
  }, no(t, a, o));
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
  } = Yo(e);
  return {
    width: t,
    height: n
  };
}
function Ea(e, t, n) {
  const r = ce(t), o = de(t), s = n === "fixed", i = Ie(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = le(0);
  if (r || !r && !s)
    if ((Be(t) !== "body" || st(o)) && (a = Tt(t)), r) {
      const f = Ie(t, !0, s, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = En(o));
  const c = o && !r && !s ? Qo(o, a) : le(0), d = i.left + a.scrollLeft - l.x - c.x, u = i.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: u,
    width: i.width,
    height: i.height
  };
}
function Wt(e) {
  return re(e).position === "static";
}
function oo(e, t) {
  if (!ce(e) || re(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return de(e) === n && (n = n.ownerDocument.body), n;
}
function Zo(e, t) {
  const n = J(e);
  if (Pt(e))
    return n;
  if (!ce(e)) {
    let o = Se(e);
    for (; o && !je(o); ) {
      if (oe(o) && !Wt(o))
        return o;
      o = Se(o);
    }
    return n;
  }
  let r = oo(e, t);
  for (; r && da(r) && Wt(r); )
    r = oo(r, t);
  return r && je(r) && Wt(r) && !bn(r) ? n : r || fa(e) || n;
}
const _a = async function(e) {
  const t = this.getOffsetParent || Zo, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Ea(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Sa(e) {
  return re(e).direction === "rtl";
}
const Aa = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ha,
  getDocumentElement: de,
  getClippingRect: xa,
  getOffsetParent: Zo,
  getElementRects: _a,
  getClientRects: ga,
  getDimensions: Ca,
  getScale: Ve,
  isElement: oe,
  isRTL: Sa
};
function er(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Oa(e, t) {
  let n = null, r;
  const o = de(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const c = e.getBoundingClientRect(), {
      left: d,
      top: u,
      width: f,
      height: m
    } = c;
    if (a || t(), !f || !m)
      return;
    const h = lt(u), v = lt(o.clientWidth - (d + f)), g = lt(o.clientHeight - (u + m)), b = lt(d), y = {
      rootMargin: -h + "px " + -v + "px " + -g + "px " + -b + "px",
      threshold: Q(0, Ee(1, l)) || 1
    };
    let x = !0;
    function C(E) {
      const A = E[0].intersectionRatio;
      if (A !== l) {
        if (!x)
          return i();
        A ? i(!1, A) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !er(c, e.getBoundingClientRect()) && i(), x = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, y);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function Pa(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Cn(e), d = o || s ? [...c ? nt(c) : [], ...nt(t)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), s && b.addEventListener("resize", n);
  });
  const u = c && a ? Oa(c, n) : null;
  let f = -1, m = null;
  i && (m = new ResizeObserver((b) => {
    let [w] = b;
    w && w.target === c && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var y;
      (y = m) == null || y.observe(t);
    })), n();
  }), c && !l && m.observe(c), m.observe(t));
  let h, v = l ? Ie(e) : null;
  l && g();
  function g() {
    const b = Ie(e);
    v && !er(v, b) && n(), v = b, h = requestAnimationFrame(g);
  }
  return n(), () => {
    var b;
    d.forEach((w) => {
      o && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), u == null || u(), (b = m) == null || b.disconnect(), m = null, l && cancelAnimationFrame(h);
  };
}
const Ta = aa, $a = la, ro = ra, ka = ua, Ia = sa, Da = oa, Ba = ca, Ma = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Aa,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return na(e, t, {
    ...o,
    platform: s
  });
};
function La(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function nn(e) {
  if (La(e)) {
    const t = e.$el;
    return wn(t) && Be(t) === "#comment" ? null : t;
  }
  return e;
}
function Fe(e) {
  return typeof e == "function" ? e() : p(e);
}
function Ra(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = nn(Fe(e.element));
      return n == null ? {} : Da({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function tr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function so(e, t) {
  const n = tr(e);
  return Math.round(t * n) / n;
}
function Fa(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = $(() => {
    var A;
    return (A = Fe(n.open)) != null ? A : !0;
  }), s = $(() => Fe(n.middleware)), i = $(() => {
    var A;
    return (A = Fe(n.placement)) != null ? A : "bottom";
  }), a = $(() => {
    var A;
    return (A = Fe(n.strategy)) != null ? A : "absolute";
  }), l = $(() => {
    var A;
    return (A = Fe(n.transform)) != null ? A : !0;
  }), c = $(() => nn(e.value)), d = $(() => nn(t.value)), u = O(0), f = O(0), m = O(a.value), h = O(i.value), v = bo({}), g = O(!1), b = $(() => {
    const A = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return A;
    const I = so(d.value, u.value), B = so(d.value, f.value);
    return l.value ? {
      ...A,
      transform: "translate(" + I + "px, " + B + "px)",
      ...tr(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: I + "px",
      top: B + "px"
    };
  });
  let w;
  function y() {
    if (c.value == null || d.value == null)
      return;
    const A = o.value;
    Ma(c.value, d.value, {
      middleware: s.value,
      placement: i.value,
      strategy: a.value
    }).then((I) => {
      u.value = I.x, f.value = I.y, m.value = I.strategy, h.value = I.placement, v.value = I.middlewareData, g.value = A !== !1;
    });
  }
  function x() {
    typeof w == "function" && (w(), w = void 0);
  }
  function C() {
    if (x(), r === void 0) {
      y();
      return;
    }
    if (c.value != null && d.value != null) {
      w = r(c.value, d.value, y);
      return;
    }
  }
  function E() {
    o.value || (g.value = !1);
  }
  return Y([s, i, a, o], y, {
    flush: "sync"
  }), Y([c, d], C, {
    flush: "sync"
  }), Y(o, E, {
    flush: "sync"
  }), xo() && Co(x), {
    x: Le(u),
    y: Le(f),
    strategy: Le(m),
    placement: Le(h),
    middlewareData: Le(v),
    isPositioned: Le(g),
    floatingStyles: b,
    update: y
  };
}
function _n(e) {
  return e ? e.flatMap((t) => t.type === Ct ? _n(t.children) : [t]) : [];
}
const on = T({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var l, c;
      if (!n.default)
        return null;
      const r = _n(n.default()), o = r.findIndex((d) => d.type !== Eo);
      if (o === -1)
        return r;
      const s = r[o];
      (l = s.props) == null || delete l.ref;
      const i = s.props ? R(t, s.props) : t;
      t.class && ((c = s.props) != null && c.class) && delete s.props.class;
      const a = Ir(s, i);
      for (const d in i)
        d.startsWith("on") && (a.props || (a.props = {}), a.props[d] = i[d]);
      return r.length === 1 ? a : (r[o] = a, r);
    };
  }
}), W = T({
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
    return typeof r == "string" && ["area", "img", "input"].includes(r) ? () => xe(r, t) : r !== "template" ? () => xe(e.as, t, { default: n.default }) : () => xe(on, t, { default: n.default });
  }
}), nr = /* @__PURE__ */ T({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (S(), k(p(W), {
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
        P(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
}), io = Object.freeze({
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
function ao(e, t) {
  t ? t = { ...io, ...t } : t = io;
  const n = or(t);
  return n.dispatch(e), n.toString();
}
const Na = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function or(e) {
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
        let c = Object.keys(o);
        e.unorderedObjects && (c = c.sort());
        let d = [];
        e.respectType !== !1 && !lo(o) && (d = Na), e.excludeKeys && (c = c.filter((f) => !e.excludeKeys(f)), d = d.filter((f) => !e.excludeKeys(f))), r("object:" + (c.length + d.length) + ":");
        const u = (f) => {
          this.dispatch(f), r(":"), e.excludeValues || this.dispatch(o[f]), r(",");
        };
        for (const f of c)
          u(f);
        for (const f of d)
          u(f);
      }
    },
    array(o, s) {
      if (s = s === void 0 ? e.unorderedArrays !== !1 : s, r("array:" + o.length + ":"), !s || o.length <= 1) {
        for (const l of o)
          this.dispatch(l);
        return;
      }
      const i = /* @__PURE__ */ new Map(), a = o.map((l) => {
        const c = or(e);
        c.dispatch(l);
        for (const [d, u] of c.getContext())
          i.set(d, u);
        return c.toString();
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
      r("fn:"), lo(o) ? this.dispatch("[native]") : this.dispatch(o.toString()), e.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(o.name)), e.respectFunctionProperties && this.object(o);
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
const rr = "[native code] }", Va = rr.length;
function lo(e) {
  return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-Va) === rr;
}
function Wa(e, t, n = {}) {
  return e === t || ao(e, n) === ao(t, n);
}
function co(e) {
  return e == null;
}
function fe(e, t) {
  const n = typeof e == "string" ? `${e}Context` : t, r = Symbol(n);
  return [(i) => {
    const a = _o(r, i);
    if (a || a === null)
      return a;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (i) => (So(r, i), i)];
}
const [$t, Ou] = fe("ConfigProvider");
function Ha(e) {
  const t = $t({
    dir: O("ltr")
  });
  return $(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function F() {
  const e = ot(), t = O(), n = $(() => {
    var i, a;
    return ["#text", "#comment"].includes((i = t.value) == null ? void 0 : i.$el.nodeName) ? (a = t.value) == null ? void 0 : a.$el.nextElementSibling : De(t);
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
let ja = 0;
function ze(e, t = "reka") {
  const n = $t({ useId: void 0 });
  return kn.useId ? `${t}-${kn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++ja}`;
}
function Sn(e) {
  return xo() ? (Co(e), !0) : !1;
}
function za() {
  const e = /* @__PURE__ */ new Set(), t = (s) => {
    e.delete(s);
  };
  return {
    on: (s) => {
      e.add(s);
      const i = () => t(s);
      return Sn(i), {
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
const uo = /* @__PURE__ */ Ua();
function Ua() {
  var e, t;
  return Oe && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Ka(e) {
  return ot();
}
function sr(e, t = 1e4) {
  return Dr((n, r) => {
    let o = ft(e), s;
    const i = () => setTimeout(() => {
      o = ft(e), r();
    }, ft(t));
    return Sn(() => {
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
function qa(e, t) {
  Ka() && un(e, t);
}
function Ga(e, t, n = {}) {
  const {
    immediate: r = !0,
    immediateCallback: o = !1
  } = n, s = bo(!1);
  let i = null;
  function a() {
    i && (clearTimeout(i), i = null);
  }
  function l() {
    s.value = !1, a();
  }
  function c(...d) {
    o && e(), a(), s.value = !0, i = setTimeout(() => {
      s.value = !1, i = null, e(...d);
    }, ft(t));
  }
  return r && (s.value = !0, Oe && c()), Sn(l), {
    isPending: Br(s),
    start: c,
    stop: l
  };
}
function Ya(e, t) {
  const n = O(e);
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
function Xa(e, t) {
  var g;
  const n = O({}), r = O("none"), o = O(e), s = e.value ? "mounted" : "unmounted";
  let i;
  const a = ((g = t.value) == null ? void 0 : g.ownerDocument.defaultView) ?? Kr, { state: l, dispatch: c } = Ya(s, {
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
  }), d = (b) => {
    var w;
    if (Oe) {
      const y = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      (w = t.value) == null || w.dispatchEvent(y);
    }
  };
  Y(
    e,
    async (b, w) => {
      var x;
      const y = w !== b;
      if (await ae(), y) {
        const C = r.value, E = ct(t.value);
        b ? (c("MOUNT"), d("enter"), E === "none" && d("after-enter")) : E === "none" || ((x = n.value) == null ? void 0 : x.display) === "none" ? (c("UNMOUNT"), d("leave"), d("after-leave")) : w && C !== E ? (c("ANIMATION_OUT"), d("leave")) : (c("UNMOUNT"), d("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const u = (b) => {
    const w = ct(t.value), y = w.includes(
      b.animationName
    ), x = l.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && y && (d(`after-${x}`), c("ANIMATION_END"), !o.value)) {
      const C = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = a == null ? void 0 : a.setTimeout(() => {
        var E;
        ((E = t.value) == null ? void 0 : E.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = C);
      });
    }
    b.target === t.value && w === "none" && c("ANIMATION_END");
  }, f = (b) => {
    b.target === t.value && (r.value = ct(t.value));
  }, m = Y(
    t,
    (b, w) => {
      b ? (n.value = getComputedStyle(b), b.addEventListener("animationstart", f), b.addEventListener("animationcancel", u), b.addEventListener("animationend", u)) : (c("ANIMATION_END"), i !== void 0 && (a == null || a.clearTimeout(i)), w == null || w.removeEventListener("animationstart", f), w == null || w.removeEventListener("animationcancel", u), w == null || w.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), h = Y(l, () => {
    const b = ct(t.value);
    r.value = l.value === "mounted" ? b : "none";
  });
  return Ao(() => {
    m(), h();
  }), {
    isPresent: $(
      () => ["mounted", "unmountSuspended"].includes(l.value)
    )
  };
}
function ct(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const kt = T({
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
    var c;
    const { present: r, forceMount: o } = Ue(e), s = O(), { isPresent: i } = Xa(r, s);
    n({ present: i });
    let a = t.default({ present: i.value });
    a = _n(a || []);
    const l = ot();
    if (a && (a == null ? void 0 : a.length) > 1) {
      const d = (c = l == null ? void 0 : l.parent) != null && c.type.name ? `<${l.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${d}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((u) => `  - ${u}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => o.value || r.value || i.value ? xe(t.default({ present: i.value })[0], {
      ref: (d) => {
        const u = De(d);
        return typeof (u == null ? void 0 : u.hasAttribute) > "u" || (u != null && u.hasAttribute("data-reka-popper-content-wrapper") ? s.value = u.firstElementChild : s.value = u), u;
      }
    }) : null;
  }
});
function It(e) {
  const t = ot(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    r[Mr(Oo(o))] = (...s) => e(o, ...s);
  }), r;
}
function Dt(e) {
  const t = ot(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, s) => {
    const i = (t == null ? void 0 : t.type.props[s]).default;
    return i !== void 0 && (o[s] = i), o;
  }, {}), r = Lr(e);
  return $(() => {
    const o = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((i) => {
      o[Oo(i)] = s[i];
    }), Object.keys({ ...n, ...o }).reduce((i, a) => (r.value[a] !== void 0 && (i[a] = r.value[a]), i), {});
  });
}
function ir(e, t) {
  const n = Dt(e), r = t ? It(t) : {};
  return $(() => ({
    ...n.value,
    ...r
  }));
}
const [pe, Qa] = fe("DialogRoot"), Ja = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = gt(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = O(), i = O(), { modal: a } = Ue(n);
    return Qa({
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
    }), (l, c) => P(l.$slots, "default", { open: p(o) });
  }
}), Za = /* @__PURE__ */ T({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = pe(), { forwardRef: r, currentElement: o } = F();
    return n.contentId || (n.contentId = ze(void 0, "reka-dialog-content")), ee(() => {
      n.triggerElement.value = o.value;
    }), (s, i) => (S(), k(p(W), R(t, {
      ref: p(r),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": p(n).open.value || !1,
      "aria-controls": p(n).open.value ? p(n).contentId : void 0,
      "data-state": p(n).open.value ? "open" : "closed",
      onClick: p(n).onOpenToggle
    }), {
      default: _(() => [
        P(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), An = /* @__PURE__ */ T({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = qr();
    return (n, r) => p(t) || n.forceMount ? (S(), k(Po, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      P(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : K("", !0);
  }
});
function On(e, t, n) {
  const r = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
const el = "dismissableLayer.pointerDownOutside", tl = "dismissableLayer.focusOutside";
function ar(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && r === n || o.indexOf(r) < o.indexOf(n));
}
function nl(e, t) {
  var s;
  const n = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = O(!1), o = O(() => {
  });
  return q((i) => {
    if (!Oe)
      return;
    const a = async (c) => {
      const d = c.target;
      if (t != null && t.value) {
        if (ar(t.value, d)) {
          r.value = !1;
          return;
        }
        if (c.target && !r.value) {
          let u = function() {
            On(
              el,
              e,
              f
            );
          };
          const f = { originalEvent: c };
          c.pointerType === "touch" ? (n.removeEventListener("click", o.value), o.value = u, n.addEventListener("click", o.value, {
            once: !0
          })) : u();
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
function ol(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = O(!1);
  return q((s) => {
    if (!Oe)
      return;
    const i = async (a) => {
      t != null && t.value && (await ae(), !(!t.value || ar(t.value, a.target)) && a.target && !r.value && On(
        tl,
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
const he = To({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Pn = /* @__PURE__ */ T({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: s } = F(), i = $(
      () => {
        var h;
        return ((h = s.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), a = $(() => he.layersRoot), l = $(() => s.value ? Array.from(a.value).indexOf(s.value) : -1), c = $(() => he.layersWithOutsidePointerEventsDisabled.size > 0), d = $(() => {
      const h = Array.from(a.value), [v] = [...he.layersWithOutsidePointerEventsDisabled].slice(-1), g = h.indexOf(v);
      return l.value >= g;
    }), u = nl(async (h) => {
      const v = [...he.branches].some(
        (g) => g == null ? void 0 : g.contains(h.target)
      );
      !d.value || v || (r("pointerDownOutside", h), r("interactOutside", h), await ae(), h.defaultPrevented || r("dismiss"));
    }, s), f = ol((h) => {
      [...he.branches].some(
        (g) => g == null ? void 0 : g.contains(h.target)
      ) || (r("focusOutside", h), r("interactOutside", h), h.defaultPrevented || r("dismiss"));
    }, s);
    Gr("Escape", (h) => {
      l.value === a.value.size - 1 && (r("escapeKeyDown", h), h.defaultPrevented || r("dismiss"));
    });
    let m;
    return q((h) => {
      s.value && (n.disableOutsidePointerEvents && (he.layersWithOutsidePointerEventsDisabled.size === 0 && (m = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), he.layersWithOutsidePointerEventsDisabled.add(s.value)), a.value.add(s.value), h(() => {
        n.disableOutsidePointerEvents && he.layersWithOutsidePointerEventsDisabled.size === 1 && (i.value.body.style.pointerEvents = m);
      }));
    }), q((h) => {
      h(() => {
        s.value && (a.value.delete(s.value), he.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (h, v) => (S(), k(p(W), {
      ref: p(o),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: Et({
        pointerEvents: c.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: p(f).onFocusCapture,
      onBlurCapture: p(f).onBlurCapture,
      onPointerdownCapture: p(u).onPointerDownCapture
    }, {
      default: _(() => [
        P(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function Z() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function rl(e) {
  return e ? "open" : "closed";
}
function fo(e) {
  const t = Z();
  for (const n of e)
    if (n === t || (n.focus(), Z() !== t))
      return;
}
const sl = "DialogTitle", il = "DialogContent";
function al({
  titleName: e = sl,
  contentName: t = il,
  componentLink: n = "dialog.html#title",
  titleId: r,
  descriptionId: o,
  contentElement: s
}) {
  const i = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, a = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ee(() => {
    var d;
    document.getElementById(r) || console.warn(i);
    const c = (d = s.value) == null ? void 0 : d.getAttribute("aria-describedby");
    o && c && (document.getElementById(o) || console.warn(a));
  });
}
const Ht = "focusScope.autoFocusOnMount", jt = "focusScope.autoFocusOnUnmount", po = { bubbles: !1, cancelable: !0 };
function ll(e, { select: t = !1 } = {}) {
  const n = Z();
  for (const r of e)
    if (we(r, { select: t }), Z() !== n)
      return !0;
}
function cl(e) {
  const t = lr(e), n = mo(t, e), r = mo(t.reverse(), e);
  return [n, r];
}
function lr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function mo(e, t) {
  for (const n of e)
    if (!ul(n, { upTo: t }))
      return n;
}
function ul(e, { upTo: t }) {
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
function dl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function we(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Z();
    e.focus({ preventScroll: !0 }), e !== n && dl(e) && t && e.select();
  }
}
const fl = Yr(() => O([]));
function pl() {
  const e = fl();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = ho(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = ho(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function ho(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ml(e) {
  return e.filter((t) => t.tagName !== "A");
}
const cr = /* @__PURE__ */ T({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { currentRef: o, currentElement: s } = F(), i = O(null), a = pl(), l = To({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    q((d) => {
      if (!Oe)
        return;
      const u = s.value;
      if (!n.trapped)
        return;
      function f(g) {
        if (l.paused || !u)
          return;
        const b = g.target;
        u.contains(b) ? i.value = b : we(i.value, { select: !0 });
      }
      function m(g) {
        if (l.paused || !u)
          return;
        const b = g.relatedTarget;
        b !== null && (u.contains(b) || we(i.value, { select: !0 }));
      }
      function h(g) {
        u.contains(i.value) || we(u);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const v = new MutationObserver(h);
      u && v.observe(u, { childList: !0, subtree: !0 }), d(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), v.disconnect();
      });
    }), q(async (d) => {
      const u = s.value;
      if (await ae(), !u)
        return;
      a.add(l);
      const f = Z();
      if (!u.contains(f)) {
        const h = new CustomEvent(Ht, po);
        u.addEventListener(Ht, (v) => r("mountAutoFocus", v)), u.dispatchEvent(h), h.defaultPrevented || (ll(ml(lr(u)), {
          select: !0
        }), Z() === f && we(u));
      }
      d(() => {
        u.removeEventListener(Ht, (g) => r("mountAutoFocus", g));
        const h = new CustomEvent(jt, po), v = (g) => {
          r("unmountAutoFocus", g);
        };
        u.addEventListener(jt, v), u.dispatchEvent(h), setTimeout(() => {
          h.defaultPrevented || we(f ?? document.body, { select: !0 }), u.removeEventListener(jt, v), a.remove(l);
        }, 0);
      });
    });
    function c(d) {
      if (!n.loop && !n.trapped || l.paused)
        return;
      const u = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, f = Z();
      if (u && f) {
        const m = d.currentTarget, [h, v] = cl(m);
        h && v ? !d.shiftKey && f === v ? (d.preventDefault(), n.loop && we(h, { select: !0 })) : d.shiftKey && f === h && (d.preventDefault(), n.loop && we(v, { select: !0 })) : f === m && d.preventDefault();
      }
    }
    return (d, u) => (S(), k(p(W), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": d.asChild,
      as: d.as,
      onKeydown: c
    }, {
      default: _(() => [
        P(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), ur = /* @__PURE__ */ T({
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
    const n = e, r = t, o = pe(), { forwardRef: s, currentElement: i } = F();
    return o.titleId || (o.titleId = ze(void 0, "reka-dialog-title")), o.descriptionId || (o.descriptionId = ze(void 0, "reka-dialog-description")), ee(() => {
      o.contentElement = i, Z() !== document.body && (o.triggerElement.value = Z());
    }), process.env.NODE_ENV !== "production" && al({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: i
    }), (a, l) => (S(), k(p(cr), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: l[5] || (l[5] = (c) => r("openAutoFocus", c)),
      onUnmountAutoFocus: l[6] || (l[6] = (c) => r("closeAutoFocus", c))
    }, {
      default: _(() => [
        D(p(Pn), R({
          id: p(o).contentId,
          ref: p(s),
          as: a.as,
          "as-child": a.asChild,
          "disable-outside-pointer-events": a.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": p(o).descriptionId,
          "aria-labelledby": p(o).titleId,
          "data-state": p(rl)(p(o).open.value)
        }, a.$attrs, {
          onDismiss: l[0] || (l[0] = (c) => p(o).onOpenChange(!1)),
          onEscapeKeyDown: l[1] || (l[1] = (c) => r("escapeKeyDown", c)),
          onFocusOutside: l[2] || (l[2] = (c) => r("focusOutside", c)),
          onInteractOutside: l[3] || (l[3] = (c) => r("interactOutside", c)),
          onPointerDownOutside: l[4] || (l[4] = (c) => r("pointerDownOutside", c))
        }), {
          default: _(() => [
            P(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var hl = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Re = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), dt = {}, zt = 0, dr = function(e) {
  return e && (e.host || dr(e.parentNode));
}, gl = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = dr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, vl = function(e, t, n, r) {
  var o = gl(t, Array.isArray(e) ? e : [e]);
  dt[n] || (dt[n] = /* @__PURE__ */ new WeakMap());
  var s = dt[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(u) {
    !u || a.has(u) || (a.add(u), c(u.parentNode));
  };
  o.forEach(c);
  var d = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (a.has(f))
        d(f);
      else
        try {
          var m = f.getAttribute(r), h = m !== null && m !== "false", v = (Re.get(f) || 0) + 1, g = (s.get(f) || 0) + 1;
          Re.set(f, v), s.set(f, g), i.push(f), v === 1 && h && ut.set(f, !0), g === 1 && f.setAttribute(n, "true"), h || f.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", f, b);
        }
    });
  };
  return d(t), a.clear(), zt++, function() {
    i.forEach(function(u) {
      var f = Re.get(u) - 1, m = s.get(u) - 1;
      Re.set(u, f), s.set(u, m), f || (ut.has(u) || u.removeAttribute(r), ut.delete(u)), m || u.removeAttribute(n);
    }), zt--, zt || (Re = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), dt = {});
  };
}, yl = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = hl(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), vl(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function fr(e) {
  let t;
  Y(() => De(e), (n) => {
    n ? t = yl(n) : t && t();
  }), Ao(() => {
    t && t();
  });
}
const wl = /* @__PURE__ */ T({
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
    const n = e, r = t, o = pe(), s = It(r), { forwardRef: i, currentElement: a } = F();
    return fr(a), (l, c) => (S(), k(ur, R({ ...n, ...p(s) }, {
      ref: p(i),
      "trap-focus": p(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (d) => {
        var u;
        d.defaultPrevented || (d.preventDefault(), (u = p(o).triggerElement.value) == null || u.focus());
      }),
      onPointerDownOutside: c[1] || (c[1] = (d) => {
        const u = d.detail.originalEvent, f = u.button === 0 && u.ctrlKey === !0;
        (u.button === 2 || f) && d.preventDefault();
      }),
      onFocusOutside: c[2] || (c[2] = (d) => {
        d.preventDefault();
      })
    }), {
      default: _(() => [
        P(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), bl = /* @__PURE__ */ T({
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
    const n = e, o = It(t);
    F();
    const s = pe(), i = O(!1), a = O(!1);
    return (l, c) => (S(), k(ur, R({ ...n, ...p(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (d) => {
        var u;
        d.defaultPrevented || (i.value || (u = p(s).triggerElement.value) == null || u.focus(), d.preventDefault()), i.value = !1, a.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = (d) => {
        var m;
        d.defaultPrevented || (i.value = !0, d.detail.originalEvent.type === "pointerdown" && (a.value = !0));
        const u = d.target;
        ((m = p(s).triggerElement.value) == null ? void 0 : m.contains(u)) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && a.value && d.preventDefault();
      })
    }), {
      default: _(() => [
        P(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xl = /* @__PURE__ */ T({
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
    const n = e, r = t, o = pe(), s = It(r), { forwardRef: i } = F();
    return (a, l) => (S(), k(p(kt), {
      present: a.forceMount || p(o).open.value
    }, {
      default: _(() => [
        p(o).modal.value ? (S(), k(wl, R({
          key: 0,
          ref: p(i)
        }, { ...n, ...p(s), ...a.$attrs }), {
          default: _(() => [
            P(a.$slots, "default")
          ]),
          _: 3
        }, 16)) : (S(), k(bl, R({
          key: 1,
          ref: p(i)
        }, { ...n, ...p(s), ...a.$attrs }), {
          default: _(() => [
            P(a.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function Ut(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function rn(e, t, n = ".", r) {
  if (!Ut(t))
    return rn(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const i = e[s];
    i != null && (r && r(o, s, i, n) || (Array.isArray(i) && Array.isArray(o[s]) ? o[s] = [...i, ...o[s]] : Ut(i) && Ut(o[s]) ? o[s] = rn(
      i,
      o[s],
      (n ? `${n}.` : "") + s.toString(),
      r
    ) : o[s] = i));
  }
  return o;
}
function Cl(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => rn(n, r, "", e), {})
  );
}
const El = Cl(), _l = Xr(() => {
  const e = O(/* @__PURE__ */ new Map()), t = O(), n = $(() => {
    for (const i of e.value.values())
      if (i)
        return !0;
    return !1;
  }), r = $t({
    scrollBody: O(!0)
  });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", uo && (o == null || o()), t.value = void 0;
  };
  return Y(n, (i, a) => {
    var u;
    if (!Oe)
      return;
    if (!i) {
      a && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const l = window.innerWidth - document.documentElement.clientWidth, c = { padding: l, margin: 0 }, d = (u = r.scrollBody) != null && u.value ? typeof r.scrollBody.value == "object" ? El({
      padding: r.scrollBody.value.padding === !0 ? l : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? l : r.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    l > 0 && (document.body.style.paddingRight = typeof d.padding == "number" ? `${d.padding}px` : String(d.padding), document.body.style.marginRight = typeof d.margin == "number" ? `${d.margin}px` : String(d.margin), document.body.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), uo && (o = qt(
      document,
      "touchmove",
      (f) => Sl(f),
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function pr(e) {
  const t = Math.random().toString(36).substring(2, 7), n = _l();
  n.value.set(t, e ?? !1);
  const r = $({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return qa(() => {
    n.value.delete(t);
  }), r;
}
function mr(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : mr(n);
  }
}
function Sl(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && mr(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Al = /* @__PURE__ */ T({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = pe();
    return pr(!0), F(), (n, r) => (S(), k(p(W), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": p(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: _(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Ol = /* @__PURE__ */ T({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = pe(), { forwardRef: n } = F();
    return (r, o) => {
      var s;
      return (s = p(t)) != null && s.modal.value ? (S(), k(p(kt), {
        key: 0,
        present: r.forceMount || p(t).open.value
      }, {
        default: _(() => [
          D(Al, R(r.$attrs, {
            ref: p(n),
            as: r.as,
            "as-child": r.asChild
          }), {
            default: _(() => [
              P(r.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : K("", !0);
    };
  }
}), Pl = /* @__PURE__ */ T({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const n = pe();
    return (r, o) => (S(), k(p(W), R(t, {
      type: r.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (s) => p(n).onOpenChange(!1))
    }), {
      default: _(() => [
        P(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Tl = /* @__PURE__ */ T({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = pe();
    return F(), (r, o) => (S(), k(p(W), R(t, {
      id: p(n).titleId
    }), {
      default: _(() => [
        P(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), $l = /* @__PURE__ */ T({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    F();
    const n = pe();
    return (r, o) => (S(), k(p(W), R(t, {
      id: p(n).descriptionId
    }), {
      default: _(() => [
        P(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function go() {
  const e = O(), t = $(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : De(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const vo = "data-reka-collection-item";
function Ge(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const d = O(/* @__PURE__ */ new Map());
    o = {
      collectionRef: O(),
      itemMap: d
    }, So(r, o);
  } else
    o = _o(r);
  const s = (d = !1) => {
    const u = o.collectionRef.value;
    if (!u)
      return [];
    const f = Array.from(u.querySelectorAll(`[${vo}]`)), h = Array.from(o.itemMap.value.values()).sort(
      (v, g) => f.indexOf(v.ref) - f.indexOf(g.ref)
    );
    return d ? h : h.filter((v) => v.ref.dataset.disabled !== "");
  }, i = T({
    name: "CollectionSlot",
    setup(d, { slots: u }) {
      const { primitiveElement: f, currentElement: m } = go();
      return Y(m, () => {
        o.collectionRef.value = m.value;
      }), () => xe(on, { ref: f }, u);
    }
  }), a = T({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(d, { slots: u, attrs: f }) {
      const { primitiveElement: m, currentElement: h } = go();
      return q((v) => {
        if (h.value) {
          const g = Rr(h.value);
          o.itemMap.value.set(g, { ref: h.value, value: d.value }), v(() => o.itemMap.value.delete(g));
        }
      }), () => xe(on, { ...f, [vo]: "", ref: m }, u);
    }
  }), l = $(() => Array.from(o.itemMap.value.values())), c = $(() => o.itemMap.value.size);
  return { getItems: s, reactiveItems: l, itemMapSize: c, CollectionSlot: i, CollectionItem: a };
}
function kl(e) {
  return $(() => {
    var t;
    return Qr(e) ? !!((t = De(e)) != null && t.closest("form")) : !0;
  });
}
const [hr, Il] = fe("PopperRoot"), gr = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = O();
    return Il({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => P(n.$slots, "default");
  }
});
function vr(e) {
  const t = sr("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, s) => {
      t.value = t.value + o;
      {
        const i = Z(), a = s.map((f) => {
          var m, h;
          return {
            ...f,
            textValue: ((m = f.value) == null ? void 0 : m.textValue) ?? ((h = f.ref.textContent) == null ? void 0 : h.trim()) ?? ""
          };
        }), l = a.find((f) => f.ref === i), c = a.map((f) => f.textValue), d = Bl(c, t.value, l == null ? void 0 : l.textValue), u = a.find((f) => f.textValue === d);
        return u && u.ref.focus(), u == null ? void 0 : u.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Dl(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Bl(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = Dl(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const yr = /* @__PURE__ */ T({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = F(), o = hr();
    return $o(() => {
      o.onAnchorChange(t.reference ?? r.value);
    }), (s, i) => (S(), k(p(W), {
      ref: p(n),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: _(() => [
        P(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Ml(e) {
  return e !== null;
}
function Ll(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var g, b, w;
      const { placement: n, rects: r, middlewareData: o } = t, i = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, d] = sn(n), u = { start: "0%", center: "50%", end: "100%" }[d], f = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + a / 2, m = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
      let h = "", v = "";
      return c === "bottom" ? (h = i ? u : `${f}px`, v = `${-l}px`) : c === "top" ? (h = i ? u : `${f}px`, v = `${r.floating.height + l}px`) : c === "right" ? (h = `${-l}px`, v = i ? u : `${m}px`) : c === "left" && (h = `${r.floating.width + l}px`, v = i ? u : `${m}px`), { data: { x: h, y: v } };
    }
  };
}
function sn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function Rl(e) {
  const t = O(), n = $(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = $(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return ee(() => {
    const o = De(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const s = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const a = i[0];
        let l, c;
        if ("borderBoxSize" in a) {
          const d = a.borderBoxSize, u = Array.isArray(d) ? d[0] : d;
          l = u.inlineSize, c = u.blockSize;
        } else
          l = o.offsetWidth, c = o.offsetHeight;
        t.value = { width: l, height: c };
      });
      return s.observe(o, { box: "border-box" }), () => s.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: r
  };
}
const Fl = {
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
}, [Nl, Vl] = fe("PopperContent"), wr = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Ae({
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
    ...Fl
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = hr(), { forwardRef: s, currentElement: i } = F(), a = O(), l = O(), { width: c, height: d } = Rl(l), u = $(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = $(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), m = $(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), h = $(() => ({
      padding: f.value,
      boundary: m.value.filter(Ml),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), v = Jr(() => [
      Ta({
        mainAxis: n.sideOffset + d.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && ro({
        ...h.value
      }),
      n.avoidCollisions && $a({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Ba() : void 0,
        ...h.value
      }),
      !n.prioritizePosition && n.avoidCollisions && ro({
        ...h.value
      }),
      ka({
        ...h.value,
        apply: ({ elements: L, rects: z, availableWidth: U, availableHeight: V }) => {
          const { width: G, height: X } = z.reference, j = L.floating.style;
          j.setProperty(
            "--reka-popper-available-width",
            `${U}px`
          ), j.setProperty(
            "--reka-popper-available-height",
            `${V}px`
          ), j.setProperty(
            "--reka-popper-anchor-width",
            `${G}px`
          ), j.setProperty(
            "--reka-popper-anchor-height",
            `${X}px`
          );
        }
      }),
      l.value && Ra({ element: l.value, padding: n.arrowPadding }),
      Ll({
        arrowWidth: c.value,
        arrowHeight: d.value
      }),
      n.hideWhenDetached && Ia({ strategy: "referenceHidden", ...h.value })
    ]), g = $(() => n.reference ?? o.anchor.value), { floatingStyles: b, placement: w, isPositioned: y, middlewareData: x } = Fa(
      g,
      a,
      {
        strategy: n.positionStrategy,
        placement: u,
        whileElementsMounted: (...L) => Pa(...L, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: v
      }
    ), C = $(
      () => sn(w.value)[0]
    ), E = $(
      () => sn(w.value)[1]
    );
    $o(() => {
      y.value && r("placed");
    });
    const A = $(
      () => {
        var L;
        return ((L = x.value.arrow) == null ? void 0 : L.centerOffset) !== 0;
      }
    ), I = O("");
    q(() => {
      i.value && (I.value = window.getComputedStyle(i.value).zIndex);
    });
    const B = $(() => {
      var L;
      return ((L = x.value.arrow) == null ? void 0 : L.x) ?? 0;
    }), M = $(() => {
      var L;
      return ((L = x.value.arrow) == null ? void 0 : L.y) ?? 0;
    });
    return Vl({
      placedSide: C,
      onArrowChange: (L) => l.value = L,
      arrowX: B,
      arrowY: M,
      shouldHideArrow: A
    }), (L, z) => {
      var U, V, G;
      return S(), H("div", {
        ref_key: "floatingRef",
        ref: a,
        "data-reka-popper-content-wrapper": "",
        style: Et({
          ...p(b),
          transform: p(y) ? p(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: I.value,
          "--reka-popper-transform-origin": [
            (U = p(x).transformOrigin) == null ? void 0 : U.x,
            (V = p(x).transformOrigin) == null ? void 0 : V.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((G = p(x).hide) == null ? void 0 : G.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        D(p(W), R({ ref: p(s) }, L.$attrs, {
          "as-child": n.asChild,
          as: L.as,
          "data-side": C.value,
          "data-align": E.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: p(y) ? void 0 : "none"
          }
        }), {
          default: _(() => [
            P(L.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
function Wl(e) {
  const t = $t({
    nonce: O()
  });
  return $(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const Hl = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, jl = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, zl = /* @__PURE__ */ T({
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
    return F(), (n, r) => (S(), k(p(W), R(t, {
      width: n.width,
      height: n.height,
      viewBox: n.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: n.asChild ? void 0 : "none"
    }), {
      default: _(() => [
        P(n.$slots, "default", {}, () => [
          n.rounded ? (S(), H("path", jl)) : (S(), H("path", Hl))
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
}), Ul = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, br = /* @__PURE__ */ T({
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
    const { forwardRef: t } = F(), n = Nl(), r = $(() => Ul[n.placedSide.value]);
    return (o, s) => {
      var i, a, l, c;
      return S(), H("span", {
        ref: (d) => {
          p(n).onArrowChange(d);
        },
        style: Et({
          position: "absolute",
          left: (i = p(n).arrowX) != null && i.value ? `${(a = p(n).arrowX) == null ? void 0 : a.value}px` : void 0,
          top: (l = p(n).arrowY) != null && l.value ? `${(c = p(n).arrowY) == null ? void 0 : c.value}px` : void 0,
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
        D(zl, R(o.$attrs, {
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
            P(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "rounded", "width", "height"])
      ], 4);
    };
  }
});
let Kt = 0;
function Kl() {
  q((e) => {
    if (!Oe)
      return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? yo()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? yo()
    ), Kt++, e(() => {
      Kt === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), Kt--;
    });
  });
}
function yo() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
const ql = /* @__PURE__ */ T({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (S(), k(p(An), Ke(rt(t)), {
      default: _(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Gl(e, t) {
  const n = sr(!1, 300), r = O(null), o = za();
  function s() {
    r.value = null, n.value = !1;
  }
  function i(a, l) {
    const c = a.currentTarget, d = { x: a.clientX, y: a.clientY }, u = Yl(d, c.getBoundingClientRect()), f = Xl(d, u), m = Ql(l.getBoundingClientRect()), h = Zl([...f, ...m]);
    r.value = h, n.value = !0;
  }
  return q((a) => {
    if (e.value && t.value) {
      const l = (d) => i(d, t.value), c = (d) => i(d, e.value);
      e.value.addEventListener("pointerleave", l), t.value.addEventListener("pointerleave", c), a(() => {
        var d, u;
        (d = e.value) == null || d.removeEventListener("pointerleave", l), (u = t.value) == null || u.removeEventListener("pointerleave", c);
      });
    }
  }), q((a) => {
    var l;
    if (r.value) {
      const c = (d) => {
        var g, b;
        if (!r.value)
          return;
        const u = d.target, f = { x: d.clientX, y: d.clientY }, m = ((g = e.value) == null ? void 0 : g.contains(u)) || ((b = t.value) == null ? void 0 : b.contains(u)), h = !Jl(f, r.value), v = !!u.closest("[data-grace-area-trigger]");
        m ? s() : (h || v) && (s(), o.trigger());
      };
      (l = e.value) == null || l.ownerDocument.addEventListener("pointermove", c), a(() => {
        var d;
        return (d = e.value) == null ? void 0 : d.ownerDocument.removeEventListener("pointermove", c);
      });
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: o.on
  };
}
function Yl(e, t) {
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
function Xl(e, t, n = 5) {
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
function Ql(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function Jl(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s].x, l = t[s].y, c = t[i].x, d = t[i].y;
    l > r != d > r && n < (c - a) * (r - l) / (d - l) + a && (o = !o);
  }
  return o;
}
function Zl(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), ec(t);
}
function ec(e) {
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
function wo(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
const tc = /* @__PURE__ */ T({
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
    const t = e, n = O();
    return Y(() => t.value, (r, o) => {
      var l;
      const s = window.HTMLSelectElement.prototype, a = Object.getOwnPropertyDescriptor(
        s,
        "value"
      ).set;
      if (r !== o && a) {
        const c = new Event("change", { bubbles: !0 });
        a.call(n.value, r), (l = n.value) == null || l.dispatchEvent(c);
      }
    }), (r, o) => (S(), k(p(nr), { "as-child": "" }, {
      default: _(() => [
        ne("select", R({
          ref_key: "selectElement",
          ref: n
        }, t), [
          P(r.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), nc = [" ", "Enter", "ArrowUp", "ArrowDown"], oc = [" ", "Enter"], te = 10;
function an(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((r) => ln(r, t, n)) : ln(e, t, n);
}
function ln(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : Wa(e, t);
}
const rc = {
  key: 0,
  value: ""
}, [Pe, xr] = fe("SelectRoot"), sc = /* @__PURE__ */ T({
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
    const n = e, r = t, { required: o, disabled: s, multiple: i, dir: a } = Ue(n), l = gt(n, "modelValue", r, {
      defaultValue: n.defaultValue ?? (i.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    }), c = gt(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), d = O(), u = O(), f = O({
      x: 0,
      y: 0
    }), m = $(() => {
      var y;
      return i.value && Array.isArray(l.value) ? ((y = l.value) == null ? void 0 : y.length) === 0 : co(l.value);
    });
    Ge({ isProvider: !0 });
    const h = Ha(a), v = kl(d), g = O(/* @__PURE__ */ new Set()), b = $(() => Array.from(g.value).map((y) => y.value).join(";"));
    function w(y) {
      if (i.value) {
        const x = Array.isArray(l.value) ? [...l.value] : [], C = x.findIndex((E) => ln(E, y, n.by));
        C === -1 ? x.push(y) : x.splice(C, 1), l.value = [...x];
      } else
        l.value = y;
    }
    return xr({
      triggerElement: d,
      onTriggerChange: (y) => {
        d.value = y;
      },
      valueElement: u,
      onValueElementChange: (y) => {
        u.value = y;
      },
      contentId: "",
      modelValue: l,
      // @ts-expect-error Missing infer for AcceptableValue
      onValueChange: w,
      by: n.by,
      open: c,
      multiple: i,
      required: o,
      onOpenChange: (y) => {
        c.value = y;
      },
      dir: h,
      triggerPointerDownPosRef: f,
      disabled: s,
      isEmptyModelValue: m,
      optionsSet: g,
      onOptionAdd: (y) => g.value.add(y),
      onOptionRemove: (y) => g.value.delete(y)
    }), (y, x) => (S(), k(p(gr), null, {
      default: _(() => [
        P(y.$slots, "default", {
          modelValue: p(l),
          open: p(c)
        }),
        p(v) ? (S(), k(tc, {
          key: b.value,
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
            p(co)(p(l)) ? (S(), H("option", rc)) : K("", !0),
            (S(!0), H(Ct, null, ko(Array.from(g.value), (C) => (S(), H("option", R({
              key: C.value ?? "",
              ref_for: !0
            }, C), null, 16))), 128))
          ]),
          _: 1
        }, 8, ["multiple", "required", "name", "autocomplete", "disabled", "value"])) : K("", !0)
      ]),
      _: 3
    }));
  }
}), ic = /* @__PURE__ */ T({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Pe(), { forwardRef: r, currentElement: o } = F(), s = $(() => {
      var f;
      return ((f = n.disabled) == null ? void 0 : f.value) || t.disabled;
    });
    n.contentId || (n.contentId = ze(void 0, "reka-select-content")), ee(() => {
      n.onTriggerChange(o.value);
    });
    const { getItems: i } = Ge(), { search: a, handleTypeaheadSearch: l, resetTypeahead: c } = vr();
    function d() {
      s.value || (n.onOpenChange(!0), c());
    }
    function u(f) {
      d(), n.triggerPointerDownPosRef.value = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      };
    }
    return (f, m) => (S(), k(p(yr), {
      "as-child": "",
      reference: f.reference
    }, {
      default: _(() => {
        var h, v, g, b;
        return [
          D(p(W), {
            ref: p(r),
            role: "combobox",
            type: f.as === "button" ? "button" : void 0,
            "aria-controls": p(n).contentId,
            "aria-expanded": p(n).open.value || !1,
            "aria-required": (h = p(n).required) == null ? void 0 : h.value,
            "aria-autocomplete": "none",
            disabled: s.value,
            dir: (v = p(n)) == null ? void 0 : v.dir.value,
            "data-state": (g = p(n)) != null && g.open.value ? "open" : "closed",
            "data-disabled": s.value ? "" : void 0,
            "data-placeholder": (b = p(n).modelValue) != null && b.value ? void 0 : "",
            "as-child": f.asChild,
            as: f.as,
            onClick: m[0] || (m[0] = (w) => {
              var y;
              (y = w == null ? void 0 : w.currentTarget) == null || y.focus();
            }),
            onPointerdown: m[1] || (m[1] = (w) => {
              if (w.pointerType === "touch")
                return w.preventDefault();
              const y = w.target;
              y.hasPointerCapture(w.pointerId) && y.releasePointerCapture(w.pointerId), w.button === 0 && w.ctrlKey === !1 && (u(w), w.preventDefault());
            }),
            onPointerup: m[2] || (m[2] = Ne(
              (w) => {
                w.pointerType === "touch" && u(w);
              },
              ["prevent"]
            )),
            onKeydown: m[3] || (m[3] = (w) => {
              const y = p(a) !== "";
              !(w.ctrlKey || w.altKey || w.metaKey) && w.key.length === 1 && y && w.key === " " || (p(l)(w.key, p(i)()), p(nc).includes(w.key) && (d(), w.preventDefault()));
            })
          }, {
            default: _(() => [
              P(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }, 8, ["reference"]));
  }
}), ac = /* @__PURE__ */ T({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (S(), k(p(An), Ke(rt(t)), {
      default: _(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Tn, lc] = fe("SelectItemAlignedPosition"), cc = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, { getItems: o } = Ge(), s = Pe(), i = Te(), a = O(!1), l = O(!0), c = O(), { forwardRef: d, currentElement: u } = F(), { viewport: f, selectedItem: m, selectedItemText: h, focusSelectedItem: v } = i;
    function g() {
      if (s.triggerElement.value && s.valueElement.value && c.value && u.value && (f != null && f.value) && (m != null && m.value) && (h != null && h.value)) {
        const y = s.triggerElement.value.getBoundingClientRect(), x = u.value.getBoundingClientRect(), C = s.valueElement.value.getBoundingClientRect(), E = h.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const me = E.left - x.left, ye = C.left - me, $e = y.left - ye, ke = y.width + $e, Lt = Math.max(ke, x.width), Rt = window.innerWidth - te, Ft = wo(ye, te, Math.max(te, Rt - Lt));
          c.value.style.minWidth = `${ke}px`, c.value.style.left = `${Ft}px`;
        } else {
          const me = x.right - E.right, ye = window.innerWidth - C.right - me, $e = window.innerWidth - y.right - ye, ke = y.width + $e, Lt = Math.max(ke, x.width), Rt = window.innerWidth - te, Ft = wo(
            ye,
            te,
            Math.max(te, Rt - Lt)
          );
          c.value.style.minWidth = `${ke}px`, c.value.style.right = `${Ft}px`;
        }
        const A = o().map((me) => me.ref), I = window.innerHeight - te * 2, B = f.value.scrollHeight, M = window.getComputedStyle(u.value), L = Number.parseInt(
          M.borderTopWidth,
          10
        ), z = Number.parseInt(M.paddingTop, 10), U = Number.parseInt(
          M.borderBottomWidth,
          10
        ), V = Number.parseInt(
          M.paddingBottom,
          10
        ), G = L + z + B + V + U, X = Math.min(
          m.value.offsetHeight * 5,
          G
        ), j = window.getComputedStyle(f.value), se = Number.parseInt(j.paddingTop, 10), ie = Number.parseInt(
          j.paddingBottom,
          10
        ), Me = y.top + y.height / 2 - te, Pr = I - Me, Mt = m.value.offsetHeight / 2, Tr = m.value.offsetTop + Mt, it = L + z + Tr, $r = G - it;
        if (it <= Me) {
          const me = m.value === A[A.length - 1];
          c.value.style.bottom = "0px";
          const ye = u.value.clientHeight - f.value.offsetTop - f.value.offsetHeight, $e = Math.max(
            Pr,
            Mt + (me ? ie : 0) + ye + U
          ), ke = it + $e;
          c.value.style.height = `${ke}px`;
        } else {
          const me = m.value === A[0];
          c.value.style.top = "0px";
          const $e = Math.max(
            Me,
            L + f.value.offsetTop + (me ? se : 0) + Mt
          ) + $r;
          c.value.style.height = `${$e}px`, f.value.scrollTop = it - Me + f.value.offsetTop;
        }
        c.value.style.margin = `${te}px 0`, c.value.style.minHeight = `${X}px`, c.value.style.maxHeight = `${I}px`, r("placed"), requestAnimationFrame(() => a.value = !0);
      }
    }
    const b = O("");
    ee(async () => {
      await ae(), g(), u.value && (b.value = window.getComputedStyle(u.value).zIndex);
    });
    function w(y) {
      y && l.value === !0 && (g(), v == null || v(), l.value = !1);
    }
    return Zr(s.triggerElement, () => {
      g();
    }), lc({
      contentWrapper: c,
      shouldExpandOnScrollRef: a,
      onScrollButtonChange: w
    }), (y, x) => (S(), H("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Et({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: b.value
      })
    }, [
      D(p(W), R({
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
          P(y.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), uc = /* @__PURE__ */ T({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: te },
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
    const n = Dt(e);
    return (r, o) => (S(), k(p(wr), R(p(n), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-select-content-available-width": "var(--reka-popper-available-width)",
      "--reka-select-content-available-height": "var(--reka-popper-available-height)",
      "--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
    } }), {
      default: _(() => [
        P(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cr = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Te, Er] = fe("SelectContent"), dc = /* @__PURE__ */ T({
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
    Kl(), pr(n.bodyLock);
    const { CollectionSlot: s, getItems: i } = Ge(), a = O();
    fr(a);
    const { search: l, handleTypeaheadSearch: c } = vr(), d = O(), u = O(), f = O(), m = O(!1), h = O(!1);
    function v() {
      u.value && a.value && fo([u.value, a.value]);
    }
    Y(m, () => {
      v();
    });
    const { onOpenChange: g, triggerPointerDownPosRef: b } = o;
    q((C) => {
      if (!a.value)
        return;
      let E = { x: 0, y: 0 };
      const A = (B) => {
        var M, L;
        E = {
          x: Math.abs(
            Math.round(B.pageX) - (((M = b.value) == null ? void 0 : M.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(B.pageY) - (((L = b.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, I = (B) => {
        var M;
        B.pointerType !== "touch" && (E.x <= 10 && E.y <= 10 ? B.preventDefault() : (M = a.value) != null && M.contains(B.target) || g(!1), document.removeEventListener("pointermove", A), b.value = null);
      };
      b.value !== null && (document.addEventListener("pointermove", A), document.addEventListener("pointerup", I, {
        capture: !0,
        once: !0
      })), C(() => {
        document.removeEventListener("pointermove", A), document.removeEventListener("pointerup", I, {
          capture: !0
        });
      });
    });
    function w(C) {
      const E = C.ctrlKey || C.altKey || C.metaKey;
      if (C.key === "Tab" && C.preventDefault(), !E && C.key.length === 1 && c(C.key, i()), ["ArrowUp", "ArrowDown", "Home", "End"].includes(C.key)) {
        let I = [...i().map((B) => B.ref)];
        if (["ArrowUp", "End"].includes(C.key) && (I = I.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(C.key)) {
          const B = C.target, M = I.indexOf(B);
          I = I.slice(M + 1);
        }
        setTimeout(() => fo(I)), C.preventDefault();
      }
    }
    const y = $(() => n.position === "popper" ? n : {}), x = Dt(y.value);
    return Er({
      content: a,
      viewport: d,
      onViewportChange: (C) => {
        d.value = C;
      },
      itemRefCallback: (C, E, A) => {
        const I = !h.value && !A, B = an(o.modelValue.value, E, o.by);
        I && (o.isEmptyModelValue.value || B) && (h.value = !0, u.value = C);
      },
      selectedItem: u,
      selectedItemText: f,
      onItemLeave: () => {
        var C;
        (C = a.value) == null || C.focus();
      },
      itemTextRefCallback: (C, E, A) => {
        const I = !h.value && !A;
        (an(o.modelValue.value, E, o.by) || I) && (f.value = C);
      },
      focusSelectedItem: v,
      position: n.position,
      isPositioned: m,
      searchRef: l
    }), (C, E) => (S(), k(p(s), null, {
      default: _(() => [
        D(p(cr), {
          "as-child": "",
          onMountAutoFocus: E[6] || (E[6] = Ne(() => {
          }, ["prevent"])),
          onUnmountAutoFocus: E[7] || (E[7] = (A) => {
            var I;
            r("closeAutoFocus", A), !A.defaultPrevented && ((I = p(o).triggerElement.value) == null || I.focus({ preventScroll: !0 }), A.preventDefault());
          })
        }, {
          default: _(() => [
            D(p(Pn), {
              "as-child": "",
              "disable-outside-pointer-events": "",
              onFocusOutside: E[2] || (E[2] = Ne(() => {
              }, ["prevent"])),
              onDismiss: E[3] || (E[3] = (A) => p(o).onOpenChange(!1)),
              onEscapeKeyDown: E[4] || (E[4] = (A) => r("escapeKeyDown", A)),
              onPointerDownOutside: E[5] || (E[5] = (A) => r("pointerDownOutside", A))
            }, {
              default: _(() => [
                (S(), k(cn(
                  C.position === "popper" ? uc : cc
                ), R({ ...C.$attrs, ...p(x) }, {
                  id: p(o).contentId,
                  ref: (A) => {
                    a.value = p(De)(A);
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
                  onContextmenu: E[0] || (E[0] = Ne(() => {
                  }, ["prevent"])),
                  onPlaced: E[1] || (E[1] = (A) => m.value = !0),
                  onKeydown: w
                }), {
                  default: _(() => [
                    P(C.$slots, "default")
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
}), fc = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return xr(e.context), Er(Cr), (n, r) => P(n.$slots, "default");
  }
}), pc = { key: 1 }, mc = /* @__PURE__ */ T({
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
    const n = e, o = ir(n, t), s = Pe(), i = O();
    ee(() => {
      i.value = new DocumentFragment();
    });
    const a = O(), l = $(() => n.forceMount || s.open.value);
    return (c, d) => {
      var u;
      return l.value ? (S(), k(p(kt), {
        key: 0,
        ref_key: "presenceRef",
        ref: a,
        present: !0
      }, {
        default: _(() => [
          D(dc, Ke(rt({ ...p(o), ...c.$attrs })), {
            default: _(() => [
              P(c.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((u = a.value) != null && u.present) && i.value ? (S(), H("div", pc, [
        (S(), k(Po, { to: i.value }, [
          D(fc, { context: p(s) }, {
            default: _(() => [
              P(c.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : K("", !0);
    };
  }
}), hc = /* @__PURE__ */ T({
  __name: "SelectArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    rounded: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e, n = Pe(), r = Te(Cr);
    return (o, s) => p(n).open.value && p(r).position === "popper" ? (S(), k(p(br), Ke(R({ key: 0 }, t)), {
      default: _(() => [
        P(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : K("", !0);
  }
}), [_r, gc] = fe("SelectItem"), vc = /* @__PURE__ */ T({
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
    const n = e, r = t, { disabled: o } = Ue(n), s = Pe(), i = Te(), { forwardRef: a, currentElement: l } = F(), { CollectionItem: c } = Ge(), d = $(() => {
      var x;
      return an((x = s.modelValue) == null ? void 0 : x.value, n.value, s.by);
    }), u = O(!1), f = O(n.textValue ?? ""), m = ze(void 0, "reka-select-item-text"), h = "select.select";
    async function v(x) {
      if (x.defaultPrevented)
        return;
      const C = { originalEvent: x, value: n.value };
      On(h, g, C);
    }
    async function g(x) {
      await ae(), r("select", x), !x.defaultPrevented && (o.value || (s.onValueChange(n.value), s.multiple.value || s.onOpenChange(!1)));
    }
    async function b(x) {
      var C;
      await ae(), !x.defaultPrevented && (o.value ? (C = i.onItemLeave) == null || C.call(i) : x.currentTarget.focus({ preventScroll: !0 }));
    }
    async function w(x) {
      var C;
      await ae(), !x.defaultPrevented && x.currentTarget === Z() && ((C = i.onItemLeave) == null || C.call(i));
    }
    async function y(x) {
      var E;
      await ae(), !(x.defaultPrevented || ((E = i.searchRef) == null ? void 0 : E.value) !== "" && x.key === " ") && (oc.includes(x.key) && v(x), x.key === " " && x.preventDefault());
    }
    if (n.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ee(() => {
      l.value && i.itemRefCallback(
        l.value,
        n.value,
        n.disabled
      );
    }), gc({
      value: n.value,
      disabled: o,
      textId: m,
      isSelected: d,
      onItemTextChange: (x) => {
        f.value = ((f.value || (x == null ? void 0 : x.textContent)) ?? "").trim();
      }
    }), (x, C) => (S(), k(p(c), {
      value: { textValue: f.value }
    }, {
      default: _(() => [
        D(p(W), {
          ref: p(a),
          role: "option",
          "aria-labelledby": p(m),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": d.value,
          "data-state": d.value ? "checked" : "unchecked",
          "aria-disabled": p(o) || void 0,
          "data-disabled": p(o) ? "" : void 0,
          tabindex: p(o) ? void 0 : -1,
          as: x.as,
          "as-child": x.asChild,
          onFocus: C[0] || (C[0] = (E) => u.value = !0),
          onBlur: C[1] || (C[1] = (E) => u.value = !1),
          onPointerup: v,
          onPointerdown: C[2] || (C[2] = (E) => {
            E.currentTarget.focus({ preventScroll: !0 });
          }),
          onTouchend: C[3] || (C[3] = Ne(() => {
          }, ["prevent", "stop"])),
          onPointermove: b,
          onPointerleave: w,
          onKeydown: y
        }, {
          default: _(() => [
            P(x.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), yc = /* @__PURE__ */ T({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = _r();
    return (r, o) => p(n).isSelected.value ? (S(), k(p(W), R({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: _(() => [
        P(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : K("", !0);
  }
}), wc = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Pe(), r = Te(), o = _r(), { forwardRef: s, currentElement: i } = F(), a = $(() => {
      var l, c;
      return {
        value: o.value,
        disabled: o.disabled.value,
        textContent: ((l = i.value) == null ? void 0 : l.textContent) ?? ((c = o.value) == null ? void 0 : c.toString()) ?? ""
      };
    });
    return ee(() => {
      i.value && (o.onItemTextChange(i.value), r.itemTextRefCallback(
        i.value,
        o.value,
        o.disabled.value
      ), n.onOptionAdd(a.value));
    }), un(() => {
      n.onOptionRemove(a.value);
    }), (l, c) => (S(), k(p(W), R({
      id: p(o).textId,
      ref: p(s)
    }, { ...t, ...l.$attrs }), {
      default: _(() => [
        P(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), bc = /* @__PURE__ */ T({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = Ue(t), r = Wl(n), o = Te(), s = o.position === "item-aligned" ? Tn() : void 0, { forwardRef: i, currentElement: a } = F();
    ee(() => {
      o == null || o.onViewportChange(a.value);
    });
    const l = O(0);
    function c(d) {
      const u = d.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: m } = s ?? {};
      if (f != null && f.value && (m != null && m.value)) {
        const h = Math.abs(l.value - u.scrollTop);
        if (h > 0) {
          const v = window.innerHeight - te * 2, g = Number.parseFloat(
            m.value.style.minHeight
          ), b = Number.parseFloat(m.value.style.height), w = Math.max(g, b);
          if (w < v) {
            const y = w + h, x = Math.min(v, y), C = y - x;
            m.value.style.height = `${x}px`, m.value.style.bottom === "0px" && (u.scrollTop = C > 0 ? C : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      l.value = u.scrollTop;
    }
    return (d, u) => (S(), H(Ct, null, [
      D(p(W), R({
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
        onScroll: c
      }), {
        default: _(() => [
          P(d.$slots, "default")
        ]),
        _: 3
      }, 16),
      D(p(W), {
        as: "style",
        nonce: p(r)
      }, {
        default: _(() => u[0] || (u[0] = [
          Ce(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")
        ])),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Sr = /* @__PURE__ */ T({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { getItems: r } = Ge(), o = Te(), s = O(null);
    function i() {
      s.value !== null && (window.clearInterval(s.value), s.value = null);
    }
    q(() => {
      const c = r().map((d) => d.ref).find(
        (d) => d === Z()
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function a() {
      s.value === null && (s.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    function l() {
      var c;
      (c = o.onItemLeave) == null || c.call(o), s.value === null && (s.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return un(() => i()), (c, d) => {
      var u;
      return S(), k(p(W), R({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (u = c.$parent) == null ? void 0 : u.$props, {
        onPointerdown: a,
        onPointermove: l,
        onPointerleave: d[0] || (d[0] = () => {
          i();
        })
      }), {
        default: _(() => [
          P(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), xc = /* @__PURE__ */ T({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Te(), n = t.position === "item-aligned" ? Tn() : void 0, { forwardRef: r, currentElement: o } = F(), s = O(!1);
    return q((i) => {
      var a, l;
      if ((a = t.viewport) != null && a.value && ((l = t.isPositioned) != null && l.value)) {
        let c = function() {
          s.value = d.scrollTop > 0;
        };
        const d = t.viewport.value;
        c(), d.addEventListener("scroll", c), i(() => d.removeEventListener("scroll", c));
      }
    }), Y(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (i, a) => s.value ? (S(), k(Sr, {
      key: 0,
      ref: p(r),
      onAutoScroll: a[0] || (a[0] = () => {
        const { viewport: l, selectedItem: c } = p(t);
        l != null && l.value && (c != null && c.value) && (l.value.scrollTop = l.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: _(() => [
        P(i.$slots, "default")
      ]),
      _: 3
    }, 512)) : K("", !0);
  }
}), Cc = /* @__PURE__ */ T({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Te(), n = t.position === "item-aligned" ? Tn() : void 0, { forwardRef: r, currentElement: o } = F(), s = O(!1);
    return q((i) => {
      var a, l;
      if ((a = t.viewport) != null && a.value && ((l = t.isPositioned) != null && l.value)) {
        let c = function() {
          const u = d.scrollHeight - d.clientHeight;
          s.value = Math.ceil(d.scrollTop) < u;
        };
        const d = t.viewport.value;
        c(), d.addEventListener("scroll", c), i(() => d.removeEventListener("scroll", c));
      }
    }), Y(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (i, a) => s.value ? (S(), k(Sr, {
      key: 0,
      ref: p(r),
      onAutoScroll: a[0] || (a[0] = () => {
        const { viewport: l, selectedItem: c } = p(t);
        l != null && l.value && (c != null && c.value) && (l.value.scrollTop = l.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: _(() => [
        P(i.$slots, "default")
      ]),
      _: 3
    }, 512)) : K("", !0);
  }
}), Ec = /* @__PURE__ */ T({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = F(), o = Pe();
    ee(() => {
      o.valueElement = r;
    });
    const s = $(() => {
      var d;
      let a = [];
      const l = Array.from(o.optionsSet.value), c = (u) => l.find((f) => f.value === u);
      return Array.isArray(o.modelValue.value) ? a = o.modelValue.value.map((u) => {
        var f;
        return ((f = c(u)) == null ? void 0 : f.textContent) ?? "";
      }) : a = [((d = c(o.modelValue.value)) == null ? void 0 : d.textContent) ?? ""], a.filter(Boolean);
    }), i = $(() => s.value.length ? s.value.join(", ") : t.placeholder);
    return (a, l) => (S(), k(p(W), {
      ref: p(n),
      as: a.as,
      "as-child": a.asChild,
      style: { pointerEvents: "none" },
      "data-placeholder": s.value.length ? void 0 : t.placeholder
    }, {
      default: _(() => [
        P(a.$slots, "default", {
          selectedLabel: s.value,
          modelValue: p(o).modelValue.value
        }, () => [
          Ce(We(i.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-placeholder"]));
  }
}), _c = /* @__PURE__ */ T({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (S(), k(p(W), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: _(() => [
        P(t.$slots, "default", {}, () => [
          n[0] || (n[0] = Ce("▼"))
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ar = "tooltip.open", [$n, Sc] = fe("TooltipProvider"), Ac = /* @__PURE__ */ T({
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
    const t = e, { delayDuration: n, skipDelayDuration: r, disableHoverableContent: o, disableClosingTrigger: s, ignoreNonKeyboardFocus: i, disabled: a } = Ue(t);
    F();
    const l = O(!0), c = O(!1), { start: d, stop: u } = Ga(() => {
      l.value = !0;
    }, r, { immediate: !1 });
    return Sc({
      isOpenDelayed: l,
      delayDuration: n,
      onOpen() {
        u(), l.value = !1;
      },
      onClose() {
        d();
      },
      isPointerInTransitRef: c,
      disableHoverableContent: o,
      disableClosingTrigger: s,
      disabled: a,
      ignoreNonKeyboardFocus: i
    }), (f, m) => P(f.$slots, "default");
  }
}), [Bt, Oc] = fe("TooltipRoot"), Pc = /* @__PURE__ */ T({
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
    const o = $n(), s = $(() => n.disableHoverableContent ?? o.disableHoverableContent.value), i = $(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), a = $(() => n.disabled ?? o.disabled.value), l = $(() => n.delayDuration ?? o.delayDuration.value), c = $(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), d = gt(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    Y(d, (y) => {
      o.onClose && (y ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Ar))) : o.onClose());
    });
    const u = O(!1), f = O(), m = $(() => d.value ? u.value ? "delayed-open" : "instant-open" : "closed"), { start: h, stop: v } = es(() => {
      u.value = !0, d.value = !0;
    }, l, { immediate: !1 });
    function g() {
      v(), u.value = !1, d.value = !0;
    }
    function b() {
      v(), d.value = !1;
    }
    function w() {
      h();
    }
    return Oc({
      contentId: "",
      open: d,
      stateAttribute: m,
      trigger: f,
      onTriggerChange(y) {
        f.value = y;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? w() : g();
      },
      onTriggerLeave() {
        s.value ? b() : v();
      },
      onOpen: g,
      onClose: b,
      disableHoverableContent: s,
      disableClosingTrigger: i,
      disabled: a,
      ignoreNonKeyboardFocus: c
    }), (y, x) => (S(), k(p(gr), null, {
      default: _(() => [
        P(y.$slots, "default", { open: p(d) })
      ]),
      _: 3
    }));
  }
}), Tc = /* @__PURE__ */ T({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Bt(), r = $n();
    n.contentId || (n.contentId = ze(void 0, "reka-tooltip-content"));
    const { forwardRef: o, currentElement: s } = F(), i = O(!1), a = O(!1), l = $(() => n.disabled.value ? {} : {
      click: v,
      focus: m,
      pointermove: u,
      pointerleave: f,
      pointerdown: d,
      blur: h
    });
    ee(() => {
      n.onTriggerChange(s.value);
    });
    function c() {
      setTimeout(() => {
        i.value = !1;
      }, 1);
    }
    function d() {
      i.value = !0, document.addEventListener("pointerup", c, { once: !0 });
    }
    function u(g) {
      g.pointerType !== "touch" && !a.value && !r.isPointerInTransitRef.value && (n.onTriggerEnter(), a.value = !0);
    }
    function f() {
      n.onTriggerLeave(), a.value = !1;
    }
    function m(g) {
      var b, w;
      i.value || n.ignoreNonKeyboardFocus.value && !((w = (b = g.target).matches) != null && w.call(b, ":focus-visible")) || n.onOpen();
    }
    function h() {
      n.onClose();
    }
    function v() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (g, b) => (S(), k(p(yr), {
      "as-child": "",
      reference: g.reference
    }, {
      default: _(() => [
        D(p(W), R({
          ref: p(o),
          "aria-describedby": p(n).open.value ? p(n).contentId : void 0,
          "data-state": p(n).stateAttribute.value,
          as: g.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Fr(l.value)), {
          default: _(() => [
            P(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
}), Or = /* @__PURE__ */ T({
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
    const n = e, r = t, o = Bt(), { forwardRef: s } = F(), i = Nr(), a = $(() => {
      var d;
      return (d = i.default) == null ? void 0 : d.call(i, {});
    }), l = $(() => {
      var f;
      if (n.ariaLabel)
        return n.ariaLabel;
      let d = "";
      function u(m) {
        typeof m.children == "string" && m.type !== Eo ? d += m.children : Array.isArray(m.children) && m.children.forEach((h) => u(h));
      }
      return (f = a.value) == null || f.forEach((m) => u(m)), d;
    }), c = $(() => {
      const { ariaLabel: d, ...u } = n;
      return u;
    });
    return ee(() => {
      qt(window, "scroll", (d) => {
        const u = d.target;
        u != null && u.contains(o.trigger.value) && o.onClose();
      }), qt(window, Ar, o.onClose);
    }), (d, u) => (S(), k(p(Pn), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: u[0] || (u[0] = (f) => r("escapeKeyDown", f)),
      onPointerDownOutside: u[1] || (u[1] = (f) => {
        var m;
        p(o).disableClosingTrigger.value && ((m = p(o).trigger.value) != null && m.contains(f.target)) && f.preventDefault(), r("pointerDownOutside", f);
      }),
      onFocusOutside: u[2] || (u[2] = Ne(() => {
      }, ["prevent"])),
      onDismiss: u[3] || (u[3] = (f) => p(o).onClose())
    }, {
      default: _(() => [
        D(p(wr), R({
          ref: p(s),
          "data-state": p(o).stateAttribute.value
        }, { ...d.$attrs, ...c.value }, { style: {
          "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
          "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
          "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
        } }), {
          default: _(() => [
            P(d.$slots, "default"),
            D(p(nr), {
              id: p(o).contentId,
              role: "tooltip"
            }, {
              default: _(() => [
                Ce(We(l.value), 1)
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
}), $c = /* @__PURE__ */ T({
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
    const n = Dt(e), { forwardRef: r, currentElement: o } = F(), { trigger: s, onClose: i } = Bt(), a = $n(), { isPointerInTransit: l, onPointerExit: c } = Gl(s, o);
    return a.isPointerInTransitRef = l, c(() => {
      i();
    }), (d, u) => (S(), k(Or, R({ ref: p(r) }, p(n)), {
      default: _(() => [
        P(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kc = /* @__PURE__ */ T({
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
    const n = e, r = t, o = Bt(), s = ir(n, r), { forwardRef: i } = F();
    return (a, l) => (S(), k(p(kt), {
      present: a.forceMount || p(o).open.value
    }, {
      default: _(() => [
        (S(), k(cn(p(o).disableHoverableContent.value ? Or : $c), R({ ref: p(i) }, p(s)), {
          default: _(() => [
            P(a.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ic = /* @__PURE__ */ T({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return F(), (n, r) => (S(), k(p(br), Ke(rt(t)), {
      default: _(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dc = /* @__PURE__ */ T({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (S(), k(p(An), Ke(rt(t)), {
      default: _(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bc = { class: "gradiented step-3 strong" }, Mc = /* @__PURE__ */ T({
  __name: "AppDialog",
  props: /* @__PURE__ */ _t({
    persistent: { type: Boolean },
    title: null,
    description: null
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = Ze(e, "open");
    return (n, r) => (S(), k(p(Ja), {
      open: t.value,
      "onUpdate:open": r[4] || (r[4] = (o) => t.value = o),
      class: N(n.$style["app-dialog"])
    }, {
      default: _(() => [
        D(p(Za), {
          class: N(n.$style.trigger),
          "as-child": ""
        }, {
          default: _(() => [
            P(n.$slots, "trigger")
          ]),
          _: 3
        }, 8, ["class"]),
        D(p(ql), null, {
          default: _(() => [
            D(Vr, { name: "fade" }, {
              default: _(() => [
                D(p(Ol), {
                  class: N(n.$style.overlay)
                }, null, 8, ["class"])
              ]),
              _: 1
            }),
            D(p(xl), {
              "as-child": "",
              "trap-focus": !e.persistent,
              onPointerDownOutside: r[1] || (r[1] = (o) => e.persistent ? o.preventDefault() : null),
              onEscapeKeyDown: r[2] || (r[2] = (o) => e.persistent ? o.preventDefault() : null),
              onFocusOutside: r[3] || (r[3] = (o) => e.persistent ? o.preventDefault() : null)
            }, {
              default: _(() => [
                D(Vi, R({
                  class: n.$style.content
                }, n.$attrs), {
                  default: _(() => [
                    ne("header", null, [
                      ne("div", {
                        class: N(n.$style.start)
                      }, [
                        D(p(Tl), { "as-child": "" }, {
                          default: _(() => [
                            ne("h2", Bc, [
                              P(n.$slots, "title", {}, () => [
                                Ce(We(e.title), 1)
                              ])
                            ])
                          ]),
                          _: 3
                        }),
                        D(p($l), { "as-child": "" }, {
                          default: _(() => [
                            ne("div", {
                              class: N(n.$style.description)
                            }, [
                              P(n.$slots, "description", {}, () => [
                                Ce(We(e.description), 1)
                              ])
                            ], 2)
                          ]),
                          _: 3
                        })
                      ], 2),
                      P(n.$slots, "header-actions"),
                      D(p(Pl), {
                        "aria-label": "Close",
                        "as-child": ""
                      }, {
                        default: _(() => [
                          e.persistent ? K("", !0) : (S(), k(Bi, {
                            key: 0,
                            variant: "text",
                            class: N(n.$style["close-button"]),
                            icon: "material-symbols:close-rounded",
                            onClick: r[0] || (r[0] = (o) => t.value = !1)
                          }, null, 8, ["class"]))
                        ]),
                        _: 1
                      })
                    ]),
                    P(n.$slots, "default"),
                    ne("footer", null, [
                      P(n.$slots, "actions")
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
}), Lc = "_trigger_eed4348", Rc = "_overlay_3482df4", Fc = "_content_22a8642", Nc = "_start_62c7e32", Vc = "_description_768894d", Wc = "_close-button_fb0abea", Hc = { trigger: Lc, overlay: Rc, content: Fc, start: Nc, description: Vc, "close-button": Wc }, jc = {
  $style: Hc
}, Pu = /* @__PURE__ */ ue(Mc, [["__cssModules", jc]]), zc = {}, Uc = {
  class: "app-loading-spinner",
  viewBox: "0 0 68 68",
  xmlns: "http://www.w3.org/2000/svg"
};
function Kc(e, t) {
  return S(), H("svg", Uc, t[0] || (t[0] = [
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
const Tu = /* @__PURE__ */ ue(zc, [["render", Kc], ["__scopeId", "data-v-d7f1df05"]]), qc = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2027.6.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_2_00000039126939024823027680000017407098825655584941_'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2090.9%20125.8'%20style='enable-background:new%200%200%2090.9%20125.8;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{opacity:0.5;fill:%23C5FFFE;enable-background:new%20;}%20.st1{fill:%23C5FFFE;}%20.st2{clip-path:url(%23SVGID_00000160187787671385330840000011365503337429337474_);}%20%3c/style%3e%3cg%20id='Layer_1-2_00000138552681162585653310000003376327086979018656_'%3e%3cg%20id='Layer_2-2_00000089575700792075398270000016475314756721804971_'%3e%3cg%20id='Layer_1-2'%3e%3cg%20id='Layer_2-2'%3e%3cg%20id='Layer_1-2-2'%3e%3cg%20id='Logo'%3e%3cg%20id='Secondary_j'%3e%3crect%20x='71.7'%20y='14.4'%20class='st0'%20width='5.8'%20height='46.7'/%3e%3cpath%20class='st0'%20d='M43.5,115.3c-18.2,0-33.1-14.8-33.1-33.1s14.9-33.1,33.1-33.1S76.6,64,76.6,82.2S61.8,115.3,43.5,115.3z%20M43.5,55.1c-14.9,0-27.1,12.2-27.1,27.1s12.2,27.1,27.1,27.1s27.1-12.2,27.1-27.1S58.5,55.1,43.5,55.1z'/%3e%3ccircle%20class='st0'%20cx='42.2'%20cy='77.4'%20r='8.2'/%3e%3c/g%3e%3cg%20id='Main_j'%3e%3ccircle%20id='Dot3'%20class='st1'%20cx='74.6'%20cy='16.4'%20r='16.4'/%3e%3ccircle%20id='Dot2'%20class='st1'%20cx='74.5'%20cy='61.1'%20r='12'/%3e%3ccircle%20id='Dot'%20class='st1'%20cx='12'%20cy='82.2'%20r='12'/%3e%3cg%20id='SquareCircle'%3e%3cg%3e%3cdefs%3e%3crect%20id='SVGID_1_'%20y='81.1'%20width='86.5'%20height='44.7'/%3e%3c/defs%3e%3cclipPath%20id='SVGID_00000170246492928372989520000014416670913551062949_'%3e%3cuse%20xlink:href='%23SVGID_1_'%20style='overflow:visible;'/%3e%3c/clipPath%3e%3cg%20style='clip-path:url(%23SVGID_00000170246492928372989520000014416670913551062949_);'%3e%3cpath%20class='st1'%20d='M43.2,124.4c-23.9,0-43.3-19.4-43.3-43.3s19.4-43.3,43.3-43.3s43.3,19.4,43.3,43.3%20S67.1,124.4,43.2,124.4z%20M43.2,61.8C32.6,61.8,24,70.4,24,81.1s8.7,19.3,19.3,19.3s19.3-8.7,19.3-19.3%20S53.9,61.8,43.2,61.8z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3crect%20x='62.6'%20y='61.1'%20class='st1'%20width='23.9'%20height='20.9'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Gc = ["src"], Yc = /* @__PURE__ */ T({
  __name: "AppLogo",
  props: Ae({
    size: null
  }, { size: "medium" }),
  setup(e) {
    return (t, n) => (S(), H("img", {
      src: p(qc),
      class: N(["app-logo", t.size]),
      alt: "Jojko's logo'"
    }, null, 10, Gc));
  }
}), $u = /* @__PURE__ */ ue(Yc, [["__scopeId", "data-v-6abc7d2e"]]), Xc = ["disabled"], Qc = /* @__PURE__ */ T({
  __name: "AppSelectField",
  props: /* @__PURE__ */ _t(Ae({
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
    const t = Ze(e, "modelValue"), n = Ze(e, "open"), { createLocalWaveDirective: r } = Ko, { vWave: o } = r({
      duration: 0.2
    });
    return (s, i) => {
      const a = mn;
      return S(), k(p(sc), {
        open: n.value,
        "onUpdate:open": i[0] || (i[0] = (l) => n.value = l),
        modelValue: t.value,
        "onUpdate:modelValue": i[1] || (i[1] = (l) => t.value = l),
        name: s.name,
        multiple: s.multiple,
        required: s.required
      }, {
        default: _(() => [
          D(p(ic), {
            "as-child": "",
            disabled: s.disabled
          }, {
            default: _(() => [
              P(s.$slots, "trigger", {}, () => [
                Je((S(), H("button", {
                  disabled: s.disabled,
                  class: N([s.$style.trigger, { [s.$style.placeholder]: !t.value }])
                }, [
                  D(p(Ec), { placeholder: s.placeholder }, null, 8, ["placeholder"]),
                  D(p(_c), { "as-child": "" }, {
                    default: _(() => [
                      D(a, {
                        class: N(s.$style["select-icon"]),
                        icon: "material-symbols:expand-more-rounded"
                      }, null, 8, ["class"])
                    ]),
                    _: 1
                  })
                ], 10, Xc)), [
                  [p(o)]
                ])
              ])
            ]),
            _: 3
          }, 8, ["disabled"]),
          D(p(ac), null, {
            default: _(() => [
              D(p(mc), {
                position: "item-aligned",
                class: N(s.$style.content)
              }, {
                default: _(() => [
                  D(p(xc)),
                  D(p(bc), {
                    class: N(s.$style.viewport)
                  }, {
                    default: _(() => [
                      (S(!0), H(Ct, null, ko(s.items, (l) => Je((S(), k(p(vc), {
                        key: JSON.stringify(l),
                        class: N(s.$style.item),
                        value: l.value
                      }, {
                        default: _(() => [
                          D(p(wc), null, {
                            default: _(() => [
                              P(s.$slots, "item", R({ ref_for: !0 }, l), () => [
                                Ce(We(l.label ?? l.value), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          D(p(yc))
                        ]),
                        _: 2
                      }, 1032, ["class", "value"])), [
                        [p(o)]
                      ])), 128))
                    ]),
                    _: 3
                  }, 8, ["class"]),
                  D(p(Cc)),
                  D(p(hc))
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
}), Jc = "_item_d25a3ba", Zc = "_content_5242832", eu = "_viewport_34f6182", tu = "_trigger_d455d52", nu = "_error_123b438", ou = "_select-icon_b60910e", ru = "_placeholder_189bfa7", su = { item: Jc, content: Zc, viewport: eu, trigger: tu, error: nu, "select-icon": ou, placeholder: ru }, iu = {
  $style: su
}, ku = /* @__PURE__ */ ue(Qc, [["__cssModules", iu]]), au = /* @__PURE__ */ T({
  __name: "AppTextField",
  props: /* @__PURE__ */ _t(Ae({
    placeholder: null,
    disabled: { type: Boolean },
    error: null,
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
    const [t, n] = Ze(e, "modelValue"), r = Wr(), o = Hr(), s = $(() => ({
      ...r,
      ...n,
      class: o.input,
      type: e.type,
      disabled: e.disabled,
      placeholder: e.placeholder
    }));
    return (i, a) => {
      const l = mn;
      return S(), H("div", {
        class: N([
          i.$style.wrapper,
          { [i.$style.interactive]: !i.disabled, [i.$style.error]: i.error }
        ])
      }, [
        i.iconBefore ?? i.icon ? (S(), k(l, {
          key: 0,
          icon: i.iconBefore ?? i.icon,
          class: N(i.$style["icon-before"])
        }, null, 8, ["icon", "class"])) : K("", !0),
        i.type === "textarea" ? Je((S(), H("textarea", R({ key: 1 }, p(s), {
          "onUpdate:modelValue": a[0] || (a[0] = (c) => Dn(t) ? t.value = c : null)
        }), null, 16)), [
          [jr, p(t)]
        ]) : Je((S(), H("input", R({ key: 2 }, p(s), {
          "onUpdate:modelValue": a[1] || (a[1] = (c) => Dn(t) ? t.value = c : null)
        }), null, 16)), [
          [zr, p(t)]
        ]),
        i.iconAfter ? (S(), k(l, {
          key: 3,
          icon: i.iconAfter,
          class: N(i.$style["icon-after"])
        }, null, 8, ["icon", "class"])) : K("", !0),
        i.$slots.actions ? (S(), H("div", {
          key: 4,
          class: N(i.$style.actions)
        }, [
          P(i.$slots, "actions")
        ], 2)) : K("", !0)
      ], 2);
    };
  }
}), lu = "_icon-before_fccb21f", cu = "_icon-after_eb3b2c5", uu = "_actions_baaebea", du = "_wrapper_f54e2d9", fu = "_interactive_3dc4aaf", pu = "_input_c63c5c2", mu = "_error_692dad4", hu = { "icon-before": lu, "icon-after": cu, actions: uu, wrapper: du, interactive: fu, input: pu, error: mu }, gu = {
  $style: hu
}, Iu = /* @__PURE__ */ ue(au, [["__cssModules", gu]]), vu = /* @__PURE__ */ T({
  __name: "AppTooltip",
  props: /* @__PURE__ */ _t(Ae({
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
    }, n = Ze(e, "open");
    return (r, o) => (S(), k(p(Ac), { "delay-duration": 0 }, {
      default: _(() => [
        D(p(Pc), {
          open: n.value,
          "onUpdate:open": o[0] || (o[0] = (s) => n.value = s)
        }, {
          default: _(() => [
            D(p(Tc), { "as-child": "" }, {
              default: _(() => [
                P(r.$slots, "trigger")
              ]),
              _: 3
            }),
            D(p(Dc), null, {
              default: _(() => [
                D(p(kc), R(r.$attrs, {
                  as: "div",
                  align: r.align,
                  "avoid-collisions": r.avoidCollisions,
                  position: t[r.position],
                  "align-offset": 20,
                  "aria-label": r.ariaLabel,
                  class: [r.$attrs.class, r.$style["app-tooltip"]]
                }), {
                  default: _(() => [
                    D(p(Ic), {
                      class: N(r.$style.arrow)
                    }, null, 8, ["class"]),
                    P(r.$slots, "default")
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
}), yu = "_app-tooltip_6b0961c", wu = "_slideIn_3e7dd36", bu = "_arrow_7e59031", xu = { "app-tooltip": yu, slideIn: wu, arrow: bu }, Cu = {
  $style: xu
}, Du = /* @__PURE__ */ ue(vu, [["__cssModules", Cu]]);
export {
  Bi as AppButton,
  Vi as AppCard,
  Au as AppChip,
  Pu as AppDialog,
  mn as AppIcon,
  Tu as AppLoadingSpinner,
  $u as AppLogo,
  ku as AppSelectField,
  Iu as AppTextField,
  Du as AppTooltip
};
