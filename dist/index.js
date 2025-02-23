import * as Mn from "vue";
import { defineComponent as T, h as _e, createBlock as D, openBlock as O, unref as m, normalizeClass as K, watch as W, getCurrentScope as dn, onScopeDispose as fn, toValue as ne, effectScope as Eo, shallowRef as G, watchEffect as q, readonly as pn, ref as A, computed as P, getCurrentInstance as we, nextTick as re, onMounted as Q, mergeDefaults as Pe, useCssVars as Lr, withDirectives as vt, createElementBlock as j, withKeys as Ln, createCommentVNode as X, renderSlot as $, createTextVNode as qe, toDisplayString as Ct, shallowReadonly as Fe, Fragment as Et, Comment as _o, mergeProps as R, cloneVNode as Rr, withCtx as S, inject as So, provide as Oo, customRef as Fr, onBeforeUnmount as mn, onUnmounted as Ao, toRefs as Ye, toHandlerKey as Nr, camelize as Po, toRef as Vr, Teleport as To, reactive as $o, normalizeStyle as _t, createVNode as k, markRaw as Wr, watchPostEffect as Io, normalizeProps as Ge, guardReactiveProps as it, createElementVNode as Hr, renderList as Do, withModifiers as We, resolveDynamicComponent as ko, toHandlers as jr, useSlots as zr, mergeModels as Bo, useModel as Gt, isRef as Ur, vModelDynamic as Kr } from "vue";
const Mo = /^[a-z0-9]+(-[a-z0-9]+)*$/, St = (e, t, n, r = "") => {
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
  const i = o[0], s = i.split("-");
  if (s.length > 1) {
    const a = {
      provider: r,
      prefix: s.shift(),
      name: s.join("-")
    };
    return t && !pt(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: i
    };
    return t && !pt(a, n) ? null : a;
  }
  return null;
}, pt = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, Lo = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), gt = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Ot = Object.freeze({
  ...Lo,
  ...gt
}), Xt = Object.freeze({
  ...Ot,
  body: "",
  hidden: !1
});
function qr(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Rn(e, t) {
  const n = qr(e, t);
  for (const r in Xt)
    r in gt ? r in e && !(r in n) && (n[r] = gt[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function Yr(e, t) {
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
function Gr(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function s(a) {
    i = Rn(
      r[a] || o[a],
      i
    );
  }
  return s(t), n.forEach(s), Rn(e, i);
}
function Ro(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = Yr(e);
  for (const o in r) {
    const i = r[o];
    i && (t(o, Gr(e, o, i)), n.push(o));
  }
  return n;
}
const Xr = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Lo
};
function Vt(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function Fo(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Vt(e, Xr))
    return null;
  const n = t.icons;
  for (const o in n) {
    const i = n[o];
    if (
      // Name cannot be empty
      !o || // Must have body
      typeof i.body != "string" || // Check other props
      !Vt(
        i,
        Xt
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
      !Vt(
        i,
        Xt
      )
    )
      return null;
  }
  return t;
}
const Fn = /* @__PURE__ */ Object.create(null);
function Qr(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function je(e, t) {
  const n = Fn[e] || (Fn[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = Qr(e, t));
}
function No(e, t) {
  return Fo(t) ? Ro(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function Jr(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let nt = !1;
function Vo(e) {
  return typeof e == "boolean" && (nt = e), nt;
}
function Zr(e) {
  const t = typeof e == "string" ? St(e, !0, nt) : e;
  if (t) {
    const n = je(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function ei(e, t) {
  const n = St(e, !0, nt);
  if (!n)
    return !1;
  const r = je(n.provider, n.prefix);
  return t ? Jr(r, n.name, t) : (r.missing.add(n.name), !0);
}
function ti(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), nt && !t && !e.prefix) {
    let o = !1;
    return Fo(e) && (e.prefix = "", Ro(e, (i, s) => {
      ei(i, s) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!pt({
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = je(t, n);
  return !!No(r, e);
}
const Wo = Object.freeze({
  width: null,
  height: null
}), Ho = Object.freeze({
  // Dimensions
  ...Wo,
  // Transformations
  ...gt
}), ni = /(-?[0-9.]*[0-9]+[0-9.]*)/g, oi = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Nn(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(ni);
  if (r === null || !r.length)
    return e;
  const o = [];
  let i = r.shift(), s = oi.test(i);
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
function ri(e, t = "defs") {
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
function ii(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function si(e, t, n) {
  const r = ri(e);
  return ii(r.defs, t + r.content + n);
}
const ai = (e) => e === "unset" || e === "undefined" || e === "none";
function li(e, t) {
  const n = {
    ...Ot,
    ...e
  }, r = {
    ...Ho,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let i = n.body;
  [n, r].forEach((g) => {
    const v = [], w = g.hFlip, b = g.vFlip;
    let y = g.rotate;
    w ? b ? y += 2 : (v.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), v.push("scale(-1 1)"), o.top = o.left = 0) : b && (v.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), v.push("scale(1 -1)"), o.top = o.left = 0);
    let x;
    switch (y < 0 && (y -= Math.floor(y / 4) * 4), y = y % 4, y) {
      case 1:
        x = o.height / 2 + o.top, v.unshift(
          "rotate(90 " + x.toString() + " " + x.toString() + ")"
        );
        break;
      case 2:
        v.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        x = o.width / 2 + o.left, v.unshift(
          "rotate(-90 " + x.toString() + " " + x.toString() + ")"
        );
        break;
    }
    y % 2 === 1 && (o.left !== o.top && (x = o.left, o.left = o.top, o.top = x), o.width !== o.height && (x = o.width, o.width = o.height, o.height = x)), v.length && (i = si(
      i,
      '<g transform="' + v.join(" ") + '">',
      "</g>"
    ));
  });
  const s = r.width, a = r.height, l = o.width, c = o.height;
  let u, d;
  s === null ? (d = a === null ? "1em" : a === "auto" ? c : a, u = Nn(d, l / c)) : (u = s === "auto" ? l : s, d = a === null ? Nn(u, c / l) : a === "auto" ? c : a);
  const f = {}, p = (g, v) => {
    ai(v) || (f[g] = v.toString());
  };
  p("width", u), p("height", d);
  const h = [o.left, o.top, l, c];
  return f.viewBox = h.join(" "), {
    attributes: f,
    viewBox: h,
    body: i
  };
}
const ci = /\sid="(\S+)"/g, ui = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let di = 0;
function fi(e, t = ui) {
  const n = [];
  let r;
  for (; r = ci.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const s = typeof t == "function" ? t(i) : t + (di++).toString(), a = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + s + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const Qt = /* @__PURE__ */ Object.create(null);
function pi(e, t) {
  Qt[e] = t;
}
function Jt(e) {
  return Qt[e] || Qt[""];
}
function hn(e) {
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
const vn = /* @__PURE__ */ Object.create(null), Ze = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], mt = [];
for (; Ze.length > 0; )
  Ze.length === 1 || Math.random() > 0.5 ? mt.push(Ze.shift()) : mt.push(Ze.pop());
vn[""] = hn({
  resources: ["https://api.iconify.design"].concat(mt)
});
function mi(e, t) {
  const n = hn(t);
  return n === null ? !1 : (vn[e] = n, !0);
}
function gn(e) {
  return vn[e];
}
const hi = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Vn = hi();
function vi(e, t) {
  const n = gn(e);
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
function gi(e) {
  return e === 404;
}
const yi = (e, t, n) => {
  const r = [], o = vi(e, t), i = "icons";
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
function wi(e) {
  if (typeof e == "string") {
    const t = gn(e);
    if (t)
      return t.path;
  }
  return "/";
}
const bi = (e, t, n) => {
  if (!Vn) {
    n("abort", 424);
    return;
  }
  let r = wi(t.provider);
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
  Vn(e + r).then((i) => {
    const s = i.status;
    if (s !== 200) {
      setTimeout(() => {
        n(gi(s) ? "abort" : "next", s);
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
}, xi = {
  prepare: yi,
  send: bi
};
function Ci(e) {
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
    const i = o.provider, s = o.prefix, a = o.name, l = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), c = l[s] || (l[s] = je(i, s));
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
function jo(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function Ei(e) {
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
      }), s.pending.length !== a && (n || jo([e], i.id), i.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let _i = 0;
function Si(e, t, n) {
  const r = _i++, o = jo.bind(null, n, r);
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
function Oi(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? St(o, t, n) : o;
    i && r.push(i);
  }), r;
}
var Ai = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Pi(e, t, n, r) {
  const o = e.resources.length, i = e.random ? Math.floor(Math.random() * o) : e.index;
  let s;
  if (e.random) {
    let E = e.resources.slice(0);
    for (s = []; E.length > 1; ) {
      const _ = Math.floor(Math.random() * E.length);
      s.push(E[_]), E = E.slice(0, _).concat(E.slice(_ + 1));
    }
    s = s.concat(E);
  } else
    s = e.resources.slice(i).concat(e.resources.slice(0, i));
  const a = Date.now();
  let l = "pending", c = 0, u, d = null, f = [], p = [];
  typeof r == "function" && p.push(r);
  function h() {
    d && (clearTimeout(d), d = null);
  }
  function g() {
    l === "pending" && (l = "aborted"), h(), f.forEach((E) => {
      E.status === "pending" && (E.status = "aborted");
    }), f = [];
  }
  function v(E, _) {
    _ && (p = []), typeof E == "function" && p.push(E);
  }
  function w() {
    return {
      startTime: a,
      payload: t,
      status: l,
      queriesSent: c,
      queriesPending: f.length,
      subscribe: v,
      abort: g
    };
  }
  function b() {
    l = "failed", p.forEach((E) => {
      E(void 0, u);
    });
  }
  function y() {
    f.forEach((E) => {
      E.status === "pending" && (E.status = "aborted");
    }), f = [];
  }
  function x(E, _, I) {
    const B = _ !== "success";
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
    if (_ === "abort") {
      u = I, b();
      return;
    }
    if (B) {
      u = I, f.length || (s.length ? C() : b());
      return;
    }
    if (h(), y(), !e.random) {
      const M = e.resources.indexOf(E.resource);
      M !== -1 && M !== e.index && (e.index = M);
    }
    l = "completed", p.forEach((M) => {
      M(I);
    });
  }
  function C() {
    if (l !== "pending")
      return;
    h();
    const E = s.shift();
    if (E === void 0) {
      if (f.length) {
        d = setTimeout(() => {
          h(), l === "pending" && (y(), b());
        }, e.timeout);
        return;
      }
      b();
      return;
    }
    const _ = {
      status: "pending",
      resource: E,
      callback: (I, B) => {
        x(_, I, B);
      }
    };
    f.push(_), c++, d = setTimeout(C, e.rotate), n(E, t, _.callback);
  }
  return setTimeout(C), w;
}
function zo(e) {
  const t = {
    ...Ai,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, l, c) {
    const u = Pi(
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
function Wn() {
}
const Wt = /* @__PURE__ */ Object.create(null);
function Ti(e) {
  if (!Wt[e]) {
    const t = gn(e);
    if (!t)
      return;
    const n = zo(t), r = {
      config: t,
      redundancy: n
    };
    Wt[e] = r;
  }
  return Wt[e];
}
function $i(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const i = Jt(e);
    if (!i)
      return n(void 0, 424), Wn;
    o = i.send;
    const s = Ti(e);
    s && (r = s.redundancy);
  } else {
    const i = hn(e);
    if (i) {
      r = zo(i);
      const s = e.resources ? e.resources[0] : "", a = Jt(s);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Wn) : r.query(t, o, n)().abort;
}
function Hn() {
}
function Ii(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Ei(e);
  }));
}
function Di(e) {
  const t = [], n = [];
  return e.forEach((r) => {
    (r.match(Mo) ? t : n).push(r);
  }), {
    valid: t,
    invalid: n
  };
}
function et(e, t, n) {
  function r() {
    const o = e.pendingIcons;
    t.forEach((i) => {
      o && o.delete(i), e.icons[i] || e.missing.add(i);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!No(e, n).length) {
        r();
        return;
      }
    } catch (o) {
      console.error(o);
    }
  r(), Ii(e);
}
function jn(e, t) {
  e instanceof Promise ? e.then((n) => {
    t(n);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function ki(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    if (delete e.iconsToLoad, !o || !o.length)
      return;
    const i = e.loadIcon;
    if (e.loadIcons && (o.length > 1 || !i)) {
      jn(
        e.loadIcons(o, r, n),
        (u) => {
          et(e, o, u);
        }
      );
      return;
    }
    if (i) {
      o.forEach((u) => {
        const d = i(u, r, n);
        jn(d, (f) => {
          const p = f ? {
            prefix: r,
            icons: {
              [u]: f
            }
          } : null;
          et(e, [u], p);
        });
      });
      return;
    }
    const { valid: s, invalid: a } = Di(o);
    if (a.length && et(e, a, null), !s.length)
      return;
    const l = r.match(Mo) ? Jt(n) : null;
    if (!l) {
      et(e, s, null);
      return;
    }
    l.prepare(n, r, s).forEach((u) => {
      $i(n, u, (d) => {
        et(e, u.icons, d);
      });
    });
  }));
}
const Bi = (e, t) => {
  const n = Oi(e, !0, Vo()), r = Ci(n);
  if (!r.pending.length) {
    let l = !0;
    return t && setTimeout(() => {
      l && t(
        r.loaded,
        r.missing,
        r.pending,
        Hn
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
    s = c, a = u, i.push(je(c, u));
    const d = o[c] || (o[c] = /* @__PURE__ */ Object.create(null));
    d[u] || (d[u] = []);
  }), r.pending.forEach((l) => {
    const { provider: c, prefix: u, name: d } = l, f = je(c, u), p = f.pendingIcons || (f.pendingIcons = /* @__PURE__ */ new Set());
    p.has(d) || (p.add(d), o[c][u].push(d));
  }), i.forEach((l) => {
    const c = o[l.provider][l.prefix];
    c.length && ki(l, c);
  }), t ? Si(t, r, i) : Hn;
};
function Mi(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], i = typeof o;
    r in Wo ? (o === null || o && (i === "string" || i === "number")) && (n[r] = o) : i === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const Li = /[\s,]+/;
function Ri(e, t) {
  t.split(Li).forEach((n) => {
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
function Fi(e, t = 0) {
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
function Ni(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Vi(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Wi(e) {
  return "data:image/svg+xml," + Vi(e);
}
function Hi(e) {
  return 'url("' + Wi(e) + '")';
}
const zn = {
  ...Ho,
  inline: !1
}, ji = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, zi = {
  display: "inline-block"
}, Zt = {
  backgroundColor: "currentColor"
}, Uo = {
  backgroundColor: "transparent"
}, Un = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Kn = {
  webkitMask: Zt,
  mask: Zt,
  background: Uo
};
for (const e in Kn) {
  const t = Kn[e];
  for (const n in Un)
    t[e + n] = Un[n];
}
const ht = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  ht[e + "-flip"] = t, ht[e.slice(0, 1) + "-flip"] = t, ht[e + "Flip"] = t;
});
function qn(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Yn = (e, t) => {
  const n = Mi(zn, t), r = { ...ji }, o = t.mode || "svg", i = {}, s = t.style, a = typeof s == "object" && !(s instanceof Array) ? s : {};
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
          typeof v == "string" && Ri(n, v);
          break;
        // Color: override style
        case "color":
          i.color = v;
          break;
        // Rotation as string
        case "rotate":
          typeof v == "string" ? n[g] = Fi(v) : typeof v == "number" && (n[g] = v);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          v !== !0 && v !== "true" && delete r["aria-hidden"];
          break;
        default: {
          const w = ht[g];
          w ? (v === !0 || v === "true" || v === 1) && (n[w] = !0) : zn[g] === void 0 && (r[g] = v);
        }
      }
  }
  const l = li(e, n), c = l.attributes;
  if (n.inline && (i.verticalAlign = "-0.125em"), o === "svg") {
    r.style = {
      ...i,
      ...a
    }, Object.assign(r, c);
    let g = 0, v = t.id;
    return typeof v == "string" && (v = v.replace(/-/g, "_")), r.innerHTML = fi(l.body, v ? () => v + "ID" + g++ : "iconifyVue"), _e("svg", r);
  }
  const { body: u, width: d, height: f } = e, p = o === "mask" || (o === "bg" ? !1 : u.indexOf("currentColor") !== -1), h = Ni(u, {
    ...c,
    width: d + "",
    height: f + ""
  });
  return r.style = {
    ...i,
    "--svg": Hi(h),
    width: qn(c.width),
    height: qn(c.height),
    ...zi,
    ...p ? Zt : Uo,
    ...a
  }, _e("span", r);
};
Vo(!0);
pi("", xi);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !ti(r)) && console.error(n);
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
          mi(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
const Ui = {
  ...Ot,
  body: ""
}, Ki = T({
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
      let o = Zr(r);
      if (!o)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", o !== null && (this._loadingIcon = {
          name: e,
          abort: Bi([r], () => {
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
      return Yn(Ui, e);
    let n = e;
    return t.classes && (n = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + t.classes.join(" ")
    }), Yn({
      ...Ot,
      ...t.data
    }, n);
  }
}), qi = /* @__PURE__ */ T({
  __name: "AppIcon",
  props: {
    icon: null
  },
  setup(e) {
    return (t, n) => (O(), D(m(Ki), {
      inline: "",
      icon: typeof e.icon == "string" ? e.icon : e.icon[1],
      class: K(t.$style.icon)
    }, null, 8, ["icon", "class"]));
  }
}), Yi = "_icon_6dc929d", Gi = { icon: Yi }, be = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Xi = {
  $style: Gi
}, yn = /* @__PURE__ */ be(qi, [["__cssModules", Xi]]);
function Qi(e, t) {
  var n;
  const r = G();
  return q(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), pn(r);
}
function At(e) {
  return dn() ? (fn(e), !0) : !1;
}
function Ji(e) {
  let t = !1, n;
  const r = Eo(!0);
  return (...o) => (t || (n = r.run(() => e(...o)), t = !0), n);
}
function Zi(e) {
  let t = 0, n, r;
  const o = () => {
    t -= 1, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
  };
  return (...i) => (t += 1, r || (r = Eo(!0), n = r.run(() => e(...i))), At(o), n);
}
const Ko = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const es = (e) => typeof e < "u", ts = Object.prototype.toString, ns = (e) => ts.call(e) === "[object Object]";
function Ht(e) {
  return Array.isArray(e) ? e : [e];
}
const os = ne;
function rs(e, t, n = {}) {
  const {
    immediate: r = !0,
    immediateCallback: o = !1
  } = n, i = G(!1);
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
    }, ne(t));
  }
  return r && (i.value = !0, Ko && c()), At(l), {
    isPending: pn(i),
    start: c,
    stop: l
  };
}
function is(e, t, n) {
  return W(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Xe = Ko ? window : void 0;
function ie(e) {
  var t;
  const n = ne(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function ve(...e) {
  const t = [], n = () => {
    t.forEach((a) => a()), t.length = 0;
  }, r = (a, l, c, u) => (a.addEventListener(l, c, u), () => a.removeEventListener(l, c, u)), o = P(() => {
    const a = Ht(ne(e[0])).filter((l) => l != null);
    return a.every((l) => typeof l != "string") ? a : void 0;
  }), i = is(
    () => {
      var a, l;
      return [
        (l = (a = o.value) == null ? void 0 : a.map((c) => ie(c))) != null ? l : [Xe].filter((c) => c != null),
        Ht(ne(o.value ? e[1] : e[0])),
        Ht(m(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        ne(o.value ? e[3] : e[2])
      ];
    },
    ([a, l, c, u]) => {
      if (n(), !(a != null && a.length) || !(l != null && l.length) || !(c != null && c.length))
        return;
      const d = ns(u) ? { ...u } : u;
      t.push(
        ...a.flatMap(
          (f) => l.flatMap(
            (p) => c.map((h) => r(f, p, h, d))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    i(), n();
  };
  return At(n), s;
}
function qo() {
  const e = G(!1), t = we();
  return t && Q(() => {
    e.value = !0;
  }, t), e;
}
function ss(e) {
  const t = qo();
  return P(() => (t.value, !!e()));
}
function as(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function ls(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Xe,
    eventName: i = "keydown",
    passive: s = !1,
    dedupe: a = !1
  } = r, l = as(t);
  return ve(o, i, (u) => {
    u.repeat && ne(a) || l(u) && n(u);
  }, s);
}
function cs(e) {
  return JSON.parse(JSON.stringify(e));
}
function us(e, t, n = {}) {
  const { window: r = Xe, ...o } = n;
  let i;
  const s = ss(() => r && "ResizeObserver" in r), a = () => {
    i && (i.disconnect(), i = void 0);
  }, l = P(() => {
    const d = ne(e);
    return Array.isArray(d) ? d.map((f) => ie(f)) : [ie(d)];
  }), c = W(
    l,
    (d) => {
      if (a(), s.value && r) {
        i = new ResizeObserver(t);
        for (const f of d)
          f && i.observe(f, o);
      }
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    a(), c();
  };
  return At(u), {
    isSupported: s,
    stop: u
  };
}
const ds = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof MouseEvent ? [e.movementX, e.movementY] : null
};
function fs(e = {}) {
  const {
    type: t = "page",
    touch: n = !0,
    resetOnTouchEnds: r = !1,
    initialValue: o = { x: 0, y: 0 },
    window: i = Xe,
    target: s = i,
    scroll: a = !0,
    eventFilter: l
  } = e;
  let c = null, u = 0, d = 0;
  const f = G(o.x), p = G(o.y), h = G(null), g = typeof t == "function" ? t : ds[t], v = (_) => {
    const I = g(_);
    c = _, I && ([f.value, p.value] = I, h.value = "mouse"), i && (u = i.scrollX, d = i.scrollY);
  }, w = (_) => {
    if (_.touches.length > 0) {
      const I = g(_.touches[0]);
      I && ([f.value, p.value] = I, h.value = "touch");
    }
  }, b = () => {
    if (!c || !i)
      return;
    const _ = g(c);
    c instanceof MouseEvent && _ && (f.value = _[0] + i.scrollX - u, p.value = _[1] + i.scrollY - d);
  }, y = () => {
    f.value = o.x, p.value = o.y;
  }, x = l ? (_) => l(() => v(_), {}) : (_) => v(_), C = l ? (_) => l(() => w(_), {}) : (_) => w(_), E = l ? () => l(() => b(), {}) : () => b();
  if (s) {
    const _ = { passive: !0 };
    ve(s, ["mousemove", "dragover"], x, _), n && t !== "movement" && (ve(s, ["touchstart", "touchmove"], C, _), r && ve(s, "touchend", y, _)), a && t === "page" && ve(i, "scroll", E, _);
  }
  return {
    x: f,
    y: p,
    sourceType: h
  };
}
function ps(e, t = {}) {
  const {
    handleOutside: n = !0,
    window: r = Xe
  } = t, o = t.type || "page", { x: i, y: s, sourceType: a } = fs(t), l = A(e ?? (r == null ? void 0 : r.document.body)), c = G(0), u = G(0), d = G(0), f = G(0), p = G(0), h = G(0), g = G(!0);
  let v = () => {
  };
  return r && (v = W(
    [l, i, s],
    () => {
      const w = ie(l);
      if (!w || !(w instanceof Element))
        return;
      const {
        left: b,
        top: y,
        width: x,
        height: C
      } = w.getBoundingClientRect();
      d.value = b + (o === "page" ? r.pageXOffset : 0), f.value = y + (o === "page" ? r.pageYOffset : 0), p.value = C, h.value = x;
      const E = i.value - d.value, _ = s.value - f.value;
      g.value = x === 0 || C === 0 || E < 0 || _ < 0 || E > x || _ > C, (n || !g.value) && (c.value = E, u.value = _);
    },
    { immediate: !0 }
  ), ve(
    document,
    "mouseleave",
    () => g.value = !0,
    { passive: !0 }
  )), {
    x: i,
    y: s,
    sourceType: a,
    elementX: c,
    elementY: u,
    elementPositionX: d,
    elementPositionY: f,
    elementHeight: p,
    elementWidth: h,
    isOutside: g,
    stop: v
  };
}
function ze(e, t, n, r = {}) {
  var o, i, s;
  const {
    clone: a = !1,
    passive: l = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: d,
    shouldEmit: f
  } = r, p = we(), h = n || (p == null ? void 0 : p.emit) || ((o = p == null ? void 0 : p.$emit) == null ? void 0 : o.bind(p)) || ((s = (i = p == null ? void 0 : p.proxy) == null ? void 0 : i.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
  let g = c;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const v = (y) => a ? typeof a == "function" ? a(y) : cs(y) : y, w = () => es(e[t]) ? v(e[t]) : d, b = (y) => {
    f ? f(y) && h(g, y) : h(g, y);
  };
  if (l) {
    const y = w(), x = A(y);
    let C = !1;
    return W(
      () => e[t],
      (E) => {
        C || (C = !0, x.value = v(E), re(() => C = !1));
      }
    ), W(
      x,
      (E) => {
        !C && (E !== e[t] || u) && b(E);
      },
      { deep: u }
    ), x;
  } else
    return P({
      get() {
        return w();
      },
      set(y) {
        b(y);
      }
    });
}
var ms = Object.defineProperty, hs = Object.defineProperties, vs = Object.getOwnPropertyDescriptors, Gn = Object.getOwnPropertySymbols, gs = Object.prototype.hasOwnProperty, ys = Object.prototype.propertyIsEnumerable, Xn = (e, t, n) => t in e ? ms(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ee = (e, t) => {
  for (var n in t || (t = {}))
    gs.call(t, n) && Xn(e, n, t[n]);
  if (Gn)
    for (var n of Gn(t))
      ys.call(t, n) && Xn(e, n, t[n]);
  return e;
}, Yo = (e, t) => hs(e, vs(t)), ws = {
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
}, bs = (e) => "config" in e && "globalProperties" in e.config, xs = (e) => {
  let t;
  return e === "vue2" ? t = !1 : e === "vue3" ? t = !0 : t = bs(e), t ? {
    mounted: "mounted",
    updated: "updated"
  } : {
    mounted: "inserted",
    updated: "componentUpdated"
  };
}, Go = (e) => typeof e == "string" && e !== "auto", Qn = (e, t) => {
  e.dataset.vWaveBoundary = Go(t) ? t : "true";
}, Cs = ({ borderTopLeftRadius: e, borderTopRightRadius: t, borderBottomLeftRadius: n, borderBottomRightRadius: r }, o) => {
  const i = document.createElement(o);
  return i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%", i.style.display = "block", i.style.position = "absolute", i.style.borderRadius = `${e} ${t} ${r} ${n}`, i.style.overflow = "hidden", i.style.pointerEvents = "none", i.style.webkitMaskImage = "-webkit-radial-gradient(white, black)", i.dataset.vWaveContainerInternal = "true", i;
}, Es = ({ x: e, y: t }, n, r) => {
  const o = document.createElement("div");
  return o.style.position = "absolute", o.style.width = `${n}px`, o.style.height = `${n}px`, o.style.top = `${t}px`, o.style.left = `${e}px`, o.style.background = r.color, o.style.borderRadius = "50%", o.style.opacity = `${r.initialOpacity}`, o.style.transform = "translate(-50%,-50%) scale(0)", o.style.transition = `transform ${r.duration}s ${r.easing}, opacity ${r.duration}s ${r.easing}`, o;
};
function lt(e, t, n, r) {
  const o = e - n, i = t - r;
  return Math.sqrt(o * o + i * i);
}
function _s({ x: e, y: t }, { width: n, height: r }) {
  const o = lt(e, t, 0, 0), i = lt(e, t, n, 0), s = lt(e, t, 0, r), a = lt(e, t, n, r);
  return Math.max(o, i, s, a);
}
var Ss = ({ x: e, y: t }, { top: n, left: r }) => ({
  x: e - r,
  y: t - n
}), Os = (e, t) => {
  t.position === "static" && (["top", "left", "right", "bottom"].forEach((n) => {
    t[n] && t[n] !== "auto" && console.warn(
      "[v-wave]:",
      e,
      `You're using a \`static\` positioned element with a non-auto value (${t[n]}) for \`${n}\`.`,
      "It's position will be changed to relative while displaying the wave which might cause the element to visually jump."
    );
  }), e.dataset.originalPositionValue = e.style.position, e.style.position = "relative");
}, Jn = (e) => {
  var t;
  e.style.position = (t = e.dataset.originalPositionValue) != null ? t : "", delete e.dataset.originalPositionValue;
}, wn = "vWaveCountInternal";
function As(e) {
  const t = yt(e);
  Xo(e, t + 1);
}
function Zn(e) {
  const t = yt(e);
  Xo(e, t - 1);
}
function Xo(e, t) {
  e.dataset[wn] = t.toString();
}
function yt(e) {
  var t;
  return Number.parseInt((t = e.dataset[wn]) != null ? t : "0", 10);
}
function eo(e) {
  delete e.dataset[wn];
}
var Ps = 2.05, en = (e, t, n) => {
  if (n.disabled || n.respectDisabledAttribute && t.hasAttribute("disabled") || n.respectPrefersReducedMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const r = t.getBoundingClientRect(), o = window.getComputedStyle(t), i = Ss(e, r), s = Ps * _s(i, r), a = t.querySelector("[data-v-wave-container-internal]"), l = a ?? Cs(o, n.tagName), c = Es(i, s, n);
  As(t), Os(t, o), l.appendChild(c), a || t.appendChild(l);
  let u = !n.waitForRelease;
  const d = (g) => {
    typeof g < "u" && (document.removeEventListener("pointerup", d), document.removeEventListener("pointercancel", d)), u ? f() : u = !0;
  }, f = () => {
    c.style.transition = `opacity ${n.dissolveDuration}s linear`, c.style.opacity = "0", setTimeout(() => {
      c.remove(), Zn(t), yt(t) === 0 && (eo(t), l.remove(), Jn(t));
    }, n.dissolveDuration * 1e3);
  };
  n.waitForRelease && (document.addEventListener("pointerup", d), document.addEventListener("pointercancel", d));
  const p = setTimeout(() => {
    document.removeEventListener("pointercancel", h), requestAnimationFrame(() => {
      c.style.transform = "translate(-50%,-50%) scale(1)", c.style.opacity = `${n.finalOpacity}`, setTimeout(() => d(), n.duration * 1e3);
    });
  }, n.cancellationPeriod), h = () => {
    clearTimeout(p), c.remove(), Zn(t), yt(t) === 0 && (eo(t), l.remove(), Jn(t)), document.removeEventListener("pointerup", d), document.removeEventListener("pointercancel", d), document.removeEventListener("pointercancel", h);
  };
  document.addEventListener("pointercancel", h);
}, tt = /* @__PURE__ */ new WeakMap(), Ts = (e, t) => (n, r) => {
  if (!tt.has(t)) return;
  const o = Ee(Ee({}, e), tt.get(t));
  if (o.stopPropagation && n.stopPropagation(), o.trigger === !1) return en(n, t, o);
  if (Go(o.trigger)) return;
  const i = t.querySelector('[data-v-wave-trigger="true"]');
  !i && o.trigger === !0 || i && !n.composedPath().includes(i) || en(r ?? n, t, Yo(Ee({}, o), { waitForRelease: r ? !1 : o.waitForRelease }));
}, $s = (e = {}, t = "vue3") => {
  const n = Ee(Ee({}, ws), e), r = xs(t), o = (a) => {
    if (a.detail !== 0) return;
    const l = a.currentTarget, c = l.dataset.vWaveTrigger;
    document.querySelectorAll(
      `[data-v-wave-boundary="${c}"]`
    ).forEach((d) => {
      const f = a.type === "click";
      let p;
      if (f) {
        const g = l.getBoundingClientRect();
        p = {
          x: g.left + g.width / 2,
          y: g.top + g.height / 2
        };
      } else
        p = a;
      const h = Ee(Ee({}, n), tt.get(d));
      en(p, d, Yo(Ee({}, h), { waitForRelease: f ? !1 : h.waitForRelease }));
    });
  }, i = {
    [r.mounted](a, { value: l = {} }) {
      var c;
      tt.set(a, l), Qn(a, (c = l == null ? void 0 : l.trigger) != null ? c : n.trigger);
      const u = Ts(n, a);
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
      tt.set(a, l), Qn(a, (c = l == null ? void 0 : l.trigger) != null ? c : n.trigger);
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
}, Is = {
  createLocalWaveDirective: $s
}, Qo = Is;
const Ds = /* @__PURE__ */ T({
  __name: "AppButton",
  props: Pe({
    text: null,
    variant: null,
    icon: null,
    iconBefore: null,
    iconAfter: null
  }, { variant: "secondary" }),
  setup(e) {
    Lr((p) => ({
      29782214: d.value,
      29789673: f.value
    }));
    const { createLocalWaveDirective: t } = Qo, { vWave: n } = t({
      duration: 0.2
    }), r = A(null), o = we(), i = P(
      () => {
        var p, h;
        return !!(e.icon || e.iconBefore || e.iconAfter) && !((h = o == null ? void 0 : (p = o.slots).default) != null && h.call(p));
      }
    ), { elementX: s, elementY: a, elementWidth: l, elementHeight: c, isOutside: u } = ps(r), d = P(
      () => u.value ? void 0 : `${s.value / l.value * 100}%`
    ), f = P(
      () => u.value ? void 0 : `${a.value / c.value * 100}%`
    );
    return (p, h) => {
      const g = yn;
      return vt((O(), j("button", {
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
          h[0] || (h[0] = Ln((v) => p.$emit("click", v), ["enter"])),
          h[1] || (h[1] = Ln((v) => p.$emit("click", v), ["space"]))
        ]
      }, [
        p.icon ?? p.iconBefore ? (O(), D(g, {
          key: 0,
          icon: p.icon ?? p.iconBefore,
          class: K(p.$style["icon-before"])
        }, null, 8, ["icon", "class"])) : X("", !0),
        $(p.$slots, "default", {}, () => [
          qe(Ct(p.text), 1)
        ]),
        p.iconAfter ? (O(), D(g, {
          key: 1,
          icon: p.iconAfter,
          class: K(p.$style["icon-after"])
        }, null, 8, ["icon", "class"])) : X("", !0)
      ], 34)), [
        [m(n)]
      ]);
    };
  }
}), ks = "_app-button_f9040b0", Bs = "_v-border-shine_8419f80", Ms = "_primary_5785c37", Ls = "_secondary_31cb9f8", Rs = "_text_7e1c00c", Fs = "_icon-button_3541c9b", Ns = "_label_bdd07c7", Vs = "_icon-before_fb07300", Ws = "_icon-after_4d342ca", Hs = { "app-button": ks, "v-border-shine": Bs, primary: Ms, secondary: Ls, text: Rs, "icon-button": Fs, label: Ns, "icon-before": Vs, "icon-after": Ws }, js = {
  $style: Hs
}, zs = /* @__PURE__ */ be(Ds, [["__cssModules", js]]), Us = /* @__PURE__ */ T({
  __name: "AppCard",
  props: Pe({
    variant: null
  }, { variant: "raised" }),
  setup(e) {
    return (t, n) => (O(), j("div", {
      class: K(["app-card", t.variant])
    }, [
      $(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ks = /* @__PURE__ */ be(Us, [["__scopeId", "data-v-ed1acfe5"]]), qs = /* @__PURE__ */ T({
  __name: "AppChip",
  props: Pe({
    size: null,
    transparent: { type: Boolean }
  }, { size: "medium", transparent: !1 }),
  setup(e) {
    return (t, n) => (O(), j("div", {
      class: K([
        t.$style["app-chip"],
        t.$style[t.size],
        { [t.$style.transparent]: t.transparent }
      ])
    }, [
      $(t.$slots, "default")
    ], 2));
  }
}), Ys = "_app-chip_707ac6f", Gs = "_small_1d451e9", Xs = "_large_97f6530", Qs = "_transparent_8a38eaa", Js = { "app-chip": Ys, small: Gs, large: Xs, transparent: Qs }, Zs = {
  $style: Js
}, yu = /* @__PURE__ */ be(qs, [["__cssModules", Zs]]), ea = ["top", "right", "bottom", "left"], Se = Math.min, Z = Math.max, wt = Math.round, ct = Math.floor, ue = (e) => ({
  x: e,
  y: e
}), ta = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, na = {
  start: "end",
  end: "start"
};
function tn(e, t, n) {
  return Z(e, Se(t, n));
}
function ge(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ye(e) {
  return e.split("-")[0];
}
function Qe(e) {
  return e.split("-")[1];
}
function bn(e) {
  return e === "x" ? "y" : "x";
}
function xn(e) {
  return e === "y" ? "height" : "width";
}
function Oe(e) {
  return ["top", "bottom"].includes(ye(e)) ? "y" : "x";
}
function Cn(e) {
  return bn(Oe(e));
}
function oa(e, t, n) {
  n === void 0 && (n = !1);
  const r = Qe(e), o = Cn(e), i = xn(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = bt(s)), [s, bt(s)];
}
function ra(e) {
  const t = bt(e);
  return [nn(e), t, nn(t)];
}
function nn(e) {
  return e.replace(/start|end/g, (t) => na[t]);
}
function ia(e, t, n) {
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
function sa(e, t, n, r) {
  const o = Qe(e);
  let i = ia(ye(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(nn)))), i;
}
function bt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ta[t]);
}
function aa(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Jo(e) {
  return typeof e != "number" ? aa(e) : {
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
function to(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Oe(t), s = Cn(t), a = xn(s), l = ye(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (Qe(t)) {
    case "start":
      p[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const la = async (e, t, n) => {
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
  } = to(c, r, l), f = r, p = {}, h = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: v,
      fn: w
    } = a[g], {
      x: b,
      y,
      data: x,
      reset: C
    } = await w({
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
    u = b ?? u, d = y ?? d, p = {
      ...p,
      [v]: {
        ...p[v],
        ...x
      }
    }, C && h <= 50 && (h++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (c = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: u,
      y: d
    } = to(c, f, l)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: p
  };
};
async function ot(e, t) {
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
  } = ge(t, e), h = Jo(p), v = a[f ? d === "floating" ? "reference" : "floating" : d], w = xt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), b = d === "floating" ? {
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
  }, C = xt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: y,
    strategy: l
  }) : b);
  return {
    top: (w.top - C.top + h.top) / x.y,
    bottom: (C.bottom - w.bottom + h.bottom) / x.y,
    left: (w.left - C.left + h.left) / x.x,
    right: (C.right - w.right + h.right) / x.x
  };
}
const ca = (e) => ({
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
    } = ge(e, t) || {};
    if (c == null)
      return {};
    const d = Jo(u), f = {
      x: n,
      y: r
    }, p = Cn(o), h = xn(p), g = await s.getDimensions(c), v = p === "y", w = v ? "top" : "left", b = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", x = i.reference[h] + i.reference[p] - f[p] - i.floating[h], C = f[p] - i.reference[p], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let _ = E ? E[y] : 0;
    (!_ || !await (s.isElement == null ? void 0 : s.isElement(E))) && (_ = a.floating[y] || i.floating[h]);
    const I = x / 2 - C / 2, B = _ / 2 - g[h] / 2 - 1, M = Se(d[w], B), L = Se(d[b], B), z = M, U = _ - g[h] - L, N = _ / 2 - g[h] / 2 + I, Y = tn(z, N, U), J = !l.arrow && Qe(o) != null && N !== Y && i.reference[h] / 2 - (N < z ? M : L) - g[h] / 2 < 0, H = J ? N < z ? N - z : N - U : 0;
    return {
      [p]: f[p] + H,
      data: {
        [p]: Y,
        centerOffset: N - Y - H,
        ...J && {
          alignmentOffset: H
        }
      },
      reset: J
    };
  }
}), ua = function(e) {
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
        flipAlignment: g = !0,
        ...v
      } = ge(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = ye(o), b = Oe(a), y = ye(a) === a, x = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = f || (y || !g ? [bt(a)] : ra(a)), E = h !== "none";
      !f && E && C.push(...sa(a, g, h, x));
      const _ = [a, ...C], I = await ot(t, v), B = [];
      let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && B.push(I[w]), d) {
        const N = oa(o, s, x);
        B.push(I[N[0]], I[N[1]]);
      }
      if (M = [...M, {
        placement: o,
        overflows: B
      }], !B.every((N) => N <= 0)) {
        var L, z;
        const N = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, Y = _[N];
        if (Y)
          return {
            data: {
              index: N,
              overflows: M
            },
            reset: {
              placement: Y
            }
          };
        let J = (z = M.filter((H) => H.overflows[0] <= 0).sort((H, le) => H.overflows[1] - le.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!J)
          switch (p) {
            case "bestFit": {
              var U;
              const H = (U = M.filter((le) => {
                if (E) {
                  const ce = Oe(le.placement);
                  return ce === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ce === "y";
                }
                return !0;
              }).map((le) => [le.placement, le.overflows.filter((ce) => ce > 0).reduce((ce, Re) => ce + Re, 0)]).sort((le, ce) => le[1] - ce[1])[0]) == null ? void 0 : U[0];
              H && (J = H);
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
function no(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function oo(e) {
  return ea.some((t) => e[t] >= 0);
}
const da = function(e) {
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
          const i = await ot(t, {
            ...o,
            elementContext: "reference"
          }), s = no(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: oo(s)
            }
          };
        }
        case "escaped": {
          const i = await ot(t, {
            ...o,
            altBoundary: !0
          }), s = no(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: oo(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function fa(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = ye(n), a = Qe(n), l = Oe(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = i && l ? -1 : 1, d = ge(t, e);
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
const pa = function(e) {
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
      } = t, l = await fa(t, e);
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
}, ma = function(e) {
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
      } = ge(e, t), c = {
        x: n,
        y: r
      }, u = await ot(t, l), d = Oe(ye(o)), f = bn(d);
      let p = c[f], h = c[d];
      if (i) {
        const v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", b = p + u[v], y = p - u[w];
        p = tn(b, p, y);
      }
      if (s) {
        const v = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", b = h + u[v], y = h - u[w];
        h = tn(b, h, y);
      }
      const g = a.fn({
        ...t,
        [f]: p,
        [d]: h
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [f]: i,
            [d]: s
          }
        }
      };
    }
  };
}, ha = function(e) {
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
      } = ge(e, t), u = {
        x: n,
        y: r
      }, d = Oe(o), f = bn(d);
      let p = u[f], h = u[d];
      const g = ge(a, t), v = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const y = f === "y" ? "height" : "width", x = i.reference[f] - i.floating[y] + v.mainAxis, C = i.reference[f] + i.reference[y] - v.mainAxis;
        p < x ? p = x : p > C && (p = C);
      }
      if (c) {
        var w, b;
        const y = f === "y" ? "width" : "height", x = ["top", "left"].includes(ye(o)), C = i.reference[d] - i.floating[y] + (x && ((w = s.offset) == null ? void 0 : w[d]) || 0) + (x ? 0 : v.crossAxis), E = i.reference[d] + i.reference[y] + (x ? 0 : ((b = s.offset) == null ? void 0 : b[d]) || 0) - (x ? v.crossAxis : 0);
        h < C ? h = C : h > E && (h = E);
      }
      return {
        [f]: p,
        [d]: h
      };
    }
  };
}, va = function(e) {
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
      } = ge(e, t), u = await ot(t, c), d = ye(o), f = Qe(o), p = Oe(o) === "y", {
        width: h,
        height: g
      } = i.floating;
      let v, w;
      d === "top" || d === "bottom" ? (v = d, w = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (w = d, v = f === "end" ? "top" : "bottom");
      const b = g - u.top - u.bottom, y = h - u.left - u.right, x = Se(g - u[v], b), C = Se(h - u[w], y), E = !t.middlewareData.shift;
      let _ = x, I = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = y), (r = t.middlewareData.shift) != null && r.enabled.y && (_ = b), E && !f) {
        const M = Z(u.left, 0), L = Z(u.right, 0), z = Z(u.top, 0), U = Z(u.bottom, 0);
        p ? I = h - 2 * (M !== 0 || L !== 0 ? M + L : Z(u.left, u.right)) : _ = g - 2 * (z !== 0 || U !== 0 ? z + U : Z(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: I,
        availableHeight: _
      });
      const B = await s.getDimensions(a.floating);
      return h !== B.width || g !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Pt() {
  return typeof window < "u";
}
function Le(e) {
  return En(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ee(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function fe(e) {
  var t;
  return (t = (En(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function En(e) {
  return Pt() ? e instanceof Node || e instanceof ee(e).Node : !1;
}
function se(e) {
  return Pt() ? e instanceof Element || e instanceof ee(e).Element : !1;
}
function de(e) {
  return Pt() ? e instanceof HTMLElement || e instanceof ee(e).HTMLElement : !1;
}
function ro(e) {
  return !Pt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ee(e).ShadowRoot;
}
function st(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ae(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ga(e) {
  return ["table", "td", "th"].includes(Le(e));
}
function Tt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function _n(e) {
  const t = Sn(), n = se(e) ? ae(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ya(e) {
  let t = Ae(e);
  for (; de(t) && !Ue(t); ) {
    if (_n(t))
      return t;
    if (Tt(t))
      return null;
    t = Ae(t);
  }
  return null;
}
function Sn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ue(e) {
  return ["html", "body", "#document"].includes(Le(e));
}
function ae(e) {
  return ee(e).getComputedStyle(e);
}
function $t(e) {
  return se(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ae(e) {
  if (Le(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ro(e) && e.host || // Fallback.
    fe(e)
  );
  return ro(t) ? t.host : t;
}
function Zo(e) {
  const t = Ae(e);
  return Ue(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : de(t) && st(t) ? t : Zo(t);
}
function rt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Zo(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ee(o);
  if (i) {
    const a = on(s);
    return t.concat(s, s.visualViewport || [], st(o) ? o : [], a && n ? rt(a) : []);
  }
  return t.concat(o, rt(o, [], n));
}
function on(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function er(e) {
  const t = ae(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = de(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = wt(n) !== i || wt(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function On(e) {
  return se(e) ? e : e.contextElement;
}
function He(e) {
  const t = On(e);
  if (!de(t))
    return ue(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = er(t);
  let s = (i ? wt(n.width) : n.width) / r, a = (i ? wt(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const wa = /* @__PURE__ */ ue(0);
function tr(e) {
  const t = ee(e);
  return !Sn() || !t.visualViewport ? wa : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ba(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ee(e) ? !1 : t;
}
function Me(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = On(e);
  let s = ue(1);
  t && (r ? se(r) && (s = He(r)) : s = He(e));
  const a = ba(i, n, r) ? tr(i) : ue(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = ee(i), p = r && se(r) ? ee(r) : r;
    let h = f, g = on(h);
    for (; g && r && p !== h; ) {
      const v = He(g), w = g.getBoundingClientRect(), b = ae(g), y = w.left + (g.clientLeft + parseFloat(b.paddingLeft)) * v.x, x = w.top + (g.clientTop + parseFloat(b.paddingTop)) * v.y;
      l *= v.x, c *= v.y, u *= v.x, d *= v.y, l += y, c += x, h = ee(g), g = on(h);
    }
  }
  return xt({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function An(e, t) {
  const n = $t(e).scrollLeft;
  return t ? t.left + n : Me(fe(e)).left + n;
}
function nr(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    An(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function xa(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = fe(r), a = t ? Tt(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ue(1);
  const u = ue(0), d = de(r);
  if ((d || !d && !i) && ((Le(r) !== "body" || st(s)) && (l = $t(r)), de(r))) {
    const p = Me(r);
    c = He(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  const f = s && !d && !i ? nr(s, l, !0) : ue(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + f.y
  };
}
function Ca(e) {
  return Array.from(e.getClientRects());
}
function Ea(e) {
  const t = fe(e), n = $t(e), r = e.ownerDocument.body, o = Z(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Z(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + An(e);
  const a = -n.scrollTop;
  return ae(r).direction === "rtl" && (s += Z(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function _a(e, t) {
  const n = ee(e), r = fe(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = Sn();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Sa(e, t) {
  const n = Me(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = de(e) ? He(e) : ue(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function io(e, t, n) {
  let r;
  if (t === "viewport")
    r = _a(e, n);
  else if (t === "document")
    r = Ea(fe(e));
  else if (se(t))
    r = Sa(t, n);
  else {
    const o = tr(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return xt(r);
}
function or(e, t) {
  const n = Ae(e);
  return n === t || !se(n) || Ue(n) ? !1 : ae(n).position === "fixed" || or(n, t);
}
function Oa(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = rt(e, [], !1).filter((a) => se(a) && Le(a) !== "body"), o = null;
  const i = ae(e).position === "fixed";
  let s = i ? Ae(e) : e;
  for (; se(s) && !Ue(s); ) {
    const a = ae(s), l = _n(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || st(s) && !l && or(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Ae(s);
  }
  return t.set(e, r), r;
}
function Aa(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Tt(t) ? [] : Oa(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, u) => {
    const d = io(t, u, o);
    return c.top = Z(d.top, c.top), c.right = Se(d.right, c.right), c.bottom = Se(d.bottom, c.bottom), c.left = Z(d.left, c.left), c;
  }, io(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Pa(e) {
  const {
    width: t,
    height: n
  } = er(e);
  return {
    width: t,
    height: n
  };
}
function Ta(e, t, n) {
  const r = de(t), o = fe(t), i = n === "fixed", s = Me(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ue(0);
  if (r || !r && !i)
    if ((Le(t) !== "body" || st(o)) && (a = $t(t)), r) {
      const f = Me(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = An(o));
  const c = o && !r && !i ? nr(o, a) : ue(0), u = s.left + a.scrollLeft - l.x - c.x, d = s.top + a.scrollTop - l.y - c.y;
  return {
    x: u,
    y: d,
    width: s.width,
    height: s.height
  };
}
function jt(e) {
  return ae(e).position === "static";
}
function so(e, t) {
  if (!de(e) || ae(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return fe(e) === n && (n = n.ownerDocument.body), n;
}
function rr(e, t) {
  const n = ee(e);
  if (Tt(e))
    return n;
  if (!de(e)) {
    let o = Ae(e);
    for (; o && !Ue(o); ) {
      if (se(o) && !jt(o))
        return o;
      o = Ae(o);
    }
    return n;
  }
  let r = so(e, t);
  for (; r && ga(r) && jt(r); )
    r = so(r, t);
  return r && Ue(r) && jt(r) && !_n(r) ? n : r || ya(e) || n;
}
const $a = async function(e) {
  const t = this.getOffsetParent || rr, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Ta(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Ia(e) {
  return ae(e).direction === "rtl";
}
const Da = {
  convertOffsetParentRelativeRectToViewportRelativeRect: xa,
  getDocumentElement: fe,
  getClippingRect: Aa,
  getOffsetParent: rr,
  getElementRects: $a,
  getClientRects: Ca,
  getDimensions: Pa,
  getScale: He,
  isElement: se,
  isRTL: Ia
};
function ir(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ka(e, t) {
  let n = null, r;
  const o = fe(e);
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
    const h = ct(d), g = ct(o.clientWidth - (u + f)), v = ct(o.clientHeight - (d + p)), w = ct(u), y = {
      rootMargin: -h + "px " + -g + "px " + -v + "px " + -w + "px",
      threshold: Z(0, Se(1, l)) || 1
    };
    let x = !0;
    function C(E) {
      const _ = E[0].intersectionRatio;
      if (_ !== l) {
        if (!x)
          return s();
        _ ? s(!1, _) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      _ === 1 && !ir(c, e.getBoundingClientRect()) && s(), x = !1;
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
function Ba(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = On(e), u = o || i ? [...c ? rt(c) : [], ...rt(t)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const d = c && a ? ka(c, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === c && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var y;
      (y = p) == null || y.observe(t);
    })), n();
  }), c && !l && p.observe(c), p.observe(t));
  let h, g = l ? Me(e) : null;
  l && v();
  function v() {
    const w = Me(e);
    g && !ir(g, w) && n(), g = w, h = requestAnimationFrame(v);
  }
  return n(), () => {
    var w;
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), d == null || d(), (w = p) == null || w.disconnect(), p = null, l && cancelAnimationFrame(h);
  };
}
const Ma = pa, La = ma, ao = ua, Ra = va, Fa = da, Na = ca, Va = ha, Wa = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Da,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return la(e, t, {
    ...o,
    platform: i
  });
};
function Ha(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function rn(e) {
  if (Ha(e)) {
    const t = e.$el;
    return En(t) && Le(t) === "#comment" ? null : t;
  }
  return e;
}
function Ve(e) {
  return typeof e == "function" ? e() : m(e);
}
function ja(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = rn(Ve(e.element));
      return n == null ? {} : Na({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function sr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function lo(e, t) {
  const n = sr(e);
  return Math.round(t * n) / n;
}
function za(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = P(() => {
    var _;
    return (_ = Ve(n.open)) != null ? _ : !0;
  }), i = P(() => Ve(n.middleware)), s = P(() => {
    var _;
    return (_ = Ve(n.placement)) != null ? _ : "bottom";
  }), a = P(() => {
    var _;
    return (_ = Ve(n.strategy)) != null ? _ : "absolute";
  }), l = P(() => {
    var _;
    return (_ = Ve(n.transform)) != null ? _ : !0;
  }), c = P(() => rn(e.value)), u = P(() => rn(t.value)), d = A(0), f = A(0), p = A(a.value), h = A(s.value), g = G({}), v = A(!1), w = P(() => {
    const _ = {
      position: p.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return _;
    const I = lo(u.value, d.value), B = lo(u.value, f.value);
    return l.value ? {
      ..._,
      transform: "translate(" + I + "px, " + B + "px)",
      ...sr(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: p.value,
      left: I + "px",
      top: B + "px"
    };
  });
  let b;
  function y() {
    if (c.value == null || u.value == null)
      return;
    const _ = o.value;
    Wa(c.value, u.value, {
      middleware: i.value,
      placement: s.value,
      strategy: a.value
    }).then((I) => {
      d.value = I.x, f.value = I.y, p.value = I.strategy, h.value = I.placement, g.value = I.middlewareData, v.value = _ !== !1;
    });
  }
  function x() {
    typeof b == "function" && (b(), b = void 0);
  }
  function C() {
    if (x(), r === void 0) {
      y();
      return;
    }
    if (c.value != null && u.value != null) {
      b = r(c.value, u.value, y);
      return;
    }
  }
  function E() {
    o.value || (v.value = !1);
  }
  return W([i, s, a, o], y, {
    flush: "sync"
  }), W([c, u], C, {
    flush: "sync"
  }), W(o, E, {
    flush: "sync"
  }), dn() && fn(x), {
    x: Fe(d),
    y: Fe(f),
    strategy: Fe(p),
    placement: Fe(h),
    middlewareData: Fe(g),
    isPositioned: Fe(v),
    floatingStyles: w,
    update: y
  };
}
function Pn(e) {
  return e ? e.flatMap((t) => t.type === Et ? Pn(t.children) : [t]) : [];
}
const sn = T({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var l, c;
      if (!n.default)
        return null;
      const r = Pn(n.default()), o = r.findIndex((u) => u.type !== _o);
      if (o === -1)
        return r;
      const i = r[o];
      (l = i.props) == null || delete l.ref;
      const s = i.props ? R(t, i.props) : t;
      t.class && ((c = i.props) != null && c.class) && delete i.props.class;
      const a = Rr(i, s);
      for (const u in s)
        u.startsWith("on") && (a.props || (a.props = {}), a.props[u] = s[u]);
      return r.length === 1 ? a : (r[o] = a, r);
    };
  }
}), V = T({
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
    return typeof r == "string" && ["area", "img", "input"].includes(r) ? () => _e(r, t) : r !== "template" ? () => _e(e.as, t, { default: n.default }) : () => _e(sn, t, { default: n.default });
  }
}), ar = /* @__PURE__ */ T({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (O(), D(m(V), {
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
      default: S(() => [
        $(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
}), co = Object.freeze({
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
function uo(e, t) {
  t ? t = { ...co, ...t } : t = co;
  const n = lr(t);
  return n.dispatch(e), n.toString();
}
const Ua = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function lr(e) {
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
        e.respectType !== !1 && !fo(o) && (u = Ua), e.excludeKeys && (c = c.filter((f) => !e.excludeKeys(f)), u = u.filter((f) => !e.excludeKeys(f))), r("object:" + (c.length + u.length) + ":");
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
        const c = lr(e);
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
      r("fn:"), fo(o) ? this.dispatch("[native]") : this.dispatch(o.toString()), e.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(o.name)), e.respectFunctionProperties && this.object(o);
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
const cr = "[native code] }", Ka = cr.length;
function fo(e) {
  return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-Ka) === cr;
}
function qa(e, t, n = {}) {
  return e === t || uo(e, n) === uo(t, n);
}
function po(e) {
  return e == null;
}
function pe(e, t) {
  const n = typeof e == "string" ? `${e}Context` : t, r = Symbol(n);
  return [(s) => {
    const a = So(r, s);
    if (a || a === null)
      return a;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (s) => (Oo(r, s), s)];
}
const [It, wu] = pe("ConfigProvider");
function Ya(e) {
  const t = It({
    dir: A("ltr")
  });
  return P(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function F() {
  const e = we(), t = A(), n = P(() => {
    var s, a;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (a = t.value) == null ? void 0 : a.$el.nextElementSibling : ie(t);
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
let Ga = 0;
function Ke(e, t = "reka") {
  const n = It({ useId: void 0 });
  return Mn.useId ? `${t}-${Mn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Ga}`;
}
function Tn(e) {
  return dn() ? (fn(e), !0) : !1;
}
function Xa() {
  const e = /* @__PURE__ */ new Set(), t = (i) => {
    e.delete(i);
  };
  return {
    on: (i) => {
      e.add(i);
      const s = () => t(i);
      return Tn(s), {
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
const Te = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const mo = /* @__PURE__ */ Qa();
function Qa() {
  var e, t;
  return Te && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Ja(e) {
  return we();
}
function ur(e, t = 1e4) {
  return Fr((n, r) => {
    let o = ne(e), i;
    const s = () => setTimeout(() => {
      o = ne(e), r();
    }, ne(t));
    return Tn(() => {
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
function Za(e, t) {
  Ja() && mn(e, t);
}
function el(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = A(!1);
  let i = null;
  function s() {
    i && (clearTimeout(i), i = null);
  }
  function a() {
    o.value = !1, s();
  }
  function l(...c) {
    s(), o.value = !0, i = setTimeout(() => {
      o.value = !1, i = null, e(...c);
    }, ne(t));
  }
  return r && (o.value = !0, Te && l()), Tn(a), {
    isPending: pn(o),
    start: l,
    stop: a
  };
}
function tl(e, t) {
  const n = A(e);
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
function nl(e, t) {
  var v;
  const n = A({}), r = A("none"), o = A(e), i = e.value ? "mounted" : "unmounted";
  let s;
  const a = ((v = t.value) == null ? void 0 : v.ownerDocument.defaultView) ?? Xe, { state: l, dispatch: c } = tl(i, {
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
  }), u = (w) => {
    var b;
    if (Te) {
      const y = new CustomEvent(w, { bubbles: !1, cancelable: !1 });
      (b = t.value) == null || b.dispatchEvent(y);
    }
  };
  W(
    e,
    async (w, b) => {
      var x;
      const y = b !== w;
      if (await re(), y) {
        const C = r.value, E = ut(t.value);
        w ? (c("MOUNT"), u("enter"), E === "none" && u("after-enter")) : E === "none" || ((x = n.value) == null ? void 0 : x.display) === "none" ? (c("UNMOUNT"), u("leave"), u("after-leave")) : b && C !== E ? (c("ANIMATION_OUT"), u("leave")) : (c("UNMOUNT"), u("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (w) => {
    const b = ut(t.value), y = b.includes(
      w.animationName
    ), x = l.value === "mounted" ? "enter" : "leave";
    if (w.target === t.value && y && (u(`after-${x}`), c("ANIMATION_END"), !o.value)) {
      const C = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = a == null ? void 0 : a.setTimeout(() => {
        var E;
        ((E = t.value) == null ? void 0 : E.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = C);
      });
    }
    w.target === t.value && b === "none" && c("ANIMATION_END");
  }, f = (w) => {
    w.target === t.value && (r.value = ut(t.value));
  }, p = W(
    t,
    (w, b) => {
      w ? (n.value = getComputedStyle(w), w.addEventListener("animationstart", f), w.addEventListener("animationcancel", d), w.addEventListener("animationend", d)) : (c("ANIMATION_END"), s !== void 0 && (a == null || a.clearTimeout(s)), b == null || b.removeEventListener("animationstart", f), b == null || b.removeEventListener("animationcancel", d), b == null || b.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), h = W(l, () => {
    const w = ut(t.value);
    r.value = l.value === "mounted" ? w : "none";
  });
  return Ao(() => {
    p(), h();
  }), {
    isPresent: P(
      () => ["mounted", "unmountSuspended"].includes(l.value)
    )
  };
}
function ut(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Dt = T({
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
    const { present: r, forceMount: o } = Ye(e), i = A(), { isPresent: s } = nl(r, i);
    n({ present: s });
    let a = t.default({ present: s.value });
    a = Pn(a || []);
    const l = we();
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
    return () => o.value || r.value || s.value ? _e(t.default({ present: s.value })[0], {
      ref: (u) => {
        const d = ie(u);
        return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-reka-popper-content-wrapper") ? i.value = d.firstElementChild : i.value = d), d;
      }
    }) : null;
  }
});
function kt(e) {
  const t = we(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    r[Nr(Po(o))] = (...i) => e(o, ...i);
  }), r;
}
function Bt(e) {
  const t = we(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, i) => {
    const s = (t == null ? void 0 : t.type.props[i]).default;
    return s !== void 0 && (o[i] = s), o;
  }, {}), r = Vr(e);
  return P(() => {
    const o = {}, i = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(i).forEach((s) => {
      o[Po(s)] = i[s];
    }), Object.keys({ ...n, ...o }).reduce((s, a) => (r.value[a] !== void 0 && (s[a] = r.value[a]), s), {});
  });
}
function dr(e, t) {
  const n = Bt(e), r = t ? kt(t) : {};
  return P(() => ({
    ...n.value,
    ...r
  }));
}
const [$e, ol] = pe("DialogRoot"), rl = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = ze(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = A(), s = A(), { modal: a } = Ye(n);
    return ol({
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
}), il = /* @__PURE__ */ T({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = $e(), { forwardRef: r, currentElement: o } = F();
    return n.contentId || (n.contentId = Ke(void 0, "reka-dialog-content")), Q(() => {
      n.triggerElement.value = o.value;
    }), (i, s) => (O(), D(m(V), R(t, {
      ref: m(r),
      type: i.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": m(n).open.value || !1,
      "aria-controls": m(n).open.value ? m(n).contentId : void 0,
      "data-state": m(n).open.value ? "open" : "closed",
      onClick: m(n).onOpenToggle
    }), {
      default: S(() => [
        $(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), $n = /* @__PURE__ */ T({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = qo();
    return (n, r) => m(t) || n.forceMount ? (O(), D(To, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      $(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : X("", !0);
  }
});
function In(e, t, n) {
  const r = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
const sl = "dismissableLayer.pointerDownOutside", al = "dismissableLayer.focusOutside";
function fr(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && r === n || o.indexOf(r) < o.indexOf(n));
}
function ll(e, t) {
  var i;
  const n = ((i = t == null ? void 0 : t.value) == null ? void 0 : i.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = A(!1), o = A(() => {
  });
  return q((s) => {
    if (!Te)
      return;
    const a = async (c) => {
      const u = c.target;
      if (t != null && t.value) {
        if (fr(t.value, u)) {
          r.value = !1;
          return;
        }
        if (c.target && !r.value) {
          let d = function() {
            In(
              sl,
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
function cl(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = A(!1);
  return q((i) => {
    if (!Te)
      return;
    const s = async (a) => {
      t != null && t.value && (await re(), !(!t.value || fr(t.value, a.target)) && a.target && !r.value && In(
        al,
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
const he = $o({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Dn = /* @__PURE__ */ T({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: i } = F(), s = P(
      () => {
        var h;
        return ((h = i.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), a = P(() => he.layersRoot), l = P(() => i.value ? Array.from(a.value).indexOf(i.value) : -1), c = P(() => he.layersWithOutsidePointerEventsDisabled.size > 0), u = P(() => {
      const h = Array.from(a.value), [g] = [...he.layersWithOutsidePointerEventsDisabled].slice(-1), v = h.indexOf(g);
      return l.value >= v;
    }), d = ll(async (h) => {
      const g = [...he.branches].some(
        (v) => v == null ? void 0 : v.contains(h.target)
      );
      !u.value || g || (r("pointerDownOutside", h), r("interactOutside", h), await re(), h.defaultPrevented || r("dismiss"));
    }, i), f = cl((h) => {
      [...he.branches].some(
        (v) => v == null ? void 0 : v.contains(h.target)
      ) || (r("focusOutside", h), r("interactOutside", h), h.defaultPrevented || r("dismiss"));
    }, i);
    ls("Escape", (h) => {
      l.value === a.value.size - 1 && (r("escapeKeyDown", h), h.defaultPrevented || r("dismiss"));
    });
    let p;
    return q((h) => {
      i.value && (n.disableOutsidePointerEvents && (he.layersWithOutsidePointerEventsDisabled.size === 0 && (p = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), he.layersWithOutsidePointerEventsDisabled.add(i.value)), a.value.add(i.value), h(() => {
        n.disableOutsidePointerEvents && he.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = p);
      }));
    }), q((h) => {
      h(() => {
        i.value && (a.value.delete(i.value), he.layersWithOutsidePointerEventsDisabled.delete(i.value));
      });
    }), (h, g) => (O(), D(m(V), {
      ref: m(o),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: _t({
        pointerEvents: c.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: m(f).onFocusCapture,
      onBlurCapture: m(f).onBlurCapture,
      onPointerdownCapture: m(d).onPointerDownCapture
    }, {
      default: S(() => [
        $(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function te() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function ul(e) {
  return e ? "open" : "closed";
}
function ho(e) {
  const t = te();
  for (const n of e)
    if (n === t || (n.focus(), te() !== t))
      return;
}
const dl = "DialogTitle", fl = "DialogContent";
function pl({
  titleName: e = dl,
  contentName: t = fl,
  componentLink: n = "dialog.html#title",
  titleId: r,
  descriptionId: o,
  contentElement: i
}) {
  const s = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka.com/components/${n}`, a = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  Q(() => {
    var u;
    document.getElementById(r) || console.warn(s);
    const c = (u = i.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && c && (document.getElementById(o) || console.warn(a));
  });
}
const zt = "focusScope.autoFocusOnMount", Ut = "focusScope.autoFocusOnUnmount", vo = { bubbles: !1, cancelable: !0 };
function ml(e, { select: t = !1 } = {}) {
  const n = te();
  for (const r of e)
    if (Ce(r, { select: t }), te() !== n)
      return !0;
}
function hl(e) {
  const t = pr(e), n = go(t, e), r = go(t.reverse(), e);
  return [n, r];
}
function pr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function go(e, t) {
  for (const n of e)
    if (!vl(n, { upTo: t }))
      return n;
}
function vl(e, { upTo: t }) {
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
function gl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ce(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = te();
    e.focus({ preventScroll: !0 }), e !== n && gl(e) && t && e.select();
  }
}
const yl = Ji(() => A([]));
function wl() {
  const e = yl();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = yo(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = yo(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function yo(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function bl(e) {
  return e.filter((t) => t.tagName !== "A");
}
const mr = /* @__PURE__ */ T({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { currentRef: o, currentElement: i } = F(), s = A(null), a = wl(), l = $o({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    q((u) => {
      if (!Te)
        return;
      const d = i.value;
      if (!n.trapped)
        return;
      function f(v) {
        if (l.paused || !d)
          return;
        const w = v.target;
        d.contains(w) ? s.value = w : Ce(s.value, { select: !0 });
      }
      function p(v) {
        if (l.paused || !d)
          return;
        const w = v.relatedTarget;
        w !== null && (d.contains(w) || Ce(s.value, { select: !0 }));
      }
      function h(v) {
        d.contains(s.value) || Ce(d);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", p);
      const g = new MutationObserver(h);
      d && g.observe(d, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", p), g.disconnect();
      });
    }), q(async (u) => {
      const d = i.value;
      if (await re(), !d)
        return;
      a.add(l);
      const f = te();
      if (!d.contains(f)) {
        const h = new CustomEvent(zt, vo);
        d.addEventListener(zt, (g) => r("mountAutoFocus", g)), d.dispatchEvent(h), h.defaultPrevented || (ml(bl(pr(d)), {
          select: !0
        }), te() === f && Ce(d));
      }
      u(() => {
        d.removeEventListener(zt, (v) => r("mountAutoFocus", v));
        const h = new CustomEvent(Ut, vo), g = (v) => {
          r("unmountAutoFocus", v);
        };
        d.addEventListener(Ut, g), d.dispatchEvent(h), setTimeout(() => {
          h.defaultPrevented || Ce(f ?? document.body, { select: !0 }), d.removeEventListener(Ut, g), a.remove(l);
        }, 0);
      });
    });
    function c(u) {
      if (!n.loop && !n.trapped || l.paused)
        return;
      const d = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, f = te();
      if (d && f) {
        const p = u.currentTarget, [h, g] = hl(p);
        h && g ? !u.shiftKey && f === g ? (u.preventDefault(), n.loop && Ce(h, { select: !0 })) : u.shiftKey && f === h && (u.preventDefault(), n.loop && Ce(g, { select: !0 })) : f === p && u.preventDefault();
      }
    }
    return (u, d) => (O(), D(m(V), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: c
    }, {
      default: S(() => [
        $(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), hr = /* @__PURE__ */ T({
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
    const n = e, r = t, o = $e(), { forwardRef: i, currentElement: s } = F();
    return o.titleId || (o.titleId = Ke(void 0, "reka-dialog-title")), o.descriptionId || (o.descriptionId = Ke(void 0, "reka-dialog-description")), Q(() => {
      o.contentElement = s, te() !== document.body && (o.triggerElement.value = te());
    }), process.env.NODE_ENV !== "production" && pl({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: s
    }), (a, l) => (O(), D(m(mr), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: l[5] || (l[5] = (c) => r("openAutoFocus", c)),
      onUnmountAutoFocus: l[6] || (l[6] = (c) => r("closeAutoFocus", c))
    }, {
      default: S(() => [
        k(m(Dn), R({
          id: m(o).contentId,
          ref: m(i),
          as: a.as,
          "as-child": a.asChild,
          "disable-outside-pointer-events": a.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": m(o).descriptionId,
          "aria-labelledby": m(o).titleId,
          "data-state": m(ul)(m(o).open.value)
        }, a.$attrs, {
          onDismiss: l[0] || (l[0] = (c) => m(o).onOpenChange(!1)),
          onEscapeKeyDown: l[1] || (l[1] = (c) => r("escapeKeyDown", c)),
          onFocusOutside: l[2] || (l[2] = (c) => r("focusOutside", c)),
          onInteractOutside: l[3] || (l[3] = (c) => r("interactOutside", c)),
          onPointerDownOutside: l[4] || (l[4] = (c) => r("pointerDownOutside", c))
        }), {
          default: S(() => [
            $(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var xl = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ne = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), ft = {}, Kt = 0, vr = function(e) {
  return e && (e.host || vr(e.parentNode));
}, Cl = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = vr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, El = function(e, t, n, r) {
  var o = Cl(t, Array.isArray(e) ? e : [e]);
  ft[n] || (ft[n] = /* @__PURE__ */ new WeakMap());
  var i = ft[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || a.has(d) || (a.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        u(f);
      else
        try {
          var p = f.getAttribute(r), h = p !== null && p !== "false", g = (Ne.get(f) || 0) + 1, v = (i.get(f) || 0) + 1;
          Ne.set(f, g), i.set(f, v), s.push(f), g === 1 && h && dt.set(f, !0), v === 1 && f.setAttribute(n, "true"), h || f.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", f, w);
        }
    });
  };
  return u(t), a.clear(), Kt++, function() {
    s.forEach(function(d) {
      var f = Ne.get(d) - 1, p = i.get(d) - 1;
      Ne.set(d, f), i.set(d, p), f || (dt.has(d) || d.removeAttribute(r), dt.delete(d)), p || d.removeAttribute(n);
    }), Kt--, Kt || (Ne = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), ft = {});
  };
}, _l = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = xl(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), El(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function gr(e) {
  let t;
  W(() => ie(e), (n) => {
    n ? t = _l(n) : t && t();
  }), Ao(() => {
    t && t();
  });
}
const Sl = /* @__PURE__ */ T({
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
    const n = e, r = t, o = $e(), i = kt(r), { forwardRef: s, currentElement: a } = F();
    return gr(a), (l, c) => (O(), D(hr, R({ ...n, ...m(i) }, {
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
      default: S(() => [
        $(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Ol = /* @__PURE__ */ T({
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
    const n = e, o = kt(t);
    F();
    const i = $e(), s = A(!1), a = A(!1);
    return (l, c) => (O(), D(hr, R({ ...n, ...m(o) }, {
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
      default: S(() => [
        $(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Al = /* @__PURE__ */ T({
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
    const n = e, r = t, o = $e(), i = kt(r), { forwardRef: s } = F();
    return (a, l) => (O(), D(m(Dt), {
      present: a.forceMount || m(o).open.value
    }, {
      default: S(() => [
        m(o).modal.value ? (O(), D(Sl, R({
          key: 0,
          ref: m(s)
        }, { ...n, ...m(i), ...a.$attrs }), {
          default: S(() => [
            $(a.$slots, "default")
          ]),
          _: 3
        }, 16)) : (O(), D(Ol, R({
          key: 1,
          ref: m(s)
        }, { ...n, ...m(i), ...a.$attrs }), {
          default: S(() => [
            $(a.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function qt(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function an(e, t, n = ".", r) {
  if (!qt(t))
    return an(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const i in e) {
    if (i === "__proto__" || i === "constructor")
      continue;
    const s = e[i];
    s != null && (r && r(o, i, s, n) || (Array.isArray(s) && Array.isArray(o[i]) ? o[i] = [...s, ...o[i]] : qt(s) && qt(o[i]) ? o[i] = an(
      s,
      o[i],
      (n ? `${n}.` : "") + i.toString(),
      r
    ) : o[i] = s));
  }
  return o;
}
function Pl(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => an(n, r, "", e), {})
  );
}
const Tl = Pl(), $l = Zi(() => {
  const e = A(/* @__PURE__ */ new Map()), t = A(), n = P(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), r = It({
    scrollBody: A(!0)
  });
  let o = null;
  const i = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", mo && (o == null || o()), t.value = void 0;
  };
  return W(n, (s, a) => {
    var d;
    if (!Te)
      return;
    if (!s) {
      a && i();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const l = window.innerWidth - document.documentElement.clientWidth, c = { padding: l, margin: 0 }, u = (d = r.scrollBody) != null && d.value ? typeof r.scrollBody.value == "object" ? Tl({
      padding: r.scrollBody.value.padding === !0 ? l : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? l : r.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    l > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.body.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), mo && (o = ve(
      document,
      "touchmove",
      (f) => Il(f),
      { passive: !1 }
    )), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function yr(e) {
  const t = Math.random().toString(36).substring(2, 7), n = $l();
  n.value.set(t, e ?? !1);
  const r = P({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return Za(() => {
    n.value.delete(t);
  }), r;
}
function wr(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : wr(n);
  }
}
function Il(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && wr(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Dl = /* @__PURE__ */ T({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = $e();
    return yr(!0), F(), (n, r) => (O(), D(m(V), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": m(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: S(() => [
        $(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), kl = /* @__PURE__ */ T({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = $e(), { forwardRef: n } = F();
    return (r, o) => {
      var i;
      return (i = m(t)) != null && i.modal.value ? (O(), D(m(Dt), {
        key: 0,
        present: r.forceMount || m(t).open.value
      }, {
        default: S(() => [
          k(Dl, R(r.$attrs, {
            ref: m(n),
            as: r.as,
            "as-child": r.asChild
          }), {
            default: S(() => [
              $(r.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : X("", !0);
    };
  }
}), Bl = /* @__PURE__ */ T({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const n = $e();
    return (r, o) => (O(), D(m(V), R(t, {
      type: r.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (i) => m(n).onOpenChange(!1))
    }), {
      default: S(() => [
        $(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
function wo() {
  const e = A(), t = P(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : ie(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const bo = "data-reka-collection-item";
function Je(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const u = A(/* @__PURE__ */ new Map());
    o = {
      collectionRef: A(),
      itemMap: u
    }, Oo(r, o);
  } else
    o = So(r);
  const i = (u = !1) => {
    const d = o.collectionRef.value;
    if (!d)
      return [];
    const f = Array.from(d.querySelectorAll(`[${bo}]`)), h = Array.from(o.itemMap.value.values()).sort(
      (g, v) => f.indexOf(g.ref) - f.indexOf(v.ref)
    );
    return u ? h : h.filter((g) => g.ref.dataset.disabled !== "");
  }, s = T({
    name: "CollectionSlot",
    setup(u, { slots: d }) {
      const { primitiveElement: f, currentElement: p } = wo();
      return W(p, () => {
        o.collectionRef.value = p.value;
      }), () => _e(sn, { ref: f }, d);
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
    setup(u, { slots: d, attrs: f }) {
      const { primitiveElement: p, currentElement: h } = wo();
      return q((g) => {
        if (h.value) {
          const v = Wr(h.value);
          o.itemMap.value.set(v, { ref: h.value, value: u.value }), g(() => o.itemMap.value.delete(v));
        }
      }), () => _e(sn, { ...f, [bo]: "", ref: p }, d);
    }
  }), l = P(() => Array.from(o.itemMap.value.values())), c = P(() => o.itemMap.value.size);
  return { getItems: i, reactiveItems: l, itemMapSize: c, CollectionSlot: s, CollectionItem: a };
}
function Ml(e) {
  return P(() => {
    var t;
    return os(e) ? !!((t = ie(e)) != null && t.closest("form")) : !0;
  });
}
const [br, Ll] = pe("PopperRoot"), xr = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = A();
    return Ll({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => $(n.$slots, "default");
  }
});
function Cr(e) {
  const t = ur("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, i) => {
      t.value = t.value + o;
      {
        const s = te(), a = i.map((f) => {
          var p, h;
          return {
            ...f,
            textValue: ((p = f.value) == null ? void 0 : p.textValue) ?? ((h = f.ref.textContent) == null ? void 0 : h.trim()) ?? ""
          };
        }), l = a.find((f) => f.ref === s), c = a.map((f) => f.textValue), u = Fl(c, t.value, l == null ? void 0 : l.textValue), d = a.find((f) => f.textValue === u);
        return d && d.ref.focus(), d == null ? void 0 : d.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Rl(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Fl(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = Rl(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const Er = /* @__PURE__ */ T({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = F(), o = br();
    return Io(() => {
      o.onAnchorChange(t.reference ?? r.value);
    }), (i, s) => (O(), D(m(V), {
      ref: m(n),
      as: i.as,
      "as-child": i.asChild
    }, {
      default: S(() => [
        $(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Nl(e) {
  return e !== null;
}
function Vl(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var v, w, b;
      const { placement: n, rects: r, middlewareData: o } = t, s = ((v = o.arrow) == null ? void 0 : v.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, u] = ln(n), d = { start: "0%", center: "50%", end: "100%" }[u], f = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + a / 2, p = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
      let h = "", g = "";
      return c === "bottom" ? (h = s ? d : `${f}px`, g = `${-l}px`) : c === "top" ? (h = s ? d : `${f}px`, g = `${r.floating.height + l}px`) : c === "right" ? (h = `${-l}px`, g = s ? d : `${p}px`) : c === "left" && (h = `${r.floating.width + l}px`, g = s ? d : `${p}px`), { data: { x: h, y: g } };
    }
  };
}
function ln(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function Wl(e) {
  const t = A(), n = P(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = P(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return Q(() => {
    const o = ie(e);
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
const Hl = {
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
}, [jl, zl] = pe("PopperContent"), _r = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Pe({
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
    ...Hl
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = br(), { forwardRef: i, currentElement: s } = F(), a = A(), l = A(), { width: c, height: u } = Wl(l), d = P(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = P(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), p = P(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), h = P(() => ({
      padding: f.value,
      boundary: p.value.filter(Nl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: p.value.length > 0
    })), g = Qi(() => [
      Ma({
        mainAxis: n.sideOffset + u.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && ao({
        ...h.value
      }),
      n.avoidCollisions && La({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Va() : void 0,
        ...h.value
      }),
      !n.prioritizePosition && n.avoidCollisions && ao({
        ...h.value
      }),
      Ra({
        ...h.value,
        apply: ({ elements: L, rects: z, availableWidth: U, availableHeight: N }) => {
          const { width: Y, height: J } = z.reference, H = L.floating.style;
          H.setProperty(
            "--reka-popper-available-width",
            `${U}px`
          ), H.setProperty(
            "--reka-popper-available-height",
            `${N}px`
          ), H.setProperty(
            "--reka-popper-anchor-width",
            `${Y}px`
          ), H.setProperty(
            "--reka-popper-anchor-height",
            `${J}px`
          );
        }
      }),
      l.value && ja({ element: l.value, padding: n.arrowPadding }),
      Vl({
        arrowWidth: c.value,
        arrowHeight: u.value
      }),
      n.hideWhenDetached && Fa({ strategy: "referenceHidden", ...h.value })
    ]), v = P(() => n.reference ?? o.anchor.value), { floatingStyles: w, placement: b, isPositioned: y, middlewareData: x } = za(
      v,
      a,
      {
        strategy: n.positionStrategy,
        placement: d,
        whileElementsMounted: (...L) => Ba(...L, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), C = P(
      () => ln(b.value)[0]
    ), E = P(
      () => ln(b.value)[1]
    );
    Io(() => {
      y.value && r("placed");
    });
    const _ = P(
      () => {
        var L;
        return ((L = x.value.arrow) == null ? void 0 : L.centerOffset) !== 0;
      }
    ), I = A("");
    q(() => {
      s.value && (I.value = window.getComputedStyle(s.value).zIndex);
    });
    const B = P(() => {
      var L;
      return ((L = x.value.arrow) == null ? void 0 : L.x) ?? 0;
    }), M = P(() => {
      var L;
      return ((L = x.value.arrow) == null ? void 0 : L.y) ?? 0;
    });
    return zl({
      placedSide: C,
      onArrowChange: (L) => l.value = L,
      arrowX: B,
      arrowY: M,
      shouldHideArrow: _
    }), (L, z) => {
      var U, N, Y;
      return O(), j("div", {
        ref_key: "floatingRef",
        ref: a,
        "data-reka-popper-content-wrapper": "",
        style: _t({
          ...m(w),
          transform: m(y) ? m(w).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: I.value,
          "--reka-popper-transform-origin": [
            (U = m(x).transformOrigin) == null ? void 0 : U.x,
            (N = m(x).transformOrigin) == null ? void 0 : N.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Y = m(x).hide) == null ? void 0 : Y.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        k(m(V), R({ ref: m(i) }, L.$attrs, {
          "as-child": n.asChild,
          as: L.as,
          "data-side": C.value,
          "data-align": E.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: m(y) ? void 0 : "none"
          }
        }), {
          default: S(() => [
            $(L.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
function Ul(e) {
  const t = It({
    nonce: A()
  });
  return P(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const Kl = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, ql = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, Yl = /* @__PURE__ */ T({
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
    return F(), (n, r) => (O(), D(m(V), R(t, {
      width: n.width,
      height: n.height,
      viewBox: n.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: n.asChild ? void 0 : "none"
    }), {
      default: S(() => [
        $(n.$slots, "default", {}, () => [
          n.rounded ? (O(), j("path", ql)) : (O(), j("path", Kl))
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
}), Gl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Sr = /* @__PURE__ */ T({
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
    const { forwardRef: t } = F(), n = jl(), r = P(() => Gl[n.placedSide.value]);
    return (o, i) => {
      var s, a, l, c;
      return O(), j("span", {
        ref: (u) => {
          m(n).onArrowChange(u);
        },
        style: _t({
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
        k(Yl, R(o.$attrs, {
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
          default: S(() => [
            $(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "rounded", "width", "height"])
      ], 4);
    };
  }
});
let Yt = 0;
function Xl() {
  q((e) => {
    if (!Te)
      return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? xo()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? xo()
    ), Yt++, e(() => {
      Yt === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), Yt--;
    });
  });
}
function xo() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
const Ql = /* @__PURE__ */ T({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (O(), D(m($n), Ge(it(t)), {
      default: S(() => [
        $(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Jl(e, t) {
  const n = ur(!1, 300), r = A(null), o = Xa();
  function i() {
    r.value = null, n.value = !1;
  }
  function s(a, l) {
    const c = a.currentTarget, u = { x: a.clientX, y: a.clientY }, d = Zl(u, c.getBoundingClientRect()), f = ec(u, d), p = tc(l.getBoundingClientRect()), h = oc([...f, ...p]);
    r.value = h, n.value = !0;
  }
  return q((a) => {
    if (e.value && t.value) {
      const l = (u) => s(u, t.value), c = (u) => s(u, e.value);
      e.value.addEventListener("pointerleave", l), t.value.addEventListener("pointerleave", c), a(() => {
        var u, d;
        (u = e.value) == null || u.removeEventListener("pointerleave", l), (d = t.value) == null || d.removeEventListener("pointerleave", c);
      });
    }
  }), q((a) => {
    var l;
    if (r.value) {
      const c = (u) => {
        var v, w;
        if (!r.value)
          return;
        const d = u.target, f = { x: u.clientX, y: u.clientY }, p = ((v = e.value) == null ? void 0 : v.contains(d)) || ((w = t.value) == null ? void 0 : w.contains(d)), h = !nc(f, r.value), g = !!d.closest("[data-grace-area-trigger]");
        p ? i() : (h || g) && (i(), o.trigger());
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
function Zl(e, t) {
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
function ec(e, t, n = 5) {
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
function tc(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function nc(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x, l = t[i].y, c = t[s].x, u = t[s].y;
    l > r != u > r && n < (c - a) * (r - l) / (u - l) + a && (o = !o);
  }
  return o;
}
function oc(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), rc(t);
}
function rc(e) {
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
function Co(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
const ic = /* @__PURE__ */ T({
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
    const t = e, n = A();
    return W(() => t.value, (r, o) => {
      var l;
      const i = window.HTMLSelectElement.prototype, a = Object.getOwnPropertyDescriptor(
        i,
        "value"
      ).set;
      if (r !== o && a) {
        const c = new Event("change", { bubbles: !0 });
        a.call(n.value, r), (l = n.value) == null || l.dispatchEvent(c);
      }
    }), (r, o) => (O(), D(m(ar), { "as-child": "" }, {
      default: S(() => [
        Hr("select", R({
          ref_key: "selectElement",
          ref: n
        }, t), [
          $(r.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), sc = [" ", "Enter", "ArrowUp", "ArrowDown"], ac = [" ", "Enter"], oe = 10;
function cn(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((r) => un(r, t, n)) : un(e, t, n);
}
function un(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : qa(e, t);
}
const lc = {
  key: 0,
  value: ""
}, [Ie, Or] = pe("SelectRoot"), cc = /* @__PURE__ */ T({
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
    const n = e, r = t, { required: o, disabled: i, multiple: s, dir: a } = Ye(n), l = ze(n, "modelValue", r, {
      defaultValue: n.defaultValue ?? (s.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    }), c = ze(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), u = A(), d = A(), f = A({
      x: 0,
      y: 0
    }), p = P(() => {
      var y;
      return s.value && Array.isArray(l.value) ? ((y = l.value) == null ? void 0 : y.length) === 0 : po(l.value);
    });
    Je({ isProvider: !0 });
    const h = Ya(a), g = Ml(u), v = A(/* @__PURE__ */ new Set()), w = P(() => Array.from(v.value).map((y) => y.value).join(";"));
    function b(y) {
      if (s.value) {
        const x = Array.isArray(l.value) ? [...l.value] : [], C = x.findIndex((E) => un(E, y, n.by));
        C === -1 ? x.push(y) : x.splice(C, 1), l.value = [...x];
      } else
        l.value = y;
    }
    return Or({
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
      onValueChange: b,
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
      optionsSet: v,
      onOptionAdd: (y) => v.value.add(y),
      onOptionRemove: (y) => v.value.delete(y)
    }), (y, x) => (O(), D(m(xr), null, {
      default: S(() => [
        $(y.$slots, "default", {
          modelValue: m(l),
          open: m(c)
        }),
        m(g) ? (O(), D(ic, {
          key: w.value,
          "aria-hidden": "true",
          tabindex: "-1",
          multiple: m(s),
          required: m(o),
          name: y.name,
          autocomplete: y.autocomplete,
          disabled: m(i),
          value: m(l)
        }, {
          default: S(() => [
            m(po)(m(l)) ? (O(), j("option", lc)) : X("", !0),
            (O(!0), j(Et, null, Do(Array.from(v.value), (C) => (O(), j("option", R({
              key: C.value ?? "",
              ref_for: !0
            }, C), null, 16))), 128))
          ]),
          _: 1
        }, 8, ["multiple", "required", "name", "autocomplete", "disabled", "value"])) : X("", !0)
      ]),
      _: 3
    }));
  }
}), uc = /* @__PURE__ */ T({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Ie(), { forwardRef: r, currentElement: o } = F(), i = P(() => {
      var f;
      return ((f = n.disabled) == null ? void 0 : f.value) || t.disabled;
    });
    n.contentId || (n.contentId = Ke(void 0, "reka-select-content")), Q(() => {
      n.onTriggerChange(o.value);
    });
    const { getItems: s } = Je(), { search: a, handleTypeaheadSearch: l, resetTypeahead: c } = Cr();
    function u() {
      i.value || (n.onOpenChange(!0), c());
    }
    function d(f) {
      u(), n.triggerPointerDownPosRef.value = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      };
    }
    return (f, p) => (O(), D(m(Er), {
      "as-child": "",
      reference: f.reference
    }, {
      default: S(() => {
        var h, g, v, w;
        return [
          k(m(V), {
            ref: m(r),
            role: "combobox",
            type: f.as === "button" ? "button" : void 0,
            "aria-controls": m(n).contentId,
            "aria-expanded": m(n).open.value || !1,
            "aria-required": (h = m(n).required) == null ? void 0 : h.value,
            "aria-autocomplete": "none",
            disabled: i.value,
            dir: (g = m(n)) == null ? void 0 : g.dir.value,
            "data-state": (v = m(n)) != null && v.open.value ? "open" : "closed",
            "data-disabled": i.value ? "" : void 0,
            "data-placeholder": (w = m(n).modelValue) != null && w.value ? void 0 : "",
            "as-child": f.asChild,
            as: f.as,
            onClick: p[0] || (p[0] = (b) => {
              var y;
              (y = b == null ? void 0 : b.currentTarget) == null || y.focus();
            }),
            onPointerdown: p[1] || (p[1] = (b) => {
              if (b.pointerType === "touch")
                return b.preventDefault();
              const y = b.target;
              y.hasPointerCapture(b.pointerId) && y.releasePointerCapture(b.pointerId), b.button === 0 && b.ctrlKey === !1 && (d(b), b.preventDefault());
            }),
            onPointerup: p[2] || (p[2] = We(
              (b) => {
                b.pointerType === "touch" && d(b);
              },
              ["prevent"]
            )),
            onKeydown: p[3] || (p[3] = (b) => {
              const y = m(a) !== "";
              !(b.ctrlKey || b.altKey || b.metaKey) && b.key.length === 1 && y && b.key === " " || (m(l)(b.key, m(s)()), m(sc).includes(b.key) && (u(), b.preventDefault()));
            })
          }, {
            default: S(() => [
              $(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }, 8, ["reference"]));
  }
}), dc = /* @__PURE__ */ T({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (O(), D(m($n), Ge(it(t)), {
      default: S(() => [
        $(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [kn, fc] = pe("SelectItemAlignedPosition"), pc = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, { getItems: o } = Je(), i = Ie(), s = De(), a = A(!1), l = A(!0), c = A(), { forwardRef: u, currentElement: d } = F(), { viewport: f, selectedItem: p, selectedItemText: h, focusSelectedItem: g } = s;
    function v() {
      if (i.triggerElement.value && i.valueElement.value && c.value && d.value && (f != null && f.value) && (p != null && p.value) && (h != null && h.value)) {
        const y = i.triggerElement.value.getBoundingClientRect(), x = d.value.getBoundingClientRect(), C = i.valueElement.value.getBoundingClientRect(), E = h.value.getBoundingClientRect();
        if (i.dir.value !== "rtl") {
          const me = E.left - x.left, xe = C.left - me, ke = y.left - xe, Be = y.width + ke, Rt = Math.max(Be, x.width), Ft = window.innerWidth - oe, Nt = Co(xe, oe, Math.max(oe, Ft - Rt));
          c.value.style.minWidth = `${Be}px`, c.value.style.left = `${Nt}px`;
        } else {
          const me = x.right - E.right, xe = window.innerWidth - C.right - me, ke = window.innerWidth - y.right - xe, Be = y.width + ke, Rt = Math.max(Be, x.width), Ft = window.innerWidth - oe, Nt = Co(
            xe,
            oe,
            Math.max(oe, Ft - Rt)
          );
          c.value.style.minWidth = `${Be}px`, c.value.style.right = `${Nt}px`;
        }
        const _ = o().map((me) => me.ref), I = window.innerHeight - oe * 2, B = f.value.scrollHeight, M = window.getComputedStyle(d.value), L = Number.parseInt(
          M.borderTopWidth,
          10
        ), z = Number.parseInt(M.paddingTop, 10), U = Number.parseInt(
          M.borderBottomWidth,
          10
        ), N = Number.parseInt(
          M.paddingBottom,
          10
        ), Y = L + z + B + N + U, J = Math.min(
          p.value.offsetHeight * 5,
          Y
        ), H = window.getComputedStyle(f.value), le = Number.parseInt(H.paddingTop, 10), ce = Number.parseInt(
          H.paddingBottom,
          10
        ), Re = y.top + y.height / 2 - oe, kr = I - Re, Lt = p.value.offsetHeight / 2, Br = p.value.offsetTop + Lt, at = L + z + Br, Mr = Y - at;
        if (at <= Re) {
          const me = p.value === _[_.length - 1];
          c.value.style.bottom = "0px";
          const xe = d.value.clientHeight - f.value.offsetTop - f.value.offsetHeight, ke = Math.max(
            kr,
            Lt + (me ? ce : 0) + xe + U
          ), Be = at + ke;
          c.value.style.height = `${Be}px`;
        } else {
          const me = p.value === _[0];
          c.value.style.top = "0px";
          const ke = Math.max(
            Re,
            L + f.value.offsetTop + (me ? le : 0) + Lt
          ) + Mr;
          c.value.style.height = `${ke}px`, f.value.scrollTop = at - Re + f.value.offsetTop;
        }
        c.value.style.margin = `${oe}px 0`, c.value.style.minHeight = `${J}px`, c.value.style.maxHeight = `${I}px`, r("placed"), requestAnimationFrame(() => a.value = !0);
      }
    }
    const w = A("");
    Q(async () => {
      await re(), v(), d.value && (w.value = window.getComputedStyle(d.value).zIndex);
    });
    function b(y) {
      y && l.value === !0 && (v(), g == null || g(), l.value = !1);
    }
    return us(i.triggerElement, () => {
      v();
    }), fc({
      contentWrapper: c,
      shouldExpandOnScrollRef: a,
      onScrollButtonChange: b
    }), (y, x) => (O(), j("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: _t({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: w.value
      })
    }, [
      k(m(V), R({
        ref: m(u),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...y.$attrs, ...n }), {
        default: S(() => [
          $(y.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), mc = /* @__PURE__ */ T({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: oe },
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
    const n = Bt(e);
    return (r, o) => (O(), D(m(_r), R(m(n), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-select-content-available-width": "var(--reka-popper-available-width)",
      "--reka-select-content-available-height": "var(--reka-popper-available-height)",
      "--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
    } }), {
      default: S(() => [
        $(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ar = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [De, Pr] = pe("SelectContent"), hc = /* @__PURE__ */ T({
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
    const n = e, r = t, o = Ie();
    Xl(), yr(n.bodyLock);
    const { CollectionSlot: i, getItems: s } = Je(), a = A();
    gr(a);
    const { search: l, handleTypeaheadSearch: c } = Cr(), u = A(), d = A(), f = A(), p = A(!1), h = A(!1);
    function g() {
      d.value && a.value && ho([d.value, a.value]);
    }
    W(p, () => {
      g();
    });
    const { onOpenChange: v, triggerPointerDownPosRef: w } = o;
    q((C) => {
      if (!a.value)
        return;
      let E = { x: 0, y: 0 };
      const _ = (B) => {
        var M, L;
        E = {
          x: Math.abs(
            Math.round(B.pageX) - (((M = w.value) == null ? void 0 : M.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(B.pageY) - (((L = w.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, I = (B) => {
        var M;
        B.pointerType !== "touch" && (E.x <= 10 && E.y <= 10 ? B.preventDefault() : (M = a.value) != null && M.contains(B.target) || v(!1), document.removeEventListener("pointermove", _), w.value = null);
      };
      w.value !== null && (document.addEventListener("pointermove", _), document.addEventListener("pointerup", I, {
        capture: !0,
        once: !0
      })), C(() => {
        document.removeEventListener("pointermove", _), document.removeEventListener("pointerup", I, {
          capture: !0
        });
      });
    });
    function b(C) {
      const E = C.ctrlKey || C.altKey || C.metaKey;
      if (C.key === "Tab" && C.preventDefault(), !E && C.key.length === 1 && c(C.key, s()), ["ArrowUp", "ArrowDown", "Home", "End"].includes(C.key)) {
        let I = [...s().map((B) => B.ref)];
        if (["ArrowUp", "End"].includes(C.key) && (I = I.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(C.key)) {
          const B = C.target, M = I.indexOf(B);
          I = I.slice(M + 1);
        }
        setTimeout(() => ho(I)), C.preventDefault();
      }
    }
    const y = P(() => n.position === "popper" ? n : {}), x = Bt(y.value);
    return Pr({
      content: a,
      viewport: u,
      onViewportChange: (C) => {
        u.value = C;
      },
      itemRefCallback: (C, E, _) => {
        const I = !h.value && !_, B = cn(o.modelValue.value, E, o.by);
        I && (o.isEmptyModelValue.value || B) && (h.value = !0, d.value = C);
      },
      selectedItem: d,
      selectedItemText: f,
      onItemLeave: () => {
        var C;
        (C = a.value) == null || C.focus();
      },
      itemTextRefCallback: (C, E, _) => {
        const I = !h.value && !_;
        (cn(o.modelValue.value, E, o.by) || I) && (f.value = C);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: p,
      searchRef: l
    }), (C, E) => (O(), D(m(i), null, {
      default: S(() => [
        k(m(mr), {
          "as-child": "",
          onMountAutoFocus: E[6] || (E[6] = We(() => {
          }, ["prevent"])),
          onUnmountAutoFocus: E[7] || (E[7] = (_) => {
            var I;
            r("closeAutoFocus", _), !_.defaultPrevented && ((I = m(o).triggerElement.value) == null || I.focus({ preventScroll: !0 }), _.preventDefault());
          })
        }, {
          default: S(() => [
            k(m(Dn), {
              "as-child": "",
              "disable-outside-pointer-events": "",
              onFocusOutside: E[2] || (E[2] = We(() => {
              }, ["prevent"])),
              onDismiss: E[3] || (E[3] = (_) => m(o).onOpenChange(!1)),
              onEscapeKeyDown: E[4] || (E[4] = (_) => r("escapeKeyDown", _)),
              onPointerDownOutside: E[5] || (E[5] = (_) => r("pointerDownOutside", _))
            }, {
              default: S(() => [
                (O(), D(ko(
                  C.position === "popper" ? mc : pc
                ), R({ ...C.$attrs, ...m(x) }, {
                  id: m(o).contentId,
                  ref: (_) => {
                    a.value = m(ie)(_);
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
                  onContextmenu: E[0] || (E[0] = We(() => {
                  }, ["prevent"])),
                  onPlaced: E[1] || (E[1] = (_) => p.value = !0),
                  onKeydown: b
                }), {
                  default: S(() => [
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
}), vc = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Or(e.context), Pr(Ar), (n, r) => $(n.$slots, "default");
  }
}), gc = { key: 1 }, yc = /* @__PURE__ */ T({
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
    const n = e, o = dr(n, t), i = Ie(), s = A();
    Q(() => {
      s.value = new DocumentFragment();
    });
    const a = A(), l = P(() => n.forceMount || i.open.value);
    return (c, u) => {
      var d;
      return l.value ? (O(), D(m(Dt), {
        key: 0,
        ref_key: "presenceRef",
        ref: a,
        present: !0
      }, {
        default: S(() => [
          k(hc, Ge(it({ ...m(o), ...c.$attrs })), {
            default: S(() => [
              $(c.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((d = a.value) != null && d.present) && s.value ? (O(), j("div", gc, [
        (O(), D(To, { to: s.value }, [
          k(vc, { context: m(i) }, {
            default: S(() => [
              $(c.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : X("", !0);
    };
  }
}), wc = /* @__PURE__ */ T({
  __name: "SelectArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    rounded: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e, n = Ie(), r = De(Ar);
    return (o, i) => m(n).open.value && m(r).position === "popper" ? (O(), D(m(Sr), Ge(R({ key: 0 }, t)), {
      default: S(() => [
        $(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : X("", !0);
  }
}), [Tr, bc] = pe("SelectItem"), xc = /* @__PURE__ */ T({
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
    const n = e, r = t, { disabled: o } = Ye(n), i = Ie(), s = De(), { forwardRef: a, currentElement: l } = F(), { CollectionItem: c } = Je(), u = P(() => {
      var x;
      return cn((x = i.modelValue) == null ? void 0 : x.value, n.value, i.by);
    }), d = A(!1), f = A(n.textValue ?? ""), p = Ke(void 0, "reka-select-item-text"), h = "select.select";
    async function g(x) {
      if (x.defaultPrevented)
        return;
      const C = { originalEvent: x, value: n.value };
      In(h, v, C);
    }
    async function v(x) {
      await re(), r("select", x), !x.defaultPrevented && (o.value || (i.onValueChange(n.value), i.multiple.value || i.onOpenChange(!1)));
    }
    async function w(x) {
      var C;
      await re(), !x.defaultPrevented && (o.value ? (C = s.onItemLeave) == null || C.call(s) : x.currentTarget.focus({ preventScroll: !0 }));
    }
    async function b(x) {
      var C;
      await re(), !x.defaultPrevented && x.currentTarget === te() && ((C = s.onItemLeave) == null || C.call(s));
    }
    async function y(x) {
      var E;
      await re(), !(x.defaultPrevented || ((E = s.searchRef) == null ? void 0 : E.value) !== "" && x.key === " ") && (ac.includes(x.key) && g(x), x.key === " " && x.preventDefault());
    }
    if (n.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Q(() => {
      l.value && s.itemRefCallback(
        l.value,
        n.value,
        n.disabled
      );
    }), bc({
      value: n.value,
      disabled: o,
      textId: p,
      isSelected: u,
      onItemTextChange: (x) => {
        f.value = ((f.value || (x == null ? void 0 : x.textContent)) ?? "").trim();
      }
    }), (x, C) => (O(), D(m(c), {
      value: { textValue: f.value }
    }, {
      default: S(() => [
        k(m(V), {
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
          onFocus: C[0] || (C[0] = (E) => d.value = !0),
          onBlur: C[1] || (C[1] = (E) => d.value = !1),
          onPointerup: g,
          onPointerdown: C[2] || (C[2] = (E) => {
            E.currentTarget.focus({ preventScroll: !0 });
          }),
          onTouchend: C[3] || (C[3] = We(() => {
          }, ["prevent", "stop"])),
          onPointermove: w,
          onPointerleave: b,
          onKeydown: y
        }, {
          default: S(() => [
            $(x.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Cc = /* @__PURE__ */ T({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Tr();
    return (r, o) => m(n).isSelected.value ? (O(), D(m(V), R({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: S(() => [
        $(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : X("", !0);
  }
}), Ec = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Ie(), r = De(), o = Tr(), { forwardRef: i, currentElement: s } = F(), a = P(() => {
      var l, c;
      return {
        value: o.value,
        disabled: o.disabled.value,
        textContent: ((l = s.value) == null ? void 0 : l.textContent) ?? ((c = o.value) == null ? void 0 : c.toString()) ?? ""
      };
    });
    return Q(() => {
      s.value && (o.onItemTextChange(s.value), r.itemTextRefCallback(
        s.value,
        o.value,
        o.disabled.value
      ), n.onOptionAdd(a.value));
    }), mn(() => {
      n.onOptionRemove(a.value);
    }), (l, c) => (O(), D(m(V), R({
      id: m(o).textId,
      ref: m(i)
    }, { ...t, ...l.$attrs }), {
      default: S(() => [
        $(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), _c = /* @__PURE__ */ T({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = Ye(t), r = Ul(n), o = De(), i = o.position === "item-aligned" ? kn() : void 0, { forwardRef: s, currentElement: a } = F();
    Q(() => {
      o == null || o.onViewportChange(a.value);
    });
    const l = A(0);
    function c(u) {
      const d = u.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: p } = i ?? {};
      if (f != null && f.value && (p != null && p.value)) {
        const h = Math.abs(l.value - d.scrollTop);
        if (h > 0) {
          const g = window.innerHeight - oe * 2, v = Number.parseFloat(
            p.value.style.minHeight
          ), w = Number.parseFloat(p.value.style.height), b = Math.max(v, w);
          if (b < g) {
            const y = b + h, x = Math.min(g, y), C = y - x;
            p.value.style.height = `${x}px`, p.value.style.bottom === "0px" && (d.scrollTop = C > 0 ? C : 0, p.value.style.justifyContent = "flex-end");
          }
        }
      }
      l.value = d.scrollTop;
    }
    return (u, d) => (O(), j(Et, null, [
      k(m(V), R({
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
        default: S(() => [
          $(u.$slots, "default")
        ]),
        _: 3
      }, 16),
      k(m(V), {
        as: "style",
        nonce: m(r)
      }, {
        default: S(() => d[0] || (d[0] = [
          qe(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")
        ])),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), $r = /* @__PURE__ */ T({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { getItems: r } = Je(), o = De(), i = A(null);
    function s() {
      i.value !== null && (window.clearInterval(i.value), i.value = null);
    }
    q(() => {
      const c = r().map((u) => u.ref).find(
        (u) => u === te()
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
    return mn(() => s()), (c, u) => {
      var d;
      return O(), D(m(V), R({
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
        default: S(() => [
          $(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Sc = /* @__PURE__ */ T({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = De(), n = t.position === "item-aligned" ? kn() : void 0, { forwardRef: r, currentElement: o } = F(), i = A(!1);
    return q((s) => {
      var a, l;
      if ((a = t.viewport) != null && a.value && ((l = t.isPositioned) != null && l.value)) {
        let c = function() {
          i.value = u.scrollTop > 0;
        };
        const u = t.viewport.value;
        c(), u.addEventListener("scroll", c), s(() => u.removeEventListener("scroll", c));
      }
    }), W(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (s, a) => i.value ? (O(), D($r, {
      key: 0,
      ref: m(r),
      onAutoScroll: a[0] || (a[0] = () => {
        const { viewport: l, selectedItem: c } = m(t);
        l != null && l.value && (c != null && c.value) && (l.value.scrollTop = l.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: S(() => [
        $(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : X("", !0);
  }
}), Oc = /* @__PURE__ */ T({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = De(), n = t.position === "item-aligned" ? kn() : void 0, { forwardRef: r, currentElement: o } = F(), i = A(!1);
    return q((s) => {
      var a, l;
      if ((a = t.viewport) != null && a.value && ((l = t.isPositioned) != null && l.value)) {
        let c = function() {
          const d = u.scrollHeight - u.clientHeight;
          i.value = Math.ceil(u.scrollTop) < d;
        };
        const u = t.viewport.value;
        c(), u.addEventListener("scroll", c), s(() => u.removeEventListener("scroll", c));
      }
    }), W(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (s, a) => i.value ? (O(), D($r, {
      key: 0,
      ref: m(r),
      onAutoScroll: a[0] || (a[0] = () => {
        const { viewport: l, selectedItem: c } = m(t);
        l != null && l.value && (c != null && c.value) && (l.value.scrollTop = l.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: S(() => [
        $(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : X("", !0);
  }
}), Ac = /* @__PURE__ */ T({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = F(), o = Ie();
    Q(() => {
      o.valueElement = r;
    });
    const i = P(() => {
      var u;
      let a = [];
      const l = Array.from(o.optionsSet.value), c = (d) => l.find((f) => f.value === d);
      return Array.isArray(o.modelValue.value) ? a = o.modelValue.value.map((d) => {
        var f;
        return ((f = c(d)) == null ? void 0 : f.textContent) ?? "";
      }) : a = [((u = c(o.modelValue.value)) == null ? void 0 : u.textContent) ?? ""], a.filter(Boolean);
    }), s = P(() => i.value.length ? i.value.join(", ") : t.placeholder);
    return (a, l) => (O(), D(m(V), {
      ref: m(n),
      as: a.as,
      "as-child": a.asChild,
      style: { pointerEvents: "none" },
      "data-placeholder": i.value.length ? void 0 : t.placeholder
    }, {
      default: S(() => [
        $(a.$slots, "default", {
          selectedLabel: i.value,
          modelValue: m(o).modelValue.value
        }, () => [
          qe(Ct(s.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-placeholder"]));
  }
}), Pc = /* @__PURE__ */ T({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (O(), D(m(V), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: S(() => [
        $(t.$slots, "default", {}, () => [
          n[0] || (n[0] = qe("▼"))
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ir = "tooltip.open", [Bn, Tc] = pe("TooltipProvider"), $c = /* @__PURE__ */ T({
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
    const t = e, { delayDuration: n, skipDelayDuration: r, disableHoverableContent: o, disableClosingTrigger: i, ignoreNonKeyboardFocus: s, disabled: a } = Ye(t);
    F();
    const l = A(!0), c = A(!1), { start: u, stop: d } = el(() => {
      l.value = !0;
    }, r, { immediate: !1 });
    return Tc({
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
}), [Mt, Ic] = pe("TooltipRoot"), Dc = /* @__PURE__ */ T({
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
    const o = Bn(), i = P(() => n.disableHoverableContent ?? o.disableHoverableContent.value), s = P(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), a = P(() => n.disabled ?? o.disabled.value), l = P(() => n.delayDuration ?? o.delayDuration.value), c = P(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), u = ze(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    W(u, (y) => {
      o.onClose && (y ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Ir))) : o.onClose());
    });
    const d = A(!1), f = A(), p = P(() => u.value ? d.value ? "delayed-open" : "instant-open" : "closed"), { start: h, stop: g } = rs(() => {
      d.value = !0, u.value = !0;
    }, l, { immediate: !1 });
    function v() {
      g(), d.value = !1, u.value = !0;
    }
    function w() {
      g(), u.value = !1;
    }
    function b() {
      h();
    }
    return Ic({
      contentId: "",
      open: u,
      stateAttribute: p,
      trigger: f,
      onTriggerChange(y) {
        f.value = y;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? b() : v();
      },
      onTriggerLeave() {
        i.value ? w() : g();
      },
      onOpen: v,
      onClose: w,
      disableHoverableContent: i,
      disableClosingTrigger: s,
      disabled: a,
      ignoreNonKeyboardFocus: c
    }), (y, x) => (O(), D(m(xr), null, {
      default: S(() => [
        $(y.$slots, "default", { open: m(u) })
      ]),
      _: 3
    }));
  }
}), kc = /* @__PURE__ */ T({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Mt(), r = Bn();
    n.contentId || (n.contentId = Ke(void 0, "reka-tooltip-content"));
    const { forwardRef: o, currentElement: i } = F(), s = A(!1), a = A(!1), l = P(() => n.disabled.value ? {} : {
      click: g,
      focus: p,
      pointermove: d,
      pointerleave: f,
      pointerdown: u,
      blur: h
    });
    Q(() => {
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
    function d(v) {
      v.pointerType !== "touch" && !a.value && !r.isPointerInTransitRef.value && (n.onTriggerEnter(), a.value = !0);
    }
    function f() {
      n.onTriggerLeave(), a.value = !1;
    }
    function p(v) {
      var w, b;
      s.value || n.ignoreNonKeyboardFocus.value && !((b = (w = v.target).matches) != null && b.call(w, ":focus-visible")) || n.onOpen();
    }
    function h() {
      n.onClose();
    }
    function g() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (v, w) => (O(), D(m(Er), {
      "as-child": "",
      reference: v.reference
    }, {
      default: S(() => [
        k(m(V), R({
          ref: m(o),
          "aria-describedby": m(n).open.value ? m(n).contentId : void 0,
          "data-state": m(n).stateAttribute.value,
          as: v.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, jr(l.value)), {
          default: S(() => [
            $(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
}), Dr = /* @__PURE__ */ T({
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
    const n = e, r = t, o = Mt(), { forwardRef: i } = F(), s = zr(), a = P(() => {
      var u;
      return (u = s.default) == null ? void 0 : u.call(s, {});
    }), l = P(() => {
      var f;
      if (n.ariaLabel)
        return n.ariaLabel;
      let u = "";
      function d(p) {
        typeof p.children == "string" && p.type !== _o ? u += p.children : Array.isArray(p.children) && p.children.forEach((h) => d(h));
      }
      return (f = a.value) == null || f.forEach((p) => d(p)), u;
    }), c = P(() => {
      const { ariaLabel: u, ...d } = n;
      return d;
    });
    return Q(() => {
      ve(window, "scroll", (u) => {
        const d = u.target;
        d != null && d.contains(o.trigger.value) && o.onClose();
      }), ve(window, Ir, o.onClose);
    }), (u, d) => (O(), D(m(Dn), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: d[0] || (d[0] = (f) => r("escapeKeyDown", f)),
      onPointerDownOutside: d[1] || (d[1] = (f) => {
        var p;
        m(o).disableClosingTrigger.value && ((p = m(o).trigger.value) != null && p.contains(f.target)) && f.preventDefault(), r("pointerDownOutside", f);
      }),
      onFocusOutside: d[2] || (d[2] = We(() => {
      }, ["prevent"])),
      onDismiss: d[3] || (d[3] = (f) => m(o).onClose())
    }, {
      default: S(() => [
        k(m(_r), R({
          ref: m(i),
          "data-state": m(o).stateAttribute.value
        }, { ...u.$attrs, ...c.value }, { style: {
          "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
          "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
          "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
        } }), {
          default: S(() => [
            $(u.$slots, "default"),
            k(m(ar), {
              id: m(o).contentId,
              role: "tooltip"
            }, {
              default: S(() => [
                qe(Ct(l.value), 1)
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
}), Bc = /* @__PURE__ */ T({
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
    const n = Bt(e), { forwardRef: r, currentElement: o } = F(), { trigger: i, onClose: s } = Mt(), a = Bn(), { isPointerInTransit: l, onPointerExit: c } = Jl(i, o);
    return a.isPointerInTransitRef = l, c(() => {
      s();
    }), (u, d) => (O(), D(Dr, R({ ref: m(r) }, m(n)), {
      default: S(() => [
        $(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mc = /* @__PURE__ */ T({
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
    const n = e, r = t, o = Mt(), i = dr(n, r), { forwardRef: s } = F();
    return (a, l) => (O(), D(m(Dt), {
      present: a.forceMount || m(o).open.value
    }, {
      default: S(() => [
        (O(), D(ko(m(o).disableHoverableContent.value ? Dr : Bc), R({ ref: m(s) }, m(i)), {
          default: S(() => [
            $(a.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Lc = /* @__PURE__ */ T({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return F(), (n, r) => (O(), D(m(Sr), Ge(it(t)), {
      default: S(() => [
        $(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rc = /* @__PURE__ */ T({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (O(), D(m($n), Ge(it(t)), {
      default: S(() => [
        $(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fc = /* @__PURE__ */ T({
  __name: "AppDialog",
  setup(e) {
    return (t, n) => (O(), D(m(rl), { class: "app-dialog" }, {
      default: S(() => [
        k(m(il), {
          class: "trigger",
          "as-child": ""
        }, {
          default: S(() => [
            $(t.$slots, "trigger", {}, void 0, !0)
          ]),
          _: 3
        }),
        k(m(Ql), null, {
          default: S(() => [
            k(m(kl), { class: "overlay" }),
            k(m(Al), { class: "content" }, {
              default: S(() => [
                k(Ks, null, {
                  default: S(() => [
                    $(t.$slots, "default", {}, void 0, !0),
                    k(m(Bl), {
                      "aria-label": "Close",
                      "as-child": ""
                    }, {
                      default: S(() => [
                        k(zs, {
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
}), bu = /* @__PURE__ */ be(Fc, [["__scopeId", "data-v-f995c101"]]), Nc = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2027.6.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_2_00000039126939024823027680000017407098825655584941_'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2090.9%20125.8'%20style='enable-background:new%200%200%2090.9%20125.8;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{opacity:0.5;fill:%23C5FFFE;enable-background:new%20;}%20.st1{fill:%23C5FFFE;}%20.st2{clip-path:url(%23SVGID_00000160187787671385330840000011365503337429337474_);}%20%3c/style%3e%3cg%20id='Layer_1-2_00000138552681162585653310000003376327086979018656_'%3e%3cg%20id='Layer_2-2_00000089575700792075398270000016475314756721804971_'%3e%3cg%20id='Layer_1-2'%3e%3cg%20id='Layer_2-2'%3e%3cg%20id='Layer_1-2-2'%3e%3cg%20id='Logo'%3e%3cg%20id='Secondary_j'%3e%3crect%20x='71.7'%20y='14.4'%20class='st0'%20width='5.8'%20height='46.7'/%3e%3cpath%20class='st0'%20d='M43.5,115.3c-18.2,0-33.1-14.8-33.1-33.1s14.9-33.1,33.1-33.1S76.6,64,76.6,82.2S61.8,115.3,43.5,115.3z%20M43.5,55.1c-14.9,0-27.1,12.2-27.1,27.1s12.2,27.1,27.1,27.1s27.1-12.2,27.1-27.1S58.5,55.1,43.5,55.1z'/%3e%3ccircle%20class='st0'%20cx='42.2'%20cy='77.4'%20r='8.2'/%3e%3c/g%3e%3cg%20id='Main_j'%3e%3ccircle%20id='Dot3'%20class='st1'%20cx='74.6'%20cy='16.4'%20r='16.4'/%3e%3ccircle%20id='Dot2'%20class='st1'%20cx='74.5'%20cy='61.1'%20r='12'/%3e%3ccircle%20id='Dot'%20class='st1'%20cx='12'%20cy='82.2'%20r='12'/%3e%3cg%20id='SquareCircle'%3e%3cg%3e%3cdefs%3e%3crect%20id='SVGID_1_'%20y='81.1'%20width='86.5'%20height='44.7'/%3e%3c/defs%3e%3cclipPath%20id='SVGID_00000170246492928372989520000014416670913551062949_'%3e%3cuse%20xlink:href='%23SVGID_1_'%20style='overflow:visible;'/%3e%3c/clipPath%3e%3cg%20style='clip-path:url(%23SVGID_00000170246492928372989520000014416670913551062949_);'%3e%3cpath%20class='st1'%20d='M43.2,124.4c-23.9,0-43.3-19.4-43.3-43.3s19.4-43.3,43.3-43.3s43.3,19.4,43.3,43.3%20S67.1,124.4,43.2,124.4z%20M43.2,61.8C32.6,61.8,24,70.4,24,81.1s8.7,19.3,19.3,19.3s19.3-8.7,19.3-19.3%20S53.9,61.8,43.2,61.8z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3crect%20x='62.6'%20y='61.1'%20class='st1'%20width='23.9'%20height='20.9'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Vc = ["src"], Wc = /* @__PURE__ */ T({
  __name: "AppLogo",
  props: Pe({
    size: null
  }, { size: "medium" }),
  setup(e) {
    return (t, n) => (O(), j("img", {
      src: m(Nc),
      class: K(["app-logo", t.size]),
      alt: "Jojko's logo'"
    }, null, 10, Vc));
  }
}), xu = /* @__PURE__ */ be(Wc, [["__scopeId", "data-v-6abc7d2e"]]), Hc = ["disabled"], jc = /* @__PURE__ */ T({
  __name: "AppSelectField",
  props: /* @__PURE__ */ Bo(Pe({
    items: null,
    disabled: { type: Boolean },
    error: null,
    name: null,
    multiple: { type: Boolean },
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
    const t = Gt(e, "modelValue"), n = Gt(e, "open"), { createLocalWaveDirective: r } = Qo, { vWave: o } = r({
      duration: 0.2
    });
    return (i, s) => {
      const a = yn;
      return O(), D(m(cc), {
        open: n.value,
        "onUpdate:open": s[0] || (s[0] = (l) => n.value = l),
        modelValue: t.value,
        "onUpdate:modelValue": s[1] || (s[1] = (l) => t.value = l),
        name: i.name,
        multiple: i.multiple,
        required: i.required
      }, {
        default: S(() => [
          k(m(uc), {
            "as-child": "",
            disabled: i.disabled
          }, {
            default: S(() => [
              $(i.$slots, "trigger", {}, () => [
                vt((O(), j("button", {
                  disabled: i.disabled,
                  class: K([i.$style.trigger, { [i.$style.placeholder]: !t.value }])
                }, [
                  k(m(Ac), { placeholder: i.placeholder }, null, 8, ["placeholder"]),
                  k(m(Pc), { "as-child": "" }, {
                    default: S(() => [
                      k(a, {
                        class: K(i.$style["select-icon"]),
                        icon: "material-symbols:expand-more-rounded"
                      }, null, 8, ["class"])
                    ]),
                    _: 1
                  })
                ], 10, Hc)), [
                  [m(o)]
                ])
              ])
            ]),
            _: 3
          }, 8, ["disabled"]),
          k(m(dc), null, {
            default: S(() => [
              k(m(yc), {
                position: "item-aligned",
                class: K(i.$style.content)
              }, {
                default: S(() => [
                  k(m(Sc)),
                  k(m(_c), {
                    class: K(i.$style.viewport)
                  }, {
                    default: S(() => [
                      (O(!0), j(Et, null, Do(i.items, (l) => vt((O(), D(m(xc), {
                        key: JSON.stringify(l),
                        class: K(i.$style.item),
                        value: l.value
                      }, {
                        default: S(() => [
                          k(m(Ec), null, {
                            default: S(() => [
                              $(i.$slots, "item", R({ ref_for: !0 }, l), () => [
                                qe(Ct(l.label ?? l.value), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          k(m(Cc))
                        ]),
                        _: 2
                      }, 1032, ["class", "value"])), [
                        [m(o)]
                      ])), 128))
                    ]),
                    _: 3
                  }, 8, ["class"]),
                  k(m(Oc)),
                  k(m(wc))
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
}), zc = "_item_d25a3ba", Uc = "_content_5242832", Kc = "_viewport_34f6182", qc = "_trigger_d455d52", Yc = "_error_123b438", Gc = "_select-icon_b60910e", Xc = "_placeholder_189bfa7", Qc = { item: zc, content: Uc, viewport: Kc, trigger: qc, error: Yc, "select-icon": Gc, placeholder: Xc }, Jc = {
  $style: Qc
}, Cu = /* @__PURE__ */ be(jc, [["__cssModules", Jc]]), Zc = (...e) => {
  const t = we().proxy.$props, n = /* @__PURE__ */ Object.create(null);
  for (const r of e)
    if (typeof r == "string")
      n[r] = ze(t, r, void 0, { eventName: `update:${r}`, passive: !0 });
    else {
      const [o, i = o, s = `update:${o}`, a = {}] = r;
      n[o] = ze(t, i, void 0, { eventName: s, passive: !0, ...a });
    }
  return n;
}, eu = ["type", "disabled", "placeholder"], tu = /* @__PURE__ */ T({
  __name: "AppTextField",
  props: Pe({
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
    const { modelValue: t = "" } = Zc("modelValue");
    return (n, r) => {
      const o = yn;
      return O(), j("div", {
        class: K([
          n.$style.wrapper,
          { [n.$style.interactive]: !n.disabled, [n.$style.error]: n.error }
        ])
      }, [
        n.iconBefore ?? n.icon ? (O(), D(o, {
          key: 0,
          icon: n.iconBefore ?? n.icon,
          class: K(n.$style["icon-before"])
        }, null, 8, ["icon", "class"])) : X("", !0),
        n.type !== "textarea" ? vt((O(), j("input", R({ key: 1 }, n.$attrs, {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => Ur(t) ? t.value = i : null),
          class: n.$style.input,
          type: n.type,
          disabled: n.disabled,
          placeholder: n.placeholder
        }), null, 16, eu)), [
          [Kr, m(t)]
        ]) : X("", !0),
        n.iconAfter ? (O(), D(o, {
          key: 2,
          icon: n.iconAfter,
          class: K(n.$style["icon-after"])
        }, null, 8, ["icon", "class"])) : X("", !0)
      ], 2);
    };
  }
}), nu = "_icon-before_fccb21f", ou = "_icon-after_eb3b2c5", ru = "_wrapper_f54e2d9", iu = "_interactive_3dc4aaf", su = "_input_c63c5c2", au = "_error_692dad4", lu = { "icon-before": nu, "icon-after": ou, wrapper: ru, interactive: iu, input: su, error: au }, cu = {
  $style: lu
}, Eu = /* @__PURE__ */ be(tu, [["__cssModules", cu]]), uu = /* @__PURE__ */ T({
  __name: "AppTooltip",
  props: /* @__PURE__ */ Bo(Pe({
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
    }, n = Gt(e, "open");
    return (r, o) => (O(), D(m($c), { "delay-duration": 0 }, {
      default: S(() => [
        k(m(Dc), {
          open: n.value,
          "onUpdate:open": o[0] || (o[0] = (i) => n.value = i)
        }, {
          default: S(() => [
            k(m(kc), { "as-child": "" }, {
              default: S(() => [
                $(r.$slots, "trigger")
              ]),
              _: 3
            }),
            k(m(Rc), null, {
              default: S(() => [
                k(m(Mc), R(r.$attrs, {
                  as: "div",
                  align: r.align,
                  position: t[r.position],
                  "align-offset": 20,
                  "aria-label": r.ariaLabel,
                  class: [r.$attrs.class, r.$style["app-tooltip"]]
                }), {
                  default: S(() => [
                    k(m(Lc), {
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
}), du = "_app-tooltip_6b0961c", fu = "_slideIn_3e7dd36", pu = "_arrow_7e59031", mu = { "app-tooltip": du, slideIn: fu, arrow: pu }, hu = {
  $style: mu
}, _u = /* @__PURE__ */ be(uu, [["__cssModules", hu]]);
export {
  zs as AppButton,
  Ks as AppCard,
  yu as AppChip,
  bu as AppDialog,
  yn as AppIcon,
  xu as AppLogo,
  Cu as AppSelectField,
  Eu as AppTextField,
  _u as AppTooltip
};
