---
tags:
  - view/note
Links:
  - "[[My Home]]"
Created: 2025-03-05T19:21:52
cssclasses:
  - cards
  - cards-cols-3
---

```button
name QuickAdd: 🚧 Create Project Note
type command
action QuickAdd: 🚧 Create Project Note
```

## By Status
### No Status
```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details", Deadline, Goal, Area
FROM #project AND !"Hidden"
WHERE !Status
SORT Deadline asc
```
### Elaboration 🟥
```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details", Deadline, Goal, Area
FROM #project AND !"Hidden"
WHERE contains(Status, "🟥")
SORT Deadline asc
```
### Upcoming 🟧
```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details", Deadline, Goal, Area
FROM #project AND !"Hidden"
WHERE contains(Status, "🟧")
SORT Deadline asc
```
### Active 🟨
```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details", Deadline, Goal, Area
FROM #project AND !"Hidden"
WHERE contains(Status, "🟨")
SORT Deadline asc
```
### Finished 🟩
```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details", Deadline, Goal, Area
FROM #project AND !"Hidden"
WHERE contains(Status, "🟩")
SORT Deadline asc
```
### Archived ⬛
```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details", Deadline, Goal, Area
FROM #project AND !"Hidden"
WHERE contains(Status, "⬛️")
SORT file.name asc
```
