import * as e from "vue";
import { Comment as t, Fragment as n, Teleport as r, Transition as i, camelize as a, cloneVNode as o, computed as s, createBlock as c, createCommentVNode as l, createElementBlock as u, createElementVNode as d, createTextVNode as f, createVNode as p, customRef as m, defineComponent as h, getCurrentInstance as g, getCurrentScope as _, guardReactiveProps as v, h as y, inject as b, isRef as x, markRaw as S, mergeDefaults as C, mergeModels as w, mergeProps as T, nextTick as E, normalizeClass as D, normalizeProps as O, normalizeStyle as ee, onBeforeUnmount as k, onMounted as A, onScopeDispose as te, onUnmounted as ne, onUpdated as re, openBlock as j, provide as ie, reactive as ae, ref as M, renderList as oe, renderSlot as N, resolveDynamicComponent as se, shallowReadonly as ce, shallowRef as le, toDisplayString as ue, toHandlerKey as de, toHandlers as fe, toRef as pe, toRefs as me, toValue as P, triggerRef as he, unref as F, useAttrs as ge, useCssModule as _e, useCssVars as ve, useModel as ye, vModelDynamic as be, vModelText as xe, watch as I, watchEffect as L, watchPostEffect as Se, withCtx as R, withDirectives as Ce, withKeys as we, withModifiers as Te } from "vue";
import { computedEager as Ee, createGlobalState as De, createSharedComposable as Oe, defaultWindow as ke, onKeyStroke as Ae, unrefElement as je, useEventListener as Me, useMounted as Ne, useMouseInElement as Pe, useResizeObserver as Fe, useTextareaAutosize as Ie, useTimeoutFn as Le, useVModel as Re } from "@vueuse/core";
//#region \0rolldown/runtime.js
var ze = Object.defineProperty, Be = Object.getOwnPropertyDescriptor, Ve = Object.getOwnPropertyNames, He = Object.prototype.hasOwnProperty, Ue = (e, t) => {
	let n = {};
	for (var r in e) ze(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || ze(n, Symbol.toStringTag, { value: "Module" }), n;
}, We = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Ve(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !He.call(e, s) && s !== n && ze(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Be(t, s)) || r.enumerable
	});
	return e;
}, Ge = (e, t, n) => (We(e, t, "default"), n && We(n, t, "default")), Ke = /^[a-z0-9]+(-[a-z0-9]+)*$/, qe = (e, t, n, r = "") => {
	let i = e.split(":");
	if (e.slice(0, 1) === "@") {
		if (i.length < 2 || i.length > 3) return null;
		r = i.shift().slice(1);
	}
	if (i.length > 3 || !i.length) return null;
	if (i.length > 1) {
		let e = i.pop(), n = i.pop(), a = {
			provider: i.length > 0 ? i[0] : r,
			prefix: n,
			name: e
		};
		return t && !Je(a) ? null : a;
	}
	let a = i[0], o = a.split("-");
	if (o.length > 1) {
		let e = {
			provider: r,
			prefix: o.shift(),
			name: o.join("-")
		};
		return t && !Je(e) ? null : e;
	}
	if (n && r === "") {
		let e = {
			provider: r,
			prefix: "",
			name: a
		};
		return t && !Je(e, n) ? null : e;
	}
	return null;
}, Je = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1, Ye = Object.freeze({
	left: 0,
	top: 0,
	width: 16,
	height: 16
}), Xe = Object.freeze({
	rotate: 0,
	vFlip: !1,
	hFlip: !1
}), Ze = Object.freeze({
	...Ye,
	...Xe
}), Qe = Object.freeze({
	...Ze,
	body: "",
	hidden: !1
});
function $e(e, t) {
	let n = {};
	!e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
	let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
	return r && (n.rotate = r), n;
}
function et(e, t) {
	let n = $e(e, t);
	for (let r in Qe) r in Xe ? r in e && !(r in n) && (n[r] = Xe[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
	return n;
}
function tt(e, t) {
	let n = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
	function a(e) {
		if (n[e]) return i[e] = [];
		if (!(e in i)) {
			i[e] = null;
			let t = r[e] && r[e].parent, n = t && a(t);
			n && (i[e] = [t].concat(n));
		}
		return i[e];
	}
	return Object.keys(n).concat(Object.keys(r)).forEach(a), i;
}
function nt(e, t, n) {
	let r = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), a = {};
	function o(e) {
		a = et(r[e] || i[e], a);
	}
	return o(t), n.forEach(o), et(e, a);
}
function rt(e, t) {
	let n = [];
	if (typeof e != "object" || typeof e.icons != "object") return n;
	e.not_found instanceof Array && e.not_found.forEach((e) => {
		t(e, null), n.push(e);
	});
	let r = tt(e);
	for (let i in r) {
		let a = r[i];
		a && (t(i, nt(e, i, a)), n.push(i));
	}
	return n;
}
var it = {
	provider: "",
	aliases: {},
	not_found: {},
	...Ye
};
function at(e, t) {
	for (let n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
	return !0;
}
function ot(e) {
	if (typeof e != "object" || !e) return null;
	let t = e;
	if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !at(e, it)) return null;
	let n = t.icons;
	for (let e in n) {
		let t = n[e];
		if (!e || typeof t.body != "string" || !at(t, Qe)) return null;
	}
	let r = t.aliases || /* @__PURE__ */ Object.create(null);
	for (let e in r) {
		let t = r[e], i = t.parent;
		if (!e || typeof i != "string" || !n[i] && !r[i] || !at(t, Qe)) return null;
	}
	return t;
}
var st = /* @__PURE__ */ Object.create(null);
function ct(e, t) {
	return {
		provider: e,
		prefix: t,
		icons: /* @__PURE__ */ Object.create(null),
		missing: /* @__PURE__ */ new Set()
	};
}
function lt(e, t) {
	let n = st[e] || (st[e] = /* @__PURE__ */ Object.create(null));
	return n[t] || (n[t] = ct(e, t));
}
function ut(e, t) {
	return ot(t) ? rt(t, (t, n) => {
		n ? e.icons[t] = n : e.missing.add(t);
	}) : [];
}
function dt(e, t, n) {
	try {
		if (typeof n.body == "string") return e.icons[t] = { ...n }, !0;
	} catch {}
	return !1;
}
var ft = !1;
function pt(e) {
	return typeof e == "boolean" && (ft = e), ft;
}
function mt(e) {
	let t = typeof e == "string" ? qe(e, !0, ft) : e;
	if (t) {
		let e = lt(t.provider, t.prefix), n = t.name;
		return e.icons[n] || (e.missing.has(n) ? null : void 0);
	}
}
function ht(e, t) {
	let n = qe(e, !0, ft);
	if (!n) return !1;
	let r = lt(n.provider, n.prefix);
	return t ? dt(r, n.name, t) : (r.missing.add(n.name), !0);
}
function gt(e, t) {
	if (typeof e != "object") return !1;
	if (typeof t != "string" && (t = e.provider || ""), ft && !t && !e.prefix) {
		let t = !1;
		return ot(e) && (e.prefix = "", rt(e, (e, n) => {
			ht(e, n) && (t = !0);
		})), t;
	}
	let n = e.prefix;
	return Je({
		prefix: n,
		name: "a"
	}) ? !!ut(lt(t, n), e) : !1;
}
var _t = Object.freeze({
	width: null,
	height: null
}), vt = Object.freeze({
	..._t,
	...Xe
}), yt = /(-?[0-9.]*[0-9]+[0-9.]*)/g, bt = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function xt(e, t, n) {
	if (t === 1) return e;
	if (n ||= 100, typeof e == "number") return Math.ceil(e * t * n) / n;
	if (typeof e != "string") return e;
	let r = e.split(yt);
	if (r === null || !r.length) return e;
	let i = [], a = r.shift(), o = bt.test(a);
	for (;;) {
		if (o) {
			let e = parseFloat(a);
			isNaN(e) ? i.push(a) : i.push(Math.ceil(e * t * n) / n);
		} else i.push(a);
		if (a = r.shift(), a === void 0) return i.join("");
		o = !o;
	}
}
function St(e, t = "defs") {
	let n = "", r = e.indexOf("<" + t);
	for (; r >= 0;) {
		let i = e.indexOf(">", r), a = e.indexOf("</" + t);
		if (i === -1 || a === -1) break;
		let o = e.indexOf(">", a);
		if (o === -1) break;
		n += e.slice(i + 1, a).trim(), e = e.slice(0, r).trim() + e.slice(o + 1);
	}
	return {
		defs: n,
		content: e
	};
}
function Ct(e, t) {
	return e ? "<defs>" + e + "</defs>" + t : t;
}
function wt(e, t, n) {
	let r = St(e);
	return Ct(r.defs, t + r.content + n);
}
var Tt = (e) => e === "unset" || e === "undefined" || e === "none";
function Et(e, t) {
	let n = {
		...Ze,
		...e
	}, r = {
		...vt,
		...t
	}, i = {
		left: n.left,
		top: n.top,
		width: n.width,
		height: n.height
	}, a = n.body;
	[n, r].forEach((e) => {
		let t = [], n = e.hFlip, r = e.vFlip, o = e.rotate;
		n ? r ? o += 2 : (t.push("translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"), t.push("scale(-1 1)"), i.top = i.left = 0) : r && (t.push("translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"), t.push("scale(1 -1)"), i.top = i.left = 0);
		let s;
		switch (o < 0 && (o -= Math.floor(o / 4) * 4), o %= 4, o) {
			case 1:
				s = i.height / 2 + i.top, t.unshift("rotate(90 " + s.toString() + " " + s.toString() + ")");
				break;
			case 2:
				t.unshift("rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")");
				break;
			case 3:
				s = i.width / 2 + i.left, t.unshift("rotate(-90 " + s.toString() + " " + s.toString() + ")");
				break;
		}
		o % 2 == 1 && (i.left !== i.top && (s = i.left, i.left = i.top, i.top = s), i.width !== i.height && (s = i.width, i.width = i.height, i.height = s)), t.length && (a = wt(a, "<g transform=\"" + t.join(" ") + "\">", "</g>"));
	});
	let o = r.width, s = r.height, c = i.width, l = i.height, u, d;
	o === null ? (d = s === null ? "1em" : s === "auto" ? l : s, u = xt(d, c / l)) : (u = o === "auto" ? c : o, d = s === null ? xt(u, l / c) : s === "auto" ? l : s);
	let f = {}, p = (e, t) => {
		Tt(t) || (f[e] = t.toString());
	};
	p("width", u), p("height", d);
	let m = [
		i.left,
		i.top,
		c,
		l
	];
	return f.viewBox = m.join(" "), {
		attributes: f,
		viewBox: m,
		body: a
	};
}
var Dt = /\sid="(\S+)"/g, Ot = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16), kt = 0;
function At(e, t = Ot) {
	let n = [], r;
	for (; r = Dt.exec(e);) n.push(r[1]);
	if (!n.length) return e;
	let i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
	return n.forEach((n) => {
		let r = typeof t == "function" ? t(n) : t + (kt++).toString(), a = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		e = e.replace(RegExp("([#;\"])(" + a + ")([\")]|\\.[a-z])", "g"), "$1" + r + i + "$3");
	}), e = e.replace(new RegExp(i, "g"), ""), e;
}
var jt = /* @__PURE__ */ Object.create(null);
function Mt(e, t) {
	jt[e] = t;
}
function Nt(e) {
	return jt[e] || jt[""];
}
function Pt(e) {
	let t;
	if (typeof e.resources == "string") t = [e.resources];
	else if (t = e.resources, !(t instanceof Array) || !t.length) return null;
	return {
		resources: t,
		path: e.path || "/",
		maxURL: e.maxURL || 500,
		rotate: e.rotate || 750,
		timeout: e.timeout || 5e3,
		random: e.random === !0,
		index: e.index || 0,
		dataAfterTimeout: e.dataAfterTimeout !== !1
	};
}
for (var Ft = /* @__PURE__ */ Object.create(null), It = ["https://api.simplesvg.com", "https://api.unisvg.com"], Lt = []; It.length > 0;) It.length === 1 || Math.random() > .5 ? Lt.push(It.shift()) : Lt.push(It.pop());
Ft[""] = Pt({ resources: ["https://api.iconify.design"].concat(Lt) });
function Rt(e, t) {
	let n = Pt(t);
	return n === null ? !1 : (Ft[e] = n, !0);
}
function zt(e) {
	return Ft[e];
}
var Bt = (() => {
	let e;
	try {
		if (e = fetch, typeof e == "function") return e;
	} catch {}
})();
function Vt(e, t) {
	let n = zt(e);
	if (!n) return 0;
	let r;
	if (!n.maxURL) r = 0;
	else {
		let e = 0;
		n.resources.forEach((t) => {
			let n = t;
			e = Math.max(e, n.length);
		});
		let i = t + ".json?icons=";
		r = n.maxURL - e - n.path.length - i.length;
	}
	return r;
}
function Ht(e) {
	return e === 404;
}
var Ut = (e, t, n) => {
	let r = [], i = Vt(e, t), a = "icons", o = {
		type: a,
		provider: e,
		prefix: t,
		icons: []
	}, s = 0;
	return n.forEach((n, c) => {
		s += n.length + 1, s >= i && c > 0 && (r.push(o), o = {
			type: a,
			provider: e,
			prefix: t,
			icons: []
		}, s = n.length), o.icons.push(n);
	}), r.push(o), r;
};
function Wt(e) {
	if (typeof e == "string") {
		let t = zt(e);
		if (t) return t.path;
	}
	return "/";
}
var Gt = {
	prepare: Ut,
	send: (e, t, n) => {
		if (!Bt) {
			n("abort", 424);
			return;
		}
		let r = Wt(t.provider);
		switch (t.type) {
			case "icons": {
				let e = t.prefix, n = t.icons.join(","), i = new URLSearchParams({ icons: n });
				r += e + ".json?" + i.toString();
				break;
			}
			case "custom": {
				let e = t.uri;
				r += e.slice(0, 1) === "/" ? e.slice(1) : e;
				break;
			}
			default:
				n("abort", 400);
				return;
		}
		let i = 503;
		Bt(e + r).then((e) => {
			let t = e.status;
			if (t !== 200) {
				setTimeout(() => {
					n(Ht(t) ? "abort" : "next", t);
				});
				return;
			}
			return i = 501, e.json();
		}).then((e) => {
			if (typeof e != "object" || !e) {
				setTimeout(() => {
					e === 404 ? n("abort", e) : n("next", i);
				});
				return;
			}
			setTimeout(() => {
				n("success", e);
			});
		}).catch(() => {
			n("next", i);
		});
	}
};
function Kt(e) {
	let t = {
		loaded: [],
		missing: [],
		pending: []
	}, n = /* @__PURE__ */ Object.create(null);
	e.sort((e, t) => e.provider === t.provider ? e.prefix === t.prefix ? e.name.localeCompare(t.name) : e.prefix.localeCompare(t.prefix) : e.provider.localeCompare(t.provider));
	let r = {
		provider: "",
		prefix: "",
		name: ""
	};
	return e.forEach((e) => {
		if (r.name === e.name && r.prefix === e.prefix && r.provider === e.provider) return;
		r = e;
		let i = e.provider, a = e.prefix, o = e.name, s = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), c = s[a] || (s[a] = lt(i, a)), l;
		l = o in c.icons ? t.loaded : a === "" || c.missing.has(o) ? t.missing : t.pending;
		let u = {
			provider: i,
			prefix: a,
			name: o
		};
		l.push(u);
	}), t;
}
function qt(e, t) {
	e.forEach((e) => {
		let n = e.loaderCallbacks;
		n && (e.loaderCallbacks = n.filter((e) => e.id !== t));
	});
}
function Jt(e) {
	e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
		e.pendingCallbacksFlag = !1;
		let t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
		if (!t.length) return;
		let n = !1, r = e.provider, i = e.prefix;
		t.forEach((t) => {
			let a = t.icons, o = a.pending.length;
			a.pending = a.pending.filter((t) => {
				if (t.prefix !== i) return !0;
				let o = t.name;
				if (e.icons[o]) a.loaded.push({
					provider: r,
					prefix: i,
					name: o
				});
				else if (e.missing.has(o)) a.missing.push({
					provider: r,
					prefix: i,
					name: o
				});
				else return n = !0, !0;
				return !1;
			}), a.pending.length !== o && (n || qt([e], t.id), t.callback(a.loaded.slice(0), a.missing.slice(0), a.pending.slice(0), t.abort));
		});
	}));
}
var Yt = 0;
function Xt(e, t, n) {
	let r = Yt++, i = qt.bind(null, n, r);
	if (!t.pending.length) return i;
	let a = {
		id: r,
		icons: t,
		callback: e,
		abort: i
	};
	return n.forEach((e) => {
		(e.loaderCallbacks ||= []).push(a);
	}), i;
}
function Zt(e, t = !0, n = !1) {
	let r = [];
	return e.forEach((e) => {
		let i = typeof e == "string" ? qe(e, t, n) : e;
		i && r.push(i);
	}), r;
}
var Qt = {
	resources: [],
	index: 0,
	timeout: 2e3,
	rotate: 750,
	random: !1,
	dataAfterTimeout: !1
};
function $t(e, t, n, r) {
	let i = e.resources.length, a = e.random ? Math.floor(Math.random() * i) : e.index, o;
	if (e.random) {
		let t = e.resources.slice(0);
		for (o = []; t.length > 1;) {
			let e = Math.floor(Math.random() * t.length);
			o.push(t[e]), t = t.slice(0, e).concat(t.slice(e + 1));
		}
		o = o.concat(t);
	} else o = e.resources.slice(a).concat(e.resources.slice(0, a));
	let s = Date.now(), c = "pending", l = 0, u, d = null, f = [], p = [];
	typeof r == "function" && p.push(r);
	function m() {
		d &&= (clearTimeout(d), null);
	}
	function h() {
		c === "pending" && (c = "aborted"), m(), f.forEach((e) => {
			e.status === "pending" && (e.status = "aborted");
		}), f = [];
	}
	function g(e, t) {
		t && (p = []), typeof e == "function" && p.push(e);
	}
	function _() {
		return {
			startTime: s,
			payload: t,
			status: c,
			queriesSent: l,
			queriesPending: f.length,
			subscribe: g,
			abort: h
		};
	}
	function v() {
		c = "failed", p.forEach((e) => {
			e(void 0, u);
		});
	}
	function y() {
		f.forEach((e) => {
			e.status === "pending" && (e.status = "aborted");
		}), f = [];
	}
	function b(t, n, r) {
		let i = n !== "success";
		switch (f = f.filter((e) => e !== t), c) {
			case "pending": break;
			case "failed":
				if (i || !e.dataAfterTimeout) return;
				break;
			default: return;
		}
		if (n === "abort") {
			u = r, v();
			return;
		}
		if (i) {
			u = r, f.length || (o.length ? x() : v());
			return;
		}
		if (m(), y(), !e.random) {
			let n = e.resources.indexOf(t.resource);
			n !== -1 && n !== e.index && (e.index = n);
		}
		c = "completed", p.forEach((e) => {
			e(r);
		});
	}
	function x() {
		if (c !== "pending") return;
		m();
		let r = o.shift();
		if (r === void 0) {
			if (f.length) {
				d = setTimeout(() => {
					m(), c === "pending" && (y(), v());
				}, e.timeout);
				return;
			}
			v();
			return;
		}
		let i = {
			status: "pending",
			resource: r,
			callback: (e, t) => {
				b(i, e, t);
			}
		};
		f.push(i), l++, d = setTimeout(x, e.rotate), n(r, t, i.callback);
	}
	return setTimeout(x), _;
}
function en(e) {
	let t = {
		...Qt,
		...e
	}, n = [];
	function r() {
		n = n.filter((e) => e().status === "pending");
	}
	function i(e, i, a) {
		let o = $t(t, e, i, (e, t) => {
			r(), a && a(e, t);
		});
		return n.push(o), o;
	}
	function a(e) {
		return n.find((t) => e(t)) || null;
	}
	return {
		query: i,
		find: a,
		setIndex: (e) => {
			t.index = e;
		},
		getIndex: () => t.index,
		cleanup: r
	};
}
function tn() {}
var nn = /* @__PURE__ */ Object.create(null);
function rn(e) {
	if (!nn[e]) {
		let t = zt(e);
		if (!t) return;
		nn[e] = {
			config: t,
			redundancy: en(t)
		};
	}
	return nn[e];
}
function an(e, t, n) {
	let r, i;
	if (typeof e == "string") {
		let t = Nt(e);
		if (!t) return n(void 0, 424), tn;
		i = t.send;
		let a = rn(e);
		a && (r = a.redundancy);
	} else {
		let t = Pt(e);
		if (t) {
			r = en(t);
			let n = Nt(e.resources ? e.resources[0] : "");
			n && (i = n.send);
		}
	}
	return !r || !i ? (n(void 0, 424), tn) : r.query(t, i, n)().abort;
}
function on() {}
function sn(e) {
	e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
		e.iconsLoaderFlag = !1, Jt(e);
	}));
}
function cn(e) {
	let t = [], n = [];
	return e.forEach((e) => {
		(e.match(Ke) ? t : n).push(e);
	}), {
		valid: t,
		invalid: n
	};
}
function ln(e, t, n) {
	function r() {
		let n = e.pendingIcons;
		t.forEach((t) => {
			n && n.delete(t), e.icons[t] || e.missing.add(t);
		});
	}
	if (n && typeof n == "object") try {
		if (!ut(e, n).length) {
			r();
			return;
		}
	} catch (e) {
		console.error(e);
	}
	r(), sn(e);
}
function un(e, t) {
	e instanceof Promise ? e.then((e) => {
		t(e);
	}).catch(() => {
		t(null);
	}) : t(e);
}
function dn(e, t) {
	e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
		e.iconsQueueFlag = !1;
		let { provider: t, prefix: n } = e, r = e.iconsToLoad;
		if (delete e.iconsToLoad, !r || !r.length) return;
		let i = e.loadIcon;
		if (e.loadIcons && (r.length > 1 || !i)) {
			un(e.loadIcons(r, n, t), (t) => {
				ln(e, r, t);
			});
			return;
		}
		if (i) {
			r.forEach((r) => {
				un(i(r, n, t), (t) => {
					ln(e, [r], t ? {
						prefix: n,
						icons: { [r]: t }
					} : null);
				});
			});
			return;
		}
		let { valid: a, invalid: o } = cn(r);
		if (o.length && ln(e, o, null), !a.length) return;
		let s = n.match(Ke) ? Nt(t) : null;
		if (!s) {
			ln(e, a, null);
			return;
		}
		s.prepare(t, n, a).forEach((n) => {
			an(t, n, (t) => {
				ln(e, n.icons, t);
			});
		});
	}));
}
var fn = (e, t) => {
	let n = Kt(Zt(e, !0, pt()));
	if (!n.pending.length) {
		let e = !0;
		return t && setTimeout(() => {
			e && t(n.loaded, n.missing, n.pending, on);
		}), () => {
			e = !1;
		};
	}
	let r = /* @__PURE__ */ Object.create(null), i = [], a, o;
	return n.pending.forEach((e) => {
		let { provider: t, prefix: n } = e;
		if (n === o && t === a) return;
		a = t, o = n, i.push(lt(t, n));
		let s = r[t] || (r[t] = /* @__PURE__ */ Object.create(null));
		s[n] || (s[n] = []);
	}), n.pending.forEach((e) => {
		let { provider: t, prefix: n, name: i } = e, a = lt(t, n), o = a.pendingIcons ||= /* @__PURE__ */ new Set();
		o.has(i) || (o.add(i), r[t][n].push(i));
	}), i.forEach((e) => {
		let t = r[e.provider][e.prefix];
		t.length && dn(e, t);
	}), t ? Xt(t, n, i) : on;
};
function pn(e, t) {
	let n = { ...e };
	for (let e in t) {
		let r = t[e], i = typeof r;
		e in _t ? (r === null || r && (i === "string" || i === "number")) && (n[e] = r) : i === typeof n[e] && (n[e] = e === "rotate" ? r % 4 : r);
	}
	return n;
}
var mn = /[\s,]+/;
function hn(e, t) {
	t.split(mn).forEach((t) => {
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
function gn(e, t = 0) {
	let n = e.replace(/^-?[0-9.]*/, "");
	function r(e) {
		for (; e < 0;) e += 4;
		return e % 4;
	}
	if (n === "") {
		let t = parseInt(e);
		return isNaN(t) ? 0 : r(t);
	} else if (n !== e) {
		let t = 0;
		switch (n) {
			case "%":
				t = 25;
				break;
			case "deg": t = 90;
		}
		if (t) {
			let i = parseFloat(e.slice(0, e.length - n.length));
			return isNaN(i) ? 0 : (i /= t, i % 1 == 0 ? r(i) : 0);
		}
	}
	return t;
}
function _n(e, t) {
	let n = e.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (let e in t) n += " " + e + "=\"" + t[e] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + n + ">" + e + "</svg>";
}
function vn(e) {
	return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function yn(e) {
	return "data:image/svg+xml," + vn(e);
}
function bn(e) {
	return "url(\"" + yn(e) + "\")";
}
var xn = {
	...vt,
	inline: !1
}, Sn = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	"aria-hidden": !0,
	role: "img"
}, Cn = { display: "inline-block" }, wn = { backgroundColor: "currentColor" }, Tn = { backgroundColor: "transparent" }, En = {
	Image: "var(--svg)",
	Repeat: "no-repeat",
	Size: "100% 100%"
}, Dn = {
	webkitMask: wn,
	mask: wn,
	background: Tn
};
for (let e in Dn) {
	let t = Dn[e];
	for (let n in En) t[e + n] = En[n];
}
var On = {};
["horizontal", "vertical"].forEach((e) => {
	let t = e.slice(0, 1) + "Flip";
	On[e + "-flip"] = t, On[e.slice(0, 1) + "-flip"] = t, On[e + "Flip"] = t;
});
function kn(e) {
	return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
var An = (e, t) => {
	let n = pn(xn, t), r = { ...Sn }, i = t.mode || "svg", a = {}, o = t.style, s = typeof o == "object" && !(o instanceof Array) ? o : {};
	for (let e in t) {
		let i = t[e];
		if (i !== void 0) switch (e) {
			case "icon":
			case "style":
			case "onLoad":
			case "mode":
			case "ssr": break;
			case "inline":
			case "hFlip":
			case "vFlip":
				n[e] = i === !0 || i === "true" || i === 1;
				break;
			case "flip":
				typeof i == "string" && hn(n, i);
				break;
			case "color":
				a.color = i;
				break;
			case "rotate":
				typeof i == "string" ? n[e] = gn(i) : typeof i == "number" && (n[e] = i);
				break;
			case "ariaHidden":
			case "aria-hidden":
				i !== !0 && i !== "true" && delete r["aria-hidden"];
				break;
			default: {
				let t = On[e];
				t ? (i === !0 || i === "true" || i === 1) && (n[t] = !0) : xn[e] === void 0 && (r[e] = i);
			}
		}
	}
	let c = Et(e, n), l = c.attributes;
	if (n.inline && (a.verticalAlign = "-0.125em"), i === "svg") {
		r.style = {
			...a,
			...s
		}, Object.assign(r, l);
		let e = 0, n = t.id;
		return typeof n == "string" && (n = n.replace(/-/g, "_")), r.innerHTML = At(c.body, n ? () => n + "ID" + e++ : "iconifyVue"), y("svg", r);
	}
	let { body: u, width: d, height: f } = e, p = i === "mask" || (i === "bg" ? !1 : u.indexOf("currentColor") !== -1), m = _n(u, {
		...l,
		width: d + "",
		height: f + ""
	});
	return r.style = {
		...a,
		"--svg": bn(m),
		width: kn(l.width),
		height: kn(l.height),
		...Cn,
		...p ? wn : Tn,
		...s
	}, y("span", r);
};
if (pt(!0), Mt("", Gt), typeof document < "u" && typeof window < "u") {
	let e = window;
	if (e.IconifyPreload !== void 0) {
		let t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
		typeof t == "object" && t && (t instanceof Array ? t : [t]).forEach((e) => {
			try {
				(typeof e != "object" || !e || e instanceof Array || typeof e.icons != "object" || typeof e.prefix != "string" || !gt(e)) && console.error(n);
			} catch {
				console.error(n);
			}
		});
	}
	if (e.IconifyProviders !== void 0) {
		let t = e.IconifyProviders;
		if (typeof t == "object" && t) for (let e in t) {
			let n = "IconifyProviders[" + e + "] is invalid.";
			try {
				let r = t[e];
				if (typeof r != "object" || !r || r.resources === void 0) continue;
				Rt(e, r) || console.error(n);
			} catch {
				console.error(n);
			}
		}
	}
}
var jn = {
	...Ze,
	body: ""
}, Mn = h((e, { emit: t }) => {
	let n = M(null);
	function r() {
		n.value &&= (n.value.abort?.(), null);
	}
	let i = M(!!e.ssr), a = M(""), o = le(null);
	function s() {
		let i = e.icon;
		if (typeof i == "object" && i && typeof i.body == "string") return a.value = "", { data: i };
		let o;
		if (typeof i != "string" || (o = qe(i, !1, !0)) === null) return null;
		let s = mt(o);
		if (!s) {
			let e = n.value;
			return (!e || e.name !== i) && (s === null ? n.value = { name: i } : n.value = {
				name: i,
				abort: fn([o], c)
			}), null;
		}
		r(), a.value !== i && (a.value = i, E(() => {
			t("load", i);
		}));
		let l = e.customise;
		if (l) {
			s = Object.assign({}, s);
			let e = l(s.body, o.name, o.prefix, o.provider);
			typeof e == "string" && (s.body = e);
		}
		let u = ["iconify"];
		return o.prefix !== "" && u.push("iconify--" + o.prefix), o.provider !== "" && u.push("iconify--" + o.provider), {
			data: s,
			classes: u
		};
	}
	function c() {
		let e = s();
		e ? e.data !== o.value?.data && (o.value = e) : o.value = null;
	}
	return i.value ? c() : A(() => {
		i.value = !0, c();
	}), I(() => e.icon, c), ne(r), () => {
		let t = o.value;
		if (!t) return An(jn, e);
		let n = e;
		return t.classes && (n = {
			...e,
			class: t.classes.join(" ")
		}), An({
			...Ze,
			...t.data
		}, n);
	};
}, {
	props: [
		"icon",
		"mode",
		"ssr",
		"width",
		"height",
		"style",
		"color",
		"inline",
		"rotate",
		"hFlip",
		"horizontalFlip",
		"vFlip",
		"verticalFlip",
		"flip",
		"id",
		"ariaHidden",
		"customise",
		"title"
	],
	emits: ["load"]
}), Nn = /* @__PURE__ */ h({
	__name: "AppIcon",
	props: { icon: null },
	setup(e) {
		return (t, n) => (j(), c(F(Mn), {
			inline: "",
			icon: typeof e.icon == "string" ? e.icon : e.icon[1],
			class: D(t.$style.icon)
		}, null, 8, ["icon", "class"]));
	}
}), Pn = { icon: "_icon_6dc929d" }, z = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Fn = /* @__PURE__ */ z(Nn, [["__cssModules", { $style: Pn }]]), In = Object.defineProperty, Ln = Object.defineProperties, Rn = Object.getOwnPropertyDescriptors, zn = Object.getOwnPropertySymbols, Bn = Object.prototype.hasOwnProperty, Vn = Object.prototype.propertyIsEnumerable, Hn = (e, t, n) => t in e ? In(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, B = (e, t) => {
	for (var n in t ||= {}) Bn.call(t, n) && Hn(e, n, t[n]);
	if (zn) for (var n of zn(t)) Vn.call(t, n) && Hn(e, n, t[n]);
	return e;
}, Un = (e, t) => Ln(e, Rn(t)), Wn = {
	directive: "wave",
	color: "currentColor",
	initialOpacity: .2,
	finalOpacity: .1,
	duration: .4,
	dissolveDuration: .15,
	waitForRelease: !0,
	easing: "ease-out",
	cancellationPeriod: 75,
	trigger: "auto",
	tagName: "div",
	disabled: !1,
	respectDisabledAttribute: !0,
	respectPrefersReducedMotion: !0,
	stopPropagation: !1
}, Gn = (e) => "config" in e && "globalProperties" in e.config, Kn = (e) => {
	let t;
	return t = e === "vue2" ? !1 : e === "vue3" ? !0 : Gn(e), t ? {
		mounted: "mounted",
		updated: "updated"
	} : {
		mounted: "inserted",
		updated: "componentUpdated"
	};
}, qn = (e) => typeof e == "string" && e !== "auto", Jn = (e, t) => {
	e.dataset.vWaveBoundary = qn(t) ? t : "true";
}, Yn = ({ borderTopLeftRadius: e, borderTopRightRadius: t, borderBottomLeftRadius: n, borderBottomRightRadius: r }, i) => {
	let a = document.createElement(i);
	return a.style.top = "0", a.style.left = "0", a.style.width = "100%", a.style.height = "100%", a.style.display = "block", a.style.position = "absolute", a.style.borderRadius = `${e} ${t} ${r} ${n}`, a.style.overflow = "hidden", a.style.pointerEvents = "none", a.style.webkitMaskImage = "-webkit-radial-gradient(white, black)", a.dataset.vWaveContainerInternal = "true", a;
}, Xn = ({ x: e, y: t }, n, r) => {
	let i = document.createElement("div");
	return i.style.position = "absolute", i.style.width = `${n}px`, i.style.height = `${n}px`, i.style.top = `${t}px`, i.style.left = `${e}px`, i.style.background = r.color, i.style.borderRadius = "50%", i.style.opacity = `${r.initialOpacity}`, i.style.transform = "translate(-50%,-50%) scale(0)", i.style.transition = `transform ${r.duration}s ${r.easing}, opacity ${r.duration}s ${r.easing}`, i;
};
function Zn(e, t, n, r) {
	let i = e - n, a = t - r;
	return Math.sqrt(i * i + a * a);
}
function Qn({ x: e, y: t }, { width: n, height: r }) {
	let i = Zn(e, t, 0, 0), a = Zn(e, t, n, 0), o = Zn(e, t, 0, r), s = Zn(e, t, n, r);
	return Math.max(i, a, o, s);
}
var $n = ({ x: e, y: t }, { top: n, left: r }) => ({
	x: e - r,
	y: t - n
}), er = (e, t) => {
	t.position === "static" && ([
		"top",
		"left",
		"right",
		"bottom"
	].forEach((n) => {
		t[n] && t[n] !== "auto" && console.warn("[v-wave]:", e, `You're using a \`static\` positioned element with a non-auto value (${t[n]}) for \`${n}\`.`, "It's position will be changed to relative while displaying the wave which might cause the element to visually jump.");
	}), e.dataset.originalPositionValue = e.style.position, e.style.position = "relative");
}, tr = (e) => {
	e.style.position = e.dataset.originalPositionValue ?? "", delete e.dataset.originalPositionValue;
}, nr = "vWaveCountInternal";
function rr(e) {
	ar(e, or(e) + 1);
}
function ir(e) {
	ar(e, or(e) - 1);
}
function ar(e, t) {
	e.dataset[nr] = t.toString();
}
function or(e) {
	return Number.parseInt(e.dataset[nr] ?? "0", 10);
}
function sr(e) {
	delete e.dataset[nr];
}
var cr = 2.05, lr = (e, t, n) => {
	if (n.disabled || n.respectDisabledAttribute && t.hasAttribute("disabled") || n.respectPrefersReducedMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
	let r = t.getBoundingClientRect(), i = window.getComputedStyle(t), a = $n(e, r), o = cr * Qn(a, r), s = t.querySelector("[data-v-wave-container-internal]"), c = s ?? Yn(i, n.tagName), l = Xn(a, o, n);
	rr(t), er(t, i), c.appendChild(l), s || t.appendChild(c);
	let u = !n.waitForRelease, d = (e) => {
		e !== void 0 && (document.removeEventListener("pointerup", d), document.removeEventListener("pointercancel", d)), u ? f() : u = !0;
	}, f = () => {
		l.style.transition = `opacity ${n.dissolveDuration}s linear`, l.style.opacity = "0", setTimeout(() => {
			l.remove(), ir(t), or(t) === 0 && (sr(t), c.remove(), tr(t));
		}, n.dissolveDuration * 1e3);
	};
	n.waitForRelease && (document.addEventListener("pointerup", d), document.addEventListener("pointercancel", d));
	let p = setTimeout(() => {
		document.removeEventListener("pointercancel", m), requestAnimationFrame(() => {
			l.style.transform = "translate(-50%,-50%) scale(1)", l.style.opacity = `${n.finalOpacity}`, setTimeout(() => d(), n.duration * 1e3);
		});
	}, n.cancellationPeriod), m = () => {
		clearTimeout(p), l.remove(), ir(t), or(t) === 0 && (sr(t), c.remove(), tr(t)), document.removeEventListener("pointerup", d), document.removeEventListener("pointercancel", d), document.removeEventListener("pointercancel", m);
	};
	document.addEventListener("pointercancel", m);
}, ur = /* @__PURE__ */ new WeakMap(), dr = (e, t) => (n, r) => {
	if (!ur.has(t)) return;
	let i = B(B({}, e), ur.get(t));
	if (i.stopPropagation && n.stopPropagation(), i.trigger === !1) return lr(n, t, i);
	if (qn(i.trigger)) return;
	let a = t.querySelector("[data-v-wave-trigger=\"true\"]");
	!a && i.trigger === !0 || a && !n.composedPath().includes(a) || lr(r ?? n, t, Un(B({}, i), { waitForRelease: r ? !1 : i.waitForRelease }));
}, fr = (e = {}, t = "vue3") => {
	let n = B(B({}, Wn), e), r = Kn(t), i = (e) => {
		if (e.detail !== 0) return;
		let t = e.currentTarget, r = t.dataset.vWaveTrigger;
		document.querySelectorAll(`[data-v-wave-boundary="${r}"]`).forEach((r) => {
			let i = e.type === "click", a;
			if (i) {
				let e = t.getBoundingClientRect();
				a = {
					x: e.left + e.width / 2,
					y: e.top + e.height / 2
				};
			} else a = e;
			let o = B(B({}, n), ur.get(r));
			lr(a, r, Un(B({}, o), { waitForRelease: i ? !1 : o.waitForRelease }));
		});
	}, a = {
		[r.mounted](e, { value: t = {} }) {
			ur.set(e, t), Jn(e, t?.trigger ?? n.trigger);
			let r = dr(n, e);
			e.addEventListener("pointerdown", r), e.addEventListener("click", (t) => {
				if (t.detail !== 0) return;
				let n = e.getBoundingClientRect();
				r(t, {
					x: n.left + n.width / 2,
					y: n.top + n.height / 2
				});
			});
		},
		[r.updated](e, { value: t = {} }) {
			ur.set(e, t), Jn(e, t?.trigger ?? n.trigger);
		}
	}, o = {
		[r.mounted](e, { arg: t = "true" }) {
			e.dataset.vWaveTrigger = t, t !== "true" && (e.addEventListener("pointerdown", i), e.addEventListener("click", i));
		},
		[r.updated](e, { arg: t = "true" }) {
			e.dataset.vWaveTrigger = t, t === "true" ? (e.removeEventListener("pointerdown", i), e.removeEventListener("click", i)) : (e.addEventListener("pointerdown", i), e.addEventListener("click", i));
		}
	};
	return {
		wave: a,
		vWave: a,
		waveTrigger: o,
		vWaveTrigger: o
	};
}, pr = {
	install(e, t = {}) {
		if (this.installed) return;
		this.installed = !0;
		let n = B(B({}, Wn), t), { vWave: r, vWaveTrigger: i } = fr(n, e);
		e.directive(n.directive, r), e.directive(`${n.directive}-trigger`, i);
	},
	installed: !1,
	createLocalWaveDirective: fr
}, mr = /* @__PURE__ */ h({
	__name: "AppButton",
	props: C({
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
		ve((e) => ({
			v2bccea58: p.value,
			v2bcc019a: m.value
		}));
		let { createLocalWaveDirective: t } = pr, { vWave: n } = t({ duration: .2 }), r = M(null), { elementX: i, elementY: a, elementWidth: o, elementHeight: u, isOutside: d } = Pe(r), p = s(() => d.value ? void 0 : `${i.value / o.value * 100}%`), m = s(() => d.value ? void 0 : `${a.value / u.value * 100}%`);
		return (e, t) => {
			let i = Fn;
			return Ce((j(), c(se(e.tag ?? "button"), {
				ref_key: "buttonEl",
				ref: r,
				href: e.href,
				disabled: e.disabled,
				tabindex: "0",
				class: D([
					"app-shape-squirdcle",
					e.$style["app-button"],
					e.$style[e.variant],
					{
						[e.$style["v-border-shine"]]: !(F(d) && e.disabled),
						[e.$style.disabled]: e.disabled
					}
				]),
				onKeydown: [t[0] ||= we((t) => e.$emit("click", t), ["enter"]), t[1] ||= we((t) => e.$emit("click", t), ["space"])]
			}, {
				default: R(() => [
					e.icon ?? e.iconBefore ? (j(), c(i, {
						key: 0,
						icon: e.icon ?? e.iconBefore,
						class: D(e.$style["icon-before"])
					}, null, 8, ["icon", "class"])) : l("", !0),
					N(e.$slots, "default", {}, () => [f(ue(e.text), 1)]),
					e.iconAfter ? (j(), c(i, {
						key: 1,
						icon: e.iconAfter,
						class: D(e.$style["icon-after"])
					}, null, 8, ["icon", "class"])) : l("", !0)
				]),
				_: 3
			}, 40, [
				"href",
				"disabled",
				"class"
			])), [[F(n), { disabled: e.disabled }]]);
		};
	}
}), hr = "_app-button_f9040b0", gr = "_disabled_3ecec54", _r = "_v-border-shine_8419f80", vr = "_primary_5785c37", yr = "_secondary_31cb9f8", br = "_text_7e1c00c", xr = "_icon-before_fb07300", Sr = "_icon-after_4d342ca", Cr = "_label_bdd07c7", wr = "_active_380b0ba", Tr = /* @__PURE__ */ z(mr, [["__cssModules", { $style: {
	"app-button": hr,
	disabled: gr,
	"v-border-shine": _r,
	primary: vr,
	secondary: yr,
	text: br,
	"icon-before": xr,
	"icon-after": Sr,
	label: Cr,
	active: wr
} }]]), Er = /* @__PURE__ */ h({
	__name: "AppCard",
	props: C({ variant: null }, { variant: "raised" }),
	setup(e) {
		return (e, t) => (j(), u("div", { class: D([
			"app-shape-squircle",
			e.$style["app-card"],
			{ [e.$style.variant]: e.variant }
		]) }, [N(e.$slots, "default")], 2));
	}
}), Dr = "_app-card_7a12d7d", Or = "_sunken_b1cf9a9", kr = /* @__PURE__ */ z(Er, [["__cssModules", { $style: {
	"app-card": Dr,
	sunken: Or
} }]]);
//#endregion
//#region node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/shared/ohash.D__AXeF1.mjs
function Ar(e) {
	return typeof e == "string" ? `'${e}'` : new jr().serialize(e);
}
var jr = /* @__PURE__ */ function() {
	class e {
		#e = /* @__PURE__ */ new Map();
		compare(e, t) {
			let n = typeof e, r = typeof t;
			return n === "string" && r === "string" ? e.localeCompare(t) : n === "number" && r === "number" ? e - t : String.prototype.localeCompare.call(this.serialize(e, !0), this.serialize(t, !0));
		}
		serialize(e, t) {
			if (e === null) return "null";
			switch (typeof e) {
				case "string": return t ? e : `'${e}'`;
				case "bigint": return `${e}n`;
				case "object": return this.$object(e);
				case "function": return this.$function(e);
			}
			return String(e);
		}
		serializeObject(e) {
			let t = Object.prototype.toString.call(e);
			if (t !== "[object Object]") return this.serializeBuiltInType(t.length < 10 ? `unknown:${t}` : t.slice(8, -1), e);
			let n = e.constructor, r = n === Object || n === void 0 ? "" : n.name;
			if (r !== "" && globalThis[r] === n) return this.serializeBuiltInType(r, e);
			if (typeof e.toJSON == "function") {
				let t = e.toJSON();
				return r + (typeof t == "object" && t ? this.$object(t) : `(${this.serialize(t)})`);
			}
			return this.serializeObjectEntries(r, Object.entries(e));
		}
		serializeBuiltInType(e, t) {
			let n = this["$" + e];
			if (n) return n.call(this, t);
			if (typeof t?.entries == "function") return this.serializeObjectEntries(e, t.entries());
			throw Error(`Cannot serialize ${e}`);
		}
		serializeObjectEntries(e, t) {
			let n = Array.from(t).sort((e, t) => this.compare(e[0], t[0])), r = `${e}{`;
			for (let e = 0; e < n.length; e++) {
				let [t, i] = n[e];
				r += `${this.serialize(t, !0)}:${this.serialize(i)}`, e < n.length - 1 && (r += ",");
			}
			return r + "}";
		}
		$object(e) {
			let t = this.#e.get(e);
			return t === void 0 && (this.#e.set(e, `#${this.#e.size}`), t = this.serializeObject(e), this.#e.set(e, t)), t;
		}
		$function(e) {
			let t = Function.prototype.toString.call(e);
			return t.slice(-15) === "[native code] }" ? `${e.name || ""}()[native]` : `${e.name}(${e.length})${t.replace(/\s*\n\s*/g, "")}`;
		}
		$Array(e) {
			let t = "[";
			for (let n = 0; n < e.length; n++) t += this.serialize(e[n]), n < e.length - 1 && (t += ",");
			return t + "]";
		}
		$Date(e) {
			try {
				return `Date(${e.toISOString()})`;
			} catch {
				return "Date(null)";
			}
		}
		$ArrayBuffer(e) {
			return `ArrayBuffer[${new Uint8Array(e).join(",")}]`;
		}
		$Set(e) {
			return `Set${this.$Array(Array.from(e).sort((e, t) => this.compare(e, t)))}`;
		}
		$Map(e) {
			return this.serializeObjectEntries("Map", e.entries());
		}
	}
	for (let t of [
		"Error",
		"RegExp",
		"URL"
	]) e.prototype["$" + t] = function(e) {
		return `${t}(${e})`;
	};
	for (let t of [
		"Int8Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Int16Array",
		"Uint16Array",
		"Int32Array",
		"Uint32Array",
		"Float32Array",
		"Float64Array"
	]) e.prototype["$" + t] = function(e) {
		return `${t}[${e.join(",")}]`;
	};
	for (let t of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + t] = function(e) {
		return `${t}[${e.join("n,")}${e.length > 0 ? "n" : ""}]`;
	};
	return e;
}();
function Mr(e, t) {
	return e === t || Ar(e) === Ar(t);
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/clamp.js
function Nr(e, t = -Infinity, n = Infinity) {
	return Math.min(n, Math.max(t, e));
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/createContext.js
function V(e, t) {
	let n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
	return [(t) => {
		let n = b(r, t);
		if (n || n === null) return n;
		throw Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
	}, (e) => (ie(r, e), e)];
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/getActiveElement.js
function H() {
	let e = document.activeElement;
	if (e == null) return null;
	for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null;) e = e.shadowRoot.activeElement;
	return e;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/handleAndDispatchCustomEvent.js
function Pr(e, t, n) {
	let r = n.originalEvent.target, i = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(i);
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/nullish.js
function Fr(e) {
	return e == null;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/isValueEqualOrExist.js
function Ir(e, t) {
	return Fr(e) ? !1 : Array.isArray(e) ? e.some((e) => Mr(e, t)) : Mr(e, t);
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/renderSlotFragments.js
function Lr(e) {
	return e ? e.flatMap((e) => e.type === n ? Lr(e.children) : [e]) : [];
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/ConfigProvider/ConfigProvider.js
var [Rr, zr] = V("ConfigProvider");
//#endregion
//#region node_modules/.pnpm/@vueuse+shared@14.2.0_vue@3.5.30_typescript@5.9.3_/node_modules/@vueuse/shared/dist/index.js
function Br(e, t) {
	return _() ? (te(e, t), !0) : !1;
}
function Vr() {
	let e = /* @__PURE__ */ new Set(), t = (t) => {
		e.delete(t);
	};
	return {
		on: (n) => {
			e.add(n);
			let r = () => t(n);
			return Br(r), { off: r };
		},
		off: t,
		trigger: (...t) => Promise.all(Array.from(e).map((e) => e(...t))),
		clear: () => {
			e.clear();
		}
	};
}
var Hr = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var Ur = /* @__PURE__ */ Wr();
function Wr() {
	var e, t;
	return Hr && !!(!((e = window) == null || (e = e.navigator) == null) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) == null || (t = t.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function Gr(e) {
	return e || g();
}
function Kr(e, t = 1e4) {
	return m((n, r) => {
		let i = P(e), a, o = () => setTimeout(() => {
			i = P(e), r();
		}, P(t));
		return Br(() => {
			clearTimeout(a);
		}), {
			get() {
				return n(), i;
			},
			set(e) {
				i = e, r(), clearTimeout(a), a = o();
			}
		};
	});
}
function qr(e, t) {
	Gr(t) && k(e, t);
}
function Jr(e, t, n = {}) {
	let { immediate: r = !0, immediateCallback: i = !1 } = n, a = le(!1), o;
	function s() {
		o &&= (clearTimeout(o), void 0);
	}
	function c() {
		a.value = !1, s();
	}
	function l(...n) {
		i && e(), s(), a.value = !0, o = setTimeout(() => {
			a.value = !1, o = void 0, e(...n);
		}, P(t));
	}
	return r && (a.value = !0, Hr && l()), Br(c), {
		isPending: ce(a),
		start: l,
		stop: c
	};
}
//#endregion
//#region node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs
function Yr(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Xr(e, t, n = ".", r) {
	if (!Yr(t)) return Xr(e, {}, n, r);
	let i = Object.assign({}, t);
	for (let t in e) {
		if (t === "__proto__" || t === "constructor") continue;
		let a = e[t];
		a != null && (r && r(i, t, a, n) || (Array.isArray(a) && Array.isArray(i[t]) ? i[t] = [...a, ...i[t]] : Yr(a) && Yr(i[t]) ? i[t] = Xr(a, i[t], (n ? `${n}.` : "") + t.toString(), r) : i[t] = a));
	}
	return i;
}
function Zr(e) {
	return (...t) => t.reduce((t, n) => Xr(t, n, "", e), {});
}
var Qr = Zr(), $r = Oe(() => {
	let e = M(/* @__PURE__ */ new Map()), t = M(), n = s(() => {
		for (let t of e.value.values()) if (t) return !0;
		return !1;
	}), r = Rr({ scrollBody: M(!0) }), i = null, a = () => {
		document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Ur && i?.(), t.value = void 0;
	};
	return I(n, (e, o) => {
		if (!Hr) return;
		if (!e) {
			o && a();
			return;
		}
		t.value === void 0 && (t.value = document.body.style.overflow);
		let s = window.innerWidth - document.documentElement.clientWidth, c = {
			padding: s,
			margin: 0
		}, l = r.scrollBody?.value ? typeof r.scrollBody.value == "object" ? Qr({
			padding: r.scrollBody.value.padding === !0 ? s : r.scrollBody.value.padding,
			margin: r.scrollBody.value.margin === !0 ? s : r.scrollBody.value.margin
		}, c) : c : {
			padding: 0,
			margin: 0
		};
		s > 0 && (document.body.style.paddingRight = typeof l.padding == "number" ? `${l.padding}px` : String(l.padding), document.body.style.marginRight = typeof l.margin == "number" ? `${l.margin}px` : String(l.margin), document.documentElement.style.setProperty("--scrollbar-width", `${s}px`), document.body.style.overflow = "hidden"), Ur && (i = Me(document, "touchmove", (e) => ni(e), { passive: !1 })), E(() => {
			n.value && (document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden");
		});
	}, {
		immediate: !0,
		flush: "sync"
	}), e;
});
function ei(e) {
	let t = Math.random().toString(36).substring(2, 7), n = $r();
	n.value.set(t, e ?? !1);
	let r = s({
		get: () => n.value.get(t) ?? !1,
		set: (e) => n.value.set(t, e)
	});
	return qr(() => {
		n.value.delete(t);
	}), r;
}
function ti(e) {
	let t = window.getComputedStyle(e);
	if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
	{
		let t = e.parentNode;
		return !(t instanceof Element) || t.tagName === "BODY" ? !1 : ti(t);
	}
}
function ni(e) {
	let t = e || window.event, n = t.target;
	return n instanceof Element && ti(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/useDirection.js
function ri(e) {
	let t = Rr({ dir: M("ltr") });
	return s(() => e?.value || t.dir?.value || "ltr");
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/useEmitAsProps.js
function ii(e) {
	let t = g(), n = t?.type.emits, r = {};
	return n?.length || console.warn(`No emitted event found. Please check component: ${t?.type.__name}`), n?.forEach((t) => {
		r[de(a(t))] = (...n) => e(t, ...n);
	}), r;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/useFocusGuards.js
var ai = 0;
function oi() {
	L((e) => {
		if (!Hr) return;
		let t = document.querySelectorAll("[data-reka-focus-guard]");
		document.body.insertAdjacentElement("afterbegin", t[0] ?? si()), document.body.insertAdjacentElement("beforeend", t[1] ?? si()), ai++, e(() => {
			ai === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((e) => e.remove()), ai--;
		});
	});
}
function si() {
	let e = document.createElement("span");
	return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/useFormControl.js
function ci(e) {
	return s(() => P(e) ? !!je(e)?.closest("form") : !0);
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/useForwardExpose.js
function U() {
	let e = g(), t = M(), n = s(() => r());
	re(() => {
		n.value !== r() && he(t);
	});
	function r() {
		return t.value && "$el" in t.value && ["#text", "#comment"].includes(t.value.$el.nodeName) ? t.value.$el.nextElementSibling : je(t);
	}
	let i = Object.assign({}, e.exposed), a = {};
	for (let t in e.props) Object.defineProperty(a, t, {
		enumerable: !0,
		configurable: !0,
		get: () => e.props[t]
	});
	if (Object.keys(i).length > 0) for (let e in i) Object.defineProperty(a, e, {
		enumerable: !0,
		configurable: !0,
		get: () => i[e]
	});
	Object.defineProperty(a, "$el", {
		enumerable: !0,
		configurable: !0,
		get: () => e.vnode.el
	}), e.exposed = a;
	function o(n) {
		if (t.value = n, n && (Object.defineProperty(a, "$el", {
			enumerable: !0,
			configurable: !0,
			get: () => n instanceof Element ? n : n.$el
		}), !(n instanceof Element) && !Object.prototype.hasOwnProperty.call(n, "$el"))) {
			let t = n.$.exposed, r = Object.assign({}, a);
			for (let e in t) Object.defineProperty(r, e, {
				enumerable: !0,
				configurable: !0,
				get: () => t[e]
			});
			e.exposed = r;
		}
	}
	return {
		forwardRef: o,
		currentRef: t,
		currentElement: n
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/useForwardProps.js
function li(e) {
	let t = g(), n = Object.keys(t?.type.props ?? {}).reduce((e, n) => {
		let r = (t?.type.props[n]).default;
		return r !== void 0 && (e[n] = r), e;
	}, {}), r = pe(e);
	return s(() => {
		let e = {}, i = t?.vnode.props ?? {};
		return Object.keys(i).forEach((t) => {
			e[a(t)] = i[t];
		}), Object.keys({
			...n,
			...e
		}).reduce((e, t) => (r.value[t] !== void 0 && (e[t] = r.value[t]), e), {});
	});
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/useForwardPropsEmits.js
function ui(e, t) {
	let n = li(e), r = t ? ii(t) : {};
	return s(() => ({
		...n.value,
		...r
	}));
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/useGraceArea.js
function di(e, t) {
	let n = Kr(!1, 300);
	Br(() => {
		n.value = !1;
	});
	let r = M(null), i = Vr();
	function a() {
		r.value = null, n.value = !1;
	}
	function o(e, t) {
		let i = e.currentTarget, a = {
			x: e.clientX,
			y: e.clientY
		}, o = pi(a, fi(a, i.getBoundingClientRect()), 1), s = mi(t.getBoundingClientRect());
		r.value = gi([...o, ...s]), n.value = !0;
	}
	return L((n) => {
		if (e.value && t.value) {
			let r = (e) => o(e, t.value), i = (t) => o(t, e.value);
			e.value.addEventListener("pointerleave", r), t.value.addEventListener("pointerleave", i), n(() => {
				e.value?.removeEventListener("pointerleave", r), t.value?.removeEventListener("pointerleave", i);
			});
		}
	}), L((n) => {
		if (r.value) {
			let o = (n) => {
				if (!r.value || !(n.target instanceof Element)) return;
				let o = n.target, s = {
					x: n.clientX,
					y: n.clientY
				}, c = e.value?.contains(o) || t.value?.contains(o), l = !hi(s, r.value), u = !!o.closest("[data-grace-area-trigger]");
				c ? a() : (l || u) && (a(), i.trigger());
			};
			e.value?.ownerDocument.addEventListener("pointermove", o), n(() => e.value?.ownerDocument.removeEventListener("pointermove", o));
		}
	}), {
		isPointerInTransit: n,
		onPointerExit: i.on
	};
}
function fi(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function pi(e, t, n = 5) {
	let r = [];
	switch (t) {
		case "top":
			r.push({
				x: e.x - n,
				y: e.y + n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "bottom":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y - n
			});
			break;
		case "left":
			r.push({
				x: e.x + n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "right":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x - n,
				y: e.y + n
			});
			break;
	}
	return r;
}
function mi(e) {
	let { top: t, right: n, bottom: r, left: i } = e;
	return [
		{
			x: i,
			y: t
		},
		{
			x: n,
			y: t
		},
		{
			x: n,
			y: r
		},
		{
			x: i,
			y: r
		}
	];
}
function hi(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e].x, s = t[e].y, c = t[a].x, l = t[a].y;
		s > r != l > r && n < (c - o) * (r - s) / (l - s) + o && (i = !i);
	}
	return i;
}
function gi(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0), _i(t);
}
function _i(e) {
	if (e.length <= 1) return e.slice();
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (; t.length >= 2;) {
			let e = t[t.length - 1], n = t[t.length - 2];
			if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
			else break;
		}
		t.push(r);
	}
	t.pop();
	let n = [];
	for (let t = e.length - 1; t >= 0; t--) {
		let r = e[t];
		for (; n.length >= 2;) {
			let e = n[n.length - 1], t = n[n.length - 2];
			if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
			else break;
		}
		n.push(r);
	}
	return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.4/node_modules/aria-hidden/dist/es2015/index.js
var vi = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, yi = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), xi = {}, Si = 0, Ci = function(e) {
	return e && (e.host || Ci(e.parentNode));
}, wi = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Ci(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Ti = function(e, t, n, r) {
	var i = wi(t, Array.isArray(e) ? e : [e]);
	xi[n] || (xi[n] = /* @__PURE__ */ new WeakMap());
	var a = xi[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (yi.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				yi.set(e, c), a.set(e, l), o.push(e), c === 1 && i && bi.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Si++, function() {
		o.forEach(function(e) {
			var t = yi.get(e) - 1, i = a.get(e) - 1;
			yi.set(e, t), a.set(e, i), t || (bi.has(e) || e.removeAttribute(r), bi.delete(e)), i || e.removeAttribute(n);
		}), Si--, Si || (yi = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), xi = {});
	};
}, Ei = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || vi(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live]"))), Ti(r, i, n, "aria-hidden")) : function() {
		return null;
	};
};
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/useHideOthers.js
function Di(e) {
	let t;
	I(() => je(e), (e) => {
		let n = !1;
		try {
			n = !!e?.closest("[popover]:not(:popover-open)");
		} catch {}
		e && !n ? t = Ei(e) : t && t();
	}), ne(() => {
		t && t();
	});
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/useId.js
var Oi = 0;
function ki(t, n = "reka") {
	if (t) return t;
	let r;
	return r = "useId" in e ? e.useId?.() : Rr({ useId: void 0 }).useId?.() ?? `${++Oi}`, n ? `${n}-${r}` : r;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/useSize.js
function Ai(e) {
	let t = M(), n = s(() => t.value?.width ?? 0), r = s(() => t.value?.height ?? 0);
	return A(() => {
		let n = je(e);
		if (n) {
			t.value = {
				width: n.offsetWidth,
				height: n.offsetHeight
			};
			let e = new ResizeObserver((e) => {
				if (!Array.isArray(e) || !e.length) return;
				let r = e[0], i, a;
				if ("borderBoxSize" in r) {
					let e = r.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = n.offsetWidth, a = n.offsetHeight;
				t.value = {
					width: i,
					height: a
				};
			});
			return e.observe(n, { box: "border-box" }), () => e.unobserve(n);
		} else t.value = void 0;
	}), {
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/useStateMachine.js
function ji(e, t) {
	let n = M(e);
	function r(e) {
		return t[n.value][e] ?? n.value;
	}
	return {
		state: n,
		dispatch: (e) => {
			n.value = r(e);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/useTypeahead.js
function Mi(e) {
	let t = Kr("", 1e3);
	return {
		search: t,
		handleTypeaheadSearch: (n, r) => {
			if (t.value += n, e) e(n);
			else {
				let e = H(), n = r.map((e) => ({
					...e,
					textValue: e.value?.textValue ?? e.ref.textContent?.trim() ?? ""
				})), i = n.find((t) => t.ref === e), a = Pi(n.map((e) => e.textValue), t.value, i?.textValue), o = n.find((e) => e.textValue === a);
				return o && o.ref.focus(), o?.ref;
			}
		},
		resetTypeahead: () => {
			t.value = "";
		}
	};
}
function Ni(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function Pi(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Ni(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/Presence/usePresence.js
function Fi(e, t) {
	let n = M({}), r = M("none"), i = M(e), a = e.value ? "mounted" : "unmounted", o, c = t.value?.ownerDocument.defaultView ?? ke, { state: l, dispatch: u } = ji(a, {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	}), d = (e) => {
		if (Hr) {
			let n = new CustomEvent(e, {
				bubbles: !1,
				cancelable: !1
			});
			t.value?.dispatchEvent(n);
		}
	};
	I(e, async (e, i) => {
		let a = i !== e;
		if (await E(), a) {
			let a = r.value, o = Ii(t.value);
			e ? (u("MOUNT"), d("enter"), o === "none" && d("after-enter")) : o === "none" || o === "undefined" || n.value?.display === "none" ? (u("UNMOUNT"), d("leave"), d("after-leave")) : i && a !== o ? (u("ANIMATION_OUT"), d("leave")) : (u("UNMOUNT"), d("after-leave"));
		}
	}, { immediate: !0 });
	let f = (e) => {
		let n = Ii(t.value), r = n.includes(CSS.escape(e.animationName)), a = l.value === "mounted" ? "enter" : "leave";
		if (e.target === t.value && r && (d(`after-${a}`), u("ANIMATION_END"), !i.value)) {
			let e = t.value.style.animationFillMode;
			t.value.style.animationFillMode = "forwards", o = c?.setTimeout(() => {
				t.value?.style.animationFillMode === "forwards" && (t.value.style.animationFillMode = e);
			});
		}
		e.target === t.value && n === "none" && u("ANIMATION_END");
	}, p = (e) => {
		e.target === t.value && (r.value = Ii(t.value));
	}, m = I(t, (e, t) => {
		e ? (n.value = getComputedStyle(e), e.addEventListener("animationstart", p), e.addEventListener("animationcancel", f), e.addEventListener("animationend", f)) : (u("ANIMATION_END"), o !== void 0 && c?.clearTimeout(o), t?.removeEventListener("animationstart", p), t?.removeEventListener("animationcancel", f), t?.removeEventListener("animationend", f));
	}, { immediate: !0 }), h = I(l, () => {
		let e = Ii(t.value);
		r.value = l.value === "mounted" ? e : "none";
	});
	return ne(() => {
		m(), h();
	}), { isPresent: s(() => ["mounted", "unmountSuspended"].includes(l.value)) };
}
function Ii(e) {
	return e && getComputedStyle(e).animationName || "none";
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/Presence/Presence.js
var Li = h({
	name: "Presence",
	props: {
		present: {
			type: Boolean,
			required: !0
		},
		forceMount: { type: Boolean }
	},
	slots: {},
	setup(e, { slots: t, expose: n }) {
		let { present: r, forceMount: i } = me(e), a = M(), { isPresent: o } = Fi(r, a);
		n({ present: o });
		let s = t.default({ present: o.value });
		s = Lr(s || []);
		let c = g();
		if (s && s?.length > 1) {
			let e = c?.parent?.type.name ? `<${c.parent.type.name} />` : "component";
			throw Error([
				`Detected an invalid children for \`${e}\` for  \`Presence\` component.`,
				"",
				"Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
				"You can apply a few solutions:",
				["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((e) => `  - ${e}`).join("\n")
			].join("\n"));
		}
		return () => i.value || r.value || o.value ? y(t.default({ present: o.value })[0], { ref: (e) => {
			let t = je(e);
			return t?.hasAttribute === void 0 || (t?.hasAttribute("data-reka-popper-content-wrapper") ? a.value = t.firstElementChild : a.value = t), t;
		} }) : null;
	}
}), Ri = h({
	name: "PrimitiveSlot",
	inheritAttrs: !1,
	setup(e, { attrs: n, slots: r }) {
		return () => {
			if (!r.default) return null;
			let e = Lr(r.default()), i = e.findIndex((e) => e.type !== t);
			if (i === -1) return e;
			let a = e[i];
			delete a.props?.ref;
			let s = a.props ? T(n, a.props) : n, c = o({
				...a,
				props: {}
			}, s);
			return e.length === 1 ? c : (e[i] = c, e);
		};
	}
}), zi = [
	"area",
	"img",
	"input"
], W = h({
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
		let r = e.asChild ? "template" : e.as;
		return typeof r == "string" && zi.includes(r) ? () => y(r, t) : r === "template" ? () => y(Ri, t, { default: n.default }) : () => y(e.as, t, { default: n.default });
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/Primitive/usePrimitiveElement.js
function Bi() {
	let e = M();
	return {
		primitiveElement: e,
		currentElement: s(() => ["#text", "#comment"].includes(e.value?.$el.nodeName) ? e.value?.$el.nextElementSibling : je(e))
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/Dialog/DialogRoot.js
var [G, Vi] = V("DialogRoot"), Hi = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, r = Re(n, "open", t, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		}), i = M(), a = M(), { modal: o } = me(n);
		return Vi({
			open: r,
			modal: o,
			openModal: () => {
				r.value = !0;
			},
			onOpenChange: (e) => {
				r.value = e;
			},
			onOpenToggle: () => {
				r.value = !r.value;
			},
			contentId: "",
			titleId: "",
			descriptionId: "",
			triggerElement: i,
			contentElement: a
		}), (e, t) => N(e.$slots, "default", {
			open: F(r),
			close: () => r.value = !1
		});
	}
}), Ui = /* @__PURE__ */ h({
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
		let t = e;
		U();
		let n = G();
		return (e, r) => (j(), c(F(W), T(t, {
			type: e.as === "button" ? "button" : void 0,
			onClick: r[0] ||= (e) => F(n).onOpenChange(!1)
		}), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16, ["type"]));
	}
}), Wi = "dismissableLayer.pointerDownOutside", Gi = "dismissableLayer.focusOutside";
function Ki(e, t) {
	if (!(t instanceof Element)) return !1;
	let n = t.closest("[data-dismissable-layer]"), r = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), i = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
	return !!(n && (r === n || i.indexOf(r) < i.indexOf(n)));
}
function qi(e, t, n = !0) {
	let r = t?.value?.ownerDocument ?? globalThis?.document, i = M(!1), a = M(() => {});
	return L((o) => {
		if (!Hr || !P(n)) return;
		let s = async (n) => {
			let o = n.target;
			if (!(!t?.value || !o)) {
				if (Ki(t.value, o)) {
					i.value = !1;
					return;
				}
				if (n.target && !i.value) {
					let t = { originalEvent: n };
					function i() {
						Pr(Wi, e, t);
					}
					n.pointerType === "touch" ? (r.removeEventListener("click", a.value), a.value = i, r.addEventListener("click", a.value, { once: !0 })) : i();
				} else r.removeEventListener("click", a.value);
				i.value = !1;
			}
		}, c = window.setTimeout(() => {
			r.addEventListener("pointerdown", s);
		}, 0);
		o(() => {
			window.clearTimeout(c), r.removeEventListener("pointerdown", s), r.removeEventListener("click", a.value);
		});
	}), { onPointerDownCapture: () => {
		P(n) && (i.value = !0);
	} };
}
function Ji(e, t, n = !0) {
	let r = t?.value?.ownerDocument ?? globalThis?.document, i = M(!1);
	return L((a) => {
		if (!Hr || !P(n)) return;
		let o = async (n) => {
			if (!t?.value) return;
			await E(), await E();
			let r = n.target;
			!t.value || !r || Ki(t.value, r) || n.target && !i.value && Pr(Gi, e, { originalEvent: n });
		};
		r.addEventListener("focusin", o), a(() => r.removeEventListener("focusin", o));
	}), {
		onFocusCapture: () => {
			P(n) && (i.value = !0);
		},
		onBlurCapture: () => {
			P(n) && (i.value = !1);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/DismissableLayer/DismissableLayer.js
var K = ae({
	layersRoot: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	originalBodyPointerEvents: void 0,
	branches: /* @__PURE__ */ new Set()
}), Yi = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, r = t, { forwardRef: i, currentElement: a } = U(), o = s(() => a.value?.ownerDocument ?? globalThis.document), l = s(() => K.layersRoot), u = s(() => a.value ? Array.from(l.value).indexOf(a.value) : -1), d = s(() => K.layersWithOutsidePointerEventsDisabled.size > 0), f = s(() => {
			let e = Array.from(l.value), [t] = [...K.layersWithOutsidePointerEventsDisabled].slice(-1), n = e.indexOf(t);
			return u.value >= n;
		}), p = qi(async (e) => {
			let t = [...K.branches].some((t) => t?.contains(e.target));
			!f.value || t || (r("pointerDownOutside", e), r("interactOutside", e), await E(), e.defaultPrevented || r("dismiss"));
		}, a), m = Ji((e) => {
			[...K.branches].some((t) => t?.contains(e.target)) || (r("focusOutside", e), r("interactOutside", e), e.defaultPrevented || r("dismiss"));
		}, a);
		return Ae("Escape", (e) => {
			u.value === l.value.size - 1 && (r("escapeKeyDown", e), e.defaultPrevented || r("dismiss"));
		}), L((e) => {
			a.value && (n.disableOutsidePointerEvents && (K.layersWithOutsidePointerEventsDisabled.size === 0 && (K.originalBodyPointerEvents = o.value.body.style.pointerEvents, o.value.body.style.pointerEvents = "none"), K.layersWithOutsidePointerEventsDisabled.add(a.value)), l.value.add(a.value), e(() => {
				n.disableOutsidePointerEvents && K.layersWithOutsidePointerEventsDisabled.size === 1 && !Fr(K.originalBodyPointerEvents) && (o.value.body.style.pointerEvents = K.originalBodyPointerEvents);
			}));
		}), L((e) => {
			e(() => {
				a.value && (l.value.delete(a.value), K.layersWithOutsidePointerEventsDisabled.delete(a.value));
			});
		}), (e, t) => (j(), c(F(W), {
			ref: F(i),
			"as-child": e.asChild,
			as: e.as,
			"data-dismissable-layer": "",
			style: ee({ pointerEvents: d.value ? f.value ? "auto" : "none" : void 0 }),
			onFocusCapture: F(m).onFocusCapture,
			onBlurCapture: F(m).onBlurCapture,
			onPointerdownCapture: F(p).onPointerDownCapture
		}, {
			default: R(() => [N(e.$slots, "default")]),
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
}), Xi = De(() => M([]));
function Zi() {
	let e = Xi();
	return {
		add(t) {
			let n = e.value[0];
			t !== n && n?.pause(), e.value = Qi(e.value, t), e.value.unshift(t);
		},
		remove(t) {
			e.value = Qi(e.value, t), e.value[0]?.resume();
		}
	};
}
function Qi(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/FocusScope/utils.js
var $i = "focusScope.autoFocusOnMount", ea = "focusScope.autoFocusOnUnmount", ta = {
	bubbles: !1,
	cancelable: !0
};
function na(e, { select: t = !1 } = {}) {
	let n = H();
	for (let r of e) if (ca(r, { select: t }), H() !== n) return !0;
}
function ra(e) {
	let t = ia(e);
	return [aa(t, e), aa(t.reverse(), e)];
}
function ia(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function aa(e, t) {
	for (let n of e) if (!oa(n, { upTo: t })) return n;
}
function oa(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function sa(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function ca(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = H();
		e.focus({ preventScroll: !0 }), e !== n && sa(e) && t && e.select();
	}
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/FocusScope/FocusScope.js
var la = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, r = t, { currentRef: i, currentElement: a } = U(), o = M(null), s = Zi(), l = ae({
			paused: !1,
			pause() {
				this.paused = !0;
			},
			resume() {
				this.paused = !1;
			}
		});
		L((e) => {
			if (!Hr) return;
			let t = a.value;
			if (!n.trapped) return;
			function r(e) {
				if (l.paused || !t) return;
				let n = e.target;
				t.contains(n) ? o.value = n : ca(o.value, { select: !0 });
			}
			function i(e) {
				if (l.paused || !t) return;
				let n = e.relatedTarget;
				n !== null && (t.contains(n) || ca(o.value, { select: !0 }));
			}
			function s(e) {
				t.contains(o.value) || ca(t);
			}
			document.addEventListener("focusin", r), document.addEventListener("focusout", i);
			let c = new MutationObserver(s);
			t && c.observe(t, {
				childList: !0,
				subtree: !0
			}), e(() => {
				document.removeEventListener("focusin", r), document.removeEventListener("focusout", i), c.disconnect();
			});
		}), L(async (e) => {
			let t = a.value;
			if (await E(), !t) return;
			s.add(l);
			let n = H();
			if (!t.contains(n)) {
				let e = new CustomEvent($i, ta);
				t.addEventListener($i, (e) => r("mountAutoFocus", e)), t.dispatchEvent(e), e.defaultPrevented || (na(ia(t), { select: !0 }), H() === n && ca(t));
			}
			e(() => {
				t.removeEventListener($i, (e) => r("mountAutoFocus", e));
				let e = new CustomEvent(ea, ta), i = (e) => {
					r("unmountAutoFocus", e);
				};
				t.addEventListener(ea, i), t.dispatchEvent(e), setTimeout(() => {
					e.defaultPrevented || ca(n ?? document.body, { select: !0 }), t.removeEventListener(ea, i), s.remove(l);
				}, 0);
			});
		});
		function u(e) {
			if (!n.loop && !n.trapped || l.paused) return;
			let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, r = H();
			if (t && r) {
				let t = e.currentTarget, [i, a] = ra(t);
				i && a ? !e.shiftKey && r === a ? (e.preventDefault(), n.loop && ca(i, { select: !0 })) : e.shiftKey && r === i && (e.preventDefault(), n.loop && ca(a, { select: !0 })) : r === t && e.preventDefault();
			}
		}
		return (e, t) => (j(), c(F(W), {
			ref_key: "currentRef",
			ref: i,
			tabindex: "-1",
			"as-child": e.asChild,
			as: e.as,
			onKeydown: u
		}, {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 8, ["as-child", "as"]));
	}
}), ua = ["Enter", " "], da = [
	"ArrowDown",
	"PageUp",
	"Home"
], fa = [
	"ArrowUp",
	"PageDown",
	"End"
];
[...da, ...fa], [...ua], [...ua];
function pa(e) {
	return e ? "open" : "closed";
}
function ma(e) {
	let t = H();
	for (let n of e) if (n === t || (n.focus(), H() !== t)) return;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/Dialog/utils.js
var ha = "DialogTitle", ga = "DialogContent";
function _a({ titleName: e = ha, contentName: t = ga, componentLink: n = "dialog.html#title", titleId: r, descriptionId: i, contentElement: a }) {
	let o = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, s = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
	A(() => {
		document.getElementById(r) || console.warn(o);
		let e = a.value?.getAttribute("aria-describedby");
		i && e && (document.getElementById(i) || console.warn(s));
	});
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/Dialog/DialogContentImpl.js
var va = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, r = t, i = G(), { forwardRef: a, currentElement: o } = U();
		return i.titleId ||= ki(void 0, "reka-dialog-title"), i.descriptionId ||= ki(void 0, "reka-dialog-description"), A(() => {
			i.contentElement = o, H() !== document.body && (i.triggerElement.value = H());
		}), process.env.NODE_ENV !== "production" && _a({
			titleName: "DialogTitle",
			contentName: "DialogContent",
			componentLink: "dialog.html#title",
			titleId: i.titleId,
			descriptionId: i.descriptionId,
			contentElement: o
		}), (e, t) => (j(), c(F(la), {
			"as-child": "",
			loop: "",
			trapped: n.trapFocus,
			onMountAutoFocus: t[5] ||= (e) => r("openAutoFocus", e),
			onUnmountAutoFocus: t[6] ||= (e) => r("closeAutoFocus", e)
		}, {
			default: R(() => [p(F(Yi), T({
				id: F(i).contentId,
				ref: F(a),
				as: e.as,
				"as-child": e.asChild,
				"disable-outside-pointer-events": e.disableOutsidePointerEvents,
				role: "dialog",
				"aria-describedby": F(i).descriptionId,
				"aria-labelledby": F(i).titleId,
				"data-state": F(pa)(F(i).open.value)
			}, e.$attrs, {
				onDismiss: t[0] ||= (e) => F(i).onOpenChange(!1),
				onEscapeKeyDown: t[1] ||= (e) => r("escapeKeyDown", e),
				onFocusOutside: t[2] ||= (e) => r("focusOutside", e),
				onInteractOutside: t[3] ||= (e) => r("interactOutside", e),
				onPointerDownOutside: t[4] ||= (e) => r("pointerDownOutside", e)
			}), {
				default: R(() => [N(e.$slots, "default")]),
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
}), ya = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, r = t, i = G(), a = ii(r), { forwardRef: o, currentElement: s } = U();
		return Di(s), (e, t) => (j(), c(va, T({
			...n,
			...F(a)
		}, {
			ref: F(o),
			"trap-focus": F(i).open.value,
			"disable-outside-pointer-events": !0,
			onCloseAutoFocus: t[0] ||= (e) => {
				e.defaultPrevented || (e.preventDefault(), F(i).triggerElement.value?.focus());
			},
			onPointerDownOutside: t[1] ||= (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
				(t.button === 2 || n) && e.preventDefault();
			},
			onFocusOutside: t[2] ||= (e) => {
				e.preventDefault();
			}
		}), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16, ["trap-focus"]));
	}
}), ba = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, r = ii(t);
		U();
		let i = G(), a = M(!1), o = M(!1);
		return (e, t) => (j(), c(va, T({
			...n,
			...F(r)
		}, {
			"trap-focus": !1,
			"disable-outside-pointer-events": !1,
			onCloseAutoFocus: t[0] ||= (e) => {
				e.defaultPrevented || (a.value || F(i).triggerElement.value?.focus(), e.preventDefault()), a.value = !1, o.value = !1;
			},
			onInteractOutside: t[1] ||= (e) => {
				e.defaultPrevented || (a.value = !0, e.detail.originalEvent.type === "pointerdown" && (o.value = !0));
				let t = e.target;
				F(i).triggerElement.value?.contains(t) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && o.value && e.preventDefault();
			}
		}), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), xa = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, r = t, i = G(), a = ii(r), { forwardRef: o } = U();
		return (e, t) => (j(), c(F(Li), { present: e.forceMount || F(i).open.value }, {
			default: R(() => [F(i).modal.value ? (j(), c(ya, T({
				key: 0,
				ref: F(o)
			}, {
				...n,
				...F(a),
				...e.$attrs
			}), {
				default: R(() => [N(e.$slots, "default")]),
				_: 3
			}, 16)) : (j(), c(ba, T({
				key: 1,
				ref: F(o)
			}, {
				...n,
				...F(a),
				...e.$attrs
			}), {
				default: R(() => [N(e.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), Sa = /* @__PURE__ */ h({
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
		let t = e;
		U();
		let n = G();
		return (e, r) => (j(), c(F(W), T(t, { id: F(n).descriptionId }), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), Ca = /* @__PURE__ */ h({
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
		let t = G();
		return ei(!0), U(), (e, n) => (j(), c(F(W), {
			as: e.as,
			"as-child": e.asChild,
			"data-state": F(t).open.value ? "open" : "closed",
			style: { "pointer-events": "auto" }
		}, {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-state"
		]));
	}
}), wa = /* @__PURE__ */ h({
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
		let t = G(), { forwardRef: n } = U();
		return (e, r) => F(t)?.modal.value ? (j(), c(F(Li), {
			key: 0,
			present: e.forceMount || F(t).open.value
		}, {
			default: R(() => [p(Ca, T(e.$attrs, {
				ref: F(n),
				as: e.as,
				"as-child": e.asChild
			}), {
				default: R(() => [N(e.$slots, "default")]),
				_: 3
			}, 16, ["as", "as-child"])]),
			_: 3
		}, 8, ["present"])) : l("v-if", !0);
	}
}), Ta = /* @__PURE__ */ h({
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
		let t = Ne();
		return (e, n) => F(t) || e.forceMount ? (j(), c(r, {
			key: 0,
			to: e.to,
			disabled: e.disabled,
			defer: e.defer
		}, [N(e.$slots, "default")], 8, [
			"to",
			"disabled",
			"defer"
		])) : l("v-if", !0);
	}
}), Ea = /* @__PURE__ */ h({
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
		let t = e;
		return (e, n) => (j(), c(F(Ta), O(v(t)), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Da = /* @__PURE__ */ h({
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
		let t = e, n = G();
		return U(), (e, r) => (j(), c(F(W), T(t, { id: F(n).titleId }), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), Oa = /* @__PURE__ */ h({
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
		let t = e, n = G(), { forwardRef: r, currentElement: i } = U();
		return n.contentId ||= ki(void 0, "reka-dialog-content"), A(() => {
			n.triggerElement.value = i.value;
		}), (e, i) => (j(), c(F(W), T(t, {
			ref: F(r),
			type: e.as === "button" ? "button" : void 0,
			"aria-haspopup": "dialog",
			"aria-expanded": F(n).open.value || !1,
			"aria-controls": F(n).open.value ? F(n).contentId : void 0,
			"data-state": F(n).open.value ? "open" : "closed",
			onClick: F(n).onOpenToggle
		}), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16, [
			"type",
			"aria-expanded",
			"aria-controls",
			"data-state",
			"onClick"
		]));
	}
}), ka = "data-reka-collection-item";
function Aa(e = {}) {
	let { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`, i;
	if (n) {
		let e = M(/* @__PURE__ */ new Map());
		i = {
			collectionRef: M(),
			itemMap: e
		}, ie(r, i);
	} else i = b(r);
	let a = (e = !1) => {
		let t = i.collectionRef.value;
		if (!t) return [];
		let n = Array.from(t.querySelectorAll(`[${ka}]`)), r = Array.from(i.itemMap.value.values()).sort((e, t) => n.indexOf(e.ref) - n.indexOf(t.ref));
		return e ? r : r.filter((e) => e.ref.dataset.disabled !== "");
	}, o = h({
		name: "CollectionSlot",
		inheritAttrs: !1,
		setup(e, { slots: t, attrs: n }) {
			let { primitiveElement: r, currentElement: a } = Bi();
			return I(a, () => {
				i.collectionRef.value = a.value;
			}), () => y(Ri, {
				ref: r,
				...n
			}, t);
		}
	}), c = h({
		name: "CollectionItem",
		inheritAttrs: !1,
		props: { value: { validator: () => !0 } },
		setup(e, { slots: t, attrs: n }) {
			let { primitiveElement: r, currentElement: a } = Bi();
			return L((t) => {
				if (a.value) {
					let n = S(a.value);
					i.itemMap.value.set(n, {
						ref: a.value,
						value: e.value
					}), t(() => i.itemMap.value.delete(n));
				}
			}), () => y(Ri, {
				...n,
				[ka]: "",
				ref: r
			}, t);
		}
	});
	return {
		getItems: a,
		reactiveItems: s(() => Array.from(i.itemMap.value.values())),
		itemMapSize: s(() => i.itemMap.value.size),
		CollectionSlot: o,
		CollectionItem: c
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/VisuallyHidden/VisuallyHidden.js
var ja = /* @__PURE__ */ h({
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
		return (e, t) => (j(), c(F(W), {
			as: e.as,
			"as-child": e.asChild,
			"aria-hidden": e.feature === "focusable" ? "true" : void 0,
			"data-hidden": e.feature === "fully-hidden" ? "" : void 0,
			tabindex: e.feature === "fully-hidden" ? "-1" : void 0,
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
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"aria-hidden",
			"data-hidden",
			"tabindex"
		]));
	}
}), Ma = /* @__PURE__ */ h({
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
		let t = e, { primitiveElement: n, currentElement: r } = Bi();
		return I(s(() => t.checked ?? t.value), (e, t) => {
			if (!r.value) return;
			let n = r.value, i = window.HTMLInputElement.prototype, a = Object.getOwnPropertyDescriptor(i, "value").set;
			if (a && e !== t) {
				let t = new Event("input", { bubbles: !0 }), r = new Event("change", { bubbles: !0 });
				a.call(n, e), n.dispatchEvent(t), n.dispatchEvent(r);
			}
		}), (e, r) => (j(), c(ja, T({
			ref_key: "primitiveElement",
			ref: n
		}, {
			...t,
			...e.$attrs
		}, { as: "input" }), null, 16));
	}
}), Na = /* @__PURE__ */ h({
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
		let t = e, r = s(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), i = s(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
			name: t.name,
			value: t.value
		}] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((e, n) => typeof e == "object" ? Object.entries(e).map(([e, r]) => ({
			name: `${t.name}[${n}][${e}]`,
			value: r
		})) : {
			name: `${t.name}[${n}]`,
			value: e
		}) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([e, n]) => ({
			name: `${t.name}[${e}]`,
			value: n
		})) : []);
		return (e, a) => (j(), u(n, null, [l(" We render single input if it's required "), r.value ? (j(), c(Ma, T({ key: e.name }, {
			...t,
			...e.$attrs
		}, {
			name: e.name,
			value: e.value
		}), null, 16, ["name", "value"])) : (j(!0), u(n, { key: 1 }, oe(i.value, (n) => (j(), c(Ma, T({ key: n.name }, { ref_for: !0 }, {
			...t,
			...e.$attrs
		}, {
			name: n.name,
			value: n.value
		}), null, 16, ["name", "value"]))), 128))], 2112));
	}
}), Pa = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function Fa(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function Ia(e, t, n) {
	let r = Fa(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return Pa[r];
}
function La(e, t = !1) {
	let n = H();
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), H() !== n)) return;
}
function Ra(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/Popper/PopperRoot.js
var [za, Ba] = V("PopperRoot"), Va = /* @__PURE__ */ h({
	inheritAttrs: !1,
	__name: "PopperRoot",
	setup(e) {
		let t = M();
		return Ba({
			anchor: t,
			onAnchorChange: (e) => t.value = e
		}), (e, t) => N(e.$slots, "default");
	}
}), Ha = /* @__PURE__ */ h({
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
		let t = e, { forwardRef: n, currentElement: r } = U(), i = za();
		return Se(() => {
			i.onAnchorChange(t.reference ?? r.value);
		}), (e, t) => (j(), c(F(W), {
			ref: F(n),
			as: e.as,
			"as-child": e.asChild
		}, {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
}), Ua = {
	key: 0,
	d: "M0 0L6 6L12 0"
}, Wa = {
	key: 1,
	d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, Ga = /* @__PURE__ */ h({
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
		let t = e;
		return U(), (e, n) => (j(), c(F(W), T(t, {
			width: e.width,
			height: e.height,
			viewBox: e.asChild ? void 0 : "0 0 12 6",
			preserveAspectRatio: e.asChild ? void 0 : "none"
		}), {
			default: R(() => [N(e.$slots, "default", {}, () => [e.rounded ? (j(), u("path", Wa)) : (j(), u("path", Ua))])]),
			_: 3
		}, 16, [
			"width",
			"height",
			"viewBox",
			"preserveAspectRatio"
		]));
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/Popper/utils.js
function Ka(e) {
	return e !== null;
}
function qa(e) {
	return {
		name: "transformOrigin",
		options: e,
		fn(t) {
			let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Ja(n), u = {
				start: "0%",
				center: "50%",
				end: "100%"
			}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
			return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
				x: p,
				y: m
			} };
		}
	};
}
function Ja(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.9/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Ya = [
	"top",
	"right",
	"bottom",
	"left"
], Xa = Math.min, q = Math.max, Za = Math.round, Qa = Math.floor, J = (e) => ({
	x: e,
	y: e
}), $a = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, eo = {
	start: "end",
	end: "start"
};
function to(e, t, n) {
	return q(e, Xa(t, n));
}
function no(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function ro(e) {
	return e.split("-")[0];
}
function io(e) {
	return e.split("-")[1];
}
function ao(e) {
	return e === "x" ? "y" : "x";
}
function oo(e) {
	return e === "y" ? "height" : "width";
}
function so(e) {
	return ["top", "bottom"].includes(ro(e)) ? "y" : "x";
}
function co(e) {
	return ao(so(e));
}
function lo(e, t, n) {
	n === void 0 && (n = !1);
	let r = io(e), i = co(e), a = oo(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = ho(o)), [o, ho(o)];
}
function uo(e) {
	let t = ho(e);
	return [
		fo(e),
		t,
		fo(t)
	];
}
function fo(e) {
	return e.replace(/start|end/g, (e) => eo[e]);
}
function po(e, t, n) {
	let r = ["left", "right"], i = ["right", "left"], a = ["top", "bottom"], o = ["bottom", "top"];
	switch (e) {
		case "top":
		case "bottom": return n ? t ? i : r : t ? r : i;
		case "left":
		case "right": return t ? a : o;
		default: return [];
	}
}
function mo(e, t, n, r) {
	let i = io(e), a = po(ro(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(fo)))), a;
}
function ho(e) {
	return e.replace(/left|right|bottom|top/g, (e) => $a[e]);
}
function go(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function _o(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : go(e);
}
function vo(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+core@1.6.9/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function yo(e, t, n) {
	let { reference: r, floating: i } = e, a = so(t), o = co(t), s = oo(o), c = ro(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
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
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (io(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
var bo = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = a.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = yo(l, r, c), f = r, p = {}, m = 0;
	for (let n = 0; n < s.length; n++) {
		let { name: a, fn: h } = s[n], { x: g, y: _, data: v, reset: y } = await h({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: p,
			rects: l,
			platform: o,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = g ?? u, d = _ ?? d, p = {
			...p,
			[a]: {
				...p[a],
				...v
			}
		}, y && m <= 50 && (m++, typeof y == "object" && (y.placement && (f = y.placement), y.rects && (l = y.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : y.rects), {x: u, y: d} = yo(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: p
	};
};
async function xo(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = no(t, e), p = _o(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = vo(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = vo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var So = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = no(e, t) || {};
		if (l == null) return {};
		let d = _o(u), f = {
			x: n,
			y: r
		}, p = co(i), m = oo(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Xa(d[_], T), D = Xa(d[v], T), O = E, ee = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = to(O, k, ee), te = !c.arrow && io(i) != null && k !== A && a.reference[m] / 2 - (k < O ? E : D) - h[m] / 2 < 0, ne = te ? k < O ? k - O : k - ee : 0;
		return {
			[p]: f[p] + ne,
			data: {
				[p]: A,
				centerOffset: k - A - ne,
				...te && { alignmentOffset: ne }
			},
			reset: te
		};
	}
}), Co = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = no(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = ro(r), _ = so(o), v = ro(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [ho(o)] : uo(o)), x = p !== "none";
			!d && x && b.push(...mo(o, m, p, y));
			let S = [o, ...b], C = await xo(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = lo(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = so(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function wo(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function To(e) {
	return Ya.some((t) => e[t] >= 0);
}
var Eo = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n } = t, { strategy: r = "referenceHidden", ...i } = no(e, t);
			switch (r) {
				case "referenceHidden": {
					let e = wo(await xo(t, {
						...i,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: To(e)
					} };
				}
				case "escaped": {
					let e = wo(await xo(t, {
						...i,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: To(e)
					} };
				}
				default: return {};
			}
		}
	};
};
async function Do(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = ro(n), s = io(n), c = so(n) === "y", l = ["left", "top"].includes(o) ? -1 : 1, u = a && c ? -1 : 1, d = no(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var Oo = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Do(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, ko = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i } = t, { mainAxis: a = !0, crossAxis: o = !1, limiter: s = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...c } = no(e, t), l = {
				x: n,
				y: r
			}, u = await xo(t, c), d = so(ro(i)), f = ao(d), p = l[f], m = l[d];
			if (a) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = p + u[e], r = p - u[t];
				p = to(n, p, r);
			}
			if (o) {
				let e = d === "y" ? "top" : "left", t = d === "y" ? "bottom" : "right", n = m + u[e], r = m - u[t];
				m = to(n, m, r);
			}
			let h = s.fn({
				...t,
				[f]: p,
				[d]: m
			});
			return {
				...h,
				data: {
					x: h.x - n,
					y: h.y - r,
					enabled: {
						[f]: a,
						[d]: o
					}
				}
			};
		}
	};
}, Ao = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = no(e, t), u = {
				x: n,
				y: r
			}, d = so(i), f = ao(d), p = u[f], m = u[d], h = no(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = ["top", "left"].includes(ro(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, jo = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = no(e, t), u = await xo(t, l), d = ro(i), f = io(i), p = so(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = Xa(h - u[g], v), x = Xa(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = q(u.left, 0), t = q(u.right, 0), n = q(u.top, 0), r = q(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : q(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : q(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.9/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Mo() {
	return typeof window < "u";
}
function No(e) {
	return Po(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Y(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function X(e) {
	return ((Po(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Po(e) {
	return Mo() ? e instanceof Node || e instanceof Y(e).Node : !1;
}
function Z(e) {
	return Mo() ? e instanceof Element || e instanceof Y(e).Element : !1;
}
function Fo(e) {
	return Mo() ? e instanceof HTMLElement || e instanceof Y(e).HTMLElement : !1;
}
function Io(e) {
	return !Mo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Y(e).ShadowRoot;
}
function Lo(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Q(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function Ro(e) {
	return [
		"table",
		"td",
		"th"
	].includes(No(e));
}
function zo(e) {
	return [":popover-open", ":modal"].some((t) => {
		try {
			return e.matches(t);
		} catch {
			return !1;
		}
	});
}
function Bo(e) {
	let t = Ho(), n = Z(e) ? Q(e) : e;
	return [
		"transform",
		"translate",
		"scale",
		"rotate",
		"perspective"
	].some((e) => n[e] ? n[e] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || [
		"transform",
		"translate",
		"scale",
		"rotate",
		"perspective",
		"filter"
	].some((e) => (n.willChange || "").includes(e)) || [
		"paint",
		"layout",
		"strict",
		"content"
	].some((e) => (n.contain || "").includes(e));
}
function Vo(e) {
	let t = Go(e);
	for (; Fo(t) && !Uo(t);) {
		if (Bo(t)) return t;
		if (zo(t)) return null;
		t = Go(t);
	}
	return null;
}
function Ho() {
	return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Uo(e) {
	return [
		"html",
		"body",
		"#document"
	].includes(No(e));
}
function Q(e) {
	return Y(e).getComputedStyle(e);
}
function Wo(e) {
	return Z(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Go(e) {
	if (No(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Io(e) && e.host || X(e);
	return Io(t) ? t.host : t;
}
function Ko(e) {
	let t = Go(e);
	return Uo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Fo(t) && Lo(t) ? t : Ko(t);
}
function qo(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Ko(e), i = r === e.ownerDocument?.body, a = Y(r);
	if (i) {
		let e = Jo(a);
		return t.concat(a, a.visualViewport || [], Lo(r) ? r : [], e && n ? qo(e) : []);
	}
	return t.concat(r, qo(r, [], n));
}
function Jo(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.6.13/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Yo(e) {
	let t = Q(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Fo(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Za(n) !== a || Za(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Xo(e) {
	return Z(e) ? e : e.contextElement;
}
function Zo(e) {
	let t = Xo(e);
	if (!Fo(t)) return J(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Yo(t), o = (a ? Za(n.width) : n.width) / r, s = (a ? Za(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Qo = /* @__PURE__ */ J(0);
function $o(e) {
	let t = Y(e);
	return !Ho() || !t.visualViewport ? Qo : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function es(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Y(e) ? !1 : t;
}
function ts(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Xo(e), o = J(1);
	t && (r ? Z(r) && (o = Zo(r)) : o = Zo(e));
	let s = es(a, n, r) ? $o(a) : J(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Y(a), t = r && Z(r) ? Y(r) : r, n = e, i = Jo(n);
		for (; i && r && t !== n;) {
			let e = Zo(i), t = i.getBoundingClientRect(), r = Q(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Y(i), i = Jo(n);
		}
	}
	return vo({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function ns(e, t) {
	let n = Wo(e).scrollLeft;
	return t ? t.left + n : ts(X(e)).left + n;
}
function rs(e, t, n) {
	n === void 0 && (n = !1);
	let r = e.getBoundingClientRect();
	return {
		x: r.left + t.scrollLeft - (n ? 0 : ns(e, r)),
		y: r.top + t.scrollTop
	};
}
function is(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = X(r), s = t ? zo(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = J(1), u = J(0), d = Fo(r);
	if ((d || !d && !a) && ((No(r) !== "body" || Lo(o)) && (c = Wo(r)), Fo(r))) {
		let e = ts(r);
		l = Zo(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? rs(o, c, !0) : J(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function as(e) {
	return Array.from(e.getClientRects());
}
function os(e) {
	let t = X(e), n = Wo(e), r = e.ownerDocument.body, i = q(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = q(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + ns(e), s = -n.scrollTop;
	return Q(r).direction === "rtl" && (o += q(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
function ss(e, t) {
	let n = Y(e), r = X(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Ho();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function cs(e, t) {
	let n = ts(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Fo(e) ? Zo(e) : J(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function ls(e, t, n) {
	let r;
	if (t === "viewport") r = ss(e, n);
	else if (t === "document") r = os(X(e));
	else if (Z(t)) r = cs(t, n);
	else {
		let n = $o(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return vo(r);
}
function us(e, t) {
	let n = Go(e);
	return n === t || !Z(n) || Uo(n) ? !1 : Q(n).position === "fixed" || us(n, t);
}
function ds(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = qo(e, [], !1).filter((e) => Z(e) && No(e) !== "body"), i = null, a = Q(e).position === "fixed", o = a ? Go(e) : e;
	for (; Z(o) && !Uo(o);) {
		let t = Q(o), n = Bo(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && ["absolute", "fixed"].includes(i.position) || Lo(o) && !n && us(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Go(o);
	}
	return t.set(e, r), r;
}
function fs(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? zo(t) ? [] : ds(t, this._c) : [].concat(n), r], o = a[0], s = a.reduce((e, n) => {
		let r = ls(t, n, i);
		return e.top = q(r.top, e.top), e.right = Xa(r.right, e.right), e.bottom = Xa(r.bottom, e.bottom), e.left = q(r.left, e.left), e;
	}, ls(t, o, i));
	return {
		width: s.right - s.left,
		height: s.bottom - s.top,
		x: s.left,
		y: s.top
	};
}
function ps(e) {
	let { width: t, height: n } = Yo(e);
	return {
		width: t,
		height: n
	};
}
function ms(e, t, n) {
	let r = Fo(t), i = X(t), a = n === "fixed", o = ts(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = J(0);
	if (r || !r && !a) if ((No(t) !== "body" || Lo(i)) && (s = Wo(t)), r) {
		let e = ts(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && (c.x = ns(i));
	let l = i && !r && !a ? rs(i, s) : J(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function hs(e) {
	return Q(e).position === "static";
}
function gs(e, t) {
	if (!Fo(e) || Q(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return X(e) === n && (n = n.ownerDocument.body), n;
}
function _s(e, t) {
	let n = Y(e);
	if (zo(e)) return n;
	if (!Fo(e)) {
		let t = Go(e);
		for (; t && !Uo(t);) {
			if (Z(t) && !hs(t)) return t;
			t = Go(t);
		}
		return n;
	}
	let r = gs(e, t);
	for (; r && Ro(r) && hs(r);) r = gs(r, t);
	return r && Uo(r) && hs(r) && !Bo(r) ? n : r || Vo(e) || n;
}
var vs = async function(e) {
	let t = this.getOffsetParent || _s, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: ms(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function ys(e) {
	return Q(e).direction === "rtl";
}
var bs = {
	convertOffsetParentRelativeRectToViewportRelativeRect: is,
	getDocumentElement: X,
	getClippingRect: fs,
	getOffsetParent: _s,
	getElementRects: vs,
	getClientRects: as,
	getDimensions: ps,
	getScale: Zo,
	isElement: Z,
	isRTL: ys
};
function xs(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ss(e, t) {
	let n = null, r, i = X(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Qa(d), h = Qa(i.clientWidth - (u + f)), g = Qa(i.clientHeight - (d + p)), _ = Qa(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: q(0, Xa(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !xs(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function Cs(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Xo(e), u = i || a ? [...l ? qo(l) : [], ...qo(t)] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Ss(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), p.observe(t));
	let m, h = c ? ts(e) : null;
	c && g();
	function g() {
		let t = ts(e);
		h && !xs(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var ws = Oo, Ts = ko, Es = Co, Ds = jo, Os = Eo, ks = So, As = Ao, js = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: bs,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return bo(e, t, {
		...i,
		platform: a
	});
}, $ = /* @__PURE__ */ Ue({
	Vue: () => e,
	Vue2: () => void 0,
	del: () => Fs,
	install: () => Ns,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => Ps
});
import * as Ms from "vue";
Ge($, Ms);
function Ns() {}
function Ps(e, t, n) {
	return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Fs(e, t) {
	if (Array.isArray(e)) {
		e.splice(t, 1);
		return;
	}
	delete e[t];
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+vue@1.1.6_vue@3.5.30_typescript@5.9.3_/node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs
function Is(e) {
	return typeof e == "object" && !!e && "$el" in e;
}
function Ls(e) {
	if (Is(e)) {
		let t = e.$el;
		return Po(t) && No(t) === "#comment" ? null : t;
	}
	return e;
}
function Rs(e) {
	return typeof e == "function" ? e() : (0, $.unref)(e);
}
function zs(e) {
	return {
		name: "arrow",
		options: e,
		fn(t) {
			let n = Ls(Rs(e.element));
			return n == null ? {} : ks({
				element: n,
				padding: e.padding
			}).fn(t);
		}
	};
}
function Bs(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vs(e, t) {
	let n = Bs(e);
	return Math.round(t * n) / n;
}
function Hs(e, t, n) {
	n === void 0 && (n = {});
	let r = n.whileElementsMounted, i = (0, $.computed)(() => Rs(n.open) ?? !0), a = (0, $.computed)(() => Rs(n.middleware)), o = (0, $.computed)(() => Rs(n.placement) ?? "bottom"), s = (0, $.computed)(() => Rs(n.strategy) ?? "absolute"), c = (0, $.computed)(() => Rs(n.transform) ?? !0), l = (0, $.computed)(() => Ls(e.value)), u = (0, $.computed)(() => Ls(t.value)), d = (0, $.ref)(0), f = (0, $.ref)(0), p = (0, $.ref)(s.value), m = (0, $.ref)(o.value), h = (0, $.shallowRef)({}), g = (0, $.ref)(!1), _ = (0, $.computed)(() => {
		let e = {
			position: p.value,
			left: "0",
			top: "0"
		};
		if (!u.value) return e;
		let t = Vs(u.value, d.value), n = Vs(u.value, f.value);
		return c.value ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Bs(u.value) >= 1.5 && { willChange: "transform" }
		} : {
			position: p.value,
			left: t + "px",
			top: n + "px"
		};
	}), v;
	function y() {
		if (l.value == null || u.value == null) return;
		let e = i.value;
		js(l.value, u.value, {
			middleware: a.value,
			placement: o.value,
			strategy: s.value
		}).then((t) => {
			d.value = t.x, f.value = t.y, p.value = t.strategy, m.value = t.placement, h.value = t.middlewareData, g.value = e !== !1;
		});
	}
	function b() {
		typeof v == "function" && (v(), v = void 0);
	}
	function x() {
		if (b(), r === void 0) {
			y();
			return;
		}
		if (l.value != null && u.value != null) {
			v = r(l.value, u.value, y);
			return;
		}
	}
	function S() {
		i.value || (g.value = !1);
	}
	return (0, $.watch)([
		a,
		o,
		s,
		i
	], y, { flush: "sync" }), (0, $.watch)([l, u], x, { flush: "sync" }), (0, $.watch)(i, S, { flush: "sync" }), (0, $.getCurrentScope)() && (0, $.onScopeDispose)(b), {
		x: (0, $.shallowReadonly)(d),
		y: (0, $.shallowReadonly)(f),
		strategy: (0, $.shallowReadonly)(p),
		placement: (0, $.shallowReadonly)(m),
		middlewareData: (0, $.shallowReadonly)(h),
		isPositioned: (0, $.shallowReadonly)(g),
		floatingStyles: _,
		update: y
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/Popper/PopperContent.js
var Us = {
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
}, [Ws, Gs] = V("PopperContent"), Ks = /* @__PURE__ */ h({
	inheritAttrs: !1,
	__name: "PopperContent",
	props: /* @__PURE__ */ C({
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
	}, { ...Us }),
	emits: ["placed"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = za(), { forwardRef: a, currentElement: o } = U(), c = M(), l = M(), { width: d, height: f } = Ai(l), m = s(() => n.side + (n.align === "center" ? "" : `-${n.align}`)), h = s(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			...n.collisionPadding
		}), g = s(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), _ = s(() => ({
			padding: h.value,
			boundary: g.value.filter(Ka),
			altBoundary: g.value.length > 0
		})), v = s(() => ({
			mainAxis: n.sideFlip,
			crossAxis: n.alignFlip
		})), y = Ee(() => [
			ws({
				mainAxis: n.sideOffset + f.value,
				alignmentAxis: n.alignOffset
			}),
			n.prioritizePosition && n.avoidCollisions && Es({
				..._.value,
				...v.value
			}),
			n.avoidCollisions && Ts({
				mainAxis: !0,
				crossAxis: !!n.prioritizePosition,
				limiter: n.sticky === "partial" ? As() : void 0,
				..._.value
			}),
			!n.prioritizePosition && n.avoidCollisions && Es({
				..._.value,
				...v.value
			}),
			Ds({
				..._.value,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--reka-popper-available-width", `${n}px`), o.setProperty("--reka-popper-available-height", `${r}px`), o.setProperty("--reka-popper-anchor-width", `${i}px`), o.setProperty("--reka-popper-anchor-height", `${a}px`);
				}
			}),
			l.value && zs({
				element: l.value,
				padding: n.arrowPadding
			}),
			qa({
				arrowWidth: d.value,
				arrowHeight: f.value
			}),
			n.hideWhenDetached && Os({
				strategy: "referenceHidden",
				..._.value
			})
		]), { floatingStyles: b, placement: x, isPositioned: S, middlewareData: C, update: w } = Hs(s(() => n.reference ?? i.anchor.value), c, {
			strategy: n.positionStrategy,
			placement: m,
			whileElementsMounted: (...e) => Cs(...e, {
				layoutShift: !n.disableUpdateOnLayoutShift,
				animationFrame: n.updatePositionStrategy === "always"
			}),
			middleware: y
		}), E = s(() => Ja(x.value)[0]), D = s(() => Ja(x.value)[1]);
		Se(() => {
			S.value && r("placed");
		});
		let O = s(() => {
			let e = C.value.arrow?.centerOffset !== 0;
			return n.hideShiftedArrow && e;
		}), k = M("");
		return L(() => {
			o.value && (k.value = window.getComputedStyle(o.value).zIndex);
		}), Gs({
			placedSide: E,
			onArrowChange: (e) => l.value = e,
			arrowX: s(() => C.value.arrow?.x ?? 0),
			arrowY: s(() => C.value.arrow?.y ?? 0),
			shouldHideArrow: O
		}), (e, t) => (j(), u("div", {
			ref_key: "floatingRef",
			ref: c,
			"data-reka-popper-content-wrapper": "",
			style: ee({
				...F(b),
				transform: F(S) ? F(b).transform : "translate(0, -200%)",
				minWidth: "max-content",
				zIndex: k.value,
				"--reka-popper-transform-origin": [F(C).transformOrigin?.x, F(C).transformOrigin?.y].join(" "),
				...F(C).hide?.referenceHidden && {
					visibility: "hidden",
					pointerEvents: "none"
				}
			})
		}, [p(F(W), T({ ref: F(a) }, e.$attrs, {
			"as-child": n.asChild,
			as: e.as,
			"data-side": E.value,
			"data-align": D.value,
			style: { animation: F(S) ? void 0 : "none" }
		}), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16, [
			"as-child",
			"as",
			"data-side",
			"data-align",
			"style"
		])], 4));
	}
}), qs = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, Js = /* @__PURE__ */ h({
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
		let { forwardRef: t } = U(), n = Ws(), r = s(() => qs[n.placedSide.value]);
		return (e, i) => (j(), u("span", {
			ref: (e) => {
				F(n).onArrowChange(e);
			},
			style: ee({
				position: "absolute",
				left: F(n).arrowX?.value ? `${F(n).arrowX?.value}px` : void 0,
				top: F(n).arrowY?.value ? `${F(n).arrowY?.value}px` : void 0,
				[r.value]: 0,
				transformOrigin: {
					top: "",
					right: "0 0",
					bottom: "center 0",
					left: "100% 0"
				}[F(n).placedSide.value],
				transform: {
					top: "translateY(100%)",
					right: "translateY(50%) rotate(90deg) translateX(-50%)",
					bottom: "rotate(180deg)",
					left: "translateY(50%) rotate(-90deg) translateX(50%)"
				}[F(n).placedSide.value],
				visibility: F(n).shouldHideArrow.value ? "hidden" : void 0
			})
		}, [p(Ga, T(e.$attrs, {
			ref: F(t),
			style: { display: "block" },
			as: e.as,
			"as-child": e.asChild,
			rounded: e.rounded,
			width: e.width,
			height: e.height
		}), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"rounded",
			"width",
			"height"
		])], 4));
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/shared/useNonce.js
function Ys(e) {
	let t = Rr({ nonce: M() });
	return s(() => e?.value || t.nonce?.value);
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/RovingFocus/RovingFocusGroup.js
var [Xs, Zs] = V("RovingFocusGroup"), Qs = /* @__PURE__ */ h({
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
		let t = e, n = Xs(), r = ki(), i = s(() => t.tabStopId || r), a = s(() => n.currentTabStopId.value === i.value), { getItems: o, CollectionItem: l } = Aa();
		A(() => {
			t.focusable && n.onFocusableItemAdd();
		}), ne(() => {
			t.focusable && n.onFocusableItemRemove();
		});
		function u(e) {
			if (e.key === "Tab" && e.shiftKey) {
				n.onItemShiftTab();
				return;
			}
			if (e.target !== e.currentTarget) return;
			let r = Ia(e, n.orientation.value, n.dir.value);
			if (r !== void 0) {
				if (e.metaKey || e.ctrlKey || e.altKey || !t.allowShiftKey && e.shiftKey) return;
				e.preventDefault();
				let i = [...o().map((e) => e.ref).filter((e) => e.dataset.disabled !== "")];
				if (r === "last") i.reverse();
				else if (r === "prev" || r === "next") {
					r === "prev" && i.reverse();
					let t = i.indexOf(e.currentTarget);
					i = n.loop.value ? Ra(i, t + 1) : i.slice(t + 1);
				}
				E(() => La(i));
			}
		}
		return (e, t) => (j(), c(F(l), null, {
			default: R(() => [p(F(W), {
				tabindex: a.value ? 0 : -1,
				"data-orientation": F(n).orientation.value,
				"data-active": e.active ? "" : void 0,
				"data-disabled": e.focusable ? void 0 : "",
				as: e.as,
				"as-child": e.asChild,
				onMousedown: t[0] ||= (t) => {
					e.focusable ? F(n).onItemFocus(i.value) : t.preventDefault();
				},
				onFocus: t[1] ||= (e) => F(n).onItemFocus(i.value),
				onKeydown: u
			}, {
				default: R(() => [N(e.$slots, "default")]),
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
}), [$s, ec] = V("CheckboxGroupRoot");
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/Checkbox/utils.js
function tc(e) {
	return e === "indeterminate";
}
function nc(e) {
	return tc(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/Checkbox/CheckboxRoot.js
var [rc, ic] = V("CheckboxRoot"), ac = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, r = t, { forwardRef: i, currentElement: a } = U(), o = $s(null), u = Re(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? n.falseValue,
			passive: n.modelValue === void 0
		}), d = s(() => o?.disabled.value || n.disabled), f = s(() => Mr(u.value, n.trueValue)), p = s(() => Fr(o?.modelValue.value) ? u.value === "indeterminate" ? "indeterminate" : f.value : Ir(o.modelValue.value, n.value));
		function m() {
			if (Fr(o?.modelValue.value)) u.value === "indeterminate" ? u.value = n.trueValue : u.value = f.value ? n.falseValue : n.trueValue;
			else {
				let e = [...o.modelValue.value || []];
				if (Ir(e, n.value)) {
					let t = e.findIndex((e) => Mr(e, n.value));
					e.splice(t, 1);
				} else e.push(n.value);
				o.modelValue.value = e;
			}
		}
		let h = ci(a), g = s(() => n.id && a.value ? document.querySelector(`[for="${n.id}"]`)?.innerText : void 0);
		return ic({
			disabled: d,
			state: p
		}), (e, t) => (j(), c(se(F(o)?.rovingFocus.value ? F(Qs) : F(W)), T(e.$attrs, {
			id: e.id,
			ref: F(i),
			role: "checkbox",
			"as-child": e.asChild,
			as: e.as,
			type: e.as === "button" ? "button" : void 0,
			"aria-checked": F(tc)(p.value) ? "mixed" : p.value,
			"aria-required": e.required,
			"aria-label": e.$attrs["aria-label"] || g.value,
			"data-state": F(nc)(p.value),
			"data-disabled": d.value ? "" : void 0,
			disabled: d.value,
			focusable: F(o)?.rovingFocus.value ? !d.value : void 0,
			onKeydown: we(Te(() => {}, ["prevent"]), ["enter"]),
			onClick: m
		}), {
			default: R(() => [N(e.$slots, "default", {
				modelValue: F(u),
				state: p.value
			}), F(h) && e.name && !F(o) ? (j(), c(F(Na), {
				key: 0,
				type: "checkbox",
				checked: !!p.value,
				name: e.name,
				value: e.value,
				disabled: d.value,
				required: e.required
			}, null, 8, [
				"checked",
				"name",
				"value",
				"disabled",
				"required"
			])) : l("v-if", !0)]),
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
}), oc = /* @__PURE__ */ h({
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
		let { forwardRef: t } = U(), n = rc();
		return (e, r) => (j(), c(F(Li), { present: e.forceMount || F(tc)(F(n).state.value) || F(n).state.value === !0 }, {
			default: R(() => [p(F(W), T({
				ref: F(t),
				"data-state": F(nc)(F(n).state.value),
				"data-disabled": F(n).disabled.value ? "" : void 0,
				style: { pointerEvents: "none" },
				"as-child": e.asChild,
				as: e.as
			}, e.$attrs), {
				default: R(() => [N(e.$slots, "default")]),
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
}), sc = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], cc = [" ", "Enter"];
function lc(e, t, n) {
	return e === void 0 ? !1 : Array.isArray(e) ? e.some((e) => uc(e, t, n)) : uc(e, t, n);
}
function uc(e, t, n) {
	return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? e?.[n] === t?.[n] : Mr(e, t);
}
function dc(e) {
	return e == null || e === "" || Array.isArray(e) && e.length === 0;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.2_vue@3.5.30_typescript@5.9.3_/node_modules/reka-ui/dist/Select/SelectRoot.js
var fc = {
	key: 0,
	value: ""
}, [pc, mc] = V("SelectRoot"), hc = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let r = e, i = t, { required: a, disabled: o, multiple: d, dir: f } = me(r), p = Re(r, "modelValue", i, {
			defaultValue: r.defaultValue ?? (d.value ? [] : void 0),
			passive: r.modelValue === void 0,
			deep: !0
		}), m = Re(r, "open", i, {
			defaultValue: r.defaultOpen,
			passive: r.open === void 0
		}), h = M(), g = M(), _ = M({
			x: 0,
			y: 0
		}), v = s(() => d.value && Array.isArray(p.value) ? p.value?.length === 0 : Fr(p.value));
		Aa({ isProvider: !0 });
		let y = ri(f), b = ci(h), x = M(/* @__PURE__ */ new Set()), S = s(() => Array.from(x.value).map((e) => e.value).join(";"));
		function C(e) {
			if (d.value) {
				let t = Array.isArray(p.value) ? [...p.value] : [], n = t.findIndex((t) => uc(t, e, r.by));
				n === -1 ? t.push(e) : t.splice(n, 1), p.value = [...t];
			} else p.value = e;
		}
		function w(e) {
			return Array.from(x.value).find((t) => lc(e, t.value, r.by));
		}
		return mc({
			triggerElement: h,
			onTriggerChange: (e) => {
				h.value = e;
			},
			valueElement: g,
			onValueElementChange: (e) => {
				g.value = e;
			},
			contentId: "",
			modelValue: p,
			onValueChange: C,
			by: r.by,
			open: m,
			multiple: d,
			required: a,
			onOpenChange: (e) => {
				m.value = e;
			},
			dir: y,
			triggerPointerDownPosRef: _,
			disabled: o,
			isEmptyModelValue: v,
			optionsSet: x,
			onOptionAdd: (e) => {
				let t = w(e.value);
				t && x.value.delete(t), x.value.add(e);
			},
			onOptionRemove: (e) => {
				let t = w(e.value);
				t && x.value.delete(t);
			}
		}), (e, t) => (j(), c(F(Va), null, {
			default: R(() => [N(e.$slots, "default", {
				modelValue: F(p),
				open: F(m)
			}), F(b) ? (j(), c(gc, {
				key: S.value,
				"aria-hidden": "true",
				tabindex: "-1",
				multiple: F(d),
				required: F(a),
				name: e.name,
				autocomplete: e.autocomplete,
				disabled: F(o),
				value: F(p)
			}, {
				default: R(() => [F(Fr)(F(p)) ? (j(), u("option", fc)) : l("v-if", !0), (j(!0), u(n, null, oe(Array.from(x.value), (e) => (j(), u("option", T({ key: e.value ?? "" }, { ref_for: !0 }, e), null, 16))), 128))]),
				_: 1
			}, 8, [
				"multiple",
				"required",
				"name",
				"autocomplete",
				"disabled",
				"value"
			])) : l("v-if", !0)]),
			_: 3
		}));
	}
}), gc = /* @__PURE__ */ h({
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
		let t = e, n = M(), r = pc();
		I(() => t.value, (e, t) => {
			let r = window.HTMLSelectElement.prototype, i = Object.getOwnPropertyDescriptor(r, "value").set;
			if (e !== t && i && n.value) {
				let t = new Event("change", { bubbles: !0 });
				i.call(n.value, e), n.value.dispatchEvent(t);
			}
		});
		function i(e) {
			r.onValueChange(e.target.value);
		}
		return (e, r) => (j(), c(F(ja), { "as-child": "" }, {
			default: R(() => [d("select", T({
				ref_key: "selectElement",
				ref: n
			}, t, { onInput: i }), [N(e.$slots, "default")], 16)]),
			_: 3
		}));
	}
}), _c = /* @__PURE__ */ h({
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
			default: 10
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
		let t = li(e);
		return (e, n) => (j(), c(F(Ks), T(F(t), { style: {
			boxSizing: "border-box",
			"--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
			"--reka-select-content-available-width": "var(--reka-popper-available-width)",
			"--reka-select-content-available-height": "var(--reka-popper-available-height)",
			"--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
			"--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
		} }), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), vc = {
	onViewportChange: () => {},
	itemTextRefCallback: () => {},
	itemRefCallback: () => {}
}, [yc, bc] = V("SelectContent"), xc = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, r = t, i = pc();
		oi(), ei(n.bodyLock);
		let { CollectionSlot: a, getItems: o } = Aa(), l = M();
		Di(l);
		let { search: u, handleTypeaheadSearch: d } = Mi(), f = M(), m = M(), h = M(), g = M(!1), _ = M(!1), v = M(!1);
		function y() {
			m.value && l.value && ma([m.value, l.value]);
		}
		I(g, () => {
			y();
		});
		let { onOpenChange: b, triggerPointerDownPosRef: x } = i;
		L((e) => {
			if (!l.value) return;
			let t = {
				x: 0,
				y: 0
			}, n = (e) => {
				t = {
					x: Math.abs(Math.round(e.pageX) - (x.value?.x ?? 0)),
					y: Math.abs(Math.round(e.pageY) - (x.value?.y ?? 0))
				};
			}, r = (e) => {
				e.pointerType !== "touch" && (t.x <= 10 && t.y <= 10 ? e.preventDefault() : l.value?.contains(e.target) || b(!1), document.removeEventListener("pointermove", n), x.value = null);
			};
			x.value !== null && (document.addEventListener("pointermove", n), document.addEventListener("pointerup", r, {
				capture: !0,
				once: !0
			})), e(() => {
				document.removeEventListener("pointermove", n), document.removeEventListener("pointerup", r, { capture: !0 });
			});
		});
		function S(e) {
			let t = e.ctrlKey || e.altKey || e.metaKey;
			if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && d(e.key, o()), [
				"ArrowUp",
				"ArrowDown",
				"Home",
				"End"
			].includes(e.key)) {
				let t = [...o().map((e) => e.ref)];
				if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
					let n = e.target, r = t.indexOf(n);
					t = t.slice(r + 1);
				}
				setTimeout(() => ma(t)), e.preventDefault();
			}
		}
		let C = li(s(() => n.position === "popper" ? n : {}).value);
		return bc({
			content: l,
			viewport: f,
			onViewportChange: (e) => {
				f.value = e;
			},
			itemRefCallback: (e, t, n) => {
				let r = !_.value && !n, a = lc(i.modelValue.value, t, i.by);
				if (i.multiple.value) {
					if (v.value) return;
					(a || r) && (m.value = e, a && (v.value = !0));
				} else (a || r) && (m.value = e);
				r && (_.value = !0);
			},
			selectedItem: m,
			selectedItemText: h,
			onItemLeave: () => {
				l.value?.focus();
			},
			itemTextRefCallback: (e, t, n) => {
				let r = !_.value && !n;
				(lc(i.modelValue.value, t, i.by) || r) && (h.value = e);
			},
			focusSelectedItem: y,
			position: n.position,
			isPositioned: g,
			searchRef: u
		}), (e, t) => (j(), c(F(a), null, {
			default: R(() => [p(F(la), {
				"as-child": "",
				onMountAutoFocus: t[6] ||= Te(() => {}, ["prevent"]),
				onUnmountAutoFocus: t[7] ||= (e) => {
					r("closeAutoFocus", e), !e.defaultPrevented && (F(i).triggerElement.value?.focus({ preventScroll: !0 }), e.preventDefault());
				}
			}, {
				default: R(() => [p(F(Yi), {
					"as-child": "",
					"disable-outside-pointer-events": e.disableOutsidePointerEvents,
					onFocusOutside: t[2] ||= Te(() => {}, ["prevent"]),
					onDismiss: t[3] ||= (e) => F(i).onOpenChange(!1),
					onEscapeKeyDown: t[4] ||= (e) => r("escapeKeyDown", e),
					onPointerDownOutside: t[5] ||= (e) => r("pointerDownOutside", e)
				}, {
					default: R(() => [(j(), c(se(e.position === "popper" ? _c : wc), T({
						...e.$attrs,
						...F(C)
					}, {
						id: F(i).contentId,
						ref: (e) => {
							let t = F(je)(e);
							t?.hasAttribute("data-reka-popper-content-wrapper") ? l.value = t.firstElementChild : l.value = t;
						},
						role: "listbox",
						"data-state": F(i).open.value ? "open" : "closed",
						dir: F(i).dir.value,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none"
						},
						onContextmenu: t[0] ||= Te(() => {}, ["prevent"]),
						onPlaced: t[1] ||= (e) => g.value = !0,
						onKeydown: S
					}), {
						default: R(() => [N(e.$slots, "default")]),
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
}), [Sc, Cc] = V("SelectItemAlignedPosition"), wc = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, r = t, { getItems: i } = Aa(), a = pc(), o = yc(), s = M(!1), c = M(!0), l = M(), { forwardRef: d, currentElement: f } = U(), { viewport: m, selectedItem: h, selectedItemText: g, focusSelectedItem: _ } = o;
		function v() {
			if (a.triggerElement.value && a.valueElement.value && l.value && f.value && m?.value && h?.value && g?.value) {
				let e = a.triggerElement.value.getBoundingClientRect(), t = f.value.getBoundingClientRect(), n = a.valueElement.value.getBoundingClientRect(), o = g.value.getBoundingClientRect();
				if (a.dir.value !== "rtl") {
					let r = o.left - t.left, i = n.left - r, a = e.left - i, s = e.width + a, c = Math.max(s, t.width), u = window.innerWidth - 10, d = Nr(i, 10, Math.max(10, u - c));
					l.value.style.minWidth = `${s}px`, l.value.style.left = `${d}px`;
				} else {
					let r = t.right - o.right, i = window.innerWidth - n.right - r, a = window.innerWidth - e.right - i, s = e.width + a, c = Math.max(s, t.width), u = window.innerWidth - 10, d = Nr(i, 10, Math.max(10, u - c));
					l.value.style.minWidth = `${s}px`, l.value.style.right = `${d}px`;
				}
				let c = i().map((e) => e.ref), u = window.innerHeight - 20, d = m.value.scrollHeight, p = window.getComputedStyle(f.value), _ = Number.parseInt(p.borderTopWidth, 10), v = Number.parseInt(p.paddingTop, 10), y = Number.parseInt(p.borderBottomWidth, 10), b = Number.parseInt(p.paddingBottom, 10), x = _ + v + d + b + y, S = Math.min(h.value.offsetHeight * 5, x), C = window.getComputedStyle(m.value), w = Number.parseInt(C.paddingTop, 10), T = Number.parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - 10, D = u - E, O = h.value.offsetHeight / 2, ee = h.value.offsetTop + O, k = _ + v + ee, A = x - k;
				if (k <= E) {
					let e = h.value === c[c.length - 1];
					l.value.style.bottom = "0px";
					let t = f.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, n = k + Math.max(D, O + (e ? T : 0) + t + y);
					l.value.style.height = `${n}px`;
				} else {
					let e = h.value === c[0];
					l.value.style.top = "0px";
					let t = Math.max(E, _ + m.value.offsetTop + (e ? w : 0) + O) + A;
					l.value.style.height = `${t}px`, m.value.scrollTop = k - E + m.value.offsetTop;
				}
				l.value.style.margin = "10px 0", l.value.style.minHeight = `${S}px`, l.value.style.maxHeight = `${u}px`, r("placed"), requestAnimationFrame(() => s.value = !0);
			}
		}
		let y = M("");
		A(async () => {
			await E(), v(), f.value && (y.value = window.getComputedStyle(f.value).zIndex);
		});
		function b(e) {
			e && c.value === !0 && (v(), _?.(), c.value = !1);
		}
		return Fe(a.triggerElement, () => {
			v();
		}), Cc({
			contentWrapper: l,
			shouldExpandOnScrollRef: s,
			onScrollButtonChange: b
		}), (e, t) => (j(), u("div", {
			ref_key: "contentWrapperElement",
			ref: l,
			style: ee({
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: y.value
			})
		}, [p(F(W), T({
			ref: F(d),
			style: {
				boxSizing: "border-box",
				maxHeight: "100%"
			}
		}, {
			...e.$attrs,
			...n
		}), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16)], 4));
	}
}), Tc = /* @__PURE__ */ h({
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
		let t = e, n = yc(vc);
		return (e, r) => F(n).position === "popper" ? (j(), c(F(Js), O(T({ key: 0 }, t)), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16)) : l("v-if", !0);
	}
}), Ec = /* @__PURE__ */ h({
	inheritAttrs: !1,
	__name: "SelectProvider",
	props: { context: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return mc(e.context), bc(vc), (e, t) => N(e.$slots, "default");
	}
}), Dc = { key: 1 }, Oc = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, i = ui(n, t), a = pc(), o = M();
		A(() => {
			o.value = new DocumentFragment();
		});
		let d = M(), f = s(() => n.forceMount || a.open.value), m = M(f.value);
		return I(f, () => {
			setTimeout(() => m.value = f.value);
		}), (e, t) => f.value || m.value || d.value?.present ? (j(), c(F(Li), {
			key: 0,
			ref_key: "presenceRef",
			ref: d,
			present: f.value
		}, {
			default: R(() => [p(xc, O(v({
				...F(i),
				...e.$attrs
			})), {
				default: R(() => [N(e.$slots, "default")]),
				_: 3
			}, 16)]),
			_: 3
		}, 8, ["present"])) : o.value ? (j(), u("div", Dc, [(j(), c(r, { to: o.value }, [p(Ec, { context: F(a) }, {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 8, ["context"])], 8, ["to"]))])) : l("v-if", !0);
	}
}), kc = /* @__PURE__ */ h({
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
		return (e, t) => (j(), c(F(W), {
			"aria-hidden": "true",
			as: e.as,
			"as-child": e.asChild
		}, {
			default: R(() => [N(e.$slots, "default", {}, () => [t[0] ||= f("▼")])]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
}), [Ac, jc] = V("SelectItem"), Mc = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, r = t, { disabled: i } = me(n), a = pc(), o = yc(), { forwardRef: l, currentElement: u } = U(), { CollectionItem: d } = Aa(), f = s(() => lc(a.modelValue?.value, n.value, a.by)), m = M(!1), h = M(n.textValue ?? ""), g = ki(void 0, "reka-select-item-text");
		async function _(e) {
			e.defaultPrevented || Pr("select.select", v, {
				originalEvent: e,
				value: n.value
			});
		}
		async function v(e) {
			await E(), r("select", e), !e.defaultPrevented && (i.value || (a.onValueChange(n.value), a.multiple.value || a.onOpenChange(!1)));
		}
		async function y(e) {
			await E(), !e.defaultPrevented && (i.value ? o.onItemLeave?.() : e.currentTarget?.focus({ preventScroll: !0 }));
		}
		async function b(e) {
			await E(), !e.defaultPrevented && e.currentTarget === H() && o.onItemLeave?.();
		}
		async function x(e) {
			await E(), !e.defaultPrevented && (o.searchRef?.value !== "" && e.key === " " || (cc.includes(e.key) && _(e), e.key === " " && e.preventDefault()));
		}
		if (n.value === "") throw Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
		return A(() => {
			u.value && o.itemRefCallback(u.value, n.value, n.disabled);
		}), jc({
			value: n.value,
			disabled: i,
			textId: g,
			isSelected: f,
			onItemTextChange: (e) => {
				h.value = ((h.value || e?.textContent) ?? "").trim();
			}
		}), (e, t) => (j(), c(F(d), { value: { textValue: h.value } }, {
			default: R(() => [p(F(W), {
				ref: F(l),
				role: "option",
				"aria-labelledby": F(g),
				"data-highlighted": m.value ? "" : void 0,
				"aria-selected": f.value,
				"data-state": f.value ? "checked" : "unchecked",
				"aria-disabled": F(i) || void 0,
				"data-disabled": F(i) ? "" : void 0,
				tabindex: F(i) ? void 0 : -1,
				as: e.as,
				"as-child": e.asChild,
				onFocus: t[0] ||= (e) => m.value = !0,
				onBlur: t[1] ||= (e) => m.value = !1,
				onPointerup: _,
				onPointerdown: t[2] ||= (e) => {
					e.currentTarget.focus({ preventScroll: !0 });
				},
				onTouchend: t[3] ||= Te(() => {}, ["prevent", "stop"]),
				onPointermove: y,
				onPointerleave: b,
				onKeydown: x
			}, {
				default: R(() => [N(e.$slots, "default")]),
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
}), Nc = /* @__PURE__ */ h({
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
		let t = e, n = Ac();
		return (e, r) => F(n).isSelected.value ? (j(), c(F(W), T({
			key: 0,
			"aria-hidden": "true"
		}, t), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16)) : l("v-if", !0);
	}
}), Pc = /* @__PURE__ */ h({
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
		let t = e, n = pc(), r = yc(), i = Ac(), { forwardRef: a, currentElement: o } = U(), l = s(() => ({
			value: i.value,
			disabled: i.disabled.value,
			textContent: o.value?.textContent ?? i.value?.toString() ?? ""
		}));
		return A(() => {
			o.value && (i.onItemTextChange(o.value), r.itemTextRefCallback(o.value, i.value, i.disabled.value), n.onOptionAdd(l.value));
		}), ne(() => {
			n.onOptionRemove(l.value);
		}), (e, n) => (j(), c(F(W), T({
			id: F(i).textId,
			ref: F(a)
		}, {
			...t,
			...e.$attrs
		}), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), Fc = /* @__PURE__ */ h({
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
		let t = e;
		return (e, n) => (j(), c(F(Ta), O(v(t)), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Ic = /* @__PURE__ */ h({
	__name: "SelectScrollButtonImpl",
	emits: ["autoScroll"],
	setup(e, { emit: t }) {
		let n = t, { getItems: r } = Aa(), i = yc(), a = M(null);
		function o() {
			a.value !== null && (window.clearInterval(a.value), a.value = null);
		}
		L(() => {
			r().map((e) => e.ref).find((e) => e === H())?.scrollIntoView({ block: "nearest" });
		});
		function s() {
			a.value === null && (a.value = window.setInterval(() => {
				n("autoScroll");
			}, 50));
		}
		function l() {
			i.onItemLeave?.(), a.value === null && (a.value = window.setInterval(() => {
				n("autoScroll");
			}, 50));
		}
		return k(() => o()), (e, t) => (j(), c(F(W), T({
			"aria-hidden": "true",
			style: { flexShrink: 0 }
		}, e.$parent?.$props, {
			onPointerdown: s,
			onPointermove: l,
			onPointerleave: t[0] ||= () => {
				o();
			}
		}), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Lc = /* @__PURE__ */ h({
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
		let t = yc(), n = t.position === "item-aligned" ? Sc() : void 0, { forwardRef: r, currentElement: i } = U(), a = M(!1);
		return L((e) => {
			if (t.viewport?.value && t.isPositioned?.value) {
				let n = t.viewport.value;
				function r() {
					let e = n.scrollHeight - n.clientHeight;
					a.value = Math.ceil(n.scrollTop) < e;
				}
				r(), n.addEventListener("scroll", r), e(() => n.removeEventListener("scroll", r));
			}
		}), I(i, () => {
			i.value && n?.onScrollButtonChange(i.value);
		}), (e, n) => a.value ? (j(), c(Ic, {
			key: 0,
			ref: F(r),
			onAutoScroll: n[0] ||= () => {
				let { viewport: e, selectedItem: n } = F(t);
				e?.value && n?.value && (e.value.scrollTop = e.value.scrollTop + n.value.offsetHeight);
			}
		}, {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 512)) : l("v-if", !0);
	}
}), Rc = /* @__PURE__ */ h({
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
		let t = yc(), n = t.position === "item-aligned" ? Sc() : void 0, { forwardRef: r, currentElement: i } = U(), a = M(!1);
		return L((e) => {
			if (t.viewport?.value && t.isPositioned?.value) {
				let n = t.viewport.value;
				function r() {
					a.value = n.scrollTop > 0;
				}
				r(), n.addEventListener("scroll", r), e(() => n.removeEventListener("scroll", r));
			}
		}), I(i, () => {
			i.value && n?.onScrollButtonChange(i.value);
		}), (e, n) => a.value ? (j(), c(Ic, {
			key: 0,
			ref: F(r),
			onAutoScroll: n[0] ||= () => {
				let { viewport: e, selectedItem: n } = F(t);
				e?.value && n?.value && (e.value.scrollTop = e.value.scrollTop - n.value.offsetHeight);
			}
		}, {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 512)) : l("v-if", !0);
	}
}), zc = /* @__PURE__ */ h({
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
		let t = e, n = pc(), { forwardRef: r, currentElement: i } = U(), a = s(() => n.disabled?.value || t.disabled);
		n.contentId ||= ki(void 0, "reka-select-content"), A(() => {
			n.onTriggerChange(i.value);
		});
		let { getItems: o } = Aa(), { search: l, handleTypeaheadSearch: u, resetTypeahead: d } = Mi();
		function f() {
			a.value || (n.onOpenChange(!0), d());
		}
		function m(e) {
			f(), n.triggerPointerDownPosRef.value = {
				x: Math.round(e.pageX),
				y: Math.round(e.pageY)
			};
		}
		return (e, t) => (j(), c(F(Ha), {
			"as-child": "",
			reference: e.reference
		}, {
			default: R(() => [p(F(W), {
				ref: F(r),
				role: "combobox",
				type: e.as === "button" ? "button" : void 0,
				"aria-controls": F(n).contentId,
				"aria-expanded": F(n).open.value || !1,
				"aria-required": F(n).required?.value,
				"aria-autocomplete": "none",
				disabled: a.value,
				dir: F(n)?.dir.value,
				"data-state": F(n)?.open.value ? "open" : "closed",
				"data-disabled": a.value ? "" : void 0,
				"data-placeholder": F(dc)(F(n).modelValue?.value) ? "" : void 0,
				"as-child": e.asChild,
				as: e.as,
				onClick: t[0] ||= (e) => {
					(e?.currentTarget)?.focus();
				},
				onPointerdown: t[1] ||= (e) => {
					if (e.pointerType === "touch") return e.preventDefault();
					let t = e.target;
					t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && (m(e), e.preventDefault());
				},
				onPointerup: t[2] ||= Te((e) => {
					e.pointerType === "touch" && m(e);
				}, ["prevent"]),
				onKeydown: t[3] ||= (e) => {
					let t = F(l) !== "";
					!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && t && e.key === " " || (F(u)(e.key, F(o)()), F(sc).includes(e.key) && (f(), e.preventDefault()));
				}
			}, {
				default: R(() => [N(e.$slots, "default")]),
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
}), Bc = /* @__PURE__ */ h({
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
		let t = e, { forwardRef: n, currentElement: r } = U(), i = pc();
		A(() => {
			i.valueElement = r;
		});
		let a = s(() => {
			let e = [], t = Array.from(i.optionsSet.value), n = (e) => t.find((t) => lc(e, t.value, i.by));
			return e = Array.isArray(i.modelValue.value) ? i.modelValue.value.map((e) => n(e)?.textContent ?? "") : [n(i.modelValue.value)?.textContent ?? ""], e.filter(Boolean);
		}), o = s(() => a.value.length ? a.value.join(", ") : t.placeholder);
		return (e, r) => (j(), c(F(W), {
			ref: F(n),
			as: e.as,
			"as-child": e.asChild,
			style: { pointerEvents: "none" },
			"data-placeholder": a.value.length ? void 0 : t.placeholder
		}, {
			default: R(() => [N(e.$slots, "default", {
				selectedLabel: a.value,
				modelValue: F(i).modelValue.value
			}, () => [f(ue(o.value), 1)])]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-placeholder"
		]));
	}
}), Vc = /* @__PURE__ */ h({
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
		let t = e, { nonce: r } = me(t), i = Ys(r), a = yc(), o = a.position === "item-aligned" ? Sc() : void 0, { forwardRef: s, currentElement: c } = U();
		A(() => {
			a?.onViewportChange(c.value);
		});
		let l = M(0);
		function d(e) {
			let t = e.currentTarget, { shouldExpandOnScrollRef: n, contentWrapper: r } = o ?? {};
			if (n?.value && r?.value) {
				let e = Math.abs(l.value - t.scrollTop);
				if (e > 0) {
					let n = window.innerHeight - 20, i = Number.parseFloat(r.value.style.minHeight), a = Number.parseFloat(r.value.style.height), o = Math.max(i, a);
					if (o < n) {
						let i = o + e, a = Math.min(n, i), s = i - a;
						r.value.style.height = `${a}px`, r.value.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, r.value.style.justifyContent = "flex-end");
					}
				}
			}
			l.value = t.scrollTop;
		}
		return (e, r) => (j(), u(n, null, [p(F(W), T({
			ref: F(s),
			"data-reka-select-viewport": "",
			role: "presentation"
		}, {
			...e.$attrs,
			...t
		}, {
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto"
			},
			onScroll: d
		}), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16), p(F(W), {
			as: "style",
			nonce: F(i)
		}, {
			default: R(() => r[0] ||= [f(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")]),
			_: 1,
			__: [0]
		}, 8, ["nonce"])], 64));
	}
}), Hc = /* @__PURE__ */ h({
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
		let t = e;
		return U(), (e, n) => (j(), c(F(Js), O(v(t)), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [Uc, Wc] = V("TooltipProvider"), Gc = /* @__PURE__ */ h({
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
		let { delayDuration: t, skipDelayDuration: n, disableHoverableContent: r, disableClosingTrigger: i, ignoreNonKeyboardFocus: a, disabled: o, content: s } = me(e);
		U();
		let c = M(!0), l = M(!1), { start: u, stop: d } = Jr(() => {
			c.value = !0;
		}, n, { immediate: !1 });
		return Wc({
			isOpenDelayed: c,
			delayDuration: t,
			onOpen() {
				d(), c.value = !1;
			},
			onClose() {
				u();
			},
			isPointerInTransitRef: l,
			disableHoverableContent: r,
			disableClosingTrigger: i,
			disabled: o,
			ignoreNonKeyboardFocus: a,
			content: s
		}), (e, t) => N(e.$slots, "default");
	}
}), Kc = "tooltip.open", [qc, Jc] = V("TooltipRoot"), Yc = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, r = t;
		U();
		let i = Uc(), a = s(() => n.disableHoverableContent ?? i.disableHoverableContent.value), o = s(() => n.disableClosingTrigger ?? i.disableClosingTrigger.value), l = s(() => n.disabled ?? i.disabled.value), u = s(() => n.delayDuration ?? i.delayDuration.value), d = s(() => n.ignoreNonKeyboardFocus ?? i.ignoreNonKeyboardFocus.value), f = Re(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		});
		I(f, (e) => {
			i.onClose && (e ? (i.onOpen(), document.dispatchEvent(new CustomEvent(Kc))) : i.onClose());
		});
		let p = M(!1), m = M(), h = s(() => f.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: g, stop: _ } = Le(() => {
			p.value = !0, f.value = !0;
		}, u, { immediate: !1 });
		function v() {
			_(), p.value = !1, f.value = !0;
		}
		function y() {
			_(), f.value = !1;
		}
		function b() {
			g();
		}
		return Jc({
			contentId: "",
			open: f,
			stateAttribute: h,
			trigger: m,
			onTriggerChange(e) {
				m.value = e;
			},
			onTriggerEnter() {
				i.isOpenDelayed.value ? b() : v();
			},
			onTriggerLeave() {
				a.value ? y() : _();
			},
			onOpen: v,
			onClose: y,
			disableHoverableContent: a,
			disableClosingTrigger: o,
			disabled: l,
			ignoreNonKeyboardFocus: d
		}), (e, t) => (j(), c(F(Va), null, {
			default: R(() => [N(e.$slots, "default", { open: F(f) })]),
			_: 3
		}));
	}
}), Xc = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, r = t, i = qc(), a = Uc(), { forwardRef: o, currentElement: l } = U(), u = s(() => n.ariaLabel || l.value?.textContent), d = s(() => {
			let { ariaLabel: e, ...t } = n;
			return Qr(t, a.content.value ?? {}, {
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
		return A(() => {
			Me(window, "scroll", (e) => {
				e.target?.contains(i.trigger.value) && i.onClose();
			}), Me(window, Kc, i.onClose);
		}), (e, t) => (j(), c(F(Yi), {
			"as-child": "",
			"disable-outside-pointer-events": !1,
			onEscapeKeyDown: t[0] ||= (e) => r("escapeKeyDown", e),
			onPointerDownOutside: t[1] ||= (e) => {
				F(i).disableClosingTrigger.value && F(i).trigger.value?.contains(e.target) && e.preventDefault(), r("pointerDownOutside", e);
			},
			onFocusOutside: t[2] ||= Te(() => {}, ["prevent"]),
			onDismiss: t[3] ||= (e) => F(i).onClose()
		}, {
			default: R(() => [p(F(Ks), T({
				ref: F(o),
				"data-state": F(i).stateAttribute.value
			}, {
				...e.$attrs,
				...d.value
			}, { style: {
				"--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
				"--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
				"--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
				"--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
				"--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
			} }), {
				default: R(() => [N(e.$slots, "default"), p(F(ja), {
					id: F(i).contentId,
					role: "tooltip"
				}, {
					default: R(() => [f(ue(u.value), 1)]),
					_: 1
				}, 8, ["id"])]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}));
	}
}), Zc = /* @__PURE__ */ h({
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
		let t = li(e), { forwardRef: n, currentElement: r } = U(), { trigger: i, onClose: a } = qc(), o = Uc(), { isPointerInTransit: s, onPointerExit: l } = di(i, r);
		return o.isPointerInTransitRef = s, l(() => {
			a();
		}), (e, r) => (j(), c(Xc, T({ ref: F(n) }, F(t)), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Qc = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = e, r = t, i = qc(), a = ui(n, r), { forwardRef: o } = U();
		return (e, t) => (j(), c(F(Li), { present: e.forceMount || F(i).open.value }, {
			default: R(() => [(j(), c(se(F(i).disableHoverableContent.value ? Xc : Zc), T({ ref: F(o) }, F(a)), {
				default: R(() => [N(e.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), $c = /* @__PURE__ */ h({
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
		let t = e;
		return (e, n) => (j(), c(F(Ta), O(v(t)), {
			default: R(() => [N(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), el = /* @__PURE__ */ h({
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
		let t = e, n = qc(), r = Uc();
		n.contentId ||= ki(void 0, "reka-tooltip-content");
		let { forwardRef: i, currentElement: a } = U(), o = M(!1), l = M(!1), u = s(() => n.disabled.value ? {} : {
			click: v,
			focus: g,
			pointermove: m,
			pointerleave: h,
			pointerdown: f,
			blur: _
		});
		A(() => {
			n.onTriggerChange(a.value);
		});
		function d() {
			setTimeout(() => {
				o.value = !1;
			}, 1);
		}
		function f() {
			n.open && !n.disableClosingTrigger.value && n.onClose(), o.value = !0, document.addEventListener("pointerup", d, { once: !0 });
		}
		function m(e) {
			e.pointerType !== "touch" && !l.value && !r.isPointerInTransitRef.value && (n.onTriggerEnter(), l.value = !0);
		}
		function h() {
			n.onTriggerLeave(), l.value = !1;
		}
		function g(e) {
			o.value || n.ignoreNonKeyboardFocus.value && !e.target.matches?.(":focus-visible") || n.onOpen();
		}
		function _() {
			n.onClose();
		}
		function v() {
			n.disableClosingTrigger.value || n.onClose();
		}
		return (e, r) => (j(), c(F(Ha), {
			"as-child": "",
			reference: e.reference
		}, {
			default: R(() => [p(F(W), T({
				ref: F(i),
				"aria-describedby": F(n).open.value ? F(n).contentId : void 0,
				"data-state": F(n).stateAttribute.value,
				as: e.as,
				"as-child": t.asChild,
				"data-grace-area-trigger": ""
			}, fe(u.value)), {
				default: R(() => [N(e.$slots, "default")]),
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
}), tl = /* @__PURE__ */ h({
	__name: "AppCheckbox",
	props: /* @__PURE__ */ w({
		disabled: { type: Boolean },
		name: null,
		required: { type: Boolean },
		error: { type: Boolean }
	}, {
		modelValue: {
			type: [Boolean, String],
			default: !1
		},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = ye(e, "modelValue");
		return (n, r) => (j(), c(F(ac), T({
			...n.$props,
			...n.$attrs
		}, {
			modelValue: t.value,
			"onUpdate:modelValue": r[0] ||= (e) => t.value = e,
			class: [
				n.$style["app-checkbox"],
				"app-shape-squircle",
				{
					[n.$style.disabled]: e.disabled,
					[n.$style.indeterminate]: t.value === "indeterminate",
					[n.$style.checked]: t.value,
					[n.$style.error]: e.error
				}
			]
		}), {
			default: R(() => [p(F(oc), { class: D(n.$style.indicator) }, {
				default: R(() => [t.value === "indeterminate" ? (j(), c(F(Mn), {
					key: 0,
					icon: "line-md:minus"
				})) : l("", !0), t.value === !0 ? (j(), c(F(Mn), {
					key: 1,
					icon: "line-md:confirm",
					dur: "3s",
					"stroke-width": "5"
				})) : l("", !0)]),
				_: 1
			}, 8, ["class"])]),
			_: 1
		}, 16, ["modelValue", "class"]));
	}
}), nl = "_app-checkbox_1409483", rl = "_error_37514bb", il = "_disabled_c7121c3", al = "_indicator_9a6129e", ol = /* @__PURE__ */ z(tl, [["__cssModules", { $style: {
	"app-checkbox": nl,
	error: rl,
	disabled: il,
	indicator: al
} }]]), sl = /* @__PURE__ */ h({
	__name: "AppChip",
	props: C({
		size: null,
		transparent: { type: Boolean }
	}, {
		size: "medium",
		transparent: !1
	}),
	setup(e) {
		return (e, t) => (j(), u("div", { class: D([
			"app-shape-squircle",
			e.$style["app-chip"],
			e.$style[e.size],
			{ [e.$style.transparent]: e.transparent }
		]) }, [N(e.$slots, "default")], 2));
	}
}), cl = "_app-chip_707ac6f", ll = "_small_1d451e9", ul = "_large_97f6530", dl = "_transparent_8a38eaa", fl = /* @__PURE__ */ z(sl, [["__cssModules", { $style: {
	"app-chip": cl,
	small: ll,
	large: ul,
	transparent: dl
} }]]), pl = { class: "gradiented step-3 strong" }, ml = /* @__PURE__ */ h({
	__name: "AppDialog",
	props: /* @__PURE__ */ w({
		persistent: { type: Boolean },
		title: null,
		description: null
	}, {
		open: {
			type: Boolean,
			default: !1
		},
		openModifiers: {}
	}),
	emits: ["update:open"],
	setup(e) {
		let t = ye(e, "open");
		return (n, r) => (j(), c(F(Hi), {
			open: t.value,
			"onUpdate:open": r[4] ||= (e) => t.value = e,
			class: D(n.$style["app-dialog"])
		}, {
			default: R(() => [p(F(Oa), {
				class: D(n.$style.trigger),
				"as-child": ""
			}, {
				default: R(() => [N(n.$slots, "trigger")]),
				_: 3
			}, 8, ["class"]), p(F(Ea), null, {
				default: R(() => [p(i, { name: "fade" }, {
					default: R(() => [p(F(wa), { class: D(n.$style.overlay) }, null, 8, ["class"])]),
					_: 1
				}), p(F(xa), {
					"as-child": "",
					"trap-focus": !e.persistent,
					onPointerDownOutside: r[1] ||= (t) => e.persistent ? t.preventDefault() : null,
					onEscapeKeyDown: r[2] ||= (t) => e.persistent ? t.preventDefault() : null,
					onFocusOutside: r[3] ||= (t) => e.persistent ? t.preventDefault() : null
				}, {
					default: R(() => [p(kr, T({ class: n.$style.content }, n.$attrs), {
						default: R(() => [
							d("header", null, [
								d("div", { class: D(n.$style.start) }, [p(F(Da), { "as-child": "" }, {
									default: R(() => [d("h2", pl, [N(n.$slots, "title", {}, () => [f(ue(e.title), 1)])])]),
									_: 3
								}), p(F(Sa), { "as-child": "" }, {
									default: R(() => [d("div", { class: D(n.$style.description) }, [N(n.$slots, "description", {}, () => [f(ue(e.description), 1)])], 2)]),
									_: 3
								})], 2),
								N(n.$slots, "header-actions"),
								p(F(Ui), {
									"aria-label": "Close",
									"as-child": ""
								}, {
									default: R(() => [e.persistent ? l("", !0) : (j(), c(Tr, {
										key: 0,
										variant: "text",
										class: D(n.$style["close-button"]),
										icon: "material-symbols:close-rounded",
										onClick: r[0] ||= (e) => t.value = !1
									}, null, 8, ["class"]))]),
									_: 1
								})
							]),
							N(n.$slots, "default"),
							d("footer", null, [N(n.$slots, "actions")])
						]),
						_: 3
					}, 16, ["class"])]),
					_: 3
				}, 8, ["trap-focus"])]),
				_: 3
			})]),
			_: 3
		}, 8, ["open", "class"]));
	}
}), hl = "_trigger_eed4348", gl = "_overlay_3482df4", _l = "_content_22a8642", vl = "_start_62c7e32", yl = "_description_768894d", bl = "_close-button_fb0abea", xl = /* @__PURE__ */ z(ml, [["__cssModules", { $style: {
	trigger: hl,
	overlay: gl,
	content: _l,
	start: vl,
	description: yl,
	"close-button": bl
} }]]), Sl = /* @__PURE__ */ h({
	__name: "AppField",
	props: {
		label: null,
		error: null,
		disabled: { type: Boolean }
	},
	setup(e) {
		return (t, n) => {
			let r = Fn;
			return j(), u("label", { class: D([t.$style["app-field"], { [t.$style.disabled]: e.disabled }]) }, [d("div", { class: D(t.$style["label-input"]) }, [e.label ?? t.$slots.label ? (j(), u("div", {
				key: 0,
				class: D([t.$style.label, { [t.$style.error]: e.error }])
			}, [N(t.$slots, "label", {}, () => [f(ue(e.label), 1)])], 2)) : l("", !0), N(t.$slots, "default")], 2), e.error ? (j(), u("div", {
				key: 0,
				class: D(t.$style.error)
			}, [p(r, { icon: "material-symbols:error-outline-rounded" }), f(ue(e.error), 1)], 2)) : l("", !0)], 2);
		};
	}
}), Cl = "_app-field_c5e2831", wl = "_disabled_f4fb29f", Tl = "_label-input_d62543a", El = "_label_bf91a85", Dl = "_error_77cdf2a", Ol = /* @__PURE__ */ z(Sl, [["__cssModules", { $style: {
	"app-field": Cl,
	disabled: wl,
	"label-input": Tl,
	label: El,
	error: Dl
} }]]), kl = {}, Al = {
	class: "app-loading-spinner",
	viewBox: "0 0 68 68",
	xmlns: "http://www.w3.org/2000/svg"
};
function jl(e, t) {
	return j(), u("svg", Al, [...t[0] ||= [d("defs", null, [d("linearGradient", {
		id: "primary-gradient",
		x1: "0",
		x2: "0",
		y1: "0",
		y2: "1"
	}, [d("stop", {
		offset: "0%",
		"stop-color": "rgb(121, 126, 247)"
	}), d("stop", {
		offset: "100%",
		"stop-color": "rgb(0, 255, 206)"
	})])], -1), d("circle", {
		class: "path",
		fill: "none",
		"stroke-width": "8",
		"stroke-linecap": "round",
		cx: "34",
		cy: "34",
		r: "30"
	}, null, -1)]]);
}
var Ml = /* @__PURE__ */ z(kl, [["render", jl], ["__scopeId", "data-v-d7f1df05"]]), Nl = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2027.6.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_2_00000039126939024823027680000017407098825655584941_'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2090.9%20125.8'%20style='enable-background:new%200%200%2090.9%20125.8;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{opacity:0.5;fill:%23C5FFFE;enable-background:new%20;}%20.st1{fill:%23C5FFFE;}%20.st2{clip-path:url(%23SVGID_00000160187787671385330840000011365503337429337474_);}%20%3c/style%3e%3cg%20id='Layer_1-2_00000138552681162585653310000003376327086979018656_'%3e%3cg%20id='Layer_2-2_00000089575700792075398270000016475314756721804971_'%3e%3cg%20id='Layer_1-2'%3e%3cg%20id='Layer_2-2'%3e%3cg%20id='Layer_1-2-2'%3e%3cg%20id='Logo'%3e%3cg%20id='Secondary_j'%3e%3crect%20x='71.7'%20y='14.4'%20class='st0'%20width='5.8'%20height='46.7'/%3e%3cpath%20class='st0'%20d='M43.5,115.3c-18.2,0-33.1-14.8-33.1-33.1s14.9-33.1,33.1-33.1S76.6,64,76.6,82.2S61.8,115.3,43.5,115.3z%20M43.5,55.1c-14.9,0-27.1,12.2-27.1,27.1s12.2,27.1,27.1,27.1s27.1-12.2,27.1-27.1S58.5,55.1,43.5,55.1z'/%3e%3ccircle%20class='st0'%20cx='42.2'%20cy='77.4'%20r='8.2'/%3e%3c/g%3e%3cg%20id='Main_j'%3e%3ccircle%20id='Dot3'%20class='st1'%20cx='74.6'%20cy='16.4'%20r='16.4'/%3e%3ccircle%20id='Dot2'%20class='st1'%20cx='74.5'%20cy='61.1'%20r='12'/%3e%3ccircle%20id='Dot'%20class='st1'%20cx='12'%20cy='82.2'%20r='12'/%3e%3cg%20id='SquareCircle'%3e%3cg%3e%3cdefs%3e%3crect%20id='SVGID_1_'%20y='81.1'%20width='86.5'%20height='44.7'/%3e%3c/defs%3e%3cclipPath%20id='SVGID_00000170246492928372989520000014416670913551062949_'%3e%3cuse%20xlink:href='%23SVGID_1_'%20style='overflow:visible;'/%3e%3c/clipPath%3e%3cg%20style='clip-path:url(%23SVGID_00000170246492928372989520000014416670913551062949_);'%3e%3cpath%20class='st1'%20d='M43.2,124.4c-23.9,0-43.3-19.4-43.3-43.3s19.4-43.3,43.3-43.3s43.3,19.4,43.3,43.3%20S67.1,124.4,43.2,124.4z%20M43.2,61.8C32.6,61.8,24,70.4,24,81.1s8.7,19.3,19.3,19.3s19.3-8.7,19.3-19.3%20S53.9,61.8,43.2,61.8z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3crect%20x='62.6'%20y='61.1'%20class='st1'%20width='23.9'%20height='20.9'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Pl = ["src"], Fl = /* @__PURE__ */ z(/* @__PURE__ */ h({
	__name: "AppLogo",
	props: C({ size: null }, { size: "medium" }),
	setup(e) {
		return (e, t) => (j(), u("img", {
			src: F(Nl),
			class: D(["app-logo", e.size]),
			alt: "Jojko's logo'"
		}, null, 10, Pl));
	}
}), [["__scopeId", "data-v-6abc7d2e"]]), Il = ["disabled"], Ll = /* @__PURE__ */ h({
	__name: "AppSelectField",
	props: /* @__PURE__ */ w(C({
		items: null,
		disabled: { type: Boolean },
		error: null,
		name: null,
		multiple: null,
		required: { type: Boolean },
		placeholder: null
	}, {
		items: () => [],
		disabled: !1,
		multiple: !1,
		required: !1,
		placeholder: "Select an option"
	}), {
		modelValue: {},
		modelModifiers: {},
		open: { type: Boolean },
		openModifiers: {}
	}),
	emits: ["update:modelValue", "update:open"],
	setup(e) {
		let t = ye(e, "modelValue"), r = ye(e, "open"), { createLocalWaveDirective: i } = pr, { vWave: a } = i({ duration: .2 });
		return (e, i) => {
			let o = Fn;
			return j(), c(F(hc), {
				open: r.value,
				"onUpdate:open": i[0] ||= (e) => r.value = e,
				modelValue: t.value,
				"onUpdate:modelValue": i[1] ||= (e) => t.value = e,
				name: e.name,
				multiple: e.multiple,
				required: e.required
			}, {
				default: R(() => [p(F(zc), {
					"as-child": "",
					disabled: e.disabled
				}, {
					default: R(() => [N(e.$slots, "trigger", {}, () => [Ce((j(), u("button", {
						disabled: e.disabled,
						class: D([e.$style.trigger, { [e.$style.placeholder]: !t.value }])
					}, [p(F(Bc), { placeholder: e.placeholder }, null, 8, ["placeholder"]), p(F(kc), { "as-child": "" }, {
						default: R(() => [p(o, {
							class: D(e.$style["select-icon"]),
							icon: "material-symbols:expand-more-rounded"
						}, null, 8, ["class"])]),
						_: 1
					})], 10, Il)), [[F(a)]])])]),
					_: 3
				}, 8, ["disabled"]), p(F(Fc), null, {
					default: R(() => [p(F(Oc), {
						position: "item-aligned",
						class: D(e.$style.content)
					}, {
						default: R(() => [
							p(F(Rc)),
							p(F(Vc), { class: D(e.$style.viewport) }, {
								default: R(() => [(j(!0), u(n, null, oe(e.items, (t) => Ce((j(), c(F(Mc), {
									key: JSON.stringify(t),
									class: D(e.$style.item),
									value: t.value
								}, {
									default: R(() => [p(F(Pc), null, {
										default: R(() => [N(e.$slots, "item", T({ ref_for: !0 }, t), () => [f(ue(t.label ?? t.value), 1)])]),
										_: 2
									}, 1024), p(F(Nc))]),
									_: 2
								}, 1032, ["class", "value"])), [[F(a)]])), 128))]),
								_: 3
							}, 8, ["class"]),
							p(F(Lc)),
							p(F(Tc))
						]),
						_: 3
					}, 8, ["class"])]),
					_: 3
				})]),
				_: 3
			}, 8, [
				"open",
				"modelValue",
				"name",
				"multiple",
				"required"
			]);
		};
	}
}), Rl = "_item_d25a3ba", zl = "_content_5242832", Bl = "_viewport_34f6182", Vl = "_trigger_d455d52", Hl = "_error_123b438", Ul = "_select-icon_b60910e", Wl = "_placeholder_189bfa7", Gl = /* @__PURE__ */ z(Ll, [["__cssModules", { $style: {
	item: Rl,
	content: zl,
	viewport: Bl,
	trigger: Vl,
	error: Hl,
	"select-icon": Ul,
	placeholder: Wl
} }]]), Kl = /* @__PURE__ */ h({
	__name: "AppTextField",
	props: /* @__PURE__ */ w(C({
		placeholder: null,
		disabled: { type: Boolean },
		error: { type: Boolean },
		iconBefore: null,
		icon: null,
		iconAfter: null,
		type: null
	}, { disabled: !1 }), {
		modelValue: { default: void 0 },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let [t, n] = ye(e, "modelValue"), r = ge(), i = _e(), { textarea: a, input: o } = Ie({ input: s({
			get: () => String(t.value ?? ""),
			set: (e) => t.value = typeof t.value == "number" ? +e : e
		}) }), d = s(() => ({
			...r,
			...n,
			class: i.input,
			type: e.type,
			disabled: e.disabled,
			placeholder: e.placeholder
		}));
		return (e, n) => {
			let r = Fn;
			return j(), u("div", {
				class: D([
					e.$style["app-text-field"],
					"app-shape-squircle",
					e.$style.outerBorder,
					{
						[e.$style.interactive]: !e.disabled,
						[e.$style.error]: e.error
					}
				]),
				onClick: n[2] ||= (e) => F(a)?.focus()
			}, [
				e.iconBefore ?? e.icon ? (j(), c(r, {
					key: 0,
					icon: e.iconBefore ?? e.icon,
					class: D(e.$style["icon-before"])
				}, null, 8, ["icon", "class"])) : l("", !0),
				e.type === "textarea" ? Ce((j(), u("textarea", T({
					key: 1,
					ref_key: "textarea",
					ref: a
				}, F(d), {
					"onUpdate:modelValue": n[0] ||= (e) => x(o) ? o.value = e : null,
					class: e.$style.textarea
				}), null, 16)), [[xe, F(o)]]) : Ce((j(), u("input", T({ key: 2 }, F(d), { "onUpdate:modelValue": n[1] ||= (e) => x(t) ? t.value = e : null }), null, 16)), [[be, F(t)]]),
				e.iconAfter ? (j(), c(r, {
					key: 3,
					icon: e.iconAfter,
					class: D(e.$style["icon-after"])
				}, null, 8, ["icon", "class"])) : l("", !0),
				e.$slots.actions ? (j(), u("div", {
					key: 4,
					class: D(e.$style.actions)
				}, [N(e.$slots, "actions")], 2)) : l("", !0)
			], 2);
		};
	}
}), ql = "_icon-before_fccb21f", Jl = "_icon-after_eb3b2c5", Yl = "_actions_baaebea", Xl = "_app-text-field_18e12e8", Zl = "_outerBorder_fe9eb37", Ql = "_interactive_3dc4aaf", $l = "_error_692dad4", eu = "_textarea_db370d2", tu = "_input_c63c5c2", nu = /* @__PURE__ */ z(Kl, [["__cssModules", { $style: {
	"icon-before": ql,
	"icon-after": Jl,
	actions: Yl,
	"app-text-field": Xl,
	outerBorder: Zl,
	interactive: Ql,
	error: $l,
	textarea: eu,
	input: tu
} }]]), ru = /* @__PURE__ */ h({
	__name: "AppTooltip",
	props: /* @__PURE__ */ w(C({
		position: null,
		align: null,
		ariaLabel: null,
		avoidCollisions: { type: Boolean }
	}, { position: "block-start" }), {
		open: {
			type: Boolean,
			default: !1
		},
		openModifiers: {}
	}),
	emits: ["update:open"],
	setup(e) {
		let t = {
			"block-start": "top",
			"block-end": "bottom",
			"inline-start": "left",
			"inline-end": "right"
		}, n = ye(e, "open");
		return (e, r) => (j(), c(F(Gc), { "delay-duration": 0 }, {
			default: R(() => [p(F(Yc), {
				open: n.value,
				"onUpdate:open": r[0] ||= (e) => n.value = e
			}, {
				default: R(() => [p(F(el), { "as-child": "" }, {
					default: R(() => [N(e.$slots, "trigger")]),
					_: 3
				}), p(F($c), null, {
					default: R(() => [p(F(Qc), T(e.$attrs, {
						as: "div",
						align: e.align,
						"avoid-collisions": e.avoidCollisions,
						side: t[e.position],
						"align-offset": 20,
						"aria-label": e.ariaLabel,
						class: [e.$attrs.class, e.$style["app-tooltip"]]
					}), {
						default: R(() => [p(kr, { class: D(e.$style.card) }, {
							default: R(() => [N(e.$slots, "default")]),
							_: 3
						}, 8, ["class"]), p(F(Hc), { class: D(e.$style.arrow) }, null, 8, ["class"])]),
						_: 3
					}, 16, [
						"align",
						"avoid-collisions",
						"side",
						"aria-label",
						"class"
					])]),
					_: 3
				})]),
				_: 3
			}, 8, ["open"])]),
			_: 3
		}));
	}
}), iu = "_app-tooltip_6b0961c", au = "_slideIn_3e7dd36", ou = "_card_ec09d9a", su = "_arrow_7e59031", cu = /* @__PURE__ */ z(ru, [["__cssModules", { $style: {
	"app-tooltip": iu,
	slideIn: au,
	card: ou,
	arrow: su
} }]]);
//#endregion
export { Tr as AppButton, kr as AppCard, ol as AppCheckbox, fl as AppChip, xl as AppDialog, Ol as AppField, Fn as AppIcon, Ml as AppLoadingSpinner, Fl as AppLogo, Gl as AppSelectField, nu as AppTextField, cu as AppTooltip };
