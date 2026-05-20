<p align="center">
  <img src="logo/wb-core.svg" alt="@wbc-ui/core2" width="220"/>
</p>

<p align="center">
  <strong>UI as Data. Vue 2. Unlimited.</strong><br/>
  <em>Define components as JSON. Let the engine render. Ship complex UIs in minutes, not weeks.</em>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@wbc-ui/core2"><img src="https://img.shields.io/npm/v/@wbc-ui/core2?color=1976D2" alt="npm"></a>
<a href="https://www.npmjs.com/package/@wbc-ui/core2?activeTab=versions"><img src="https://img.shields.io/npm/dm/@wbc-ui/core2?color=1976D2" alt="downloads"></a>
<a href="LICENSE"><img src="https://img.shields.io/npm/l/@wbc-ui/core2?color=blue" alt="license"></a>
<a href="https://vuejs.org"><img src="https://img.shields.io/badge/vue-2.7%2B-42b883" alt="vue"></a>
</p>

<p align="center">
  <a href="https://flow.wbc-ui.com">📘 Docs</a> ·
  <a href="https://github.com/wbc-ui/core2">🐙 GitHub</a> ·
  <a href="https://demo.wbc-ui.com/lab">▶️ Playground</a> ·
  <a href="https://wbc-ui.com">💎 Pro</a>
</p>

<p align="center">
  <img src="docs/media/hero-input-output.svg"
       alt="@wbc-ui/core2 — write &lt;WBC :item='...'&gt;, render real Material UI"
       width="780"/>
</p>

---

## Why?

**@wbc-ui/core2** replaces the entire HTML/CSS/JS template stack with a single `<WBC>` tag driven by data.

### Write 10× less code

```javascript
// Before: 80 lines of <template>, <script>, methods, computed, v-if, v-for
// After: one line. One component.
<WBC :item="dynamicUIConfig" />
```

The engine understands **files**, **URLs**, **Markdown**, **code**, and **rich media** natively — no wrapper components, no special handling. Pipe `|` syntax gives you styling, linking, and type-override in a single string.

### Markdown becomes interactive

```html
<WBC :item="'./landing.md'" />
<!-- Renders a full markdown page with TOC, syntax-highlighted code blocks,
     anchor links, and copy buttons. The markdown IS the UI. -->
```

### Files and URLs as first-class citizens

```javascript
<WBC :item="'./chart-data.json'" />          // JSON → rendered
<WBC :item="'./hero.png|rounded elevation-4'" /> // image with Vuetify classes
<WBC :item="'./code-sample.py'" />           // Python → syntax-colored block
<WBC :item="'https://api.example.com/data'" /> // fetch → parse → render
<WBC :item="'./slides.pdf'" />               // PDF viewer
<WBC :item="'https://youtu.be/dQw4w9WgXcQ'" />// YouTube embed
```

### Replace HTML · CSS · JS with JSON

```javascript
// No <div>. No class="" strings. No event handlers in templates.
// Everything is an object. Everything is reactive.
{
  comp: 'VCard',
  options: {
    html: (ctx) => ctx.data.intro,              // dynamic HTML
    class: (ctx) => ctx.dark ? 'dark-card' : null, // conditional CSS
    on: { click: (ctx) => ctx.toggle('expanded') }, // reactive events
    props: { elevation: 4 }
  },
  items: [
    './logo.png|ma-auto',                        // file with Vuetify classes
    { comp: 'VBtn', options: { html: '[[ CTA ]]' } } // WBHtml markup inside
  ]
}
```

> **One language. One component. One `<WBC>` tag.** No template files. No CSS files. No `<style scoped>`. Everything is data.

---

## What is @wbc-ui/core2?

A **Vue 2.7+ plugin** that implements the **"UI as Data"** paradigm. You feed it a JSON object — it recursively builds a live, reactive Vuetify/Bootstrap UI.

| Component | Role |
|---|---|
| `<WBC :item="...">` | Polymorphic rendering engine — dispatches to 6 renderers based on item type |
| `renderString` | Inline strings with pipe `|` syntax: `"text|class|link|parsedAs"` |
| `renderObject` | Component descriptors: `{ comp: 'VBtn', options: { ... } }` |
| `renderArray` | Lists/grids with inheritance, disposition, and virtual scrolling |
| `renderFile` | Images, videos, PDFs, code files |
| `renderFunction` | Lazy-evaluated render functions |
| `renderPrimitive` | Numbers, booleans, dates |

