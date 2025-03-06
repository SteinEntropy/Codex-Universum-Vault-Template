---
tags:
  - view/note
Links:
  - "[[My Home]]"
Created: 2025-03-05T19:22:00
---

```button
name QuickAdd: ⛰️ Create Area Note
type command
action QuickAdd: ⛰️ Create Area Note
```

## Manually Organized
%% Type them out here for your own hierarchical directory %%

## By File Name

```dataview
table file.frontmatter.Group as Group
FROM #area and !outgoing([[]]) and !"Hidden"
sort file.frontmatter.Group, file.name asc
```
