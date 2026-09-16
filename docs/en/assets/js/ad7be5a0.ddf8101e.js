"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[81970],{

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

/***/ 67769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_7_ds_01_7_ds_2026_2027_01_d_1_management_03_plans_roadmaps_daily_tasks_2026_05_31_github_setup_md_ad7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-7-ds-01-7-ds-2026-2027-01-d-1-management-03-plans-roadmaps-daily-tasks-2026-05-31-github-setup-md-ad7.json
const site_docs_sk_7_ds_01_7_ds_2026_2027_01_d_1_management_03_plans_roadmaps_daily_tasks_2026_05_31_github_setup_md_ad7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/7Ds/01-7ds_2026-2027/D1-Management/Plans-Roadmaps/DailyTasks/2026-05-31_github-setup","title":"2026-05-31 – GitHub setup pre nový semester","description":"Zakladanie GitHub infraštruktúry pre predmet STHDF 2026-2027: repo, issues, project board.","source":"@site/docs/sk/7Ds/01-7ds_2026-2027/01.D1-Management/03.Plans-Roadmaps/DailyTasks/2026-05-31_github-setup.md","sourceDirName":"sk/7Ds/01-7ds_2026-2027/01.D1-Management/03.Plans-Roadmaps/DailyTasks","slug":"/sk/7Ds/01-7ds_2026-2027/D1-Management/Plans-Roadmaps/DailyTasks/2026-05-31_github-setup","permalink":"/en/sk/7Ds/01-7ds_2026-2027/D1-Management/Plans-Roadmaps/DailyTasks/2026-05-31_github-setup","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"sthdf","permalink":"/en/tags/sthdf"},{"inline":true,"label":"github","permalink":"/en/tags/github"},{"inline":true,"label":"setup","permalink":"/en/tags/setup"},{"inline":true,"label":"2026-2027","permalink":"/en/tags/2026-2027"},{"inline":true,"label":"management","permalink":"/en/tags/management"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"","guid":"","dao":"7ds","title":"2026-05-31 – GitHub setup pre nový semester","description":"Zakladanie GitHub infraštruktúry pre predmet STHDF 2026-2027: repo, issues, project board.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"DailyTask","type":"session-log","priority":"high","tags":["sthdf","github","setup","2026-2027","management"],"locale":"sk","created":"2026-05-31 21:00","modified":"2026-05-31 21:50","status":"done","privacy":"private","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk.","copyright":"© 2026 Roman Kazicka","origin_repo":"06-STH-Projects/class_sthdf_2026-2027","origin_repo_url":"https://github.com/06-STH-Projects/class_sthdf_2026-2027","origin_system":"STHDF","origin_author":"Roman Kazicka","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"03.Plans Roadmaps","permalink":"/en/sk/7Ds/01-7ds_2026-2027/D1-Management/Plans-Roadmaps/"},"next":{"title":"04.Decisions","permalink":"/en/sk/7Ds/01-7ds_2026-2027/D1-Management/Decisions/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/7Ds/01-7ds_2026-2027/01.D1-Management/03.Plans-Roadmaps/DailyTasks/2026-05-31_github-setup.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '',
	guid: '',
	dao: '7ds',
	title: '2026-05-31 – GitHub setup pre nový semester',
	description: 'Zakladanie GitHub infraštruktúry pre predmet STHDF 2026-2027: repo, issues, project board.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'DailyTask',
	type: 'session-log',
	priority: 'high',
	tags: [
		'sthdf',
		'github',
		'setup',
		'2026-2027',
		'management'
	],
	locale: 'sk',
	created: '2026-05-31 21:00',
	modified: '2026-05-31 21:50',
	status: 'done',
	privacy: 'private',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk.',
	copyright: '© 2026 Roman Kazicka',
	origin_repo: '06-STH-Projects/class_sthdf_2026-2027',
	origin_repo_url: 'https://github.com/06-STH-Projects/class_sthdf_2026-2027',
	origin_system: 'STHDF',
	origin_author: 'Roman Kazicka',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = '2026-05-31 – GitHub setup pre nový semester';

const assets = {

};



const toc = [{
  "value": "Kontext",
  "id": "kontext",
  "level": 2
}, {
  "value": "Čo bolo urobené",
  "id": "čo-bolo-urobené",
  "level": 2
}, {
  "value": "GitHub repozitár",
  "id": "github-repozitár",
  "level": 3
}, {
  "value": "Labels &amp; Issues",
  "id": "labels--issues",
  "level": 3
}, {
  "value": "GitHub Project board",
  "id": "github-project-board",
  "level": 3
}, {
  "value": "Otvorené / nasledujúce kroky",
  "id": "otvorené--nasledujúce-kroky",
  "level": 2
}, {
  "value": "Poznámky k nástroje",
  "id": "poznámky-k-nástroje",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2026-05-31--github-setup-pre-nový-semester",
        children: "2026-05-31 – GitHub setup pre nový semester"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kontext",
      children: "Kontext"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Začiatok prípravy semestra pre predmet ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Systemové myslenie v IT & Digitálna fabrikácia (STHDF) 2026-2027"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plánovaný workflow počas roka:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LI Post"
        }), " – verejný príspevok na LinkedIn pre každú lekciu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE článok"
        }), " – dlhší sprievodný text v systéme KNIFE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Video"
        }), " – prehľadové úvodné video vytvorené v Active Presenter z obrázkov z KNIFE"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "čo-bolo-urobené",
      children: "Čo bolo urobené"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "github-repozitár",
      children: "GitHub repozitár"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Repo ", (0,jsx_runtime.jsx)(_components.code, {
          children: "06-STH-Projects/class_sthdf_2026-2027"
        }), " – private, existovalo, overené"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pushnutý issue template: ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/ISSUE_TEMPLATE/lecture.md"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Checklist: Osnova, LI Post draft, LI Post published, Video AP, Video MP4, KNIFE published"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sekcie: Linky, Poznámky"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "labels--issues",
      children: "Labels & Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vytvorený label ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lecture"
        }), " (#0052cc)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vytvorených 15 issues s labelom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lecture"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "#1 – Aj mňa nahradí AI? (K101)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "#2 – Prečo modelujeme (K102)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "#3 – SDLC, V-Model, Sparx (K103)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "#4 – SSOT, TSSOT (K106)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "#5 – Taxonómia, Ontológia (K107)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "#6 – KERNARO v praxi (K104)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "#7 – DCMM, Senge, manažment"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "#8–#15 – [placeholder] – doplniť počas roka"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "github-project-board",
      children: "GitHub Project board"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projekt: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "„Lekcie 2026-2027\""
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://github.com/orgs/06-STH-Projects/projects/1"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Stĺpce (Status field): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Backlog"
        }), " · ", (0,jsx_runtime.jsx)(_components.code, {
          children: "In Progress"
        }), " · ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Published"
        }), " · ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Done"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Všetky issues #1–#15 pridané do stĺpca ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Backlog"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "otvorené--nasledujúce-kroky",
      children: "Otvorené / nasledujúce kroky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Doplniť témy pre lekcie #8–#15"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Rozhodnúť o štruktúre KNIFE pre K101 (prvá lekcia)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Pripraviť prvý LI Post draft (#1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Nastaviť šablónu Active Presenter pre intro videá"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "poznámky-k-nástroje",
      children: "Poznámky k nástroje"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "gh auth"
        }), " potreboval rozšírenie o ", (0,jsx_runtime.jsx)(_components.code, {
          children: "project,read:project"
        }), " scope (manuálne cez ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gh auth refresh -h github.com -s project,read:project"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GitHub Projects v2 – stĺpce sú ", (0,jsx_runtime.jsx)(_components.code, {
          children: "singleSelectOptions"
        }), " na ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Status"
        }), " field, nie klasické board columns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/7Ds/01-7ds_2026-2027/D1-Management/Plans-Roadmaps/",
        children: "⬆️ Up"
      })]
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