**Who's it for?** Solutions architects, full-stack devs, low-code platform builders — anyone who needs to ship complex, data-driven UIs without drowning in templates.

---

## Teasing Examples

### Level 1 — Hello World
```html
<WBC :item="'Welcome to @wbc-ui/core2|text-h3 primary--text'" />
```
→ Renders `<h3 class="primary--text">Welcome to @wbc-ui/core2</h3>`. The pipe `|` separates content from styling — ½ second of typing.


### Level 2 — A full card
```html
<WBC :item="{
  comp: 'VCard',
  options: {
    props: { elevation: 4, outlined: true },
    html: '<h2>{{ title }}</h2><p>{{ body }}</p><v-btn @click=\"doAction\">Go</v-btn>',
    class: 'ma-4',
    on: { click: (ctx) => ctx.emit('selected', ctx.data) }
  }
}" />
```

### Level 3 — Reactive, data-driven, multilingual
```javascript
// This object could come from an API, a CMS, or a user-built form
const pageDefinition = {
  dive: true,                              // enable reactive mode
  comp: (ctx) => ctx.lg === 'ar'           // component changes by language
    ? 'VSheet' : 'VContainer',
  options: {
    html: (ctx) => ctx.data.intro[ctx.lg], // pick localized content
    class: (ctx) => ctx.wbcTier === 'pro'  // tier-gated styling
      ? 'gradient-hero' : 'flat-hero'
  },
  items: [
    { comp: 'VAvatar', options: { props: { src: '/logo.png', size: 64 } } },
    { comp: 'VBtn', options: { html: '{{ CTA }}', on: { click: 'goPricing' } } }
  ]
};
// One <WBC :item="pageDefinition" /> renders the entire page.
```

---

## 🚀 Try it in 30 seconds

```bash
# Starter template (coming soon — repo in development)
npx degit wbc-ui/starter my-app && cd my-app && npm install && npm run dev
```

