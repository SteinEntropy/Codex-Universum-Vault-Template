---
tags:
  - view/note
Links:
  - "[[My Home]]"
Created: 2025-03-05T19:23:00
---

```button
name QuickAdd: 🗺️ Create MOC Note
type command
action QuickAdd: 🗺️ Create MOC Note
```

## Manually Organized
%% Type them out here for your own hierarchical directory %%

## By Last Modified

```dataview
table file.mday
from #moc and !outgoing([[]]) and !"Hidden"
sort file.mday desc
limit 10
```

## By Alphabetical

```dataview
list
from #moc and !outgoing([[]]) and !"Hidden"
sort file.name asc
```

## By Amount of Links

```dataview
TABLE length(file.outlinks) + length(file.inlinks) as "Total Links", length(file.outlinks) as Outgoing, length(file.inlinks) as Backlinks FROM #moc AND !"Hidden" SORT length(file.outlinks) + length(file.inlinks) desc
```
