---
tags:
  - view/note
Links:
  - "[[My Home]]"
  - "[[My Projects]]"
Created: 2025-03-05T19:37:07
---

See [[Kanban Plugin]] for how to use!

```button
name Create Kanban
type command
action QuickAdd: 📌 Create Kanban
```

## All

```dataview
table file.mtime as "Last Modified"
from !"Hidden"
where kanban-plugin = "basic"
sort file.mtime desc
```
