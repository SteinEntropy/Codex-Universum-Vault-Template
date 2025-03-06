---
tags:
  - view/note
Links:
  - "[[My Home]]"
Created: 2025-03-05T19:21:00
---
To manually organize them beyond just queries you can just modify [[My Home]]
## By Type
### Custom
Views that facilitate workflows or are a mix of note types.
```dataview
list Description
from #view/custom
sort file.name
```
### Note Type
Views that organize a note type.
For descriptions, see `USV Glossary` [[My published notes]]
```dataview
list
from #view/note and !"Hidden"
sort file.name
```
### Fields
```dataview
list Description
from #view/field and !"Hidden"
sort file.name
```
### Rest
```dataview
table Description
from #view
where !contains(file.tags, "/")
sort file.name
```