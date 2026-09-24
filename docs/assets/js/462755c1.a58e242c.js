"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[18294],{

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

/***/ 32830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000001_ea_licence_for_own_laptops_index_md_462_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000001-ea-licence-for-own-laptops-index-md-462.json
const site_docs_en_knifes_k_000001_ea_licence_for_own_laptops_index_md_462_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000001-EA-licence-for-own-laptops/K000001_EN","title":"K000001 – Enterprise Architect licence on your own laptop","description":"Step-by-step guide to registering an Enterprise Architect (EA Academic Edition) licence on your own laptop via the shared licence server in the FIIT STU classroom network.","source":"@site/docs/en/knifes/K000001-EA-licence-for-own-laptops/index.md","sourceDirName":"en/knifes/K000001-EA-licence-for-own-laptops","slug":"/en/knifes/K000001-EA-licence-for-own-laptops/","permalink":"/en/knifes/K000001-EA-licence-for-own-laptops/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"enterprise-architect","permalink":"/tags/enterprise-architect"},{"inline":true,"label":"licence","permalink":"/tags/licence"},{"inline":true,"label":"tutorial","permalink":"/tags/tutorial"},{"inline":true,"label":"onboarding","permalink":"/tags/onboarding"},{"inline":true,"label":"beginner","permalink":"/tags/beginner"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-09-24T17:30:00.000000+00:00","fm_version_comment":"","id":"K000001_EN","guid":"be12cff5-1145-4b9a-8a2f-c6c23de6e0f9","dao":"knife","title":"K000001 – Enterprise Architect licence on your own laptop","description":"Step-by-step guide to registering an Enterprise Architect (EA Academic Edition) licence on your own laptop via the shared licence server in the FIIT STU classroom network.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"tutorial","priority":"medium","tags":["enterprise-architect","licence","tutorial","onboarding","beginner"],"locale":"en","created":"2026-09-24 19:30","modified":"2026-09-24 19:30","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"class_sthdf_2026-2027","origin_repo_url":"","origin_commit":"","origin_branch":"main","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"Q12 (SK)","permalink":"/sk/q12/"},"next":{"title":"KNIFE – Overview (EN)","permalink":"/en/knifes/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000001-EA-licence-for-own-laptops/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-09-24T17:30:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000001_EN',
	guid: 'be12cff5-1145-4b9a-8a2f-c6c23de6e0f9',
	dao: 'knife',
	title: 'K000001 – Enterprise Architect licence on your own laptop',
	description: 'Step-by-step guide to registering an Enterprise Architect (EA Academic Edition) licence on your own laptop via the shared licence server in the FIIT STU classroom network.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'KNIFE',
	type: 'tutorial',
	priority: 'medium',
	tags: [
		'enterprise-architect',
		'licence',
		'tutorial',
		'onboarding',
		'beginner'
	],
	locale: 'en',
	created: '2026-09-24 19:30',
	modified: '2026-09-24 19:30',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazicka',
	origin_repo: 'class_sthdf_2026-2027',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: 'main',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'Enterprise Architect licence on your own laptop';

const assets = {

};



const toc = [{
  "value": "⚡ Quick guide (Top)",
  "id": "-quick-guide-top",
  "level": 2
}, {
  "value": "🎯 What it solves (purpose, goal)",
  "id": "-what-it-solves-purpose-goal",
  "level": 2
}, {
  "value": "🧪 How to use it (application)",
  "id": "-how-to-use-it-application",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 3
}, {
  "value": "Steps",
  "id": "steps",
  "level": 3
}, {
  "value": "💡 Tips and notes",
  "id": "-tips-and-notes",
  "level": 2
}, {
  "value": "✅ Value / Summary",
  "id": "-value--summary",
  "level": 2
}, {
  "value": "Sources",
  "id": "sources",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "enterprise-architect-licence-on-your-own-laptop",
        children: "Enterprise Architect licence on your own laptop"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE"
        }), " – Knowledge In Friendly Examples\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Series:"
        }), " Systemic Thinking in IT & Digital Fabrication\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Level:"
        }), " Beginner\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tags:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enterprise-architect"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "licence"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tutorial"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onboarding"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "beginner"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "In Progress",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This article is being actively worked on. Content may be incomplete or subject to change."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-quick-guide-top",
      children: "⚡ Quick guide (Top)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timing:"
        }), " the licence can only be installed during the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "first three weeks of the semester"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network:"
        }), " be on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Eduroam"
        }), ", otherwise connect via the STU VPN — the licence server sits in the classroom computer network."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Install"
        }), " Enterprise Architect (installation files are on the document server in AIS) and start it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In the licence window click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add Key"
        }), " → tab ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Get Shared Key"
        }), " → Name ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FIIT"
        }), ", Company ", (0,jsx_runtime.jsx)(_components.code, {
          children: "STU Bratislava"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Browse"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server address: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ea.ucebne.fiit.stuba.sk"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OK"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select the product ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "EA Academic Edition"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OK"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enter the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "activation code"
        }), " and accept the licence agreement."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-what-it-solves-purpose-goal",
      children: "🎯 What it solves (purpose, goal)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enterprise Architect is licensed through a shared licence server in the\nclassroom network, so it does not work on your own laptop out of the box.\nThis guide walks through the one-time registration so that EA runs on\nyour own machine, not only on the classroom computers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-to-use-it-application",
      children: "🧪 How to use it (application)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "first three weeks of the semester"
        }), " — the licence can only be installed in this period."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Enterprise Architect installation files, located on the document server in AIS."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A connection to the licence server, which is located in the classroom computer network. It can be reached from the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Eduroam"
        }), " network; otherwise log in via ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "VPN"
        }), " to the STU network (the guide also applies to Windows 10): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.stuba.sk/navody/vpn/w7_vpn.html",
          children: "https://www.stuba.sk/navody/vpn/w7_vpn.html"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Add a key."
      }), " After installing Enterprise Architect and clicking the icon on the Desktop, a window for adding a licence appears when the software starts. Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Key"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Licence Management window – Add Key button highlighted",
        src: (__webpack_require__(96248)/* ["default"] */ .A) + "",
        width: "646",
        height: "351"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Fill in the shared key details."
      }), " In the next window, on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Get Shared Key"
      }), " tab, fill in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "FIIT"
      }), ") and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Company"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "STU Bratislava"
      }), "). Click the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Browse"
      }), " button."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Add Registration Key window – Name, Company and Browse button highlighted",
        src: (__webpack_require__(63548)/* ["default"] */ .A) + "",
        width: "642",
        height: "304"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Enter the licence server."
      }), " In the window that opens, enter the FQDN of the license server (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ea.ucebne.fiit.stuba.sk"
      }), ") and click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Shared Keystore Selection window – Server Address and OK highlighted",
        src: (__webpack_require__(77792)/* ["default"] */ .A) + "",
        width: "653",
        height: "470"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Select the product."
      }), " In the next window, select the product ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "EA Academic Edition"
      }), " and click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Add Registration Key window – EA Academic Edition selected",
        src: (__webpack_require__(86238)/* ["default"] */ .A) + "",
        width: "645",
        height: "306"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Check the licence period."
      }), " In the window that opens, the system displays the period for which the Enterprise Architect product has an available license. After it expires, the license must be renewed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Licence Management window – registered Shared Key, Close button highlighted",
        src: (__webpack_require__(88655)/* ["default"] */ .A) + "",
        width: "650",
        height: "363"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Activate."
      }), " In the last window, you need to enter the activation code and confirm your acceptance of the license agreement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Version Activation Required window – activation code field and license agreement checkbox highlighted",
        src: (__webpack_require__(72651)/* ["default"] */ .A) + "",
        width: "771",
        height: "587"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tips-and-notes",
      children: "💡 Tips and notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Can't reach the server?"
        }), " The licence server is only reachable from the classroom network — check that you are on Eduroam or connected to the STU VPN."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Licence expired?"
        }), " The licence has a limited period (step 5) and must be renewed after it expires."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missed the first three weeks?"
        }), " The licence can no longer be installed on your own laptop after that period."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-value--summary",
      children: "✅ Value / Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One written-down procedure with a screenshot for every step, instead of\nrepeatedly explaining the same click-path to each student — and a clear\nstatement of the two things that most often go wrong: the time window\n(first three weeks) and network access (Eduroam or VPN)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sources",
      children: "Sources"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instructions for obtaining a licence for Enterprise Architect on your\nown laptops (FIIT STU). A school-specific KNIFE kept in the class\nrepository, deliberately not in the canonical KNIFE repository."
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



/***/ }),

/***/ 63548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-add-registration-key-get-shared-key-6f784ad8caac2a16232ae461ed216705.png");

/***/ }),

/***/ 72651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/06-version-activation-8c95ee8a6c546f77bc460851fd8ae232.png");

/***/ }),

/***/ 77792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-shared-keystore-selection-2404b553d74dd6eec0d1660b327a1f9b.png");

/***/ }),

/***/ 86238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-select-product-b3a32a7d8b10ab8cc2f1678ab5a905bd.png");

/***/ }),

/***/ 88655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-licence-management-registered-01d26f4bc426a0a6a74fbd17e2419157.png");

/***/ }),

/***/ 96248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01-licence-management-add-key-8c9cfc1deb9038c04cb03f67a919bf1f.png");

/***/ })

}]);