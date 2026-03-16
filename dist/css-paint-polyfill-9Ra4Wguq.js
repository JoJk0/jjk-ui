//#region node_modules/.pnpm/css-paint-polyfill@3.4.0/node_modules/css-paint-polyfill/dist/css-paint-polyfill.js
(function() {
	function e(e, t) {
		var n = new XMLHttpRequest();
		n.onreadystatechange = function() {
			n.readyState === 4 && t(n.responseText);
		}, n.open("GET", e, !0), n.send();
	}
	function t(e, t, n) {
		Object.defineProperty ? Object.defineProperty(e, t, n) : e[t] = n.get();
	}
	var n, r = window.CSS;
	r || (window.CSS = r = {}), r.supports ||= function e(t, n) {
		if (t == "paint") return !0;
		if (n) {
			var r = u.contentDocument.body;
			return r.style.cssText = t + ":" + n, r.style.cssText.length > 0;
		}
		for (var i, a, o, s, c = /(^|not|(or)|(and))\s*\(\s*(.+?)\s*:(.+?)\)\s*|(.)/gi; o = c.exec(t);) {
			if (o[6]) return !1;
			s = e(o[4], o[5]), a = o[2] ? a || s : o[3] ? a && s : (i = !o[1], s);
		}
		return a == i;
	}, r.escape ||= function(e) {
		return e.replace(/([^\w-])/g, "\\$1");
	};
	var i = {};
	function a(e, t) {
		var n = parseFloat(e);
		this.value = isNaN(n) ? e : n, this.unit = t;
	}
	r.registerProperty ||= function(e) {
		i[e.name] = e;
	}, a.prototype.toString = function() {
		return this.value + (this.unit == "number" ? "" : this.unit);
	}, a.prototype.valueOf = function() {
		return this.value;
	}, "Hz Q ch cm deg dpcm dpi ddpx em ex fr grad in kHz mm ms number pc percent pt px rad rem s turn vh vmax vmin vw".split(" ").forEach(function(e) {
		r[e] || (r[e] = function(t) {
			return new a(t, e);
		});
	});
	var o = /(background|mask|cursor|-image|-source)/, s = !!r.paintWorklet;
	s || (n = new Z(), t(r, "paintWorklet", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return n;
		}
	}));
	var c = "css-paint-polyfill", l = document.createElement(c);
	s || document.documentElement.appendChild(l);
	var u = document.createElement("iframe");
	u.style.cssText = "position:absolute; left:0; top:-999px; width:1px; height:1px;", l.appendChild(u);
	var d = document.createElement("style");
	d.id = c, d.$$isPaint = !0, l.appendChild(d);
	var f = d.sheet, p = l.style, m = !1, h = [], g = /(paint\(|-moz-element\(#paint-|-webkit-canvas\(paint-|[('"]blob:[^'"#]+#paint=|[('"]data:image\/paint-)/, _ = "getCSSCanvasContext" in document, v = (p.backgroundImage = "-moz-element(#" + c + ")") === p.backgroundImage, y = typeof Promise == "function";
	p.cssText = "display:none !important;";
	var b = window.requestAnimationFrame || setTimeout, ee = function() {
		return window.devicePixelRatio || 1;
	}, te = {}, x = {}, S = 0;
	function ne(e) {
		var t = e.bit ^= 1;
		return e.instances[t] || (e.instances[t] = new e.Painter());
	}
	function C(e, t) {
		var n = e.cssText, r = g.test(n);
		if (!0 === t.isNew && r && n !== (n = A(n)) && (e = function(e, t) {
			for (var n = e.parentStyleSheet, r = e.parentRule, i = (r || n).cssRules, a = i.length - 1, o = 0; o <= a; o++) if (i[o] === e) {
				(r || n).deleteRule(o), a = o;
				break;
			}
			if (t != null) {
				if (r) {
					var s = r.appendRule(t);
					return r.cssRules[s];
				}
				return n.insertRule(t, a), n.cssRules[a];
			}
		}(e, n)), r) {
			var i, a, o, s = e.selectorText, c = B(e.style);
			if (i = t.counters[s] == null ? t.counters[s] = 1 : ++t.counters[s], x[a = "sheet" + t.sheetId + "\n" + s + "\n" + i] != null) {
				if ((o = x[a]).selector === s) return o.rule = e, void (o.cssText !== c && t.toProcess.push(o));
				t.toRemove.push(o);
			} else o = x[a] = {
				key: a,
				selector: s,
				cssText: c,
				properties: {},
				rule: e
			}, t.toProcess.push(o.selector);
		}
	}
	function w(e, t) {
		if (!("ownerSVGElement" in e)) {
			t(e);
			for (var n = e.firstElementChild; n;) w(n, t), n = n.nextElementSibling;
		}
	}
	function T() {
		for (var e, t = [].slice.call(document.styleSheets), n = {
			toProcess: [],
			toRemove: [],
			counters: {},
			isNew: !1,
			sheetId: null,
			rules: null
		}, r = 0; r < t.length; r++) {
			var i = t[r].ownerNode;
			if (!i.$$isPaint) {
				try {
					n.rules = i.sheet.cssRules;
				} catch {
					continue;
				}
				if (n.sheetId = i.$$paintid, n.isNew = n.sheetId == null, n.isNew) {
					if (n.sheetId = i.$$paintid = ++S, !1 === D(i)) continue;
					e = !0;
				}
				E(i.sheet, C, n);
			}
		}
		for (var a = n.toRemove.length; a--;) delete x[n.toRemove[a].key];
		n.toProcess.length > 0 && L(n.toProcess.join(", ")), e && L("[data-css-paint]", !0);
	}
	function E(t, n, r) {
		var i = [[0, t.cssRules]], a = i[0], o = a[1];
		if (o) for (var s = 0; i.length > 0; s++) if (s >= o.length) {
			i.pop();
			var c = i.length;
			c > 0 && (o = (a = i[c - 1])[1], s = a[0]);
		} else {
			a[0] = s;
			var l = o[s];
			if (l.type !== 3) if (l.type === 1) {
				var u = n(l, r);
				u !== void 0 && (r = u);
			} else l.cssRules && l.cssRules.length > 0 && i.push([0, l.cssRules]);
			else {
				if (l.$$isPaint) continue;
				var d = l.media && l.media.mediaText;
				if (d && !self.matchMedia(d).matches || /ts\.g.{7}is\.com\/css/.test(l.href)) continue;
				l.$$isPaint = !0, e(l.href, O);
			}
		}
		return r;
	}
	function D(t) {
		if (!t.$$isPaint) {
			if (t.href) return e(t.href, O), !1;
			for (var n = t.childNodes.length; n--;) {
				var r = t.childNodes[n].nodeValue, i = A(r);
				i !== r && (t.childNodes[n].nodeValue = i);
			}
		}
	}
	function O(e) {
		var t = function(e) {
			var t = u.contentDocument.body, n = document.createElement("style");
			return n.media = "print", n.$$paintid = ++S, n.appendChild(document.createTextNode(e)), t.appendChild(n), n.sheet.remove = function() {
				return t.removeChild(n);
			}, n.sheet;
		}(A(e));
		try {
			t._ = t.cssRules.length;
		} catch {
			var n = function() {
				t && k(t), t = null, clearTimeout(r);
			};
			t.ownerNode.onload = t.ownerNode.onerror = n;
			var r = setTimeout(n, 5e3);
			return;
		}
		k(t);
	}
	function k(e) {
		var t = "";
		if (E(e, function(e) {
			if (e.type === 1) {
				for (var n = "", r = 0; r < e.style.length; r++) {
					var i = e.style.item(r), a = e.style.getPropertyValue(i);
					g.test(a) && (n = i + ": " + a + e.style.getPropertyPriority(i) + ";");
				}
				if (n) {
					n = e.selectorText + "{" + n + "}";
					for (var o = e; o = o.parentRule;) n = "" + o.cssText.match(/^[\s\S]+?\{/)[0] + n + "}";
					t += n;
				}
			}
		}), e.remove(), t) {
			var n = document.createElement("style");
			n.appendChild(document.createTextNode(t)), l.appendChild(n), T();
		}
	}
	function A(e) {
		return e.replace(/( |;|,|\b)paint\s*\(\s*(['"]?)(.+?)\2\s*\)( |;|,|!|\b|$)/g, "$1url(data:image/paint-$3,=)$4");
	}
	var j, M, N, P = [];
	function F(e, t) {
		t && (e.$$paintObservedProperties = null, e.$$paintGeometry && !e.$$paintGeometry.live && (e.$$paintGeometry = null)), !0 !== e.$$paintPending && (e.$$paintPending = !0, P.indexOf(e) === -1 && P.push(e) === 1 && b(I));
	}
	function I() {
		for (var e, t = 0; t < P.length; t++) P[t] && P[t].localName === "style" && (e = !0, P[t] = null);
		if (e) return b(I), void T();
		var n = P.length && P.some(function(e) {
			return e && !0 === e.$$needsOverrides;
		});
		for (n && ie(); P.length;) {
			var r = P.pop();
			r && V(r);
		}
		n && ae();
	}
	function L(e, t) {
		try {
			for (var n = document.querySelectorAll(e), r = 0; r < n.length; r++) F(n[r], t);
		} catch {}
	}
	function re(e, t, n) {
		for (var r = e.length, i = function() {
			--r || t.apply(null, n || h);
		}, a = 0; a < e.length; a++) {
			var o = new Image();
			o.onload = i, o.onerror = onerror, o.src = e[a];
		}
	}
	function R(e) {
		var t = e.$$paintId;
		return t ??= e.$$paintId = ++G, t;
	}
	function z(e) {
		var t = e.$$paintRule, n = R(e);
		if (Number(e.getAttribute("data-css-paint")) !== n && e.setAttribute("data-css-paint", n), t == null) {
			var r = f.insertRule("[data-css-paint=\"" + n + "\"] {}", f.cssRules.length);
			t = e.$$paintRule = f.cssRules[r];
		}
		return t;
	}
	function B(e) {
		var t = e.cssText;
		if (t) return t;
		t = "";
		for (var n = 0, r = void 0; n < e.length; n++) r = e[n], n !== 0 && (t += " "), t += r, t += ":", t += e.getPropertyValue(r), t += ";";
		return t;
	}
	function V(e) {
		var t = getComputedStyle(e);
		if (e.$$paintObservedProperties && !e.$$needsOverrides) for (var n = 0; n < e.$$paintObservedProperties.length; n++) {
			var r = e.$$paintObservedProperties[n];
			if (t.getPropertyValue(r).trim() !== e.$$paintedPropertyValues[r]) {
				K(e, t);
				break;
			}
		}
		else if (e.$$paintId || g.test(B(t))) K(e, t);
		else {
			var i = e.getAttribute("style");
			g.test(i) && (e.style.cssText = i.replace(/;\s*$/, "") + "; " + e.style.cssText, K(e));
		}
		e.$$paintPending = !1;
	}
	function H(e) {
		e.$$paintGeometry && !e.$$paintGeometry.live && (e.$$paintGeometry = null), F(e);
	}
	var U = {
		get: function(e) {
			var t = i[e], n = t && !1 === t.inherits ? M.style.getPropertyValue(e) : U.getRaw(e);
			if (n == null && t) n = t.initialValue;
			else if (t && t.syntax) {
				var a = t.syntax.replace(/[<>\s]/g, "");
				typeof r[a] == "function" && (n = r[a](n));
			}
			return typeof n == "string" && (n = n.trim()), n;
		},
		getRaw: function(e) {
			if (e in N) return N[e];
			var t = j.getPropertyValue(e);
			return typeof t == "string" && (t = t.trim()), N[e] = t;
		}
	}, W = window.ResizeObserver && new window.ResizeObserver(function(e) {
		for (var t = 0; t < e.length; t++) {
			var n = e[t], r = n.target.$$paintGeometry;
			r ? r.live = !0 : r = n.target.$$paintGeometry = {
				width: 0,
				height: 0,
				live: !0
			};
			var i = n.borderBoxSize;
			if (i && i.length && (i = i[0]), i) r.width = 0 | i.inlineSize, r.height = 0 | i.blockSize;
			else {
				var a = getComputedStyle(n.target), o = parseFloat(a.paddingLeft) + parseFloat(a.paddingRight), s = parseFloat(a.paddingTop) + parseFloat(a.paddingBottom);
				r.width = Math.round((n.contentRect.right - n.contentRect.left || n.contentRect.width) + o), r.height = Math.round((n.contentRect.bottom - n.contentRect.top || n.contentRect.height) + s);
			}
			F(n.target, !0);
		}
	}), G = 0;
	function K(e, t) {
		!0 === e.$$needsOverrides && ie();
		var n, r = j = t ?? getComputedStyle(e);
		M = e, N = {};
		var i = [];
		e.$$paintPending = !1;
		var a = function(e) {
			return e.$$paintGeometry ||= {
				width: e.clientWidth,
				height: e.clientHeight,
				live: !1
			};
		}(e);
		(function(e) {
			W && !e.$$paintGeometry.live && (e.$$paintGeometry.live = !0, W.observe(e));
		})(e), a = {
			width: a.width,
			height: a.height
		};
		for (var s = ee(), c = e.$$paintedProperties, u = 0; u < r.length; u++) {
			var d = r[u], f = U.getRaw(d), p = /(,|\b|^)(?:url\((['"]?))?((?:-moz-element\(#|-webkit-canvas\()paint-\d+-([^;,]+)|(?:data:image\/paint-|blob:[^'"#]+#paint=)([^"';, ]+)(?:[;,].*?)?)\2\)(;|,|\s|\b|$)/g, m = "", h = 0, g = [], y = !1, b = !1, x = void 0, S = void 0, C = !1, w = a;
			if (o.test(d) && d !== "-webkit-border-image") {
				if (/border-image/.test(d)) {
					var T = w.width, E = w.height, D = X(U.getRaw("border-image-slice").replace(/\sfill/, "").split(" ")), O = X(U.getRaw("border-width").split(" ")), k = X(U.getRaw("border-image-outset").split(" "));
					T += Y(D.left != "0" && parseFloat(O.left) || 0, k.left || 0, !0), T += Y(D.right != "0" && parseFloat(O.right) || 0, k.right || 0, !0), E += Y(D.top != "0" && parseFloat(O.top) || 0, k.top || 0, !0), C = !0, w = {
						width: T,
						height: E += Y(D.bottom != "0" && parseFloat(O.bottom) || 0, k.bottom || 0, !0)
					};
				}
				for (; S = p.exec(f);) {
					!1 === b && (x = R(e)), b = !0, m += f.substring(0, S.index);
					var A = S[4] || S[5], P = S[3], F = te[A], I = F && F.Painter.contextOptions || {}, L = C || !1 === I.scaling ? 1 : s, B = void 0;
					F && (F.Painter.inputProperties && i.push.apply(i, F.Painter.inputProperties), B = ne(F)), !0 === I.nativePixels && (w.width *= s, w.height *= s, L = 1);
					var V = L * w.width, H = L * w.height, G = e.$$paintContext, K = "paint-" + x + "-" + A, q = G && G.canvas;
					if (!q || q.width != V || q.height != H || !0 === _ && G && K !== G.id) {
						if (!0 === _) (G = document.getCSSCanvasContext("2d", K, V, H)).id = K, e.$$paintContext && G.clearRect(0, 0, V, H);
						else {
							var Z = !1;
							q || ((q = document.createElement("canvas")).id = K, Z = v), q.width = V, q.height = H, Z && (q.style.display = "none", l.appendChild(q)), G = q.getContext("2d");
						}
						e.$$paintContext = G, G.imageSmoothingEnabled = !1, L !== 1 && G.scale(L, L);
					} else G.clearRect(0, 0, V, H);
					if (B && (G.save(), G.beginPath(), B.paint(G, w, U), G.closePath(), G.restore(), !1 === _ && !v && "resetTransform" in G && G.resetTransform()), m += S[1], !0 === _) m += "-webkit-canvas(" + K + ")", (S[4] == null || q && q.id !== K) && (y = !0);
					else if (!0 === v) m += "-moz-element(#" + K + ")", S[4] ?? (y = !0), q && q.id !== K && (q.id = K, y = !0);
					else {
						var Q = q.toDataURL("image/png").replace("/png", "/paint-" + A);
						if (typeof MSBlobBuilder == "function" && (Q = oe(Q, A)), g.push(Q), m += "url(\"" + Q + "\")", Q !== P || !n) {
							var se = P ? P.indexOf("#") : -1;
							~se && URL.revokeObjectURL(P.substring(0, se)), y = !0;
						}
						P = Q;
					}
					m += S[6], h = S.index + S[0].length;
				}
				!1 !== b || c == null || c[d] == null ? (m += f.substring(h), y && (n ||= z(e), c ??= e.$$paintedProperties = {}, c[d] = !0, d.substring(0, 10) === "background" && s !== 1 && J(n.style, "background-size", "100% 100%"), /mask/.test(d) && s !== 1 && (J(n.style, "mask-size", "contain"), _ && J(n.style, "-webkit-mask-size", "contain")), /border-image/.test(d) && _ && (J(n.style, "border-color", "initial"), J(n.style, "image-rendering", "optimizeSpeed")), g.length === 0 ? J(n.style, d, m) : re(g, J, [
					n.style,
					d,
					m
				]))) : (n ||= z(e), n.style.removeProperty(d), W && W.unobserve(e), e.$$paintGeometry && (e.$$paintGeometry.live = !1));
			}
		}
		e.$$paintObservedProperties = i.length === 0 ? null : i;
		for (var ce = e.$$paintedPropertyValues = {}, $ = 0; $ < i.length; $++) {
			var le = i[$];
			ce[le] = U.getRaw(le);
		}
		!0 === e.$$needsOverrides && ae(), e.$$needsOverrides = null;
	}
	var q = 0;
	function ie() {
		q++ || (d.disabled = !0);
	}
	function ae() {
		--q || (d.disabled = !1);
	}
	function oe(e, t) {
		for (var n = atob(e.split(",")[1]), r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
		return URL.createObjectURL(new Blob([r])) + "#paint=" + t;
	}
	function J(e, t, n) {
		var r = m;
		m = !0, e.setProperty(t, n, "important"), m = r;
	}
	function Y(e, t, n) {
		var r = n ? 0 : e, i = parseFloat(t);
		return t ? t.match("px") ? r + i : (t.match("%") && (i /= 100), e * i) : r;
	}
	function X(e) {
		return {
			top: e[0],
			bottom: e[2] || e[0],
			left: e[3] || e[1] || e[0],
			right: e[1] || e[0]
		};
	}
	function Z() {}
	if (Z.prototype.addModule = function(n) {
		var r, i, a = this;
		return y && (r = new Promise(function(e) {
			return i = e;
		})), e(n, function(e) {
			var n = { registerPaint: function(e, t) {
				(function(e, t, n) {
					te[e] = {
						worklet: n,
						Painter: t,
						properties: t.inputProperties ? [].slice.call(t.inputProperties) : [],
						bit: 0,
						instances: []
					};
					for (var r = "", i = f.cssRules.length; i--;) {
						var a = f.cssRules[i];
						a.style.cssText.indexOf("-" + e) !== -1 && (r += a.selectorText);
					}
					r && L(r, !0);
				})(e, t, {
					context: n,
					realm: r
				});
			} };
			t(n, "devicePixelRatio", { get: ee }), n.self = n;
			var r = new function(e, t) {
				var n = document.createElement("iframe");
				n.style.cssText = "position:absolute; left:0; top:-999px; width:1px; height:1px;", t.appendChild(n);
				var r = n.contentWindow, i = r.document, a = "var window,$hook";
				for (var o in r) o in e || o === "eval" || (a += ",", a += o);
				for (var s in e) a += ",", a += s, a += "=self.", a += s;
				var c = i.createElement("script");
				c.appendChild(i.createTextNode("function $hook(self,console) {\"use strict\";\n		" + a + ";return function() {return eval(arguments[0])}}")), i.body.appendChild(c), this.exec = r.$hook(e, console);
			}(n, u.contentDocument && u.contentDocument.body || l);
			e = (a.transpile || String)(e), r.exec(e), i && i();
		}), r;
	}, !s) try {
		(function() {
			var e = !1;
			new MutationObserver(function(t) {
				if (!0 !== e && !q) {
					e = !0;
					for (var n = 0; n < t.length; n++) {
						var r = t[n], i = r.target, a = void 0, o = void 0;
						if (!(i && "ownerSVGElement" in i)) {
							if (r.type === "childList") {
								if (a = r.addedNodes) for (var s = 0; s < a.length; s++) a[s].nodeType === 1 && w(a[s], F);
								if (o = r.removedNodes) for (var c = 0; c < o.length; c++) W && o[c].$$paintGeometry && (o[c].$$paintGeometry.live = !1, W && W.unobserve(o[c]));
							} else if (r.type === "attributes" && i.nodeType === 1) {
								if (r.attributeName === "data-css-paint" && r.oldValue && i.$$paintId != null && !i.getAttribute("data-css-paint")) {
									R(i);
									continue;
								}
								w(i, H);
							}
						}
					}
					e = !1;
				}
			}).observe(document.body, {
				childList: !0,
				attributes: !0,
				attributeOldValue: !0,
				subtree: !0
			});
			var n = Object.getOwnPropertyDescriptor(Element.prototype, "setAttribute"), r = n.value;
			n.value = function(e, t) {
				return e === "style" && g.test(t) && (t = A(t), R(this), this.$$needsOverrides = !0, H(this)), r.call(this, e, t);
			}, t(Element.prototype, "setAttribute", n);
			var i = Object.getOwnPropertyDescriptor(Element.prototype, "removeAttribute"), a = i.value;
			i.value = function(e) {
				if (e !== "data-css-paint") return a.call(this, e);
			}, t(Element.prototype, "removeAttribute", i);
			var s = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "style"), c = s.get;
			s.set = function(e) {
				return s.get.call(this).cssText = e;
			}, s.get = function() {
				var e = c.call(this);
				return e.ownerElement !== this && t(e, "ownerElement", { value: this }), e;
			}, t(HTMLElement.prototype, "style", s);
			var l = {}, u = Object.getOwnPropertyDescriptor(CSSStyleDeclaration.prototype, "cssText"), d = u.set;
			u.set = function(e) {
				if (!q && g.test(e)) {
					e &&= A(e);
					var t = this.ownerElement;
					t && (R(t), t.$$needsOverrides = !0, H(t));
				}
				return d.call(this, e);
			}, l.cssText = u, Object.keys((window.CSS2Properties || CSSStyleDeclaration).prototype).filter(function(e) {
				return o.test(e);
			}).forEach(function(e) {
				var t = e.replace(/([A-Z])/g, "-$1").toLowerCase();
				l[e] = {
					configurable: !0,
					enumerable: !0,
					get: function() {
						var e = this.getPropertyPriority(t);
						return this.getPropertyValue(t) + (e ? " !" + e : "");
					},
					set: function(n) {
						var r = String(n).match(/^(.*?)\s*(?:!\s*(important)\s*)?$/);
						return this.setProperty(t, r[1], r[2]), this[e];
					}
				};
			});
			var f = Object.getOwnPropertyDescriptor(CSSStyleDeclaration.prototype, "setProperty"), p = f.value;
			f.value = function(e, t, n) {
				if (!m && !q && g.test(t)) {
					t &&= A(t);
					var r = this.ownerElement;
					r && (R(r), r.$$needsOverrides = !0, H(r));
				}
				p.call(this, e, t, n);
			}, l.setProperty = f, Object.defineProperties(CSSStyleDeclaration.prototype, l), window.CSS2Properties && Object.defineProperties(window.CSS2Properties.prototype, l), addEventListener("resize", function() {
				L("[data-css-paint]");
			});
			var h = { passive: !0 };
			function _(e) {
				for (var t = e.target; t;) t.nodeType === 1 && F(t), t = t.parentNode;
			}
			[
				"animationiteration",
				"animationend",
				"animationstart",
				"transitionstart",
				"transitionend",
				"transitionrun",
				"transitioncancel",
				"mouseover",
				"mouseout",
				"mousedown",
				"mouseup",
				"focus",
				"blur"
			].forEach(function(e) {
				addEventListener(e, _, h);
			}), T(), L("[style*=\"paint\"]");
		})();
	} catch {}
})();
//#endregion
