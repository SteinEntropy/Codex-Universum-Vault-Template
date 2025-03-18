---
Status:
tags: "moc"
Links:
Created: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
---
## Notes

## Queries
### To Develop

```dataview
list !"Hidden"
where contains(Links, this.file.link) and contains(file.frontmatter.Status, "🌱")
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
