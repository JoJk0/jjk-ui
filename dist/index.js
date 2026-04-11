import * as io from "vue";
import { defineComponent as A, ref as E, shallowRef as In, onMounted as Z, watch as Y, onUnmounted as nt, h as Ie, nextTick as G, openBlock as _, createBlock as x, unref as f, normalizeClass as V, useCssVars as Yr, computed as $, withDirectives as dt, resolveDynamicComponent as Ft, withKeys as Pt, withCtx as b, createCommentVNode as U, renderSlot as S, createTextVNode as ye, toDisplayString as $e, mergeDefaults as qe, createElementBlock as H, inject as Wo, provide as Ho, Fragment as Je, customRef as Xr, toValue as pe, getCurrentScope as Ko, onScopeDispose as Uo, onBeforeUnmount as zo, getCurrentInstance as mt, shallowReadonly as Ve, toHandlerKey as Qr, camelize as Go, watchEffect as te, onUpdated as Jr, triggerRef as Zr, toRef as ei, toRefs as ge, Comment as ti, mergeProps as M, cloneVNode as ni, normalizeStyle as Rt, reactive as Yo, createVNode as B, Teleport as Xo, normalizeProps as ne, guardReactiveProps as fe, markRaw as oi, renderList as Tn, watchPostEffect as Qo, withModifiers as Te, isRef as fn, createElementVNode as le, toHandlers as ri, useModel as je, mergeModels as ot, Transition as ii, useAttrs as ai, useCssModule as si, vModelText as li, vModelDynamic as ui } from "vue";
import { useMouseInElement as di, createSharedComposable as Jo, unrefElement as He, defaultWindow as ci, useVModel as De, onKeyStroke as fi, createGlobalState as pi, useMounted as vi, computedEager as yi, useEventListener as It, useResizeObserver as mi, useTimeoutFn as gi, useTextareaAutosize as hi } from "@vueuse/core";
const Zo = /^[a-z0-9]+(-[a-z0-9]+)*$/, Lt = (e, n, t, o = "") => {
  const r = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (r.length < 2 || r.length > 3)
      return null;
    o = r.shift().slice(1);
  }
  if (r.length > 3 || !r.length)
    return null;
  if (r.length > 1) {
    const s = r.pop(), l = r.pop(), u = {
      // Allow provider without '@': "provider:prefix:name"
      provider: r.length > 0 ? r[0] : o,
      prefix: l,
      name: s
    };
    return n && !At(u) ? null : u;
  }
  const i = r[0], a = i.split("-");
  if (a.length > 1) {
    const s = {
      provider: o,
      prefix: a.shift(),
      name: a.join("-")
    };
    return n && !At(s) ? null : s;
  }
  if (t && o === "") {
    const s = {
      provider: o,
      prefix: "",
      name: i
    };
    return n && !At(s, t) ? null : s;
  }
  return null;
}, At = (e, n) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((n && e.prefix === "" || e.prefix) && e.name) : !1, er = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Tt = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Nt = Object.freeze({
  ...er,
  ...Tt
}), pn = Object.freeze({
  ...Nt,
  body: "",
  hidden: !1
});
function bi(e, n) {
  const t = {};
  !e.hFlip != !n.hFlip && (t.hFlip = !0), !e.vFlip != !n.vFlip && (t.vFlip = !0);
  const o = ((e.rotate || 0) + (n.rotate || 0)) % 4;
  return o && (t.rotate = o), t;
}
function ao(e, n) {
  const t = bi(e, n);
  for (const o in pn)
    o in Tt ? o in e && !(o in t) && (t[o] = Tt[o]) : o in n ? t[o] = n[o] : o in e && (t[o] = e[o]);
  return t;
}
function _i(e, n) {
  const t = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  function i(a) {
    if (t[a])
      return r[a] = [];
    if (!(a in r)) {
      r[a] = null;
      const s = o[a] && o[a].parent, l = s && i(s);
      l && (r[a] = [s].concat(l));
    }
    return r[a];
  }
  return Object.keys(t).concat(Object.keys(o)).forEach(i), r;
}
function wi(e, n, t) {
  const o = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function a(s) {
    i = ao(
      o[s] || r[s],
      i
    );
  }
  return a(n), t.forEach(a), ao(e, i);
}
function tr(e, n) {
  const t = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return t;
  e.not_found instanceof Array && e.not_found.forEach((r) => {
    n(r, null), t.push(r);
  });
  const o = _i(e);
  for (const r in o) {
    const i = o[r];
    i && (n(r, wi(e, r, i)), t.push(r));
  }
  return t;
}
const Ci = {
  provider: "",
  aliases: {},
  not_found: {},
  ...er
};
function on(e, n) {
  for (const t in n)
    if (t in e && typeof e[t] != typeof n[t])
      return !1;
  return !0;
}
function nr(e) {
  if (typeof e != "object" || e === null)
    return null;
  const n = e;
  if (typeof n.prefix != "string" || !e.icons || typeof e.icons != "object" || !on(e, Ci))
    return null;
  const t = n.icons;
  for (const r in t) {
    const i = t[r];
    if (
      // Name cannot be empty
      !r || // Must have body
      typeof i.body != "string" || // Check other props
      !on(
        i,
        pn
      )
    )
      return null;
  }
  const o = n.aliases || /* @__PURE__ */ Object.create(null);
  for (const r in o) {
    const i = o[r], a = i.parent;
    if (
      // Name cannot be empty
      !r || // Parent must be set and point to existing icon
      typeof a != "string" || !t[a] && !o[a] || // Check other props
      !on(
        i,
        pn
      )
    )
      return null;
  }
  return n;
}
const so = /* @__PURE__ */ Object.create(null);
function Si(e, n) {
  return {
    provider: e,
    prefix: n,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function Ze(e, n) {
  const t = so[e] || (so[e] = /* @__PURE__ */ Object.create(null));
  return t[n] || (t[n] = Si(e, n));
}
function or(e, n) {
  return nr(n) ? tr(n, (t, o) => {
    o ? e.icons[t] = o : e.missing.add(t);
  }) : [];
}
function qi(e, n, t) {
  try {
    if (typeof t.body == "string")
      return e.icons[n] = { ...t }, !0;
  } catch {
  }
  return !1;
}
let ct = !1;
function rr(e) {
  return typeof e == "boolean" && (ct = e), ct;
}
function Ei(e) {
  const n = typeof e == "string" ? Lt(e, !0, ct) : e;
  if (n) {
    const t = Ze(n.provider, n.prefix), o = n.name;
    return t.icons[o] || (t.missing.has(o) ? null : void 0);
  }
}
function Ai(e, n) {
  const t = Lt(e, !0, ct);
  if (!t)
    return !1;
  const o = Ze(t.provider, t.prefix);
  return n ? qi(o, t.name, n) : (o.missing.add(t.name), !0);
}
function Oi(e, n) {
  if (typeof e != "object")
    return !1;
  if (typeof n != "string" && (n = e.provider || ""), ct && !n && !e.prefix) {
    let r = !1;
    return nr(e) && (e.prefix = "", tr(e, (i, a) => {
      Ai(i, a) && (r = !0);
    })), r;
  }
  const t = e.prefix;
  if (!At({
    prefix: t,
    name: "a"
  }))
    return !1;
  const o = Ze(n, t);
  return !!or(o, e);
}
const ir = Object.freeze({
  width: null,
  height: null
}), ar = Object.freeze({
  // Dimensions
  ...ir,
  // Transformations
  ...Tt
}), xi = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Pi = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function lo(e, n, t) {
  if (n === 1)
    return e;
  if (t = t || 100, typeof e == "number")
    return Math.ceil(e * n * t) / t;
  if (typeof e != "string")
    return e;
  const o = e.split(xi);
  if (o === null || !o.length)
    return e;
  const r = [];
  let i = o.shift(), a = Pi.test(i);
  for (; ; ) {
    if (a) {
      const s = parseFloat(i);
      isNaN(s) ? r.push(i) : r.push(Math.ceil(s * n * t) / t);
    } else
      r.push(i);
    if (i = o.shift(), i === void 0)
      return r.join("");
    a = !a;
  }
}
function Ii(e, n = "defs") {
  let t = "";
  const o = e.indexOf("<" + n);
  for (; o >= 0; ) {
    const r = e.indexOf(">", o), i = e.indexOf("</" + n);
    if (r === -1 || i === -1)
      break;
    const a = e.indexOf(">", i);
    if (a === -1)
      break;
    t += e.slice(r + 1, i).trim(), e = e.slice(0, o).trim() + e.slice(a + 1);
  }
  return {
    defs: t,
    content: e
  };
}
function Ti(e, n) {
  return e ? "<defs>" + e + "</defs>" + n : n;
}
function $i(e, n, t) {
  const o = Ii(e);
  return Ti(o.defs, n + o.content + t);
}
const Di = (e) => e === "unset" || e === "undefined" || e === "none";
function Bi(e, n) {
  const t = {
    ...Nt,
    ...e
  }, o = {
    ...ar,
    ...n
  }, r = {
    left: t.left,
    top: t.top,
    width: t.width,
    height: t.height
  };
  let i = t.body;
  [t, o].forEach((g) => {
    const m = [], w = g.hFlip, P = g.vFlip;
    let C = g.rotate;
    w ? P ? C += 2 : (m.push(
      "translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"
    ), m.push("scale(-1 1)"), r.top = r.left = 0) : P && (m.push(
      "translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"
    ), m.push("scale(1 -1)"), r.top = r.left = 0);
    let h;
    switch (C < 0 && (C -= Math.floor(C / 4) * 4), C = C % 4, C) {
      case 1:
        h = r.height / 2 + r.top, m.unshift(
          "rotate(90 " + h.toString() + " " + h.toString() + ")"
        );
        break;
      case 2:
        m.unshift(
          "rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")"
        );
        break;
      case 3:
        h = r.width / 2 + r.left, m.unshift(
          "rotate(-90 " + h.toString() + " " + h.toString() + ")"
        );
        break;
    }
    C % 2 === 1 && (r.left !== r.top && (h = r.left, r.left = r.top, r.top = h), r.width !== r.height && (h = r.width, r.width = r.height, r.height = h)), m.length && (i = $i(
      i,
      '<g transform="' + m.join(" ") + '">',
      "</g>"
    ));
  });
  const a = o.width, s = o.height, l = r.width, u = r.height;
  let d, c;
  a === null ? (c = s === null ? "1em" : s === "auto" ? u : s, d = lo(c, l / u)) : (d = a === "auto" ? l : a, c = s === null ? lo(d, u / l) : s === "auto" ? u : s);
  const p = {}, v = (g, m) => {
    Di(m) || (p[g] = m.toString());
  };
  v("width", d), v("height", c);
  const y = [r.left, r.top, l, u];
  return p.viewBox = y.join(" "), {
    attributes: p,
    viewBox: y,
    body: i
  };
}
const ki = /\sid="(\S+)"/g, Mi = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Fi = 0;
function Ri(e, n = Mi) {
  const t = [];
  let o;
  for (; o = ki.exec(e); )
    t.push(o[1]);
  if (!t.length)
    return e;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((i) => {
    const a = typeof n == "function" ? n(i) : n + (Fi++).toString(), s = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"),
      "$1" + a + r + "$3"
    );
  }), e = e.replace(new RegExp(r, "g"), ""), e;
}
const vn = /* @__PURE__ */ Object.create(null);
function Li(e, n) {
  vn[e] = n;
}
function yn(e) {
  return vn[e] || vn[""];
}
function $n(e) {
  let n;
  if (typeof e.resources == "string")
    n = [e.resources];
  else if (n = e.resources, !(n instanceof Array) || !n.length)
    return null;
  return {
    // API hosts
    resources: n,
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
const Dn = /* @__PURE__ */ Object.create(null), st = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Ot = [];
for (; st.length > 0; )
  st.length === 1 || Math.random() > 0.5 ? Ot.push(st.shift()) : Ot.push(st.pop());
Dn[""] = $n({
  resources: ["https://api.iconify.design"].concat(Ot)
});
function Ni(e, n) {
  const t = $n(n);
  return t === null ? !1 : (Dn[e] = t, !0);
}
function Bn(e) {
  return Dn[e];
}
const Vi = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let uo = Vi();
function ji(e, n) {
  const t = Bn(e);
  if (!t)
    return 0;
  let o;
  if (!t.maxURL)
    o = 0;
  else {
    let r = 0;
    t.resources.forEach((a) => {
      r = Math.max(r, a.length);
    });
    const i = n + ".json?icons=";
    o = t.maxURL - r - t.path.length - i.length;
  }
  return o;
}
function Wi(e) {
  return e === 404;
}
const Hi = (e, n, t) => {
  const o = [], r = ji(e, n), i = "icons";
  let a = {
    type: i,
    provider: e,
    prefix: n,
    icons: []
  }, s = 0;
  return t.forEach((l, u) => {
    s += l.length + 1, s >= r && u > 0 && (o.push(a), a = {
      type: i,
      provider: e,
      prefix: n,
      icons: []
    }, s = l.length), a.icons.push(l);
  }), o.push(a), o;
};
function Ki(e) {
  if (typeof e == "string") {
    const n = Bn(e);
    if (n)
      return n.path;
  }
  return "/";
}
const Ui = (e, n, t) => {
  if (!uo) {
    t("abort", 424);
    return;
  }
  let o = Ki(n.provider);
  switch (n.type) {
    case "icons": {
      const i = n.prefix, s = n.icons.join(","), l = new URLSearchParams({
        icons: s
      });
      o += i + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const i = n.uri;
      o += i.slice(0, 1) === "/" ? i.slice(1) : i;
      break;
    }
    default:
      t("abort", 400);
      return;
  }
  let r = 503;
  uo(e + o).then((i) => {
    const a = i.status;
    if (a !== 200) {
      setTimeout(() => {
        t(Wi(a) ? "abort" : "next", a);
      });
      return;
    }
    return r = 501, i.json();
  }).then((i) => {
    if (typeof i != "object" || i === null) {
      setTimeout(() => {
        i === 404 ? t("abort", i) : t("next", r);
      });
      return;
    }
    setTimeout(() => {
      t("success", i);
    });
  }).catch(() => {
    t("next", r);
  });
}, zi = {
  prepare: Hi,
  send: Ui
};
function Gi(e) {
  const n = {
    loaded: [],
    missing: [],
    pending: []
  }, t = /* @__PURE__ */ Object.create(null);
  e.sort((r, i) => r.provider !== i.provider ? r.provider.localeCompare(i.provider) : r.prefix !== i.prefix ? r.prefix.localeCompare(i.prefix) : r.name.localeCompare(i.name));
  let o = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((r) => {
    if (o.name === r.name && o.prefix === r.prefix && o.provider === r.provider)
      return;
    o = r;
    const i = r.provider, a = r.prefix, s = r.name, l = t[i] || (t[i] = /* @__PURE__ */ Object.create(null)), u = l[a] || (l[a] = Ze(i, a));
    let d;
    s in u.icons ? d = n.loaded : a === "" || u.missing.has(s) ? d = n.missing : d = n.pending;
    const c = {
      provider: i,
      prefix: a,
      name: s
    };
    d.push(c);
  }), n;
}
function sr(e, n) {
  e.forEach((t) => {
    const o = t.loaderCallbacks;
    o && (t.loaderCallbacks = o.filter((r) => r.id !== n));
  });
}
function Yi(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const n = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!n.length)
      return;
    let t = !1;
    const o = e.provider, r = e.prefix;
    n.forEach((i) => {
      const a = i.icons, s = a.pending.length;
      a.pending = a.pending.filter((l) => {
        if (l.prefix !== r)
          return !0;
        const u = l.name;
        if (e.icons[u])
          a.loaded.push({
            provider: o,
            prefix: r,
            name: u
          });
        else if (e.missing.has(u))
          a.missing.push({
            provider: o,
            prefix: r,
            name: u
          });
        else
          return t = !0, !0;
        return !1;
      }), a.pending.length !== s && (t || sr([e], i.id), i.callback(
        a.loaded.slice(0),
        a.missing.slice(0),
        a.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let Xi = 0;
function Qi(e, n, t) {
  const o = Xi++, r = sr.bind(null, t, o);
  if (!n.pending.length)
    return r;
  const i = {
    id: o,
    icons: n,
    callback: e,
    abort: r
  };
  return t.forEach((a) => {
    (a.loaderCallbacks || (a.loaderCallbacks = [])).push(i);
  }), r;
}
function Ji(e, n = !0, t = !1) {
  const o = [];
  return e.forEach((r) => {
    const i = typeof r == "string" ? Lt(r, n, t) : r;
    i && o.push(i);
  }), o;
}
var Zi = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function ea(e, n, t, o) {
  const r = e.resources.length, i = e.random ? Math.floor(Math.random() * r) : e.index;
  let a;
  if (e.random) {
    let q = e.resources.slice(0);
    for (a = []; q.length > 1; ) {
      const O = Math.floor(Math.random() * q.length);
      a.push(q[O]), q = q.slice(0, O).concat(q.slice(O + 1));
    }
    a = a.concat(q);
  } else
    a = e.resources.slice(i).concat(e.resources.slice(0, i));
  const s = Date.now();
  let l = "pending", u = 0, d, c = null, p = [], v = [];
  typeof o == "function" && v.push(o);
  function y() {
    c && (clearTimeout(c), c = null);
  }
  function g() {
    l === "pending" && (l = "aborted"), y(), p.forEach((q) => {
      q.status === "pending" && (q.status = "aborted");
    }), p = [];
  }
  function m(q, O) {
    O && (v = []), typeof q == "function" && v.push(q);
  }
  function w() {
    return {
      startTime: s,
      payload: n,
      status: l,
      queriesSent: u,
      queriesPending: p.length,
      subscribe: m,
      abort: g
    };
  }
  function P() {
    l = "failed", v.forEach((q) => {
      q(void 0, d);
    });
  }
  function C() {
    p.forEach((q) => {
      q.status === "pending" && (q.status = "aborted");
    }), p = [];
  }
  function h(q, O, D) {
    const k = O !== "success";
    switch (p = p.filter((F) => F !== q), l) {
      case "pending":
        break;
      case "failed":
        if (k || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (O === "abort") {
      d = D, P();
      return;
    }
    if (k) {
      d = D, p.length || (a.length ? I() : P());
      return;
    }
    if (y(), C(), !e.random) {
      const F = e.resources.indexOf(q.resource);
      F !== -1 && F !== e.index && (e.index = F);
    }
    l = "completed", v.forEach((F) => {
      F(D);
    });
  }
  function I() {
    if (l !== "pending")
      return;
    y();
    const q = a.shift();
    if (q === void 0) {
      if (p.length) {
        c = setTimeout(() => {
          y(), l === "pending" && (C(), P());
        }, e.timeout);
        return;
      }
      P();
      return;
    }
    const O = {
      status: "pending",
      resource: q,
      callback: (D, k) => {
        h(O, D, k);
      }
    };
    p.push(O), u++, c = setTimeout(I, e.rotate), t(q, n, O.callback);
  }
  return setTimeout(I), w;
}
function lr(e) {
  const n = {
    ...Zi,
    ...e
  };
  let t = [];
  function o() {
    t = t.filter((s) => s().status === "pending");
  }
  function r(s, l, u) {
    const d = ea(
      n,
      s,
      l,
      (c, p) => {
        o(), u && u(c, p);
      }
    );
    return t.push(d), d;
  }
  function i(s) {
    return t.find((l) => s(l)) || null;
  }
  return {
    query: r,
    find: i,
    setIndex: (s) => {
      n.index = s;
    },
    getIndex: () => n.index,
    cleanup: o
  };
}
function co() {
}
const rn = /* @__PURE__ */ Object.create(null);
function ta(e) {
  if (!rn[e]) {
    const n = Bn(e);
    if (!n)
      return;
    const t = lr(n), o = {
      config: n,
      redundancy: t
    };
    rn[e] = o;
  }
  return rn[e];
}
function na(e, n, t) {
  let o, r;
  if (typeof e == "string") {
    const i = yn(e);
    if (!i)
      return t(void 0, 424), co;
    r = i.send;
    const a = ta(e);
    a && (o = a.redundancy);
  } else {
    const i = $n(e);
    if (i) {
      o = lr(i);
      const a = e.resources ? e.resources[0] : "", s = yn(a);
      s && (r = s.send);
    }
  }
  return !o || !r ? (t(void 0, 424), co) : o.query(n, r, t)().abort;
}
function fo() {
}
function oa(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Yi(e);
  }));
}
function ra(e) {
  const n = [], t = [];
  return e.forEach((o) => {
    (o.match(Zo) ? n : t).push(o);
  }), {
    valid: n,
    invalid: t
  };
}
function lt(e, n, t) {
  function o() {
    const r = e.pendingIcons;
    n.forEach((i) => {
      r && r.delete(i), e.icons[i] || e.missing.add(i);
    });
  }
  if (t && typeof t == "object")
    try {
      if (!or(e, t).length) {
        o();
        return;
      }
    } catch (r) {
      console.error(r);
    }
  o(), oa(e);
}
function po(e, n) {
  e instanceof Promise ? e.then((t) => {
    n(t);
  }).catch(() => {
    n(null);
  }) : n(e);
}
function ia(e, n) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(n).sort() : e.iconsToLoad = n, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: t, prefix: o } = e, r = e.iconsToLoad;
    if (delete e.iconsToLoad, !r || !r.length)
      return;
    const i = e.loadIcon;
    if (e.loadIcons && (r.length > 1 || !i)) {
      po(
        e.loadIcons(r, o, t),
        (d) => {
          lt(e, r, d);
        }
      );
      return;
    }
    if (i) {
      r.forEach((d) => {
        const c = i(d, o, t);
        po(c, (p) => {
          const v = p ? {
            prefix: o,
            icons: {
              [d]: p
            }
          } : null;
          lt(e, [d], v);
        });
      });
      return;
    }
    const { valid: a, invalid: s } = ra(r);
    if (s.length && lt(e, s, null), !a.length)
      return;
    const l = o.match(Zo) ? yn(t) : null;
    if (!l) {
      lt(e, a, null);
      return;
    }
    l.prepare(t, o, a).forEach((d) => {
      na(t, d, (c) => {
        lt(e, d.icons, c);
      });
    });
  }));
}
const aa = (e, n) => {
  const t = Ji(e, !0, rr()), o = Gi(t);
  if (!o.pending.length) {
    let l = !0;
    return n && setTimeout(() => {
      l && n(
        o.loaded,
        o.missing,
        o.pending,
        fo
      );
    }), () => {
      l = !1;
    };
  }
  const r = /* @__PURE__ */ Object.create(null), i = [];
  let a, s;
  return o.pending.forEach((l) => {
    const { provider: u, prefix: d } = l;
    if (d === s && u === a)
      return;
    a = u, s = d, i.push(Ze(u, d));
    const c = r[u] || (r[u] = /* @__PURE__ */ Object.create(null));
    c[d] || (c[d] = []);
  }), o.pending.forEach((l) => {
    const { provider: u, prefix: d, name: c } = l, p = Ze(u, d), v = p.pendingIcons || (p.pendingIcons = /* @__PURE__ */ new Set());
    v.has(c) || (v.add(c), r[u][d].push(c));
  }), i.forEach((l) => {
    const u = r[l.provider][l.prefix];
    u.length && ia(l, u);
  }), n ? Qi(n, o, i) : fo;
};
function sa(e, n) {
  const t = {
    ...e
  };
  for (const o in n) {
    const r = n[o], i = typeof r;
    o in ir ? (r === null || r && (i === "string" || i === "number")) && (t[o] = r) : i === typeof t[o] && (t[o] = o === "rotate" ? r % 4 : r);
  }
  return t;
}
const la = /[\s,]+/;
function ua(e, n) {
  n.split(la).forEach((t) => {
    switch (t.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function da(e, n = 0) {
  const t = e.replace(/^-?[0-9.]*/, "");
  function o(r) {
    for (; r < 0; )
      r += 4;
    return r % 4;
  }
  if (t === "") {
    const r = parseInt(e);
    return isNaN(r) ? 0 : o(r);
  } else if (t !== e) {
    let r = 0;
    switch (t) {
      case "%":
        r = 25;
        break;
      case "deg":
        r = 90;
    }
    if (r) {
      let i = parseFloat(e.slice(0, e.length - t.length));
      return isNaN(i) ? 0 : (i = i / r, i % 1 === 0 ? o(i) : 0);
    }
  }
  return n;
}
function ca(e, n) {
  let t = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const o in n)
    t += " " + o + '="' + n[o] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + t + ">" + e + "</svg>";
}
function fa(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function pa(e) {
  return "data:image/svg+xml," + fa(e);
}
function va(e) {
  return 'url("' + pa(e) + '")';
}
const vo = {
  ...ar,
  inline: !1
}, ya = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, ma = {
  display: "inline-block"
}, mn = {
  backgroundColor: "currentColor"
}, ur = {
  backgroundColor: "transparent"
}, yo = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, mo = {
  webkitMask: mn,
  mask: mn,
  background: ur
};
for (const e in mo) {
  const n = mo[e];
  for (const t in yo)
    n[e + t] = yo[t];
}
const xt = {};
["horizontal", "vertical"].forEach((e) => {
  const n = e.slice(0, 1) + "Flip";
  xt[e + "-flip"] = n, xt[e.slice(0, 1) + "-flip"] = n, xt[e + "Flip"] = n;
});
function go(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const ho = (e, n) => {
  const t = sa(vo, n), o = { ...ya }, r = n.mode || "svg", i = {}, a = n.style, s = typeof a == "object" && !(a instanceof Array) ? a : {};
  for (let g in n) {
    const m = n[g];
    if (m !== void 0)
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
          t[g] = m === !0 || m === "true" || m === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof m == "string" && ua(t, m);
          break;
        // Color: override style
        case "color":
          i.color = m;
          break;
        // Rotation as string
        case "rotate":
          typeof m == "string" ? t[g] = da(m) : typeof m == "number" && (t[g] = m);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          m !== !0 && m !== "true" && delete o["aria-hidden"];
          break;
        default: {
          const w = xt[g];
          w ? (m === !0 || m === "true" || m === 1) && (t[w] = !0) : vo[g] === void 0 && (o[g] = m);
        }
      }
  }
  const l = Bi(e, t), u = l.attributes;
  if (t.inline && (i.verticalAlign = "-0.125em"), r === "svg") {
    o.style = {
      ...i,
      ...s
    }, Object.assign(o, u);
    let g = 0, m = n.id;
    return typeof m == "string" && (m = m.replace(/-/g, "_")), o.innerHTML = Ri(l.body, m ? () => m + "ID" + g++ : "iconifyVue"), Ie("svg", o);
  }
  const { body: d, width: c, height: p } = e, v = r === "mask" || (r === "bg" ? !1 : d.indexOf("currentColor") !== -1), y = ca(d, {
    ...u,
    width: c + "",
    height: p + ""
  });
  return o.style = {
    ...i,
    "--svg": va(y),
    width: go(u.width),
    height: go(u.height),
    ...ma,
    ...v ? mn : ur,
    ...s
  }, Ie("span", o);
};
rr(!0);
Li("", zi);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const n = e.IconifyPreload, t = "Invalid IconifyPreload syntax.";
    typeof n == "object" && n !== null && (n instanceof Array ? n : [n]).forEach((o) => {
      try {
        // Check if item is an object and not null/array
        (typeof o != "object" || o === null || o instanceof Array || // Check for 'icons' and 'prefix'
        typeof o.icons != "object" || typeof o.prefix != "string" || // Add icon set
        !Oi(o)) && console.error(t);
      } catch {
        console.error(t);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const n = e.IconifyProviders;
    if (typeof n == "object" && n !== null)
      for (let t in n) {
        const o = "IconifyProviders[" + t + "] is invalid.";
        try {
          const r = n[t];
          if (typeof r != "object" || !r || r.resources === void 0)
            continue;
          Ni(t, r) || console.error(o);
        } catch {
          console.error(o);
        }
      }
  }
}
const ga = {
  ...Nt,
  body: ""
}, gn = A((e, { emit: n }) => {
  const t = E(null);
  function o() {
    t.value && (t.value.abort?.(), t.value = null);
  }
  const r = E(!!e.ssr), i = E(""), a = In(null);
  function s() {
    const u = e.icon;
    if (typeof u == "object" && u !== null && typeof u.body == "string")
      return i.value = "", {
        data: u
      };
    let d;
    if (typeof u != "string" || (d = Lt(u, !1, !0)) === null)
      return null;
    let c = Ei(d);
    if (!c) {
      const y = t.value;
      return (!y || y.name !== u) && (c === null ? t.value = {
        name: u
      } : t.value = {
        name: u,
        abort: aa([d], l)
      }), null;
    }
    o(), i.value !== u && (i.value = u, G(() => {
      n("load", u);
    }));
    const p = e.customise;
    if (p) {
      c = Object.assign({}, c);
      const y = p(c.body, d.name, d.prefix, d.provider);
      typeof y == "string" && (c.body = y);
    }
    const v = ["iconify"];
    return d.prefix !== "" && v.push("iconify--" + d.prefix), d.provider !== "" && v.push("iconify--" + d.provider), { data: c, classes: v };
  }
  function l() {
    const u = s();
    u ? u.data !== a.value?.data && (a.value = u) : a.value = null;
  }
  return r.value ? l() : Z(() => {
    r.value = !0, l();
  }), Y(() => e.icon, l), nt(o), () => {
    const u = a.value;
    if (!u)
      return ho(ga, e);
    let d = e;
    return u.classes && (d = {
      ...e,
      class: u.classes.join(" ")
    }), ho({
      ...Nt,
      ...u.data
    }, d);
  };
}, {
  props: [
    // Icon and render mode
    "icon",
    "mode",
    "ssr",
    // Layout and style
    "width",
    "height",
    "style",
    "color",
    "inline",
    // Transformations
    "rotate",
    "hFlip",
    "horizontalFlip",
    "vFlip",
    "verticalFlip",
    "flip",
    // Misc
    "id",
    "ariaHidden",
    "customise",
    "title"
  ],
  emits: ["load"]
}), ha = /* @__PURE__ */ A({
  __name: "AppIcon",
  props: {
    icon: null
  },
  setup(e) {
    return (n, t) => (_(), x(f(gn), {
      inline: "",
      icon: typeof e.icon == "string" ? e.icon : e.icon[1],
      class: V(n.$style.icon)
    }, null, 8, ["icon", "class"]));
  }
}), ba = "_icon_6dc929d", _a = { icon: ba }, oe = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, wa = {
  $style: _a
}, Vt = /* @__PURE__ */ oe(ha, [["__cssModules", wa]]);
var Ca = Object.defineProperty, Sa = Object.defineProperties, qa = Object.getOwnPropertyDescriptors, bo = Object.getOwnPropertySymbols, Ea = Object.prototype.hasOwnProperty, Aa = Object.prototype.propertyIsEnumerable, _o = (e, n, t) => n in e ? Ca(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Pe = (e, n) => {
  for (var t in n || (n = {}))
    Ea.call(n, t) && _o(e, t, n[t]);
  if (bo)
    for (var t of bo(n))
      Aa.call(n, t) && _o(e, t, n[t]);
  return e;
}, dr = (e, n) => Sa(e, qa(n)), Oa = {
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
}, xa = (e) => "config" in e && "globalProperties" in e.config, Pa = (e) => {
  let n;
  return e === "vue2" ? n = !1 : e === "vue3" ? n = !0 : n = xa(e), n ? {
    mounted: "mounted",
    updated: "updated"
  } : {
    mounted: "inserted",
    updated: "componentUpdated"
  };
}, cr = (e) => typeof e == "string" && e !== "auto", wo = (e, n) => {
  e.dataset.vWaveBoundary = cr(n) ? n : "true";
}, Ia = ({ borderTopLeftRadius: e, borderTopRightRadius: n, borderBottomLeftRadius: t, borderBottomRightRadius: o }, r) => {
  const i = document.createElement(r);
  return i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%", i.style.display = "block", i.style.position = "absolute", i.style.borderRadius = `${e} ${n} ${o} ${t}`, i.style.overflow = "hidden", i.style.pointerEvents = "none", i.style.webkitMaskImage = "-webkit-radial-gradient(white, black)", i.dataset.vWaveContainerInternal = "true", i;
}, Ta = ({ x: e, y: n }, t, o) => {
  const r = document.createElement("div");
  return r.style.position = "absolute", r.style.width = `${t}px`, r.style.height = `${t}px`, r.style.top = `${n}px`, r.style.left = `${e}px`, r.style.background = o.color, r.style.borderRadius = "50%", r.style.opacity = `${o.initialOpacity}`, r.style.transform = "translate(-50%,-50%) scale(0)", r.style.transition = `transform ${o.duration}s ${o.easing}, opacity ${o.duration}s ${o.easing}`, r;
};
function wt(e, n, t, o) {
  const r = e - t, i = n - o;
  return Math.sqrt(r * r + i * i);
}
function $a({ x: e, y: n }, { width: t, height: o }) {
  const r = wt(e, n, 0, 0), i = wt(e, n, t, 0), a = wt(e, n, 0, o), s = wt(e, n, t, o);
  return Math.max(r, i, a, s);
}
var Da = ({ x: e, y: n }, { top: t, left: o }) => ({
  x: e - o,
  y: n - t
}), Ba = (e, n) => {
  n.position === "static" && (["top", "left", "right", "bottom"].forEach((t) => {
    n[t] && n[t] !== "auto" && console.warn(
      "[v-wave]:",
      e,
      `You're using a \`static\` positioned element with a non-auto value (${n[t]}) for \`${t}\`.`,
      "It's position will be changed to relative while displaying the wave which might cause the element to visually jump."
    );
  }), e.dataset.originalPositionValue = e.style.position, e.style.position = "relative");
}, Co = (e) => {
  var n;
  e.style.position = (n = e.dataset.originalPositionValue) != null ? n : "", delete e.dataset.originalPositionValue;
}, kn = "vWaveCountInternal";
function ka(e) {
  const n = $t(e);
  fr(e, n + 1);
}
function So(e) {
  const n = $t(e);
  fr(e, n - 1);
}
function fr(e, n) {
  e.dataset[kn] = n.toString();
}
function $t(e) {
  var n;
  return Number.parseInt((n = e.dataset[kn]) != null ? n : "0", 10);
}
function qo(e) {
  delete e.dataset[kn];
}
var Ma = 2.05, hn = (e, n, t) => {
  if (t.disabled || t.respectDisabledAttribute && n.hasAttribute("disabled") || t.respectPrefersReducedMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const o = n.getBoundingClientRect(), r = window.getComputedStyle(n), i = Da(e, o), a = Ma * $a(i, o), s = n.querySelector("[data-v-wave-container-internal]"), l = s ?? Ia(r, t.tagName), u = Ta(i, a, t);
  ka(n), Ba(n, r), l.appendChild(u), s || n.appendChild(l);
  let d = !t.waitForRelease;
  const c = (g) => {
    typeof g < "u" && (document.removeEventListener("pointerup", c), document.removeEventListener("pointercancel", c)), d ? p() : d = !0;
  }, p = () => {
    u.style.transition = `opacity ${t.dissolveDuration}s linear`, u.style.opacity = "0", setTimeout(() => {
      u.remove(), So(n), $t(n) === 0 && (qo(n), l.remove(), Co(n));
    }, t.dissolveDuration * 1e3);
  };
  t.waitForRelease && (document.addEventListener("pointerup", c), document.addEventListener("pointercancel", c));
  const v = setTimeout(() => {
    document.removeEventListener("pointercancel", y), requestAnimationFrame(() => {
      u.style.transform = "translate(-50%,-50%) scale(1)", u.style.opacity = `${t.finalOpacity}`, setTimeout(() => c(), t.duration * 1e3);
    });
  }, t.cancellationPeriod), y = () => {
    clearTimeout(v), u.remove(), So(n), $t(n) === 0 && (qo(n), l.remove(), Co(n)), document.removeEventListener("pointerup", c), document.removeEventListener("pointercancel", c), document.removeEventListener("pointercancel", y);
  };
  document.addEventListener("pointercancel", y);
}, ut = /* @__PURE__ */ new WeakMap(), Fa = (e, n) => (t, o) => {
  if (!ut.has(n)) return;
  const r = Pe(Pe({}, e), ut.get(n));
  if (r.stopPropagation && t.stopPropagation(), r.trigger === !1) return hn(t, n, r);
  if (cr(r.trigger)) return;
  const i = n.querySelector('[data-v-wave-trigger="true"]');
  !i && r.trigger === !0 || i && !t.composedPath().includes(i) || hn(o ?? t, n, dr(Pe({}, r), { waitForRelease: o ? !1 : r.waitForRelease }));
}, Ra = (e = {}, n = "vue3") => {
  const t = Pe(Pe({}, Oa), e), o = Pa(n), r = (s) => {
    if (s.detail !== 0) return;
    const l = s.currentTarget, u = l.dataset.vWaveTrigger;
    document.querySelectorAll(
      `[data-v-wave-boundary="${u}"]`
    ).forEach((c) => {
      const p = s.type === "click";
      let v;
      if (p) {
        const g = l.getBoundingClientRect();
        v = {
          x: g.left + g.width / 2,
          y: g.top + g.height / 2
        };
      } else
        v = s;
      const y = Pe(Pe({}, t), ut.get(c));
      hn(v, c, dr(Pe({}, y), { waitForRelease: p ? !1 : y.waitForRelease }));
    });
  }, i = {
    [o.mounted](s, { value: l = {} }) {
      var u;
      ut.set(s, l), wo(s, (u = l?.trigger) != null ? u : t.trigger);
      const d = Fa(t, s);
      s.addEventListener("pointerdown", d), s.addEventListener("click", (c) => {
        if (c.detail !== 0) return;
        const p = s.getBoundingClientRect(), v = {
          x: p.left + p.width / 2,
          y: p.top + p.height / 2
        };
        d(c, v);
      });
    },
    [o.updated](s, { value: l = {} }) {
      var u;
      ut.set(s, l), wo(s, (u = l?.trigger) != null ? u : t.trigger);
    }
  }, a = {
    [o.mounted](s, { arg: l = "true" }) {
      s.dataset.vWaveTrigger = l, l !== "true" && (s.addEventListener("pointerdown", r), s.addEventListener("click", r));
    },
    [o.updated](s, { arg: l = "true" }) {
      s.dataset.vWaveTrigger = l, l === "true" ? (s.removeEventListener("pointerdown", r), s.removeEventListener("click", r)) : (s.addEventListener("pointerdown", r), s.addEventListener("click", r));
    }
  };
  return {
    wave: i,
    vWave: i,
    waveTrigger: a,
    vWaveTrigger: a
  };
}, La = {
  createLocalWaveDirective: Ra
}, pr = La;
const Na = /* @__PURE__ */ A({
  __name: "AppButton",
  props: qe({
    text: null,
    variant: null,
    icon: null,
    iconBefore: null,
    href: null,
    tag: { type: Function },
    disabled: { type: Boolean },
    iconAfter: null
  }, { variant: "secondary" }),
  setup(e) {
    Yr((c) => ({
      de4643a8: u.value,
      de455aea: d.value
    }));
    const { createLocalWaveDirective: n } = pr, { vWave: t } = n({
      duration: 0.2
    }), o = E(null), { elementX: r, elementY: i, elementWidth: a, elementHeight: s, isOutside: l } = di(o), u = $(
      () => l.value ? void 0 : `${r.value / a.value * 100}%`
    ), d = $(
      () => l.value ? void 0 : `${i.value / s.value * 100}%`
    );
    return (c, p) => {
      const v = Vt;
      return dt((_(), x(Ft(c.tag ?? "button"), {
        ref_key: "buttonEl",
        ref: o,
        href: c.href,
        disabled: c.disabled,
        tabindex: "0",
        class: V([
          "app-shape-squirdcle",
          c.$style["app-button"],
          c.$style[c.variant],
          {
            [c.$style["v-border-shine"]]: !(f(l) && c.disabled),
            [c.$style.disabled]: c.disabled
          }
        ]),
        onKeydown: [
          p[0] || (p[0] = Pt((y) => c.$emit("click", y), ["enter"])),
          p[1] || (p[1] = Pt((y) => c.$emit("click", y), ["space"]))
        ]
      }, {
        default: b(() => [
          c.icon ?? c.iconBefore ? (_(), x(v, {
            key: 0,
            icon: c.icon ?? c.iconBefore,
            class: V(c.$style["icon-before"])
          }, null, 8, ["icon", "class"])) : U("", !0),
          S(c.$slots, "default", {}, () => [
            ye($e(c.text), 1)
          ]),
          c.iconAfter ? (_(), x(v, {
            key: 1,
            icon: c.iconAfter,
            class: V(c.$style["icon-after"])
          }, null, 8, ["icon", "class"])) : U("", !0)
        ]),
        _: 3
      }, 40, ["href", "disabled", "class"])), [
        [f(t), { disabled: c.disabled }]
      ]);
    };
  }
}), Va = "_app-button_f9040b0", ja = "_disabled_3ecec54", Wa = "_v-border-shine_8419f80", Ha = "_primary_5785c37", Ka = "_secondary_31cb9f8", Ua = "_text_7e1c00c", za = "_icon-before_fb07300", Ga = "_icon-after_4d342ca", Ya = "_label_bdd07c7", Xa = "_active_380b0ba", Qa = { "app-button": Va, disabled: ja, "v-border-shine": Wa, primary: Ha, secondary: Ka, text: Ua, "icon-before": za, "icon-after": Ga, label: Ya, active: Xa }, Ja = {
  $style: Qa
}, Za = /* @__PURE__ */ oe(Na, [["__cssModules", Ja]]), es = /* @__PURE__ */ A({
  __name: "AppCard",
  props: qe({
    variant: null
  }, { variant: "raised" }),
  setup(e) {
    return (n, t) => (_(), H("div", {
      class: V([
        "app-shape-squircle",
        n.$style["app-card"],
        { [n.$style.variant]: n.variant }
      ])
    }, [
      S(n.$slots, "default")
    ], 2));
  }
}), ts = "_app-card_7a12d7d", ns = "_sunken_b1cf9a9", os = { "app-card": ts, sunken: ns }, rs = {
  $style: os
}, Mn = /* @__PURE__ */ oe(es, [["__cssModules", rs]]);
function Eo(e) {
  return typeof e == "string" ? `'${e}'` : new is().serialize(e);
}
const is = /* @__PURE__ */ (function() {
  class e {
    #e = /* @__PURE__ */ new Map();
    compare(t, o) {
      const r = typeof t, i = typeof o;
      return r === "string" && i === "string" ? t.localeCompare(o) : r === "number" && i === "number" ? t - o : String.prototype.localeCompare.call(this.serialize(t, !0), this.serialize(o, !0));
    }
    serialize(t, o) {
      if (t === null) return "null";
      switch (typeof t) {
        case "string":
          return o ? t : `'${t}'`;
        case "bigint":
          return `${t}n`;
        case "object":
          return this.$object(t);
        case "function":
          return this.$function(t);
      }
      return String(t);
    }
    serializeObject(t) {
      const o = Object.prototype.toString.call(t);
      if (o !== "[object Object]") return this.serializeBuiltInType(o.length < 10 ? `unknown:${o}` : o.slice(8, -1), t);
      const r = t.constructor, i = r === Object || r === void 0 ? "" : r.name;
      if (i !== "" && globalThis[i] === r) return this.serializeBuiltInType(i, t);
      if (typeof t.toJSON == "function") {
        const a = t.toJSON();
        return i + (a !== null && typeof a == "object" ? this.$object(a) : `(${this.serialize(a)})`);
      }
      return this.serializeObjectEntries(i, Object.entries(t));
    }
    serializeBuiltInType(t, o) {
      const r = this["$" + t];
      if (r) return r.call(this, o);
      if (typeof o?.entries == "function") return this.serializeObjectEntries(t, o.entries());
      throw new Error(`Cannot serialize ${t}`);
    }
    serializeObjectEntries(t, o) {
      const r = Array.from(o).sort((a, s) => this.compare(a[0], s[0]));
      let i = `${t}{`;
      for (let a = 0; a < r.length; a++) {
        const [s, l] = r[a];
        i += `${this.serialize(s, !0)}:${this.serialize(l)}`, a < r.length - 1 && (i += ",");
      }
      return i + "}";
    }
    $object(t) {
      let o = this.#e.get(t);
      return o === void 0 && (this.#e.set(t, `#${this.#e.size}`), o = this.serializeObject(t), this.#e.set(t, o)), o;
    }
    $function(t) {
      const o = Function.prototype.toString.call(t);
      return o.slice(-15) === "[native code] }" ? `${t.name || ""}()[native]` : `${t.name}(${t.length})${o.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(t) {
      let o = "[";
      for (let r = 0; r < t.length; r++) o += this.serialize(t[r]), r < t.length - 1 && (o += ",");
      return o + "]";
    }
    $Date(t) {
      try {
        return `Date(${t.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(t) {
      return `ArrayBuffer[${new Uint8Array(t).join(",")}]`;
    }
    $Set(t) {
      return `Set${this.$Array(Array.from(t).sort((o, r) => this.compare(o, r)))}`;
    }
    $Map(t) {
      return this.serializeObjectEntries("Map", t.entries());
    }
  }
  for (const n of ["Error", "RegExp", "URL"]) e.prototype["$" + n] = function(t) {
    return `${n}(${t})`;
  };
  for (const n of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + n] = function(t) {
    return `${n}[${t.join(",")}]`;
  };
  for (const n of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + n] = function(t) {
    return `${n}[${t.join("n,")}${t.length > 0 ? "n" : ""}]`;
  };
  return e;
})();
function ft(e, n) {
  return e === n || Eo(e) === Eo(n);
}
function Ao(e, n = Number.NEGATIVE_INFINITY, t = Number.POSITIVE_INFINITY) {
  return Math.min(t, Math.max(n, e));
}
function ee(e, n) {
  const t = typeof e == "string" && !n ? `${e}Context` : n, o = Symbol(t);
  return [(a) => {
    const s = Wo(o, a);
    if (s || s === null) return s;
    throw new Error(`Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (a) => (Ho(o, a), a)];
}
function X() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function Fn(e, n, t) {
  const o = t.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: t
  });
  n && o.addEventListener(e, n, { once: !0 }), o.dispatchEvent(r);
}
function et(e) {
  return e == null;
}
function Oo(e, n) {
  return et(e) ? !1 : Array.isArray(e) ? e.some((t) => ft(t, n)) : ft(e, n);
}
function Rn(e) {
  return e ? e.flatMap((n) => n.type === Je ? Rn(n.children) : [n]) : [];
}
const as = ["INPUT", "TEXTAREA"];
function xo(e, n, t, o = {}) {
  if (!n || o.enableIgnoredElement && as.includes(n.nodeName)) return null;
  const { arrowKeyOptions: r = "both", attributeName: i = "[data-reka-collection-item]", itemsArray: a = [], loop: s = !0, dir: l = "ltr", preventScroll: u = !0, focus: d = !1 } = o, [c, p, v, y, g, m] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], w = v || y, P = c || p;
  if (!g && !m && (!w && !P || r === "vertical" && P || r === "horizontal" && w)) return null;
  const C = t ? Array.from(t.querySelectorAll(i)) : a;
  if (!C.length) return null;
  u && e.preventDefault();
  let h = null;
  return P || w ? h = vr(C, n, {
    goForward: w ? y : l === "ltr" ? c : p,
    loop: s
  }) : g ? h = C.at(0) || null : m && (h = C.at(-1) || null), d && h?.focus(), h;
}
function vr(e, n, t, o = e.includes(n) ? e.length : e.length + 1) {
  if (--o === 0) return null;
  const r = e.indexOf(n);
  let i;
  if (r === -1 ? i = t.goForward ? 0 : e.length - 1 : i = t.goForward ? r + 1 : r - 1, !t.loop && (i < 0 || i >= e.length)) return null;
  const a = (i + e.length) % e.length, s = e[a];
  return s ? s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false" ? vr(e, s, t, o) : s : null;
}
const [jt] = ee("ConfigProvider");
function Wt(e, n) {
  return Ko() ? (Uo(e, n), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function ss() {
  const e = /* @__PURE__ */ new Set(), n = (i) => {
    e.delete(i);
  };
  return {
    on: (i) => {
      e.add(i);
      const a = () => n(i);
      return Wt(a), { off: a };
    },
    off: n,
    trigger: (...i) => Promise.all(Array.from(e).map((a) => a(...i))),
    clear: () => {
      e.clear();
    }
  };
}
const Ke = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function ls(e) {
  return mt();
}
function yr(e, n = 1e4) {
  return Xr((t, o) => {
    let r = pe(e), i;
    const a = () => setTimeout(() => {
      r = pe(e), o();
    }, pe(n));
    return Wt(() => {
      clearTimeout(i);
    }), {
      get() {
        return t(), r;
      },
      set(s) {
        r = s, o(), clearTimeout(i), i = a();
      }
    };
  });
}
function us(e, n) {
  ls() && zo(e, n);
}
function ds(e, n, t = {}) {
  const { immediate: o = !0, immediateCallback: r = !1 } = t, i = In(!1);
  let a;
  function s() {
    a && (clearTimeout(a), a = void 0);
  }
  function l() {
    i.value = !1, s();
  }
  function u(...d) {
    r && e(), s(), i.value = !0, a = setTimeout(() => {
      i.value = !1, a = void 0, e(...d);
    }, pe(n));
  }
  return o && (i.value = !0, Ke && u()), Wt(l), {
    isPending: Ve(i),
    start: u,
    stop: l
  };
}
function an(e) {
  if (e === null || typeof e != "object")
    return !1;
  const n = Object.getPrototypeOf(e);
  return n !== null && n !== Object.prototype && Object.getPrototypeOf(n) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function bn(e, n, t = ".", o) {
  if (!an(n))
    return bn(e, {}, t, o);
  const r = Object.assign({}, n);
  for (const i in e) {
    if (i === "__proto__" || i === "constructor")
      continue;
    const a = e[i];
    a != null && (o && o(r, i, a, t) || (Array.isArray(a) && Array.isArray(r[i]) ? r[i] = [...a, ...r[i]] : an(a) && an(r[i]) ? r[i] = bn(
      a,
      r[i],
      (t ? `${t}.` : "") + i.toString(),
      o
    ) : r[i] = a));
  }
  return r;
}
function cs(e) {
  return (...n) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    n.reduce((t, o) => bn(t, o, "", e), {})
  );
}
const mr = cs(), fs = Jo(() => {
  const e = E(/* @__PURE__ */ new Map()), n = E(), t = $(() => {
    for (const i of e.value.values()) if (i) return !0;
    return !1;
  }), o = jt({ scrollBody: E(!0) }), r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = n.value ?? "", n.value = void 0;
  };
  return Y(t, (i, a) => {
    if (!Ke) return;
    if (!i) {
      a && r();
      return;
    }
    n.value === void 0 && (n.value = document.body.style.overflow);
    const s = window.innerWidth - document.documentElement.clientWidth, l = {
      padding: s,
      margin: 0
    }, u = o.scrollBody?.value ? typeof o.scrollBody.value == "object" ? mr({
      padding: o.scrollBody.value.padding === !0 ? s : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? s : o.scrollBody.value.margin
    }, l) : l : {
      padding: 0,
      margin: 0
    };
    s > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.documentElement.style.setProperty("--scrollbar-width", `${s}px`), document.body.style.overflow = "hidden"), G(() => {
      t.value && (document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden");
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function Ln(e) {
  const n = Math.random().toString(36).substring(2, 7), t = fs();
  t.value.set(n, e ?? !1);
  const o = $({
    get: () => t.value.get(n) ?? !1,
    set: (r) => t.value.set(n, r)
  });
  return us(() => {
    t.value.delete(n);
  }), o;
}
function Ht(e) {
  const n = jt({ dir: E("ltr") });
  return $(() => e?.value || n.dir?.value || "ltr");
}
function gt(e) {
  const n = mt(), t = n?.type.emits, o = {};
  return t?.length || console.warn(`No emitted event found. Please check component: ${n?.type.__name}`), t?.forEach((r) => {
    o[Qr(Go(r))] = (...i) => e(r, ...i);
  }), o;
}
let sn = 0;
function gr() {
  te((e) => {
    if (!Ke) return;
    const n = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", n[0] ?? Po()), document.body.insertAdjacentElement("beforeend", n[1] ?? Po()), sn++, e(() => {
      sn === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((t) => t.remove()), sn--;
    });
  });
}
function Po() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function hr(e) {
  return $(() => pe(e) ? !!He(e)?.closest("form") : !0);
}
function R() {
  const e = mt(), n = E(), t = $(() => o());
  Jr(() => {
    t.value !== o() && Zr(n);
  });
  function o() {
    return n.value && "$el" in n.value && ["#text", "#comment"].includes(n.value.$el.nodeName) ? n.value.$el.nextElementSibling : He(n);
  }
  const r = Object.assign({}, e.exposed), i = {};
  for (const s in e.props) Object.defineProperty(i, s, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[s]
  });
  if (Object.keys(r).length > 0) for (const s in r) Object.defineProperty(i, s, {
    enumerable: !0,
    configurable: !0,
    get: () => r[s]
  });
  Object.defineProperty(i, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = i;
  function a(s) {
    if (n.value = s, !!s && (Object.defineProperty(i, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), !(s instanceof Element) && !Object.prototype.hasOwnProperty.call(s, "$el"))) {
      const l = s.$.exposed, u = Object.assign({}, i);
      for (const d in l) Object.defineProperty(u, d, {
        enumerable: !0,
        configurable: !0,
        get: () => l[d]
      });
      e.exposed = u;
    }
  }
  return {
    forwardRef: a,
    currentRef: n,
    currentElement: t
  };
}
function Kt(e) {
  const n = mt(), t = Object.keys(n?.type.props ?? {}).reduce((r, i) => {
    const a = (n?.type.props[i]).default;
    return a !== void 0 && (r[i] = a), r;
  }, {}), o = ei(e);
  return $(() => {
    const r = {}, i = n?.vnode.props ?? {};
    return Object.keys(i).forEach((a) => {
      r[Go(a)] = i[a];
    }), Object.keys({
      ...t,
      ...r
    }).reduce((a, s) => (o.value[s] !== void 0 && (a[s] = o.value[s]), a), {});
  });
}
function rt(e, n) {
  const t = Kt(e), o = n ? gt(n) : {};
  return $(() => ({
    ...t.value,
    ...o
  }));
}
function ps(e, n) {
  const t = yr(!1, 300);
  Wt(() => {
    t.value = !1;
  });
  const o = E(null), r = /* @__PURE__ */ ss();
  function i() {
    o.value = null, t.value = !1;
  }
  function a(s, l) {
    const u = s.currentTarget, d = {
      x: s.clientX,
      y: s.clientY
    }, c = vs(d, u.getBoundingClientRect()), p = ys(d, c, 1), v = ms(l.getBoundingClientRect()), y = hs([...p, ...v]);
    o.value = y, t.value = !0;
  }
  return te((s) => {
    if (e.value && n.value) {
      const l = (d) => a(d, n.value), u = (d) => a(d, e.value);
      e.value.addEventListener("pointerleave", l), n.value.addEventListener("pointerleave", u), s(() => {
        e.value?.removeEventListener("pointerleave", l), n.value?.removeEventListener("pointerleave", u);
      });
    }
  }), te((s) => {
    if (o.value) {
      const l = (u) => {
        if (!o.value || !(u.target instanceof Element)) return;
        const d = u.target, c = {
          x: u.clientX,
          y: u.clientY
        }, p = e.value?.contains(d) || n.value?.contains(d), v = !gs(c, o.value), y = !!d.closest("[data-grace-area-trigger]");
        p ? i() : (v || y) && (i(), r.trigger());
      };
      e.value?.ownerDocument.addEventListener("pointermove", l), s(() => e.value?.ownerDocument.removeEventListener("pointermove", l));
    }
  }), {
    isPointerInTransit: t,
    onPointerExit: r.on
  };
}
function vs(e, n) {
  const t = Math.abs(n.top - e.y), o = Math.abs(n.bottom - e.y), r = Math.abs(n.right - e.x), i = Math.abs(n.left - e.x);
  switch (Math.min(t, o, r, i)) {
    case i:
      return "left";
    case r:
      return "right";
    case t:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ys(e, n, t = 5) {
  const o = [];
  switch (n) {
    case "top":
      o.push({
        x: e.x - t,
        y: e.y + t
      }, {
        x: e.x + t,
        y: e.y + t
      });
      break;
    case "bottom":
      o.push({
        x: e.x - t,
        y: e.y - t
      }, {
        x: e.x + t,
        y: e.y - t
      });
      break;
    case "left":
      o.push({
        x: e.x + t,
        y: e.y - t
      }, {
        x: e.x + t,
        y: e.y + t
      });
      break;
    case "right":
      o.push({
        x: e.x - t,
        y: e.y - t
      }, {
        x: e.x - t,
        y: e.y + t
      });
      break;
  }
  return o;
}
function ms(e) {
  const { top: n, right: t, bottom: o, left: r } = e;
  return [
    {
      x: r,
      y: n
    },
    {
      x: t,
      y: n
    },
    {
      x: t,
      y: o
    },
    {
      x: r,
      y: o
    }
  ];
}
function gs(e, n) {
  const { x: t, y: o } = e;
  let r = !1;
  for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
    const s = n[i].x, l = n[i].y, u = n[a].x, d = n[a].y;
    l > o != d > o && t < (u - s) * (o - l) / (d - l) + s && (r = !r);
  }
  return r;
}
function hs(e) {
  const n = e.slice();
  return n.sort((t, o) => t.x < o.x ? -1 : t.x > o.x ? 1 : t.y < o.y ? -1 : t.y > o.y ? 1 : 0), bs(n);
}
function bs(e) {
  if (e.length <= 1) return e.slice();
  const n = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], a = n[n.length - 2];
      if ((i.x - a.x) * (r.y - a.y) >= (i.y - a.y) * (r.x - a.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  n.pop();
  const t = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], a = t[t.length - 2];
      if ((i.x - a.x) * (r.y - a.y) >= (i.y - a.y) * (r.x - a.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  return t.pop(), n.length === 1 && t.length === 1 && n[0].x === t[0].x && n[0].y === t[0].y ? n : n.concat(t);
}
var _s = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, Ye = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), St = {}, ln = 0, br = function(e) {
  return e && (e.host || br(e.parentNode));
}, ws = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t))
      return t;
    var o = br(t);
    return o && e.contains(o) ? o : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, Cs = function(e, n, t, o) {
  var r = ws(n, Array.isArray(e) ? e : [e]);
  St[t] || (St[t] = /* @__PURE__ */ new WeakMap());
  var i = St[t], a = [], s = /* @__PURE__ */ new Set(), l = new Set(r), u = function(c) {
    !c || s.has(c) || (s.add(c), u(c.parentNode));
  };
  r.forEach(u);
  var d = function(c) {
    !c || l.has(c) || Array.prototype.forEach.call(c.children, function(p) {
      if (s.has(p))
        d(p);
      else
        try {
          var v = p.getAttribute(o), y = v !== null && v !== "false", g = (Ye.get(p) || 0) + 1, m = (i.get(p) || 0) + 1;
          Ye.set(p, g), i.set(p, m), a.push(p), g === 1 && y && Ct.set(p, !0), m === 1 && p.setAttribute(t, "true"), y || p.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return d(n), s.clear(), ln++, function() {
    a.forEach(function(c) {
      var p = Ye.get(c) - 1, v = i.get(c) - 1;
      Ye.set(c, p), i.set(c, v), p || (Ct.has(c) || c.removeAttribute(o), Ct.delete(c)), v || c.removeAttribute(t);
    }), ln--, ln || (Ye = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), St = {});
  };
}, Ss = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = _s(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), Cs(o, r, t, "aria-hidden")) : function() {
    return null;
  };
};
function Nn(e) {
  let n;
  Y(() => He(e), (t) => {
    let o = !1;
    try {
      o = !!t?.closest("[popover]:not(:popover-open)");
    } catch {
    }
    t && !o ? n = Ss(t) : n && n();
  }), nt(() => {
    n && n();
  });
}
let qs = 0;
function we(e, n = "reka") {
  let t;
  return "useId" in io ? t = io.useId?.() : t = jt({ useId: void 0 }).useId?.() ?? `${++qs}`, n ? `${n}-${t}` : t;
}
function Es(e) {
  const n = E(), t = $(() => n.value?.width ?? 0), o = $(() => n.value?.height ?? 0);
  return Z(() => {
    const r = He(e);
    if (r) {
      n.value = {
        width: r.offsetWidth,
        height: r.offsetHeight
      };
      const i = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length) return;
        const s = a[0];
        let l, u;
        if ("borderBoxSize" in s) {
          const d = s.borderBoxSize, c = Array.isArray(d) ? d[0] : d;
          l = c.inlineSize, u = c.blockSize;
        } else
          l = r.offsetWidth, u = r.offsetHeight;
        n.value = {
          width: l,
          height: u
        };
      });
      return i.observe(r, { box: "border-box" }), () => i.unobserve(r);
    } else n.value = void 0;
  }), {
    width: t,
    height: o
  };
}
function As(e, n) {
  const t = E(e);
  function o(i) {
    return n[t.value][i] ?? t.value;
  }
  return {
    state: t,
    dispatch: (i) => {
      t.value = o(i);
    }
  };
}
function Vn(e) {
  const n = yr("", 1e3);
  return {
    search: n,
    handleTypeaheadSearch: (r, i) => {
      n.value = n.value + r;
      {
        const a = X(), s = i.map((p) => ({
          ...p,
          textValue: p.value?.textValue ?? p.ref.textContent?.trim() ?? ""
        })), l = s.find((p) => p.ref === a), u = s.map((p) => p.textValue), d = xs(u, n.value, l?.textValue), c = s.find((p) => p.textValue === d);
        return c && c.ref.focus(), c?.ref;
      }
    },
    resetTypeahead: () => {
      n.value = "";
    }
  };
}
function Os(e, n) {
  return e.map((t, o) => e[(n + o) % e.length]);
}
function xs(e, n, t) {
  const r = n.length > 1 && Array.from(n).every((u) => u === n[0]) ? n[0] : n, i = t ? e.indexOf(t) : -1;
  let a = Os(e, Math.max(i, 0));
  r.length === 1 && (a = a.filter((u) => u !== t));
  const l = a.find((u) => u.toLowerCase().startsWith(r.toLowerCase()));
  return l !== t ? l : void 0;
}
function Ps(e, n) {
  const t = E({}), o = E("none"), r = E(e), i = e.value ? "mounted" : "unmounted";
  let a;
  const s = n.value?.ownerDocument.defaultView ?? ci, { state: l, dispatch: u } = As(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), d = (m) => {
    if (Ke) {
      const w = new CustomEvent(m, {
        bubbles: !1,
        cancelable: !1
      });
      n.value?.dispatchEvent(w);
    }
  };
  Y(e, async (m, w) => {
    const P = w !== m;
    if (await G(), P) {
      const C = o.value, h = qt(n.value);
      m ? (u("MOUNT"), d("enter"), h === "none" && d("after-enter")) : h === "none" || h === "undefined" || t.value?.display === "none" ? (u("UNMOUNT"), d("leave"), d("after-leave")) : w && C !== h ? (u("ANIMATION_OUT"), d("leave")) : (u("UNMOUNT"), d("after-leave"));
    }
  }, { immediate: !0 });
  const c = (m) => {
    const w = qt(n.value), P = w.includes(CSS.escape(m.animationName)), C = l.value === "mounted" ? "enter" : "leave";
    if (m.target === n.value && P && (d(`after-${C}`), u("ANIMATION_END"), !r.value)) {
      const h = n.value.style.animationFillMode;
      n.value.style.animationFillMode = "forwards", a = s?.setTimeout(() => {
        n.value?.style.animationFillMode === "forwards" && (n.value.style.animationFillMode = h);
      });
    }
    m.target === n.value && w === "none" && u("ANIMATION_END");
  }, p = (m) => {
    m.target === n.value && (o.value = qt(n.value));
  }, v = Y(n, (m, w) => {
    m ? (t.value = getComputedStyle(m), m.addEventListener("animationstart", p), m.addEventListener("animationcancel", c), m.addEventListener("animationend", c)) : (u("ANIMATION_END"), a !== void 0 && s?.clearTimeout(a), w?.removeEventListener("animationstart", p), w?.removeEventListener("animationcancel", c), w?.removeEventListener("animationend", c));
  }, { immediate: !0 }), y = Y(l, () => {
    const m = qt(n.value);
    o.value = l.value === "mounted" ? m : "none";
  });
  return nt(() => {
    v(), y();
  }), { isPresent: $(() => ["mounted", "unmountSuspended"].includes(l.value)) };
}
function qt(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var it = A({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(e, { slots: n, expose: t }) {
    const { present: o, forceMount: r } = ge(e), i = E(), { isPresent: a } = Ps(o, i);
    t({ present: a });
    let s = n.default({ present: a.value });
    s = Rn(s || []);
    const l = mt();
    if (s && s?.length > 1) {
      const u = l?.parent?.type.name ? `<${l.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${u}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((d) => `  - ${d}`).join(`
`)
      ].join(`
`));
    }
    return () => r.value || o.value || a.value ? Ie(n.default({ present: a.value })[0], { ref: (u) => {
      const d = He(u);
      return typeof d?.hasAttribute > "u" || (d?.hasAttribute("data-reka-popper-content-wrapper") ? i.value = d.firstElementChild : i.value = d), d;
    } }) : null;
  }
});
const _n = A({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: n, slots: t }) {
    return () => {
      if (!t.default) return null;
      const o = Rn(t.default()), r = o.findIndex((l) => l.type !== ti);
      if (r === -1) return o;
      const i = o[r];
      delete i.props?.ref;
      const a = i.props ? M(n, i.props) : n, s = ni({
        ...i,
        props: {}
      }, a);
      return o.length === 1 ? s : (o[r] = s, o);
    };
  }
}), Is = [
  "area",
  "img",
  "input"
], j = A({
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
  setup(e, { attrs: n, slots: t }) {
    const o = e.asChild ? "template" : e.as;
    return typeof o == "string" && Is.includes(o) ? () => Ie(o, n) : o !== "template" ? () => Ie(e.as, n, { default: t.default }) : () => Ie(_n, n, { default: t.default });
  }
});
function wn() {
  const e = E(), n = $(() => ["#text", "#comment"].includes(e.value?.$el.nodeName) ? e.value?.$el.nextElementSibling : He(e));
  return {
    primitiveElement: e,
    currentElement: n
  };
}
const [he, Ts] = ee("DialogRoot");
var $s = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: n }) {
    const t = e, r = De(t, "open", n, {
      defaultValue: t.defaultOpen,
      passive: t.open === void 0
    }), i = E(), a = E(), { modal: s } = ge(t);
    return Ts({
      open: r,
      modal: s,
      openModal: () => {
        r.value = !0;
      },
      onOpenChange: (l) => {
        r.value = l;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: i,
      contentElement: a
    }), (l, u) => S(l.$slots, "default", {
      open: f(r),
      close: () => r.value = !1
    });
  }
}), Ds = $s, Bs = /* @__PURE__ */ A({
  __name: "DialogClose",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const n = e;
    R();
    const t = he();
    return (o, r) => (_(), x(f(j), M(n, {
      type: o.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (i) => f(t).onOpenChange(!1))
    }), {
      default: b(() => [S(o.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), ks = Bs;
const Ms = "dismissableLayer.pointerDownOutside", Fs = "dismissableLayer.focusOutside";
function _r(e, n) {
  if (!(n instanceof Element)) return !1;
  const t = n.closest("[data-dismissable-layer]"), o = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), r = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(t && (o === t || r.indexOf(o) < r.indexOf(t)));
}
function Rs(e, n, t = !0) {
  const o = n?.value?.ownerDocument ?? globalThis?.document, r = E(!1), i = E(() => {
  });
  return te((a) => {
    if (!Ke || !pe(t)) return;
    const s = async (u) => {
      const d = u.target;
      if (!(!n?.value || !d)) {
        if (_r(n.value, d)) {
          r.value = !1;
          return;
        }
        if (u.target && !r.value) {
          let p = function() {
            Fn(Ms, e, c);
          };
          const c = { originalEvent: u };
          u.pointerType === "touch" ? (o.removeEventListener("click", i.value), i.value = p, o.addEventListener("click", i.value, { once: !0 })) : p();
        } else o.removeEventListener("click", i.value);
        r.value = !1;
      }
    }, l = window.setTimeout(() => {
      o.addEventListener("pointerdown", s);
    }, 0);
    a(() => {
      window.clearTimeout(l), o.removeEventListener("pointerdown", s), o.removeEventListener("click", i.value);
    });
  }), { onPointerDownCapture: () => {
    pe(t) && (r.value = !0);
  } };
}
function Ls(e, n, t = !0) {
  const o = n?.value?.ownerDocument ?? globalThis?.document, r = E(!1);
  return te((i) => {
    if (!Ke || !pe(t)) return;
    const a = async (s) => {
      if (!n?.value) return;
      await G(), await G();
      const l = s.target;
      !n.value || !l || _r(n.value, l) || s.target && !r.value && Fn(Fs, e, { originalEvent: s });
    };
    o.addEventListener("focusin", a), i(() => o.removeEventListener("focusin", a));
  }), {
    onFocusCapture: () => {
      pe(t) && (r.value = !0);
    },
    onBlurCapture: () => {
      pe(t) && (r.value = !1);
    }
  };
}
const se = Yo({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  originalBodyPointerEvents: void 0,
  branches: /* @__PURE__ */ new Set()
});
var Ns = /* @__PURE__ */ A({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(e, { emit: n }) {
    const t = e, o = n, { forwardRef: r, currentElement: i } = R(), a = $(() => i.value?.ownerDocument ?? globalThis.document), s = $(() => se.layersRoot), l = $(() => i.value ? Array.from(s.value).indexOf(i.value) : -1), u = $(() => se.layersWithOutsidePointerEventsDisabled.size > 0), d = $(() => {
      const v = Array.from(s.value), [y] = [...se.layersWithOutsidePointerEventsDisabled].slice(-1), g = v.indexOf(y);
      return l.value >= g;
    }), c = Rs(async (v) => {
      const y = [...se.branches].some((g) => g?.contains(v.target));
      !d.value || y || (o("pointerDownOutside", v), o("interactOutside", v), await G(), v.defaultPrevented || o("dismiss"));
    }, i), p = Ls((v) => {
      [...se.branches].some((g) => g?.contains(v.target)) || (o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss"));
    }, i);
    return fi("Escape", (v) => {
      l.value === s.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    }), te((v) => {
      i.value && (t.disableOutsidePointerEvents && (se.layersWithOutsidePointerEventsDisabled.size === 0 && (se.originalBodyPointerEvents = a.value.body.style.pointerEvents, a.value.body.style.pointerEvents = "none"), se.layersWithOutsidePointerEventsDisabled.add(i.value)), s.value.add(i.value), v(() => {
        t.disableOutsidePointerEvents && se.layersWithOutsidePointerEventsDisabled.size === 1 && !et(se.originalBodyPointerEvents) && (a.value.body.style.pointerEvents = se.originalBodyPointerEvents);
      }));
    }), te((v) => {
      v(() => {
        i.value && (s.value.delete(i.value), se.layersWithOutsidePointerEventsDisabled.delete(i.value));
      });
    }), (v, y) => (_(), x(f(j), {
      ref: f(r),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Rt({ pointerEvents: u.value ? d.value ? "auto" : "none" : void 0 }),
      onFocusCapture: f(p).onFocusCapture,
      onBlurCapture: f(p).onBlurCapture,
      onPointerdownCapture: f(c).onPointerDownCapture
    }, {
      default: b(() => [S(v.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "style",
      "onFocusCapture",
      "onBlurCapture",
      "onPointerdownCapture"
    ]));
  }
}), Ut = Ns;
const Vs = pi(() => E([]));
function js() {
  const e = Vs();
  return {
    add(n) {
      const t = e.value[0];
      n !== t && t?.pause(), e.value = Io(e.value, n), e.value.unshift(n);
    },
    remove(n) {
      e.value = Io(e.value, n), e.value[0]?.resume();
    }
  };
}
function Io(e, n) {
  const t = [...e], o = t.indexOf(n);
  return o !== -1 && t.splice(o, 1), t;
}
const un = "focusScope.autoFocusOnMount", dn = "focusScope.autoFocusOnUnmount", To = {
  bubbles: !1,
  cancelable: !0
};
function Ws(e, { select: n = !1 } = {}) {
  const t = X();
  for (const o of e)
    if (xe(o, { select: n }), X() !== t) return !0;
}
function Hs(e) {
  const n = wr(e), t = $o(n, e), o = $o(n.reverse(), e);
  return [t, o];
}
function wr(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const r = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function $o(e, n) {
  for (const t of e) if (!Ks(t, { upTo: n })) return t;
}
function Ks(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Us(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function xe(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = X();
    e.focus({ preventScroll: !0 }), e !== t && Us(e) && n && e.select();
  }
}
var zs = /* @__PURE__ */ A({
  __name: "FocusScope",
  props: {
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    trapped: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: n }) {
    const t = e, o = n, { currentRef: r, currentElement: i } = R(), a = E(null), s = js(), l = Yo({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    te((d) => {
      if (!Ke) return;
      const c = i.value;
      if (!t.trapped) return;
      function p(m) {
        if (l.paused || !c) return;
        const w = m.target;
        c.contains(w) ? a.value = w : xe(a.value, { select: !0 });
      }
      function v(m) {
        if (l.paused || !c) return;
        const w = m.relatedTarget;
        w !== null && (c.contains(w) || xe(a.value, { select: !0 }));
      }
      function y(m) {
        c.contains(a.value) || xe(c);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", v);
      const g = new MutationObserver(y);
      c && g.observe(c, {
        childList: !0,
        subtree: !0
      }), d(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", v), g.disconnect();
      });
    }), te(async (d) => {
      const c = i.value;
      if (await G(), !c) return;
      s.add(l);
      const p = X();
      if (!c.contains(p)) {
        const y = new CustomEvent(un, To);
        c.addEventListener(un, (g) => o("mountAutoFocus", g)), c.dispatchEvent(y), y.defaultPrevented || (Ws(wr(c), { select: !0 }), X() === p && xe(c));
      }
      d(() => {
        c.removeEventListener(un, (m) => o("mountAutoFocus", m));
        const y = new CustomEvent(dn, To), g = (m) => {
          o("unmountAutoFocus", m);
        };
        c.addEventListener(dn, g), c.dispatchEvent(y), setTimeout(() => {
          y.defaultPrevented || xe(p ?? document.body, { select: !0 }), c.removeEventListener(dn, g), s.remove(l);
        }, 0);
      });
    });
    function u(d) {
      if (!t.loop && !t.trapped || l.paused) return;
      const c = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, p = X();
      if (c && p) {
        const v = d.currentTarget, [y, g] = Hs(v);
        y && g ? !d.shiftKey && p === g ? (d.preventDefault(), t.loop && xe(y, { select: !0 })) : d.shiftKey && p === y && (d.preventDefault(), t.loop && xe(g, { select: !0 })) : p === v && d.preventDefault();
      }
    }
    return (d, c) => (_(), x(f(j), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": d.asChild,
      as: d.as,
      onKeydown: u
    }, {
      default: b(() => [S(d.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), jn = zs;
const Gs = "menu.itemSelect", Cn = ["Enter", " "], Ys = [
  "ArrowDown",
  "PageUp",
  "Home"
], Cr = [
  "ArrowUp",
  "PageDown",
  "End"
], Xs = [...Ys, ...Cr];
[...Cn], [...Cn];
function Sr(e) {
  return e ? "open" : "closed";
}
function Sn(e) {
  const n = X();
  for (const t of e)
    if (t === n || (t.focus(), X() !== n)) return;
}
function Qs(e, n) {
  const { x: t, y: o } = e;
  let r = !1;
  for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
    const s = n[i].x, l = n[i].y, u = n[a].x, d = n[a].y;
    l > o != d > o && t < (u - s) * (o - l) / (d - l) + s && (r = !r);
  }
  return r;
}
function Js(e, n) {
  if (!n) return !1;
  const t = {
    x: e.clientX,
    y: e.clientY
  };
  return Qs(t, n);
}
function Dt(e) {
  return e.pointerType === "mouse";
}
const Zs = "DialogTitle", el = "DialogContent";
function tl({ titleName: e = Zs, contentName: n = el, componentLink: t = "dialog.html#title", titleId: o, descriptionId: r, contentElement: i }) {
  const a = `Warning: \`${n}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${t}`, s = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${n}.`;
  Z(() => {
    document.getElementById(o) || console.warn(a);
    const u = i.value?.getAttribute("aria-describedby");
    r && u && (document.getElementById(r) || console.warn(s));
  });
}
var nl = /* @__PURE__ */ A({
  __name: "DialogContentImpl",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: n }) {
    const t = e, o = n, r = he(), { forwardRef: i, currentElement: a } = R();
    return r.titleId ||= we(void 0, "reka-dialog-title"), r.descriptionId ||= we(void 0, "reka-dialog-description"), Z(() => {
      r.contentElement = a, X() !== document.body && (r.triggerElement.value = X());
    }), process.env.NODE_ENV !== "production" && tl({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: r.titleId,
      descriptionId: r.descriptionId,
      contentElement: a
    }), (s, l) => (_(), x(f(jn), {
      "as-child": "",
      loop: "",
      trapped: t.trapFocus,
      onMountAutoFocus: l[5] || (l[5] = (u) => o("openAutoFocus", u)),
      onUnmountAutoFocus: l[6] || (l[6] = (u) => o("closeAutoFocus", u))
    }, {
      default: b(() => [B(f(Ut), M({
        id: f(r).contentId,
        ref: f(i),
        as: s.as,
        "as-child": s.asChild,
        "disable-outside-pointer-events": s.disableOutsidePointerEvents,
        role: "dialog",
        "aria-describedby": f(r).descriptionId,
        "aria-labelledby": f(r).titleId,
        "data-state": f(Sr)(f(r).open.value)
      }, s.$attrs, {
        onDismiss: l[0] || (l[0] = (u) => f(r).onOpenChange(!1)),
        onEscapeKeyDown: l[1] || (l[1] = (u) => o("escapeKeyDown", u)),
        onFocusOutside: l[2] || (l[2] = (u) => o("focusOutside", u)),
        onInteractOutside: l[3] || (l[3] = (u) => o("interactOutside", u)),
        onPointerDownOutside: l[4] || (l[4] = (u) => o("pointerDownOutside", u))
      }), {
        default: b(() => [S(s.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "as",
        "as-child",
        "disable-outside-pointer-events",
        "aria-describedby",
        "aria-labelledby",
        "data-state"
      ])]),
      _: 3
    }, 8, ["trapped"]));
  }
}), qr = nl, ol = /* @__PURE__ */ A({
  __name: "DialogContentModal",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: n }) {
    const t = e, o = n, r = he(), i = gt(o), { forwardRef: a, currentElement: s } = R();
    return Nn(s), (l, u) => (_(), x(qr, M({
      ...t,
      ...f(i)
    }, {
      ref: f(a),
      "trap-focus": f(r).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        d.defaultPrevented || (d.preventDefault(), f(r).triggerElement.value?.focus());
      }),
      onPointerDownOutside: u[1] || (u[1] = (d) => {
        const c = d.detail.originalEvent, p = c.button === 0 && c.ctrlKey === !0;
        (c.button === 2 || p) && d.preventDefault();
      }),
      onFocusOutside: u[2] || (u[2] = (d) => {
        d.preventDefault();
      })
    }), {
      default: b(() => [S(l.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), rl = ol, il = /* @__PURE__ */ A({
  __name: "DialogContentNonModal",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: n }) {
    const t = e, r = gt(n);
    R();
    const i = he(), a = E(!1), s = E(!1);
    return (l, u) => (_(), x(qr, M({
      ...t,
      ...f(r)
    }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        d.defaultPrevented || (a.value || f(i).triggerElement.value?.focus(), d.preventDefault()), a.value = !1, s.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        d.defaultPrevented || (a.value = !0, d.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const c = d.target;
        f(i).triggerElement.value?.contains(c) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && s.value && d.preventDefault();
      })
    }), {
      default: b(() => [S(l.$slots, "default")]),
      _: 3
    }, 16));
  }
}), al = il, sl = /* @__PURE__ */ A({
  __name: "DialogContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: n }) {
    const t = e, o = n, r = he(), i = gt(o), { forwardRef: a } = R();
    return (s, l) => (_(), x(f(it), { present: s.forceMount || f(r).open.value }, {
      default: b(() => [f(r).modal.value ? (_(), x(rl, M({
        key: 0,
        ref: f(a)
      }, {
        ...t,
        ...f(i),
        ...s.$attrs
      }), {
        default: b(() => [S(s.$slots, "default")]),
        _: 3
      }, 16)) : (_(), x(al, M({
        key: 1,
        ref: f(a)
      }, {
        ...t,
        ...f(i),
        ...s.$attrs
      }), {
        default: b(() => [S(s.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), ll = sl, ul = /* @__PURE__ */ A({
  __name: "DialogDescription",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "p"
    }
  },
  setup(e) {
    const n = e;
    R();
    const t = he();
    return (o, r) => (_(), x(f(j), M(n, { id: f(t).descriptionId }), {
      default: b(() => [S(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), dl = ul, cl = /* @__PURE__ */ A({
  __name: "DialogOverlayImpl",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const n = he();
    return Ln(!0), R(), (t, o) => (_(), x(f(j), {
      as: t.as,
      "as-child": t.asChild,
      "data-state": f(n).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: b(() => [S(t.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state"
    ]));
  }
}), fl = cl, pl = /* @__PURE__ */ A({
  __name: "DialogOverlay",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const n = he(), { forwardRef: t } = R();
    return (o, r) => f(n)?.modal.value ? (_(), x(f(it), {
      key: 0,
      present: o.forceMount || f(n).open.value
    }, {
      default: b(() => [B(fl, M(o.$attrs, {
        ref: f(t),
        as: o.as,
        "as-child": o.asChild
      }), {
        default: b(() => [S(o.$slots, "default")]),
        _: 3
      }, 16, ["as", "as-child"])]),
      _: 3
    }, 8, ["present"])) : U("v-if", !0);
  }
}), vl = pl, yl = /* @__PURE__ */ A({
  __name: "Teleport",
  props: {
    to: {
      type: null,
      required: !1,
      default: "body"
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const n = vi();
    return (t, o) => f(n) || t.forceMount ? (_(), x(Xo, {
      key: 0,
      to: t.to,
      disabled: t.disabled,
      defer: t.defer
    }, [S(t.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : U("v-if", !0);
  }
}), zt = yl, ml = /* @__PURE__ */ A({
  __name: "DialogPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const n = e;
    return (t, o) => (_(), x(f(zt), ne(fe(n)), {
      default: b(() => [S(t.$slots, "default")]),
      _: 3
    }, 16));
  }
}), gl = ml, hl = /* @__PURE__ */ A({
  __name: "DialogTitle",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "h2"
    }
  },
  setup(e) {
    const n = e, t = he();
    return R(), (o, r) => (_(), x(f(j), M(n, { id: f(t).titleId }), {
      default: b(() => [S(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), bl = hl, _l = /* @__PURE__ */ A({
  __name: "DialogTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const n = e, t = he(), { forwardRef: o, currentElement: r } = R();
    return t.contentId ||= we(void 0, "reka-dialog-content"), Z(() => {
      t.triggerElement.value = r.value;
    }), (i, a) => (_(), x(f(j), M(n, {
      ref: f(o),
      type: i.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": f(t).open.value || !1,
      "aria-controls": f(t).open.value ? f(t).contentId : void 0,
      "data-state": f(t).open.value ? "open" : "closed",
      onClick: f(t).onOpenToggle
    }), {
      default: b(() => [S(i.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "onClick"
    ]));
  }
}), wl = _l;
const Do = "data-reka-collection-item";
function Ee(e = {}) {
  const { key: n = "", isProvider: t = !1 } = e, o = `${n}CollectionProvider`;
  let r;
  if (t) {
    const d = E(/* @__PURE__ */ new Map());
    r = {
      collectionRef: E(),
      itemMap: d
    }, Ho(o, r);
  } else r = Wo(o);
  const i = (d = !1) => {
    const c = r.collectionRef.value;
    if (!c) return [];
    const p = Array.from(c.querySelectorAll(`[${Do}]`)), y = Array.from(r.itemMap.value.values()).sort((g, m) => p.indexOf(g.ref) - p.indexOf(m.ref));
    return d ? y : y.filter((g) => g.ref.dataset.disabled !== "");
  }, a = A({
    name: "CollectionSlot",
    inheritAttrs: !1,
    setup(d, { slots: c, attrs: p }) {
      const { primitiveElement: v, currentElement: y } = wn();
      return Y(y, () => {
        r.collectionRef.value = y.value;
      }), () => Ie(_n, {
        ref: v,
        ...p
      }, c);
    }
  }), s = A({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(d, { slots: c, attrs: p }) {
      const { primitiveElement: v, currentElement: y } = wn();
      return te((g) => {
        if (y.value) {
          const m = oi(y.value);
          r.itemMap.value.set(m, {
            ref: y.value,
            value: d.value
          }), g(() => r.itemMap.value.delete(m));
        }
      }), () => Ie(_n, {
        ...p,
        [Do]: "",
        ref: v
      }, c);
    }
  }), l = $(() => Array.from(r.itemMap.value.values())), u = $(() => r.itemMap.value.size);
  return {
    getItems: i,
    reactiveItems: l,
    itemMapSize: u,
    CollectionSlot: a,
    CollectionItem: s
  };
}
var Cl = /* @__PURE__ */ A({
  __name: "VisuallyHidden",
  props: {
    feature: {
      type: String,
      required: !1,
      default: "focusable"
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return (n, t) => (_(), x(f(j), {
      as: n.as,
      "as-child": n.asChild,
      "aria-hidden": n.feature === "focusable" ? "true" : void 0,
      "data-hidden": n.feature === "fully-hidden" ? "" : void 0,
      tabindex: n.feature === "fully-hidden" ? "-1" : void 0,
      style: {
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
        wordWrap: "normal",
        top: "-1px",
        left: "-1px"
      }
    }, {
      default: b(() => [S(n.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-hidden",
      "data-hidden",
      "tabindex"
    ]));
  }
}), Wn = Cl, Sl = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const n = e, { primitiveElement: t, currentElement: o } = wn(), r = $(() => n.checked ?? n.value);
    return Y(r, (i, a) => {
      if (!o.value) return;
      const s = o.value, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "value").set;
      if (d && i !== a) {
        const c = new Event("input", { bubbles: !0 }), p = new Event("change", { bubbles: !0 });
        d.call(s, i), s.dispatchEvent(c), s.dispatchEvent(p);
      }
    }), (i, a) => (_(), x(Wn, M({
      ref_key: "primitiveElement",
      ref: t
    }, {
      ...n,
      ...i.$attrs
    }, { as: "input" }), null, 16));
  }
}), Bo = Sl, ql = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const n = e, t = $(() => typeof n.value == "object" && Array.isArray(n.value) && n.value.length === 0 && n.required), o = $(() => typeof n.value == "string" || typeof n.value == "number" || typeof n.value == "boolean" || n.value === null || n.value === void 0 ? [{
      name: n.name,
      value: n.value
    }] : typeof n.value == "object" && Array.isArray(n.value) ? n.value.flatMap((r, i) => typeof r == "object" ? Object.entries(r).map(([a, s]) => ({
      name: `${n.name}[${i}][${a}]`,
      value: s
    })) : {
      name: `${n.name}[${i}]`,
      value: r
    }) : n.value !== null && typeof n.value == "object" && !Array.isArray(n.value) ? Object.entries(n.value).map(([r, i]) => ({
      name: `${n.name}[${r}]`,
      value: i
    })) : []);
    return (r, i) => (_(), H(Je, null, [U(" We render single input if it's required "), t.value ? (_(), x(Bo, M({ key: r.name }, {
      ...n,
      ...r.$attrs
    }, {
      name: r.name,
      value: r.value
    }), null, 16, ["name", "value"])) : (_(!0), H(Je, { key: 1 }, Tn(o.value, (a) => (_(), x(Bo, M({ key: a.name }, { ref_for: !0 }, {
      ...n,
      ...r.$attrs
    }, {
      name: a.name,
      value: a.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), El = ql;
const Al = "rovingFocusGroup.onEntryFocus", Ol = {
  bubbles: !1,
  cancelable: !0
}, xl = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Pl(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Il(e, n, t) {
  const o = Pl(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return xl[o];
}
function Er(e, n = !1) {
  const t = X();
  for (const o of e)
    if (o === t || (o.focus({ preventScroll: n }), X() !== t)) return;
}
function Tl(e, n) {
  return e.map((t, o) => e[(n + o) % e.length]);
}
const [Ar, $l] = ee("PopperRoot");
var Dl = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const n = E();
    return $l({
      anchor: n,
      onAnchorChange: (t) => n.value = t
    }), (t, o) => S(t.$slots, "default");
  }
}), Hn = Dl, Bl = /* @__PURE__ */ A({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const n = e, { forwardRef: t, currentElement: o } = R(), r = Ar();
    return Qo(() => {
      r.onAnchorChange(n.reference ?? o.value);
    }), (i, a) => (_(), x(f(j), {
      ref: f(t),
      as: i.as,
      "as-child": i.asChild
    }, {
      default: b(() => [S(i.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Kn = Bl;
const kl = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, Ml = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
};
var Fl = /* @__PURE__ */ A({
  __name: "Arrow",
  props: {
    width: {
      type: Number,
      required: !1,
      default: 10
    },
    height: {
      type: Number,
      required: !1,
      default: 5
    },
    rounded: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "svg"
    }
  },
  setup(e) {
    const n = e;
    return R(), (t, o) => (_(), x(f(j), M(n, {
      width: t.width,
      height: t.height,
      viewBox: t.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: t.asChild ? void 0 : "none"
    }), {
      default: b(() => [S(t.$slots, "default", {}, () => [t.rounded ? (_(), H("path", Ml)) : (_(), H("path", kl))])]),
      _: 3
    }, 16, [
      "width",
      "height",
      "viewBox",
      "preserveAspectRatio"
    ]));
  }
}), Rl = Fl;
function Ll(e) {
  return e !== null;
}
function Nl(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(n) {
      const { placement: t, rects: o, middlewareData: r } = n, a = r.arrow?.centerOffset !== 0, s = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [u, d] = qn(t), c = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[d], p = (r.arrow?.x ?? 0) + s / 2, v = (r.arrow?.y ?? 0) + l / 2;
      let y = "", g = "";
      return u === "bottom" ? (y = a ? c : `${p}px`, g = `${-l}px`) : u === "top" ? (y = a ? c : `${p}px`, g = `${o.floating.height + l}px`) : u === "right" ? (y = `${-l}px`, g = a ? c : `${v}px`) : u === "left" && (y = `${o.floating.width + l}px`, g = a ? c : `${v}px`), { data: {
        x: y,
        y: g
      } };
    }
  };
}
function qn(e) {
  const [n, t = "center"] = e.split("-");
  return [n, t];
}
const Vl = ["top", "right", "bottom", "left"], Be = Math.min, re = Math.max, Bt = Math.round, Et = Math.floor, ve = (e) => ({
  x: e,
  y: e
}), jl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Wl = {
  start: "end",
  end: "start"
};
function En(e, n, t) {
  return re(e, Be(n, t));
}
function Ce(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Se(e) {
  return e.split("-")[0];
}
function at(e) {
  return e.split("-")[1];
}
function Un(e) {
  return e === "x" ? "y" : "x";
}
function zn(e) {
  return e === "y" ? "height" : "width";
}
function ke(e) {
  return ["top", "bottom"].includes(Se(e)) ? "y" : "x";
}
function Gn(e) {
  return Un(ke(e));
}
function Hl(e, n, t) {
  t === void 0 && (t = !1);
  const o = at(e), r = Gn(e), i = zn(r);
  let a = r === "x" ? o === (t ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return n.reference[i] > n.floating[i] && (a = kt(a)), [a, kt(a)];
}
function Kl(e) {
  const n = kt(e);
  return [An(e), n, An(n)];
}
function An(e) {
  return e.replace(/start|end/g, (n) => Wl[n]);
}
function Ul(e, n, t) {
  const o = ["left", "right"], r = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? r : o : n ? o : r;
    case "left":
    case "right":
      return n ? i : a;
    default:
      return [];
  }
}
function zl(e, n, t, o) {
  const r = at(e);
  let i = Ul(Se(e), t === "start", o);
  return r && (i = i.map((a) => a + "-" + r), n && (i = i.concat(i.map(An)))), i;
}
function kt(e) {
  return e.replace(/left|right|bottom|top/g, (n) => jl[n]);
}
function Gl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Or(e) {
  return typeof e != "number" ? Gl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Mt(e) {
  const {
    x: n,
    y: t,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: t,
    left: n,
    right: n + o,
    bottom: t + r,
    x: n,
    y: t
  };
}
function ko(e, n, t) {
  let {
    reference: o,
    floating: r
  } = e;
  const i = ke(n), a = Gn(n), s = zn(a), l = Se(n), u = i === "y", d = o.x + o.width / 2 - r.width / 2, c = o.y + o.height / 2 - r.height / 2, p = o[s] / 2 - r[s] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: d,
        y: o.y - r.height
      };
      break;
    case "bottom":
      v = {
        x: d,
        y: o.y + o.height
      };
      break;
    case "right":
      v = {
        x: o.x + o.width,
        y: c
      };
      break;
    case "left":
      v = {
        x: o.x - r.width,
        y: c
      };
      break;
    default:
      v = {
        x: o.x,
        y: o.y
      };
  }
  switch (at(n)) {
    case "start":
      v[a] -= p * (t && u ? -1 : 1);
      break;
    case "end":
      v[a] += p * (t && u ? -1 : 1);
      break;
  }
  return v;
}
const Yl = async (e, n, t) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: a
  } = t, s = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(n));
  let u = await a.getElementRects({
    reference: e,
    floating: n,
    strategy: r
  }), {
    x: d,
    y: c
  } = ko(u, o, l), p = o, v = {}, y = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: m,
      fn: w
    } = s[g], {
      x: P,
      y: C,
      data: h,
      reset: I
    } = await w({
      x: d,
      y: c,
      initialPlacement: o,
      placement: p,
      strategy: r,
      middlewareData: v,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: n
      }
    });
    d = P ?? d, c = C ?? c, v = {
      ...v,
      [m]: {
        ...v[m],
        ...h
      }
    }, I && y <= 50 && (y++, typeof I == "object" && (I.placement && (p = I.placement), I.rects && (u = I.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: n,
      strategy: r
    }) : I.rects), {
      x: d,
      y: c
    } = ko(u, p, l)), g = -1);
  }
  return {
    x: d,
    y: c,
    placement: p,
    strategy: r,
    middlewareData: v
  };
};
async function pt(e, n) {
  var t;
  n === void 0 && (n = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: a,
    elements: s,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: c = "floating",
    altBoundary: p = !1,
    padding: v = 0
  } = Ce(n, e), y = Or(v), m = s[p ? c === "floating" ? "reference" : "floating" : c], w = Mt(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(m))) == null || t ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), P = c === "floating" ? {
    x: o,
    y: r,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), h = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, I = Mt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: P,
    offsetParent: C,
    strategy: l
  }) : P);
  return {
    top: (w.top - I.top + y.top) / h.y,
    bottom: (I.bottom - w.bottom + y.bottom) / h.y,
    left: (w.left - I.left + y.left) / h.x,
    right: (I.right - w.right + y.right) / h.x
  };
}
const Xl = (e) => ({
  name: "arrow",
  options: e,
  async fn(n) {
    const {
      x: t,
      y: o,
      placement: r,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: l
    } = n, {
      element: u,
      padding: d = 0
    } = Ce(e, n) || {};
    if (u == null)
      return {};
    const c = Or(d), p = {
      x: t,
      y: o
    }, v = Gn(r), y = zn(v), g = await a.getDimensions(u), m = v === "y", w = m ? "top" : "left", P = m ? "bottom" : "right", C = m ? "clientHeight" : "clientWidth", h = i.reference[y] + i.reference[v] - p[v] - i.floating[y], I = p[v] - i.reference[v], q = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let O = q ? q[C] : 0;
    (!O || !await (a.isElement == null ? void 0 : a.isElement(q))) && (O = s.floating[C] || i.floating[y]);
    const D = h / 2 - I / 2, k = O / 2 - g[y] / 2 - 1, F = Be(c[w], k), Q = Be(c[P], k), W = F, J = O - g[y] - Q, K = O / 2 - g[y] / 2 + D, T = En(W, K, J), L = !l.arrow && at(r) != null && K !== T && i.reference[y] / 2 - (K < W ? F : Q) - g[y] / 2 < 0, N = L ? K < W ? K - W : K - J : 0;
    return {
      [v]: p[v] + N,
      data: {
        [v]: T,
        centerOffset: K - T - N,
        ...L && {
          alignmentOffset: N
        }
      },
      reset: L
    };
  }
}), Ql = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(n) {
      var t, o;
      const {
        placement: r,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: l,
        elements: u
      } = n, {
        mainAxis: d = !0,
        crossAxis: c = !0,
        fallbackPlacements: p,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: g = !0,
        ...m
      } = Ce(e, n);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const w = Se(r), P = ke(s), C = Se(s) === s, h = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), I = p || (C || !g ? [kt(s)] : Kl(s)), q = y !== "none";
      !p && q && I.push(...zl(s, g, y, h));
      const O = [s, ...I], D = await pt(n, m), k = [];
      let F = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (d && k.push(D[w]), c) {
        const K = Hl(r, a, h);
        k.push(D[K[0]], D[K[1]]);
      }
      if (F = [...F, {
        placement: r,
        overflows: k
      }], !k.every((K) => K <= 0)) {
        var Q, W;
        const K = (((Q = i.flip) == null ? void 0 : Q.index) || 0) + 1, T = O[K];
        if (T)
          return {
            data: {
              index: K,
              overflows: F
            },
            reset: {
              placement: T
            }
          };
        let L = (W = F.filter((N) => N.overflows[0] <= 0).sort((N, z) => N.overflows[1] - z.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!L)
          switch (v) {
            case "bestFit": {
              var J;
              const N = (J = F.filter((z) => {
                if (q) {
                  const ae = ke(z.placement);
                  return ae === P || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ae === "y";
                }
                return !0;
              }).map((z) => [z.placement, z.overflows.filter((ae) => ae > 0).reduce((ae, Ae) => ae + Ae, 0)]).sort((z, ae) => z[1] - ae[1])[0]) == null ? void 0 : J[0];
              N && (L = N);
              break;
            }
            case "initialPlacement":
              L = s;
              break;
          }
        if (r !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
function Mo(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width
  };
}
function Fo(e) {
  return Vl.some((n) => e[n] >= 0);
}
const Jl = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(n) {
      const {
        rects: t
      } = n, {
        strategy: o = "referenceHidden",
        ...r
      } = Ce(e, n);
      switch (o) {
        case "referenceHidden": {
          const i = await pt(n, {
            ...r,
            elementContext: "reference"
          }), a = Mo(i, t.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Fo(a)
            }
          };
        }
        case "escaped": {
          const i = await pt(n, {
            ...r,
            altBoundary: !0
          }), a = Mo(i, t.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Fo(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Zl(e, n) {
  const {
    placement: t,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), a = Se(t), s = at(t), l = ke(t) === "y", u = ["left", "top"].includes(a) ? -1 : 1, d = i && l ? -1 : 1, c = Ce(n, e);
  let {
    mainAxis: p,
    crossAxis: v,
    alignmentAxis: y
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: c.mainAxis || 0,
    crossAxis: c.crossAxis || 0,
    alignmentAxis: c.alignmentAxis
  };
  return s && typeof y == "number" && (v = s === "end" ? y * -1 : y), l ? {
    x: v * d,
    y: p * u
  } : {
    x: p * u,
    y: v * d
  };
}
const eu = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(n) {
      var t, o;
      const {
        x: r,
        y: i,
        placement: a,
        middlewareData: s
      } = n, l = await Zl(n, e);
      return a === ((t = s.offset) == null ? void 0 : t.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, tu = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(n) {
      const {
        x: t,
        y: o,
        placement: r
      } = n, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: s = {
          fn: (m) => {
            let {
              x: w,
              y: P
            } = m;
            return {
              x: w,
              y: P
            };
          }
        },
        ...l
      } = Ce(e, n), u = {
        x: t,
        y: o
      }, d = await pt(n, l), c = ke(Se(r)), p = Un(c);
      let v = u[p], y = u[c];
      if (i) {
        const m = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", P = v + d[m], C = v - d[w];
        v = En(P, v, C);
      }
      if (a) {
        const m = c === "y" ? "top" : "left", w = c === "y" ? "bottom" : "right", P = y + d[m], C = y - d[w];
        y = En(P, y, C);
      }
      const g = s.fn({
        ...n,
        [p]: v,
        [c]: y
      });
      return {
        ...g,
        data: {
          x: g.x - t,
          y: g.y - o,
          enabled: {
            [p]: i,
            [c]: a
          }
        }
      };
    }
  };
}, nu = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(n) {
      const {
        x: t,
        y: o,
        placement: r,
        rects: i,
        middlewareData: a
      } = n, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = Ce(e, n), d = {
        x: t,
        y: o
      }, c = ke(r), p = Un(c);
      let v = d[p], y = d[c];
      const g = Ce(s, n), m = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const C = p === "y" ? "height" : "width", h = i.reference[p] - i.floating[C] + m.mainAxis, I = i.reference[p] + i.reference[C] - m.mainAxis;
        v < h ? v = h : v > I && (v = I);
      }
      if (u) {
        var w, P;
        const C = p === "y" ? "width" : "height", h = ["top", "left"].includes(Se(r)), I = i.reference[c] - i.floating[C] + (h && ((w = a.offset) == null ? void 0 : w[c]) || 0) + (h ? 0 : m.crossAxis), q = i.reference[c] + i.reference[C] + (h ? 0 : ((P = a.offset) == null ? void 0 : P[c]) || 0) - (h ? m.crossAxis : 0);
        y < I ? y = I : y > q && (y = q);
      }
      return {
        [p]: v,
        [c]: y
      };
    }
  };
}, ou = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(n) {
      var t, o;
      const {
        placement: r,
        rects: i,
        platform: a,
        elements: s
      } = n, {
        apply: l = () => {
        },
        ...u
      } = Ce(e, n), d = await pt(n, u), c = Se(r), p = at(r), v = ke(r) === "y", {
        width: y,
        height: g
      } = i.floating;
      let m, w;
      c === "top" || c === "bottom" ? (m = c, w = p === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = c, m = p === "end" ? "top" : "bottom");
      const P = g - d.top - d.bottom, C = y - d.left - d.right, h = Be(g - d[m], P), I = Be(y - d[w], C), q = !n.middlewareData.shift;
      let O = h, D = I;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (D = C), (o = n.middlewareData.shift) != null && o.enabled.y && (O = P), q && !p) {
        const F = re(d.left, 0), Q = re(d.right, 0), W = re(d.top, 0), J = re(d.bottom, 0);
        v ? D = y - 2 * (F !== 0 || Q !== 0 ? F + Q : re(d.left, d.right)) : O = g - 2 * (W !== 0 || J !== 0 ? W + J : re(d.top, d.bottom));
      }
      await l({
        ...n,
        availableWidth: D,
        availableHeight: O
      });
      const k = await a.getDimensions(s.floating);
      return y !== k.width || g !== k.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Gt() {
  return typeof window < "u";
}
function Ue(e) {
  return Yn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ie(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function be(e) {
  var n;
  return (n = (Yn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function Yn(e) {
  return Gt() ? e instanceof Node || e instanceof ie(e).Node : !1;
}
function de(e) {
  return Gt() ? e instanceof Element || e instanceof ie(e).Element : !1;
}
function me(e) {
  return Gt() ? e instanceof HTMLElement || e instanceof ie(e).HTMLElement : !1;
}
function Ro(e) {
  return !Gt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ie(e).ShadowRoot;
}
function ht(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: o,
    display: r
  } = ce(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + o + t) && !["inline", "contents"].includes(r);
}
function ru(e) {
  return ["table", "td", "th"].includes(Ue(e));
}
function Yt(e) {
  return [":popover-open", ":modal"].some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
function Xn(e) {
  const n = Qn(), t = de(e) ? ce(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => t[o] ? t[o] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (t.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (t.contain || "").includes(o));
}
function iu(e) {
  let n = Me(e);
  for (; me(n) && !tt(n); ) {
    if (Xn(n))
      return n;
    if (Yt(n))
      return null;
    n = Me(n);
  }
  return null;
}
function Qn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function tt(e) {
  return ["html", "body", "#document"].includes(Ue(e));
}
function ce(e) {
  return ie(e).getComputedStyle(e);
}
function Xt(e) {
  return de(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Me(e) {
  if (Ue(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ro(e) && e.host || // Fallback.
    be(e)
  );
  return Ro(n) ? n.host : n;
}
function xr(e) {
  const n = Me(e);
  return tt(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : me(n) && ht(n) ? n : xr(n);
}
function vt(e, n, t) {
  var o;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const r = xr(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = ie(r);
  if (i) {
    const s = On(a);
    return n.concat(a, a.visualViewport || [], ht(r) ? r : [], s && t ? vt(s) : []);
  }
  return n.concat(r, vt(r, [], t));
}
function On(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Pr(e) {
  const n = ce(e);
  let t = parseFloat(n.width) || 0, o = parseFloat(n.height) || 0;
  const r = me(e), i = r ? e.offsetWidth : t, a = r ? e.offsetHeight : o, s = Bt(t) !== i || Bt(o) !== a;
  return s && (t = i, o = a), {
    width: t,
    height: o,
    $: s
  };
}
function Jn(e) {
  return de(e) ? e : e.contextElement;
}
function Qe(e) {
  const n = Jn(e);
  if (!me(n))
    return ve(1);
  const t = n.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = Pr(n);
  let a = (i ? Bt(t.width) : t.width) / o, s = (i ? Bt(t.height) : t.height) / r;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const au = /* @__PURE__ */ ve(0);
function Ir(e) {
  const n = ie(e);
  return !Qn() || !n.visualViewport ? au : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function su(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== ie(e) ? !1 : n;
}
function We(e, n, t, o) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), i = Jn(e);
  let a = ve(1);
  n && (o ? de(o) && (a = Qe(o)) : a = Qe(e));
  const s = su(i, t, o) ? Ir(i) : ve(0);
  let l = (r.left + s.x) / a.x, u = (r.top + s.y) / a.y, d = r.width / a.x, c = r.height / a.y;
  if (i) {
    const p = ie(i), v = o && de(o) ? ie(o) : o;
    let y = p, g = On(y);
    for (; g && o && v !== y; ) {
      const m = Qe(g), w = g.getBoundingClientRect(), P = ce(g), C = w.left + (g.clientLeft + parseFloat(P.paddingLeft)) * m.x, h = w.top + (g.clientTop + parseFloat(P.paddingTop)) * m.y;
      l *= m.x, u *= m.y, d *= m.x, c *= m.y, l += C, u += h, y = ie(g), g = On(y);
    }
  }
  return Mt({
    width: d,
    height: c,
    x: l,
    y: u
  });
}
function Zn(e, n) {
  const t = Xt(e).scrollLeft;
  return n ? n.left + t : We(be(e)).left + t;
}
function Tr(e, n, t) {
  t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), r = o.left + n.scrollLeft - (t ? 0 : (
    // RTL <body> scrollbar.
    Zn(e, o)
  )), i = o.top + n.scrollTop;
  return {
    x: r,
    y: i
  };
}
function lu(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: o,
    strategy: r
  } = e;
  const i = r === "fixed", a = be(o), s = n ? Yt(n.floating) : !1;
  if (o === a || s && i)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ve(1);
  const d = ve(0), c = me(o);
  if ((c || !c && !i) && ((Ue(o) !== "body" || ht(a)) && (l = Xt(o)), me(o))) {
    const v = We(o);
    u = Qe(o), d.x = v.x + o.clientLeft, d.y = v.y + o.clientTop;
  }
  const p = a && !c && !i ? Tr(a, l, !0) : ve(0);
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: t.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function uu(e) {
  return Array.from(e.getClientRects());
}
function du(e) {
  const n = be(e), t = Xt(e), o = e.ownerDocument.body, r = re(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth), i = re(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -t.scrollLeft + Zn(e);
  const s = -t.scrollTop;
  return ce(o).direction === "rtl" && (a += re(n.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: a,
    y: s
  };
}
function cu(e, n) {
  const t = ie(e), o = be(e), r = t.visualViewport;
  let i = o.clientWidth, a = o.clientHeight, s = 0, l = 0;
  if (r) {
    i = r.width, a = r.height;
    const u = Qn();
    (!u || u && n === "fixed") && (s = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function fu(e, n) {
  const t = We(e, !0, n === "fixed"), o = t.top + e.clientTop, r = t.left + e.clientLeft, i = me(e) ? Qe(e) : ve(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = r * i.x, u = o * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function Lo(e, n, t) {
  let o;
  if (n === "viewport")
    o = cu(e, t);
  else if (n === "document")
    o = du(be(e));
  else if (de(n))
    o = fu(n, t);
  else {
    const r = Ir(e);
    o = {
      x: n.x - r.x,
      y: n.y - r.y,
      width: n.width,
      height: n.height
    };
  }
  return Mt(o);
}
function $r(e, n) {
  const t = Me(e);
  return t === n || !de(t) || tt(t) ? !1 : ce(t).position === "fixed" || $r(t, n);
}
function pu(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let o = vt(e, [], !1).filter((s) => de(s) && Ue(s) !== "body"), r = null;
  const i = ce(e).position === "fixed";
  let a = i ? Me(e) : e;
  for (; de(a) && !tt(a); ) {
    const s = ce(a), l = Xn(a);
    !l && s.position === "fixed" && (r = null), (i ? !l && !r : !l && s.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || ht(a) && !l && $r(e, a)) ? o = o.filter((d) => d !== a) : r = s, a = Me(a);
  }
  return n.set(e, o), o;
}
function vu(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: o,
    strategy: r
  } = e;
  const a = [...t === "clippingAncestors" ? Yt(n) ? [] : pu(n, this._c) : [].concat(t), o], s = a[0], l = a.reduce((u, d) => {
    const c = Lo(n, d, r);
    return u.top = re(c.top, u.top), u.right = Be(c.right, u.right), u.bottom = Be(c.bottom, u.bottom), u.left = re(c.left, u.left), u;
  }, Lo(n, s, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function yu(e) {
  const {
    width: n,
    height: t
  } = Pr(e);
  return {
    width: n,
    height: t
  };
}
function mu(e, n, t) {
  const o = me(n), r = be(n), i = t === "fixed", a = We(e, !0, i, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ve(0);
  if (o || !o && !i)
    if ((Ue(n) !== "body" || ht(r)) && (s = Xt(n)), o) {
      const p = We(n, !0, i, n);
      l.x = p.x + n.clientLeft, l.y = p.y + n.clientTop;
    } else r && (l.x = Zn(r));
  const u = r && !o && !i ? Tr(r, s) : ve(0), d = a.left + s.scrollLeft - l.x - u.x, c = a.top + s.scrollTop - l.y - u.y;
  return {
    x: d,
    y: c,
    width: a.width,
    height: a.height
  };
}
function cn(e) {
  return ce(e).position === "static";
}
function No(e, n) {
  if (!me(e) || ce(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return be(e) === t && (t = t.ownerDocument.body), t;
}
function Dr(e, n) {
  const t = ie(e);
  if (Yt(e))
    return t;
  if (!me(e)) {
    let r = Me(e);
    for (; r && !tt(r); ) {
      if (de(r) && !cn(r))
        return r;
      r = Me(r);
    }
    return t;
  }
  let o = No(e, n);
  for (; o && ru(o) && cn(o); )
    o = No(o, n);
  return o && tt(o) && cn(o) && !Xn(o) ? t : o || iu(e) || t;
}
const gu = async function(e) {
  const n = this.getOffsetParent || Dr, t = this.getDimensions, o = await t(e.floating);
  return {
    reference: mu(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function hu(e) {
  return ce(e).direction === "rtl";
}
const bu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: lu,
  getDocumentElement: be,
  getClippingRect: vu,
  getOffsetParent: Dr,
  getElementRects: gu,
  getClientRects: uu,
  getDimensions: yu,
  getScale: Qe,
  isElement: de,
  isRTL: hu
};
function Br(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function _u(e, n) {
  let t = null, o;
  const r = be(e);
  function i() {
    var s;
    clearTimeout(o), (s = t) == null || s.disconnect(), t = null;
  }
  function a(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: c,
      width: p,
      height: v
    } = u;
    if (s || n(), !p || !v)
      return;
    const y = Et(c), g = Et(r.clientWidth - (d + p)), m = Et(r.clientHeight - (c + v)), w = Et(d), C = {
      rootMargin: -y + "px " + -g + "px " + -m + "px " + -w + "px",
      threshold: re(0, Be(1, l)) || 1
    };
    let h = !0;
    function I(q) {
      const O = q[0].intersectionRatio;
      if (O !== l) {
        if (!h)
          return a();
        O ? a(!1, O) : o = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !Br(u, e.getBoundingClientRect()) && a(), h = !1;
    }
    try {
      t = new IntersectionObserver(I, {
        ...C,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(I, C);
    }
    t.observe(e);
  }
  return a(!0), i;
}
function wu(e, n, t, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, u = Jn(e), d = r || i ? [...u ? vt(u) : [], ...vt(n)] : [];
  d.forEach((w) => {
    r && w.addEventListener("scroll", t, {
      passive: !0
    }), i && w.addEventListener("resize", t);
  });
  const c = u && s ? _u(u, t) : null;
  let p = -1, v = null;
  a && (v = new ResizeObserver((w) => {
    let [P] = w;
    P && P.target === u && v && (v.unobserve(n), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var C;
      (C = v) == null || C.observe(n);
    })), t();
  }), u && !l && v.observe(u), v.observe(n));
  let y, g = l ? We(e) : null;
  l && m();
  function m() {
    const w = We(e);
    g && !Br(g, w) && t(), g = w, y = requestAnimationFrame(m);
  }
  return t(), () => {
    var w;
    d.forEach((P) => {
      r && P.removeEventListener("scroll", t), i && P.removeEventListener("resize", t);
    }), c?.(), (w = v) == null || w.disconnect(), v = null, l && cancelAnimationFrame(y);
  };
}
const Cu = eu, Su = tu, Vo = Ql, qu = ou, Eu = Jl, Au = Xl, Ou = nu, xu = (e, n, t) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: bu,
    ...t
  }, i = {
    ...r.platform,
    _c: o
  };
  return Yl(e, n, {
    ...r,
    platform: i
  });
};
function Pu(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function xn(e) {
  if (Pu(e)) {
    const n = e.$el;
    return Yn(n) && Ue(n) === "#comment" ? null : n;
  }
  return e;
}
function Xe(e) {
  return typeof e == "function" ? e() : f(e);
}
function Iu(e) {
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const t = xn(Xe(e.element));
      return t == null ? {} : Au({
        element: t,
        padding: e.padding
      }).fn(n);
    }
  };
}
function kr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function jo(e, n) {
  const t = kr(e);
  return Math.round(n * t) / t;
}
function Tu(e, n, t) {
  t === void 0 && (t = {});
  const o = t.whileElementsMounted, r = $(() => {
    var O;
    return (O = Xe(t.open)) != null ? O : !0;
  }), i = $(() => Xe(t.middleware)), a = $(() => {
    var O;
    return (O = Xe(t.placement)) != null ? O : "bottom";
  }), s = $(() => {
    var O;
    return (O = Xe(t.strategy)) != null ? O : "absolute";
  }), l = $(() => {
    var O;
    return (O = Xe(t.transform)) != null ? O : !0;
  }), u = $(() => xn(e.value)), d = $(() => xn(n.value)), c = E(0), p = E(0), v = E(s.value), y = E(a.value), g = In({}), m = E(!1), w = $(() => {
    const O = {
      position: v.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return O;
    const D = jo(d.value, c.value), k = jo(d.value, p.value);
    return l.value ? {
      ...O,
      transform: "translate(" + D + "px, " + k + "px)",
      ...kr(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: v.value,
      left: D + "px",
      top: k + "px"
    };
  });
  let P;
  function C() {
    if (u.value == null || d.value == null)
      return;
    const O = r.value;
    xu(u.value, d.value, {
      middleware: i.value,
      placement: a.value,
      strategy: s.value
    }).then((D) => {
      c.value = D.x, p.value = D.y, v.value = D.strategy, y.value = D.placement, g.value = D.middlewareData, m.value = O !== !1;
    });
  }
  function h() {
    typeof P == "function" && (P(), P = void 0);
  }
  function I() {
    if (h(), o === void 0) {
      C();
      return;
    }
    if (u.value != null && d.value != null) {
      P = o(u.value, d.value, C);
      return;
    }
  }
  function q() {
    r.value || (m.value = !1);
  }
  return Y([i, a, s, r], C, {
    flush: "sync"
  }), Y([u, d], I, {
    flush: "sync"
  }), Y(r, q, {
    flush: "sync"
  }), Ko() && Uo(h), {
    x: Ve(c),
    y: Ve(p),
    strategy: Ve(v),
    placement: Ve(y),
    middlewareData: Ve(g),
    isPositioned: Ve(m),
    floatingStyles: w,
    update: C
  };
}
const Mr = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: !0,
  align: "center",
  alignOffset: 0,
  alignFlip: !0,
  arrowPadding: 0,
  hideShiftedArrow: !0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [$u, Du] = ee("PopperContent");
var Bu = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ qe({
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...Mr }),
  emits: ["placed"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = Ar(), { forwardRef: i, currentElement: a } = R(), s = E(), l = E(), { width: u, height: d } = Es(l), c = $(() => t.side + (t.align !== "center" ? `-${t.align}` : "")), p = $(() => typeof t.collisionPadding == "number" ? t.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...t.collisionPadding
    }), v = $(() => Array.isArray(t.collisionBoundary) ? t.collisionBoundary : [t.collisionBoundary]), y = $(() => ({
      padding: p.value,
      boundary: v.value.filter(Ll),
      altBoundary: v.value.length > 0
    })), g = $(() => ({
      mainAxis: t.sideFlip,
      crossAxis: t.alignFlip
    })), m = yi(() => [
      Cu({
        mainAxis: t.sideOffset + d.value,
        alignmentAxis: t.alignOffset
      }),
      t.prioritizePosition && t.avoidCollisions && Vo({
        ...y.value,
        ...g.value
      }),
      t.avoidCollisions && Su({
        mainAxis: !0,
        crossAxis: !!t.prioritizePosition,
        limiter: t.sticky === "partial" ? Ou() : void 0,
        ...y.value
      }),
      !t.prioritizePosition && t.avoidCollisions && Vo({
        ...y.value,
        ...g.value
      }),
      qu({
        ...y.value,
        apply: ({ elements: W, rects: J, availableWidth: K, availableHeight: T }) => {
          const { width: L, height: N } = J.reference, z = W.floating.style;
          z.setProperty("--reka-popper-available-width", `${K}px`), z.setProperty("--reka-popper-available-height", `${T}px`), z.setProperty("--reka-popper-anchor-width", `${L}px`), z.setProperty("--reka-popper-anchor-height", `${N}px`);
        }
      }),
      l.value && Iu({
        element: l.value,
        padding: t.arrowPadding
      }),
      Nl({
        arrowWidth: u.value,
        arrowHeight: d.value
      }),
      t.hideWhenDetached && Eu({
        strategy: "referenceHidden",
        ...y.value
      })
    ]), w = $(() => t.reference ?? r.anchor.value), { floatingStyles: P, placement: C, isPositioned: h, middlewareData: I } = Tu(w, s, {
      strategy: t.positionStrategy,
      placement: c,
      whileElementsMounted: (...W) => wu(...W, {
        layoutShift: !t.disableUpdateOnLayoutShift,
        animationFrame: t.updatePositionStrategy === "always"
      }),
      middleware: m
    }), q = $(() => qn(C.value)[0]), O = $(() => qn(C.value)[1]);
    Qo(() => {
      h.value && o("placed");
    });
    const D = $(() => {
      const W = I.value.arrow?.centerOffset !== 0;
      return t.hideShiftedArrow && W;
    }), k = E("");
    te(() => {
      a.value && (k.value = window.getComputedStyle(a.value).zIndex);
    });
    const F = $(() => I.value.arrow?.x ?? 0), Q = $(() => I.value.arrow?.y ?? 0);
    return Du({
      placedSide: q,
      onArrowChange: (W) => l.value = W,
      arrowX: F,
      arrowY: Q,
      shouldHideArrow: D
    }), (W, J) => (_(), H("div", {
      ref_key: "floatingRef",
      ref: s,
      "data-reka-popper-content-wrapper": "",
      style: Rt({
        ...f(P),
        transform: f(h) ? f(P).transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: k.value,
        "--reka-popper-transform-origin": [f(I).transformOrigin?.x, f(I).transformOrigin?.y].join(" "),
        ...f(I).hide?.referenceHidden && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      })
    }, [B(f(j), M({ ref: f(i) }, W.$attrs, {
      "as-child": t.asChild,
      as: W.as,
      "data-side": q.value,
      "data-align": O.value,
      style: { animation: f(h) ? void 0 : "none" }
    }), {
      default: b(() => [S(W.$slots, "default")]),
      _: 3
    }, 16, [
      "as-child",
      "as",
      "data-side",
      "data-align",
      "style"
    ])], 4));
  }
}), eo = Bu;
const ku = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var Mu = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PopperArrow",
  props: {
    width: {
      type: Number,
      required: !1
    },
    height: {
      type: Number,
      required: !1
    },
    rounded: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "svg"
    }
  },
  setup(e) {
    const { forwardRef: n } = R(), t = $u(), o = $(() => ku[t.placedSide.value]);
    return (r, i) => (_(), H("span", {
      ref: (a) => {
        f(t).onArrowChange(a);
      },
      style: Rt({
        position: "absolute",
        left: f(t).arrowX?.value ? `${f(t).arrowX?.value}px` : void 0,
        top: f(t).arrowY?.value ? `${f(t).arrowY?.value}px` : void 0,
        [o.value]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[f(t).placedSide.value],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[f(t).placedSide.value],
        visibility: f(t).shouldHideArrow.value ? "hidden" : void 0
      })
    }, [B(Rl, M(r.$attrs, {
      ref: f(n),
      style: { display: "block" },
      as: r.as,
      "as-child": r.asChild,
      rounded: r.rounded,
      width: r.width,
      height: r.height
    }), {
      default: b(() => [S(r.$slots, "default")]),
      _: 3
    }, 16, [
      "as",
      "as-child",
      "rounded",
      "width",
      "height"
    ])], 4));
  }
}), to = Mu;
function Fu(e) {
  const n = jt({ nonce: E() });
  return $(() => e?.value || n.nonce?.value);
}
const [Ru, Lu] = ee("RovingFocusGroup");
var Nu = /* @__PURE__ */ A({
  __name: "RovingFocusGroup",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    currentTabStopId: {
      type: [String, null],
      required: !1
    },
    defaultCurrentTabStopId: {
      type: String,
      required: !1
    },
    preventScrollOnEntryFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, { loop: i, orientation: a, dir: s } = ge(o), l = Ht(s), u = De(o, "currentTabStopId", r, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), d = E(!1), c = E(!1), p = E(0), { getItems: v, CollectionSlot: y } = Ee({ isProvider: !0 });
    function g(w) {
      const P = !c.value;
      if (w.currentTarget && w.target === w.currentTarget && P && !d.value) {
        const C = new CustomEvent(Al, Ol);
        if (w.currentTarget.dispatchEvent(C), r("entryFocus", C), !C.defaultPrevented) {
          const h = v().map((k) => k.ref).filter((k) => k.dataset.disabled !== ""), I = h.find((k) => k.getAttribute("data-active") === ""), q = h.find((k) => k.getAttribute("data-highlighted") === ""), O = h.find((k) => k.id === u.value), D = [
            I,
            q,
            O,
            ...h
          ].filter(Boolean);
          Er(D, o.preventScrollOnEntryFocus);
        }
      }
      c.value = !1;
    }
    function m() {
      setTimeout(() => {
        c.value = !1;
      }, 1);
    }
    return n({ getItems: v }), Lu({
      loop: i,
      dir: l,
      orientation: a,
      currentTabStopId: u,
      onItemFocus: (w) => {
        u.value = w;
      },
      onItemShiftTab: () => {
        d.value = !0;
      },
      onFocusableItemAdd: () => {
        p.value++;
      },
      onFocusableItemRemove: () => {
        p.value--;
      }
    }), (w, P) => (_(), x(f(y), null, {
      default: b(() => [B(f(j), {
        tabindex: d.value || p.value === 0 ? -1 : 0,
        "data-orientation": f(a),
        as: w.as,
        "as-child": w.asChild,
        dir: f(l),
        style: { outline: "none" },
        onMousedown: P[0] || (P[0] = (C) => c.value = !0),
        onMouseup: m,
        onFocus: g,
        onBlur: P[1] || (P[1] = (C) => d.value = !1)
      }, {
        default: b(() => [S(w.$slots, "default")]),
        _: 3
      }, 8, [
        "tabindex",
        "data-orientation",
        "as",
        "as-child",
        "dir"
      ])]),
      _: 3
    }));
  }
}), Vu = Nu, ju = /* @__PURE__ */ A({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {
      type: String,
      required: !1
    },
    focusable: {
      type: Boolean,
      required: !1,
      default: !0
    },
    active: {
      type: Boolean,
      required: !1
    },
    allowShiftKey: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const n = e, t = Ru(), o = we(), r = $(() => n.tabStopId || o), i = $(() => t.currentTabStopId.value === r.value), { getItems: a, CollectionItem: s } = Ee();
    Z(() => {
      n.focusable && t.onFocusableItemAdd();
    }), nt(() => {
      n.focusable && t.onFocusableItemRemove();
    });
    function l(u) {
      if (u.key === "Tab" && u.shiftKey) {
        t.onItemShiftTab();
        return;
      }
      if (u.target !== u.currentTarget) return;
      const d = Il(u, t.orientation.value, t.dir.value);
      if (d !== void 0) {
        if (u.metaKey || u.ctrlKey || u.altKey || !n.allowShiftKey && u.shiftKey) return;
        u.preventDefault();
        let c = [...a().map((p) => p.ref).filter((p) => p.dataset.disabled !== "")];
        if (d === "last") c.reverse();
        else if (d === "prev" || d === "next") {
          d === "prev" && c.reverse();
          const p = c.indexOf(u.currentTarget);
          c = t.loop.value ? Tl(c, p + 1) : c.slice(p + 1);
        }
        G(() => Er(c));
      }
    }
    return (u, d) => (_(), x(f(s), null, {
      default: b(() => [B(f(j), {
        tabindex: i.value ? 0 : -1,
        "data-orientation": f(t).orientation.value,
        "data-active": u.active ? "" : void 0,
        "data-disabled": u.focusable ? void 0 : "",
        as: u.as,
        "as-child": u.asChild,
        onMousedown: d[0] || (d[0] = (c) => {
          u.focusable ? f(t).onItemFocus(r.value) : c.preventDefault();
        }),
        onFocus: d[1] || (d[1] = (c) => f(t).onItemFocus(r.value)),
        onKeydown: l
      }, {
        default: b(() => [S(u.$slots, "default")]),
        _: 3
      }, 8, [
        "tabindex",
        "data-orientation",
        "data-active",
        "data-disabled",
        "as",
        "as-child"
      ])]),
      _: 3
    }));
  }
}), Wu = ju;
const [Hu] = ee("CheckboxGroupRoot");
function no(e) {
  return e === "indeterminate";
}
function Fr(e) {
  return no(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const [Ku, Uu] = ee("CheckboxRoot");
var zu = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "CheckboxRoot",
  props: {
    defaultValue: {
      type: null,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    value: {
      type: null,
      required: !1,
      default: "on"
    },
    id: {
      type: String,
      required: !1
    },
    trueValue: {
      type: null,
      required: !1,
      default: () => !0
    },
    falseValue: {
      type: null,
      required: !1,
      default: () => !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = n, { forwardRef: r, currentElement: i } = R(), a = Hu(null), s = De(t, "modelValue", o, {
      defaultValue: t.defaultValue ?? t.falseValue,
      passive: t.modelValue === void 0
    }), l = $(() => a?.disabled.value || t.disabled), u = $(() => ft(s.value, t.trueValue)), d = $(() => et(a?.modelValue.value) ? s.value === "indeterminate" ? "indeterminate" : u.value : Oo(a.modelValue.value, t.value));
    function c() {
      if (et(a?.modelValue.value))
        s.value === "indeterminate" ? s.value = t.trueValue : s.value = u.value ? t.falseValue : t.trueValue;
      else {
        const y = [...a.modelValue.value || []];
        if (Oo(y, t.value)) {
          const g = y.findIndex((m) => ft(m, t.value));
          y.splice(g, 1);
        } else y.push(t.value);
        a.modelValue.value = y;
      }
    }
    const p = hr(i), v = $(() => t.id && i.value ? document.querySelector(`[for="${t.id}"]`)?.innerText : void 0);
    return Uu({
      disabled: l,
      state: d
    }), (y, g) => (_(), x(Ft(f(a)?.rovingFocus.value ? f(Wu) : f(j)), M(y.$attrs, {
      id: y.id,
      ref: f(r),
      role: "checkbox",
      "as-child": y.asChild,
      as: y.as,
      type: y.as === "button" ? "button" : void 0,
      "aria-checked": f(no)(d.value) ? "mixed" : d.value,
      "aria-required": y.required,
      "aria-label": y.$attrs["aria-label"] || v.value,
      "data-state": f(Fr)(d.value),
      "data-disabled": l.value ? "" : void 0,
      disabled: l.value,
      focusable: f(a)?.rovingFocus.value ? !l.value : void 0,
      onKeydown: Pt(Te(() => {
      }, ["prevent"]), ["enter"]),
      onClick: c
    }), {
      default: b(() => [S(y.$slots, "default", {
        modelValue: f(s),
        state: d.value
      }), f(p) && y.name && !f(a) ? (_(), x(f(El), {
        key: 0,
        type: "checkbox",
        checked: !!d.value,
        name: y.name,
        value: y.value,
        disabled: l.value,
        required: y.required
      }, null, 8, [
        "checked",
        "name",
        "value",
        "disabled",
        "required"
      ])) : U("v-if", !0)]),
      _: 3
    }, 16, [
      "id",
      "as-child",
      "as",
      "type",
      "aria-checked",
      "aria-required",
      "aria-label",
      "data-state",
      "data-disabled",
      "disabled",
      "focusable",
      "onKeydown"
    ]));
  }
}), Gu = zu, Yu = /* @__PURE__ */ A({
  __name: "CheckboxIndicator",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const { forwardRef: n } = R(), t = Ku();
    return (o, r) => (_(), x(f(it), { present: o.forceMount || f(no)(f(t).state.value) || f(t).state.value === !0 }, {
      default: b(() => [B(f(j), M({
        ref: f(n),
        "data-state": f(Fr)(f(t).state.value),
        "data-disabled": f(t).disabled.value ? "" : void 0,
        style: { pointerEvents: "none" },
        "as-child": o.asChild,
        as: o.as
      }, o.$attrs), {
        default: b(() => [S(o.$slots, "default")]),
        _: 3
      }, 16, [
        "data-state",
        "data-disabled",
        "as-child",
        "as"
      ])]),
      _: 3
    }, 8, ["present"]));
  }
}), Xu = Yu, Qu = /* @__PURE__ */ A({
  __name: "MenuAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const n = e;
    return (t, o) => (_(), x(f(Kn), ne(fe(n)), {
      default: b(() => [S(t.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Ju = Qu, Zu = /* @__PURE__ */ A({
  __name: "MenuArrow",
  props: {
    width: {
      type: Number,
      required: !1
    },
    height: {
      type: Number,
      required: !1
    },
    rounded: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const n = e;
    return (t, o) => (_(), x(f(to), ne(fe(n)), {
      default: b(() => [S(t.$slots, "default")]),
      _: 3
    }, 16));
  }
}), ed = Zu;
function td() {
  const e = E(!1);
  return Z(() => {
    It("keydown", () => {
      e.value = !0;
    }, {
      capture: !0,
      passive: !0
    }), It(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, {
      capture: !0,
      passive: !0
    });
  }), e;
}
const nd = Jo(td), [Qt, od] = ee(["MenuRoot", "MenuSub"], "MenuContext"), [oo, rd] = ee("MenuRoot");
var id = /* @__PURE__ */ A({
  __name: "MenuRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: !1
    },
    dir: {
      type: String,
      required: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: n }) {
    const t = e, o = n, { modal: r, dir: i } = ge(t), a = Ht(i), s = De(t, "open", o), l = E(), u = nd();
    return od({
      open: s,
      onOpenChange: (d) => {
        s.value = d;
      },
      content: l,
      onContentChange: (d) => {
        l.value = d;
      }
    }), rd({
      onClose: () => {
        s.value = !1;
      },
      isUsingKeyboardRef: u,
      dir: a,
      modal: r
    }), (d, c) => (_(), x(f(Hn), null, {
      default: b(() => [S(d.$slots, "default")]),
      _: 3
    }));
  }
}), ad = id;
const [Rr, sd] = ee("MenuContent");
var ld = /* @__PURE__ */ A({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ qe({
    loop: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    disableOutsideScroll: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...Mr }),
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus",
    "dismiss"
  ],
  setup(e, { emit: n }) {
    const t = e, o = n, r = Qt(), i = oo(), { trapFocus: a, disableOutsidePointerEvents: s, loop: l } = ge(t);
    gr(), Ln(s.value);
    const u = E(""), d = E(0), c = E(0), p = E(null), v = E("right"), y = E(0), g = E(null), m = E(), { forwardRef: w, currentElement: P } = R(), { handleTypeaheadSearch: C } = Vn(), h = E();
    function I(T) {
      const L = xo(T, h.value || X(), P.value, {
        loop: l.value,
        arrowKeyOptions: "vertical",
        dir: i?.dir.value,
        focus: !1,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      L && (h.value = L, L.scrollIntoView({ block: "nearest" }));
    }
    function q() {
      h.value && h.value.click();
    }
    const O = E(), D = E();
    Y(h, (T) => {
      D.value && (T === void 0 || T !== D.value.trigger.value) && (D.value.onOpenChange(!1), D.value = void 0);
    }), Y(P, (T) => {
      r.onContentChange(T);
    }), nt(() => {
      window.clearTimeout(d.value);
    });
    function k(T) {
      return v.value === p.value?.side && Js(T, p.value?.area);
    }
    async function F(T) {
      o("openAutoFocus", T), !T.defaultPrevented && (T.preventDefault(), P.value?.focus({ preventScroll: !0 }));
    }
    function Q(T) {
      if (T.defaultPrevented) return;
      const L = T.target, N = L.closest("[data-reka-menu-content]") === T.currentTarget, z = ["input", "textarea"].includes(L.tagName.toLowerCase()), ae = T.ctrlKey || T.altKey || T.metaKey, Ae = T.key.length === 1, bt = xo(T, X(), P.value, {
        loop: l.value,
        arrowKeyOptions: "vertical",
        dir: i?.dir.value,
        focus: !0,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      if (bt) return bt?.focus();
      if (T.code === "Space") return;
      const ze = m.value?.getItems() ?? [];
      if (N && (T.key === "Tab" && T.preventDefault(), !ae && Ae && !z && C(T.key, ze)), T.target !== P.value || !Xs.includes(T.key)) return;
      T.preventDefault();
      const _t = [...ze.map((Ge) => Ge.ref)];
      Cr.includes(T.key) && _t.reverse(), Sn(_t);
    }
    function W(T) {
      T?.currentTarget?.contains?.(T.target) || (window.clearTimeout(d.value), u.value = "");
    }
    function J(T) {
      if (!Dt(T)) return;
      const L = T.target, N = y.value !== T.clientX;
      if (T?.currentTarget?.contains(L) && N) {
        const z = T.clientX > y.value ? "right" : "left";
        v.value = z, y.value = T.clientX;
      }
    }
    function K(T) {
      Dt(T) && O.value && O.value.focus();
    }
    return sd({
      onItemEnter: (T) => !!k(T),
      onItemLeave: (T) => {
        if (k(T)) return;
        ["INPUT", "TEXTAREA"].includes(X()?.tagName || "") || P.value?.focus(), g.value = null;
      },
      onTriggerLeave: (T) => !!k(T),
      searchRef: u,
      highlightedElement: h,
      onKeydownNavigation: I,
      onKeydownEnter: q,
      filterElement: O,
      onFilterElementChange: (T) => {
        O.value = T;
      },
      activeSubmenuContext: D,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (T) => {
        p.value = T;
      }
    }), (T, L) => (_(), x(f(jn), {
      "as-child": "",
      trapped: f(a),
      onMountAutoFocus: F,
      onUnmountAutoFocus: L[7] || (L[7] = (N) => o("closeAutoFocus", N))
    }, {
      default: b(() => [B(f(Ut), {
        "as-child": "",
        "disable-outside-pointer-events": f(s),
        onEscapeKeyDown: L[2] || (L[2] = (N) => o("escapeKeyDown", N)),
        onPointerDownOutside: L[3] || (L[3] = (N) => o("pointerDownOutside", N)),
        onFocusOutside: L[4] || (L[4] = (N) => o("focusOutside", N)),
        onInteractOutside: L[5] || (L[5] = (N) => o("interactOutside", N)),
        onDismiss: L[6] || (L[6] = (N) => o("dismiss"))
      }, {
        default: b(() => [B(f(Vu), {
          ref_key: "rovingFocusGroupRef",
          ref: m,
          "current-tab-stop-id": g.value,
          "onUpdate:currentTabStopId": L[0] || (L[0] = (N) => g.value = N),
          "as-child": "",
          orientation: "vertical",
          dir: f(i).dir.value,
          loop: f(l),
          onEntryFocus: L[1] || (L[1] = (N) => {
            o("entryFocus", N), f(i).isUsingKeyboardRef.value || N.preventDefault();
          })
        }, {
          default: b(() => [B(f(eo), {
            ref: f(w),
            role: "menu",
            as: T.as,
            "as-child": T.asChild,
            "aria-orientation": "vertical",
            "data-reka-menu-content": "",
            "data-state": f(Sr)(f(r).open.value),
            dir: f(i).dir.value,
            side: T.side,
            "side-offset": T.sideOffset,
            align: T.align,
            "align-offset": T.alignOffset,
            "avoid-collisions": T.avoidCollisions,
            "collision-boundary": T.collisionBoundary,
            "collision-padding": T.collisionPadding,
            "arrow-padding": T.arrowPadding,
            "prioritize-position": T.prioritizePosition,
            "position-strategy": T.positionStrategy,
            "update-position-strategy": T.updatePositionStrategy,
            sticky: T.sticky,
            "hide-when-detached": T.hideWhenDetached,
            reference: T.reference,
            onKeydown: Q,
            onBlur: W,
            onPointermove: J,
            onPointerenter: K
          }, {
            default: b(() => [S(T.$slots, "default")]),
            _: 3
          }, 8, [
            "as",
            "as-child",
            "data-state",
            "dir",
            "side",
            "side-offset",
            "align",
            "align-offset",
            "avoid-collisions",
            "collision-boundary",
            "collision-padding",
            "arrow-padding",
            "prioritize-position",
            "position-strategy",
            "update-position-strategy",
            "sticky",
            "hide-when-detached",
            "reference"
          ])]),
          _: 3
        }, 8, [
          "current-tab-stop-id",
          "dir",
          "loop"
        ])]),
        _: 3
      }, 8, ["disable-outside-pointer-events"])]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Lr = ld, ud = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const n = e, t = Rr(), { forwardRef: o, currentElement: r } = R(), { CollectionItem: i } = Ee(), a = E(!1), s = $(() => a.value || t.highlightedElement.value === r.value);
    async function l(d) {
      if (!(d.defaultPrevented || !Dt(d))) {
        if (n.disabled) t.onItemLeave(d);
        else if (!t.onItemEnter(d)) {
          const p = d.currentTarget;
          t.highlightedElement.value = p, ["INPUT", "TEXTAREA"].includes(X()?.tagName || "") || p.focus({ preventScroll: !0 });
        }
      }
    }
    async function u(d) {
      await G(), !d.defaultPrevented && Dt(d) && t.onItemLeave(d);
    }
    return (d, c) => (_(), x(f(i), { value: { textValue: d.textValue } }, {
      default: b(() => [B(f(j), M({
        ref: f(o),
        role: "menuitem",
        tabindex: "-1"
      }, d.$attrs, {
        as: d.as,
        "as-child": d.asChild,
        "aria-disabled": d.disabled || void 0,
        "data-disabled": d.disabled ? "" : void 0,
        "data-highlighted": s.value ? "" : void 0,
        onPointermove: l,
        onPointerleave: u,
        onFocus: c[0] || (c[0] = async (p) => {
          await G(), !(p.defaultPrevented || d.disabled) && (a.value = !0, f(t).highlightedElement.value = p.currentTarget);
        }),
        onBlur: c[1] || (c[1] = async (p) => {
          await G(), !p.defaultPrevented && (a.value = !1);
        })
      }), {
        default: b(() => [S(d.$slots, "default")]),
        _: 3
      }, 16, [
        "as",
        "as-child",
        "aria-disabled",
        "data-disabled",
        "data-highlighted"
      ])]),
      _: 3
    }, 8, ["value"]));
  }
}), dd = ud, cd = /* @__PURE__ */ A({
  __name: "MenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: n }) {
    const t = e, o = n, { forwardRef: r, currentElement: i } = R(), a = oo(), s = Rr(), l = E(!1);
    async function u() {
      const d = i.value;
      if (!t.disabled && d) {
        const c = new CustomEvent(Gs, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", c), await G(), c.defaultPrevented ? l.value = !1 : a.onClose();
      }
    }
    return (d, c) => (_(), x(dd, M(t, {
      ref: f(r),
      onClick: u,
      onPointerdown: c[0] || (c[0] = () => {
        l.value = !0;
      }),
      onPointerup: c[1] || (c[1] = async (p) => {
        await G(), !p.defaultPrevented && (l.value || p.currentTarget?.click());
      }),
      onKeydown: c[2] || (c[2] = async (p) => {
        const v = f(s).searchRef.value !== "";
        d.disabled || v && p.key === " " || f(Cn).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }), {
      default: b(() => [S(d.$slots, "default")]),
      _: 3
    }, 16));
  }
}), fd = cd, pd = /* @__PURE__ */ A({
  __name: "MenuRootContentModal",
  props: {
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: n }) {
    const t = e, o = n, r = rt(t, o), i = Qt(), { forwardRef: a, currentElement: s } = R();
    return Nn(s), (l, u) => (_(), x(Lr, M(f(r), {
      ref: f(a),
      "trap-focus": f(i).open.value,
      "disable-outside-pointer-events": f(i).open.value,
      "disable-outside-scroll": !0,
      onDismiss: u[0] || (u[0] = (d) => f(i).onOpenChange(!1)),
      onFocusOutside: u[1] || (u[1] = Te((d) => o("focusOutside", d), ["prevent"]))
    }), {
      default: b(() => [S(l.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), vd = pd, yd = /* @__PURE__ */ A({
  __name: "MenuRootContentNonModal",
  props: {
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: n }) {
    const r = rt(e, n), i = Qt();
    return (a, s) => (_(), x(Lr, M(f(r), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (l) => f(i).onOpenChange(!1))
    }), {
      default: b(() => [S(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), md = yd, gd = /* @__PURE__ */ A({
  __name: "MenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: n }) {
    const r = rt(e, n), i = Qt(), a = oo();
    return (s, l) => (_(), x(f(it), { present: s.forceMount || f(i).open.value }, {
      default: b(() => [f(a).modal.value ? (_(), x(vd, ne(M({ key: 0 }, {
        ...s.$attrs,
        ...f(r)
      })), {
        default: b(() => [S(s.$slots, "default")]),
        _: 3
      }, 16)) : (_(), x(md, ne(M({ key: 1 }, {
        ...s.$attrs,
        ...f(r)
      })), {
        default: b(() => [S(s.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), hd = gd, bd = /* @__PURE__ */ A({
  __name: "MenuPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const n = e;
    return (t, o) => (_(), x(f(zt), ne(fe(n)), {
      default: b(() => [S(t.$slots, "default")]),
      _: 3
    }, 16));
  }
}), _d = bd, wd = /* @__PURE__ */ A({
  __name: "DropdownMenuArrow",
  props: {
    width: {
      type: Number,
      required: !1,
      default: 10
    },
    height: {
      type: Number,
      required: !1,
      default: 5
    },
    rounded: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "svg"
    }
  },
  setup(e) {
    const n = e;
    return R(), (t, o) => (_(), x(f(ed), ne(fe(n)), {
      default: b(() => [S(t.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Cd = wd;
const [Nr, Sd] = ee("DropdownMenuRoot");
var qd = /* @__PURE__ */ A({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: n }) {
    const t = e, o = n;
    R();
    const r = De(t, "open", o, {
      defaultValue: t.defaultOpen,
      passive: t.open === void 0
    }), i = E(), { modal: a, dir: s } = ge(t), l = Ht(s);
    return Sd({
      open: r,
      onOpenChange: (u) => {
        r.value = u;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerId: "",
      triggerElement: i,
      contentId: "",
      modal: a,
      dir: l
    }), (u, d) => (_(), x(f(ad), {
      open: f(r),
      "onUpdate:open": d[0] || (d[0] = (c) => fn(r) ? r.value = c : null),
      dir: f(l),
      modal: f(a)
    }, {
      default: b(() => [S(u.$slots, "default", { open: f(r) })]),
      _: 3
    }, 8, [
      "open",
      "dir",
      "modal"
    ]));
  }
}), Ed = qd, Ad = /* @__PURE__ */ A({
  __name: "DropdownMenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "closeAutoFocus"
  ],
  setup(e, { emit: n }) {
    const r = rt(e, n);
    R();
    const i = Nr(), a = E(!1);
    function s(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        i.triggerElement.value?.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return i.contentId ||= we(void 0, "reka-dropdown-menu-content"), (l, u) => (_(), x(f(hd), M(f(r), {
      id: f(i).contentId,
      "aria-labelledby": f(i)?.triggerId,
      style: {
        "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
        "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
        "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
        "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
        "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
      },
      onCloseAutoFocus: s,
      onInteractOutside: u[0] || (u[0] = (d) => {
        if (d.defaultPrevented) return;
        const c = d.detail.originalEvent, p = c.button === 0 && c.ctrlKey === !0, v = c.button === 2 || p;
        (!f(i).modal.value || v) && (a.value = !0), f(i).triggerElement.value?.contains(d.target) && d.preventDefault();
      })
    }), {
      default: b(() => [S(l.$slots, "default")]),
      _: 3
    }, 16, ["id", "aria-labelledby"]));
  }
}), Od = Ad, xd = /* @__PURE__ */ A({
  __name: "DropdownMenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: n }) {
    const t = e, r = gt(n);
    return R(), (i, a) => (_(), x(f(fd), ne(fe({
      ...t,
      ...f(r)
    })), {
      default: b(() => [S(i.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Pd = xd, Id = /* @__PURE__ */ A({
  __name: "DropdownMenuPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const n = e;
    return (t, o) => (_(), x(f(_d), ne(fe(n)), {
      default: b(() => [S(t.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Td = Id, $d = /* @__PURE__ */ A({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const n = e, t = Nr(), { forwardRef: o, currentElement: r } = R();
    return Z(() => {
      t.triggerElement = r;
    }), t.triggerId ||= we(void 0, "reka-dropdown-menu-trigger"), (i, a) => (_(), x(f(Ju), { "as-child": "" }, {
      default: b(() => [B(f(j), {
        id: f(t).triggerId,
        ref: f(o),
        type: i.as === "button" ? "button" : void 0,
        "as-child": n.asChild,
        as: i.as,
        "aria-haspopup": "menu",
        "aria-expanded": f(t).open.value,
        "aria-controls": f(t).open.value ? f(t).contentId : void 0,
        "data-disabled": i.disabled ? "" : void 0,
        disabled: i.disabled,
        "data-state": f(t).open.value ? "open" : "closed",
        onClick: a[0] || (a[0] = async (s) => {
          !i.disabled && s.button === 0 && s.ctrlKey === !1 && (f(t)?.onOpenToggle(), await G(), f(t).open.value && s.preventDefault());
        }),
        onKeydown: a[1] || (a[1] = Pt((s) => {
          i.disabled || (["Enter", " "].includes(s.key) && f(t).onOpenToggle(), s.key === "ArrowDown" && f(t).onOpenChange(!0), [
            "Enter",
            " ",
            "ArrowDown"
          ].includes(s.key) && s.preventDefault());
        }, [
          "enter",
          "space",
          "arrow-down"
        ]))
      }, {
        default: b(() => [S(i.$slots, "default")]),
        _: 3
      }, 8, [
        "id",
        "type",
        "as-child",
        "as",
        "aria-expanded",
        "aria-controls",
        "data-disabled",
        "disabled",
        "data-state"
      ])]),
      _: 3
    }));
  }
}), Dd = $d;
const Bd = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], kd = [" ", "Enter"], ue = 10;
function yt(e, n, t) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((o) => Pn(o, n, t)) : Pn(e, n, t);
}
function Pn(e, n, t) {
  return e === void 0 || n === void 0 ? !1 : typeof e == "string" ? e === n : typeof t == "function" ? t(e, n) : typeof t == "string" ? e?.[t] === n?.[t] : ft(e, n);
}
function Md(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0;
}
const Fd = {
  key: 0,
  value: ""
}, [Fe, Vr] = ee("SelectRoot");
var Rd = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "SelectRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1,
      default: void 0
    },
    by: {
      type: [String, Function],
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    autocomplete: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: n }) {
    const t = e, o = n, { required: r, disabled: i, multiple: a, dir: s } = ge(t), l = De(t, "modelValue", o, {
      defaultValue: t.defaultValue ?? (a.value ? [] : void 0),
      passive: t.modelValue === void 0,
      deep: !0
    }), u = De(t, "open", o, {
      defaultValue: t.defaultOpen,
      passive: t.open === void 0
    }), d = E(), c = E(), p = E({
      x: 0,
      y: 0
    }), v = $(() => a.value && Array.isArray(l.value) ? l.value?.length === 0 : et(l.value));
    Ee({ isProvider: !0 });
    const y = Ht(s), g = hr(d), m = E(/* @__PURE__ */ new Set()), w = $(() => Array.from(m.value).map((h) => h.value).join(";"));
    function P(h) {
      if (a.value) {
        const I = Array.isArray(l.value) ? [...l.value] : [], q = I.findIndex((O) => Pn(O, h, t.by));
        q === -1 ? I.push(h) : I.splice(q, 1), l.value = [...I];
      } else l.value = h;
    }
    function C(h) {
      return Array.from(m.value).find((I) => yt(h, I.value, t.by));
    }
    return Vr({
      triggerElement: d,
      onTriggerChange: (h) => {
        d.value = h;
      },
      valueElement: c,
      onValueElementChange: (h) => {
        c.value = h;
      },
      contentId: "",
      modelValue: l,
      onValueChange: P,
      by: t.by,
      open: u,
      multiple: a,
      required: r,
      onOpenChange: (h) => {
        u.value = h;
      },
      dir: y,
      triggerPointerDownPosRef: p,
      disabled: i,
      isEmptyModelValue: v,
      optionsSet: m,
      onOptionAdd: (h) => {
        const I = C(h.value);
        I && m.value.delete(I), m.value.add(h);
      },
      onOptionRemove: (h) => {
        const I = C(h.value);
        I && m.value.delete(I);
      }
    }), (h, I) => (_(), x(f(Hn), null, {
      default: b(() => [S(h.$slots, "default", {
        modelValue: f(l),
        open: f(u)
      }), f(g) ? (_(), x(Vd, {
        key: w.value,
        "aria-hidden": "true",
        tabindex: "-1",
        multiple: f(a),
        required: f(r),
        name: h.name,
        autocomplete: h.autocomplete,
        disabled: f(i),
        value: f(l)
      }, {
        default: b(() => [f(et)(f(l)) ? (_(), H("option", Fd)) : U("v-if", !0), (_(!0), H(Je, null, Tn(Array.from(m.value), (q) => (_(), H("option", M({ key: q.value ?? "" }, { ref_for: !0 }, q), null, 16))), 128))]),
        _: 1
      }, 8, [
        "multiple",
        "required",
        "name",
        "autocomplete",
        "disabled",
        "value"
      ])) : U("v-if", !0)]),
      _: 3
    }));
  }
}), Ld = Rd, Nd = /* @__PURE__ */ A({
  __name: "BubbleSelect",
  props: {
    autocomplete: {
      type: String,
      required: !1
    },
    autofocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    form: {
      type: String,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    },
    size: {
      type: Number,
      required: !1
    },
    value: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const n = e, t = E(), o = Fe();
    Y(() => n.value, (i, a) => {
      const s = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(s, "value").set;
      if (i !== a && u && t.value) {
        const d = new Event("change", { bubbles: !0 });
        u.call(t.value, i), t.value.dispatchEvent(d);
      }
    });
    function r(i) {
      o.onValueChange(i.target.value);
    }
    return (i, a) => (_(), x(f(Wn), { "as-child": "" }, {
      default: b(() => [le("select", M({
        ref_key: "selectElement",
        ref: t
      }, n, { onInput: r }), [S(i.$slots, "default")], 16)]),
      _: 3
    }));
  }
}), Vd = Nd, jd = /* @__PURE__ */ A({
  __name: "SelectPopperPosition",
  props: {
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1,
      default: "start"
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1,
      default: ue
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Kt(e);
    return (o, r) => (_(), x(f(eo), M(f(t), { style: {
      boxSizing: "border-box",
      "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-select-content-available-width": "var(--reka-popper-available-width)",
      "--reka-select-content-available-height": "var(--reka-popper-available-height)",
      "--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
    } }), {
      default: b(() => [S(o.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Wd = jd;
const jr = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Re, Wr] = ee("SelectContent");
var Hd = /* @__PURE__ */ A({
  __name: "SelectContentImpl",
  props: {
    position: {
      type: String,
      required: !1,
      default: "item-aligned"
    },
    bodyLock: {
      type: Boolean,
      required: !1,
      default: !0
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1,
      default: "start"
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: [
    "closeAutoFocus",
    "escapeKeyDown",
    "pointerDownOutside"
  ],
  setup(e, { emit: n }) {
    const t = e, o = n, r = Fe();
    gr(), Ln(t.bodyLock);
    const { CollectionSlot: i, getItems: a } = Ee(), s = E();
    Nn(s);
    const { search: l, handleTypeaheadSearch: u } = Vn(), d = E(), c = E(), p = E(), v = E(!1), y = E(!1), g = E(!1);
    function m() {
      c.value && s.value && Sn([c.value, s.value]);
    }
    Y(v, () => {
      m();
    });
    const { onOpenChange: w, triggerPointerDownPosRef: P } = r;
    te((q) => {
      if (!s.value) return;
      let O = {
        x: 0,
        y: 0
      };
      const D = (F) => {
        O = {
          x: Math.abs(Math.round(F.pageX) - (P.value?.x ?? 0)),
          y: Math.abs(Math.round(F.pageY) - (P.value?.y ?? 0))
        };
      }, k = (F) => {
        F.pointerType !== "touch" && (O.x <= 10 && O.y <= 10 ? F.preventDefault() : s.value?.contains(F.target) || w(!1), document.removeEventListener("pointermove", D), P.value = null);
      };
      P.value !== null && (document.addEventListener("pointermove", D), document.addEventListener("pointerup", k, {
        capture: !0,
        once: !0
      })), q(() => {
        document.removeEventListener("pointermove", D), document.removeEventListener("pointerup", k, { capture: !0 });
      });
    });
    function C(q) {
      const O = q.ctrlKey || q.altKey || q.metaKey;
      if (q.key === "Tab" && q.preventDefault(), !O && q.key.length === 1 && u(q.key, a()), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(q.key)) {
        let k = [...a().map((F) => F.ref)];
        if (["ArrowUp", "End"].includes(q.key) && (k = k.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(q.key)) {
          const F = q.target, Q = k.indexOf(F);
          k = k.slice(Q + 1);
        }
        setTimeout(() => Sn(k)), q.preventDefault();
      }
    }
    const h = $(() => t.position === "popper" ? t : {}), I = Kt(h.value);
    return Wr({
      content: s,
      viewport: d,
      onViewportChange: (q) => {
        d.value = q;
      },
      itemRefCallback: (q, O, D) => {
        const k = !y.value && !D, F = yt(r.modelValue.value, O, r.by);
        if (r.multiple.value) {
          if (g.value) return;
          (F || k) && (c.value = q, F && (g.value = !0));
        } else (F || k) && (c.value = q);
        k && (y.value = !0);
      },
      selectedItem: c,
      selectedItemText: p,
      onItemLeave: () => {
        s.value?.focus();
      },
      itemTextRefCallback: (q, O, D) => {
        const k = !y.value && !D;
        (yt(r.modelValue.value, O, r.by) || k) && (p.value = q);
      },
      focusSelectedItem: m,
      position: t.position,
      isPositioned: v,
      searchRef: l
    }), (q, O) => (_(), x(f(i), null, {
      default: b(() => [B(f(jn), {
        "as-child": "",
        onMountAutoFocus: O[6] || (O[6] = Te(() => {
        }, ["prevent"])),
        onUnmountAutoFocus: O[7] || (O[7] = (D) => {
          o("closeAutoFocus", D), !D.defaultPrevented && (f(r).triggerElement.value?.focus({ preventScroll: !0 }), D.preventDefault());
        })
      }, {
        default: b(() => [B(f(Ut), {
          "as-child": "",
          "disable-outside-pointer-events": q.disableOutsidePointerEvents,
          onFocusOutside: O[2] || (O[2] = Te(() => {
          }, ["prevent"])),
          onDismiss: O[3] || (O[3] = (D) => f(r).onOpenChange(!1)),
          onEscapeKeyDown: O[4] || (O[4] = (D) => o("escapeKeyDown", D)),
          onPointerDownOutside: O[5] || (O[5] = (D) => o("pointerDownOutside", D))
        }, {
          default: b(() => [(_(), x(Ft(q.position === "popper" ? Wd : Gd), M({
            ...q.$attrs,
            ...f(I)
          }, {
            id: f(r).contentId,
            ref: (D) => {
              const k = f(He)(D);
              k?.hasAttribute("data-reka-popper-content-wrapper") ? s.value = k.firstElementChild : s.value = k;
            },
            role: "listbox",
            "data-state": f(r).open.value ? "open" : "closed",
            dir: f(r).dir.value,
            style: {
              display: "flex",
              flexDirection: "column",
              outline: "none"
            },
            onContextmenu: O[0] || (O[0] = Te(() => {
            }, ["prevent"])),
            onPlaced: O[1] || (O[1] = (D) => v.value = !0),
            onKeydown: C
          }), {
            default: b(() => [S(q.$slots, "default")]),
            _: 3
          }, 16, [
            "id",
            "data-state",
            "dir",
            "onKeydown"
          ]))]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])]),
        _: 3
      })]),
      _: 3
    }));
  }
}), Kd = Hd;
const [ro, Ud] = ee("SelectItemAlignedPosition");
var zd = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["placed"],
  setup(e, { emit: n }) {
    const t = e, o = n, { getItems: r } = Ee(), i = Fe(), a = Re(), s = E(!1), l = E(!0), u = E(), { forwardRef: d, currentElement: c } = R(), { viewport: p, selectedItem: v, selectedItemText: y, focusSelectedItem: g } = a;
    function m() {
      if (i.triggerElement.value && i.valueElement.value && u.value && c.value && p?.value && v?.value && y?.value) {
        const C = i.triggerElement.value.getBoundingClientRect(), h = c.value.getBoundingClientRect(), I = i.valueElement.value.getBoundingClientRect(), q = y.value.getBoundingClientRect();
        if (i.dir.value !== "rtl") {
          const _e = q.left - h.left, Oe = I.left - _e, Le = C.left - Oe, Ne = C.width + Le, en = Math.max(Ne, h.width), tn = window.innerWidth - ue, nn = Ao(Oe, ue, Math.max(ue, tn - en));
          u.value.style.minWidth = `${Ne}px`, u.value.style.left = `${nn}px`;
        } else {
          const _e = h.right - q.right, Oe = window.innerWidth - I.right - _e, Le = window.innerWidth - C.right - Oe, Ne = C.width + Le, en = Math.max(Ne, h.width), tn = window.innerWidth - ue, nn = Ao(Oe, ue, Math.max(ue, tn - en));
          u.value.style.minWidth = `${Ne}px`, u.value.style.right = `${nn}px`;
        }
        const O = r().map((_e) => _e.ref), D = window.innerHeight - ue * 2, k = p.value.scrollHeight, F = window.getComputedStyle(c.value), Q = Number.parseInt(F.borderTopWidth, 10), W = Number.parseInt(F.paddingTop, 10), J = Number.parseInt(F.borderBottomWidth, 10), K = Number.parseInt(F.paddingBottom, 10), T = Q + W + k + K + J, L = Math.min(v.value.offsetHeight * 5, T), N = window.getComputedStyle(p.value), z = Number.parseInt(N.paddingTop, 10), ae = Number.parseInt(N.paddingBottom, 10), Ae = C.top + C.height / 2 - ue, bt = D - Ae, ze = v.value.offsetHeight / 2, _t = v.value.offsetTop + ze, Ge = Q + W + _t, Gr = T - Ge;
        if (Ge <= Ae) {
          const _e = v.value === O[O.length - 1];
          u.value.style.bottom = "0px";
          const Oe = c.value.clientHeight - p.value.offsetTop - p.value.offsetHeight, Le = Math.max(bt, ze + (_e ? ae : 0) + Oe + J), Ne = Ge + Le;
          u.value.style.height = `${Ne}px`;
        } else {
          const _e = v.value === O[0];
          u.value.style.top = "0px";
          const Le = Math.max(Ae, Q + p.value.offsetTop + (_e ? z : 0) + ze) + Gr;
          u.value.style.height = `${Le}px`, p.value.scrollTop = Ge - Ae + p.value.offsetTop;
        }
        u.value.style.margin = `${ue}px 0`, u.value.style.minHeight = `${L}px`, u.value.style.maxHeight = `${D}px`, o("placed"), requestAnimationFrame(() => s.value = !0);
      }
    }
    const w = E("");
    Z(async () => {
      await G(), m(), c.value && (w.value = window.getComputedStyle(c.value).zIndex);
    });
    function P(C) {
      C && l.value === !0 && (m(), g?.(), l.value = !1);
    }
    return mi(i.triggerElement, () => {
      m();
    }), Ud({
      contentWrapper: u,
      shouldExpandOnScrollRef: s,
      onScrollButtonChange: P
    }), (C, h) => (_(), H("div", {
      ref_key: "contentWrapperElement",
      ref: u,
      style: Rt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: w.value
      })
    }, [B(f(j), M({
      ref: f(d),
      style: {
        boxSizing: "border-box",
        maxHeight: "100%"
      }
    }, {
      ...C.$attrs,
      ...t
    }), {
      default: b(() => [S(C.$slots, "default")]),
      _: 3
    }, 16)], 4));
  }
}), Gd = zd, Yd = /* @__PURE__ */ A({
  __name: "SelectArrow",
  props: {
    width: {
      type: Number,
      required: !1,
      default: 10
    },
    height: {
      type: Number,
      required: !1,
      default: 5
    },
    rounded: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "svg"
    }
  },
  setup(e) {
    const n = e, t = Re(jr);
    return (o, r) => f(t).position === "popper" ? (_(), x(f(to), ne(M({ key: 0 }, n)), {
      default: b(() => [S(o.$slots, "default")]),
      _: 3
    }, 16)) : U("v-if", !0);
  }
}), Xd = Yd, Qd = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: { context: {
    type: Object,
    required: !0
  } },
  setup(e) {
    return Vr(e.context), Wr(jr), (t, o) => S(t.$slots, "default");
  }
}), Jd = Qd;
const Zd = { key: 1 };
var ec = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    position: {
      type: String,
      required: !1
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "closeAutoFocus",
    "escapeKeyDown",
    "pointerDownOutside"
  ],
  setup(e, { emit: n }) {
    const t = e, r = rt(t, n), i = Fe(), a = E();
    Z(() => {
      a.value = new DocumentFragment();
    });
    const s = E(), l = $(() => t.forceMount || i.open.value), u = E(l.value);
    return Y(l, () => {
      setTimeout(() => u.value = l.value);
    }), (d, c) => l.value || u.value || s.value?.present ? (_(), x(f(it), {
      key: 0,
      ref_key: "presenceRef",
      ref: s,
      present: l.value
    }, {
      default: b(() => [B(Kd, ne(fe({
        ...f(r),
        ...d.$attrs
      })), {
        default: b(() => [S(d.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"])) : a.value ? (_(), H("div", Zd, [(_(), x(Xo, { to: a.value }, [B(Jd, { context: f(i) }, {
      default: b(() => [S(d.$slots, "default")]),
      _: 3
    }, 8, ["context"])], 8, ["to"]))])) : U("v-if", !0);
  }
}), tc = ec, nc = /* @__PURE__ */ A({
  __name: "SelectIcon",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return (n, t) => (_(), x(f(j), {
      "aria-hidden": "true",
      as: n.as,
      "as-child": n.asChild
    }, {
      default: b(() => [S(n.$slots, "default", {}, () => [t[0] || (t[0] = ye("▼"))])]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), oc = nc;
const [Hr, rc] = ee("SelectItem");
var ic = /* @__PURE__ */ A({
  __name: "SelectItem",
  props: {
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: n }) {
    const t = e, o = n, { disabled: r } = ge(t), i = Fe(), a = Re(), { forwardRef: s, currentElement: l } = R(), { CollectionItem: u } = Ee(), d = $(() => yt(i.modelValue?.value, t.value, i.by)), c = E(!1), p = E(t.textValue ?? ""), v = we(void 0, "reka-select-item-text"), y = "select.select";
    async function g(h) {
      if (h.defaultPrevented) return;
      const I = {
        originalEvent: h,
        value: t.value
      };
      Fn(y, m, I);
    }
    async function m(h) {
      await G(), o("select", h), !h.defaultPrevented && (r.value || (i.onValueChange(t.value), i.multiple.value || i.onOpenChange(!1)));
    }
    async function w(h) {
      await G(), !h.defaultPrevented && (r.value ? a.onItemLeave?.() : h.currentTarget?.focus({ preventScroll: !0 }));
    }
    async function P(h) {
      await G(), !h.defaultPrevented && h.currentTarget === X() && a.onItemLeave?.();
    }
    async function C(h) {
      await G(), !(h.defaultPrevented || a.searchRef?.value !== "" && h.key === " ") && (kd.includes(h.key) && g(h), h.key === " " && h.preventDefault());
    }
    if (t.value === "") throw new Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return Z(() => {
      l.value && a.itemRefCallback(l.value, t.value, t.disabled);
    }), rc({
      value: t.value,
      disabled: r,
      textId: v,
      isSelected: d,
      onItemTextChange: (h) => {
        p.value = ((p.value || h?.textContent) ?? "").trim();
      }
    }), (h, I) => (_(), x(f(u), { value: { textValue: p.value } }, {
      default: b(() => [B(f(j), {
        ref: f(s),
        role: "option",
        "aria-labelledby": f(v),
        "data-highlighted": c.value ? "" : void 0,
        "aria-selected": d.value,
        "data-state": d.value ? "checked" : "unchecked",
        "aria-disabled": f(r) || void 0,
        "data-disabled": f(r) ? "" : void 0,
        tabindex: f(r) ? void 0 : -1,
        as: h.as,
        "as-child": h.asChild,
        onFocus: I[0] || (I[0] = (q) => c.value = !0),
        onBlur: I[1] || (I[1] = (q) => c.value = !1),
        onPointerup: g,
        onPointerdown: I[2] || (I[2] = (q) => {
          q.currentTarget.focus({ preventScroll: !0 });
        }),
        onTouchend: I[3] || (I[3] = Te(() => {
        }, ["prevent", "stop"])),
        onPointermove: w,
        onPointerleave: P,
        onKeydown: C
      }, {
        default: b(() => [S(h.$slots, "default")]),
        _: 3
      }, 8, [
        "aria-labelledby",
        "data-highlighted",
        "aria-selected",
        "data-state",
        "aria-disabled",
        "data-disabled",
        "tabindex",
        "as",
        "as-child"
      ])]),
      _: 3
    }, 8, ["value"]));
  }
}), ac = ic, sc = /* @__PURE__ */ A({
  __name: "SelectItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const n = e, t = Hr();
    return (o, r) => f(t).isSelected.value ? (_(), x(f(j), M({
      key: 0,
      "aria-hidden": "true"
    }, n), {
      default: b(() => [S(o.$slots, "default")]),
      _: 3
    }, 16)) : U("v-if", !0);
  }
}), lc = sc, uc = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const n = e, t = Fe(), o = Re(), r = Hr(), { forwardRef: i, currentElement: a } = R(), s = $(() => ({
      value: r.value,
      disabled: r.disabled.value,
      textContent: a.value?.textContent ?? r.value?.toString() ?? ""
    }));
    return Z(() => {
      a.value && (r.onItemTextChange(a.value), o.itemTextRefCallback(a.value, r.value, r.disabled.value), t.onOptionAdd(s.value));
    }), nt(() => {
      t.onOptionRemove(s.value);
    }), (l, u) => (_(), x(f(j), M({
      id: f(r).textId,
      ref: f(i)
    }, {
      ...n,
      ...l.$attrs
    }), {
      default: b(() => [S(l.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), dc = uc, cc = /* @__PURE__ */ A({
  __name: "SelectPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const n = e;
    return (t, o) => (_(), x(f(zt), ne(fe(n)), {
      default: b(() => [S(t.$slots, "default")]),
      _: 3
    }, 16));
  }
}), fc = cc, pc = /* @__PURE__ */ A({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: n }) {
    const t = n, { getItems: o } = Ee(), r = Re(), i = E(null);
    function a() {
      i.value !== null && (window.clearInterval(i.value), i.value = null);
    }
    te(() => {
      o().map((d) => d.ref).find((d) => d === X())?.scrollIntoView({ block: "nearest" });
    });
    function s() {
      i.value === null && (i.value = window.setInterval(() => {
        t("autoScroll");
      }, 50));
    }
    function l() {
      r.onItemLeave?.(), i.value === null && (i.value = window.setInterval(() => {
        t("autoScroll");
      }, 50));
    }
    return zo(() => a()), (u, d) => (_(), x(f(j), M({
      "aria-hidden": "true",
      style: { flexShrink: 0 }
    }, u.$parent?.$props, {
      onPointerdown: s,
      onPointermove: l,
      onPointerleave: d[0] || (d[0] = () => {
        a();
      })
    }), {
      default: b(() => [S(u.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Kr = pc, vc = /* @__PURE__ */ A({
  __name: "SelectScrollDownButton",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const n = Re(), t = n.position === "item-aligned" ? ro() : void 0, { forwardRef: o, currentElement: r } = R(), i = E(!1);
    return te((a) => {
      if (n.viewport?.value && n.isPositioned?.value) {
        let l = function() {
          const u = s.scrollHeight - s.clientHeight;
          i.value = Math.ceil(s.scrollTop) < u;
        };
        const s = n.viewport.value;
        l(), s.addEventListener("scroll", l), a(() => s.removeEventListener("scroll", l));
      }
    }), Y(r, () => {
      r.value && t?.onScrollButtonChange(r.value);
    }), (a, s) => i.value ? (_(), x(Kr, {
      key: 0,
      ref: f(o),
      onAutoScroll: s[0] || (s[0] = () => {
        const { viewport: l, selectedItem: u } = f(n);
        l?.value && u?.value && (l.value.scrollTop = l.value.scrollTop + u.value.offsetHeight);
      })
    }, {
      default: b(() => [S(a.$slots, "default")]),
      _: 3
    }, 512)) : U("v-if", !0);
  }
}), yc = vc, mc = /* @__PURE__ */ A({
  __name: "SelectScrollUpButton",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const n = Re(), t = n.position === "item-aligned" ? ro() : void 0, { forwardRef: o, currentElement: r } = R(), i = E(!1);
    return te((a) => {
      if (n.viewport?.value && n.isPositioned?.value) {
        let l = function() {
          i.value = s.scrollTop > 0;
        };
        const s = n.viewport.value;
        l(), s.addEventListener("scroll", l), a(() => s.removeEventListener("scroll", l));
      }
    }), Y(r, () => {
      r.value && t?.onScrollButtonChange(r.value);
    }), (a, s) => i.value ? (_(), x(Kr, {
      key: 0,
      ref: f(o),
      onAutoScroll: s[0] || (s[0] = () => {
        const { viewport: l, selectedItem: u } = f(n);
        l?.value && u?.value && (l.value.scrollTop = l.value.scrollTop - u.value.offsetHeight);
      })
    }, {
      default: b(() => [S(a.$slots, "default")]),
      _: 3
    }, 512)) : U("v-if", !0);
  }
}), gc = mc, hc = /* @__PURE__ */ A({
  __name: "SelectTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const n = e, t = Fe(), { forwardRef: o, currentElement: r } = R(), i = $(() => t.disabled?.value || n.disabled);
    t.contentId ||= we(void 0, "reka-select-content"), Z(() => {
      t.onTriggerChange(r.value);
    });
    const { getItems: a } = Ee(), { search: s, handleTypeaheadSearch: l, resetTypeahead: u } = Vn();
    function d() {
      i.value || (t.onOpenChange(!0), u());
    }
    function c(p) {
      d(), t.triggerPointerDownPosRef.value = {
        x: Math.round(p.pageX),
        y: Math.round(p.pageY)
      };
    }
    return (p, v) => (_(), x(f(Kn), {
      "as-child": "",
      reference: p.reference
    }, {
      default: b(() => [B(f(j), {
        ref: f(o),
        role: "combobox",
        type: p.as === "button" ? "button" : void 0,
        "aria-controls": f(t).contentId,
        "aria-expanded": f(t).open.value || !1,
        "aria-required": f(t).required?.value,
        "aria-autocomplete": "none",
        disabled: i.value,
        dir: f(t)?.dir.value,
        "data-state": f(t)?.open.value ? "open" : "closed",
        "data-disabled": i.value ? "" : void 0,
        "data-placeholder": f(Md)(f(t).modelValue?.value) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        onClick: v[0] || (v[0] = (y) => {
          y?.currentTarget?.focus();
        }),
        onPointerdown: v[1] || (v[1] = (y) => {
          if (y.pointerType === "touch") return y.preventDefault();
          const g = y.target;
          g.hasPointerCapture(y.pointerId) && g.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && (c(y), y.preventDefault());
        }),
        onPointerup: v[2] || (v[2] = Te((y) => {
          y.pointerType === "touch" && c(y);
        }, ["prevent"])),
        onKeydown: v[3] || (v[3] = (y) => {
          const g = f(s) !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && g && y.key === " " || (f(l)(y.key, f(a)()), f(Bd).includes(y.key) && (d(), y.preventDefault()));
        })
      }, {
        default: b(() => [S(p.$slots, "default")]),
        _: 3
      }, 8, [
        "type",
        "aria-controls",
        "aria-expanded",
        "aria-required",
        "disabled",
        "dir",
        "data-state",
        "data-disabled",
        "data-placeholder",
        "as-child",
        "as"
      ])]),
      _: 3
    }, 8, ["reference"]));
  }
}), bc = hc, _c = /* @__PURE__ */ A({
  __name: "SelectValue",
  props: {
    placeholder: {
      type: String,
      required: !1,
      default: ""
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const n = e, { forwardRef: t, currentElement: o } = R(), r = Fe();
    Z(() => {
      r.valueElement = o;
    });
    const i = $(() => {
      let s = [];
      const l = Array.from(r.optionsSet.value), u = (d) => l.find((c) => yt(d, c.value, r.by));
      return Array.isArray(r.modelValue.value) ? s = r.modelValue.value.map((d) => u(d)?.textContent ?? "") : s = [u(r.modelValue.value)?.textContent ?? ""], s.filter(Boolean);
    }), a = $(() => i.value.length ? i.value.join(", ") : n.placeholder);
    return (s, l) => (_(), x(f(j), {
      ref: f(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" },
      "data-placeholder": i.value.length ? void 0 : n.placeholder
    }, {
      default: b(() => [S(s.$slots, "default", {
        selectedLabel: i.value,
        modelValue: f(r).modelValue.value
      }, () => [ye($e(a.value), 1)])]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-placeholder"
    ]));
  }
}), wc = _c, Cc = /* @__PURE__ */ A({
  __name: "SelectViewport",
  props: {
    nonce: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const n = e, { nonce: t } = ge(n), o = Fu(t), r = Re(), i = r.position === "item-aligned" ? ro() : void 0, { forwardRef: a, currentElement: s } = R();
    Z(() => {
      r?.onViewportChange(s.value);
    });
    const l = E(0);
    function u(d) {
      const c = d.currentTarget, { shouldExpandOnScrollRef: p, contentWrapper: v } = i ?? {};
      if (p?.value && v?.value) {
        const y = Math.abs(l.value - c.scrollTop);
        if (y > 0) {
          const g = window.innerHeight - ue * 2, m = Number.parseFloat(v.value.style.minHeight), w = Number.parseFloat(v.value.style.height), P = Math.max(m, w);
          if (P < g) {
            const C = P + y, h = Math.min(g, C), I = C - h;
            v.value.style.height = `${h}px`, v.value.style.bottom === "0px" && (c.scrollTop = I > 0 ? I : 0, v.value.style.justifyContent = "flex-end");
          }
        }
      }
      l.value = c.scrollTop;
    }
    return (d, c) => (_(), H(Je, null, [B(f(j), M({
      ref: f(a),
      "data-reka-select-viewport": "",
      role: "presentation"
    }, {
      ...d.$attrs,
      ...n
    }, {
      style: {
        position: "relative",
        flex: 1,
        overflow: "hidden auto"
      },
      onScroll: u
    }), {
      default: b(() => [S(d.$slots, "default")]),
      _: 3
    }, 16), B(f(j), {
      as: "style",
      nonce: f(o)
    }, {
      default: b(() => c[0] || (c[0] = [ye(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), Sc = Cc, qc = /* @__PURE__ */ A({
  __name: "TooltipArrow",
  props: {
    width: {
      type: Number,
      required: !1,
      default: 10
    },
    height: {
      type: Number,
      required: !1,
      default: 5
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "svg"
    }
  },
  setup(e) {
    const n = e;
    return R(), (t, o) => (_(), x(f(to), ne(fe(n)), {
      default: b(() => [S(t.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Ec = qc;
const [Jt, Ac] = ee("TooltipProvider");
var Oc = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "TooltipProvider",
  props: {
    delayDuration: {
      type: Number,
      required: !1,
      default: 700
    },
    skipDelayDuration: {
      type: Number,
      required: !1,
      default: 300
    },
    disableHoverableContent: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disableClosingTrigger: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    ignoreNonKeyboardFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    content: {
      type: Object,
      required: !1
    }
  },
  setup(e) {
    const n = e, { delayDuration: t, skipDelayDuration: o, disableHoverableContent: r, disableClosingTrigger: i, ignoreNonKeyboardFocus: a, disabled: s, content: l } = ge(n);
    R();
    const u = E(!0), d = E(!1), { start: c, stop: p } = ds(() => {
      u.value = !0;
    }, o, { immediate: !1 });
    return Ac({
      isOpenDelayed: u,
      delayDuration: t,
      onOpen() {
        p(), u.value = !1;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: r,
      disableClosingTrigger: i,
      disabled: s,
      ignoreNonKeyboardFocus: a,
      content: l
    }), (v, y) => S(v.$slots, "default");
  }
}), xc = Oc;
const Ur = "tooltip.open", [Zt, Pc] = ee("TooltipRoot");
var Ic = /* @__PURE__ */ A({
  __name: "TooltipRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    delayDuration: {
      type: Number,
      required: !1,
      default: void 0
    },
    disableHoverableContent: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    disableClosingTrigger: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    ignoreNonKeyboardFocus: {
      type: Boolean,
      required: !1,
      default: void 0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: n }) {
    const t = e, o = n;
    R();
    const r = Jt(), i = $(() => t.disableHoverableContent ?? r.disableHoverableContent.value), a = $(() => t.disableClosingTrigger ?? r.disableClosingTrigger.value), s = $(() => t.disabled ?? r.disabled.value), l = $(() => t.delayDuration ?? r.delayDuration.value), u = $(() => t.ignoreNonKeyboardFocus ?? r.ignoreNonKeyboardFocus.value), d = De(t, "open", o, {
      defaultValue: t.defaultOpen,
      passive: t.open === void 0
    });
    Y(d, (C) => {
      r.onClose && (C ? (r.onOpen(), document.dispatchEvent(new CustomEvent(Ur))) : r.onClose());
    });
    const c = E(!1), p = E(), v = $(() => d.value ? c.value ? "delayed-open" : "instant-open" : "closed"), { start: y, stop: g } = gi(() => {
      c.value = !0, d.value = !0;
    }, l, { immediate: !1 });
    function m() {
      g(), c.value = !1, d.value = !0;
    }
    function w() {
      g(), d.value = !1;
    }
    function P() {
      y();
    }
    return Pc({
      contentId: "",
      open: d,
      stateAttribute: v,
      trigger: p,
      onTriggerChange(C) {
        p.value = C;
      },
      onTriggerEnter() {
        r.isOpenDelayed.value ? P() : m();
      },
      onTriggerLeave() {
        i.value ? w() : g();
      },
      onOpen: m,
      onClose: w,
      disableHoverableContent: i,
      disableClosingTrigger: a,
      disabled: s,
      ignoreNonKeyboardFocus: u
    }), (C, h) => (_(), x(f(Hn), null, {
      default: b(() => [S(C.$slots, "default", { open: f(d) })]),
      _: 3
    }));
  }
}), Tc = Ic, $c = /* @__PURE__ */ A({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    as: {
      type: null,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = Zt(), i = Jt(), { forwardRef: a, currentElement: s } = R(), l = $(() => t.ariaLabel || s.value?.textContent), u = $(() => {
      const { ariaLabel: d, ...c } = t;
      return mr(c, i.content.value ?? {}, {
        side: "top",
        sideOffset: 0,
        align: "center",
        avoidCollisions: !0,
        collisionBoundary: [],
        collisionPadding: 0,
        arrowPadding: 0,
        sticky: "partial",
        hideWhenDetached: !1
      });
    });
    return Z(() => {
      It(window, "scroll", (d) => {
        d.target?.contains(r.trigger.value) && r.onClose();
      }), It(window, Ur, r.onClose);
    }), (d, c) => (_(), x(f(Ut), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: c[0] || (c[0] = (p) => o("escapeKeyDown", p)),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        f(r).disableClosingTrigger.value && f(r).trigger.value?.contains(p.target) && p.preventDefault(), o("pointerDownOutside", p);
      }),
      onFocusOutside: c[2] || (c[2] = Te(() => {
      }, ["prevent"])),
      onDismiss: c[3] || (c[3] = (p) => f(r).onClose())
    }, {
      default: b(() => [B(f(eo), M({
        ref: f(a),
        "data-state": f(r).stateAttribute.value
      }, {
        ...d.$attrs,
        ...u.value
      }, { style: {
        "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
        "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
        "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
        "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
        "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
      } }), {
        default: b(() => [S(d.$slots, "default"), B(f(Wn), {
          id: f(r).contentId,
          role: "tooltip"
        }, {
          default: b(() => [ye($e(l.value), 1)]),
          _: 1
        }, 8, ["id"])]),
        _: 3
      }, 16, ["data-state"])]),
      _: 3
    }));
  }
}), zr = $c, Dc = /* @__PURE__ */ A({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    }
  },
  setup(e) {
    const t = Kt(e), { forwardRef: o, currentElement: r } = R(), { trigger: i, onClose: a } = Zt(), s = Jt(), { isPointerInTransit: l, onPointerExit: u } = ps(i, r);
    return s.isPointerInTransitRef = l, u(() => {
      a();
    }), (d, c) => (_(), x(zr, M({ ref: f(o) }, f(t)), {
      default: b(() => [S(d.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Bc = Dc, kc = /* @__PURE__ */ A({
  __name: "TooltipContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    ariaLabel: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = Zt(), i = rt(t, o), { forwardRef: a } = R();
    return (s, l) => (_(), x(f(it), { present: s.forceMount || f(r).open.value }, {
      default: b(() => [(_(), x(Ft(f(r).disableHoverableContent.value ? zr : Bc), M({ ref: f(a) }, f(i)), {
        default: b(() => [S(s.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), Mc = kc, Fc = /* @__PURE__ */ A({
  __name: "TooltipPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const n = e;
    return (t, o) => (_(), x(f(zt), ne(fe(n)), {
      default: b(() => [S(t.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Rc = Fc, Lc = /* @__PURE__ */ A({
  __name: "TooltipTrigger",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const n = e, t = Zt(), o = Jt();
    t.contentId ||= we(void 0, "reka-tooltip-content");
    const { forwardRef: r, currentElement: i } = R(), a = E(!1), s = E(!1), l = $(() => t.disabled.value ? {} : {
      click: g,
      focus: v,
      pointermove: c,
      pointerleave: p,
      pointerdown: d,
      blur: y
    });
    Z(() => {
      t.onTriggerChange(i.value);
    });
    function u() {
      setTimeout(() => {
        a.value = !1;
      }, 1);
    }
    function d() {
      t.open && !t.disableClosingTrigger.value && t.onClose(), a.value = !0, document.addEventListener("pointerup", u, { once: !0 });
    }
    function c(m) {
      m.pointerType !== "touch" && !s.value && !o.isPointerInTransitRef.value && (t.onTriggerEnter(), s.value = !0);
    }
    function p() {
      t.onTriggerLeave(), s.value = !1;
    }
    function v(m) {
      a.value || t.ignoreNonKeyboardFocus.value && !m.target.matches?.(":focus-visible") || t.onOpen();
    }
    function y() {
      t.onClose();
    }
    function g() {
      t.disableClosingTrigger.value || t.onClose();
    }
    return (m, w) => (_(), x(f(Kn), {
      "as-child": "",
      reference: m.reference
    }, {
      default: b(() => [B(f(j), M({
        ref: f(r),
        "aria-describedby": f(t).open.value ? f(t).contentId : void 0,
        "data-state": f(t).stateAttribute.value,
        as: m.as,
        "as-child": n.asChild,
        "data-grace-area-trigger": ""
      }, ri(l.value)), {
        default: b(() => [S(m.$slots, "default")]),
        _: 3
      }, 16, [
        "aria-describedby",
        "data-state",
        "as",
        "as-child"
      ])]),
      _: 3
    }, 8, ["reference"]));
  }
}), Nc = Lc;
const Vc = /* @__PURE__ */ A({
  __name: "AppCheckbox",
  props: /* @__PURE__ */ ot({
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
    const n = je(e, "modelValue");
    return (t, o) => (_(), x(f(Gu), M({ ...t.$props, ...t.$attrs }, {
      modelValue: n.value,
      "onUpdate:modelValue": o[0] || (o[0] = (r) => n.value = r),
      class: [
        t.$style["app-checkbox"],
        "app-shape-squircle",
        {
          [t.$style.disabled]: e.disabled,
          [t.$style.indeterminate]: n.value === "indeterminate",
          [t.$style.checked]: n.value,
          [t.$style.error]: e.error
        }
      ]
    }), {
      default: b(() => [
        B(f(Xu), {
          class: V(t.$style.indicator)
        }, {
          default: b(() => [
            n.value === "indeterminate" ? (_(), x(f(gn), {
              key: 0,
              icon: "line-md:minus"
            })) : U("", !0),
            n.value === !0 ? (_(), x(f(gn), {
              key: 1,
              icon: "line-md:confirm",
              dur: "3s",
              "stroke-width": "5"
            })) : U("", !0)
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    }, 16, ["modelValue", "class"]));
  }
}), jc = "_app-checkbox_1409483", Wc = "_error_37514bb", Hc = "_disabled_c7121c3", Kc = "_indicator_9a6129e", Uc = { "app-checkbox": jc, error: Wc, disabled: Hc, indicator: Kc }, zc = {
  $style: Uc
}, mp = /* @__PURE__ */ oe(Vc, [["__cssModules", zc]]), Gc = /* @__PURE__ */ A({
  __name: "AppChip",
  props: qe({
    size: null,
    transparent: { type: Boolean }
  }, { size: "medium", transparent: !1 }),
  setup(e) {
    return (n, t) => (_(), H("div", {
      class: V([
        "app-shape-squircle",
        n.$style["app-chip"],
        n.$style[n.size],
        { [n.$style.transparent]: n.transparent }
      ])
    }, [
      S(n.$slots, "default")
    ], 2));
  }
}), Yc = "_app-chip_707ac6f", Xc = "_small_1d451e9", Qc = "_large_97f6530", Jc = "_transparent_8a38eaa", Zc = { "app-chip": Yc, small: Xc, large: Qc, transparent: Jc }, ef = {
  $style: Zc
}, gp = /* @__PURE__ */ oe(Gc, [["__cssModules", ef]]), tf = { class: "gradiented step-3 strong" }, nf = /* @__PURE__ */ A({
  __name: "AppDialog",
  props: /* @__PURE__ */ ot({
    persistent: { type: Boolean },
    title: null,
    description: null
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const n = je(e, "open");
    return (t, o) => (_(), x(f(Ds), {
      open: n.value,
      "onUpdate:open": o[4] || (o[4] = (r) => n.value = r),
      class: V(t.$style["app-dialog"])
    }, {
      default: b(() => [
        B(f(wl), {
          class: V(t.$style.trigger),
          "as-child": ""
        }, {
          default: b(() => [
            S(t.$slots, "trigger")
          ]),
          _: 3
        }, 8, ["class"]),
        B(f(gl), null, {
          default: b(() => [
            B(ii, { name: "fade" }, {
              default: b(() => [
                B(f(vl), {
                  class: V(t.$style.overlay)
                }, null, 8, ["class"])
              ]),
              _: 1
            }),
            B(f(ll), {
              "as-child": "",
              "trap-focus": !e.persistent,
              onPointerDownOutside: o[1] || (o[1] = (r) => e.persistent ? r.preventDefault() : null),
              onEscapeKeyDown: o[2] || (o[2] = (r) => e.persistent ? r.preventDefault() : null),
              onFocusOutside: o[3] || (o[3] = (r) => e.persistent ? r.preventDefault() : null)
            }, {
              default: b(() => [
                B(Mn, M({
                  class: t.$style.content
                }, t.$attrs), {
                  default: b(() => [
                    le("header", null, [
                      le("div", {
                        class: V(t.$style.start)
                      }, [
                        B(f(bl), { "as-child": "" }, {
                          default: b(() => [
                            le("h2", tf, [
                              S(t.$slots, "title", {}, () => [
                                ye($e(e.title), 1)
                              ])
                            ])
                          ]),
                          _: 3
                        }),
                        B(f(dl), { "as-child": "" }, {
                          default: b(() => [
                            le("div", {
                              class: V(t.$style.description)
                            }, [
                              S(t.$slots, "description", {}, () => [
                                ye($e(e.description), 1)
                              ])
                            ], 2)
                          ]),
                          _: 3
                        })
                      ], 2),
                      S(t.$slots, "header-actions"),
                      B(f(ks), {
                        "aria-label": "Close",
                        "as-child": ""
                      }, {
                        default: b(() => [
                          e.persistent ? U("", !0) : (_(), x(Za, {
                            key: 0,
                            variant: "text",
                            class: V(t.$style["close-button"]),
                            icon: "material-symbols:close-rounded",
                            onClick: o[0] || (o[0] = (r) => n.value = !1)
                          }, null, 8, ["class"]))
                        ]),
                        _: 1
                      })
                    ]),
                    S(t.$slots, "default"),
                    le("footer", null, [
                      S(t.$slots, "actions")
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
}), of = "_trigger_eed4348", rf = "_overlay_3482df4", af = "_content_22a8642", sf = "_start_62c7e32", lf = "_description_768894d", uf = "_close-button_fb0abea", df = { trigger: of, overlay: rf, content: af, start: sf, description: lf, "close-button": uf }, cf = {
  $style: df
}, hp = /* @__PURE__ */ oe(nf, [["__cssModules", cf]]), ff = /* @__PURE__ */ A({
  __name: "AppDropdown",
  props: /* @__PURE__ */ ot({
    persistent: { type: Boolean },
    title: null,
    description: null
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const n = je(e, "open");
    return (t, o) => (_(), x(f(Ed), {
      open: n.value,
      "onUpdate:open": o[0] || (o[0] = (r) => n.value = r),
      class: V(t.$style["app-dropdown"])
    }, {
      default: b(() => [
        B(f(Dd), { "as-child": "" }, {
          default: b(() => [
            S(t.$slots, "trigger", { open: n.value })
          ]),
          _: 3
        }),
        B(f(Td), null, {
          default: b(() => [
            B(f(Od), M(t.$attrs, {
              as: "div",
              align: "start",
              class: t.$style.content,
              "side-offset": 10
            }), {
              default: b(() => [
                B(Mn, {
                  class: V(t.$style.card)
                }, {
                  default: b(() => [
                    S(t.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["class"]),
                B(f(Cd), {
                  class: V(t.$style.arrow)
                }, null, 8, ["class"])
              ]),
              _: 3
            }, 16, ["class"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open", "class"]));
  }
}), pf = "_app-dropdown_708ab8c", vf = "_content_5763a98", yf = "_card_5ecfe5d", mf = "_arrow_6c95722", gf = { "app-dropdown": pf, content: vf, card: yf, arrow: mf }, hf = {
  $style: gf
}, bp = /* @__PURE__ */ oe(ff, [["__cssModules", hf]]), bf = /* @__PURE__ */ A({
  __name: "AppDropdownItem",
  props: {
    as: null
  },
  setup(e) {
    return (n, t) => (_(), x(f(Pd), M(n.$attrs, {
      class: [n.$attrs.class, "app-shape-squircle", n.$style["app-dropdown-item"]],
      as: e.as
    }), {
      default: b(() => [
        S(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "as"]));
  }
}), _f = "_app-dropdown-item_ce1c908", wf = { "app-dropdown-item": _f }, Cf = {
  $style: wf
}, _p = /* @__PURE__ */ oe(bf, [["__cssModules", Cf]]), Sf = /* @__PURE__ */ A({
  __name: "AppField",
  props: {
    label: null,
    error: null,
    disabled: { type: Boolean }
  },
  setup(e) {
    return (n, t) => {
      const o = Vt;
      return _(), H("label", {
        class: V([n.$style["app-field"], { [n.$style.disabled]: e.disabled }])
      }, [
        le("div", {
          class: V(n.$style["label-input"])
        }, [
          e.label ?? n.$slots.label ? (_(), H("div", {
            key: 0,
            class: V([n.$style.label, { [n.$style.error]: e.error }])
          }, [
            S(n.$slots, "label", {}, () => [
              ye($e(e.label), 1)
            ])
          ], 2)) : U("", !0),
          S(n.$slots, "default")
        ], 2),
        e.error ? (_(), H("div", {
          key: 0,
          class: V(n.$style.error)
        }, [
          B(o, { icon: "material-symbols:error-outline-rounded" }),
          ye($e(e.error), 1)
        ], 2)) : U("", !0)
      ], 2);
    };
  }
}), qf = "_app-field_c5e2831", Ef = "_disabled_f4fb29f", Af = "_label-input_d62543a", Of = "_label_bf91a85", xf = "_error_77cdf2a", Pf = { "app-field": qf, disabled: Ef, "label-input": Af, label: Of, error: xf }, If = {
  $style: Pf
}, wp = /* @__PURE__ */ oe(Sf, [["__cssModules", If]]), Tf = {}, $f = {
  class: "app-loading-spinner",
  viewBox: "0 0 68 68",
  xmlns: "http://www.w3.org/2000/svg"
};
function Df(e, n) {
  return _(), H("svg", $f, [...n[0] || (n[0] = [
    le("defs", null, [
      le("linearGradient", {
        id: "primary-gradient",
        x1: "0",
        x2: "0",
        y1: "0",
        y2: "1"
      }, [
        le("stop", {
          offset: "0%",
          "stop-color": "rgb(121, 126, 247)"
        }),
        le("stop", {
          offset: "100%",
          "stop-color": "rgb(0, 255, 206)"
        })
      ])
    ], -1),
    le("circle", {
      class: "path",
      fill: "none",
      "stroke-width": "8",
      "stroke-linecap": "round",
      cx: "34",
      cy: "34",
      r: "30"
    }, null, -1)
  ])]);
}
const Cp = /* @__PURE__ */ oe(Tf, [["render", Df], ["__scopeId", "data-v-e8930cb1"]]), Bf = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2027.6.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_2_00000039126939024823027680000017407098825655584941_'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2090.9%20125.8'%20style='enable-background:new%200%200%2090.9%20125.8;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{opacity:0.5;fill:%23C5FFFE;enable-background:new%20;}%20.st1{fill:%23C5FFFE;}%20.st2{clip-path:url(%23SVGID_00000160187787671385330840000011365503337429337474_);}%20%3c/style%3e%3cg%20id='Layer_1-2_00000138552681162585653310000003376327086979018656_'%3e%3cg%20id='Layer_2-2_00000089575700792075398270000016475314756721804971_'%3e%3cg%20id='Layer_1-2'%3e%3cg%20id='Layer_2-2'%3e%3cg%20id='Layer_1-2-2'%3e%3cg%20id='Logo'%3e%3cg%20id='Secondary_j'%3e%3crect%20x='71.7'%20y='14.4'%20class='st0'%20width='5.8'%20height='46.7'/%3e%3cpath%20class='st0'%20d='M43.5,115.3c-18.2,0-33.1-14.8-33.1-33.1s14.9-33.1,33.1-33.1S76.6,64,76.6,82.2S61.8,115.3,43.5,115.3z%20M43.5,55.1c-14.9,0-27.1,12.2-27.1,27.1s12.2,27.1,27.1,27.1s27.1-12.2,27.1-27.1S58.5,55.1,43.5,55.1z'/%3e%3ccircle%20class='st0'%20cx='42.2'%20cy='77.4'%20r='8.2'/%3e%3c/g%3e%3cg%20id='Main_j'%3e%3ccircle%20id='Dot3'%20class='st1'%20cx='74.6'%20cy='16.4'%20r='16.4'/%3e%3ccircle%20id='Dot2'%20class='st1'%20cx='74.5'%20cy='61.1'%20r='12'/%3e%3ccircle%20id='Dot'%20class='st1'%20cx='12'%20cy='82.2'%20r='12'/%3e%3cg%20id='SquareCircle'%3e%3cg%3e%3cdefs%3e%3crect%20id='SVGID_1_'%20y='81.1'%20width='86.5'%20height='44.7'/%3e%3c/defs%3e%3cclipPath%20id='SVGID_00000170246492928372989520000014416670913551062949_'%3e%3cuse%20xlink:href='%23SVGID_1_'%20style='overflow:visible;'/%3e%3c/clipPath%3e%3cg%20style='clip-path:url(%23SVGID_00000170246492928372989520000014416670913551062949_);'%3e%3cpath%20class='st1'%20d='M43.2,124.4c-23.9,0-43.3-19.4-43.3-43.3s19.4-43.3,43.3-43.3s43.3,19.4,43.3,43.3%20S67.1,124.4,43.2,124.4z%20M43.2,61.8C32.6,61.8,24,70.4,24,81.1s8.7,19.3,19.3,19.3s19.3-8.7,19.3-19.3%20S53.9,61.8,43.2,61.8z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3crect%20x='62.6'%20y='61.1'%20class='st1'%20width='23.9'%20height='20.9'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", kf = ["src"], Mf = /* @__PURE__ */ A({
  __name: "AppLogo",
  props: qe({
    size: null
  }, { size: "medium" }),
  setup(e) {
    return (n, t) => (_(), H("img", {
      src: f(Bf),
      class: V(["app-logo", n.size]),
      alt: "Jojko's logo'"
    }, null, 10, kf));
  }
}), Sp = /* @__PURE__ */ oe(Mf, [["__scopeId", "data-v-6abc7d2e"]]), Ff = ["disabled"], Rf = /* @__PURE__ */ A({
  __name: "AppSelectField",
  props: /* @__PURE__ */ ot(qe({
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
    const n = je(e, "modelValue"), t = je(e, "open"), { createLocalWaveDirective: o } = pr, { vWave: r } = o({
      duration: 0.2
    });
    return (i, a) => {
      const s = Vt;
      return _(), x(f(Ld), {
        open: t.value,
        "onUpdate:open": a[0] || (a[0] = (l) => t.value = l),
        modelValue: n.value,
        "onUpdate:modelValue": a[1] || (a[1] = (l) => n.value = l),
        name: i.name,
        multiple: i.multiple,
        required: i.required
      }, {
        default: b(() => [
          B(f(bc), {
            "as-child": "",
            disabled: i.disabled
          }, {
            default: b(() => [
              S(i.$slots, "trigger", {}, () => [
                dt((_(), H("button", {
                  disabled: i.disabled,
                  class: V([i.$style.trigger, { [i.$style.placeholder]: !n.value }])
                }, [
                  B(f(wc), { placeholder: i.placeholder }, null, 8, ["placeholder"]),
                  B(f(oc), { "as-child": "" }, {
                    default: b(() => [
                      B(s, {
                        class: V(i.$style["select-icon"]),
                        icon: "material-symbols:expand-more-rounded"
                      }, null, 8, ["class"])
                    ]),
                    _: 1
                  })
                ], 10, Ff)), [
                  [f(r)]
                ])
              ])
            ]),
            _: 3
          }, 8, ["disabled"]),
          B(f(fc), null, {
            default: b(() => [
              B(f(tc), {
                position: "item-aligned",
                class: V(i.$style.content)
              }, {
                default: b(() => [
                  B(f(gc)),
                  B(f(Sc), {
                    class: V(i.$style.viewport)
                  }, {
                    default: b(() => [
                      (_(!0), H(Je, null, Tn(i.items, (l) => dt((_(), x(f(ac), {
                        key: JSON.stringify(l),
                        class: V(i.$style.item),
                        value: l.value
                      }, {
                        default: b(() => [
                          B(f(dc), null, {
                            default: b(() => [
                              S(i.$slots, "item", M({ ref_for: !0 }, l), () => [
                                ye($e(l.label ?? l.value), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          B(f(lc))
                        ]),
                        _: 2
                      }, 1032, ["class", "value"])), [
                        [f(r)]
                      ])), 128))
                    ]),
                    _: 3
                  }, 8, ["class"]),
                  B(f(yc)),
                  B(f(Xd))
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
}), Lf = "_item_d25a3ba", Nf = "_content_5242832", Vf = "_viewport_34f6182", jf = "_trigger_d455d52", Wf = "_error_123b438", Hf = "_select-icon_b60910e", Kf = "_placeholder_189bfa7", Uf = { item: Lf, content: Nf, viewport: Vf, trigger: jf, error: Wf, "select-icon": Hf, placeholder: Kf }, zf = {
  $style: Uf
}, qp = /* @__PURE__ */ oe(Rf, [["__cssModules", zf]]), Gf = /* @__PURE__ */ A({
  __name: "AppTextField",
  props: /* @__PURE__ */ ot(qe({
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
    const [n, t] = je(e, "modelValue"), o = ai(), r = si(), { textarea: i, input: a } = hi({
      input: $({
        get: () => String(n.value ?? ""),
        set: (l) => n.value = typeof n.value == "number" ? +l : l
      })
    }), s = $(() => ({
      ...o,
      ...t,
      class: r.input,
      type: e.type,
      disabled: e.disabled,
      placeholder: e.placeholder
    }));
    return (l, u) => {
      const d = Vt;
      return _(), H("div", {
        class: V([
          l.$style["app-text-field"],
          "app-shape-squircle",
          l.$style.outerBorder,
          { [l.$style.interactive]: !l.disabled, [l.$style.error]: l.error }
        ]),
        onClick: u[2] || (u[2] = (c) => f(i)?.focus())
      }, [
        l.iconBefore ?? l.icon ? (_(), x(d, {
          key: 0,
          icon: l.iconBefore ?? l.icon,
          class: V(l.$style["icon-before"])
        }, null, 8, ["icon", "class"])) : U("", !0),
        l.type === "textarea" ? dt((_(), H("textarea", M({
          key: 1,
          ref_key: "textarea",
          ref: i
        }, f(s), {
          "onUpdate:modelValue": u[0] || (u[0] = (c) => fn(a) ? a.value = c : null),
          class: l.$style.textarea
        }), null, 16)), [
          [li, f(a)]
        ]) : dt((_(), H("input", M({ key: 2 }, f(s), {
          "onUpdate:modelValue": u[1] || (u[1] = (c) => fn(n) ? n.value = c : null)
        }), null, 16)), [
          [ui, f(n)]
        ]),
        l.iconAfter ? (_(), x(d, {
          key: 3,
          icon: l.iconAfter,
          class: V(l.$style["icon-after"])
        }, null, 8, ["icon", "class"])) : U("", !0),
        l.$slots.actions ? (_(), H("div", {
          key: 4,
          class: V(l.$style.actions)
        }, [
          S(l.$slots, "actions")
        ], 2)) : U("", !0)
      ], 2);
    };
  }
}), Yf = "_icon-before_fccb21f", Xf = "_icon-after_eb3b2c5", Qf = "_actions_baaebea", Jf = "_app-text-field_18e12e8", Zf = "_outerBorder_fe9eb37", ep = "_interactive_3dc4aaf", tp = "_error_692dad4", np = "_textarea_db370d2", op = "_input_c63c5c2", rp = { "icon-before": Yf, "icon-after": Xf, actions: Qf, "app-text-field": Jf, outerBorder: Zf, interactive: ep, error: tp, textarea: np, input: op }, ip = {
  $style: rp
}, Ep = /* @__PURE__ */ oe(Gf, [["__cssModules", ip]]), ap = /* @__PURE__ */ A({
  __name: "AppTooltip",
  props: /* @__PURE__ */ ot(qe({
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
    const n = {
      "block-start": "top",
      "block-end": "bottom",
      "inline-start": "left",
      "inline-end": "right"
    }, t = je(e, "open");
    return (o, r) => (_(), x(f(xc), { "delay-duration": 0 }, {
      default: b(() => [
        B(f(Tc), {
          open: t.value,
          "onUpdate:open": r[0] || (r[0] = (i) => t.value = i)
        }, {
          default: b(() => [
            B(f(Nc), { "as-child": "" }, {
              default: b(() => [
                S(o.$slots, "trigger")
              ]),
              _: 3
            }),
            B(f(Rc), null, {
              default: b(() => [
                B(f(Mc), M(o.$attrs, {
                  as: "div",
                  align: o.align,
                  "avoid-collisions": o.avoidCollisions,
                  side: n[o.position],
                  "align-offset": 20,
                  "aria-label": o.ariaLabel,
                  class: [o.$attrs.class, o.$style["app-tooltip"]]
                }), {
                  default: b(() => [
                    B(Mn, {
                      class: V(o.$style.card)
                    }, {
                      default: b(() => [
                        S(o.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["class"]),
                    B(f(Ec), {
                      class: V(o.$style.arrow)
                    }, null, 8, ["class"])
                  ]),
                  _: 3
                }, 16, ["align", "avoid-collisions", "side", "aria-label", "class"])
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
}), sp = "_app-tooltip_6b0961c", lp = "_slideIn_3e7dd36", up = "_card_ec09d9a", dp = "_arrow_7e59031", cp = { "app-tooltip": sp, slideIn: lp, card: up, arrow: dp }, fp = {
  $style: cp
}, Ap = /* @__PURE__ */ oe(ap, [["__cssModules", fp]]);
export {
  Za as AppButton,
  Mn as AppCard,
  mp as AppCheckbox,
  gp as AppChip,
  hp as AppDialog,
  bp as AppDropdown,
  _p as AppDropdownItem,
  wp as AppField,
  Vt as AppIcon,
  Cp as AppLoadingSpinner,
  Sp as AppLogo,
  qp as AppSelectField,
  Ep as AppTextField,
  Ap as AppTooltip
};
