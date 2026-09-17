"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[26520],{

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

/***/ 93718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2026_2027_projects_index_md_521_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2026-2027-projects-index-md-521.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2026_2027_projects_index_md_521_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/index","title":"projects","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2026-2027/projects/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2026-2027/projects","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-09-17T09:24:30.760453+00:00","fm_version_comment":"","guid":"30b1c560-1d39-42b8-a07e-854cde5267c1","dao":"class_sthdf_dashboard","title":"projects","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-09-17 11:24","modified":"2026-09-17 11:24","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"showcase","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/class-sthdf/showcase/"},"next":{"title":"PRJ001","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ001/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2026-2027/projects/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-09-17T09:24:30.760453+00:00',
	fm_version_comment: '',
	guid: '30b1c560-1d39-42b8-a07e-854cde5267c1',
	dao: 'class_sthdf_dashboard',
	title: 'projects',
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
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ001/",
        children: "PRJ001"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ002/",
        children: "PRJ002"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ003/",
        children: "PRJ003"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ004/",
        children: "PRJ004"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ005/",
        children: "PRJ005"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ006/",
        children: "PRJ006"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ007/",
        children: "PRJ007"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ008/",
        children: "PRJ008"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ009/",
        children: "PRJ009"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ010/",
        children: "PRJ010"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ011/",
        children: "PRJ011"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ012/",
        children: "PRJ012"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ013/",
        children: "PRJ013"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ014/",
        children: "PRJ014"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ015/",
        children: "PRJ015"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ016/",
        children: "PRJ016"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ017/",
        children: "PRJ017"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ018/",
        children: "PRJ018"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ019/",
        children: "PRJ019"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ020/",
        children: "PRJ020"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ021/",
        children: "PRJ021"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ022/",
        children: "PRJ022"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ023/",
        children: "PRJ023"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ024/",
        children: "PRJ024"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ025/",
        children: "PRJ025"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ026/",
        children: "PRJ026"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ027/",
        children: "PRJ027"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ028/",
        children: "PRJ028"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ029/",
        children: "PRJ029"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ030/",
        children: "PRJ030"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ031/",
        children: "PRJ031"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ032/",
        children: "PRJ032"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ033/",
        children: "PRJ033"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ034/",
        children: "PRJ034"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ035/",
        children: "PRJ035"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ036/",
        children: "PRJ036"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ037/",
        children: "PRJ037"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ038/",
        children: "PRJ038"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ039/",
        children: "PRJ039"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2026-2027/projects/PRJ040/",
        children: "PRJ040"
      })
    }), "\n"]
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