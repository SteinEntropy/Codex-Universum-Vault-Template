---
tags:
  - view/note
Links:
  - "[[My Home]]"
Created: 2025-03-05T19:36:26
cssclasses:
  - cards
  - cards-cols-3
---

## By Status

### Backlog 🟥

```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details", Area
FROM #goal AND !"Hidden"
WHERE contains(Status, "🟥")
sort file.mtime desc
```

### Active 🟨

```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details", Timeframe, Area
FROM #goal AND !"Hidden"
WHERE contains(Status, "🟨")
sort file.mtime desc
```

### Finished 🟩

```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details", Area
FROM #goal AND !"Hidden"
WHERE contains(Status, "🟩")
sort file.mtime desc
```

### Archived ⬛️

```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details", Area
FROM #goal AND !"Hidden"
WHERE contains(Status, "⬛️")
sort Created desc
```

### No Status

```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details", Area
FROM #goal AND !"Hidden"
WHERE !Status
sort Created desc
```

## By Timeframe

### Yearly

```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details", Area
from #goal AND !"Hidden"
where file.frontmatter.Timeframe AND !icontains(file.frontmatter.Timeframe, "Q") AND !icontains(file.frontmatter.Timeframe, "M")
sort Created desc
```

### Quarterly

```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details", Area
from #goal AND !"Hidden"
where icontains(file.frontmatter.Timeframe, "Q")
sort Created desc
```

### Monthly

```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details", Area
from #goal AND !"Hidden"
where icontains(file.frontmatter.Timeframe, "M")
sort Created desc
```
