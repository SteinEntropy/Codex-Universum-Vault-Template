---
Status: 
tags:
  - moc
  - resource
Links:
  - "[[My Resources]]"
Created: 2023-05-07T11:51:16
aliases:
  - PKM MOC
---
## Notes

## Queries

### Notes
```dataview
list from [[]] AND !outgoing([[]]) AND !#input AND !#thought AND !"Hidden"
sort file.mtime desc
```

### Inputs

```dataview
table tags as Type, Links, Created
from [[]] AND #input AND !"Hidden"
sort file.mtime desc
```

### Thoughts

```dataview
table Created
from [[]] AND #thought AND !"Hidden"
sort file.mtime desc
```
