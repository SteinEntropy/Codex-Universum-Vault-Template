---
tags: "area"
Links: 
Created: 2024-01-19T09:36:58
Group: "Health"
---

## Tasks

```meta-bind-button
label: Add New Task
hidden: false
id: ""
style: default
actions:
  - type: command
    command: quickadd:choice:6bb9f26c-69d2-4711-978e-5325f7b4f1c5
```

%% Tasks Start %%

## Productivity

### Goals

```dataview
table Status
FROM #goal AND !"Hidden"
WHERE icontains(file.frontmatter.Area, this.file.name)
SORT Created asc
```

### Projects

```dataview
table Status
FROM #project AND [[]] AND !"Hidden"
WHERE icontains(file.frontmatter.Area, this.file.name)
SORT Created asc
```

### Habits

```dataview
table Status, Frequency, HabitGroup
FROM #habitNote AND [[]] AND !"Hidden"
WHERE icontains(file.frontmatter.Area, this.file.name)
SORT Created asc
```

## Knowledge

### Inputs

```dataview
table Status, Author
FROM  #input AND [[]] AND !"Hidden"
SORT file.mtime desc
```

### Other Notes

```dataview
table Created
FROM [[]] AND !#project AND !#input AND !"Hidden"
SORT file.mtime desc
```
