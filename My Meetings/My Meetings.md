---
tags:
  - view/note
Links:
  - "[[My Home]]"
Created: 2025-03-05T19:29:14
---

```button
name QuickAdd: 🗣 Create Meeting Note
type command
action QuickAdd: 🗣 Create Meeting Note
```

## By Status

### Not Started 🟥
```dataview
TABLE Attendees, Summary
FROM #meeting AND !"Hidden"
WHERE contains(Status, "🟥")
SORT Created DESC
```

### Processing 🟨
```dataview
TABLE Attendees, Summary
FROM #meeting AND !"Hidden"
WHERE contains(Status, "🟨")
SORT Created DESC
```

### Completed 🟩

```dataview
TABLE Attendees, Summary
FROM #meeting AND !"Hidden"
WHERE contains(Status, "🟩")
SORT Created DESC
```

### Archived ⬛️
```dataview
TABLE Attendees, Summary
FROM #meeting AND !"Hidden"
WHERE contains(Status, "⬛️")
SORT Created DESC
```
## By Date

```dataview
TABLE MeetingDate, Attendees, Summary
from #meeting AND !"Hidden"
sort MeetingDate desc
```
