---
fm_version: "1.0.1"
fm_build: "2026-09-24T17:30:00.000000+00:00"
fm_version_comment: ""

id: "K000001_EN"
guid: "be12cff5-1145-4b9a-8a2f-c6c23de6e0f9"

dao: "knife"
title: "K000001 – Enterprise Architect licence on your own laptop"
description: "Step-by-step guide to registering an Enterprise Architect (EA Academic Edition) licence on your own laptop via the shared licence server in the FIIT STU classroom network."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: "KNIFE"
type: "tutorial"
priority: "medium"
tags: ["enterprise-architect", "licence", "tutorial", "onboarding", "beginner"]

locale: "en"

created: "2026-09-24 19:30"
modified: "2026-09-24 19:30"
status: "backlog"
privacy: "public"

rights_holder_content: "Roman Kazicka"
rights_holder_system: "CAA / KNIFE / LetItGrow"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2025 Roman Kazicka"

origin_repo: "class_sthdf_2026-2027"
origin_repo_url: ""
origin_commit: ""
origin_branch: "main"
origin_system: "CAA"
origin_author: "Roman Kazicka"
origin_imported_from: ""
origin_import_date: ""

fm_reserved1: ""
fm_reserved2: ""
---

# Enterprise Architect licence on your own laptop

> **KNIFE** – Knowledge In Friendly Examples
> **Series:** Systemic Thinking in IT & Digital Fabrication
> **Level:** Beginner
> **Tags:** `enterprise-architect` `licence` `tutorial` `onboarding` `beginner`

:::caution In Progress
This article is being actively worked on. Content may be incomplete or subject to change.
:::

## ⚡ Quick guide (Top)

1. **Timing:** the licence can only be installed during the **first three weeks of the semester**.
2. **Network:** be on **Eduroam**, otherwise connect via the STU VPN — the licence server sits in the classroom computer network.
3. **Install** Enterprise Architect (installation files are on the document server in AIS) and start it.
4. In the licence window click **Add Key** → tab **Get Shared Key** → Name `FIIT`, Company `STU Bratislava` → **Browse**.
5. Server address: `ea.ucebne.fiit.stuba.sk` → **OK**.
6. Select the product **EA Academic Edition** → **OK**.
7. Enter the **activation code** and accept the licence agreement.

## 🎯 What it solves (purpose, goal)

Enterprise Architect is licensed through a shared licence server in the
classroom network, so it does not work on your own laptop out of the box.
This guide walks through the one-time registration so that EA runs on
your own machine, not only on the classroom computers.

## 🧪 How to use it (application)

### Prerequisites

- The **first three weeks of the semester** — the licence can only be installed in this period.
- The Enterprise Architect installation files, located on the document server in AIS.
- A connection to the licence server, which is located in the classroom computer network. It can be reached from the **Eduroam** network; otherwise log in via **VPN** to the STU network (the guide also applies to Windows 10): https://www.stuba.sk/navody/vpn/w7_vpn.html

### Steps

**1. Add a key.** After installing Enterprise Architect and clicking the icon on the Desktop, a window for adding a licence appears when the software starts. Click **Add Key**.

![Licence Management window – Add Key button highlighted](./img/01-licence-management-add-key.png)

**2. Fill in the shared key details.** In the next window, on the **Get Shared Key** tab, fill in **Name** (`FIIT`) and **Company** (`STU Bratislava`). Click the **Browse** button.

![Add Registration Key window – Name, Company and Browse button highlighted](./img/02-add-registration-key-get-shared-key.png)

**3. Enter the licence server.** In the window that opens, enter the FQDN of the license server (`ea.ucebne.fiit.stuba.sk`) and click **OK**.

![Shared Keystore Selection window – Server Address and OK highlighted](./img/03-shared-keystore-selection.png)

**4. Select the product.** In the next window, select the product **EA Academic Edition** and click **OK**.

![Add Registration Key window – EA Academic Edition selected](./img/04-select-product.png)

**5. Check the licence period.** In the window that opens, the system displays the period for which the Enterprise Architect product has an available license. After it expires, the license must be renewed.

![Licence Management window – registered Shared Key, Close button highlighted](./img/05-licence-management-registered.png)

**6. Activate.** In the last window, you need to enter the activation code and confirm your acceptance of the license agreement.

![Version Activation Required window – activation code field and license agreement checkbox highlighted](./img/06-version-activation.png)

## 💡 Tips and notes

- **Can't reach the server?** The licence server is only reachable from the classroom network — check that you are on Eduroam or connected to the STU VPN.
- **Licence expired?** The licence has a limited period (step 5) and must be renewed after it expires.
- **Missed the first three weeks?** The licence can no longer be installed on your own laptop after that period.

## ✅ Value / Summary

One written-down procedure with a screenshot for every step, instead of
repeatedly explaining the same click-path to each student — and a clear
statement of the two things that most often go wrong: the time window
(first three weeks) and network access (Eduroam or VPN).

## Sources

Instructions for obtaining a licence for Enterprise Architect on your
own laptops (FIIT STU). A school-specific KNIFE kept in the class
repository, deliberately not in the canonical KNIFE repository.
