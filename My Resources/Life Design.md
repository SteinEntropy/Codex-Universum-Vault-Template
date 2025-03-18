---
Status: 
tags:
  - moc
  - resource
Links: 
Created: 2024-04-17T17:09:33
---
## Notes

## Queries
### To Develop
```dataview
list !"Hidden"
where contains(Links, this.file.link) and contains(file.frontmatter.Status, "🌱")
sort file.mtime desc
```
### Inputs

```dataview
table tags as Type, Links, Created
from [[]] AND #input AND !"Hidden"
sort file.mtime desc
```

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
