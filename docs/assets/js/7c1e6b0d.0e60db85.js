"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[14423],{

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

/***/ 92255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_sthdf_ea_model_index_md_7c1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-sthdf-ea-model-index-md-7c1.json
const site_docs_en_sthdf_ea_model_index_md_7c1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/sthdf/ea-model/sthdf_ea_model_2026_EN","title":"EA model – how we work","description":"How STHDF 2026-2027 students work with the shared Enterprise Architect parent model using Git and LemonTree.","source":"@site/docs/en/sthdf/ea-model/index.md","sourceDirName":"en/sthdf/ea-model","slug":"/en/sthdf/ea-model/","permalink":"/en/sthdf/ea-model/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"sthdf","permalink":"/tags/sthdf"},{"inline":true,"label":"ea","permalink":"/tags/ea"},{"inline":true,"label":"lemontree","permalink":"/tags/lemontree"},{"inline":true,"label":"git","permalink":"/tags/git"}],"version":"current","sidebarPosition":10,"frontMatter":{"id":"sthdf_ea_model_2026_EN","guid":"bb8425dc-bff1-44d0-a6f9-bb317d14b32e","title":"EA model – how we work","description":"How STHDF 2026-2027 students work with the shared Enterprise Architect parent model using Git and LemonTree.","sidebar_label":"EA model – how we work","sidebar_position":10,"tags":["sthdf","ea","lemontree","git"],"locale":"en","status":"inprogress","privacy":"public","author":"Roman Kazicka","created":"2026-10-12","modified":"2026-10-12","license":"CC-BY-NC-SA-4.0"},"sidebar":"tutorialSidebar","previous":{"title":"🗂 KNIFE Overview – List","permalink":"/en/knifes/knifes_overview/KNIFE_OVERVIEW_LIST"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/sthdf/ea-model/index.md


const frontMatter = {
	id: 'sthdf_ea_model_2026_EN',
	guid: 'bb8425dc-bff1-44d0-a6f9-bb317d14b32e',
	title: 'EA model – how we work',
	description: 'How STHDF 2026-2027 students work with the shared Enterprise Architect parent model using Git and LemonTree.',
	sidebar_label: 'EA model – how we work',
	sidebar_position: 10,
	tags: [
		'sthdf',
		'ea',
		'lemontree',
		'git'
	],
	locale: 'en',
	status: 'inprogress',
	privacy: 'public',
	author: 'Roman Kazicka',
	created: '2026-10-12',
	modified: '2026-10-12',
	license: 'CC-BY-NC-SA-4.0'
};
const contentTitle = 'EA model – how we work (STHDF 2026-2027)';

const assets = {

};



const toc = [{
  "value": "The idea",
  "id": "the-idea",
  "level": 2
}, {
  "value": "Where things are",
  "id": "where-things-are",
  "level": 2
}, {
  "value": "Our rules",
  "id": "our-rules",
  "level": 2
}, {
  "value": "Quick start",
  "id": "quick-start",
  "level": 2
}, {
  "value": "Assignment and dates",
  "id": "assignment-and-dates",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ea-model--how-we-work-sthdf-2026-2027",
        children: "EA model – how we work (STHDF 2026-2027)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["🚧 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Draft — working on content."
        }), " Steps are confirmed after the lecture; dates and the assignment will be announced by the lecturer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This page is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "specific to our class"
      }), ". The general, reusable how-to is the KNIFE article\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000002-git-workflow-for-ea-models/",
        children: "K000002 – Git workflow for EA models"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-idea",
      children: "The idea"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A minimal ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "parent model"
      }), " lives in one repository. Every student works on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "their own branch"
      }), ",\nchanges ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "their own package"
      }), ", and brings it back by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pull Request"
      }), " and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "three-way merge in LemonTree"
      }), ".\nThe goal is to experience a real merge, not to model the whole faculty."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n  P[\"PARENT model<br/>(main)\"] --> A[\"ST0XX-a<br/>(your branch)\"]\n  P --> B[\"ST0XX-b<br/>(another student)\"]\n  A -->|\"PR + LemonTree merge\"| P\n  B -->|\"PR + LemonTree merge\"| P"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "where-things-are",
      children: "Where things are"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "What"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Where"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parent model repository"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/06-STH-Projects/ea_model_sthdf_2026-2027",
              children: "06-STH-Projects/ea_model_sthdf_2026-2027"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "model/sthdf_parent.qea"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EA licence on your laptop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000001-EA-licence-for-own-laptops/",
              children: "K000001 – Enterprise Architect licence on your own laptop"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "our-rules",
      children: "Our rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One package, one owner"
        }), " — name your package with your ID (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ST0XX"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Always ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git pull"
          }), " first."]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branch name:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ST0XX-package-name"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Save the model and close EA before committing"
        }), " — the ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".qea"
        }), " file must be released."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Never merge a ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".qea"
          }), " in the GitHub UI."]
        }), " Conflicts are resolved locally in LemonTree: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "parent"
        }), " (common ancestor), ", (0,jsx_runtime.jsx)(_components.em, {
          children: "ours"
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: "theirs"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Small changes, frequent commits."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-start",
      children: "Quick start"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone https://github.com/06-STH-Projects/ea_model_sthdf_2026-2027.git ea-model\ncd ea-model\ngit switch -c ST0XX-package-name\n# open model/sthdf_parent.qea in EA, change your package, save and CLOSE EA\ngit add model/sthdf_parent.qea\ngit commit -m \"ST0XX: what changed\"\ngit push -u origin ST0XX-package-name\n# then open a Pull Request on GitHub\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "assignment-and-dates",
      children: "Assignment and dates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "To be announced by the lecturer."
      })
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