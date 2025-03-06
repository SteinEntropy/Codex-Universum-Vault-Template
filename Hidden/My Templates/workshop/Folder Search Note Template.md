---
Links:
tags: "view/note"
---

> [!TASK] To Do's
>
> - [ ] Create a button to create the note
> - [ ] Create dataview queries to sort them (use the by date example as a reference)
> - [ ] Add the dynamic `Created` field as a property (can just copy the one from [[Note Template]] but I couldn't put it in here or else it would have been triggered)
> - [ ] Delete this task

## By Date

```dataview
TABLE Status, tags, Links
from #{{VALUE:Note Type Tag (ex. person)}} AND !"Hidden"
sort Created desc
```
