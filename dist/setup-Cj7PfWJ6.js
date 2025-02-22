import { Comment as Qe, Text as Be, Fragment as Ge, ref as Ct, toRaw as Pt, defineComponent as ut, h as J, createBlock as vt, openBlock as Tt, unref as At, normalizeClass as jt, markRaw as Et } from "vue";
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
const x = (t) => !!t && typeof t == "object" && !Array.isArray(t);
const B = (t) => t !== null && typeof t < "u", We = (t) => B(t) && t !== "false" && t !== !1, Ke = (t) => B(t) ? t : "", Je = (t, e = "px") => B(t) ? isNaN(t) ? String(t) : String(t) + e : void 0;
function Ft(t, e) {
  if (!t && e || t && !e) return !1;
  if (t === e) return !0;
  if (x(t) && x(e)) {
    const o = Object.keys(t), i = Object.keys(e);
    if (o.length !== i.length) return !1;
    for (const n of o) {
      const r = t[n], s = e[n], c = x(r) && x(s);
      if (c && !Ft(r, s) || !c && r !== s)
        return !1;
    }
    return !0;
  }
  return Array.isArray(t) && Array.isArray(e) ? !(t.length !== e.length || !t.every((o, i) => o === e[i])) : !1;
}
function Lt(t, e, o = !1) {
  return !x(t) || !x(e) ? e : o ? at(t, e) : Object.assign(t, e);
}
function at(t, e) {
  return !x(t) || !x(e) ? e : (Object.getOwnPropertyNames(e).forEach((o) => {
    const i = t[o], n = e[o];
    Array.isArray(i) && Array.isArray(n) ? t[o] = i.concat(n) : x(i) && x(n) ? t[o] = at(
      Object.assign({}, i),
      n
    ) : t[o] = n;
  }), t);
}
function dt(t, e, o) {
  if (!t || typeof t != "object" || typeof e != "string") return t;
  const i = e.split(".").reduce((n, r) => typeof n < "u" ? n[r] : void 0, t);
  return typeof i < "u" ? i : o;
}
function pt(t, e, o) {
  const i = e.split(".");
  if (i.length === 1) {
    t[e] = o;
    return;
  }
  const n = i[0];
  return typeof t[n] > "u" && (t[n] = {}), pt(t[n], i.slice(1).join("."), o);
}
const v = {
  Android: () => typeof window < "u" && !!window.navigator.userAgent.match(/Android/i),
  BlackBerry: () => typeof window < "u" && !!window.navigator.userAgent.match(/BlackBerry/i),
  iOS: () => typeof window < "u" && !!window.navigator.userAgent.match(/iPhone|iPad|iPod/i),
  Opera: () => typeof window < "u" && !!window.navigator.userAgent.match(/Opera Mini/i),
  Windows: () => typeof window < "u" && !!window.navigator.userAgent.match(/IEMobile/i),
  any: () => v.Android() || v.BlackBerry() || v.iOS() || v.Opera() || v.Windows()
};
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
const E = Ct({
  iconPack: "mdi",
  useHtml5Validation: !0,
  statusIcon: !0,
  transformClasses: void 0
}), Mt = (t) => {
  E.value = t;
}, X = () => Object.assign({}, Pt(E.value)), _t = (t, e) => dt(E.value, t, e), Xe = (t, e) => dt(E.value, t, e), Dt = (t, e) => {
  pt(E.value, t, e);
}, Nt = {
  getOption: _t,
  getOptions: X,
  setOption: Dt,
  setOptions(t) {
    Mt(Lt(X(), t, !0));
  }
}, ht = /^[a-z0-9]+(-[a-z0-9]+)*$/, N = (t, e, o, i = "") => {
  const n = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (n.length < 2 || n.length > 3)
      return null;
    i = n.shift().slice(1);
  }
  if (n.length > 3 || !n.length)
    return null;
  if (n.length > 1) {
    const c = n.pop(), l = n.pop(), f = {
      // Allow provider without '@': "provider:prefix:name"
      provider: n.length > 0 ? n[0] : i,
      prefix: l,
      name: c
    };
    return e && !L(f) ? null : f;
  }
  const r = n[0], s = r.split("-");
  if (s.length > 1) {
    const c = {
      provider: i,
      prefix: s.shift(),
      name: s.join("-")
    };
    return e && !L(c) ? null : c;
  }
  if (o && i === "") {
    const c = {
      provider: i,
      prefix: "",
      name: r
    };
    return e && !L(c, o) ? null : c;
  }
  return null;
}, L = (t, e) => t ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((e && t.prefix === "" || t.prefix) && t.name) : !1, gt = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), D = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), R = Object.freeze({
  ...gt,
  ...D
}), U = Object.freeze({
  ...R,
  body: "",
  hidden: !1
});
function Rt(t, e) {
  const o = {};
  !t.hFlip != !e.hFlip && (o.hFlip = !0), !t.vFlip != !e.vFlip && (o.vFlip = !0);
  const i = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return i && (o.rotate = i), o;
}
function Y(t, e) {
  const o = Rt(t, e);
  for (const i in U)
    i in D ? i in t && !(i in o) && (o[i] = D[i]) : i in e ? o[i] = e[i] : i in t && (o[i] = t[i]);
  return o;
}
function Vt(t, e) {
  const o = t.icons, i = t.aliases || /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  function r(s) {
    if (o[s])
      return n[s] = [];
    if (!(s in n)) {
      n[s] = null;
      const c = i[s] && i[s].parent, l = c && r(c);
      l && (n[s] = [c].concat(l));
    }
    return n[s];
  }
  return Object.keys(o).concat(Object.keys(i)).forEach(r), n;
}
function $t(t, e, o) {
  const i = t.icons, n = t.aliases || /* @__PURE__ */ Object.create(null);
  let r = {};
  function s(c) {
    r = Y(
      i[c] || n[c],
      r
    );
  }
  return s(e), o.forEach(s), Y(t, r);
}
function mt(t, e) {
  const o = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return o;
  t.not_found instanceof Array && t.not_found.forEach((n) => {
    e(n, null), o.push(n);
  });
  const i = Vt(t);
  for (const n in i) {
    const r = i[n];
    r && (e(n, $t(t, n, r)), o.push(n));
  }
  return o;
}
const zt = {
  provider: "",
  aliases: {},
  not_found: {},
  ...gt
};
function $(t, e) {
  for (const o in e)
    if (o in t && typeof t[o] != typeof e[o])
      return !1;
  return !0;
}
function yt(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !$(t, zt))
    return null;
  const o = e.icons;
  for (const n in o) {
    const r = o[n];
    if (
      // Name cannot be empty
      !n || // Must have body
      typeof r.body != "string" || // Check other props
      !$(
        r,
        U
      )
    )
      return null;
  }
  const i = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const n in i) {
    const r = i[n], s = r.parent;
    if (
      // Name cannot be empty
      !n || // Parent must be set and point to existing icon
      typeof s != "string" || !o[s] && !i[s] || // Check other props
      !$(
        r,
        U
      )
    )
      return null;
  }
  return e;
}
const Z = /* @__PURE__ */ Object.create(null);
function Ut(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function C(t, e) {
  const o = Z[t] || (Z[t] = /* @__PURE__ */ Object.create(null));
  return o[e] || (o[e] = Ut(t, e));
}
function bt(t, e) {
  return yt(e) ? mt(e, (o, i) => {
    i ? t.icons[o] = i : t.missing.add(o);
  }) : [];
}
function qt(t, e, o) {
  try {
    if (typeof o.body == "string")
      return t.icons[e] = { ...o }, !0;
  } catch {
  }
  return !1;
}
let j = !1;
function wt(t) {
  return typeof t == "boolean" && (j = t), j;
}
function Ht(t) {
  const e = typeof t == "string" ? N(t, !0, j) : t;
  if (e) {
    const o = C(e.provider, e.prefix), i = e.name;
    return o.icons[i] || (o.missing.has(i) ? null : void 0);
  }
}
function Qt(t, e) {
  const o = N(t, !0, j);
  if (!o)
    return !1;
  const i = C(o.provider, o.prefix);
  return e ? qt(i, o.name, e) : (i.missing.add(o.name), !0);
}
function Bt(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), j && !e && !t.prefix) {
    let n = !1;
    return yt(t) && (t.prefix = "", mt(t, (r, s) => {
      Qt(r, s) && (n = !0);
    })), n;
  }
  const o = t.prefix;
  if (!L({
    prefix: o,
    name: "a"
  }))
    return !1;
  const i = C(e, o);
  return !!bt(i, t);
}
const xt = Object.freeze({
  width: null,
  height: null
}), It = Object.freeze({
  // Dimensions
  ...xt,
  // Transformations
  ...D
}), Gt = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Wt = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function tt(t, e, o) {
  if (e === 1)
    return t;
  if (o = o || 100, typeof t == "number")
    return Math.ceil(t * e * o) / o;
  if (typeof t != "string")
    return t;
  const i = t.split(Gt);
  if (i === null || !i.length)
    return t;
  const n = [];
  let r = i.shift(), s = Wt.test(r);
  for (; ; ) {
    if (s) {
      const c = parseFloat(r);
      isNaN(c) ? n.push(r) : n.push(Math.ceil(c * e * o) / o);
    } else
      n.push(r);
    if (r = i.shift(), r === void 0)
      return n.join("");
    s = !s;
  }
}
function Kt(t, e = "defs") {
  let o = "";
  const i = t.indexOf("<" + e);
  for (; i >= 0; ) {
    const n = t.indexOf(">", i), r = t.indexOf("</" + e);
    if (n === -1 || r === -1)
      break;
    const s = t.indexOf(">", r);
    if (s === -1)
      break;
    o += t.slice(n + 1, r).trim(), t = t.slice(0, i).trim() + t.slice(s + 1);
  }
  return {
    defs: o,
    content: t
  };
}
function Jt(t, e) {
  return t ? "<defs>" + t + "</defs>" + e : e;
}
function Xt(t, e, o) {
  const i = Kt(t);
  return Jt(i.defs, e + i.content + o);
}
const Yt = (t) => t === "unset" || t === "undefined" || t === "none";
function Zt(t, e) {
  const o = {
    ...R,
    ...t
  }, i = {
    ...It,
    ...e
  }, n = {
    left: o.left,
    top: o.top,
    width: o.width,
    height: o.height
  };
  let r = o.body;
  [o, i].forEach((g) => {
    const u = [], O = g.hFlip, k = g.vFlip;
    let w = g.rotate;
    O ? k ? w += 2 : (u.push(
      "translate(" + (n.width + n.left).toString() + " " + (0 - n.top).toString() + ")"
    ), u.push("scale(-1 1)"), n.top = n.left = 0) : k && (u.push(
      "translate(" + (0 - n.left).toString() + " " + (n.height + n.top).toString() + ")"
    ), u.push("scale(1 -1)"), n.top = n.left = 0);
    let y;
    switch (w < 0 && (w -= Math.floor(w / 4) * 4), w = w % 4, w) {
      case 1:
        y = n.height / 2 + n.top, u.unshift(
          "rotate(90 " + y.toString() + " " + y.toString() + ")"
        );
        break;
      case 2:
        u.unshift(
          "rotate(180 " + (n.width / 2 + n.left).toString() + " " + (n.height / 2 + n.top).toString() + ")"
        );
        break;
      case 3:
        y = n.width / 2 + n.left, u.unshift(
          "rotate(-90 " + y.toString() + " " + y.toString() + ")"
        );
        break;
    }
    w % 2 === 1 && (n.left !== n.top && (y = n.left, n.left = n.top, n.top = y), n.width !== n.height && (y = n.width, n.width = n.height, n.height = y)), u.length && (r = Xt(
      r,
      '<g transform="' + u.join(" ") + '">',
      "</g>"
    ));
  });
  const s = i.width, c = i.height, l = n.width, f = n.height;
  let a, d;
  s === null ? (d = c === null ? "1em" : c === "auto" ? f : c, a = tt(d, l / f)) : (a = s === "auto" ? l : s, d = c === null ? tt(a, f / l) : c === "auto" ? f : c);
  const h = {}, m = (g, u) => {
    Yt(u) || (h[g] = u.toString());
  };
  m("width", a), m("height", d);
  const I = [n.left, n.top, l, f];
  return h.viewBox = I.join(" "), {
    attributes: h,
    viewBox: I,
    body: r
  };
}
const te = /\sid="(\S+)"/g, ee = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let ne = 0;
function oe(t, e = ee) {
  const o = [];
  let i;
  for (; i = te.exec(t); )
    o.push(i[1]);
  if (!o.length)
    return t;
  const n = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return o.forEach((r) => {
    const s = typeof e == "function" ? e(r) : e + (ne++).toString(), c = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + s + n + "$3"
    );
  }), t = t.replace(new RegExp(n, "g"), ""), t;
}
const q = /* @__PURE__ */ Object.create(null);
function ie(t, e) {
  q[t] = e;
}
function H(t) {
  return q[t] || q[""];
}
function G(t) {
  let e;
  if (typeof t.resources == "string")
    e = [t.resources];
  else if (e = t.resources, !(e instanceof Array) || !e.length)
    return null;
  return {
    // API hosts
    resources: e,
    // Root path
    path: t.path || "/",
    // URL length limit
    maxURL: t.maxURL || 500,
    // Timeout before next host is used.
    rotate: t.rotate || 750,
    // Timeout before failing query.
    timeout: t.timeout || 5e3,
    // Randomise default API end point.
    random: t.random === !0,
    // Start index
    index: t.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: t.dataAfterTimeout !== !1
  };
}
const W = /* @__PURE__ */ Object.create(null), T = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], M = [];
for (; T.length > 0; )
  T.length === 1 || Math.random() > 0.5 ? M.push(T.shift()) : M.push(T.pop());
