---
Status: 
tags:
  - inputCollection
Links: 
Created: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
Author:
Finished:
Rating: 
Source:
---
## All Inputs
```dataview
table Status, Created
from [[]] and #inputCollection
where contains(Collection, [[]])
Sort Created desc
```
## By Status
### No Status
```dataview
table Created, Links, source
FROM  [[]] and #input AND !"Hidden"
where !Status AND contains(Collection, [[]])
SORT Created desc
```

### Not Started 🟥
```dataview
table Created, Links, source
FROM  [[]] and #input AND !"Hidden"
where contains(Collection, [[]]) AND contains(Status, "🟥")
SORT Created desc
```
### Consuming Media 🟧
```dataview
table Created, Links, source
FROM  [[]] and #input AND !"Hidden"
where contains(Collection, [[]]) AND contains(Status, "🟧")
SORT Created desc
```
### Implementation 🟨
```dataview
table Created, Links, source
FROM  [[]] and #input AND !"Hidden"
where contains(Collection, [[]])  AND contains(Status, "🟨")
SORT Created desc
```
### Finished 🟩
```dataview
table finished, rating, source
FROM  [[]] and #input AND !"Hidden"
where contains(Collection, [[]])  AND contains(Status, "🟩")
SORT Created desc
```
### Archived ⬛️
```dataview
table finished, rating, source
FROM  [[]] and #input AND !"Hidden"
where contains(Collection, [[]]) AND contains(Status, "⬛️")
SORT Created desc
```