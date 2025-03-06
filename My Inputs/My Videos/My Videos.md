---
tags:
  - view/note
Links:
  - "[[My Inputs]]"
Created: 2025-03-05T19:27:51
---

## By Status

### No Status

```dataview
table Created, Links, Source
FROM  #input/videos AND !"Hidden"
WHERE !Status OR contains(Status, "No Status")
sort Created desc
```

### Not Started 🟥

```dataview
table Created, Links, Source
FROM  #input/videos
WHERE contains(Status, "🟥")
sort Created desc
```

### Consuming Media 🟧

```dataview
table Created, Links, Source
FROM  #input/videos
WHERE contains(Status, "🟧")
sort Created desc
```

### Implementation 🟨

```dataview
table Created, Links, Source
FROM  #input/videos
WHERE contains(Status, "🟨")
sort Created desc
```

### Finished 🟩

```dataview
table Created, Links, Source
FROM  #input/videos
WHERE contains(Status, "🟩")
sort Created desc
```

### Archived ⬛️

```dataview
table Created, Links, Source
FROM  #input/videos
WHERE contains(Status, "🟩")
sort Created desc
```
