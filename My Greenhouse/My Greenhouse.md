---
tags:
  - view/note
Links:
  - "[[My Home]]"
Created: 2025-03-05T19:23:00
aliases:
  - My Evergreen Notes
---
The home of my [[Evergreen Notes]]
## Seedlings 🌱
*Notes ready for nurturing*
```dataview
table date(today) - date(file.cday) as "Days Alive"
from !"Hidden"
where contains(file.tags, "note/🌱") or contains(Status, "🌱")
sort Created desc
```

## Sprouts 🌿
*Notes in progress*
```dataview
table date(today) - date(file.cday) as "Days Alive"
from !"Hidden"
where contains(file.tags, "note/🌿") or contains(Status, "🌿")
sort file.mtime desc
```
## Trees 🌲
*Notes ready to be part of the forest*
```dataview
table date(today) - date(file.cday) as "Days Alive"
from !"Hidden"
where contains(file.tags, "note/🌲") or contains(Status, "🌲")
sort file.mtime desc
```
