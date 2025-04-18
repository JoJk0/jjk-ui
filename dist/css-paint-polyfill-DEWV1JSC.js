(function() {
  function ie(e, t) {
    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
      r.readyState === 4 && t(r.responseText);
    }, r.open("GET", e, !0), r.send();
  }
  function V(e, t, r) {
    Object.defineProperty ? Object.defineProperty(e, t, r) : e[t] = r.get();
  }
  var me, $ = window.CSS;
  $ || (window.CSS = $ = {}), $.supports || ($.supports = function e(t, r) {
    if (t == "paint") return !0;
    if (r) {
      var n = D.contentDocument.body;
      return n.style.cssText = t + ":" + r, n.style.cssText.length > 0;
    }
    for (var i, a, o, u, c = /(^|not|(or)|(and))\s*\(\s*(.+?)\s*:(.+?)\)\s*|(.)/gi; o = c.exec(t); ) {
      if (o[6]) return !1;
      u = e(o[4], o[5]), a = o[2] ? a || u : o[3] ? a && u : (i = !o[1], u);
    }
    return a == i;
  }), $.escape || ($.escape = function(e) {
    return e.replace(/([^\w-])/g, "\\$1");
  });
  var ge = {};
  function oe(e, t) {
    var r = parseFloat(e);
    this.value = isNaN(r) ? e : r, this.unit = t;
  }
  $.registerProperty || ($.registerProperty = function(e) {
    ge[e.name] = e;
  }), oe.prototype.toString = function() {
    return this.value + (this.unit == "number" ? "" : this.unit);
  }, oe.prototype.valueOf = function() {
    return this.value;
  }, "Hz Q ch cm deg dpcm dpi ddpx em ex fr grad in kHz mm ms number pc percent pt px rad rem s turn vh vmax vmin vw".split(" ").forEach(function(e) {
    $[e] || ($[e] = function(t) {
      return new oe(t, e);
    });
  });
  var ye = /(background|mask|cursor|-image|-source)/, ae = !!$.paintWorklet;
  ae || (me = new Ve(), V($, "paintWorklet", { enumerable: !0, configurable: !0, get: function() {
    return me;
  } }));
  var se = "css-paint-polyfill", C = document.createElement(se);
  ae || document.documentElement.appendChild(C);
  var D = document.createElement("iframe");
  D.style.cssText = "position:absolute; left:0; top:-999px; width:1px; height:1px;", C.appendChild(D);
  var L = document.createElement("style");
  L.id = se, L.$$isPaint = !0, C.appendChild(L);
  var H = L.sheet, le = C.style, Y = !1, Me = [], E = /(paint\(|-moz-element\(#paint-|-webkit-canvas\(paint-|[('"]blob:[^'"#]+#paint=|[('"]data:image\/paint-)/, z = "getCSSCanvasContext" in document, ue = (le.backgroundImage = "-moz-element(#" + se + ")") === le.backgroundImage, Ae = typeof Promise == "function";
  le.cssText = "display:none !important;";
  var $e = window.requestAnimationFrame || setTimeout, be = function() {
    return window.devicePixelRatio || 1;
  }, we = {}, q = {}, Pe = 0;
  function Fe(e) {
    var t = e.bit ^= 1;
    return e.instances[t] || (e.instances[t] = new e.Painter());
  }
  function He(e, t) {
    var r = e.cssText, n = E.test(r);
    if (t.isNew === !0 && n && r !== (r = I(r)) && (e = function(d, f) {
      for (var b = d.parentStyleSheet, p = d.parentRule, w = (p || b).cssRules, s = w.length - 1, l = 0; l <= s; l++) if (w[l] === d) {
        (p || b).deleteRule(l), s = l;
        break;
      }
      if (f != null) {
        if (p) {
          var v = p.appendRule(f);
          return p.cssRules[v];
        }
        return b.insertRule(f, s), b.cssRules[s];
      }
    }(e, r)), n) {
      var i, a, o, u = e.selectorText, c = ke(e.style);
      if (i = t.counters[u] == null ? t.counters[u] = 1 : ++t.counters[u], q[a = "sheet" + t.sheetId + `
` + u + `
` + i] != null) {
        if ((o = q[a]).selector === u) return o.rule = e, void (o.cssText !== c && t.toProcess.push(o));
        t.toRemove.push(o);
      } else o = q[a] = { key: a, selector: u, cssText: c, properties: {}, rule: e }, t.toProcess.push(o.selector);
    }
  }
  function ce(e, t) {
    if (!("ownerSVGElement" in e)) {
      t(e);
      for (var r = e.firstElementChild; r; ) ce(r, t), r = r.nextElementSibling;
    }
  }
  function pe() {
    for (var e, t = [].slice.call(document.styleSheets), r = { toProcess: [], toRemove: [], counters: {}, isNew: !1, sheetId: null, rules: null }, n = 0; n < t.length; n++) {
      var i = t[n].ownerNode;
      if (!i.$$isPaint) {
        try {
          r.rules = i.sheet.cssRules;
        } catch {
          continue;
        }
        if (r.sheetId = i.$$paintid, r.isNew = r.sheetId == null, r.isNew) {
          if (r.sheetId = i.$$paintid = ++Pe, Ue(i) === !1) continue;
          e = !0;
        }
        xe(i.sheet, He, r);
      }
    }
    for (var a = r.toRemove.length; a--; ) delete q[r.toRemove[a].key];
    r.toProcess.length > 0 && B(r.toProcess.join(", ")), e && B("[data-css-paint]", !0);
  }
  function xe(e, t, r) {
    var n = [[0, e.cssRules]], i = n[0], a = i[1];
    if (a) for (var o = 0; n.length > 0; o++) if (o >= a.length) {
      n.pop();
      var u = n.length;
      u > 0 && (a = (i = n[u - 1])[1], o = i[0]);
    } else {
      i[0] = o;
      var c = a[o];
      if (c.type !== 3) if (c.type === 1) {
        var d = t(c, r);
        d !== void 0 && (r = d);
      } else c.cssRules && c.cssRules.length > 0 && n.push([0, c.cssRules]);
      else {
        if (c.$$isPaint) continue;
        var f = c.media && c.media.mediaText;
        if (f && !self.matchMedia(f).matches || /ts\.g.{7}is\.com\/css/.test(c.href)) continue;
        c.$$isPaint = !0, ie(c.href, Se);
      }
    }
    return r;
  }
  function Ue(e) {
    if (!e.$$isPaint) {
      if (e.href) return ie(e.href, Se), !1;
      for (var t = e.childNodes.length; t--; ) {
        var r = e.childNodes[t].nodeValue, n = I(r);
        n !== r && (e.childNodes[t].nodeValue = n);
      }
    }
  }
  function Se(e) {
    var t = function(i) {
      var a = D.contentDocument.body, o = document.createElement("style");
      return o.media = "print", o.$$paintid = ++Pe, o.appendChild(document.createTextNode(i)), a.appendChild(o), o.sheet.remove = function() {
        return a.removeChild(o);
      }, o.sheet;
    }(I(e));
    try {
      t._ = t.cssRules.length;
    } catch {
      var r = function() {
        t && Re(t), t = null, clearTimeout(n);
      };
      t.ownerNode.onload = t.ownerNode.onerror = r;
      var n = setTimeout(r, 5e3);
      return;
    }
    Re(t);
  }
  function Re(e) {
    var t = "";
    if (xe(e, function(n) {
      if (n.type === 1) {
        for (var i = "", a = 0; a < n.style.length; a++) {
          var o = n.style.item(a), u = n.style.getPropertyValue(o);
          E.test(u) && (i = o + ": " + u + n.style.getPropertyPriority(o) + ";");
        }
        if (i) {
          i = n.selectorText + "{" + i + "}";
          for (var c = n; c = c.parentRule; ) i = "" + c.cssText.match(/^[\s\S]+?\{/)[0] + i + "}";
          t += i;
        }
      }
    }), e.remove(), t) {
      var r = document.createElement("style");
      r.appendChild(document.createTextNode(t)), C.appendChild(r), pe();
    }
  }
  function I(e) {
    return e.replace(/( |;|,|\b)paint\s*\(\s*(['"]?)(.+?)\2\s*\)( |;|,|!|\b|$)/g, "$1url(data:image/paint-$3,=)$4");
  }
  var Oe, Te, _, x = [];
  function U(e, t) {
    t && (e.$$paintObservedProperties = null, e.$$paintGeometry && !e.$$paintGeometry.live && (e.$$paintGeometry = null)), e.$$paintPending !== !0 && (e.$$paintPending = !0, x.indexOf(e) === -1 && x.push(e) === 1 && $e(Ce));
  }
  function Ce() {
    for (var e, t = 0; t < x.length; t++) x[t] && x[t].localName === "style" && (e = !0, x[t] = null);
    if (e) return $e(Ce), void pe();
    var r = x.length && x.some(function(i) {
      return i && i.$$needsOverrides === !0;
    });
    for (r && Ne(); x.length; ) {
      var n = x.pop();
      n && Qe(n);
    }
    r && Ge();
  }
  function B(e, t) {
    try {
      for (var r = document.querySelectorAll(e), n = 0; n < r.length; n++) U(r[n], t);
    } catch {
    }
  }
  function Be(e, t, r) {
    for (var n = e.length, i = function() {
      --n || t.apply(null, r || Me);
    }, a = 0; a < e.length; a++) {
      var o = new Image();
      o.onload = i, o.onerror = onerror, o.src = e[a];
    }
  }
  function j(e) {
    var t = e.$$paintId;
    return t == null && (t = e.$$paintId = ++Xe), t;
  }
  function Ee(e) {
    var t = e.$$paintRule, r = j(e);
    if (Number(e.getAttribute("data-css-paint")) !== r && e.setAttribute("data-css-paint", r), t == null) {
      var n = H.insertRule('[data-css-paint="' + r + '"] {}', H.cssRules.length);
      t = e.$$paintRule = H.cssRules[n];
    }
    return t;
  }
  function ke(e) {
    var t = e.cssText;
    if (t) return t;
    t = "";
    for (var r = 0, n = void 0; r < e.length; r++) n = e[r], r !== 0 && (t += " "), t += n, t += ":", t += e.getPropertyValue(n), t += ";";
    return t;
  }
  function Qe(e) {
    var t = getComputedStyle(e);
    if (e.$$paintObservedProperties && !e.$$needsOverrides) for (var r = 0; r < e.$$paintObservedProperties.length; r++) {
      var n = e.$$paintObservedProperties[r];
      if (t.getPropertyValue(n).trim() !== e.$$paintedPropertyValues[n]) {
        de(e, t);
        break;
      }
    }
    else if (e.$$paintId || E.test(ke(t))) de(e, t);
    else {
      var i = e.getAttribute("style");
      E.test(i) && (e.style.cssText = i.replace(/;\s*$/, "") + "; " + e.style.cssText, de(e));
    }
    e.$$paintPending = !1;
  }
  function J(e) {
    e.$$paintGeometry && !e.$$paintGeometry.live && (e.$$paintGeometry = null), U(e);
  }
  var k = { get: function(e) {
    var t = ge[e], r = t && t.inherits === !1 ? Te.style.getPropertyValue(e) : k.getRaw(e);
    if (r == null && t) r = t.initialValue;
    else if (t && t.syntax) {
      var n = t.syntax.replace(/[<>\s]/g, "");
      typeof $[n] == "function" && (r = $[n](r));
    }
    return typeof r == "string" && (r = r.trim()), r;
  }, getRaw: function(e) {
    if (e in _) return _[e];
    var t = Oe.getPropertyValue(e);
    return typeof t == "string" && (t = t.trim()), _[e] = t;
  } }, N = window.ResizeObserver && new window.ResizeObserver(function(e) {
    for (var t = 0; t < e.length; t++) {
      var r = e[t], n = r.target.$$paintGeometry;
      n ? n.live = !0 : n = r.target.$$paintGeometry = { width: 0, height: 0, live: !0 };
      var i = r.borderBoxSize;
      if (i && i.length && (i = i[0]), i) n.width = 0 | i.inlineSize, n.height = 0 | i.blockSize;
      else {
        var a = getComputedStyle(r.target), o = parseFloat(a.paddingLeft) + parseFloat(a.paddingRight), u = parseFloat(a.paddingTop) + parseFloat(a.paddingBottom);
        n.width = Math.round((r.contentRect.right - r.contentRect.left || r.contentRect.width) + o), n.height = Math.round((r.contentRect.bottom - r.contentRect.top || r.contentRect.height) + u);
      }
      U(r.target, !0);
    }
  }), Xe = 0;
  function de(e, t) {
    e.$$needsOverrides === !0 && Ne();
    var r, n = Oe = t ?? getComputedStyle(e);
    Te = e, _ = {};
    var i = [];
    e.$$paintPending = !1;
    var a = function(T) {
      return T.$$paintGeometry || (T.$$paintGeometry = { width: T.clientWidth, height: T.clientHeight, live: !1 });
    }(e);
    (function(T) {
      N && !T.$$paintGeometry.live && (T.$$paintGeometry.live = !0, N.observe(T));
    })(e), a = { width: a.width, height: a.height };
    for (var o = be(), u = e.$$paintedProperties, c = 0; c < n.length; c++) {
      var d = n[c], f = k.getRaw(d), b = /(,|\b|^)(?:url\((['"]?))?((?:-moz-element\(#|-webkit-canvas\()paint-\d+-([^;,]+)|(?:data:image\/paint-|blob:[^'"#]+#paint=)([^"';, ]+)(?:[;,].*?)?)\2\)(;|,|\s|\b|$)/g, p = "", w = 0, s = [], l = !1, v = !1, h = void 0, g = void 0, O = !1, P = a;
      if (ye.test(d) && d !== "-webkit-border-image") {
        if (/border-image/.test(d)) {
          var S = P.width, De = P.height, ee = fe(k.getRaw("border-image-slice").replace(/\sfill/, "").split(" ")), te = fe(k.getRaw("border-width").split(" ")), re = fe(k.getRaw("border-image-outset").split(" "));
          S += Z(ee.left != "0" && parseFloat(te.left) || 0, re.left || 0, !0), S += Z(ee.right != "0" && parseFloat(te.right) || 0, re.right || 0, !0), De += Z(ee.top != "0" && parseFloat(te.top) || 0, re.top || 0, !0), O = !0, P = { width: S, height: De += Z(ee.bottom != "0" && parseFloat(te.bottom) || 0, re.bottom || 0, !0) };
        }
        for (; g = b.exec(f); ) {
          v === !1 && (h = j(e)), v = !0, p += f.substring(0, g.index);
          var ne = g[4] || g[5], X = g[3], M = we[ne], Le = M && M.Painter.contextOptions || {}, A = O || Le.scaling === !1 ? 1 : o, ve = void 0;
          M && (M.Painter.inputProperties && i.push.apply(i, M.Painter.inputProperties), ve = Fe(M)), Le.nativePixels === !0 && (P.width *= o, P.height *= o, A = 1);
          var K = A * P.width, W = A * P.height, m = e.$$paintContext, R = "paint-" + h + "-" + ne, y = m && m.canvas;
          if (!y || y.width != K || y.height != W || z === !0 && m && R !== m.id) {
            if (z === !0) (m = document.getCSSCanvasContext("2d", R, K, W)).id = R, e.$$paintContext && m.clearRect(0, 0, K, W);
            else {
              var ze = !1;
              y || ((y = document.createElement("canvas")).id = R, ze = ue), y.width = K, y.height = W, ze && (y.style.display = "none", C.appendChild(y)), m = y.getContext("2d");
            }
            e.$$paintContext = m, m.imageSmoothingEnabled = !1, A !== 1 && m.scale(A, A);
          } else m.clearRect(0, 0, K, W);
          if (ve && (m.save(), m.beginPath(), ve.paint(m, P, k), m.closePath(), m.restore(), z === !1 && !ue && "resetTransform" in m && m.resetTransform()), p += g[1], z === !0) p += "-webkit-canvas(" + R + ")", (g[4] == null || y && y.id !== R) && (l = !0);
          else if (ue === !0) p += "-moz-element(#" + R + ")", g[4] == null && (l = !0), y && y.id !== R && (y.id = R, l = !0);
          else {
            var F = y.toDataURL("image/png").replace("/png", "/paint-" + ne);
            if (typeof MSBlobBuilder == "function" && (F = Ke(F, ne)), s.push(F), p += 'url("' + F + '")', F !== X || !r) {
              var Ie = X ? X.indexOf("#") : -1;
              ~Ie && URL.revokeObjectURL(X.substring(0, Ie)), l = !0;
            }
            X = F;
          }
          p += g[6], w = g.index + g[0].length;
        }
        v !== !1 || u == null || u[d] == null ? (p += f.substring(w), l && (r || (r = Ee(e)), u == null && (u = e.$$paintedProperties = {}), u[d] = !0, d.substring(0, 10) === "background" && o !== 1 && G(r.style, "background-size", "100% 100%"), /mask/.test(d) && o !== 1 && (G(r.style, "mask-size", "contain"), z && G(r.style, "-webkit-mask-size", "contain")), /border-image/.test(d) && z && (G(r.style, "border-color", "initial"), G(r.style, "image-rendering", "optimizeSpeed")), s.length === 0 ? G(r.style, d, p) : Be(s, G, [r.style, d, p]))) : (r || (r = Ee(e)), r.style.removeProperty(d), N && N.unobserve(e), e.$$paintGeometry && (e.$$paintGeometry.live = !1));
      }
    }
    e.$$paintObservedProperties = i.length === 0 ? null : i;
    for (var We = e.$$paintedPropertyValues = {}, he = 0; he < i.length; he++) {
      var je = i[he];
      We[je] = k.getRaw(je);
    }
    e.$$needsOverrides === !0 && Ge(), e.$$needsOverrides = null;
  }
  var Q = 0;
  function Ne() {
    Q++ || (L.disabled = !0);
  }
  function Ge() {
    --Q || (L.disabled = !1);
  }
  function Ke(e, t) {
    for (var r = atob(e.split(",")[1]), n = new Uint8Array(r.length), i = 0; i < r.length; i++) n[i] = r.charCodeAt(i);
    return URL.createObjectURL(new Blob([n])) + "#paint=" + t;
  }
  function G(e, t, r) {
    var n = Y;
    Y = !0, e.setProperty(t, r, "important"), Y = n;
  }
  function Z(e, t, r) {
    var n = r ? 0 : e, i = parseFloat(t);
    return t ? t.match("px") ? n + i : (t.match("%") && (i /= 100), e * i) : n;
  }
  function fe(e) {
    return { top: e[0], bottom: e[2] || e[0], left: e[3] || e[1] || e[0], right: e[1] || e[0] };
  }
  function Ve() {
  }
  if (Ve.prototype.addModule = function(e) {
    var t, r, n = this;
    return Ae && (t = new Promise(function(i) {
      return r = i;
    })), ie(e, function(i) {
      var a = { registerPaint: function(u, c) {
        (function(d, f, b) {
          we[d] = { worklet: b, Painter: f, properties: f.inputProperties ? [].slice.call(f.inputProperties) : [], bit: 0, instances: [] };
          for (var p = "", w = H.cssRules.length; w--; ) {
            var s = H.cssRules[w];
            s.style.cssText.indexOf("-" + d) !== -1 && (p += s.selectorText);
          }
          p && B(p, !0);
        })(u, c, { context: a, realm: o });
      } };
      V(a, "devicePixelRatio", { get: be }), a.self = a;
      var o = new function(u, c) {
        var d = document.createElement("iframe");
        d.style.cssText = "position:absolute; left:0; top:-999px; width:1px; height:1px;", c.appendChild(d);
        var f = d.contentWindow, b = f.document, p = "var window,$hook";
        for (var w in f) w in u || w === "eval" || (p += ",", p += w);
        for (var s in u) p += ",", p += s, p += "=self.", p += s;
        var l = b.createElement("script");
        l.appendChild(b.createTextNode(`function $hook(self,console) {"use strict";
		` + p + ";return function() {return eval(arguments[0])}}")), b.body.appendChild(l), this.exec = f.$hook(u, console);
      }(a, D.contentDocument && D.contentDocument.body || C);
      i = (n.transpile || String)(i), o.exec(i), r && r();
    }), t;
  }, !ae) try {
    (function() {
      var e = !1;
      new MutationObserver(function(s) {
        if (e !== !0 && !Q) {
          e = !0;
          for (var l = 0; l < s.length; l++) {
            var v = s[l], h = v.target, g = void 0, O = void 0;
            if (!(h && "ownerSVGElement" in h)) {
              if (v.type === "childList") {
                if (g = v.addedNodes) for (var P = 0; P < g.length; P++) g[P].nodeType === 1 && ce(g[P], U);
                if (O = v.removedNodes) for (var S = 0; S < O.length; S++) N && O[S].$$paintGeometry && (O[S].$$paintGeometry.live = !1, N && N.unobserve(O[S]));
              } else if (v.type === "attributes" && h.nodeType === 1) {
                if (v.attributeName === "data-css-paint" && v.oldValue && h.$$paintId != null && !h.getAttribute("data-css-paint")) {
                  j(h);
                  continue;
                }
                ce(h, J);
              }
            }
          }
          e = !1;
        }
      }).observe(document.body, { childList: !0, attributes: !0, attributeOldValue: !0, subtree: !0 });
      var t = Object.getOwnPropertyDescriptor(Element.prototype, "setAttribute"), r = t.value;
      t.value = function(s, l) {
        return s === "style" && E.test(l) && (l = I(l), j(this), this.$$needsOverrides = !0, J(this)), r.call(this, s, l);
      }, V(Element.prototype, "setAttribute", t);
      var n = Object.getOwnPropertyDescriptor(Element.prototype, "removeAttribute"), i = n.value;
      n.value = function(s) {
        if (s !== "data-css-paint") return i.call(this, s);
      }, V(Element.prototype, "removeAttribute", n);
      var a = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "style"), o = a.get;
      a.set = function(s) {
        return a.get.call(this).cssText = s;
      }, a.get = function() {
        var s = o.call(this);
        return s.ownerElement !== this && V(s, "ownerElement", { value: this }), s;
      }, V(HTMLElement.prototype, "style", a);
      var u = {}, c = Object.getOwnPropertyDescriptor(CSSStyleDeclaration.prototype, "cssText"), d = c.set;
      c.set = function(s) {
        if (!Q && E.test(s)) {
          s = s && I(s);
          var l = this.ownerElement;
          l && (j(l), l.$$needsOverrides = !0, J(l));
        }
        return d.call(this, s);
      }, u.cssText = c, Object.keys((window.CSS2Properties || CSSStyleDeclaration).prototype).filter(function(s) {
        return ye.test(s);
      }).forEach(function(s) {
        var l = s.replace(/([A-Z])/g, "-$1").toLowerCase();
        u[s] = { configurable: !0, enumerable: !0, get: function() {
          var v = this.getPropertyPriority(l);
          return this.getPropertyValue(l) + (v ? " !" + v : "");
        }, set: function(v) {
          var h = String(v).match(/^(.*?)\s*(?:!\s*(important)\s*)?$/);
          return this.setProperty(l, h[1], h[2]), this[s];
        } };
      });
      var f = Object.getOwnPropertyDescriptor(CSSStyleDeclaration.prototype, "setProperty"), b = f.value;
      f.value = function(s, l, v) {
        if (!Y && !Q && E.test(l)) {
          l = l && I(l);
          var h = this.ownerElement;
          h && (j(h), h.$$needsOverrides = !0, J(h));
        }
        b.call(this, s, l, v);
      }, u.setProperty = f, Object.defineProperties(CSSStyleDeclaration.prototype, u), window.CSS2Properties && Object.defineProperties(window.CSS2Properties.prototype, u), addEventListener("resize", function() {
        B("[data-css-paint]");
      });
      var p = { passive: !0 };
      function w(s) {
        for (var l = s.target; l; ) l.nodeType === 1 && U(l), l = l.parentNode;
      }
      ["animationiteration", "animationend", "animationstart", "transitionstart", "transitionend", "transitionrun", "transitioncancel", "mouseover", "mouseout", "mousedown", "mouseup", "focus", "blur"].forEach(function(s) {
        addEventListener(s, w, p);
      }), pe(), B('[style*="paint"]');
    })();
  } catch {
  }
})();
