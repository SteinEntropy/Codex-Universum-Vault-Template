---
Status: 
tags:
  - note/view
Links:
  - "[[My Home]]"
---

*Archiving is a bit complicated with links, so at the moment it's only set to notes that are in the actual folder*

*To archive a note, give it the `#archive` tag*
## Query
```dataview
table Created
from "Hidden/My Archives" OR #archive
sort file.mtime desc
```