W[""] = G({
  resources: ["https://api.iconify.design"].concat(M)
});
function re(t, e) {
  const o = G(e);
  return o === null ? !1 : (W[t] = o, !0);
}
function K(t) {
  return W[t];
}
const se = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let et = se();
function ce(t, e) {
  const o = K(t);
  if (!o)
    return 0;
  let i;
  if (!o.maxURL)
    i = 0;
  else {
    let n = 0;
    o.resources.forEach((s) => {
      n = Math.max(n, s.length);
    });
    const r = e + ".json?icons=";
    i = o.maxURL - n - o.path.length - r.length;
  }
  return i;
}
function le(t) {
  return t === 404;
}
const fe = (t, e, o) => {
  const i = [], n = ce(t, e), r = "icons";
  let s = {
    type: r,
    provider: t,
    prefix: e,
    icons: []
  }, c = 0;
  return o.forEach((l, f) => {
    c += l.length + 1, c >= n && f > 0 && (i.push(s), s = {
      type: r,
      provider: t,
      prefix: e,
      icons: []
    }, c = l.length), s.icons.push(l);
  }), i.push(s), i;
};
function ue(t) {
  if (typeof t == "string") {
    const e = K(t);
    if (e)
      return e.path;
  }
  return "/";
}
const ae = (t, e, o) => {
  if (!et) {
    o("abort", 424);
    return;
  }
  let i = ue(e.provider);
  switch (e.type) {
    case "icons": {
      const r = e.prefix, c = e.icons.join(","), l = new URLSearchParams({
        icons: c
      });
      i += r + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const r = e.uri;
      i += r.slice(0, 1) === "/" ? r.slice(1) : r;
      break;
    }
    default:
      o("abort", 400);
      return;
  }
  let n = 503;
  et(t + i).then((r) => {
    const s = r.status;
    if (s !== 200) {
      setTimeout(() => {
        o(le(s) ? "abort" : "next", s);
      });
      return;
    }
    return n = 501, r.json();
  }).then((r) => {
    if (typeof r != "object" || r === null) {
      setTimeout(() => {
        r === 404 ? o("abort", r) : o("next", n);
      });
      return;
    }
    setTimeout(() => {
      o("success", r);
    });
  }).catch(() => {
    o("next", n);
  });
}, de = {
  prepare: fe,
  send: ae
};
function pe(t) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, o = /* @__PURE__ */ Object.create(null);
  t.sort((n, r) => n.provider !== r.provider ? n.provider.localeCompare(r.provider) : n.prefix !== r.prefix ? n.prefix.localeCompare(r.prefix) : n.name.localeCompare(r.name));
  let i = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((n) => {
    if (i.name === n.name && i.prefix === n.prefix && i.provider === n.provider)
      return;
    i = n;
    const r = n.provider, s = n.prefix, c = n.name, l = o[r] || (o[r] = /* @__PURE__ */ Object.create(null)), f = l[s] || (l[s] = C(r, s));
    let a;
    c in f.icons ? a = e.loaded : s === "" || f.missing.has(c) ? a = e.missing : a = e.pending;
    const d = {
      provider: r,
      prefix: s,
      name: c
    };
    a.push(d);
  }), e;
}
function kt(t, e) {
  t.forEach((o) => {
    const i = o.loaderCallbacks;
    i && (o.loaderCallbacks = i.filter((n) => n.id !== e));
  });
}
function he(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let o = !1;
    const i = t.provider, n = t.prefix;
    e.forEach((r) => {
      const s = r.icons, c = s.pending.length;
      s.pending = s.pending.filter((l) => {
        if (l.prefix !== n)
          return !0;
        const f = l.name;
        if (t.icons[f])
          s.loaded.push({
            provider: i,
            prefix: n,
            name: f
          });
        else if (t.missing.has(f))
          s.missing.push({
            provider: i,
            prefix: n,
            name: f
          });
        else
          return o = !0, !0;
        return !1;
      }), s.pending.length !== c && (o || kt([t], r.id), r.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        r.abort
      ));
    });
  }));
}
let ge = 0;
function me(t, e, o) {
  const i = ge++, n = kt.bind(null, o, i);
  if (!e.pending.length)
    return n;
  const r = {
    id: i,
    icons: e,
    callback: t,
    abort: n
  };
  return o.forEach((s) => {
    (s.loaderCallbacks || (s.loaderCallbacks = [])).push(r);
  }), n;
}
function ye(t, e = !0, o = !1) {
  const i = [];
  return t.forEach((n) => {
    const r = typeof n == "string" ? N(n, e, o) : n;
    r && i.push(r);
  }), i;
}
var be = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function we(t, e, o, i) {
  const n = t.resources.length, r = t.random ? Math.floor(Math.random() * n) : t.index;
  let s;
  if (t.random) {
    let p = t.resources.slice(0);
    for (s = []; p.length > 1; ) {
      const b = Math.floor(Math.random() * p.length);
      s.push(p[b]), p = p.slice(0, b).concat(p.slice(b + 1));
    }
    s = s.concat(p);
  } else
    s = t.resources.slice(r).concat(t.resources.slice(0, r));
  const c = Date.now();
  let l = "pending", f = 0, a, d = null, h = [], m = [];
  typeof i == "function" && m.push(i);
  function I() {
    d && (clearTimeout(d), d = null);
  }
  function g() {
    l === "pending" && (l = "aborted"), I(), h.forEach((p) => {
      p.status === "pending" && (p.status = "aborted");
    }), h = [];
  }
  function u(p, b) {
    b && (m = []), typeof p == "function" && m.push(p);
  }
  function O() {
    return {
      startTime: c,
      payload: e,
      status: l,
      queriesSent: f,
      queriesPending: h.length,
      subscribe: u,
      abort: g
    };
  }
  function k() {
    l = "failed", m.forEach((p) => {
      p(void 0, a);
    });
  }
  function w() {
    h.forEach((p) => {
      p.status === "pending" && (p.status = "aborted");
    }), h = [];
  }
  function y(p, b, P) {
    const F = b !== "success";
    switch (h = h.filter((S) => S !== p), l) {
      case "pending":
        break;
      case "failed":
        if (F || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (b === "abort") {
      a = P, k();
      return;
    }
    if (F) {
      a = P, h.length || (s.length ? V() : k());
      return;
    }
    if (I(), w(), !t.random) {
      const S = t.resources.indexOf(p.resource);
      S !== -1 && S !== t.index && (t.index = S);
    }
    l = "completed", m.forEach((S) => {
      S(P);
    });
  }
  function V() {
    if (l !== "pending")
      return;
    I();
    const p = s.shift();
    if (p === void 0) {
      if (h.length) {
        d = setTimeout(() => {
          I(), l === "pending" && (w(), k());
        }, t.timeout);
        return;
      }
      k();
      return;
    }
    const b = {
      status: "pending",
      resource: p,
      callback: (P, F) => {
        y(b, P, F);
      }
    };
    h.push(b), f++, d = setTimeout(V, t.rotate), o(p, e, b.callback);
  }
  return setTimeout(V), O;
}
function St(t) {
  const e = {
    ...be,
    ...t
  };
  let o = [];
  function i() {
    o = o.filter((c) => c().status === "pending");
  }
  function n(c, l, f) {
    const a = we(
      e,
      c,
      l,
      (d, h) => {
        i(), f && f(d, h);
      }
    );
    return o.push(a), a;
  }
  function r(c) {
    return o.find((l) => c(l)) || null;
  }
  return {
    query: n,
    find: r,
    setIndex: (c) => {
      e.index = c;
    },
    getIndex: () => e.index,
    cleanup: i
  };
}
function nt() {
}
const z = /* @__PURE__ */ Object.create(null);
function xe(t) {
  if (!z[t]) {
    const e = K(t);
    if (!e)
      return;
    const o = St(e), i = {
      config: e,
      redundancy: o
    };
    z[t] = i;
  }
  return z[t];
}
function Ie(t, e, o) {
  let i, n;
  if (typeof t == "string") {
    const r = H(t);
    if (!r)
      return o(void 0, 424), nt;
    n = r.send;
    const s = xe(t);
    s && (i = s.redundancy);
  } else {
    const r = G(t);
    if (r) {
      i = St(r);
      const s = t.resources ? t.resources[0] : "", c = H(s);
      c && (n = c.send);
    }
  }
  return !i || !n ? (o(void 0, 424), nt) : i.query(e, n, o)().abort;
}
function ot() {
}
function ke(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, he(t);
  }));
}
function Se(t) {
  const e = [], o = [];
  return t.forEach((i) => {
    (i.match(ht) ? e : o).push(i);
  }), {
    valid: e,
    invalid: o
  };
}
function A(t, e, o) {
  function i() {
    const n = t.pendingIcons;
    e.forEach((r) => {
      n && n.delete(r), t.icons[r] || t.missing.add(r);
    });
  }
  if (o && typeof o == "object")
    try {
      if (!bt(t, o).length) {
        i();
        return;
      }
    } catch (n) {
      console.error(n);
    }
  i(), ke(t);
}
function it(t, e) {
  t instanceof Promise ? t.then((o) => {
    e(o);
  }).catch(() => {
    e(null);
  }) : e(t);
}
function Oe(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: o, prefix: i } = t, n = t.iconsToLoad;
    if (delete t.iconsToLoad, !n || !n.length)
      return;
    const r = t.loadIcon;
    if (t.loadIcons && (n.length > 1 || !r)) {
      it(
        t.loadIcons(n, i, o),
        (a) => {
          A(t, n, a);
        }
      );
      return;
    }
    if (r) {
      n.forEach((a) => {
        const d = r(a, i, o);
        it(d, (h) => {
          const m = h ? {
            prefix: i,
            icons: {
              [a]: h
            }
          } : null;
          A(t, [a], m);
        });
      });
      return;
    }
    const { valid: s, invalid: c } = Se(n);
    if (c.length && A(t, c, null), !s.length)
      return;
    const l = i.match(ht) ? H(o) : null;
    if (!l) {
      A(t, s, null);
      return;
    }
    l.prepare(o, i, s).forEach((a) => {
      Ie(o, a, (d) => {
        A(t, a.icons, d);
      });
    });
  }));
}
const Ce = (t, e) => {
  const o = ye(t, !0, wt()), i = pe(o);
  if (!i.pending.length) {
    let l = !0;
    return e && setTimeout(() => {
      l && e(
        i.loaded,
        i.missing,
        i.pending,
        ot
      );
    }), () => {
      l = !1;
    };
  }
  const n = /* @__PURE__ */ Object.create(null), r = [];
  let s, c;
  return i.pending.forEach((l) => {
    const { provider: f, prefix: a } = l;
    if (a === c && f === s)
      return;
    s = f, c = a, r.push(C(f, a));
    const d = n[f] || (n[f] = /* @__PURE__ */ Object.create(null));
    d[a] || (d[a] = []);
  }), i.pending.forEach((l) => {
    const { provider: f, prefix: a, name: d } = l, h = C(f, a), m = h.pendingIcons || (h.pendingIcons = /* @__PURE__ */ new Set());
    m.has(d) || (m.add(d), n[f][a].push(d));
  }), r.forEach((l) => {
    const f = n[l.provider][l.prefix];
    f.length && Oe(l, f);
  }), e ? me(e, i, r) : ot;
};
function Pe(t, e) {
  const o = {
    ...t
  };
  for (const i in e) {
    const n = e[i], r = typeof n;
    i in xt ? (n === null || n && (r === "string" || r === "number")) && (o[i] = n) : r === typeof o[i] && (o[i] = i === "rotate" ? n % 4 : n);
  }
  return o;
}
const ve = /[\s,]+/;
function Te(t, e) {
  e.split(ve).forEach((o) => {
    switch (o.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
function Ae(t, e = 0) {
  const o = t.replace(/^-?[0-9.]*/, "");
  function i(n) {
    for (; n < 0; )
      n += 4;
    return n % 4;
  }
  if (o === "") {
    const n = parseInt(t);
    return isNaN(n) ? 0 : i(n);
  } else if (o !== t) {
    let n = 0;
    switch (o) {
      case "%":
        n = 25;
        break;
      case "deg":
        n = 90;
    }
    if (n) {
      let r = parseFloat(t.slice(0, t.length - o.length));
      return isNaN(r) ? 0 : (r = r / n, r % 1 === 0 ? i(r) : 0);
    }
  }
  return e;
}
function je(t, e) {
  let o = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in e)
    o += " " + i + '="' + e[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + o + ">" + t + "</svg>";
}
function Ee(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Fe(t) {
  return "data:image/svg+xml," + Ee(t);
}
function Le(t) {
  return 'url("' + Fe(t) + '")';
}
const rt = {
  ...It,
  inline: !1
}, Me = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, _e = {
  display: "inline-block"
}, Q = {
  backgroundColor: "currentColor"
}, Ot = {
  backgroundColor: "transparent"
}, st = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, ct = {
  webkitMask: Q,
  mask: Q,
  background: Ot
};
for (const t in ct) {
  const e = ct[t];
  for (const o in st)
    e[t + o] = st[o];
}
const _ = {};
["horizontal", "vertical"].forEach((t) => {
  const e = t.slice(0, 1) + "Flip";
  _[t + "-flip"] = e, _[t.slice(0, 1) + "-flip"] = e, _[t + "Flip"] = e;
});
function lt(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
const ft = (t, e) => {
  const o = Pe(rt, e), i = { ...Me }, n = e.mode || "svg", r = {}, s = e.style, c = typeof s == "object" && !(s instanceof Array) ? s : {};
  for (let g in e) {
    const u = e[g];
    if (u !== void 0)
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
          o[g] = u === !0 || u === "true" || u === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof u == "string" && Te(o, u);
          break;
        // Color: override style
        case "color":
          r.color = u;
          break;
        // Rotation as string
        case "rotate":
          typeof u == "string" ? o[g] = Ae(u) : typeof u == "number" && (o[g] = u);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          u !== !0 && u !== "true" && delete i["aria-hidden"];
          break;
        default: {
          const O = _[g];
          O ? (u === !0 || u === "true" || u === 1) && (o[O] = !0) : rt[g] === void 0 && (i[g] = u);
        }
      }
  }
  const l = Zt(t, o), f = l.attributes;
  if (o.inline && (r.verticalAlign = "-0.125em"), n === "svg") {
    i.style = {
      ...r,
      ...c
    }, Object.assign(i, f);
    let g = 0, u = e.id;
    return typeof u == "string" && (u = u.replace(/-/g, "_")), i.innerHTML = oe(l.body, u ? () => u + "ID" + g++ : "iconifyVue"), J("svg", i);
  }
  const { body: a, width: d, height: h } = t, m = n === "mask" || (n === "bg" ? !1 : a.indexOf("currentColor") !== -1), I = je(a, {
    ...f,
    width: d + "",
    height: h + ""
  });
  return i.style = {
    ...r,
    "--svg": Le(I),
    width: lt(f.width),
    height: lt(f.height),
    ..._e,
    ...m ? Q : Ot,
    ...c
  }, J("span", i);
};
wt(!0);
ie("", de);
if (typeof document < "u" && typeof window < "u") {
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, o = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((i) => {
      try {
        // Check if item is an object and not null/array
        (typeof i != "object" || i === null || i instanceof Array || // Check for 'icons' and 'prefix'
        typeof i.icons != "object" || typeof i.prefix != "string" || // Add icon set
        !Bt(i)) && console.error(o);
      } catch {
        console.error(o);
      }
    });
  }
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let o in e) {
        const i = "IconifyProviders[" + o + "] is invalid.";
        try {
          const n = e[o];
          if (typeof n != "object" || !n || n.resources === void 0)
            continue;
          re(o, n) || console.error(i);
        } catch {
          console.error(i);
        }
      }
  }
}
const De = {
  ...R,
  body: ""
}, Ne = ut({
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
    getIcon(t, e, o) {
      if (typeof t == "object" && t !== null && typeof t.body == "string")
        return this._name = "", this.abortLoading(), {
          data: t
        };
      let i;
      if (typeof t != "string" || (i = N(t, !1, !0)) === null)
        return this.abortLoading(), null;
      let n = Ht(i);
      if (!n)
        return (!this._loadingIcon || this._loadingIcon.name !== t) && (this.abortLoading(), this._name = "", n !== null && (this._loadingIcon = {
          name: t,
          abort: Ce([i], () => {
            this.counter++;
          })
        })), null;
      if (this.abortLoading(), this._name !== t && (this._name = t, e && e(t)), o) {
        n = Object.assign({}, n);
        const s = o(n.body, i.name, i.prefix, i.provider);
        typeof s == "string" && (n.body = s);
      }
      const r = ["iconify"];
      return i.prefix !== "" && r.push("iconify--" + i.prefix), i.provider !== "" && r.push("iconify--" + i.provider), { data: n, classes: r };
    }
  },
  // Render icon
  render() {
    this.counter;
    const t = this.$attrs, e = this.iconMounted || t.ssr ? this.getIcon(t.icon, t.onLoad, t.customise) : null;
    if (!e)
      return ft(De, t);
    let o = t;
    return e.classes && (o = {
      ...t,
      class: (typeof t.class == "string" ? t.class + " " : "") + e.classes.join(" ")
    }), ft({
      ...R,
      ...e.data
    }, o);
  }
}), Re = /* @__PURE__ */ ut({
  __name: "AppIcon",
  props: {
    icon: null
  },
  setup(t) {
    return (e, o) => (Tt(), vt(At(Ne), {
      icon: typeof t.icon == "string" ? t.icon : t.icon[1],
      class: jt(e.$style.icon)
    }, null, 8, ["icon", "class"]));
  }
}), Ve = "_icon_6dc929d", $e = { icon: Ve }, ze = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [i, n] of e)
    o[i] = n;
  return o;
}, Ue = {
  $style: $e
}, qe = /* @__PURE__ */ ze(Re, [["__cssModules", Ue]]);
Nt.setOptions({
  statusIcon: !1,
  useHtml5Validation: !1,
  iconComponent: Et(qe),
  iconPack: "iconify"
});
export {
  qe as A,
  ze as _,
  dt as a,
  Ke as b,
  Xe as c,
  _t as d,
  We as e,
  x as f,
  X as g,
  v as h,
  B as i,
  Ft as j,
  Lt as m,
  Je as t
};
