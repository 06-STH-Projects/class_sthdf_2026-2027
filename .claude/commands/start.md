---
description: Load session context and summarize current state of STHDF 2026-2027
---

1. Read the most recent file in `content/docs/sk/7Ds/01-7ds_2026-2027/01.D1-Management/03.Plans-Roadmaps/DailyTasks/` (highest date in filename)
2. Run: `gh issue list --repo 06-STH-Projects/class_sthdf_2026-2027 --label lecture --state open --limit 20`
3. Run: `gh project item-list 1 --owner 06-STH-Projects --format json` to see current board state

Then report:
- **Posledná session:** dátum + čo bolo urobené (3 bullets)
- **Aktuálny stav issues:** koľko v Backlog / In Progress / Published / Done
- **Nasledujúci krok:** issue # + čo treba urobiť
- **Blocker (ak existuje)**

Do not modify any files. Just report.