> While the starter template is being finalized, the easiest way to explore the engine is the live demo: **[demo.wbc-ui.com](https://www.demo.wbc-ui.com/lab)** — a multi-page app built from JSON, with live source visible alongside each example.

---

## Installation

### Prerequisites

- **Node.js** ≥ 18 (the engine declares this; older versions may work but are not tested)
- **Vue 2.7.x** (the library targets Vue 2 specifically; Vue 3 support tracked separately as `@wbc-ui/core3`)
- A bundler that understands ESM exports: Vite (recommended), Webpack 5, or Vue CLI 5

### npm (recommended)

```bash
npm install @wbc-ui/core2

# Peer dependencies — install once per project
npm install vue@^2.7.16 vuetify@^2.7.2 vuex@^3.6.2 vue-router@^3
```

### Yarn / pnpm

```bash
# Yarn
yarn add @wbc-ui/core2
yarn add vue@^2.7.16 vuetify@^2.7.2 vuex@^3.6.2 vue-router@^3

# pnpm
pnpm add @wbc-ui/core2
pnpm add vue@^2.7.16 vuetify@^2.7.2 vuex@^3.6.2 vue-router@^3
```

> The published tarball is currently tagged `next` (see `publishConfig.tag` in `package.json`). To install the latest release explicitly: `npm install @wbc-ui/core2@next`.

### Vite project setup

```javascript
// vite.config.js
import { wbcVitePlugin } from '@wbc-ui/core2/vite-plugin';
export default defineConfig({
  plugins: [vue(), ...wbcVitePlugin()]  // ← auto-aliases, raw loaders, require.context
});
```

### Webpack project setup

For Webpack 5 / Vue CLI 5 projects:

```javascript
// webpack.config.js or vue.config.js
const wbcWebpack = require('@wbc-ui/core2/wbc.webpack.js');
// See the plugin's exports for the available configuration API.
```

### Vue 2 plugin registration

```javascript
// main.js
import Vue from 'vue';
import wbcCore from '@wbc-ui/core2';

Vue.use(wbcCore);
// That's it. Vuetify, Vuex, BootstrapVue, MarkdownIt are auto-installed.
// Use <WBC :item="..."> anywhere in your app.
```

### Named imports

```javascript
import { WBC, WBHtml, WBLink, getVuetifyInstance } from '@wbc-ui/core2';
```

### Ecosystem extensions

The core engine is intentionally small. Optional functionality lives in sibling packages — each registers itself into the core after `Vue.use(wbcCore)`:

```javascript
import Vue from 'vue';
import wbcCore   from '@wbc-ui/core2';      // Always first — extensions depend on it
import wbCode    from '@wbc-ui/code2';      // Code editor + syntax highlighting
import wbLatex   from '@wbc-ui/latex2';     // LaTeX math rendering
import wbMermaid from '@wbc-ui/mermaid2';   // Mermaid diagrams
import wbChart   from '@wbc-ui/chart2';     // ECharts data visualization

Vue.use(wbcCore);
Vue.use(wbCode);
Vue.use(wbLatex);
Vue.use(wbMermaid);
Vue.use(wbChart);
```

Other available extensions: `@wbc-ui/alert2`, `@wbc-ui/cli2`, `@wbc-ui/dataviewer2`, `@wbc-ui/gis2`, `@wbc-ui/js2`, `@wbc-ui/office2`, `@wbc-ui/press2`. See the [Ecosystem](#-ecosystem) section below for what each one adds.

### Troubleshooting common install errors

| Symptom | Cause | Fix |
|---|---|---|
| `Vue.use is not a function` | Two copies of Vue are loaded (typically: your app has Vue 2, but a dependency hoisted Vue 3) | Pin a single Vue version: add `"resolutions": { "vue": "^2.7.16" }` (yarn/pnpm) or use npm `overrides`. Then `rm -rf node_modules && reinstall`. |
| `Cannot find module '@wbc-ui/core2/vite-plugin'` | npm couldn't resolve the subpath export | Confirm `@wbc-ui/core2` ≥ `1.0.0-r01` is installed (the vite-plugin subpath was added then). Run `npm ls @wbc-ui/core2`. |
| `peer dep missing: vuetify@^2` | Vuetify wasn't installed — it's a peer dep, not a hard one | `npm install vuetify@^2.7.2` (and any other peer deps the warning names). |
| Components render but unstyled | Vuetify CSS isn't loaded | Import once in `main.js`: `import 'vuetify/dist/vuetify.min.css';` |
| `Multiple instances of Vue detected` warning | The bundler resolved Vue from two locations | In Vite: add an alias in `vite.config.js` mapping `vue` to a single absolute path. The `wbcVitePlugin()` does this automatically for the default setup. |

For a longer walkthrough with worked examples, see the documentation hub at [flow.wbc-ui.com](https://flow.wbc-ui.com) *(content is being migrated to match the new `@wbc-ui` scope; some pages may still show the legacy `wbc-ui2` name during the transition)*.

---

## ⚡ The Engine Under the Hood

<p align="center">
  <img src="docs/media/engine-flow.svg" alt="@wbc-ui/core2 rendering engine flow" width="780"/>
</p>

<details>
<summary>Mermaid diagram (interactive fallback)</summary>
<div align="center">

```mermaid
flowchart TD
    Data("Input<br>(JSON / Array / String)") --> WBC["&lt;WBC :item='data' /&gt;"]
    WBC --> Detect{"Detect Type"}

    Detect -- "Str" --> RS[renderString]
    Detect -- "Obj" --> RO[renderObject]
    Detect -- "Arr" --> RA[renderArray]
    Detect -- "File" --> RF[renderFile]
    Detect -- "Fn"  --> RFn[renderFunction]

    RS & RO & RA & RF & RFn --> Chain

    subgraph Chain["Decorator Chain"]
        direction LR
        A[Focus] --> B[RTL] --> C[Select] --> D[wbCode] --> E[Flattener]
    end

    Chain --> VNodes["Reactive VNodes"]
    VNodes --> DOM(("DOM"))
```

</div>
</details>

- **6 renderers** dispatch based on JavaScript type
- **Pipe `|` syntax** for inline styling: `"Hello|text-h4 primary--text|/docs|html"`
- **`dive: true`** activates reactive mode — every property becomes a function of `(ctx)` state
- **Post-processing decorators** apply focus mode, RTL, selection overlays, and code rendering

---

## 💎 Free vs Pro

<p align="center">
  <img src="docs/media/tier-badges.svg" alt="Free vs Pro" width="480"/>
</p>

> *"Free users can **bind** states. Pro users can **command** them."*
> *"3 hooks for builders, 7 hooks for architects."*

**Open core.** The renderer (everything you see) is free. The orchestrator + extractor (everything that makes it programmable at scale) is Pro.

| Capability bucket | Free | Pro |
|---|---|---|
| Core rendering (6 renderers, pipe `\|`, `dive: true`) | ✅ Full | ✅ Full |
| Lifecycle hooks | 3 (init0 · init · updater) | **7** (+ setup · tracker · logic · `output`) |
| `that` API surface | `data`, `update`, `emit`, `toggle*` (binary) | **+ `vm`, `data0`, `val`, `get/set`, `ref`, `el`, `watch`** + precision toggles |
| Framework access | — | `store`, `router`, `routes`, `routeParams` |
| Services | dayjs (±14d), basic storage / cookies | **Full dayjs, AES-256, `markdown` bi-directional, `queryData`, `trigger()`** |
| Headless extraction (HTML · MD · VNodes) | — | ✅ |
| **Max depth per item** | 10 | ∞ |
| **Max items per collection** | 10 | ∞ |

<details>
<summary><strong>Full Pro surface — click to expand</strong></summary>

#### Identity & Data
| Property | Free | Pro |
|---|:-:|:-:|
| `userTier` · `nameEl` · `props` · `data` | ✅ | ✅ |
| `license` · `data0` · `vm` | ❌ | ✅ |

#### State Management
| Method | Free | Pro |
|---|:-:|:-:|
| `update(v)` · `emit(ev,val)` | ✅ | ✅ |
| `get(key)` · `set(val,key)` · `val(v)` | ❌ | ✅ |

#### Tiered Toggles *(binary in Free, precision in Pro)*
| Toggle | Free | Pro |
|---|:-:|:-:|
| `toggleLoad` · `toggleProtected` · `toggleFloat` · `toggleClose` · `toggleDrag` · `toggleHide` | 🔄 | 🎯 |

#### Framework Access
| Property | Free | Pro |
|---|:-:|:-:|
| `root` · `store` · `router` · `routes` · `routeParams` · `ref(name)` · `el` · `watch(p,cb)` | ❌ | ✅ |

#### Logic & Services
| Property | Free | Pro |
|---|:-:|:-:|
| `dayjs` | ±14d | Full |
| `storage` · `cookies` | Basic | Full |
| `markdown` · `aes` · `queryData` · `trigger(method)` | ❌ | ✅ |

#### Logic Injection Hooks
| Hook | Free | Pro |
|---|:-:|:-:|
| `init0` · `init` · `updater` | ✅ | ✅ |
| `setup` · `tracker` · `logic` · `@wbc-logic` · **`output`** | ❌ | ✅ |

#### Utility Functions
| Type | Free | Pro |
|---|:-:|:-:|
| Daily helpers (`randomKey`, `capitalize`, `isDate`, `isEmpty`, …) | ✅ | ✅ |
| Time-savers (`mergeObjects`, `getObjectDepth`, `clone`) | ❌ | ✅ |
| Enterprise security (`aesEnc`, `aesDec` — physically stripped from free builds) | ❌ | ✅ |

</details>

👉 **[Compare in detail →](https://wbc-ui.com/free-vs-pro)** · **[Buy Pro →](https://wbc-ui.com/pricing)**

---

## 🌐 Ecosystem

`@wbc-ui/core2` is the foundation of the **@wbc-ui** monorepo. Every package below is published to npm and depends on `core2`:

| Package | What it adds | Status |
|---|---|---|
| [`@wbc-ui/code2`](https://www.npmjs.com/package/@wbc-ui/code2) | Monaco-powered code editor | 🟢 GA |
| [`@wbc-ui/chart2`](https://www.npmjs.com/package/@wbc-ui/chart2) | ECharts integration | 🟢 GA |
| [`@wbc-ui/dataviewer2`](https://www.npmjs.com/package/@wbc-ui/dataviewer2) | JSON / data-table explorer | 🟢 GA |
| [`@wbc-ui/latex2`](https://www.npmjs.com/package/@wbc-ui/latex2) | LaTeX math rendering | 🟢 GA |
| [`@wbc-ui/mermaid2`](https://www.npmjs.com/package/@wbc-ui/mermaid2) | Diagram-as-code rendering | 🟢 GA |
| [`@wbc-ui/gis2`](https://www.npmjs.com/package/@wbc-ui/gis2) | Leaflet map integration | 🟢 GA |
| [`@wbc-ui/alert2`](https://www.npmjs.com/package/@wbc-ui/alert2) | Notification / toast system | 🟢 GA |
| [`@wbc-ui/press2`](https://www.npmjs.com/package/@wbc-ui/press2) | Markdown-driven docs engine | 🟢 GA |

---

## 📄 License

MIT © [Wissem Boughamoura](https://github.com/wissemb11) · [wi-bg.com](https://www.wi-bg.com) · [wbc-ui.com](https://wbc-ui.com)
