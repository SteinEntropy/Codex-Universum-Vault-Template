---
tags:
  - view/custom
Links:
  - "[[My Home]]"
Created: 2025-03-05T19:25:23
Description: All notes that still need to be processed
---
To keep track of all notes that are still in progress.

For notes in progress of being developed:
## Inputs
[[My Inputs]]
```dataview
table Created, rating, source
FROM  #input AND !"Hidden"
WHERE contains(Status, "🟧") OR contains(Status, "🟨")
SORT Created desc
```
## Meetings
[[My Meetings]]
```dataview
TABLE Attendees, Summary
FROM #meeting AND !"Hidden"
WHERE contains(Status, "🟨")
SORT Created DESC
```
## Evergreen Notes
[[My Greenhouse]]
```dataview
table Created
from !"Hidden"
where contains(Status, "🌱") OR contains(Status, "🌿") 
sort Created desc
```