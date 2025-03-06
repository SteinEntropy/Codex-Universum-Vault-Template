---
tags:
  - view/note
Links:
  - "[[My Home]]"
Created: 2025-03-05T19:38:04
Description: All periodic notes
---
To see your focus for the relevant timeframe instead, visit [[My Vision Board]]

```button
name QuickAdd: 📆 Create Periodic Note
type command
action QuickAdd: 📆 Create Periodic Note
```

## Daily Notes

```dataview
table Rating as ⭐, Summary, Story, headings as ✍️
from #reviews/daily AND !"Hidden"
sort file.name desc LIMIT 5
```

## Weekly Reviews

```dataview
table Total as ⭐, Summary, Personal, Career
from #reviews/weekly AND !"Hidden"
sort file.name desc LIMIT 5
```

## Monthly Reviews

```dataview
table Total as ⭐, Summary, Personal, Career
from #reviews/monthly AND !"Hidden"
sort file.name desc LIMIT 5
```

## Quarterly Reviews

```dataview
table Total as ⭐, Summary, Personal, Career
from #reviews/quarterly AND !"Hidden"
sort file.name desc LIMIT 5
```

## Yearly Reviews

```dataview
table Total as ⭐, Summary, Personal, Career
from #reviews/yearly AND !"Hidden"
sort file.name desc LIMIT 5
```
