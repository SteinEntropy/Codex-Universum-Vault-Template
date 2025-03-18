---
tags:
  - view/note
Links:
  - "[[My Inputs]]"
Created: 2025-03-05T19:27:35
---

## By Status

### No Status

```dataview
table Created, Links, Source
FROM  #input/podcasts AND !"Hidden"
WHERE !Status OR contains(Status, "No Status")
sort Created desc
```

### Not Started 🟥

```dataview
table Created, Links, Source
FROM  #input/podcasts
WHERE contains(Status, "🟥")
sort Created desc
```

### Consuming Media 🟧

```dataview
table Created, Links, Source
FROM  #input/podcasts
WHERE contains(Status, "🟧")
sort Created desc
```

### Implementation 🟨

```dataview
table Created, Links, Source
FROM  #input/podcasts
WHERE contains(Status, "🟨")
sort Created desc
```

### Finished 🟩

```dataview
table Created, Links, Source
FROM  #input/podcasts
WHERE contains(Status, "🟩")
sort Created desc
```

### Archived ⬛️

```dataview
table Created, Links, Source
FROM  #input/podcasts
WHERE contains(Status, "🟩")
sort Created desc
```
