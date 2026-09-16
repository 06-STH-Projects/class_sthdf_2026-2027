"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[889],{

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 51085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2026_2027_index_md_8e0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2026-2027-index-md-8e0.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2026_2027_index_md_8e0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/class_sthdf_dashboard_2026-2027","title":"class_sthdf_dashboard_2026-2027 – Class STHDF Dashboard 2026-2027","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2026-2027/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2026-2027","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-09-16T09:33:55.688471+00:00","fm_version_comment":"","id":"class_sthdf_dashboard_2026-2027","guid":"6118b62c-965b-40ec-b081-19c0400219e4","dao":"class_sthdf_dashboard","title":"class_sthdf_dashboard_2026-2027 – Class STHDF Dashboard 2026-2027","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-09-16 11:33","modified":"2026-09-16 11:33","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"STHDF-Dashboard","permalink":"/sk/sthdf/"},"next":{"title":"class sthdf","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/class-sthdf/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2026-2027/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-09-16T09:33:55.688471+00:00',
	fm_version_comment: '',
	id: 'class_sthdf_dashboard_2026-2027',
	guid: '6118b62c-965b-40ec-b081-19c0400219e4',
	dao: 'class_sthdf_dashboard',
	title: 'class_sthdf_dashboard_2026-2027 – Class STHDF Dashboard 2026-2027',
	description: '{{DESCRIPTION}}',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2026-09-16 11:33',
	modified: '2026-09-16 11:33',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazicka',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "id: home-sk\ntitle: 🏠 Domov (SK)\ndescription: Vstupná stránka pre slovenskú verziu kurzu STHDF 2025–2026\nsidebar_position: 0",
  "id": "id-home-sktitle--domov-skdescription-vstupná-stránka-pre-slovenskú-verziu-kurzu-sthdf-20252026sidebar_position-0",
  "level": 2
}, {
  "value": "🔗 Rýchla navigácia",
  "id": "-rýchla-navigácia",
  "level": 2
}, {
  "value": "😄 Fun fact",
  "id": "-fun-fact",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "id-home-sktitle--domov-skdescription-vstupná-stránka-pre-slovenskú-verziu-kurzu-sthdf-20252026sidebar_position-0",
      children: "id: home-sk\ntitle: 🏠 Domov (SK)\ndescription: Vstupná stránka pre slovenskú verziu kurzu STHDF 2025–2026\nsidebar_position: 0"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "vitaj-v-sthdf-20252026-",
      children: "Vitaj v STHDF 2025–2026 🎓"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Toto je hlavná stránka pre slovenskú časť kurzu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Systémové myslenie v IT a digitálnej fabrikácii"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Áno, sme na GitHube — kde iní vidia len repozitáre, my budujeme celé 🏗️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "poznatkové mestá"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchla-navigácia",
      children: "🔗 Rýchla navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📘 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/class-sthdf/about/",
          children: "O predmete"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🧭 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/class-sthdf/conditions/",
          children: "Zadania & Míľniky"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👩‍🎓 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/students/",
          children: "Študenti"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🛠️ ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/",
          children: "Projekty"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✨ ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/class-sthdf/showcase/",
          children: "Showcase"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-fun-fact",
      children: "😄 Fun fact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["„3× meraj a raz pushni.“", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Každý commit je navždy — aj ten so zle pomenovaným súborom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final_final_really_final.md"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Pokračuj kliknutím na sekcie vyššie a objav obsah, ktorý spolu tvoríme."
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);