import * as wn from "vue";
import { getCurrentInstance as se, getCurrentScope as Ke, effectScope as tn, onScopeDispose as _t, ref as P, watch as H, isRef as jt, toValue as ee, defineComponent as T, computed as w, createElementBlock as X, openBlock as _, normalizeStyle as lt, normalizeClass as V, unref as m, createBlock as S, resolveDynamicComponent as qe, inject as nn, provide as Nn, watchEffect as le, triggerRef as Bo, nextTick as Z, mergeModels as Ye, useTemplateRef as Ro, useModel as it, onMounted as Ce, useAttrs as Io, createCommentVNode as ae, withDirectives as ge, mergeProps as U, vModelDynamic as Lo, vModelText as Mo, toDisplayString as ye, useId as jn, onUnmounted as $t, onBeforeUnmount as on, Teleport as Un, renderSlot as D, createVNode as j, withCtx as k, createTextVNode as Le, Transition as Cn, createElementVNode as Kn, vShow as dt, Fragment as tt, renderList as Ut, withKeys as Fo, readonly as qn, shallowRef as Yn, customRef as Vo, mergeDefaults as De, useCssVars as Ho, shallowReadonly as He, Comment as Gn, cloneVNode as zo, h as yt, toRefs as sn, toHandlerKey as Wo, camelize as Xn, toRef as No, reactive as Jn, watchPostEffect as Qn, normalizeProps as an, guardReactiveProps as ln, toHandlers as jo, useSlots as Uo, withModifiers as Ko } from "vue";
import { i as Pe, g as qo, a as Ee, b as je, c as I, d as Ge, m as Yo, e as nt, f as Go, h as Xo, t as Jo, j as On, _ as Be } from "./setup-Cj7PfWJ6.js";
import { A as wr } from "./setup-Cj7PfWJ6.js";
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
const Qo = (e) => {
  const t = ee(e);
  return t ? t.flatMap(
    (n) => Object.keys(n).filter((o) => o && n[o]).flatMap((o) => o.split(" "))
  ) : [];
};
function G(...e) {
  const t = Array.isArray(e.at(-1)) ? void 0 : e.at(-1), n = Array.isArray(e.at(-1)) ? e : e.slice(0, -1), o = se();
  if (!o)
    throw new Error(
      "defineClasses must be called within a component setup function."
    );
  if (!Ke() && !(t != null && t.scope))
    throw new Error(
      "defineClasses must be called within a current active effect scope."
    );
  const i = (t == null ? void 0 : t.scope) || tn();
  Ke() && _t(() => {
    i && i.stop();
  });
  const s = P([]);
  return s.value = n.map((a, l) => {
    const u = a[0], d = a[1], c = a[2], r = a[3];
    function p() {
      const f = Zo(
        o,
        u,
        d,
        ee(c) || void 0
      ), v = !Pe(r) || ee(r);
      return { [f]: v };
    }
    return i.run(() => {
      H(
        () => {
          var f;
          return (f = o.proxy) == null ? void 0 : f.$props[u];
        },
        () => {
          const f = p();
          s.value[l] = f;
        }
      ), Pe(c) && jt(c) && H(c, (f, v) => {
        if (f === v) return;
        const y = p();
        s.value[l] = y;
      }), Pe(r) && jt(r) && H(r, (f, v) => {
        if (f === v) return;
        const y = s.value[l];
        Object.keys(y).forEach(
          (g) => y[g] = f
        ), s.value[l] = y;
      });
    }), p();
  }), s;
}
function Zo(e, t, n, o = "") {
  var i;
  const s = Mt(e), a = (i = e.proxy) == null ? void 0 : i.$options.configField;
  if (!a)
    throw new Error("component must define the 'configField' option.");
  const l = s.override === !0 ? {} : qo();
  let u = Ee(
    l,
    `${a}.${t}.class`,
    ""
  ) || Ee(
    l,
    `${a}.${t}`,
    ""
  ), d = Ee(
    s,
    t,
    ""
  );
  if (Array.isArray(d) && (d = d.join(" ")), typeof d == "function") {
    const g = Mt(e);
    d = d(o, g);
  } else
    d = En(d, o);
  if (Array.isArray(u) && (u = u.join(" ")), typeof u == "function") {
    const g = Mt(e);
    u = u(o, g);
  } else
    u = En(u, o);
  n.includes("{*}") ? n = n.replace(
    /\{\*\}/g,
    je(o)
  ) : n = n + je(o);
  const c = s.override || Ee(l, "override", !1), r = Ee(
    l,
    `${a}.override`,
    c
  );
  let f = `${Ee(
    l,
    `${a}.${t}.override`,
    r
  ) ? "" : n} ${je(u)} ${je(d)}`.trim().replace(/\s\s+/g, " ");
  const v = Ee(
    l,
    "transformClasses",
    void 0
  ), y = Ee(
    l,
    `${a}.transformClasses`,
    void 0
  );
  return y ? f = y(f) : v && (f = v(f)), f;
}
function En(e, t) {
  return je(e).split(" ").filter((n) => n.length > 0).map((n) => n + je(t)).join(" ");
}
const Mt = (e) => {
  var t;
  let n = ((t = e.proxy) == null ? void 0 : t.$props) || {};
  return n = Object.keys(n).filter((o) => o.endsWith("Props")).map((o) => n[o]).reduce((o, i) => ({ ...o, ...i }), n), n;
};
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
const ei = {
  sizes: {
    default: "mdi-24px",
    small: "",
    medium: "mdi-36px",
    large: "mdi-48px"
  },
  iconPrefix: "mdi-"
}, ze = () => {
  const t = Ge("iconComponent") ? "" : "fa-";
  return {
    sizes: {
      default: "",
      small: "sm",
      medium: "lg",
      large: "xl"
    },
    iconPrefix: t,
    internalIcons: {
      check: "check",
      information: "info-circle",
      alert: "exclamation-triangle",
      "alert-circle": "exclamation-circle",
      "arrow-up": "arrow-up",
      "chevron-right": "angle-right",
      "chevron-left": "angle-left",
      "chevron-down": "angle-down",
      "chevron-up": "angle-up",
      eye: "eye",
      "eye-off": "eye-slash",
      "caret-down": "caret-down",
      "caret-up": "caret-up",
      "close-circle": "times-circle",
      close: "times",
      loading: "circle-notch"
    }
  };
}, ti = () => {
  let e = {
    mdi: ei,
    fa: ze(),
    fas: ze(),
    far: ze(),
    fad: ze(),
    fab: ze(),
    fal: ze()
  };
  const t = Ge("customIconPacks");
  return t && (e = Yo(e, t, !0)), e;
}, bt = /* @__PURE__ */ T({
  isOruga: !0,
  name: "OIcon",
  configField: "icon",
  __name: "Icon",
  props: {
    override: { type: Boolean, default: void 0 },
    icon: { default: void 0 },
    component: { default: () => I("iconComponent") },
    pack: { default: () => I("iconPack", "mdi") },
    variant: { default: () => I("icon.variant") },
    size: { default: () => I("icon.size") },
    customSize: { default: void 0 },
    customClass: { default: void 0 },
    clickable: { type: Boolean, default: !1 },
    spin: { type: Boolean, default: !1 },
    rotation: { default: void 0 },
    both: { type: Boolean, default: !1 },
    rootClass: {},
    clickableClass: {},
    spinClass: {},
    sizeClass: {},
    variantClass: {}
  },
  setup(e) {
    const t = e, n = w(() => {
      const r = {};
      return t.rotation && (r.transform = `rotate(${t.rotation}deg)`), r;
    }), o = w(() => ti()[t.pack]), i = w(
      () => {
        var r;
        return (r = o.value) != null && r.iconPrefix ? o.value.iconPrefix : "";
      }
    ), s = w(() => {
      var r;
      if ((r = o.value) != null && r.sizes) {
        if (t.size && o.value.sizes[t.size] !== void 0)
          return o.value.sizes[t.size];
        if (o.value.sizes.default)
          return o.value.sizes.default;
      }
      return null;
    }), a = w(
      () => `${i.value}${d(t.icon)}`
    ), l = w(() => t.customSize || s.value), u = w(() => {
      if (!t.variant) return;
      let r = "";
      return typeof t.variant == "string" ? r = t.variant : r = Object.keys(t.variant).filter(
        (p) => t.variant[p]
      )[0], r;
    });
    function d(r) {
      var p, f;
      return t.both && (p = o.value) != null && p.internalIcons && (f = o.value) != null && f.internalIcons[r] ? o.value.internalIcons[r] : r;
    }
    const c = G(
      ["rootClass", "o-icon"],
      [
        "clickableClass",
        "o-icon--clickable",
        null,
        w(() => t.clickable)
      ],
      ["spinClass", "o-icon--spin", null, w(() => t.spin)],
      [
        "sizeClass",
        "o-icon--",
        w(() => t.size),
        w(() => !!t.size)
      ],
      [
        "variantClass",
        "o-icon--",
        u,
        w(() => !!u.value)
      ]
    );
    return (r, p) => (_(), X("span", {
      class: V(m(c)),
      "data-oruga": "icon",
      style: lt(n.value)
    }, [
      r.component ? (_(), S(qe(r.component), {
        key: 0,
        icon: [r.pack, a.value],
        size: l.value,
        class: V([r.customClass])
      }, null, 8, ["icon", "size", "class"])) : (_(), X("i", {
        key: 1,
        class: V([r.pack, a.value, l.value, r.customClass])
      }, null, 2))
    ], 6));
  }
});
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
const ni = Symbol("FielData");
function Zn() {
  const e = nn(
    ni,
    w(() => {
    })
  ), t = w(() => {
    var s;
    if ((s = e == null ? void 0 : e.value) != null && s.message)
      return e == null ? void 0 : e.value.message;
  }), n = w(() => {
    var s;
    if ((s = e == null ? void 0 : e.value) != null && s.variant) {
      if (typeof e.value.variant == "string")
        return e.value.variant;
      if (Array.isArray(e.value.variant)) {
        for (const a in e.value.variant)
          if (e.value.variant[a]) return a;
      }
    }
  }), o = Ge("statusVariantIcon", {
    success: "check",
    danger: "alert-circle",
    info: "information",
    warning: "alert"
  }), i = w(() => !n.value || !o ? "" : o[n.value] || "");
  return {
    parentField: e,
    statusVariant: n,
    statusVariantIcon: i,
    statusMessage: t
  };
}
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
function ce(e) {
  const t = ee(e);
  return (t == null ? void 0 : t.$el) ?? t;
}
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
const _e = typeof window < "u", eo = typeof window > "u";
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
const oi = eo ? [] : [
  HTMLButtonElement,
  HTMLFieldSetElement,
  HTMLInputElement,
  HTMLObjectElement,
  HTMLOutputElement,
  HTMLSelectElement,
  HTMLTextAreaElement
];
function An(e) {
  return oi.some((t) => e instanceof t) ? e : null;
}
const ii = [
  "disabled",
  "required",
  "pattern",
  "maxlength",
  "minlength",
  "max",
  "min",
  "step"
];
function si(e, t, n) {
  const { parentField: o } = Zn(), i = w(() => {
    const g = ce(e);
    if (!g) return;
    if (g.getAttribute("data-oruga-input"))
      return g;
    const b = g.querySelector("[data-oruga-input]");
    if (!b) {
      console.warn(
        "useInputHandler: Underlaying Oruga input component not found"
      );
      return;
    }
    return b;
  }), s = w(() => {
    const g = i.value;
    return g || console.warn("useInputHandler: inputRef contains no element"), g;
  }), a = P(!1);
  function l() {
    Z(() => {
      s.value && s.value.focus();
    });
  }
  function u() {
    Z(() => {
      s.value && s.value.click();
    });
  }
  function d(g) {
    a.value = !1, o != null && o.value && o.value.setFocus(!1), t("blur", g || new Event("blur")), f();
  }
  function c(g) {
    a.value = !0, o != null && o.value && o.value.setFocus(!0), t("focus", g || new Event("focus"));
  }
  const r = P(!0);
  function p(g, b) {
    Z(() => {
      o != null && o.value && (o.value.props.variant || o.value.setVariant(g), o.value.props.message || o.value.setMessage(b));
    });
  }
  function f() {
    n.useHtml5Validation && s.value && (s.value.validity.valid ? (p(null, null), r.value = !0) : (v(), r.value = !1));
  }
  function v() {
    var g;
    const b = "danger", h = (g = s.value) == null ? void 0 : g.validationMessage;
    p(b, h);
  }
  function y(g) {
    f();
    const b = An(g.target);
    if (b && (o != null && o.value) && n.useHtml5Validation) {
      g.preventDefault();
      let h = !1;
      if (b.form != null) {
        const C = b.form.elements;
        for (let E = 0; E < C.length; ++E) {
          const x = An(
            C.item(E)
          );
          if (x != null && x.willValidate && !x.validity.valid) {
            h = b === x;
            break;
          }
        }
      }
      if (h) {
        const C = o.value.$el, E = Ge("invalidHandler");
        if (!C) return;
        if (E instanceof Function)
          E(b, C);
        else {
          const x = C ? C.scrollIntoView != null : !1;
          b.focus({ preventScroll: x }), x && C.scrollIntoView({ block: "nearest" });
        }
      }
    }
    t("invalid", g);
  }
  if (!eo) {
    const g = P(null);
    le(() => {
      if (g.value, !(n.useHtml5Validation ?? !0)) return;
      const C = i.value;
      if (!Pe(C)) return;
      const E = n.customValidity ?? "";
      typeof E == "string" ? C.setCustomValidity(E) : C.setCustomValidity(
        E(n.modelValue, C.validity)
      ), r.value || f();
    }), H(
      [i, () => n.useHtml5Validation ?? !0],
      (C, E) => {
        const x = C[0], $ = C[1], A = E[0], B = E[1];
        x !== A ? A == null || A.setCustomValidity("") : B && !$ && (x == null || x.setCustomValidity(""));
      }
    );
    const b = () => {
      Bo(g);
    };
    let h = null;
    H(
      [
        i,
        r,
        () => n.useHtml5Validation ?? !0,
        () => n.customValidity
      ],
      (C, E) => {
        const x = C[0], $ = C[1], A = C[2], B = C[3] instanceof Function, W = E[0], F = Pe(x) && A && // For inputs known to be invalid, changes in constraint validation properties
        // may make it so the field is now valid and the message needs to be hidden.
        // For browser-implemented constraint validation (e.g. the `required` attribute),
        // we just care about the message displayed to the user, which is hidden for valid inputs
        // until the next interaction with the control.
        (!$ || // For inputs with complex custom validation, any changes to validation-related attributes
        // may affect the results of `props.customValidity`.
        B);
        if ((!F || x !== W) && h != null && (h.takeRecords().length > 0 && b(), h.disconnect()), F && Pe(x) && x !== W) {
          h == null && (h = new MutationObserver(
            b
          )), h.observe(x, {
            attributeFilter: ii
          });
          let R = x;
          for (; R = R.parentNode; )
            R instanceof HTMLFieldSetElement && h.observe(R, {
              attributeFilter: ["disabled"]
            });
        }
      }
    );
  }
  return {
    input: s,
    isFocused: a,
    isValid: r,
    setFocus: l,
    doClick: u,
    onFocus: c,
    onBlur: d,
    onInvalid: y,
    checkHtml5Validity: f
  };
}
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
function to(e, t, n) {
  let o;
  return (...i) => {
    const s = () => {
      o = void 0, e.apply(this, i);
    };
    o && clearTimeout(o), o = setTimeout(s, t);
  };
}
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
const ai = ["id", "data-oruga-input", "type", "maxlength", "autocomplete", "placeholder", "disabled"], li = ["id", "maxlength", "placeholder", "disabled"], ri = /* @__PURE__ */ T({
  isOruga: !0,
  name: "OInput",
  configField: "input",
  inheritAttrs: !1,
  __name: "Input",
  props: /* @__PURE__ */ Ye({
    override: { type: Boolean, default: void 0 },
    modelValue: { default: void 0 },
    number: {},
    type: { default: "text" },
    size: { default: () => I("input.size") },
    variant: { default: () => I("input.variant") },
    placeholder: { default: void 0 },
    expanded: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    passwordReveal: { type: Boolean, default: !1 },
    maxlength: { default: void 0 },
    counter: { type: Boolean, default: () => I("input.counter", !1) },
    autosize: { type: Boolean, default: !1 },
    iconPack: { default: () => I("input.iconPack") },
    icon: { default: () => I("input.icon") },
    iconClickable: { type: Boolean, default: !1 },
    iconRight: { default: () => I("input.iconRight") },
    iconRightClickable: { type: Boolean, default: !1 },
    iconRightVariant: { default: void 0 },
    clearable: { type: Boolean, default: () => I("input.clearable", !1) },
    clearIcon: { default: () => I("input.clearIcon", "close-circle") },
    statusIcon: { type: Boolean, default: () => I("statusIcon", !0) },
    debounce: { default: () => I("autocomplete.debounce", 400) },
    autocomplete: { default: () => I("input.autocomplete", "off") },
    id: { default: () => jn() },
    useHtml5Validation: { type: Boolean, default: () => I("useHtml5Validation", !0) },
    customValidity: { type: [String, Function], default: "" },
    rootClass: {},
    expandedClass: {},
    textareaClass: {},
    iconLeftSpaceClass: {},
    iconRightSpaceClass: {},
    inputClass: {},
    roundedClass: {},
    disabledClass: {},
    iconLeftClass: {},
    iconRightClass: {},
    hasIconRightClass: {},
    counterClass: {},
    sizeClass: {},
    variantClass: {}
  }, {
    modelValue: {
      // cast incomming value to string
      default: void 0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ye(["update:model-value", "input", "focus", "blur", "invalid", "icon-click", "icon-right-click"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    var o;
    const i = e, s = n, a = Ro("inputElement"), {
      checkHtml5Validity: l,
      onBlur: u,
      onFocus: d,
      onInvalid: c,
      setFocus: r,
      isValid: p,
      isFocused: f
    } = si(a, s, i), { parentField: v, statusVariant: y, statusVariantIcon: g } = Zn(), b = it(e, "modelValue", {
      // cast incomming value to string
      get: (O) => typeof O < "u" ? String(O) : "",
      // cast outgoing value to number if prop number is true
      set: (O) => typeof O > "u" ? O : nt(i.number) ? Number(O) : String(O)
    });
    i.id && ((o = v == null ? void 0 : v.value) == null || o.setInputId(i.id));
    const h = w(
      () => typeof b.value == "string" || typeof b.value == "number" ? String(b.value).length : 0
    );
    Ce(() => {
      H(
        () => b.value,
        (O) => {
          v != null && v.value && v.value.setFilled(!!O), i.autosize && E(), p.value || l();
        },
        { immediate: !0, flush: "post" }
      );
    });
    const C = P("auto");
    function E() {
      C.value = "auto", Z(() => {
        if (i.type !== "textarea" || !a.value) return;
        const O = a.value.scrollHeight;
        C.value = O + "px";
      });
    }
    const x = w(
      () => i.type === "textarea" && i.autosize ? {
        resize: "none",
        height: C.value,
        overflow: "hidden"
      } : {}
    );
    let $;
    H(
      () => i.debounce,
      (O) => $ = to(A, O || 0),
      { immediate: !0 }
    );
    function A(O) {
      const M = O.target.value;
      s("input", M, O);
    }
    const B = w(() => !!(i.passwordReveal || i.statusIcon && g.value || i.clearable && b.value && i.clearIcon || i.iconRight)), W = w(() => i.passwordReveal ? q.value : i.clearable && b.value && i.clearIcon ? i.clearIcon : i.iconRight ? i.iconRight : g.value), F = w(
      () => i.passwordReveal || i.iconRight ? i.iconRightVariant || i.variant : y.value
    );
    function R(O) {
      s("icon-click", O), Z(() => r());
    }
    function K(O) {
      i.passwordReveal ? Q() : i.clearable && (b.value = nt(i.number) ? 0 : ""), i.iconRightClickable && (s("icon-right-click", O), Z(() => r()));
    }
    const z = P(!1), L = w(() => i.passwordReveal ? z.value ? "text" : "password" : i.type), q = w(
      () => z.value ? "eye-off" : "eye"
    );
    function Q() {
      z.value = !z.value, Z(() => r());
    }
    const J = Io(), te = w(() => {
      var O;
      return {
        ...(O = v == null ? void 0 : v.value) == null ? void 0 : O.inputAttrs,
        ...J
      };
    }), ne = G(
      ["rootClass", "o-input__wrapper"],
      [
        "expandedClass",
        "o-input__wrapper--expanded",
        null,
        w(() => i.expanded)
      ],
      [
        "hasIconRightClass",
        "o-input__wrapper--has-icon-right",
        null,
        B
      ]
    ), Ve = G(
      ["inputClass", "o-input"],
      ["roundedClass", "o-input--rounded", null, w(() => i.rounded)],
      [
        "sizeClass",
        "o-input--",
        w(() => i.size),
        w(() => !!i.size)
      ],
      [
        "variantClass",
        "o-input--",
        w(() => y.value || i.variant),
        w(() => !!y.value || !!i.variant)
      ],
      [
        "disabledClass",
        "o-input--disabled",
        null,
        w(() => i.disabled)
      ],
      [
        "textareaClass",
        "o-input__textarea",
        null,
        w(() => i.type === "textarea")
      ],
      [
        "iconLeftSpaceClass",
        "o-input--iconspace-left",
        null,
        w(() => !!i.icon)
      ],
      ["iconRightSpaceClass", "o-input--iconspace-right", null, B]
    ), Rt = G(["iconLeftClass", "o-input__icon-left"]), It = G([
      "iconRightClass",
      "o-input__icon-right"
    ]), Lt = G(["counterClass", "o-input__counter"]);
    return t({ focus: r, value: b }), (O, M) => (_(), X("div", {
      "data-oruga": "input",
      class: V(m(ne))
    }, [
      O.icon ? (_(), S(bt, {
        key: 0,
        class: V(m(Rt)),
        clickable: O.iconClickable,
        icon: O.icon,
        pack: O.iconPack,
        size: O.size,
        onClick: R
      }, null, 8, ["class", "clickable", "icon", "pack", "size"])) : ae("", !0),
      O.type !== "textarea" ? ge((_(), X("input", U({ key: 1 }, te.value, {
        id: O.id,
        ref: "inputElement",
        "onUpdate:modelValue": M[0] || (M[0] = (N) => b.value = N),
        "data-oruga-input": L.value,
        type: L.value,
        class: m(Ve),
        maxlength: O.maxlength,
        autocomplete: O.autocomplete,
        placeholder: O.placeholder,
        disabled: O.disabled,
        onBlur: M[1] || (M[1] = //@ts-ignore
        (...N) => m(u) && m(u)(...N)),
        onFocus: M[2] || (M[2] = //@ts-ignore
        (...N) => m(d) && m(d)(...N)),
        onInvalid: M[3] || (M[3] = //@ts-ignore
        (...N) => m(c) && m(c)(...N)),
        onInput: M[4] || (M[4] = //@ts-ignore
        (...N) => m($) && m($)(...N))
      }), null, 16, ai)), [
        [Lo, b.value]
      ]) : ge((_(), X("textarea", U({ key: 2 }, te.value, {
        id: O.id,
        ref: "inputElement",
        "onUpdate:modelValue": M[5] || (M[5] = (N) => b.value = N),
        "data-oruga-input": "textarea",
        class: m(Ve),
        maxlength: O.maxlength,
        style: x.value,
        placeholder: O.placeholder,
        disabled: O.disabled,
        onBlur: M[6] || (M[6] = //@ts-ignore
        (...N) => m(u) && m(u)(...N)),
        onFocus: M[7] || (M[7] = //@ts-ignore
        (...N) => m(d) && m(d)(...N)),
        onInvalid: M[8] || (M[8] = //@ts-ignore
        (...N) => m(c) && m(c)(...N)),
        onInput: M[9] || (M[9] = //@ts-ignore
        (...N) => m($) && m($)(...N))
      }), null, 16, li)), [
        [Mo, b.value]
      ]),
      B.value ? (_(), S(bt, {
        key: 3,
        class: V(m(It)),
        clickable: O.passwordReveal || O.clearable || O.iconRightClickable,
        icon: W.value,
        pack: O.iconPack,
        size: O.size,
        variant: F.value,
        both: "",
        onClick: K
      }, null, 8, ["class", "clickable", "icon", "pack", "size", "variant"])) : ae("", !0),
      O.maxlength && O.counter && m(f) && O.type !== "number" ? (_(), X("small", {
        key: 4,
        class: V(m(Lt))
      }, ye(h.value) + " / " + ye(O.maxlength), 3)) : ae("", !0)
    ], 2));
  }
});
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
function no(e = 0) {
  let t = e;
  function n() {
    return String(t++);
  }
  return {
    nextSequence: n,
    sequence: t
  };
}
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
function ui(e) {
  var t;
  const n = se();
  if (!n)
    throw new Error(
      "useProviderChild must be called within a component setup function."
    );
  const o = (t = n.proxy) == null ? void 0 : t.$options.configField, i = (e == null ? void 0 : e.key) || o, s = P([]);
  if (e != null && e.rootRef) {
    const d = to((c) => {
      const r = ce(e.rootRef);
      if (!r) return;
      const p = c.map((y) => `[data-id="${i}-${y.identifier}"]`).join(","), f = r.querySelectorAll(p), v = Array.from(f).map(
        (y) => {
          var g;
          return (g = y.getAttribute("data-id")) == null ? void 0 : g.replace(`${i}-`, "");
        }
      );
      c.forEach(
        (y) => y.index = v.indexOf(`${y.identifier}`)
      ), c.sort((y, g) => y.index - g.index);
    }, 500);
    H(s, d);
  }
  const { nextSequence: a } = no(1);
  function l(d) {
    const c = s.value.length, r = a(), p = { index: c, data: d, identifier: r };
    return s.value = [
      ...s.value,
      p
    ], p;
  }
  function u(d) {
    s.value = s.value.filter((c) => c !== d);
  }
  return Nn("$o-" + i, {
    registerItem: l,
    unregisterItem: u,
    data: e == null ? void 0 : e.data
  }), {
    childItems: s
  };
}
function ci(e) {
  var t, n;
  e = Object.assign({ needParent: !0, register: !0 }, e);
  const o = se();
  if (!o)
    throw new Error(
      "useProviderChild must be called within a component setup function."
    );
  const i = (t = o.proxy) == null ? void 0 : t.$options.configField, s = (e == null ? void 0 : e.key) || i, a = nn("$o-" + s, void 0);
  if (e.needParent && !a)
    throw new Error(
      `You should wrap ${(n = o.proxy) == null ? void 0 : n.$options.name} in a ${s} component`
    );
  const l = P();
  return a && e.register && (l.value = a.registerItem(
    e == null ? void 0 : e.data
  )), $t(() => {
    a && l.value && a.unregisterItem(l.value);
  }), { parent: (a == null ? void 0 : a.data) || P(), item: l };
}
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
function di(e) {
  if (e.style.position === "fixed" || !e)
    return document.documentElement;
  let t = !1, n = e.parentElement;
  for (; !t && Pe(n) && n !== document.documentElement; ) {
    const { overflow: o, overflowY: i } = getComputedStyle(n), { scrollHeight: s, clientHeight: a } = n;
    if (t = /(auto|scroll)/.test(`${o}${i}`) && s > a, t) break;
    n = n.parentElement;
  }
  return n;
}
const fi = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "PositionWrapper",
  props: {
    teleport: {
      type: [Boolean, String, Object],
      required: !0
    },
    trigger: {
      type: Object,
      default: void 0
    },
    /**
     * Position of the component relative to the trigger
     * @values auto, top, bottom, left, right, top-right, top-left, bottom-left, bottom-right
     */
    position: {
      type: String,
      validator: (e) => [
        "auto",
        "top",
        "bottom",
        "left",
        "right",
        "top-right",
        "top-left",
        "bottom-left",
        "bottom-right"
      ].includes(e),
      required: !0
    },
    /** Used for calculation position auto */
    defaultPosition: {
      type: String,
      validator: (e) => ["top", "bottom", "left", "right"].includes(e),
      default: "top"
    },
    /** disable the position calculation */
    disabled: { type: Boolean, default: !1 },
    /** update positioning on teleport */
    disablePositioning: { type: Boolean, default: !0 }
  },
  emits: ["update:position"],
  setup(e, { emit: t }) {
    const n = {
      top: "bottom",
      bottom: "top",
      right: "left",
      left: "right"
    }, o = e, i = t, s = w(
      () => typeof o.teleport == "boolean" ? "body" : o.teleport
    ), a = w(
      () => typeof o.teleport == "boolean" || !o.teleport ? !o.teleport : !1
    ), l = P();
    function u(h) {
      return l.value = h, Z(() => {
        v(), p();
      }), h;
    }
    const d = o.position, c = P();
    let r;
    _e && window.ResizeObserver && (r = new window.ResizeObserver(v)), H(
      () => o.disabled,
      () => {
        o.disabled ? f() : p();
      },
      { immediate: !0, flush: "post" }
    ), H(
      [
        () => !!o.trigger,
        () => o.disablePositioning,
        () => o.disabled
      ],
      () => v(),
      { immediate: !0, flush: "post" }
    ), on(() => f());
    function p() {
      _e && !c.value && l.value && (c.value = di(ce(l)), c.value && c.value !== document.documentElement ? (c.value.addEventListener(
        "scroll",
        v,
        { passive: !0 }
      ), window.ResizeObserver && r && r.observe(c.value)) : (document.addEventListener("scroll", v, {
        passive: !0
      }), window.addEventListener("resize", v)));
    }
    function f() {
      _e && (window.ResizeObserver && r && r.disconnect(), window.removeEventListener("resize", v), document.removeEventListener("scroll", v), c.value = void 0);
    }
    function v() {
      if (o.disabled) return;
      let h = o.position;
      if (d === "auto" && (h = y(), h != o.position && i("update:position", h)), !o.teleport) return;
      const C = ce(l), E = ce(o.trigger);
      if (C && E) {
        const x = E.getBoundingClientRect();
        let $ = x.top + window.scrollY, A = x.left + window.scrollX;
        h.includes("bottom") ? $ += E.clientHeight : h.includes("top") && ($ -= C.clientHeight), h === "left" ? A -= C.clientWidth : h === "right" ? A += E.clientWidth : h.includes("-right") && (A += E.clientWidth - C.clientWidth), (h === "top" || h === "bottom") && (A += E.clientWidth / 2), (h === "left" || h === "right") && ($ += E.clientHeight / 2), o.disablePositioning ? (C.style.position = "relative", C.style.top = `${$}px`, C.style.left = `${A}px`) : (C.style.position = "", C.style.top = "", C.style.left = "");
      }
    }
    function y() {
      let h = o.defaultPosition;
      if (!o.trigger || !l.value || !c.value) return h;
      const C = new DOMRect(
        c.value.offsetLeft,
        c.value.offsetTop,
        c.value.clientWidth,
        c.value.clientHeight
      ), E = ce(l).getBoundingClientRect(), x = ce(o.trigger).getBoundingClientRect(), $ = b(x), A = b(E), B = (L) => {
        const q = $[L], Q = A[n[L]];
        return new DOMRect(
          E.x + (q.x - Q.x),
          E.y + (q.y - Q.y),
          E.width,
          E.height
        );
      }, W = n[o.defaultPosition], F = o.defaultPosition === "top" || o.defaultPosition === "bottom" ? "left" : "top", R = n[F], K = [
        o.defaultPosition,
        W,
        F,
        R
      ];
      let z = 0;
      for (const L of K) {
        const q = g(
          C,
          B(L)
        );
        q > z && (z = q, h = L);
      }
      return h;
    }
    function g(h, C) {
      const E = Math.max(h.left, C.left), x = Math.min(h.right, C.right), $ = Math.max(h.top, C.top), A = Math.min(h.bottom, C.bottom);
      return Math.max(x - E, 0) * Math.max(A - $, 0);
    }
    const b = (h) => ({
      top: { x: (h.left + h.right) * 0.5, y: h.top },
      bottom: { x: (h.left + h.right) * 0.5, y: h.bottom },
      left: { x: h.left, y: (h.top + h.bottom) * 0.5 },
      right: { x: h.right, y: (h.top + h.bottom) * 0.5 }
    });
    return (h, C) => (_(), S(Un, {
      to: s.value,
      disabled: a.value
    }, [
      a.value ? D(h.$slots, "default", {
        key: 0,
        setContent: u
      }) : (_(), X("div", U({ key: 1 }, h.$attrs, { style: { position: "absolute", left: "0px", top: "0px" } }), [
        D(h.$slots, "default", { setContent: u })
      ], 16))
    ], 8, ["to", "disabled"]));
  }
});
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
const ft = (e, t = !1) => e ? t ? e.querySelectorAll('*[tabindex="-1"]') : e.querySelectorAll(`a[href]:not([tabindex="-1"]),
                                     area[href],
                                     input:not([disabled]),
                                     select:not([disabled]),
                                     textarea:not([disabled]),
                                     button:not([disabled]),
                                     iframe,
                                     object,
                                     embed,
                                     *[tabindex]:not([tabindex="-1"]),
                                     *[contenteditable]`) : null;
let Kt;
const pi = (e, { value: t = !0 }) => {
  if (t) {
    let n = ft(e), o = ft(e, !0);
    n && n.length > 0 && (Kt = (i) => {
      n = ft(e), o = ft(e, !0);
      const s = n[0], a = n[n.length - 1];
      i.target === s && i.shiftKey && i.key === "Tab" ? (i.preventDefault(), a.focus()) : (i.target === a || Array.from(o).indexOf(i.target) >= 0) && !i.shiftKey && i.key === "Tab" && (i.preventDefault(), s.focus());
    }, e.addEventListener("keydown", Kt));
  }
}, vi = (e) => {
  e.removeEventListener("keydown", Kt);
}, mi = {
  beforeMount: pi,
  beforeUnmount: vi
}, gi = mi;
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
function wt(e, t, n, o) {
  let i;
  const s = () => {
    if (!e) return;
    const u = ce(e), d = Go(o) ? { ...o } : o;
    setTimeout(() => {
      u.addEventListener(t, n, d), i = () => {
        u.removeEventListener(t, n, d);
      };
    });
  };
  let a;
  typeof (o == null ? void 0 : o.trigger) < "u" && (a = H(
    o.trigger,
    (u) => {
      u ? s() : typeof i == "function" && i();
    },
    { flush: "post" }
  )), o != null && o.immediate ? s() : Ke() && Ce(() => {
    (typeof (o == null ? void 0 : o.trigger) > "u" || o.trigger.value) && s();
  });
  const l = () => {
    typeof a == "function" && a(), typeof i == "function" && i();
  };
  return Ke() && _t(l), l;
}
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
function hi(e) {
  var t;
  const n = P(!1), o = P(), i = se();
  if (!i)
    throw new Error(
      "useMatchMedia must be called within a component setup function."
    );
  const s = i.props, a = (t = i.proxy) == null ? void 0 : t.$options.configField;
  if (!a)
    throw new Error("component must define the 'configField' option.");
  let l = s.mobileBreakpoint;
  if (!l) {
    const d = Ge(
      "mobileBreakpoint",
      e || "1023px"
    );
    l = Ge(`${a}.mobileBreakpoint`, d);
  }
  o.value = _e ? window.matchMedia(`(max-width: ${l})`) : void 0, o.value ? (n.value = o.value.matches, wt(o.value, "change", u)) : n.value = !1;
  function u(d) {
    n.value = d.matches;
  }
  return { isMobile: n };
}
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
function yi(e, t, n) {
  if (!window) return () => {
  };
  const o = Object.assign({ ignore: [] }, n), i = Array.isArray(e) ? e : [e], s = (u) => i.some((d) => {
    if (typeof d == "string")
      return Array.from(
        window.document.querySelectorAll(d)
      ).some(
        (c) => c === u.target || u.composedPath().includes(c)
      );
    {
      const c = ce(d);
      return c && (u.target === c || u.composedPath().includes(c));
    }
  });
  function a(u) {
    s(u) || t(u);
  }
  return wt(window, "click", a, o);
}
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
function oo(e, t) {
  return e ? Array.isArray(e) ? e.map(
    (n) => {
      if (typeof n == "string" || typeof n == "number")
        return {
          label: String(n),
          value: String(n),
          key: t()
        };
      if (typeof n == "object") {
        if ("group" in n) {
          const o = oo(n.options, t);
          return {
            ...n,
            options: o,
            key: t()
          };
        } else if ("value" in n)
          return {
            ...n,
            key: t()
          };
      }
      return n;
    }
  ) : Object.keys(e).map(
    (n) => ({
      // create option from object key/value
      label: e[n],
      value: n,
      key: t()
    })
  ) : [];
}
function bi(e) {
  return e && typeof e == "object" && Array.isArray(e.options);
}
function wi(e, t) {
  return Array.isArray(e) ? e.some((o) => bi(o)) ? [...e] : [{ options: e, key: t }] : [];
}
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
function Ci(e = !1) {
  const t = G(["scrollClipClass", "o-clipped"]), n = G(["noScrollClass", "o-noscroll"]), o = w(
    () => Qo(
      ee(e) ? n.value : t.value
    )
  ), i = P();
  on(() => s(!1));
  function s(a) {
    _e && o.value && (i.value = i.value ? i.value : document.documentElement.scrollTop, a ? document.body.classList.add(...o.value) : document.body.classList.remove(...o.value), ee(e) && (a ? document.body.style.top = `-${i.value}px` : (document.documentElement.scrollTop = i.value, document.body.style.top = "", i.value = void 0)));
  }
  return s;
}
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
const qt = /* @__PURE__ */ T({
  isOruga: !0,
  name: "ODropdownItem",
  configField: "dropdown",
  __name: "DropdownItem",
  props: {
    override: { type: Boolean, default: void 0 },
    value: { default: void 0 },
    label: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !0 },
    tag: { default: () => I("dropdown.itemTag", "div") },
    tabindex: { default: 0 },
    ariaRole: { default: () => I("dropdown.itemAriaRole", "listitem") },
    itemClass: {},
    itemActiveClass: {},
    itemClickableClass: {},
    itemDisabledClass: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = n.value || jn(), i = t, { parent: s, item: a } = ci(), l = w(
      () => !s.value.disabled && !n.disabled && n.clickable
    ), u = w(() => Pe(s.value.selected) ? s.value.multiple && Array.isArray(s.value.selected) ? s.value.selected.some(
      (r) => On(o, r)
    ) : On(o, s.value.selected) : !1);
    function d(r) {
      l.value && (s.value.selectItem(o), i("click", o, r));
    }
    const c = G(
      ["itemClass", "o-drop__item"],
      [
        "itemDisabledClass",
        "o-drop__item--disabled",
        null,
        w(() => s.value.disabled || n.disabled)
      ],
      ["itemActiveClass", "o-drop__item--active", null, u],
      ["itemClickableClass", "o-drop__item--clickable", null, l]
    );
    return (r, p) => (_(), S(qe(r.tag), {
      class: V(m(c)),
      "data-oruga": "dropdown-item",
      "data-id": `dropdown-${m(a).identifier}`,
      role: r.ariaRole,
      tabindex: r.tabindex,
      "aria-selected": u.value,
      "aria-disabled": r.disabled,
      onClick: d,
      onKeypress: Fo(d, ["enter"])
    }, {
      default: k(() => [
        D(r.$slots, "default", {}, () => [
          Le(ye(r.label), 1)
        ])
      ]),
      _: 3
    }, 40, ["class", "data-id", "role", "tabindex", "aria-selected", "aria-disabled"]));
  }
}), Oi = /* @__PURE__ */ T({
  isOruga: !0,
  name: "ODropdown",
  configField: "dropdown",
  __name: "Dropdown",
  props: /* @__PURE__ */ Ye({
    override: { type: Boolean, default: void 0 },
    modelValue: { default: void 0 },
    multiple: {},
    options: { default: void 0 },
    active: { type: Boolean, default: !1 },
    label: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    inline: { type: Boolean, default: !1 },
    scrollable: { type: Boolean, default: !1 },
    maxHeight: { default: () => I("dropdown.maxHeight", 200) },
    position: { default: () => I("dropdown.position", "bottom-left") },
    mobileModal: { type: Boolean, default: () => I("dropdown.mobileModal", !0) },
    desktopModal: { type: Boolean, default: () => I("dropdown.desktopModal", !1) },
    animation: { default: () => I("dropdown.animation", "fade") },
    trapFocus: { type: Boolean, default: () => I("dropdown.trapFocus", !0) },
    checkScroll: { type: Boolean, default: () => I("dropdown.checkScroll", !1) },
    expanded: { type: Boolean, default: !1 },
    menuId: { default: void 0 },
    menuTabindex: { default: void 0 },
    menuTag: { default: () => I("dropdown.menuTag", "div") },
    triggerTag: { default: () => I("dropdown.triggerTag", "div") },
    triggers: { default: () => I("dropdown.triggers", ["click"]) },
    delay: { default: void 0 },
    closeable: { type: [Array, Boolean], default: () => I("dropdown.closeable", ["escape", "outside", "content"]) },
    tabindex: { default: 0 },
    ariaRole: { default: () => I("dropdown.ariaRole", "list") },
    mobileBreakpoint: { default: () => I("dropdown.mobileBreakpoint") },
    teleport: { type: [Boolean, String, Object], default: () => I("dropdown.teleport", !1) },
    rootClass: {},
    teleportClass: {},
    triggerClass: {},
    inlineClass: {},
    menuClass: {},
    menuPositionClass: {},
    menuActiveClass: {},
    mobileClass: {},
    modalClass: {},
    overlayClass: {},
    disabledClass: {},
    expandedClass: {},
    positionClass: {},
    activeClass: {},
    hoverableClass: {},
    scrollClipClass: {},
    noScrollClass: {}
  }, {
    modelValue: { default: void 0 },
    modelModifiers: {},
    active: { type: Boolean, default: !1 },
    activeModifiers: {}
  }),
  emits: /* @__PURE__ */ Ye(["update:model-value", "update:active", "change", "close", "scroll-start", "scroll-end"], ["update:modelValue", "update:active"]),
  setup(e, { expose: t, emit: n }) {
    const o = e, i = n, s = P(), a = P(), l = it(e, "modelValue"), u = it(e, "active"), { nextSequence: d } = no(), c = w(() => {
      const O = oo(o.options, d);
      return wi(O, d());
    }), r = P(o.position);
    H(
      () => o.position,
      (O) => r.value = O
    );
    const { isMobile: p } = hi(o.mobileBreakpoint), f = w(
      () => !o.inline && (p.value && o.mobileModal || !p.value && o.desktopModal)
    ), v = _e && Xo.any(), y = w(() => ({
      maxHeight: o.scrollable ? Jo(o.maxHeight) : null,
      overflow: o.scrollable ? "auto" : null
    })), g = w(() => o.triggers.includes("hover")), b = Ci(), h = [];
    let C;
    const E = w(
      () => typeof o.closeable == "boolean" ? o.closeable ? ["escape", "outside", "content"] : [] : o.closeable
    );
    H(
      u,
      (O) => {
        O && _e && !f.value ? (E.value.includes("outside") && h.push(
          yi(
            [s, a],
            x,
            {
              immediate: !0,
              passive: !0
            }
          )
        ), E.value.includes("escape") && h.push(
          wt(document, "keyup", $, {
            immediate: !0
          })
        )) : O || (h.forEach((M) => M()), h.length = 0), p.value && b(O);
      },
      { immediate: !0, flush: "post" }
    ), $t(() => {
      h.forEach((O) => O()), h.length = 0;
    });
    function x() {
      !u.value || o.inline || E.value.includes("outside") && (i("close", "outside"), u.value = !1);
    }
    function $(O) {
      if (u.value && (O.key === "Escape" || O.key === "Esc")) {
        if (!E.value.includes("escape")) return;
        i("close", "escape"), u.value = !1;
      }
    }
    function A() {
      v && g.value && z(), o.triggers.includes("click") && z();
    }
    function B(O) {
      o.triggers.includes("contextmenu") && (O.preventDefault(), L());
    }
    function W() {
      o.triggers.includes("focus") && L();
    }
    const F = P(!1);
    function R() {
      v || o.triggers.includes("hover") && (F.value = !0, L());
    }
    function K() {
      v || F.value && (F.value = !1, q());
    }
    function z() {
      o.disabled || (u.value ? u.value = !u.value : Z(() => u.value = !u.value));
    }
    function L() {
      o.disabled || (o.delay ? C = setTimeout(() => {
        u.value = !0, C = void 0;
      }, o.delay) : u.value = !0);
    }
    function q() {
      E.value.includes("content") && (i("close", "content"), u.value = !o.closeable, C && o.closeable && clearTimeout(C));
    }
    _e && o.checkScroll && wt(s, "scroll", Q);
    function Q() {
      const O = ce(s);
      O && O.clientHeight !== O.scrollHeight && (O.scrollTop + O.clientHeight >= O.scrollHeight ? i("scroll-end") : O.scrollTop <= 0 && i("scroll-start"));
    }
    function J(O) {
      if (nt(o.multiple) ? (l.value && Array.isArray(l.value) ? l.value.includes(O) ? l.value = l.value.filter(
        (M) => M !== O
      ) : l.value = [...l.value, O] : l.value = [O], Z(() => i("change", l.value))) : l.value !== O && (l.value = O, Z(() => i("change", l.value))), !nt(o.multiple)) {
        if (E.value.indexOf("content") < 0) return;
        i("close", "content"), u.value = !1, F.value = !1;
      }
    }
    const te = w(() => ({
      disabled: o.disabled,
      multiple: nt(o.multiple),
      selected: l.value,
      selectItem: J
    }));
    ui({ data: te });
    const ne = G(
      ["rootClass", "o-drop"],
      ["disabledClass", "o-drop--disabled", null, w(() => o.disabled)],
      ["expandedClass", "o-drop--expanded", null, w(() => o.expanded)],
      ["inlineClass", "o-drop--inline", null, w(() => o.inline)],
      ["mobileClass", "o-drop--mobile", null, p],
      ["modalClass", "o-drop--modal", null, f],
      ["hoverableClass", "o-drop--hoverable", null, g],
      [
        "positionClass",
        "o-drop--position-",
        r,
        w(() => !!r.value)
      ],
      [
        "activeClass",
        "o-drop--active",
        null,
        w(() => u.value || o.inline)
      ]
    ), Ve = G(["triggerClass", "o-drop__trigger"]), Rt = G([
      "teleportClass",
      "o-drop--teleport",
      null,
      w(() => !!o.teleport)
    ]), It = G(["overlayClass", "o-drop__overlay"]), Lt = G(
      ["menuClass", "o-drop__menu"],
      [
        "menuPositionClass",
        "o-drop__menu--",
        r,
        w(() => !!r.value)
      ],
      [
        "menuActiveClass",
        "o-drop__menu--active",
        null,
        w(() => u.value || o.inline)
      ]
    );
    return t({ $trigger: a, $content: s, value: l }), (O, M) => (_(), X("div", {
      "data-oruga": "dropdown",
      class: V(m(ne)),
      onMouseleave: K,
      onFocusout: K
    }, [
      O.inline ? ae("", !0) : (_(), S(qe(O.triggerTag), {
        key: 0,
        ref_key: "triggerRef",
        ref: a,
        tabindex: O.disabled ? null : O.tabindex,
        class: V(m(Ve)),
        "aria-haspopup": O.ariaRole === "list" ? !0 : O.ariaRole,
        onClick: A,
        onContextmenu: B,
        onMouseenter: R,
        onFocusCapture: W
      }, {
        default: k(() => [
          D(O.$slots, "trigger", {
            active: u.value,
            toggle: A
          }, () => [
            Le(ye(O.label), 1)
          ])
        ]),
        _: 3
      }, 40, ["tabindex", "class", "aria-haspopup"])),
      j(fi, {
        position: r.value,
        "onUpdate:position": M[0] || (M[0] = (N) => r.value = N),
        teleport: O.teleport,
        class: V([...m(ne), ...m(Rt)]),
        trigger: a.value,
        disabled: !u.value,
        "default-position": "bottom",
        "disable-positioning": !f.value
      }, {
        default: k(({ setContent: N }) => [
          f.value ? (_(), S(Cn, {
            key: 0,
            name: O.animation
          }, {
            default: k(() => [
              ge(Kn("div", {
                class: V(m(It)),
                tabindex: "-1",
                onClick: x
              }, null, 2), [
                [dt, u.value]
              ])
            ]),
            _: 1
          }, 8, ["name"])) : ae("", !0),
          j(Cn, { name: O.animation }, {
            default: k(() => [
              ge((_(), S(qe(O.menuTag), {
                id: O.menuId,
                ref: (Oe) => s.value = N(Oe),
                tabindex: O.menuTabindex,
                class: V(m(Lt)),
                style: lt(y.value),
                role: O.ariaRole,
                "aria-hidden": !O.inline && (O.disabled || !u.value),
                "aria-modal": !O.inline && O.trapFocus
              }, {
                default: k(() => [
                  D(O.$slots, "default", {
                    active: u.value,
                    toggle: z
                  }, () => [
                    (_(!0), X(tt, null, Ut(c.value, (Oe) => (_(), X(tt, null, [
                      Oe.group ? ge((_(), S(qt, U({
                        key: Oe.key,
                        ref_for: !0
                      }, Oe.attrs, { tabindex: "-1" }), {
                        default: k(() => [
                          Le(ye(Oe.group), 1)
                        ]),
                        _: 2
                      }, 1040)), [
                        [dt, !Oe.hidden]
                      ]) : ae("", !0),
                      (_(!0), X(tt, null, Ut(Oe.options, (et) => ge((_(), S(qt, U({
                        key: et.key,
                        value: et.value,
                        ref_for: !0
                      }, et.attrs), {
                        default: k(() => [
                          Le(ye(et.label), 1)
                        ]),
                        _: 2
                      }, 1040, ["value"])), [
                        [dt, !et.hidden]
                      ])), 128))
                    ], 64))), 256))
                  ])
                ]),
                _: 2
              }, 1032, ["id", "tabindex", "class", "style", "role", "aria-hidden", "aria-modal"])), [
                [dt, !O.disabled && (u.value || F.value) || O.inline],
                [m(gi), O.trapFocus]
              ])
            ]),
            _: 2
          }, 1032, ["name"])
        ]),
        _: 3
      }, 8, ["position", "teleport", "class", "trigger", "disabled", "disable-positioning"])
    ], 34));
  }
});
/*! Oruga v0.9.3 | MIT License | github.com/oruga-ui/oruga */
const io = /* @__PURE__ */ T({
  isOruga: !0,
  name: "OButton",
  configField: "button",
  __name: "Button",
  props: {
    override: { type: Boolean, default: void 0 },
    tag: { default: () => I("button.tag", "button") },
    variant: { default: () => I("button.variant") },
    size: { default: () => I("button.size") },
    label: { default: void 0 },
    iconPack: { default: () => I("button.iconPack") },
    iconLeft: { default: void 0 },
    iconRight: { default: void 0 },
    rounded: { type: Boolean, default: () => I("button.rounded", !1) },
    expanded: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    inverted: { type: Boolean, default: !1 },
    type: { default: "button" },
    ariaRole: { default: () => I("button.ariaRole", "button") },
    iconBoth: { type: Boolean, default: !1 },
    rootClass: {},
    wrapperClass: {},
    outlinedClass: {},
    loadingClass: {},
    invertedClass: {},
    expandedClass: {},
    roundedClass: {},
    disabledClass: {},
    iconClass: {},
    iconLeftClass: {},
    iconRightClass: {},
    labelClass: {},
    sizeClass: {},
    variantClass: {}
  },
  setup(e) {
    const t = e, n = w(
      () => typeof t.disabled < "u" && t.disabled !== !1 ? "button" : t.tag
    ), o = w(
      () => t.tag === "button" || t.tag === "input" ? t.type : null
    ), i = w(() => t.disabled ? !0 : null), s = G(
      ["rootClass", "o-btn"],
      [
        "sizeClass",
        "o-btn--",
        w(() => t.size),
        w(() => !!t.size)
      ],
      [
        "variantClass",
        "o-btn--",
        w(() => t.variant),
        w(() => !!t.variant && !t.outlined && !t.inverted)
      ],
      [
        "outlinedClass",
        "o-btn--outlined",
        null,
        w(() => t.outlined && !t.variant)
      ],
      [
        "invertedClass",
        "o-btn--inverted",
        null,
        w(() => t.inverted && !t.variant)
      ],
      [
        "outlinedClass",
        "o-btn--outlined-",
        w(() => t.variant),
        w(() => t.outlined && !!t.variant)
      ],
      [
        "invertedClass",
        "o-btn--inverted-",
        w(() => t.variant),
        w(() => t.inverted && !!t.variant)
      ],
      ["expandedClass", "o-btn--expanded", null, w(() => t.expanded)],
      ["loadingClass", "o-btn--loading", null, w(() => t.loading)],
      ["roundedClass", "o-btn--rounded", null, w(() => t.rounded)],
      ["disabledClass", "o-btn--disabled", null, w(() => t.disabled)]
    ), a = G(["labelClass", "o-btn__label"]), l = G(["iconClass", "o-btn__icon"]), u = G(["iconLeftClass", "o-btn__icon-left"]), d = G(["iconRightClass", "o-btn__icon-right"]), c = G(["wrapperClass", "o-btn__wrapper"]);
    return (r, p) => (_(), S(qe(n.value), {
      disabled: i.value,
      type: o.value,
      class: V(m(s)),
      role: r.ariaRole,
      "data-oruga": "button"
    }, {
      default: k(() => [
        Kn("span", {
          class: V(m(c))
        }, [
          r.iconLeft ? (_(), S(bt, {
            key: 0,
            pack: r.iconPack,
            icon: r.iconLeft,
            size: r.size,
            both: r.iconBoth,
            class: V([...m(l), ...m(u)])
          }, null, 8, ["pack", "icon", "size", "both", "class"])) : ae("", !0),
          r.label || r.$slots.default ? (_(), X("span", {
            key: 1,
            class: V(m(a))
          }, [
            D(r.$slots, "default", {}, () => [
              Le(ye(r.label), 1)
            ])
          ], 2)) : ae("", !0),
          r.iconRight ? (_(), S(bt, {
            key: 2,
            pack: r.iconPack,
            icon: r.iconRight,
            size: r.size,
            both: r.iconBoth,
            class: V([...m(l), ...m(d)])
          }, null, 8, ["pack", "icon", "size", "both", "class"])) : ae("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["disabled", "type", "class", "role"]));
  }
});
function Ei(e, t) {
  var n;
  const o = Yn();
  return le(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), qn(o);
}
function rt(e) {
  return Ke() ? (_t(e), !0) : !1;
}
function Ai() {
  const e = /* @__PURE__ */ new Set(), t = (s) => {
    e.delete(s);
  };
  return {
    on: (s) => {
      e.add(s);
      const a = () => t(s);
      return rt(a), {
        off: a
      };
    },
    off: t,
    trigger: (...s) => Promise.all(Array.from(e).map((a) => a(...s))),
    clear: () => {
      e.clear();
    }
  };
}
function xi(e) {
  let t = !1, n;
  const o = tn(!0);
  return (...i) => (t || (n = o.run(() => e(...i)), t = !0), n);
}
function Pi(e) {
  let t = 0, n, o;
  const i = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...s) => (t += 1, o || (o = tn(!0), n = o.run(() => e(...s))), rt(i), n);
}
const Re = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const _i = (e) => typeof e < "u", $i = Object.prototype.toString, ki = (e) => $i.call(e) === "[object Object]", xn = /* @__PURE__ */ Si();
function Si() {
  var e, t;
  return Re && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Ti(e) {
  return se();
}
function Ft(e) {
  return Array.isArray(e) ? e : [e];
}
function Di(e, t = 1e4) {
  return Vo((n, o) => {
    let i = ee(e), s;
    const a = () => setTimeout(() => {
      i = ee(e), o();
    }, ee(t));
    return rt(() => {
      clearTimeout(s);
    }), {
      get() {
        return n(), i;
      },
      set(l) {
        i = l, o(), clearTimeout(s), s = a();
      }
    };
  });
}
function Bi(e, t) {
  Ti() && on(e, t);
}
function so(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, i = P(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function l() {
    i.value = !1, a();
  }
  function u(...d) {
    a(), i.value = !0, s = setTimeout(() => {
      i.value = !1, s = null, e(...d);
    }, ee(t));
  }
  return o && (i.value = !0, Re && u()), rt(l), {
    isPending: qn(i),
    start: u,
    stop: l
  };
}
function Ri(e, t, n) {
  return H(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const ut = Re ? window : void 0;
function Je(e) {
  var t;
  const n = ee(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function he(...e) {
  const t = [], n = () => {
    t.forEach((l) => l()), t.length = 0;
  }, o = (l, u, d, c) => (l.addEventListener(u, d, c), () => l.removeEventListener(u, d, c)), i = w(() => {
    const l = Ft(ee(e[0])).filter((u) => u != null);
    return l.every((u) => typeof u != "string") ? l : void 0;
  }), s = Ri(
    () => {
      var l, u;
      return [
        (u = (l = i.value) == null ? void 0 : l.map((d) => Je(d))) != null ? u : [ut].filter((d) => d != null),
        Ft(ee(i.value ? e[1] : e[0])),
        Ft(m(i.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        ee(i.value ? e[3] : e[2])
      ];
    },
    ([l, u, d, c]) => {
      if (n(), !(l != null && l.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const r = ki(c) ? { ...c } : c;
      t.push(
        ...l.flatMap(
          (p) => u.flatMap(
            (f) => d.map((v) => o(p, f, v, r))
          )
        )
      );
    },
    { flush: "post" }
  ), a = () => {
    s(), n();
  };
  return rt(n), a;
}
function Ii() {
  const e = P(!1), t = se();
  return t && Ce(() => {
    e.value = !0;
  }, t), e;
}
function Li(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Mi(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: i = ut,
    eventName: s = "keydown",
    passive: a = !1,
    dedupe: l = !1
  } = o, u = Li(t);
  return he(i, s, (c) => {
    c.repeat && ee(l) || u(c) && n(c);
  }, a);
}
function Fi(e) {
  return JSON.parse(JSON.stringify(e));
}
const Vi = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function Hi(e = {}) {
  const {
    type: t = "page",
    touch: n = !0,
    resetOnTouchEnds: o = !1,
    initialValue: i = { x: 0, y: 0 },
    window: s = ut,
    target: a = s,
    scroll: l = !0,
    eventFilter: u
  } = e;
  let d = null, c = 0, r = 0;
  const p = P(i.x), f = P(i.y), v = P(null), y = typeof t == "function" ? t : Vi[t], g = (A) => {
    const B = y(A);
    d = A, B && ([p.value, f.value] = B, v.value = "mouse"), s && (c = s.scrollX, r = s.scrollY);
  }, b = (A) => {
    if (A.touches.length > 0) {
      const B = y(A.touches[0]);
      B && ([p.value, f.value] = B, v.value = "touch");
    }
  }, h = () => {
    if (!d || !s)
      return;
    const A = y(d);
    d instanceof MouseEvent && A && (p.value = A[0] + s.scrollX - c, f.value = A[1] + s.scrollY - r);
  }, C = () => {
    p.value = i.x, f.value = i.y;
  }, E = u ? (A) => u(() => g(A), {}) : (A) => g(A), x = u ? (A) => u(() => b(A), {}) : (A) => b(A), $ = u ? () => u(() => h(), {}) : () => h();
  if (a) {
    const A = { passive: !0 };
    he(a, ["mousemove", "dragover"], E, A), n && t !== "movement" && (he(a, ["touchstart", "touchmove"], x, A), o && he(a, "touchend", C, A)), l && t === "page" && he(s, "scroll", $, A);
  }
  return {
    x: p,
    y: f,
    sourceType: v
  };
}
function zi(e, t = {}) {
  const {
    handleOutside: n = !0,
    window: o = ut
  } = t, i = t.type || "page", { x: s, y: a, sourceType: l } = Hi(t), u = P(e ?? (o == null ? void 0 : o.document.body)), d = P(0), c = P(0), r = P(0), p = P(0), f = P(0), v = P(0), y = P(!0);
  let g = () => {
  };
  return o && (g = H(
    [u, s, a],
    () => {
      const b = Je(u);
      if (!b || !(b instanceof Element))
        return;
      const {
        left: h,
        top: C,
        width: E,
        height: x
      } = b.getBoundingClientRect();
      r.value = h + (i === "page" ? o.pageXOffset : 0), p.value = C + (i === "page" ? o.pageYOffset : 0), f.value = x, v.value = E;
      const $ = s.value - r.value, A = a.value - p.value;
      y.value = E === 0 || x === 0 || $ < 0 || A < 0 || $ > E || A > x, (n || !y.value) && (d.value = $, c.value = A);
    },
    { immediate: !0 }
  ), he(
    document,
    "mouseleave",
    () => y.value = !0,
    { passive: !0 }
  )), {
    x: s,
    y: a,
    sourceType: l,
    elementX: d,
    elementY: c,
    elementPositionX: r,
    elementPositionY: p,
    elementHeight: f,
    elementWidth: v,
    isOutside: y,
    stop: g
  };
}
function Ct(e, t, n, o = {}) {
  var i, s, a;
  const {
    clone: l = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: r,
    shouldEmit: p
  } = o, f = se(), v = n || (f == null ? void 0 : f.emit) || ((i = f == null ? void 0 : f.$emit) == null ? void 0 : i.bind(f)) || ((a = (s = f == null ? void 0 : f.proxy) == null ? void 0 : s.$emit) == null ? void 0 : a.bind(f == null ? void 0 : f.proxy));
  let y = d;
  t || (t = "modelValue"), y = y || `update:${t.toString()}`;
  const g = (C) => l ? typeof l == "function" ? l(C) : Fi(C) : C, b = () => _i(e[t]) ? g(e[t]) : r, h = (C) => {
    p ? p(C) && v(y, C) : v(y, C);
  };
  if (u) {
    const C = b(), E = P(C);
    let x = !1;
    return H(
      () => e[t],
      ($) => {
        x || (x = !0, E.value = g($), Z(() => x = !1));
      }
    ), H(
      E,
      ($) => {
        !x && ($ !== e[t] || c) && h($);
      },
      { deep: c }
    ), E;
  } else
    return w({
      get() {
        return b();
      },
      set(C) {
        h(C);
      }
    });
}
var Wi = Object.defineProperty, Ni = Object.defineProperties, ji = Object.getOwnPropertyDescriptors, Pn = Object.getOwnPropertySymbols, Ui = Object.prototype.hasOwnProperty, Ki = Object.prototype.propertyIsEnumerable, _n = (e, t, n) => t in e ? Wi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xe = (e, t) => {
  for (var n in t || (t = {}))
    Ui.call(t, n) && _n(e, n, t[n]);
  if (Pn)
    for (var n of Pn(t))
      Ki.call(t, n) && _n(e, n, t[n]);
  return e;
}, ao = (e, t) => Ni(e, ji(t)), qi = {
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
}, Yi = (e) => "config" in e && "globalProperties" in e.config, Gi = (e) => {
  let t;
  return e === "vue2" ? t = !1 : e === "vue3" ? t = !0 : t = Yi(e), t ? {
    mounted: "mounted",
    updated: "updated"
  } : {
    mounted: "inserted",
    updated: "componentUpdated"
  };
}, lo = (e) => typeof e == "string" && e !== "auto", $n = (e, t) => {
  e.dataset.vWaveBoundary = lo(t) ? t : "true";
}, Xi = ({ borderTopLeftRadius: e, borderTopRightRadius: t, borderBottomLeftRadius: n, borderBottomRightRadius: o }, i) => {
  const s = document.createElement(i);
  return s.style.top = "0", s.style.left = "0", s.style.width = "100%", s.style.height = "100%", s.style.display = "block", s.style.position = "absolute", s.style.borderRadius = `${e} ${t} ${o} ${n}`, s.style.overflow = "hidden", s.style.pointerEvents = "none", s.style.webkitMaskImage = "-webkit-radial-gradient(white, black)", s.dataset.vWaveContainerInternal = "true", s;
}, Ji = ({ x: e, y: t }, n, o) => {
  const i = document.createElement("div");
  return i.style.position = "absolute", i.style.width = `${n}px`, i.style.height = `${n}px`, i.style.top = `${t}px`, i.style.left = `${e}px`, i.style.background = o.color, i.style.borderRadius = "50%", i.style.opacity = `${o.initialOpacity}`, i.style.transform = "translate(-50%,-50%) scale(0)", i.style.transition = `transform ${o.duration}s ${o.easing}, opacity ${o.duration}s ${o.easing}`, i;
};
function pt(e, t, n, o) {
  const i = e - n, s = t - o;
  return Math.sqrt(i * i + s * s);
}
function Qi({ x: e, y: t }, { width: n, height: o }) {
  const i = pt(e, t, 0, 0), s = pt(e, t, n, 0), a = pt(e, t, 0, o), l = pt(e, t, n, o);
  return Math.max(i, s, a, l);
}
var Zi = ({ x: e, y: t }, { top: n, left: o }) => ({
  x: e - o,
  y: t - n
}), es = (e, t) => {
  t.position === "static" && (["top", "left", "right", "bottom"].forEach((n) => {
    t[n] && t[n] !== "auto" && console.warn(
      "[v-wave]:",
      e,
      `You're using a \`static\` positioned element with a non-auto value (${t[n]}) for \`${n}\`.`,
      "It's position will be changed to relative while displaying the wave which might cause the element to visually jump."
    );
  }), e.dataset.originalPositionValue = e.style.position, e.style.position = "relative");
}, kn = (e) => {
  var t;
  e.style.position = (t = e.dataset.originalPositionValue) != null ? t : "", delete e.dataset.originalPositionValue;
}, rn = "vWaveCountInternal";
function ts(e) {
  const t = Ot(e);
  ro(e, t + 1);
}
function Sn(e) {
  const t = Ot(e);
  ro(e, t - 1);
}
function ro(e, t) {
  e.dataset[rn] = t.toString();
}
function Ot(e) {
  var t;
  return Number.parseInt((t = e.dataset[rn]) != null ? t : "0", 10);
}
function Tn(e) {
  delete e.dataset[rn];
}
var ns = 2.05, Yt = (e, t, n) => {
  if (n.disabled || n.respectDisabledAttribute && t.hasAttribute("disabled") || n.respectPrefersReducedMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const o = t.getBoundingClientRect(), i = window.getComputedStyle(t), s = Zi(e, o), a = ns * Qi(s, o), l = t.querySelector("[data-v-wave-container-internal]"), u = l ?? Xi(i, n.tagName), d = Ji(s, a, n);
  ts(t), es(t, i), u.appendChild(d), l || t.appendChild(u);
  let c = !n.waitForRelease;
  const r = (y) => {
    typeof y < "u" && (document.removeEventListener("pointerup", r), document.removeEventListener("pointercancel", r)), c ? p() : c = !0;
  }, p = () => {
    d.style.transition = `opacity ${n.dissolveDuration}s linear`, d.style.opacity = "0", setTimeout(() => {
      d.remove(), Sn(t), Ot(t) === 0 && (Tn(t), u.remove(), kn(t));
    }, n.dissolveDuration * 1e3);
  };
  n.waitForRelease && (document.addEventListener("pointerup", r), document.addEventListener("pointercancel", r));
  const f = setTimeout(() => {
    document.removeEventListener("pointercancel", v), requestAnimationFrame(() => {
      d.style.transform = "translate(-50%,-50%) scale(1)", d.style.opacity = `${n.finalOpacity}`, setTimeout(() => r(), n.duration * 1e3);
    });
  }, n.cancellationPeriod), v = () => {
    clearTimeout(f), d.remove(), Sn(t), Ot(t) === 0 && (Tn(t), u.remove(), kn(t)), document.removeEventListener("pointerup", r), document.removeEventListener("pointercancel", r), document.removeEventListener("pointercancel", v);
  };
  document.addEventListener("pointercancel", v);
}, ot = /* @__PURE__ */ new WeakMap(), os = (e, t) => (n, o) => {
  if (!ot.has(t)) return;
  const i = xe(xe({}, e), ot.get(t));
  if (i.stopPropagation && n.stopPropagation(), i.trigger === !1) return Yt(n, t, i);
  if (lo(i.trigger)) return;
  const s = t.querySelector('[data-v-wave-trigger="true"]');
  !s && i.trigger === !0 || s && !n.composedPath().includes(s) || Yt(o ?? n, t, ao(xe({}, i), { waitForRelease: o ? !1 : i.waitForRelease }));
}, is = (e = {}, t = "vue3") => {
  const n = xe(xe({}, qi), e), o = Gi(t), i = (l) => {
    if (l.detail !== 0) return;
    const u = l.currentTarget, d = u.dataset.vWaveTrigger;
    document.querySelectorAll(
      `[data-v-wave-boundary="${d}"]`
    ).forEach((r) => {
      const p = l.type === "click";
      let f;
      if (p) {
        const y = u.getBoundingClientRect();
        f = {
          x: y.left + y.width / 2,
          y: y.top + y.height / 2
        };
      } else
        f = l;
      const v = xe(xe({}, n), ot.get(r));
      Yt(f, r, ao(xe({}, v), { waitForRelease: p ? !1 : v.waitForRelease }));
    });
  }, s = {
    [o.mounted](l, { value: u = {} }) {
      var d;
      ot.set(l, u), $n(l, (d = u == null ? void 0 : u.trigger) != null ? d : n.trigger);
      const c = os(n, l);
      l.addEventListener("pointerdown", c), l.addEventListener("click", (r) => {
        if (r.detail !== 0) return;
        const p = l.getBoundingClientRect(), f = {
          x: p.left + p.width / 2,
          y: p.top + p.height / 2
        };
        c(r, f);
      });
    },
    [o.updated](l, { value: u = {} }) {
      var d;
      ot.set(l, u), $n(l, (d = u == null ? void 0 : u.trigger) != null ? d : n.trigger);
    }
  }, a = {
    [o.mounted](l, { arg: u = "true" }) {
      l.dataset.vWaveTrigger = u, u !== "true" && (l.addEventListener("pointerdown", i), l.addEventListener("click", i));
    },
    [o.updated](l, { arg: u = "true" }) {
      l.dataset.vWaveTrigger = u, u === "true" ? (l.removeEventListener("pointerdown", i), l.removeEventListener("click", i)) : (l.addEventListener("pointerdown", i), l.addEventListener("click", i));
    }
  };
  return {
    wave: s,
    vWave: s,
    waveTrigger: a,
    vWaveTrigger: a
  };
}, ss = {
  createLocalWaveDirective: is
}, uo = ss;
const as = /* @__PURE__ */ T({
  __name: "AppButton",
  props: De({
    variant: null,
    icon: null,
    iconBefore: null,
    iconAfter: null
  }, { variant: "secondary" }),
  setup(e) {
    Ho((f) => ({
      "097673c7": r.value,
      "0976e826": p.value
    }));
    const { createLocalWaveDirective: t } = uo, { vWave: n } = t({
      duration: 0.2
    }), o = P(null), i = se(), s = w(() => {
      var f, v;
      return !!(e.icon || e.iconBefore || e.iconAfter) && !((v = i == null ? void 0 : (f = i.slots).default) != null && v.call(f));
    }), { elementX: a, elementY: l, elementWidth: u, elementHeight: d, isOutside: c } = zi(o), r = w(() => c.value ? void 0 : `${a.value / u.value * 100}%`), p = w(() => c.value ? void 0 : `${l.value / d.value * 100}%`);
    return (f, v) => ge((_(), S(m(io), {
      ref_key: "buttonEl",
      ref: o,
      "icon-left-class": f.$style["icon-before"],
      "icon-right-class": f.$style["icon-after"],
      "icon-left": f.icon ?? f.iconBefore,
      "icon-right": f.iconAfter,
      class: V([f.$style["app-button"], f.$style[f.variant], { [f.$style["v-border-shine"]]: !(m(c) && !1), [f.$style["icon-button"]]: s.value }]),
      "wrapper-class": f.$style.wrapper,
      "label-class": f.$style.label
    }, {
      default: k(() => [
        D(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["icon-left-class", "icon-right-class", "icon-left", "icon-right", "class", "wrapper-class", "label-class"])), [
      [m(n)]
    ]);
  }
}), ls = "_app-button_f9040b0", rs = "_v-border-shine_8419f80", us = "_primary_5785c37", cs = "_secondary_31cb9f8", ds = "_text_7e1c00c", fs = "_icon-button_3541c9b", ps = "_label_bdd07c7", vs = "_icon-before_fb07300", ms = "_icon-after_4d342ca", gs = { "app-button": ls, "v-border-shine": rs, primary: us, secondary: cs, text: ds, "icon-button": fs, label: ps, "icon-before": vs, "icon-after": ms }, hs = {
  $style: gs
}, ys = /* @__PURE__ */ Be(as, [["__cssModules", hs]]), bs = /* @__PURE__ */ T({
  __name: "AppCard",
  props: De({
    variant: null
  }, { variant: "raised" }),
  setup(e) {
    return (t, n) => (_(), X("div", {
      class: V(["app-card", t.variant])
    }, [
      D(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ws = /* @__PURE__ */ Be(bs, [["__scopeId", "data-v-ed1acfe5"]]), Cs = /* @__PURE__ */ T({
  __name: "AppChip",
  props: De({
    size: null,
    transparent: { type: Boolean }
  }, { size: "medium", transparent: !1 }),
  setup(e) {
    return (t, n) => (_(), X("div", {
      class: V(["app-chip", [t.size, { transparent: t.transparent }]])
    }, [
      D(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), dr = /* @__PURE__ */ Be(Cs, [["__scopeId", "data-v-cb50da17"]]), Os = ["top", "right", "bottom", "left"], ke = Math.min, oe = Math.max, Et = Math.round, vt = Math.floor, de = (e) => ({
  x: e,
  y: e
}), Es = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, As = {
  start: "end",
  end: "start"
};
function Gt(e, t, n) {
  return oe(e, ke(t, n));
}
function be(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function we(e) {
  return e.split("-")[0];
}
function Qe(e) {
  return e.split("-")[1];
}
function un(e) {
  return e === "x" ? "y" : "x";
}
function cn(e) {
  return e === "y" ? "height" : "width";
}
function Se(e) {
  return ["top", "bottom"].includes(we(e)) ? "y" : "x";
}
function dn(e) {
  return un(Se(e));
}
function xs(e, t, n) {
  n === void 0 && (n = !1);
  const o = Qe(e), i = dn(e), s = cn(i);
  let a = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = At(a)), [a, At(a)];
}
function Ps(e) {
  const t = At(e);
  return [Xt(e), t, Xt(t)];
}
function Xt(e) {
  return e.replace(/start|end/g, (t) => As[t]);
}
function _s(e, t, n) {
  const o = ["left", "right"], i = ["right", "left"], s = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : o : t ? o : i;
    case "left":
    case "right":
      return t ? s : a;
    default:
      return [];
  }
}
function $s(e, t, n, o) {
  const i = Qe(e);
  let s = _s(we(e), n === "start", o);
  return i && (s = s.map((a) => a + "-" + i), t && (s = s.concat(s.map(Xt)))), s;
}
function At(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Es[t]);
}
function ks(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function co(e) {
  return typeof e != "number" ? ks(e) : {
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
    width: o,
    height: i
  } = e;
  return {
    width: o,
    height: i,
    top: n,
    left: t,
    right: t + o,
    bottom: n + i,
    x: t,
    y: n
  };
}
function Dn(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const s = Se(t), a = dn(t), l = cn(a), u = we(t), d = s === "y", c = o.x + o.width / 2 - i.width / 2, r = o.y + o.height / 2 - i.height / 2, p = o[l] / 2 - i[l] / 2;
  let f;
  switch (u) {
    case "top":
      f = {
        x: c,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: c,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: r
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: r
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Qe(t)) {
    case "start":
      f[a] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      f[a] += p * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Ss = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: a
  } = n, l = s.filter(Boolean), u = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: c,
    y: r
  } = Dn(d, o, u), p = o, f = {}, v = 0;
  for (let y = 0; y < l.length; y++) {
    const {
      name: g,
      fn: b
    } = l[y], {
      x: h,
      y: C,
      data: E,
      reset: x
    } = await b({
      x: c,
      y: r,
      initialPlacement: o,
      placement: p,
      strategy: i,
      middlewareData: f,
      rects: d,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = h ?? c, r = C ?? r, f = {
      ...f,
      [g]: {
        ...f[g],
        ...E
      }
    }, x && v <= 50 && (v++, typeof x == "object" && (x.placement && (p = x.placement), x.rects && (d = x.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : x.rects), {
      x: c,
      y: r
    } = Dn(d, p, u)), y = -1);
  }
  return {
    x: c,
    y: r,
    placement: p,
    strategy: i,
    middlewareData: f
  };
};
async function st(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: i,
    platform: s,
    rects: a,
    elements: l,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: r = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = be(t, e), v = co(f), g = l[p ? r === "floating" ? "reference" : "floating" : r], b = xt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), h = r === "floating" ? {
    x: o,
    y: i,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), E = await (s.isElement == null ? void 0 : s.isElement(C)) ? await (s.getScale == null ? void 0 : s.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = xt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: h,
    offsetParent: C,
    strategy: u
  }) : h);
  return {
    top: (b.top - x.top + v.top) / E.y,
    bottom: (x.bottom - b.bottom + v.bottom) / E.y,
    left: (b.left - x.left + v.left) / E.x,
    right: (x.right - b.right + v.right) / E.x
  };
}
const Ts = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: s,
      platform: a,
      elements: l,
      middlewareData: u
    } = t, {
      element: d,
      padding: c = 0
    } = be(e, t) || {};
    if (d == null)
      return {};
    const r = co(c), p = {
      x: n,
      y: o
    }, f = dn(i), v = cn(f), y = await a.getDimensions(d), g = f === "y", b = g ? "top" : "left", h = g ? "bottom" : "right", C = g ? "clientHeight" : "clientWidth", E = s.reference[v] + s.reference[f] - p[f] - s.floating[v], x = p[f] - s.reference[f], $ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let A = $ ? $[C] : 0;
    (!A || !await (a.isElement == null ? void 0 : a.isElement($))) && (A = l.floating[C] || s.floating[v]);
    const B = E / 2 - x / 2, W = A / 2 - y[v] / 2 - 1, F = ke(r[b], W), R = ke(r[h], W), K = F, z = A - y[v] - R, L = A / 2 - y[v] / 2 + B, q = Gt(K, L, z), Q = !u.arrow && Qe(i) != null && L !== q && s.reference[v] / 2 - (L < K ? F : R) - y[v] / 2 < 0, J = Q ? L < K ? L - K : L - z : 0;
    return {
      [f]: p[f] + J,
      data: {
        [f]: q,
        centerOffset: L - q - J,
        ...Q && {
          alignmentOffset: J
        }
      },
      reset: Q
    };
  }
}), Ds = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: i,
        middlewareData: s,
        rects: a,
        initialPlacement: l,
        platform: u,
        elements: d
      } = t, {
        mainAxis: c = !0,
        crossAxis: r = !0,
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: y = !0,
        ...g
      } = be(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const b = we(i), h = Se(l), C = we(l) === l, E = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), x = p || (C || !y ? [At(l)] : Ps(l)), $ = v !== "none";
      !p && $ && x.push(...$s(l, y, v, E));
      const A = [l, ...x], B = await st(t, g), W = [];
      let F = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (c && W.push(B[b]), r) {
        const L = xs(i, a, E);
        W.push(B[L[0]], B[L[1]]);
      }
      if (F = [...F, {
        placement: i,
        overflows: W
      }], !W.every((L) => L <= 0)) {
        var R, K;
        const L = (((R = s.flip) == null ? void 0 : R.index) || 0) + 1, q = A[L];
        if (q)
          return {
            data: {
              index: L,
              overflows: F
            },
            reset: {
              placement: q
            }
          };
        let Q = (K = F.filter((J) => J.overflows[0] <= 0).sort((J, te) => J.overflows[1] - te.overflows[1])[0]) == null ? void 0 : K.placement;
        if (!Q)
          switch (f) {
            case "bestFit": {
              var z;
              const J = (z = F.filter((te) => {
                if ($) {
                  const ne = Se(te.placement);
                  return ne === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ne === "y";
                }
                return !0;
              }).map((te) => [te.placement, te.overflows.filter((ne) => ne > 0).reduce((ne, Ve) => ne + Ve, 0)]).sort((te, ne) => te[1] - ne[1])[0]) == null ? void 0 : z[0];
              J && (Q = J);
              break;
            }
            case "initialPlacement":
              Q = l;
              break;
          }
        if (i !== Q)
          return {
            reset: {
              placement: Q
            }
          };
      }
      return {};
    }
  };
};
function Bn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Rn(e) {
  return Os.some((t) => e[t] >= 0);
}
const Bs = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...i
      } = be(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await st(t, {
            ...i,
            elementContext: "reference"
          }), a = Bn(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Rn(a)
            }
          };
        }
        case "escaped": {
          const s = await st(t, {
            ...i,
            altBoundary: !0
          }), a = Bn(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Rn(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Rs(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), a = we(n), l = Qe(n), u = Se(n) === "y", d = ["left", "top"].includes(a) ? -1 : 1, c = s && u ? -1 : 1, r = be(t, e);
  let {
    mainAxis: p,
    crossAxis: f,
    alignmentAxis: v
  } = typeof r == "number" ? {
    mainAxis: r,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: r.mainAxis || 0,
    crossAxis: r.crossAxis || 0,
    alignmentAxis: r.alignmentAxis
  };
  return l && typeof v == "number" && (f = l === "end" ? v * -1 : v), u ? {
    x: f * c,
    y: p * d
  } : {
    x: p * d,
    y: f * c
  };
}
const Is = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: i,
        y: s,
        placement: a,
        middlewareData: l
      } = t, u = await Rs(t, e);
      return a === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : {
        x: i + u.x,
        y: s + u.y,
        data: {
          ...u,
          placement: a
        }
      };
    }
  };
}, Ls = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: i
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (g) => {
            let {
              x: b,
              y: h
            } = g;
            return {
              x: b,
              y: h
            };
          }
        },
        ...u
      } = be(e, t), d = {
        x: n,
        y: o
      }, c = await st(t, u), r = Se(we(i)), p = un(r);
      let f = d[p], v = d[r];
      if (s) {
        const g = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", h = f + c[g], C = f - c[b];
        f = Gt(h, f, C);
      }
      if (a) {
        const g = r === "y" ? "top" : "left", b = r === "y" ? "bottom" : "right", h = v + c[g], C = v - c[b];
        v = Gt(h, v, C);
      }
      const y = l.fn({
        ...t,
        [p]: f,
        [r]: v
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - o,
          enabled: {
            [p]: s,
            [r]: a
          }
        }
      };
    }
  };
}, Ms = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: i,
        rects: s,
        middlewareData: a
      } = t, {
        offset: l = 0,
        mainAxis: u = !0,
        crossAxis: d = !0
      } = be(e, t), c = {
        x: n,
        y: o
      }, r = Se(i), p = un(r);
      let f = c[p], v = c[r];
      const y = be(l, t), g = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (u) {
        const C = p === "y" ? "height" : "width", E = s.reference[p] - s.floating[C] + g.mainAxis, x = s.reference[p] + s.reference[C] - g.mainAxis;
        f < E ? f = E : f > x && (f = x);
      }
      if (d) {
        var b, h;
        const C = p === "y" ? "width" : "height", E = ["top", "left"].includes(we(i)), x = s.reference[r] - s.floating[C] + (E && ((b = a.offset) == null ? void 0 : b[r]) || 0) + (E ? 0 : g.crossAxis), $ = s.reference[r] + s.reference[C] + (E ? 0 : ((h = a.offset) == null ? void 0 : h[r]) || 0) - (E ? g.crossAxis : 0);
        v < x ? v = x : v > $ && (v = $);
      }
      return {
        [p]: f,
        [r]: v
      };
    }
  };
}, Fs = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: i,
        rects: s,
        platform: a,
        elements: l
      } = t, {
        apply: u = () => {
        },
        ...d
      } = be(e, t), c = await st(t, d), r = we(i), p = Qe(i), f = Se(i) === "y", {
        width: v,
        height: y
      } = s.floating;
      let g, b;
      r === "top" || r === "bottom" ? (g = r, b = p === (await (a.isRTL == null ? void 0 : a.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (b = r, g = p === "end" ? "top" : "bottom");
      const h = y - c.top - c.bottom, C = v - c.left - c.right, E = ke(y - c[g], h), x = ke(v - c[b], C), $ = !t.middlewareData.shift;
      let A = E, B = x;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (B = C), (o = t.middlewareData.shift) != null && o.enabled.y && (A = h), $ && !p) {
        const F = oe(c.left, 0), R = oe(c.right, 0), K = oe(c.top, 0), z = oe(c.bottom, 0);
        f ? B = v - 2 * (F !== 0 || R !== 0 ? F + R : oe(c.left, c.right)) : A = y - 2 * (K !== 0 || z !== 0 ? K + z : oe(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: B,
        availableHeight: A
      });
      const W = await a.getDimensions(l.floating);
      return v !== W.width || y !== W.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function kt() {
  return typeof window < "u";
}
function Fe(e) {
  return fn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ie(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function pe(e) {
  var t;
  return (t = (fn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function fn(e) {
  return kt() ? e instanceof Node || e instanceof ie(e).Node : !1;
}
function re(e) {
  return kt() ? e instanceof Element || e instanceof ie(e).Element : !1;
}
function fe(e) {
  return kt() ? e instanceof HTMLElement || e instanceof ie(e).HTMLElement : !1;
}
function In(e) {
  return !kt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ie(e).ShadowRoot;
}
function ct(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i);
}
function Vs(e) {
  return ["table", "td", "th"].includes(Fe(e));
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
function pn(e) {
  const t = vn(), n = re(e) ? ue(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Hs(e) {
  let t = Te(e);
  for (; fe(t) && !Xe(t); ) {
    if (pn(t))
      return t;
    if (St(t))
      return null;
    t = Te(t);
  }
  return null;
}
function vn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Xe(e) {
  return ["html", "body", "#document"].includes(Fe(e));
}
function ue(e) {
  return ie(e).getComputedStyle(e);
}
function Tt(e) {
  return re(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Te(e) {
  if (Fe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    In(e) && e.host || // Fallback.
    pe(e)
  );
  return In(t) ? t.host : t;
}
function fo(e) {
  const t = Te(e);
  return Xe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : fe(t) && ct(t) ? t : fo(t);
}
function at(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = fo(e), s = i === ((o = e.ownerDocument) == null ? void 0 : o.body), a = ie(i);
  if (s) {
    const l = Jt(a);
    return t.concat(a, a.visualViewport || [], ct(i) ? i : [], l && n ? at(l) : []);
  }
  return t.concat(i, at(i, [], n));
}
function Jt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function po(e) {
  const t = ue(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const i = fe(e), s = i ? e.offsetWidth : n, a = i ? e.offsetHeight : o, l = Et(n) !== s || Et(o) !== a;
  return l && (n = s, o = a), {
    width: n,
    height: o,
    $: l
  };
}
function mn(e) {
  return re(e) ? e : e.contextElement;
}
function Ue(e) {
  const t = mn(e);
  if (!fe(t))
    return de(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    $: s
  } = po(t);
  let a = (s ? Et(n.width) : n.width) / o, l = (s ? Et(n.height) : n.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: a,
    y: l
  };
}
const zs = /* @__PURE__ */ de(0);
function vo(e) {
  const t = ie(e);
  return !vn() || !t.visualViewport ? zs : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ws(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ie(e) ? !1 : t;
}
function Me(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), s = mn(e);
  let a = de(1);
  t && (o ? re(o) && (a = Ue(o)) : a = Ue(e));
  const l = Ws(s, n, o) ? vo(s) : de(0);
  let u = (i.left + l.x) / a.x, d = (i.top + l.y) / a.y, c = i.width / a.x, r = i.height / a.y;
  if (s) {
    const p = ie(s), f = o && re(o) ? ie(o) : o;
    let v = p, y = Jt(v);
    for (; y && o && f !== v; ) {
      const g = Ue(y), b = y.getBoundingClientRect(), h = ue(y), C = b.left + (y.clientLeft + parseFloat(h.paddingLeft)) * g.x, E = b.top + (y.clientTop + parseFloat(h.paddingTop)) * g.y;
      u *= g.x, d *= g.y, c *= g.x, r *= g.y, u += C, d += E, v = ie(y), y = Jt(v);
    }
  }
  return xt({
    width: c,
    height: r,
    x: u,
    y: d
  });
}
function gn(e, t) {
  const n = Tt(e).scrollLeft;
  return t ? t.left + n : Me(pe(e)).left + n;
}
function mo(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    gn(e, o)
  )), s = o.top + t.scrollTop;
  return {
    x: i,
    y: s
  };
}
function Ns(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: i
  } = e;
  const s = i === "fixed", a = pe(o), l = t ? St(t.floating) : !1;
  if (o === a || l && s)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = de(1);
  const c = de(0), r = fe(o);
  if ((r || !r && !s) && ((Fe(o) !== "body" || ct(a)) && (u = Tt(o)), fe(o))) {
    const f = Me(o);
    d = Ue(o), c.x = f.x + o.clientLeft, c.y = f.y + o.clientTop;
  }
  const p = a && !r && !s ? mo(a, u, !0) : de(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x + p.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y + p.y
  };
}
function js(e) {
  return Array.from(e.getClientRects());
}
function Us(e) {
  const t = pe(e), n = Tt(e), o = e.ownerDocument.body, i = oe(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = oe(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -n.scrollLeft + gn(e);
  const l = -n.scrollTop;
  return ue(o).direction === "rtl" && (a += oe(t.clientWidth, o.clientWidth) - i), {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Ks(e, t) {
  const n = ie(e), o = pe(e), i = n.visualViewport;
  let s = o.clientWidth, a = o.clientHeight, l = 0, u = 0;
  if (i) {
    s = i.width, a = i.height;
    const d = vn();
    (!d || d && t === "fixed") && (l = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function qs(e, t) {
  const n = Me(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, s = fe(e) ? Ue(e) : de(1), a = e.clientWidth * s.x, l = e.clientHeight * s.y, u = i * s.x, d = o * s.y;
  return {
    width: a,
    height: l,
    x: u,
    y: d
  };
}
function Ln(e, t, n) {
  let o;
  if (t === "viewport")
    o = Ks(e, n);
  else if (t === "document")
    o = Us(pe(e));
  else if (re(t))
    o = qs(t, n);
  else {
    const i = vo(e);
    o = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return xt(o);
}
function go(e, t) {
  const n = Te(e);
  return n === t || !re(n) || Xe(n) ? !1 : ue(n).position === "fixed" || go(n, t);
}
function Ys(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = at(e, [], !1).filter((l) => re(l) && Fe(l) !== "body"), i = null;
  const s = ue(e).position === "fixed";
  let a = s ? Te(e) : e;
  for (; re(a) && !Xe(a); ) {
    const l = ue(a), u = pn(a);
    !u && l.position === "fixed" && (i = null), (s ? !u && !i : !u && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ct(a) && !u && go(e, a)) ? o = o.filter((c) => c !== a) : i = l, a = Te(a);
  }
  return t.set(e, o), o;
}
function Gs(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const a = [...n === "clippingAncestors" ? St(t) ? [] : Ys(t, this._c) : [].concat(n), o], l = a[0], u = a.reduce((d, c) => {
    const r = Ln(t, c, i);
    return d.top = oe(r.top, d.top), d.right = ke(r.right, d.right), d.bottom = ke(r.bottom, d.bottom), d.left = oe(r.left, d.left), d;
  }, Ln(t, l, i));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Xs(e) {
  const {
    width: t,
    height: n
  } = po(e);
  return {
    width: t,
    height: n
  };
}
function Js(e, t, n) {
  const o = fe(t), i = pe(t), s = n === "fixed", a = Me(e, !0, s, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = de(0);
  if (o || !o && !s)
    if ((Fe(t) !== "body" || ct(i)) && (l = Tt(t)), o) {
      const p = Me(t, !0, s, t);
      u.x = p.x + t.clientLeft, u.y = p.y + t.clientTop;
    } else i && (u.x = gn(i));
  const d = i && !o && !s ? mo(i, l) : de(0), c = a.left + l.scrollLeft - u.x - d.x, r = a.top + l.scrollTop - u.y - d.y;
  return {
    x: c,
    y: r,
    width: a.width,
    height: a.height
  };
}
function Vt(e) {
  return ue(e).position === "static";
}
function Mn(e, t) {
  if (!fe(e) || ue(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return pe(e) === n && (n = n.ownerDocument.body), n;
}
function ho(e, t) {
  const n = ie(e);
  if (St(e))
    return n;
  if (!fe(e)) {
    let i = Te(e);
    for (; i && !Xe(i); ) {
      if (re(i) && !Vt(i))
        return i;
      i = Te(i);
    }
    return n;
  }
  let o = Mn(e, t);
  for (; o && Vs(o) && Vt(o); )
    o = Mn(o, t);
  return o && Xe(o) && Vt(o) && !pn(o) ? n : o || Hs(e) || n;
}
const Qs = async function(e) {
  const t = this.getOffsetParent || ho, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Js(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Zs(e) {
  return ue(e).direction === "rtl";
}
const ea = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ns,
  getDocumentElement: pe,
  getClippingRect: Gs,
  getOffsetParent: ho,
  getElementRects: Qs,
  getClientRects: js,
  getDimensions: Xs,
  getScale: Ue,
  isElement: re,
  isRTL: Zs
};
function yo(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ta(e, t) {
  let n = null, o;
  const i = pe(e);
  function s() {
    var l;
    clearTimeout(o), (l = n) == null || l.disconnect(), n = null;
  }
  function a(l, u) {
    l === void 0 && (l = !1), u === void 0 && (u = 1), s();
    const d = e.getBoundingClientRect(), {
      left: c,
      top: r,
      width: p,
      height: f
    } = d;
    if (l || t(), !p || !f)
      return;
    const v = vt(r), y = vt(i.clientWidth - (c + p)), g = vt(i.clientHeight - (r + f)), b = vt(c), C = {
      rootMargin: -v + "px " + -y + "px " + -g + "px " + -b + "px",
      threshold: oe(0, ke(1, u)) || 1
    };
    let E = !0;
    function x($) {
      const A = $[0].intersectionRatio;
      if (A !== u) {
        if (!E)
          return a();
        A ? a(!1, A) : o = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !yo(d, e.getBoundingClientRect()) && a(), E = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...C,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, C);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function na(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = mn(e), c = i || s ? [...d ? at(d) : [], ...at(t)] : [];
  c.forEach((b) => {
    i && b.addEventListener("scroll", n, {
      passive: !0
    }), s && b.addEventListener("resize", n);
  });
  const r = d && l ? ta(d, n) : null;
  let p = -1, f = null;
  a && (f = new ResizeObserver((b) => {
    let [h] = b;
    h && h.target === d && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var C;
      (C = f) == null || C.observe(t);
    })), n();
  }), d && !u && f.observe(d), f.observe(t));
  let v, y = u ? Me(e) : null;
  u && g();
  function g() {
    const b = Me(e);
    y && !yo(y, b) && n(), y = b, v = requestAnimationFrame(g);
  }
  return n(), () => {
    var b;
    c.forEach((h) => {
      i && h.removeEventListener("scroll", n), s && h.removeEventListener("resize", n);
    }), r == null || r(), (b = f) == null || b.disconnect(), f = null, u && cancelAnimationFrame(v);
  };
}
const oa = Is, ia = Ls, Fn = Ds, sa = Fs, aa = Bs, la = Ts, ra = Ms, ua = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: ea,
    ...n
  }, s = {
    ...i.platform,
    _c: o
  };
  return Ss(e, t, {
    ...i,
    platform: s
  });
};
function ca(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Qt(e) {
  if (ca(e)) {
    const t = e.$el;
    return fn(t) && Fe(t) === "#comment" ? null : t;
  }
  return e;
}
function Ne(e) {
  return typeof e == "function" ? e() : m(e);
}
function da(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Qt(Ne(e.element));
      return n == null ? {} : la({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function bo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vn(e, t) {
  const n = bo(e);
  return Math.round(t * n) / n;
}
function fa(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, i = w(() => {
    var A;
    return (A = Ne(n.open)) != null ? A : !0;
  }), s = w(() => Ne(n.middleware)), a = w(() => {
    var A;
    return (A = Ne(n.placement)) != null ? A : "bottom";
  }), l = w(() => {
    var A;
    return (A = Ne(n.strategy)) != null ? A : "absolute";
  }), u = w(() => {
    var A;
    return (A = Ne(n.transform)) != null ? A : !0;
  }), d = w(() => Qt(e.value)), c = w(() => Qt(t.value)), r = P(0), p = P(0), f = P(l.value), v = P(a.value), y = Yn({}), g = P(!1), b = w(() => {
    const A = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return A;
    const B = Vn(c.value, r.value), W = Vn(c.value, p.value);
    return u.value ? {
      ...A,
      transform: "translate(" + B + "px, " + W + "px)",
      ...bo(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: B + "px",
      top: W + "px"
    };
  });
  let h;
  function C() {
    if (d.value == null || c.value == null)
      return;
    const A = i.value;
    ua(d.value, c.value, {
      middleware: s.value,
      placement: a.value,
      strategy: l.value
    }).then((B) => {
      r.value = B.x, p.value = B.y, f.value = B.strategy, v.value = B.placement, y.value = B.middlewareData, g.value = A !== !1;
    });
  }
  function E() {
    typeof h == "function" && (h(), h = void 0);
  }
  function x() {
    if (E(), o === void 0) {
      C();
      return;
    }
    if (d.value != null && c.value != null) {
      h = o(d.value, c.value, C);
      return;
    }
  }
  function $() {
    i.value || (g.value = !1);
  }
  return H([s, a, l, i], C, {
    flush: "sync"
  }), H([d, c], x, {
    flush: "sync"
  }), H(i, $, {
    flush: "sync"
  }), Ke() && _t(E), {
    x: He(r),
    y: He(p),
    strategy: He(f),
    placement: He(v),
    middlewareData: He(y),
    isPositioned: He(g),
    floatingStyles: b,
    update: C
  };
}
function hn(e) {
  return e ? e.flatMap((t) => t.type === tt ? hn(t.children) : [t]) : [];
}
const pa = T({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u, d;
      if (!n.default)
        return null;
      const o = hn(n.default()), i = o.findIndex((c) => c.type !== Gn);
      if (i === -1)
        return o;
      const s = o[i];
      (u = s.props) == null || delete u.ref;
      const a = s.props ? U(t, s.props) : t;
      t.class && ((d = s.props) != null && d.class) && delete s.props.class;
      const l = zo(s, a);
      for (const c in a)
        c.startsWith("on") && (l.props || (l.props = {}), l.props[c] = a[c]);
      return o.length === 1 ? l : (o[i] = l, o);
    };
  }
}), ve = T({
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
    const o = e.asChild ? "template" : e.as;
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => yt(o, t) : o !== "template" ? () => yt(e.as, t, { default: n.default }) : () => yt(pa, t, { default: n.default });
  }
}), va = /* @__PURE__ */ T({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (_(), S(m(ve), {
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
      default: k(() => [
        D(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
});
function Ze(e, t) {
  const n = typeof e == "string" ? `${e}Context` : t, o = Symbol(n);
  return [(a) => {
    const l = nn(o, a);
    if (l || l === null)
      return l;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (Nn(o, a), a)];
}
const [wo, fr] = Ze("ConfigProvider");
function Y() {
  const e = se(), t = P(), n = w(() => {
    var a, l;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (l = t.value) == null ? void 0 : l.$el.nextElementSibling : Je(t);
  }), o = Object.assign({}, e.exposed), i = {};
  for (const a in e.props)
    Object.defineProperty(i, a, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[a]
    });
  if (Object.keys(o).length > 0)
    for (const a in o)
      Object.defineProperty(i, a, {
        enumerable: !0,
        configurable: !0,
        get: () => o[a]
      });
  Object.defineProperty(i, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = i;
  function s(a) {
    t.value = a, a && (Object.defineProperty(i, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => a instanceof Element ? a : a.$el
    }), e.exposed = i);
  }
  return { forwardRef: s, currentRef: t, currentElement: n };
}
let ma = 0;
function Pt(e, t = "reka") {
  const n = wo({ useId: void 0 });
  return wn.useId ? `${t}-${wn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++ma}`;
}
function ga(e, t) {
  const n = P(e);
  function o(s) {
    return t[n.value][s] ?? n.value;
  }
  return {
    state: n,
    dispatch: (s) => {
      n.value = o(s);
    }
  };
}
function ha(e, t) {
  var g;
  const n = P({}), o = P("none"), i = P(e), s = e.value ? "mounted" : "unmounted";
  let a;
  const l = ((g = t.value) == null ? void 0 : g.ownerDocument.defaultView) ?? ut, { state: u, dispatch: d } = ga(s, {
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
  }), c = (b) => {
    var h;
    if (Re) {
      const C = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      (h = t.value) == null || h.dispatchEvent(C);
    }
  };
  H(
    e,
    async (b, h) => {
      var E;
      const C = h !== b;
      if (await Z(), C) {
        const x = o.value, $ = mt(t.value);
        b ? (d("MOUNT"), c("enter"), $ === "none" && c("after-enter")) : $ === "none" || ((E = n.value) == null ? void 0 : E.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : h && x !== $ ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const r = (b) => {
    const h = mt(t.value), C = h.includes(
      b.animationName
    ), E = u.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && C && (c(`after-${E}`), d("ANIMATION_END"), !i.value)) {
      const x = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", a = l == null ? void 0 : l.setTimeout(() => {
        var $;
        (($ = t.value) == null ? void 0 : $.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = x);
      });
    }
    b.target === t.value && h === "none" && d("ANIMATION_END");
  }, p = (b) => {
    b.target === t.value && (o.value = mt(t.value));
  }, f = H(
    t,
    (b, h) => {
      b ? (n.value = getComputedStyle(b), b.addEventListener("animationstart", p), b.addEventListener("animationcancel", r), b.addEventListener("animationend", r)) : (d("ANIMATION_END"), a !== void 0 && (l == null || l.clearTimeout(a)), h == null || h.removeEventListener("animationstart", p), h == null || h.removeEventListener("animationcancel", r), h == null || h.removeEventListener("animationend", r));
    },
    { immediate: !0 }
  ), v = H(u, () => {
    const b = mt(t.value);
    o.value = u.value === "mounted" ? b : "none";
  });
  return $t(() => {
    f(), v();
  }), {
    isPresent: w(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function mt(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const yn = T({
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
    var d;
    const { present: o, forceMount: i } = sn(e), s = P(), { isPresent: a } = ha(o, s);
    n({ present: a });
    let l = t.default({ present: a.value });
    l = hn(l || []);
    const u = se();
    if (l && (l == null ? void 0 : l.length) > 1) {
      const c = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((r) => `  - ${r}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => i.value || o.value || a.value ? yt(t.default({ present: a.value })[0], {
      ref: (c) => {
        const r = Je(c);
        return typeof (r == null ? void 0 : r.hasAttribute) > "u" || (r != null && r.hasAttribute("data-reka-popper-content-wrapper") ? s.value = r.firstElementChild : s.value = r), r;
      }
    }) : null;
  }
});
function Dt(e) {
  const t = se(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((i) => {
    o[Wo(Xn(i))] = (...s) => e(i, ...s);
  }), o;
}
function Co(e) {
  const t = se(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((i, s) => {
    const a = (t == null ? void 0 : t.type.props[s]).default;
    return a !== void 0 && (i[s] = a), i;
  }, {}), o = No(e);
  return w(() => {
    const i = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((a) => {
      i[Xn(a)] = s[a];
    }), Object.keys({ ...n, ...i }).reduce((a, l) => (o.value[l] !== void 0 && (a[l] = o.value[l]), a), {});
  });
}
function ya(e, t) {
  const n = Co(e), o = t ? Dt(t) : {};
  return w(() => ({
    ...n.value,
    ...o
  }));
}
const [Ie, ba] = Ze("DialogRoot"), wa = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, i = Ct(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = P(), a = P(), { modal: l } = sn(n);
    return ba({
      open: i,
      modal: l,
      openModal: () => {
        i.value = !0;
      },
      onOpenChange: (u) => {
        i.value = u;
      },
      onOpenToggle: () => {
        i.value = !i.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: s,
      contentElement: a
    }), (u, d) => D(u.$slots, "default", { open: m(i) });
  }
}), Ca = /* @__PURE__ */ T({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Ie(), { forwardRef: o, currentElement: i } = Y();
    return n.contentId || (n.contentId = Pt(void 0, "reka-dialog-content")), Ce(() => {
      n.triggerElement.value = i.value;
    }), (s, a) => (_(), S(m(ve), U(t, {
      ref: m(o),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": m(n).open.value || !1,
      "aria-controls": m(n).open.value ? m(n).contentId : void 0,
      "data-state": m(n).open.value ? "open" : "closed",
      onClick: m(n).onOpenToggle
    }), {
      default: k(() => [
        D(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Oo = /* @__PURE__ */ T({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Ii();
    return (n, o) => m(t) || n.forceMount ? (_(), S(Un, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      D(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : ae("", !0);
  }
});
function Eo(e, t, n) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(i);
}
const Oa = "dismissableLayer.pointerDownOutside", Ea = "dismissableLayer.focusOutside";
function Ao(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), i = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || i.indexOf(o) < i.indexOf(n));
}
function Aa(e, t) {
  var s;
  const n = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = P(!1), i = P(() => {
  });
  return le((a) => {
    if (!Re)
      return;
    const l = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (Ao(t.value, c)) {
          o.value = !1;
          return;
        }
        if (d.target && !o.value) {
          let r = function() {
            Eo(
              Oa,
              e,
              p
            );
          };
          const p = { originalEvent: d };
          d.pointerType === "touch" ? (n.removeEventListener("click", i.value), i.value = r, n.addEventListener("click", i.value, {
            once: !0
          })) : r();
        } else
          n.removeEventListener("click", i.value);
        o.value = !1;
      }
    }, u = window.setTimeout(() => {
      n.addEventListener("pointerdown", l);
    }, 0);
    a(() => {
      window.clearTimeout(u), n.removeEventListener("pointerdown", l), n.removeEventListener("click", i.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function xa(e, t) {
  var i;
  const n = ((i = t == null ? void 0 : t.value) == null ? void 0 : i.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = P(!1);
  return le((s) => {
    if (!Re)
      return;
    const a = async (l) => {
      t != null && t.value && (await Z(), !(!t.value || Ao(t.value, l.target)) && l.target && !o.value && Eo(
        Ea,
        e,
        { originalEvent: l }
      ));
    };
    n.addEventListener("focusin", a), s(() => n.removeEventListener("focusin", a));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const me = Jn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), xo = /* @__PURE__ */ T({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: i, currentElement: s } = Y(), a = w(
      () => {
        var v;
        return ((v = s.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), l = w(() => me.layersRoot), u = w(() => s.value ? Array.from(l.value).indexOf(s.value) : -1), d = w(() => me.layersWithOutsidePointerEventsDisabled.size > 0), c = w(() => {
      const v = Array.from(l.value), [y] = [...me.layersWithOutsidePointerEventsDisabled].slice(-1), g = v.indexOf(y);
      return u.value >= g;
    }), r = Aa(async (v) => {
      const y = [...me.branches].some(
        (g) => g == null ? void 0 : g.contains(v.target)
      );
      !c.value || y || (o("pointerDownOutside", v), o("interactOutside", v), await Z(), v.defaultPrevented || o("dismiss"));
    }, s), p = xa((v) => {
      [...me.branches].some(
        (g) => g == null ? void 0 : g.contains(v.target)
      ) || (o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss"));
    }, s);
    Mi("Escape", (v) => {
      u.value === l.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    });
    let f;
    return le((v) => {
      s.value && (n.disableOutsidePointerEvents && (me.layersWithOutsidePointerEventsDisabled.size === 0 && (f = a.value.body.style.pointerEvents, a.value.body.style.pointerEvents = "none"), me.layersWithOutsidePointerEventsDisabled.add(s.value)), l.value.add(s.value), v(() => {
        n.disableOutsidePointerEvents && me.layersWithOutsidePointerEventsDisabled.size === 1 && (a.value.body.style.pointerEvents = f);
      }));
    }), le((v) => {
      v(() => {
        s.value && (l.value.delete(s.value), me.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (v, y) => (_(), S(m(ve), {
      ref: m(i),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: lt({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: m(p).onFocusCapture,
      onBlurCapture: m(p).onBlurCapture,
      onPointerdownCapture: m(r).onPointerDownCapture
    }, {
      default: k(() => [
        D(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function $e() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Pa(e) {
  return e ? "open" : "closed";
}
const _a = "DialogTitle", $a = "DialogContent";
function ka({
  titleName: e = _a,
  contentName: t = $a,
  componentLink: n = "dialog.html#title",
  titleId: o,
  descriptionId: i,
  contentElement: s
}) {
  const a = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka.com/components/${n}`, l = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  Ce(() => {
    var c;
    document.getElementById(o) || console.warn(a);
    const d = (c = s.value) == null ? void 0 : c.getAttribute("aria-describedby");
    i && d && (document.getElementById(i) || console.warn(l));
  });
}
const Ht = "focusScope.autoFocusOnMount", zt = "focusScope.autoFocusOnUnmount", Hn = { bubbles: !1, cancelable: !0 };
function Sa(e, { select: t = !1 } = {}) {
  const n = $e();
  for (const o of e)
    if (Ae(o, { select: t }), $e() !== n)
      return !0;
}
function Ta(e) {
  const t = Po(e), n = zn(t, e), o = zn(t.reverse(), e);
  return [n, o];
}
function Po(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const i = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || i ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function zn(e, t) {
  for (const n of e)
    if (!Da(n, { upTo: t }))
      return n;
}
function Da(e, { upTo: t }) {
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
function Ba(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ae(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = $e();
    e.focus({ preventScroll: !0 }), e !== n && Ba(e) && t && e.select();
  }
}
const Ra = xi(() => P([]));
function Ia() {
  const e = Ra();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Wn(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Wn(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Wn(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function La(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Ma = /* @__PURE__ */ T({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: i, currentElement: s } = Y(), a = P(null), l = Ia(), u = Jn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    le((c) => {
      if (!Re)
        return;
      const r = s.value;
      if (!n.trapped)
        return;
      function p(g) {
        if (u.paused || !r)
          return;
        const b = g.target;
        r.contains(b) ? a.value = b : Ae(a.value, { select: !0 });
      }
      function f(g) {
        if (u.paused || !r)
          return;
        const b = g.relatedTarget;
        b !== null && (r.contains(b) || Ae(a.value, { select: !0 }));
      }
      function v(g) {
        r.contains(a.value) || Ae(r);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", f);
      const y = new MutationObserver(v);
      r && y.observe(r, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", f), y.disconnect();
      });
    }), le(async (c) => {
      const r = s.value;
      if (await Z(), !r)
        return;
      l.add(u);
      const p = $e();
      if (!r.contains(p)) {
        const v = new CustomEvent(Ht, Hn);
        r.addEventListener(Ht, (y) => o("mountAutoFocus", y)), r.dispatchEvent(v), v.defaultPrevented || (Sa(La(Po(r)), {
          select: !0
        }), $e() === p && Ae(r));
      }
      c(() => {
        r.removeEventListener(Ht, (g) => o("mountAutoFocus", g));
        const v = new CustomEvent(zt, Hn), y = (g) => {
          o("unmountAutoFocus", g);
        };
        r.addEventListener(zt, y), r.dispatchEvent(v), setTimeout(() => {
          v.defaultPrevented || Ae(p ?? document.body, { select: !0 }), r.removeEventListener(zt, y), l.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const r = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, p = $e();
      if (r && p) {
        const f = c.currentTarget, [v, y] = Ta(f);
        v && y ? !c.shiftKey && p === y ? (c.preventDefault(), n.loop && Ae(v, { select: !0 })) : c.shiftKey && p === v && (c.preventDefault(), n.loop && Ae(y, { select: !0 })) : p === f && c.preventDefault();
      }
    }
    return (c, r) => (_(), S(m(ve), {
      ref_key: "currentRef",
      ref: i,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: k(() => [
        D(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), _o = /* @__PURE__ */ T({
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
    const n = e, o = t, i = Ie(), { forwardRef: s, currentElement: a } = Y();
    return i.titleId || (i.titleId = Pt(void 0, "reka-dialog-title")), i.descriptionId || (i.descriptionId = Pt(void 0, "reka-dialog-description")), Ce(() => {
      i.contentElement = a, $e() !== document.body && (i.triggerElement.value = $e());
    }), process.env.NODE_ENV !== "production" && ka({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: i.titleId,
      descriptionId: i.descriptionId,
      contentElement: a
    }), (l, u) => (_(), S(m(Ma), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: k(() => [
        j(m(xo), U({
          id: m(i).contentId,
          ref: m(s),
          as: l.as,
          "as-child": l.asChild,
          "disable-outside-pointer-events": l.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": m(i).descriptionId,
          "aria-labelledby": m(i).titleId,
          "data-state": m(Pa)(m(i).open.value)
        }, l.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => m(i).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => o("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => o("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => o("pointerDownOutside", d))
        }), {
          default: k(() => [
            D(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var Fa = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, We = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), ht = {}, Wt = 0, $o = function(e) {
  return e && (e.host || $o(e.parentNode));
}, Va = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = $o(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ha = function(e, t, n, o) {
  var i = Va(t, Array.isArray(e) ? e : [e]);
  ht[n] || (ht[n] = /* @__PURE__ */ new WeakMap());
  var s = ht[n], a = [], l = /* @__PURE__ */ new Set(), u = new Set(i), d = function(r) {
    !r || l.has(r) || (l.add(r), d(r.parentNode));
  };
  i.forEach(d);
  var c = function(r) {
    !r || u.has(r) || Array.prototype.forEach.call(r.children, function(p) {
      if (l.has(p))
        c(p);
      else
        try {
          var f = p.getAttribute(o), v = f !== null && f !== "false", y = (We.get(p) || 0) + 1, g = (s.get(p) || 0) + 1;
          We.set(p, y), s.set(p, g), a.push(p), y === 1 && v && gt.set(p, !0), g === 1 && p.setAttribute(n, "true"), v || p.setAttribute(o, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", p, b);
        }
    });
  };
  return c(t), l.clear(), Wt++, function() {
    a.forEach(function(r) {
      var p = We.get(r) - 1, f = s.get(r) - 1;
      We.set(r, p), s.set(r, f), p || (gt.has(r) || r.removeAttribute(o), gt.delete(r)), f || r.removeAttribute(n);
    }), Wt--, Wt || (We = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), ht = {});
  };
}, za = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), i = Fa(e);
  return i ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live]"))), Ha(o, i, n, "aria-hidden")) : function() {
    return null;
  };
};
function Wa(e) {
  let t;
  H(() => Je(e), (n) => {
    n ? t = za(n) : t && t();
  }), $t(() => {
    t && t();
  });
}
const Na = /* @__PURE__ */ T({
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
    const n = e, o = t, i = Ie(), s = Dt(o), { forwardRef: a, currentElement: l } = Y();
    return Wa(l), (u, d) => (_(), S(_o, U({ ...n, ...m(s) }, {
      ref: m(a),
      "trap-focus": m(i).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var r;
        c.defaultPrevented || (c.preventDefault(), (r = m(i).triggerElement.value) == null || r.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const r = c.detail.originalEvent, p = r.button === 0 && r.ctrlKey === !0;
        (r.button === 2 || p) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: k(() => [
        D(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), ja = /* @__PURE__ */ T({
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
    const n = e, i = Dt(t);
    Y();
    const s = Ie(), a = P(!1), l = P(!1);
    return (u, d) => (_(), S(_o, U({ ...n, ...m(i) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var r;
        c.defaultPrevented || (a.value || (r = m(s).triggerElement.value) == null || r.focus(), c.preventDefault()), a.value = !1, l.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        var f;
        c.defaultPrevented || (a.value = !0, c.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const r = c.target;
        ((f = m(s).triggerElement.value) == null ? void 0 : f.contains(r)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && l.value && c.preventDefault();
      })
    }), {
      default: k(() => [
        D(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ua = /* @__PURE__ */ T({
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
    const n = e, o = t, i = Ie(), s = Dt(o), { forwardRef: a } = Y();
    return (l, u) => (_(), S(m(yn), {
      present: l.forceMount || m(i).open.value
    }, {
      default: k(() => [
        m(i).modal.value ? (_(), S(Na, U({
          key: 0,
          ref: m(a)
        }, { ...n, ...m(s), ...l.$attrs }), {
          default: k(() => [
            D(l.$slots, "default")
          ]),
          _: 3
        }, 16)) : (_(), S(ja, U({
          key: 1,
          ref: m(a)
        }, { ...n, ...m(s), ...l.$attrs }), {
          default: k(() => [
            D(l.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function Nt(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Zt(e, t, n = ".", o) {
  if (!Nt(t))
    return Zt(e, {}, n, o);
  const i = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const a = e[s];
    a != null && (o && o(i, s, a, n) || (Array.isArray(a) && Array.isArray(i[s]) ? i[s] = [...a, ...i[s]] : Nt(a) && Nt(i[s]) ? i[s] = Zt(
      a,
      i[s],
      (n ? `${n}.` : "") + s.toString(),
      o
    ) : i[s] = a));
  }
  return i;
}
function Ka(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Zt(n, o, "", e), {})
  );
}
const qa = Ka(), Ya = Pi(() => {
  const e = P(/* @__PURE__ */ new Map()), t = P(), n = w(() => {
    for (const a of e.value.values())
      if (a)
        return !0;
    return !1;
  }), o = wo({
    scrollBody: P(!0)
  });
  let i = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", xn && (i == null || i()), t.value = void 0;
  };
  return H(n, (a, l) => {
    var r;
    if (!Re)
      return;
    if (!a) {
      l && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, c = (r = o.scrollBody) != null && r.value ? typeof o.scrollBody.value == "object" ? qa({
      padding: o.scrollBody.value.padding === !0 ? u : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? u : o.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), xn && (i = he(
      document,
      "touchmove",
      (p) => Xa(p),
      { passive: !1 }
    )), Z(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Ga(e) {
  const t = Math.random().toString(36).substring(2, 7), n = Ya();
  n.value.set(t, e);
  const o = w({
    get: () => n.value.get(t) ?? !1,
    set: (i) => n.value.set(t, i)
  });
  return Bi(() => {
    n.value.delete(t);
  }), o;
}
function ko(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : ko(n);
  }
}
function Xa(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && ko(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Ja = /* @__PURE__ */ T({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ie();
    return Ga(!0), Y(), (n, o) => (_(), S(m(ve), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": m(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: k(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Qa = /* @__PURE__ */ T({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ie(), { forwardRef: n } = Y();
    return (o, i) => {
      var s;
      return (s = m(t)) != null && s.modal.value ? (_(), S(m(yn), {
        key: 0,
        present: o.forceMount || m(t).open.value
      }, {
        default: k(() => [
          j(Ja, U(o.$attrs, {
            ref: m(n),
            as: o.as,
            "as-child": o.asChild
          }), {
            default: k(() => [
              D(o.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : ae("", !0);
    };
  }
}), Za = /* @__PURE__ */ T({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    Y();
    const n = Ie();
    return (o, i) => (_(), S(m(ve), U(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: i[0] || (i[0] = (s) => m(n).onOpenChange(!1))
    }), {
      default: k(() => [
        D(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), [So, el] = Ze("PopperRoot"), tl = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = P();
    return el({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => D(n.$slots, "default");
  }
}), nl = /* @__PURE__ */ T({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = Y(), i = So();
    return Qn(() => {
      i.onAnchorChange(t.reference ?? o.value);
    }), (s, a) => (_(), S(m(ve), {
      ref: m(n),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: k(() => [
        D(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function ol(e) {
  return e !== null;
}
function il(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var g, b, h;
      const { placement: n, rects: o, middlewareData: i } = t, a = ((g = i.arrow) == null ? void 0 : g.centerOffset) !== 0, l = a ? 0 : e.arrowWidth, u = a ? 0 : e.arrowHeight, [d, c] = en(n), r = { start: "0%", center: "50%", end: "100%" }[c], p = (((b = i.arrow) == null ? void 0 : b.x) ?? 0) + l / 2, f = (((h = i.arrow) == null ? void 0 : h.y) ?? 0) + u / 2;
      let v = "", y = "";
      return d === "bottom" ? (v = a ? r : `${p}px`, y = `${-u}px`) : d === "top" ? (v = a ? r : `${p}px`, y = `${o.floating.height + u}px`) : d === "right" ? (v = `${-u}px`, y = a ? r : `${f}px`) : d === "left" && (v = `${o.floating.width + u}px`, y = a ? r : `${f}px`), { data: { x: v, y } };
    }
  };
}
function en(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function sl(e) {
  const t = P(), n = w(() => {
    var i;
    return ((i = t.value) == null ? void 0 : i.width) ?? 0;
  }), o = w(() => {
    var i;
    return ((i = t.value) == null ? void 0 : i.height) ?? 0;
  });
  return Ce(() => {
    const i = Je(e);
    if (i) {
      t.value = { width: i.offsetWidth, height: i.offsetHeight };
      const s = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const l = a[0];
        let u, d;
        if ("borderBoxSize" in l) {
          const c = l.borderBoxSize, r = Array.isArray(c) ? c[0] : c;
          u = r.inlineSize, d = r.blockSize;
        } else
          u = i.offsetWidth, d = i.offsetHeight;
        t.value = { width: u, height: d };
      });
      return s.observe(i, { box: "border-box" }), () => s.unobserve(i);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: o
  };
}
const al = {
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
}, [ll, rl] = Ze("PopperContent"), ul = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ De({
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
    ...al
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, i = So(), { forwardRef: s, currentElement: a } = Y(), l = P(), u = P(), { width: d, height: c } = sl(u), r = w(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), p = w(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), f = w(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = w(() => ({
      padding: p.value,
      boundary: f.value.filter(ol),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: f.value.length > 0
    })), y = Ei(() => [
      oa({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Fn({
        ...v.value
      }),
      n.avoidCollisions && ia({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? ra() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Fn({
        ...v.value
      }),
      sa({
        ...v.value,
        apply: ({ elements: R, rects: K, availableWidth: z, availableHeight: L }) => {
          const { width: q, height: Q } = K.reference, J = R.floating.style;
          J.setProperty(
            "--reka-popper-available-width",
            `${z}px`
          ), J.setProperty(
            "--reka-popper-available-height",
            `${L}px`
          ), J.setProperty(
            "--reka-popper-anchor-width",
            `${q}px`
          ), J.setProperty(
            "--reka-popper-anchor-height",
            `${Q}px`
          );
        }
      }),
      u.value && da({ element: u.value, padding: n.arrowPadding }),
      il({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && aa({ strategy: "referenceHidden", ...v.value })
    ]), g = w(() => n.reference ?? i.anchor.value), { floatingStyles: b, placement: h, isPositioned: C, middlewareData: E } = fa(
      g,
      l,
      {
        strategy: n.positionStrategy,
        placement: r,
        whileElementsMounted: (...R) => na(...R, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: y
      }
    ), x = w(
      () => en(h.value)[0]
    ), $ = w(
      () => en(h.value)[1]
    );
    Qn(() => {
      C.value && o("placed");
    });
    const A = w(
      () => {
        var R;
        return ((R = E.value.arrow) == null ? void 0 : R.centerOffset) !== 0;
      }
    ), B = P("");
    le(() => {
      a.value && (B.value = window.getComputedStyle(a.value).zIndex);
    });
    const W = w(() => {
      var R;
      return ((R = E.value.arrow) == null ? void 0 : R.x) ?? 0;
    }), F = w(() => {
      var R;
      return ((R = E.value.arrow) == null ? void 0 : R.y) ?? 0;
    });
    return rl({
      placedSide: x,
      onArrowChange: (R) => u.value = R,
      arrowX: W,
      arrowY: F,
      shouldHideArrow: A
    }), (R, K) => {
      var z, L, q;
      return _(), X("div", {
        ref_key: "floatingRef",
        ref: l,
        "data-reka-popper-content-wrapper": "",
        style: lt({
          ...m(b),
          transform: m(C) ? m(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: B.value,
          "--reka-popper-transform-origin": [
            (z = m(E).transformOrigin) == null ? void 0 : z.x,
            (L = m(E).transformOrigin) == null ? void 0 : L.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((q = m(E).hide) == null ? void 0 : q.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        j(m(ve), U({ ref: m(s) }, R.$attrs, {
          "as-child": n.asChild,
          as: R.as,
          "data-side": x.value,
          "data-align": $.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: m(C) ? void 0 : "none"
          }
        }), {
          default: k(() => [
            D(R.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), cl = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, dl = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, fl = /* @__PURE__ */ T({
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
    return Y(), (n, o) => (_(), S(m(ve), U(t, {
      width: n.width,
      height: n.height,
      viewBox: n.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: n.asChild ? void 0 : "none"
    }), {
      default: k(() => [
        D(n.$slots, "default", {}, () => [
          n.rounded ? (_(), X("path", dl)) : (_(), X("path", cl))
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
}), pl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, vl = /* @__PURE__ */ T({
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
    const { forwardRef: t } = Y(), n = ll(), o = w(() => pl[n.placedSide.value]);
    return (i, s) => {
      var a, l, u, d;
      return _(), X("span", {
        ref: (c) => {
          m(n).onArrowChange(c);
        },
        style: lt({
          position: "absolute",
          left: (a = m(n).arrowX) != null && a.value ? `${(l = m(n).arrowX) == null ? void 0 : l.value}px` : void 0,
          top: (u = m(n).arrowY) != null && u.value ? `${(d = m(n).arrowY) == null ? void 0 : d.value}px` : void 0,
          [o.value]: 0,
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
        j(fl, U(i.$attrs, {
          ref: m(t),
          style: {
            display: "block"
          },
          as: i.as,
          "as-child": i.asChild,
          rounded: i.rounded,
          width: i.width,
          height: i.height
        }), {
          default: k(() => [
            D(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "rounded", "width", "height"])
      ], 4);
    };
  }
}), ml = /* @__PURE__ */ T({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (_(), S(m(Oo), an(ln(t)), {
      default: k(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function gl(e, t) {
  const n = Di(!1, 300), o = P(null), i = Ai();
  function s() {
    o.value = null, n.value = !1;
  }
  function a(l, u) {
    const d = l.currentTarget, c = { x: l.clientX, y: l.clientY }, r = hl(c, d.getBoundingClientRect()), p = yl(c, r), f = bl(u.getBoundingClientRect()), v = Cl([...p, ...f]);
    o.value = v, n.value = !0;
  }
  return le((l) => {
    if (e.value && t.value) {
      const u = (c) => a(c, t.value), d = (c) => a(c, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), l(() => {
        var c, r;
        (c = e.value) == null || c.removeEventListener("pointerleave", u), (r = t.value) == null || r.removeEventListener("pointerleave", d);
      });
    }
  }), le((l) => {
    var u;
    if (o.value) {
      const d = (c) => {
        var g, b;
        if (!o.value)
          return;
        const r = c.target, p = { x: c.clientX, y: c.clientY }, f = ((g = e.value) == null ? void 0 : g.contains(r)) || ((b = t.value) == null ? void 0 : b.contains(r)), v = !wl(p, o.value), y = !!r.closest("[data-grace-area-trigger]");
        f ? s() : (v || y) && (s(), i.trigger());
      };
      (u = e.value) == null || u.ownerDocument.addEventListener("pointermove", d), l(() => {
        var c;
        return (c = e.value) == null ? void 0 : c.ownerDocument.removeEventListener("pointermove", d);
      });
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: i.on
  };
}
function hl(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, o, i, s)) {
    case s:
      return "left";
    case i:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function yl(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      o.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return o;
}
function bl(e) {
  const { top: t, right: n, bottom: o, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: i, y: o }
  ];
}
function wl(e, t) {
  const { x: n, y: o } = e;
  let i = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const l = t[s].x, u = t[s].y, d = t[a].x, c = t[a].y;
    u > o != c > o && n < (d - l) * (o - u) / (c - u) + l && (i = !i);
  }
  return i;
}
function Cl(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Ol(t);
}
function Ol(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], a = t[t.length - 2];
      if ((s.x - a.x) * (i.y - a.y) >= (s.y - a.y) * (i.x - a.x))
        t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const i = e[o];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], a = n[n.length - 2];
      if ((s.x - a.x) * (i.y - a.y) >= (s.y - a.y) * (i.x - a.x))
        n.pop();
      else break;
    }
    n.push(i);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const To = "tooltip.open", [bn, El] = Ze("TooltipProvider"), Al = /* @__PURE__ */ T({
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
    const t = e, { delayDuration: n, skipDelayDuration: o, disableHoverableContent: i, disableClosingTrigger: s, ignoreNonKeyboardFocus: a, disabled: l } = sn(t);
    Y();
    const u = P(!0), d = P(!1), { start: c, stop: r } = so(() => {
      u.value = !0;
    }, o, { immediate: !1 });
    return El({
      isOpenDelayed: u,
      delayDuration: n,
      onOpen() {
        r(), u.value = !1;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: i,
      disableClosingTrigger: s,
      disabled: l,
      ignoreNonKeyboardFocus: a
    }), (p, f) => D(p.$slots, "default");
  }
}), [Bt, xl] = Ze("TooltipRoot"), Pl = /* @__PURE__ */ T({
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
    const n = e, o = t;
    Y();
    const i = bn(), s = w(() => n.disableHoverableContent ?? i.disableHoverableContent.value), a = w(() => n.disableClosingTrigger ?? i.disableClosingTrigger.value), l = w(() => n.disabled ?? i.disabled.value), u = w(() => n.delayDuration ?? i.delayDuration.value), d = w(() => n.ignoreNonKeyboardFocus ?? i.ignoreNonKeyboardFocus.value), c = Ct(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    H(c, (C) => {
      i.onClose && (C ? (i.onOpen(), document.dispatchEvent(new CustomEvent(To))) : i.onClose());
    });
    const r = P(!1), p = P(), f = w(() => c.value ? r.value ? "delayed-open" : "instant-open" : "closed"), { start: v, stop: y } = so(() => {
      r.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function g() {
      y(), r.value = !1, c.value = !0;
    }
    function b() {
      y(), c.value = !1;
    }
    function h() {
      v();
    }
    return xl({
      contentId: "",
      open: c,
      stateAttribute: f,
      trigger: p,
      onTriggerChange(C) {
        p.value = C;
      },
      onTriggerEnter() {
        i.isOpenDelayed.value ? h() : g();
      },
      onTriggerLeave() {
        s.value ? b() : y();
      },
      onOpen: g,
      onClose: b,
      disableHoverableContent: s,
      disableClosingTrigger: a,
      disabled: l,
      ignoreNonKeyboardFocus: d
    }), (C, E) => (_(), S(m(tl), null, {
      default: k(() => [
        D(C.$slots, "default", { open: m(c) })
      ]),
      _: 3
    }));
  }
}), _l = /* @__PURE__ */ T({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Bt(), o = bn();
    n.contentId || (n.contentId = Pt(void 0, "reka-tooltip-content"));
    const { forwardRef: i, currentElement: s } = Y(), a = P(!1), l = P(!1), u = w(() => n.disabled.value ? {} : {
      click: y,
      focus: f,
      pointermove: r,
      pointerleave: p,
      pointerdown: c,
      blur: v
    });
    Ce(() => {
      n.onTriggerChange(s.value);
    });
    function d() {
      setTimeout(() => {
        a.value = !1;
      }, 1);
    }
    function c() {
      a.value = !0, document.addEventListener("pointerup", d, { once: !0 });
    }
    function r(g) {
      g.pointerType !== "touch" && !l.value && !o.isPointerInTransitRef.value && (n.onTriggerEnter(), l.value = !0);
    }
    function p() {
      n.onTriggerLeave(), l.value = !1;
    }
    function f(g) {
      var b, h;
      a.value || n.ignoreNonKeyboardFocus.value && !((h = (b = g.target).matches) != null && h.call(b, ":focus-visible")) || n.onOpen();
    }
    function v() {
      n.onClose();
    }
    function y() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (g, b) => (_(), S(m(nl), {
      "as-child": "",
      reference: g.reference
    }, {
      default: k(() => [
        j(m(ve), U({
          ref: m(i),
          "aria-describedby": m(n).open.value ? m(n).contentId : void 0,
          "data-state": m(n).stateAttribute.value,
          as: g.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, jo(u.value)), {
          default: k(() => [
            D(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
}), Do = /* @__PURE__ */ T({
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
    const n = e, o = t, i = Bt(), { forwardRef: s } = Y(), a = Uo(), l = w(() => {
      var c;
      return (c = a.default) == null ? void 0 : c.call(a, {});
    }), u = w(() => {
      var p;
      if (n.ariaLabel)
        return n.ariaLabel;
      let c = "";
      function r(f) {
        typeof f.children == "string" && f.type !== Gn ? c += f.children : Array.isArray(f.children) && f.children.forEach((v) => r(v));
      }
      return (p = l.value) == null || p.forEach((f) => r(f)), c;
    }), d = w(() => {
      const { ariaLabel: c, ...r } = n;
      return r;
    });
    return Ce(() => {
      he(window, "scroll", (c) => {
        const r = c.target;
        r != null && r.contains(i.trigger.value) && i.onClose();
      }), he(window, To, i.onClose);
    }), (c, r) => (_(), S(m(xo), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: r[0] || (r[0] = (p) => o("escapeKeyDown", p)),
      onPointerDownOutside: r[1] || (r[1] = (p) => {
        var f;
        m(i).disableClosingTrigger.value && ((f = m(i).trigger.value) != null && f.contains(p.target)) && p.preventDefault(), o("pointerDownOutside", p);
      }),
      onFocusOutside: r[2] || (r[2] = Ko(() => {
      }, ["prevent"])),
      onDismiss: r[3] || (r[3] = (p) => m(i).onClose())
    }, {
      default: k(() => [
        j(m(ul), U({
          ref: m(s),
          "data-state": m(i).stateAttribute.value
        }, { ...c.$attrs, ...d.value }, { style: {
          "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
          "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
          "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
        } }), {
          default: k(() => [
            D(c.$slots, "default"),
            j(m(va), {
              id: m(i).contentId,
              role: "tooltip"
            }, {
              default: k(() => [
                Le(ye(u.value), 1)
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
}), $l = /* @__PURE__ */ T({
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
    const n = Co(e), { forwardRef: o, currentElement: i } = Y(), { trigger: s, onClose: a } = Bt(), l = bn(), { isPointerInTransit: u, onPointerExit: d } = gl(s, i);
    return l.isPointerInTransitRef = u, d(() => {
      a();
    }), (c, r) => (_(), S(Do, U({ ref: m(o) }, m(n)), {
      default: k(() => [
        D(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kl = /* @__PURE__ */ T({
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
    const n = e, o = t, i = Bt(), s = ya(n, o), { forwardRef: a } = Y();
    return (l, u) => (_(), S(m(yn), {
      present: l.forceMount || m(i).open.value
    }, {
      default: k(() => [
        (_(), S(qe(m(i).disableHoverableContent.value ? Do : $l), U({ ref: m(a) }, m(s)), {
          default: k(() => [
            D(l.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Sl = /* @__PURE__ */ T({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return Y(), (n, o) => (_(), S(m(vl), an(ln(t)), {
      default: k(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tl = /* @__PURE__ */ T({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (_(), S(m(Oo), an(ln(t)), {
      default: k(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dl = /* @__PURE__ */ T({
  __name: "AppDialog",
  setup(e) {
    return (t, n) => (_(), S(m(wa), { class: "app-dialog" }, {
      default: k(() => [
        j(m(Ca), {
          class: "trigger",
          "as-child": ""
        }, {
          default: k(() => [
            D(t.$slots, "trigger", {}, void 0, !0)
          ]),
          _: 3
        }),
        j(m(ml), null, {
          default: k(() => [
            j(m(Qa), { class: "overlay" }),
            j(m(Ua), { class: "content" }, {
              default: k(() => [
                j(ws, null, {
                  default: k(() => [
                    D(t.$slots, "default", {}, void 0, !0),
                    j(m(Za), {
                      "aria-label": "Close",
                      "as-child": ""
                    }, {
                      default: k(() => [
                        j(ys, {
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
}), pr = /* @__PURE__ */ Be(Dl, [["__scopeId", "data-v-f1d4c6a0"]]), Bl = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2027.6.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_2_00000039126939024823027680000017407098825655584941_'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2090.9%20125.8'%20style='enable-background:new%200%200%2090.9%20125.8;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{opacity:0.5;fill:%23C5FFFE;enable-background:new%20;}%20.st1{fill:%23C5FFFE;}%20.st2{clip-path:url(%23SVGID_00000160187787671385330840000011365503337429337474_);}%20%3c/style%3e%3cg%20id='Layer_1-2_00000138552681162585653310000003376327086979018656_'%3e%3cg%20id='Layer_2-2_00000089575700792075398270000016475314756721804971_'%3e%3cg%20id='Layer_1-2'%3e%3cg%20id='Layer_2-2'%3e%3cg%20id='Layer_1-2-2'%3e%3cg%20id='Logo'%3e%3cg%20id='Secondary_j'%3e%3crect%20x='71.7'%20y='14.4'%20class='st0'%20width='5.8'%20height='46.7'/%3e%3cpath%20class='st0'%20d='M43.5,115.3c-18.2,0-33.1-14.8-33.1-33.1s14.9-33.1,33.1-33.1S76.6,64,76.6,82.2S61.8,115.3,43.5,115.3z%20M43.5,55.1c-14.9,0-27.1,12.2-27.1,27.1s12.2,27.1,27.1,27.1s27.1-12.2,27.1-27.1S58.5,55.1,43.5,55.1z'/%3e%3ccircle%20class='st0'%20cx='42.2'%20cy='77.4'%20r='8.2'/%3e%3c/g%3e%3cg%20id='Main_j'%3e%3ccircle%20id='Dot3'%20class='st1'%20cx='74.6'%20cy='16.4'%20r='16.4'/%3e%3ccircle%20id='Dot2'%20class='st1'%20cx='74.5'%20cy='61.1'%20r='12'/%3e%3ccircle%20id='Dot'%20class='st1'%20cx='12'%20cy='82.2'%20r='12'/%3e%3cg%20id='SquareCircle'%3e%3cg%3e%3cdefs%3e%3crect%20id='SVGID_1_'%20y='81.1'%20width='86.5'%20height='44.7'/%3e%3c/defs%3e%3cclipPath%20id='SVGID_00000170246492928372989520000014416670913551062949_'%3e%3cuse%20xlink:href='%23SVGID_1_'%20style='overflow:visible;'/%3e%3c/clipPath%3e%3cg%20style='clip-path:url(%23SVGID_00000170246492928372989520000014416670913551062949_);'%3e%3cpath%20class='st1'%20d='M43.2,124.4c-23.9,0-43.3-19.4-43.3-43.3s19.4-43.3,43.3-43.3s43.3,19.4,43.3,43.3%20S67.1,124.4,43.2,124.4z%20M43.2,61.8C32.6,61.8,24,70.4,24,81.1s8.7,19.3,19.3,19.3s19.3-8.7,19.3-19.3%20S53.9,61.8,43.2,61.8z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3crect%20x='62.6'%20y='61.1'%20class='st1'%20width='23.9'%20height='20.9'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Rl = ["src"], Il = /* @__PURE__ */ T({
  __name: "AppLogo",
  props: De({
    size: null
  }, { size: "medium" }),
  setup(e) {
    return (t, n) => (_(), X("img", {
      src: m(Bl),
      class: V(["app-logo", t.size]),
      alt: "Jojko's logo'"
    }, null, 10, Rl));
  }
}), vr = /* @__PURE__ */ Be(Il, [["__scopeId", "data-v-d0d7d454"]]), Ll = /* @__PURE__ */ T({
  __name: "AppSelectField",
  props: /* @__PURE__ */ Ye(De({
    items: null,
    disabled: { type: Boolean },
    error: null,
    required: { type: Boolean },
    placeholder: null
  }, { items: () => [], disabled: !1, required: !1, placeholder: "Select an option" }), {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = it(e, "modelValue"), { createLocalWaveDirective: n } = uo, { vWave: o } = n({
      duration: 0.2
    }), i = w(() => {
      var s, a;
      return (a = (s = e.items) == null ? void 0 : s.find((l) => l.value === (t == null ? void 0 : t.value))) == null ? void 0 : a.label;
    });
    return (s, a) => (_(), S(m(Oi), {
      modelValue: t.value,
      "onUpdate:modelValue": a[0] || (a[0] = (l) => t.value = l),
      disabled: s.disabled,
      "aria-role": "list",
      class: V(s.$style["app-select-field"]),
      "menu-class": s.$style["app-select-field-menu"],
      "menu-mobile-overlay-class": s.$style["app-select-menu-backdrop"]
    }, {
      trigger: k(({ active: l }) => [
        ge(j(m(io), {
          required: s.required,
          variant: "primary",
          label: i.value ?? s.placeholder,
          "icon-right-class": s.$style["select-icon"],
          "icon-right": l ? "material-symbols:expand-less-rounded" : "material-symbols:expand-more-rounded",
          class: V([s.$style["app-select-field-input"], { [s.$style.error]: s.error, [s.$style.placeholder]: !i.value }])
        }, null, 8, ["required", "label", "icon-right-class", "icon-right", "class"]), [
          [m(o)]
        ])
      ]),
      default: k(() => [
        (_(!0), X(tt, null, Ut(s.items, (l, u) => ge((_(), S(m(qt), {
          key: u,
          "aria-role": "listitem",
          value: l.value,
          class: V(s.$style["app-select-field-item"])
        }, {
          default: k(() => [
            D(s.$slots, "item", {
              label: l.label,
              value: l.value
            }, () => [
              Le(ye(l.label), 1)
            ])
          ]),
          _: 2
        }, 1032, ["value", "class"])), [
          [m(o)]
        ])), 128))
      ]),
      _: 3
    }, 8, ["modelValue", "disabled", "class", "menu-class", "menu-mobile-overlay-class"]));
  }
}), Ml = "_app-select-field_93cda38", Fl = "_app-select-field-menu_2597eb1", Vl = "_app-select-field-item_fbb5b06", Hl = "_app-select-menu-backdrop_4c18086", zl = "_app-select-field-input_af0a610", Wl = "_error_123b438", Nl = "_select-icon_b60910e", jl = "_placeholder_189bfa7", Ul = { "app-select-field": Ml, "app-select-field-menu": Fl, "app-select-field-item": Vl, "app-select-menu-backdrop": Hl, "app-select-field-input": zl, error: Wl, "select-icon": Nl, placeholder: jl }, Kl = {
  $style: Ul
}, mr = /* @__PURE__ */ Be(Ll, [["__cssModules", Kl]]), ql = (...e) => {
  const t = se().proxy.$props, n = /* @__PURE__ */ Object.create(null);
  for (const o of e)
    if (typeof o == "string")
      n[o] = Ct(t, o, void 0, { eventName: `update:${o}`, passive: !0 });
    else {
      const [i, s = i, a = `update:${i}`, l = {}] = o;
      n[i] = Ct(t, s, void 0, { eventName: a, passive: !0, ...l });
    }
  return n;
}, Yl = /* @__PURE__ */ T({
  __name: "AppTextField",
  props: De({
    placeholder: null,
    disabled: { type: Boolean },
    error: null,
    iconBefore: null,
    iconAfter: null,
    modelValue: null
  }, { disabled: !1 }),
  emits: ["update:modelValue"],
  setup(e) {
    const { modelValue: t = "" } = ql("modelValue");
    return (n, o) => (_(), S(m(ri), U({ placeholder: n.placeholder, disabled: n.disabled }, {
      modelValue: m(t),
      "onUpdate:modelValue": o[0] || (o[0] = (i) => jt(t) ? t.value = i : null),
      "root-class": n.$style["app-text-field"],
      "input-class": n.$style.input,
      class: { [n.$style.interactive]: !n.disabled, [n.$style.error]: n.error },
      "icon-right-class": n.$style["icon-after"],
      "icon-left-class": n.$style["icon-before"],
      icon: n.iconBefore,
      "icon-right": n.iconAfter
    }), null, 16, ["modelValue", "root-class", "input-class", "class", "icon-right-class", "icon-left-class", "icon", "icon-right"]));
  }
}), Gl = "_app-text-field_18e12e8", Xl = "_icon-before_fccb21f", Jl = "_icon-after_eb3b2c5", Ql = "_input_c63c5c2", Zl = "_interactive_3dc4aaf", er = "_error_692dad4", tr = { "app-text-field": Gl, "icon-before": Xl, "icon-after": Jl, input: Ql, interactive: Zl, error: er }, nr = {
  $style: tr
}, gr = /* @__PURE__ */ Be(Yl, [["__cssModules", nr]]), or = /* @__PURE__ */ T({
  __name: "AppTooltip",
  props: /* @__PURE__ */ Ye(De({
    position: null,
    align: null,
    ariaLabel: null
  }, { position: "block-start" }), {
    isOpen: { type: Boolean, default: !1 },
    isOpenModifiers: {}
  }),
  emits: ["update:isOpen"],
  setup(e) {
    const t = {
      "block-start": "top",
      "block-end": "bottom",
      "inline-start": "left",
      "inline-end": "right"
    }, n = it(e, "isOpen");
    return (o, i) => (_(), S(m(Al), { "delay-duration": 0 }, {
      default: k(() => [
        j(m(Pl), {
          modelValue: n.value,
          "onUpdate:modelValue": i[0] || (i[0] = (s) => n.value = s)
        }, {
          default: k(() => [
            j(m(_l), { "as-child": "" }, {
              default: k(() => [
                D(o.$slots, "trigger")
              ]),
              _: 3
            }),
            j(m(Tl), null, {
              default: k(() => [
                j(m(kl), {
                  as: "div",
                  align: o.align,
                  position: t[o.position],
                  "aria-label": o.ariaLabel,
                  "avoid-collisions": "",
                  class: V([o.$attrs.class, o.$style["app-tooltip"]])
                }, {
                  default: k(() => [
                    j(m(Sl), {
                      class: V(o.$style.arrow)
                    }, null, 8, ["class"]),
                    D(o.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["align", "position", "aria-label", "class"])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["modelValue"])
      ]),
      _: 3
    }));
  }
}), ir = "_app-tooltip_6b0961c", sr = "_slideIn_3e7dd36", ar = "_arrow_7e59031", lr = { "app-tooltip": ir, slideIn: sr, arrow: ar }, rr = {
  $style: lr
}, hr = /* @__PURE__ */ Be(or, [["__cssModules", rr]]);
export {
  ys as AppButton,
  ws as AppCard,
  dr as AppChip,
  pr as AppDialog,
  wr as AppIcon,
  vr as AppLogo,
  mr as AppSelectField,
  gr as AppTextField,
  hr as AppTooltip
};
