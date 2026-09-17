"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[50533],{

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

/***/ 80681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2026_2027_students_st_025_index_md_216_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2026-2027-students-st-025-index-md-216.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2026_2027_students_st_025_index_md_216_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/students/ST025/index","title":"ST025","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2026-2027/students/ST025/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2026-2027/students/ST025","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/students/ST025/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/students/ST025/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-09-17T09:24:30.417160+00:00","fm_version_comment":"","guid":"e527906f-002d-4dd7-b4e0-de88796adac6","dao":"class_sthdf_dashboard","title":"ST025","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-09-17 11:24","modified":"2026-09-17 11:24","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"reflexia","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/students/ST024/reflexia/"},"next":{"title":"about me","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/students/ST025/about-me/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2026-2027/students/ST025/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-09-17T09:24:30.417160+00:00',
	fm_version_comment: '',
	guid: 'e527906f-002d-4dd7-b4e0-de88796adac6',
	dao: 'class_sthdf_dashboard',
	title: 'ST025',
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
	created: '2026-09-17 11:24',
	modified: '2026-09-17 11:24',
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
const contentTitle = 'ST025';

const assets = {

};



const toc = [{
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}, {
  "value": "Rýchly checklist",
  "id": "rýchly-checklist",
  "level": 2
}, {
  "value": "Ako odovzdávať (mini-návod)",
  "id": "ako-odovzdávať-mini-návod",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "st025",
        children: "ST025"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🧑‍🎓 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/students/ST025/about-me/",
          children: "About Me"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🧩 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/students/ST025/knowledge-contribution/",
          children: "Knowledge Contribution"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🧭 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/students/ST025/project-summary/",
          children: "Project Summary"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🏁 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/students/ST025/project-outcomes/",
          children: "Project Outcomes"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🎤 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/students/ST025/pitch-presentation/",
          children: "Pitch Presentation"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🎬 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/students/ST025/final-presentation/",
          children: "Final Presentation"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🪞 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/students/ST025/reflexia/",
          children: "Reflexia"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rýchly-checklist",
      children: "Rýchly checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "About Me vyplnené"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Knowledge Contribution (KNIFE) publikované / referencované"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Project Summary schválené vyučujúcim"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Project Outcomes doplnené o odkazy (repo, video, demo)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Pitch hotový (5–7 min)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Finálna prezentácia hotová (10–12 min)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Reflexia pridaná"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ako-odovzdávať-mini-návod",
      children: "Ako odovzdávať (mini-návod)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otvor príslušnú stránku vyššie a doplň obsah."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pridaj odkazy na repozitár, video a demo (ak máš)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ulož zmeny, commitni a pushni:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git add .\ngit commit -m \"Update deliverables\"\ngit push\n"
          })
        }), "\n"]
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