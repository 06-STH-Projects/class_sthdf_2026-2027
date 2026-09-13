---
fm_version: "1.0.1"
fm_build: ""

guid: ""

dao: "7ds"
title: "2026-05-31 – GitHub setup pre nový semester"
description: "Zakladanie GitHub infraštruktúry pre predmet STHDF 2026-2027: repo, issues, project board."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: "DailyTask"
type: "session-log"
priority: "high"
tags: ["sthdf", "github", "setup", "2026-2027", "management"]

locale: "sk"

created: "2026-05-31 21:00"
modified: "2026-05-31 21:50"
status: "done"
privacy: "private"

rights_holder_content: "Roman Kazicka"
rights_holder_system: "CAA / KNIFE / LetItGrow"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk."
copyright: "© 2026 Roman Kazicka"

origin_repo: "06-STH-Projects/class_sthdf_2026-2027"
origin_repo_url: "https://github.com/06-STH-Projects/class_sthdf_2026-2027"
origin_system: "STHDF"
origin_author: "Roman Kazicka"

fm_reserved1: ""
fm_reserved2: ""
---

# 2026-05-31 – GitHub setup pre nový semester

## Kontext

Začiatok prípravy semestra pre predmet **Systemové myslenie v IT & Digitálna fabrikácia (STHDF) 2026-2027**.

Plánovaný workflow počas roka:
- **LI Post** – verejný príspevok na LinkedIn pre každú lekciu
- **KNIFE článok** – dlhší sprievodný text v systéme KNIFE
- **Video** – prehľadové úvodné video vytvorené v Active Presenter z obrázkov z KNIFE

---

## Čo bolo urobené

### GitHub repozitár
- Repo `06-STH-Projects/class_sthdf_2026-2027` – private, existovalo, overené
- Pushnutý issue template: `.github/ISSUE_TEMPLATE/lecture.md`
  - Checklist: Osnova, LI Post draft, LI Post published, Video AP, Video MP4, KNIFE published
  - Sekcie: Linky, Poznámky

### Labels & Issues
- Vytvorený label `lecture` (#0052cc)
- Vytvorených 15 issues s labelom `lecture`:
  - #1 – Aj mňa nahradí AI? (K101)
  - #2 – Prečo modelujeme (K102)
  - #3 – SDLC, V-Model, Sparx (K103)
  - #4 – SSOT, TSSOT (K106)
  - #5 – Taxonómia, Ontológia (K107)
  - #6 – KERNARO v praxi (K104)
  - #7 – DCMM, Senge, manažment
  - #8–#15 – [placeholder] – doplniť počas roka

### GitHub Project board
- Projekt: **„Lekcie 2026-2027"** (`https://github.com/orgs/06-STH-Projects/projects/1`)
- Stĺpce (Status field): `Backlog` · `In Progress` · `Published` · `Done`
- Všetky issues #1–#15 pridané do stĺpca **Backlog**

---

## Otvorené / nasledujúce kroky

- [ ] Doplniť témy pre lekcie #8–#15
- [ ] Rozhodnúť o štruktúre KNIFE pre K101 (prvá lekcia)
- [ ] Pripraviť prvý LI Post draft (#1)
- [ ] Nastaviť šablónu Active Presenter pre intro videá

---

## Poznámky k nástroje

- `gh auth` potreboval rozšírenie o `project,read:project` scope (manuálne cez `gh auth refresh -h github.com -s project,read:project`)
- GitHub Projects v2 – stĺpce sú `singleSelectOptions` na `Status` field, nie klasické board columns

---

**Navigation:** [⬆️ Up](../index.md)
