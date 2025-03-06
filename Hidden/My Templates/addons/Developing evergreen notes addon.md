```dataview
TABLE date(today) - date(file.cday) as "Days Alive" 
from [[]] AND !"Hidden"
where (contains(file.frontmatter.Status, "🌱") OR contains(file.frontmatter.Status, "🌿"))
sort file.mtime desc
```
