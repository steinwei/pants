import { inject as y, computed as o, unref as l, defineComponent as b, ref as g, openBlock as v, createBlock as p, resolveDynamicComponent as j, normalizeClass as S, normalizeStyle as h, withCtx as B, createElementVNode as C, renderSlot as P } from "vue";
const x = Symbol("injectColorKey"), f = Symbol("injectThemeKey"), z = Symbol("injectIconKey");
function _(e, t, n, a) {
  const c = y(f, {});
  console.log(c);
  const s = o(() => {
    var u;
    return (u = l(c).classPrefix) != null ? u : "p-";
  });
  o(() => `${s.value}${e}`);
  const r = o(() => m(t.classes, l(n))), i = o(() => K(t.styles, l(n)));
  return {
    classes: r,
    classPrefix: s,
    styles: i
  };
}
function w(e) {
  return typeof e == "function";
}
function m(e, t) {
  let n;
  if ([String, Boolean, Number].some((s) => e instanceof s))
    return e;
  n = {};
  for (const s in e)
    w(e[s]) ? n[s] = e[s](t) : n[s] = m(n[s]);
  return n;
}
function K(e, t) {
  return {};
}
const k = {
  classes: {
    wrapper({ props: e }) {
      const t = ["relative transition duration-150 focus:outline-none inline-flex justify-center font-medium whitespace-nowrap overflow-hidden align-middle"];
      return t.push(e != null && e.rounded ? "rounded-full" : "rounded-md"), t;
    }
  },
  styles() {
    return {
      "background-color": "blue"
    };
  }
}, O = {
  name: "PButton"
}, N = /* @__PURE__ */ b({
  ...O,
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    className: String,
    styles: Object,
    loading: Boolean,
    tag: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    const t = e, n = g(null), { classes: a } = _("button", k, t), c = o(() => t.disabled), s = o(() => t.tag);
    return (r, i) => (v(), p(j(l(s)), {
      class: S([
        l(a).wrapper,
        e.className
      ]),
      style: h(e.styles),
      ref_key: "elRef",
      ref: n,
      disabled: l(c) || e.loading
    }, {
      default: B(() => [
        C("span", null, [
          P(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["class", "style", "disabled"]));
  }
}), d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PButton: N
}, Symbol.toStringTag, { value: "Module" })), E = "0.0.1", I = () => {
  const e = () => ({
    size: {
      type: String,
      default: "md",
      validator: (n) => t.size.includes(n)
    }
  }), t = Object.freeze({
    size: ["xs", "sm", "md", "lg"]
  });
  return {
    props: e,
    validators: t
  };
};
function T(e, t) {
  Object.keys(d).map((n) => d[n]).forEach((n) => {
    const a = n.name.startsWith("P") ? n.name : "P" + n.name;
    e.component(a, n);
  }), e.provide(x, t.color || void 0), e.provide(f, t.theme || void 0), e.provide(z, t.icon || void 0);
}
function $() {
  return {
    install: T
  };
}
const R = $();
export {
  N as PButton,
  R as default,
  x as injectColorKey,
  z as injectIconKey,
  f as injectThemeKey,
  I as useCommon,
  _ as useTheme,
  E as version
};
