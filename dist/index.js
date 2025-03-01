import * as Pn from "vue";
import { defineComponent as P, h as we, createBlock as I, openBlock as A, unref as m, normalizeClass as K, mergeDefaults as _e, useCssVars as Tr, computed as T, ref as O, getCurrentInstance as Ie, withDirectives as pt, createElementBlock as j, withKeys as Tn, createCommentVNode as G, renderSlot as $, createTextVNode as ze, toDisplayString as wt, shallowRef as go, watch as Y, getCurrentScope as vo, onScopeDispose as yo, shallowReadonly as Le, Fragment as bt, Comment as wo, mergeProps as R, cloneVNode as $r, withCtx as E, inject as bo, provide as xo, customRef as Ir, toValue as ct, onBeforeUnmount as an, readonly as kr, nextTick as se, onUnmounted as Co, toRefs as Ke, toHandlerKey as Dr, camelize as _o, toRef as Br, onMounted as ee, Teleport as Eo, watchEffect as U, reactive as So, normalizeStyle as xt, createVNode as D, markRaw as Lr, watchPostEffect as Ao, normalizeProps as Ue, guardReactiveProps as tt, createElementVNode as Mr, renderList as Oo, withModifiers as Fe, resolveDynamicComponent as Po, toHandlers as Rr, useSlots as Fr, mergeModels as To, useModel as zt, isRef as Nr, vModelDynamic as Vr } from "vue";
import { useMouseInElement as Wr, unrefElement as ke, defaultWindow as jr, useVModel as Ve, useMounted as Hr, onKeyStroke as zr, createGlobalState as Kr, createSharedComposable as Ur, useEventListener as Kt, toValue as qr, computedEager as Gr, useResizeObserver as Yr, useTimeoutFn as Xr } from "@vueuse/core";
const $o = /^[a-z0-9]+(-[a-z0-9]+)*$/, Ct = (e, t, n, r = "") => {
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
    return t && !ut(c) ? null : c;
  }
  const i = o[0], s = i.split("-");
  if (s.length > 1) {
    const a = {
      provider: r,
      prefix: s.shift(),
      name: s.join("-")
    };
    return t && !ut(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: i
    };
    return t && !ut(a, n) ? null : a;
  }
  return null;
}, ut = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, Io = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), mt = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), _t = Object.freeze({
  ...Io,
  ...mt
}), Ut = Object.freeze({
  ..._t,
  body: "",
  hidden: !1
});
function Qr(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function $n(e, t) {
  const n = Qr(e, t);
  for (const r in Ut)
    r in mt ? r in e && !(r in n) && (n[r] = mt[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function Jr(e, t) {
  const n = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function i(s) {
    if (n[s])
      return o[s] = [];
    if (!(s in o)) {
      o[s] = null;
      const a = r[s] && r[s].parent, l = a && i(a);
      l && (o[s] = [a].concat(l));
    }
    return o[s];
  }
  return Object.keys(n).concat(Object.keys(r)).forEach(i), o;
}
function Zr(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function s(a) {
    i = $n(
      r[a] || o[a],
      i
    );
  }
  return s(t), n.forEach(s), $n(e, i);
}
function ko(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = Jr(e);
  for (const o in r) {
    const i = r[o];
    i && (t(o, Zr(e, o, i)), n.push(o));
  }
  return n;
}
const ei = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Io
};
function Mt(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function Do(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Mt(e, ei))
    return null;
  const n = t.icons;
  for (const o in n) {
    const i = n[o];
    if (
      // Name cannot be empty
      !o || // Must have body
      typeof i.body != "string" || // Check other props
      !Mt(
        i,
        Ut
      )
    )
      return null;
  }
  const r = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in r) {
    const i = r[o], s = i.parent;
    if (
      // Name cannot be empty
      !o || // Parent must be set and point to existing icon
      typeof s != "string" || !n[s] && !r[s] || // Check other props
      !Mt(
        i,
        Ut
      )
    )
      return null;
  }
  return t;
}
const In = /* @__PURE__ */ Object.create(null);
function ti(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function We(e, t) {
  const n = In[e] || (In[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = ti(e, t));
}
function Bo(e, t) {
  return Do(t) ? ko(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function ni(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Je = !1;
function Lo(e) {
  return typeof e == "boolean" && (Je = e), Je;
}
function oi(e) {
  const t = typeof e == "string" ? Ct(e, !0, Je) : e;
  if (t) {
    const n = We(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function ri(e, t) {
  const n = Ct(e, !0, Je);
  if (!n)
    return !1;
  const r = We(n.provider, n.prefix);
  return t ? ni(r, n.name, t) : (r.missing.add(n.name), !0);
}
function ii(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Je && !t && !e.prefix) {
    let o = !1;
    return Do(e) && (e.prefix = "", ko(e, (i, s) => {
      ri(i, s) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!ut({
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = We(t, n);
  return !!Bo(r, e);
}
const Mo = Object.freeze({
  width: null,
  height: null
}), Ro = Object.freeze({
  // Dimensions
  ...Mo,
  // Transformations
  ...mt
}), si = /(-?[0-9.]*[0-9]+[0-9.]*)/g, ai = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function kn(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(si);
  if (r === null || !r.length)
    return e;
  const o = [];
  let i = r.shift(), s = ai.test(i);
  for (; ; ) {
    if (s) {
      const a = parseFloat(i);
      isNaN(a) ? o.push(i) : o.push(Math.ceil(a * t * n) / n);
    } else
      o.push(i);
    if (i = r.shift(), i === void 0)
      return o.join("");
    s = !s;
  }
}
function li(e, t = "defs") {
  let n = "";
  const r = e.indexOf("<" + t);
  for (; r >= 0; ) {
    const o = e.indexOf(">", r), i = e.indexOf("</" + t);
    if (o === -1 || i === -1)
      break;
    const s = e.indexOf(">", i);
    if (s === -1)
      break;
    n += e.slice(o + 1, i).trim(), e = e.slice(0, r).trim() + e.slice(s + 1);
  }
  return {
    defs: n,
    content: e
  };
}
function ci(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function ui(e, t, n) {
  const r = li(e);
  return ci(r.defs, t + r.content + n);
}
const di = (e) => e === "unset" || e === "undefined" || e === "none";
function fi(e, t) {
  const n = {
    ..._t,
    ...e
  }, r = {
    ...Ro,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let i = n.body;
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
    y % 2 === 1 && (o.left !== o.top && (x = o.left, o.left = o.top, o.top = x), o.width !== o.height && (x = o.width, o.width = o.height, o.height = x)), g.length && (i = ui(
      i,
      '<g transform="' + g.join(" ") + '">',
      "</g>"
    ));
  });
  const s = r.width, a = r.height, l = o.width, c = o.height;
  let u, d;
  s === null ? (d = a === null ? "1em" : a === "auto" ? c : a, u = kn(d, l / c)) : (u = s === "auto" ? l : s, d = a === null ? kn(u, c / l) : a === "auto" ? c : a);
  const f = {}, p = (v, g) => {
    di(g) || (f[v] = g.toString());
  };
  p("width", u), p("height", d);
  const h = [o.left, o.top, l, c];
  return f.viewBox = h.join(" "), {
    attributes: f,
    viewBox: h,
    body: i
  };
}
const pi = /\sid="(\S+)"/g, mi = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let hi = 0;
function gi(e, t = mi) {
  const n = [];
  let r;
  for (; r = pi.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const s = typeof t == "function" ? t(i) : t + (hi++).toString(), a = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + s + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const qt = /* @__PURE__ */ Object.create(null);
function vi(e, t) {
  qt[e] = t;
}
function Gt(e) {
  return qt[e] || qt[""];
}
function ln(e) {
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
const cn = /* @__PURE__ */ Object.create(null), Ye = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], dt = [];
for (; Ye.length > 0; )
  Ye.length === 1 || Math.random() > 0.5 ? dt.push(Ye.shift()) : dt.push(Ye.pop());
cn[""] = ln({
  resources: ["https://api.iconify.design"].concat(dt)
});
function yi(e, t) {
  const n = ln(t);
  return n === null ? !1 : (cn[e] = n, !0);
}
function un(e) {
  return cn[e];
}
const wi = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Dn = wi();
function bi(e, t) {
  const n = un(e);
  if (!n)
    return 0;
  let r;
  if (!n.maxURL)
    r = 0;
  else {
    let o = 0;
    n.resources.forEach((s) => {
      o = Math.max(o, s.length);
    });
    const i = t + ".json?icons=";
    r = n.maxURL - o - n.path.length - i.length;
  }
  return r;
}
function xi(e) {
  return e === 404;
}
const Ci = (e, t, n) => {
  const r = [], o = bi(e, t), i = "icons";
  let s = {
    type: i,
    provider: e,
    prefix: t,
    icons: []
  }, a = 0;
  return n.forEach((l, c) => {
    a += l.length + 1, a >= o && c > 0 && (r.push(s), s = {
      type: i,
      provider: e,
      prefix: t,
      icons: []
    }, a = l.length), s.icons.push(l);
  }), r.push(s), r;
};
function _i(e) {
  if (typeof e == "string") {
    const t = un(e);
    if (t)
      return t.path;
  }
  return "/";
}
const Ei = (e, t, n) => {
  if (!Dn) {
    n("abort", 424);
    return;
  }
  let r = _i(t.provider);
  switch (t.type) {
    case "icons": {
      const i = t.prefix, a = t.icons.join(","), l = new URLSearchParams({
        icons: a
      });
      r += i + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const i = t.uri;
      r += i.slice(0, 1) === "/" ? i.slice(1) : i;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let o = 503;
  Dn(e + r).then((i) => {
    const s = i.status;
    if (s !== 200) {
      setTimeout(() => {
        n(xi(s) ? "abort" : "next", s);
      });
      return;
    }
    return o = 501, i.json();
  }).then((i) => {
    if (typeof i != "object" || i === null) {
      setTimeout(() => {
        i === 404 ? n("abort", i) : n("next", o);
      });
      return;
    }
    setTimeout(() => {
      n("success", i);
    });
  }).catch(() => {
    n("next", o);
  });
}, Si = {
  prepare: Ci,
  send: Ei
};
function Ai(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  e.sort((o, i) => o.provider !== i.provider ? o.provider.localeCompare(i.provider) : o.prefix !== i.prefix ? o.prefix.localeCompare(i.prefix) : o.name.localeCompare(i.name));
  let r = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((o) => {
    if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider)
      return;
    r = o;
    const i = o.provider, s = o.prefix, a = o.name, l = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), c = l[s] || (l[s] = We(i, s));
    let u;
    a in c.icons ? u = t.loaded : s === "" || c.missing.has(a) ? u = t.missing : u = t.pending;
    const d = {
      provider: i,
      prefix: s,
      name: a
    };
    u.push(d);
  }), t;
}
function Fo(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function Oi(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let n = !1;
    const r = e.provider, o = e.prefix;
    t.forEach((i) => {
      const s = i.icons, a = s.pending.length;
      s.pending = s.pending.filter((l) => {
        if (l.prefix !== o)
          return !0;
        const c = l.name;
        if (e.icons[c])
          s.loaded.push({
            provider: r,
            prefix: o,
            name: c
          });
        else if (e.missing.has(c))
          s.missing.push({
            provider: r,
            prefix: o,
            name: c
          });
        else
          return n = !0, !0;
        return !1;
      }), s.pending.length !== a && (n || Fo([e], i.id), i.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let Pi = 0;
function Ti(e, t, n) {
  const r = Pi++, o = Fo.bind(null, n, r);
  if (!t.pending.length)
    return o;
  const i = {
    id: r,
    icons: t,
    callback: e,
    abort: o
  };
  return n.forEach((s) => {
    (s.loaderCallbacks || (s.loaderCallbacks = [])).push(i);
  }), o;
}
function $i(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? Ct(o, t, n) : o;
    i && r.push(i);
  }), r;
}
var Ii = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function ki(e, t, n, r) {
  const o = e.resources.length, i = e.random ? Math.floor(Math.random() * o) : e.index;
  let s;
  if (e.random) {
    let _ = e.resources.slice(0);
    for (s = []; _.length > 1; ) {
      const S = Math.floor(Math.random() * _.length);
      s.push(_[S]), _ = _.slice(0, S).concat(_.slice(S + 1));
    }
    s = s.concat(_);
  } else
    s = e.resources.slice(i).concat(e.resources.slice(0, i));
  const a = Date.now();
  let l = "pending", c = 0, u, d = null, f = [], p = [];
  typeof r == "function" && p.push(r);
  function h() {
    d && (clearTimeout(d), d = null);
  }
  function v() {
    l === "pending" && (l = "aborted"), h(), f.forEach((_) => {
      _.status === "pending" && (_.status = "aborted");
    }), f = [];
  }
  function g(_, S) {
    S && (p = []), typeof _ == "function" && p.push(_);
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
    l = "failed", p.forEach((_) => {
      _(void 0, u);
    });
  }
  function y() {
    f.forEach((_) => {
      _.status === "pending" && (_.status = "aborted");
    }), f = [];
  }
  function x(_, S, k) {
    const B = S !== "success";
    switch (f = f.filter((L) => L !== _), l) {
      case "pending":
        break;
      case "failed":
        if (B || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (S === "abort") {
      u = k, w();
      return;
    }
    if (B) {
      u = k, f.length || (s.length ? C() : w());
      return;
    }
    if (h(), y(), !e.random) {
      const L = e.resources.indexOf(_.resource);
      L !== -1 && L !== e.index && (e.index = L);
    }
    l = "completed", p.forEach((L) => {
      L(k);
    });
  }
  function C() {
    if (l !== "pending")
      return;
    h();
    const _ = s.shift();
    if (_ === void 0) {
      if (f.length) {
        d = setTimeout(() => {
          h(), l === "pending" && (y(), w());
        }, e.timeout);
        return;
      }
      w();
      return;
    }
    const S = {
      status: "pending",
      resource: _,
      callback: (k, B) => {
        x(S, k, B);
      }
    };
    f.push(S), c++, d = setTimeout(C, e.rotate), n(_, t, S.callback);
  }
  return setTimeout(C), b;
}
function No(e) {
  const t = {
    ...Ii,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, l, c) {
    const u = ki(
      t,
      a,
      l,
      (d, f) => {
        r(), c && c(d, f);
      }
    );
    return n.push(u), u;
  }
  function i(a) {
    return n.find((l) => a(l)) || null;
  }
  return {
    query: o,
    find: i,
    setIndex: (a) => {
      t.index = a;
    },
    getIndex: () => t.index,
    cleanup: r
  };
}
function Bn() {
}
const Rt = /* @__PURE__ */ Object.create(null);
function Di(e) {
  if (!Rt[e]) {
    const t = un(e);
    if (!t)
      return;
    const n = No(t), r = {
      config: t,
      redundancy: n
    };
    Rt[e] = r;
  }
  return Rt[e];
}
function Bi(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const i = Gt(e);
    if (!i)
      return n(void 0, 424), Bn;
    o = i.send;
    const s = Di(e);
    s && (r = s.redundancy);
  } else {
    const i = ln(e);
    if (i) {
      r = No(i);
      const s = e.resources ? e.resources[0] : "", a = Gt(s);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Bn) : r.query(t, o, n)().abort;
}
function Ln() {
}
function Li(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Oi(e);
  }));
}
function Mi(e) {
  const t = [], n = [];
  return e.forEach((r) => {
    (r.match($o) ? t : n).push(r);
  }), {
    valid: t,
    invalid: n
  };
}
function Xe(e, t, n) {
  function r() {
    const o = e.pendingIcons;
    t.forEach((i) => {
      o && o.delete(i), e.icons[i] || e.missing.add(i);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!Bo(e, n).length) {
        r();
        return;
      }
    } catch (o) {
      console.error(o);
    }
  r(), Li(e);
}
function Mn(e, t) {
  e instanceof Promise ? e.then((n) => {
    t(n);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function Ri(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    if (delete e.iconsToLoad, !o || !o.length)
      return;
    const i = e.loadIcon;
    if (e.loadIcons && (o.length > 1 || !i)) {
      Mn(
        e.loadIcons(o, r, n),
        (u) => {
          Xe(e, o, u);
        }
      );
      return;
    }
    if (i) {
      o.forEach((u) => {
        const d = i(u, r, n);
        Mn(d, (f) => {
          const p = f ? {
            prefix: r,
            icons: {
              [u]: f
            }
          } : null;
          Xe(e, [u], p);
        });
      });
      return;
    }
    const { valid: s, invalid: a } = Mi(o);
    if (a.length && Xe(e, a, null), !s.length)
      return;
    const l = r.match($o) ? Gt(n) : null;
    if (!l) {
      Xe(e, s, null);
      return;
    }
    l.prepare(n, r, s).forEach((u) => {
      Bi(n, u, (d) => {
        Xe(e, u.icons, d);
      });
    });
  }));
}
const Fi = (e, t) => {
  const n = $i(e, !0, Lo()), r = Ai(n);
  if (!r.pending.length) {
    let l = !0;
    return t && setTimeout(() => {
      l && t(
        r.loaded,
        r.missing,
        r.pending,
        Ln
      );
    }), () => {
      l = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), i = [];
  let s, a;
  return r.pending.forEach((l) => {
    const { provider: c, prefix: u } = l;
    if (u === a && c === s)
      return;
    s = c, a = u, i.push(We(c, u));
    const d = o[c] || (o[c] = /* @__PURE__ */ Object.create(null));
    d[u] || (d[u] = []);
  }), r.pending.forEach((l) => {
    const { provider: c, prefix: u, name: d } = l, f = We(c, u), p = f.pendingIcons || (f.pendingIcons = /* @__PURE__ */ new Set());
    p.has(d) || (p.add(d), o[c][u].push(d));
  }), i.forEach((l) => {
    const c = o[l.provider][l.prefix];
    c.length && Ri(l, c);
  }), t ? Ti(t, r, i) : Ln;
};
function Ni(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], i = typeof o;
    r in Mo ? (o === null || o && (i === "string" || i === "number")) && (n[r] = o) : i === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const Vi = /[\s,]+/;
function Wi(e, t) {
  t.split(Vi).forEach((n) => {
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
function ji(e, t = 0) {
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
      let i = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(i) ? 0 : (i = i / o, i % 1 === 0 ? r(i) : 0);
    }
  }
  return t;
}
function Hi(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function zi(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Ki(e) {
  return "data:image/svg+xml," + zi(e);
}
function Ui(e) {
  return 'url("' + Ki(e) + '")';
}
const Rn = {
  ...Ro,
  inline: !1
}, qi = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Gi = {
  display: "inline-block"
}, Yt = {
  backgroundColor: "currentColor"
}, Vo = {
  backgroundColor: "transparent"
}, Fn = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Nn = {
  webkitMask: Yt,
  mask: Yt,
  background: Vo
};
for (const e in Nn) {
  const t = Nn[e];
  for (const n in Fn)
    t[e + n] = Fn[n];
}
const ft = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  ft[e + "-flip"] = t, ft[e.slice(0, 1) + "-flip"] = t, ft[e + "Flip"] = t;
});
function Vn(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Wn = (e, t) => {
  const n = Ni(Rn, t), r = { ...qi }, o = t.mode || "svg", i = {}, s = t.style, a = typeof s == "object" && !(s instanceof Array) ? s : {};
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
          typeof g == "string" && Wi(n, g);
          break;
        // Color: override style
        case "color":
          i.color = g;
          break;
        // Rotation as string
        case "rotate":
          typeof g == "string" ? n[v] = ji(g) : typeof g == "number" && (n[v] = g);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          g !== !0 && g !== "true" && delete r["aria-hidden"];
          break;
        default: {
          const b = ft[v];
          b ? (g === !0 || g === "true" || g === 1) && (n[b] = !0) : Rn[v] === void 0 && (r[v] = g);
        }
      }
  }
  const l = fi(e, n), c = l.attributes;
  if (n.inline && (i.verticalAlign = "-0.125em"), o === "svg") {
    r.style = {
      ...i,
      ...a
    }, Object.assign(r, c);
    let v = 0, g = t.id;
    return typeof g == "string" && (g = g.replace(/-/g, "_")), r.innerHTML = gi(l.body, g ? () => g + "ID" + v++ : "iconifyVue"), we("svg", r);
  }
  const { body: u, width: d, height: f } = e, p = o === "mask" || (o === "bg" ? !1 : u.indexOf("currentColor") !== -1), h = Hi(u, {
    ...c,
    width: d + "",
    height: f + ""
  });
  return r.style = {
    ...i,
    "--svg": Ui(h),
    width: Vn(c.width),
    height: Vn(c.height),
    ...Gi,
    ...p ? Yt : Vo,
    ...a
  }, we("span", r);
};
Lo(!0);
vi("", Si);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !ii(r)) && console.error(n);
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
          yi(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
const Yi = {
  ..._t,
  body: ""
}, Xi = P({
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
      if (typeof e != "string" || (r = Ct(e, !1, !0)) === null)
        return this.abortLoading(), null;
      let o = oi(r);
      if (!o)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", o !== null && (this._loadingIcon = {
          name: e,
          abort: Fi([r], () => {
            this.counter++;
          })
        })), null;
      if (this.abortLoading(), this._name !== e && (this._name = e, t && t(e)), n) {
        o = Object.assign({}, o);
        const s = n(o.body, r.name, r.prefix, r.provider);
        typeof s == "string" && (o.body = s);
      }
      const i = ["iconify"];
      return r.prefix !== "" && i.push("iconify--" + r.prefix), r.provider !== "" && i.push("iconify--" + r.provider), { data: o, classes: i };
    }
  },
  // Render icon
  render() {
    this.counter;
    const e = this.$attrs, t = this.iconMounted || e.ssr ? this.getIcon(e.icon, e.onLoad, e.customise) : null;
    if (!t)
      return Wn(Yi, e);
    let n = e;
    return t.classes && (n = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + t.classes.join(" ")
    }), Wn({
      ..._t,
      ...t.data
    }, n);
  }
}), Qi = /* @__PURE__ */ P({
  __name: "AppIcon",
  props: {
    icon: null
  },
  setup(e) {
    return (t, n) => (A(), I(m(Xi), {
      inline: "",
      icon: typeof e.icon == "string" ? e.icon : e.icon[1],
      class: K(t.$style.icon)
    }, null, 8, ["icon", "class"]));
  }
}), Ji = "_icon_6dc929d", Zi = { icon: Ji }, he = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, es = {
  $style: Zi
}, dn = /* @__PURE__ */ he(Qi, [["__cssModules", es]]);
var ts = Object.defineProperty, ns = Object.defineProperties, os = Object.getOwnPropertyDescriptors, jn = Object.getOwnPropertySymbols, rs = Object.prototype.hasOwnProperty, is = Object.prototype.propertyIsEnumerable, Hn = (e, t, n) => t in e ? ts(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ye = (e, t) => {
  for (var n in t || (t = {}))
    rs.call(t, n) && Hn(e, n, t[n]);
  if (jn)
    for (var n of jn(t))
      is.call(t, n) && Hn(e, n, t[n]);
  return e;
}, Wo = (e, t) => ns(e, os(t)), ss = {
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
}, as = (e) => "config" in e && "globalProperties" in e.config, ls = (e) => {
  let t;
  return e === "vue2" ? t = !1 : e === "vue3" ? t = !0 : t = as(e), t ? {
    mounted: "mounted",
    updated: "updated"
  } : {
    mounted: "inserted",
    updated: "componentUpdated"
  };
}, jo = (e) => typeof e == "string" && e !== "auto", zn = (e, t) => {
  e.dataset.vWaveBoundary = jo(t) ? t : "true";
}, cs = ({ borderTopLeftRadius: e, borderTopRightRadius: t, borderBottomLeftRadius: n, borderBottomRightRadius: r }, o) => {
  const i = document.createElement(o);
  return i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%", i.style.display = "block", i.style.position = "absolute", i.style.borderRadius = `${e} ${t} ${r} ${n}`, i.style.overflow = "hidden", i.style.pointerEvents = "none", i.style.webkitMaskImage = "-webkit-radial-gradient(white, black)", i.dataset.vWaveContainerInternal = "true", i;
}, us = ({ x: e, y: t }, n, r) => {
  const o = document.createElement("div");
  return o.style.position = "absolute", o.style.width = `${n}px`, o.style.height = `${n}px`, o.style.top = `${t}px`, o.style.left = `${e}px`, o.style.background = r.color, o.style.borderRadius = "50%", o.style.opacity = `${r.initialOpacity}`, o.style.transform = "translate(-50%,-50%) scale(0)", o.style.transition = `transform ${r.duration}s ${r.easing}, opacity ${r.duration}s ${r.easing}`, o;
};
function rt(e, t, n, r) {
  const o = e - n, i = t - r;
  return Math.sqrt(o * o + i * i);
}
function ds({ x: e, y: t }, { width: n, height: r }) {
  const o = rt(e, t, 0, 0), i = rt(e, t, n, 0), s = rt(e, t, 0, r), a = rt(e, t, n, r);
  return Math.max(o, i, s, a);
}
var fs = ({ x: e, y: t }, { top: n, left: r }) => ({
  x: e - r,
  y: t - n
}), ps = (e, t) => {
  t.position === "static" && (["top", "left", "right", "bottom"].forEach((n) => {
    t[n] && t[n] !== "auto" && console.warn(
      "[v-wave]:",
      e,
      `You're using a \`static\` positioned element with a non-auto value (${t[n]}) for \`${n}\`.`,
      "It's position will be changed to relative while displaying the wave which might cause the element to visually jump."
    );
  }), e.dataset.originalPositionValue = e.style.position, e.style.position = "relative");
}, Kn = (e) => {
  var t;
  e.style.position = (t = e.dataset.originalPositionValue) != null ? t : "", delete e.dataset.originalPositionValue;
}, fn = "vWaveCountInternal";
function ms(e) {
  const t = ht(e);
  Ho(e, t + 1);
}
function Un(e) {
  const t = ht(e);
  Ho(e, t - 1);
}
function Ho(e, t) {
  e.dataset[fn] = t.toString();
}
function ht(e) {
  var t;
  return Number.parseInt((t = e.dataset[fn]) != null ? t : "0", 10);
}
function qn(e) {
  delete e.dataset[fn];
}
var hs = 2.05, Xt = (e, t, n) => {
  if (n.disabled || n.respectDisabledAttribute && t.hasAttribute("disabled") || n.respectPrefersReducedMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const r = t.getBoundingClientRect(), o = window.getComputedStyle(t), i = fs(e, r), s = hs * ds(i, r), a = t.querySelector("[data-v-wave-container-internal]"), l = a ?? cs(o, n.tagName), c = us(i, s, n);
  ms(t), ps(t, o), l.appendChild(c), a || t.appendChild(l);
  let u = !n.waitForRelease;
  const d = (v) => {
    typeof v < "u" && (document.removeEventListener("pointerup", d), document.removeEventListener("pointercancel", d)), u ? f() : u = !0;
  }, f = () => {
    c.style.transition = `opacity ${n.dissolveDuration}s linear`, c.style.opacity = "0", setTimeout(() => {
      c.remove(), Un(t), ht(t) === 0 && (qn(t), l.remove(), Kn(t));
    }, n.dissolveDuration * 1e3);
  };
  n.waitForRelease && (document.addEventListener("pointerup", d), document.addEventListener("pointercancel", d));
  const p = setTimeout(() => {
    document.removeEventListener("pointercancel", h), requestAnimationFrame(() => {
      c.style.transform = "translate(-50%,-50%) scale(1)", c.style.opacity = `${n.finalOpacity}`, setTimeout(() => d(), n.duration * 1e3);
    });
  }, n.cancellationPeriod), h = () => {
    clearTimeout(p), c.remove(), Un(t), ht(t) === 0 && (qn(t), l.remove(), Kn(t)), document.removeEventListener("pointerup", d), document.removeEventListener("pointercancel", d), document.removeEventListener("pointercancel", h);
  };
  document.addEventListener("pointercancel", h);
}, Qe = /* @__PURE__ */ new WeakMap(), gs = (e, t) => (n, r) => {
  if (!Qe.has(t)) return;
  const o = ye(ye({}, e), Qe.get(t));
  if (o.stopPropagation && n.stopPropagation(), o.trigger === !1) return Xt(n, t, o);
  if (jo(o.trigger)) return;
  const i = t.querySelector('[data-v-wave-trigger="true"]');
  !i && o.trigger === !0 || i && !n.composedPath().includes(i) || Xt(r ?? n, t, Wo(ye({}, o), { waitForRelease: r ? !1 : o.waitForRelease }));
}, vs = (e = {}, t = "vue3") => {
  const n = ye(ye({}, ss), e), r = ls(t), o = (a) => {
    if (a.detail !== 0) return;
    const l = a.currentTarget, c = l.dataset.vWaveTrigger;
    document.querySelectorAll(
      `[data-v-wave-boundary="${c}"]`
    ).forEach((d) => {
      const f = a.type === "click";
      let p;
      if (f) {
        const v = l.getBoundingClientRect();
        p = {
          x: v.left + v.width / 2,
          y: v.top + v.height / 2
        };
      } else
        p = a;
      const h = ye(ye({}, n), Qe.get(d));
      Xt(p, d, Wo(ye({}, h), { waitForRelease: f ? !1 : h.waitForRelease }));
    });
  }, i = {
    [r.mounted](a, { value: l = {} }) {
      var c;
      Qe.set(a, l), zn(a, (c = l == null ? void 0 : l.trigger) != null ? c : n.trigger);
      const u = gs(n, a);
      a.addEventListener("pointerdown", u), a.addEventListener("click", (d) => {
        if (d.detail !== 0) return;
        const f = a.getBoundingClientRect(), p = {
          x: f.left + f.width / 2,
          y: f.top + f.height / 2
        };
        u(d, p);
      });
    },
    [r.updated](a, { value: l = {} }) {
      var c;
      Qe.set(a, l), zn(a, (c = l == null ? void 0 : l.trigger) != null ? c : n.trigger);
    }
  }, s = {
    [r.mounted](a, { arg: l = "true" }) {
      a.dataset.vWaveTrigger = l, l !== "true" && (a.addEventListener("pointerdown", o), a.addEventListener("click", o));
    },
    [r.updated](a, { arg: l = "true" }) {
      a.dataset.vWaveTrigger = l, l === "true" ? (a.removeEventListener("pointerdown", o), a.removeEventListener("click", o)) : (a.addEventListener("pointerdown", o), a.addEventListener("click", o));
    }
  };
  return {
    wave: i,
    vWave: i,
    waveTrigger: s,
    vWaveTrigger: s
  };
}, ys = {
  createLocalWaveDirective: vs
}, zo = ys;
const ws = /* @__PURE__ */ P({
  __name: "AppButton",
  props: _e({
    text: null,
    variant: null,
    icon: null,
    iconBefore: null,
    iconAfter: null
  }, { variant: "secondary" }),
  setup(e) {
    Tr((p) => ({
      29782214: d.value,
      29789673: f.value
    }));
    const { createLocalWaveDirective: t } = zo, { vWave: n } = t({
      duration: 0.2
    }), r = O(null), o = Ie(), i = T(
      () => {
        var p, h;
        return !!(e.icon || e.iconBefore || e.iconAfter) && !((h = o == null ? void 0 : (p = o.slots).default) != null && h.call(p));
      }
    ), { elementX: s, elementY: a, elementWidth: l, elementHeight: c, isOutside: u } = Wr(r), d = T(
      () => u.value ? void 0 : `${s.value / l.value * 100}%`
    ), f = T(
      () => u.value ? void 0 : `${a.value / c.value * 100}%`
    );
    return (p, h) => {
      const v = dn;
      return pt((A(), j("button", {
        ref_key: "buttonEl",
        ref: r,
        tabindex: "0",
        class: K([
          p.$style["app-button"],
          p.$style[p.variant],
          {
            [p.$style["v-border-shine"]]: !(m(u) && !1),
            [p.$style["icon-button"]]: i.value
          }
        ]),
        onKeydown: [
          h[0] || (h[0] = Tn((g) => p.$emit("click", g), ["enter"])),
          h[1] || (h[1] = Tn((g) => p.$emit("click", g), ["space"]))
        ]
      }, [
        p.icon ?? p.iconBefore ? (A(), I(v, {
          key: 0,
          icon: p.icon ?? p.iconBefore,
          class: K(p.$style["icon-before"])
        }, null, 8, ["icon", "class"])) : G("", !0),
        $(p.$slots, "default", {}, () => [
          ze(wt(p.text), 1)
        ]),
        p.iconAfter ? (A(), I(v, {
          key: 1,
          icon: p.iconAfter,
          class: K(p.$style["icon-after"])
        }, null, 8, ["icon", "class"])) : G("", !0)
      ], 34)), [
        [m(n)]
      ]);
    };
  }
}), bs = "_app-button_f9040b0", xs = "_v-border-shine_8419f80", Cs = "_primary_5785c37", _s = "_secondary_31cb9f8", Es = "_text_7e1c00c", Ss = "_icon-button_3541c9b", As = "_label_bdd07c7", Os = "_icon-before_fb07300", Ps = "_icon-after_4d342ca", Ts = { "app-button": bs, "v-border-shine": xs, primary: Cs, secondary: _s, text: Es, "icon-button": Ss, label: As, "icon-before": Os, "icon-after": Ps }, $s = {
  $style: Ts
}, Is = /* @__PURE__ */ he(ws, [["__cssModules", $s]]), ks = /* @__PURE__ */ P({
  __name: "AppCard",
  props: _e({
    variant: null
  }, { variant: "raised" }),
  setup(e) {
    return (t, n) => (A(), j("div", {
      class: K(["app-card", t.variant])
    }, [
      $(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ds = /* @__PURE__ */ he(ks, [["__scopeId", "data-v-ed1acfe5"]]), Bs = /* @__PURE__ */ P({
  __name: "AppChip",
  props: _e({
    size: null,
    transparent: { type: Boolean }
  }, { size: "medium", transparent: !1 }),
  setup(e) {
    return (t, n) => (A(), j("div", {
      class: K([
        t.$style["app-chip"],
        t.$style[t.size],
        { [t.$style.transparent]: t.transparent }
      ])
    }, [
      $(t.$slots, "default")
    ], 2));
  }
}), Ls = "_app-chip_707ac6f", Ms = "_small_1d451e9", Rs = "_large_97f6530", Fs = "_transparent_8a38eaa", Ns = { "app-chip": Ls, small: Ms, large: Rs, transparent: Fs }, Vs = {
  $style: Ns
}, su = /* @__PURE__ */ he(Bs, [["__cssModules", Vs]]), Ws = ["top", "right", "bottom", "left"], be = Math.min, Q = Math.max, gt = Math.round, it = Math.floor, ae = (e) => ({
  x: e,
  y: e
}), js = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Hs = {
  start: "end",
  end: "start"
};
function Qt(e, t, n) {
  return Q(e, be(t, n));
}
function pe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function me(e) {
  return e.split("-")[0];
}
function qe(e) {
  return e.split("-")[1];
}
function pn(e) {
  return e === "x" ? "y" : "x";
}
function mn(e) {
  return e === "y" ? "height" : "width";
}
function xe(e) {
  return ["top", "bottom"].includes(me(e)) ? "y" : "x";
}
function hn(e) {
  return pn(xe(e));
}
function zs(e, t, n) {
  n === void 0 && (n = !1);
  const r = qe(e), o = hn(e), i = mn(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = vt(s)), [s, vt(s)];
}
function Ks(e) {
  const t = vt(e);
  return [Jt(e), t, Jt(t)];
}
function Jt(e) {
  return e.replace(/start|end/g, (t) => Hs[t]);
}
function Us(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function qs(e, t, n, r) {
  const o = qe(e);
  let i = Us(me(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Jt)))), i;
}
function vt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => js[t]);
}
function Gs(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ko(e) {
  return typeof e != "number" ? Gs(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function yt(e) {
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
function Gn(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = xe(t), s = hn(t), a = mn(s), l = me(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (qe(t)) {
    case "start":
      p[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const Ys = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = Gn(c, r, l), f = r, p = {}, h = 0;
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
      x: u,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: p,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = w ?? u, d = y ?? d, p = {
      ...p,
      [g]: {
        ...p[g],
        ...x
      }
    }, C && h <= 50 && (h++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (c = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: u,
      y: d
    } = Gn(c, f, l)), v = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: p
  };
};
async function Ze(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = pe(t, e), h = Ko(p), g = a[f ? d === "floating" ? "reference" : "floating" : d], b = yt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), w = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = yt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Xs = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = pe(e, t) || {};
    if (c == null)
      return {};
    const d = Ko(u), f = {
      x: n,
      y: r
    }, p = hn(o), h = mn(p), v = await s.getDimensions(c), g = p === "y", b = g ? "top" : "left", w = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", x = i.reference[h] + i.reference[p] - f[p] - i.floating[h], C = f[p] - i.reference[p], _ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let S = _ ? _[y] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(_))) && (S = a.floating[y] || i.floating[h]);
    const k = x / 2 - C / 2, B = S / 2 - v[h] / 2 - 1, L = be(d[b], B), M = be(d[w], B), H = L, z = S - v[h] - M, N = S / 2 - v[h] / 2 + k, q = Qt(H, N, z), X = !l.arrow && qe(o) != null && N !== q && i.reference[h] / 2 - (N < H ? L : M) - v[h] / 2 < 0, W = X ? N < H ? N - H : N - z : 0;
    return {
      [p]: f[p] + W,
      data: {
        [p]: q,
        centerOffset: N - q - W,
        ...X && {
          alignmentOffset: W
        }
      },
      reset: X
    };
  }
}), Qs = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: v = !0,
        ...g
      } = pe(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = me(o), w = xe(a), y = me(a) === a, x = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = f || (y || !v ? [vt(a)] : Ks(a)), _ = h !== "none";
      !f && _ && C.push(...qs(a, v, h, x));
      const S = [a, ...C], k = await Ze(t, g), B = [];
      let L = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && B.push(k[b]), d) {
        const N = zs(o, s, x);
        B.push(k[N[0]], k[N[1]]);
      }
      if (L = [...L, {
        placement: o,
        overflows: B
      }], !B.every((N) => N <= 0)) {
        var M, H;
        const N = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1, q = S[N];
        if (q)
          return {
            data: {
              index: N,
              overflows: L
            },
            reset: {
              placement: q
            }
          };
        let X = (H = L.filter((W) => W.overflows[0] <= 0).sort((W, re) => W.overflows[1] - re.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!X)
          switch (p) {
            case "bestFit": {
              var z;
              const W = (z = L.filter((re) => {
                if (_) {
                  const ie = xe(re.placement);
                  return ie === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ie === "y";
                }
                return !0;
              }).map((re) => [re.placement, re.overflows.filter((ie) => ie > 0).reduce((ie, Be) => ie + Be, 0)]).sort((re, ie) => re[1] - ie[1])[0]) == null ? void 0 : z[0];
              W && (X = W);
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
function Yn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Xn(e) {
  return Ws.some((t) => e[t] >= 0);
}
const Js = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = pe(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Ze(t, {
            ...o,
            elementContext: "reference"
          }), s = Yn(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Xn(s)
            }
          };
        }
        case "escaped": {
          const i = await Ze(t, {
            ...o,
            altBoundary: !0
          }), s = Yn(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Xn(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Zs(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = me(n), a = qe(n), l = xe(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = i && l ? -1 : 1, d = pe(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof h == "number" && (p = a === "end" ? h * -1 : h), l ? {
    x: p * u,
    y: f * c
  } : {
    x: f * c,
    y: p * u
  };
}
const ea = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, l = await Zs(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, ta = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
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
      } = pe(e, t), c = {
        x: n,
        y: r
      }, u = await Ze(t, l), d = xe(me(o)), f = pn(d);
      let p = c[f], h = c[d];
      if (i) {
        const g = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", w = p + u[g], y = p - u[b];
        p = Qt(w, p, y);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", w = h + u[g], y = h - u[b];
        h = Qt(w, h, y);
      }
      const v = a.fn({
        ...t,
        [f]: p,
        [d]: h
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [f]: i,
            [d]: s
          }
        }
      };
    }
  };
}, na = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = pe(e, t), u = {
        x: n,
        y: r
      }, d = xe(o), f = pn(d);
      let p = u[f], h = u[d];
      const v = pe(a, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const y = f === "y" ? "height" : "width", x = i.reference[f] - i.floating[y] + g.mainAxis, C = i.reference[f] + i.reference[y] - g.mainAxis;
        p < x ? p = x : p > C && (p = C);
      }
      if (c) {
        var b, w;
        const y = f === "y" ? "width" : "height", x = ["top", "left"].includes(me(o)), C = i.reference[d] - i.floating[y] + (x && ((b = s.offset) == null ? void 0 : b[d]) || 0) + (x ? 0 : g.crossAxis), _ = i.reference[d] + i.reference[y] + (x ? 0 : ((w = s.offset) == null ? void 0 : w[d]) || 0) - (x ? g.crossAxis : 0);
        h < C ? h = C : h > _ && (h = _);
      }
      return {
        [f]: p,
        [d]: h
      };
    }
  };
}, oa = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...c
      } = pe(e, t), u = await Ze(t, c), d = me(o), f = qe(o), p = xe(o) === "y", {
        width: h,
        height: v
      } = i.floating;
      let g, b;
      d === "top" || d === "bottom" ? (g = d, b = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = d, g = f === "end" ? "top" : "bottom");
      const w = v - u.top - u.bottom, y = h - u.left - u.right, x = be(v - u[g], w), C = be(h - u[b], y), _ = !t.middlewareData.shift;
      let S = x, k = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = y), (r = t.middlewareData.shift) != null && r.enabled.y && (S = w), _ && !f) {
        const L = Q(u.left, 0), M = Q(u.right, 0), H = Q(u.top, 0), z = Q(u.bottom, 0);
        p ? k = h - 2 * (L !== 0 || M !== 0 ? L + M : Q(u.left, u.right)) : S = v - 2 * (H !== 0 || z !== 0 ? H + z : Q(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: k,
        availableHeight: S
      });
      const B = await s.getDimensions(a.floating);
      return h !== B.width || v !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Et() {
  return typeof window < "u";
}
function De(e) {
  return gn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function J(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ce(e) {
  var t;
  return (t = (gn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function gn(e) {
  return Et() ? e instanceof Node || e instanceof J(e).Node : !1;
}
function ne(e) {
  return Et() ? e instanceof Element || e instanceof J(e).Element : !1;
}
function le(e) {
  return Et() ? e instanceof HTMLElement || e instanceof J(e).HTMLElement : !1;
}
function Qn(e) {
  return !Et() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof J(e).ShadowRoot;
}
function nt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ra(e) {
  return ["table", "td", "th"].includes(De(e));
}
function St(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function vn(e) {
  const t = yn(), n = ne(e) ? oe(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ia(e) {
  let t = Ce(e);
  for (; le(t) && !je(t); ) {
    if (vn(t))
      return t;
    if (St(t))
      return null;
    t = Ce(t);
  }
  return null;
}
function yn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function je(e) {
  return ["html", "body", "#document"].includes(De(e));
}
function oe(e) {
  return J(e).getComputedStyle(e);
}
function At(e) {
  return ne(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ce(e) {
  if (De(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Qn(e) && e.host || // Fallback.
    ce(e)
  );
  return Qn(t) ? t.host : t;
}
function Uo(e) {
  const t = Ce(e);
  return je(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : le(t) && nt(t) ? t : Uo(t);
}
function et(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Uo(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = J(o);
  if (i) {
    const a = Zt(s);
    return t.concat(s, s.visualViewport || [], nt(o) ? o : [], a && n ? et(a) : []);
  }
  return t.concat(o, et(o, [], n));
}
function Zt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function qo(e) {
  const t = oe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = le(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = gt(n) !== i || gt(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function wn(e) {
  return ne(e) ? e : e.contextElement;
}
function Ne(e) {
  const t = wn(e);
  if (!le(t))
    return ae(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = qo(t);
  let s = (i ? gt(n.width) : n.width) / r, a = (i ? gt(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const sa = /* @__PURE__ */ ae(0);
function Go(e) {
  const t = J(e);
  return !yn() || !t.visualViewport ? sa : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function aa(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== J(e) ? !1 : t;
}
function $e(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = wn(e);
  let s = ae(1);
  t && (r ? ne(r) && (s = Ne(r)) : s = Ne(e));
  const a = aa(i, n, r) ? Go(i) : ae(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = J(i), p = r && ne(r) ? J(r) : r;
    let h = f, v = Zt(h);
    for (; v && r && p !== h; ) {
      const g = Ne(v), b = v.getBoundingClientRect(), w = oe(v), y = b.left + (v.clientLeft + parseFloat(w.paddingLeft)) * g.x, x = b.top + (v.clientTop + parseFloat(w.paddingTop)) * g.y;
      l *= g.x, c *= g.y, u *= g.x, d *= g.y, l += y, c += x, h = J(v), v = Zt(h);
    }
  }
  return yt({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function bn(e, t) {
  const n = At(e).scrollLeft;
  return t ? t.left + n : $e(ce(e)).left + n;
}
function Yo(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    bn(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function la(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = ce(r), a = t ? St(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ae(1);
  const u = ae(0), d = le(r);
  if ((d || !d && !i) && ((De(r) !== "body" || nt(s)) && (l = At(r)), le(r))) {
    const p = $e(r);
    c = Ne(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  const f = s && !d && !i ? Yo(s, l, !0) : ae(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + f.y
  };
}
function ca(e) {
  return Array.from(e.getClientRects());
}
function ua(e) {
  const t = ce(e), n = At(e), r = e.ownerDocument.body, o = Q(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Q(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + bn(e);
  const a = -n.scrollTop;
  return oe(r).direction === "rtl" && (s += Q(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function da(e, t) {
  const n = J(e), r = ce(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = yn();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function fa(e, t) {
  const n = $e(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = le(e) ? Ne(e) : ae(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Jn(e, t, n) {
  let r;
  if (t === "viewport")
    r = da(e, n);
  else if (t === "document")
    r = ua(ce(e));
  else if (ne(t))
    r = fa(t, n);
  else {
    const o = Go(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return yt(r);
}
function Xo(e, t) {
  const n = Ce(e);
  return n === t || !ne(n) || je(n) ? !1 : oe(n).position === "fixed" || Xo(n, t);
}
function pa(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = et(e, [], !1).filter((a) => ne(a) && De(a) !== "body"), o = null;
  const i = oe(e).position === "fixed";
  let s = i ? Ce(e) : e;
  for (; ne(s) && !je(s); ) {
    const a = oe(s), l = vn(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || nt(s) && !l && Xo(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Ce(s);
  }
  return t.set(e, r), r;
}
function ma(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? St(t) ? [] : pa(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, u) => {
    const d = Jn(t, u, o);
    return c.top = Q(d.top, c.top), c.right = be(d.right, c.right), c.bottom = be(d.bottom, c.bottom), c.left = Q(d.left, c.left), c;
  }, Jn(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function ha(e) {
  const {
    width: t,
    height: n
  } = qo(e);
  return {
    width: t,
    height: n
  };
}
function ga(e, t, n) {
  const r = le(t), o = ce(t), i = n === "fixed", s = $e(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ae(0);
  if (r || !r && !i)
    if ((De(t) !== "body" || nt(o)) && (a = At(t)), r) {
      const f = $e(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = bn(o));
  const c = o && !r && !i ? Yo(o, a) : ae(0), u = s.left + a.scrollLeft - l.x - c.x, d = s.top + a.scrollTop - l.y - c.y;
  return {
    x: u,
    y: d,
    width: s.width,
    height: s.height
  };
}
function Ft(e) {
  return oe(e).position === "static";
}
function Zn(e, t) {
  if (!le(e) || oe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ce(e) === n && (n = n.ownerDocument.body), n;
}
function Qo(e, t) {
  const n = J(e);
  if (St(e))
    return n;
  if (!le(e)) {
    let o = Ce(e);
    for (; o && !je(o); ) {
      if (ne(o) && !Ft(o))
        return o;
      o = Ce(o);
    }
    return n;
  }
  let r = Zn(e, t);
  for (; r && ra(r) && Ft(r); )
    r = Zn(r, t);
  return r && je(r) && Ft(r) && !vn(r) ? n : r || ia(e) || n;
}
const va = async function(e) {
  const t = this.getOffsetParent || Qo, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: ga(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ya(e) {
  return oe(e).direction === "rtl";
}
const wa = {
  convertOffsetParentRelativeRectToViewportRelativeRect: la,
  getDocumentElement: ce,
  getClippingRect: ma,
  getOffsetParent: Qo,
  getElementRects: va,
  getClientRects: ca,
  getDimensions: ha,
  getScale: Ne,
  isElement: ne,
  isRTL: ya
};
function Jo(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ba(e, t) {
  let n = null, r;
  const o = ce(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const c = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: f,
      height: p
    } = c;
    if (a || t(), !f || !p)
      return;
    const h = it(d), v = it(o.clientWidth - (u + f)), g = it(o.clientHeight - (d + p)), b = it(u), y = {
      rootMargin: -h + "px " + -v + "px " + -g + "px " + -b + "px",
      threshold: Q(0, be(1, l)) || 1
    };
    let x = !0;
    function C(_) {
      const S = _[0].intersectionRatio;
      if (S !== l) {
        if (!x)
          return s();
        S ? s(!1, S) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !Jo(c, e.getBoundingClientRect()) && s(), x = !1;
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
  return s(!0), i;
}
function xa(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = wn(e), u = o || i ? [...c ? et(c) : [], ...et(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const d = c && a ? ba(c, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((b) => {
    let [w] = b;
    w && w.target === c && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var y;
      (y = p) == null || y.observe(t);
    })), n();
  }), c && !l && p.observe(c), p.observe(t));
  let h, v = l ? $e(e) : null;
  l && g();
  function g() {
    const b = $e(e);
    v && !Jo(v, b) && n(), v = b, h = requestAnimationFrame(g);
  }
  return n(), () => {
    var b;
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), d == null || d(), (b = p) == null || b.disconnect(), p = null, l && cancelAnimationFrame(h);
  };
}
const Ca = ea, _a = ta, eo = Qs, Ea = oa, Sa = Js, Aa = Xs, Oa = na, Pa = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: wa,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Ys(e, t, {
    ...o,
    platform: i
  });
};
function Ta(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function en(e) {
  if (Ta(e)) {
    const t = e.$el;
    return gn(t) && De(t) === "#comment" ? null : t;
  }
  return e;
}
function Re(e) {
  return typeof e == "function" ? e() : m(e);
}
function $a(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = en(Re(e.element));
      return n == null ? {} : Aa({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Zo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function to(e, t) {
  const n = Zo(e);
  return Math.round(t * n) / n;
}
function Ia(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = T(() => {
    var S;
    return (S = Re(n.open)) != null ? S : !0;
  }), i = T(() => Re(n.middleware)), s = T(() => {
    var S;
    return (S = Re(n.placement)) != null ? S : "bottom";
  }), a = T(() => {
    var S;
    return (S = Re(n.strategy)) != null ? S : "absolute";
  }), l = T(() => {
    var S;
    return (S = Re(n.transform)) != null ? S : !0;
  }), c = T(() => en(e.value)), u = T(() => en(t.value)), d = O(0), f = O(0), p = O(a.value), h = O(s.value), v = go({}), g = O(!1), b = T(() => {
    const S = {
      position: p.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return S;
    const k = to(u.value, d.value), B = to(u.value, f.value);
    return l.value ? {
      ...S,
      transform: "translate(" + k + "px, " + B + "px)",
      ...Zo(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: p.value,
      left: k + "px",
      top: B + "px"
    };
  });
  let w;
  function y() {
    if (c.value == null || u.value == null)
      return;
    const S = o.value;
    Pa(c.value, u.value, {
      middleware: i.value,
      placement: s.value,
      strategy: a.value
    }).then((k) => {
      d.value = k.x, f.value = k.y, p.value = k.strategy, h.value = k.placement, v.value = k.middlewareData, g.value = S !== !1;
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
    if (c.value != null && u.value != null) {
      w = r(c.value, u.value, y);
      return;
    }
  }
  function _() {
    o.value || (g.value = !1);
  }
  return Y([i, s, a, o], y, {
    flush: "sync"
  }), Y([c, u], C, {
    flush: "sync"
  }), Y(o, _, {
    flush: "sync"
  }), vo() && yo(x), {
    x: Le(d),
    y: Le(f),
    strategy: Le(p),
    placement: Le(h),
    middlewareData: Le(v),
    isPositioned: Le(g),
    floatingStyles: b,
    update: y
  };
}
function xn(e) {
  return e ? e.flatMap((t) => t.type === bt ? xn(t.children) : [t]) : [];
}
const tn = P({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var l, c;
      if (!n.default)
        return null;
      const r = xn(n.default()), o = r.findIndex((u) => u.type !== wo);
      if (o === -1)
        return r;
      const i = r[o];
      (l = i.props) == null || delete l.ref;
      const s = i.props ? R(t, i.props) : t;
      t.class && ((c = i.props) != null && c.class) && delete i.props.class;
      const a = $r(i, s);
      for (const u in s)
        u.startsWith("on") && (a.props || (a.props = {}), a.props[u] = s[u]);
      return r.length === 1 ? a : (r[o] = a, r);
    };
  }
}), V = P({
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
    return typeof r == "string" && ["area", "img", "input"].includes(r) ? () => we(r, t) : r !== "template" ? () => we(e.as, t, { default: n.default }) : () => we(tn, t, { default: n.default });
  }
}), er = /* @__PURE__ */ P({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (A(), I(m(V), {
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
      default: E(() => [
        $(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
}), no = Object.freeze({
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
function oo(e, t) {
  t ? t = { ...no, ...t } : t = no;
  const n = tr(t);
  return n.dispatch(e), n.toString();
}
const ka = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function tr(e) {
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
      const i = Object.prototype.toString.call(o);
      let s = "";
      const a = i.length;
      a < 10 ? s = "unknown:[" + i + "]" : s = i.slice(8, a - 1), s = s.toLowerCase();
      let l = null;
      if ((l = n.get(o)) === void 0)
        n.set(o, n.size);
      else
        return this.dispatch("[CIRCULAR:" + l + "]");
      if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(o))
        return r("buffer:"), r(o.toString("utf8"));
      if (s !== "object" && s !== "function" && s !== "asyncfunction")
        this[s] ? this[s](o) : e.ignoreUnknown || this.unkown(o, s);
      else {
        let c = Object.keys(o);
        e.unorderedObjects && (c = c.sort());
        let u = [];
        e.respectType !== !1 && !ro(o) && (u = ka), e.excludeKeys && (c = c.filter((f) => !e.excludeKeys(f)), u = u.filter((f) => !e.excludeKeys(f))), r("object:" + (c.length + u.length) + ":");
        const d = (f) => {
          this.dispatch(f), r(":"), e.excludeValues || this.dispatch(o[f]), r(",");
        };
        for (const f of c)
          d(f);
        for (const f of u)
          d(f);
      }
    },
    array(o, i) {
      if (i = i === void 0 ? e.unorderedArrays !== !1 : i, r("array:" + o.length + ":"), !i || o.length <= 1) {
        for (const l of o)
          this.dispatch(l);
        return;
      }
      const s = /* @__PURE__ */ new Map(), a = o.map((l) => {
        const c = tr(e);
        c.dispatch(l);
        for (const [u, d] of c.getContext())
          s.set(u, d);
        return c.toString();
      });
      return n = s, a.sort(), this.array(a, !1);
    },
    date(o) {
      return r("date:" + o.toJSON());
    },
    symbol(o) {
      return r("symbol:" + o.toString());
    },
    unkown(o, i) {
      if (r(i), !!o && (r(":"), o && typeof o.entries == "function"))
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
      r("fn:"), ro(o) ? this.dispatch("[native]") : this.dispatch(o.toString()), e.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(o.name)), e.respectFunctionProperties && this.object(o);
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
      const i = [...o];
      return this.array(i, e.unorderedSets !== !1);
    },
    set(o) {
      r("set:");
      const i = [...o];
      return this.array(i, e.unorderedSets !== !1);
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
const nr = "[native code] }", Da = nr.length;
function ro(e) {
  return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-Da) === nr;
}
function Ba(e, t, n = {}) {
  return e === t || oo(e, n) === oo(t, n);
}
function io(e) {
  return e == null;
}
function ue(e, t) {
  const n = typeof e == "string" ? `${e}Context` : t, r = Symbol(n);
  return [(s) => {
    const a = bo(r, s);
    if (a || a === null)
      return a;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (s) => (xo(r, s), s)];
}
const [Ot, au] = ue("ConfigProvider");
function La(e) {
  const t = Ot({
    dir: O("ltr")
  });
  return T(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function F() {
  const e = Ie(), t = O(), n = T(() => {
    var s, a;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (a = t.value) == null ? void 0 : a.$el.nextElementSibling : ke(t);
  }), r = Object.assign({}, e.exposed), o = {};
  for (const s in e.props)
    Object.defineProperty(o, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(r).length > 0)
    for (const s in r)
      Object.defineProperty(o, s, {
        enumerable: !0,
        configurable: !0,
        get: () => r[s]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function i(s) {
    t.value = s, s && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), e.exposed = o);
  }
  return { forwardRef: i, currentRef: t, currentElement: n };
}
let Ma = 0;
function He(e, t = "reka") {
  const n = Ot({ useId: void 0 });
  return Pn.useId ? `${t}-${Pn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Ma}`;
}
function Cn(e) {
  return vo() ? (yo(e), !0) : !1;
}
function Ra() {
  const e = /* @__PURE__ */ new Set(), t = (i) => {
    e.delete(i);
  };
  return {
    on: (i) => {
      e.add(i);
      const s = () => t(i);
      return Cn(s), {
        off: s
      };
    },
    off: t,
    trigger: (...i) => Promise.all(Array.from(e).map((s) => s(...i))),
    clear: () => {
      e.clear();
    }
  };
}
const Ee = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const so = /* @__PURE__ */ Fa();
function Fa() {
  var e, t;
  return Ee && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Na(e) {
  return Ie();
}
function or(e, t = 1e4) {
  return Ir((n, r) => {
    let o = ct(e), i;
    const s = () => setTimeout(() => {
      o = ct(e), r();
    }, ct(t));
    return Cn(() => {
      clearTimeout(i);
    }), {
      get() {
        return n(), o;
      },
      set(a) {
        o = a, r(), clearTimeout(i), i = s();
      }
    };
  });
}
function Va(e, t) {
  Na() && an(e, t);
}
function Wa(e, t, n = {}) {
  const {
    immediate: r = !0,
    immediateCallback: o = !1
  } = n, i = go(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function l() {
    i.value = !1, a();
  }
  function c(...u) {
    o && e(), a(), i.value = !0, s = setTimeout(() => {
      i.value = !1, s = null, e(...u);
    }, ct(t));
  }
  return r && (i.value = !0, Ee && c()), Cn(l), {
    isPending: kr(i),
    start: c,
    stop: l
  };
}
function ja(e, t) {
  const n = O(e);
  function r(i) {
    return t[n.value][i] ?? n.value;
  }
  return {
    state: n,
    dispatch: (i) => {
      n.value = r(i);
    }
  };
}
function Ha(e, t) {
  var g;
  const n = O({}), r = O("none"), o = O(e), i = e.value ? "mounted" : "unmounted";
  let s;
  const a = ((g = t.value) == null ? void 0 : g.ownerDocument.defaultView) ?? jr, { state: l, dispatch: c } = ja(i, {
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
  }), u = (b) => {
    var w;
    if (Ee) {
      const y = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      (w = t.value) == null || w.dispatchEvent(y);
    }
  };
  Y(
    e,
    async (b, w) => {
      var x;
      const y = w !== b;
      if (await se(), y) {
        const C = r.value, _ = st(t.value);
        b ? (c("MOUNT"), u("enter"), _ === "none" && u("after-enter")) : _ === "none" || ((x = n.value) == null ? void 0 : x.display) === "none" ? (c("UNMOUNT"), u("leave"), u("after-leave")) : w && C !== _ ? (c("ANIMATION_OUT"), u("leave")) : (c("UNMOUNT"), u("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (b) => {
    const w = st(t.value), y = w.includes(
      b.animationName
    ), x = l.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && y && (u(`after-${x}`), c("ANIMATION_END"), !o.value)) {
      const C = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = a == null ? void 0 : a.setTimeout(() => {
        var _;
        ((_ = t.value) == null ? void 0 : _.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = C);
      });
    }
    b.target === t.value && w === "none" && c("ANIMATION_END");
  }, f = (b) => {
    b.target === t.value && (r.value = st(t.value));
  }, p = Y(
    t,
    (b, w) => {
      b ? (n.value = getComputedStyle(b), b.addEventListener("animationstart", f), b.addEventListener("animationcancel", d), b.addEventListener("animationend", d)) : (c("ANIMATION_END"), s !== void 0 && (a == null || a.clearTimeout(s)), w == null || w.removeEventListener("animationstart", f), w == null || w.removeEventListener("animationcancel", d), w == null || w.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), h = Y(l, () => {
    const b = st(t.value);
    r.value = l.value === "mounted" ? b : "none";
  });
  return Co(() => {
    p(), h();
  }), {
    isPresent: T(
      () => ["mounted", "unmountSuspended"].includes(l.value)
    )
  };
}
function st(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Pt = P({
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
    const { present: r, forceMount: o } = Ke(e), i = O(), { isPresent: s } = Ha(r, i);
    n({ present: s });
    let a = t.default({ present: s.value });
    a = xn(a || []);
    const l = Ie();
    if (a && (a == null ? void 0 : a.length) > 1) {
      const u = (c = l == null ? void 0 : l.parent) != null && c.type.name ? `<${l.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${u}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((d) => `  - ${d}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => o.value || r.value || s.value ? we(t.default({ present: s.value })[0], {
      ref: (u) => {
        const d = ke(u);
        return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-reka-popper-content-wrapper") ? i.value = d.firstElementChild : i.value = d), d;
      }
    }) : null;
  }
});
function Tt(e) {
  const t = Ie(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    r[Dr(_o(o))] = (...i) => e(o, ...i);
  }), r;
}
function $t(e) {
  const t = Ie(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, i) => {
    const s = (t == null ? void 0 : t.type.props[i]).default;
    return s !== void 0 && (o[i] = s), o;
  }, {}), r = Br(e);
  return T(() => {
    const o = {}, i = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(i).forEach((s) => {
      o[_o(s)] = i[s];
    }), Object.keys({ ...n, ...o }).reduce((s, a) => (r.value[a] !== void 0 && (s[a] = r.value[a]), s), {});
  });
}
function rr(e, t) {
  const n = $t(e), r = t ? Tt(t) : {};
  return T(() => ({
    ...n.value,
    ...r
  }));
}
const [Se, za] = ue("DialogRoot"), Ka = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Ve(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = O(), s = O(), { modal: a } = Ke(n);
    return za({
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
      triggerElement: i,
      contentElement: s
    }), (l, c) => $(l.$slots, "default", { open: m(o) });
  }
}), Ua = /* @__PURE__ */ P({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Se(), { forwardRef: r, currentElement: o } = F();
    return n.contentId || (n.contentId = He(void 0, "reka-dialog-content")), ee(() => {
      n.triggerElement.value = o.value;
    }), (i, s) => (A(), I(m(V), R(t, {
      ref: m(r),
      type: i.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": m(n).open.value || !1,
      "aria-controls": m(n).open.value ? m(n).contentId : void 0,
      "data-state": m(n).open.value ? "open" : "closed",
      onClick: m(n).onOpenToggle
    }), {
      default: E(() => [
        $(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), _n = /* @__PURE__ */ P({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Hr();
    return (n, r) => m(t) || n.forceMount ? (A(), I(Eo, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      $(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : G("", !0);
  }
});
function En(e, t, n) {
  const r = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
const qa = "dismissableLayer.pointerDownOutside", Ga = "dismissableLayer.focusOutside";
function ir(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && r === n || o.indexOf(r) < o.indexOf(n));
}
function Ya(e, t) {
  var i;
  const n = ((i = t == null ? void 0 : t.value) == null ? void 0 : i.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = O(!1), o = O(() => {
  });
  return U((s) => {
    if (!Ee)
      return;
    const a = async (c) => {
      const u = c.target;
      if (t != null && t.value) {
        if (ir(t.value, u)) {
          r.value = !1;
          return;
        }
        if (c.target && !r.value) {
          let d = function() {
            En(
              qa,
              e,
              f
            );
          };
          const f = { originalEvent: c };
          c.pointerType === "touch" ? (n.removeEventListener("click", o.value), o.value = d, n.addEventListener("click", o.value, {
            once: !0
          })) : d();
        } else
          n.removeEventListener("click", o.value);
        r.value = !1;
      }
    }, l = window.setTimeout(() => {
      n.addEventListener("pointerdown", a);
    }, 0);
    s(() => {
      window.clearTimeout(l), n.removeEventListener("pointerdown", a), n.removeEventListener("click", o.value);
    });
  }), {
    onPointerDownCapture: () => r.value = !0
  };
}
function Xa(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = O(!1);
  return U((i) => {
    if (!Ee)
      return;
    const s = async (a) => {
      t != null && t.value && (await se(), !(!t.value || ir(t.value, a.target)) && a.target && !r.value && En(
        Ga,
        e,
        { originalEvent: a }
      ));
    };
    n.addEventListener("focusin", s), i(() => n.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => r.value = !0,
    onBlurCapture: () => r.value = !1
  };
}
const fe = So({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Sn = /* @__PURE__ */ P({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: i } = F(), s = T(
      () => {
        var h;
        return ((h = i.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), a = T(() => fe.layersRoot), l = T(() => i.value ? Array.from(a.value).indexOf(i.value) : -1), c = T(() => fe.layersWithOutsidePointerEventsDisabled.size > 0), u = T(() => {
      const h = Array.from(a.value), [v] = [...fe.layersWithOutsidePointerEventsDisabled].slice(-1), g = h.indexOf(v);
      return l.value >= g;
    }), d = Ya(async (h) => {
      const v = [...fe.branches].some(
        (g) => g == null ? void 0 : g.contains(h.target)
      );
      !u.value || v || (r("pointerDownOutside", h), r("interactOutside", h), await se(), h.defaultPrevented || r("dismiss"));
    }, i), f = Xa((h) => {
      [...fe.branches].some(
        (g) => g == null ? void 0 : g.contains(h.target)
      ) || (r("focusOutside", h), r("interactOutside", h), h.defaultPrevented || r("dismiss"));
    }, i);
    zr("Escape", (h) => {
      l.value === a.value.size - 1 && (r("escapeKeyDown", h), h.defaultPrevented || r("dismiss"));
    });
    let p;
    return U((h) => {
      i.value && (n.disableOutsidePointerEvents && (fe.layersWithOutsidePointerEventsDisabled.size === 0 && (p = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), fe.layersWithOutsidePointerEventsDisabled.add(i.value)), a.value.add(i.value), h(() => {
        n.disableOutsidePointerEvents && fe.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = p);
      }));
    }), U((h) => {
      h(() => {
        i.value && (a.value.delete(i.value), fe.layersWithOutsidePointerEventsDisabled.delete(i.value));
      });
    }), (h, v) => (A(), I(m(V), {
      ref: m(o),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: xt({
        pointerEvents: c.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: m(f).onFocusCapture,
      onBlurCapture: m(f).onBlurCapture,
      onPointerdownCapture: m(d).onPointerDownCapture
    }, {
      default: E(() => [
        $(h.$slots, "default")
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
function Qa(e) {
  return e ? "open" : "closed";
}
function ao(e) {
  const t = Z();
  for (const n of e)
    if (n === t || (n.focus(), Z() !== t))
      return;
}
const Ja = "DialogTitle", Za = "DialogContent";
function el({
  titleName: e = Ja,
  contentName: t = Za,
  componentLink: n = "dialog.html#title",
  titleId: r,
  descriptionId: o,
  contentElement: i
}) {
  const s = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, a = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ee(() => {
    var u;
    document.getElementById(r) || console.warn(s);
    const c = (u = i.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && c && (document.getElementById(o) || console.warn(a));
  });
}
const Nt = "focusScope.autoFocusOnMount", Vt = "focusScope.autoFocusOnUnmount", lo = { bubbles: !1, cancelable: !0 };
function tl(e, { select: t = !1 } = {}) {
  const n = Z();
  for (const r of e)
    if (ve(r, { select: t }), Z() !== n)
      return !0;
}
function nl(e) {
  const t = sr(e), n = co(t, e), r = co(t.reverse(), e);
  return [n, r];
}
function sr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function co(e, t) {
  for (const n of e)
    if (!ol(n, { upTo: t }))
      return n;
}
function ol(e, { upTo: t }) {
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
function rl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ve(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Z();
    e.focus({ preventScroll: !0 }), e !== n && rl(e) && t && e.select();
  }
}
const il = Kr(() => O([]));
function sl() {
  const e = il();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = uo(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = uo(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function uo(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function al(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ar = /* @__PURE__ */ P({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { currentRef: o, currentElement: i } = F(), s = O(null), a = sl(), l = So({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    U((u) => {
      if (!Ee)
        return;
      const d = i.value;
      if (!n.trapped)
        return;
      function f(g) {
        if (l.paused || !d)
          return;
        const b = g.target;
        d.contains(b) ? s.value = b : ve(s.value, { select: !0 });
      }
      function p(g) {
        if (l.paused || !d)
          return;
        const b = g.relatedTarget;
        b !== null && (d.contains(b) || ve(s.value, { select: !0 }));
      }
      function h(g) {
        d.contains(s.value) || ve(d);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", p);
      const v = new MutationObserver(h);
      d && v.observe(d, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", p), v.disconnect();
      });
    }), U(async (u) => {
      const d = i.value;
      if (await se(), !d)
        return;
      a.add(l);
      const f = Z();
      if (!d.contains(f)) {
        const h = new CustomEvent(Nt, lo);
        d.addEventListener(Nt, (v) => r("mountAutoFocus", v)), d.dispatchEvent(h), h.defaultPrevented || (tl(al(sr(d)), {
          select: !0
        }), Z() === f && ve(d));
      }
      u(() => {
        d.removeEventListener(Nt, (g) => r("mountAutoFocus", g));
        const h = new CustomEvent(Vt, lo), v = (g) => {
          r("unmountAutoFocus", g);
        };
        d.addEventListener(Vt, v), d.dispatchEvent(h), setTimeout(() => {
          h.defaultPrevented || ve(f ?? document.body, { select: !0 }), d.removeEventListener(Vt, v), a.remove(l);
        }, 0);
      });
    });
    function c(u) {
      if (!n.loop && !n.trapped || l.paused)
        return;
      const d = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, f = Z();
      if (d && f) {
        const p = u.currentTarget, [h, v] = nl(p);
        h && v ? !u.shiftKey && f === v ? (u.preventDefault(), n.loop && ve(h, { select: !0 })) : u.shiftKey && f === h && (u.preventDefault(), n.loop && ve(v, { select: !0 })) : f === p && u.preventDefault();
      }
    }
    return (u, d) => (A(), I(m(V), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: c
    }, {
      default: E(() => [
        $(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), lr = /* @__PURE__ */ P({
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
    const n = e, r = t, o = Se(), { forwardRef: i, currentElement: s } = F();
    return o.titleId || (o.titleId = He(void 0, "reka-dialog-title")), o.descriptionId || (o.descriptionId = He(void 0, "reka-dialog-description")), ee(() => {
      o.contentElement = s, Z() !== document.body && (o.triggerElement.value = Z());
    }), process.env.NODE_ENV !== "production" && el({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: s
    }), (a, l) => (A(), I(m(ar), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: l[5] || (l[5] = (c) => r("openAutoFocus", c)),
      onUnmountAutoFocus: l[6] || (l[6] = (c) => r("closeAutoFocus", c))
    }, {
      default: E(() => [
        D(m(Sn), R({
          id: m(o).contentId,
          ref: m(i),
          as: a.as,
          "as-child": a.asChild,
          "disable-outside-pointer-events": a.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": m(o).descriptionId,
          "aria-labelledby": m(o).titleId,
          "data-state": m(Qa)(m(o).open.value)
        }, a.$attrs, {
          onDismiss: l[0] || (l[0] = (c) => m(o).onOpenChange(!1)),
          onEscapeKeyDown: l[1] || (l[1] = (c) => r("escapeKeyDown", c)),
          onFocusOutside: l[2] || (l[2] = (c) => r("focusOutside", c)),
          onInteractOutside: l[3] || (l[3] = (c) => r("interactOutside", c)),
          onPointerDownOutside: l[4] || (l[4] = (c) => r("pointerDownOutside", c))
        }), {
          default: E(() => [
            $(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var ll = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Me = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), lt = {}, Wt = 0, cr = function(e) {
  return e && (e.host || cr(e.parentNode));
}, cl = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = cr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ul = function(e, t, n, r) {
  var o = cl(t, Array.isArray(e) ? e : [e]);
  lt[n] || (lt[n] = /* @__PURE__ */ new WeakMap());
  var i = lt[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || a.has(d) || (a.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        u(f);
      else
        try {
          var p = f.getAttribute(r), h = p !== null && p !== "false", v = (Me.get(f) || 0) + 1, g = (i.get(f) || 0) + 1;
          Me.set(f, v), i.set(f, g), s.push(f), v === 1 && h && at.set(f, !0), g === 1 && f.setAttribute(n, "true"), h || f.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", f, b);
        }
    });
  };
  return u(t), a.clear(), Wt++, function() {
    s.forEach(function(d) {
      var f = Me.get(d) - 1, p = i.get(d) - 1;
      Me.set(d, f), i.set(d, p), f || (at.has(d) || d.removeAttribute(r), at.delete(d)), p || d.removeAttribute(n);
    }), Wt--, Wt || (Me = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), lt = {});
  };
}, dl = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = ll(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), ul(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function ur(e) {
  let t;
  Y(() => ke(e), (n) => {
    n ? t = dl(n) : t && t();
  }), Co(() => {
    t && t();
  });
}
const fl = /* @__PURE__ */ P({
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
    const n = e, r = t, o = Se(), i = Tt(r), { forwardRef: s, currentElement: a } = F();
    return ur(a), (l, c) => (A(), I(lr, R({ ...n, ...m(i) }, {
      ref: m(s),
      "trap-focus": m(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var d;
        u.defaultPrevented || (u.preventDefault(), (d = m(o).triggerElement.value) == null || d.focus());
      }),
      onPointerDownOutside: c[1] || (c[1] = (u) => {
        const d = u.detail.originalEvent, f = d.button === 0 && d.ctrlKey === !0;
        (d.button === 2 || f) && u.preventDefault();
      }),
      onFocusOutside: c[2] || (c[2] = (u) => {
        u.preventDefault();
      })
    }), {
      default: E(() => [
        $(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), pl = /* @__PURE__ */ P({
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
    const n = e, o = Tt(t);
    F();
    const i = Se(), s = O(!1), a = O(!1);
    return (l, c) => (A(), I(lr, R({ ...n, ...m(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var d;
        u.defaultPrevented || (s.value || (d = m(i).triggerElement.value) == null || d.focus(), u.preventDefault()), s.value = !1, a.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = (u) => {
        var p;
        u.defaultPrevented || (s.value = !0, u.detail.originalEvent.type === "pointerdown" && (a.value = !0));
        const d = u.target;
        ((p = m(i).triggerElement.value) == null ? void 0 : p.contains(d)) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && a.value && u.preventDefault();
      })
    }), {
      default: E(() => [
        $(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ml = /* @__PURE__ */ P({
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
    const n = e, r = t, o = Se(), i = Tt(r), { forwardRef: s } = F();
    return (a, l) => (A(), I(m(Pt), {
      present: a.forceMount || m(o).open.value
    }, {
      default: E(() => [
        m(o).modal.value ? (A(), I(fl, R({
          key: 0,
          ref: m(s)
        }, { ...n, ...m(i), ...a.$attrs }), {
          default: E(() => [
            $(a.$slots, "default")
          ]),
          _: 3
        }, 16)) : (A(), I(pl, R({
          key: 1,
          ref: m(s)
        }, { ...n, ...m(i), ...a.$attrs }), {
          default: E(() => [
            $(a.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function jt(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function nn(e, t, n = ".", r) {
  if (!jt(t))
    return nn(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const i in e) {
    if (i === "__proto__" || i === "constructor")
      continue;
    const s = e[i];
    s != null && (r && r(o, i, s, n) || (Array.isArray(s) && Array.isArray(o[i]) ? o[i] = [...s, ...o[i]] : jt(s) && jt(o[i]) ? o[i] = nn(
      s,
      o[i],
      (n ? `${n}.` : "") + i.toString(),
      r
    ) : o[i] = s));
  }
  return o;
}
function hl(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => nn(n, r, "", e), {})
  );
}
const gl = hl(), vl = Ur(() => {
  const e = O(/* @__PURE__ */ new Map()), t = O(), n = T(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), r = Ot({
    scrollBody: O(!0)
  });
  let o = null;
  const i = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", so && (o == null || o()), t.value = void 0;
  };
  return Y(n, (s, a) => {
    var d;
    if (!Ee)
      return;
    if (!s) {
      a && i();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const l = window.innerWidth - document.documentElement.clientWidth, c = { padding: l, margin: 0 }, u = (d = r.scrollBody) != null && d.value ? typeof r.scrollBody.value == "object" ? gl({
      padding: r.scrollBody.value.padding === !0 ? l : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? l : r.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    l > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.body.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), so && (o = Kt(
      document,
      "touchmove",
      (f) => yl(f),
      { passive: !1 }
    )), se(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function dr(e) {
  const t = Math.random().toString(36).substring(2, 7), n = vl();
  n.value.set(t, e ?? !1);
  const r = T({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return Va(() => {
    n.value.delete(t);
  }), r;
}
function fr(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : fr(n);
  }
}
function yl(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && fr(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const wl = /* @__PURE__ */ P({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Se();
    return dr(!0), F(), (n, r) => (A(), I(m(V), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": m(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: E(() => [
        $(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), bl = /* @__PURE__ */ P({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Se(), { forwardRef: n } = F();
    return (r, o) => {
      var i;
      return (i = m(t)) != null && i.modal.value ? (A(), I(m(Pt), {
        key: 0,
        present: r.forceMount || m(t).open.value
      }, {
        default: E(() => [
          D(wl, R(r.$attrs, {
            ref: m(n),
            as: r.as,
            "as-child": r.asChild
          }), {
            default: E(() => [
              $(r.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : G("", !0);
    };
  }
}), xl = /* @__PURE__ */ P({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const n = Se();
    return (r, o) => (A(), I(m(V), R(t, {
      type: r.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (i) => m(n).onOpenChange(!1))
    }), {
      default: E(() => [
        $(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
function fo() {
  const e = O(), t = T(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : ke(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const po = "data-reka-collection-item";
function Ge(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const u = O(/* @__PURE__ */ new Map());
    o = {
      collectionRef: O(),
      itemMap: u
    }, xo(r, o);
  } else
    o = bo(r);
  const i = (u = !1) => {
    const d = o.collectionRef.value;
    if (!d)
      return [];
    const f = Array.from(d.querySelectorAll(`[${po}]`)), h = Array.from(o.itemMap.value.values()).sort(
      (v, g) => f.indexOf(v.ref) - f.indexOf(g.ref)
    );
    return u ? h : h.filter((v) => v.ref.dataset.disabled !== "");
  }, s = P({
    name: "CollectionSlot",
    setup(u, { slots: d }) {
      const { primitiveElement: f, currentElement: p } = fo();
      return Y(p, () => {
        o.collectionRef.value = p.value;
      }), () => we(tn, { ref: f }, d);
    }
  }), a = P({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(u, { slots: d, attrs: f }) {
      const { primitiveElement: p, currentElement: h } = fo();
      return U((v) => {
        if (h.value) {
          const g = Lr(h.value);
          o.itemMap.value.set(g, { ref: h.value, value: u.value }), v(() => o.itemMap.value.delete(g));
        }
      }), () => we(tn, { ...f, [po]: "", ref: p }, d);
    }
  }), l = T(() => Array.from(o.itemMap.value.values())), c = T(() => o.itemMap.value.size);
  return { getItems: i, reactiveItems: l, itemMapSize: c, CollectionSlot: s, CollectionItem: a };
}
function Cl(e) {
  return T(() => {
    var t;
    return qr(e) ? !!((t = ke(e)) != null && t.closest("form")) : !0;
  });
}
const [pr, _l] = ue("PopperRoot"), mr = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = O();
    return _l({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => $(n.$slots, "default");
  }
});
function hr(e) {
  const t = or("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, i) => {
      t.value = t.value + o;
      {
        const s = Z(), a = i.map((f) => {
          var p, h;
          return {
            ...f,
            textValue: ((p = f.value) == null ? void 0 : p.textValue) ?? ((h = f.ref.textContent) == null ? void 0 : h.trim()) ?? ""
          };
        }), l = a.find((f) => f.ref === s), c = a.map((f) => f.textValue), u = Sl(c, t.value, l == null ? void 0 : l.textValue), d = a.find((f) => f.textValue === u);
        return d && d.ref.focus(), d == null ? void 0 : d.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function El(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Sl(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = El(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const gr = /* @__PURE__ */ P({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = F(), o = pr();
    return Ao(() => {
      o.onAnchorChange(t.reference ?? r.value);
    }), (i, s) => (A(), I(m(V), {
      ref: m(n),
      as: i.as,
      "as-child": i.asChild
    }, {
      default: E(() => [
        $(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Al(e) {
  return e !== null;
}
function Ol(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var g, b, w;
      const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, u] = on(n), d = { start: "0%", center: "50%", end: "100%" }[u], f = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + a / 2, p = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
      let h = "", v = "";
      return c === "bottom" ? (h = s ? d : `${f}px`, v = `${-l}px`) : c === "top" ? (h = s ? d : `${f}px`, v = `${r.floating.height + l}px`) : c === "right" ? (h = `${-l}px`, v = s ? d : `${p}px`) : c === "left" && (h = `${r.floating.width + l}px`, v = s ? d : `${p}px`), { data: { x: h, y: v } };
    }
  };
}
function on(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function Pl(e) {
  const t = O(), n = T(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = T(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return ee(() => {
    const o = ke(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const i = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const a = s[0];
        let l, c;
        if ("borderBoxSize" in a) {
          const u = a.borderBoxSize, d = Array.isArray(u) ? u[0] : u;
          l = d.inlineSize, c = d.blockSize;
        } else
          l = o.offsetWidth, c = o.offsetHeight;
        t.value = { width: l, height: c };
      });
      return i.observe(o, { box: "border-box" }), () => i.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: r
  };
}
const Tl = {
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
}, [$l, Il] = ue("PopperContent"), vr = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ _e({
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
    ...Tl
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = pr(), { forwardRef: i, currentElement: s } = F(), a = O(), l = O(), { width: c, height: u } = Pl(l), d = T(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = T(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), p = T(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), h = T(() => ({
      padding: f.value,
      boundary: p.value.filter(Al),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: p.value.length > 0
    })), v = Gr(() => [
      Ca({
        mainAxis: n.sideOffset + u.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && eo({
        ...h.value
      }),
      n.avoidCollisions && _a({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Oa() : void 0,
        ...h.value
      }),
      !n.prioritizePosition && n.avoidCollisions && eo({
        ...h.value
      }),
      Ea({
        ...h.value,
        apply: ({ elements: M, rects: H, availableWidth: z, availableHeight: N }) => {
          const { width: q, height: X } = H.reference, W = M.floating.style;
          W.setProperty(
            "--reka-popper-available-width",
            `${z}px`
          ), W.setProperty(
            "--reka-popper-available-height",
            `${N}px`
          ), W.setProperty(
            "--reka-popper-anchor-width",
            `${q}px`
          ), W.setProperty(
            "--reka-popper-anchor-height",
            `${X}px`
          );
        }
      }),
      l.value && $a({ element: l.value, padding: n.arrowPadding }),
      Ol({
        arrowWidth: c.value,
        arrowHeight: u.value
      }),
      n.hideWhenDetached && Sa({ strategy: "referenceHidden", ...h.value })
    ]), g = T(() => n.reference ?? o.anchor.value), { floatingStyles: b, placement: w, isPositioned: y, middlewareData: x } = Ia(
      g,
      a,
      {
        strategy: n.positionStrategy,
        placement: d,
        whileElementsMounted: (...M) => xa(...M, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: v
      }
    ), C = T(
      () => on(w.value)[0]
    ), _ = T(
      () => on(w.value)[1]
    );
    Ao(() => {
      y.value && r("placed");
    });
    const S = T(
      () => {
        var M;
        return ((M = x.value.arrow) == null ? void 0 : M.centerOffset) !== 0;
      }
    ), k = O("");
    U(() => {
      s.value && (k.value = window.getComputedStyle(s.value).zIndex);
    });
    const B = T(() => {
      var M;
      return ((M = x.value.arrow) == null ? void 0 : M.x) ?? 0;
    }), L = T(() => {
      var M;
      return ((M = x.value.arrow) == null ? void 0 : M.y) ?? 0;
    });
    return Il({
      placedSide: C,
      onArrowChange: (M) => l.value = M,
      arrowX: B,
      arrowY: L,
      shouldHideArrow: S
    }), (M, H) => {
      var z, N, q;
      return A(), j("div", {
        ref_key: "floatingRef",
        ref: a,
        "data-reka-popper-content-wrapper": "",
        style: xt({
          ...m(b),
          transform: m(y) ? m(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: k.value,
          "--reka-popper-transform-origin": [
            (z = m(x).transformOrigin) == null ? void 0 : z.x,
            (N = m(x).transformOrigin) == null ? void 0 : N.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((q = m(x).hide) == null ? void 0 : q.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        D(m(V), R({ ref: m(i) }, M.$attrs, {
          "as-child": n.asChild,
          as: M.as,
          "data-side": C.value,
          "data-align": _.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: m(y) ? void 0 : "none"
          }
        }), {
          default: E(() => [
            $(M.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
function kl(e) {
  const t = Ot({
    nonce: O()
  });
  return T(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const Dl = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, Bl = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, Ll = /* @__PURE__ */ P({
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
    return F(), (n, r) => (A(), I(m(V), R(t, {
      width: n.width,
      height: n.height,
      viewBox: n.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: n.asChild ? void 0 : "none"
    }), {
      default: E(() => [
        $(n.$slots, "default", {}, () => [
          n.rounded ? (A(), j("path", Bl)) : (A(), j("path", Dl))
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
}), Ml = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, yr = /* @__PURE__ */ P({
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
    const { forwardRef: t } = F(), n = $l(), r = T(() => Ml[n.placedSide.value]);
    return (o, i) => {
      var s, a, l, c;
      return A(), j("span", {
        ref: (u) => {
          m(n).onArrowChange(u);
        },
        style: xt({
          position: "absolute",
          left: (s = m(n).arrowX) != null && s.value ? `${(a = m(n).arrowX) == null ? void 0 : a.value}px` : void 0,
          top: (l = m(n).arrowY) != null && l.value ? `${(c = m(n).arrowY) == null ? void 0 : c.value}px` : void 0,
          [r.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[m(n).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[m(n).placedSide.value],
          visibility: m(n).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [
        D(Ll, R(o.$attrs, {
          ref: m(t),
          style: {
            display: "block"
          },
          as: o.as,
          "as-child": o.asChild,
          rounded: o.rounded,
          width: o.width,
          height: o.height
        }), {
          default: E(() => [
            $(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "rounded", "width", "height"])
      ], 4);
    };
  }
});
let Ht = 0;
function Rl() {
  U((e) => {
    if (!Ee)
      return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? mo()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? mo()
    ), Ht++, e(() => {
      Ht === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), Ht--;
    });
  });
}
function mo() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
const Fl = /* @__PURE__ */ P({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (A(), I(m(_n), Ue(tt(t)), {
      default: E(() => [
        $(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Nl(e, t) {
  const n = or(!1, 300), r = O(null), o = Ra();
  function i() {
    r.value = null, n.value = !1;
  }
  function s(a, l) {
    const c = a.currentTarget, u = { x: a.clientX, y: a.clientY }, d = Vl(u, c.getBoundingClientRect()), f = Wl(u, d), p = jl(l.getBoundingClientRect()), h = zl([...f, ...p]);
    r.value = h, n.value = !0;
  }
  return U((a) => {
    if (e.value && t.value) {
      const l = (u) => s(u, t.value), c = (u) => s(u, e.value);
      e.value.addEventListener("pointerleave", l), t.value.addEventListener("pointerleave", c), a(() => {
        var u, d;
        (u = e.value) == null || u.removeEventListener("pointerleave", l), (d = t.value) == null || d.removeEventListener("pointerleave", c);
      });
    }
  }), U((a) => {
    var l;
    if (r.value) {
      const c = (u) => {
        var g, b;
        if (!r.value)
          return;
        const d = u.target, f = { x: u.clientX, y: u.clientY }, p = ((g = e.value) == null ? void 0 : g.contains(d)) || ((b = t.value) == null ? void 0 : b.contains(d)), h = !Hl(f, r.value), v = !!d.closest("[data-grace-area-trigger]");
        p ? i() : (h || v) && (i(), o.trigger());
      };
      (l = e.value) == null || l.ownerDocument.addEventListener("pointermove", c), a(() => {
        var u;
        return (u = e.value) == null ? void 0 : u.ownerDocument.removeEventListener("pointermove", c);
      });
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: o.on
  };
}
function Vl(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
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
function Wl(e, t, n = 5) {
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
function jl(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function Hl(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x, l = t[i].y, c = t[s].x, u = t[s].y;
    l > r != u > r && n < (c - a) * (r - l) / (u - l) + a && (o = !o);
  }
  return o;
}
function zl(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Kl(t);
}
function Kl(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
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
      const i = n[n.length - 1], s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
        n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
function ho(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
const Ul = /* @__PURE__ */ P({
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
      const i = window.HTMLSelectElement.prototype, a = Object.getOwnPropertyDescriptor(
        i,
        "value"
      ).set;
      if (r !== o && a) {
        const c = new Event("change", { bubbles: !0 });
        a.call(n.value, r), (l = n.value) == null || l.dispatchEvent(c);
      }
    }), (r, o) => (A(), I(m(er), { "as-child": "" }, {
      default: E(() => [
        Mr("select", R({
          ref_key: "selectElement",
          ref: n
        }, t), [
          $(r.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), ql = [" ", "Enter", "ArrowUp", "ArrowDown"], Gl = [" ", "Enter"], te = 10;
function rn(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((r) => sn(r, t, n)) : sn(e, t, n);
}
function sn(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : Ba(e, t);
}
const Yl = {
  key: 0,
  value: ""
}, [Ae, wr] = ue("SelectRoot"), Xl = /* @__PURE__ */ P({
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
    const n = e, r = t, { required: o, disabled: i, multiple: s, dir: a } = Ke(n), l = Ve(n, "modelValue", r, {
      defaultValue: n.defaultValue ?? (s.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    }), c = Ve(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), u = O(), d = O(), f = O({
      x: 0,
      y: 0
    }), p = T(() => {
      var y;
      return s.value && Array.isArray(l.value) ? ((y = l.value) == null ? void 0 : y.length) === 0 : io(l.value);
    });
    Ge({ isProvider: !0 });
    const h = La(a), v = Cl(u), g = O(/* @__PURE__ */ new Set()), b = T(() => Array.from(g.value).map((y) => y.value).join(";"));
    function w(y) {
      if (s.value) {
        const x = Array.isArray(l.value) ? [...l.value] : [], C = x.findIndex((_) => sn(_, y, n.by));
        C === -1 ? x.push(y) : x.splice(C, 1), l.value = [...x];
      } else
        l.value = y;
    }
    return wr({
      triggerElement: u,
      onTriggerChange: (y) => {
        u.value = y;
      },
      valueElement: d,
      onValueElementChange: (y) => {
        d.value = y;
      },
      contentId: "",
      modelValue: l,
      // @ts-expect-error Missing infer for AcceptableValue
      onValueChange: w,
      by: n.by,
      open: c,
      multiple: s,
      required: o,
      onOpenChange: (y) => {
        c.value = y;
      },
      dir: h,
      triggerPointerDownPosRef: f,
      disabled: i,
      isEmptyModelValue: p,
      optionsSet: g,
      onOptionAdd: (y) => g.value.add(y),
      onOptionRemove: (y) => g.value.delete(y)
    }), (y, x) => (A(), I(m(mr), null, {
      default: E(() => [
        $(y.$slots, "default", {
          modelValue: m(l),
          open: m(c)
        }),
        m(v) ? (A(), I(Ul, {
          key: b.value,
          "aria-hidden": "true",
          tabindex: "-1",
          multiple: m(s),
          required: m(o),
          name: y.name,
          autocomplete: y.autocomplete,
          disabled: m(i),
          value: m(l)
        }, {
          default: E(() => [
            m(io)(m(l)) ? (A(), j("option", Yl)) : G("", !0),
            (A(!0), j(bt, null, Oo(Array.from(g.value), (C) => (A(), j("option", R({
              key: C.value ?? "",
              ref_for: !0
            }, C), null, 16))), 128))
          ]),
          _: 1
        }, 8, ["multiple", "required", "name", "autocomplete", "disabled", "value"])) : G("", !0)
      ]),
      _: 3
    }));
  }
}), Ql = /* @__PURE__ */ P({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Ae(), { forwardRef: r, currentElement: o } = F(), i = T(() => {
      var f;
      return ((f = n.disabled) == null ? void 0 : f.value) || t.disabled;
    });
    n.contentId || (n.contentId = He(void 0, "reka-select-content")), ee(() => {
      n.onTriggerChange(o.value);
    });
    const { getItems: s } = Ge(), { search: a, handleTypeaheadSearch: l, resetTypeahead: c } = hr();
    function u() {
      i.value || (n.onOpenChange(!0), c());
    }
    function d(f) {
      u(), n.triggerPointerDownPosRef.value = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      };
    }
    return (f, p) => (A(), I(m(gr), {
      "as-child": "",
      reference: f.reference
    }, {
      default: E(() => {
        var h, v, g, b;
        return [
          D(m(V), {
            ref: m(r),
            role: "combobox",
            type: f.as === "button" ? "button" : void 0,
            "aria-controls": m(n).contentId,
            "aria-expanded": m(n).open.value || !1,
            "aria-required": (h = m(n).required) == null ? void 0 : h.value,
            "aria-autocomplete": "none",
            disabled: i.value,
            dir: (v = m(n)) == null ? void 0 : v.dir.value,
            "data-state": (g = m(n)) != null && g.open.value ? "open" : "closed",
            "data-disabled": i.value ? "" : void 0,
            "data-placeholder": (b = m(n).modelValue) != null && b.value ? void 0 : "",
            "as-child": f.asChild,
            as: f.as,
            onClick: p[0] || (p[0] = (w) => {
              var y;
              (y = w == null ? void 0 : w.currentTarget) == null || y.focus();
            }),
            onPointerdown: p[1] || (p[1] = (w) => {
              if (w.pointerType === "touch")
                return w.preventDefault();
              const y = w.target;
              y.hasPointerCapture(w.pointerId) && y.releasePointerCapture(w.pointerId), w.button === 0 && w.ctrlKey === !1 && (d(w), w.preventDefault());
            }),
            onPointerup: p[2] || (p[2] = Fe(
              (w) => {
                w.pointerType === "touch" && d(w);
              },
              ["prevent"]
            )),
            onKeydown: p[3] || (p[3] = (w) => {
              const y = m(a) !== "";
              !(w.ctrlKey || w.altKey || w.metaKey) && w.key.length === 1 && y && w.key === " " || (m(l)(w.key, m(s)()), m(ql).includes(w.key) && (u(), w.preventDefault()));
            })
          }, {
            default: E(() => [
              $(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }, 8, ["reference"]));
  }
}), Jl = /* @__PURE__ */ P({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (A(), I(m(_n), Ue(tt(t)), {
      default: E(() => [
        $(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [An, Zl] = ue("SelectItemAlignedPosition"), ec = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, { getItems: o } = Ge(), i = Ae(), s = Oe(), a = O(!1), l = O(!0), c = O(), { forwardRef: u, currentElement: d } = F(), { viewport: f, selectedItem: p, selectedItemText: h, focusSelectedItem: v } = s;
    function g() {
      if (i.triggerElement.value && i.valueElement.value && c.value && d.value && (f != null && f.value) && (p != null && p.value) && (h != null && h.value)) {
        const y = i.triggerElement.value.getBoundingClientRect(), x = d.value.getBoundingClientRect(), C = i.valueElement.value.getBoundingClientRect(), _ = h.value.getBoundingClientRect();
        if (i.dir.value !== "rtl") {
          const de = _.left - x.left, ge = C.left - de, Pe = y.left - ge, Te = y.width + Pe, Dt = Math.max(Te, x.width), Bt = window.innerWidth - te, Lt = ho(ge, te, Math.max(te, Bt - Dt));
          c.value.style.minWidth = `${Te}px`, c.value.style.left = `${Lt}px`;
        } else {
          const de = x.right - _.right, ge = window.innerWidth - C.right - de, Pe = window.innerWidth - y.right - ge, Te = y.width + Pe, Dt = Math.max(Te, x.width), Bt = window.innerWidth - te, Lt = ho(
            ge,
            te,
            Math.max(te, Bt - Dt)
          );
          c.value.style.minWidth = `${Te}px`, c.value.style.right = `${Lt}px`;
        }
        const S = o().map((de) => de.ref), k = window.innerHeight - te * 2, B = f.value.scrollHeight, L = window.getComputedStyle(d.value), M = Number.parseInt(
          L.borderTopWidth,
          10
        ), H = Number.parseInt(L.paddingTop, 10), z = Number.parseInt(
          L.borderBottomWidth,
          10
        ), N = Number.parseInt(
          L.paddingBottom,
          10
        ), q = M + H + B + N + z, X = Math.min(
          p.value.offsetHeight * 5,
          q
        ), W = window.getComputedStyle(f.value), re = Number.parseInt(W.paddingTop, 10), ie = Number.parseInt(
          W.paddingBottom,
          10
        ), Be = y.top + y.height / 2 - te, Ar = k - Be, kt = p.value.offsetHeight / 2, Or = p.value.offsetTop + kt, ot = M + H + Or, Pr = q - ot;
        if (ot <= Be) {
          const de = p.value === S[S.length - 1];
          c.value.style.bottom = "0px";
          const ge = d.value.clientHeight - f.value.offsetTop - f.value.offsetHeight, Pe = Math.max(
            Ar,
            kt + (de ? ie : 0) + ge + z
          ), Te = ot + Pe;
          c.value.style.height = `${Te}px`;
        } else {
          const de = p.value === S[0];
          c.value.style.top = "0px";
          const Pe = Math.max(
            Be,
            M + f.value.offsetTop + (de ? re : 0) + kt
          ) + Pr;
          c.value.style.height = `${Pe}px`, f.value.scrollTop = ot - Be + f.value.offsetTop;
        }
        c.value.style.margin = `${te}px 0`, c.value.style.minHeight = `${X}px`, c.value.style.maxHeight = `${k}px`, r("placed"), requestAnimationFrame(() => a.value = !0);
      }
    }
    const b = O("");
    ee(async () => {
      await se(), g(), d.value && (b.value = window.getComputedStyle(d.value).zIndex);
    });
    function w(y) {
      y && l.value === !0 && (g(), v == null || v(), l.value = !1);
    }
    return Yr(i.triggerElement, () => {
      g();
    }), Zl({
      contentWrapper: c,
      shouldExpandOnScrollRef: a,
      onScrollButtonChange: w
    }), (y, x) => (A(), j("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: xt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: b.value
      })
    }, [
      D(m(V), R({
        ref: m(u),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...y.$attrs, ...n }), {
        default: E(() => [
          $(y.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), tc = /* @__PURE__ */ P({
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
    const n = $t(e);
    return (r, o) => (A(), I(m(vr), R(m(n), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-select-content-available-width": "var(--reka-popper-available-width)",
      "--reka-select-content-available-height": "var(--reka-popper-available-height)",
      "--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
    } }), {
      default: E(() => [
        $(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), br = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Oe, xr] = ue("SelectContent"), nc = /* @__PURE__ */ P({
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
    const n = e, r = t, o = Ae();
    Rl(), dr(n.bodyLock);
    const { CollectionSlot: i, getItems: s } = Ge(), a = O();
    ur(a);
    const { search: l, handleTypeaheadSearch: c } = hr(), u = O(), d = O(), f = O(), p = O(!1), h = O(!1);
    function v() {
      d.value && a.value && ao([d.value, a.value]);
    }
    Y(p, () => {
      v();
    });
    const { onOpenChange: g, triggerPointerDownPosRef: b } = o;
    U((C) => {
      if (!a.value)
        return;
      let _ = { x: 0, y: 0 };
      const S = (B) => {
        var L, M;
        _ = {
          x: Math.abs(
            Math.round(B.pageX) - (((L = b.value) == null ? void 0 : L.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(B.pageY) - (((M = b.value) == null ? void 0 : M.y) ?? 0)
          )
        };
      }, k = (B) => {
        var L;
        B.pointerType !== "touch" && (_.x <= 10 && _.y <= 10 ? B.preventDefault() : (L = a.value) != null && L.contains(B.target) || g(!1), document.removeEventListener("pointermove", S), b.value = null);
      };
      b.value !== null && (document.addEventListener("pointermove", S), document.addEventListener("pointerup", k, {
        capture: !0,
        once: !0
      })), C(() => {
        document.removeEventListener("pointermove", S), document.removeEventListener("pointerup", k, {
          capture: !0
        });
      });
    });
    function w(C) {
      const _ = C.ctrlKey || C.altKey || C.metaKey;
      if (C.key === "Tab" && C.preventDefault(), !_ && C.key.length === 1 && c(C.key, s()), ["ArrowUp", "ArrowDown", "Home", "End"].includes(C.key)) {
        let k = [...s().map((B) => B.ref)];
        if (["ArrowUp", "End"].includes(C.key) && (k = k.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(C.key)) {
          const B = C.target, L = k.indexOf(B);
          k = k.slice(L + 1);
        }
        setTimeout(() => ao(k)), C.preventDefault();
      }
    }
    const y = T(() => n.position === "popper" ? n : {}), x = $t(y.value);
    return xr({
      content: a,
      viewport: u,
      onViewportChange: (C) => {
        u.value = C;
      },
      itemRefCallback: (C, _, S) => {
        const k = !h.value && !S, B = rn(o.modelValue.value, _, o.by);
        k && (o.isEmptyModelValue.value || B) && (h.value = !0, d.value = C);
      },
      selectedItem: d,
      selectedItemText: f,
      onItemLeave: () => {
        var C;
        (C = a.value) == null || C.focus();
      },
      itemTextRefCallback: (C, _, S) => {
        const k = !h.value && !S;
        (rn(o.modelValue.value, _, o.by) || k) && (f.value = C);
      },
      focusSelectedItem: v,
      position: n.position,
      isPositioned: p,
      searchRef: l
    }), (C, _) => (A(), I(m(i), null, {
      default: E(() => [
        D(m(ar), {
          "as-child": "",
          onMountAutoFocus: _[6] || (_[6] = Fe(() => {
          }, ["prevent"])),
          onUnmountAutoFocus: _[7] || (_[7] = (S) => {
            var k;
            r("closeAutoFocus", S), !S.defaultPrevented && ((k = m(o).triggerElement.value) == null || k.focus({ preventScroll: !0 }), S.preventDefault());
          })
        }, {
          default: E(() => [
            D(m(Sn), {
              "as-child": "",
              "disable-outside-pointer-events": "",
              onFocusOutside: _[2] || (_[2] = Fe(() => {
              }, ["prevent"])),
              onDismiss: _[3] || (_[3] = (S) => m(o).onOpenChange(!1)),
              onEscapeKeyDown: _[4] || (_[4] = (S) => r("escapeKeyDown", S)),
              onPointerDownOutside: _[5] || (_[5] = (S) => r("pointerDownOutside", S))
            }, {
              default: E(() => [
                (A(), I(Po(
                  C.position === "popper" ? tc : ec
                ), R({ ...C.$attrs, ...m(x) }, {
                  id: m(o).contentId,
                  ref: (S) => {
                    a.value = m(ke)(S);
                  },
                  role: "listbox",
                  "data-state": m(o).open.value ? "open" : "closed",
                  dir: m(o).dir.value,
                  style: {
                    // flex layout so we can place the scroll buttons properly
                    display: "flex",
                    flexDirection: "column",
                    // reset the outline by default as the content MAY get focused
                    outline: "none"
                  },
                  onContextmenu: _[0] || (_[0] = Fe(() => {
                  }, ["prevent"])),
                  onPlaced: _[1] || (_[1] = (S) => p.value = !0),
                  onKeydown: w
                }), {
                  default: E(() => [
                    $(C.$slots, "default")
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
}), oc = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return wr(e.context), xr(br), (n, r) => $(n.$slots, "default");
  }
}), rc = { key: 1 }, ic = /* @__PURE__ */ P({
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
    const n = e, o = rr(n, t), i = Ae(), s = O();
    ee(() => {
      s.value = new DocumentFragment();
    });
    const a = O(), l = T(() => n.forceMount || i.open.value);
    return (c, u) => {
      var d;
      return l.value ? (A(), I(m(Pt), {
        key: 0,
        ref_key: "presenceRef",
        ref: a,
        present: !0
      }, {
        default: E(() => [
          D(nc, Ue(tt({ ...m(o), ...c.$attrs })), {
            default: E(() => [
              $(c.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((d = a.value) != null && d.present) && s.value ? (A(), j("div", rc, [
        (A(), I(Eo, { to: s.value }, [
          D(oc, { context: m(i) }, {
            default: E(() => [
              $(c.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : G("", !0);
    };
  }
}), sc = /* @__PURE__ */ P({
  __name: "SelectArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    rounded: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e, n = Ae(), r = Oe(br);
    return (o, i) => m(n).open.value && m(r).position === "popper" ? (A(), I(m(yr), Ue(R({ key: 0 }, t)), {
      default: E(() => [
        $(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : G("", !0);
  }
}), [Cr, ac] = ue("SelectItem"), lc = /* @__PURE__ */ P({
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
    const n = e, r = t, { disabled: o } = Ke(n), i = Ae(), s = Oe(), { forwardRef: a, currentElement: l } = F(), { CollectionItem: c } = Ge(), u = T(() => {
      var x;
      return rn((x = i.modelValue) == null ? void 0 : x.value, n.value, i.by);
    }), d = O(!1), f = O(n.textValue ?? ""), p = He(void 0, "reka-select-item-text"), h = "select.select";
    async function v(x) {
      if (x.defaultPrevented)
        return;
      const C = { originalEvent: x, value: n.value };
      En(h, g, C);
    }
    async function g(x) {
      await se(), r("select", x), !x.defaultPrevented && (o.value || (i.onValueChange(n.value), i.multiple.value || i.onOpenChange(!1)));
    }
    async function b(x) {
      var C;
      await se(), !x.defaultPrevented && (o.value ? (C = s.onItemLeave) == null || C.call(s) : x.currentTarget.focus({ preventScroll: !0 }));
    }
    async function w(x) {
      var C;
      await se(), !x.defaultPrevented && x.currentTarget === Z() && ((C = s.onItemLeave) == null || C.call(s));
    }
    async function y(x) {
      var _;
      await se(), !(x.defaultPrevented || ((_ = s.searchRef) == null ? void 0 : _.value) !== "" && x.key === " ") && (Gl.includes(x.key) && v(x), x.key === " " && x.preventDefault());
    }
    if (n.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ee(() => {
      l.value && s.itemRefCallback(
        l.value,
        n.value,
        n.disabled
      );
    }), ac({
      value: n.value,
      disabled: o,
      textId: p,
      isSelected: u,
      onItemTextChange: (x) => {
        f.value = ((f.value || (x == null ? void 0 : x.textContent)) ?? "").trim();
      }
    }), (x, C) => (A(), I(m(c), {
      value: { textValue: f.value }
    }, {
      default: E(() => [
        D(m(V), {
          ref: m(a),
          role: "option",
          "aria-labelledby": m(p),
          "data-highlighted": d.value ? "" : void 0,
          "aria-selected": u.value,
          "data-state": u.value ? "checked" : "unchecked",
          "aria-disabled": m(o) || void 0,
          "data-disabled": m(o) ? "" : void 0,
          tabindex: m(o) ? void 0 : -1,
          as: x.as,
          "as-child": x.asChild,
          onFocus: C[0] || (C[0] = (_) => d.value = !0),
          onBlur: C[1] || (C[1] = (_) => d.value = !1),
          onPointerup: v,
          onPointerdown: C[2] || (C[2] = (_) => {
            _.currentTarget.focus({ preventScroll: !0 });
          }),
          onTouchend: C[3] || (C[3] = Fe(() => {
          }, ["prevent", "stop"])),
          onPointermove: b,
          onPointerleave: w,
          onKeydown: y
        }, {
          default: E(() => [
            $(x.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), cc = /* @__PURE__ */ P({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Cr();
    return (r, o) => m(n).isSelected.value ? (A(), I(m(V), R({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: E(() => [
        $(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : G("", !0);
  }
}), uc = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Ae(), r = Oe(), o = Cr(), { forwardRef: i, currentElement: s } = F(), a = T(() => {
      var l, c;
      return {
        value: o.value,
        disabled: o.disabled.value,
        textContent: ((l = s.value) == null ? void 0 : l.textContent) ?? ((c = o.value) == null ? void 0 : c.toString()) ?? ""
      };
    });
    return ee(() => {
      s.value && (o.onItemTextChange(s.value), r.itemTextRefCallback(
        s.value,
        o.value,
        o.disabled.value
      ), n.onOptionAdd(a.value));
    }), an(() => {
      n.onOptionRemove(a.value);
    }), (l, c) => (A(), I(m(V), R({
      id: m(o).textId,
      ref: m(i)
    }, { ...t, ...l.$attrs }), {
      default: E(() => [
        $(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), dc = /* @__PURE__ */ P({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = Ke(t), r = kl(n), o = Oe(), i = o.position === "item-aligned" ? An() : void 0, { forwardRef: s, currentElement: a } = F();
    ee(() => {
      o == null || o.onViewportChange(a.value);
    });
    const l = O(0);
    function c(u) {
      const d = u.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: p } = i ?? {};
      if (f != null && f.value && (p != null && p.value)) {
        const h = Math.abs(l.value - d.scrollTop);
        if (h > 0) {
          const v = window.innerHeight - te * 2, g = Number.parseFloat(
            p.value.style.minHeight
          ), b = Number.parseFloat(p.value.style.height), w = Math.max(g, b);
          if (w < v) {
            const y = w + h, x = Math.min(v, y), C = y - x;
            p.value.style.height = `${x}px`, p.value.style.bottom === "0px" && (d.scrollTop = C > 0 ? C : 0, p.value.style.justifyContent = "flex-end");
          }
        }
      }
      l.value = d.scrollTop;
    }
    return (u, d) => (A(), j(bt, null, [
      D(m(V), R({
        ref: m(s),
        "data-reka-select-viewport": "",
        role: "presentation"
      }, { ...u.$attrs, ...t }, {
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
        default: E(() => [
          $(u.$slots, "default")
        ]),
        _: 3
      }, 16),
      D(m(V), {
        as: "style",
        nonce: m(r)
      }, {
        default: E(() => d[0] || (d[0] = [
          ze(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")
        ])),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), _r = /* @__PURE__ */ P({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { getItems: r } = Ge(), o = Oe(), i = O(null);
    function s() {
      i.value !== null && (window.clearInterval(i.value), i.value = null);
    }
    U(() => {
      const c = r().map((u) => u.ref).find(
        (u) => u === Z()
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function a() {
      i.value === null && (i.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    function l() {
      var c;
      (c = o.onItemLeave) == null || c.call(o), i.value === null && (i.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return an(() => s()), (c, u) => {
      var d;
      return A(), I(m(V), R({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (d = c.$parent) == null ? void 0 : d.$props, {
        onPointerdown: a,
        onPointermove: l,
        onPointerleave: u[0] || (u[0] = () => {
          s();
        })
      }), {
        default: E(() => [
          $(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), fc = /* @__PURE__ */ P({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Oe(), n = t.position === "item-aligned" ? An() : void 0, { forwardRef: r, currentElement: o } = F(), i = O(!1);
    return U((s) => {
      var a, l;
      if ((a = t.viewport) != null && a.value && ((l = t.isPositioned) != null && l.value)) {
        let c = function() {
          i.value = u.scrollTop > 0;
        };
        const u = t.viewport.value;
        c(), u.addEventListener("scroll", c), s(() => u.removeEventListener("scroll", c));
      }
    }), Y(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (s, a) => i.value ? (A(), I(_r, {
      key: 0,
      ref: m(r),
      onAutoScroll: a[0] || (a[0] = () => {
        const { viewport: l, selectedItem: c } = m(t);
        l != null && l.value && (c != null && c.value) && (l.value.scrollTop = l.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: E(() => [
        $(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : G("", !0);
  }
}), pc = /* @__PURE__ */ P({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Oe(), n = t.position === "item-aligned" ? An() : void 0, { forwardRef: r, currentElement: o } = F(), i = O(!1);
    return U((s) => {
      var a, l;
      if ((a = t.viewport) != null && a.value && ((l = t.isPositioned) != null && l.value)) {
        let c = function() {
          const d = u.scrollHeight - u.clientHeight;
          i.value = Math.ceil(u.scrollTop) < d;
        };
        const u = t.viewport.value;
        c(), u.addEventListener("scroll", c), s(() => u.removeEventListener("scroll", c));
      }
    }), Y(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (s, a) => i.value ? (A(), I(_r, {
      key: 0,
      ref: m(r),
      onAutoScroll: a[0] || (a[0] = () => {
        const { viewport: l, selectedItem: c } = m(t);
        l != null && l.value && (c != null && c.value) && (l.value.scrollTop = l.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: E(() => [
        $(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : G("", !0);
  }
}), mc = /* @__PURE__ */ P({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = F(), o = Ae();
    ee(() => {
      o.valueElement = r;
    });
    const i = T(() => {
      var u;
      let a = [];
      const l = Array.from(o.optionsSet.value), c = (d) => l.find((f) => f.value === d);
      return Array.isArray(o.modelValue.value) ? a = o.modelValue.value.map((d) => {
        var f;
        return ((f = c(d)) == null ? void 0 : f.textContent) ?? "";
      }) : a = [((u = c(o.modelValue.value)) == null ? void 0 : u.textContent) ?? ""], a.filter(Boolean);
    }), s = T(() => i.value.length ? i.value.join(", ") : t.placeholder);
    return (a, l) => (A(), I(m(V), {
      ref: m(n),
      as: a.as,
      "as-child": a.asChild,
      style: { pointerEvents: "none" },
      "data-placeholder": i.value.length ? void 0 : t.placeholder
    }, {
      default: E(() => [
        $(a.$slots, "default", {
          selectedLabel: i.value,
          modelValue: m(o).modelValue.value
        }, () => [
          ze(wt(s.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-placeholder"]));
  }
}), hc = /* @__PURE__ */ P({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (A(), I(m(V), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: E(() => [
        $(t.$slots, "default", {}, () => [
          n[0] || (n[0] = ze("▼"))
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Er = "tooltip.open", [On, gc] = ue("TooltipProvider"), vc = /* @__PURE__ */ P({
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
    const t = e, { delayDuration: n, skipDelayDuration: r, disableHoverableContent: o, disableClosingTrigger: i, ignoreNonKeyboardFocus: s, disabled: a } = Ke(t);
    F();
    const l = O(!0), c = O(!1), { start: u, stop: d } = Wa(() => {
      l.value = !0;
    }, r, { immediate: !1 });
    return gc({
      isOpenDelayed: l,
      delayDuration: n,
      onOpen() {
        d(), l.value = !1;
      },
      onClose() {
        u();
      },
      isPointerInTransitRef: c,
      disableHoverableContent: o,
      disableClosingTrigger: i,
      disabled: a,
      ignoreNonKeyboardFocus: s
    }), (f, p) => $(f.$slots, "default");
  }
}), [It, yc] = ue("TooltipRoot"), wc = /* @__PURE__ */ P({
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
    const o = On(), i = T(() => n.disableHoverableContent ?? o.disableHoverableContent.value), s = T(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), a = T(() => n.disabled ?? o.disabled.value), l = T(() => n.delayDuration ?? o.delayDuration.value), c = T(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), u = Ve(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    Y(u, (y) => {
      o.onClose && (y ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Er))) : o.onClose());
    });
    const d = O(!1), f = O(), p = T(() => u.value ? d.value ? "delayed-open" : "instant-open" : "closed"), { start: h, stop: v } = Xr(() => {
      d.value = !0, u.value = !0;
    }, l, { immediate: !1 });
    function g() {
      v(), d.value = !1, u.value = !0;
    }
    function b() {
      v(), u.value = !1;
    }
    function w() {
      h();
    }
    return yc({
      contentId: "",
      open: u,
      stateAttribute: p,
      trigger: f,
      onTriggerChange(y) {
        f.value = y;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? w() : g();
      },
      onTriggerLeave() {
        i.value ? b() : v();
      },
      onOpen: g,
      onClose: b,
      disableHoverableContent: i,
      disableClosingTrigger: s,
      disabled: a,
      ignoreNonKeyboardFocus: c
    }), (y, x) => (A(), I(m(mr), null, {
      default: E(() => [
        $(y.$slots, "default", { open: m(u) })
      ]),
      _: 3
    }));
  }
}), bc = /* @__PURE__ */ P({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = It(), r = On();
    n.contentId || (n.contentId = He(void 0, "reka-tooltip-content"));
    const { forwardRef: o, currentElement: i } = F(), s = O(!1), a = O(!1), l = T(() => n.disabled.value ? {} : {
      click: v,
      focus: p,
      pointermove: d,
      pointerleave: f,
      pointerdown: u,
      blur: h
    });
    ee(() => {
      n.onTriggerChange(i.value);
    });
    function c() {
      setTimeout(() => {
        s.value = !1;
      }, 1);
    }
    function u() {
      s.value = !0, document.addEventListener("pointerup", c, { once: !0 });
    }
    function d(g) {
      g.pointerType !== "touch" && !a.value && !r.isPointerInTransitRef.value && (n.onTriggerEnter(), a.value = !0);
    }
    function f() {
      n.onTriggerLeave(), a.value = !1;
    }
    function p(g) {
      var b, w;
      s.value || n.ignoreNonKeyboardFocus.value && !((w = (b = g.target).matches) != null && w.call(b, ":focus-visible")) || n.onOpen();
    }
    function h() {
      n.onClose();
    }
    function v() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (g, b) => (A(), I(m(gr), {
      "as-child": "",
      reference: g.reference
    }, {
      default: E(() => [
        D(m(V), R({
          ref: m(o),
          "aria-describedby": m(n).open.value ? m(n).contentId : void 0,
          "data-state": m(n).stateAttribute.value,
          as: g.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Rr(l.value)), {
          default: E(() => [
            $(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
}), Sr = /* @__PURE__ */ P({
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
    const n = e, r = t, o = It(), { forwardRef: i } = F(), s = Fr(), a = T(() => {
      var u;
      return (u = s.default) == null ? void 0 : u.call(s, {});
    }), l = T(() => {
      var f;
      if (n.ariaLabel)
        return n.ariaLabel;
      let u = "";
      function d(p) {
        typeof p.children == "string" && p.type !== wo ? u += p.children : Array.isArray(p.children) && p.children.forEach((h) => d(h));
      }
      return (f = a.value) == null || f.forEach((p) => d(p)), u;
    }), c = T(() => {
      const { ariaLabel: u, ...d } = n;
      return d;
    });
    return ee(() => {
      Kt(window, "scroll", (u) => {
        const d = u.target;
        d != null && d.contains(o.trigger.value) && o.onClose();
      }), Kt(window, Er, o.onClose);
    }), (u, d) => (A(), I(m(Sn), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: d[0] || (d[0] = (f) => r("escapeKeyDown", f)),
      onPointerDownOutside: d[1] || (d[1] = (f) => {
        var p;
        m(o).disableClosingTrigger.value && ((p = m(o).trigger.value) != null && p.contains(f.target)) && f.preventDefault(), r("pointerDownOutside", f);
      }),
      onFocusOutside: d[2] || (d[2] = Fe(() => {
      }, ["prevent"])),
      onDismiss: d[3] || (d[3] = (f) => m(o).onClose())
    }, {
      default: E(() => [
        D(m(vr), R({
          ref: m(i),
          "data-state": m(o).stateAttribute.value
        }, { ...u.$attrs, ...c.value }, { style: {
          "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
          "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
          "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
        } }), {
          default: E(() => [
            $(u.$slots, "default"),
            D(m(er), {
              id: m(o).contentId,
              role: "tooltip"
            }, {
              default: E(() => [
                ze(wt(l.value), 1)
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
}), xc = /* @__PURE__ */ P({
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
    const n = $t(e), { forwardRef: r, currentElement: o } = F(), { trigger: i, onClose: s } = It(), a = On(), { isPointerInTransit: l, onPointerExit: c } = Nl(i, o);
    return a.isPointerInTransitRef = l, c(() => {
      s();
    }), (u, d) => (A(), I(Sr, R({ ref: m(r) }, m(n)), {
      default: E(() => [
        $(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cc = /* @__PURE__ */ P({
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
    const n = e, r = t, o = It(), i = rr(n, r), { forwardRef: s } = F();
    return (a, l) => (A(), I(m(Pt), {
      present: a.forceMount || m(o).open.value
    }, {
      default: E(() => [
        (A(), I(Po(m(o).disableHoverableContent.value ? Sr : xc), R({ ref: m(s) }, m(i)), {
          default: E(() => [
            $(a.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), _c = /* @__PURE__ */ P({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return F(), (n, r) => (A(), I(m(yr), Ue(tt(t)), {
      default: E(() => [
        $(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ec = /* @__PURE__ */ P({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (A(), I(m(_n), Ue(tt(t)), {
      default: E(() => [
        $(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sc = /* @__PURE__ */ P({
  __name: "AppDialog",
  setup(e) {
    return (t, n) => (A(), I(m(Ka), { class: "app-dialog" }, {
      default: E(() => [
        D(m(Ua), {
          class: "trigger",
          "as-child": ""
        }, {
          default: E(() => [
            $(t.$slots, "trigger", {}, void 0, !0)
          ]),
          _: 3
        }),
        D(m(Fl), null, {
          default: E(() => [
            D(m(bl), { class: "overlay" }),
            D(m(ml), { class: "content" }, {
              default: E(() => [
                D(Ds, null, {
                  default: E(() => [
                    $(t.$slots, "default", {}, void 0, !0),
                    D(m(xl), {
                      "aria-label": "Close",
                      "as-child": ""
                    }, {
                      default: E(() => [
                        D(Is, {
                          variant: "text",
                          icon: "material-symbols:close-rounded"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 3
                })
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
}), lu = /* @__PURE__ */ he(Sc, [["__scopeId", "data-v-f995c101"]]), Ac = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2027.6.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_2_00000039126939024823027680000017407098825655584941_'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2090.9%20125.8'%20style='enable-background:new%200%200%2090.9%20125.8;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{opacity:0.5;fill:%23C5FFFE;enable-background:new%20;}%20.st1{fill:%23C5FFFE;}%20.st2{clip-path:url(%23SVGID_00000160187787671385330840000011365503337429337474_);}%20%3c/style%3e%3cg%20id='Layer_1-2_00000138552681162585653310000003376327086979018656_'%3e%3cg%20id='Layer_2-2_00000089575700792075398270000016475314756721804971_'%3e%3cg%20id='Layer_1-2'%3e%3cg%20id='Layer_2-2'%3e%3cg%20id='Layer_1-2-2'%3e%3cg%20id='Logo'%3e%3cg%20id='Secondary_j'%3e%3crect%20x='71.7'%20y='14.4'%20class='st0'%20width='5.8'%20height='46.7'/%3e%3cpath%20class='st0'%20d='M43.5,115.3c-18.2,0-33.1-14.8-33.1-33.1s14.9-33.1,33.1-33.1S76.6,64,76.6,82.2S61.8,115.3,43.5,115.3z%20M43.5,55.1c-14.9,0-27.1,12.2-27.1,27.1s12.2,27.1,27.1,27.1s27.1-12.2,27.1-27.1S58.5,55.1,43.5,55.1z'/%3e%3ccircle%20class='st0'%20cx='42.2'%20cy='77.4'%20r='8.2'/%3e%3c/g%3e%3cg%20id='Main_j'%3e%3ccircle%20id='Dot3'%20class='st1'%20cx='74.6'%20cy='16.4'%20r='16.4'/%3e%3ccircle%20id='Dot2'%20class='st1'%20cx='74.5'%20cy='61.1'%20r='12'/%3e%3ccircle%20id='Dot'%20class='st1'%20cx='12'%20cy='82.2'%20r='12'/%3e%3cg%20id='SquareCircle'%3e%3cg%3e%3cdefs%3e%3crect%20id='SVGID_1_'%20y='81.1'%20width='86.5'%20height='44.7'/%3e%3c/defs%3e%3cclipPath%20id='SVGID_00000170246492928372989520000014416670913551062949_'%3e%3cuse%20xlink:href='%23SVGID_1_'%20style='overflow:visible;'/%3e%3c/clipPath%3e%3cg%20style='clip-path:url(%23SVGID_00000170246492928372989520000014416670913551062949_);'%3e%3cpath%20class='st1'%20d='M43.2,124.4c-23.9,0-43.3-19.4-43.3-43.3s19.4-43.3,43.3-43.3s43.3,19.4,43.3,43.3%20S67.1,124.4,43.2,124.4z%20M43.2,61.8C32.6,61.8,24,70.4,24,81.1s8.7,19.3,19.3,19.3s19.3-8.7,19.3-19.3%20S53.9,61.8,43.2,61.8z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3crect%20x='62.6'%20y='61.1'%20class='st1'%20width='23.9'%20height='20.9'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Oc = ["src"], Pc = /* @__PURE__ */ P({
  __name: "AppLogo",
  props: _e({
    size: null
  }, { size: "medium" }),
  setup(e) {
    return (t, n) => (A(), j("img", {
      src: m(Ac),
      class: K(["app-logo", t.size]),
      alt: "Jojko's logo'"
    }, null, 10, Oc));
  }
}), cu = /* @__PURE__ */ he(Pc, [["__scopeId", "data-v-6abc7d2e"]]), Tc = ["disabled"], $c = /* @__PURE__ */ P({
  __name: "AppSelectField",
  props: /* @__PURE__ */ To(_e({
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
    const t = zt(e, "modelValue"), n = zt(e, "open"), { createLocalWaveDirective: r } = zo, { vWave: o } = r({
      duration: 0.2
    });
    return (i, s) => {
      const a = dn;
      return A(), I(m(Xl), {
        open: n.value,
        "onUpdate:open": s[0] || (s[0] = (l) => n.value = l),
        modelValue: t.value,
        "onUpdate:modelValue": s[1] || (s[1] = (l) => t.value = l),
        name: i.name,
        multiple: i.multiple,
        required: i.required
      }, {
        default: E(() => [
          D(m(Ql), {
            "as-child": "",
            disabled: i.disabled
          }, {
            default: E(() => [
              $(i.$slots, "trigger", {}, () => [
                pt((A(), j("button", {
                  disabled: i.disabled,
                  class: K([i.$style.trigger, { [i.$style.placeholder]: !t.value }])
                }, [
                  D(m(mc), { placeholder: i.placeholder }, null, 8, ["placeholder"]),
                  D(m(hc), { "as-child": "" }, {
                    default: E(() => [
                      D(a, {
                        class: K(i.$style["select-icon"]),
                        icon: "material-symbols:expand-more-rounded"
                      }, null, 8, ["class"])
                    ]),
                    _: 1
                  })
                ], 10, Tc)), [
                  [m(o)]
                ])
              ])
            ]),
            _: 3
          }, 8, ["disabled"]),
          D(m(Jl), null, {
            default: E(() => [
              D(m(ic), {
                position: "item-aligned",
                class: K(i.$style.content)
              }, {
                default: E(() => [
                  D(m(fc)),
                  D(m(dc), {
                    class: K(i.$style.viewport)
                  }, {
                    default: E(() => [
                      (A(!0), j(bt, null, Oo(i.items, (l) => pt((A(), I(m(lc), {
                        key: JSON.stringify(l),
                        class: K(i.$style.item),
                        value: l.value
                      }, {
                        default: E(() => [
                          D(m(uc), null, {
                            default: E(() => [
                              $(i.$slots, "item", R({ ref_for: !0 }, l), () => [
                                ze(wt(l.label ?? l.value), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          D(m(cc))
                        ]),
                        _: 2
                      }, 1032, ["class", "value"])), [
                        [m(o)]
                      ])), 128))
                    ]),
                    _: 3
                  }, 8, ["class"]),
                  D(m(pc)),
                  D(m(sc))
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
}), Ic = "_item_d25a3ba", kc = "_content_5242832", Dc = "_viewport_34f6182", Bc = "_trigger_d455d52", Lc = "_error_123b438", Mc = "_select-icon_b60910e", Rc = "_placeholder_189bfa7", Fc = { item: Ic, content: kc, viewport: Dc, trigger: Bc, error: Lc, "select-icon": Mc, placeholder: Rc }, Nc = {
  $style: Fc
}, uu = /* @__PURE__ */ he($c, [["__cssModules", Nc]]), Vc = (...e) => {
  const t = Ie().proxy.$props, n = /* @__PURE__ */ Object.create(null);
  for (const r of e)
    if (typeof r == "string")
      n[r] = Ve(t, r, void 0, { eventName: `update:${r}`, passive: !0 });
    else {
      const [o, i = o, s = `update:${o}`, a = {}] = r;
      n[o] = Ve(t, i, void 0, { eventName: s, passive: !0, ...a });
    }
  return n;
}, Wc = ["type", "disabled", "placeholder"], jc = /* @__PURE__ */ P({
  __name: "AppTextField",
  props: _e({
    placeholder: null,
    disabled: { type: Boolean },
    error: null,
    iconBefore: null,
    icon: null,
    iconAfter: null,
    type: null,
    modelValue: null
  }, { disabled: !1 }),
  emits: ["update:modelValue"],
  setup(e) {
    const { modelValue: t = "" } = Vc("modelValue");
    return (n, r) => {
      const o = dn;
      return A(), j("div", {
        class: K([
          n.$style.wrapper,
          { [n.$style.interactive]: !n.disabled, [n.$style.error]: n.error }
        ])
      }, [
        n.iconBefore ?? n.icon ? (A(), I(o, {
          key: 0,
          icon: n.iconBefore ?? n.icon,
          class: K(n.$style["icon-before"])
        }, null, 8, ["icon", "class"])) : G("", !0),
        n.type !== "textarea" ? pt((A(), j("input", R({ key: 1 }, n.$attrs, {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => Nr(t) ? t.value = i : null),
          class: n.$style.input,
          type: n.type,
          disabled: n.disabled,
          placeholder: n.placeholder
        }), null, 16, Wc)), [
          [Vr, m(t)]
        ]) : G("", !0),
        n.iconAfter ? (A(), I(o, {
          key: 2,
          icon: n.iconAfter,
          class: K(n.$style["icon-after"])
        }, null, 8, ["icon", "class"])) : G("", !0)
      ], 2);
    };
  }
}), Hc = "_icon-before_fccb21f", zc = "_icon-after_eb3b2c5", Kc = "_wrapper_f54e2d9", Uc = "_interactive_3dc4aaf", qc = "_input_c63c5c2", Gc = "_error_692dad4", Yc = { "icon-before": Hc, "icon-after": zc, wrapper: Kc, interactive: Uc, input: qc, error: Gc }, Xc = {
  $style: Yc
}, du = /* @__PURE__ */ he(jc, [["__cssModules", Xc]]), Qc = /* @__PURE__ */ P({
  __name: "AppTooltip",
  props: /* @__PURE__ */ To(_e({
    position: null,
    align: null,
    ariaLabel: null
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
    }, n = zt(e, "open");
    return (r, o) => (A(), I(m(vc), { "delay-duration": 0 }, {
      default: E(() => [
        D(m(wc), {
          open: n.value,
          "onUpdate:open": o[0] || (o[0] = (i) => n.value = i)
        }, {
          default: E(() => [
            D(m(bc), { "as-child": "" }, {
              default: E(() => [
                $(r.$slots, "trigger")
              ]),
              _: 3
            }),
            D(m(Ec), null, {
              default: E(() => [
                D(m(Cc), R(r.$attrs, {
                  as: "div",
                  align: r.align,
                  position: t[r.position],
                  "align-offset": 20,
                  "aria-label": r.ariaLabel,
                  class: [r.$attrs.class, r.$style["app-tooltip"]]
                }), {
                  default: E(() => [
                    D(m(_c), {
                      class: K(r.$style.arrow)
                    }, null, 8, ["class"]),
                    $(r.$slots, "default")
                  ]),
                  _: 3
                }, 16, ["align", "position", "aria-label", "class"])
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
}), Jc = "_app-tooltip_6b0961c", Zc = "_slideIn_3e7dd36", eu = "_arrow_7e59031", tu = { "app-tooltip": Jc, slideIn: Zc, arrow: eu }, nu = {
  $style: tu
}, fu = /* @__PURE__ */ he(Qc, [["__cssModules", nu]]);
export {
  Is as AppButton,
  Ds as AppCard,
  su as AppChip,
  lu as AppDialog,
  dn as AppIcon,
  cu as AppLogo,
  uu as AppSelectField,
  du as AppTextField,
  fu as AppTooltip
};
