---
tags:
  - view/note
Links:
  - "[[My Home]]"
Created: 2025-03-05T19:28:00
---

```button
name QuickAdd: 🗄️ Create Input Collection Note
type command
action QuickAdd: 🗄️ Create Input Collection Note
```

## By Type

_Turn into their own notes when they get bigger_

### None

```dataview
TABLE Status, tags, Links
from #inputCollection AND !"Hidden"
where !contains(file.tags, "/")
sort Created desc
```

### Courses
`#inputCollection/course`
```dataview
TABLE Status, tags, Links
from #inputCollection/course AND !"Hidden"
sort Created desc
```

### Series
`#inputCollection/series`
```dataview
TABLE Status, tags, Links
from #inputCollection/series AND !"Hidden"
sort Created desc
```

### Podcasts
`#inputCollection/podcast`
```dataview
TABLE Status, tags, Links
from #inputCollection/podcast AND !"Hidden"
sort Created desc
```

## By Date

```dataview
TABLE Status, tags, Links
from #inputCollection AND !"Hidden"
sort Created desc
```
