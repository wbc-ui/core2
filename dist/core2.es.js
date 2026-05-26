import In from "vue";
import bu from "vuetify/lib";
import Xi from "vuex";
import { BootstrapVue as yc, IconsPlugin as _c } from "bootstrap-vue";
function vc(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const u = Object.getOwnPropertyDescriptor(n, i);
          u && Object.defineProperty(e, i, u.get ? u : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const kc = ["en", "fr", "ar"], _e = {
  IMAGE: [".apng", ".avif", ".ico", ".gif", ".tiff", ".webp", ".jpeg", ".png", ".jpg"],
  VIDEO: [".mp4", ".avi", ".mov", ".wmv", ".avchd", ".flv", ".f4v", ".swf", ".mkv", ".webm", ".html5", ".mpeg-2"],
  AUDIO: [".mp3", ".wav", ".aiff", ".flac", ".m4a", ".ogg", ".aac", ".wma", ".ape", ".realaudio"],
  OFFICE: {
    DOCX: [".docx", ".Docx"],
    XLSX: [".xlsx", ".Xlsx"],
    GENERAL: [".doc", ".xls", ".md", ".txt", ".pptx"]
  },
  CODE: [".py", ".php", ".c", ".sh", ".rs", ".cpp"],
  TEXT: [".txt", ".tex", ".md", ".html"],
  STYLE: [".css", ".scss", ".sass"]
}, Cc = ["//www.youtube", "//youtube", "//www.youtu.be", "//youtu.be"], Un = {
  md: "markdown",
  txt: "text",
  py: "python",
  js: "javascript",
  ts: "typescript",
  json: "json",
  html: "markup",
  css: "css",
  scss: "css",
  sass: "css",
  sh: "bash",
  tex: "latex",
  rs: "rust",
  c: "c",
  cpp: "cpp",
  vue: "html",
  php: "php"
}, wc = (e, t) => {
  if (!e || !t) return !1;
  const r = e.split("?")[0].split("#")[0].toLowerCase();
  return t.some((n) => r.endsWith(n.toLowerCase()));
}, Ec = (e) => e.startsWith("http://") || e.startsWith("https://") ? "online" : e.startsWith("/") ? "served" : e.startsWith("./") || e.startsWith("../") ? "local" : "text", Ac = (e, t, r = {}) => {
  const n = {
    attrs: { title: t, src: t },
    class: "container",
    ref: "rawHtml",
    ...r
  };
  return t.includes(".ico") && (n.attrs.alt = "Icon"), e("img", n);
}, Sc = (e, t, r = {}) => e("video", {
  attrs: {
    title: t,
    src: t,
    controls: !0,
    frameborder: "0",
    allow: "autoplay; encrypted-media",
    allowfullscreen: !0,
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    referrerpolicy: "strict-origin-when-cross-origin"
  },
  class: "container",
  ref: "rawHtml",
  ...r
}), Dc = (e, t, r = {}) => e("audio", {
  attrs: {
    title: t,
    src: t,
    controls: !0,
    autoplay: !1
  },
  class: "container",
  style: {
    height: "revert",
    width: "revert"
  },
  ref: "rawHtml",
  ...r
}), Tc = (e, t, r = {}) => {
  const n = t.replace(".com/", ".com/embed/").replace(".be/", "be.com/embed/");
  return e("iframe", {
    class: "video-stream html5-main-video container",
    attrs: {
      title: t,
      src: n,
      controls: !0,
      frameborder: "0",
      allow: "autoplay; encrypted-media",
      allowfullscreen: !0,
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin"
    },
    ref: "rawHtml",
    ...r
  });
};
function Oc(e) {
  if (!e || typeof e != "object") return e;
  const { scope: t, comp: r, ...n } = e;
  return n;
}
function Ic(e) {
  return typeof e != "string" ? !1 : e.replace(/^</, "").replace(/>$/, "").includes(",");
}
function Qs(e) {
  if (typeof e != "string" || !e.startsWith("<") || !e.endsWith(">")) return null;
  const r = e.slice(1, -1).split(",").map((s) => s.trim()), n = r[0].replace("~", ""), i = r[1] || "", u = r[2] || "", a = {};
  return i && (a.class = i), u && (a.to = u), { comp: n, options: a, __tilde: r[0].includes("~") };
}
function Fc(e) {
  if (!e || typeof e != "object" || typeof e.comp != "string") return null;
  const t = e.options || {};
  if (Object.keys(t).filter((a) => !["class", "to"].includes(a)).length) return null;
  const n = typeof t.class == "string" ? t.class : "", i = typeof t.to == "string" ? t.to : "", u = [e.comp];
  return (n || i) && u.push(n), i && u.push(i), `<${u.join(",")}>`;
}
function Lc(e, t, r) {
  const n = Qs(e);
  if (!n) return e;
  const i = typeof (t == null ? void 0 : t.class) == "string" ? t.class : "", u = n.options.class || "", a = r ? i || u : [u, i].filter(Boolean).join(" "), s = {
    comp: (n.__tilde ? "~" : "") + n.comp,
    options: {
      ...r ? {} : n.options,
      ...t,
      ...a ? { class: a } : {}
    }
  };
  return delete s.options.scope, s;
}
function Nc(e) {
  let t = (e == null ? void 0 : e.switch) === !0 ? (e == null ? void 0 : e.hComp) || (e == null ? void 0 : e.comp) : (e == null ? void 0 : e.comp) || (e == null ? void 0 : e.hComp);
  return typeof t == "string" ? t.replace("~", "").replace("*", "").replace("<", "").replace(">", "") : t;
}
function Pc(e, t) {
  var u, a, s;
  const r = t || this;
  let n = (e == null ? void 0 : e.switch) === !0 ? (e == null ? void 0 : e.hOptions) || (e == null ? void 0 : e.options) : (e == null ? void 0 : e.options) || (e == null ? void 0 : e.hOptions);
  if (!n)
    return e;
  n = {
    ...n,
    ...r.menu ? (u = n == null ? void 0 : n.menu) == null ? void 0 : u.activeOptions : (a = n == null ? void 0 : n.menu) != null && a.active ? (s = n == null ? void 0 : n.menu) == null ? void 0 : s.activeRootOptions : {}
  };
  let i = [];
  return Array.isArray(n == null ? void 0 : n.rules) ? i = ((n == null ? void 0 : n.rules) || []).map((o) => {
    var c;
    return (c = r.validators) != null && c[o] ? (f) => r.validators[o](f, { lg: r.lang }) : o;
  }) : typeof (n == null ? void 0 : n.rules) == "object" && (i = Object.entries(n == null ? void 0 : n.rules).map(([o, c]) => {
    var f, p;
    return (f = r.validators) != null && f[o] && typeof c == "function" ? c : (p = r.validators) != null && p[o] && typeof c == "object" ? (l) => r.validators[o](l, c) : (l) => r.validators[o](l, { lg: r.lang, message: c });
  })), typeof n != "object" || n === null || (n.props || (n.props = {}), i.length >= 1 && (n.props.rules = i), typeof (e == null ? void 0 : e.switch) == "boolean" ? r.itemListeners[(e == null ? void 0 : e.switchEvent) || "mouseenter"] = (o) => {
    e.switch = !e.switch;
  } : e instanceof Object && (e.options = e[(e == null ? void 0 : e.switch) || "options"])), r.objLang(n, r.lang);
}
function Rc(e, t, r) {
  const n = r || this;
  let i = (e == null ? void 0 : e.switch) === !0 ? (e == null ? void 0 : e.hHeader) || (e == null ? void 0 : e.header) : (e == null ? void 0 : e.header) || (e == null ? void 0 : e.hHeader);
  return i ? t("WBC", {
    keyy: `wbc-key-header-${n.computedKey}`,
    props: { item: i }
  }) : null;
}
function jc(e, t, r) {
  const n = r || this;
  let i = (e == null ? void 0 : e.switch) === !0 ? (e == null ? void 0 : e.hFooter) || (e == null ? void 0 : e.footer) : (e == null ? void 0 : e.footer) || (e == null ? void 0 : e.hFooter);
  return i ? t("WBC", {
    keyy: `wbc-key-footer-${n.computedKey}`,
    props: { item: i }
  }) : null;
}
function Bc(e, t, r) {
  var u, a, s, o;
  const n = r || this;
  let i = (e == null ? void 0 : e.switch) === !0 ? ((u = e == null ? void 0 : e.hOptions) == null ? void 0 : u.headers) || ((a = e == null ? void 0 : e.options) == null ? void 0 : a.headers) : ((s = e == null ? void 0 : e.options) == null ? void 0 : s.headers) || ((o = e == null ? void 0 : e.hOptions) == null ? void 0 : o.headers);
  return i ? n.toWBC_(i, t) : null;
}
function Mc(e, t, r) {
  var u, a, s, o;
  const n = r || this;
  let i = (e == null ? void 0 : e.switch) === !0 ? ((u = e == null ? void 0 : e.hOptions) == null ? void 0 : u.footers) || ((a = e == null ? void 0 : e.options) == null ? void 0 : a.footers) : ((s = e == null ? void 0 : e.options) == null ? void 0 : s.footers) || ((o = e == null ? void 0 : e.hOptions) == null ? void 0 : o.footers);
  return i ? n.toWBC_(i, t) : null;
}
function Vc(e, t) {
  var n, i, u, a;
  return (t || this).isPlainObject(e) ? (e == null ? void 0 : e.switch) === !0 ? ((n = e == null ? void 0 : e.hOptions) == null ? void 0 : n.html) || ((i = e == null ? void 0 : e.options) == null ? void 0 : i.html) : ((u = e == null ? void 0 : e.options) == null ? void 0 : u.html) || ((a = e == null ? void 0 : e.hOptions) == null ? void 0 : a.html) : e;
}
const $c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _getPathType: Ec,
  _matchesFileType: wc,
  _mergeTagWithOptions: Lc,
  _renderAudio: Dc,
  _renderImage: Ac,
  _renderVideo: Sc,
  _renderYouTube: Tc,
  _stripScope: Oc,
  _tagHasOptions: Ic,
  _tagStrToWBC: Qs,
  _wbcObjToTagStr: Fc,
  _wbcOptions: Pc,
  comp: Nc,
  globalFooterVN: jc,
  globalHeaderVN: Rc,
  html: Vc,
  insideFootersVN: Mc,
  insideHeadersVN: Bc
}, Symbol.toStringTag, { value: "Module" }));
function Wc(e, t, r) {
  return typeof t == "boolean" ? r("VCheckbox", {
    ref: "rawHtml",
    keyy: `bool-${e.computedKey}-${Number(t)}`,
    props: {
      value: t
    },
    on: {
      change: (n) => {
        t = !n;
      }
    }
  }) : typeof t == "number" ? r("span", {
    ref: "rawHtml"
  }, [t]) : null;
}
function zc(e, t, r) {
  let n;
  return ["tracker", "init", "update", "init0"].includes(t == null ? void 0 : t.name) ? n = null : (t == null ? void 0 : t.length) === 0 ? n = r(t) : (t == null ? void 0 : t.length) === 1 ? n = t(r) : n = [
    r("div", { class: "red--text" }, [
      "Function got more than 1 arguments (Expected 0 or 1 argument)",
      r("div", {}, [t.toString()])
    ])
  ], n;
}
function Fn(e, t, r, n = {}) {
  let i = {
    language: "php",
    topBar: null,
    codeBar: [["code|yellow", "filename"], ["download", "copy"]],
    extra: "code"
  }, u = fetch(r);
  e.content.promise = u.then((a) => {
    var o, c, f, p;
    const s = a.headers.get("Content-Type") || "";
    if (e.content.response = a, s.includes("application/json"))
      return a.json().then((l) => {
        e.fileContent = l != null && l.WBC ? t("WBC", { props: { item: l == null ? void 0 : l.WBC }, ...n }) : t("JsonViewer", { props: { value: l }, ...n });
      });
    if (s.includes("image/"))
      e.fileContent = t("img", {
        attrs: { src: r },
        class: "container",
        style: {},
        ref: "rawHtml",
        ...n
      });
    else if (s.includes("video/"))
      e.fileContent = t("video", {
        attrs: {
          title: r,
          src: r,
          controls: !0,
          frameborder: "0",
          allowfullscreen: !0,
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          referrerpolicy: "strict-origin-when-cross-origin"
        },
        class: "container",
        style: { width: "auto" },
        ref: "rawHtml",
        ...n
      });
    else if (s.includes("audio/"))
      e.fileContent = t("audio", {
        attrs: {
          title: r,
          src: r,
          controls: !0,
          autoplay: !1
        },
        class: "container",
        style: { height: "revert", width: "revert" },
        ref: "rawHtml",
        ...n
      });
    else if (["/html"].some((l) => s.includes(l)) && r.includes("html") && (a != null && a.data) && !r.includes("?src"))
      e.fileContent = t("WBHtml", {
        ref: "rawHtml",
        ...n,
        props: { html: a.data }
      });
    else if ((o = r.toLowerCase()) != null && o.endsWith(".xlsx") || (c = r.toLowerCase()) != null && c.endsWith(".xls") || s.includes("excel") || s.includes("application/excel"))
      e.fileContent = t("VueOfficeExcel", {
        props: { src: r },
        class: "container",
        style: {},
        ref: "rawHtml",
        ...n
      });
    else {
      if (r.includes("html") || (f = r.toLowerCase()) != null && f.endsWith(".docx") || (p = r.toLowerCase()) != null && p.endsWith(".doc") || s.includes("msword") || s.includes("officedocument"))
        return a.text().then((l) => {
          e.fileContent = t("WBHtml", {
            title: r,
            props: { html: l },
            ...n
          });
        });
      if (s.includes("application/pdf"))
        e.fileContent = t("pdf", {
          props: { src: r },
          class: "container",
          style: {},
          ref: "rawHtml",
          ...n
        });
      else return s.includes("php") ? a.text().then((l) => {
        e.fileContent = e.renderDefaultWbcode(t, l, i);
      }) : s.includes("text/") || s.includes("application/javascript") || s.includes("application/x-python") || s.includes("application/x-tex") || s.includes("application/x-rust") || s.includes("application/x-sh") || e._matchesFileType(r, _e.CODE) || e._matchesFileType(r, _e.TEXT) || e._matchesFileType(r, _e.STYLE) || e._matchesFileType(r, [".js", ".ts", ".json", ".vue", ".jsx", ".tsx", ".mmd"]) ? a.text().then((l) => {
        var C;
        e.source = l;
        const h = ((C = r.split(".").pop()) == null ? void 0 : C.toLowerCase()) || "";
        if (l.trim().toLowerCase().startsWith("<!doctype html") && h !== "html" && h !== "htm") {
          e.fileContent = t("div", { class: "my-1 pa-1 red--text font-weight-bold" }, `#FileError: "${r}" not found (SPA fallback detected)`);
          return;
        }
        const _ = Un[h] || "text";
        h === "md" && e.$md ? e.fileContent = t("WBHtml", {
          props: { html: e.$md.render(l || "") },
          ...n
        }) : (i.language = _, i.codeBar = [[`${_}`], ["download", "copy"]], i.extra = r, e.fileContent = t("WBCode", {
          props: {
            item: {
              code: l,
              language: _,
              extra: r,
              ...i
            }
          },
          ...n
        }));
      }) : a.text().then((l) => {
        l && l.trim() ? (i.language = "text", e.fileContent = e.renderDefaultWbcode(t, l, i)) : e.fileContent = t(
          "div",
          {
            style: {
              backgroundColor: "#F8F9FA",
              color: "red",
              width: "100%",
              height: "100%",
              margin: "10px"
            },
            ...n
          },
          `${r}`.startsWith("/") || `${r}`.startsWith("url://") || `${r}`.startsWith("urls://") ? [`# Url/Serving Error: WBC can not load/serve "${r}"`] : [`# Path/Type Error: WBC can not load this file ${r}`]
        );
      });
    }
  }).catch((a) => {
    e.fileContent = t("iframe", {
      attrs: {
        src: r,
        controls: !0,
        frameborder: "0",
        allow: "autoplay; encrypted-media",
        allowfullscreen: !0,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin"
      },
      class: "container white",
      style: {
        resize: "both",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        border: 0
      },
      ref: "rawHtml",
      ...n
    });
  });
}
function Ju(e) {
  if (!e || typeof e != "object" || Array.isArray(e) || e.comp !== void 0 || e.options !== void 0) return !1;
  const t = ["comp", "options", "header", "footer", "hOptions", "hHeader", "hFooter", "output", "switch", "wrap", "to", "asChild"];
  for (const r of Object.keys(e)) {
    if (t.includes(r)) return !1;
    const n = e[r];
    if (typeof n == "string" && n.startsWith("<") && n.endsWith(">") && n.includes("~")) return !1;
  }
  return Object.keys(e).length > 0;
}
function Uc(e, t, r) {
  var i, u, a, s, o, c, f, p, l, h, d, _, C, T, I, L, S, w, y, F, B, Q, H, z, ue, re, E, x, k;
  let n;
  if (typeof (t == null ? void 0 : t[0]) == "string" && ((i = t == null ? void 0 : t[0]) != null && i.startsWith("<")) && ((u = t == null ? void 0 : t[0]) != null && u.endsWith(">"))) {
    let D, A, P, V = t == null ? void 0 : t[0].replace("<", "").replace(">", "").split(",");
    D = V == null ? void 0 : V[0].replace("<", "").replace(">", ""), A = e.strToObj(V == null ? void 0 : V[1]), P = e.strToObj(V == null ? void 0 : V[2]), e.isNonEmpty(A) ? typeof A == "string" && (A = { class: A }) : A = {}, P && (A.to = P);
    let Z = {
      comp: D,
      options: A
    };
    if ((a = t == null ? void 0 : t[0]) != null && a.includes("~")) {
      let $ = [], N = null;
      if (t.length > 1) {
        let R = t.length;
        for (let U = 1; U < t.length; U++)
          if (typeof t[U] == "string" && t[U].startsWith("<") && t[U].endsWith(">")) {
            R = U;
            break;
          }
        for (let U = 1; U < R; U++) {
          let M = t[U];
          if (typeof M == "string" && !M.startsWith("<") && !M.startsWith("./") && !M.includes("|") && !M.includes("__"))
            $.push(M);
          else if (Ju(M))
            for (const X of Object.keys(M))
              $.push(e.toWBC_(M[X], r));
          else
            $.push(e.toWBC_(M, r));
        }
        R < t.length && (N = t.slice(R));
      }
      n = r(
        D.replace("~", ""),
        {
          ...A || {},
          ref: "rawHtml",
          attrs: { href: P }
        },
        [
          ...$,
          N ? e.toWBC_(N, r) : null
        ]
      );
    } else {
      let $ = D.replace("<", "").replace(">", "");
      n = t.slice(1).map((N, R) => {
        if (typeof N == "string" && !N.startsWith("<") && !N.startsWith("./") && !N.includes("|") && !N.includes("__"))
          return r($, A || {}, [N]);
        if (Array.isArray(N)) {
          let U = N.map((M) => typeof M == "string" && !M.startsWith("<") && !M.startsWith("./") && !M.includes("|") && !M.includes("__") ? M : e.toWBC_(M, r));
          return r($, A || {}, U);
        }
        if (Ju(N)) {
          let U = Object.keys(N).map((M) => {
            const X = N[M];
            return typeof X == "string" && !X.startsWith("<") && !X.startsWith("./") && !X.includes("|") && !X.includes("__") ? X : e.toWBC_(X, r);
          });
          return r($, A || {}, U);
        }
        return e.toWBC_(Z, r, N);
      });
    }
  } else if (typeof ((s = t == null ? void 0 : t[0]) == null ? void 0 : s.comp) == "string" && ((c = (o = t == null ? void 0 : t[0]) == null ? void 0 : o.comp) != null && c.includes("~") || (p = (f = t == null ? void 0 : t[0]) == null ? void 0 : f.comp) != null && p.includes("*") || (h = (l = t == null ? void 0 : t[0]) == null ? void 0 : l.comp) != null && h.startsWith("<") && ((_ = (d = t == null ? void 0 : t[0]) == null ? void 0 : d.comp) != null && _.endsWith(">"))) || ["nested", "inherit", "adjacent"].includes(
    (T = (C = t == null ? void 0 : t[0]) == null ? void 0 : C.options) == null ? void 0 : T.disposition
  ) && ((L = (I = t == null ? void 0 : t[0]) == null ? void 0 : I.options) != null && L.hide)) {
    let D = [], A = e.clone(t == null ? void 0 : t[0]);
    ((w = (S = t == null ? void 0 : t[0]) == null ? void 0 : S.options) == null ? void 0 : w.disposition) == "nested" || (F = (y = t == null ? void 0 : t[0]) == null ? void 0 : y.comp) != null && F.includes("~") ? (t[0].comp.replace("<", "").replace(">", "").replace("~", ""), t[0].options.footers = t.length > 1 ? t.slice(1) : null, D = r("WBC", { props: { item: t[0], class: "brown" } })) : ((Q = (B = t == null ? void 0 : t[0]) == null ? void 0 : B.options) == null ? void 0 : Q.disposition) == "inherit" || (H = A == null ? void 0 : A.comp) != null && H.includes("*") ? t.slice(1).forEach((P, V) => {
      var Z;
      if (e.isPlainObject(P)) {
        let $ = e.mergeObjects(A, P);
        D.push(
          r("WBC", {
            keyy: `wbc-key-arr-${V}-${e.computedKey}`,
            props: { item: $ }
          })
        );
      } else {
        let $ = {
          ...A,
          options: {
            ...(A == null ? void 0 : A.options) || {}
          }
        };
        $.options.html = [(Z = $ == null ? void 0 : $.options) == null ? void 0 : Z.html, P], $.comp = $.comp.replace("*", "").replace("<", "").replace(">", ""), D.push(
          r("WBC", {
            keyy: `wbc-key-arr-${e.computedKey}`,
            props: { item: $ }
          })
        );
      }
    }) : (((ue = (z = t == null ? void 0 : t[0]) == null ? void 0 : z.options) == null ? void 0 : ue.disposition) == "adjacent" || (E = (re = t == null ? void 0 : t[0]) == null ? void 0 : re.comp) != null && E.startsWith("<") && ((k = (x = t == null ? void 0 : t[0]) == null ? void 0 : x.comp) != null && k.endsWith(">"))) && (D = t.slice(1).map((P, V) => e.toWBC_(A, r, P))), n = D;
  } else
    n = [r("WBC", {
      ref: "rawHtml",
      keyy: `wbc-child-${e.computedKey}`,
      props: { item: t[0] }
    }), e.toWBC_(t.length > 0 ? t.slice(1) : null, r)];
  return n;
}
function Hn(e, t) {
  const r = e.replace(/^WB/, "wb-").toLowerCase(), n = `#${e}Missing: "${r}" not registered`;
  return console.error(`[WBC-UI2] ${e} is not registered. Install the "${r}" sub-package.`), t(
    "div",
    {
      style: {
        backgroundColor: "#F8F9FA",
        color: "red",
        width: "100%",
        height: "100%",
        margin: "10px"
      }
    },
    [n]
  );
}
function Qt(e, t, r) {
  return Object.entries((r == null ? void 0 : r.slots) || {}).map(
    ([n, i]) => t("template", { slot: n }, [
      t("WBC", {
        key: `key-slots-${n}-${e.computedKey}`,
        props: { item: i }
      })
    ])
  );
}
function Hc(e, t, r, n, i, { insideHeadersVN: u, insideFootersVN: a, extChildren: s }) {
  return t(
    "div",
    {
      ref: "rawHtml",
      class: "markdown-body " + (n == null ? void 0 : n.class) || "",
      directives: [
        {
          name: "highlight",
          value: void 0,
          modifiers: {}
        }
      ],
      ...n,
      on: e.itemListeners,
      key: `main-key-${e.computedKey}`
    },
    [
      u,
      (i == null ? void 0 : i.children) || i,
      t("WBHtml", {
        ...(n == null ? void 0 : n.MDOptions) || {},
        props: {
          html: e.$md.render((n == null ? void 0 : n.src) || "")
        }
      }),
      ...Qt(e, t, n),
      s,
      a
    ]
  );
}
function qc(e, t, r, n, i, { insideHeadersVN: u, insideFootersVN: a, extChildren: s }) {
  var o, c;
  return e.$options.components.WBMermaid ? t(
    "div",
    {
      ref: "rawHtml",
      class: "markdown-body " + (n == null ? void 0 : n.class) || "",
      ...n,
      on: e.itemListeners
    },
    [
      u,
      (i == null ? void 0 : i.children) || i,
      t("WBMermaid", {
        ref: "rawHtml",
        props: {
          src: (n == null ? void 0 : n.src) || ((o = n == null ? void 0 : n.props) == null ? void 0 : o.src) || "",
          wbcObj: (n == null ? void 0 : n.wbcObj) || ((c = n == null ? void 0 : n.props) == null ? void 0 : c.wbcObj) || "",
          ...n || {}
        },
        on: e.itemListeners
      }),
      ...Qt(e, t, n),
      s,
      a
    ]
  ) : Hn("WBMermaid", t);
}
function Gc(e, t, r, n, i, { insideHeadersVN: u, insideFootersVN: a, extChildren: s }) {
  return e.$options.components.WBChart ? t(
    "div",
    {
      ref: "rawHtml",
      ...n,
      on: e.itemListeners
    },
    [
      u,
      (i == null ? void 0 : i.children) || i,
      t("WBChart", {
        ...n || {},
        props: {
          src: n.src || {},
          ...(n == null ? void 0 : n.props) || {}
        },
        on: e.itemListeners
      }),
      ...Qt(e, t, n),
      s,
      a
    ]
  ) : Hn("WBChart", t);
}
function Kc(e, t, r, n, i, { insideHeadersVN: u, insideFootersVN: a, extChildren: s }) {
  var o;
  return e.$options.components.WBCode ? t(
    "div",
    {
      ref: "rawHtml",
      ...n,
      on: e.itemListeners,
      key: `key-${JSON.stringify(r)}`
    },
    [
      u,
      (i == null ? void 0 : i.children) || i,
      t("WBCode", {
        props: {
          code: n.src || "",
          language: "markup",
          inline: !1,
          ...(n == null ? void 0 : n.props) || {}
        },
        class: `${(n == null ? void 0 : n.class) || ""} language-${((o = n == null ? void 0 : n.props) == null ? void 0 : o.lang) || "markup"}`
      }),
      ...Qt(e, t, n),
      s,
      a
    ]
  ) : Hn("WBCode", t);
}
function Ci(e, t, r, n, i, { insideHeadersVN: u, insideFootersVN: a, extChildren: s }) {
  var c;
  if (!e.$options.components.WBLatex)
    return Hn("WBLatex", t);
  let o;
  return o = t("WBLatex", {
    props: {
      expression: (n == null ? void 0 : n.html) || "",
      ...(n == null ? void 0 : n.props) || {}
    },
    on: e.itemListeners
  }), t(
    ((c = n == null ? void 0 : n.props) == null ? void 0 : c["display-mode"]) == !0 ? "div" : "span",
    {
      ref: "rawHtml",
      ...n
    },
    [
      u,
      o,
      ...Qt(e, t, n),
      s,
      a
    ]
  );
}
function Zc(e, t, r, n, i, { insideHeadersVN: u, insideFootersVN: a, extChildren: s }) {
  return t(
    "span",
    {
      ref: "rawHtml"
    },
    [
      u,
      t(
        "VIcon",
        {
          ref: "iconHtml",
          ...n,
          on: e.itemListeners,
          key: `icon-${e.computedKey}`
        },
        [
          n == null ? void 0 : n.html
        ]
      ),
      s,
      a
    ]
  );
}
const Yc = {
  MD: Hc,
  WBMermaid: qc,
  WBChart: Gc,
  WBCode: Kc,
  tex: Ci,
  latex: Ci,
  WBLatex: Ci,
  VIcon: Zc
}, Jc = [
  "VMenu",
  "VDialog",
  "VTooltip",
  "VHover",
  "VDropdown",
  "VDatePicker",
  "VExpansionPanel",
  "VBottomSheet"
];
function Xc(e, t, r, n) {
  var i, u, a, s, o, c, f, p, l, h, d, _, C, T, I, L, S, w, y, F, B, Q;
  return n != null && n.menu ? (e.menu = ((i = e.$refs.menuHtml) == null ? void 0 : i.isActive) || !1, Jc.includes((u = n == null ? void 0 : n.menu) == null ? void 0 : u.comp) ? t(
    (a = n == null ? void 0 : n.menu) == null ? void 0 : a.comp,
    {
      ref: "menuHtml",
      ...(s = e.menu) != null && s.active ? (o = n == null ? void 0 : n.menu) == null ? void 0 : o.options : (c = n == null ? void 0 : n.menu) == null ? void 0 : c.activeOptions
    },
    [
      t("template", { slot: "activator" }, [
        t(
          (n == null ? void 0 : n.comp) || "VCard",
          {
            key: ((p = (f = e == null ? void 0 : e.$refs) == null ? void 0 : f.menu) == null ? void 0 : p.isActive) + e.menu,
            ...e.menu ? (l = n == null ? void 0 : n.menu) == null ? void 0 : l.activeRootOptions : (h = n == null ? void 0 : n.menu) == null ? void 0 : h.options,
            on: {
              [((d = n == null ? void 0 : n.menu) == null ? void 0 : d.event) || "click"]: () => {
                e.$refs.menuHtml.isActive = !e.$refs.menuHtml.isActive, e.menu = !e.menu, e.$refs.menuHtml.isActive = e.menu;
              }
            }
          },
          [r]
        )
      ]),
      t("WBC", {
        props: { item: n == null ? void 0 : n.menu.content }
      })
    ]
  ) : t(
    ((_ = n == null ? void 0 : n.menu) == null ? void 0 : _.comp) || "div",
    {
      ...(C = n == null ? void 0 : n.menu) != null && C.active ? (I = n == null ? void 0 : n.menu) == null ? void 0 : I.activeOptions : (T = n == null ? void 0 : n.menu) == null ? void 0 : T.options
    },
    [
      t(
        (n == null ? void 0 : n.comp) || "div",
        {
          key: ((S = (L = e == null ? void 0 : e.$refs) == null ? void 0 : L.menu) == null ? void 0 : S.isActive) + e.menu,
          ...(w = n == null ? void 0 : n.menu) != null && w.active ? (y = n == null ? void 0 : n.menu) == null ? void 0 : y.activeRootOptions : {},
          on: {
            [((F = n == null ? void 0 : n.menu) == null ? void 0 : F.event) || "click"]: () => {
              var H;
              n.menu.active = !((H = n == null ? void 0 : n.menu) != null && H.active), e.key_ = `${e.key_}_`.replace("___", "_");
            }
          }
        },
        [r]
      ),
      (B = n == null ? void 0 : n.menu) != null && B.active ? t("WBC", { props: { item: (Q = n == null ? void 0 : n.menu) == null ? void 0 : Q.content } }) : null
    ]
  )) : r;
}
const Qc = /* @__PURE__ */ new Set([
  "comp",
  "output",
  "props",
  "options",
  "hOptions",
  "switch",
  "footer",
  "footers",
  "header",
  "headers",
  "hFooter",
  "hHeader",
  "asChild",
  "wrap",
  "to",
  "disp",
  "mode",
  "prod",
  "key",
  "fStyle",
  "dive",
  "tbDive",
  "watch",
  "forward",
  "class",
  "style",
  "id",
  "attrs"
]);
function el(e, t, r, n) {
  if (!Array.isArray(r) || r.length === 0 || typeof r[0] != "string" || !r[0].startsWith("<") || !r[0].endsWith(">"))
    return null;
  const i = n == null ? void 0 : n.options, u = i && typeof i == "object" && Object.keys(i).some((p) => p !== "wrap" && p !== "scope"), a = r[0].includes("~"), o = (i == null ? void 0 : i.scope) || (a ? "root" : "container"), c = e._stripScope(i || {}), f = o === "update" ? "each+merge" : o;
  if (!u)
    return e.toWBC_(r, t);
  if (f === "container") {
    const p = i.comp || "div";
    return e.toWBC_(
      { comp: p, options: c },
      t,
      e.toWBC_(r, t)
    );
  }
  if (f === "root" && a) {
    const p = e._mergeTagWithOptions(r[0], c, !1), h = [e._wbcObjToTagStr(p) || r[0], ...r.slice(1)];
    return e.toWBC_(h, t);
  }
  if (f === "root" && !a)
    return e.toWBC_(
      { comp: i.comp || "div", options: c },
      t,
      e.toWBC_(r, t)
    );
  if (f === "each" || f === "each+merge" || f === "inherit") {
    const p = f === "each", l = a ? 1 : 0, h = [];
    a && h.push(r[0]);
    for (let d = l; d < r.length; d++) {
      const _ = r[d];
      if (!(typeof _ == "string" && _.startsWith("<") && _.endsWith(">"))) {
        h.push(_);
        continue;
      }
      if (f === "inherit" && e._tagHasOptions(_))
        h.push(_);
      else {
        const T = e._mergeTagWithOptions(_, c, p), I = e._wbcObjToTagStr(T);
        h.push(I || T);
      }
    }
    return e.toWBC_(h, t);
  }
  if (f === "wrap-each") {
    const p = i.comp || "span", l = a ? 1 : 0, h = [];
    a && h.push(r[0]);
    for (let d = l; d < r.length; d++)
      h.push({ comp: p, options: { ...c, html: r[d] } });
    return e.toWBC_(h, t);
  }
  return e.toWBC_(r, t);
}
function tl(e, t, r, n) {
  var T, I, L, S, w, y, F, B, Q, H, z, ue, re, E;
  let {
    externalChildren: i,
    insideHeadersVN: u,
    insideFootersVN: a,
    globalHeaderVN: s,
    globalFooterVN: o,
    externalWrapperObj: c,
    extChildren: f,
    wbcObj: p
  } = n, l, h, d, _;
  if (i && typeof i == "object" && !Array.isArray(i) && !e.isVnode(i)) {
    let x = Object.keys(i).sort().map((k) => i[k]);
    x.length > 0 && typeof x[0] == "string" && x[0].startsWith("<") && x[0].endsWith(">") ? f = e.toWBC_(x, r) : f = r("WBC", {
      key: `wbc-ext-child-${e.computedKey}`,
      props: { item: i }
    });
  } else
    f = r("WBC", {
      key: `wbc-ext-child-${e.computedKey}`,
      props: { item: i }
    });
  if (h = e._wbcOptions(t), d = e.comp(t), [
    "input",
    "checbox",
    "radio",
    "select",
    "textarea",
    "VTextField",
    "VCheckbox",
    "VTextarea",
    "VSelect",
    "VRadio",
    "VSlider",
    "VRangeSlider",
    "VSwitch",
    "VAutocomplete",
    "VDatePicker",
    "VColorPicker",
    "VMenu",
    "VRadioGroup",
    "vTimePicker"
  ].includes(d) && (e.itemListeners.input = (x) => {
    var k;
    e.internalValue = x, e.internalValueIsValid = (k = e == null ? void 0 : e.$refs[e.refName]) == null ? void 0 : k.validate(
      !0,
      x
    );
  }), h != null && h.hide || e.hide)
    l = null;
  else if (Object.keys(t).length > 0 && kc.some((x) => Object.keys(t).includes(x)))
    l = r("WBHtml", {
      ref: "rawHtml",
      key: `wbhtml-key-${e.computedKey}-${t.length}`,
      props: {
        html: t
      }
    });
  else if (Object.keys(t).length > 0 && !(t != null && t.comp)) {
    let x = [], k = {
      comp: ((T = t == null ? void 0 : t.options) == null ? void 0 : T.comp) || "span",
      options: {
        ...(t == null ? void 0 : t.options) || {}
        /* ,disposition:'nested' */
      }
    };
    (I = k == null ? void 0 : k.options) == null || delete I.float, (L = k == null ? void 0 : k.options) == null || delete L.drag, (S = k == null ? void 0 : k.options) == null || delete S.close;
    let D = (w = t == null ? void 0 : t.options) == null ? void 0 : w.wrap, A = Qc;
    Object.keys(t).sort().forEach((V) => {
      A.has(V) || x.push(t[V]);
    }), D && (k.comp = ((F = (y = D == null ? void 0 : D.options) == null ? void 0 : y.wrap) == null ? void 0 : F.comp) || k.comp, k.options = {
      ...((Q = (B = k == null ? void 0 : k.options) == null ? void 0 : B.wrap) == null ? void 0 : Q.options) || {},
      ...(k == null ? void 0 : k.options) || {}
    }, delete k.options.wrap);
    const P = el(e, r, x, t);
    P !== null ? l = P : l = e.toWBC_(k, r, x);
  } else if (Array.isArray(d)) {
    let x = e.resolveValuesWithSource(d, t);
    t != null && t.header && (x.header = t == null ? void 0 : t.header), t != null && t.footer && (x.footer = t == null ? void 0 : t.footer), t != null && t.output && (x.output = t == null ? void 0 : t.output), t != null && t.options && (x.options = t == null ? void 0 : t.options), t != null && t.hOptions && (x.hOptions = t == null ? void 0 : t.hOptions), t != null && t.switch && (x.switch = t == null ? void 0 : t.switch), t != null && t.footer && (x.footer = t == null ? void 0 : t.footer), t != null && t.header && (x.header = t == null ? void 0 : t.header), t != null && t.hFooter && (x.hFooter = t == null ? void 0 : t.hFooter), t != null && t.header && (x.header = t == null ? void 0 : t.header), t != null && t.hHeader && (x.hHeader = t == null ? void 0 : t.hHeader), t != null && t.fStyle && (x.fStyle = t == null ? void 0 : t.fStyle), t != null && t.dive && (x.dive = t == null ? void 0 : t.dive), t != null && t.update && (x.update = t == null ? void 0 : t.update), t != null && t.init && (x.init = t == null ? void 0 : t.init), t != null && t.init0 && (x.init0 = t == null ? void 0 : t.init0), t != null && t.tracker && (x.tracker = t == null ? void 0 : t.tracker), t != null && t.watch && (x.watch = t == null ? void 0 : t.watch), t != null && t.forward && (x.forward = t == null ? void 0 : t.forward), l = r("WBC", {
      ref: "arrHtml",
      key: `wbc-flat-arr-${(x.length || 0) % 1e3}`,
      props: { item: x }
    });
  } else if (typeof d == "object" && !(d.install || d.setup || d._isVue || d.$options || d.__v_isVNode || d._scope || d._effects || d.vm)) {
    const x = ["options", "header", "footer", "hOptions", "hHeader", "hFooter"], k = { ...d };
    for (const A of x) delete k[A];
    let D = e.resolveValuesWithSource(k, t);
    for (const A of x)
      d[A] !== void 0 ? D[A] = d[A] : (t == null ? void 0 : t[A]) !== void 0 && (D[A] = t[A]);
    t != null && t.output && (D.output = t == null ? void 0 : t.output), t != null && t.switch && (D.switch = t == null ? void 0 : t.switch), t != null && t.fStyle && (D.fStyle = t == null ? void 0 : t.fStyle), t != null && t.dive && (D.dive = t == null ? void 0 : t.dive), t != null && t.update && (D.update = t == null ? void 0 : t.update), t != null && t.init && (D.init = t == null ? void 0 : t.init), t != null && t.init0 && (D.init0 = t == null ? void 0 : t.init0), t != null && t.tracker && (D.tracker = t == null ? void 0 : t.tracker), t != null && t.watch && (D.watch = t == null ? void 0 : t.watch), t != null && t.forward && (D.forward = t == null ? void 0 : t.forward), D.options || (D.options = {}), l = r("WBC", {
      ref: "arrHtml",
      ...h,
      props: { item: D }
    });
  } else if (typeof d == "string" && (d.includes("|") || d.includes("+"))) {
    typeof d == "string" && (d.includes("|") || d.includes("+")) && (d = e.strToComps(d));
    let x = [];
    d.forEach((k, D) => {
      let A = {};
      if (typeof k == "string")
        A = (t == null ? void 0 : t[k.replace("~", "")]) || `<${k.replace("<", "").replace(">", "")}>`;
      else if (Array.isArray(k)) {
        let P = {
          comp: k
        };
        e.flattenArray(k).forEach((V) => {
          Object.keys(t).includes(V) && (P[V] = t[V]);
        }), A = r("WBC", {
          key: `wbc-flat-arr-${e.computedKey}`,
          props: { item: P }
        });
      } else
        A = k;
      x.push(A);
    }), l = r("WBC", {
      ref: "arrHtml",
      key: `wbc-flat-arr-${e.computedKey}`,
      props: { item: x }
    });
  } else if (typeof d == "string" && (d != null && d.startsWith("./"))) {
    let x = {
      mainContent: r("WBC", {
        ...h || {},
        props: { props: (h == null ? void 0 : h.props) || {}, item: d }
      }),
      options: {
        ...h || {}
      }
    };
    l = r("WBC", { props: { item: x } });
  } else if (typeof d == "function" && d.length == 0)
    d().then((k) => {
      let D = (k == null ? void 0 : k.default) || (k == null ? void 0 : k.name) || {};
      In.component(D.name, D), p.components[D.name] = D, d = D.name, typeof h == "object" && h !== null && (h.props = {
        ...D.props || {},
        ...h.props
      });
    }).catch((k) => {
    });
  else {
    let x, k, D, A = e.html(t);
    typeof (h == null ? void 0 : h.html) == "object" || typeof (h == null ? void 0 : h.html) == "function" || (H = h == null ? void 0 : h.html) != null && H.startsWith("https://") || (z = h == null ? void 0 : h.html) != null && z.startsWith("http://") || (ue = h == null ? void 0 : h.html) != null && ue.startsWith("/") || (re = h == null ? void 0 : h.html) != null && re.startsWith("./") || (E = h == null ? void 0 : h.html) != null && E.startsWith("../") || e.isVnode(h == null ? void 0 : h.html) || ["VSpacer", "VDivider"].includes(h == null ? void 0 : h.html) ? x = r("WBC", {
      key: `wbc-key-inner-html-${e.computedKey}`,
      props: { item: A }
    }) : (k = A, x = e.isNonEmpty(k) ? r("WBHtml", {
      key: `wbhtml-key-${k == null ? void 0 : k.length}-${e.computedKey}`,
      props: {
        html: k
      }
    }) : null);
    const P = Yc[d];
    P ? l = P(e, r, t, h, x, {
      insideHeadersVN: u,
      insideFootersVN: a,
      extChildren: f
    }) : (_ = r(
      d,
      {
        ref: "rawHtml",
        ...h,
        on: e.itemListeners,
        key: `key-raw0-${e.computedKey}`
      },
      [
        (t == null ? void 0 : t.switch) === !0 ? D : (x == null ? void 0 : x.children) || x,
        ...Qt(e, r, h)
        // footers
      ]
    ), e.vNodes.raw0 = _, l = r(
      d,
      {
        ...h,
        on: e.itemListeners
        // attrs: self.attrs
      },
      [
        u,
        (x == null ? void 0 : x.children) || x,
        ...Qt(e, r, h),
        f,
        a
        // footer
        /* self.toWBC_(self.toWBC(loadDefaultComp))|| */
      ]
    )), c && (l = r(
      c.comp,
      {
        ref: "externalHtml",
        ...c.options
      },
      [l]
    )), h != null && h.to && (l = r("WBLink", {
      ref: "linkHtml",
      props: {
        to: h == null ? void 0 : h.to,
        style_: {},
        attrs: {},
        html: l
      }
    }));
  }
  return e.vNodes.main = l, e.vNodes.raw0 = _, (o || s) && (l = r(
    "div",
    {
      ref: "globalHtml",
      key: t == null ? void 0 : t.switch
    },
    [s, l, o]
  )), l = Xc(e, r, l, h), { main: l, options: h, comp: d, raw0: _, extChildren: f };
}
const rl = "\0PIPE\0", nl = /\x00PIPE\x00/g;
function il(e, t) {
  var l;
  const n = e.replace(/\\\|/g, rl).split("|").map((h) => h.replace(nl, "|")), [i, u, a, s] = n, o = t.strToObj(u), c = t.isPlainObject(o) ? o : t.isNonEmpty(o) ? { class: o || {} } : {}, f = (l = i.split(".").pop()) == null ? void 0 : l.toLowerCase(), p = Un[f] || null;
  return { el1: i, classOrOptionsObj: c, theFileLink: a, parsedAs: s, ext: f, fileLanguage: p };
}
function ul(e, t, r) {
  const n = e.getContext();
  if (!n)
    throw new Error(`File type "${t}" is not supported.`);
  const i = r;
  return ((a) => {
    try {
      if (!a || typeof a != "function") return null;
      const s = a.keys ? a.keys() : [];
      if (s.includes(i)) {
        const c = a(i);
        return (c == null ? void 0 : c.default) !== void 0 ? c.default : c;
      }
      const o = i.startsWith("./") ? null : "./" + i;
      if (o && s.includes(o)) {
        const c = a(o);
        return (c == null ? void 0 : c.default) !== void 0 ? c.default : c;
      }
    } catch {
    }
    return null;
  })(n);
}
function Ge(e, t, r) {
  return e.loadFile(t) || ul(e, r, t);
}
function sl(e, t, r, n) {
  const { el1: i, classOrOptionsObj: u, parsedAs: a, ext: s, fileLanguage: o } = n, c = i.startsWith("./") ? i.substring(2) : i;
  let f, p;
  const l = a == null ? void 0 : a.toLowerCase(), d = [
    { test: i.includes(".vue") || l === "vue", type: "vue", contentType: "text/x-vue", lang: "html" },
    { test: i.includes(".py") || ["py", "python"].includes(l), type: "py", contentType: "text/x-python", lang: "python" },
    { test: i.includes(".rs") || ["rs", "rust"].includes(l), type: "rs", contentType: "text/x-rust", lang: "rust" },
    { test: i.includes(".css") || l === "css", type: "css", contentType: "text/css", lang: "css" },
    { test: i.includes(".scss") || l === "scss", type: "scss", contentType: "text/css", lang: "css" },
    { test: i.includes(".sass") || l === "sass", type: "sass", contentType: "text/css", lang: "css" },
    { test: i.includes(".php") || l === "php", type: "php", contentType: "application/x-httpd-php", lang: "php" },
    { test: i.includes(".sh") || l === "sh", type: "sh", contentType: "text/html", lang: "html" },
    { test: i.includes(".js") || i.includes(".ts") || i.includes(".json") || ["js", "ts", "json"].includes(l), type: "js", contentType: "text/javascript", lang: "javascript" },
    { test: i.includes(".md") || l === "md", type: "md", contentType: "text/x-markdown", lang: "markdown" },
    { test: i.includes(".tex") || l === "tex", type: "tex", contentType: "text/html", lang: "html" },
    { test: i.includes(".txt") || l === "txt", type: "txt", contentType: "text/html", lang: "text" },
    { test: i.includes(".html") || l === "html", type: "html", contentType: "text/html", lang: "markup" },
    { test: i.includes(".c") || i.includes(".cpp") || ["c", "cpp"].includes(l), type: "c", contentType: "text/x-csrc", lang: "c" }
  ].find((T) => T.test);
  if (d && (f = Ge(r, c, d.type), p = d.lang, d.contentType), f === void 0 && (f = Ge(r, c, s || "text")), !(f || r.fileContent))
    throw new Error(`#CodeFileError: ${i} not found`);
  const _ = {
    language: p || o || "WBC",
    extra: c,
    ...typeof r.resolvedWbCodeFile == "boolean" ? {} : r.resolvedWbCodeFile || {}
  }, C = r.renderDefaultWbcode(t, f, _);
  return f ? t("WBC", {
    ...u,
    props: { item: C }
  }) : r.fileContent;
}
function al(e, t, r, n) {
  const { el1: i, classOrOptionsObj: u } = n, a = i.startsWith("./") ? i.substring(2) : i;
  r.source = Ge(r, a, "json");
  try {
    r.source = typeof r.source == "string" ? JSON.parse(r.source) : r.source;
  } catch {
  }
  if (!(r.source || r.fileContent))
    throw new Error(`#JsonFileError: ${i} not found`);
  return r.source ? r.source.WBC ? t("WBC", { ref: "rawHtml", title: i, props: { item: r.source.WBC }, ...u }) : t("JsonViewer", { ref: "rawHtml", title: i, props: { value: r.source }, ...u }) : r.fileContent;
}
function ol(e, t, r, n) {
  const { el1: i, classOrOptionsObj: u, parsedAs: a } = n, s = i.startsWith("./") ? i.substring(2) : i;
  if (r.source = Ge(r, s, "txt"), !(r.source || r.fileContent))
    throw new Error(`#TxtFileError: ${i} not found`);
  const c = {
    language: i.endsWith(".txt") ? "txt" : "text",
    extra: s,
    ...typeof r.resolvedWbCodeFile == "boolean" ? {} : r.resolvedWbCodeFile || {}
  };
  return t("WBC", {
    ...u,
    props: { item: r.renderDefaultWbcode(t, r.source, c) }
  });
}
function cl(e, t, r, n) {
  var c, f, p, l, h;
  const { el1: i, classOrOptionsObj: u, parsedAs: a } = n, s = i.startsWith("./") ? i.substring(2) : i, o = a == null ? void 0 : a.toLowerCase();
  if (r.source = Ge(r, s, "js"), !(r.source || r.fileContent))
    throw new Error(`#JsFileError: ${i} not found`);
  if (typeof r.source == "string") {
    const d = /export\s+default/i.test(r.source) && /(render\s*\(|setup\s*\(|template\s*[:=`'"]|setup\s*[:=`'"])/i.test(r.source), _ = r.source.includes("@wbc-logic") || r.source.includes("@wbc-mixin");
    if (d || _ || o === "vue") {
      if (!r._jsLazyComp && !r._jsLazyLoading) {
        r._jsLazyLoading = !0;
        const I = r.getContext(), L = (c = I == null ? void 0 : I.lazyImport) == null ? void 0 : c.call(I, i);
        if (L) {
          const S = r.$createElement;
          L.then((w) => {
            var Q, H;
            const y = (w == null ? void 0 : w.default) || w, F = r.itemAccessibility, B = w.setup || w.init || w.tracker || w.logic || typeof y == "function" && _;
            B ? ((H = (Q = r.$store) == null ? void 0 : Q.getters) == null || H._wbcProAuthorized, w.init && w.init(F), B && !w.init && console.warn("[WBC-UI2] Advanced JS features (setup/tracker/logic) require a PRO license."), r._jsLazyComp = {
              render: (z) => z("div", {
                class: "caption grey--text pa-1 px-2 border-dashed blue lighten-5 rounded d-inline-block"
              }, [z("v-icon", { props: { xSmall: !0, left: !0, color: "blue" } }, "mdi-cog-outline"), `Logic Provider: ${s}`])
            }, r._jsLazyLoading = !1) : y && typeof y == "object" && (y.render || y.setup || y.template) ? (r._jsLazyComp = { ...y }, r._jsLazyLoading = !1) : (r._jsLazyLoading = !1, r.fileContent = r.renderDefaultWbcode(S, r.source, { language: "javascript", extra: s })), r.$forceUpdate();
          }).catch((w) => {
            r._jsLazyLoading = !1, r.fileContent = r.renderDefaultWbcode(S, r.source, { language: "javascript", extra: s }), r.$forceUpdate();
          });
        } else
          r._jsLazyLoading = !1, r.fileContent = r.renderDefaultWbcode(r.$createElement, r.source, { language: "javascript", extra: s });
      }
      return r._jsLazyComp ? t(r._jsLazyComp, {
        props: r.props_ || r._jsLazyComp.params || {},
        ...u
      }) : r.fileContent || t("VProgressLinear", { props: { indeterminate: !0, color: "blue", height: 2 } });
    }
    const T = {
      language: i.endsWith(".ts") ? "typescript" : "javascript",
      extra: s,
      ...typeof r.resolvedWbCodeFile == "boolean" ? {} : r.resolvedWbCodeFile || {}
    };
    return t("WBC", {
      ...u,
      props: { item: r.renderDefaultWbcode(t, r.source, T) }
    });
  }
  if (r.source && typeof r.source == "object") {
    const d = r.itemAccessibility;
    return r.source.setup || r.source.init || r.source.tracker || r.source.logic ? ((p = (f = r.$store) == null ? void 0 : f.getters) == null || p._wbcProAuthorized, r.source.init && r.source.init(d), (r.source.setup || r.source.tracker || r.source.logic) && console.warn("[WBC-UI2] Advanced Object features (setup/tracker/logic) require a PRO license."), t("div", { class: "caption blue--text px-2 border-dashed rounded" }, ["Executed Object Logic: " + s])) : r.source.render || r.source.setup || r.source.template ? t(r.source, {
      props: r.props_ || r.source.params || {},
      ...u
    }) : t("WBC", { props: { item: r.source }, ...u });
  }
  if (typeof r.source == "function") {
    if (r.source.toString().includes("@wbc-logic"))
      return (h = (l = r.$store) == null ? void 0 : l.getters) == null || h._wbcProAuthorized, console.warn("[WBC-UI2] Dynamic Logic Injection Functions (@wbc-logic) require a PRO license."), t("div", { class: "caption blue--text px-2 border-dashed rounded" }, ["Executed Logic Function: " + s]);
    const d = r.source.toString();
    return t("WBC", {
      ...u,
      props: {
        item: r.renderDefaultWbcode(t, d, {
          language: "javascript",
          extra: s,
          output: {
            header: { 0: "<~VRow,pb-1 grey grey--text lighten-2 font-weight-bold mb-1>", 1: `small__${s} (Function)`, 2: "VSpacer", 3: "download", 4: "copy" },
            main: { 1: "code" },
            terminus: { 0: "<~VRow,pt-1 grey grey--text lighten-4 mt-1>", 1: "small__WBC-function-self.source", 2: "VSpacer" }
          }
        })
      }
    });
  }
  return t("v-alert", {
    props: { type: "warning", border: "left", coloredBorder: !0, elevation: 2, icon: "mdi-alert-circle" },
    class: "my-2 pa-2 orange--text"
  }, [
    t("div", { class: "font-weight-bold" }, "Unknown Content Type"),
    t("div", `The file "${i}" returned a value of type "${typeof r.source}".`),
    t("div", { class: "caption mt-1 d-block" }, "WBC lacks a direct renderer for this data type. Check the console for more details.")
  ]);
}
function ll(e, t, r, n) {
  const { el1: i, classOrOptionsObj: u, parsedAs: a } = n, s = i.startsWith("./") ? i.substring(2) : i;
  r.source = Ge(r, s, "css");
  const o = a == null ? void 0 : a.toLowerCase();
  if (o === "txt" || o === "md") {
    const c = {
      language: "css",
      extra: s,
      ...typeof r.resolvedWbCodeFile == "boolean" ? {} : r.resolvedWbCodeFile || {}
    };
    return t("WBC", {
      ...u,
      props: { item: r.renderDefaultWbcode(t, r.source, c) }
    });
  }
  return t("style", {
    attrs: { type: "text/css" },
    domProps: { textContent: r.source }
  });
}
function fl(e, t, r, n) {
  var s, o, c;
  const { el1: i, classOrOptionsObj: u } = n, a = i.startsWith("./") ? i.substring(2) : i;
  if (r.source = Ge(r, a, "vue"), !(r.source || r.fileContent))
    throw new Error(`#VueFileError: ${i} not found`);
  return r.source ? t(((s = r.source) == null ? void 0 : s.default) || r.source, {
    props: ((c = (o = r.source) == null ? void 0 : o.default) == null ? void 0 : c.params) || r.props_ || {},
    ...u
  }) : r.fileContent;
}
function pl(e, t, r, n) {
  var f;
  const { el1: i, classOrOptionsObj: u, parsedAs: a } = n, s = i.startsWith("./") ? i.substring(2) : i, o = (f = i.split(".").pop()) == null ? void 0 : f.toLowerCase(), c = a == null ? void 0 : a.toLowerCase();
  if (r.source = Ge(r, s, o), c === "tex" || c === "latex" || o === "tex" && !a) {
    if (!r.$options.components.WBLatex)
      return t("div", {
        style: { backgroundColor: "#F8F9FA", color: "red", width: "100%", height: "100%", margin: "10px" }
      }, ['#WBLatexMissing: "wb-latex" not registered']);
    if (!(r.source || r.fileContent))
      throw new Error(`#TexFileError: ${i} not found`);
    return r.source ? t("div", { ref: "rawHtml", title: i, ...u }, [
      t("div", r.parseTexFile(r.source).map((p) => {
        if (p.type === "text") return t("div", [t("WBHtml", { props: { html: p.content } })]);
        if (p.type === "math") return t("WBLatex", { props: { expression: p.expression, "display-mode": p.displayMode ?? !1 } });
        if (p.type === "mixed")
          return t(
            "div",
            { class: "d-inline-flex align-center" },
            p.lineContent.map(
              (l) => l.expression ? t("WBLatex", { props: { expression: l.expression, "display-mode": !1 } }) : t("WBHtml", { props: { html: l.content } })
            )
          );
      }))
    ]) : r.fileContent;
  }
  if (["md", "markdown", "markup"].includes(c) || o === "md" && !a) {
    if (!(r.source || r.fileContent))
      throw new Error(`#MdFileError: ${i} not found`);
    return r.source ? t("WBHtml", { ref: "rawHtml", props: { html: r.$md.render(r.source) }, ...u }) : r.fileContent;
  }
  if (!(r.source || r.fileContent))
    throw new Error(`#HtmlFileError: ${i} not found`);
  return r.source ? t("WBHtml", { ref: "rawHtml", props: { html: r.source }, ...u }) : r.fileContent;
}
function hl(e, t, r, n) {
  const { el1: i, classOrOptionsObj: u, parsedAs: a } = n, s = i.startsWith("./") ? i.substring(2) : i, o = a == null ? void 0 : a.toLowerCase();
  if (r._matchesFileType(i, _e.IMAGE) || ["image", "img", "png", "jpg", "jpeg", "gif", "svg"].includes(o)) {
    if (r.source = Ge(r, s, "image"), !(r.source || r.fileContent)) throw new Error(`#ImageFileError: ${i} not found`);
    return r.source ? t("img", { attrs: { src: `${r.source}`.replace("/js/", "/") }, class: "container", ref: "rawHtml", ...u }) : r.fileContent;
  }
  if (r._matchesFileType(i, _e.VIDEO) || ["video", "mp4", "webm"].includes(o)) {
    if (r.source = Ge(r, s, "video") || (i.startsWith("/") ? i : null), !(r.source || r.fileContent)) throw new Error(`#VideoFileError: ${i} not found`);
    return r.source ? r._renderVideo(t, r.source, u) : r.fileContent;
  }
  if (r._matchesFileType(i, _e.AUDIO) || ["audio", "mp3", "wav"].includes(o)) {
    if (r.source = Ge(r, s, "audio"), !(r.source || r.fileContent)) throw new Error(`#AudioFileError: ${i} not found`);
    return r.source ? r._renderAudio(t, r.source, u) : r.fileContent;
  }
  return null;
}
function dl(e, t, r, n) {
  const { el1: i, classOrOptionsObj: u } = n, a = i.startsWith("./") ? i.substring(2) : i;
  if (r.source = Ge(r, a, "office"), !(r.source || r.fileContent)) throw new Error(`#OfficeFileError: ${i} not found`);
  return r._matchesFileType(i, _e.OFFICE.DOCX) ? t("VueOfficeDocx", { props: { src: r.source }, class: "container", style: { top: 0, left: 0 }, ref: "rawHtml" }) : r._matchesFileType(i, _e.OFFICE.XLSX) ? t("VueOfficeExcel", { props: { src: r.source }, class: "container white", style: { top: 0, left: 0, height: "100vh", width: "100vh" }, ref: "rawHtml" }) : t("VueDocPreview", { props: { value: r.source, type: "office" }, class: "container", style: { top: 0, left: 0, width: "100vh", height: "100vh" }, ref: "rawHtml" });
}
function ml(e, t, r, n) {
  const { el1: i } = n, u = i.startsWith("./") ? i.substring(2) : i;
  if (r.source = Ge(r, u, "pdf"), !(r.source || r.fileContent)) throw new Error(`#PdfFileError: ${i} not found`);
  return r.source ? t("iframe", { attrs: { src: r.source }, class: "container white", style: { top: 0, left: 0, height: "100vh", width: "100vh", border: 0 }, ref: "rawHtml" }) : r.fileContent;
}
function bl(e, t, r, n) {
  var c;
  const { el1: i, parsedAs: u } = n, a = u == null ? void 0 : u.toLowerCase(), s = e.split("/");
  if ((c = s[s.length - 1]) != null && c.startsWith("__") || r._matchesFileType(e, _e.CODE) || ["py", "python", "php", "c", "cpp", "sh", "rs", "rust", "code"].includes(a))
    return sl(e, t, r, n);
  if (i.endsWith(".json") || a === "json")
    return al(e, t, r, n);
  if (i.endsWith(".txt") || a === "txt" || a === "text")
    return ol(e, t, r, n);
  if (a === "js" || a === "ts" || (i.endsWith(".js") || i.endsWith(".ts")) && !u)
    return cl(e, t, r, n);
  if (r._matchesFileType(e, _e.STYLE) || ["css", "scss", "sass", "style"].includes(a))
    return ll(e, t, r, n);
  if (i.endsWith(".vue") || a === "vue")
    return fl(e, t, r, n);
  if (r._matchesFileType(e, _e.TEXT))
    return pl(e, t, r, n);
  const o = hl(e, t, r, n);
  return o !== null ? o : r._matchesFileType(e, [..._e.OFFICE.DOCX, ..._e.OFFICE.XLSX, ..._e.OFFICE.GENERAL]) || ["office", "docx", "xlsx", "doc", "xls", "pptx"].includes(a) ? dl(e, t, r, n) : i.endsWith(".pdf") || a === "pdf" ? ml(e, t, r, n) : (r.fileContent || Fn(r, t, e, n.classOrOptionsObj), r.fileContent);
}
function gl(e, t, r, n) {
  var o, c;
  const { el1: i, classOrOptionsObj: u, parsedAs: a, theFileLink: s } = n;
  if (a == null || a.toLowerCase(), r._matchesFileType(e, _e.OFFICE.DOCX))
    return t("VueOfficeDocx", { props: { src: i }, class: "container", style: { top: 0, left: 0 }, ref: "rawHtml" });
  if (r._matchesFileType(e, _e.OFFICE.XLSX))
    return t("VueOfficeExcel", { props: { src: i }, class: "container white", style: { top: 0, left: 0, height: "100vh", width: "100vh" }, ref: "rawHtml" });
  if (r._matchesFileType(e, _e.OFFICE.GENERAL))
    return t("VueDocPreview", { props: { url: i, type: "office" }, class: "container", style: { top: 0, left: 0, width: "100vh", height: "100vh" }, ref: "rawHtml" });
  if (r._matchesFileType(e, _e.AUDIO))
    return r._renderAudio(t, i, u);
  if (r._matchesFileType(e, _e.IMAGE))
    return r._renderImage(t, i, u);
  if (r._matchesFileType(e, _e.VIDEO))
    return r._renderVideo(t, i, u);
  if (Cc.some((f) => e.includes(f)) && !e.includes("embed"))
    return r._renderYouTube(t, i, u);
  if (r._matchesFileType(e, _e.CODE) || r._matchesFileType(e, _e.TEXT) || r._matchesFileType(e, _e.STYLE) || r._matchesFileType(e, [".js", ".ts", ".json", ".vue", ".jsx", ".tsx", ".mmd"])) {
    if (!r.mediaData && !r.fileContent) {
      const f = { ...Un, jsx: "javascript", tsx: "typescript", mmd: "markdown" }, p = (c = (o = i.split(".").pop()) == null ? void 0 : o.split("?")[0]) == null ? void 0 : c.toLowerCase(), l = f[p] || "text";
      r.content.promise = fetch(i).then((h) => h.text()).then((h) => {
        if (p === "md" && r.$md)
          r.fileContent = t("WBHtml", {
            props: { html: r.$md.render(h || "") },
            ...u
          });
        else {
          const d = {
            language: l,
            topBar: null,
            codeBar: [[`${i}|green`, "filename"], ["download", "copy"]],
            outputFn: null,
            extra: i
          };
          r.fileContent = r.renderDefaultWbcode(t, h, d);
        }
      }).catch(() => {
        r.fileContent = t("iframe", {
          attrs: { src: i, frameborder: "0", allowfullscreen: !0, referrerpolicy: "strict-origin-when-cross-origin" },
          class: "container white",
          style: { resize: "both", top: 0, left: 0, height: "100%", width: "100%", border: 0 },
          ref: "rawHtml",
          ...u
        });
      });
    }
    return r.fileContent;
  }
  return !r.mediaData && !r.fileContent && Fn(r, t, i, u), r.fileContent;
}
function xl(e, t, r) {
  if (typeof e == "string" && e.startsWith("<") && e.endsWith(">") && (e.match(/</g) || []).length === 1 && (e.match(/>/g) || []).length === 1) {
    let n = e.slice(1, -1);
    n.startsWith("~") && (n = n.slice(1));
    const [i, u] = n.split("|"), [a, s] = i.split(",").map((c) => c.trim()), o = {
      ref: "rawHtml",
      class: s || void 0
    };
    return u && (o.attrs = { href: u.trim() }), t(a, o);
  }
  return null;
}
function yl(e, t) {
  var o, c, f, p;
  const r = ((c = (o = e.$parent) == null ? void 0 : o.$options) == null ? void 0 : c.__file) || ((p = (f = e.$parent) == null ? void 0 : f.$options) == null ? void 0 : p.file);
  if (!r)
    return console.warn(`[WBC] No __file found on parent component. Cannot resolve "${t}" relatively. Serving from root.`), "/" + t.replace(/^\.[\/]/, "");
  const u = (r.substring(0, r.lastIndexOf("/") + 1) + t.replace(/^\.[\/]/, "")).split("/"), a = [];
  for (const l of u)
    l === ".." ? a.pop() : l !== "." && l !== "" && a.push(l);
  let s = "/" + a.join("/");
  return (s.startsWith("/home/") || s.startsWith("/Users/") || s.match(/^\/[a-zA-Z]:\//)) && (s = "/@fs" + s), s;
}
function _l(e, t, r, n) {
  var h;
  let i;
  if (typeof t == "string" && (t.includes("{{") || t.includes("[[")))
    return r("WBHtml", {
      ref: "rawHtml",
      keyy: `wbhtml-key-${e.computedKey}-${t.length}`,
      props: { html: t }
    });
  const u = il(t, e), { el1: a, classOrOptionsObj: s, theFileLink: o, parsedAs: c } = u, f = e._getPathType(t), p = c == null ? void 0 : c.toLowerCase();
  let l = !1;
  if (f === "local")
    if ((h = e.$wbcUi2Options) != null && h.context)
      i = bl(t, r, e, u);
    else {
      const d = yl(e, a);
      !e.mediaData && !e.fileContent && Fn(e, r, d, s), i = e.fileContent;
    }
  else if (f === "served" || f === "online")
    f === "served" ? (!e.mediaData && !e.fileContent && Fn(e, r, a, s), i = e.fileContent) : i = gl(t, r, e, u);
  else if (i = xl(t, r), !i) {
    const d = e.isNonEmpty(u.classOrOptionsObj) || !!o;
    i = r("WBHtml", {
      ref: "rawHtml",
      keyy: `wbhtml-key-${e.computedKey}-${t.length}`,
      props: { html: d ? t : a }
    }), l = d;
  }
  return o && !l && (i = r("a", { attrs: { href: o } }, [i])), c && !["css", "js", "python", "php", "rs", "sh", "md", "html", "tex", "latex", "vue", "json", "txt"].includes(p) && (i = r(
    c || "pre",
    { ...s, ref: "rawHtml", title: t },
    [i]
  )), i;
}
function vl(e, t, r) {
  var a;
  const n = e.wbCode_ == null ? null : e.vNodes.wbCode, i = e.wbCodeFile_ == null ? null : e.vNodes.wbCodeFile, u = e.wbDataViewer_ == null ? null : e.vNodes.wbDataViewer;
  if (n || i || u) {
    let s = {
      options: {},
      default_0: ((a = e.item_) == null ? void 0 : a.comp) == "meta" ? null : {
        options: {
          wrap: {
            comp: "VCard",
            options: {
              class: "pa-3 my-3 ",
              props: { outlined: !0, shaped: !0, rounded: !0 }
            }
          },
          html: {
            0: r,
            1: (o) => n,
            2: (o) => i,
            3: (o) => u
          }
        }
      }
    };
    return t("WBC", {
      key: `wbc-wrapper-${e.resolvedWbCode != null}-${e.resolvedWbCodeFile != null}-${e.resolvedWbDataViewer != null}-k${e.key_ || 0}`,
      props: {
        item: s,
        wbCode: null,
        wbCodeFile: null,
        wbDataViewer: null
      }
    });
  }
  return r;
}
function Xu(e, t, r, n) {
  var o;
  const { _float: i, _close: u, _drag: a, _focus: s } = n;
  if (i || u || a || s || e.focusOn_) {
    let c = e.item_;
    if (!c) return r;
    let f = {
      position: "fixed",
      top: "13% ",
      left: "30%",
      "z-index": "10",
      height: "auto",
      width: "40%",
      padding: "1.8%",
      transform: `translate(${e.offsetX}px, ${e.offsetY}px)`,
      cursor: e.draggable ? "grabbing" : "grab",
      "background-color": "#FAFAFA",
      border: "1px solid grey",
      resize: "both",
      overflow: "auto"
    };
    const p = ea(e, t, c, i), l = i ? ra(e, t, c, a) : null, h = ta(e, t, c, u);
    let d = {
      options: {
        class: "pa-15",
        style: e.float_ ? f : (o = c == null ? void 0 : c.options) != null && o.focus ? { border: "1px solid black" } : {},
        html: {
          comp: e.focusOn_ ? e.focusOn_ : {
            0: {
              0: "<~VRow,mb-5 d-flex justify-end align-end>",
              1: "float",
              2: "drag",
              3: "close"
            },
            1: "main"
          },
          float: p,
          drag: l,
          close: h,
          main: r
        }
      }
    };
    return t("WBC", {
      key: `focusOn-key-${JSON.stringify(e.clone(d)).length % 1e3}`,
      props: { item: d }
    });
  }
  return r;
}
function ea(e, t, r, n) {
  var a;
  const i = n;
  let u = {
    default: typeof e.float_ == "boolean" || n == null && e.focusOn_ ? {
      comp: "VIcon",
      options: {
        html: i == !0 ? "mdi-dock-window" : "mdi-fullscreen-exit"
      }
    } : e.float_ || ((a = r == null ? void 0 : r.options) == null ? void 0 : a.float),
    options: {
      attrs: { title: "Float Output" },
      class: " pa-2",
      on: {
        click: () => {
          e.float_ = !e.float_;
        }
      },
      style: { cursor: "pointer" }
    }
  };
  return t("WBC", { props: { item: u } });
}
function ta(e, t, r, n) {
  let i = {
    default: n == !0 || n == null && e.focusOn_ ? {
      comp: "VIcon",
      options: { html: "mdi-close-box-outline" }
    } : n != !1 ? n : null,
    options: {
      attrs: { title: "Close window" },
      class: " pa-2",
      on: {
        click: () => {
          r != null && r.options && (r.options.hide = !0, r.options.close = null), e.hide_ = !0;
        }
      },
      style: { cursor: "pointer" }
    }
  };
  return t("WBC", { props: { item: i } });
}
function ra(e, t, r, n) {
  var s, o;
  if (n == null && ((s = r == null ? void 0 : r.options) == null ? void 0 : s.drag) == null) return null;
  const i = n ?? ((o = r == null ? void 0 : r.options) == null ? void 0 : o.drag);
  let u = { mousedown: e.startDrag }, a = {
    content: {
      comp: "VIcon",
      options: {
        attrs: { title: "Drag window" },
        class: " pa-2",
        html: "mdi-drag",
        on: { ...i ? u : {} }
      }
    },
    ...e.isPlainObject(e.drag_) ? e.drag_ : {}
  };
  return t("WBC", { props: { item: a } });
}
function kl(e, t, r) {
  if (e.select === !0 || e.isNonEmpty(e.alertObjs)) {
    let n = {
      keyy: `key-${e.alertObjs.length}`,
      class: "pa-1 my-1",
      style: {
        backgroundColor: e.rColor,
        border: "10px dashed black"
      },
      attrs: {
        title: `=== WBC === 
 el: ${e.nameEl} 
 isVnode: ${e.isVnode(e.item_)}
`
      }
    };
    return t("div", n, [
      `${e.isVnode(e.item_) ? "VNode:" : ""}${e.nameEl}=>`,
      r,
      t("VListGroup", { props: { value: !1 } }, [
        t("JsonViewer", {
          props: {
            value: {
              item: e.item,
              item_: e.item_,
              itemAccessibility: e.itemAccessibility
            }
          }
        })
      ]),
      t("VBtn", {
        props: { value: !1 },
        on: { click: () => {
          e.select = !e.select;
        } }
      }, ["close"])
    ]);
  }
  return r;
}
function Cl(e, t, r) {
  return e.lang == "ar" ? t(
    "span",
    { style: { direction: "rtl", textAlign: "right" } },
    Array.isArray(r) && r.length > 0 ? r : [r]
  ) : r;
}
function wl(e, t, r) {
  return Array.isArray(r) ? t(
    "span",
    r.filter((n) => n).map((n) => {
      var i;
      return ((i = n == null ? void 0 : n.$el) == null ? void 0 : i.children) || n;
    })
  ) : r;
}
function El(e, t, r, n) {
  return n ? t(
    "VContainer",
    {
      ...e.isPlainObject(n) ? n : n == !0 ? { style: { border: "1px solid black" } } : {}
    },
    Array.isArray(r) && r.length > 0 ? r : [r]
  ) : r;
}
var xn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wi = { exports: {} }, Qu;
function Al() {
  return Qu || (Qu = 1, (function(e) {
    var t = (function() {
      var r = String.fromCharCode, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", u = {};
      function a(o, c) {
        if (!u[o]) {
          u[o] = {};
          for (var f = 0; f < o.length; f++)
            u[o][o.charAt(f)] = f;
        }
        return u[o][c];
      }
      var s = {
        compressToBase64: function(o) {
          if (o == null) return "";
          var c = s._compress(o, 6, function(f) {
            return n.charAt(f);
          });
          switch (c.length % 4) {
            // To produce valid Base64
            default:
            // When could this happen ?
            case 0:
              return c;
            case 1:
              return c + "===";
            case 2:
              return c + "==";
            case 3:
              return c + "=";
          }
        },
        decompressFromBase64: function(o) {
          return o == null ? "" : o == "" ? null : s._decompress(o.length, 32, function(c) {
            return a(n, o.charAt(c));
          });
        },
        compressToUTF16: function(o) {
          return o == null ? "" : s._compress(o, 15, function(c) {
            return r(c + 32);
          }) + " ";
        },
        decompressFromUTF16: function(o) {
          return o == null ? "" : o == "" ? null : s._decompress(o.length, 16384, function(c) {
            return o.charCodeAt(c) - 32;
          });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function(o) {
          for (var c = s.compress(o), f = new Uint8Array(c.length * 2), p = 0, l = c.length; p < l; p++) {
            var h = c.charCodeAt(p);
            f[p * 2] = h >>> 8, f[p * 2 + 1] = h % 256;
          }
          return f;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function(o) {
          if (o == null)
            return s.decompress(o);
          for (var c = new Array(o.length / 2), f = 0, p = c.length; f < p; f++)
            c[f] = o[f * 2] * 256 + o[f * 2 + 1];
          var l = [];
          return c.forEach(function(h) {
            l.push(r(h));
          }), s.decompress(l.join(""));
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function(o) {
          return o == null ? "" : s._compress(o, 6, function(c) {
            return i.charAt(c);
          });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function(o) {
          return o == null ? "" : o == "" ? null : (o = o.replace(/ /g, "+"), s._decompress(o.length, 32, function(c) {
            return a(i, o.charAt(c));
          }));
        },
        compress: function(o) {
          return s._compress(o, 16, function(c) {
            return r(c);
          });
        },
        _compress: function(o, c, f) {
          if (o == null) return "";
          var p, l, h = {}, d = {}, _ = "", C = "", T = "", I = 2, L = 3, S = 2, w = [], y = 0, F = 0, B;
          for (B = 0; B < o.length; B += 1)
            if (_ = o.charAt(B), Object.prototype.hasOwnProperty.call(h, _) || (h[_] = L++, d[_] = !0), C = T + _, Object.prototype.hasOwnProperty.call(h, C))
              T = C;
            else {
              if (Object.prototype.hasOwnProperty.call(d, T)) {
                if (T.charCodeAt(0) < 256) {
                  for (p = 0; p < S; p++)
                    y = y << 1, F == c - 1 ? (F = 0, w.push(f(y)), y = 0) : F++;
                  for (l = T.charCodeAt(0), p = 0; p < 8; p++)
                    y = y << 1 | l & 1, F == c - 1 ? (F = 0, w.push(f(y)), y = 0) : F++, l = l >> 1;
                } else {
                  for (l = 1, p = 0; p < S; p++)
                    y = y << 1 | l, F == c - 1 ? (F = 0, w.push(f(y)), y = 0) : F++, l = 0;
                  for (l = T.charCodeAt(0), p = 0; p < 16; p++)
                    y = y << 1 | l & 1, F == c - 1 ? (F = 0, w.push(f(y)), y = 0) : F++, l = l >> 1;
                }
                I--, I == 0 && (I = Math.pow(2, S), S++), delete d[T];
              } else
                for (l = h[T], p = 0; p < S; p++)
                  y = y << 1 | l & 1, F == c - 1 ? (F = 0, w.push(f(y)), y = 0) : F++, l = l >> 1;
              I--, I == 0 && (I = Math.pow(2, S), S++), h[C] = L++, T = String(_);
            }
          if (T !== "") {
            if (Object.prototype.hasOwnProperty.call(d, T)) {
              if (T.charCodeAt(0) < 256) {
                for (p = 0; p < S; p++)
                  y = y << 1, F == c - 1 ? (F = 0, w.push(f(y)), y = 0) : F++;
                for (l = T.charCodeAt(0), p = 0; p < 8; p++)
                  y = y << 1 | l & 1, F == c - 1 ? (F = 0, w.push(f(y)), y = 0) : F++, l = l >> 1;
              } else {
                for (l = 1, p = 0; p < S; p++)
                  y = y << 1 | l, F == c - 1 ? (F = 0, w.push(f(y)), y = 0) : F++, l = 0;
                for (l = T.charCodeAt(0), p = 0; p < 16; p++)
                  y = y << 1 | l & 1, F == c - 1 ? (F = 0, w.push(f(y)), y = 0) : F++, l = l >> 1;
              }
              I--, I == 0 && (I = Math.pow(2, S), S++), delete d[T];
            } else
              for (l = h[T], p = 0; p < S; p++)
                y = y << 1 | l & 1, F == c - 1 ? (F = 0, w.push(f(y)), y = 0) : F++, l = l >> 1;
            I--, I == 0 && (I = Math.pow(2, S), S++);
          }
          for (l = 2, p = 0; p < S; p++)
            y = y << 1 | l & 1, F == c - 1 ? (F = 0, w.push(f(y)), y = 0) : F++, l = l >> 1;
          for (; ; )
            if (y = y << 1, F == c - 1) {
              w.push(f(y));
              break;
            } else F++;
          return w.join("");
        },
        decompress: function(o) {
          return o == null ? "" : o == "" ? null : s._decompress(o.length, 32768, function(c) {
            return o.charCodeAt(c);
          });
        },
        _decompress: function(o, c, f) {
          var p = [], l = 4, h = 4, d = 3, _ = "", C = [], T, I, L, S, w, y, F, B = { val: f(0), position: c, index: 1 };
          for (T = 0; T < 3; T += 1)
            p[T] = T;
          for (L = 0, w = Math.pow(2, 2), y = 1; y != w; )
            S = B.val & B.position, B.position >>= 1, B.position == 0 && (B.position = c, B.val = f(B.index++)), L |= (S > 0 ? 1 : 0) * y, y <<= 1;
          switch (L) {
            case 0:
              for (L = 0, w = Math.pow(2, 8), y = 1; y != w; )
                S = B.val & B.position, B.position >>= 1, B.position == 0 && (B.position = c, B.val = f(B.index++)), L |= (S > 0 ? 1 : 0) * y, y <<= 1;
              F = r(L);
              break;
            case 1:
              for (L = 0, w = Math.pow(2, 16), y = 1; y != w; )
                S = B.val & B.position, B.position >>= 1, B.position == 0 && (B.position = c, B.val = f(B.index++)), L |= (S > 0 ? 1 : 0) * y, y <<= 1;
              F = r(L);
              break;
            case 2:
              return "";
          }
          for (p[3] = F, I = F, C.push(F); ; ) {
            if (B.index > o)
              return "";
            for (L = 0, w = Math.pow(2, d), y = 1; y != w; )
              S = B.val & B.position, B.position >>= 1, B.position == 0 && (B.position = c, B.val = f(B.index++)), L |= (S > 0 ? 1 : 0) * y, y <<= 1;
            switch (F = L) {
              case 0:
                for (L = 0, w = Math.pow(2, 8), y = 1; y != w; )
                  S = B.val & B.position, B.position >>= 1, B.position == 0 && (B.position = c, B.val = f(B.index++)), L |= (S > 0 ? 1 : 0) * y, y <<= 1;
                p[h++] = r(L), F = h - 1, l--;
                break;
              case 1:
                for (L = 0, w = Math.pow(2, 16), y = 1; y != w; )
                  S = B.val & B.position, B.position >>= 1, B.position == 0 && (B.position = c, B.val = f(B.index++)), L |= (S > 0 ? 1 : 0) * y, y <<= 1;
                p[h++] = r(L), F = h - 1, l--;
                break;
              case 2:
                return C.join("");
            }
            if (l == 0 && (l = Math.pow(2, d), d++), p[F])
              _ = p[F];
            else if (F === h)
              _ = I + I.charAt(0);
            else
              return null;
            C.push(_), p[h++] = I + _.charAt(0), l--, I = _, l == 0 && (l = Math.pow(2, d), d++);
          }
        }
      };
      return s;
    })();
    e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
      return t;
    });
  })(wi)), wi.exports;
}
var na = Al();
const Sl = /* @__PURE__ */ Gr(na), Dl = /* @__PURE__ */ vc({
  __proto__: null,
  default: Sl
}, [na]), Tt = !1;
function Tl(e, t, r) {
  var i, u, a, s, o, c, f, p;
  const n = {
    userTier: r,
    ...t ? { license: (u = (i = e.$store) == null ? void 0 : i.getters) == null ? void 0 : u._wbcProDetails } : {},
    nameEl: e.nameEl,
    props: e.$props,
    data: e.$data,
    toggleLoad: (l) => {
      (t || Tt) && l !== void 0 ? e.load_ = l : e.load_ = !e.load_;
    },
    toggleProtected: (l) => {
      (t || Tt) && l !== void 0 ? e.protected_ = l : e.protected_ = !e.protected_;
    },
    toggleFloat: (l) => {
      (t || Tt) && l !== void 0 ? e.float_ = l : e.float_ = !e.float_;
    },
    toggleClose: (l) => {
      (t || Tt) && l !== void 0 ? e.close_ = l : e.close_ = !e.close_;
    },
    toggleFocus: (l) => {
      (t || Tt) && l !== void 0 ? e.focus_ = l : e.focus_ = !e.focus_;
    },
    toggleDrag: (l) => {
      (t || Tt) && l !== void 0 ? e.drag_ = l : e.drag_ = !e.drag_;
    },
    toggleHide: (l) => {
      (t || Tt) && l !== void 0 ? e.hide_ = l : e.hide_ = !e.hide_;
    },
    update: (l) => {
      e.update(l);
    },
    compKey: () => e.compKey,
    lg: {
      lang: e.lang,
      get: () => {
        var l, h;
        return ((h = (l = e == null ? void 0 : e.$store) == null ? void 0 : l.state) == null ? void 0 : h.lg) || "en";
      },
      set: (l) => {
        e.$store.commit("updateLang", l);
      }
    },
    dayjs: t || Tt ? (l) => e.dayjs(l) : (l) => {
      const h = e.dayjs(l), d = e.dayjs();
      return Math.abs(d.diff(h, "day")) > 14 ? (console.warn("[WBC-UI2 Free] dayjs limited to ±14 days. Upgrade to Premium for full range."), null) : h;
    },
    emit: (l, h) => {
      e.$emit(l, h);
    },
    storage: {
      get: (l) => e.getStorage(l || e.nameEl),
      set: (l, h) => {
        e.setStorage(l || e.nameEl, h);
      }
    },
    cookies: {
      get: (l) => e.getCookie(l),
      set: (l, h) => {
        e.setCookie(l, h);
      }
    },
    key: e.key_
  };
  return Object.defineProperty(n, "data", {
    get() {
      return e.item_;
    },
    set(l) {
      typeof l == "string" || typeof l == "number" || typeof l == "boolean" ? (e.item_ = null, e.$nextTick(() => {
        e.item_ = l;
      })) : e.item_ = l;
    },
    enumerable: !0,
    configurable: !0
  }), (t || Tt) && (Object.assign(n, {
    root: (s = (a = e.$root) == null ? void 0 : a.$children) == null ? void 0 : s[0],
    ref: (l) => e.$refs[l],
    el: (l) => e.$el,
    routeParams: () => {
      var l;
      return ((l = e.$route) == null ? void 0 : l.params) || {};
    },
    val: (l) => e.val(l),
    isValid: () => e.internalValueIsValid,
    isValidFn: (l) => e.isValid(l),
    set: (l, h = "item_") => {
      e.$data[h] = l;
    },
    get: (l = "item_") => e.$data[l],
    refs: e == null ? void 0 : e.$refs,
    user: () => {
      var l, h;
      return ((h = (l = e.$store) == null ? void 0 : l.getters) == null ? void 0 : h.user) || {};
    },
    loggedIn: () => {
      var l, h;
      return ((h = (l = e.$store) == null ? void 0 : l.getters) == null ? void 0 : h.loggedIn) || !1;
    },
    content: () => e.contentRegistry,
    proto: Object.getPrototypeOf(e),
    vm: e,
    emit: e.$emit,
    markdown: { md2Html: (l) => e.$md.render(l), html2Md: (l) => e.$turnDown.turndown(l) },
    store: e.$store,
    router: e.$router,
    routes: (c = (o = e == null ? void 0 : e.$router) == null ? void 0 : o.options) != null && c.routes ? Object.fromEntries(
      (p = (f = e == null ? void 0 : e.$router) == null ? void 0 : f.options) == null ? void 0 : p.routes.map((l) => [l.name, l])
    ) : null,
    watch: (l, h, d) => e.$watch(l, h, d),
    queryData: e.queryData,
    aes: { enc: e.aesEnc, dec: e.aesDec },
    lzStr: Dl,
    validators: { ...e.validators || {} },
    storage: localStorage,
    cookies: { ...e.$cookies, state: e.getCookies || {} },
    dayjs: (l) => e.dayjs(l),
    trigger: (l, ...h) => {
      if (typeof e[l] == "function") return e[l](...h);
      console.warn(`[WBC-UI2 PRO] Method '${l}' not found on component instance.`);
    }
  }), Object.defineProperty(n, "focusOn", { get() {
    return e.focusOn_;
  }, set(l) {
    e.focusOn_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "protected", { get() {
    return e.protected_;
  }, set(l) {
    e.protected_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "focus", { get() {
    return e.focus_;
  }, set(l) {
    e.focus_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "load", { get() {
    return e.load_;
  }, set(l) {
    e.load_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "float", { get() {
    return e.float_;
  }, set(l) {
    e.float_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "drag", { get() {
    return e.drag_;
  }, set(l) {
    e.drag_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "close", { get() {
    return e.close_;
  }, set(l) {
    e.close_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "hide", { get() {
    return e.hide_;
  }, set(l) {
    e.hide_ = l;
  }, enumerable: !0, configurable: !0 })), n;
}
const Ol = "_wb_core_auth";
function Il() {
  try {
    const e = document.cookie.match(new RegExp(`(?:^|; )${Ol}=([^;]*)`));
    return !e || !e[1] ? null : JSON.parse(decodeURIComponent(e[1]));
  } catch {
    return null;
  }
}
function Fl() {
  const e = Il();
  return !e || !e.hmac || !e.status || !e.ts || e.status !== "valid" || Date.now() - e.ts >= 864e5 ? null : e.details || { validated: !0 };
}
function Ll(e, t) {
  if (Nl(e))
    return null;
  const r = e.getObjectDepth(e.item_);
  if (Array.isArray(e.item_) && e.item_.length > 10 || r > 10) {
    let i = "", u = "";
    try {
      u = JSON.stringify(e.item_), i = u.substring(0, 40), i.length === 40 && (i += "...");
    } catch {
      i = "[Complex Data]", u = "Cannot stringify: Object contains circular references (e.g. Vue components).";
    }
    return e.$emit("tier-limit", {
      depth: r,
      length: Array.isArray(e.item_) ? e.item_.length : 0,
      item: e.item_,
      snippet: i
    }), t("VAlert", {
      ref: "rawHtml",
      props: { type: "warning", dense: !0, outlined: !0, dark: !0 },
      style: { margin: "10px" }
    }, [
      t("div", { class: "font-weight-bold" }, "WBC-UI Free Tier Limit (Max 10 items/depth)"),
      t("div", { attrs: { title: u }, style: { fontSize: "0.85em", fontFamily: "monospace", opacity: 0.8, margin: "4px 0" } }, `Blocked: ${i}`),
      t("div", { style: { fontSize: "0.9em", marginTop: "6px" } }, "Upgrade to Premium for unlimited data parsing.")
    ]);
  }
  return null;
}
function Nl(e) {
  var r, n;
  if ((n = (r = e.$store) == null ? void 0 : r.state) != null && n._wbcDev)
    return !0;
  const t = Fl();
  return !!(t && t.validated);
}
function ia(e, t = /* @__PURE__ */ new WeakSet()) {
  if (e === null || typeof e != "object" || e instanceof Function || e._isVue || e.$options || e.__v_isVNode || t.has(e))
    return 0;
  t.add(e);
  let r = 0;
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const i = ia(e[n], t);
      r = Math.max(r, i);
    }
  return r + 1;
}
const Pl = {
  methods: {
    startDrag(e) {
      this.draggable = !0, this.dragStartX = e.clientX - this.offsetX, this.dragStartY = e.clientY - this.offsetY, document.addEventListener("mousemove", this.doDrag), document.addEventListener("mouseup", this.endDrag), e.preventDefault();
    },
    doDrag(e) {
      this.draggable && (this.offsetX = e.clientX - this.dragStartX, this.offsetY = e.clientY - this.dragStartY);
    },
    endDrag() {
      this.draggable = !1, document.removeEventListener("mousemove", this.doDrag), document.removeEventListener("mouseup", this.endDrag);
    }
  }
}, es = !1, Rl = {
  beforeCreate() {
    this.vNodes = {}, this.content = { input: {}, output: {} }, this.$_finalRender = null;
  },
  created() {
    var t, r, n, i, u, a, s, o, c, f, p, l, h, d, _, C, T, I, L, S, w, y, F, B, Q, H, z, ue, re;
    if ((r = (t = this.$store) == null ? void 0 : t.getters) == null || r._wbcDev, (this.item === void 0 || this.item === null) && this.$slots && this.$slots.default) {
      const E = this.$slots.default.map((x) => x && (x.text !== void 0 ? x.text : x.children && x.children.map((k) => k.text).join("")) || "").join("").trim();
      if (E)
        if (E.startsWith("~")) {
          const x = E.slice(1).trim();
          try {
            this.item_ = this.strToObj(x);
          } catch {
            this.item_ = x;
          }
        } else
          this.item_ = E;
      else
        this.item_ = this.item;
    } else
      this.item_ = this.item;
    if (typeof this.item_ == "string" && (this._originalItem = this.item_), typeof this.item == "string" && this.item.startsWith("~") && (this.item_ = { comp: "span", options: { html: this.item.slice(1) } }), this.wiki_ = this.wiki, this.wiki)
      if (this.wiki.includes(","))
        this.item_ = this.wiki.split(",").map((E) => {
          var x;
          return (x = this.wbcWikiObj) == null ? void 0 : x[E];
        });
      else {
        let E = (n = this.wbcWikiObj) == null ? void 0 : n[this.wiki_];
        this.item_ = E || this.item_;
      }
    if (!this.item_ || !this.item)
      return null;
    this.wrap_ = this != null && this.wrap ? {
      comp: ((i = this.wrap) == null ? void 0 : i.comp) || this.wrap,
      options: ((u = this.wrap) == null ? void 0 : u.options) || {}
    } : null, this.children_ = this.children, this.rColor = ((a = this == null ? void 0 : this.item) == null ? void 0 : a.rColor) || this.randomColor(), this.nameEl = this.global_, this.isPlainObject(this.item_) ? ((s = this.item_) != null && s.init0 && this.item_.init0(this.itemAccessibility), this.nameEl = ((c = (o = this == null ? void 0 : this.item_) == null ? void 0 : o.options) == null ? void 0 : c.global) || this.nameEl, this.refName = "main_" + this.randomKey("", 3).toLowerCase(), (f = this.item_) != null && f.options && !((l = (p = this.item_) == null ? void 0 : p.options) != null && l.ref) && (this.item_.options.ref = this.refName), (h = this.item_) != null && h.options && (this.internalValue = (_ = (d = this == null ? void 0 : this.item_) == null ? void 0 : d.options) == null ? void 0 : _.val), this.dive = (C = this.item_) == null ? void 0 : C.dive, typeof ((L = (I = (T = this.item_) == null ? void 0 : T.options) == null ? void 0 : I.props) == null ? void 0 : L.value) == "boolean" && (this.item_.options.props.value = this.item_.options.val)) : this.internalValue = this.item_, this.nameEl = this.nameEl || this.randomKey("", 3).toLowerCase();
    const e = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    if (this.global_ || (w = (S = this.item_) == null ? void 0 : S.options) != null && w.global) {
      const E = ((F = (y = this.item_) == null ? void 0 : y.options) == null ? void 0 : F.global) || this.global_;
      typeof E == "string" && e.test(E) ? global[E] = this.itemAccessibility : console.error(`[WBC-UI2] Refused to assign global name "${E}" — not a valid JS identifier. Expected pattern: /^[a-zA-Z_$][a-zA-Z0-9_$]*$/`);
    }
    this.dive && (this.item_ = this.generalVal(
      this.item_,
      this.itemAccessibility,
      this.lang
    )), this.itemListeners = ((Q = (B = this == null ? void 0 : this.item_) == null ? void 0 : B.options) == null ? void 0 : Q.on) || {}, (z = (H = this.$store) == null ? void 0 : H.getters) == null || z._wbcProAuthorized, (re = (ue = this.item_) == null ? void 0 : ue.watch) != null && re.length && console.warn("[WBC-UI2] Reactive watch[] orchestration requires a PRO license.");
  },
  mounted() {
    var e, t;
    this.isPlainObject(this.item_) && ((this.isWbcPro || es) && typeof ((e = this.item_) == null ? void 0 : e.init) == "function" && this.item_.init(this.itemAccessibility), (this.isWbcPro || es) && typeof ((t = this.item_) == null ? void 0 : t.logic) == "function" && this.item_.logic(this.itemAccessibility)), this.$el.addEventListener("mousedown", this.handleMouseDown);
  },
  updated() {
    var e, t, r;
    this.item_ instanceof Object && (e = this.item_) != null && e.updater && this.item_.updater(this.itemAccessibility), this.item_ instanceof Object && (t = this.item_) != null && t.options && (this.item_.options.isValid = this.internalValueIsValid), ((r = this.item_) == null ? void 0 : r.comp) == "meta" && this.setMetaParams(this.item_, this.$store.state.lg);
  },
  beforeDestroy() {
    this.$el && this.$el.removeEventListener("mousedown", this.handleMouseDown), document.removeEventListener("mousemove", this.doDrag), document.removeEventListener("mouseup", this.endDrag);
  }
}, jl = {
  computed: {
    computedKey() {
      var i, u, a;
      const e = this.item_, t = e && typeof e == "object" ? e.options : null;
      let r = this.nameEl || "";
      if (t) {
        const s = t.key;
        typeof s == "string" || typeof s == "number" ? r = s : typeof s == "object" && s !== null && (r = JSON.stringify(s).slice(0, 20));
      }
      const n = [
        "key",
        this.nameEl || "",
        "n",
        r,
        this.extKey || "",
        this.key_ || "",
        this.key || ""
      ];
      if (t && t.reactiveKey) {
        const s = (i = t.val) == null ? void 0 : i.length, o = (a = (u = t.props) == null ? void 0 : u.value) == null ? void 0 : a.length;
        s !== void 0 && n.push("v", s), o !== void 0 && n.push("vv", o);
      }
      return n.join("-");
    },
    isWbcPro() {
      var e, t;
      return ((t = (e = this.$store) == null ? void 0 : e.getters) == null ? void 0 : t.isWbcPro) || !1;
    },
    wbcTier() {
      var e, t;
      return ((t = (e = this.$store) == null ? void 0 : e.getters) == null ? void 0 : t.userTier()) || "free";
    },
    itemMode: () => "itemMode",
    itemDisp: () => "itemDisp",
    itemProd: () => "itemProd",
    // CQ-4 FIX: Corrected typo from 'itemAccessebility' to 'itemAccessibility'
    itemAccessibility() {
      return Tl(this, this.isWbcPro, this.wbcTier);
    },
    resolvedWbCode() {
      var e, t, r, n;
      return ((t = (e = this.item_) == null ? void 0 : e.options) == null ? void 0 : t.wbCode) != null ? (n = (r = this.item_) == null ? void 0 : r.options) == null ? void 0 : n.wbCode : this.wbCode != null ? this.wbCode : null;
    },
    resolvedWbCodeFile() {
      var e, t, r, n;
      return ((t = (e = this.item_) == null ? void 0 : e.options) == null ? void 0 : t.wbCodeFile) != null ? (n = (r = this.item_) == null ? void 0 : r.options) == null ? void 0 : n.wbCodeFile : this.wbCodeFile != null ? this.wbCodeFile : null;
    },
    resolvedWbDataViewer() {
      var e, t, r, n;
      return ((t = (e = this.item_) == null ? void 0 : e.options) == null ? void 0 : t.wbDataViewer) != null ? (n = (r = this.item_) == null ? void 0 : r.options) == null ? void 0 : n.wbDataViewer : this.wbDataViewer != null ? this.wbDataViewer : null;
    },
    resolvedHide() {
      var e, t;
      return this.hide_ != null ? this.hide_ : ((t = (e = this.item_) == null ? void 0 : e.options) == null ? void 0 : t.hide) != null ? this.item_.options.hide : this.hide != null ? this.hide : null;
    },
    itemFileLanguage() {
      var n;
      const e = typeof this.item_ == "string" ? this.item_ : this._originalItem;
      if (typeof e != "string") return null;
      const t = Un, r = (n = e.split(".").pop()) == null ? void 0 : n.toLowerCase();
      return t[r] || null;
    },
    lang() {
      var e, t, r, n, i;
      return ((t = (e = this == null ? void 0 : this.item_) == null ? void 0 : e.options) == null ? void 0 : t.lang) || ((n = (r = this == null ? void 0 : this.$store) == null ? void 0 : r.state) == null ? void 0 : n.lg) || ((i = this.getCookies()) == null ? void 0 : i.lg) || "en";
    }
  }
};
function ua(e) {
  if (typeof e != "string")
    return e;
  {
    const t = [];
    let r = t, n = "", i = 0;
    for (let u = 0; u < e.length; u++) {
      const a = e[u];
      a === "|" && i === 0 ? (n.length > 0 && (r.push(n), n = ""), r.push([]), r = r[r.length - 1]) : a === "+" && i === 0 ? n.length > 0 && (r.push(n), n = "") : a === "(" ? (i++, n += a) : (a === ")" && i--, n += a);
    }
    return n.length > 0 && r.push(n), t;
  }
}
function Bl(e, t, r, n) {
  if (!n) return e;
  try {
    const i = n.enc.Utf8.parse(t), u = n.enc.Utf8.parse(r), a = n.enc.Utf8.parse(e);
    return n.AES.encrypt(a, i, {
      iv: u,
      mode: n.mode.CBC,
      padding: n.pad.Pkcs7
    }).ciphertext.toString();
  } catch (i) {
    return console.error("[WBC-UI SafeEval AES Error]", i), e;
  }
}
function Ml(e, t, r, n) {
  if (!n) return e;
  try {
    const i = n.enc.Utf8.parse(t), u = n.enc.Utf8.parse(r), a = n.enc.Hex.parse(e), s = n.enc.Base64.stringify(a);
    return n.AES.decrypt(s, i, {
      iv: u,
      mode: n.mode.CBC,
      padding: n.pad.Pkcs7
    }).toString(n.enc.Utf8);
  } catch (i) {
    return console.error("[WBC-UI SafeEval AES Decrypt Error]", i), e;
  }
}
function sa(e, t, r) {
  const n = typeof Vue < "u" && Vue.CryptoJS ? Vue.CryptoJS : null;
  return n ? Bl(e, t, r, n) : (console.warn("[WBC] vue-cryptojs is not installed — aesEnc unavailable"), "");
}
function aa(e, t, r) {
  const n = typeof Vue < "u" && Vue.CryptoJS ? Vue.CryptoJS : null;
  return n ? Ml(e, t, r, n) : (console.warn("[WBC] vue-cryptojs is not installed — aesDec unavailable"), "");
}
const Vl = {
  props: {
    /**
     * Main UI definition object. Can be a string, object, array, function, or VNode.
     * Defines the component structure, layout, and behavior using WBC syntax.
     * @type {string|object|array|function|VNode}
     * @default null
     */
    item: {
      type: [String, Object, Array, Function, Number],
      default: () => null
    },
    /**
     * Code display configuration for showing the WBC item source code.
     * Controls the visibility and appearance of the code block panel (PRO/DEV only).
     * Supports options: activator, collapsed, and additional WBCode props.
     * @type {boolean|object}
     * @default null
     */
    wbCode: {
      type: [Boolean, Object],
      default: () => null
    },
    /**
     * File code display configuration for showing linked file source code.
     * Controls the visibility and appearance of file content code blocks (PRO/DEV only).
     * Supports options: activator, collapsed, language, and additional WBCode props.
     * @type {boolean|object}
     * @default null
     */
    wbCodeFile: {
      type: [Boolean, Object],
      default: () => null
    },
    /**
     * Data viewer configuration for displaying item data in a table format.
     * Controls the visibility and appearance of the data viewer panel (PRO/DEV only).
     * Supports options: activator, collapsed, and additional WBDataViewer props.
     * @type {boolean|object}
     * @default null
     */
    wbDataViewer: {
      type: [Boolean, Object],
      default: () => null
    },
    /**
     * Additional props to pass through to rendered components.
     * Falls back to $route.params if not provided.
     * @type {object}
     * @default null
     */
    props: {
      type: Object,
      default: () => null
    },
    /**
     * Access protection flag or configuration. When true or an object,
     * displays a "Forbidden access" alert instead of the content.
     * Can be a boolean, string (custom message), or object with alert options.
     * @type {boolean|string|object}
     * @default false
     */
    protected: {
      type: [Boolean, String, Object],
      default: () => !1
    },
    /**
     * Loading state flag or configuration. When active, displays a loading
     * spinner instead of content. Can be a boolean, string (custom message),
     * or object with { active, options } for custom loading component.
     * @type {boolean|string|object}
     * @default false
     */
    load: {
      type: [Boolean, String, Object],
      default: () => !1
    },
    /**
     * Floating window configuration. When set, wraps content in a floating/draggable panel
     * with float icon in the corner.
     * @type {boolean|object}
     * @default null
     */
    float: {
      type: [Boolean, Object],
      default: () => null
    },
    /**
     * External child components or content to inject into the rendered output.
     * Passed to renderObject for integration with the item's children slots.
     * @type {array|object}
     * @default null
     */
    children: {
      type: [Array, Object],
      default: () => null
    },
    /**
     * Wrapper component configuration. Wraps the main rendered content
     * inside a specified WBC component definition.
     * Can be a string (component name) or object (WBC item definition).
     * @type {string|object}
     * @default null
     */
    wrap: {
      type: [String, Object],
      default: () => null
    },
    /**
     * External key for component identification and caching.
     * Stored internally as extKey_ and used for unique component instances.
     * @type {string}
     * @default ""
     */
    extKey: {
      type: String,
      default: () => ""
    },
    /**
     * Wiki integration flag. When true, enables wiki-specific rendering
     * and requires the WBCWikiObj to be registered. Shows error if missing.
     * @type {boolean}
     * @default null
     */
    wiki: {
      type: Boolean,
      default: () => null
    },
    /**
     * Transform flag controlling item transformation during rendering.
     * When true (default), enables item parsing and transformation logic.
     * @type {boolean}
     * @default true
     */
    transform: {
      type: Boolean,
      default: () => !0
    },
    /**
     * Global reference string for accessing shared/global state or components.
     * Stored internally as global_ and used for cross-component communication.
     * @type {string}
     * @default null
     */
    global: {
      type: String,
      default: () => null
    },
    /**
     * Hide flag. When true, renders nothing (returns null).
     * Can also be set via item.options.hide for conditional hiding.
     * @type {boolean}
     * @default null
     */
    hide: {
      type: Boolean,
      default: () => null
    },
    /**
     * Close button configuration. When set, renders a close icon
     * that can be used to dismiss or close the component.
     * @type {boolean|object}
     * @default null
     */
    close: {
      type: [Boolean, Object],
      default: () => null
    },
    /**
     * Drag handle configuration. When set, renders a drag icon
     * that enables dragging/moving the component.
     * @type {boolean|object}
     * @default null
     */
    drag: {
      type: [Boolean, Object],
      default: () => null
    },
    /**
     * Focus target identifier. Specifies which element or component
     * should receive focus when this component is rendered.
     * @type {string}
     * @default null
     */
    focusOn: {
      type: String,
      default: () => null
    }
  }
}, $l = {
  data() {
    var e;
    return {
      fileContent: null,
      source: null,
      protected_: null,
      wbCode_: this.wbCode != null ? this.wbCode : null,
      wbCodeFile_: this.wbCodeFile != null ? this.wbCodeFile : null,
      wbDataViewer_: this.wbDataViewer != null ? this.wbDataViewer : null,
      props_: this.props || ((e = this == null ? void 0 : this.$route) == null ? void 0 : e.params),
      wiki_: null,
      main: null,
      internalValue: null,
      internalValueIsValid: null,
      load_: this == null ? void 0 : this.load,
      float_: null,
      hide_: null,
      close_: null,
      focus_: null,
      drag_: null,
      focusOn_: null,
      menu: !1,
      switch: !1,
      wbcItem: null,
      compMedia: null,
      mediaData: null,
      codeMirroMode: "text/html",
      media: null,
      item_: {},
      _originalItem: null,
      watch_: [],
      rColor: null,
      mainItemTextArea: {
        class: "white",
        label: "Object/array to parse",
        rules: [],
        key: "main-item"
      },
      draggable: !1,
      dragStartX: 0,
      dragStartY: 0,
      offsetX: 0,
      offsetY: 0,
      alertObjs: [],
      children_: null,
      extKey_: this.extKey,
      key_: 0,
      wrap_: null,
      data: null,
      select: !1,
      itemListeners: {},
      attrs: {},
      dive: !1,
      nameEl: null,
      AsyncComponent: null,
      isComponentLoaded: !1,
      refName: null,
      global_: this.global,
      _jsLazyComp: null,
      _jsLazyLoading: !1
    };
  }
}, Wl = {
  watch: {
    // PERF-4 FIX: Batch syncVNodes calls to prevent excessive updates.
    // Initial sync happens in render() rather than immediately.
    // $_syncPending flag batches multiple watcher triggers into a single call.
    resolvedWbCode: {
      handler() {
        this._scheduleSyncVNodes();
      }
    },
    resolvedWbCodeFile: {
      handler() {
        this._scheduleSyncVNodes();
      }
    },
    resolvedWbDataViewer: {
      handler() {
        this._scheduleSyncVNodes();
      }
    },
    item: {
      handler(e) {
        this.item_ = e, this._scheduleSyncVNodes();
      },
      deep: !0
    },
    "item_.options.val"(e) {
      this.internalValue = e;
    },
    internalValue(e) {
      var t;
      (t = this == null ? void 0 : this.item_) != null && t.options ? this.item_.options.val = e : this.item_ = e;
    },
    "item_.options.props.value"(e) {
      this.internalValue = e, this.item_.options.val = e;
    },
    "$store.state.lg"(e, t) {
      this.$cookies.set("lg", e), this.key_ += 1;
    }
  }
}, zl = (e) => ` ${e}`.replace(/_/g, " ").replace(/ ./g, (t) => t.toUpperCase()).trim(), Ul = function(e) {
  return typeof e != "string" ? e : e.toLowerCase().split(" ").map(function(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }).join(" ");
}, Hl = function(e) {
  if (typeof e == "object" || !e)
    return "";
  var t, r, n, i, u;
  for (n = e.replace(/([^\W_]+[^\s-]*) */g, function(a) {
    return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
  }), i = ["A", "An", "The", "And", "But", "Or", "For", "Nor", "As", "At", "By", "For", "From", "In", "Into", "Near", "Of", "On", "Onto", "To", "With"], t = 0, r = i.length; t < r; t++)
    n = n.replace(new RegExp("\\s" + i[t] + "\\s", "g"), function(a) {
      return a.toLowerCase();
    });
  for (u = ["Id", "Tv"], t = 0, r = u.length; t < r; t++)
    n = n.replace(new RegExp("\\b" + u[t] + "\\b", "g"), u[t].toUpperCase());
  return n;
}, ql = function(e) {
  return typeof e != "string" ? e : e.replace(/[_-]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z])([A-Z][a-z])/g, "$1 $2").replace(/^./, (t) => t.toUpperCase()).replace(/\s+/g, " ");
};
function Gl(e) {
  const t = Math.floor(e / 60), r = e % 60;
  return r == 0 ? `${t}h` : `${t}h ${r}m`;
}
const Kl = function(e) {
  return e.replace(/^([A-Z])/, (t) => t.toLowerCase()).replace(/([a-z])([A-Z])/g, "$1-$2");
};
function Zl(e) {
  return e.split(/\r?\n/).map((t) => `<p>${t}</p>`).join("");
}
function Yl(e) {
  if (!e) return "";
  if (typeof e != "string")
    try {
      e = JSON.stringify(e, null, 2);
    } catch {
      e = String(e);
    }
  return e.split(/\n+/).map((t) => t.trim()).filter((t) => t.length).map((t) => `<p>${t}</p>`).join(`
`);
}
async function Jl(e, t = null) {
  var r;
  if (typeof e != "string") return e;
  try {
    const n = await import("prettier/standalone");
    let i = null, u = [];
    if (t && (i = {
      html: "html",
      htm: "html",
      vue: "vue",
      js: "babel",
      javascript: "babel",
      jsx: "babel",
      ts: "babel-ts",
      typescript: "babel-ts",
      tsx: "babel-ts",
      css: "css",
      scss: "scss",
      less: "less",
      json: "json",
      json5: "json5",
      markdown: "markdown",
      md: "markdown",
      graphql: "graphql",
      yaml: "yaml",
      yml: "yaml"
    }[t.toLowerCase()] || "html"), !i) {
      const [a, s, o, c] = await Promise.all([
        import("prettier/parser-html"),
        import("prettier/parser-babel"),
        import("prettier/parser-postcss"),
        import("prettier/parser-yaml").catch(() => null)
      ]);
      u = [a, s, o], c && u.push(c), i = ((r = n.getSupportInfo) == null ? void 0 : r.call(n).languages.flatMap((f) => f.parsers).find((f) => {
        try {
          return n.format(e.slice(0, 1e3), { parser: f, plugins: u }), !0;
        } catch {
          return !1;
        }
      })) || "html";
    }
    return ["html", "vue", "markdown"].includes(i) ? u = [await import("prettier/parser-html")] : i.includes("babel") ? u = [await import("prettier/parser-babel")] : ["css", "scss", "less", "postcss"].includes(i) ? u = [await import("prettier/parser-postcss")] : ["yaml", "yml"].includes(i) && (u = [await import("prettier/parser-yaml")]), n.format(e, {
      parser: i,
      plugins: u,
      tabWidth: 2,
      useTabs: !1,
      printWidth: 100,
      semi: !0,
      singleQuote: !0,
      trailingComma: "es5",
      bracketSameLine: !1,
      htmlWhitespaceSensitivity: "css",
      vueIndentScriptAndStyle: !0
    });
  } catch (n) {
    return console.warn("[formatCode] Failed:", n.message), e;
  }
}
function qn(e, { indentSize: t = 4, removeComments: r = !0 } = {}) {
  if (!e || typeof e != "string") return e;
  let n = e.trim();
  r && (n = n.replace(/<!--[\s\S]*?-->/g, "").replace(/<!---->/g, ""));
  const i = " ".repeat(t);
  let u = 0, a = "";
  const s = n.replace(/></g, "> <").split(/(<[^>]+>)/g).filter(Boolean);
  let o = !1;
  for (let c of s) {
    const f = c.trim(), p = /^</.test(f), l = /^<\//.test(f), h = /\/>$/.test(f);
    if (p)
      l && !h && (u = Math.max(0, u - 1)), a += `
` + i.repeat(u) + f, o = !0, !l && !h && u++;
    else {
      const d = c.trim();
      d && ((o || a.endsWith(`
`)) && (a += `
` + i.repeat(u)), a += d, o = !1);
    }
  }
  return a.trim() + `
`;
}
const Xl = (e) => qn(e, { indentSize: 4 }), Ql = (e) => qn(e, { indentSize: 2 }), ef = qn;
function gu(e, { indent: t = 4 } = {}) {
  if (typeof e == "string")
    try {
      e = JSON.parse(e);
    } catch {
      return e;
    }
  return JSON.stringify(e, null, " ".repeat(t));
}
const tf = (e) => gu(e, { indent: 2 }), rf = (e) => gu(e, { indent: 4 });
function Kr(e, { indent: t = 4 } = {}) {
  if (typeof e == "string")
    try {
      const n = JSON.parse(e);
      return JSON.stringify(n, null, t);
    } catch {
      return e;
    }
  if (typeof e != "object" || e === null)
    return typeof e == "function" ? `function ${e.name || ""}() { ... }` : e === void 0 ? "undefined" : String(e);
  const r = " ".repeat(t);
  return JSON.stringify(e, (n, i) => typeof i == "function" ? `[Function${i.name ? ` ${i.name}` : ""}]` : i === void 0 ? "[undefined]" : typeof i == "symbol" || typeof i == "bigint" ? i.toString() + (typeof i == "bigint" ? "n" : "") : i, r);
}
const nf = Kr, uf = (e, t = 4) => Kr(e, { indent: t }), sf = (e) => Kr(e, { indent: 2 }), af = (e) => Kr(e, { indent: 4 }), of = (e) => {
}, Gn = function(e) {
  return typeof e == "object" && e !== null && e.hasOwnProperty("context") && e.hasOwnProperty("tag");
}, cf = function(e) {
  if (typeof e != "string") return !1;
  const t = /^\d{4}-\d{2}-\d{2}$/;
  if (e.match(t) === null) return !1;
  const r = new Date(e), n = r.getTime();
  return typeof n != "number" || Number.isNaN(n) ? !1 : r.toISOString().startsWith(e);
};
function Zr(e) {
  return e == null || Array.isArray(e) && e.length === 0 || typeof e == "object" && Object.keys(e).length === 0 || typeof e == "string" && e.trim() === "" || e instanceof Set && e.size === 0;
}
function lf(e) {
  return !Zr(e);
}
function Qi(e) {
  return typeof e == "object" && !Array.isArray(e) && e !== null && !(e instanceof Function);
}
const oa = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Wt = function(e, t = /* @__PURE__ */ new WeakMap()) {
  if (e == null || typeof e != "object") return e;
  if (e._isVue || e.$options || e.__v_isVNode || e._scope || e._effects || e.vm) return "vue object cannot be cloned";
  if (e instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    return n.setTime(e.getTime()), n;
  }
  if (Array.isArray(e)) {
    const n = [];
    for (let i = 0, u = e.length; i < u; i++) n[i] = Wt(e[i], t);
    return n;
  }
  if (t.has(e)) return t.get(e);
  const r = {};
  t.set(e, r);
  for (let n in e)
    Object.prototype.hasOwnProperty.call(e, n) && !oa.has(n) && (r[n] = Wt(e[n], t));
  return r;
}, ca = function(e, ...t) {
  (typeof e != "object" || e === null) && (e = {});
  for (const r of t)
    if (!(typeof r != "object" || r === null)) {
      for (const n in r)
        if (Object.prototype.hasOwnProperty.call(r, n) && !oa.has(n)) {
          const i = e[n], u = r[n];
          Qi(u) ? e[n] = Qi(i) ? ca(i, u) : Wt(u) : Array.isArray(u) ? e[n] = Wt(u) : e[n] = u;
        }
    }
  return e;
};
function ff(e, t) {
  function r(n) {
    return Array.isArray(n) ? n.map(r) : typeof n == "string" && t.hasOwnProperty(n) ? t[n] : n;
  }
  return e.map(r);
}
function pf(e, t, r = "default_") {
  function n(a) {
    return a.toString();
  }
  function i(a, s, o) {
    s.forEach((c, f) => {
      const p = o + n(f);
      Array.isArray(c) ? (a[p] = {}, i(a[p], c, "")) : typeof c == "string" && t.hasOwnProperty(c) ? a[p] = t[c] : a[p] = c;
    });
  }
  const u = {};
  return i(u, e, r), u;
}
function la(e, t) {
  if (e === null || typeof e != "object")
    return typeof e == "string" && t.hasOwnProperty(e) ? t[e] : e;
  const r = Array.isArray(e) ? [] : {};
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && (r[n] = la(e[n], t));
  return r;
}
function eu(e, t) {
  if (e === null || typeof e != "object")
    return typeof e == "string" && t.hasOwnProperty(e) ? t[e] : e;
  const r = Array.isArray(e) ? [] : {};
  if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) r[n] = eu(e[n], t);
  else
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = eu(e[n], t));
  return r;
}
const tu = (e, t) => {
  let r = Wt(e);
  if (typeof r == "function" || Zr(r) || Gn(r)) return r;
  if (Array.isArray(r))
    for (let n = 0; n < r.length; n++) r[n] = tu(r[n], t);
  else if (typeof r == "object" && r !== null)
    for (let n in r)
      r.hasOwnProperty(n) && (r[n] = tu(r[n], t));
  else return t(r);
  return r;
}, hf = (e) => {
  const t = (n) => n.toString().replace(/\s+/g, " ").trim();
  if (typeof e == "function") return t(e);
  if (typeof e != "object" || e === null) return JSON.stringify(e);
  const r = (n) => {
    const i = Array.isArray(n) ? [] : {};
    for (const [u, a] of Object.entries(n))
      typeof a == "function" ? i[u] = t(a) : typeof a == "object" && a !== null ? i[u] = r(a) : i[u] = a;
    return i;
  };
  return JSON.stringify(r(e));
}, df = (e, t) => {
  const r = (n) => {
    if (typeof n == "string")
      try {
        return JSON.parse(n);
      } catch {
        return t ? t(n) : n;
      }
    else if (typeof n == "object" && n !== null) {
      if (Array.isArray(n)) return n.map(r);
      const i = {};
      for (const [u, a] of Object.entries(n)) i[u] = r(a);
      return i;
    }
    return n;
  };
  return r(e);
}, fa = function(e, t) {
  const r = Wt(e), n = (i, u) => typeof i == "function" || Zr(i) || Gn(i) ? i : typeof i == "object" && i !== null ? Array.isArray(i) ? i.map((a) => n(a, u)) : fa(i, u) : u && u.hasOwnProperty(i) ? u[i] : i;
  if (Array.isArray(r))
    for (let i = 0; i < r.length; i++) r[i] = n(r[i], t);
  else if (typeof r == "object" && r !== null)
    for (let i in r)
      r.hasOwnProperty(i) && (r[i] = n(r[i], t));
  else return n(r, t);
  return r;
}, mf = ["error", "lang", "val", "txt", "json", "blob", "text", "init", "tracker", "encFn", "decFn", "resolved", "owners", "filter", "alert", "context"], En = function(e, t = {}, r = "en", n = mf) {
  if (!e || Zr(e) || Gn(e)) return e;
  if (typeof e == "function") return e.length >= 1 ? (...u) => e(t, ...u) : e;
  const i = Wt(e);
  if (Array.isArray(i)) {
    for (let u = 0; u < i.length; u++)
      n.includes(i[u]) || (i[u] = En(i[u], t, r, n));
    return i;
  }
  if (i instanceof Object) {
    for (const [u, a] of Object.entries(i))
      if (!n.includes(u))
        if (typeof a == "function") {
          if (a.length >= 2) i[u] = (...s) => a(t, ...s);
          else if (a.length === 1) {
            let s = a(t);
            s instanceof Object ? typeof s == "function" ? i[u] = s : s.hasOwnProperty(r) ? i[u] = s[r] : i[u] = En(s, t, r, n) : i[u] = s;
          }
        } else i[u] = En(a, t, r, n);
    return i;
  }
  return i;
}, Jt = function(e, t) {
  if (!(e instanceof Object) || typeof e == "function" || e === null || e === void 0 || Number.isNaN(e) || e._isVue || e.__v_isVNode) return e;
  if (Array.isArray(e)) return e.map((n) => Jt(n, t));
  if (e.hasOwnProperty(t)) return Jt(e[t], t);
  let r = { ...e };
  for (const [n, i] of Object.entries(r)) n || (r[n] = Jt(i, t));
  return r;
}, pa = function(e) {
  let t = [];
  for (let r = 0; r < e.length; r++)
    Array.isArray(e[r]) ? t = t.concat(pa(e[r])) : t.push(e[r]);
  return t;
}, ha = ["red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "blue-grey", "grey", "shades", "black", "white", "transparent"], bf = ["red", "pink", "purple", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "amber", "orange", "brown", "grey", "shades", "white"], gf = function() {
  const e = "0123456789ABCDEF";
  let t = "#";
  for (let r = 0; r < 6; r++) t += e[Math.floor(Math.random() * 16)];
  return t;
}, xf = function(e, t = 1e3) {
  const i = Math.floor(Math.random() * 25 + 65), u = Math.floor(Math.random() * 25 + 65), a = Math.floor(Math.random() * t);
  return `${e}${String.fromCharCode(i, u)}${a}`;
}, da = function(e = 0, t) {
  return Math.floor(Math.random() * (t - e) + e);
}, ma = function(e) {
  return e[da(0, e.length)];
}, yf = function() {
  return ma(ha);
};
function _f(e) {
  const t = [], r = (s) => {
    s.trim() && t.push({ type: "text", content: s.trim() });
  }, n = e.split(`
`);
  let i = !1, u = "";
  for (let s = 0; s < n.length; s++) {
    const c = n[s].replace(/%.*/, "").trimEnd();
    if (i) {
      const p = c.indexOf("$$");
      p !== -1 ? (u += c.slice(0, p), u.trim() && t.push({ type: "math", expression: u.trim(), displayMode: !0 }), i = !1, u = "", a(c.slice(p + 2))) : u += c + `
`;
      continue;
    }
    const f = c.indexOf("$$");
    if (f !== -1) {
      f > 0 && a(c.slice(0, f));
      const p = c.slice(f + 2), l = p.indexOf("$$");
      if (l !== -1) {
        const h = p.slice(0, l);
        h.trim() && t.push({ type: "math", expression: h.trim(), displayMode: !0 }), a(p.slice(l + 2));
      } else
        i = !0, u = "";
      continue;
    }
    a(c);
  }
  i && u.trim() && t.push({ type: "math", expression: u.trim(), displayMode: !0 });
  function a(s, o) {
    if (!s) return;
    const c = [];
    let f = 0;
    for (; f < s.length; ) {
      const d = s.indexOf("$", f);
      if (d === -1) {
        c.push({ content: s.slice(f) });
        break;
      }
      d > f && c.push({ content: s.slice(f, d) });
      const _ = s.slice(d + 1), C = _.indexOf("$");
      if (C === -1) {
        c.push({ content: s.slice(d) });
        break;
      }
      const T = _.slice(0, C);
      T.trim() && c.push({ expression: T.trim() }), f = d + 1 + C + 1;
    }
    if (c.length === 0) return;
    if (c.length === 1) {
      const d = c[0];
      d.content !== void 0 ? r(d.content) : t.push({ type: "math", expression: d.expression, displayMode: !1 });
      return;
    }
    const p = { type: "mixed", lineContent: [] };
    let l = "";
    const h = () => {
      l.trim() && (p.lineContent.push({ content: l.trim() }), l = "");
    };
    for (const d of c)
      d.content !== void 0 ? l += d.content + " " : (h(), p.lineContent.push({ expression: d.expression }));
    h(), t.push(p);
  }
  return t;
}
function vf(e, t, r) {
  function n(i, u) {
    const a = r === void 0 || u === r;
    if (Array.isArray(i))
      for (let s = 0; s < i.length; s++)
        a && i[s] in t ? i[s] = t[i[s]] : n(i[s], u + 1);
    else if (i && typeof i == "object")
      for (const s in i)
        a && i[s] in t ? i[s] = t[i[s]] : n(i[s], u + 1);
  }
  return n(e, 0), e;
}
function An(e, t, r = {}) {
  const { mode: n = "first" } = r;
  if (!e || typeof e != "object" || !t || typeof t != "object")
    return n === "all" ? [] : null;
  function i(c, f) {
    const p = [];
    if (!c || typeof c != "object") return p;
    f in c && p.push(c);
    for (const l in c)
      c[l] && typeof c[l] == "object" && !Array.isArray(c[l]) && p.push(...i(c[l], f));
    return p;
  }
  function u(c, f) {
    const p = [];
    if (!c || typeof c != "object") return p;
    f in c && p.push(c[f]);
    for (const l in c)
      c[l] && typeof c[l] == "object" && !Array.isArray(c[l]) && p.push(...u(c[l], f));
    return p;
  }
  function a(c, f, p) {
    const l = {};
    return Object.keys(f).forEach((h) => {
      if (h === "_parent_") return;
      const d = f[h];
      if (d && typeof d == "object") {
        const _ = d._parent_ || h, C = i(c, h);
        if (C.length > 0) {
          const T = p === "merge" ? C[C.length - 1] : C[0], I = An(T, d, { mode: p });
          I && Object.keys(I).length > 0 && (l[_] = I);
        }
      } else {
        const _ = u(c, h);
        if (_.length > 0) {
          const C = d || h;
          l[C] = p === "merge" ? _[_.length - 1] : _[0];
        }
      }
    }), Object.keys(l).length > 0 ? l : null;
  }
  function s(c, f, p) {
    const l = {};
    return Object.keys(f).forEach((h) => {
      if (h === "_parent_") return;
      const d = f[h];
      if (d && typeof d == "object") {
        const _ = d._parent_ || h, C = i(c, h);
        if (C.length > p) {
          const T = An(C[p], d, { mode: p });
          T && Object.keys(T).length > 0 && (l[_] = T);
        }
      } else {
        const _ = u(c, h);
        if (_.length > p) {
          const C = d || h;
          l[C] = _[p];
        }
      }
    }), Object.keys(l).length > 0 ? l : null;
  }
  function o(c, f) {
    const p = Object.keys(f).filter((d) => d !== "_parent_");
    if (p.length === 0) return [];
    const l = i(c, p[0]), h = [];
    return l.forEach((d, _) => {
      const C = An(d, f, { mode: _ });
      C && h.push(C);
    }), h;
  }
  return n === "all" ? o(e, t) : typeof n == "number" && n >= 0 ? s(e, t, n) : a(e, t, n);
}
const ba = /* @__PURE__ */ new Date(), ga = ba.toISOString(), kf = ga.slice(0, 10);
/*! @license DOMPurify 3.4.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.5/LICENSE */
function ts(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Cf(e) {
  if (Array.isArray(e)) return e;
}
function wf(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, u, a, s = [], o = !0, c = !1;
    try {
      if (u = (r = r.call(e)).next, t !== 0) for (; !(o = (n = u.call(r)).done) && (s.push(n.value), s.length !== t); o = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!o && r.return != null && (a = r.return(), Object(a) !== a)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function Ef() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Af(e, t) {
  return Cf(e) || wf(e, t) || Sf(e, t) || Ef();
}
function Sf(e, t) {
  if (e) {
    if (typeof e == "string") return ts(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ts(e, t) : void 0;
  }
}
const xa = Object.entries, rs = Object.setPrototypeOf, Df = Object.isFrozen, Tf = Object.getPrototypeOf, Of = Object.getOwnPropertyDescriptor;
let Pe = Object.freeze, Xe = Object.seal, mr = Object.create, ya = typeof Reflect < "u" && Reflect, ru = ya.apply, nu = ya.construct;
Pe || (Pe = function(t) {
  return t;
});
Xe || (Xe = function(t) {
  return t;
});
ru || (ru = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++)
    i[u - 2] = arguments[u];
  return t.apply(r, i);
});
nu || (nu = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const cr = Ae(Array.prototype.forEach), If = Ae(Array.prototype.lastIndexOf), ns = Ae(Array.prototype.pop), lr = Ae(Array.prototype.push), Ff = Ae(Array.prototype.splice), Ne = Array.isArray, jr = Ae(String.prototype.toLowerCase), Ei = Ae(String.prototype.toString), is = Ae(String.prototype.match), fr = Ae(String.prototype.replace), us = Ae(String.prototype.indexOf), Lf = Ae(String.prototype.trim), Nf = Ae(Number.prototype.toString), Pf = Ae(Boolean.prototype.toString), ss = typeof BigInt > "u" ? null : Ae(BigInt.prototype.toString), as = typeof Symbol > "u" ? null : Ae(Symbol.prototype.toString), ke = Ae(Object.prototype.hasOwnProperty), Rr = Ae(Object.prototype.toString), Oe = Ae(RegExp.prototype.test), yn = Rf(TypeError);
function Ae(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return ru(e, t, n);
  };
}
function Rf(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return nu(e, r);
  };
}
function ne(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : jr;
  if (rs && rs(e, null), !Ne(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const u = r(i);
      u !== i && (Df(t) || (t[n] = u), i = u);
    }
    e[i] = !0;
  }
  return e;
}
function jf(e) {
  for (let t = 0; t < e.length; t++)
    ke(e, t) || (e[t] = null);
  return e;
}
function Me(e) {
  const t = mr(null);
  for (const n of xa(e)) {
    var r = Af(n, 2);
    const i = r[0], u = r[1];
    ke(e, i) && (Ne(u) ? t[i] = jf(u) : u && typeof u == "object" && u.constructor === Object ? t[i] = Me(u) : t[i] = u);
  }
  return t;
}
function Bf(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Nf(e);
    case "boolean":
      return Pf(e);
    case "bigint":
      return ss ? ss(e) : "0";
    case "symbol":
      return as ? as(e) : "Symbol()";
    case "undefined":
      return Rr(e);
    case "function":
    case "object": {
      if (e === null)
        return Rr(e);
      const t = e, r = Zt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Rr(n);
      }
      return Rr(e);
    }
    default:
      return Rr(e);
  }
}
function Zt(e, t) {
  for (; e !== null; ) {
    const n = Of(e, t);
    if (n) {
      if (n.get)
        return Ae(n.get);
      if (typeof n.value == "function")
        return Ae(n.value);
    }
    e = Tf(e);
  }
  function r() {
    return null;
  }
  return r;
}
function Mf(e) {
  try {
    return Oe(e, ""), !0;
  } catch {
    return !1;
  }
}
const os = Pe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ai = Pe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Si = Pe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Vf = Pe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Di = Pe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), $f = Pe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), cs = Pe(["#text"]), ls = Pe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ti = Pe(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), fs = Pe(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), _n = Pe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Wf = Xe(/{{[\w\W]*|^[\w\W]*}}/g), zf = Xe(/<%[\w\W]*|^[\w\W]*%>/g), Uf = Xe(/\${[\w\W]*/g), Hf = Xe(/^data-[\-\w.\u00B7-\uFFFF]+$/), qf = Xe(/^aria-[\-\w]+$/), ps = Xe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Gf = Xe(/^(?:\w+script|data):/i), Kf = Xe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Zf = Xe(/^html$/i), Yf = Xe(/^[a-z][.\w]*(-[.\w]+)+$/i), pr = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Jf = function() {
  return typeof window > "u" ? null : window;
}, Xf = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
  const u = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(u, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + u + " could not be created."), null;
  }
}, hs = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function _a() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jf();
  const t = (J) => _a(J);
  if (t.version = "3.4.5", t.removed = [], !e || !e.document || e.document.nodeType !== pr.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript, u = e.DocumentFragment, a = e.HTMLTemplateElement, s = e.Node, o = e.Element, c = e.NodeFilter, f = e.NamedNodeMap, p = f === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : f, l = e.HTMLFormElement, h = e.DOMParser, d = e.trustedTypes, _ = o.prototype, C = Zt(_, "cloneNode"), T = Zt(_, "remove"), I = Zt(_, "nextSibling"), L = Zt(_, "childNodes"), S = Zt(_, "parentNode"), w = s && s.prototype ? Zt(s.prototype, "nodeType") : null;
  if (typeof a == "function") {
    const J = r.createElement("template");
    J.content && J.content.ownerDocument && (r = J.content.ownerDocument);
  }
  let y, F = "";
  const B = r, Q = B.implementation, H = B.createNodeIterator, z = B.createDocumentFragment, ue = B.getElementsByTagName, re = n.importNode;
  let E = hs();
  t.isSupported = typeof xa == "function" && typeof S == "function" && Q && Q.createHTMLDocument !== void 0;
  const x = Wf, k = zf, D = Uf, A = Hf, P = qf, V = Gf, Z = Kf, $ = Yf;
  let N = ps, R = null;
  const U = ne({}, [...os, ...Ai, ...Si, ...Di, ...cs]);
  let M = null;
  const X = ne({}, [...ls, ...Ti, ...fs, ..._n]);
  let te = Object.seal(mr(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Ce = null, me = null;
  const we = Object.seal(mr(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let tt = !0, ot = !0, rn = !1, nn = !0, ct = !1, qt = !0, vt = !1, wr = !1, Lt = !1, lt = !1, kt = !1, We = !1, Er = !0, Ar = !1;
  const un = "user-content-";
  let Sr = !0, ft = !1, Ct = {}, ze = null;
  const ir = ne({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Dr = null;
  const sn = ne({}, ["audio", "video", "img", "source", "image", "track"]);
  let Tr = null;
  const pt = ne({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", ur = "http://www.w3.org/2000/svg", Ue = "http://www.w3.org/1999/xhtml";
  let Nt = Ue, sr = !1, Et = null;
  const oi = ne({}, [wt, ur, Ue], Ei);
  let rt = ne({}, ["mi", "mo", "mn", "ms", "mtext"]), Or = ne({}, ["annotation-xml"]);
  const ci = ne({}, ["title", "style", "font", "a", "script"]);
  let Gt = null;
  const li = ["application/xhtml+xml", "text/html"], fi = "text/html";
  let fe = null, Pt = null;
  const pi = r.createElement("form"), an = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, Ir = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Pt && Pt === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = Me(g), Gt = // eslint-disable-next-line unicorn/prefer-includes
    li.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? fi : g.PARSER_MEDIA_TYPE, fe = Gt === "application/xhtml+xml" ? Ei : jr, R = ke(g, "ALLOWED_TAGS") && Ne(g.ALLOWED_TAGS) ? ne({}, g.ALLOWED_TAGS, fe) : U, M = ke(g, "ALLOWED_ATTR") && Ne(g.ALLOWED_ATTR) ? ne({}, g.ALLOWED_ATTR, fe) : X, Et = ke(g, "ALLOWED_NAMESPACES") && Ne(g.ALLOWED_NAMESPACES) ? ne({}, g.ALLOWED_NAMESPACES, Ei) : oi, Tr = ke(g, "ADD_URI_SAFE_ATTR") && Ne(g.ADD_URI_SAFE_ATTR) ? ne(Me(pt), g.ADD_URI_SAFE_ATTR, fe) : pt, Dr = ke(g, "ADD_DATA_URI_TAGS") && Ne(g.ADD_DATA_URI_TAGS) ? ne(Me(sn), g.ADD_DATA_URI_TAGS, fe) : sn, ze = ke(g, "FORBID_CONTENTS") && Ne(g.FORBID_CONTENTS) ? ne({}, g.FORBID_CONTENTS, fe) : ir, Ce = ke(g, "FORBID_TAGS") && Ne(g.FORBID_TAGS) ? ne({}, g.FORBID_TAGS, fe) : Me({}), me = ke(g, "FORBID_ATTR") && Ne(g.FORBID_ATTR) ? ne({}, g.FORBID_ATTR, fe) : Me({}), Ct = ke(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? Me(g.USE_PROFILES) : g.USE_PROFILES : !1, tt = g.ALLOW_ARIA_ATTR !== !1, ot = g.ALLOW_DATA_ATTR !== !1, rn = g.ALLOW_UNKNOWN_PROTOCOLS || !1, nn = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ct = g.SAFE_FOR_TEMPLATES || !1, qt = g.SAFE_FOR_XML !== !1, vt = g.WHOLE_DOCUMENT || !1, lt = g.RETURN_DOM || !1, kt = g.RETURN_DOM_FRAGMENT || !1, We = g.RETURN_TRUSTED_TYPE || !1, Lt = g.FORCE_BODY || !1, Er = g.SANITIZE_DOM !== !1, Ar = g.SANITIZE_NAMED_PROPS || !1, Sr = g.KEEP_CONTENT !== !1, ft = g.IN_PLACE || !1, N = Mf(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : ps, Nt = typeof g.NAMESPACE == "string" ? g.NAMESPACE : Ue, rt = ke(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Me(g.MATHML_TEXT_INTEGRATION_POINTS) : ne({}, ["mi", "mo", "mn", "ms", "mtext"]), Or = ke(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? Me(g.HTML_INTEGRATION_POINTS) : ne({}, ["annotation-xml"]);
    const j = ke(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? Me(g.CUSTOM_ELEMENT_HANDLING) : mr(null);
    if (te = mr(null), ke(j, "tagNameCheck") && an(j.tagNameCheck) && (te.tagNameCheck = j.tagNameCheck), ke(j, "attributeNameCheck") && an(j.attributeNameCheck) && (te.attributeNameCheck = j.attributeNameCheck), ke(j, "allowCustomizedBuiltInElements") && typeof j.allowCustomizedBuiltInElements == "boolean" && (te.allowCustomizedBuiltInElements = j.allowCustomizedBuiltInElements), ct && (ot = !1), kt && (lt = !0), Ct && (R = ne({}, cs), M = mr(null), Ct.html === !0 && (ne(R, os), ne(M, ls)), Ct.svg === !0 && (ne(R, Ai), ne(M, Ti), ne(M, _n)), Ct.svgFilters === !0 && (ne(R, Si), ne(M, Ti), ne(M, _n)), Ct.mathMl === !0 && (ne(R, Di), ne(M, fs), ne(M, _n))), we.tagCheck = null, we.attributeCheck = null, ke(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? we.tagCheck = g.ADD_TAGS : Ne(g.ADD_TAGS) && (R === U && (R = Me(R)), ne(R, g.ADD_TAGS, fe))), ke(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? we.attributeCheck = g.ADD_ATTR : Ne(g.ADD_ATTR) && (M === X && (M = Me(M)), ne(M, g.ADD_ATTR, fe))), ke(g, "ADD_URI_SAFE_ATTR") && Ne(g.ADD_URI_SAFE_ATTR) && ne(Tr, g.ADD_URI_SAFE_ATTR, fe), ke(g, "FORBID_CONTENTS") && Ne(g.FORBID_CONTENTS) && (ze === ir && (ze = Me(ze)), ne(ze, g.FORBID_CONTENTS, fe)), ke(g, "ADD_FORBID_CONTENTS") && Ne(g.ADD_FORBID_CONTENTS) && (ze === ir && (ze = Me(ze)), ne(ze, g.ADD_FORBID_CONTENTS, fe)), Sr && (R["#text"] = !0), vt && ne(R, ["html", "head", "body"]), R.table && (ne(R, ["tbody"]), delete Ce.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw yn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw yn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      y = g.TRUSTED_TYPES_POLICY, F = y.createHTML("");
    } else
      y === void 0 && (y = Xf(d, i)), y !== null && typeof F == "string" && (F = y.createHTML(""));
    Pe && Pe(g), Pt = g;
  }, on = ne({}, [...Ai, ...Si, ...Vf]), At = ne({}, [...Di, ...$f]), hi = function(g) {
    let j = S(g);
    (!j || !j.tagName) && (j = {
      namespaceURI: Nt,
      tagName: "template"
    });
    const q = jr(g.tagName), ie = jr(j.tagName);
    return Et[g.namespaceURI] ? g.namespaceURI === ur ? j.namespaceURI === Ue ? q === "svg" : j.namespaceURI === wt ? q === "svg" && (ie === "annotation-xml" || rt[ie]) : !!on[q] : g.namespaceURI === wt ? j.namespaceURI === Ue ? q === "math" : j.namespaceURI === ur ? q === "math" && Or[ie] : !!At[q] : g.namespaceURI === Ue ? j.namespaceURI === ur && !Or[ie] || j.namespaceURI === wt && !rt[ie] ? !1 : !At[q] && (ci[q] || !on[q]) : !!(Gt === "application/xhtml+xml" && Et[g.namespaceURI]) : !1;
  }, He = function(g) {
    lr(t.removed, {
      element: g
    });
    try {
      S(g).removeChild(g);
    } catch {
      T(g);
    }
  }, St = function(g, j) {
    try {
      lr(t.removed, {
        attribute: j.getAttributeNode(g),
        from: j
      });
    } catch {
      lr(t.removed, {
        attribute: null,
        from: j
      });
    }
    if (j.removeAttribute(g), g === "is")
      if (lt || kt)
        try {
          He(j);
        } catch {
        }
      else
        try {
          j.setAttribute(g, "");
        } catch {
        }
  }, cn = function(g) {
    let j = null, q = null;
    if (Lt)
      g = "<remove></remove>" + g;
    else {
      const ye = is(g, /^[\r\n\t ]+/);
      q = ye && ye[0];
    }
    Gt === "application/xhtml+xml" && Nt === Ue && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const ie = y ? y.createHTML(g) : g;
    if (Nt === Ue)
      try {
        j = new h().parseFromString(ie, Gt);
      } catch {
      }
    if (!j || !j.documentElement) {
      j = Q.createDocument(Nt, "template", null);
      try {
        j.documentElement.innerHTML = sr ? F : ie;
      } catch {
      }
    }
    const ve = j.body || j.documentElement;
    return g && q && ve.insertBefore(r.createTextNode(q), ve.childNodes[0] || null), Nt === Ue ? ue.call(j, vt ? "html" : "body")[0] : vt ? j.documentElement : ve;
  }, ln = function(g) {
    return H.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Dt = function(g) {
    g.normalize();
    const j = H.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let q = j.nextNode();
    for (; q; ) {
      let ie = q.data;
      cr([x, k, D], (ve) => {
        ie = fr(ie, ve, " ");
      }), q.data = ie, q = j.nextNode();
    }
  }, Fr = function(g) {
    return g instanceof l && (typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || !(g.attributes instanceof p) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function");
  }, ar = function(g) {
    if (!w || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof w(g) == "number";
    } catch {
      return !1;
    }
  };
  function nt(J, g, j) {
    cr(J, (q) => {
      q.call(t, g, j, Pt);
    });
  }
  const fn = function(g) {
    let j = null;
    if (nt(E.beforeSanitizeElements, g, null), Fr(g))
      return He(g), !0;
    const q = fe(g.nodeName);
    if (nt(E.uponSanitizeElement, g, {
      tagName: q,
      allowedTags: R
    }), qt && g.hasChildNodes() && !ar(g.firstElementChild) && Oe(/<[/\w!]/g, g.innerHTML) && Oe(/<[/\w!]/g, g.textContent) || qt && g.namespaceURI === Ue && q === "style" && ar(g.firstElementChild) || g.nodeType === pr.progressingInstruction || qt && g.nodeType === pr.comment && Oe(/<[/\w]/g, g.data))
      return He(g), !0;
    if (Ce[q] || !(we.tagCheck instanceof Function && we.tagCheck(q)) && !R[q]) {
      if (!Ce[q] && or(q) && (te.tagNameCheck instanceof RegExp && Oe(te.tagNameCheck, q) || te.tagNameCheck instanceof Function && te.tagNameCheck(q)))
        return !1;
      if (Sr && !ze[q]) {
        const ie = S(g) || g.parentNode, ve = L(g) || g.childNodes;
        if (ve && ie) {
          const ye = ve.length;
          for (let Ie = ye - 1; Ie >= 0; --Ie) {
            const ht = C(ve[Ie], !0);
            ie.insertBefore(ht, I(g));
          }
        }
      }
      return He(g), !0;
    }
    return g instanceof o && !hi(g) || (q === "noscript" || q === "noembed" || q === "noframes") && Oe(/<\/no(script|embed|frames)/i, g.innerHTML) ? (He(g), !0) : (ct && g.nodeType === pr.text && (j = g.textContent, cr([x, k, D], (ie) => {
      j = fr(j, ie, " ");
    }), g.textContent !== j && (lr(t.removed, {
      element: g.cloneNode()
    }), g.textContent = j)), nt(E.afterSanitizeElements, g, null), !1);
  }, pn = function(g, j, q) {
    if (me[j] || Er && (j === "id" || j === "name") && (q in r || q in pi))
      return !1;
    const ie = M[j] || we.attributeCheck instanceof Function && we.attributeCheck(j, g);
    if (!(ot && !me[j] && Oe(A, j))) {
      if (!(tt && Oe(P, j))) {
        if (!ie || me[j]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(or(g) && (te.tagNameCheck instanceof RegExp && Oe(te.tagNameCheck, g) || te.tagNameCheck instanceof Function && te.tagNameCheck(g)) && (te.attributeNameCheck instanceof RegExp && Oe(te.attributeNameCheck, j) || te.attributeNameCheck instanceof Function && te.attributeNameCheck(j, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            j === "is" && te.allowCustomizedBuiltInElements && (te.tagNameCheck instanceof RegExp && Oe(te.tagNameCheck, q) || te.tagNameCheck instanceof Function && te.tagNameCheck(q)))
          ) return !1;
        } else if (!Tr[j]) {
          if (!Oe(N, fr(q, Z, ""))) {
            if (!((j === "src" || j === "xlink:href" || j === "href") && g !== "script" && us(q, "data:") === 0 && Dr[g])) {
              if (!(rn && !Oe(V, fr(q, Z, "")))) {
                if (q)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, di = ne({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), or = function(g) {
    return !di[jr(g)] && Oe($, g);
  }, hn = function(g) {
    nt(E.beforeSanitizeAttributes, g, null);
    const j = g.attributes;
    if (!j || Fr(g))
      return;
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: M,
      forceKeepAttr: void 0
    };
    let ie = j.length;
    for (; ie--; ) {
      const ve = j[ie], ye = ve.name, Ie = ve.namespaceURI, ht = ve.value, it = fe(ye), Lr = ht;
      let Ee = ye === "value" ? Lr : Lf(Lr);
      if (q.attrName = it, q.attrValue = Ee, q.keepAttr = !0, q.forceKeepAttr = void 0, nt(E.uponSanitizeAttribute, g, q), Ee = q.attrValue, Ar && (it === "id" || it === "name") && us(Ee, un) !== 0 && (St(ye, g), Ee = un + Ee), qt && Oe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ee)) {
        St(ye, g);
        continue;
      }
      if (it === "attributename" && is(Ee, "href")) {
        St(ye, g);
        continue;
      }
      if (q.forceKeepAttr)
        continue;
      if (!q.keepAttr) {
        St(ye, g);
        continue;
      }
      if (!nn && Oe(/\/>/i, Ee)) {
        St(ye, g);
        continue;
      }
      ct && cr([x, k, D], (mn) => {
        Ee = fr(Ee, mn, " ");
      });
      const dn = fe(g.nodeName);
      if (!pn(dn, it, Ee)) {
        St(ye, g);
        continue;
      }
      if (y && typeof d == "object" && typeof d.getAttributeType == "function" && !Ie)
        switch (d.getAttributeType(dn, it)) {
          case "TrustedHTML": {
            Ee = y.createHTML(Ee);
            break;
          }
          case "TrustedScriptURL": {
            Ee = y.createScriptURL(Ee);
            break;
          }
        }
      if (Ee !== Lr)
        try {
          Ie ? g.setAttributeNS(Ie, ye, Ee) : g.setAttribute(ye, Ee), Fr(g) ? He(g) : ns(t.removed);
        } catch {
          St(ye, g);
        }
    }
    nt(E.afterSanitizeAttributes, g, null);
  }, Rt = function(g) {
    let j = null;
    const q = ln(g);
    for (nt(E.beforeSanitizeShadowDOM, g, null); j = q.nextNode(); )
      nt(E.uponSanitizeShadowNode, j, null), fn(j), hn(j), j.content instanceof u && Rt(j.content);
    nt(E.afterSanitizeShadowDOM, g, null);
  }, jt = function(g) {
    if (g.nodeType === pr.element && g.shadowRoot instanceof u) {
      const ie = g.shadowRoot;
      jt(ie), Rt(ie);
    }
    const j = g.childNodes;
    if (!j)
      return;
    const q = [];
    cr(j, (ie) => {
      lr(q, ie);
    });
    for (const ie of q)
      jt(ie);
  };
  return t.sanitize = function(J) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, j = null, q = null, ie = null, ve = null;
    if (sr = !J, sr && (J = "<!-->"), typeof J != "string" && !ar(J) && (J = Bf(J), typeof J != "string"))
      throw yn("dirty is not a string, aborting");
    if (!t.isSupported)
      return J;
    if (wr || Ir(g), t.removed = [], typeof J == "string" && (ft = !1), ft) {
      const ht = J.nodeName;
      if (typeof ht == "string") {
        const it = fe(ht);
        if (!R[it] || Ce[it])
          throw yn("root node is forbidden and cannot be sanitized in-place");
      }
      jt(J);
    } else if (ar(J))
      j = cn("<!---->"), q = j.ownerDocument.importNode(J, !0), q.nodeType === pr.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? j = q : j.appendChild(q), jt(q);
    else {
      if (!lt && !ct && !vt && // eslint-disable-next-line unicorn/prefer-includes
      J.indexOf("<") === -1)
        return y && We ? y.createHTML(J) : J;
      if (j = cn(J), !j)
        return lt ? null : We ? F : "";
    }
    j && Lt && He(j.firstChild);
    const ye = ln(ft ? J : j);
    for (; ie = ye.nextNode(); )
      fn(ie), hn(ie), ie.content instanceof u && Rt(ie.content);
    if (ft)
      return ct && Dt(J), J;
    if (lt) {
      if (ct && Dt(j), kt)
        for (ve = z.call(j.ownerDocument); j.firstChild; )
          ve.appendChild(j.firstChild);
      else
        ve = j;
      return (M.shadowroot || M.shadowrootmode) && (ve = re.call(n, ve, !0)), ve;
    }
    let Ie = vt ? j.outerHTML : j.innerHTML;
    return vt && R["!doctype"] && j.ownerDocument && j.ownerDocument.doctype && j.ownerDocument.doctype.name && Oe(Zf, j.ownerDocument.doctype.name) && (Ie = "<!DOCTYPE " + j.ownerDocument.doctype.name + `>
` + Ie), ct && cr([x, k, D], (ht) => {
      Ie = fr(Ie, ht, " ");
    }), y && We ? y.createHTML(Ie) : Ie;
  }, t.setConfig = function() {
    let J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ir(J), wr = !0;
  }, t.clearConfig = function() {
    Pt = null, wr = !1;
  }, t.isValidAttribute = function(J, g, j) {
    Pt || Ir({});
    const q = fe(J), ie = fe(g);
    return pn(q, ie, j);
  }, t.addHook = function(J, g) {
    typeof g == "function" && lr(E[J], g);
  }, t.removeHook = function(J, g) {
    if (g !== void 0) {
      const j = If(E[J], g);
      return j === -1 ? void 0 : Ff(E[J], j, 1)[0];
    }
    return ns(E[J]);
  }, t.removeHooks = function(J) {
    E[J] = [];
  }, t.removeAllHooks = function() {
    E = hs();
  }, t;
}
var Qf = _a();
function va(e) {
  return typeof e != "string" ? e : Qf.sanitize(e, { ADD_ATTR: ["target"] });
}
const e0 = function(e) {
  const t = document.createElement("textarea");
  t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
};
function Kn(e, t = {}) {
  const { removeEmpty: r = ["span", "div", "i", "em"], collapseWrappers: n = ["span", "div", "i"], removeComments: i = !0, trimWhitespace: u = !0 } = t;
  if (!e || typeof e != "string") return e;
  const a = document.createElement("div");
  if (a.innerHTML = e, i) {
    const c = document.createTreeWalker(a, NodeFilter.SHOW_COMMENT);
    let f;
    for (; f = c.nextNode(); ) f.remove();
  }
  a.querySelectorAll("*").forEach((c) => {
    c.getAttributeNames().filter((f) => /^data-v-/.test(f)).forEach((f) => c.removeAttribute(f));
  });
  const s = n.join(",");
  let o = !0;
  for (; o; )
    o = !1, a.querySelectorAll(s).forEach((c) => {
      c.children.length === 1 && c.textContent.trim() === c.firstChild.textContent.trim() && !Array.from(c.attributes).some((f) => !/^data-v-/.test(f.name)) && (c.parentNode.insertBefore(c.firstChild, c), c.remove(), o = !0);
    });
  return r.length > 0 && a.querySelectorAll(r.join(",")).forEach((c) => {
    c.children.length === 0 && c.textContent.trim() === "" && !Array.from(c.attributes).some((f) => !/^data-v-/.test(f.name)) && c.remove();
  }), a.innerHTML;
}
function t0(e) {
  return Kn(e, { removeEmpty: ["span", "div", "i"], collapseWrappers: ["span", "div", "i"] });
}
const r0 = (e) => Kn(e, { removeEmpty: ["span", "div"], collapseWrappers: ["span", "div"] }), n0 = (e) => Kn(e, { removeEmpty: ["span"], collapseWrappers: ["span"] });
function Sn(e, t, r = {}) {
  var o, c, f, p, l, h;
  const { removeEmpty: n = ["span", "div"], collapseWrappers: i = ["span", "div"] } = r;
  if (!e) return null;
  if (e.componentOptions) {
    if ((o = e.children) != null && o.length) {
      const d = e.children.map((_) => Sn(_, t, r)).filter(Boolean);
      return d.length === 0 ? null : t(e.componentOptions.Ctor, { ...e.data, props: e.componentOptions.propsData }, d);
    }
    return e;
  }
  if (!e.tag) return (c = e.text) != null && c.trim() ? e.text : null;
  const u = e.tag.toLowerCase(), a = e.data || {};
  if (a.on || a.nativeOn || a.ref || a.directives || a.attrs || a.domProps || a.class || a.style) return s(e);
  if (i.includes(u) && ((f = e.children) == null ? void 0 : f.length) === 1 && !((p = e.text) != null && p.trim())) return Sn(e.children[0], t, r);
  if (n.includes(u) && !((l = e.children) != null && l.length) && !((h = e.text) != null && h.trim())) return null;
  return s(e);
  function s(d) {
    var C, T;
    const _ = (d.children || []).map((I) => Sn(I, t, r)).filter(Boolean);
    return _.length === 0 && !((C = d.text) != null && C.trim()) ? null : t(d.tag, d.data, ((T = d.text) == null ? void 0 : T.trim()) || _);
  }
}
function i0({ obj_request: e, encFn: t = null, decFn: r = null, cacheName: n = null }) {
  if (!e || Object.keys(e).length === 0) return null;
  let { data: i, url: u, head: a, method: s = "get", actions: o = [] } = e, c = i;
  t && typeof t == "function" && (c = t(e));
  let f;
  n && localStorage.getItem(`${n}_query`) == c && localStorage.getItem(`${n}_resp`) ? f = Promise.resolve({ body: localStorage.getItem(`${n}_resp`) }) : (f = fetch(u, {
    method: s.toUpperCase(),
    headers: { "Content-Type": "application/json", ...a || {} },
    body: s.toLowerCase() !== "get" ? JSON.stringify({ body: c }) : void 0
  }).then(async (p) => ({ body: await p.text(), status: p.status, ok: p.ok })), n && (localStorage.setItem(`${n}_query`, c), f.then((p) => localStorage.setItem(`${n}_resp`, p.body))));
  for (let p of o)
    f = f.then((l) => {
      let h = l;
      r && typeof r == "function" && (h = r(l, e));
      try {
        l.data = JSON.parse(h.body);
      } catch {
        l.data = h.body;
      }
      return l;
    }).then(p == null ? void 0 : p[0]).catch((l) => Promise.reject(l)).catch(p == null ? void 0 : p[1]);
  return f;
}
const u0 = (e, t = "en") => {
  const r = ["description", "keywords", "author", "viewport", "robots", "theme-color", "twitter:card", "twitter:site", "twitter:creator", "twitter:title", "twitter:description", "twitter:image"], n = ["og:title", "og:type", "og:url", "og:image", "og:description", "og:site_name", "og:locale"], i = [...r, ...n];
  if (e != null && e.title && (document.title = Jt(e.title, t)), e != null && e.favIcon) {
    let u = Jt(e.favIcon, t), a = document.querySelector('link[rel="icon"]') || document.createElement("link");
    a.rel = "icon", a.href = u, a.parentNode || document.head.appendChild(a);
  }
  Object.entries(e || {}).forEach(([u, a]) => {
    if (u === "title" || u === "favIcon" || !i.includes(u)) return;
    let s = Jt(a, t), o = n.includes(u) ? "property" : "name", c = document.querySelector(`meta[${o}='${u}']`);
    c ? c.content = s : (c = document.createElement("meta"), c.setAttribute(o, u), c.content = s, document.head.appendChild(c));
  });
}, s0 = (e = "lg", t = "en") => {
  try {
    const r = document.cookie.match(new RegExp(`(?:^|; )${e}=([^;]*)`));
    if (r) return decodeURIComponent(r[1]);
    const n = navigator.language || navigator.userLanguage;
    if (n) return n.split("-")[0];
  } catch {
  }
  return t;
};
var a0 = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 78, 5, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 266, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], ka = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 57, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 261, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7381, 42, 31, 98, 114, 8702, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4381, 3, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489], o0 = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫝᫠-᫫ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", Ca = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-Ƛ꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", Oi = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, Ii = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", c0 = {
  5: Ii,
  "5module": Ii + " export import",
  6: Ii + " const class extends export import super"
}, wa = /^in(stanceof)?$/, l0 = new RegExp("[" + Ca + "]"), f0 = new RegExp("[" + Ca + o0 + "]");
function iu(e, t) {
  for (var r = 65536, n = 0; n < t.length; n += 2) {
    if (r += t[n], r > e)
      return !1;
    if (r += t[n + 1], r >= e)
      return !0;
  }
  return !1;
}
function gt(e, t) {
  return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && l0.test(String.fromCharCode(e)) : t === !1 ? !1 : iu(e, ka);
}
function zt(e, t) {
  return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && f0.test(String.fromCharCode(e)) : t === !1 ? !1 : iu(e, ka) || iu(e, a0);
}
var ce = function(t, r) {
  r === void 0 && (r = {}), this.label = t, this.keyword = r.keyword, this.beforeExpr = !!r.beforeExpr, this.startsExpr = !!r.startsExpr, this.isLoop = !!r.isLoop, this.isAssign = !!r.isAssign, this.prefix = !!r.prefix, this.postfix = !!r.postfix, this.binop = r.binop || null, this.updateContext = null;
};
function Ze(e, t) {
  return new ce(e, { beforeExpr: !0, binop: t });
}
var Ye = { beforeExpr: !0 }, Be = { startsExpr: !0 }, xu = {};
function ae(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, xu[e] = new ce(e, t);
}
var m = {
  num: new ce("num", Be),
  regexp: new ce("regexp", Be),
  string: new ce("string", Be),
  name: new ce("name", Be),
  privateId: new ce("privateId", Be),
  eof: new ce("eof"),
  // Punctuation token types.
  bracketL: new ce("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new ce("]"),
  braceL: new ce("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new ce("}"),
  parenL: new ce("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new ce(")"),
  comma: new ce(",", Ye),
  semi: new ce(";", Ye),
  colon: new ce(":", Ye),
  dot: new ce("."),
  question: new ce("?", Ye),
  questionDot: new ce("?."),
  arrow: new ce("=>", Ye),
  template: new ce("template"),
  invalidTemplate: new ce("invalidTemplate"),
  ellipsis: new ce("...", Ye),
  backQuote: new ce("`", Be),
  dollarBraceL: new ce("${", { beforeExpr: !0, startsExpr: !0 }),
  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.
  eq: new ce("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new ce("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new ce("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new ce("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: Ze("||", 1),
  logicalAND: Ze("&&", 2),
  bitwiseOR: Ze("|", 3),
  bitwiseXOR: Ze("^", 4),
  bitwiseAND: Ze("&", 5),
  equality: Ze("==/!=/===/!==", 6),
  relational: Ze("</>/<=/>=", 7),
  bitShift: Ze("<</>>/>>>", 8),
  plusMin: new ce("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: Ze("%", 10),
  star: Ze("*", 10),
  slash: Ze("/", 10),
  starstar: new ce("**", { beforeExpr: !0 }),
  coalesce: Ze("??", 1),
  // Keyword token types.
  _break: ae("break"),
  _case: ae("case", Ye),
  _catch: ae("catch"),
  _continue: ae("continue"),
  _debugger: ae("debugger"),
  _default: ae("default", Ye),
  _do: ae("do", { isLoop: !0, beforeExpr: !0 }),
  _else: ae("else", Ye),
  _finally: ae("finally"),
  _for: ae("for", { isLoop: !0 }),
  _function: ae("function", Be),
  _if: ae("if"),
  _return: ae("return", Ye),
  _switch: ae("switch"),
  _throw: ae("throw", Ye),
  _try: ae("try"),
  _var: ae("var"),
  _const: ae("const"),
  _while: ae("while", { isLoop: !0 }),
  _with: ae("with"),
  _new: ae("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: ae("this", Be),
  _super: ae("super", Be),
  _class: ae("class", Be),
  _extends: ae("extends", Ye),
  _export: ae("export"),
  _import: ae("import", Be),
  _null: ae("null", Be),
  _true: ae("true", Be),
  _false: ae("false", Be),
  _in: ae("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: ae("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: ae("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: ae("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: ae("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, Ve = /\r\n?|\n|\u2028|\u2029/, p0 = new RegExp(Ve.source, "g");
function _r(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function Ea(e, t, r) {
  r === void 0 && (r = e.length);
  for (var n = t; n < r; n++) {
    var i = e.charCodeAt(n);
    if (_r(i))
      return n < r - 1 && i === 13 && e.charCodeAt(n + 1) === 10 ? n + 2 : n + 1;
  }
  return -1;
}
var Aa = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, Fe = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Sa = Object.prototype, h0 = Sa.hasOwnProperty, d0 = Sa.toString, vr = Object.hasOwn || (function(e, t) {
  return h0.call(e, t);
}), ds = Array.isArray || (function(e) {
  return d0.call(e) === "[object Array]";
}), ms = /* @__PURE__ */ Object.create(null);
function Vt(e) {
  return ms[e] || (ms[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
}
function Ot(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
var m0 = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, $r = function(t, r) {
  this.line = t, this.column = r;
};
$r.prototype.offset = function(t) {
  return new $r(this.line, this.column + t);
};
var Zn = function(t, r, n) {
  this.start = r, this.end = n, t.sourceFile !== null && (this.source = t.sourceFile);
};
function Da(e, t) {
  for (var r = 1, n = 0; ; ) {
    var i = Ea(e, n, t);
    if (i < 0)
      return new $r(r, t - n);
    ++r, n = i;
  }
}
var uu = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
  // either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
  // (2019), 11 (2020), 12 (2021), 13 (2022), 14 (2023), or `"latest"`
  // (the latest version the library supports). This influences
  // support for strict mode, the set of reserved words, and support
  // for new syntax features.
  ecmaVersion: null,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"`, `"module"` or `"commonjs"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called when
  // a semicolon is automatically inserted. It will be passed the
  // position of the inserted semicolon as an offset, and if
  // `locations` is enabled, it is given the location as a `{line,
  // column}` object as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: !1,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program, and an import.meta expression
  // in a script isn't considered an error.
  allowImportExportEverywhere: !1,
  // By default, await identifiers are allowed to appear at the top-level scope only if ecmaVersion >= 2022.
  // When enabled, await identifiers are allowed to appear at the top-level scope,
  // but they are still not allowed in non-async functions.
  allowAwaitOutsideFunction: null,
  // When enabled, super identifiers are not constrained to
  // appearing in methods and do not raise an error when they appear elsewhere.
  allowSuperOutsideMethod: null,
  // When enabled, hashbang directive in the beginning of file is
  // allowed and treated as a line comment. Enabled by default when
  // `ecmaVersion` >= 2023.
  allowHashBang: !1,
  // By default, the parser will verify that private properties are
  // only used in places where they are valid and have been declared.
  // Set this to false to turn such checks off.
  checkPrivateFields: !0,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: !1,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  // When this option has an array as value, objects representing the
  // comments are pushed to it.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: !1,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: !1
}, bs = !1;
function b0(e) {
  var t = {};
  for (var r in uu)
    t[r] = e && vr(e, r) ? e[r] : uu[r];
  if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!bs && typeof console == "object" && console.warn && (bs = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), ds(t.onToken)) {
    var n = t.onToken;
    t.onToken = function(i) {
      return n.push(i);
    };
  }
  if (ds(t.onComment) && (t.onComment = g0(t, t.onComment)), t.sourceType === "commonjs" && t.allowAwaitOutsideFunction)
    throw new Error("Cannot use allowAwaitOutsideFunction with sourceType: commonjs");
  return t;
}
function g0(e, t) {
  return function(r, n, i, u, a, s) {
    var o = {
      type: r ? "Block" : "Line",
      value: n,
      start: i,
      end: u
    };
    e.locations && (o.loc = new Zn(this, a, s)), e.ranges && (o.range = [i, u]), t.push(o);
  };
}
var er = 1, tr = 2, yu = 4, Ta = 8, _u = 16, Oa = 32, Yn = 64, Ia = 128, rr = 256, Yr = 512, Fa = 1024, Jn = er | tr | rr;
function vu(e, t) {
  return tr | (e ? yu : 0) | (t ? Ta : 0);
}
var Ln = 0, ku = 1, Ft = 2, La = 3, Na = 4, Pa = 5, Se = function(t, r, n) {
  this.options = t = b0(t), this.sourceFile = t.sourceFile, this.keywords = Vt(c0[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var i = "";
  t.allowReserved !== !0 && (i = Oi[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module" && (i += " await")), this.reservedWords = Vt(i);
  var u = (i ? i + " " : "") + Oi.strict;
  this.reservedWordsStrict = Vt(u), this.reservedWordsStrictBind = Vt(u + " " + Oi.strictBind), this.input = String(r), this.containsEsc = !1, n ? (this.pos = n, this.lineStart = this.input.lastIndexOf(`
`, n - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(Ve).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = m.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(
    this.options.sourceType === "commonjs" ? tr : er
  ), this.regexpState = null, this.privateNameStack = [];
}, Qe = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowReturn: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, allowUsing: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
Se.prototype.parse = function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
Qe.inFunction.get = function() {
  return (this.currentVarScope().flags & tr) > 0;
};
Qe.inGenerator.get = function() {
  return (this.currentVarScope().flags & Ta) > 0;
};
Qe.inAsync.get = function() {
  return (this.currentVarScope().flags & yu) > 0;
};
Qe.canAwait.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], r = t.flags;
    if (r & (rr | Yr))
      return !1;
    if (r & tr)
      return (r & yu) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
Qe.allowReturn.get = function() {
  return !!(this.inFunction || this.options.allowReturnOutsideFunction && this.currentVarScope().flags & er);
};
Qe.allowSuper.get = function() {
  var e = this.currentThisScope(), t = e.flags;
  return (t & Yn) > 0 || this.options.allowSuperOutsideMethod;
};
Qe.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & Ia) > 0;
};
Qe.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
Qe.allowNewDotTarget.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], r = t.flags;
    if (r & (rr | Yr) || r & tr && !(r & _u))
      return !0;
  }
  return !1;
};
Qe.allowUsing.get = function() {
  var e = this.currentScope(), t = e.flags;
  return !(t & Fa || !this.inModule && t & er);
};
Qe.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & rr) > 0;
};
Se.extend = function() {
  for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
  for (var n = this, i = 0; i < t.length; i++)
    n = t[i](n);
  return n;
};
Se.parse = function(t, r) {
  return new this(r, t).parse();
};
Se.parseExpressionAt = function(t, r, n) {
  var i = new this(n, t, r);
  return i.nextToken(), i.parseExpression();
};
Se.tokenizer = function(t, r) {
  return new this(r, t);
};
Object.defineProperties(Se.prototype, Qe);
var je = Se.prototype, x0 = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
je.strictDirective = function(e) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    Fe.lastIndex = e, e += Fe.exec(this.input)[0].length;
    var t = x0.exec(this.input.slice(e));
    if (!t)
      return !1;
    if ((t[1] || t[2]) === "use strict") {
      Fe.lastIndex = e + t[0].length;
      var r = Fe.exec(this.input), n = r.index + r[0].length, i = this.input.charAt(n);
      return i === ";" || i === "}" || Ve.test(r[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(i) || i === "!" && this.input.charAt(n + 1) === "=");
    }
    e += t[0].length, Fe.lastIndex = e, e += Fe.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
};
je.eat = function(e) {
  return this.type === e ? (this.next(), !0) : !1;
};
je.isContextual = function(e) {
  return this.type === m.name && this.value === e && !this.containsEsc;
};
je.eatContextual = function(e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
je.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
};
je.canInsertSemicolon = function() {
  return this.type === m.eof || this.type === m.braceR || Ve.test(this.input.slice(this.lastTokEnd, this.start));
};
je.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
je.semicolon = function() {
  !this.eat(m.semi) && !this.insertSemicolon() && this.unexpected();
};
je.afterTrailingComma = function(e, t) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
};
je.expect = function(e) {
  this.eat(e) || this.unexpected();
};
je.unexpected = function(e) {
  this.raise(e ?? this.start, "Unexpected token");
};
var Xn = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
je.checkPatternErrors = function(e, t) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var r = t ? e.parenthesizedAssign : e.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, t ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
je.checkExpressionErrors = function(e, t) {
  if (!e)
    return !1;
  var r = e.shorthandAssign, n = e.doubleProto;
  if (!t)
    return r >= 0 || n >= 0;
  r >= 0 && this.raise(r, "Shorthand property assignments are valid only in destructuring patterns"), n >= 0 && this.raiseRecoverable(n, "Redefinition of __proto__ property");
};
je.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
je.isSimpleAssignTarget = function(e) {
  return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var K = Se.prototype;
K.parseTopLevel = function(e) {
  var t = /* @__PURE__ */ Object.create(null);
  for (e.body || (e.body = []); this.type !== m.eof; ) {
    var r = this.parseStatement(null, !0, t);
    e.body.push(r);
  }
  if (this.inModule)
    for (var n = 0, i = Object.keys(this.undefinedExports); n < i.length; n += 1) {
      var u = i[n];
      this.raiseRecoverable(this.undefinedExports[u].start, "Export '" + u + "' is not defined");
    }
  return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType === "commonjs" ? "script" : this.options.sourceType, this.finishNode(e, "Program");
};
var Cu = { kind: "loop" }, y0 = { kind: "switch" };
K.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  Fe.lastIndex = this.pos;
  var t = Fe.exec(this.input), r = this.pos + t[0].length, n = this.fullCharCodeAt(r);
  if (n === 91 || n === 92)
    return !0;
  if (e)
    return !1;
  if (n === 123)
    return !0;
  if (gt(n)) {
    var i = r;
    do
      r += n <= 65535 ? 1 : 2;
    while (zt(n = this.fullCharCodeAt(r)));
    if (n === 92)
      return !0;
    var u = this.input.slice(i, r);
    if (!wa.test(u))
      return !0;
  }
  return !1;
};
K.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  Fe.lastIndex = this.pos;
  var e = Fe.exec(this.input), t = this.pos + e[0].length, r;
  return !Ve.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(zt(r = this.fullCharCodeAt(t + 8)) || r === 92));
};
K.isUsingKeyword = function(e, t) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(e ? "await" : "using"))
    return !1;
  Fe.lastIndex = this.pos;
  var r = Fe.exec(this.input), n = this.pos + r[0].length;
  if (Ve.test(this.input.slice(this.pos, n)))
    return !1;
  if (e) {
    var i = n + 5, u;
    if (this.input.slice(n, i) !== "using" || i === this.input.length || zt(u = this.fullCharCodeAt(i)) || u === 92)
      return !1;
    Fe.lastIndex = i;
    var a = Fe.exec(this.input);
    if (n = i + a[0].length, a && Ve.test(this.input.slice(i, n)))
      return !1;
  }
  var s = this.fullCharCodeAt(n);
  if (!gt(s) && s !== 92)
    return !1;
  var o = n;
  do
    n += s <= 65535 ? 1 : 2;
  while (zt(s = this.fullCharCodeAt(n)));
  if (s === 92)
    return !0;
  var c = this.input.slice(o, n);
  return !(wa.test(c) || t && c === "of");
};
K.isAwaitUsing = function(e) {
  return this.isUsingKeyword(!0, e);
};
K.isUsing = function(e) {
  return this.isUsingKeyword(!1, e);
};
K.parseStatement = function(e, t, r) {
  var n = this.type, i = this.startNode(), u;
  switch (this.isLet(e) && (n = m._var, u = "let"), n) {
    case m._break:
    case m._continue:
      return this.parseBreakContinueStatement(i, n.keyword);
    case m._debugger:
      return this.parseDebuggerStatement(i);
    case m._do:
      return this.parseDoStatement(i);
    case m._for:
      return this.parseForStatement(i);
    case m._function:
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(i, !1, !e);
    case m._class:
      return e && this.unexpected(), this.parseClass(i, !0);
    case m._if:
      return this.parseIfStatement(i);
    case m._return:
      return this.parseReturnStatement(i);
    case m._switch:
      return this.parseSwitchStatement(i);
    case m._throw:
      return this.parseThrowStatement(i);
    case m._try:
      return this.parseTryStatement(i);
    case m._const:
    case m._var:
      return u = u || this.value, e && u !== "var" && this.unexpected(), this.parseVarStatement(i, u);
    case m._while:
      return this.parseWhileStatement(i);
    case m._with:
      return this.parseWithStatement(i);
    case m.braceL:
      return this.parseBlock(!0, i);
    case m.semi:
      return this.parseEmptyStatement(i);
    case m._export:
    case m._import:
      if (this.options.ecmaVersion > 10 && n === m._import) {
        Fe.lastIndex = this.pos;
        var a = Fe.exec(this.input), s = this.pos + a[0].length, o = this.input.charCodeAt(s);
        if (o === 40 || o === 46)
          return this.parseExpressionStatement(i, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), n === m._import ? this.parseImport(i) : this.parseExport(i, r);
    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
    default:
      if (this.isAsyncFunction())
        return e && this.unexpected(), this.next(), this.parseFunctionStatement(i, !0, !e);
      var c = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
      if (c)
        return this.allowUsing || this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script` or in the bare case statement"), c === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(i, !1, c), this.semicolon(), this.finishNode(i, "VariableDeclaration");
      var f = this.value, p = this.parseExpression();
      return n === m.name && p.type === "Identifier" && this.eat(m.colon) ? this.parseLabeledStatement(i, f, p, e) : this.parseExpressionStatement(i, p);
  }
};
K.parseBreakContinueStatement = function(e, t) {
  var r = t === "break";
  this.next(), this.eat(m.semi) || this.insertSemicolon() ? e.label = null : this.type !== m.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var n = 0; n < this.labels.length; ++n) {
    var i = this.labels[n];
    if ((e.label == null || i.name === e.label.name) && (i.kind != null && (r || i.kind === "loop") || e.label && r))
      break;
  }
  return n === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, r ? "BreakStatement" : "ContinueStatement");
};
K.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
K.parseDoStatement = function(e) {
  return this.next(), this.labels.push(Cu), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(m._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(m.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
K.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(Cu), this.enterScope(0), this.expect(m.parenL), this.type === m.semi)
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var r = this.isLet();
  if (this.type === m._var || this.type === m._const || r) {
    var n = this.startNode(), i = r ? "let" : this.value;
    return this.next(), this.parseVar(n, !0, i), this.finishNode(n, "VariableDeclaration"), this.parseForAfterInit(e, n, t);
  }
  var u = this.isContextual("let"), a = !1, s = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
  if (s) {
    var o = this.startNode();
    return this.next(), s === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.parseVar(o, !0, s), this.finishNode(o, "VariableDeclaration"), this.parseForAfterInit(e, o, t);
  }
  var c = this.containsEsc, f = new Xn(), p = this.start, l = t > -1 ? this.parseExprSubscripts(f, "await") : this.parseExpression(!0, f);
  return this.type === m._in || (a = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === m._in && this.unexpected(t), e.await = !0) : a && this.options.ecmaVersion >= 8 && (l.start === p && !c && l.type === "Identifier" && l.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e.await = !1)), u && a && this.raise(l.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(l, !1, f), this.checkLValPattern(l), this.parseForIn(e, l)) : (this.checkExpressionErrors(f, !0), t > -1 && this.unexpected(t), this.parseFor(e, l));
};
K.parseForAfterInit = function(e, t, r) {
  return (this.type === m._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && t.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === m._in ? r > -1 && this.unexpected(r) : e.await = r > -1), this.parseForIn(e, t)) : (r > -1 && this.unexpected(r), this.parseFor(e, t));
};
K.parseFunctionStatement = function(e, t, r) {
  return this.next(), this.parseFunction(e, Vr | (r ? 0 : su), !1, t);
};
K.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(m._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
K.parseReturnStatement = function(e) {
  return this.allowReturn || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(m.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
K.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(m.braceL), this.labels.push(y0), this.enterScope(Fa);
  for (var t, r = !1; this.type !== m.braceR; )
    if (this.type === m._case || this.type === m._default) {
      var n = this.type === m._case;
      t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), n ? t.test = this.parseExpression() : (r && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), r = !0, t.test = null), this.expect(m.colon);
    } else
      t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
K.parseThrowStatement = function(e) {
  return this.next(), Ve.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var _0 = [];
K.parseCatchClauseParam = function() {
  var e = this.parseBindingAtom(), t = e.type === "Identifier";
  return this.enterScope(t ? Oa : 0), this.checkLValPattern(e, t ? Na : Ft), this.expect(m.parenR), e;
};
K.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === m._catch) {
    var t = this.startNode();
    this.next(), this.eat(m.parenL) ? t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
  }
  return e.finalizer = this.eat(m._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
};
K.parseVarStatement = function(e, t, r) {
  return this.next(), this.parseVar(e, !1, t, r), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
K.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(Cu), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
K.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
K.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
K.parseLabeledStatement = function(e, t, r, n) {
  for (var i = 0, u = this.labels; i < u.length; i += 1) {
    var a = u[i];
    a.name === t && this.raise(r.start, "Label '" + t + "' is already declared");
  }
  for (var s = this.type.isLoop ? "loop" : this.type === m._switch ? "switch" : null, o = this.labels.length - 1; o >= 0; o--) {
    var c = this.labels[o];
    if (c.statementStart === e.start)
      c.statementStart = this.start, c.kind = s;
    else
      break;
  }
  return this.labels.push({ name: t, kind: s, statementStart: this.start }), e.body = this.parseStatement(n ? n.indexOf("label") === -1 ? n + "label" : n : "label"), this.labels.pop(), e.label = r, this.finishNode(e, "LabeledStatement");
};
K.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
K.parseBlock = function(e, t, r) {
  for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(m.braceL), e && this.enterScope(0); this.type !== m.braceR; ) {
    var n = this.parseStatement(null);
    t.body.push(n);
  }
  return r && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
};
K.parseFor = function(e, t) {
  return e.init = t, this.expect(m.semi), e.test = this.type === m.semi ? null : this.parseExpression(), this.expect(m.semi), e.update = this.type === m.parenR ? null : this.parseExpression(), this.expect(m.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
};
K.parseForIn = function(e, t) {
  var r = this.type === m._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!r || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(
    t.start,
    (r ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ), e.left = t, e.right = r ? this.parseExpression() : this.parseMaybeAssign(), this.expect(m.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, r ? "ForInStatement" : "ForOfStatement");
};
K.parseVar = function(e, t, r, n) {
  for (e.declarations = [], e.kind = r; ; ) {
    var i = this.startNode();
    if (this.parseVarId(i, r), this.eat(m.eq) ? i.init = this.parseMaybeAssign(t) : !n && r === "const" && !(this.type === m._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !n && (r === "using" || r === "await using") && this.options.ecmaVersion >= 17 && this.type !== m._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + r + " declaration") : !n && i.id.type !== "Identifier" && !(t && (this.type === m._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : i.init = null, e.declarations.push(this.finishNode(i, "VariableDeclarator")), !this.eat(m.comma))
      break;
  }
  return e;
};
K.parseVarId = function(e, t) {
  e.id = t === "using" || t === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? ku : Ft, !1);
};
var Vr = 1, su = 2, Ra = 4;
K.parseFunction = function(e, t, r, n, i) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !n) && (this.type === m.star && t & su && this.unexpected(), e.generator = this.eat(m.star)), this.options.ecmaVersion >= 8 && (e.async = !!n), t & Vr && (e.id = t & Ra && this.type !== m.name ? null : this.parseIdent(), e.id && !(t & su) && this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? ku : Ft : La));
  var u = this.yieldPos, a = this.awaitPos, s = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(vu(e.async, e.generator)), t & Vr || (e.id = this.type === m.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, r, !1, i), this.yieldPos = u, this.awaitPos = a, this.awaitIdentPos = s, this.finishNode(e, t & Vr ? "FunctionDeclaration" : "FunctionExpression");
};
K.parseFunctionParams = function(e) {
  this.expect(m.parenL), e.params = this.parseBindingList(m.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
K.parseClass = function(e, t) {
  this.next();
  var r = this.strict;
  this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
  var n = this.enterClassBody(), i = this.startNode(), u = !1;
  for (i.body = [], this.expect(m.braceL); this.type !== m.braceR; ) {
    var a = this.parseClassElement(e.superClass !== null);
    a && (i.body.push(a), a.type === "MethodDefinition" && a.kind === "constructor" ? (u && this.raiseRecoverable(a.start, "Duplicate constructor in the same class"), u = !0) : a.key && a.key.type === "PrivateIdentifier" && v0(n, a) && this.raiseRecoverable(a.key.start, "Identifier '#" + a.key.name + "' has already been declared"));
  }
  return this.strict = r, this.next(), e.body = this.finishNode(i, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
K.parseClassElement = function(e) {
  if (this.eat(m.semi))
    return null;
  var t = this.options.ecmaVersion, r = this.startNode(), n = "", i = !1, u = !1, a = "method", s = !1;
  if (this.eatContextual("static")) {
    if (t >= 13 && this.eat(m.braceL))
      return this.parseClassStaticBlock(r), r;
    this.isClassElementNameStart() || this.type === m.star ? s = !0 : n = "static";
  }
  if (r.static = s, !n && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === m.star) && !this.canInsertSemicolon() ? u = !0 : n = "async"), !n && (t >= 9 || !u) && this.eat(m.star) && (i = !0), !n && !u && !i) {
    var o = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? a = o : n = o);
  }
  if (n ? (r.computed = !1, r.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), r.key.name = n, this.finishNode(r.key, "Identifier")) : this.parseClassElementName(r), t < 13 || this.type === m.parenL || a !== "method" || i || u) {
    var c = !r.static && Nn(r, "constructor"), f = c && e;
    c && a !== "method" && this.raise(r.key.start, "Constructor can't have get/set modifier"), r.kind = c ? "constructor" : a, this.parseClassMethod(r, i, u, f);
  } else
    this.parseClassField(r);
  return r;
};
K.isClassElementNameStart = function() {
  return this.type === m.name || this.type === m.privateId || this.type === m.num || this.type === m.string || this.type === m.bracketL || this.type.keyword;
};
K.parseClassElementName = function(e) {
  this.type === m.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = !1, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
};
K.parseClassMethod = function(e, t, r, n) {
  var i = e.key;
  e.kind === "constructor" ? (t && this.raise(i.start, "Constructor can't be a generator"), r && this.raise(i.start, "Constructor can't be an async method")) : e.static && Nn(e, "prototype") && this.raise(i.start, "Classes may not have a static property named prototype");
  var u = e.value = this.parseMethod(t, r, n);
  return e.kind === "get" && u.params.length !== 0 && this.raiseRecoverable(u.start, "getter should have no params"), e.kind === "set" && u.params.length !== 1 && this.raiseRecoverable(u.start, "setter should have exactly one param"), e.kind === "set" && u.params[0].type === "RestElement" && this.raiseRecoverable(u.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
};
K.parseClassField = function(e) {
  return Nn(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && Nn(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(m.eq) ? (this.enterScope(Yr | Yn), e.value = this.parseMaybeAssign(), this.exitScope()) : e.value = null, this.semicolon(), this.finishNode(e, "PropertyDefinition");
};
K.parseClassStaticBlock = function(e) {
  e.body = [];
  var t = this.labels;
  for (this.labels = [], this.enterScope(rr | Yn); this.type !== m.braceR; ) {
    var r = this.parseStatement(null);
    e.body.push(r);
  }
  return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
};
K.parseClassId = function(e, t) {
  this.type === m.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, Ft, !1)) : (t === !0 && this.unexpected(), e.id = null);
};
K.parseClassSuper = function(e) {
  e.superClass = this.eat(m._extends) ? this.parseExprSubscripts(null, !1) : null;
};
K.enterClassBody = function() {
  var e = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(e), e.declared;
};
K.exitClassBody = function() {
  var e = this.privateNameStack.pop(), t = e.declared, r = e.used;
  if (this.options.checkPrivateFields)
    for (var n = this.privateNameStack.length, i = n === 0 ? null : this.privateNameStack[n - 1], u = 0; u < r.length; ++u) {
      var a = r[u];
      vr(t, a.name) || (i ? i.used.push(a) : this.raiseRecoverable(a.start, "Private field '#" + a.name + "' must be declared in an enclosing class"));
    }
};
function v0(e, t) {
  var r = t.key.name, n = e[r], i = "true";
  return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (i = (t.static ? "s" : "i") + t.kind), n === "iget" && i === "iset" || n === "iset" && i === "iget" || n === "sget" && i === "sset" || n === "sset" && i === "sget" ? (e[r] = "true", !1) : n ? !0 : (e[r] = i, !1);
}
function Nn(e, t) {
  var r = e.computed, n = e.key;
  return !r && (n.type === "Identifier" && n.name === t || n.type === "Literal" && n.value === t);
}
K.parseExportAllDeclaration = function(e, t) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== m.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
};
K.parseExport = function(e, t) {
  if (this.next(), this.eat(m.star))
    return this.parseExportAllDeclaration(e, t);
  if (this.eat(m._default))
    return this.checkExport(t, "default", this.lastTokStart), e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
  if (this.shouldParseExportStatement())
    e.declaration = this.parseExportDeclaration(e), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id, e.declaration.id.start), e.specifiers = [], e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
  else {
    if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from"))
      this.type !== m.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause());
    else {
      for (var r = 0, n = e.specifiers; r < n.length; r += 1) {
        var i = n[r];
        this.checkUnreserved(i.local), this.checkLocalExport(i.local), i.local.type === "Literal" && this.raise(i.local.start, "A string literal cannot be used as an exported binding without `from`.");
      }
      e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
K.parseExportDeclaration = function(e) {
  return this.parseStatement(null);
};
K.parseExportDefaultDeclaration = function() {
  var e;
  if (this.type === m._function || (e = this.isAsyncFunction())) {
    var t = this.startNode();
    return this.next(), e && this.next(), this.parseFunction(t, Vr | Ra, !1, e);
  } else if (this.type === m._class) {
    var r = this.startNode();
    return this.parseClass(r, "nullableID");
  } else {
    var n = this.parseMaybeAssign();
    return this.semicolon(), n;
  }
};
K.checkExport = function(e, t, r) {
  e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), vr(e, t) && this.raiseRecoverable(r, "Duplicate export '" + t + "'"), e[t] = !0);
};
K.checkPatternExport = function(e, t) {
  var r = t.type;
  if (r === "Identifier")
    this.checkExport(e, t, t.start);
  else if (r === "ObjectPattern")
    for (var n = 0, i = t.properties; n < i.length; n += 1) {
      var u = i[n];
      this.checkPatternExport(e, u);
    }
  else if (r === "ArrayPattern")
    for (var a = 0, s = t.elements; a < s.length; a += 1) {
      var o = s[a];
      o && this.checkPatternExport(e, o);
    }
  else r === "Property" ? this.checkPatternExport(e, t.value) : r === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : r === "RestElement" && this.checkPatternExport(e, t.argument);
};
K.checkVariableExport = function(e, t) {
  if (e)
    for (var r = 0, n = t; r < n.length; r += 1) {
      var i = n[r];
      this.checkPatternExport(e, i.id);
    }
};
K.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
K.parseExportSpecifier = function(e) {
  var t = this.startNode();
  return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, this.checkExport(
    e,
    t.exported,
    t.exported.start
  ), this.finishNode(t, "ExportSpecifier");
};
K.parseExportSpecifiers = function(e) {
  var t = [], r = !0;
  for (this.expect(m.braceL); !this.eat(m.braceR); ) {
    if (r)
      r = !1;
    else if (this.expect(m.comma), this.afterTrailingComma(m.braceR))
      break;
    t.push(this.parseExportSpecifier(e));
  }
  return t;
};
K.parseImport = function(e) {
  return this.next(), this.type === m.string ? (e.specifiers = _0, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === m.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
K.parseImportSpecifier = function() {
  var e = this.startNode();
  return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e.imported), e.local = e.imported), this.checkLValSimple(e.local, Ft), this.finishNode(e, "ImportSpecifier");
};
K.parseImportDefaultSpecifier = function() {
  var e = this.startNode();
  return e.local = this.parseIdent(), this.checkLValSimple(e.local, Ft), this.finishNode(e, "ImportDefaultSpecifier");
};
K.parseImportNamespaceSpecifier = function() {
  var e = this.startNode();
  return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, Ft), this.finishNode(e, "ImportNamespaceSpecifier");
};
K.parseImportSpecifiers = function() {
  var e = [], t = !0;
  if (this.type === m.name && (e.push(this.parseImportDefaultSpecifier()), !this.eat(m.comma)))
    return e;
  if (this.type === m.star)
    return e.push(this.parseImportNamespaceSpecifier()), e;
  for (this.expect(m.braceL); !this.eat(m.braceR); ) {
    if (t)
      t = !1;
    else if (this.expect(m.comma), this.afterTrailingComma(m.braceR))
      break;
    e.push(this.parseImportSpecifier());
  }
  return e;
};
K.parseWithClause = function() {
  var e = [];
  if (!this.eat(m._with))
    return e;
  this.expect(m.braceL);
  for (var t = {}, r = !0; !this.eat(m.braceR); ) {
    if (r)
      r = !1;
    else if (this.expect(m.comma), this.afterTrailingComma(m.braceR))
      break;
    var n = this.parseImportAttribute(), i = n.key.type === "Identifier" ? n.key.name : n.key.value;
    vr(t, i) && this.raiseRecoverable(n.key.start, "Duplicate attribute key '" + i + "'"), t[i] = !0, e.push(n);
  }
  return e;
};
K.parseImportAttribute = function() {
  var e = this.startNode();
  return e.key = this.type === m.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(m.colon), this.type !== m.string && this.unexpected(), e.value = this.parseExprAtom(), this.finishNode(e, "ImportAttribute");
};
K.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === m.string) {
    var e = this.parseLiteral(this.value);
    return m0.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
  }
  return this.parseIdent(!0);
};
K.adaptDirectivePrologue = function(e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
};
K.isDirectiveCandidate = function(e) {
  return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && // Reject parenthesized strings.
  (this.input[e.start] === '"' || this.input[e.start] === "'");
};
var et = Se.prototype;
et.toAssignable = function(e, t, r) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case "Identifier":
        this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        e.type = "ObjectPattern", r && this.checkPatternErrors(r, !0);
        for (var n = 0, i = e.properties; n < i.length; n += 1) {
          var u = i[n];
          this.toAssignable(u, t), u.type === "RestElement" && (u.argument.type === "ArrayPattern" || u.argument.type === "ObjectPattern") && this.raise(u.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
        break;
      case "ArrayExpression":
        e.type = "ArrayPattern", r && this.checkPatternErrors(r, !0), this.toAssignableList(e.elements, t);
        break;
      case "SpreadElement":
        e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, r);
        break;
      case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!t)
          break;
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  else r && this.checkPatternErrors(r, !0);
  return e;
};
et.toAssignableList = function(e, t) {
  for (var r = e.length, n = 0; n < r; n++) {
    var i = e[n];
    i && this.toAssignable(i, t);
  }
  if (r) {
    var u = e[r - 1];
    this.options.ecmaVersion === 6 && t && u && u.type === "RestElement" && u.argument.type !== "Identifier" && this.unexpected(u.argument.start);
  }
  return e;
};
et.parseSpread = function(e) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
};
et.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== m.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
};
et.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case m.bracketL:
        var e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(m.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
      case m.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
et.parseBindingList = function(e, t, r, n) {
  for (var i = [], u = !0; !this.eat(e); )
    if (u ? u = !1 : this.expect(m.comma), t && this.type === m.comma)
      i.push(null);
    else {
      if (r && this.afterTrailingComma(e))
        break;
      if (this.type === m.ellipsis) {
        var a = this.parseRestBinding();
        this.parseBindingListItem(a), i.push(a), this.type === m.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
        break;
      } else
        i.push(this.parseAssignableListItem(n));
    }
  return i;
};
et.parseAssignableListItem = function(e) {
  var t = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(t), t;
};
et.parseBindingListItem = function(e) {
  return e;
};
et.parseMaybeDefault = function(e, t, r) {
  if (r = r || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(m.eq))
    return r;
  var n = this.startNodeAt(e, t);
  return n.left = r, n.right = this.parseMaybeAssign(), this.finishNode(n, "AssignmentPattern");
};
et.checkLValSimple = function(e, t, r) {
  t === void 0 && (t = Ln);
  var n = t !== Ln;
  switch (e.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (n ? "Binding " : "Assigning to ") + e.name + " in strict mode"), n && (t === Ft && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), r && (vr(r, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), r[e.name] = !0), t !== Pa && this.declareName(e.name, t, e.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      n && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return n && this.raiseRecoverable(e.start, "Binding parenthesized expression"), this.checkLValSimple(e.expression, t, r);
    default:
      this.raise(e.start, (n ? "Binding" : "Assigning to") + " rvalue");
  }
};
et.checkLValPattern = function(e, t, r) {
  switch (t === void 0 && (t = Ln), e.type) {
    case "ObjectPattern":
      for (var n = 0, i = e.properties; n < i.length; n += 1) {
        var u = i[n];
        this.checkLValInnerPattern(u, t, r);
      }
      break;
    case "ArrayPattern":
      for (var a = 0, s = e.elements; a < s.length; a += 1) {
        var o = s[a];
        o && this.checkLValInnerPattern(o, t, r);
      }
      break;
    default:
      this.checkLValSimple(e, t, r);
  }
};
et.checkLValInnerPattern = function(e, t, r) {
  switch (t === void 0 && (t = Ln), e.type) {
    case "Property":
      this.checkLValInnerPattern(e.value, t, r);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(e.left, t, r);
      break;
    case "RestElement":
      this.checkLValPattern(e.argument, t, r);
      break;
    default:
      this.checkLValPattern(e, t, r);
  }
};
var st = function(t, r, n, i, u) {
  this.token = t, this.isExpr = !!r, this.preserveSpace = !!n, this.override = i, this.generator = !!u;
}, xe = {
  b_stat: new st("{", !1),
  b_expr: new st("{", !0),
  b_tmpl: new st("${", !1),
  p_stat: new st("(", !1),
  p_expr: new st("(", !0),
  q_tmpl: new st("`", !0, !0, function(e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new st("function", !1),
  f_expr: new st("function", !0),
  f_expr_gen: new st("function", !0, !1, null, !0),
  f_gen: new st("function", !1, !1, null, !0)
}, kr = Se.prototype;
kr.initialContext = function() {
  return [xe.b_stat];
};
kr.curContext = function() {
  return this.context[this.context.length - 1];
};
kr.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === xe.f_expr || t === xe.f_stat ? !0 : e === m.colon && (t === xe.b_stat || t === xe.b_expr) ? !t.isExpr : e === m._return || e === m.name && this.exprAllowed ? Ve.test(this.input.slice(this.lastTokEnd, this.start)) : e === m._else || e === m.semi || e === m.eof || e === m.parenR || e === m.arrow ? !0 : e === m.braceL ? t === xe.b_stat : e === m._var || e === m._const || e === m.name ? !1 : !this.exprAllowed;
};
kr.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function")
      return t.generator;
  }
  return !1;
};
kr.updateContext = function(e) {
  var t, r = this.type;
  r.keyword && e === m.dot ? this.exprAllowed = !1 : (t = r.updateContext) ? t.call(this, e) : this.exprAllowed = r.beforeExpr;
};
kr.overrideContext = function(e) {
  this.curContext() !== e && (this.context[this.context.length - 1] = e);
};
m.parenR.updateContext = m.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === xe.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
};
m.braceL.updateContext = function(e) {
  this.context.push(this.braceIsBlock(e) ? xe.b_stat : xe.b_expr), this.exprAllowed = !0;
};
m.dollarBraceL.updateContext = function() {
  this.context.push(xe.b_tmpl), this.exprAllowed = !0;
};
m.parenL.updateContext = function(e) {
  var t = e === m._if || e === m._for || e === m._with || e === m._while;
  this.context.push(t ? xe.p_stat : xe.p_expr), this.exprAllowed = !0;
};
m.incDec.updateContext = function() {
};
m._function.updateContext = m._class.updateContext = function(e) {
  e.beforeExpr && e !== m._else && !(e === m.semi && this.curContext() !== xe.p_stat) && !(e === m._return && Ve.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === m.colon || e === m.braceL) && this.curContext() === xe.b_stat) ? this.context.push(xe.f_expr) : this.context.push(xe.f_stat), this.exprAllowed = !1;
};
m.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
};
m.backQuote.updateContext = function() {
  this.curContext() === xe.q_tmpl ? this.context.pop() : this.context.push(xe.q_tmpl), this.exprAllowed = !1;
};
m.star.updateContext = function(e) {
  if (e === m._function) {
    var t = this.context.length - 1;
    this.context[t] === xe.f_expr ? this.context[t] = xe.f_expr_gen : this.context[t] = xe.f_gen;
  }
  this.exprAllowed = !0;
};
m.name.updateContext = function(e) {
  var t = !1;
  this.options.ecmaVersion >= 6 && e !== m.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
};
var ee = Se.prototype;
ee.checkPropClash = function(e, t, r) {
  if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var n = e.key, i;
    switch (n.type) {
      case "Identifier":
        i = n.name;
        break;
      case "Literal":
        i = String(n.value);
        break;
      default:
        return;
    }
    var u = e.kind;
    if (this.options.ecmaVersion >= 6) {
      i === "__proto__" && u === "init" && (t.proto && (r ? r.doubleProto < 0 && (r.doubleProto = n.start) : this.raiseRecoverable(n.start, "Redefinition of __proto__ property")), t.proto = !0);
      return;
    }
    i = "$" + i;
    var a = t[i];
    if (a) {
      var s;
      u === "init" ? s = this.strict && a.init || a.get || a.set : s = a.init || a[u], s && this.raiseRecoverable(n.start, "Redefinition of property");
    } else
      a = t[i] = {
        init: !1,
        get: !1,
        set: !1
      };
    a[u] = !0;
  }
};
ee.parseExpression = function(e, t) {
  var r = this.start, n = this.startLoc, i = this.parseMaybeAssign(e, t);
  if (this.type === m.comma) {
    var u = this.startNodeAt(r, n);
    for (u.expressions = [i]; this.eat(m.comma); )
      u.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(u, "SequenceExpression");
  }
  return i;
};
ee.parseMaybeAssign = function(e, t, r) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var n = !1, i = -1, u = -1, a = -1;
  t ? (i = t.parenthesizedAssign, u = t.trailingComma, a = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new Xn(), n = !0);
  var s = this.start, o = this.startLoc;
  (this.type === m.parenL || this.type === m.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
  var c = this.parseMaybeConditional(e, t);
  if (r && (c = r.call(this, c, s, o)), this.type.isAssign) {
    var f = this.startNodeAt(s, o);
    return f.operator = this.value, this.type === m.eq && (c = this.toAssignable(c, !1, t)), n || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= c.start && (t.shorthandAssign = -1), this.type === m.eq ? this.checkLValPattern(c) : this.checkLValSimple(c), f.left = c, this.next(), f.right = this.parseMaybeAssign(e), a > -1 && (t.doubleProto = a), this.finishNode(f, "AssignmentExpression");
  } else
    n && this.checkExpressionErrors(t, !0);
  return i > -1 && (t.parenthesizedAssign = i), u > -1 && (t.trailingComma = u), c;
};
ee.parseMaybeConditional = function(e, t) {
  var r = this.start, n = this.startLoc, i = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t))
    return i;
  if (this.eat(m.question)) {
    var u = this.startNodeAt(r, n);
    return u.test = i, u.consequent = this.parseMaybeAssign(), this.expect(m.colon), u.alternate = this.parseMaybeAssign(e), this.finishNode(u, "ConditionalExpression");
  }
  return i;
};
ee.parseExprOps = function(e, t) {
  var r = this.start, n = this.startLoc, i = this.parseMaybeUnary(t, !1, !1, e);
  return this.checkExpressionErrors(t) || i.start === r && i.type === "ArrowFunctionExpression" ? i : this.parseExprOp(i, r, n, -1, e);
};
ee.parseExprOp = function(e, t, r, n, i) {
  var u = this.type.binop;
  if (u != null && (!i || this.type !== m._in) && u > n) {
    var a = this.type === m.logicalOR || this.type === m.logicalAND, s = this.type === m.coalesce;
    s && (u = m.logicalAND.binop);
    var o = this.value;
    this.next();
    var c = this.start, f = this.startLoc, p = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, i), c, f, u, i), l = this.buildBinary(t, r, e, p, o, a || s);
    return (a && this.type === m.coalesce || s && (this.type === m.logicalOR || this.type === m.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(l, t, r, n, i);
  }
  return e;
};
ee.buildBinary = function(e, t, r, n, i, u) {
  n.type === "PrivateIdentifier" && this.raise(n.start, "Private identifier can only be left side of binary expression");
  var a = this.startNodeAt(e, t);
  return a.left = r, a.operator = i, a.right = n, this.finishNode(a, u ? "LogicalExpression" : "BinaryExpression");
};
ee.parseMaybeUnary = function(e, t, r, n) {
  var i = this.start, u = this.startLoc, a;
  if (this.isContextual("await") && this.canAwait)
    a = this.parseAwait(n), t = !0;
  else if (this.type.prefix) {
    var s = this.startNode(), o = this.type === m.incDec;
    s.operator = this.value, s.prefix = !0, this.next(), s.argument = this.parseMaybeUnary(null, !0, o, n), this.checkExpressionErrors(e, !0), o ? this.checkLValSimple(s.argument) : this.strict && s.operator === "delete" && ja(s.argument) ? this.raiseRecoverable(s.start, "Deleting local variable in strict mode") : s.operator === "delete" && au(s.argument) ? this.raiseRecoverable(s.start, "Private fields can not be deleted") : t = !0, a = this.finishNode(s, o ? "UpdateExpression" : "UnaryExpression");
  } else if (!t && this.type === m.privateId)
    (n || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), a = this.parsePrivateIdent(), this.type !== m._in && this.unexpected();
  else {
    if (a = this.parseExprSubscripts(e, n), this.checkExpressionErrors(e))
      return a;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var c = this.startNodeAt(i, u);
      c.operator = this.value, c.prefix = !1, c.argument = a, this.checkLValSimple(a), this.next(), a = this.finishNode(c, "UpdateExpression");
    }
  }
  if (!r && this.eat(m.starstar))
    if (t)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(i, u, a, this.parseMaybeUnary(null, !1, !1, n), "**", !1);
  else
    return a;
};
function ja(e) {
  return e.type === "Identifier" || e.type === "ParenthesizedExpression" && ja(e.expression);
}
function au(e) {
  return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && au(e.expression) || e.type === "ParenthesizedExpression" && au(e.expression);
}
ee.parseExprSubscripts = function(e, t) {
  var r = this.start, n = this.startLoc, i = this.parseExprAtom(e, t);
  if (i.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return i;
  var u = this.parseSubscripts(i, r, n, !1, t);
  return e && u.type === "MemberExpression" && (e.parenthesizedAssign >= u.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= u.start && (e.parenthesizedBind = -1), e.trailingComma >= u.start && (e.trailingComma = -1)), u;
};
ee.parseSubscripts = function(e, t, r, n, i) {
  for (var u = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, a = !1; ; ) {
    var s = this.parseSubscript(e, t, r, n, u, a, i);
    if (s.optional && (a = !0), s === e || s.type === "ArrowFunctionExpression") {
      if (a) {
        var o = this.startNodeAt(t, r);
        o.expression = s, s = this.finishNode(o, "ChainExpression");
      }
      return s;
    }
    e = s;
  }
};
ee.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(m.arrow);
};
ee.parseSubscriptAsyncArrow = function(e, t, r, n) {
  return this.parseArrowExpression(this.startNodeAt(e, t), r, !0, n);
};
ee.parseSubscript = function(e, t, r, n, i, u, a) {
  var s = this.options.ecmaVersion >= 11, o = s && this.eat(m.questionDot);
  n && o && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var c = this.eat(m.bracketL);
  if (c || o && this.type !== m.parenL && this.type !== m.backQuote || this.eat(m.dot)) {
    var f = this.startNodeAt(t, r);
    f.object = e, c ? (f.property = this.parseExpression(), this.expect(m.bracketR)) : this.type === m.privateId && e.type !== "Super" ? f.property = this.parsePrivateIdent() : f.property = this.parseIdent(this.options.allowReserved !== "never"), f.computed = !!c, s && (f.optional = o), e = this.finishNode(f, "MemberExpression");
  } else if (!n && this.eat(m.parenL)) {
    var p = new Xn(), l = this.yieldPos, h = this.awaitPos, d = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var _ = this.parseExprList(m.parenR, this.options.ecmaVersion >= 8, !1, p);
    if (i && !o && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(p, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = l, this.awaitPos = h, this.awaitIdentPos = d, this.parseSubscriptAsyncArrow(t, r, _, a);
    this.checkExpressionErrors(p, !0), this.yieldPos = l || this.yieldPos, this.awaitPos = h || this.awaitPos, this.awaitIdentPos = d || this.awaitIdentPos;
    var C = this.startNodeAt(t, r);
    C.callee = e, C.arguments = _, s && (C.optional = o), e = this.finishNode(C, "CallExpression");
  } else if (this.type === m.backQuote) {
    (o || u) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var T = this.startNodeAt(t, r);
    T.tag = e, T.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(T, "TaggedTemplateExpression");
  }
  return e;
};
ee.parseExprAtom = function(e, t, r) {
  this.type === m.slash && this.readRegexp();
  var n, i = this.potentialArrowAt === this.start;
  switch (this.type) {
    case m._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), n = this.startNode(), this.next(), this.type === m.parenL && !this.allowDirectSuper && this.raise(n.start, "super() call outside constructor of a subclass"), this.type !== m.dot && this.type !== m.bracketL && this.type !== m.parenL && this.unexpected(), this.finishNode(n, "Super");
    case m._this:
      return n = this.startNode(), this.next(), this.finishNode(n, "ThisExpression");
    case m.name:
      var u = this.start, a = this.startLoc, s = this.containsEsc, o = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !s && o.name === "async" && !this.canInsertSemicolon() && this.eat(m._function))
        return this.overrideContext(xe.f_expr), this.parseFunction(this.startNodeAt(u, a), 0, !1, !0, t);
      if (i && !this.canInsertSemicolon()) {
        if (this.eat(m.arrow))
          return this.parseArrowExpression(this.startNodeAt(u, a), [o], !1, t);
        if (this.options.ecmaVersion >= 8 && o.name === "async" && this.type === m.name && !s && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return o = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(m.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(u, a), [o], !0, t);
      }
      return o;
    case m.regexp:
      var c = this.value;
      return n = this.parseLiteral(c.value), n.regex = { pattern: c.pattern, flags: c.flags }, n;
    case m.num:
    case m.string:
      return this.parseLiteral(this.value);
    case m._null:
    case m._true:
    case m._false:
      return n = this.startNode(), n.value = this.type === m._null ? null : this.type === m._true, n.raw = this.type.keyword, this.next(), this.finishNode(n, "Literal");
    case m.parenL:
      var f = this.start, p = this.parseParenAndDistinguishExpression(i, t);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(p) && (e.parenthesizedAssign = f), e.parenthesizedBind < 0 && (e.parenthesizedBind = f)), p;
    case m.bracketL:
      return n = this.startNode(), this.next(), n.elements = this.parseExprList(m.bracketR, !0, !0, e), this.finishNode(n, "ArrayExpression");
    case m.braceL:
      return this.overrideContext(xe.b_expr), this.parseObj(!1, e);
    case m._function:
      return n = this.startNode(), this.next(), this.parseFunction(n, 0);
    case m._class:
      return this.parseClass(this.startNode(), !1);
    case m._new:
      return this.parseNew();
    case m.backQuote:
      return this.parseTemplate();
    case m._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport(r) : this.unexpected();
    default:
      return this.parseExprAtomDefault();
  }
};
ee.parseExprAtomDefault = function() {
  this.unexpected();
};
ee.parseExprImport = function(e) {
  var t = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === m.parenL && !e)
    return this.parseDynamicImport(t);
  if (this.type === m.dot) {
    var r = this.startNodeAt(t.start, t.loc && t.loc.start);
    return r.name = "import", t.meta = this.finishNode(r, "Identifier"), this.parseImportMeta(t);
  } else
    this.unexpected();
};
ee.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16)
    this.eat(m.parenR) ? e.options = null : (this.expect(m.comma), this.afterTrailingComma(m.parenR) ? e.options = null : (e.options = this.parseMaybeAssign(), this.eat(m.parenR) || (this.expect(m.comma), this.afterTrailingComma(m.parenR) || this.unexpected())));
  else if (!this.eat(m.parenR)) {
    var t = this.start;
    this.eat(m.comma) && this.eat(m.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
ee.parseImportMeta = function(e) {
  this.next();
  var t = this.containsEsc;
  return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
};
ee.parseLiteral = function(e) {
  var t = this.startNode();
  return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.value != null ? t.value.toString() : t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
};
ee.parseParenExpression = function() {
  this.expect(m.parenL);
  var e = this.parseExpression();
  return this.expect(m.parenR), e;
};
ee.shouldParseArrow = function(e) {
  return !this.canInsertSemicolon();
};
ee.parseParenAndDistinguishExpression = function(e, t) {
  var r = this.start, n = this.startLoc, i, u = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var a = this.start, s = this.startLoc, o = [], c = !0, f = !1, p = new Xn(), l = this.yieldPos, h = this.awaitPos, d;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== m.parenR; )
      if (c ? c = !1 : this.expect(m.comma), u && this.afterTrailingComma(m.parenR, !0)) {
        f = !0;
        break;
      } else if (this.type === m.ellipsis) {
        d = this.start, o.push(this.parseParenItem(this.parseRestBinding())), this.type === m.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        o.push(this.parseMaybeAssign(!1, p, this.parseParenItem));
    var _ = this.lastTokEnd, C = this.lastTokEndLoc;
    if (this.expect(m.parenR), e && this.shouldParseArrow(o) && this.eat(m.arrow))
      return this.checkPatternErrors(p, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = l, this.awaitPos = h, this.parseParenArrowList(r, n, o, t);
    (!o.length || f) && this.unexpected(this.lastTokStart), d && this.unexpected(d), this.checkExpressionErrors(p, !0), this.yieldPos = l || this.yieldPos, this.awaitPos = h || this.awaitPos, o.length > 1 ? (i = this.startNodeAt(a, s), i.expressions = o, this.finishNodeAt(i, "SequenceExpression", _, C)) : i = o[0];
  } else
    i = this.parseParenExpression();
  if (this.options.preserveParens) {
    var T = this.startNodeAt(r, n);
    return T.expression = i, this.finishNode(T, "ParenthesizedExpression");
  } else
    return i;
};
ee.parseParenItem = function(e) {
  return e;
};
ee.parseParenArrowList = function(e, t, r, n) {
  return this.parseArrowExpression(this.startNodeAt(e, t), r, !1, n);
};
var k0 = [];
ee.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === m.dot) {
    var t = this.startNodeAt(e.start, e.loc && e.loc.start);
    t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
    var r = this.containsEsc;
    return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), r && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
  }
  var n = this.start, i = this.startLoc;
  return e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), n, i, !0, !1), this.eat(m.parenL) ? e.arguments = this.parseExprList(m.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = k0, this.finishNode(e, "NewExpression");
};
ee.parseTemplateElement = function(e) {
  var t = e.isTagged, r = this.startNode();
  return this.type === m.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), r.value = {
    raw: this.value.replace(/\r\n?/g, `
`),
    cooked: null
  }) : r.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), r.tail = this.type === m.backQuote, this.finishNode(r, "TemplateElement");
};
ee.parseTemplate = function(e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var r = this.startNode();
  this.next(), r.expressions = [];
  var n = this.parseTemplateElement({ isTagged: t });
  for (r.quasis = [n]; !n.tail; )
    this.type === m.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(m.dollarBraceL), r.expressions.push(this.parseExpression()), this.expect(m.braceR), r.quasis.push(n = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(r, "TemplateLiteral");
};
ee.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === m.name || this.type === m.num || this.type === m.string || this.type === m.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === m.star) && !Ve.test(this.input.slice(this.lastTokEnd, this.start));
};
ee.parseObj = function(e, t) {
  var r = this.startNode(), n = !0, i = {};
  for (r.properties = [], this.next(); !this.eat(m.braceR); ) {
    if (n)
      n = !1;
    else if (this.expect(m.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(m.braceR))
      break;
    var u = this.parseProperty(e, t);
    e || this.checkPropClash(u, i, t), r.properties.push(u);
  }
  return this.finishNode(r, e ? "ObjectPattern" : "ObjectExpression");
};
ee.parseProperty = function(e, t) {
  var r = this.startNode(), n, i, u, a;
  if (this.options.ecmaVersion >= 9 && this.eat(m.ellipsis))
    return e ? (r.argument = this.parseIdent(!1), this.type === m.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(r, "RestElement")) : (r.argument = this.parseMaybeAssign(!1, t), this.type === m.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(r, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (r.method = !1, r.shorthand = !1, (e || t) && (u = this.start, a = this.startLoc), e || (n = this.eat(m.star)));
  var s = this.containsEsc;
  return this.parsePropertyName(r), !e && !s && this.options.ecmaVersion >= 8 && !n && this.isAsyncProp(r) ? (i = !0, n = this.options.ecmaVersion >= 9 && this.eat(m.star), this.parsePropertyName(r)) : i = !1, this.parsePropertyValue(r, e, n, i, u, a, t, s), this.finishNode(r, "Property");
};
ee.parseGetterSetter = function(e) {
  var t = e.key.name;
  this.parsePropertyName(e), e.value = this.parseMethod(!1), e.kind = t;
  var r = e.kind === "get" ? 0 : 1;
  if (e.value.params.length !== r) {
    var n = e.value.start;
    e.kind === "get" ? this.raiseRecoverable(n, "getter should have no params") : this.raiseRecoverable(n, "setter should have exactly one param");
  } else
    e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
};
ee.parsePropertyValue = function(e, t, r, n, i, u, a, s) {
  (r || n) && this.type === m.colon && this.unexpected(), this.eat(m.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, a), e.kind = "init") : this.options.ecmaVersion >= 6 && this.type === m.parenL ? (t && this.unexpected(), e.method = !0, e.value = this.parseMethod(r, n), e.kind = "init") : !t && !s && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== m.comma && this.type !== m.braceR && this.type !== m.eq ? ((r || n) && this.unexpected(), this.parseGetterSetter(e)) : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((r || n) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = i), t ? e.value = this.parseMaybeDefault(i, u, this.copyNode(e.key)) : this.type === m.eq && a ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start), e.value = this.parseMaybeDefault(i, u, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.kind = "init", e.shorthand = !0) : this.unexpected();
};
ee.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(m.bracketL))
      return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(m.bracketR), e.key;
    e.computed = !1;
  }
  return e.key = this.type === m.num || this.type === m.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
ee.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
};
ee.parseMethod = function(e, t, r) {
  var n = this.startNode(), i = this.yieldPos, u = this.awaitPos, a = this.awaitIdentPos;
  return this.initFunction(n), this.options.ecmaVersion >= 6 && (n.generator = e), this.options.ecmaVersion >= 8 && (n.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(vu(t, n.generator) | Yn | (r ? Ia : 0)), this.expect(m.parenL), n.params = this.parseBindingList(m.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(n, !1, !0, !1), this.yieldPos = i, this.awaitPos = u, this.awaitIdentPos = a, this.finishNode(n, "FunctionExpression");
};
ee.parseArrowExpression = function(e, t, r, n) {
  var i = this.yieldPos, u = this.awaitPos, a = this.awaitIdentPos;
  return this.enterScope(vu(r, !1) | _u), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!r), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1, n), this.yieldPos = i, this.awaitPos = u, this.awaitIdentPos = a, this.finishNode(e, "ArrowFunctionExpression");
};
ee.parseFunctionBody = function(e, t, r, n) {
  var i = t && this.type !== m.braceL, u = this.strict, a = !1;
  if (i)
    e.body = this.parseMaybeAssign(n), e.expression = !0, this.checkParams(e, !1);
  else {
    var s = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!u || s) && (a = this.strictDirective(this.end), a && s && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var o = this.labels;
    this.labels = [], a && (this.strict = !0), this.checkParams(e, !u && !a && !t && !r && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, Pa), e.body = this.parseBlock(!1, void 0, a && !u), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = o;
  }
  this.exitScope();
};
ee.isSimpleParamList = function(e) {
  for (var t = 0, r = e; t < r.length; t += 1) {
    var n = r[t];
    if (n.type !== "Identifier")
      return !1;
  }
  return !0;
};
ee.checkParams = function(e, t) {
  for (var r = /* @__PURE__ */ Object.create(null), n = 0, i = e.params; n < i.length; n += 1) {
    var u = i[n];
    this.checkLValInnerPattern(u, ku, t ? null : r);
  }
};
ee.parseExprList = function(e, t, r, n) {
  for (var i = [], u = !0; !this.eat(e); ) {
    if (u)
      u = !1;
    else if (this.expect(m.comma), t && this.afterTrailingComma(e))
      break;
    var a = void 0;
    r && this.type === m.comma ? a = null : this.type === m.ellipsis ? (a = this.parseSpread(n), n && this.type === m.comma && n.trailingComma < 0 && (n.trailingComma = this.start)) : a = this.parseMaybeAssign(!1, n), i.push(a);
  }
  return i;
};
ee.checkUnreserved = function(e) {
  var t = e.start, r = e.end, n = e.name;
  if (this.inGenerator && n === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && n === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & Jn) && n === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (n === "arguments" || n === "await") && this.raise(t, "Cannot use " + n + " in class static initialization block"), this.keywords.test(n) && this.raise(t, "Unexpected keyword '" + n + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, r).indexOf("\\") !== -1)) {
    var i = this.strict ? this.reservedWordsStrict : this.reservedWords;
    i.test(n) && (!this.inAsync && n === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + n + "' is reserved"));
  }
};
ee.parseIdent = function(e) {
  var t = this.parseIdentNode();
  return this.next(!!e), this.finishNode(t, "Identifier"), e || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)), t;
};
ee.parseIdentNode = function() {
  var e = this.startNode();
  return this.type === m.name ? e.name = this.value : this.type.keyword ? (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = m.name) : this.unexpected(), e;
};
ee.parsePrivateIdent = function() {
  var e = this.startNode();
  return this.type === m.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e)), e;
};
ee.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === m.semi || this.canInsertSemicolon() || this.type !== m.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(m.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
};
ee.parseAwait = function(e) {
  this.awaitPos || (this.awaitPos = this.start);
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeUnary(null, !0, !1, e), this.finishNode(t, "AwaitExpression");
};
var Pn = Se.prototype;
Pn.raise = function(e, t) {
  var r = Da(this.input, e);
  t += " (" + r.line + ":" + r.column + ")", this.sourceFile && (t += " in " + this.sourceFile);
  var n = new SyntaxError(t);
  throw n.pos = e, n.loc = r, n.raisedAt = this.pos, n;
};
Pn.raiseRecoverable = Pn.raise;
Pn.curPosition = function() {
  if (this.options.locations)
    return new $r(this.curLine, this.pos - this.lineStart);
};
var Ht = Se.prototype, C0 = function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [];
};
Ht.enterScope = function(e) {
  this.scopeStack.push(new C0(e));
};
Ht.exitScope = function() {
  this.scopeStack.pop();
};
Ht.treatFunctionsAsVarInScope = function(e) {
  return e.flags & tr || !this.inModule && e.flags & er;
};
Ht.declareName = function(e, t, r) {
  var n = !1;
  if (t === Ft) {
    var i = this.currentScope();
    n = i.lexical.indexOf(e) > -1 || i.functions.indexOf(e) > -1 || i.var.indexOf(e) > -1, i.lexical.push(e), this.inModule && i.flags & er && delete this.undefinedExports[e];
  } else if (t === Na) {
    var u = this.currentScope();
    u.lexical.push(e);
  } else if (t === La) {
    var a = this.currentScope();
    this.treatFunctionsAsVar ? n = a.lexical.indexOf(e) > -1 : n = a.lexical.indexOf(e) > -1 || a.var.indexOf(e) > -1, a.functions.push(e);
  } else
    for (var s = this.scopeStack.length - 1; s >= 0; --s) {
      var o = this.scopeStack[s];
      if (o.lexical.indexOf(e) > -1 && !(o.flags & Oa && o.lexical[0] === e) || !this.treatFunctionsAsVarInScope(o) && o.functions.indexOf(e) > -1) {
        n = !0;
        break;
      }
      if (o.var.push(e), this.inModule && o.flags & er && delete this.undefinedExports[e], o.flags & Jn)
        break;
    }
  n && this.raiseRecoverable(r, "Identifier '" + e + "' has already been declared");
};
Ht.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
Ht.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
Ht.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (Jn | Yr | rr))
      return t;
  }
};
Ht.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (Jn | Yr | rr) && !(t.flags & _u))
      return t;
  }
};
var Qn = function(t, r, n) {
  this.type = "", this.start = r, this.end = 0, t.options.locations && (this.loc = new Zn(t, n)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [r, 0]);
}, Jr = Se.prototype;
Jr.startNode = function() {
  return new Qn(this, this.start, this.startLoc);
};
Jr.startNodeAt = function(e, t) {
  return new Qn(this, e, t);
};
function Ba(e, t, r, n) {
  return e.type = t, e.end = r, this.options.locations && (e.loc.end = n), this.options.ranges && (e.range[1] = r), e;
}
Jr.finishNode = function(e, t) {
  return Ba.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
Jr.finishNodeAt = function(e, t, r, n) {
  return Ba.call(this, e, t, r, n);
};
Jr.copyNode = function(e) {
  var t = new Qn(this, e.start, this.startLoc);
  for (var r in e)
    t[r] = e[r];
  return t;
};
var w0 = "Berf Beria_Erfe Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sidetic Sidt Sunu Sunuwar Tai_Yo Tayo Todhri Todr Tolong_Siki Tols Tulu_Tigalari Tutg Unknown Zzzz", Ma = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", Va = Ma + " Extended_Pictographic", $a = Va, Wa = $a + " EBase EComp EMod EPres ExtPict", za = Wa, E0 = za, A0 = {
  9: Ma,
  10: Va,
  11: $a,
  12: Wa,
  13: za,
  14: E0
}, S0 = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", D0 = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: S0
}, gs = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", Ua = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", Ha = Ua + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", qa = Ha + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", Ga = qa + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", Ka = Ga + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", T0 = Ka + " " + w0, O0 = {
  9: Ua,
  10: Ha,
  11: qa,
  12: Ga,
  13: Ka,
  14: T0
}, Za = {};
function I0(e) {
  var t = Za[e] = {
    binary: Vt(A0[e] + " " + gs),
    binaryOfStrings: Vt(D0[e]),
    nonBinary: {
      General_Category: Vt(gs),
      Script: Vt(O0[e])
    }
  };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
for (var Fi = 0, xs = [9, 10, 11, 12, 13, 14]; Fi < xs.length; Fi += 1) {
  var F0 = xs[Fi];
  I0(F0);
}
var G = Se.prototype, Rn = function(t, r) {
  this.parent = t, this.base = r || this;
};
Rn.prototype.separatedFrom = function(t) {
  for (var r = this; r; r = r.parent)
    for (var n = t; n; n = n.parent)
      if (r.base === n.base && r !== n)
        return !0;
  return !1;
};
Rn.prototype.sibling = function() {
  return new Rn(this.parent, this.base);
};
var xt = function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = Za[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
xt.prototype.reset = function(t, r, n) {
  var i = n.indexOf("v") !== -1, u = n.indexOf("u") !== -1;
  this.start = t | 0, this.source = r + "", this.flags = n, i && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = u && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = u && this.parser.options.ecmaVersion >= 9);
};
xt.prototype.raise = function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
xt.prototype.at = function(t, r) {
  r === void 0 && (r = !1);
  var n = this.source, i = n.length;
  if (t >= i)
    return -1;
  var u = n.charCodeAt(t);
  if (!(r || this.switchU) || u <= 55295 || u >= 57344 || t + 1 >= i)
    return u;
  var a = n.charCodeAt(t + 1);
  return a >= 56320 && a <= 57343 ? (u << 10) + a - 56613888 : u;
};
xt.prototype.nextIndex = function(t, r) {
  r === void 0 && (r = !1);
  var n = this.source, i = n.length;
  if (t >= i)
    return i;
  var u = n.charCodeAt(t), a;
  return !(r || this.switchU) || u <= 55295 || u >= 57344 || t + 1 >= i || (a = n.charCodeAt(t + 1)) < 56320 || a > 57343 ? t + 1 : t + 2;
};
xt.prototype.current = function(t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
xt.prototype.lookahead = function(t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
xt.prototype.advance = function(t) {
  t === void 0 && (t = !1), this.pos = this.nextIndex(this.pos, t);
};
xt.prototype.eat = function(t, r) {
  return r === void 0 && (r = !1), this.current(r) === t ? (this.advance(r), !0) : !1;
};
xt.prototype.eatChars = function(t, r) {
  r === void 0 && (r = !1);
  for (var n = this.pos, i = 0, u = t; i < u.length; i += 1) {
    var a = u[i], s = this.at(n, r);
    if (s === -1 || s !== a)
      return !1;
    n = this.nextIndex(n, r);
  }
  return this.pos = n, !0;
};
G.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, r = e.flags, n = !1, i = !1, u = 0; u < r.length; u++) {
    var a = r.charAt(u);
    t.indexOf(a) === -1 && this.raise(e.start, "Invalid regular expression flag"), r.indexOf(a, u + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"), a === "u" && (n = !0), a === "v" && (i = !0);
  }
  this.options.ecmaVersion >= 15 && n && i && this.raise(e.start, "Invalid regular expression flag");
};
function L0(e) {
  for (var t in e)
    return !0;
  return !1;
}
G.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && L0(e.groupNames) && (e.switchN = !0, this.regexp_pattern(e));
};
G.regexp_pattern = function(e) {
  e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames = /* @__PURE__ */ Object.create(null), e.backReferenceNames.length = 0, e.branchID = null, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(
    41
    /* ) */
  ) && e.raise("Unmatched ')'"), (e.eat(
    93
    /* ] */
  ) || e.eat(
    125
    /* } */
  )) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var t = 0, r = e.backReferenceNames; t < r.length; t += 1) {
    var n = r[t];
    e.groupNames[n] || e.raise("Invalid named capture referenced");
  }
};
G.regexp_disjunction = function(e) {
  var t = this.options.ecmaVersion >= 16;
  for (t && (e.branchID = new Rn(e.branchID, null)), this.regexp_alternative(e); e.eat(
    124
    /* | */
  ); )
    t && (e.branchID = e.branchID.sibling()), this.regexp_alternative(e);
  t && (e.branchID = e.branchID.parent), this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(
    123
    /* { */
  ) && e.raise("Lone quantifier brackets");
};
G.regexp_alternative = function(e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); )
    ;
};
G.regexp_eatTerm = function(e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), !0) : !1;
};
G.regexp_eatAssertion = function(e) {
  var t = e.pos;
  if (e.lastAssertionIsQuantifiable = !1, e.eat(
    94
    /* ^ */
  ) || e.eat(
    36
    /* $ */
  ))
    return !0;
  if (e.eat(
    92
    /* \ */
  )) {
    if (e.eat(
      66
      /* B */
    ) || e.eat(
      98
      /* b */
    ))
      return !0;
    e.pos = t;
  }
  if (e.eat(
    40
    /* ( */
  ) && e.eat(
    63
    /* ? */
  )) {
    var r = !1;
    if (this.options.ecmaVersion >= 9 && (r = e.eat(
      60
      /* < */
    )), e.eat(
      61
      /* = */
    ) || e.eat(
      33
      /* ! */
    ))
      return this.regexp_disjunction(e), e.eat(
        41
        /* ) */
      ) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !r, !0;
  }
  return e.pos = t, !1;
};
G.regexp_eatQuantifier = function(e, t) {
  return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(
    63
    /* ? */
  ), !0) : !1;
};
G.regexp_eatQuantifierPrefix = function(e, t) {
  return e.eat(
    42
    /* * */
  ) || e.eat(
    43
    /* + */
  ) || e.eat(
    63
    /* ? */
  ) || this.regexp_eatBracedQuantifier(e, t);
};
G.regexp_eatBracedQuantifier = function(e, t) {
  var r = e.pos;
  if (e.eat(
    123
    /* { */
  )) {
    var n = 0, i = -1;
    if (this.regexp_eatDecimalDigits(e) && (n = e.lastIntValue, e.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue), e.eat(
      125
      /* } */
    )))
      return i !== -1 && i < n && !t && e.raise("numbers out of order in {} quantifier"), !0;
    e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = r;
  }
  return !1;
};
G.regexp_eatAtom = function(e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
};
G.regexp_eatReverseSolidusAtomEscape = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatAtomEscape(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
G.regexp_eatUncapturingGroup = function(e) {
  var t = e.pos;
  if (e.eat(
    40
    /* ( */
  )) {
    if (e.eat(
      63
      /* ? */
    )) {
      if (this.options.ecmaVersion >= 16) {
        var r = this.regexp_eatModifiers(e), n = e.eat(
          45
          /* - */
        );
        if (r || n) {
          for (var i = 0; i < r.length; i++) {
            var u = r.charAt(i);
            r.indexOf(u, i + 1) > -1 && e.raise("Duplicate regular expression modifiers");
          }
          if (n) {
            var a = this.regexp_eatModifiers(e);
            !r && !a && e.current() === 58 && e.raise("Invalid regular expression modifiers");
            for (var s = 0; s < a.length; s++) {
              var o = a.charAt(s);
              (a.indexOf(o, s + 1) > -1 || r.indexOf(o) > -1) && e.raise("Duplicate regular expression modifiers");
            }
          }
        }
      }
      if (e.eat(
        58
        /* : */
      )) {
        if (this.regexp_disjunction(e), e.eat(
          41
          /* ) */
        ))
          return !0;
        e.raise("Unterminated group");
      }
    }
    e.pos = t;
  }
  return !1;
};
G.regexp_eatCapturingGroup = function(e) {
  if (e.eat(
    40
    /* ( */
  )) {
    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(
      41
      /* ) */
    ))
      return e.numCapturingParens += 1, !0;
    e.raise("Unterminated group");
  }
  return !1;
};
G.regexp_eatModifiers = function(e) {
  for (var t = "", r = 0; (r = e.current()) !== -1 && N0(r); )
    t += Ot(r), e.advance();
  return t;
};
function N0(e) {
  return e === 105 || e === 109 || e === 115;
}
G.regexp_eatExtendedAtom = function(e) {
  return e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
};
G.regexp_eatInvalidBracedQuantifier = function(e) {
  return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
};
G.regexp_eatSyntaxCharacter = function(e) {
  var t = e.current();
  return Ya(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Ya(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
G.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, r = 0; (r = e.current()) !== -1 && !Ya(r); )
    e.advance();
  return e.pos !== t;
};
G.regexp_eatExtendedPatternCharacter = function(e) {
  var t = e.current();
  return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 ? (e.advance(), !0) : !1;
};
G.regexp_groupSpecifier = function(e) {
  if (e.eat(
    63
    /* ? */
  )) {
    this.regexp_eatGroupName(e) || e.raise("Invalid group");
    var t = this.options.ecmaVersion >= 16, r = e.groupNames[e.lastStringValue];
    if (r)
      if (t)
        for (var n = 0, i = r; n < i.length; n += 1) {
          var u = i[n];
          u.separatedFrom(e.branchID) || e.raise("Duplicate capture group name");
        }
      else
        e.raise("Duplicate capture group name");
    t ? (r || (e.groupNames[e.lastStringValue] = [])).push(e.branchID) : e.groupNames[e.lastStringValue] = !0;
  }
};
G.regexp_eatGroupName = function(e) {
  if (e.lastStringValue = "", e.eat(
    60
    /* < */
  )) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(
      62
      /* > */
    ))
      return !0;
    e.raise("Invalid capture group name");
  }
  return !1;
};
G.regexp_eatRegExpIdentifierName = function(e) {
  if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += Ot(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += Ot(e.lastIntValue);
    return !0;
  }
  return !1;
};
G.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, r = this.options.ecmaVersion >= 11, n = e.current(r);
  return e.advance(r), n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (n = e.lastIntValue), P0(n) ? (e.lastIntValue = n, !0) : (e.pos = t, !1);
};
function P0(e) {
  return gt(e, !0) || e === 36 || e === 95;
}
G.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, r = this.options.ecmaVersion >= 11, n = e.current(r);
  return e.advance(r), n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (n = e.lastIntValue), R0(n) ? (e.lastIntValue = n, !0) : (e.pos = t, !1);
};
function R0(e) {
  return zt(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
G.regexp_eatAtomEscape = function(e) {
  return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? !0 : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
};
G.regexp_eatBackReference = function(e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var r = e.lastIntValue;
    if (e.switchU)
      return r > e.maxBackReference && (e.maxBackReference = r), !0;
    if (r <= e.numCapturingParens)
      return !0;
    e.pos = t;
  }
  return !1;
};
G.regexp_eatKGroupName = function(e) {
  if (e.eat(
    107
    /* k */
  )) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise("Invalid named reference");
  }
  return !1;
};
G.regexp_eatCharacterEscape = function(e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
};
G.regexp_eatCControlLetter = function(e) {
  var t = e.pos;
  if (e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatControlLetter(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
G.regexp_eatZero = function(e) {
  return e.current() === 48 && !ei(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), !0) : !1;
};
G.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 ? (e.lastIntValue = 13, e.advance(), !0) : !1;
};
G.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return Ja(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function Ja(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
G.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
  t === void 0 && (t = !1);
  var r = e.pos, n = t || e.switchU;
  if (e.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var i = e.lastIntValue;
      if (n && i >= 55296 && i <= 56319) {
        var u = e.pos;
        if (e.eat(
          92
          /* \ */
        ) && e.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(e, 4)) {
          var a = e.lastIntValue;
          if (a >= 56320 && a <= 57343)
            return e.lastIntValue = (i - 55296) * 1024 + (a - 56320) + 65536, !0;
        }
        e.pos = u, e.lastIntValue = i;
      }
      return !0;
    }
    if (n && e.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(e) && e.eat(
      125
      /* } */
    ) && j0(e.lastIntValue))
      return !0;
    n && e.raise("Invalid unicode escape"), e.pos = r;
  }
  return !1;
};
function j0(e) {
  return e >= 0 && e <= 1114111;
}
G.regexp_eatIdentityEscape = function(e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(
      47
      /* / */
    ) ? (e.lastIntValue = 47, !0) : !1;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
G.regexp_eatDecimalEscape = function(e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do
      e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
    while ((t = e.current()) >= 48 && t <= 57);
    return !0;
  }
  return !1;
};
var Xa = 0, It = 1, Je = 2;
G.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (B0(t))
    return e.lastIntValue = -1, e.advance(), It;
  var r = !1;
  if (e.switchU && this.options.ecmaVersion >= 9 && ((r = t === 80) || t === 112)) {
    e.lastIntValue = -1, e.advance();
    var n;
    if (e.eat(
      123
      /* { */
    ) && (n = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(
      125
      /* } */
    ))
      return r && n === Je && e.raise("Invalid property name"), n;
    e.raise("Invalid property name");
  }
  return Xa;
};
function B0(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
G.regexp_eatUnicodePropertyValueExpression = function(e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(
    61
    /* = */
  )) {
    var r = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var n = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, r, n), It;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var i = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, i);
  }
  return Xa;
};
G.regexp_validateUnicodePropertyNameAndValue = function(e, t, r) {
  vr(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(r) || e.raise("Invalid property value");
};
G.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  if (e.unicodeProperties.binary.test(t))
    return It;
  if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t))
    return Je;
  e.raise("Invalid property name");
};
G.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Qa(t = e.current()); )
    e.lastStringValue += Ot(t), e.advance();
  return e.lastStringValue !== "";
};
function Qa(e) {
  return Ja(e) || e === 95;
}
G.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; M0(t = e.current()); )
    e.lastStringValue += Ot(t), e.advance();
  return e.lastStringValue !== "";
};
function M0(e) {
  return Qa(e) || ei(e);
}
G.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
G.regexp_eatCharacterClass = function(e) {
  if (e.eat(
    91
    /* [ */
  )) {
    var t = e.eat(
      94
      /* ^ */
    ), r = this.regexp_classContents(e);
    return e.eat(
      93
      /* ] */
    ) || e.raise("Unterminated character class"), t && r === Je && e.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
G.regexp_classContents = function(e) {
  return e.current() === 93 ? It : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), It);
};
G.regexp_nonEmptyClassRanges = function(e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(e)) {
      var r = e.lastIntValue;
      e.switchU && (t === -1 || r === -1) && e.raise("Invalid character class"), t !== -1 && r !== -1 && t > r && e.raise("Range out of order in character class");
    }
  }
};
G.regexp_eatClassAtom = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(e))
      return !0;
    if (e.switchU) {
      var r = e.current();
      (r === 99 || ro(r)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var n = e.current();
  return n !== 93 ? (e.lastIntValue = n, e.advance(), !0) : !1;
};
G.regexp_eatClassEscape = function(e) {
  var t = e.pos;
  if (e.eat(
    98
    /* b */
  ))
    return e.lastIntValue = 8, !0;
  if (e.switchU && e.eat(
    45
    /* - */
  ))
    return e.lastIntValue = 45, !0;
  if (!e.switchU && e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatClassControlLetter(e))
      return !0;
    e.pos = t;
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
};
G.regexp_classSetExpression = function(e) {
  var t = It, r;
  if (!this.regexp_eatClassSetRange(e)) if (r = this.regexp_eatClassSetOperand(e)) {
    r === Je && (t = Je);
    for (var n = e.pos; e.eatChars(
      [38, 38]
      /* && */
    ); ) {
      if (e.current() !== 38 && (r = this.regexp_eatClassSetOperand(e))) {
        r !== Je && (t = It);
        continue;
      }
      e.raise("Invalid character in character class");
    }
    if (n !== e.pos)
      return t;
    for (; e.eatChars(
      [45, 45]
      /* -- */
    ); )
      this.regexp_eatClassSetOperand(e) || e.raise("Invalid character in character class");
    if (n !== e.pos)
      return t;
  } else
    e.raise("Invalid character in character class");
  for (; ; )
    if (!this.regexp_eatClassSetRange(e)) {
      if (r = this.regexp_eatClassSetOperand(e), !r)
        return t;
      r === Je && (t = Je);
    }
};
G.regexp_eatClassSetRange = function(e) {
  var t = e.pos;
  if (this.regexp_eatClassSetCharacter(e)) {
    var r = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassSetCharacter(e)) {
      var n = e.lastIntValue;
      return r !== -1 && n !== -1 && r > n && e.raise("Range out of order in character class"), !0;
    }
    e.pos = t;
  }
  return !1;
};
G.regexp_eatClassSetOperand = function(e) {
  return this.regexp_eatClassSetCharacter(e) ? It : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
};
G.regexp_eatNestedClass = function(e) {
  var t = e.pos;
  if (e.eat(
    91
    /* [ */
  )) {
    var r = e.eat(
      94
      /* ^ */
    ), n = this.regexp_classContents(e);
    if (e.eat(
      93
      /* ] */
    ))
      return r && n === Je && e.raise("Negated character class may contain strings"), n;
    e.pos = t;
  }
  if (e.eat(
    92
    /* \ */
  )) {
    var i = this.regexp_eatCharacterClassEscape(e);
    if (i)
      return i;
    e.pos = t;
  }
  return null;
};
G.regexp_eatClassStringDisjunction = function(e) {
  var t = e.pos;
  if (e.eatChars(
    [92, 113]
    /* \q */
  )) {
    if (e.eat(
      123
      /* { */
    )) {
      var r = this.regexp_classStringDisjunctionContents(e);
      if (e.eat(
        125
        /* } */
      ))
        return r;
    } else
      e.raise("Invalid escape");
    e.pos = t;
  }
  return null;
};
G.regexp_classStringDisjunctionContents = function(e) {
  for (var t = this.regexp_classString(e); e.eat(
    124
    /* | */
  ); )
    this.regexp_classString(e) === Je && (t = Je);
  return t;
};
G.regexp_classString = function(e) {
  for (var t = 0; this.regexp_eatClassSetCharacter(e); )
    t++;
  return t === 1 ? It : Je;
};
G.regexp_eatClassSetCharacter = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  ))
    return this.regexp_eatCharacterEscape(e) || this.regexp_eatClassSetReservedPunctuator(e) ? !0 : e.eat(
      98
      /* b */
    ) ? (e.lastIntValue = 8, !0) : (e.pos = t, !1);
  var r = e.current();
  return r < 0 || r === e.lookahead() && V0(r) || $0(r) ? !1 : (e.advance(), e.lastIntValue = r, !0);
};
function V0(e) {
  return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
}
function $0(e) {
  return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
}
G.regexp_eatClassSetReservedPunctuator = function(e) {
  var t = e.current();
  return W0(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function W0(e) {
  return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
}
G.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return ei(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
G.regexp_eatHexEscapeSequence = function(e) {
  var t = e.pos;
  if (e.eat(
    120
    /* x */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 2))
      return !0;
    e.switchU && e.raise("Invalid escape"), e.pos = t;
  }
  return !1;
};
G.regexp_eatDecimalDigits = function(e) {
  var t = e.pos, r = 0;
  for (e.lastIntValue = 0; ei(r = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (r - 48), e.advance();
  return e.pos !== t;
};
function ei(e) {
  return e >= 48 && e <= 57;
}
G.regexp_eatHexDigits = function(e) {
  var t = e.pos, r = 0;
  for (e.lastIntValue = 0; eo(r = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + to(r), e.advance();
  return e.pos !== t;
};
function eo(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function to(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
G.regexp_eatLegacyOctalEscapeSequence = function(e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var r = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = t * 64 + r * 8 + e.lastIntValue : e.lastIntValue = t * 8 + r;
    } else
      e.lastIntValue = t;
    return !0;
  }
  return !1;
};
G.regexp_eatOctalDigit = function(e) {
  var t = e.current();
  return ro(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function ro(e) {
  return e >= 48 && e <= 55;
}
G.regexp_eatFixedHexDigits = function(e, t) {
  var r = e.pos;
  e.lastIntValue = 0;
  for (var n = 0; n < t; ++n) {
    var i = e.current();
    if (!eo(i))
      return e.pos = r, !1;
    e.lastIntValue = 16 * e.lastIntValue + to(i), e.advance();
  }
  return !0;
};
var wu = function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new Zn(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, se = Se.prototype;
se.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new wu(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
se.getToken = function() {
  return this.next(), new wu(this);
};
typeof Symbol < "u" && (se[Symbol.iterator] = function() {
  var e = this;
  return {
    next: function() {
      var t = e.getToken();
      return {
        done: t.type === m.eof,
        value: t
      };
    }
  };
});
se.nextToken = function() {
  var e = this.curContext();
  if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(m.eof);
  if (e.override)
    return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
se.readToken = function(e) {
  return gt(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
se.fullCharCodeAt = function(e) {
  var t = this.input.charCodeAt(e);
  if (t <= 55295 || t >= 56320)
    return t;
  var r = this.input.charCodeAt(e + 1);
  return r <= 56319 || r >= 57344 ? t : (t << 10) + r - 56613888;
};
se.fullCharCodeAtPos = function() {
  return this.fullCharCodeAt(this.pos);
};
se.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), t = this.pos, r = this.input.indexOf("*/", this.pos += 2);
  if (r === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = r + 2, this.options.locations)
    for (var n = void 0, i = t; (n = Ea(this.input, i, this.pos)) > -1; )
      ++this.curLine, i = this.lineStart = n;
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(t + 2, r),
    t,
    this.pos,
    e,
    this.curPosition()
  );
};
se.skipLineComment = function(e) {
  for (var t = this.pos, r = this.options.onComment && this.curPosition(), n = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !_r(n); )
    n = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(t + e, this.pos),
    t,
    this.pos,
    r,
    this.curPosition()
  );
};
se.skipSpace = function() {
  e: for (; this.pos < this.input.length; ) {
    var e = this.input.charCodeAt(this.pos);
    switch (e) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
      case 10:
      case 8232:
      case 8233:
        ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break e;
        }
        break;
      default:
        if (e > 8 && e < 14 || e >= 5760 && Aa.test(String.fromCharCode(e)))
          ++this.pos;
        else
          break e;
    }
  }
};
se.finishToken = function(e, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  this.type = e, this.value = t, this.updateContext(r);
};
se.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57)
    return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(m.ellipsis)) : (++this.pos, this.finishToken(m.dot));
};
se.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(m.assign, 2) : this.finishOp(m.slash, 1);
};
se.readToken_mult_modulo_exp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), r = 1, n = e === 42 ? m.star : m.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++r, n = m.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(m.assign, r + 1) : this.finishOp(n, r);
};
se.readToken_pipe_amp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61)
        return this.finishOp(m.assign, 3);
    }
    return this.finishOp(e === 124 ? m.logicalOR : m.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(m.assign, 2) : this.finishOp(e === 124 ? m.bitwiseOR : m.bitwiseAND, 1);
};
se.readToken_caret = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(m.assign, 2) : this.finishOp(m.bitwiseXOR, 1);
};
se.readToken_plus_min = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || Ve.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(m.incDec, 2) : t === 61 ? this.finishOp(m.assign, 2) : this.finishOp(m.plusMin, 1);
};
se.readToken_lt_gt = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), r = 1;
  return t === e ? (r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + r) === 61 ? this.finishOp(m.assign, r + 1) : this.finishOp(m.bitShift, r)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (r = 2), this.finishOp(m.relational, r));
};
se.readToken_eq_excl = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(m.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(m.arrow)) : this.finishOp(e === 61 ? m.eq : m.prefix, 1);
};
se.readToken_question = function() {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57)
        return this.finishOp(m.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var n = this.input.charCodeAt(this.pos + 2);
        if (n === 61)
          return this.finishOp(m.assign, 3);
      }
      return this.finishOp(m.coalesce, 2);
    }
  }
  return this.finishOp(m.question, 1);
};
se.readToken_numberSign = function() {
  var e = this.options.ecmaVersion, t = 35;
  if (e >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), gt(t, !0) || t === 92))
    return this.finishToken(m.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + Ot(t) + "'");
};
se.getTokenFromCode = function(e) {
  switch (e) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case 46:
      return this.readToken_dot();
    // Punctuation tokens.
    case 40:
      return ++this.pos, this.finishToken(m.parenL);
    case 41:
      return ++this.pos, this.finishToken(m.parenR);
    case 59:
      return ++this.pos, this.finishToken(m.semi);
    case 44:
      return ++this.pos, this.finishToken(m.comma);
    case 91:
      return ++this.pos, this.finishToken(m.bracketL);
    case 93:
      return ++this.pos, this.finishToken(m.bracketR);
    case 123:
      return ++this.pos, this.finishToken(m.braceL);
    case 125:
      return ++this.pos, this.finishToken(m.braceR);
    case 58:
      return ++this.pos, this.finishToken(m.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(m.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88)
        return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79)
          return this.readRadixNumber(8);
        if (t === 98 || t === 66)
          return this.readRadixNumber(2);
      }
    // Anything else beginning with a digit is an integer, octal
    // number, or float.
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    // Quotes produce strings.
    case 34:
    case 39:
      return this.readString(e);
    // Operators are parsed inline in tiny state machines. '=' (61) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(m.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + Ot(e) + "'");
};
se.finishOp = function(e, t) {
  var r = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, r);
};
se.readRegexp = function() {
  for (var e, t, r = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(r, "Unterminated regular expression");
    var n = this.input.charAt(this.pos);
    if (Ve.test(n) && this.raise(r, "Unterminated regular expression"), e)
      e = !1;
    else {
      if (n === "[")
        t = !0;
      else if (n === "]" && t)
        t = !1;
      else if (n === "/" && !t)
        break;
      e = n === "\\";
    }
    ++this.pos;
  }
  var i = this.input.slice(r, this.pos);
  ++this.pos;
  var u = this.pos, a = this.readWord1();
  this.containsEsc && this.unexpected(u);
  var s = this.regexpState || (this.regexpState = new xt(this));
  s.reset(r, i, a), this.validateRegExpFlags(s), this.validateRegExpPattern(s);
  var o = null;
  try {
    o = new RegExp(i, a);
  } catch {
  }
  return this.finishToken(m.regexp, { pattern: i, flags: a, value: o });
};
se.readInt = function(e, t, r) {
  for (var n = this.options.ecmaVersion >= 12 && t === void 0, i = r && this.input.charCodeAt(this.pos) === 48, u = this.pos, a = 0, s = 0, o = 0, c = t ?? 1 / 0; o < c; ++o, ++this.pos) {
    var f = this.input.charCodeAt(this.pos), p = void 0;
    if (n && f === 95) {
      i && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), s === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), o === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), s = f;
      continue;
    }
    if (f >= 97 ? p = f - 97 + 10 : f >= 65 ? p = f - 65 + 10 : f >= 48 && f <= 57 ? p = f - 48 : p = 1 / 0, p >= e)
      break;
    s = f, a = a * e + p;
  }
  return n && s === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === u || t != null && this.pos - u !== t ? null : a;
};
function z0(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function no(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
se.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var r = this.readInt(e);
  return r == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (r = no(this.input.slice(t, this.pos)), ++this.pos) : gt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(m.num, r);
};
se.readNumber = function(e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
  var r = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  r && this.strict && this.raise(t, "Invalid number");
  var n = this.input.charCodeAt(this.pos);
  if (!r && !e && this.options.ecmaVersion >= 11 && n === 110) {
    var i = no(this.input.slice(t, this.pos));
    return ++this.pos, gt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(m.num, i);
  }
  r && /[89]/.test(this.input.slice(t, this.pos)) && (r = !1), n === 46 && !r && (++this.pos, this.readInt(10), n = this.input.charCodeAt(this.pos)), (n === 69 || n === 101) && !r && (n = this.input.charCodeAt(++this.pos), (n === 43 || n === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), gt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var u = z0(this.input.slice(t, this.pos), r);
  return this.finishToken(m.num, u);
};
se.readCodePoint = function() {
  var e = this.input.charCodeAt(this.pos), t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(r, "Code point out of bounds");
  } else
    t = this.readHexChar(4);
  return t;
};
se.readString = function(e) {
  for (var t = "", r = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var n = this.input.charCodeAt(this.pos);
    if (n === e)
      break;
    n === 92 ? (t += this.input.slice(r, this.pos), t += this.readEscapedChar(!1), r = this.pos) : n === 8232 || n === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (_r(n) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(r, this.pos++), this.finishToken(m.string, t);
};
var io = {};
se.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === io)
      this.readInvalidTemplateToken();
    else
      throw e;
  }
  this.inTemplateElement = !1;
};
se.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw io;
  this.raise(e, t);
};
se.readTmplToken = function() {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || r === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === m.template || this.type === m.invalidTemplate) ? r === 36 ? (this.pos += 2, this.finishToken(m.dollarBraceL)) : (++this.pos, this.finishToken(m.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(m.template, e));
    if (r === 92)
      e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
    else if (_r(r)) {
      switch (e += this.input.slice(t, this.pos), ++this.pos, r) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
    } else
      ++this.pos;
  }
};
se.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{")
          break;
      // fall through
      case "`":
        return this.finishToken(m.invalidTemplate, this.input.slice(this.start, this.pos));
      case "\r":
        this.input[this.pos + 1] === `
` && ++this.pos;
      // fall through
      case `
`:
      case "\u2028":
      case "\u2029":
        ++this.curLine, this.lineStart = this.pos + 1;
        break;
    }
  this.raise(this.start, "Unterminated template");
};
se.readEscapedChar = function(e) {
  var t = this.input.charCodeAt(++this.pos);
  switch (++this.pos, t) {
    case 110:
      return `
`;
    // 'n' -> '\n'
    case 114:
      return "\r";
    // 'r' -> '\r'
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    // 'x'
    case 117:
      return Ot(this.readCodePoint());
    // 'u'
    case 116:
      return "	";
    // 't' -> '\t'
    case 98:
      return "\b";
    // 'b' -> '\b'
    case 118:
      return "\v";
    // 'v' -> '\u000b'
    case 102:
      return "\f";
    // 'f' -> '\f'
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    // '\r\n'
    case 10:
      return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
    case 56:
    case 57:
      if (this.strict && this.invalidStringToken(
        this.pos - 1,
        "Invalid escape sequence"
      ), e) {
        var r = this.pos - 1;
        this.invalidStringToken(
          r,
          "Invalid escape sequence in template string"
        );
      }
    default:
      if (t >= 48 && t <= 55) {
        var n = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], i = parseInt(n, 8);
        return i > 255 && (n = n.slice(0, -1), i = parseInt(n, 8)), this.pos += n.length - 1, t = this.input.charCodeAt(this.pos), (n !== "0" || t === 56 || t === 57) && (this.strict || e) && this.invalidStringToken(
          this.pos - 1 - n.length,
          e ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(i);
      }
      return _r(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
  }
};
se.readHexChar = function(e) {
  var t = this.pos, r = this.readInt(16, e);
  return r === null && this.invalidStringToken(t, "Bad character escape sequence"), r;
};
se.readWord1 = function() {
  this.containsEsc = !1;
  for (var e = "", t = !0, r = this.pos, n = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var i = this.fullCharCodeAtPos();
    if (zt(i, n))
      this.pos += i <= 65535 ? 1 : 2;
    else if (i === 92) {
      this.containsEsc = !0, e += this.input.slice(r, this.pos);
      var u = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var a = this.readCodePoint();
      (t ? gt : zt)(a, n) || this.invalidStringToken(u, "Invalid Unicode escape"), e += Ot(a), r = this.pos;
    } else
      break;
    t = !1;
  }
  return e + this.input.slice(r, this.pos);
};
se.readWord = function() {
  var e = this.readWord1(), t = m.name;
  return this.keywords.test(e) && (t = xu[e]), this.finishToken(t, e);
};
var U0 = "8.16.0";
Se.acorn = {
  Parser: Se,
  version: U0,
  defaultOptions: uu,
  Position: $r,
  SourceLocation: Zn,
  getLineInfo: Da,
  Node: Qn,
  TokenType: ce,
  tokTypes: m,
  keywordTypes: xu,
  TokContext: st,
  tokContexts: xe,
  isIdentifierChar: zt,
  isIdentifierStart: gt,
  Token: wu,
  isNewLine: _r,
  lineBreak: Ve,
  lineBreakG: p0,
  nonASCIIwhitespace: Aa
};
function ys(e, t) {
  return Se.parse(e, t);
}
function H0(e, t, r, n, i) {
  r || (r = W), (function u(a, s, o) {
    var c = o || a.type;
    q0(r, c, a, s, u), t[c] && t[c](a, s);
  })(e, n, i);
}
function Eu(e, t, r) {
  r(e, t);
}
function nr(e, t, r) {
}
function q0(e, t, r, n, i) {
  if (e[t] == null)
    throw new Error("No walker function defined for node type " + t);
  e[t](r, n, i);
}
var W = {};
W.Program = W.BlockStatement = W.StaticBlock = function(e, t, r) {
  for (var n = 0, i = e.body; n < i.length; n += 1) {
    var u = i[n];
    r(u, t, "Statement");
  }
};
W.Statement = Eu;
W.EmptyStatement = nr;
W.ExpressionStatement = W.ParenthesizedExpression = W.ChainExpression = function(e, t, r) {
  return r(e.expression, t, "Expression");
};
W.IfStatement = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.consequent, t, "Statement"), e.alternate && r(e.alternate, t, "Statement");
};
W.LabeledStatement = function(e, t, r) {
  return r(e.body, t, "Statement");
};
W.BreakStatement = W.ContinueStatement = nr;
W.WithStatement = function(e, t, r) {
  r(e.object, t, "Expression"), r(e.body, t, "Statement");
};
W.SwitchStatement = function(e, t, r) {
  r(e.discriminant, t, "Expression");
  for (var n = 0, i = e.cases; n < i.length; n += 1) {
    var u = i[n];
    r(u, t);
  }
};
W.SwitchCase = function(e, t, r) {
  e.test && r(e.test, t, "Expression");
  for (var n = 0, i = e.consequent; n < i.length; n += 1) {
    var u = i[n];
    r(u, t, "Statement");
  }
};
W.ReturnStatement = W.YieldExpression = W.AwaitExpression = function(e, t, r) {
  e.argument && r(e.argument, t, "Expression");
};
W.ThrowStatement = W.SpreadElement = function(e, t, r) {
  return r(e.argument, t, "Expression");
};
W.TryStatement = function(e, t, r) {
  r(e.block, t, "Statement"), e.handler && r(e.handler, t), e.finalizer && r(e.finalizer, t, "Statement");
};
W.CatchClause = function(e, t, r) {
  e.param && r(e.param, t, "Pattern"), r(e.body, t, "Statement");
};
W.WhileStatement = W.DoWhileStatement = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.body, t, "Statement");
};
W.ForStatement = function(e, t, r) {
  e.init && r(e.init, t, "ForInit"), e.test && r(e.test, t, "Expression"), e.update && r(e.update, t, "Expression"), r(e.body, t, "Statement");
};
W.ForInStatement = W.ForOfStatement = function(e, t, r) {
  r(e.left, t, "ForInit"), r(e.right, t, "Expression"), r(e.body, t, "Statement");
};
W.ForInit = function(e, t, r) {
  e.type === "VariableDeclaration" ? r(e, t) : r(e, t, "Expression");
};
W.DebuggerStatement = nr;
W.FunctionDeclaration = function(e, t, r) {
  return r(e, t, "Function");
};
W.VariableDeclaration = function(e, t, r) {
  for (var n = 0, i = e.declarations; n < i.length; n += 1) {
    var u = i[n];
    r(u, t);
  }
};
W.VariableDeclarator = function(e, t, r) {
  r(e.id, t, "Pattern"), e.init && r(e.init, t, "Expression");
};
W.Function = function(e, t, r) {
  e.id && r(e.id, t, "Pattern");
  for (var n = 0, i = e.params; n < i.length; n += 1) {
    var u = i[n];
    r(u, t, "Pattern");
  }
  r(e.body, t, e.expression ? "Expression" : "Statement");
};
W.Pattern = function(e, t, r) {
  e.type === "Identifier" ? r(e, t, "VariablePattern") : e.type === "MemberExpression" ? r(e, t, "MemberPattern") : r(e, t);
};
W.VariablePattern = nr;
W.MemberPattern = Eu;
W.RestElement = function(e, t, r) {
  return r(e.argument, t, "Pattern");
};
W.ArrayPattern = function(e, t, r) {
  for (var n = 0, i = e.elements; n < i.length; n += 1) {
    var u = i[n];
    u && r(u, t, "Pattern");
  }
};
W.ObjectPattern = function(e, t, r) {
  for (var n = 0, i = e.properties; n < i.length; n += 1) {
    var u = i[n];
    u.type === "Property" ? (u.computed && r(u.key, t, "Expression"), r(u.value, t, "Pattern")) : u.type === "RestElement" && r(u.argument, t, "Pattern");
  }
};
W.Expression = Eu;
W.ThisExpression = W.Super = W.MetaProperty = nr;
W.ArrayExpression = function(e, t, r) {
  for (var n = 0, i = e.elements; n < i.length; n += 1) {
    var u = i[n];
    u && r(u, t, "Expression");
  }
};
W.ObjectExpression = function(e, t, r) {
  for (var n = 0, i = e.properties; n < i.length; n += 1) {
    var u = i[n];
    r(u, t);
  }
};
W.FunctionExpression = W.ArrowFunctionExpression = W.FunctionDeclaration;
W.SequenceExpression = function(e, t, r) {
  for (var n = 0, i = e.expressions; n < i.length; n += 1) {
    var u = i[n];
    r(u, t, "Expression");
  }
};
W.TemplateLiteral = function(e, t, r) {
  for (var n = 0, i = e.quasis; n < i.length; n += 1) {
    var u = i[n];
    r(u, t);
  }
  for (var a = 0, s = e.expressions; a < s.length; a += 1) {
    var o = s[a];
    r(o, t, "Expression");
  }
};
W.TemplateElement = nr;
W.UnaryExpression = W.UpdateExpression = function(e, t, r) {
  r(e.argument, t, "Expression");
};
W.BinaryExpression = W.LogicalExpression = function(e, t, r) {
  r(e.left, t, "Expression"), r(e.right, t, "Expression");
};
W.AssignmentExpression = W.AssignmentPattern = function(e, t, r) {
  r(e.left, t, "Pattern"), r(e.right, t, "Expression");
};
W.ConditionalExpression = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.consequent, t, "Expression"), r(e.alternate, t, "Expression");
};
W.NewExpression = W.CallExpression = function(e, t, r) {
  if (r(e.callee, t, "Expression"), e.arguments)
    for (var n = 0, i = e.arguments; n < i.length; n += 1) {
      var u = i[n];
      r(u, t, "Expression");
    }
};
W.MemberExpression = function(e, t, r) {
  r(e.object, t, "Expression"), e.computed && r(e.property, t, "Expression");
};
W.ExportNamedDeclaration = W.ExportDefaultDeclaration = function(e, t, r) {
  if (e.declaration && r(e.declaration, t, e.type === "ExportNamedDeclaration" || e.declaration.id ? "Statement" : "Expression"), e.source && r(e.source, t, "Expression"), e.attributes)
    for (var n = 0, i = e.attributes; n < i.length; n += 1) {
      var u = i[n];
      r(u, t);
    }
};
W.ExportAllDeclaration = function(e, t, r) {
  if (e.exported && r(e.exported, t), r(e.source, t, "Expression"), e.attributes)
    for (var n = 0, i = e.attributes; n < i.length; n += 1) {
      var u = i[n];
      r(u, t);
    }
};
W.ImportAttribute = function(e, t, r) {
  r(e.value, t, "Expression");
};
W.ImportDeclaration = function(e, t, r) {
  for (var n = 0, i = e.specifiers; n < i.length; n += 1) {
    var u = i[n];
    r(u, t);
  }
  if (r(e.source, t, "Expression"), e.attributes)
    for (var a = 0, s = e.attributes; a < s.length; a += 1) {
      var o = s[a];
      r(o, t);
    }
};
W.ImportExpression = function(e, t, r) {
  r(e.source, t, "Expression"), e.options && r(e.options, t, "Expression");
};
W.ImportSpecifier = W.ImportDefaultSpecifier = W.ImportNamespaceSpecifier = W.Identifier = W.PrivateIdentifier = W.Literal = nr;
W.TaggedTemplateExpression = function(e, t, r) {
  r(e.tag, t, "Expression"), r(e.quasi, t, "Expression");
};
W.ClassDeclaration = W.ClassExpression = function(e, t, r) {
  return r(e, t, "Class");
};
W.Class = function(e, t, r) {
  e.id && r(e.id, t, "Pattern"), e.superClass && r(e.superClass, t, "Expression"), r(e.body, t);
};
W.ClassBody = function(e, t, r) {
  for (var n = 0, i = e.body; n < i.length; n += 1) {
    var u = i[n];
    r(u, t);
  }
};
W.MethodDefinition = W.PropertyDefinition = W.Property = function(e, t, r) {
  e.computed && r(e.key, t, "Expression"), e.value && r(e.value, t, "Expression");
};
const Li = ["constructor", "__proto__", "prototype", "getPrototypeOf", "setPrototypeOf", "callee"], Ni = ["globalThis", "eval", "Function", "window", "document", "process", "Reflect", "Object", "Array", "this", "arguments", "callee"];
function pe(e, t) {
  if (e != null)
    switch (e.type) {
      case "Program":
        return G0(e, t);
      case "ExpressionStatement":
        return pe(e.expression, t);
      case "BlockStatement":
        return Au(e, t);
      case "ReturnStatement":
        return e.argument ? pe(e.argument, t) : void 0;
      case "Literal":
        return e.value;
      case "Identifier":
        return t[e.name];
      case "ObjectExpression": {
        const r = {};
        for (const n of e.properties) {
          const i = n.computed ? pe(n.key, t) : n.key.type === "Identifier" ? n.key.name : n.key.value, u = pe(n.value, t);
          r[i] = u;
        }
        return r;
      }
      case "ArrayExpression":
        return e.elements.map((r) => r ? pe(r, t) : void 0);
      case "MemberExpression": {
        const r = pe(e.object, t), n = e.computed ? pe(e.property, t) : e.property.type === "Identifier" ? e.property.name : e.property.value;
        return r == null ? void 0 : r[n];
      }
      case "CallExpression": {
        const r = pe(e.callee, t);
        if (typeof r != "function") return;
        const n = e.arguments.map((i) => pe(i, t));
        return r(...n);
      }
      case "ArrowFunctionExpression":
        return K0(e, t);
      case "FunctionExpression":
        return Z0(e, t);
      case "BinaryExpression":
        return Y0(e, t);
      case "LogicalExpression":
        return J0(e, t);
      case "UnaryExpression":
        return X0(e, t);
      case "ConditionalExpression":
        return pe(e.test, t) ? pe(e.consequent, t) : pe(e.alternate, t);
      case "TemplateLiteral": {
        let r = "";
        for (let n = 0; n < e.quasis.length; n++)
          r += e.quasis[n].value.cooked, n < e.expressions.length && (r += String(pe(e.expressions[n], t)));
        return r;
      }
      case "SequenceExpression":
        return e.expressions.reduce((r, n) => pe(n, t), void 0);
      case "AssignmentExpression":
        return Q0(e, t);
      case "UpdateExpression":
        return ep(e, t);
      case "ThisExpression":
        return;
      case "NewExpression":
        throw new Error("Blocked: unsafe code pattern");
      case "VariableDeclaration":
        return;
      default:
        throw new Error(`[SafeEval] Unsupported AST node: ${e.type}`);
    }
}
function G0(e, t) {
  let r;
  for (const n of e.body)
    r = pe(n, t);
  return r;
}
function Au(e, t) {
  let r;
  for (const n of e.body)
    r = pe(n, t);
  return r;
}
function K0(e, t) {
  const r = e.params.map((n) => n.type === "Identifier" ? n.name : n.type === "RestElement" ? n.argument.name : null).filter(Boolean);
  return (...n) => {
    const i = Object.create(t);
    return r.forEach((u, a) => {
      i[u] = n[a];
    }), i.__proto__ = void 0, e.body.type === "BlockStatement" ? Au(e.body, i) : pe(e.body, i);
  };
}
function Z0(e, t) {
  const r = e.params.map((n) => n.type === "Identifier" ? n.name : n.type === "RestElement" ? n.argument.name : n.type === "AssignmentPattern" ? n.left.name : null).filter(Boolean);
  return function(...n) {
    const i = Object.create(t);
    return r.forEach((u, a) => {
      i[u] = n[a];
    }), i.__proto__ = void 0, Au(e.body, i);
  };
}
function Y0(e, t) {
  const r = pe(e.left, t), n = pe(e.right, t);
  switch (e.operator) {
    case "+":
      return r + n;
    case "-":
      return r - n;
    case "*":
      return r * n;
    case "/":
      return r / n;
    case "%":
      return r % n;
    case "**":
      return r ** n;
    case "==":
      return r == n;
    case "!=":
      return r != n;
    case "===":
      return r === n;
    case "!==":
      return r !== n;
    case "<":
      return r < n;
    case ">":
      return r > n;
    case "<=":
      return r <= n;
    case ">=":
      return r >= n;
    case "<<":
      return r << n;
    case ">>":
      return r >> n;
    case ">>>":
      return r >>> n;
    case "&":
      return r & n;
    case "|":
      return r | n;
    case "^":
      return r ^ n;
    case "in":
      return r in n;
    case "instanceof":
      return r instanceof n;
    default:
      return;
  }
}
function J0(e, t) {
  const r = pe(e.left, t);
  if (e.operator === "&&") return r && pe(e.right, t);
  if (e.operator === "||") return r || pe(e.right, t);
  if (e.operator === "??") return r ?? pe(e.right, t);
}
function X0(e, t) {
  const r = pe(e.argument, t);
  switch (e.operator) {
    case "-":
      return -r;
    case "+":
      return +r;
    case "!":
      return !r;
    case "~":
      return ~r;
    case "typeof":
      return typeof r;
    case "void":
      return;
    case "delete":
      return !0;
    default:
      return;
  }
}
function Q0(e, t) {
  const r = pe(e.right, t);
  if (e.left.type === "Identifier")
    t[e.left.name] = r;
  else if (e.left.type === "MemberExpression") {
    const n = pe(e.left.object, t), i = e.left.computed ? pe(e.left.property, t) : e.left.property.name;
    n != null && (n[i] = r);
  }
  switch (e.operator) {
    case "=":
      return r;
    case "+=":
      return t[e.left.name] = (t[e.left.name] || 0) + r;
    case "-=":
      return t[e.left.name] = (t[e.left.name] || 0) - r;
    case "*=":
      return t[e.left.name] = (t[e.left.name] || 0) * r;
    default:
      return r;
  }
}
function ep(e, t) {
  const r = e.argument.name, n = t[r] || 0;
  return e.operator === "++" && (t[r] = n + 1), e.operator === "--" && (t[r] = n - 1), e.prefix ? t[r] : n;
}
function tp(e) {
  const r = Object.assign(/* @__PURE__ */ Object.create(null), {
    window: void 0,
    document: void 0,
    fetch: void 0,
    localStorage: void 0,
    sessionStorage: void 0,
    process: void 0,
    global: void 0,
    XMLHttpRequest: void 0,
    globalThis: void 0,
    eval: void 0,
    Function: void 0,
    Reflect: void 0,
    Object: void 0,
    Array: void 0,
    setTimeout: void 0,
    setInterval: void 0,
    console: void 0,
    location: void 0,
    navigator: void 0
  }, e);
  return r.__proto__ = void 0, r;
}
const uo = (e, t = /* @__PURE__ */ new WeakSet()) => {
  if (e && typeof e == "object" && !Object.isFrozen(e)) {
    if (t.has(e) || (t.add(e), e._isVue || e instanceof Element)) return e;
    Object.freeze(e), Object.getOwnPropertyNames(e).forEach((r) => uo(e[r], t));
  }
  return e;
};
function so(e, t = {}, r = !1) {
  if (typeof e != "string" || !e.trim()) return e;
  const n = e.trim();
  let i;
  try {
    i = ys(n, { ecmaVersion: 2020 });
  } catch {
    try {
      i = ys(`(${n})`, { ecmaVersion: 2020 });
    } catch {
      r || console.error("[SafeEval Parse Error]", e);
      return;
    }
  }
  let u = !0;
  if (H0(i, {
    Identifier(s) {
      Ni.includes(s.name) && (u = !1);
    },
    Literal(s) {
      typeof s.value == "string" && Li.includes(s.value) && (u = !1);
    },
    MemberExpression(s) {
      !s.computed && s.property.type === "Identifier" && Li.includes(s.property.name) && (u = !1), s.computed && s.property.type !== "Literal" && (u = !1), s.computed && s.property.type === "Literal" && typeof s.property.value == "string" && Li.includes(s.property.value) && (u = !1);
    },
    CallExpression(s) {
      s.callee.type === "Identifier" && Ni.includes(s.callee.name) && (u = !1);
    },
    NewExpression(s) {
      s.callee.type === "Identifier" && Ni.includes(s.callee.name) && (u = !1);
    },
    ThisExpression() {
      u = !1;
    }
  }), !u)
    throw r || console.error("[SafeEval Error] Blocked by AST Validator."), new Error("Blocked: unsafe code pattern");
  Object.keys(t).forEach((s) => {
    typeof t[s] == "object" && t[s] !== null && uo(t[s]);
  });
  const a = tp(t);
  try {
    const s = pe(i, a);
    return typeof s == "function" && t && Object.keys(t).length > 0 ? s(t) : s;
  } catch (s) {
    r || console.error("[SafeEval] Interpreter Error", e, s);
    return;
  }
}
function rp(e) {
  if (typeof e != "string") return e;
  try {
    return JSON.parse(e);
  } catch {
    if (!(/[\(\)\{\}\[]/.test(e) || // parens/braces/brackets
    /[\+\-\*\/\%\?\:]/.test(e))) return e;
    const r = so(e, {}, !0);
    return r === void 0 ? e : r;
  }
}
const ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  aesDec: aa,
  aesEnc: sa,
  beautifyHtml: Xl,
  camelToKebab: Kl,
  capitalizeWords: zl,
  cleanMinimal: r0,
  cleanVueHtml: Kn,
  cleanVueVNode: Sn,
  clone: Wt,
  colorLibelle: bf,
  copyToClipboard: e0,
  detectLang: s0,
  extractSubObject: An,
  flattenArray: pa,
  fmtJS: uf,
  fmtJS2: sf,
  fmtJS4: af,
  formatCode: Jl,
  formatHtml: qn,
  formatHtml2: Ql,
  formatJS: Kr,
  formatJSON: gu,
  formatToStr: ql,
  generalVal: En,
  getObjectDepth: ia,
  indexMapWithSource: pf,
  isDate: cf,
  isEmpty: Zr,
  isNonEmpty: lf,
  isPlainObject: Qi,
  isVnode: Gn,
  json2: tf,
  json4: rf,
  logJS: of,
  mapObjectWithSource: la,
  mapWithSource: ff,
  mergeObjects: ca,
  minsToHours: Gl,
  objLang: Jt,
  paragraphsFromText: Yl,
  parse: df,
  parseTexFile: _f,
  pretty: ef,
  prettyJS: nf,
  project: fa,
  purifyHtml: t0,
  queryData: i0,
  randColLib: yf,
  randInt: da,
  randItem: ma,
  randomColor: gf,
  randomKey: xf,
  removeEmptySpans: n0,
  replaceInObject: vf,
  resolveValuesWithSource: eu,
  safeEval: so,
  sanitizeHtml: va,
  setMetaParams: u0,
  strToComps: ua,
  strToObj: rp,
  stringify: hf,
  textToParagraphs: Zl,
  titleCase: Ul,
  toTitleCase: Hl,
  today: ba,
  todayISO: ga,
  todayStr: kf,
  transfObj: tu,
  vuetifyColorList: ha
}, Symbol.toStringTag, { value: "Module" }));
function ao(e, t, r, n, i, u, a, s) {
  var o = typeof e == "function" ? e.options : e;
  return u && (o._scopeId = "data-v-" + u), {
    exports: e,
    options: o
  };
}
const np = {
  name: "WBLink",
  inheritAttrs: !1,
  props: {
    to: {},
    html: "",
    style_: {},
    attrs_: {},
    inactiveClass: String
  },
  render(e) {
    let t;
    if (t = {
      props: {},
      style: {
        "text-decoration": "none",
        ...this.style_
      }
    }, t.attrs = {
      href: this.to,
      ...this.attrs_
    }, this.to[this.to.length - 1] == ">" && (t.attrs.href = this.to.slice(0, -1), t.attrs.target = "_blank"), this.isInternalLink)
      return t.attrs = {
        ...this.attrs_
      }, t.props.to = this.to, e("RouterLink", t, [this.html]);
    if (typeof this.html == "object")
      return e("a", t, [this == null ? void 0 : this.html]);
    if (!this.to || !this.html)
      return e("span", t, this == null ? void 0 : this.html);
    if (t = {
      props: {},
      style: {
        "text-decoration": "none",
        ...this.style_
      },
      domProps: {
        innerHTML: va([this == null ? void 0 : this.html].join(""))
      },
      attrs: {
        href: this.to,
        ...this.attrs_
      }
    }, this.isExternalLink)
      return e("a", t);
  },
  computed: {
    isExternalLink() {
      return typeof this.to == "string";
    },
    isInternalLink() {
      return typeof this.to == "object";
    }
  },
  components: {},
  mounted() {
  }
}, ip = null, up = null;
var sp = /* @__PURE__ */ ao(
  np,
  ip,
  up,
  !1,
  null,
  null
);
const ri = sp.exports;
var Dn = { exports: {} }, Tn = { exports: {} };
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
var ap = Tn.exports, _s;
function oo() {
  return _s || (_s = 1, (function(e, t) {
    (function(n, i) {
      e.exports = i();
    })(ap, function() {
      return (
        /******/
        (function() {
          var r = {
            /***/
            686: (
              /***/
              (function(u, a, s) {
                s.d(a, {
                  default: function() {
                    return (
                      /* binding */
                      Z
                    );
                  }
                });
                var o = s(279), c = /* @__PURE__ */ s.n(o), f = s(370), p = /* @__PURE__ */ s.n(f), l = s(817), h = /* @__PURE__ */ s.n(l);
                function d($) {
                  try {
                    return document.execCommand($);
                  } catch {
                    return !1;
                  }
                }
                var _ = function(N) {
                  var R = h()(N);
                  return d("cut"), R;
                }, C = _;
                function T($) {
                  var N = document.documentElement.getAttribute("dir") === "rtl", R = document.createElement("textarea");
                  R.style.fontSize = "12pt", R.style.border = "0", R.style.padding = "0", R.style.margin = "0", R.style.position = "absolute", R.style[N ? "right" : "left"] = "-9999px";
                  var U = window.pageYOffset || document.documentElement.scrollTop;
                  return R.style.top = "".concat(U, "px"), R.setAttribute("readonly", ""), R.value = $, R;
                }
                var I = function(N, R) {
                  var U = T(N);
                  R.container.appendChild(U);
                  var M = h()(U);
                  return d("copy"), U.remove(), M;
                }, L = function(N) {
                  var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    container: document.body
                  }, U = "";
                  return typeof N == "string" ? U = I(N, R) : N instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(N == null ? void 0 : N.type) ? U = I(N.value, R) : (U = h()(N), d("copy")), U;
                }, S = L;
                function w($) {
                  "@babel/helpers - typeof";
                  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? w = function(R) {
                    return typeof R;
                  } : w = function(R) {
                    return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
                  }, w($);
                }
                var y = function() {
                  var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, R = N.action, U = R === void 0 ? "copy" : R, M = N.container, X = N.target, te = N.text;
                  if (U !== "copy" && U !== "cut")
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                  if (X !== void 0)
                    if (X && w(X) === "object" && X.nodeType === 1) {
                      if (U === "copy" && X.hasAttribute("disabled"))
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                      if (U === "cut" && (X.hasAttribute("readonly") || X.hasAttribute("disabled")))
                        throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                    } else
                      throw new Error('Invalid "target" value, use a valid Element');
                  if (te)
                    return S(te, {
                      container: M
                    });
                  if (X)
                    return U === "cut" ? C(X) : S(X, {
                      container: M
                    });
                }, F = y;
                function B($) {
                  "@babel/helpers - typeof";
                  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? B = function(R) {
                    return typeof R;
                  } : B = function(R) {
                    return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
                  }, B($);
                }
                function Q($, N) {
                  if (!($ instanceof N))
                    throw new TypeError("Cannot call a class as a function");
                }
                function H($, N) {
                  for (var R = 0; R < N.length; R++) {
                    var U = N[R];
                    U.enumerable = U.enumerable || !1, U.configurable = !0, "value" in U && (U.writable = !0), Object.defineProperty($, U.key, U);
                  }
                }
                function z($, N, R) {
                  return N && H($.prototype, N), R && H($, R), $;
                }
                function ue($, N) {
                  if (typeof N != "function" && N !== null)
                    throw new TypeError("Super expression must either be null or a function");
                  $.prototype = Object.create(N && N.prototype, { constructor: { value: $, writable: !0, configurable: !0 } }), N && re($, N);
                }
                function re($, N) {
                  return re = Object.setPrototypeOf || function(U, M) {
                    return U.__proto__ = M, U;
                  }, re($, N);
                }
                function E($) {
                  var N = D();
                  return function() {
                    var U = A($), M;
                    if (N) {
                      var X = A(this).constructor;
                      M = Reflect.construct(U, arguments, X);
                    } else
                      M = U.apply(this, arguments);
                    return x(this, M);
                  };
                }
                function x($, N) {
                  return N && (B(N) === "object" || typeof N == "function") ? N : k($);
                }
                function k($) {
                  if ($ === void 0)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return $;
                }
                function D() {
                  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                  if (typeof Proxy == "function") return !0;
                  try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                    })), !0;
                  } catch {
                    return !1;
                  }
                }
                function A($) {
                  return A = Object.setPrototypeOf ? Object.getPrototypeOf : function(R) {
                    return R.__proto__ || Object.getPrototypeOf(R);
                  }, A($);
                }
                function P($, N) {
                  var R = "data-clipboard-".concat($);
                  if (N.hasAttribute(R))
                    return N.getAttribute(R);
                }
                var V = /* @__PURE__ */ (function($) {
                  ue(R, $);
                  var N = E(R);
                  function R(U, M) {
                    var X;
                    return Q(this, R), X = N.call(this), X.resolveOptions(M), X.listenClick(U), X;
                  }
                  return z(R, [{
                    key: "resolveOptions",
                    value: function() {
                      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                      this.action = typeof M.action == "function" ? M.action : this.defaultAction, this.target = typeof M.target == "function" ? M.target : this.defaultTarget, this.text = typeof M.text == "function" ? M.text : this.defaultText, this.container = B(M.container) === "object" ? M.container : document.body;
                    }
                    /**
                     * Adds a click event listener to the passed trigger.
                     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                     */
                  }, {
                    key: "listenClick",
                    value: function(M) {
                      var X = this;
                      this.listener = p()(M, "click", function(te) {
                        return X.onClick(te);
                      });
                    }
                    /**
                     * Defines a new `ClipboardAction` on each click event.
                     * @param {Event} e
                     */
                  }, {
                    key: "onClick",
                    value: function(M) {
                      var X = M.delegateTarget || M.currentTarget, te = this.action(X) || "copy", Ce = F({
                        action: te,
                        container: this.container,
                        target: this.target(X),
                        text: this.text(X)
                      });
                      this.emit(Ce ? "success" : "error", {
                        action: te,
                        text: Ce,
                        trigger: X,
                        clearSelection: function() {
                          X && X.focus(), window.getSelection().removeAllRanges();
                        }
                      });
                    }
                    /**
                     * Default `action` lookup function.
                     * @param {Element} trigger
                     */
                  }, {
                    key: "defaultAction",
                    value: function(M) {
                      return P("action", M);
                    }
                    /**
                     * Default `target` lookup function.
                     * @param {Element} trigger
                     */
                  }, {
                    key: "defaultTarget",
                    value: function(M) {
                      var X = P("target", M);
                      if (X)
                        return document.querySelector(X);
                    }
                    /**
                     * Allow fire programmatically a copy action
                     * @param {String|HTMLElement} target
                     * @param {Object} options
                     * @returns Text copied.
                     */
                  }, {
                    key: "defaultText",
                    /**
                     * Default `text` lookup function.
                     * @param {Element} trigger
                     */
                    value: function(M) {
                      return P("text", M);
                    }
                    /**
                     * Destroy lifecycle.
                     */
                  }, {
                    key: "destroy",
                    value: function() {
                      this.listener.destroy();
                    }
                  }], [{
                    key: "copy",
                    value: function(M) {
                      var X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                        container: document.body
                      };
                      return S(M, X);
                    }
                    /**
                     * Allow fire programmatically a cut action
                     * @param {String|HTMLElement} target
                     * @returns Text cutted.
                     */
                  }, {
                    key: "cut",
                    value: function(M) {
                      return C(M);
                    }
                    /**
                     * Returns the support of the given action, or all actions if no action is
                     * given.
                     * @param {String} [action]
                     */
                  }, {
                    key: "isSupported",
                    value: function() {
                      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"], X = typeof M == "string" ? [M] : M, te = !!document.queryCommandSupported;
                      return X.forEach(function(Ce) {
                        te = te && !!document.queryCommandSupported(Ce);
                      }), te;
                    }
                  }]), R;
                })(c()), Z = V;
              })
            ),
            /***/
            828: (
              /***/
              (function(u) {
                var a = 9;
                if (typeof Element < "u" && !Element.prototype.matches) {
                  var s = Element.prototype;
                  s.matches = s.matchesSelector || s.mozMatchesSelector || s.msMatchesSelector || s.oMatchesSelector || s.webkitMatchesSelector;
                }
                function o(c, f) {
                  for (; c && c.nodeType !== a; ) {
                    if (typeof c.matches == "function" && c.matches(f))
                      return c;
                    c = c.parentNode;
                  }
                }
                u.exports = o;
              })
            ),
            /***/
            438: (
              /***/
              (function(u, a, s) {
                var o = s(828);
                function c(l, h, d, _, C) {
                  var T = p.apply(this, arguments);
                  return l.addEventListener(d, T, C), {
                    destroy: function() {
                      l.removeEventListener(d, T, C);
                    }
                  };
                }
                function f(l, h, d, _, C) {
                  return typeof l.addEventListener == "function" ? c.apply(null, arguments) : typeof d == "function" ? c.bind(null, document).apply(null, arguments) : (typeof l == "string" && (l = document.querySelectorAll(l)), Array.prototype.map.call(l, function(T) {
                    return c(T, h, d, _, C);
                  }));
                }
                function p(l, h, d, _) {
                  return function(C) {
                    C.delegateTarget = o(C.target, h), C.delegateTarget && _.call(l, C);
                  };
                }
                u.exports = f;
              })
            ),
            /***/
            879: (
              /***/
              (function(u, a) {
                a.node = function(s) {
                  return s !== void 0 && s instanceof HTMLElement && s.nodeType === 1;
                }, a.nodeList = function(s) {
                  var o = Object.prototype.toString.call(s);
                  return s !== void 0 && (o === "[object NodeList]" || o === "[object HTMLCollection]") && "length" in s && (s.length === 0 || a.node(s[0]));
                }, a.string = function(s) {
                  return typeof s == "string" || s instanceof String;
                }, a.fn = function(s) {
                  var o = Object.prototype.toString.call(s);
                  return o === "[object Function]";
                };
              })
            ),
            /***/
            370: (
              /***/
              (function(u, a, s) {
                var o = s(879), c = s(438);
                function f(d, _, C) {
                  if (!d && !_ && !C)
                    throw new Error("Missing required arguments");
                  if (!o.string(_))
                    throw new TypeError("Second argument must be a String");
                  if (!o.fn(C))
                    throw new TypeError("Third argument must be a Function");
                  if (o.node(d))
                    return p(d, _, C);
                  if (o.nodeList(d))
                    return l(d, _, C);
                  if (o.string(d))
                    return h(d, _, C);
                  throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                }
                function p(d, _, C) {
                  return d.addEventListener(_, C), {
                    destroy: function() {
                      d.removeEventListener(_, C);
                    }
                  };
                }
                function l(d, _, C) {
                  return Array.prototype.forEach.call(d, function(T) {
                    T.addEventListener(_, C);
                  }), {
                    destroy: function() {
                      Array.prototype.forEach.call(d, function(T) {
                        T.removeEventListener(_, C);
                      });
                    }
                  };
                }
                function h(d, _, C) {
                  return c(document.body, d, _, C);
                }
                u.exports = f;
              })
            ),
            /***/
            817: (
              /***/
              (function(u) {
                function a(s) {
                  var o;
                  if (s.nodeName === "SELECT")
                    s.focus(), o = s.value;
                  else if (s.nodeName === "INPUT" || s.nodeName === "TEXTAREA") {
                    var c = s.hasAttribute("readonly");
                    c || s.setAttribute("readonly", ""), s.select(), s.setSelectionRange(0, s.value.length), c || s.removeAttribute("readonly"), o = s.value;
                  } else {
                    s.hasAttribute("contenteditable") && s.focus();
                    var f = window.getSelection(), p = document.createRange();
                    p.selectNodeContents(s), f.removeAllRanges(), f.addRange(p), o = f.toString();
                  }
                  return o;
                }
                u.exports = a;
              })
            ),
            /***/
            279: (
              /***/
              (function(u) {
                function a() {
                }
                a.prototype = {
                  on: function(s, o, c) {
                    var f = this.e || (this.e = {});
                    return (f[s] || (f[s] = [])).push({
                      fn: o,
                      ctx: c
                    }), this;
                  },
                  once: function(s, o, c) {
                    var f = this;
                    function p() {
                      f.off(s, p), o.apply(c, arguments);
                    }
                    return p._ = o, this.on(s, p, c);
                  },
                  emit: function(s) {
                    var o = [].slice.call(arguments, 1), c = ((this.e || (this.e = {}))[s] || []).slice(), f = 0, p = c.length;
                    for (f; f < p; f++)
                      c[f].fn.apply(c[f].ctx, o);
                    return this;
                  },
                  off: function(s, o) {
                    var c = this.e || (this.e = {}), f = c[s], p = [];
                    if (f && o)
                      for (var l = 0, h = f.length; l < h; l++)
                        f[l].fn !== o && f[l].fn._ !== o && p.push(f[l]);
                    return p.length ? c[s] = p : delete c[s], this;
                  }
                }, u.exports = a, u.exports.TinyEmitter = a;
              })
            )
            /******/
          }, n = {};
          function i(u) {
            if (n[u])
              return n[u].exports;
            var a = n[u] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return r[u](a, a.exports, i), a.exports;
          }
          return (function() {
            i.n = function(u) {
              var a = u && u.__esModule ? (
                /******/
                function() {
                  return u.default;
                }
              ) : (
                /******/
                function() {
                  return u;
                }
              );
              return i.d(a, { a }), a;
            };
          })(), (function() {
            i.d = function(u, a) {
              for (var s in a)
                i.o(a, s) && !i.o(u, s) && Object.defineProperty(u, s, { enumerable: !0, get: a[s] });
            };
          })(), (function() {
            i.o = function(u, a) {
              return Object.prototype.hasOwnProperty.call(u, a);
            };
          })(), i(686);
        })().default
      );
    });
  })(Tn)), Tn.exports;
}
var op = Dn.exports, vs;
function cp() {
  return vs || (vs = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n(In, oo());
    })(op, function(r, n) {
      return a = {}, i.m = u = [function(s, o, c) {
        function f(p, l, h, d, _, C, T, I) {
          var L, S, w = typeof p == "function" ? p.options : p;
          return l && (w.render = l, w.staticRenderFns = h, w._compiled = !0), d && (w.functional = !0), C && (w._scopeId = "data-v-" + C), T ? (L = function(y) {
            (y = y || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || typeof __VUE_SSR_CONTEXT__ > "u" || (y = __VUE_SSR_CONTEXT__), _ && _.call(this, y), y && y._registeredComponents && y._registeredComponents.add(T);
          }, w._ssrRegister = L) : _ && (L = I ? function() {
            _.call(this, (w.functional ? this.parent : this).$root.$options.shadowRoot);
          } : _), L && (w.functional ? (w._injectStyles = L, S = w.render, w.render = function(y, F) {
            return L.call(F), S(y, F);
          }) : (I = w.beforeCreate, w.beforeCreate = I ? [].concat(I, L) : [L])), { exports: p, options: w };
        }
        c.d(o, "a", function() {
          return f;
        });
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(2), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(s, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 }), h(c(29));
        var f = h(c(21)), p = h(c(41)), l = c(42);
        function h(d) {
          return d && d.__esModule ? d : { default: d };
        }
        o.default = { name: "JsonViewer", components: { JsonBox: f.default }, props: { value: { type: [Object, Array, String, Number, Boolean, Function], required: !0 }, expanded: { type: Boolean, default: !1 }, expandDepth: { type: Number, default: 1 }, copyable: { type: [Boolean, Object], default: !1 }, sort: { type: Boolean, default: !1 }, boxed: { type: Boolean, default: !1 }, theme: { type: String, default: "jv-light" }, timeformat: { type: Function, default: function(d) {
          return d.toLocaleString();
        } }, previewMode: { type: Boolean, default: !1 }, showArrayIndex: { type: Boolean, default: !0 }, showDoubleQuotes: { type: Boolean, default: !1 } }, provide: function() {
          return { expandDepth: this.expandDepth, timeformat: this.timeformat, onKeyclick: this.onKeyclick };
        }, data: function() {
          return { copied: !1, expandableCode: !1, expandCode: this.expanded };
        }, computed: { jvClass: function() {
          return "jv-container " + this.theme + (this.boxed ? " boxed" : "");
        }, copyText: function() {
          var d = this.copyable;
          return { copyText: d.copyText || "copy", copiedText: d.copiedText || "copied!", timeout: d.timeout || 2e3, align: d.align };
        } }, watch: { value: function() {
          this.onResized();
        } }, mounted: function() {
          var d = this;
          this.debounceResized = (0, l.debounce)(this.debResized.bind(this), 200), this.boxed && this.$refs.jsonBox && (this.onResized(), this.$refs.jsonBox.$el.addEventListener("resized", this.onResized, !0)), this.copyable && new p.default(this.$refs.clip, { container: this.$refs.viewer, text: function() {
            return JSON.stringify(d.value, null, 2);
          } }).on("success", function(_) {
            d.onCopied(_);
          });
        }, methods: { onResized: function() {
          this.debounceResized();
        }, debResized: function() {
          var d = this;
          this.$nextTick(function() {
            d.$refs.jsonBox && (250 <= d.$refs.jsonBox.$el.clientHeight ? d.expandableCode = !0 : d.expandableCode = !1);
          });
        }, onCopied: function(d) {
          var _ = this;
          this.copied || (this.copied = !0, setTimeout(function() {
            _.copied = !1;
          }, this.copyText.timeout), this.$emit("copied", d));
        }, toggleExpandCode: function() {
          this.expandCode = !this.expandCode;
        }, onKeyclick: function(d) {
          this.$emit("keyclick", d);
        } } };
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(4), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(s, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        var f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
          return typeof S;
        } : function(S) {
          return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
        }, p = L(c(30)), l = L(c(31)), h = L(c(32)), d = L(c(33)), _ = L(c(34)), C = L(c(35)), T = L(c(36)), I = L(c(37));
        function L(S) {
          return S && S.__esModule ? S : { default: S };
        }
        o.default = { name: "JsonBox", inject: ["expandDepth", "onKeyclick"], props: { value: { type: [Object, Array, String, Number, Boolean, Function, Date], default: null }, keyName: { type: String, default: "" }, sort: Boolean, depth: { type: Number, default: 0 }, previewMode: Boolean, forceExpand: Boolean, showArrayIndex: Boolean, showDoubleQuotes: Boolean, path: { type: String, default: "$" } }, data: function() {
          return { expand: !0, forceExpandMe: this.forceExpand };
        }, mounted: function() {
          this.expand = this.previewMode || !(this.depth >= this.expandDepth) || this.forceExpandMe;
        }, methods: { toggle: function() {
          this.expand = !this.expand, this.dispatchEvent();
        }, toggleAll: function() {
          this.expand = !this.expand, this.forceExpandMe = this.expand, this.dispatchEvent();
        }, dispatchEvent: function() {
          try {
            this.$el.dispatchEvent(new Event("resized"));
          } catch {
            var S = document.createEvent("Event");
            S.initEvent("resized", !0, !1), this.$el.dispatchEvent(S);
          }
        }, getPath: function() {
          for (var S = [this.keyName], w = this.$parent; w.depth; ) w.$el.classList.contains("jv-node") && S.push(w.keyName), w = w.$parent;
          return S.reverse();
        } }, render: function(S) {
          var w = this, y = [], F = void 0;
          this.value === null || this.value === void 0 ? F = l.default : Array.isArray(this.value) ? F = C.default : Object.prototype.toString.call(this.value) === "[object Date]" ? F = I.default : f(this.value) === "object" ? F = _.default : typeof this.value == "number" ? F = h.default : typeof this.value == "string" ? F = p.default : typeof this.value == "boolean" ? F = d.default : typeof this.value == "function" && (F = T.default);
          var B = this.keyName && this.value && (Array.isArray(this.value) || f(this.value) === "object" && Object.prototype.toString.call(this.value) !== "[object Date]");
          return !this.previewMode && B && y.push(S("span", { class: { "jv-toggle": !0, open: !!this.expand }, on: { click: function(Q) {
            Q.altKey ? w.toggleAll() : w.toggle();
          } } })), this.keyName && y.push(S("span", { class: { "jv-key": !0 }, domProps: { innerText: this.showDoubleQuotes ? '"' + this.keyName + '":' : this.keyName + ":" }, on: { click: function() {
            w.onKeyclick(w.path);
          } } })), y.push(S(F, { class: { "jv-push": !0 }, props: { jsonValue: this.value, keyName: this.keyName, sort: this.sort, depth: this.depth, expand: this.expand, previewMode: this.previewMode, forceExpand: this.forceExpandMe, showArrayIndex: this.showArrayIndex, showDoubleQuotes: this.showDoubleQuotes, path: this.path }, on: { "update:expand": function(Q) {
            w.expand = Q;
          }, "update:expandAll": function(Q) {
            w.expand = Q, w.forceExpandMe = w.expand;
          } } })), S("div", { class: { "jv-node": !0, "jv-key-node": !!this.keyName && !B, toggle: !this.previewMode && B } }, y);
        } };
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(6), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(s, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        var f = /^\w+:\/\//;
        o.default = { name: "JsonString", props: { jsonValue: { type: String, required: !0 } }, data: function() {
          return { expand: !0, canExtend: !1 };
        }, mounted: function() {
          this.$refs.itemRef.offsetHeight > this.$refs.holderRef.offsetHeight && (this.canExtend = !0);
        }, methods: { toggle: function() {
          this.expand = !this.expand;
        } }, render: function(p) {
          var l = this.jsonValue, h = f.test(l), d = void 0;
          return this.expand ? (d = { class: { "jv-item": !0, "jv-string": !0 }, ref: "itemRef" }).domProps = h ? { innerHTML: '"' + (l = '<a href="' + l + '" target="_blank" class="jv-link">' + l + "</a>").toString() + '"' } : { innerText: '"' + l.toString() + '"' } : d = { class: { "jv-ellipsis": !0 }, on: { click: this.toggle }, domProps: { innerText: "..." } }, p("span", {}, [this.canExtend && p("span", { class: { "jv-toggle": !0, open: this.expand }, on: { click: this.toggle } }), p("span", { class: { "jv-holder-node": !0 }, ref: "holderRef" }), p("span", d)]);
        } };
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(8), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(s, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 }), o.default = { name: "JsonUndefined", functional: !0, props: { jsonValue: { type: Object, default: null } }, render: function(f, p) {
          return f("span", { class: { "jv-item": !0, "jv-undefined": !0 }, domProps: { innerText: p.props.jsonValue === null ? "null" : "undefined" } });
        } };
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(10), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(s, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 }), o.default = { name: "JsonNumber", functional: !0, props: { jsonValue: { type: Number, required: !0 } }, render: function(f, h) {
          var l = h.props, h = Number.isInteger(l.jsonValue);
          return f("span", { class: { "jv-item": !0, "jv-number": !0, "jv-number-integer": h, "jv-number-float": !h }, domProps: { innerText: l.jsonValue.toString() } });
        } };
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(12), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(s, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 }), o.default = { name: "JsonBoolean", functional: !0, props: { jsonValue: Boolean }, render: function(f, p) {
          return f("span", { class: { "jv-item": !0, "jv-boolean": !0 }, domProps: { innerText: p.props.jsonValue.toString() } });
        } };
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(14), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(s, o, f) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        var f = f(21), p = (f = f) && f.__esModule ? f : { default: f };
        o.default = { name: "JsonObject", props: { jsonValue: { type: Object, required: !0 }, keyName: { type: String, default: "" }, depth: { type: Number, default: 0 }, expand: Boolean, forceExpand: Boolean, sort: Boolean, previewMode: Boolean, showArrayIndex: Boolean, showDoubleQuotes: Boolean, path: String }, data: function() {
          return { value: {} };
        }, computed: { ordered: function() {
          var l = this;
          if (!this.sort) return this.value;
          var h = {};
          return Object.keys(this.value).sort().forEach(function(d) {
            h[d] = l.value[d];
          }), h;
        } }, watch: { jsonValue: function(l) {
          this.setValue(l);
        } }, mounted: function() {
          this.setValue(this.jsonValue);
        }, methods: { setValue: function(l) {
          var h = this;
          setTimeout(function() {
            h.value = l;
          }, 0);
        }, toggle: function() {
          this.$emit("update:expand", !this.expand), this.dispatchEvent();
        }, toggleAll: function() {
          this.$emit("update:expandAll", !this.expand), this.dispatchEvent();
        }, dispatchEvent: function() {
          try {
            this.$el.dispatchEvent(new Event("resized"));
          } catch {
            var l = document.createEvent("Event");
            l.initEvent("resized", !0, !1), this.$el.dispatchEvent(l);
          }
        } }, render: function(l) {
          var h, d = this, _ = [];
          if (this.previewMode || this.keyName || _.push(l("span", { class: { "jv-toggle": !0, open: !!this.expand }, on: { click: function(T) {
            T.altKey ? d.toggleAll() : d.toggle();
          } } })), _.push(l("span", { class: { "jv-item": !0, "jv-object": !0 }, domProps: { innerText: "{" } })), this.expand) for (var C in this.ordered) this.ordered.hasOwnProperty(C) && (h = this.ordered[C], _.push(l(p.default, { key: C, props: { sort: this.sort, keyName: C, depth: this.depth + 1, value: h, previewMode: this.previewMode, forceExpand: this.forceExpand, showArrayIndex: this.showArrayIndex, showDoubleQuotes: this.showDoubleQuotes, path: this.path + "." + C } })));
          return !this.expand && Object.keys(this.value).length && _.push(l("span", { class: { "jv-ellipsis": !0 }, on: { click: function(T) {
            T.altKey ? d.toggleAll() : d.toggle();
          } }, attrs: { title: "click to reveal object content (keys: " + Object.keys(this.ordered).join(", ") + ")" }, domProps: { innerText: "..." } })), _.push(l("span", { class: { "jv-item": !0, "jv-object": !0 }, domProps: { innerText: "}" } })), l("span", _);
        } };
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(16), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(s, o, f) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        var f = f(21), p = (f = f) && f.__esModule ? f : { default: f };
        o.default = { name: "JsonArray", props: { jsonValue: { type: Array, required: !0 }, keyName: { type: String, default: "" }, depth: { type: Number, default: 0 }, sort: Boolean, expand: Boolean, forceExpand: Boolean, previewMode: Boolean, showArrayIndex: Boolean, showDoubleQuotes: Boolean, path: String }, data: function() {
          return { value: [] };
        }, watch: { jsonValue: function(l) {
          this.setValue(l);
        } }, mounted: function() {
          this.setValue(this.jsonValue);
        }, methods: { setValue: function(l) {
          var h = this, d = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 0;
          d === 0 && (this.value = []), setTimeout(function() {
            l.length > d && (h.value.push(l[d]), h.setValue(l, d + 1));
          }, 0);
        }, toggle: function() {
          this.$emit("update:expand", !this.expand), this.dispatchEvent();
        }, toggleAll: function() {
          this.$emit("update:expandAll", !this.expand), this.dispatchEvent();
        }, dispatchEvent: function() {
          try {
            this.$el.dispatchEvent(new Event("resized"));
          } catch {
            var l = document.createEvent("Event");
            l.initEvent("resized", !0, !1), this.$el.dispatchEvent(l);
          }
        } }, render: function(l) {
          var h = this, d = [];
          return this.previewMode || this.keyName || d.push(l("span", { class: { "jv-toggle": !0, open: !!this.expand }, on: { click: function(_) {
            _.altKey ? h.toggleAll() : h.toggle();
          } } })), d.push(l("span", { class: { "jv-item": !0, "jv-array": !0 }, domProps: { innerText: "[" } })), this.expand && this.value.forEach(function(_, C) {
            d.push(l(p.default, { key: C, props: { sort: h.sort, keyName: h.showArrayIndex ? "" + C : "", depth: h.depth + 1, value: _, previewMode: h.previewMode, forceExpand: h.forceExpand, showArrayIndex: h.showArrayIndex, showDoubleQuotes: h.showDoubleQuotes, path: h.path + "." + C } }));
          }), !this.expand && this.value.length && d.push(l("span", { class: { "jv-ellipsis": !0 }, on: { click: function(_) {
            _.altKey ? h.toggleAll() : h.toggle();
          } }, attrs: { title: "click to reveal " + this.value.length + " hidden items" }, domProps: { innerText: "..." } })), d.push(l("span", { class: { "jv-item": !0, "jv-array": !0 }, domProps: { innerText: "]" } })), l("span", d);
        } };
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(18), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(s, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 }), o.default = { name: "JsonFunction", functional: !0, props: { jsonValue: { type: Function, required: !0 } }, render: function(f, p) {
          return f("span", { class: { "jv-item": !0, "jv-function": !0 }, attrs: { title: p.props.jsonValue.toString() }, domProps: { innerHTML: "&lt;function&gt;" } });
        } };
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(20), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(s, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 }), o.default = { name: "JsonDate", inject: ["timeformat"], functional: !0, props: { jsonValue: { type: Date, required: !0 } }, render: function(f, l) {
          var h = l.props, l = l.injections, h = h.jsonValue;
          return f("span", { class: { "jv-item": !0, "jv-string": !0 }, domProps: { innerText: '"' + (0, l.timeformat)(h) + '"' } });
        } };
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(3);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        c(38);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/json-box.vue", o.default = l.exports;
      }, function(s, o, c) {
        function f() {
          var l = this, h = l.$createElement;
          return (h = l._self._c || h)("div", { ref: "viewer", class: l.jvClass }, [l.copyable ? h("div", { class: "jv-tooltip " + (l.copyText.align || "right") }, [h("span", { ref: "clip", staticClass: "jv-button", class: { copied: l.copied } }, [l._t("copy", function() {
            return [l._v(`
        ` + l._s(l.copied ? l.copyText.copiedText : l.copyText.copyText) + `
      `)];
          }, { copied: l.copied })], 2)]) : l._e(), l._v(" "), h("div", { staticClass: "jv-code", class: { open: l.expandCode, boxed: l.boxed } }, [h("json-box", { ref: "jsonBox", attrs: { value: l.value, sort: l.sort, "preview-mode": l.previewMode, "show-array-index": l.showArrayIndex, "show-double-quotes": l.showDoubleQuotes }, on: { keyclick: l.onKeyclick } })], 1), l._v(" "), l.expandableCode && l.boxed ? h("div", { staticClass: "jv-more", on: { click: l.toggleExpandCode } }, [h("span", { staticClass: "jv-toggle", class: { open: !!l.expandCode } })]) : l._e()]);
        }
        var p = [];
        f._withStripped = !0, c.d(o, "a", function() {
          return f;
        }), c.d(o, "b", function() {
          return p;
        });
      }, function(s, o, c) {
        var f = c(39);
        typeof f == "string" && (f = [[s.i, f, ""]]);
        var p = { hmr: !0, transform: void 0 };
        c(25)(f, p), f.locals && (s.exports = f.locals);
      }, function(s, o, c) {
        s.exports = function(f) {
          var p = [];
          return p.toString = function() {
            return this.map(function(l) {
              var h = (function(d, _) {
                var C = d[1] || "", T = d[3];
                return T ? _ && typeof btoa == "function" ? (d = (function(I) {
                  return I = btoa(unescape(encodeURIComponent(JSON.stringify(I)))), I = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(I), "/*# ".concat(I, " */");
                })(T), _ = T.sources.map(function(I) {
                  return "/*# sourceURL=".concat(T.sourceRoot || "").concat(I, " */");
                }), [C].concat(_).concat([d]).join(`
`)) : [C].join(`
`) : C;
              })(l, f);
              return l[2] ? "@media ".concat(l[2], " {").concat(h, "}") : h;
            }).join("");
          }, p.i = function(l, h, d) {
            typeof l == "string" && (l = [[null, l, ""]]);
            var _ = {};
            if (d) for (var C = 0; C < this.length; C++) {
              var T = this[C][0];
              T != null && (_[T] = !0);
            }
            for (var I = 0; I < l.length; I++) {
              var L = [].concat(l[I]);
              d && _[L[0]] || (h && (L[2] ? L[2] = "".concat(h, " and ").concat(L[2]) : L[2] = h), p.push(L));
            }
          }, p;
        };
      }, function(s, o, c) {
        var f, p, l, h = {}, d = (f = function() {
          return window && document && document.all && !window.atob;
        }, function() {
          return p = p === void 0 ? f.apply(this, arguments) : p;
        }), _ = (l = {}, function(E) {
          if (l[E] === void 0) {
            var x = (function(k) {
              return document.querySelector(k);
            }).call(this, E);
            if (x instanceof window.HTMLIFrameElement) try {
              x = x.contentDocument.head;
            } catch {
              x = null;
            }
            l[E] = x;
          }
          return l[E];
        }), C = null, T = 0, I = [], L = c(40);
        function S(E, x) {
          for (var k = 0; k < E.length; k++) {
            var D = E[k], A = h[D.id];
            if (A) {
              A.refs++;
              for (var P = 0; P < A.parts.length; P++) A.parts[P](D.parts[P]);
              for (; P < D.parts.length; P++) A.parts.push(H(D.parts[P], x));
            } else {
              for (var V = [], P = 0; P < D.parts.length; P++) V.push(H(D.parts[P], x));
              h[D.id] = { id: D.id, refs: 1, parts: V };
            }
          }
        }
        function w(E, x) {
          for (var k = [], D = {}, A = 0; A < E.length; A++) {
            var V = E[A], P = x.base ? V[0] + x.base : V[0], V = { css: V[1], media: V[2], sourceMap: V[3] };
            D[P] ? D[P].parts.push(V) : k.push(D[P] = { id: P, parts: [V] });
          }
          return k;
        }
        function y(E, x) {
          var k = _(E.insertInto);
          if (!k) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var D = I[I.length - 1];
          if (E.insertAt === "top") D ? D.nextSibling ? k.insertBefore(x, D.nextSibling) : k.appendChild(x) : k.insertBefore(x, k.firstChild), I.push(x);
          else if (E.insertAt === "bottom") k.appendChild(x);
          else {
            if (typeof E.insertAt != "object" || !E.insertAt.before) throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
            E = _(E.insertInto + " " + E.insertAt.before), k.insertBefore(x, E);
          }
        }
        function F(E) {
          E.parentNode !== null && (E.parentNode.removeChild(E), 0 <= (E = I.indexOf(E)) && I.splice(E, 1));
        }
        function B(E) {
          var x = document.createElement("style");
          return E.attrs.type = "text/css", Q(x, E.attrs), y(E, x), x;
        }
        function Q(E, x) {
          Object.keys(x).forEach(function(k) {
            E.setAttribute(k, x[k]);
          });
        }
        function H(E, x) {
          var k, D, A, P, V;
          if (x.transform && E.css) {
            if (!(P = x.transform(E.css))) return function() {
            };
            E.css = P;
          }
          return A = x.singleton ? (V = T++, k = C = C || B(x), D = re.bind(null, k, V, !1), re.bind(null, k, V, !0)) : E.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (P = x, V = document.createElement("link"), P.attrs.type = "text/css", P.attrs.rel = "stylesheet", Q(V, P.attrs), y(P, V), k = V, D = (function(Z, $, M) {
            var R = M.css, U = M.sourceMap, M = $.convertToAbsoluteUrls === void 0 && U;
            ($.convertToAbsoluteUrls || M) && (R = L(R)), U && (R += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(U)))) + " */"), U = new Blob([R], { type: "text/css" }), R = Z.href, Z.href = URL.createObjectURL(U), R && URL.revokeObjectURL(R);
          }).bind(null, k, x), function() {
            F(k), k.href && URL.revokeObjectURL(k.href);
          }) : (k = B(x), D = (function(Z, R) {
            var N = R.css, R = R.media;
            if (R && Z.setAttribute("media", R), Z.styleSheet) Z.styleSheet.cssText = N;
            else {
              for (; Z.firstChild; ) Z.removeChild(Z.firstChild);
              Z.appendChild(document.createTextNode(N));
            }
          }).bind(null, k), function() {
            F(k);
          }), D(E), function(Z) {
            Z ? Z.css === E.css && Z.media === E.media && Z.sourceMap === E.sourceMap || D(E = Z) : A();
          };
        }
        s.exports = function(E, x) {
          if (typeof DEBUG < "u" && DEBUG && typeof document != "object") throw new Error("The style-loader cannot be used in a non-browser environment");
          (x = x || {}).attrs = typeof x.attrs == "object" ? x.attrs : {}, x.singleton || typeof x.singleton == "boolean" || (x.singleton = d()), x.insertInto || (x.insertInto = "head"), x.insertAt || (x.insertAt = "bottom");
          var k = w(E, x);
          return S(k, x), function(D) {
            for (var A = [], P = 0; P < k.length; P++) {
              var V = k[P];
              (Z = h[V.id]).refs--, A.push(Z);
            }
            D && S(w(D, x), x);
            for (var Z, P = 0; P < A.length; P++) if ((Z = A[P]).refs === 0) {
              for (var $ = 0; $ < Z.parts.length; $++) Z.parts[$]();
              delete h[Z.id];
            }
          };
        };
        var z, ue = (z = [], function(E, x) {
          return z[E] = x, z.filter(Boolean).join(`
`);
        });
        function re(E, x, A, D) {
          var A = A ? "" : D.css;
          E.styleSheet ? E.styleSheet.cssText = ue(x, A) : (D = document.createTextNode(A), (A = E.childNodes)[x] && E.removeChild(A[x]), A.length ? E.insertBefore(D, A[x]) : E.appendChild(D));
        }
      }, function(s, o, c) {
        var f = c(44);
        typeof f == "string" && (f = [[s.i, f, ""]]);
        var p = { hmr: !0, transform: void 0 };
        c(25)(f, p), f.locals && (s.exports = f.locals);
      }, function(s, o, f) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        var f = f(28), p = (f = f) && f.__esModule ? f : { default: f };
        o.default = Object.assign(p.default, { install: function(l) {
          l.component("JsonViewer", p.default);
        } });
      }, function(s, o, c) {
        c.r(o);
        var f, h = c(22), p = c(1);
        for (f in p) f !== "default" && (function(d) {
          c.d(o, d, function() {
            return p[d];
          });
        })(f);
        c(43);
        var l = c(0), h = Object(l.a)(p.default, h.a, h.b, !1, null, null, null);
        h.options.__file = "lib/json-viewer.vue", o.default = h.exports;
      }, function(s, o) {
        s.exports = r;
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(5);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-string.vue", o.default = l.exports;
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(7);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-undefined.vue", o.default = l.exports;
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(9);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-number.vue", o.default = l.exports;
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(11);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-boolean.vue", o.default = l.exports;
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(13);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-object.vue", o.default = l.exports;
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(15);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-array.vue", o.default = l.exports;
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(17);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-function.vue", o.default = l.exports;
      }, function(s, o, c) {
        c.r(o);
        var f, p = c(19);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-date.vue", o.default = l.exports;
      }, function(s, o, c) {
        c(23);
      }, function(s, o, c) {
        (o = c(24)(!1)).push([s.i, `.jv-node{position:relative}.jv-node:after{content:','}.jv-node:last-of-type:after{content:''}.jv-node.toggle{margin-left:13px !important}.jv-node .jv-node{margin-left:25px}
`, ""]), s.exports = o;
      }, function(s, o) {
        s.exports = function(c) {
          var f = typeof window < "u" && window.location;
          if (!f) throw new Error("fixUrls requires window.location");
          if (!c || typeof c != "string") return c;
          var p = f.protocol + "//" + f.host, l = p + f.pathname.replace(/\/[^\/]*$/, "/");
          return c.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(h, _) {
            var _ = _.trim().replace(/^"(.*)"$/, function(C, T) {
              return T;
            }).replace(/^'(.*)'$/, function(C, T) {
              return T;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(_) ? h : (_ = _.indexOf("//") === 0 ? _ : _.indexOf("/") === 0 ? p + _ : l + _.replace(/^\.\//, ""), "url(" + JSON.stringify(_) + ")");
          });
        };
      }, function(s, o) {
        s.exports = n;
      }, function(s, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 }), o.debounce = function(f, p) {
          var l = Date.now(), h = void 0;
          return function() {
            for (var d = arguments.length, _ = Array(d), C = 0; C < d; C++) _[C] = arguments[C];
            Date.now() - l < p && h && clearTimeout(h), h = setTimeout(function() {
              f.apply(void 0, _);
            }, p), l = Date.now();
          };
        };
      }, function(s, o, c) {
        c(26);
      }, function(s, o, l) {
        var f = l(24), p = l(45), l = l(46);
        o = f(!1), l = p(l), o.push([s.i, ".jv-container{box-sizing:border-box;position:relative}.jv-container.boxed{border:1px solid #eee;border-radius:6px}.jv-container.boxed:hover{box-shadow:0 2px 7px rgba(0,0,0,0.15);border-color:transparent;position:relative}.jv-container.jv-light{background:#fff;white-space:nowrap;color:#525252;font-size:14px;font-family:Consolas, Menlo, Courier, monospace}.jv-container.jv-light .jv-ellipsis{color:#999;background-color:#eee;display:inline-block;line-height:0.9;font-size:0.9em;padding:0px 4px 2px 4px;margin:0 4px;border-radius:3px;vertical-align:2px;cursor:pointer;-webkit-user-select:none;user-select:none}.jv-container.jv-light .jv-button{color:#49b3ff}.jv-container.jv-light .jv-key{color:#111111;margin-right:4px}.jv-container.jv-light .jv-item.jv-array{color:#111111}.jv-container.jv-light .jv-item.jv-boolean{color:#fc1e70}.jv-container.jv-light .jv-item.jv-function{color:#067bca}.jv-container.jv-light .jv-item.jv-number{color:#fc1e70}.jv-container.jv-light .jv-item.jv-object{color:#111111}.jv-container.jv-light .jv-item.jv-undefined{color:#e08331}.jv-container.jv-light .jv-item.jv-string{color:#42b983;word-break:break-word;white-space:normal}.jv-container.jv-light .jv-item.jv-string .jv-link{color:#0366d6}.jv-container.jv-light .jv-code .jv-toggle:before{padding:0px 2px;border-radius:2px}.jv-container.jv-light .jv-code .jv-toggle:hover:before{background:#eee}.jv-container .jv-code{overflow:hidden;padding:30px 20px}.jv-container .jv-code.boxed{max-height:300px}.jv-container .jv-code.open{max-height:initial !important;overflow:visible;overflow-x:auto;padding-bottom:45px}.jv-container .jv-toggle{background-image:url(" + l + `);background-repeat:no-repeat;background-size:contain;background-position:center center;cursor:pointer;width:10px;height:10px;margin-right:2px;display:inline-block;-webkit-transition:-webkit-transform 0.1s;transition:-webkit-transform 0.1s;transition:transform 0.1s;transition:transform 0.1s, -webkit-transform 0.1s}.jv-container .jv-toggle.open{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.jv-container .jv-more{position:absolute;z-index:1;bottom:0;left:0;right:0;height:40px;width:100%;text-align:center;cursor:pointer}.jv-container .jv-more .jv-toggle{position:relative;top:40%;z-index:2;color:#888;-webkit-transition:all 0.1s;transition:all 0.1s;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.jv-container .jv-more .jv-toggle.open{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.jv-container .jv-more:after{content:"";width:100%;height:100%;position:absolute;bottom:0;left:0;z-index:1;background:-webkit-linear-gradient(top, rgba(0,0,0,0) 20%, rgba(230,230,230,0.3) 100%);background:linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(230,230,230,0.3) 100%);-webkit-transition:all 0.1s;transition:all 0.1s}.jv-container .jv-more:hover .jv-toggle{top:50%;color:#111}.jv-container .jv-more:hover:after{background:-webkit-linear-gradient(top, rgba(0,0,0,0) 20%, rgba(230,230,230,0.3) 100%);background:linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(230,230,230,0.3) 100%)}.jv-container .jv-button{position:relative;cursor:pointer;display:inline-block;padding:5px;z-index:5}.jv-container .jv-button.copied{opacity:0.4;cursor:default}.jv-container .jv-tooltip{position:absolute}.jv-container .jv-tooltip.right{right:15px}.jv-container .jv-tooltip.left{left:15px}.jv-container .j-icon{font-size:12px}
`, ""]), s.exports = o;
      }, function(s, o, c) {
        s.exports = function(f, p) {
          return p = p || {}, typeof (f = f && f.__esModule ? f.default : f) != "string" ? f : (/^['"].*['"]$/.test(f) && (f = f.slice(1, -1)), p.hash && (f += p.hash), /["'() \t\n]/.test(f) || p.needQuotes ? '"'.concat(f.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : f);
        };
      }, function(s, o) {
        s.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE2IiB3aWR0aD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIAo8cG9seWdvbiBwb2ludHM9IjAsMCA4LDggMCwxNiIKc3R5bGU9ImZpbGw6IzY2NjtzdHJva2U6cHVycGxlO3N0cm9rZS13aWR0aDowIiAvPgo8L3N2Zz4=";
      }], i.c = a, i.d = function(s, o, c) {
        i.o(s, o) || Object.defineProperty(s, o, { enumerable: !0, get: c });
      }, i.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, i.t = function(s, o) {
        if (1 & o && (s = i(s)), 8 & o || 4 & o && typeof s == "object" && s && s.__esModule) return s;
        var c = /* @__PURE__ */ Object.create(null);
        if (i.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: s }), 2 & o && typeof s != "string") for (var f in s) i.d(c, f, (function(p) {
          return s[p];
        }).bind(null, f));
        return c;
      }, i.n = function(s) {
        var o = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(o, "a", o), o;
      }, i.o = function(s, o) {
        return Object.prototype.hasOwnProperty.call(s, o);
      }, i.p = "", i(i.s = 27);
      function i(s) {
        if (a[s]) return a[s].exports;
        var o = a[s] = { i: s, l: !1, exports: {} };
        return u[s].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
      }
      var u, a;
    });
  })(Dn)), Dn.exports;
}
var lp = cp();
const ou = /* @__PURE__ */ Gr(lp), ks = {};
function fp(e) {
  let t = ks[e];
  if (t)
    return t;
  t = ks[e] = [];
  for (let r = 0; r < 128; r++) {
    const n = String.fromCharCode(r);
    t.push(n);
  }
  for (let r = 0; r < e.length; r++) {
    const n = e.charCodeAt(r);
    t[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  }
  return t;
}
function gr(e, t) {
  typeof t != "string" && (t = gr.defaultChars);
  const r = fp(t);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(n) {
    let i = "";
    for (let u = 0, a = n.length; u < a; u += 3) {
      const s = parseInt(n.slice(u + 1, u + 3), 16);
      if (s < 128) {
        i += r[s];
        continue;
      }
      if ((s & 224) === 192 && u + 3 < a) {
        const o = parseInt(n.slice(u + 4, u + 6), 16);
        if ((o & 192) === 128) {
          const c = s << 6 & 1984 | o & 63;
          c < 128 ? i += "��" : i += String.fromCharCode(c), u += 3;
          continue;
        }
      }
      if ((s & 240) === 224 && u + 6 < a) {
        const o = parseInt(n.slice(u + 4, u + 6), 16), c = parseInt(n.slice(u + 7, u + 9), 16);
        if ((o & 192) === 128 && (c & 192) === 128) {
          const f = s << 12 & 61440 | o << 6 & 4032 | c & 63;
          f < 2048 || f >= 55296 && f <= 57343 ? i += "���" : i += String.fromCharCode(f), u += 6;
          continue;
        }
      }
      if ((s & 248) === 240 && u + 9 < a) {
        const o = parseInt(n.slice(u + 4, u + 6), 16), c = parseInt(n.slice(u + 7, u + 9), 16), f = parseInt(n.slice(u + 10, u + 12), 16);
        if ((o & 192) === 128 && (c & 192) === 128 && (f & 192) === 128) {
          let p = s << 18 & 1835008 | o << 12 & 258048 | c << 6 & 4032 | f & 63;
          p < 65536 || p > 1114111 ? i += "����" : (p -= 65536, i += String.fromCharCode(55296 + (p >> 10), 56320 + (p & 1023))), u += 9;
          continue;
        }
      }
      i += "�";
    }
    return i;
  });
}
gr.defaultChars = ";/?:@&=+$,#";
gr.componentChars = "";
const Cs = {};
function pp(e) {
  let t = Cs[e];
  if (t)
    return t;
  t = Cs[e] = [];
  for (let r = 0; r < 128; r++) {
    const n = String.fromCharCode(r);
    /^[0-9a-z]$/i.test(n) ? t.push(n) : t.push("%" + ("0" + r.toString(16).toUpperCase()).slice(-2));
  }
  for (let r = 0; r < e.length; r++)
    t[e.charCodeAt(r)] = e[r];
  return t;
}
function Xr(e, t, r) {
  typeof t != "string" && (r = t, t = Xr.defaultChars), typeof r > "u" && (r = !0);
  const n = pp(t);
  let i = "";
  for (let u = 0, a = e.length; u < a; u++) {
    const s = e.charCodeAt(u);
    if (r && s === 37 && u + 2 < a && /^[0-9a-f]{2}$/i.test(e.slice(u + 1, u + 3))) {
      i += e.slice(u, u + 3), u += 2;
      continue;
    }
    if (s < 128) {
      i += n[s];
      continue;
    }
    if (s >= 55296 && s <= 57343) {
      if (s >= 55296 && s <= 56319 && u + 1 < a) {
        const o = e.charCodeAt(u + 1);
        if (o >= 56320 && o <= 57343) {
          i += encodeURIComponent(e[u] + e[u + 1]), u++;
          continue;
        }
      }
      i += "%EF%BF%BD";
      continue;
    }
    i += encodeURIComponent(e[u]);
  }
  return i;
}
Xr.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Xr.componentChars = "-_.!~*'()";
function Su(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function jn() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const hp = /^([a-z0-9.+-]+:)/i, dp = /:[0-9]*$/, mp = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, bp = ["<", ">", '"', "`", " ", "\r", `
`, "	"], gp = ["{", "}", "|", "\\", "^", "`"].concat(bp), xp = ["'"].concat(gp), ws = ["%", "/", "?", ";", "#"].concat(xp), Es = ["/", "?", "#"], yp = 255, As = /^[+a-z0-9A-Z_-]{0,63}$/, _p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Ss = {
  javascript: !0,
  "javascript:": !0
}, Ds = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function Du(e, t) {
  if (e && e instanceof jn) return e;
  const r = new jn();
  return r.parse(e, t), r;
}
jn.prototype.parse = function(e, t) {
  let r, n, i, u = e;
  if (u = u.trim(), !t && e.split("#").length === 1) {
    const c = mp.exec(u);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  let a = hp.exec(u);
  if (a && (a = a[0], r = a.toLowerCase(), this.protocol = a, u = u.substr(a.length)), (t || a || u.match(/^\/\/[^@\/]+@[^@\/]+/)) && (i = u.substr(0, 2) === "//", i && !(a && Ss[a]) && (u = u.substr(2), this.slashes = !0)), !Ss[a] && (i || a && !Ds[a])) {
    let c = -1;
    for (let d = 0; d < Es.length; d++)
      n = u.indexOf(Es[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    let f, p;
    c === -1 ? p = u.lastIndexOf("@") : p = u.lastIndexOf("@", c), p !== -1 && (f = u.slice(0, p), u = u.slice(p + 1), this.auth = f), c = -1;
    for (let d = 0; d < ws.length; d++)
      n = u.indexOf(ws[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    c === -1 && (c = u.length), u[c - 1] === ":" && c--;
    const l = u.slice(0, c);
    u = u.slice(c), this.parseHost(l), this.hostname = this.hostname || "";
    const h = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!h) {
      const d = this.hostname.split(/\./);
      for (let _ = 0, C = d.length; _ < C; _++) {
        const T = d[_];
        if (T && !T.match(As)) {
          let I = "";
          for (let L = 0, S = T.length; L < S; L++)
            T.charCodeAt(L) > 127 ? I += "x" : I += T[L];
          if (!I.match(As)) {
            const L = d.slice(0, _), S = d.slice(_ + 1), w = T.match(_p);
            w && (L.push(w[1]), S.unshift(w[2])), S.length && (u = S.join(".") + u), this.hostname = L.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > yp && (this.hostname = ""), h && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const s = u.indexOf("#");
  s !== -1 && (this.hash = u.substr(s), u = u.slice(0, s));
  const o = u.indexOf("?");
  return o !== -1 && (this.search = u.substr(o), u = u.slice(0, o)), u && (this.pathname = u), Ds[r] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
jn.prototype.parseHost = function(e) {
  let t = dp.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: gr,
  encode: Xr,
  format: Su,
  parse: Du
}, Symbol.toStringTag, { value: "Module" })), co = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, lo = /[\0-\x1F\x7F-\x9F]/, kp = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Tu = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, fo = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, po = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, Cp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: co,
  Cc: lo,
  Cf: kp,
  P: Tu,
  S: fo,
  Z: po
}, Symbol.toStringTag, { value: "Module" })), wp = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), Ep = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var Pi;
const Ap = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), Sp = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (Pi = String.fromCodePoint) !== null && Pi !== void 0 ? Pi : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function Dp(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Ap.get(e)) !== null && t !== void 0 ? t : e;
}
var Te;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(Te || (Te = {}));
const Tp = 32;
var $t;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})($t || ($t = {}));
function cu(e) {
  return e >= Te.ZERO && e <= Te.NINE;
}
function Op(e) {
  return e >= Te.UPPER_A && e <= Te.UPPER_F || e >= Te.LOWER_A && e <= Te.LOWER_F;
}
function Ip(e) {
  return e >= Te.UPPER_A && e <= Te.UPPER_Z || e >= Te.LOWER_A && e <= Te.LOWER_Z || cu(e);
}
function Fp(e) {
  return e === Te.EQUALS || Ip(e);
}
var De;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(De || (De = {}));
var Mt;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(Mt || (Mt = {}));
class Lp {
  constructor(t, r, n) {
    this.decodeTree = t, this.emitCodePoint = r, this.errors = n, this.state = De.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Mt.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = De.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(t, r) {
    switch (this.state) {
      case De.EntityStart:
        return t.charCodeAt(r) === Te.NUM ? (this.state = De.NumericStart, this.consumed += 1, this.stateNumericStart(t, r + 1)) : (this.state = De.NamedEntity, this.stateNamedEntity(t, r));
      case De.NumericStart:
        return this.stateNumericStart(t, r);
      case De.NumericDecimal:
        return this.stateNumericDecimal(t, r);
      case De.NumericHex:
        return this.stateNumericHex(t, r);
      case De.NamedEntity:
        return this.stateNamedEntity(t, r);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(t, r) {
    return r >= t.length ? -1 : (t.charCodeAt(r) | Tp) === Te.LOWER_X ? (this.state = De.NumericHex, this.consumed += 1, this.stateNumericHex(t, r + 1)) : (this.state = De.NumericDecimal, this.stateNumericDecimal(t, r));
  }
  addToNumericResult(t, r, n, i) {
    if (r !== n) {
      const u = n - r;
      this.result = this.result * Math.pow(i, u) + parseInt(t.substr(r, u), i), this.consumed += u;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(t, r) {
    const n = r;
    for (; r < t.length; ) {
      const i = t.charCodeAt(r);
      if (cu(i) || Op(i))
        r += 1;
      else
        return this.addToNumericResult(t, n, r, 16), this.emitNumericEntity(i, 3);
    }
    return this.addToNumericResult(t, n, r, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(t, r) {
    const n = r;
    for (; r < t.length; ) {
      const i = t.charCodeAt(r);
      if (cu(i))
        r += 1;
      else
        return this.addToNumericResult(t, n, r, 10), this.emitNumericEntity(i, 2);
    }
    return this.addToNumericResult(t, n, r, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(t, r) {
    var n;
    if (this.consumed <= r)
      return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (t === Te.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === Mt.Strict)
      return 0;
    return this.emitCodePoint(Dp(this.result), this.consumed), this.errors && (t !== Te.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(t, r) {
    const { decodeTree: n } = this;
    let i = n[this.treeIndex], u = (i & $t.VALUE_LENGTH) >> 14;
    for (; r < t.length; r++, this.excess++) {
      const a = t.charCodeAt(r);
      if (this.treeIndex = Np(n, i, this.treeIndex + Math.max(1, u), a), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === Mt.Attribute && // We shouldn't have consumed any characters after the entity,
        (u === 0 || // And there should be no invalid characters.
        Fp(a)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (i = n[this.treeIndex], u = (i & $t.VALUE_LENGTH) >> 14, u !== 0) {
        if (a === Te.SEMI)
          return this.emitNamedEntityData(this.treeIndex, u, this.consumed + this.excess);
        this.decodeMode !== Mt.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var t;
    const { result: r, decodeTree: n } = this, i = (n[r] & $t.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(r, i, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(t, r, n) {
    const { decodeTree: i } = this;
    return this.emitCodePoint(r === 1 ? i[t] & ~$t.VALUE_LENGTH : i[t + 1], n), r === 3 && this.emitCodePoint(i[t + 2], n), n;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var t;
    switch (this.state) {
      case De.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== Mt.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case De.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case De.NumericHex:
        return this.emitNumericEntity(0, 3);
      case De.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case De.EntityStart:
        return 0;
    }
  }
}
function ho(e) {
  let t = "";
  const r = new Lp(e, (n) => t += Sp(n));
  return function(i, u) {
    let a = 0, s = 0;
    for (; (s = i.indexOf("&", s)) >= 0; ) {
      t += i.slice(a, s), r.startEntity(u);
      const c = r.write(
        i,
        // Skip the "&"
        s + 1
      );
      if (c < 0) {
        a = s + r.end();
        break;
      }
      a = s + c, s = c === 0 ? a + 1 : a;
    }
    const o = t + i.slice(a);
    return t = "", o;
  };
}
function Np(e, t, r, n) {
  const i = (t & $t.BRANCH_LENGTH) >> 7, u = t & $t.JUMP_TABLE;
  if (i === 0)
    return u !== 0 && n === u ? r : -1;
  if (u) {
    const o = n - u;
    return o < 0 || o >= i ? -1 : e[r + o] - 1;
  }
  let a = r, s = a + i - 1;
  for (; a <= s; ) {
    const o = a + s >>> 1, c = e[o];
    if (c < n)
      a = o + 1;
    else if (c > n)
      s = o - 1;
    else
      return e[o + i];
  }
  return -1;
}
const Pp = ho(wp);
ho(Ep);
function mo(e, t = Mt.Legacy) {
  return Pp(e, t);
}
function Rp(e) {
  return Object.prototype.toString.call(e);
}
function Ou(e) {
  return Rp(e) === "[object String]";
}
const jp = Object.prototype.hasOwnProperty;
function Bp(e, t) {
  return jp.call(e, t);
}
function ni(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(r) {
    if (r) {
      if (typeof r != "object")
        throw new TypeError(r + "must be object");
      Object.keys(r).forEach(function(n) {
        e[n] = r[n];
      });
    }
  }), e;
}
function bo(e, t, r) {
  return [].concat(e.slice(0, t), r, e.slice(t + 1));
}
function Iu(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function Bn(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), r = 56320 + (e & 1023);
    return String.fromCharCode(t, r);
  }
  return String.fromCharCode(e);
}
const go = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Mp = /&([a-z#][a-z0-9]{1,31});/gi, Vp = new RegExp(go.source + "|" + Mp.source, "gi"), $p = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function Wp(e, t) {
  if (t.charCodeAt(0) === 35 && $p.test(t)) {
    const n = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return Iu(n) ? Bn(n) : e;
  }
  const r = mo(e);
  return r !== e ? r : e;
}
function zp(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(go, "$1");
}
function xr(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(Vp, function(t, r, n) {
    return r || Wp(t, n);
  });
}
const Up = /[&<>"]/, Hp = /[&<>"]/g, qp = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Gp(e) {
  return qp[e];
}
function Ut(e) {
  return Up.test(e) ? e.replace(Hp, Gp) : e;
}
const Kp = /[.?*+^$[\]\\(){}|-]/g;
function Zp(e) {
  return e.replace(Kp, "\\$&");
}
function de(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function Wr(e) {
  if (e >= 8192 && e <= 8202)
    return !0;
  switch (e) {
    case 9:
    // \t
    case 10:
    // \n
    case 11:
    // \v
    case 12:
    // \f
    case 13:
    // \r
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function zr(e) {
  return Tu.test(e) || fo.test(e);
}
function Ur(e) {
  switch (e) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function ii(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const Yp = { mdurl: vp, ucmicro: Cp }, Jp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: bo,
  assign: ni,
  escapeHtml: Ut,
  escapeRE: Zp,
  fromCodePoint: Bn,
  has: Bp,
  isMdAsciiPunct: Ur,
  isPunctChar: zr,
  isSpace: de,
  isString: Ou,
  isValidEntityCode: Iu,
  isWhiteSpace: Wr,
  lib: Yp,
  normalizeReference: ii,
  unescapeAll: xr,
  unescapeMd: zp
}, Symbol.toStringTag, { value: "Module" }));
function Xp(e, t, r) {
  let n, i, u, a;
  const s = e.posMax, o = e.pos;
  for (e.pos = t + 1, n = 1; e.pos < s; ) {
    if (u = e.src.charCodeAt(e.pos), u === 93 && (n--, n === 0)) {
      i = !0;
      break;
    }
    if (a = e.pos, e.md.inline.skipToken(e), u === 91) {
      if (a === e.pos - 1)
        n++;
      else if (r)
        return e.pos = o, -1;
    }
  }
  let c = -1;
  return i && (c = e.pos), e.pos = o, c;
}
function Qp(e, t, r) {
  let n, i = t;
  const u = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (e.charCodeAt(i) === 60) {
    for (i++; i < r; ) {
      if (n = e.charCodeAt(i), n === 10 || n === 60)
        return u;
      if (n === 62)
        return u.pos = i + 1, u.str = xr(e.slice(t + 1, i)), u.ok = !0, u;
      if (n === 92 && i + 1 < r) {
        i += 2;
        continue;
      }
      i++;
    }
    return u;
  }
  let a = 0;
  for (; i < r && (n = e.charCodeAt(i), !(n === 32 || n < 32 || n === 127)); ) {
    if (n === 92 && i + 1 < r) {
      if (e.charCodeAt(i + 1) === 32)
        break;
      i += 2;
      continue;
    }
    if (n === 40 && (a++, a > 32))
      return u;
    if (n === 41) {
      if (a === 0)
        break;
      a--;
    }
    i++;
  }
  return t === i || a !== 0 || (u.str = xr(e.slice(t, i)), u.pos = i, u.ok = !0), u;
}
function eh(e, t, r, n) {
  let i, u = t;
  const a = {
    // if `true`, this is a valid link title
    ok: !1,
    // if `true`, this link can be continued on the next line
    can_continue: !1,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (n)
    a.str = n.str, a.marker = n.marker;
  else {
    if (u >= r)
      return a;
    let s = e.charCodeAt(u);
    if (s !== 34 && s !== 39 && s !== 40)
      return a;
    t++, u++, s === 40 && (s = 41), a.marker = s;
  }
  for (; u < r; ) {
    if (i = e.charCodeAt(u), i === a.marker)
      return a.pos = u + 1, a.str += xr(e.slice(t, u)), a.ok = !0, a;
    if (i === 40 && a.marker === 41)
      return a;
    i === 92 && u + 1 < r && u++, u++;
  }
  return a.can_continue = !0, a.str += xr(e.slice(t, u)), a;
}
const th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: Qp,
  parseLinkLabel: Xp,
  parseLinkTitle: eh
}, Symbol.toStringTag, { value: "Module" })), yt = {};
yt.code_inline = function(e, t, r, n, i) {
  const u = e[t];
  return "<code" + i.renderAttrs(u) + ">" + Ut(u.content) + "</code>";
};
yt.code_block = function(e, t, r, n, i) {
  const u = e[t];
  return "<pre" + i.renderAttrs(u) + "><code>" + Ut(e[t].content) + `</code></pre>
`;
};
yt.fence = function(e, t, r, n, i) {
  const u = e[t], a = u.info ? xr(u.info).trim() : "";
  let s = "", o = "";
  if (a) {
    const f = a.split(/(\s+)/g);
    s = f[0], o = f.slice(2).join("");
  }
  let c;
  if (r.highlight ? c = r.highlight(u.content, s, o) || Ut(u.content) : c = Ut(u.content), c.indexOf("<pre") === 0)
    return c + `
`;
  if (a) {
    const f = u.attrIndex("class"), p = u.attrs ? u.attrs.slice() : [];
    f < 0 ? p.push(["class", r.langPrefix + s]) : (p[f] = p[f].slice(), p[f][1] += " " + r.langPrefix + s);
    const l = {
      attrs: p
    };
    return `<pre><code${i.renderAttrs(l)}>${c}</code></pre>
`;
  }
  return `<pre><code${i.renderAttrs(u)}>${c}</code></pre>
`;
};
yt.image = function(e, t, r, n, i) {
  const u = e[t];
  return u.attrs[u.attrIndex("alt")][1] = i.renderInlineAsText(u.children, r, n), i.renderToken(e, t, r);
};
yt.hardbreak = function(e, t, r) {
  return r.xhtmlOut ? `<br />
` : `<br>
`;
};
yt.softbreak = function(e, t, r) {
  return r.breaks ? r.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
yt.text = function(e, t) {
  return Ut(e[t].content);
};
yt.html_block = function(e, t) {
  return e[t].content;
};
yt.html_inline = function(e, t) {
  return e[t].content;
};
function Cr() {
  this.rules = ni({}, yt);
}
Cr.prototype.renderAttrs = function(t) {
  let r, n, i;
  if (!t.attrs)
    return "";
  for (i = "", r = 0, n = t.attrs.length; r < n; r++)
    i += " " + Ut(t.attrs[r][0]) + '="' + Ut(t.attrs[r][1]) + '"';
  return i;
};
Cr.prototype.renderToken = function(t, r, n) {
  const i = t[r];
  let u = "";
  if (i.hidden)
    return "";
  i.block && i.nesting !== -1 && r && t[r - 1].hidden && (u += `
`), u += (i.nesting === -1 ? "</" : "<") + i.tag, u += this.renderAttrs(i), i.nesting === 0 && n.xhtmlOut && (u += " /");
  let a = !1;
  if (i.block && (a = !0, i.nesting === 1 && r + 1 < t.length)) {
    const s = t[r + 1];
    (s.type === "inline" || s.hidden || s.nesting === -1 && s.tag === i.tag) && (a = !1);
  }
  return u += a ? `>
` : ">", u;
};
Cr.prototype.renderInline = function(e, t, r) {
  let n = "";
  const i = this.rules;
  for (let u = 0, a = e.length; u < a; u++) {
    const s = e[u].type;
    typeof i[s] < "u" ? n += i[s](e, u, t, r, this) : n += this.renderToken(e, u, t);
  }
  return n;
};
Cr.prototype.renderInlineAsText = function(e, t, r) {
  let n = "";
  for (let i = 0, u = e.length; i < u; i++)
    switch (e[i].type) {
      case "text":
        n += e[i].content;
        break;
      case "image":
        n += this.renderInlineAsText(e[i].children, t, r);
        break;
      case "html_inline":
      case "html_block":
        n += e[i].content;
        break;
      case "softbreak":
      case "hardbreak":
        n += `
`;
        break;
    }
  return n;
};
Cr.prototype.render = function(e, t, r) {
  let n = "";
  const i = this.rules;
  for (let u = 0, a = e.length; u < a; u++) {
    const s = e[u].type;
    s === "inline" ? n += this.renderInline(e[u].children, t, r) : typeof i[s] < "u" ? n += i[s](e, u, t, r, this) : n += this.renderToken(e, u, t, r);
  }
  return n;
};
function $e() {
  this.__rules__ = [], this.__cache__ = null;
}
$e.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
$e.prototype.__compile__ = function() {
  const e = this, t = [""];
  e.__rules__.forEach(function(r) {
    r.enabled && r.alt.forEach(function(n) {
      t.indexOf(n) < 0 && t.push(n);
    });
  }), e.__cache__ = {}, t.forEach(function(r) {
    e.__cache__[r] = [], e.__rules__.forEach(function(n) {
      n.enabled && (r && n.alt.indexOf(r) < 0 || e.__cache__[r].push(n.fn));
    });
  });
};
$e.prototype.at = function(e, t, r) {
  const n = this.__find__(e), i = r || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[n].fn = t, this.__rules__[n].alt = i.alt || [], this.__cache__ = null;
};
$e.prototype.before = function(e, t, r, n) {
  const i = this.__find__(e), u = n || {};
  if (i === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(i, 0, {
    name: t,
    enabled: !0,
    fn: r,
    alt: u.alt || []
  }), this.__cache__ = null;
};
$e.prototype.after = function(e, t, r, n) {
  const i = this.__find__(e), u = n || {};
  if (i === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(i + 1, 0, {
    name: t,
    enabled: !0,
    fn: r,
    alt: u.alt || []
  }), this.__cache__ = null;
};
$e.prototype.push = function(e, t, r) {
  const n = r || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: n.alt || []
  }), this.__cache__ = null;
};
$e.prototype.enable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const r = [];
  return e.forEach(function(n) {
    const i = this.__find__(n);
    if (i < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[i].enabled = !0, r.push(n);
  }, this), this.__cache__ = null, r;
};
$e.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(r) {
    r.enabled = !1;
  }), this.enable(e, t);
};
$e.prototype.disable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const r = [];
  return e.forEach(function(n) {
    const i = this.__find__(n);
    if (i < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[i].enabled = !1, r.push(n);
  }, this), this.__cache__ = null, r;
};
$e.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function at(e, t, r) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = r, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
at.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const r = this.attrs;
  for (let n = 0, i = r.length; n < i; n++)
    if (r[n][0] === t)
      return n;
  return -1;
};
at.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
at.prototype.attrSet = function(t, r) {
  const n = this.attrIndex(t), i = [t, r];
  n < 0 ? this.attrPush(i) : this.attrs[n] = i;
};
at.prototype.attrGet = function(t) {
  const r = this.attrIndex(t);
  let n = null;
  return r >= 0 && (n = this.attrs[r][1]), n;
};
at.prototype.attrJoin = function(t, r) {
  const n = this.attrIndex(t);
  n < 0 ? this.attrPush([t, r]) : this.attrs[n][1] = this.attrs[n][1] + " " + r;
};
function xo(e, t, r) {
  this.src = e, this.env = r, this.tokens = [], this.inlineMode = !1, this.md = t;
}
xo.prototype.Token = at;
const rh = /\r\n?|\n/g, nh = /\0/g;
function ih(e) {
  let t;
  t = e.src.replace(rh, `
`), t = t.replace(nh, "�"), e.src = t;
}
function uh(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function sh(e) {
  const t = e.tokens;
  for (let r = 0, n = t.length; r < n; r++) {
    const i = t[r];
    i.type === "inline" && e.md.inline.parse(i.content, e.md, e.env, i.children);
  }
}
function ah(e) {
  return /^<a[>\s]/i.test(e);
}
function oh(e) {
  return /^<\/a\s*>/i.test(e);
}
function ch(e) {
  const t = e.tokens;
  if (e.md.options.linkify)
    for (let r = 0, n = t.length; r < n; r++) {
      if (t[r].type !== "inline" || !e.md.linkify.pretest(t[r].content))
        continue;
      let i = t[r].children, u = 0;
      for (let a = i.length - 1; a >= 0; a--) {
        const s = i[a];
        if (s.type === "link_close") {
          for (a--; i[a].level !== s.level && i[a].type !== "link_open"; )
            a--;
          continue;
        }
        if (s.type === "html_inline" && (ah(s.content) && u > 0 && u--, oh(s.content) && u++), !(u > 0) && s.type === "text" && e.md.linkify.test(s.content)) {
          const o = s.content;
          let c = e.md.linkify.match(o);
          const f = [];
          let p = s.level, l = 0;
          c.length > 0 && c[0].index === 0 && a > 0 && i[a - 1].type === "text_special" && (c = c.slice(1));
          for (let h = 0; h < c.length; h++) {
            const d = c[h].url, _ = e.md.normalizeLink(d);
            if (!e.md.validateLink(_))
              continue;
            let C = c[h].text;
            c[h].schema ? c[h].schema === "mailto:" && !/^mailto:/i.test(C) ? C = e.md.normalizeLinkText("mailto:" + C).replace(/^mailto:/, "") : C = e.md.normalizeLinkText(C) : C = e.md.normalizeLinkText("http://" + C).replace(/^http:\/\//, "");
            const T = c[h].index;
            if (T > l) {
              const w = new e.Token("text", "", 0);
              w.content = o.slice(l, T), w.level = p, f.push(w);
            }
            const I = new e.Token("link_open", "a", 1);
            I.attrs = [["href", _]], I.level = p++, I.markup = "linkify", I.info = "auto", f.push(I);
            const L = new e.Token("text", "", 0);
            L.content = C, L.level = p, f.push(L);
            const S = new e.Token("link_close", "a", -1);
            S.level = --p, S.markup = "linkify", S.info = "auto", f.push(S), l = c[h].lastIndex;
          }
          if (l < o.length) {
            const h = new e.Token("text", "", 0);
            h.content = o.slice(l), h.level = p, f.push(h);
          }
          t[r].children = i = bo(i, a, f);
        }
      }
    }
}
const yo = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, lh = /\((c|tm|r)\)/i, fh = /\((c|tm|r)\)/ig, ph = {
  c: "©",
  r: "®",
  tm: "™"
};
function hh(e, t) {
  return ph[t.toLowerCase()];
}
function dh(e) {
  let t = 0;
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    n.type === "text" && !t && (n.content = n.content.replace(fh, hh)), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function mh(e) {
  let t = 0;
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    n.type === "text" && !t && yo.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function bh(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (lh.test(e.tokens[t].content) && dh(e.tokens[t].children), yo.test(e.tokens[t].content) && mh(e.tokens[t].children));
}
const gh = /['"]/, Ts = /['"]/g, Os = "’";
function vn(e, t, r) {
  return e.slice(0, t) + r + e.slice(t + 1);
}
function xh(e, t) {
  let r;
  const n = [];
  for (let i = 0; i < e.length; i++) {
    const u = e[i], a = e[i].level;
    for (r = n.length - 1; r >= 0 && !(n[r].level <= a); r--)
      ;
    if (n.length = r + 1, u.type !== "text")
      continue;
    let s = u.content, o = 0, c = s.length;
    e:
      for (; o < c; ) {
        Ts.lastIndex = o;
        const f = Ts.exec(s);
        if (!f)
          break;
        let p = !0, l = !0;
        o = f.index + 1;
        const h = f[0] === "'";
        let d = 32;
        if (f.index - 1 >= 0)
          d = s.charCodeAt(f.index - 1);
        else
          for (r = i - 1; r >= 0 && !(e[r].type === "softbreak" || e[r].type === "hardbreak"); r--)
            if (e[r].content) {
              d = e[r].content.charCodeAt(e[r].content.length - 1);
              break;
            }
        let _ = 32;
        if (o < c)
          _ = s.charCodeAt(o);
        else
          for (r = i + 1; r < e.length && !(e[r].type === "softbreak" || e[r].type === "hardbreak"); r++)
            if (e[r].content) {
              _ = e[r].content.charCodeAt(0);
              break;
            }
        const C = Ur(d) || zr(String.fromCharCode(d)), T = Ur(_) || zr(String.fromCharCode(_)), I = Wr(d), L = Wr(_);
        if (L ? p = !1 : T && (I || C || (p = !1)), I ? l = !1 : C && (L || T || (l = !1)), _ === 34 && f[0] === '"' && d >= 48 && d <= 57 && (l = p = !1), p && l && (p = C, l = T), !p && !l) {
          h && (u.content = vn(u.content, f.index, Os));
          continue;
        }
        if (l)
          for (r = n.length - 1; r >= 0; r--) {
            let S = n[r];
            if (n[r].level < a)
              break;
            if (S.single === h && n[r].level === a) {
              S = n[r];
              let w, y;
              h ? (w = t.md.options.quotes[2], y = t.md.options.quotes[3]) : (w = t.md.options.quotes[0], y = t.md.options.quotes[1]), u.content = vn(u.content, f.index, y), e[S.token].content = vn(
                e[S.token].content,
                S.pos,
                w
              ), o += y.length - 1, S.token === i && (o += w.length - 1), s = u.content, c = s.length, n.length = r;
              continue e;
            }
          }
        p ? n.push({
          token: i,
          pos: f.index,
          single: h,
          level: a
        }) : l && h && (u.content = vn(u.content, f.index, Os));
      }
  }
}
function yh(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !gh.test(e.tokens[t].content) || xh(e.tokens[t].children, e);
}
function _h(e) {
  let t, r;
  const n = e.tokens, i = n.length;
  for (let u = 0; u < i; u++) {
    if (n[u].type !== "inline") continue;
    const a = n[u].children, s = a.length;
    for (t = 0; t < s; t++)
      a[t].type === "text_special" && (a[t].type = "text");
    for (t = r = 0; t < s; t++)
      a[t].type === "text" && t + 1 < s && a[t + 1].type === "text" ? a[t + 1].content = a[t].content + a[t + 1].content : (t !== r && (a[r] = a[t]), r++);
    t !== r && (a.length = r);
  }
}
const Ri = [
  ["normalize", ih],
  ["block", uh],
  ["inline", sh],
  ["linkify", ch],
  ["replacements", bh],
  ["smartquotes", yh],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", _h]
];
function Fu() {
  this.ruler = new $e();
  for (let e = 0; e < Ri.length; e++)
    this.ruler.push(Ri[e][0], Ri[e][1]);
}
Fu.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let r = 0, n = t.length; r < n; r++)
    t[r](e);
};
Fu.prototype.State = xo;
function _t(e, t, r, n) {
  this.src = e, this.md = t, this.env = r, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const i = this.src;
  for (let u = 0, a = 0, s = 0, o = 0, c = i.length, f = !1; a < c; a++) {
    const p = i.charCodeAt(a);
    if (!f)
      if (de(p)) {
        s++, p === 9 ? o += 4 - o % 4 : o++;
        continue;
      } else
        f = !0;
    (p === 10 || a === c - 1) && (p !== 10 && a++, this.bMarks.push(u), this.eMarks.push(a), this.tShift.push(s), this.sCount.push(o), this.bsCount.push(0), f = !1, s = 0, o = 0, u = a + 1);
  }
  this.bMarks.push(i.length), this.eMarks.push(i.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
_t.prototype.push = function(e, t, r) {
  const n = new at(e, t, r);
  return n.block = !0, r < 0 && this.level--, n.level = this.level, r > 0 && this.level++, this.tokens.push(n), n;
};
_t.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
_t.prototype.skipEmptyLines = function(t) {
  for (let r = this.lineMax; t < r && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
_t.prototype.skipSpaces = function(t) {
  for (let r = this.src.length; t < r; t++) {
    const n = this.src.charCodeAt(t);
    if (!de(n))
      break;
  }
  return t;
};
_t.prototype.skipSpacesBack = function(t, r) {
  if (t <= r)
    return t;
  for (; t > r; )
    if (!de(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
_t.prototype.skipChars = function(t, r) {
  for (let n = this.src.length; t < n && this.src.charCodeAt(t) === r; t++)
    ;
  return t;
};
_t.prototype.skipCharsBack = function(t, r, n) {
  if (t <= n)
    return t;
  for (; t > n; )
    if (r !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
_t.prototype.getLines = function(t, r, n, i) {
  if (t >= r)
    return "";
  const u = new Array(r - t);
  for (let a = 0, s = t; s < r; s++, a++) {
    let o = 0;
    const c = this.bMarks[s];
    let f = c, p;
    for (s + 1 < r || i ? p = this.eMarks[s] + 1 : p = this.eMarks[s]; f < p && o < n; ) {
      const l = this.src.charCodeAt(f);
      if (de(l))
        l === 9 ? o += 4 - (o + this.bsCount[s]) % 4 : o++;
      else if (f - c < this.tShift[s])
        o++;
      else
        break;
      f++;
    }
    o > n ? u[a] = new Array(o - n + 1).join(" ") + this.src.slice(f, p) : u[a] = this.src.slice(f, p);
  }
  return u.join("");
};
_t.prototype.Token = at;
const vh = 65536;
function ji(e, t) {
  const r = e.bMarks[t] + e.tShift[t], n = e.eMarks[t];
  return e.src.slice(r, n);
}
function Is(e) {
  const t = [], r = e.length;
  let n = 0, i = e.charCodeAt(n), u = !1, a = 0, s = "";
  for (; n < r; )
    i === 124 && (u ? (s += e.substring(a, n - 1), a = n) : (t.push(s + e.substring(a, n)), s = "", a = n + 1)), u = i === 92, n++, i = e.charCodeAt(n);
  return t.push(s + e.substring(a)), t;
}
function kh(e, t, r, n) {
  if (t + 2 > r)
    return !1;
  let i = t + 1;
  if (e.sCount[i] < e.blkIndent || e.sCount[i] - e.blkIndent >= 4)
    return !1;
  let u = e.bMarks[i] + e.tShift[i];
  if (u >= e.eMarks[i])
    return !1;
  const a = e.src.charCodeAt(u++);
  if (a !== 124 && a !== 45 && a !== 58 || u >= e.eMarks[i])
    return !1;
  const s = e.src.charCodeAt(u++);
  if (s !== 124 && s !== 45 && s !== 58 && !de(s) || a === 45 && de(s))
    return !1;
  for (; u < e.eMarks[i]; ) {
    const S = e.src.charCodeAt(u);
    if (S !== 124 && S !== 45 && S !== 58 && !de(S))
      return !1;
    u++;
  }
  let o = ji(e, t + 1), c = o.split("|");
  const f = [];
  for (let S = 0; S < c.length; S++) {
    const w = c[S].trim();
    if (!w) {
      if (S === 0 || S === c.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(w))
      return !1;
    w.charCodeAt(w.length - 1) === 58 ? f.push(w.charCodeAt(0) === 58 ? "center" : "right") : w.charCodeAt(0) === 58 ? f.push("left") : f.push("");
  }
  if (o = ji(e, t).trim(), o.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  c = Is(o), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop();
  const p = c.length;
  if (p === 0 || p !== f.length)
    return !1;
  if (n)
    return !0;
  const l = e.parentType;
  e.parentType = "table";
  const h = e.md.block.ruler.getRules("blockquote"), d = e.push("table_open", "table", 1), _ = [t, 0];
  d.map = _;
  const C = e.push("thead_open", "thead", 1);
  C.map = [t, t + 1];
  const T = e.push("tr_open", "tr", 1);
  T.map = [t, t + 1];
  for (let S = 0; S < c.length; S++) {
    const w = e.push("th_open", "th", 1);
    f[S] && (w.attrs = [["style", "text-align:" + f[S]]]);
    const y = e.push("inline", "", 0);
    y.content = c[S].trim(), y.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let I, L = 0;
  for (i = t + 2; i < r && !(e.sCount[i] < e.blkIndent); i++) {
    let S = !1;
    for (let y = 0, F = h.length; y < F; y++)
      if (h[y](e, i, r, !0)) {
        S = !0;
        break;
      }
    if (S || (o = ji(e, i).trim(), !o) || e.sCount[i] - e.blkIndent >= 4 || (c = Is(o), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop(), L += p - c.length, L > vh))
      break;
    if (i === t + 2) {
      const y = e.push("tbody_open", "tbody", 1);
      y.map = I = [t + 2, 0];
    }
    const w = e.push("tr_open", "tr", 1);
    w.map = [i, i + 1];
    for (let y = 0; y < p; y++) {
      const F = e.push("td_open", "td", 1);
      f[y] && (F.attrs = [["style", "text-align:" + f[y]]]);
      const B = e.push("inline", "", 0);
      B.content = c[y] ? c[y].trim() : "", B.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return I && (e.push("tbody_close", "tbody", -1), I[1] = i), e.push("table_close", "table", -1), _[1] = i, e.parentType = l, e.line = i, !0;
}
function Ch(e, t, r) {
  if (e.sCount[t] - e.blkIndent < 4)
    return !1;
  let n = t + 1, i = n;
  for (; n < r; ) {
    if (e.isEmpty(n)) {
      n++;
      continue;
    }
    if (e.sCount[n] - e.blkIndent >= 4) {
      n++, i = n;
      continue;
    }
    break;
  }
  e.line = i;
  const u = e.push("code_block", "code", 0);
  return u.content = e.getLines(t, i, 4 + e.blkIndent, !1) + `
`, u.map = [t, e.line], !0;
}
function wh(e, t, r, n) {
  let i = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || i + 3 > u)
    return !1;
  const a = e.src.charCodeAt(i);
  if (a !== 126 && a !== 96)
    return !1;
  let s = i;
  i = e.skipChars(i, a);
  let o = i - s;
  if (o < 3)
    return !1;
  const c = e.src.slice(s, i), f = e.src.slice(i, u);
  if (a === 96 && f.indexOf(String.fromCharCode(a)) >= 0)
    return !1;
  if (n)
    return !0;
  let p = t, l = !1;
  for (; p++, !(p >= r || (i = s = e.bMarks[p] + e.tShift[p], u = e.eMarks[p], i < u && e.sCount[p] < e.blkIndent)); )
    if (e.src.charCodeAt(i) === a && !(e.sCount[p] - e.blkIndent >= 4) && (i = e.skipChars(i, a), !(i - s < o) && (i = e.skipSpaces(i), !(i < u)))) {
      l = !0;
      break;
    }
  o = e.sCount[t], e.line = p + (l ? 1 : 0);
  const h = e.push("fence", "code", 0);
  return h.info = f, h.content = e.getLines(t + 1, p, o, !0), h.markup = c, h.map = [t, e.line], !0;
}
function Eh(e, t, r, n) {
  let i = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  const a = e.lineMax;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(i) !== 62)
    return !1;
  if (n)
    return !0;
  const s = [], o = [], c = [], f = [], p = e.md.block.ruler.getRules("blockquote"), l = e.parentType;
  e.parentType = "blockquote";
  let h = !1, d;
  for (d = t; d < r; d++) {
    const L = e.sCount[d] < e.blkIndent;
    if (i = e.bMarks[d] + e.tShift[d], u = e.eMarks[d], i >= u)
      break;
    if (e.src.charCodeAt(i++) === 62 && !L) {
      let w = e.sCount[d] + 1, y, F;
      e.src.charCodeAt(i) === 32 ? (i++, w++, F = !1, y = !0) : e.src.charCodeAt(i) === 9 ? (y = !0, (e.bsCount[d] + w) % 4 === 3 ? (i++, w++, F = !1) : F = !0) : y = !1;
      let B = w;
      for (s.push(e.bMarks[d]), e.bMarks[d] = i; i < u; ) {
        const Q = e.src.charCodeAt(i);
        if (de(Q))
          Q === 9 ? B += 4 - (B + e.bsCount[d] + (F ? 1 : 0)) % 4 : B++;
        else
          break;
        i++;
      }
      h = i >= u, o.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (y ? 1 : 0), c.push(e.sCount[d]), e.sCount[d] = B - w, f.push(e.tShift[d]), e.tShift[d] = i - e.bMarks[d];
      continue;
    }
    if (h)
      break;
    let S = !1;
    for (let w = 0, y = p.length; w < y; w++)
      if (p[w](e, d, r, !0)) {
        S = !0;
        break;
      }
    if (S) {
      e.lineMax = d, e.blkIndent !== 0 && (s.push(e.bMarks[d]), o.push(e.bsCount[d]), f.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] -= e.blkIndent);
      break;
    }
    s.push(e.bMarks[d]), o.push(e.bsCount[d]), f.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] = -1;
  }
  const _ = e.blkIndent;
  e.blkIndent = 0;
  const C = e.push("blockquote_open", "blockquote", 1);
  C.markup = ">";
  const T = [t, 0];
  C.map = T, e.md.block.tokenize(e, t, d);
  const I = e.push("blockquote_close", "blockquote", -1);
  I.markup = ">", e.lineMax = a, e.parentType = l, T[1] = e.line;
  for (let L = 0; L < f.length; L++)
    e.bMarks[L + t] = s[L], e.tShift[L + t] = f[L], e.sCount[L + t] = c[L], e.bsCount[L + t] = o[L];
  return e.blkIndent = _, !0;
}
function Ah(e, t, r, n) {
  const i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let u = e.bMarks[t] + e.tShift[t];
  const a = e.src.charCodeAt(u++);
  if (a !== 42 && a !== 45 && a !== 95)
    return !1;
  let s = 1;
  for (; u < i; ) {
    const c = e.src.charCodeAt(u++);
    if (c !== a && !de(c))
      return !1;
    c === a && s++;
  }
  if (s < 3)
    return !1;
  if (n)
    return !0;
  e.line = t + 1;
  const o = e.push("hr", "hr", 0);
  return o.map = [t, e.line], o.markup = Array(s + 1).join(String.fromCharCode(a)), !0;
}
function Fs(e, t) {
  const r = e.eMarks[t];
  let n = e.bMarks[t] + e.tShift[t];
  const i = e.src.charCodeAt(n++);
  if (i !== 42 && i !== 45 && i !== 43)
    return -1;
  if (n < r) {
    const u = e.src.charCodeAt(n);
    if (!de(u))
      return -1;
  }
  return n;
}
function Ls(e, t) {
  const r = e.bMarks[t] + e.tShift[t], n = e.eMarks[t];
  let i = r;
  if (i + 1 >= n)
    return -1;
  let u = e.src.charCodeAt(i++);
  if (u < 48 || u > 57)
    return -1;
  for (; ; ) {
    if (i >= n)
      return -1;
    if (u = e.src.charCodeAt(i++), u >= 48 && u <= 57) {
      if (i - r >= 10)
        return -1;
      continue;
    }
    if (u === 41 || u === 46)
      break;
    return -1;
  }
  return i < n && (u = e.src.charCodeAt(i), !de(u)) ? -1 : i;
}
function Sh(e, t) {
  const r = e.level + 2;
  for (let n = t + 2, i = e.tokens.length - 2; n < i; n++)
    e.tokens[n].level === r && e.tokens[n].type === "paragraph_open" && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2);
}
function Dh(e, t, r, n) {
  let i, u, a, s, o = t, c = !0;
  if (e.sCount[o] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[o] - e.listIndent >= 4 && e.sCount[o] < e.blkIndent)
    return !1;
  let f = !1;
  n && e.parentType === "paragraph" && e.sCount[o] >= e.blkIndent && (f = !0);
  let p, l, h;
  if ((h = Ls(e, o)) >= 0) {
    if (p = !0, a = e.bMarks[o] + e.tShift[o], l = Number(e.src.slice(a, h - 1)), f && l !== 1) return !1;
  } else if ((h = Fs(e, o)) >= 0)
    p = !1;
  else
    return !1;
  if (f && e.skipSpaces(h) >= e.eMarks[o])
    return !1;
  if (n)
    return !0;
  const d = e.src.charCodeAt(h - 1), _ = e.tokens.length;
  p ? (s = e.push("ordered_list_open", "ol", 1), l !== 1 && (s.attrs = [["start", l]])) : s = e.push("bullet_list_open", "ul", 1);
  const C = [o, 0];
  s.map = C, s.markup = String.fromCharCode(d);
  let T = !1;
  const I = e.md.block.ruler.getRules("list"), L = e.parentType;
  for (e.parentType = "list"; o < r; ) {
    u = h, i = e.eMarks[o];
    const S = e.sCount[o] + h - (e.bMarks[o] + e.tShift[o]);
    let w = S;
    for (; u < i; ) {
      const x = e.src.charCodeAt(u);
      if (x === 9)
        w += 4 - (w + e.bsCount[o]) % 4;
      else if (x === 32)
        w++;
      else
        break;
      u++;
    }
    const y = u;
    let F;
    y >= i ? F = 1 : F = w - S, F > 4 && (F = 1);
    const B = S + F;
    s = e.push("list_item_open", "li", 1), s.markup = String.fromCharCode(d);
    const Q = [o, 0];
    s.map = Q, p && (s.info = e.src.slice(a, h - 1));
    const H = e.tight, z = e.tShift[o], ue = e.sCount[o], re = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = B, e.tight = !0, e.tShift[o] = y - e.bMarks[o], e.sCount[o] = w, y >= i && e.isEmpty(o + 1) ? e.line = Math.min(e.line + 2, r) : e.md.block.tokenize(e, o, r, !0), (!e.tight || T) && (c = !1), T = e.line - o > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = re, e.tShift[o] = z, e.sCount[o] = ue, e.tight = H, s = e.push("list_item_close", "li", -1), s.markup = String.fromCharCode(d), o = e.line, Q[1] = o, o >= r || e.sCount[o] < e.blkIndent || e.sCount[o] - e.blkIndent >= 4)
      break;
    let E = !1;
    for (let x = 0, k = I.length; x < k; x++)
      if (I[x](e, o, r, !0)) {
        E = !0;
        break;
      }
    if (E)
      break;
    if (p) {
      if (h = Ls(e, o), h < 0)
        break;
      a = e.bMarks[o] + e.tShift[o];
    } else if (h = Fs(e, o), h < 0)
      break;
    if (d !== e.src.charCodeAt(h - 1))
      break;
  }
  return p ? s = e.push("ordered_list_close", "ol", -1) : s = e.push("bullet_list_close", "ul", -1), s.markup = String.fromCharCode(d), C[1] = o, e.line = o, e.parentType = L, c && Sh(e, _), !0;
}
function Th(e, t, r, n) {
  let i = e.bMarks[t] + e.tShift[t], u = e.eMarks[t], a = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(i) !== 91)
    return !1;
  function s(I) {
    const L = e.lineMax;
    if (I >= L || e.isEmpty(I))
      return null;
    let S = !1;
    if (e.sCount[I] - e.blkIndent > 3 && (S = !0), e.sCount[I] < 0 && (S = !0), !S) {
      const F = e.md.block.ruler.getRules("reference"), B = e.parentType;
      e.parentType = "reference";
      let Q = !1;
      for (let H = 0, z = F.length; H < z; H++)
        if (F[H](e, I, L, !0)) {
          Q = !0;
          break;
        }
      if (e.parentType = B, Q)
        return null;
    }
    const w = e.bMarks[I] + e.tShift[I], y = e.eMarks[I];
    return e.src.slice(w, y + 1);
  }
  let o = e.src.slice(i, u + 1);
  u = o.length;
  let c = -1;
  for (i = 1; i < u; i++) {
    const I = o.charCodeAt(i);
    if (I === 91)
      return !1;
    if (I === 93) {
      c = i;
      break;
    } else if (I === 10) {
      const L = s(a);
      L !== null && (o += L, u = o.length, a++);
    } else if (I === 92 && (i++, i < u && o.charCodeAt(i) === 10)) {
      const L = s(a);
      L !== null && (o += L, u = o.length, a++);
    }
  }
  if (c < 0 || o.charCodeAt(c + 1) !== 58)
    return !1;
  for (i = c + 2; i < u; i++) {
    const I = o.charCodeAt(i);
    if (I === 10) {
      const L = s(a);
      L !== null && (o += L, u = o.length, a++);
    } else if (!de(I)) break;
  }
  const f = e.md.helpers.parseLinkDestination(o, i, u);
  if (!f.ok)
    return !1;
  const p = e.md.normalizeLink(f.str);
  if (!e.md.validateLink(p))
    return !1;
  i = f.pos;
  const l = i, h = a, d = i;
  for (; i < u; i++) {
    const I = o.charCodeAt(i);
    if (I === 10) {
      const L = s(a);
      L !== null && (o += L, u = o.length, a++);
    } else if (!de(I)) break;
  }
  let _ = e.md.helpers.parseLinkTitle(o, i, u);
  for (; _.can_continue; ) {
    const I = s(a);
    if (I === null) break;
    o += I, i = u, u = o.length, a++, _ = e.md.helpers.parseLinkTitle(o, i, u, _);
  }
  let C;
  for (i < u && d !== i && _.ok ? (C = _.str, i = _.pos) : (C = "", i = l, a = h); i < u; ) {
    const I = o.charCodeAt(i);
    if (!de(I))
      break;
    i++;
  }
  if (i < u && o.charCodeAt(i) !== 10 && C)
    for (C = "", i = l, a = h; i < u; ) {
      const I = o.charCodeAt(i);
      if (!de(I))
        break;
      i++;
    }
  if (i < u && o.charCodeAt(i) !== 10)
    return !1;
  const T = ii(o.slice(1, c));
  return T ? (n || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[T] > "u" && (e.env.references[T] = { title: C, href: p }), e.line = a), !0) : !1;
}
const Oh = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Ih = "[a-zA-Z_:][a-zA-Z0-9:._-]*", Fh = "[^\"'=<>`\\x00-\\x20]+", Lh = "'[^']*'", Nh = '"[^"]*"', Ph = "(?:" + Fh + "|" + Lh + "|" + Nh + ")", Rh = "(?:\\s+" + Ih + "(?:\\s*=\\s*" + Ph + ")?)", _o = "<[A-Za-z][A-Za-z0-9\\-]*" + Rh + "*\\s*\\/?>", vo = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", jh = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", Bh = "<[?][\\s\\S]*?[?]>", Mh = "<![A-Za-z][^>]*>", Vh = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", $h = new RegExp("^(?:" + _o + "|" + vo + "|" + jh + "|" + Bh + "|" + Mh + "|" + Vh + ")"), Wh = new RegExp("^(?:" + _o + "|" + vo + ")"), hr = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Oh.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(Wh.source + "\\s*$"), /^$/, !1]
];
function zh(e, t, r, n) {
  let i = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(i) !== 60)
    return !1;
  let a = e.src.slice(i, u), s = 0;
  for (; s < hr.length && !hr[s][0].test(a); s++)
    ;
  if (s === hr.length)
    return !1;
  if (n)
    return hr[s][2];
  let o = t + 1;
  if (!hr[s][1].test(a)) {
    for (; o < r && !(e.sCount[o] < e.blkIndent); o++)
      if (i = e.bMarks[o] + e.tShift[o], u = e.eMarks[o], a = e.src.slice(i, u), hr[s][1].test(a)) {
        a.length !== 0 && o++;
        break;
      }
  }
  e.line = o;
  const c = e.push("html_block", "", 0);
  return c.map = [t, o], c.content = e.getLines(t, o, e.blkIndent, !0), !0;
}
function Uh(e, t, r, n) {
  let i = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let a = e.src.charCodeAt(i);
  if (a !== 35 || i >= u)
    return !1;
  let s = 1;
  for (a = e.src.charCodeAt(++i); a === 35 && i < u && s <= 6; )
    s++, a = e.src.charCodeAt(++i);
  if (s > 6 || i < u && !de(a))
    return !1;
  if (n)
    return !0;
  u = e.skipSpacesBack(u, i);
  const o = e.skipCharsBack(u, 35, i);
  o > i && de(e.src.charCodeAt(o - 1)) && (u = o), e.line = t + 1;
  const c = e.push("heading_open", "h" + String(s), 1);
  c.markup = "########".slice(0, s), c.map = [t, e.line];
  const f = e.push("inline", "", 0);
  f.content = e.src.slice(i, u).trim(), f.map = [t, e.line], f.children = [];
  const p = e.push("heading_close", "h" + String(s), -1);
  return p.markup = "########".slice(0, s), !0;
}
function Hh(e, t, r) {
  const n = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  const i = e.parentType;
  e.parentType = "paragraph";
  let u = 0, a, s = t + 1;
  for (; s < r && !e.isEmpty(s); s++) {
    if (e.sCount[s] - e.blkIndent > 3)
      continue;
    if (e.sCount[s] >= e.blkIndent) {
      let h = e.bMarks[s] + e.tShift[s];
      const d = e.eMarks[s];
      if (h < d && (a = e.src.charCodeAt(h), (a === 45 || a === 61) && (h = e.skipChars(h, a), h = e.skipSpaces(h), h >= d))) {
        u = a === 61 ? 1 : 2;
        break;
      }
    }
    if (e.sCount[s] < 0)
      continue;
    let l = !1;
    for (let h = 0, d = n.length; h < d; h++)
      if (n[h](e, s, r, !0)) {
        l = !0;
        break;
      }
    if (l)
      break;
  }
  if (!u)
    return !1;
  const o = e.getLines(t, s, e.blkIndent, !1).trim();
  e.line = s + 1;
  const c = e.push("heading_open", "h" + String(u), 1);
  c.markup = String.fromCharCode(a), c.map = [t, e.line];
  const f = e.push("inline", "", 0);
  f.content = o, f.map = [t, e.line - 1], f.children = [];
  const p = e.push("heading_close", "h" + String(u), -1);
  return p.markup = String.fromCharCode(a), e.parentType = i, !0;
}
function qh(e, t, r) {
  const n = e.md.block.ruler.getRules("paragraph"), i = e.parentType;
  let u = t + 1;
  for (e.parentType = "paragraph"; u < r && !e.isEmpty(u); u++) {
    if (e.sCount[u] - e.blkIndent > 3 || e.sCount[u] < 0)
      continue;
    let c = !1;
    for (let f = 0, p = n.length; f < p; f++)
      if (n[f](e, u, r, !0)) {
        c = !0;
        break;
      }
    if (c)
      break;
  }
  const a = e.getLines(t, u, e.blkIndent, !1).trim();
  e.line = u;
  const s = e.push("paragraph_open", "p", 1);
  s.map = [t, e.line];
  const o = e.push("inline", "", 0);
  return o.content = a, o.map = [t, e.line], o.children = [], e.push("paragraph_close", "p", -1), e.parentType = i, !0;
}
const kn = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", kh, ["paragraph", "reference"]],
  ["code", Ch],
  ["fence", wh, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", Eh, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Ah, ["paragraph", "reference", "blockquote", "list"]],
  ["list", Dh, ["paragraph", "reference", "blockquote"]],
  ["reference", Th],
  ["html_block", zh, ["paragraph", "reference", "blockquote"]],
  ["heading", Uh, ["paragraph", "reference", "blockquote"]],
  ["lheading", Hh],
  ["paragraph", qh]
];
function ui() {
  this.ruler = new $e();
  for (let e = 0; e < kn.length; e++)
    this.ruler.push(kn[e][0], kn[e][1], { alt: (kn[e][2] || []).slice() });
}
ui.prototype.tokenize = function(e, t, r) {
  const n = this.ruler.getRules(""), i = n.length, u = e.md.options.maxNesting;
  let a = t, s = !1;
  for (; a < r && (e.line = a = e.skipEmptyLines(a), !(a >= r || e.sCount[a] < e.blkIndent)); ) {
    if (e.level >= u) {
      e.line = r;
      break;
    }
    const o = e.line;
    let c = !1;
    for (let f = 0; f < i; f++)
      if (c = n[f](e, a, r, !1), c) {
        if (o >= e.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!c) throw new Error("none of the block rules matched");
    e.tight = !s, e.isEmpty(e.line - 1) && (s = !0), a = e.line, a < r && e.isEmpty(a) && (s = !0, a++, e.line = a);
  }
};
ui.prototype.parse = function(e, t, r, n) {
  if (!e)
    return;
  const i = new this.State(e, t, r, n);
  this.tokenize(i, i.line, i.lineMax);
};
ui.prototype.State = _t;
function Qr(e, t, r, n) {
  this.src = e, this.env = r, this.md = t, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
Qr.prototype.pushPending = function() {
  const e = new at("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
Qr.prototype.push = function(e, t, r) {
  this.pending && this.pushPending();
  const n = new at(e, t, r);
  let i = null;
  return r < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, r > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], i = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(i), n;
};
Qr.prototype.scanDelims = function(e, t) {
  const r = this.posMax, n = this.src.charCodeAt(e), i = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let u = e;
  for (; u < r && this.src.charCodeAt(u) === n; )
    u++;
  const a = u - e, s = u < r ? this.src.charCodeAt(u) : 32, o = Ur(i) || zr(String.fromCharCode(i)), c = Ur(s) || zr(String.fromCharCode(s)), f = Wr(i), p = Wr(s), l = !p && (!c || f || o), h = !f && (!o || p || c);
  return { can_open: l && (t || !h || o), can_close: h && (t || !l || c), length: a };
};
Qr.prototype.Token = at;
function Gh(e) {
  switch (e) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function Kh(e, t) {
  let r = e.pos;
  for (; r < e.posMax && !Gh(e.src.charCodeAt(r)); )
    r++;
  return r === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, r)), e.pos = r, !0);
}
const Zh = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function Yh(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const r = e.pos, n = e.posMax;
  if (r + 3 > n || e.src.charCodeAt(r) !== 58 || e.src.charCodeAt(r + 1) !== 47 || e.src.charCodeAt(r + 2) !== 47) return !1;
  const i = e.pending.match(Zh);
  if (!i) return !1;
  const u = i[1], a = e.md.linkify.matchAtStart(e.src.slice(r - u.length));
  if (!a) return !1;
  let s = a.url;
  if (s.length <= u.length) return !1;
  let o = s.length;
  for (; o > 0 && s.charCodeAt(o - 1) === 42; )
    o--;
  o !== s.length && (s = s.slice(0, o));
  const c = e.md.normalizeLink(s);
  if (!e.md.validateLink(c)) return !1;
  if (!t) {
    e.pending = e.pending.slice(0, -u.length);
    const f = e.push("link_open", "a", 1);
    f.attrs = [["href", c]], f.markup = "linkify", f.info = "auto";
    const p = e.push("text", "", 0);
    p.content = e.md.normalizeLinkText(s);
    const l = e.push("link_close", "a", -1);
    l.markup = "linkify", l.info = "auto";
  }
  return e.pos += s.length - u.length, !0;
}
function Jh(e, t) {
  let r = e.pos;
  if (e.src.charCodeAt(r) !== 10)
    return !1;
  const n = e.pending.length - 1, i = e.posMax;
  if (!t)
    if (n >= 0 && e.pending.charCodeAt(n) === 32)
      if (n >= 1 && e.pending.charCodeAt(n - 1) === 32) {
        let u = n - 1;
        for (; u >= 1 && e.pending.charCodeAt(u - 1) === 32; ) u--;
        e.pending = e.pending.slice(0, u), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (r++; r < i && de(e.src.charCodeAt(r)); )
    r++;
  return e.pos = r, !0;
}
const Lu = [];
for (let e = 0; e < 256; e++)
  Lu.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  Lu[e.charCodeAt(0)] = 1;
});
function Xh(e, t) {
  let r = e.pos;
  const n = e.posMax;
  if (e.src.charCodeAt(r) !== 92 || (r++, r >= n)) return !1;
  let i = e.src.charCodeAt(r);
  if (i === 10) {
    for (t || e.push("hardbreak", "br", 0), r++; r < n && (i = e.src.charCodeAt(r), !!de(i)); )
      r++;
    return e.pos = r, !0;
  }
  let u = e.src[r];
  if (i >= 55296 && i <= 56319 && r + 1 < n) {
    const s = e.src.charCodeAt(r + 1);
    s >= 56320 && s <= 57343 && (u += e.src[r + 1], r++);
  }
  const a = "\\" + u;
  if (!t) {
    const s = e.push("text_special", "", 0);
    i < 256 && Lu[i] !== 0 ? s.content = u : s.content = a, s.markup = a, s.info = "escape";
  }
  return e.pos = r + 1, !0;
}
function Qh(e, t) {
  let r = e.pos;
  if (e.src.charCodeAt(r) !== 96)
    return !1;
  const i = r;
  r++;
  const u = e.posMax;
  for (; r < u && e.src.charCodeAt(r) === 96; )
    r++;
  const a = e.src.slice(i, r), s = a.length;
  if (e.backticksScanned && (e.backticks[s] || 0) <= i)
    return t || (e.pending += a), e.pos += s, !0;
  let o = r, c;
  for (; (c = e.src.indexOf("`", o)) !== -1; ) {
    for (o = c + 1; o < u && e.src.charCodeAt(o) === 96; )
      o++;
    const f = o - c;
    if (f === s) {
      if (!t) {
        const p = e.push("code_inline", "code", 0);
        p.markup = a, p.content = e.src.slice(r, c).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = o, !0;
    }
    e.backticks[f] = c;
  }
  return e.backticksScanned = !0, t || (e.pending += a), e.pos += s, !0;
}
function ed(e, t) {
  const r = e.pos, n = e.src.charCodeAt(r);
  if (t || n !== 126)
    return !1;
  const i = e.scanDelims(e.pos, !0);
  let u = i.length;
  const a = String.fromCharCode(n);
  if (u < 2)
    return !1;
  let s;
  u % 2 && (s = e.push("text", "", 0), s.content = a, u--);
  for (let o = 0; o < u; o += 2)
    s = e.push("text", "", 0), s.content = a + a, e.delimiters.push({
      marker: n,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: e.tokens.length - 1,
      end: -1,
      open: i.can_open,
      close: i.can_close
    });
  return e.pos += i.length, !0;
}
function Ns(e, t) {
  let r;
  const n = [], i = t.length;
  for (let u = 0; u < i; u++) {
    const a = t[u];
    if (a.marker !== 126 || a.end === -1)
      continue;
    const s = t[a.end];
    r = e.tokens[a.token], r.type = "s_open", r.tag = "s", r.nesting = 1, r.markup = "~~", r.content = "", r = e.tokens[s.token], r.type = "s_close", r.tag = "s", r.nesting = -1, r.markup = "~~", r.content = "", e.tokens[s.token - 1].type === "text" && e.tokens[s.token - 1].content === "~" && n.push(s.token - 1);
  }
  for (; n.length; ) {
    const u = n.pop();
    let a = u + 1;
    for (; a < e.tokens.length && e.tokens[a].type === "s_close"; )
      a++;
    a--, u !== a && (r = e.tokens[a], e.tokens[a] = e.tokens[u], e.tokens[u] = r);
  }
}
function td(e) {
  const t = e.tokens_meta, r = e.tokens_meta.length;
  Ns(e, e.delimiters);
  for (let n = 0; n < r; n++)
    t[n] && t[n].delimiters && Ns(e, t[n].delimiters);
}
const ko = {
  tokenize: ed,
  postProcess: td
};
function rd(e, t) {
  const r = e.pos, n = e.src.charCodeAt(r);
  if (t || n !== 95 && n !== 42)
    return !1;
  const i = e.scanDelims(e.pos, n === 42);
  for (let u = 0; u < i.length; u++) {
    const a = e.push("text", "", 0);
    a.content = String.fromCharCode(n), e.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: n,
      // Total length of these series of delimiters.
      //
      length: i.length,
      // A position of the token this delimiter corresponds to.
      //
      token: e.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: i.can_open,
      close: i.can_close
    });
  }
  return e.pos += i.length, !0;
}
function Ps(e, t) {
  const r = t.length;
  for (let n = r - 1; n >= 0; n--) {
    const i = t[n];
    if (i.marker !== 95 && i.marker !== 42 || i.end === -1)
      continue;
    const u = t[i.end], a = n > 0 && t[n - 1].end === i.end + 1 && // check that first two markers match and adjacent
    t[n - 1].marker === i.marker && t[n - 1].token === i.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    t[i.end + 1].token === u.token + 1, s = String.fromCharCode(i.marker), o = e.tokens[i.token];
    o.type = a ? "strong_open" : "em_open", o.tag = a ? "strong" : "em", o.nesting = 1, o.markup = a ? s + s : s, o.content = "";
    const c = e.tokens[u.token];
    c.type = a ? "strong_close" : "em_close", c.tag = a ? "strong" : "em", c.nesting = -1, c.markup = a ? s + s : s, c.content = "", a && (e.tokens[t[n - 1].token].content = "", e.tokens[t[i.end + 1].token].content = "", n--);
  }
}
function nd(e) {
  const t = e.tokens_meta, r = e.tokens_meta.length;
  Ps(e, e.delimiters);
  for (let n = 0; n < r; n++)
    t[n] && t[n].delimiters && Ps(e, t[n].delimiters);
}
const Co = {
  tokenize: rd,
  postProcess: nd
};
function id(e, t) {
  let r, n, i, u, a = "", s = "", o = e.pos, c = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const f = e.pos, p = e.posMax, l = e.pos + 1, h = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (h < 0)
    return !1;
  let d = h + 1;
  if (d < p && e.src.charCodeAt(d) === 40) {
    for (c = !1, d++; d < p && (r = e.src.charCodeAt(d), !(!de(r) && r !== 10)); d++)
      ;
    if (d >= p)
      return !1;
    if (o = d, i = e.md.helpers.parseLinkDestination(e.src, d, e.posMax), i.ok) {
      for (a = e.md.normalizeLink(i.str), e.md.validateLink(a) ? d = i.pos : a = "", o = d; d < p && (r = e.src.charCodeAt(d), !(!de(r) && r !== 10)); d++)
        ;
      if (i = e.md.helpers.parseLinkTitle(e.src, d, e.posMax), d < p && o !== d && i.ok)
        for (s = i.str, d = i.pos; d < p && (r = e.src.charCodeAt(d), !(!de(r) && r !== 10)); d++)
          ;
    }
    (d >= p || e.src.charCodeAt(d) !== 41) && (c = !0), d++;
  }
  if (c) {
    if (typeof e.env.references > "u")
      return !1;
    if (d < p && e.src.charCodeAt(d) === 91 ? (o = d + 1, d = e.md.helpers.parseLinkLabel(e, d), d >= 0 ? n = e.src.slice(o, d++) : d = h + 1) : d = h + 1, n || (n = e.src.slice(l, h)), u = e.env.references[ii(n)], !u)
      return e.pos = f, !1;
    a = u.href, s = u.title;
  }
  if (!t) {
    e.pos = l, e.posMax = h;
    const _ = e.push("link_open", "a", 1), C = [["href", a]];
    _.attrs = C, s && C.push(["title", s]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = d, e.posMax = p, !0;
}
function ud(e, t) {
  let r, n, i, u, a, s, o, c, f = "";
  const p = e.pos, l = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const h = e.pos + 2, d = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (d < 0)
    return !1;
  if (u = d + 1, u < l && e.src.charCodeAt(u) === 40) {
    for (u++; u < l && (r = e.src.charCodeAt(u), !(!de(r) && r !== 10)); u++)
      ;
    if (u >= l)
      return !1;
    for (c = u, s = e.md.helpers.parseLinkDestination(e.src, u, e.posMax), s.ok && (f = e.md.normalizeLink(s.str), e.md.validateLink(f) ? u = s.pos : f = ""), c = u; u < l && (r = e.src.charCodeAt(u), !(!de(r) && r !== 10)); u++)
      ;
    if (s = e.md.helpers.parseLinkTitle(e.src, u, e.posMax), u < l && c !== u && s.ok)
      for (o = s.str, u = s.pos; u < l && (r = e.src.charCodeAt(u), !(!de(r) && r !== 10)); u++)
        ;
    else
      o = "";
    if (u >= l || e.src.charCodeAt(u) !== 41)
      return e.pos = p, !1;
    u++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (u < l && e.src.charCodeAt(u) === 91 ? (c = u + 1, u = e.md.helpers.parseLinkLabel(e, u), u >= 0 ? i = e.src.slice(c, u++) : u = d + 1) : u = d + 1, i || (i = e.src.slice(h, d)), a = e.env.references[ii(i)], !a)
      return e.pos = p, !1;
    f = a.href, o = a.title;
  }
  if (!t) {
    n = e.src.slice(h, d);
    const _ = [];
    e.md.inline.parse(
      n,
      e.md,
      e.env,
      _
    );
    const C = e.push("image", "img", 0), T = [["src", f], ["alt", ""]];
    C.attrs = T, C.children = _, C.content = n, o && T.push(["title", o]);
  }
  return e.pos = u, e.posMax = l, !0;
}
const sd = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, ad = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function od(e, t) {
  let r = e.pos;
  if (e.src.charCodeAt(r) !== 60)
    return !1;
  const n = e.pos, i = e.posMax;
  for (; ; ) {
    if (++r >= i) return !1;
    const a = e.src.charCodeAt(r);
    if (a === 60) return !1;
    if (a === 62) break;
  }
  const u = e.src.slice(n + 1, r);
  if (ad.test(u)) {
    const a = e.md.normalizeLink(u);
    if (!e.md.validateLink(a))
      return !1;
    if (!t) {
      const s = e.push("link_open", "a", 1);
      s.attrs = [["href", a]], s.markup = "autolink", s.info = "auto";
      const o = e.push("text", "", 0);
      o.content = e.md.normalizeLinkText(u);
      const c = e.push("link_close", "a", -1);
      c.markup = "autolink", c.info = "auto";
    }
    return e.pos += u.length + 2, !0;
  }
  if (sd.test(u)) {
    const a = e.md.normalizeLink("mailto:" + u);
    if (!e.md.validateLink(a))
      return !1;
    if (!t) {
      const s = e.push("link_open", "a", 1);
      s.attrs = [["href", a]], s.markup = "autolink", s.info = "auto";
      const o = e.push("text", "", 0);
      o.content = e.md.normalizeLinkText(u);
      const c = e.push("link_close", "a", -1);
      c.markup = "autolink", c.info = "auto";
    }
    return e.pos += u.length + 2, !0;
  }
  return !1;
}
function cd(e) {
  return /^<a[>\s]/i.test(e);
}
function ld(e) {
  return /^<\/a\s*>/i.test(e);
}
function fd(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function pd(e, t) {
  if (!e.md.options.html)
    return !1;
  const r = e.posMax, n = e.pos;
  if (e.src.charCodeAt(n) !== 60 || n + 2 >= r)
    return !1;
  const i = e.src.charCodeAt(n + 1);
  if (i !== 33 && i !== 63 && i !== 47 && !fd(i))
    return !1;
  const u = e.src.slice(n).match($h);
  if (!u)
    return !1;
  if (!t) {
    const a = e.push("html_inline", "", 0);
    a.content = u[0], cd(a.content) && e.linkLevel++, ld(a.content) && e.linkLevel--;
  }
  return e.pos += u[0].length, !0;
}
const hd = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, dd = /^&([a-z][a-z0-9]{1,31});/i;
function md(e, t) {
  const r = e.pos, n = e.posMax;
  if (e.src.charCodeAt(r) !== 38 || r + 1 >= n) return !1;
  if (e.src.charCodeAt(r + 1) === 35) {
    const u = e.src.slice(r).match(hd);
    if (u) {
      if (!t) {
        const a = u[1][0].toLowerCase() === "x" ? parseInt(u[1].slice(1), 16) : parseInt(u[1], 10), s = e.push("text_special", "", 0);
        s.content = Iu(a) ? Bn(a) : Bn(65533), s.markup = u[0], s.info = "entity";
      }
      return e.pos += u[0].length, !0;
    }
  } else {
    const u = e.src.slice(r).match(dd);
    if (u) {
      const a = mo(u[0]);
      if (a !== u[0]) {
        if (!t) {
          const s = e.push("text_special", "", 0);
          s.content = a, s.markup = u[0], s.info = "entity";
        }
        return e.pos += u[0].length, !0;
      }
    }
  }
  return !1;
}
function Rs(e) {
  const t = {}, r = e.length;
  if (!r) return;
  let n = 0, i = -2;
  const u = [];
  for (let a = 0; a < r; a++) {
    const s = e[a];
    if (u.push(0), (e[n].marker !== s.marker || i !== s.token - 1) && (n = a), i = s.token, s.length = s.length || 0, !s.close) continue;
    t.hasOwnProperty(s.marker) || (t[s.marker] = [-1, -1, -1, -1, -1, -1]);
    const o = t[s.marker][(s.open ? 3 : 0) + s.length % 3];
    let c = n - u[n] - 1, f = c;
    for (; c > o; c -= u[c] + 1) {
      const p = e[c];
      if (p.marker === s.marker && p.open && p.end < 0) {
        let l = !1;
        if ((p.close || s.open) && (p.length + s.length) % 3 === 0 && (p.length % 3 !== 0 || s.length % 3 !== 0) && (l = !0), !l) {
          const h = c > 0 && !e[c - 1].open ? u[c - 1] + 1 : 0;
          u[a] = a - c + h, u[c] = h, s.open = !1, p.end = a, p.close = !1, f = -1, i = -2;
          break;
        }
      }
    }
    f !== -1 && (t[s.marker][(s.open ? 3 : 0) + (s.length || 0) % 3] = f);
  }
}
function bd(e) {
  const t = e.tokens_meta, r = e.tokens_meta.length;
  Rs(e.delimiters);
  for (let n = 0; n < r; n++)
    t[n] && t[n].delimiters && Rs(t[n].delimiters);
}
function gd(e) {
  let t, r, n = 0;
  const i = e.tokens, u = e.tokens.length;
  for (t = r = 0; t < u; t++)
    i[t].nesting < 0 && n--, i[t].level = n, i[t].nesting > 0 && n++, i[t].type === "text" && t + 1 < u && i[t + 1].type === "text" ? i[t + 1].content = i[t].content + i[t + 1].content : (t !== r && (i[r] = i[t]), r++);
  t !== r && (i.length = r);
}
const Bi = [
  ["text", Kh],
  ["linkify", Yh],
  ["newline", Jh],
  ["escape", Xh],
  ["backticks", Qh],
  ["strikethrough", ko.tokenize],
  ["emphasis", Co.tokenize],
  ["link", id],
  ["image", ud],
  ["autolink", od],
  ["html_inline", pd],
  ["entity", md]
], Mi = [
  ["balance_pairs", bd],
  ["strikethrough", ko.postProcess],
  ["emphasis", Co.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", gd]
];
function en() {
  this.ruler = new $e();
  for (let e = 0; e < Bi.length; e++)
    this.ruler.push(Bi[e][0], Bi[e][1]);
  this.ruler2 = new $e();
  for (let e = 0; e < Mi.length; e++)
    this.ruler2.push(Mi[e][0], Mi[e][1]);
}
en.prototype.skipToken = function(e) {
  const t = e.pos, r = this.ruler.getRules(""), n = r.length, i = e.md.options.maxNesting, u = e.cache;
  if (typeof u[t] < "u") {
    e.pos = u[t];
    return;
  }
  let a = !1;
  if (e.level < i) {
    for (let s = 0; s < n; s++)
      if (e.level++, a = r[s](e, !0), e.level--, a) {
        if (t >= e.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    e.pos = e.posMax;
  a || e.pos++, u[t] = e.pos;
};
en.prototype.tokenize = function(e) {
  const t = this.ruler.getRules(""), r = t.length, n = e.posMax, i = e.md.options.maxNesting;
  for (; e.pos < n; ) {
    const u = e.pos;
    let a = !1;
    if (e.level < i) {
      for (let s = 0; s < r; s++)
        if (a = t[s](e, !1), a) {
          if (u >= e.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (a) {
      if (e.pos >= n)
        break;
      continue;
    }
    e.pending += e.src[e.pos++];
  }
  e.pending && e.pushPending();
};
en.prototype.parse = function(e, t, r, n) {
  const i = new this.State(e, t, r, n);
  this.tokenize(i);
  const u = this.ruler2.getRules(""), a = u.length;
  for (let s = 0; s < a; s++)
    u[s](i);
};
en.prototype.State = Qr;
function xd(e) {
  const t = {};
  e = e || {}, t.src_Any = co.source, t.src_Cc = lo.source, t.src_Z = po.source, t.src_P = Tu.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const r = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + r + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + r + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + r + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + r + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function lu(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(r) {
    r && Object.keys(r).forEach(function(n) {
      e[n] = r[n];
    });
  }), e;
}
function si(e) {
  return Object.prototype.toString.call(e);
}
function yd(e) {
  return si(e) === "[object String]";
}
function _d(e) {
  return si(e) === "[object Object]";
}
function vd(e) {
  return si(e) === "[object RegExp]";
}
function js(e) {
  return si(e) === "[object Function]";
}
function kd(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const wo = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function Cd(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t || wo.hasOwnProperty(r);
  }, !1);
}
const wd = {
  "http:": {
    validate: function(e, t, r) {
      const n = e.slice(t);
      return r.re.http || (r.re.http = new RegExp(
        "^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path,
        "i"
      )), r.re.http.test(n) ? n.match(r.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(e, t, r) {
      const n = e.slice(t);
      return r.re.no_http || (r.re.no_http = new RegExp(
        "^" + r.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path,
        "i"
      )), r.re.no_http.test(n) ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : n.match(r.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(e, t, r) {
      const n = e.slice(t);
      return r.re.mailto || (r.re.mailto = new RegExp(
        "^" + r.re.src_email_name + "@" + r.re.src_host_strict,
        "i"
      )), r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0;
    }
  }
}, Ed = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", Ad = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function Sd(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function Dd(e) {
  return function(t, r) {
    const n = t.slice(r);
    return e.test(n) ? n.match(e)[0].length : 0;
  };
}
function Bs() {
  return function(e, t) {
    t.normalize(e);
  };
}
function Mn(e) {
  const t = e.re = xd(e.__opts__), r = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || r.push(Ed), r.push(t.src_xn), t.src_tlds = r.join("|");
  function n(s) {
    return s.replace("%TLDS%", t.src_tlds);
  }
  t.email_fuzzy = RegExp(n(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(n(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(n(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(n(t.tpl_host_fuzzy_test), "i");
  const i = [];
  e.__compiled__ = {};
  function u(s, o) {
    throw new Error('(LinkifyIt) Invalid schema "' + s + '": ' + o);
  }
  Object.keys(e.__schemas__).forEach(function(s) {
    const o = e.__schemas__[s];
    if (o === null)
      return;
    const c = { validate: null, link: null };
    if (e.__compiled__[s] = c, _d(o)) {
      vd(o.validate) ? c.validate = Dd(o.validate) : js(o.validate) ? c.validate = o.validate : u(s, o), js(o.normalize) ? c.normalize = o.normalize : o.normalize ? u(s, o) : c.normalize = Bs();
      return;
    }
    if (yd(o)) {
      i.push(s);
      return;
    }
    u(s, o);
  }), i.forEach(function(s) {
    e.__compiled__[e.__schemas__[s]] && (e.__compiled__[s].validate = e.__compiled__[e.__schemas__[s]].validate, e.__compiled__[s].normalize = e.__compiled__[e.__schemas__[s]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: Bs() };
  const a = Object.keys(e.__compiled__).filter(function(s) {
    return s.length > 0 && e.__compiled__[s];
  }).map(kd).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + a + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + a + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), Sd(e);
}
function Td(e, t) {
  const r = e.__index__, n = e.__last_index__, i = e.__text_cache__.slice(r, n);
  this.schema = e.__schema__.toLowerCase(), this.index = r + t, this.lastIndex = n + t, this.raw = i, this.text = i, this.url = i;
}
function fu(e, t) {
  const r = new Td(e, t);
  return e.__compiled__[r.schema].normalize(r, e), r;
}
function Ke(e, t) {
  if (!(this instanceof Ke))
    return new Ke(e, t);
  t || Cd(e) && (t = e, e = {}), this.__opts__ = lu({}, wo, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = lu({}, wd, e), this.__compiled__ = {}, this.__tlds__ = Ad, this.__tlds_replaced__ = !1, this.re = {}, Mn(this);
}
Ke.prototype.add = function(t, r) {
  return this.__schemas__[t] = r, Mn(this), this;
};
Ke.prototype.set = function(t) {
  return this.__opts__ = lu(this.__opts__, t), this;
};
Ke.prototype.test = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length)
    return !1;
  let r, n, i, u, a, s, o, c, f;
  if (this.re.schema_test.test(t)) {
    for (o = this.re.schema_search, o.lastIndex = 0; (r = o.exec(t)) !== null; )
      if (u = this.testSchemaAt(t, r[2], o.lastIndex), u) {
        this.__schema__ = r[2], this.__index__ = r.index + r[1].length, this.__last_index__ = r.index + r[0].length + u;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = t.search(this.re.host_fuzzy_test), c >= 0 && (this.__index__ < 0 || c < this.__index__) && (n = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (a = n.index + n[1].length, (this.__index__ < 0 || a < this.__index__) && (this.__schema__ = "", this.__index__ = a, this.__last_index__ = n.index + n[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (f = t.indexOf("@"), f >= 0 && (i = t.match(this.re.email_fuzzy)) !== null && (a = i.index + i[1].length, s = i.index + i[0].length, (this.__index__ < 0 || a < this.__index__ || a === this.__index__ && s > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = a, this.__last_index__ = s))), this.__index__ >= 0;
};
Ke.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
Ke.prototype.testSchemaAt = function(t, r, n) {
  return this.__compiled__[r.toLowerCase()] ? this.__compiled__[r.toLowerCase()].validate(t, n, this) : 0;
};
Ke.prototype.match = function(t) {
  const r = [];
  let n = 0;
  this.__index__ >= 0 && this.__text_cache__ === t && (r.push(fu(this, n)), n = this.__last_index__);
  let i = n ? t.slice(n) : t;
  for (; this.test(i); )
    r.push(fu(this, n)), i = i.slice(this.__last_index__), n += this.__last_index__;
  return r.length ? r : null;
};
Ke.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
  const r = this.re.schema_at_start.exec(t);
  if (!r) return null;
  const n = this.testSchemaAt(t, r[2], r[0].length);
  return n ? (this.__schema__ = r[2], this.__index__ = r.index + r[1].length, this.__last_index__ = r.index + r[0].length + n, fu(this, 0)) : null;
};
Ke.prototype.tlds = function(t, r) {
  return t = Array.isArray(t) ? t : [t], r ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(n, i, u) {
    return n !== u[i - 1];
  }).reverse(), Mn(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, Mn(this), this);
};
Ke.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
Ke.prototype.onCompile = function() {
};
const br = 2147483647, dt = 36, Nu = 1, Hr = 26, Od = 38, Id = 700, Eo = 72, Ao = 128, So = "-", Fd = /^xn--/, Ld = /[^\0-\x7F]/, Nd = /[\x2E\u3002\uFF0E\uFF61]/g, Pd = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, Vi = dt - Nu, mt = Math.floor, $i = String.fromCharCode;
function Bt(e) {
  throw new RangeError(Pd[e]);
}
function Rd(e, t) {
  const r = [];
  let n = e.length;
  for (; n--; )
    r[n] = t(e[n]);
  return r;
}
function Do(e, t) {
  const r = e.split("@");
  let n = "";
  r.length > 1 && (n = r[0] + "@", e = r[1]), e = e.replace(Nd, ".");
  const i = e.split("."), u = Rd(i, t).join(".");
  return n + u;
}
function To(e) {
  const t = [];
  let r = 0;
  const n = e.length;
  for (; r < n; ) {
    const i = e.charCodeAt(r++);
    if (i >= 55296 && i <= 56319 && r < n) {
      const u = e.charCodeAt(r++);
      (u & 64512) == 56320 ? t.push(((i & 1023) << 10) + (u & 1023) + 65536) : (t.push(i), r--);
    } else
      t.push(i);
  }
  return t;
}
const jd = (e) => String.fromCodePoint(...e), Bd = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : dt;
}, Ms = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, Oo = function(e, t, r) {
  let n = 0;
  for (e = r ? mt(e / Id) : e >> 1, e += mt(e / t); e > Vi * Hr >> 1; n += dt)
    e = mt(e / Vi);
  return mt(n + (Vi + 1) * e / (e + Od));
}, Io = function(e) {
  const t = [], r = e.length;
  let n = 0, i = Ao, u = Eo, a = e.lastIndexOf(So);
  a < 0 && (a = 0);
  for (let s = 0; s < a; ++s)
    e.charCodeAt(s) >= 128 && Bt("not-basic"), t.push(e.charCodeAt(s));
  for (let s = a > 0 ? a + 1 : 0; s < r; ) {
    const o = n;
    for (let f = 1, p = dt; ; p += dt) {
      s >= r && Bt("invalid-input");
      const l = Bd(e.charCodeAt(s++));
      l >= dt && Bt("invalid-input"), l > mt((br - n) / f) && Bt("overflow"), n += l * f;
      const h = p <= u ? Nu : p >= u + Hr ? Hr : p - u;
      if (l < h)
        break;
      const d = dt - h;
      f > mt(br / d) && Bt("overflow"), f *= d;
    }
    const c = t.length + 1;
    u = Oo(n - o, c, o == 0), mt(n / c) > br - i && Bt("overflow"), i += mt(n / c), n %= c, t.splice(n++, 0, i);
  }
  return String.fromCodePoint(...t);
}, Fo = function(e) {
  const t = [];
  e = To(e);
  const r = e.length;
  let n = Ao, i = 0, u = Eo;
  for (const o of e)
    o < 128 && t.push($i(o));
  const a = t.length;
  let s = a;
  for (a && t.push(So); s < r; ) {
    let o = br;
    for (const f of e)
      f >= n && f < o && (o = f);
    const c = s + 1;
    o - n > mt((br - i) / c) && Bt("overflow"), i += (o - n) * c, n = o;
    for (const f of e)
      if (f < n && ++i > br && Bt("overflow"), f === n) {
        let p = i;
        for (let l = dt; ; l += dt) {
          const h = l <= u ? Nu : l >= u + Hr ? Hr : l - u;
          if (p < h)
            break;
          const d = p - h, _ = dt - h;
          t.push(
            $i(Ms(h + d % _, 0))
          ), p = mt(d / _);
        }
        t.push($i(Ms(p, 0))), u = Oo(i, c, s === a), i = 0, ++s;
      }
    ++i, ++n;
  }
  return t.join("");
}, Md = function(e) {
  return Do(e, function(t) {
    return Fd.test(t) ? Io(t.slice(4).toLowerCase()) : t;
  });
}, Vd = function(e) {
  return Do(e, function(t) {
    return Ld.test(t) ? "xn--" + Fo(t) : t;
  });
}, Lo = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: To,
    encode: jd
  },
  decode: Io,
  encode: Fo,
  toASCII: Vd,
  toUnicode: Md
}, $d = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, Wd = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, zd = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, Ud = {
  default: $d,
  zero: Wd,
  commonmark: zd
}, Hd = /^(vbscript|javascript|file|data):/, qd = /^data:image\/(gif|png|jpeg|webp);/;
function Gd(e) {
  const t = e.trim().toLowerCase();
  return Hd.test(t) ? qd.test(t) : !0;
}
const No = ["http:", "https:", "mailto:"];
function Kd(e) {
  const t = Du(e, !0);
  if (t.hostname && (!t.protocol || No.indexOf(t.protocol) >= 0))
    try {
      t.hostname = Lo.toASCII(t.hostname);
    } catch {
    }
  return Xr(Su(t));
}
function Zd(e) {
  const t = Du(e, !0);
  if (t.hostname && (!t.protocol || No.indexOf(t.protocol) >= 0))
    try {
      t.hostname = Lo.toUnicode(t.hostname);
    } catch {
    }
  return gr(Su(t), gr.defaultChars + "%");
}
function Re(e, t) {
  if (!(this instanceof Re))
    return new Re(e, t);
  t || Ou(e) || (t = e || {}, e = "default"), this.inline = new en(), this.block = new ui(), this.core = new Fu(), this.renderer = new Cr(), this.linkify = new Ke(), this.validateLink = Gd, this.normalizeLink = Kd, this.normalizeLinkText = Zd, this.utils = Jp, this.helpers = ni({}, th), this.options = {}, this.configure(e), t && this.set(t);
}
Re.prototype.set = function(e) {
  return ni(this.options, e), this;
};
Re.prototype.configure = function(e) {
  const t = this;
  if (Ou(e)) {
    const r = e;
    if (e = Ud[r], !e)
      throw new Error('Wrong `markdown-it` preset "' + r + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(r) {
    e.components[r].rules && t[r].ruler.enableOnly(e.components[r].rules), e.components[r].rules2 && t[r].ruler2.enableOnly(e.components[r].rules2);
  }), this;
};
Re.prototype.enable = function(e, t) {
  let r = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(i) {
    r = r.concat(this[i].ruler.enable(e, !0));
  }, this), r = r.concat(this.inline.ruler2.enable(e, !0));
  const n = e.filter(function(i) {
    return r.indexOf(i) < 0;
  });
  if (n.length && !t)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
  return this;
};
Re.prototype.disable = function(e, t) {
  let r = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(i) {
    r = r.concat(this[i].ruler.disable(e, !0));
  }, this), r = r.concat(this.inline.ruler2.disable(e, !0));
  const n = e.filter(function(i) {
    return r.indexOf(i) < 0;
  });
  if (n.length && !t)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
  return this;
};
Re.prototype.use = function(e) {
  const t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, t), this;
};
Re.prototype.parse = function(e, t) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const r = new this.core.State(e, this, t);
  return this.core.process(r), r.tokens;
};
Re.prototype.render = function(e, t) {
  return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
};
Re.prototype.parseInline = function(e, t) {
  const r = new this.core.State(e, this, t);
  return r.inlineMode = !0, this.core.process(r), r.tokens;
};
Re.prototype.renderInline = function(e, t) {
  return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
};
var Vs = !1, yr = { false: "push", true: "unshift", after: "push", before: "unshift" }, Vn = { isPermalinkSymbol: !0 };
function pu(e, t, r, n) {
  var i;
  if (!Vs) {
    var u = "Using deprecated markdown-it-anchor permalink option, see https://github.com/valeriangalliat/markdown-it-anchor#permalinks";
    typeof process == "object" && process && process.emitWarning ? process.emitWarning(u) : console.warn(u), Vs = !0;
  }
  var a = [Object.assign(new r.Token("link_open", "a", 1), { attrs: [].concat(t.permalinkClass ? [["class", t.permalinkClass]] : [], [["href", t.permalinkHref(e, r)]], Object.entries(t.permalinkAttrs(e, r))) }), Object.assign(new r.Token("html_block", "", 0), { content: t.permalinkSymbol, meta: Vn }), new r.Token("link_close", "a", -1)];
  t.permalinkSpace && r.tokens[n + 1].children[yr[t.permalinkBefore]](Object.assign(new r.Token("text", "", 0), { content: " " })), (i = r.tokens[n + 1].children)[yr[t.permalinkBefore]].apply(i, a);
}
function Po(e) {
  return "#" + e;
}
function Ro(e) {
  return {};
}
var Yd = { class: "header-anchor", symbol: "#", renderHref: Po, renderAttrs: Ro };
function tn(e) {
  function t(r) {
    return r = Object.assign({}, t.defaults, r), function(n, i, u, a) {
      return e(n, r, i, u, a);
    };
  }
  return t.defaults = Object.assign({}, Yd), t.renderPermalinkImpl = e, t;
}
function Pu(e) {
  var t = [], r = e.filter(function(n) {
    if (n[0] !== "class") return !0;
    t.push(n[1]);
  });
  return t.length > 0 && r.unshift(["class", t.join(" ")]), r;
}
var ai = tn(function(e, t, r, n, i) {
  var u, a = [Object.assign(new n.Token("link_open", "a", 1), { attrs: Pu([].concat(t.class ? [["class", t.class]] : [], [["href", t.renderHref(e, n)]], t.ariaHidden ? [["aria-hidden", "true"]] : [], Object.entries(t.renderAttrs(e, n)))) }), Object.assign(new n.Token("html_inline", "", 0), { content: t.symbol, meta: Vn }), new n.Token("link_close", "a", -1)];
  if (t.space) {
    var s = typeof t.space == "string" ? t.space : " ";
    n.tokens[i + 1].children[yr[t.placement]](Object.assign(new n.Token(typeof t.space == "string" ? "html_inline" : "text", "", 0), { content: s }));
  }
  (u = n.tokens[i + 1].children)[yr[t.placement]].apply(u, a);
});
Object.assign(ai.defaults, { space: !0, placement: "after", ariaHidden: !1 });
var Yt = tn(ai.renderPermalinkImpl);
Yt.defaults = Object.assign({}, ai.defaults, { ariaHidden: !0 });
var jo = tn(function(e, t, r, n, i) {
  var u = [Object.assign(new n.Token("link_open", "a", 1), { attrs: Pu([].concat(t.class ? [["class", t.class]] : [], [["href", t.renderHref(e, n)]], Object.entries(t.renderAttrs(e, n)))) })].concat(t.safariReaderFix ? [new n.Token("span_open", "span", 1)] : [], n.tokens[i + 1].children, t.safariReaderFix ? [new n.Token("span_close", "span", -1)] : [], [new n.Token("link_close", "a", -1)]);
  n.tokens[i + 1] = Object.assign(new n.Token("inline", "", 0), { children: u });
});
Object.assign(jo.defaults, { safariReaderFix: !1 });
var $s = tn(function(e, t, r, n, i) {
  var u;
  if (!["visually-hidden", "aria-label", "aria-describedby", "aria-labelledby"].includes(t.style)) throw new Error("`permalink.linkAfterHeader` called with unknown style option `" + t.style + "`");
  if (!["aria-describedby", "aria-labelledby"].includes(t.style) && !t.assistiveText) throw new Error("`permalink.linkAfterHeader` called without the `assistiveText` option in `" + t.style + "` style");
  if (t.style === "visually-hidden" && !t.visuallyHiddenClass) throw new Error("`permalink.linkAfterHeader` called without the `visuallyHiddenClass` option in `visually-hidden` style");
  var a = n.tokens[i + 1].children.filter(function(p) {
    return p.type === "text" || p.type === "code_inline";
  }).reduce(function(p, l) {
    return p + l.content;
  }, ""), s = [], o = [];
  if (t.class && o.push(["class", t.class]), o.push(["href", t.renderHref(e, n)]), o.push.apply(o, Object.entries(t.renderAttrs(e, n))), t.style === "visually-hidden") {
    if (s.push(Object.assign(new n.Token("span_open", "span", 1), { attrs: [["class", t.visuallyHiddenClass]] }), Object.assign(new n.Token("text", "", 0), { content: t.assistiveText(a) }), new n.Token("span_close", "span", -1)), t.space) {
      var c = typeof t.space == "string" ? t.space : " ";
      s[yr[t.placement]](Object.assign(new n.Token(typeof t.space == "string" ? "html_inline" : "text", "", 0), { content: c }));
    }
    s[yr[t.placement]](Object.assign(new n.Token("span_open", "span", 1), { attrs: [["aria-hidden", "true"]] }), Object.assign(new n.Token("html_inline", "", 0), { content: t.symbol, meta: Vn }), new n.Token("span_close", "span", -1));
  } else s.push(Object.assign(new n.Token("html_inline", "", 0), { content: t.symbol, meta: Vn }));
  t.style === "aria-label" ? o.push(["aria-label", t.assistiveText(a)]) : ["aria-describedby", "aria-labelledby"].includes(t.style) && o.push([t.style, e]);
  var f = [Object.assign(new n.Token("link_open", "a", 1), { attrs: Pu(o) })].concat(s, [new n.Token("link_close", "a", -1)]);
  (u = n.tokens).splice.apply(u, [i + 3, 0].concat(f)), t.wrapper && (n.tokens.splice(i, 0, Object.assign(new n.Token("html_block", "", 0), { content: t.wrapper[0] + `
` })), n.tokens.splice(i + 3 + f.length + 1, 0, Object.assign(new n.Token("html_block", "", 0), { content: t.wrapper[1] + `
` })));
});
function Ws(e, t, r, n) {
  var i = e, u = n;
  if (r && Object.prototype.hasOwnProperty.call(t, i)) throw new Error("User defined `id` attribute `" + e + "` is not unique. Please fix it in your Markdown to continue.");
  for (; Object.prototype.hasOwnProperty.call(t, i); ) i = e + "-" + u, u += 1;
  return t[i] = !0, i;
}
function bt(e, t) {
  t = Object.assign({}, bt.defaults, t), e.core.ruler.push("anchor", function(r) {
    for (var n, i = {}, u = r.tokens, a = Array.isArray(t.level) ? (n = t.level, function(p) {
      return n.includes(p);
    }) : /* @__PURE__ */ (function(p) {
      return function(l) {
        return l >= p;
      };
    })(t.level), s = 0; s < u.length; s++) {
      var o = u[s];
      if (o.type === "heading_open" && a(Number(o.tag.substr(1)))) {
        var c = t.getTokensText(u[s + 1].children), f = o.attrGet("id");
        f = f == null ? Ws(f = t.slugifyWithState ? t.slugifyWithState(c, r) : t.slugify(c), i, !1, t.uniqueSlugStartIndex) : Ws(f, i, !0, t.uniqueSlugStartIndex), o.attrSet("id", f), t.tabIndex !== !1 && o.attrSet("tabindex", "" + t.tabIndex), typeof t.permalink == "function" ? t.permalink(f, t, r, s) : (t.permalink || t.renderPermalink && t.renderPermalink !== pu) && t.renderPermalink(f, t, r, s), s = u.indexOf(o), t.callback && t.callback(o, { slug: f, title: c });
      }
    }
  });
}
Object.assign($s.defaults, { style: "visually-hidden", space: !0, placement: "after", wrapper: null }), bt.permalink = { __proto__: null, legacy: pu, renderHref: Po, renderAttrs: Ro, makePermalink: tn, linkInsideHeader: ai, ariaHidden: Yt, headerLink: jo, linkAfterHeader: $s }, bt.defaults = { level: 1, slugify: function(e) {
  return encodeURIComponent(String(e).trim().toLowerCase().replace(/\s+/g, "-"));
}, uniqueSlugStartIndex: 1, tabIndex: "-1", getTokensText: function(e) {
  return e.filter(function(t) {
    return ["text", "code_inline"].includes(t.type);
  }).map(function(t) {
    return t.content;
  }).join("");
}, permalink: !1, renderPermalink: pu, permalinkClass: Yt.defaults.class, permalinkSpace: Yt.defaults.space, permalinkSymbol: "¶", permalinkBefore: Yt.defaults.placement === "before", permalinkHref: Yt.defaults.renderHref, permalinkAttrs: Yt.defaults.renderAttrs }, bt.default = bt;
const Ru = (e) => e && (e.default || e), Jd = Ru(ou), Xd = Ru(Re), $n = Ru(bt);
bt.permalink && !$n.permalink && ($n.permalink = bt.permalink);
const Qd = {
  name: "WBHtml",
  props: {
    /**
     * HTML content to render. Supports WBC's custom markup syntax including
     * [[component|styles|link]] patterns, {{wrapper}}content{{/wrapper}} syntax,
     * multilingual objects, and markdown. Can be a string, object, or array.
     * @type {string|object|array}
     * @default null
     */
    html: null
  },
  data() {
    return {
      viewMeta: null,
      html_: this.html || "",
      MarkdownIt: new Xd({
        html: !0,
        linkify: !0,
        typographer: !0,
        breaks: !1
      }).use($n, {
        permalink: $n.permalink.headerLink({
          safariReaderFix: !0
        }),
        slugify: (e) => e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
      })
    };
  },
  render(e) {
    let t = this.mainRender(this.html_, e);
    return typeof t == "string" ? e("span", { key: `${this.html_}` }, t) : Array.isArray(t) ? e("span", { key: `${this.html_}` }, [t]) : this.mainRender(this.html_, e);
  },
  methods: {
    mainRender(e, t) {
      try {
        return this._mainRender(e, t);
      } catch (r) {
        return console.error(`-WBHtml Error-:
[message]:${r.message}
[error]:${r}
[html]:${typeof e == "string" ? e : JSON.stringify(e)}`), t("div", {
          style: {
            padding: "10px",
            margin: "10px",
            border: "1px solid #ff5252",
            borderRadius: "4px",
            backgroundColor: "#fff1f1",
            color: "#c62828",
            fontFamily: "sans-serif",
            fontSize: "13px"
          }
        }, [
          t("div", { style: { fontWeight: "bold", marginBottom: "5px" } }, `#WBHtmlError: ${r.message}`)
        ]);
      }
    },
    _mainRender(e, t) {
      var i, u, a, s;
      let r = this.objLang(e, (u = (i = this == null ? void 0 : this.$store) == null ? void 0 : i.state) == null ? void 0 : u.lg), n = this.styling(r);
      if (n) {
        if (["string", "number", "boolean"].includes(typeof n))
          return t("span", {
            domProps: {
              innerHTML: this.sanitizeHtml(this.strToObj(n))
              // innerHTML: this.strToObj(el),
            }
          }).children;
        if (Array.isArray(n)) {
          let o = [];
          return n.forEach((c) => {
            var C, T, I, L, S, w;
            let f = [];
            for (let y of (c == null ? void 0 : c[1]) || []) {
              let F, B, Q = typeof y == "string" ? null : this.strToObj(y == null ? void 0 : y[2]), H = typeof y == "string" ? y : y[0], z;
              if (y[0].includes("__") ? (z = y[0].split("__")[0], H = y[0].split("__").slice(1).join("__")) : y[0].trimStart().startsWith("~") && (z = "WBC", H = y[0]), z && (z = z.trim()), z && z !== "WBC" && z !== "MD" && !/^[a-zA-Z][a-zA-Z0-9-]*$/.test(z))
                throw new Error(`Bad tag "${z}"`);
              if (typeof y == "string" ? (B = {}, F = {}) : y != null && y[1] && ((C = y == null ? void 0 : y[1]) != null && C.includes("__")) ? (B = this.strToObj((T = y[1].split("__")) == null ? void 0 : T[0]), F = this.strToObj(y[1].split("__").slice(1).join("__"))) : (B = {}, F = this.strToObj((y == null ? void 0 : y[1]) || {})), typeof F == "string" && (F = { class: F }), typeof B == "string" && (B = { class: B }), ["", "null", "undefined"].includes(typeof y == "string" ? y : y[0]))
                return t("div", {}, ["null"]);
              {
                let ue;
                if (typeof H == "string" && (H != null && H.startsWith("./")) ? z = "WBC" : z == "MD" && typeof H == "string" && (H = this.MarkdownIt.render(H)), this.isNonEmpty(Q) ? ue = t("WBLink", {
                  ...z == "MD" ? {
                    ...F,
                    class: "markdown-body " + ((F == null ? void 0 : F.class) || ""),
                    directives: [
                      {
                        name: "highlight",
                        value: void 0,
                        modifiers: {}
                      }
                    ]
                  } : F,
                  props: {
                    to: this.strToObj(y[2]),
                    html: H,
                    style_: {},
                    attrs_: {}
                  }
                }) : z == "WBC" || (F ? ue = t("span", {
                  ...F,
                  domProps: {
                    innerHTML: this.sanitizeHtml(this.objLang(
                      this.strToObj(H),
                      (L = (I = this == null ? void 0 : this.$store) == null ? void 0 : I.state) == null ? void 0 : L.lg
                    ))
                  }
                }) : ue = this.objLang(
                  this.strToObj(H),
                  (w = (S = this == null ? void 0 : this.$store) == null ? void 0 : S.state) == null ? void 0 : w.lg
                )), z)
                  if (z == "tex" || z == "latex" || `${z}`.toLowerCase() == "latex") {
                    let re;
                    z == "tex" ? re = [
                      t("WBLatex", {
                        ...F,
                        props: {
                          expression: H
                        }
                      })
                    ] : re = this.parseTexFile(H || "").map((x) => {
                      if (x.type === "text")
                        return t("div", [
                          t("WBHtml", {
                            props: {
                              html: x.content + " "
                            }
                          })
                        ]);
                      if (x.type === "math")
                        return t("WBLatex", {
                          props: {
                            expression: x.expression,
                            "display-mode": x.displayMode ?? !1
                          }
                        });
                      if (x.type === "mixed")
                        return t(
                          "div",
                          { class: "d-inline-flex align-center" },
                          x.lineContent.map((k) => k.expression ? t("WBLatex", {
                            props: {
                              expression: k.expression,
                              "display-mode": !1
                            }
                          }) : t("WBHtml", {
                            props: { html: " " + k.content + " " }
                          }))
                        );
                    });
                    let E = t(
                      "span",
                      {
                        ...B
                      },
                      re
                    );
                    this.isNonEmpty(Q) && (E = t("WBLink", {
                      props: {
                        to: this.strToObj(y[2]),
                        html: E,
                        style_: {},
                        attrs_: {}
                      }
                    })), f.push(E);
                  } else if (z == "WBC") {
                    let re = this.strToObj(H);
                    H.startsWith("~") && (re = this.strToObj(H.slice(1))), f.push(
                      t("WBC", {
                        props: { item: re }
                      })
                    );
                  } else H.startsWith("~") ? f.push(
                    t(z, {
                      props: this.strToObj(H.slice(1))
                    })
                  ) : f.push(
                    t(
                      z == "MD" ? "div" : this.charCoding(z, [
                        ["&vert;", "\\|"],
                        ["&#95;&#95;", "__"],
                        ["\\", ""],
                        ["&lbrack;", "["],
                        ["&rbrack;", "]"],
                        ["&lbrace;", "{"],
                        ["&rbrace;", "}"],
                        ["&lpar;", "("],
                        ["&rpar;", ")"],
                        ["&lt;", "<"],
                        ["&gt;", ">"]
                      ]),
                      {
                        ...z == "MD" ? {
                          ...F,
                          class: "markdown-body " + ((F == null ? void 0 : F.class) || ""),
                          directives: [
                            {
                              name: "highlight",
                              value: void 0,
                              modifiers: {}
                            }
                          ]
                        } : {},
                        ...B
                      },
                      [ue]
                    )
                  );
                else
                  f.push(ue);
              }
            }
            let p = "span", l = {}, h = null;
            if (typeof c[0] == "string" && ([p, l, h] = c[0].split("|")), typeof p == "string" && (p = p.trim()), p && p !== "WBC" && p !== "MD" && !/^[a-zA-Z][a-zA-Z0-9-]*$/.test(p))
              throw new Error(`Bad tag "${p}"`);
            let d = this.strToObj(l);
            typeof d == "string" && (d = {
              class: d
            }), h && (f = t("WBLink", {
              props: {
                to: this.strToObj(h),
                html: f,
                style_: {},
                attrs_: {}
              }
            }));
            let _ = t(p, { ...d }, [f]);
            o.push(_);
          }), o;
        } else if (typeof n == "object") {
          let o = this.objLang(n, (s = (a = this == null ? void 0 : this.$store) == null ? void 0 : a.state) == null ? void 0 : s.lg);
          return this.mainRender(this.styling(o), t);
        }
      } else return null;
    },
    styling(e) {
      let t = e;
      return typeof e != "string" ? `${JSON.stringify(e)}` : (typeof e == "string" && e.indexOf("[[") == 0 && (e = "{{span}}" + e), typeof e == "string" && e.indexOf("[[") != 0 && !e.startsWith("{{") && e.slice(-2) !== "]]" && (e = "{{span}}[[" + e + "]]"), typeof e == "string" && (e.includes("[[") || e.includes("]]") || e.includes("|") || e.includes("{{") || e.includes("}}")) && (e[0] != "{" || e[e.length - 1] != "}") && (t = e.split("{{").filter((r) => !!r).map(
        (r) => r.split("}}").map((n) => n.includes("[[") || n.includes("]]") ? n.replace(/\[\[/g, "**").replace(/\]\]/g, "**").split("**").filter((i) => !!i).map((i) => i.split("|")) : n)
      )), this.strToObj(t));
    },
    charCoding(e, t) {
      return typeof e != "string" || t.forEach((r) => {
        const [n, i] = r;
        e = e.split(n).join(i);
      }), e;
    },
    ...Object.fromEntries(
      Object.entries(ti).filter(
        ([e, t]) => typeof t == "function"
      )
    )
  },
  components: {
    JsonViewer: Jd,
    WBLink: ri
  },
  created() {
    this.html_ = this.charCoding(this.html_, [
      ["<p>", "<p>[["],
      ["</p>", "]]</p>"],
      ["\\|", "&vert;"],
      ["\\__", "&#95;&#95;"],
      ["\\{", "&lbrace;"],
      ["\\}", "&rbrace;"],
      ["\\[", "&lbrack;"],
      ["\\]", "&rbrack;"],
      ["\\(", "&lpar;"],
      ["\\)", "&rpar;"],
      ["\\<", "&lt;"],
      ["\\>", "&gt;"],
      ["-->", ""],
      ["]]]", "] ]]"],
      ["[[[", "[[ ["],
      ["}}}", "} }}"],
      ["{{{", "{{ {"]
    ]);
  }
}, e1 = null, t1 = null;
var r1 = /* @__PURE__ */ ao(
  Qd,
  e1,
  t1,
  !1,
  null,
  "d7381438"
);
const ju = r1.exports, qr = In.default || In, Bo = Xi.default || Xi;
qr.prototype.hasOwnProperty("$store") || qr.use(Bo);
function n1(e = "lg", t = "en") {
  let r = t;
  try {
    const n = document.cookie.match(new RegExp(`(?:^|; )${e}=([^;]*)`));
    if (n && n[1])
      return decodeURIComponent(n[1]);
    const i = navigator.language || navigator.userLanguage;
    i && (r = i.split("-")[0]), document.cookie = `${e}=${encodeURIComponent(r)}; path=/; max-age=31536000; SameSite=Lax`;
  } catch (n) {
    console.warn("detectLang() failed:", n);
  }
  return r;
}
function Wi() {
  try {
    const e = document.cookie.match(/(?:^|; )_wb_core_auth=([^;]*)/);
    if (e && e[1]) {
      const t = JSON.parse(decodeURIComponent(e[1]));
      if (!t.hmac) return null;
      if (t.status === "valid" && Date.now() - t.ts < 864e5)
        return { validated: !0 };
    }
  } catch {
  }
  return null;
}
const i1 = !1, u1 = !1, s1 = {
  lg: n1(),
  _wbcDev: i1,
  _wbcPro: u1,
  keyIndex: 0,
  // Unified Tier System
  tiers: {
    core: { authorized: !!Wi(), details: typeof Wi() == "object" ? Wi() : null },
    code: { authorized: !1, details: null },
    table: { authorized: !1, details: null },
    gis: { authorized: !1, details: null },
    chart: { authorized: !1, details: null }
  },
  _wbcProValidationStarted: {}
  // Track which packages started validation
}, a1 = {
  updateLang: (e, t) => {
    e.lg = t;
  },
  updateKeyIndex: (e, t) => {
    e.keyIndex = t;
  },
  setWbcProAuthorized: (e, t) => {
    e.tiers.core || (e.tiers.core = {}), e.tiers.core.authorized = t;
  },
  setWbcProDetails: (e, t) => {
    e.tiers.core || (e.tiers.core = {}), e.tiers.core.details = t;
  },
  setTierStatus: (e, { pkg: t, authorized: r, details: n }) => {
    qr.set(e.tiers, t, { authorized: r, details: n });
  }
}, o1 = {
  lg: (e) => e.lg,
  keyIndex: (e) => e.keyIndex,
  _wbcProAuthorized: (e) => {
    var t;
    return e._wbcDev || ((t = e.tiers.core) == null ? void 0 : t.authorized);
  },
  _wbcProDetails: (e) => {
    var t;
    return e._wbcDev ? { premiumKey: "DEV_MODE", status: "active" } : (t = e.tiers.core) == null ? void 0 : t.details;
  },
  _wbcDev: (e) => e._wbcDev,
  isPackageAuthorized: (e) => (t) => !!e._wbcDev,
  isWbcPro: (e, t) => t.isPackageAuthorized("core"),
  userTier: (e, t) => (r = "core") => e._wbcDev ? "development" : "free"
}, c1 = {
  setLang: (e, t) => {
    qr.$cookies.get("lg") ? e.commit("updateLang", t) : (e.commit("updateLang", "en"), qr.$cookies.set("lg", "en"));
  },
  setKeyIndex: (e, t) => {
    t > 1e3 ? e.commit("updateKeyIndex", 0) : e.commit("updateKeyIndex", t);
  }
};
let Br = new Bo.Store({
  state: s1,
  getters: o1,
  mutations: a1,
  actions: c1,
  modules: {}
});
const zs = !1;
let zi = null;
const l1 = () => (zi || (zi = new bu({
  theme: {
    dark: !1,
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  icons: { iconfont: "mdi" },
  breakpoint: { mobileBreakpoint: "sm" }
})), zi), f1 = l1(), hu = {
  ...Rl,
  render(e) {
    var t, r, n, i, u, a, s, o, c, f, p, l, h, d, _, C, T, I, L, S, w, y, F, B, Q;
    try {
      if (this.wiki && !this.wbcWikiObj)
        return e(
          "div",
          {
            style: {
              backgroundColor: "#F8F9FA",
              color: "red",
              width: "100%",
              height: "100%",
              margin: "10px"
            }
          },
          ['#WBCWikiObjMissing: "wbc-wiki-obj" not registered']
        );
      if (this.isEmpty(this.item_))
        return null;
      const H = Ll(this, e);
      if (H)
        return H;
      let z = {
        title: ((t = this.item_) == null ? void 0 : t.title) || ((r = this.$route) == null ? void 0 : r.name) || "-" + ((i = (n = this.$store) == null ? void 0 : n.state) == null ? void 0 : i.lg) || "en",
        ...((u = this == null ? void 0 : this.$route) == null ? void 0 : u.meta) || {},
        ...this.item_
      }, ue = this.protected_ ? this.protected_ : this.protected ?? null, re = this.load_ ? this.load_ : this.load ?? null, E = this.float_ ? this.float_ : this.float ?? null, x = this.hide_ ? this.hide_ : this.hide ?? null, k = this.close_ ? this.close_ : this.close ?? null, D = this.drag_ ? this.drag_ : this.drag ?? null, A = this.focus_ ? this.focus_ : this.focus ?? null;
      if (this.focusOn_ = this.focusOn_ ? this.focusOn_ : this.focusOn ?? null, x === !0 || this.item_ instanceof Object && ((this.isWbcPro || zs) && typeof ((a = this.item_) == null ? void 0 : a.tracker) == "function" && this.item_.tracker(this.itemAccessibility), ue = this.protected_ ? this.protected_ : ((o = (s = this.item_) == null ? void 0 : s.options) == null ? void 0 : o.protected_) ?? this.protected ?? null, re = this.load_ ? this.load_ : ((f = (c = this.item_) == null ? void 0 : c.options) == null ? void 0 : f.load) ?? this.load ?? null, E = this.float_ ? this.float_ : ((l = (p = this.item_) == null ? void 0 : p.options) == null ? void 0 : l.float) ?? this.float ?? null, x = this.hide_ ? this.hide_ : ((d = (h = this.item_) == null ? void 0 : h.options) == null ? void 0 : d.hide) ?? this.hide ?? null, k = this.close_ ? this.close_ : ((C = (_ = this.item_) == null ? void 0 : _.options) == null ? void 0 : C.close) ?? this.close ?? null, D = this.drag_ ? this.drag_ : ((I = (T = this.item_) == null ? void 0 : T.options) == null ? void 0 : I.drag) ?? this.drag ?? null, A = this.focus_ ? this.focus_ : ((S = (L = this.item_) == null ? void 0 : L.options) == null ? void 0 : S.focus) ?? this.focus ?? null, this.focusOn_ = this.focusOn_ ? this.focusOn_ : ((y = (w = this.item_) == null ? void 0 : w.options) == null ? void 0 : y.focusOn) ?? this.focusOn ?? null, ["LImageOverlay", "LVideoOverlay", "LSVGOverlay"].includes(
        (F = this.item_) == null ? void 0 : F.comp
      ) && !this.mapReady))
        return null;
      let P;
      if (ue) {
        let V = {
          comp: "VAlert",
          options: {
            html: typeof ue == "string" ? ue : `{
                en: "Forbidden access",
                fr:'Accès interdit',
                ar:'الوصول ممنوع'
                }`,
            class: "red",
            props: {
              variant: "outlined"
            },
            ...typeof ue == "object" ? ue : {}
          }
        };
        P = e("WBC", {
          key: `wbc-key-protected-${ue}`,
          props: { item: V }
        });
      } else if (re === !0 || typeof re == "object" && (re == null ? void 0 : re.active) === !0 || typeof re == "string") {
        let V = {
          comp: "VProgressCircular",
          options: {
            keyy: `load-${this.computedKey}`,
            hide: !1,
            props: {
              size: "60",
              width: "3",
              color: "grey",
              indeterminate: !0
            },
            html: typeof re == "string" ? re : "{en:'loading...',fr:'chargement...',ar:'تحميل...'}",
            ...typeof ((B = this.load_) == null ? void 0 : B.options) == "object" ? (Q = this.load_) == null ? void 0 : Q.options : {}
          }
        };
        P = e("WBC", {
          ref: "rawHtml",
          key: `wbc-key-load-${re}`,
          props: {
            item: [
              "<~VRow,pa-2 my-2 justify-center container>",
              V
            ]
          }
        });
      } else
        P = this.toWBC_(this.item_, e, this.children_, this.wrap_) || {}, this.syncVNodes(e, P), P = vl(this, e, P);
      return P = Xu(this, e, P, { _float: E, _close: k, _drag: D, _focus: A }), P = wl(this, e, P), P = kl(this, e, P), P = Cl(this, e, P), P = El(this, e, P, A), this.$_finalRender = P, this.updateContentRegistry(), P;
    } catch (H) {
      return console.error(`-WBC Error-:
[message]:${H.message}
[error]:${H}
[item]:${this.item_}
[PRO]:false`), e("div", {
        style: {
          padding: "10px",
          margin: "10px",
          border: "1px solid #ff5252",
          borderRadius: "4px",
          backgroundColor: "#fff1f1",
          color: "#c62828",
          fontFamily: "sans-serif",
          fontSize: "13px"
        }
      }, [
        e("div", { style: { fontWeight: "bold", marginBottom: "5px" } }, `${H.message}`)
      ]);
    }
  },
  ...Vl,
  ...$l,
  ...jl,
  ...Wl,
  methods: {
    countStr(e, t) {
      return (e.match(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;
    },
    ...$c,
    // PERF-4 FIX: Batch syncVNodes calls to prevent excessive updates
    // Multiple watchers can fire in quick succession - this batches them into single call
    _scheduleSyncVNodes() {
      this.$_syncPending || (this.$_syncPending = !0, this.$nextTick(() => {
        this.$_syncPending = !1, this.syncVNodes();
      }));
    },
    update(e) {
      typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? (this.item_ = null, this.$nextTick(() => {
        this.item_ = e;
      })) : this.item_ = e;
    },
    renderDefaultWbcode(e, t, r) {
      return (e || this.$createElement)("WBCode", {
        props: {
          item: {
            code: t,
            ...r || {}
          }
        }
      });
    },
    renderDefaultWbDataViewer(e, t, r) {
      return (e || this.$createElement)("WBDataViewer", {
        props: {
          value: t,
          ...r || {}
          // output: ['editable', 'horiz', 'vert', 'wbc'],
          // sync: true,
        },
        on: {
          input: (i) => {
            this.item_ = i;
          }
        }
      });
    },
    updateContentRegistry() {
      this.content || (this.content = { input: {}, output: {} }), this.content.input = {
        ...this.content.input || {},
        item: this.item,
        item_: this.item_,
        file: { js: this.source, html: this.paragraphsFromText(this.source), md: this.$turnDown.turndown(this.paragraphsFromText(this.source)) }
      }, this.content.output = {
        html: {
          htmlObj: () => this.$el,
          html: () => {
            var e;
            return (e = this.$el) == null ? void 0 : e.outerHTML;
          },
          pureHtml: () => {
            var e;
            return this.purifyHtml((e = this.$el) == null ? void 0 : e.outerHTML);
          },
          FHtml: (e = 2) => {
            var t;
            return this.formatHtml((t = this.$el) == null ? void 0 : t.outerHTML, { indentSize: e });
          },
          FPureHtml: (e = 2) => {
            var t;
            return this.formatHtml(this.purifyHtml((t = this.$el) == null ? void 0 : t.outerHTML), { indentSize: e });
          }
        },
        md: {
          md: () => {
            var e;
            return this.$turnDown.turndown((e = this.$el) == null ? void 0 : e.outerHTML);
          },
          pureMd: () => {
            var e;
            return this.$turnDown.turndown(this.purifyHtml((e = this.$el) == null ? void 0 : e.outerHTML));
          }
        },
        vNodes: this.vNodes,
        vNode: this.$_finalRender,
        file: this.fileContent
      };
    },
    loadFile(e) {
      var r, n;
      const t = (n = (r = this.$wbcUi2Options) == null ? void 0 : r.context) == null ? void 0 : n.resolveFile;
      if (t)
        try {
          return t(e);
        } catch (i) {
          return console.error(`Failed to resolve ${e}:`, i), null;
        }
      return null;
    },
    getContext() {
      var u;
      const e = (u = this.$wbcUi2Options) == null ? void 0 : u.context, t = null;
      let r = null;
      if (typeof e == "function")
        r = e;
      else if (e && e.root)
        r = e.root;
      else {
        if (e)
          return e;
        r = t;
      }
      if (!r) {
        const a = (s) => null;
        return a.keys = () => [], a.resolve = () => {
          throw new Error("Context not available — using relative mode");
        }, a.rawSource = () => null, a.lazyImport = () => null, a.id = "relative", a.__mode = "relative", a;
      }
      if (typeof r == "function" && r.keys) {
        const a = r.keys();
        a.filter((o) => o.includes("homeMd")).length === 0 && a.length > 0 && console.warn("[WBC DEBUG] Context has", a.length, "keys, but none match homeMd. Sample keys:", a.slice(0, 10));
      }
      const n = (a) => {
        try {
          return r(a);
        } catch {
        }
        const s = ["./src/", "./src/public/", "./docs/"];
        for (const o of s)
          try {
            const c = a.startsWith("./") ? o + a.slice(2) : o + a;
            return r(c);
          } catch {
          }
        throw new Error(`Cannot find module '${a}' in smart root context`);
      };
      n.keys = () => r.keys(), n.resolve = (a) => r.resolve(a), n.id = r.id;
      const i = (a, s) => {
        if (!a) return null;
        let o = a(s);
        if (o) return o;
        const c = ["./src/", "./src/public/", "./docs/"];
        for (const f of c) {
          const p = s.startsWith("./") ? f + s.slice(2) : f + s;
          if (o = a(p), o) return o;
        }
        return null;
      };
      return n.rawSource = (a) => i(r.rawSource, a), n.lazyImport = (a) => i(r.lazyImport, a), n;
    },
    codeOutputWBCVN(e) {
      var s;
      if (this.resolvedWbCode == null) return null;
      let {
        activator: t = "div__Show/Hide WBC-Code|align-end font-weight-bold pa-1 ",
        collapsed: r = typeof this.resolvedWbCode == "boolean" ? this.resolvedWbCode : !1,
        ...n
      } = this.resolvedWbCode || {};
      n.extra = 'Syntax: &lt;WBC item="item"/&gt;|grey lighten-1 font-weight-bold__';
      let i = this.renderDefaultWbcode(null, typeof this.item_ == "string" ? this.item_ : this._originalItem || this.item_, n), u = {
        default_0: {
          comp: "~VListGroup",
          options: {
            class: "rounded border ma-5",
            props: { value: r || !1 },
            on: {
              input: (o) => {
                this.wbCode_ = o;
              }
            },
            slots: {
              activator: { options: { comp: "VRow", class: "pa-1 lighten-1 justify-end" }, a: t }
            }
          },
          tracker: (o) => {
            o.data.options.props.value = r;
          }
        },
        default_2: i
      }, a = `wbc-code-${((s = this.item_) == null ? void 0 : s.id) || this.item_}-${r}`;
      return e("WBC", { key: a, props: { item: u } });
    },
    codeFileOutputVN(e) {
      var f;
      const t = this.itemFileLanguage;
      if (this.resolvedWbCodeFile == null || !t || !this.source) return null;
      let {
        activator: r,
        collapsed: n,
        ...i
      } = this.resolvedWbCodeFile || {}, u = r || "div__Show/Hide WBC-file-content|align-end font-weight-bold px-1 ", a = n || !1;
      i.language = t, i.extra = this.item_;
      let s = this.renderDefaultWbcode(null, this.source, i), o = {
        default_0: {
          comp: "~VListGroup",
          options: {
            class: "rounded border ma-5 ",
            props: {
              value: a || !1,
              "active-color": "red",
              "base-color": "blue"
            },
            on: {
              input: (p) => {
                this.wbCodeFile_ = p;
              }
            },
            slots: {
              activator: { options: { comp: "VRow", class: "pa-1 lighten-1 justify-end" }, a: u }
            }
          },
          tracker: (p) => {
            p.data.options.props.value = a;
          }
        },
        default_2: s
      }, c = `wbc-file-code-${((f = this.item_) == null ? void 0 : f.id) || this.item_}-${a}`;
      return e("WBC", { key: c, props: { item: o } });
    },
    dataViewerOutputVN(e) {
      var c, f;
      if (this.resolvedWbDataViewer == null || this.item_ == null) return null;
      let {
        activator: t,
        collapsed: r,
        ...n
      } = this.resolvedWbDataViewer || {}, i = t || "div__Show/Hide WBC-data-content|align-end font-weight-bold px-1 ", u = typeof this.resolvedWbDataViewer == "boolean" ? this.resolvedWbDataViewer : ((c = this.resolvedWbDataViewer) == null ? void 0 : c.collapsed) || !1, a = this.renderDefaultWbDataViewer(null, this.item_, n), s = {
        default_0: {
          comp: "~VListGroup",
          options: {
            class: "rounded border ma-5 ",
            props: {
              value: u || !1,
              "active-color": "red",
              "base-color": "blue"
            },
            on: {
              input: (p) => {
                this.wbDataViewer_ = p;
              }
            },
            slots: {
              activator: { options: { comp: "VRow", class: "pa-1 lighten-1 justify-end" }, a: i }
            }
          },
          tracker: (p) => {
            p.data.options.props.value = u;
          }
        },
        default_2: a
      }, o = `wbc-file-code-${((f = this.item_) == null ? void 0 : f.id) || this.item_}-${u}`;
      return e("WBC", { key: o, props: { item: s } });
    },
    setVNode(e, t) {
      this.vNodes || (this.vNodes = {}), t != null ? this.vNodes[e] = t : delete this.vNodes[e];
    },
    syncVNodes(e, t) {
      const r = e || this.$createElement, n = this.item_;
      this.setVNode("main", t || this.toWBC_(n, r, this.children_, this.wrap_)), this.isWbcPro || zs ? (this.setVNode("wbCode", this.codeOutputWBCVN(r)), this.setVNode("wbCodeFile", this.codeFileOutputVN(r)), this.setVNode("wbDataViewer", this.dataViewerOutputVN(r))) : (this.setVNode("wbCode", null), this.setVNode("wbCodeFile", null), this.setVNode("wbDataViewer", null));
      const i = this.globalHeaderVN(n, r), u = this.globalFooterVN(n, r), a = this.insideHeadersVN(n, r), s = this.insideFootersVN(n, r);
      this.setVNode("globalHeader", i), this.setVNode("gHeader", i), this.setVNode("header", i), this.setVNode("globalFooter", u), this.setVNode("gFooter", u), this.setVNode("footer", u), this.setVNode("insideHeaders", a), this.setVNode("headers", a), this.setVNode("insideFooters", s), this.setVNode("footers", s), this.setVNode("float", ea(this, r, n, this.float_)), this.setVNode("close", ta(this, r, n, this.close_)), this.setVNode("drag", ra(this, r, n, this.drag_)), this.float_ != null || this.focus_ != null || n != null && n.options && typeof n.options.focus == "boolean" ? this.setVNode("focusOn", Xu(this, r, this.vNodes.main, { _float: this.float_, _close: this.close_, _drag: this.drag_, _focus: this.focus_ })) : this.setVNode("focusOn", null);
    },
    getCookies() {
      const e = this.$cookies.keys();
      let t = {};
      return e.forEach((r) => {
        t[r] = this.$cookies.get(r);
      }), t;
    },
    handleMouseDown(e) {
      e.button === 1 && e.altKey && (this.select = !this.select, e.stopPropagation());
    },
    aesEnc: sa,
    aesDec: aa,
    ...Pl.methods,
    toWBC_(e, t, r, n) {
      var l;
      if (this.randomKey(`${this.nameEl}_`), !this.isNonEmpty(e))
        return null;
      let i, u, a, s, o, c;
      u = this.globalHeaderVN(e, t), a = this.globalFooterVN(e, t), s = this.insideHeadersVN(e, t), o = this.insideFootersVN(e, t), this.setVNode("insideHeaders", s), this.setVNode("headers", s), this.setVNode("insideFooters", o), this.setVNode("footers", o);
      let f;
      if (typeof e == "function")
        return zc(this, e, t);
      if (this.isVnode(e))
        f = e;
      else if (["VSpacer", "VDivider"].includes(e))
        f = t(e, {
          ref: "rawHtml"
        });
      else if (typeof e == "string")
        f = _l(this, e, t);
      else if (typeof e == "boolean" || typeof e == "number")
        f = Wc(this, e, t);
      else if (Array.isArray(e))
        f = Uc(this, e, t);
      else {
        let h = { externalChildren: r, insideHeadersVN: s, insideFootersVN: o, globalHeaderVN: u, globalFooterVN: a, externalWrapperObj: n, extChildren: c, wbcObj: ((l = this.$options) == null ? void 0 : l.wbcObj) || {} }, d = tl(this, e, t, h);
        f = d.main, i = d.options, c = d.extChildren;
      }
      if (i != null && i.wrap) {
        let h;
        typeof (i == null ? void 0 : i.wrap) == "string" ? h = {
          comp: i == null ? void 0 : i.wrap,
          options: {
            html: f
          }
        } : (i == null ? void 0 : i.wrap) instanceof Object && (h = i == null ? void 0 : i.wrap, h.options || (h.options = {}), h.options.html = f), f = t("WBC", {
          ref: "wrapHtml",
          props: { item: h }
        });
      }
      return f;
    },
    strToComps: ua,
    updateInputValue(e) {
      var t, r, n, i, u, a, s;
      typeof e == "object" && (e != null && e.target) ? (((t = e == null ? void 0 : e.target) == null ? void 0 : t.type) == "checkbox" && (this.item_.options.attrs.checked = ((r = e == null ? void 0 : e.target) == null ? void 0 : r.checked) || !1), this.item_.options.val = ((n = e == null ? void 0 : e.target) == null ? void 0 : n.value) || ((i = e == null ? void 0 : e.target) == null ? void 0 : i.checked) || !1) : ((u = this == null ? void 0 : this.item_) == null ? void 0 : u.comp) == "VCheckbox" ? this.item_.options.val = !((s = (a = this == null ? void 0 : this.item_) == null ? void 0 : a.options) != null && s.val) || !1 : this.item_.options.val = e || "";
    },
    //
    updateKey(e) {
      return e != null && e.includes("_") ? e.replace("_", "-") : e != null && e.includes("-") ? e.replace("-", "_") : e ? e + "_" : this.randomKey("key");
    },
    getNextVariableName(e) {
      let t = -1;
      for (let r in window) {
        let n = r.match(new RegExp(`^${e}_(\\d+)$`));
        if (n) {
          let i = parseInt(n[1], 10);
          t = Math.max(t, i);
        }
      }
      return `${e}_${t + 1}`;
    },
    ...Object.fromEntries(
      Object.entries(ti).filter(
        ([e, t]) => typeof t == "function"
      )
    )
  },
  components: {
    WBHtml: ju,
    WBLink: ri
  },
  vuetify: (
    /* options?.vuetify || */
    f1
  ),
  store: (
    /* options?.store ||  */
    Br
  ),
  name: "WBC"
};
var Ui = { exports: {} }, Us;
function p1() {
  return Us || (Us = 1, (function(e, t) {
    (function() {
      var r = {
        expires: "1d",
        path: "; path=/",
        domain: "",
        secure: "",
        sameSite: "; SameSite=Lax",
        partitioned: ""
      }, n = {
        // install of Vue
        install: function(i, u) {
          u && this.config(u.expires, u.path, u.domain, u.secure, u.sameSite, u.partitioned);
          const a = i.config && i.config.globalProperties;
          a && (i.config.globalProperties.$cookies = this, i.provide && i.provide("$cookies", this)), (!a || i.prototype) && (i.prototype.$cookies = this), i.$cookies = this;
        },
        config: function(i, u, a, s, o, c) {
          r.expires = i || "1d", r.path = u ? "; path=" + u : "; path=/", r.domain = a ? "; domain=" + a : "", r.secure = s ? "; Secure" : "", r.sameSite = o ? "; SameSite=" + o : "; SameSite=Lax", r.partitioned = c ? "; Partitioned" : "";
        },
        get: function(i) {
          var u = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(i).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
          if (u && (u.substring(0, 1) === "{" && u.substring(u.length - 1, u.length) === "}" || u.substring(0, 1) === "[" && u.substring(u.length - 1, u.length) === "]"))
            try {
              u = JSON.parse(u);
            } catch {
              return u;
            }
          return u;
        },
        set: function(i, u, a, s, o, c, f, p) {
          if (i) {
            if (/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(i))
              throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: ' + i);
          } else throw new Error("Cookie name is not found in the first argument.");
          u && typeof u == "object" && (u = JSON.stringify(u));
          var l = "";
          if (a = a === void 0 ? r.expires : a, a && a !== 0)
            switch (a.constructor) {
              case Number:
                a === 1 / 0 || a === -1 ? l = "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : l = "; max-age=" + a;
                break;
              case String:
                if (/^(?:\d+(y|m|d|h|min|s))$/i.test(a)) {
                  var h = a.replace(/^(\d+)(?:y|m|d|h|min|s)$/i, "$1");
                  switch (a.replace(/^(?:\d+)(y|m|d|h|min|s)$/i, "$1").toLowerCase()) {
                    // Frequency sorting
                    case "m":
                      l = "; max-age=" + +h * 2592e3;
                      break;
                    // 60 * 60 * 24 * 30
                    case "d":
                      l = "; max-age=" + +h * 86400;
                      break;
                    // 60 * 60 * 24
                    case "h":
                      l = "; max-age=" + +h * 3600;
                      break;
                    // 60 * 60
                    case "min":
                      l = "; max-age=" + +h * 60;
                      break;
                    // 60
                    case "s":
                      l = "; max-age=" + h;
                      break;
                    case "y":
                      l = "; max-age=" + +h * 31104e3;
                      break;
                  }
                } else
                  l = "; expires=" + a;
                break;
              case Date:
                l = "; expires=" + a.toUTCString();
                break;
            }
          return document.cookie = encodeURIComponent(i) + "=" + encodeURIComponent(u) + l + (o ? "; domain=" + o : r.domain) + (s ? "; path=" + s : r.path) + (c === void 0 ? r.secure : c ? "; Secure" : "") + (f === void 0 ? r.sameSite : f ? "; SameSite=" + f : "") + (p === void 0 ? r.partitioned : p ? "; Partitioned" : ""), this;
        },
        remove: function(i, u, a) {
          return !i || !this.isKey(i) ? !1 : (document.cookie = encodeURIComponent(i) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (a ? "; domain=" + a : r.domain) + (u ? "; path=" + u : r.path) + "; SameSite=Lax", !0);
        },
        isKey: function(i) {
          return new RegExp("(?:^|;\\s*)" + encodeURIComponent(i).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
        },
        keys: function() {
          if (!document.cookie) return [];
          for (var i = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), u = 0; u < i.length; u++)
            i[u] = decodeURIComponent(i[u]);
          return i;
        }
      };
      e.exports = n, typeof window < "u" && (window.$cookies = n);
    })();
  })(Ui)), Ui.exports;
}
var h1 = p1();
const Hs = /* @__PURE__ */ Gr(h1);
var On = { exports: {} }, d1 = On.exports, qs;
function m1() {
  return qs || (qs = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(d1, (function() {
      var r = 1e3, n = 6e4, i = 36e5, u = "millisecond", a = "second", s = "minute", o = "hour", c = "day", f = "week", p = "month", l = "quarter", h = "year", d = "date", _ = "Invalid Date", C = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, T = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, I = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(E) {
        var x = ["th", "st", "nd", "rd"], k = E % 100;
        return "[" + E + (x[(k - 20) % 10] || x[k] || x[0]) + "]";
      } }, L = function(E, x, k) {
        var D = String(E);
        return !D || D.length >= x ? E : "" + Array(x + 1 - D.length).join(k) + E;
      }, S = { s: L, z: function(E) {
        var x = -E.utcOffset(), k = Math.abs(x), D = Math.floor(k / 60), A = k % 60;
        return (x <= 0 ? "+" : "-") + L(D, 2, "0") + ":" + L(A, 2, "0");
      }, m: function E(x, k) {
        if (x.date() < k.date()) return -E(k, x);
        var D = 12 * (k.year() - x.year()) + (k.month() - x.month()), A = x.clone().add(D, p), P = k - A < 0, V = x.clone().add(D + (P ? -1 : 1), p);
        return +(-(D + (k - A) / (P ? A - V : V - A)) || 0);
      }, a: function(E) {
        return E < 0 ? Math.ceil(E) || 0 : Math.floor(E);
      }, p: function(E) {
        return { M: p, y: h, w: f, d: c, D: d, h: o, m: s, s: a, ms: u, Q: l }[E] || String(E || "").toLowerCase().replace(/s$/, "");
      }, u: function(E) {
        return E === void 0;
      } }, w = "en", y = {};
      y[w] = I;
      var F = "$isDayjsObject", B = function(E) {
        return E instanceof ue || !(!E || !E[F]);
      }, Q = function E(x, k, D) {
        var A;
        if (!x) return w;
        if (typeof x == "string") {
          var P = x.toLowerCase();
          y[P] && (A = P), k && (y[P] = k, A = P);
          var V = x.split("-");
          if (!A && V.length > 1) return E(V[0]);
        } else {
          var Z = x.name;
          y[Z] = x, A = Z;
        }
        return !D && A && (w = A), A || !D && w;
      }, H = function(E, x) {
        if (B(E)) return E.clone();
        var k = typeof x == "object" ? x : {};
        return k.date = E, k.args = arguments, new ue(k);
      }, z = S;
      z.l = Q, z.i = B, z.w = function(E, x) {
        return H(E, { locale: x.$L, utc: x.$u, x: x.$x, $offset: x.$offset });
      };
      var ue = (function() {
        function E(k) {
          this.$L = Q(k.locale, null, !0), this.parse(k), this.$x = this.$x || k.x || {}, this[F] = !0;
        }
        var x = E.prototype;
        return x.parse = function(k) {
          this.$d = (function(D) {
            var A = D.date, P = D.utc;
            if (A === null) return /* @__PURE__ */ new Date(NaN);
            if (z.u(A)) return /* @__PURE__ */ new Date();
            if (A instanceof Date) return new Date(A);
            if (typeof A == "string" && !/Z$/i.test(A)) {
              var V = A.match(C);
              if (V) {
                var Z = V[2] - 1 || 0, $ = (V[7] || "0").substring(0, 3);
                return P ? new Date(Date.UTC(V[1], Z, V[3] || 1, V[4] || 0, V[5] || 0, V[6] || 0, $)) : new Date(V[1], Z, V[3] || 1, V[4] || 0, V[5] || 0, V[6] || 0, $);
              }
            }
            return new Date(A);
          })(k), this.init();
        }, x.init = function() {
          var k = this.$d;
          this.$y = k.getFullYear(), this.$M = k.getMonth(), this.$D = k.getDate(), this.$W = k.getDay(), this.$H = k.getHours(), this.$m = k.getMinutes(), this.$s = k.getSeconds(), this.$ms = k.getMilliseconds();
        }, x.$utils = function() {
          return z;
        }, x.isValid = function() {
          return this.$d.toString() !== _;
        }, x.isSame = function(k, D) {
          var A = H(k);
          return this.startOf(D) <= A && A <= this.endOf(D);
        }, x.isAfter = function(k, D) {
          return H(k) < this.startOf(D);
        }, x.isBefore = function(k, D) {
          return this.endOf(D) < H(k);
        }, x.$g = function(k, D, A) {
          return z.u(k) ? this[D] : this.set(A, k);
        }, x.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, x.valueOf = function() {
          return this.$d.getTime();
        }, x.startOf = function(k, D) {
          var A = this, P = !!z.u(D) || D, V = z.p(k), Z = function(Ce, me) {
            var we = z.w(A.$u ? Date.UTC(A.$y, me, Ce) : new Date(A.$y, me, Ce), A);
            return P ? we : we.endOf(c);
          }, $ = function(Ce, me) {
            return z.w(A.toDate()[Ce].apply(A.toDate("s"), (P ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(me)), A);
          }, N = this.$W, R = this.$M, U = this.$D, M = "set" + (this.$u ? "UTC" : "");
          switch (V) {
            case h:
              return P ? Z(1, 0) : Z(31, 11);
            case p:
              return P ? Z(1, R) : Z(0, R + 1);
            case f:
              var X = this.$locale().weekStart || 0, te = (N < X ? N + 7 : N) - X;
              return Z(P ? U - te : U + (6 - te), R);
            case c:
            case d:
              return $(M + "Hours", 0);
            case o:
              return $(M + "Minutes", 1);
            case s:
              return $(M + "Seconds", 2);
            case a:
              return $(M + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, x.endOf = function(k) {
          return this.startOf(k, !1);
        }, x.$set = function(k, D) {
          var A, P = z.p(k), V = "set" + (this.$u ? "UTC" : ""), Z = (A = {}, A[c] = V + "Date", A[d] = V + "Date", A[p] = V + "Month", A[h] = V + "FullYear", A[o] = V + "Hours", A[s] = V + "Minutes", A[a] = V + "Seconds", A[u] = V + "Milliseconds", A)[P], $ = P === c ? this.$D + (D - this.$W) : D;
          if (P === p || P === h) {
            var N = this.clone().set(d, 1);
            N.$d[Z]($), N.init(), this.$d = N.set(d, Math.min(this.$D, N.daysInMonth())).$d;
          } else Z && this.$d[Z]($);
          return this.init(), this;
        }, x.set = function(k, D) {
          return this.clone().$set(k, D);
        }, x.get = function(k) {
          return this[z.p(k)]();
        }, x.add = function(k, D) {
          var A, P = this;
          k = Number(k);
          var V = z.p(D), Z = function(R) {
            var U = H(P);
            return z.w(U.date(U.date() + Math.round(R * k)), P);
          };
          if (V === p) return this.set(p, this.$M + k);
          if (V === h) return this.set(h, this.$y + k);
          if (V === c) return Z(1);
          if (V === f) return Z(7);
          var $ = (A = {}, A[s] = n, A[o] = i, A[a] = r, A)[V] || 1, N = this.$d.getTime() + k * $;
          return z.w(N, this);
        }, x.subtract = function(k, D) {
          return this.add(-1 * k, D);
        }, x.format = function(k) {
          var D = this, A = this.$locale();
          if (!this.isValid()) return A.invalidDate || _;
          var P = k || "YYYY-MM-DDTHH:mm:ssZ", V = z.z(this), Z = this.$H, $ = this.$m, N = this.$M, R = A.weekdays, U = A.months, M = A.meridiem, X = function(me, we, tt, ot) {
            return me && (me[we] || me(D, P)) || tt[we].slice(0, ot);
          }, te = function(me) {
            return z.s(Z % 12 || 12, me, "0");
          }, Ce = M || function(me, we, tt) {
            var ot = me < 12 ? "AM" : "PM";
            return tt ? ot.toLowerCase() : ot;
          };
          return P.replace(T, (function(me, we) {
            return we || (function(tt) {
              switch (tt) {
                case "YY":
                  return String(D.$y).slice(-2);
                case "YYYY":
                  return z.s(D.$y, 4, "0");
                case "M":
                  return N + 1;
                case "MM":
                  return z.s(N + 1, 2, "0");
                case "MMM":
                  return X(A.monthsShort, N, U, 3);
                case "MMMM":
                  return X(U, N);
                case "D":
                  return D.$D;
                case "DD":
                  return z.s(D.$D, 2, "0");
                case "d":
                  return String(D.$W);
                case "dd":
                  return X(A.weekdaysMin, D.$W, R, 2);
                case "ddd":
                  return X(A.weekdaysShort, D.$W, R, 3);
                case "dddd":
                  return R[D.$W];
                case "H":
                  return String(Z);
                case "HH":
                  return z.s(Z, 2, "0");
                case "h":
                  return te(1);
                case "hh":
                  return te(2);
                case "a":
                  return Ce(Z, $, !0);
                case "A":
                  return Ce(Z, $, !1);
                case "m":
                  return String($);
                case "mm":
                  return z.s($, 2, "0");
                case "s":
                  return String(D.$s);
                case "ss":
                  return z.s(D.$s, 2, "0");
                case "SSS":
                  return z.s(D.$ms, 3, "0");
                case "Z":
                  return V;
              }
              return null;
            })(me) || V.replace(":", "");
          }));
        }, x.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, x.diff = function(k, D, A) {
          var P, V = this, Z = z.p(D), $ = H(k), N = ($.utcOffset() - this.utcOffset()) * n, R = this - $, U = function() {
            return z.m(V, $);
          };
          switch (Z) {
            case h:
              P = U() / 12;
              break;
            case p:
              P = U();
              break;
            case l:
              P = U() / 3;
              break;
            case f:
              P = (R - N) / 6048e5;
              break;
            case c:
              P = (R - N) / 864e5;
              break;
            case o:
              P = R / i;
              break;
            case s:
              P = R / n;
              break;
            case a:
              P = R / r;
              break;
            default:
              P = R;
          }
          return A ? P : z.a(P);
        }, x.daysInMonth = function() {
          return this.endOf(p).$D;
        }, x.$locale = function() {
          return y[this.$L];
        }, x.locale = function(k, D) {
          if (!k) return this.$L;
          var A = this.clone(), P = Q(k, D, !0);
          return P && (A.$L = P), A;
        }, x.clone = function() {
          return z.w(this.$d, this);
        }, x.toDate = function() {
          return new Date(this.valueOf());
        }, x.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, x.toISOString = function() {
          return this.$d.toISOString();
        }, x.toString = function() {
          return this.$d.toUTCString();
        }, E;
      })(), re = ue.prototype;
      return H.prototype = re, [["$ms", u], ["$s", a], ["$m", s], ["$H", o], ["$W", c], ["$M", p], ["$y", h], ["$D", d]].forEach((function(E) {
        re[E[1]] = function(x) {
          return this.$g(x, E[0], E[1]);
        };
      })), H.extend = function(E, x) {
        return E.$i || (E(x, ue, H), E.$i = !0), H;
      }, H.locale = Q, H.isDayjs = B, H.unix = function(E) {
        return H(1e3 * E);
      }, H.en = y[w], H.Ls = y, H.p = {}, H;
    }));
  })(On)), On.exports;
}
var b1 = m1();
const dr = /* @__PURE__ */ Gr(b1), Cn = "", g1 = {
  cn: {
    Y: "年",
    M: "月",
    D: "天",
    h: "小时",
    m: "分",
    s: "秒",
    ago: "前",
    just: "刚刚"
  },
  en: {
    Y: "year",
    M: "month",
    D: "day",
    h: "hour",
    m: "minute",
    s: "second",
    ago: "ago",
    just: "just now"
  }
}, Hi = function(e) {
  return e < 10 ? "0" + e : e;
};
let qi = {};
const Gs = {
  /**
   * 安装Vue插件
   * @param {Vue} Vue
   * @param {object} options 插件引入的参数对象
   */
  install(e, t = {}) {
    const r = g1[t.lang || "cn"];
    t.debug;
    const n = t.filters || {
      ago: "ago"
    }, i = t.directives || {
      countdown: "countdown"
    };
    e.prototype.$dayjs = dr, "countdown" in i && e.directive(i.countdown, (u, a) => {
      let s, o, c, f, p, l;
      if (!a.value || !a.value.target || (l = a.value.format || "HH:mm:ss", o = dr(a.value.target), !o.isValid()))
        return u.innerText = Cn;
      qi[o.valueOf()] && clearTimeout(qi[o.valueOf()]);
      const h = () => {
        s = dr(), c = s.valueOf() <= o.valueOf() ? [o, s] : [o, o];
        let d = c[0].diff(c[1], "day"), _, C, T;
        f = c[0], p = l, d > 0 && l.match("DD") && (p = p.replace("DD", d), f = f.subtract(d, "day")), _ = f.diff(c[1], "hour"), p = p.replace("HH", Hi(_)), f = f.subtract(_, "hour"), C = f.diff(c[1], "minute"), p = p.replace("mm", Hi(C)), f = f.subtract(C, "minute"), T = f.diff(c[1], "second"), p = p.replace("ss", Hi(T)), u.innerText = p, qi[o.valueOf()] = setTimeout(h, 1e3);
      };
      h();
    }), e.filter("dayjs", (u, a, ...s) => {
      let o = dr(u);
      if (!o.isValid()) return Cn;
      if (a)
        return o[a].apply(o, s);
    }), "ago" in n && e.filter(n.ago, (u) => {
      const a = dr(u), s = dr();
      let o = "";
      if (!a.isValid()) return Cn;
      let c = s.diff(a, "year"), f = s.diff(a, "month"), p = s.diff(a, "day"), l = s.diff(a, "hour"), h = s.diff(a, "minute");
      return c > 0 ? a.format("YYYY-MM-DD") : f > 0 ? (o = f + r.M, o + r.ago) : p > 0 ? (o += p + r.D, o + r.ago) : l > 0 ? (o += l + r.h, o + r.ago) : (h > 0 && (o += h + r.m), o + r.ago);
    });
  }
};
var Mr = { exports: {} };
Mr.exports;
var Ks;
function x1() {
  return Ks || (Ks = 1, (function(e, t) {
    var r = 200, n = "__lodash_hash_undefined__", i = 800, u = 16, a = 9007199254740991, s = "[object Arguments]", o = "[object Array]", c = "[object AsyncFunction]", f = "[object Boolean]", p = "[object Date]", l = "[object Error]", h = "[object Function]", d = "[object GeneratorFunction]", _ = "[object Map]", C = "[object Number]", T = "[object Null]", I = "[object Object]", L = "[object Proxy]", S = "[object RegExp]", w = "[object Set]", y = "[object String]", F = "[object Undefined]", B = "[object WeakMap]", Q = "[object ArrayBuffer]", H = "[object DataView]", z = "[object Float32Array]", ue = "[object Float64Array]", re = "[object Int8Array]", E = "[object Int16Array]", x = "[object Int32Array]", k = "[object Uint8Array]", D = "[object Uint8ClampedArray]", A = "[object Uint16Array]", P = "[object Uint32Array]", V = /[\\^$.*+?()[\]{}|]/g, Z = /^\[object .+?Constructor\]$/, $ = /^(?:0|[1-9]\d*)$/, N = {};
    N[z] = N[ue] = N[re] = N[E] = N[x] = N[k] = N[D] = N[A] = N[P] = !0, N[s] = N[o] = N[Q] = N[f] = N[H] = N[p] = N[l] = N[h] = N[_] = N[C] = N[I] = N[S] = N[w] = N[y] = N[B] = !1;
    var R = typeof xn == "object" && xn && xn.Object === Object && xn, U = typeof self == "object" && self && self.Object === Object && self, M = R || U || Function("return this")(), X = t && !t.nodeType && t, te = X && !0 && e && !e.nodeType && e, Ce = te && te.exports === X, me = Ce && R.process, we = (function() {
      try {
        var b = te && te.require && te.require("util").types;
        return b || me && me.binding && me.binding("util");
      } catch {
      }
    })(), tt = we && we.isTypedArray;
    function ot(b, v, O) {
      switch (O.length) {
        case 0:
          return b.call(v);
        case 1:
          return b.call(v, O[0]);
        case 2:
          return b.call(v, O[0], O[1]);
        case 3:
          return b.call(v, O[0], O[1], O[2]);
      }
      return b.apply(v, O);
    }
    function rn(b, v) {
      for (var O = -1, Y = Array(b); ++O < b; )
        Y[O] = v(O);
      return Y;
    }
    function nn(b) {
      return function(v) {
        return b(v);
      };
    }
    function ct(b, v) {
      return b == null ? void 0 : b[v];
    }
    function qt(b, v) {
      return function(O) {
        return b(v(O));
      };
    }
    var vt = Array.prototype, wr = Function.prototype, Lt = Object.prototype, lt = M["__core-js_shared__"], kt = wr.toString, We = Lt.hasOwnProperty, Er = (function() {
      var b = /[^.]+$/.exec(lt && lt.keys && lt.keys.IE_PROTO || "");
      return b ? "Symbol(src)_1." + b : "";
    })(), Ar = Lt.toString, un = kt.call(Object), Sr = RegExp(
      "^" + kt.call(We).replace(V, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), ft = Ce ? M.Buffer : void 0, Ct = M.Symbol, ze = M.Uint8Array;
    ft && ft.allocUnsafe;
    var ir = qt(Object.getPrototypeOf, Object), Dr = Object.create, sn = Lt.propertyIsEnumerable, Tr = vt.splice, pt = Ct ? Ct.toStringTag : void 0, wt = (function() {
      try {
        var b = mi(Object, "defineProperty");
        return b({}, "", {}), b;
      } catch {
      }
    })(), ur = ft ? ft.isBuffer : void 0, Ue = Math.max, Nt = Date.now, sr = mi(M, "Map"), Et = mi(Object, "create"), oi = /* @__PURE__ */ (function() {
      function b() {
      }
      return function(v) {
        if (!Kt(v))
          return {};
        if (Dr)
          return Dr(v);
        b.prototype = v;
        var O = new b();
        return b.prototype = void 0, O;
      };
    })();
    function rt(b) {
      var v = -1, O = b == null ? 0 : b.length;
      for (this.clear(); ++v < O; ) {
        var Y = b[v];
        this.set(Y[0], Y[1]);
      }
    }
    function Or() {
      this.__data__ = Et ? Et(null) : {}, this.size = 0;
    }
    function ci(b) {
      var v = this.has(b) && delete this.__data__[b];
      return this.size -= v ? 1 : 0, v;
    }
    function Gt(b) {
      var v = this.__data__;
      if (Et) {
        var O = v[b];
        return O === n ? void 0 : O;
      }
      return We.call(v, b) ? v[b] : void 0;
    }
    function li(b) {
      var v = this.__data__;
      return Et ? v[b] !== void 0 : We.call(v, b);
    }
    function fi(b, v) {
      var O = this.__data__;
      return this.size += this.has(b) ? 0 : 1, O[b] = Et && v === void 0 ? n : v, this;
    }
    rt.prototype.clear = Or, rt.prototype.delete = ci, rt.prototype.get = Gt, rt.prototype.has = li, rt.prototype.set = fi;
    function fe(b) {
      var v = -1, O = b == null ? 0 : b.length;
      for (this.clear(); ++v < O; ) {
        var Y = b[v];
        this.set(Y[0], Y[1]);
      }
    }
    function Pt() {
      this.__data__ = [], this.size = 0;
    }
    function pi(b) {
      var v = this.__data__, O = Rt(v, b);
      if (O < 0)
        return !1;
      var Y = v.length - 1;
      return O == Y ? v.pop() : Tr.call(v, O, 1), --this.size, !0;
    }
    function an(b) {
      var v = this.__data__, O = Rt(v, b);
      return O < 0 ? void 0 : v[O][1];
    }
    function Ir(b) {
      return Rt(this.__data__, b) > -1;
    }
    function on(b, v) {
      var O = this.__data__, Y = Rt(O, b);
      return Y < 0 ? (++this.size, O.push([b, v])) : O[Y][1] = v, this;
    }
    fe.prototype.clear = Pt, fe.prototype.delete = pi, fe.prototype.get = an, fe.prototype.has = Ir, fe.prototype.set = on;
    function At(b) {
      var v = -1, O = b == null ? 0 : b.length;
      for (this.clear(); ++v < O; ) {
        var Y = b[v];
        this.set(Y[0], Y[1]);
      }
    }
    function hi() {
      this.size = 0, this.__data__ = {
        hash: new rt(),
        map: new (sr || fe)(),
        string: new rt()
      };
    }
    function He(b) {
      var v = bn(this, b).delete(b);
      return this.size -= v ? 1 : 0, v;
    }
    function St(b) {
      return bn(this, b).get(b);
    }
    function cn(b) {
      return bn(this, b).has(b);
    }
    function ln(b, v) {
      var O = bn(this, b), Y = O.size;
      return O.set(b, v), this.size += O.size == Y ? 0 : 1, this;
    }
    At.prototype.clear = hi, At.prototype.delete = He, At.prototype.get = St, At.prototype.has = cn, At.prototype.set = ln;
    function Dt(b) {
      var v = this.__data__ = new fe(b);
      this.size = v.size;
    }
    function Fr() {
      this.__data__ = new fe(), this.size = 0;
    }
    function ar(b) {
      var v = this.__data__, O = v.delete(b);
      return this.size = v.size, O;
    }
    function nt(b) {
      return this.__data__.get(b);
    }
    function fn(b) {
      return this.__data__.has(b);
    }
    function pn(b, v) {
      var O = this.__data__;
      if (O instanceof fe) {
        var Y = O.__data__;
        if (!sr || Y.length < r - 1)
          return Y.push([b, v]), this.size = ++O.size, this;
        O = this.__data__ = new At(Y);
      }
      return O.set(b, v), this.size = O.size, this;
    }
    Dt.prototype.clear = Fr, Dt.prototype.delete = ar, Dt.prototype.get = nt, Dt.prototype.has = fn, Dt.prototype.set = pn;
    function di(b, v) {
      var O = xi(b), Y = !O && gi(b), oe = !O && !Y && Hu(b), he = !O && !Y && !oe && Gu(b), be = O || Y || oe || he, le = be ? rn(b.length, String) : [], ge = le.length;
      for (var ut in b)
        be && // Safari 9 has enumerable `arguments.length` in strict mode.
        (ut == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        oe && (ut == "offset" || ut == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        he && (ut == "buffer" || ut == "byteLength" || ut == "byteOffset") || // Skip index properties.
        zu(ut, ge)) || le.push(ut);
      return le;
    }
    function or(b, v, O) {
      (O !== void 0 && !gn(b[v], O) || O === void 0 && !(v in b)) && jt(b, v, O);
    }
    function hn(b, v, O) {
      var Y = b[v];
      (!(We.call(b, v) && gn(Y, O)) || O === void 0 && !(v in b)) && jt(b, v, O);
    }
    function Rt(b, v) {
      for (var O = b.length; O--; )
        if (gn(b[O][0], v))
          return O;
      return -1;
    }
    function jt(b, v, O) {
      v == "__proto__" && wt ? wt(b, v, {
        configurable: !0,
        enumerable: !0,
        value: O,
        writable: !0
      }) : b[v] = O;
    }
    var J = tc();
    function g(b) {
      return b == null ? b === void 0 ? F : T : pt && pt in Object(b) ? rc(b) : oc(b);
    }
    function j(b) {
      return Nr(b) && g(b) == s;
    }
    function q(b) {
      if (!Kt(b) || sc(b))
        return !1;
      var v = _i(b) ? Sr : Z;
      return v.test(pc(b));
    }
    function ie(b) {
      return Nr(b) && qu(b.length) && !!N[g(b)];
    }
    function ve(b) {
      if (!Kt(b))
        return ac(b);
      var v = Uu(b), O = [];
      for (var Y in b)
        Y == "constructor" && (v || !We.call(b, Y)) || O.push(Y);
      return O;
    }
    function ye(b, v, O, Y, oe) {
      b !== v && J(v, function(he, be) {
        if (oe || (oe = new Dt()), Kt(he))
          Ie(b, v, be, O, ye, Y, oe);
        else {
          var le = Y ? Y(bi(b, be), he, be + "", b, v, oe) : void 0;
          le === void 0 && (le = he), or(b, be, le);
        }
      }, Ku);
    }
    function Ie(b, v, O, Y, oe, he, be) {
      var le = bi(b, O), ge = bi(v, O), ut = be.get(ge);
      if (ut) {
        or(b, O, ut);
        return;
      }
      var qe = he ? he(le, ge, O + "", b, v, be) : void 0, Pr = qe === void 0;
      if (Pr) {
        var vi = xi(ge), ki = !vi && Hu(ge), Yu = !vi && !ki && Gu(ge);
        qe = ge, vi || ki || Yu ? xi(le) ? qe = le : hc(le) ? qe = mn(le) : ki ? (Pr = !1, qe = Lr(ge)) : Yu ? (Pr = !1, qe = dn(ge)) : qe = [] : dc(ge) || gi(ge) ? (qe = le, gi(le) ? qe = mc(le) : (!Kt(le) || _i(le)) && (qe = nc(ge))) : Pr = !1;
      }
      Pr && (be.set(ge, qe), oe(qe, ge, Y, he, be), be.delete(ge)), or(b, O, qe);
    }
    function ht(b, v) {
      return lc(cc(b, v, Zu), b + "");
    }
    var it = wt ? function(b, v) {
      return wt(b, "toString", {
        configurable: !0,
        enumerable: !1,
        value: gc(v),
        writable: !0
      });
    } : Zu;
    function Lr(b, v) {
      return b.slice();
    }
    function Ee(b) {
      var v = new b.constructor(b.byteLength);
      return new ze(v).set(new ze(b)), v;
    }
    function dn(b, v) {
      var O = Ee(b.buffer);
      return new b.constructor(O, b.byteOffset, b.length);
    }
    function mn(b, v) {
      var O = -1, Y = b.length;
      for (v || (v = Array(Y)); ++O < Y; )
        v[O] = b[O];
      return v;
    }
    function Qo(b, v, O, Y) {
      var oe = !O;
      O || (O = {});
      for (var he = -1, be = v.length; ++he < be; ) {
        var le = v[he], ge = void 0;
        ge === void 0 && (ge = b[le]), oe ? jt(O, le, ge) : hn(O, le, ge);
      }
      return O;
    }
    function ec(b) {
      return ht(function(v, O) {
        var Y = -1, oe = O.length, he = oe > 1 ? O[oe - 1] : void 0, be = oe > 2 ? O[2] : void 0;
        for (he = b.length > 3 && typeof he == "function" ? (oe--, he) : void 0, be && ic(O[0], O[1], be) && (he = oe < 3 ? void 0 : he, oe = 1), v = Object(v); ++Y < oe; ) {
          var le = O[Y];
          le && b(v, le, Y, he);
        }
        return v;
      });
    }
    function tc(b) {
      return function(v, O, Y) {
        for (var oe = -1, he = Object(v), be = Y(v), le = be.length; le--; ) {
          var ge = be[++oe];
          if (O(he[ge], ge, he) === !1)
            break;
        }
        return v;
      };
    }
    function bn(b, v) {
      var O = b.__data__;
      return uc(v) ? O[typeof v == "string" ? "string" : "hash"] : O.map;
    }
    function mi(b, v) {
      var O = ct(b, v);
      return q(O) ? O : void 0;
    }
    function rc(b) {
      var v = We.call(b, pt), O = b[pt];
      try {
        b[pt] = void 0;
        var Y = !0;
      } catch {
      }
      var oe = Ar.call(b);
      return Y && (v ? b[pt] = O : delete b[pt]), oe;
    }
    function nc(b) {
      return typeof b.constructor == "function" && !Uu(b) ? oi(ir(b)) : {};
    }
    function zu(b, v) {
      var O = typeof b;
      return v = v ?? a, !!v && (O == "number" || O != "symbol" && $.test(b)) && b > -1 && b % 1 == 0 && b < v;
    }
    function ic(b, v, O) {
      if (!Kt(O))
        return !1;
      var Y = typeof v;
      return (Y == "number" ? yi(O) && zu(v, O.length) : Y == "string" && v in O) ? gn(O[v], b) : !1;
    }
    function uc(b) {
      var v = typeof b;
      return v == "string" || v == "number" || v == "symbol" || v == "boolean" ? b !== "__proto__" : b === null;
    }
    function sc(b) {
      return !!Er && Er in b;
    }
    function Uu(b) {
      var v = b && b.constructor, O = typeof v == "function" && v.prototype || Lt;
      return b === O;
    }
    function ac(b) {
      var v = [];
      if (b != null)
        for (var O in Object(b))
          v.push(O);
      return v;
    }
    function oc(b) {
      return Ar.call(b);
    }
    function cc(b, v, O) {
      return v = Ue(v === void 0 ? b.length - 1 : v, 0), function() {
        for (var Y = arguments, oe = -1, he = Ue(Y.length - v, 0), be = Array(he); ++oe < he; )
          be[oe] = Y[v + oe];
        oe = -1;
        for (var le = Array(v + 1); ++oe < v; )
          le[oe] = Y[oe];
        return le[v] = O(be), ot(b, this, le);
      };
    }
    function bi(b, v) {
      if (!(v === "constructor" && typeof b[v] == "function") && v != "__proto__")
        return b[v];
    }
    var lc = fc(it);
    function fc(b) {
      var v = 0, O = 0;
      return function() {
        var Y = Nt(), oe = u - (Y - O);
        if (O = Y, oe > 0) {
          if (++v >= i)
            return arguments[0];
        } else
          v = 0;
        return b.apply(void 0, arguments);
      };
    }
    function pc(b) {
      if (b != null) {
        try {
          return kt.call(b);
        } catch {
        }
        try {
          return b + "";
        } catch {
        }
      }
      return "";
    }
    function gn(b, v) {
      return b === v || b !== b && v !== v;
    }
    var gi = j(/* @__PURE__ */ (function() {
      return arguments;
    })()) ? j : function(b) {
      return Nr(b) && We.call(b, "callee") && !sn.call(b, "callee");
    }, xi = Array.isArray;
    function yi(b) {
      return b != null && qu(b.length) && !_i(b);
    }
    function hc(b) {
      return Nr(b) && yi(b);
    }
    var Hu = ur || xc;
    function _i(b) {
      if (!Kt(b))
        return !1;
      var v = g(b);
      return v == h || v == d || v == c || v == L;
    }
    function qu(b) {
      return typeof b == "number" && b > -1 && b % 1 == 0 && b <= a;
    }
    function Kt(b) {
      var v = typeof b;
      return b != null && (v == "object" || v == "function");
    }
    function Nr(b) {
      return b != null && typeof b == "object";
    }
    function dc(b) {
      if (!Nr(b) || g(b) != I)
        return !1;
      var v = ir(b);
      if (v === null)
        return !0;
      var O = We.call(v, "constructor") && v.constructor;
      return typeof O == "function" && O instanceof O && kt.call(O) == un;
    }
    var Gu = tt ? nn(tt) : ie;
    function mc(b) {
      return Qo(b, Ku(b));
    }
    function Ku(b) {
      return yi(b) ? di(b) : ve(b);
    }
    var bc = ec(function(b, v, O) {
      ye(b, v, O);
    });
    function gc(b) {
      return function() {
        return b;
      };
    }
    function Zu(b) {
      return b;
    }
    function xc() {
      return !1;
    }
    e.exports = bc;
  })(Mr, Mr.exports)), Mr.exports;
}
var wn, Zs;
function y1() {
  if (Zs) return wn;
  Zs = 1;
  const e = x1();
  let t = null;
  try {
    const i = oo();
    t = new i(".markdown-it-code-copy");
  } catch {
  }
  const r = {
    iconStyle: "font-size: 21px; opacity: 0.4;",
    iconClass: "mdi mdi-content-copy",
    buttonStyle: "position: absolute; top: 7.5px; right: 6px; cursor: pointer; outline: none;",
    buttonClass: "",
    element: "",
    removeEndNewline: !1
  };
  function n(i, u) {
    return u = e(r, u), (...a) => {
      const [s, o] = a;
      let c = s[o].content.replaceAll('"', "&quot;").replaceAll("'", "&apos;");
      u.removeEndNewline === !0 && (c = c.replace(/(\r\n|\n|\r)+$/, ""));
      const f = i(...a);
      return c.length === 0 ? f : `
<div style="position: relative">
	${f}
	<button class="markdown-it-code-copy ${u.buttonClass}" data-clipboard-text="${c}" style="${u.buttonStyle}" title="Copy">
		<span style="${u.iconStyle}" class="${u.iconClass}">${u.element}</span>
	</button>
</div>
`;
    };
  }
  return wn = (i, u) => {
    t && (u.onSuccess && t.on("success", u.onSuccess), u.onError && t.on("error", u.onError)), i.renderer.rules.code_block = n(i.renderer.rules.code_block, u), i.renderer.rules.fence = n(i.renderer.rules.fence, u);
  }, wn;
}
var _1 = y1();
const v1 = /* @__PURE__ */ Gr(_1);
function k1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}
function du(e, t) {
  return Array(t + 1).join(e);
}
function Mo(e) {
  return e.replace(/^\n*/, "");
}
function Vo(e) {
  for (var t = e.length; t > 0 && e[t - 1] === `
`; ) t--;
  return e.substring(0, t);
}
function $o(e) {
  return Vo(Mo(e));
}
var C1 = ["ADDRESS", "ARTICLE", "ASIDE", "AUDIO", "BLOCKQUOTE", "BODY", "CANVAS", "CENTER", "DD", "DIR", "DIV", "DL", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "FRAMESET", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "HTML", "ISINDEX", "LI", "MAIN", "MENU", "NAV", "NOFRAMES", "NOSCRIPT", "OL", "OUTPUT", "P", "PRE", "SECTION", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL"];
function Bu(e) {
  return Mu(e, C1);
}
var Wo = ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"];
function zo(e) {
  return Mu(e, Wo);
}
function w1(e) {
  return Ho(e, Wo);
}
var Uo = ["A", "TABLE", "THEAD", "TBODY", "TFOOT", "TH", "TD", "IFRAME", "SCRIPT", "AUDIO", "VIDEO"];
function E1(e) {
  return Mu(e, Uo);
}
function A1(e) {
  return Ho(e, Uo);
}
function Mu(e, t) {
  return t.indexOf(e.nodeName) >= 0;
}
function Ho(e, t) {
  return e.getElementsByTagName && t.some(function(r) {
    return e.getElementsByTagName(r).length;
  });
}
var S1 = [[/\\/g, "\\\\"], [/\*/g, "\\*"], [/^-/g, "\\-"], [/^\+ /g, "\\+ "], [/^(=+)/g, "\\$1"], [/^(#{1,6}) /g, "\\$1 "], [/`/g, "\\`"], [/^~~~/g, "\\~~~"], [/\[/g, "\\["], [/\]/g, "\\]"], [/^>/g, "\\>"], [/_/g, "\\_"], [/^(\d+)\. /g, "$1\\. "]];
function qo(e) {
  return S1.reduce(function(t, r) {
    return t.replace(r[0], r[1]);
  }, e);
}
var Le = {};
Le.paragraph = {
  filter: "p",
  replacement: function(e) {
    return `

` + e + `

`;
  }
};
Le.lineBreak = {
  filter: "br",
  replacement: function(e, t, r) {
    return r.br + `
`;
  }
};
Le.heading = {
  filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
  replacement: function(e, t, r) {
    var n = Number(t.nodeName.charAt(1));
    if (r.headingStyle === "setext" && n < 3) {
      var i = du(n === 1 ? "=" : "-", e.length);
      return `

` + e + `
` + i + `

`;
    } else
      return `

` + du("#", n) + " " + e + `

`;
  }
};
Le.blockquote = {
  filter: "blockquote",
  replacement: function(e) {
    return e = $o(e).replace(/^/gm, "> "), `

` + e + `

`;
  }
};
Le.list = {
  filter: ["ul", "ol"],
  replacement: function(e, t) {
    var r = t.parentNode;
    return r.nodeName === "LI" && r.lastElementChild === t ? `
` + e : `

` + e + `

`;
  }
};
Le.listItem = {
  filter: "li",
  replacement: function(e, t, r) {
    var n = r.bulletListMarker + "   ", i = t.parentNode;
    if (i.nodeName === "OL") {
      var u = i.getAttribute("start"), a = Array.prototype.indexOf.call(i.children, t);
      n = (u ? Number(u) + a : a + 1) + ".  ";
    }
    var s = /\n$/.test(e);
    return e = $o(e) + (s ? `
` : ""), e = e.replace(/\n/gm, `
` + " ".repeat(n.length)), n + e + (t.nextSibling ? `
` : "");
  }
};
Le.indentedCodeBlock = {
  filter: function(e, t) {
    return t.codeBlockStyle === "indented" && e.nodeName === "PRE" && e.firstChild && e.firstChild.nodeName === "CODE";
  },
  replacement: function(e, t, r) {
    return `

    ` + t.firstChild.textContent.replace(/\n/g, `
    `) + `

`;
  }
};
Le.fencedCodeBlock = {
  filter: function(e, t) {
    return t.codeBlockStyle === "fenced" && e.nodeName === "PRE" && e.firstChild && e.firstChild.nodeName === "CODE";
  },
  replacement: function(e, t, r) {
    for (var n = t.firstChild.getAttribute("class") || "", i = (n.match(/language-(\S+)/) || [null, ""])[1], u = t.firstChild.textContent, a = r.fence.charAt(0), s = 3, o = new RegExp("^" + a + "{3,}", "gm"), c; c = o.exec(u); )
      c[0].length >= s && (s = c[0].length + 1);
    var f = du(a, s);
    return `

` + f + i + `
` + u.replace(/\n$/, "") + `
` + f + `

`;
  }
};
Le.horizontalRule = {
  filter: "hr",
  replacement: function(e, t, r) {
    return `

` + r.hr + `

`;
  }
};
Le.inlineLink = {
  filter: function(e, t) {
    return t.linkStyle === "inlined" && e.nodeName === "A" && e.getAttribute("href");
  },
  replacement: function(e, t) {
    var r = Vu(t.getAttribute("href")), n = $u(Wn(t.getAttribute("title"))), i = n ? ' "' + n + '"' : "";
    return "[" + e + "](" + r + i + ")";
  }
};
Le.referenceLink = {
  filter: function(e, t) {
    return t.linkStyle === "referenced" && e.nodeName === "A" && e.getAttribute("href");
  },
  replacement: function(e, t, r) {
    var n = Vu(t.getAttribute("href")), i = Wn(t.getAttribute("title"));
    i && (i = ' "' + $u(i) + '"');
    var u, a;
    switch (r.linkReferenceStyle) {
      case "collapsed":
        u = "[" + e + "][]", a = "[" + e + "]: " + n + i;
        break;
      case "shortcut":
        u = "[" + e + "]", a = "[" + e + "]: " + n + i;
        break;
      default:
        var s = this.references.length + 1;
        u = "[" + e + "][" + s + "]", a = "[" + s + "]: " + n + i;
    }
    return this.references.push(a), u;
  },
  references: [],
  append: function(e) {
    var t = "";
    return this.references.length && (t = `

` + this.references.join(`
`) + `

`, this.references = []), t;
  }
};
Le.emphasis = {
  filter: ["em", "i"],
  replacement: function(e, t, r) {
    return e.trim() ? r.emDelimiter + e + r.emDelimiter : "";
  }
};
Le.strong = {
  filter: ["strong", "b"],
  replacement: function(e, t, r) {
    return e.trim() ? r.strongDelimiter + e + r.strongDelimiter : "";
  }
};
Le.code = {
  filter: function(e) {
    var t = e.previousSibling || e.nextSibling, r = e.parentNode.nodeName === "PRE" && !t;
    return e.nodeName === "CODE" && !r;
  },
  replacement: function(e) {
    if (!e) return "";
    e = e.replace(/\r?\n|\r/g, " ");
    for (var t = /^`|^ .*?[^ ].* $|`$/.test(e) ? " " : "", r = "`", n = e.match(/`+/gm) || []; n.indexOf(r) !== -1; ) r = r + "`";
    return r + t + e + t + r;
  }
};
Le.image = {
  filter: "img",
  replacement: function(e, t) {
    var r = qo(Wn(t.getAttribute("alt"))), n = Vu(t.getAttribute("src") || ""), i = Wn(t.getAttribute("title")), u = i ? ' "' + $u(i) + '"' : "";
    return n ? "![" + r + "](" + n + u + ")" : "";
  }
};
function Wn(e) {
  return e ? e.replace(/(\n+\s*)+/g, `
`) : "";
}
function Vu(e) {
  var t = e.replace(/([<>()])/g, "\\$1");
  return t.indexOf(" ") >= 0 ? "<" + t + ">" : t;
}
function $u(e) {
  return e.replace(/"/g, '\\"');
}
function Go(e) {
  this.options = e, this._keep = [], this._remove = [], this.blankRule = {
    replacement: e.blankReplacement
  }, this.keepReplacement = e.keepReplacement, this.defaultRule = {
    replacement: e.defaultReplacement
  }, this.array = [];
  for (var t in e.rules) this.array.push(e.rules[t]);
}
Go.prototype = {
  add: function(e, t) {
    this.array.unshift(t);
  },
  keep: function(e) {
    this._keep.unshift({
      filter: e,
      replacement: this.keepReplacement
    });
  },
  remove: function(e) {
    this._remove.unshift({
      filter: e,
      replacement: function() {
        return "";
      }
    });
  },
  forNode: function(e) {
    if (e.isBlank) return this.blankRule;
    var t;
    return (t = Gi(this.array, e, this.options)) || (t = Gi(this._keep, e, this.options)) || (t = Gi(this._remove, e, this.options)) ? t : this.defaultRule;
  },
  forEach: function(e) {
    for (var t = 0; t < this.array.length; t++) e(this.array[t], t);
  }
};
function Gi(e, t, r) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    if (D1(i, t, r)) return i;
  }
}
function D1(e, t, r) {
  var n = e.filter;
  if (typeof n == "string") {
    if (n === t.nodeName.toLowerCase()) return !0;
  } else if (Array.isArray(n)) {
    if (n.indexOf(t.nodeName.toLowerCase()) > -1) return !0;
  } else if (typeof n == "function") {
    if (n.call(e, t, r)) return !0;
  } else
    throw new TypeError("`filter` needs to be a string, array, or function");
}
function T1(e) {
  var t = e.element, r = e.isBlock, n = e.isVoid, i = e.isPre || function(p) {
    return p.nodeName === "PRE";
  };
  if (!(!t.firstChild || i(t))) {
    for (var u = null, a = !1, s = null, o = Ys(s, t, i); o !== t; ) {
      if (o.nodeType === 3 || o.nodeType === 4) {
        var c = o.data.replace(/[ \r\n\t]+/g, " ");
        if ((!u || / $/.test(u.data)) && !a && c[0] === " " && (c = c.substr(1)), !c) {
          o = Ki(o);
          continue;
        }
        o.data = c, u = o;
      } else if (o.nodeType === 1)
        r(o) || o.nodeName === "BR" ? (u && (u.data = u.data.replace(/ $/, "")), u = null, a = !1) : n(o) || i(o) ? (u = null, a = !0) : u && (a = !1);
      else {
        o = Ki(o);
        continue;
      }
      var f = Ys(s, o, i);
      s = o, o = f;
    }
    u && (u.data = u.data.replace(/ $/, ""), u.data || Ki(u));
  }
}
function Ki(e) {
  var t = e.nextSibling || e.parentNode;
  return e.parentNode.removeChild(e), t;
}
function Ys(e, t, r) {
  return e && e.parentNode === t || r(t) ? t.nextSibling || t.parentNode : t.firstChild || t.nextSibling || t.parentNode;
}
var Wu = typeof window < "u" ? window : {};
function O1() {
  var e = Wu.DOMParser, t = !1;
  try {
    new e().parseFromString("", "text/html") && (t = !0);
  } catch {
  }
  return t;
}
function I1() {
  var e = function() {
  };
  return F1() ? e.prototype.parseFromString = function(t) {
    var r = new window.ActiveXObject("htmlfile");
    return r.designMode = "on", r.open(), r.write(t), r.close(), r;
  } : e.prototype.parseFromString = function(t) {
    var r = document.implementation.createHTMLDocument("");
    return r.open(), r.write(t), r.close(), r;
  }, e;
}
function F1() {
  var e = !1;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch {
    Wu.ActiveXObject && (e = !0);
  }
  return e;
}
var L1 = O1() ? Wu.DOMParser : I1();
function N1(e, t) {
  var r;
  if (typeof e == "string") {
    var n = P1().parseFromString(
      // DOM parsers arrange elements in the <head> and <body>.
      // Wrapping in a custom element ensures elements are reliably arranged in
      // a single element.
      '<x-turndown id="turndown-root">' + e + "</x-turndown>",
      "text/html"
    );
    r = n.getElementById("turndown-root");
  } else
    r = e.cloneNode(!0);
  return T1({
    element: r,
    isBlock: Bu,
    isVoid: zo,
    isPre: t.preformattedCode ? R1 : null
  }), r;
}
var Zi;
function P1() {
  return Zi = Zi || new L1(), Zi;
}
function R1(e) {
  return e.nodeName === "PRE" || e.nodeName === "CODE";
}
function j1(e, t) {
  return e.isBlock = Bu(e), e.isCode = e.nodeName === "CODE" || e.parentNode.isCode, e.isBlank = B1(e), e.flankingWhitespace = M1(e, t), e;
}
function B1(e) {
  return !zo(e) && !E1(e) && /^\s*$/i.test(e.textContent) && !w1(e) && !A1(e);
}
function M1(e, t) {
  if (e.isBlock || t.preformattedCode && e.isCode)
    return {
      leading: "",
      trailing: ""
    };
  var r = V1(e.textContent);
  return r.leadingAscii && Js("left", e, t) && (r.leading = r.leadingNonAscii), r.trailingAscii && Js("right", e, t) && (r.trailing = r.trailingNonAscii), {
    leading: r.leading,
    trailing: r.trailing
  };
}
function V1(e) {
  var t = e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
  return {
    leading: t[1],
    // whole string for whitespace-only strings
    leadingAscii: t[2],
    leadingNonAscii: t[3],
    trailing: t[4],
    // empty for whitespace-only strings
    trailingNonAscii: t[5],
    trailingAscii: t[6]
  };
}
function Js(e, t, r) {
  var n, i, u;
  return e === "left" ? (n = t.previousSibling, i = / $/) : (n = t.nextSibling, i = /^ /), n && (n.nodeType === 3 ? u = i.test(n.nodeValue) : r.preformattedCode && n.nodeName === "CODE" ? u = !1 : n.nodeType === 1 && !Bu(n) && (u = i.test(n.textContent))), u;
}
var $1 = Array.prototype.reduce;
function Xt(e) {
  if (!(this instanceof Xt)) return new Xt(e);
  var t = {
    rules: Le,
    headingStyle: "setext",
    hr: "* * *",
    bulletListMarker: "*",
    codeBlockStyle: "indented",
    fence: "```",
    emDelimiter: "_",
    strongDelimiter: "**",
    linkStyle: "inlined",
    linkReferenceStyle: "full",
    br: "  ",
    preformattedCode: !1,
    blankReplacement: function(r, n) {
      return n.isBlock ? `

` : "";
    },
    keepReplacement: function(r, n) {
      return n.isBlock ? `

` + n.outerHTML + `

` : n.outerHTML;
    },
    defaultReplacement: function(r, n) {
      return n.isBlock ? `

` + r + `

` : r;
    }
  };
  this.options = k1({}, t, e), this.rules = new Go(this.options);
}
Xt.prototype = {
  /**
   * The entry point for converting a string or DOM node to Markdown
   * @public
   * @param {String|HTMLElement} input The string or DOM node to convert
   * @returns A Markdown representation of the input
   * @type String
   */
  turndown: function(e) {
    if (!U1(e))
      throw new TypeError(e + " is not a string, or an element/document/fragment node.");
    if (e === "") return "";
    var t = Ko.call(this, new N1(e, this.options));
    return W1.call(this, t);
  },
  /**
   * Add one or more plugins
   * @public
   * @param {Function|Array} plugin The plugin or array of plugins to add
   * @returns The Turndown instance for chaining
   * @type Object
   */
  use: function(e) {
    if (Array.isArray(e))
      for (var t = 0; t < e.length; t++) this.use(e[t]);
    else if (typeof e == "function")
      e(this);
    else
      throw new TypeError("plugin must be a Function or an Array of Functions");
    return this;
  },
  /**
   * Adds a rule
   * @public
   * @param {String} key The unique key of the rule
   * @param {Object} rule The rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  addRule: function(e, t) {
    return this.rules.add(e, t), this;
  },
  /**
   * Keep a node (as HTML) that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  keep: function(e) {
    return this.rules.keep(e), this;
  },
  /**
   * Remove a node that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  remove: function(e) {
    return this.rules.remove(e), this;
  },
  /**
   * Escapes Markdown syntax
   * @public
   * @param {String} string The string to escape
   * @returns A string with Markdown syntax escaped
   * @type String
   */
  escape: function(e) {
    return qo(e);
  }
};
function Ko(e) {
  var t = this;
  return $1.call(e.childNodes, function(r, n) {
    n = new j1(n, t.options);
    var i = "";
    return n.nodeType === 3 ? i = n.isCode ? n.nodeValue : t.escape(n.nodeValue) : n.nodeType === 1 && (i = z1.call(t, n)), Zo(r, i);
  }, "");
}
function W1(e) {
  var t = this;
  return this.rules.forEach(function(r) {
    typeof r.append == "function" && (e = Zo(e, r.append(t.options)));
  }), e.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
}
function z1(e) {
  var t = this.rules.forNode(e), r = Ko.call(this, e), n = e.flankingWhitespace;
  return (n.leading || n.trailing) && (r = r.trim()), n.leading + t.replacement(r, e, this.options) + n.trailing;
}
function Zo(e, t) {
  var r = Vo(e), n = Mo(t), i = Math.max(e.length - r.length, t.length - n.length), u = `

`.substring(0, i);
  return r + u + n;
}
function U1(e) {
  return e != null && (typeof e == "string" || e.nodeType && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11));
}
const Yo = Hs.default || Hs, H1 = Gs.default || Gs, mu = ou.default || ou, q1 = (e, t) => {
  let r;
  return (...n) => {
    clearTimeout(r), r = setTimeout(() => e(...n), t);
  };
};
if (typeof ResizeObserver < "u") {
  const e = ResizeObserver;
  window.ResizeObserver = class {
    constructor(r) {
      this.debouncedCallback = q1(r, 50), this.observer = new e(this.debouncedCallback);
    }
    observe(r) {
      this.observer.observe(r);
    }
    unobserve(r) {
      this.observer.unobserve(r);
    }
    disconnect() {
      this.observer.disconnect();
    }
  };
}
let Yi = null;
const Jo = () => (Yi || (Yi = new bu({
  theme: {
    dark: !1,
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  icons: { iconfont: "mdi" },
  breakpoint: { mobileBreakpoint: "sm" }
})), Yi), G1 = Jo(), Xs = new Re({
  html: !0,
  linkify: !0,
  typographer: !0,
  breaks: !1
}).use(bt, {
  permalink: bt.permalink.headerLink({ safariReaderFix: !0 }),
  slugify: (e) => e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}).use(v1, {
  copyButtonText: "Copy",
  copiedButtonText: "Copied!",
  buttonClass: "pa-3",
  onSuccess: (e) => {
    const t = e.trigger, r = t.querySelector(".mdi") || t.querySelector("i"), n = r ? r.className : "", i = r ? r.style.color : "";
    r && (r.className = "mdi mdi-check", r.textContent = "copied!", r.style.color = "grey", setTimeout(() => {
      r.className = n, r.style.color = i, r.textContent = "";
    }, 1e4));
  }
});
function K1(e, t = {}) {
  if (!e) return;
  if ([
    {
      name: "Vuex",
      property: "$store",
      fallback: Xi,
      fallbackInstance: Br
    },
    { name: "BootstrapVue", property: "$bootstrap", fallback: yc },
    { name: "IconsPlugin", property: "$icons", fallback: _c },
    { name: "JsonViewer", property: "$jsonViewer", fallback: mu },
    { name: "VueCookies", property: "$cookies", fallback: Yo },
    {
      name: "MarkdownIt",
      property: "$md",
      fallback: Re,
      fallbackInstance: Xs
    },
    {
      name: "TurnDown",
      property: "$turndown",
      fallback: Xt,
      fallbackInstance: new Xt({
        headingStyle: "atx",
        bulletListMarker: "-",
        codeBlockStyle: "fenced",
        emDelimiter: "_"
      })
    },
    {
      name: "Vuetify",
      property: "$vuetify",
      fallback: bu,
      fallbackInstance: G1
    },
    ...(t == null ? void 0 : t.plugins) || []
  ].forEach(
    ({ name: n, property: i, fallback: u, fallbackInstance: a, options: s }) => {
      var f, p, l, h;
      const o = ((p = (f = t == null ? void 0 : t.plugins) == null ? void 0 : f[n]) == null ? void 0 : p.plugin) || a || u, c = ((h = (l = t == null ? void 0 : t.plugins) == null ? void 0 : l[n]) == null ? void 0 : h.options) || s;
      if (o) {
        if (i && e.prototype[i]) return;
        try {
          if (typeof o == "function" && !o.install && !o.cid)
            return;
          c ? e.use(o, c) : e.use(o);
        } catch (d) {
          console.error(`[WBC Install] Failed to install ${n}:`, d);
        }
      }
    }
  ), e.prototype.$md || (e.prototype.$md = Xs), !e.prototype.$turndown) {
    const n = new Xt({
      headingStyle: "atx",
      bulletListMarker: "-",
      codeBlockStyle: "fenced",
      emDelimiter: "_"
    });
    e.prototype.$turndown = n, e.prototype.$turnDown = n;
  }
  e.mixin({
    beforeCreate() {
      var n;
      e.use(H1, {
        filters: { ago: "ago" },
        directives: { countdown: "countdown" }
      }), e.component("WBHtml", ju), e.component("WBLink", ri), e.component("JsonViewer", mu), Object.entries((t == null ? void 0 : t.components) || {}).forEach(([i, u]) => {
        e.component(i, u);
      }), Object.assign(e.prototype, ti), (n = e == null ? void 0 : e.prototype) != null && n.$store || (e.prototype.$store = Br), e.prototype.$wbcUi2Options = t, t != null && t.lg && Br && (Br.commit("updateLang", t.lg), document.cookie = `lg=${encodeURIComponent(t.lg)}; path=/; max-age=31536000; SameSite=Lax`);
    },
    methods: {
      renderVNodeToString(n, i = !0, u) {
        const a = typeof n == "function" ? n(this.$createElement) : n, s = new (e.extend())({
          ...u ? { parent: u } : {},
          render: (c) => a
        }).$mount();
        let o = s.$el.outerHTML;
        if (s.$destroy(), i !== !1) {
          const c = i === !0 ? {
            removeEmpty: ["span", "div"],
            collapseWrappers: ["span", "div"]
          } : i;
          o = this.cleanVueHtml(o, c);
        }
        return o;
      },
      mountVNode(n, i) {
        const u = typeof n == "function" ? n(this.$createElement) : n, a = new (e.extend())({
          ...i ? { parent: i } : {},
          render: (s) => u
        }).$mount();
        return {
          vm: a,
          el: a.$el,
          get html() {
            return this.cleanVueHtml(a.$el.outerHTML);
          },
          destroy: () => a.$destroy()
        };
      }
    }
  });
}
const Xo = {
  ...ti,
  install: K1,
  WBHtml: ju,
  WBLink: ri,
  JsonViewer: mu,
  MarkdownIt: Re,
  TurnDown: Xt,
  VueCookies: Yo,
  getVuetifyInstance: Jo
};
let Ji;
const zn = function(e, t = {}) {
  if (!zn.installed) {
    zn.installed = !0;
    try {
      Xo.install(e, t), hu || console.error("[WBC] WBCOptions is UNDEFINED!"), Ji = e.extend(hu), e.component("WBC", Ji), global && typeof global < "u" && (global.WBC = Ji);
    } catch (r) {
      console.error("[WBC] Installation FAILED:", r);
    }
  }
};
typeof window < "u" && window.Vue && zn(window.Vue);
const em = {
  install: zn,
  extendedInstall: Xo,
  WBC: hu
};
export {
  hu as WBC,
  ju as WBHtml,
  ri as WBLink,
  em as default,
  Jo as getVuetifyInstance,
  so as safeEval,
  rp as strToObj
};
//# sourceMappingURL=core2.es.js.map
