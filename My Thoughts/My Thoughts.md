---
tags:
  - view/note
Links:
  - "[[My Home]]"
Created: 2025-03-05T19:29:00
---
## Categories
### None
```dataview
table Created, Links
from #thought AND !"Hidden"
where !contains(file.tags, "/")
sort file.ctime desc
```

### Memories 
`#thought/memories`
Anecdotes, stories and experiences
```dataview
table Created, tags, Links
from #thought/memories AND !"Hidden"
sort Created desc
```

### Reflections
`#thought/reflections`
Personal lessons and observations

```dataview
table Created, tags, Links
from #thought/reflections AND !"Hidden"
sort Created desc
```

### Musings
`#thought/musings`
Random shower ideas and observations

```dataview
table Created, tags, Links
from #thought/musings AND !"Hidden"
sort Created desc
```
## All
```dataview
table Created, tags, Links
from #thought AND !"Hidden"
sort Created desc
```
