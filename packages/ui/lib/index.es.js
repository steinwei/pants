import { inject as P, computed as l, unref as n, defineComponent as m, ref as u, openBlock as g, createBlock as p, resolveDynamicComponent as h, normalizeClass as v, normalizeStyle as S, withCtx as w, createElementVNode as z, renderSlot as j, watch as b } from "vue";
const C = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827"
  },
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917"
  },
  light: {
    50: "#fdfdfd",
    100: "#fcfcfc",
    200: "#fafafa",
    300: "#f8f9fa",
    400: "#f6f6f6",
    500: "#f2f2f2",
    600: "#f1f3f5",
    700: "#e9ecef",
    800: "#dee2e6",
    900: "#dde1e3"
  },
  dark: {
    50: "#4a4a4a",
    100: "#3c3c3c",
    200: "#323232",
    300: "#2d2d2d",
    400: "#222222",
    500: "#1f1f1f",
    600: "#1c1c1e",
    700: "#1b1b1b",
    800: "#181818",
    900: "#0f0f0f"
  },
  get lightblue() {
    return this.sky;
  },
  get lightBlue() {
    return this.sky;
  },
  get warmgray() {
    return this.stone;
  },
  get warmGray() {
    return this.stone;
  },
  get truegray() {
    return this.neutral;
  },
  get trueGray() {
    return this.neutral;
  },
  get coolgray() {
    return this.gray;
  },
  get coolGray() {
    return this.gray;
  },
  get bluegray() {
    return this.slate;
  },
  get blueGray() {
    return this.slate;
  }
};
Object.values(C).forEach((e) => {
  typeof e != "string" && (e.DEFAULT = e.DEFAULT || e[400], Object.keys(e).forEach((a) => {
    const f = +a / 100;
    f === Math.round(f) && (e[f] = e[a]);
  }));
});
const x = Symbol("injectColorKey"), _ = Symbol("injectThemeKey"), T = Symbol("injectIconKey");
function $(e) {
  return {};
}
function B(e, a, f, t) {
  const c = P(_, {});
  console.log(c);
  const s = l(() => {
    var o;
    return (o = n(c).classPrefix) != null ? o : "p-";
  });
  l(() => `${s.value}${e}`);
  const d = $(), r = l(() => k(a.classes, n(f))), i = l(() => K(a.styles, n(f)));
  return {
    classes: r,
    classPrefix: s,
    styles: i,
    css: d
  };
}
function E(e) {
  return typeof e == "function";
}
function k(e, a) {
  let f;
  if (!e)
    return f;
  if ([String, Boolean, Number].some((s) => e instanceof s))
    return e;
  f = {};
  for (const s in e)
    E(e[s]) ? f[s] = e[s](a) : f[s] = k(f[s]);
  return f;
}
function K(e, a) {
  return {};
}
const N = {
  classes: {
    wrapper({ props: e }) {
      const a = ["relative transition duration-150 focus:outline-none inline-flex justify-center font-medium whitespace-nowrap overflow-hidden align-middle"];
      a.push(e.rounded ? "rounded-full" : "rounded-md"), a.push("shadow-sm");
      const t = {
        xs: "px-2",
        sm: "py-2 text-sm",
        md: "py-2",
        lg: "py-4 text-lg"
      }[e.size];
      a.push(t);
      const c = e.disabled;
      e.loading ? a.push("cursor-default") : c ? a.push("cursor-not-allowed") : a.push("cursor-pointer");
      const d = e.type == "primary";
      return c ? a.push("gray") : d ? a.push("emerald") : a.push("white"), a;
    }
  },
  styles() {
    return {
      "background-color": "blue"
    };
  }
}, O = {
  name: "PButton"
}, D = /* @__PURE__ */ m({
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
    className: String,
    styles: Object,
    loading: Boolean,
    tag: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    const a = e, f = u(null), t = l(() => a.tag), c = l(() => a.disabled), { classes: s } = B("button", N, a);
    return (d, r) => (g(), p(h(n(t)), {
      class: v([
        n(s).wrapper,
        e.className
      ]),
      style: S(e.styles),
      ref_key: "elRef",
      ref: f,
      disabled: n(c) || e.loading
    }, {
      default: w(() => [
        z("span", null, [
          j(d.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["class", "style", "disabled"]));
  }
}), M = {
  classes: {
    wrapper({ props: e, slots: a, data: f }) {
      return {
        classes: ["relative transition "]
      };
    },
    css() {
    }
  },
  styles({ props: e, colors: a, css: f, data: t }) {
    return {};
  }
}, G = {
  name: "Modal"
}, L = /* @__PURE__ */ m({
  ...G,
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "md"
    },
    tag: {
      type: String,
      default: "modal"
    },
    className: String
  },
  emits: ["modal:update"],
  setup(e, { emit: a }) {
    const f = e, t = u(f.visible || !1);
    u(f.size);
    const { classes: c, styles: s } = B("modal", M, f), d = l(() => f.tag);
    b(t, () => {
      t.value ? i() : r();
    }), b(() => f.visible, () => {
      t.value = f.visible;
    });
    function r() {
      t.value = !1, setTimeout(() => {
        t.value = !1, a("modal:update", !1);
      }, 300);
    }
    function i() {
      t.value = !0, setTimeout(() => {
        t.value = !0, a("modal:update", !0);
      }, 300);
    }
    return (o, F) => (g(), p(h(n(d)), {
      class: v([
        n(c).wrapper,
        e.className,
        f.visible ? "visible" : "invisible ease-out-5s"
      ]),
      style: S(n(s))
    }, {
      default: w(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PButton: D,
  PModal: L
}, Symbol.toStringTag, { value: "Module" }));
function I(e, a) {
  Object.keys(y).map((f) => y[f]).forEach((f) => {
    const t = f.name.startWith("P") ? f.name : "P" + f.name;
    e.component(t, f);
  }), e.provide(x, a.color || void 0), e.provide(_, a.theme || void 0), e.provide(T, a.icon || void 0);
}
export {
  D as PButton,
  L as PModal,
  C as colors,
  I as install
};
