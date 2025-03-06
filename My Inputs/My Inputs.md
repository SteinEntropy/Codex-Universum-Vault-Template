---
tags:
  - view/note
Links:
  - "[[My Home]]"
Created: 2025-03-05T19:26:43
---
Refer to [[My Inputs Workflow]]

```button
name QuickAdd: 📥 Add General Input
type command
action QuickAdd: 📥 Add General Input
```

## By Status
### No Status

```dataview
table Created, Links, Source
FROM  #input AND !"Hidden"
WHERE !Status
SORT Created desc
```

### Backlog 🟥

```dataview
table Created, Links, Source
FROM  #input AND !"Hidden"
WHERE contains(Status, "🟥")
SORT Created desc
```

### Note Taking 🟧

```dataview
table Created, Links, Source
FROM  #input AND !"Hidden"
WHERE contains(Status, "🟧")
SORT Created desc
```

### Processing 🟨

```dataview
table Created, Links, Source
FROM  #input AND !"Hidden"
WHERE contains(Status, "🟨")
SORT Created desc
```

### Finished 🟩

```dataview
table Created, Links, Source
FROM  #input AND !"Hidden"
WHERE contains(Status, "🟩")
SORT Created desc
```

### Archived ⬛️

```dataview
table Created, Links, Source
FROM  #input AND !"Hidden"
WHERE contains(Status, "⬛️")
SORT Created desc
```
