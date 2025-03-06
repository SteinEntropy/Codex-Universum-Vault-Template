---
tags:
  - view/note
Links: 
Created: 2025-03-05T19:32:52
---

```button
name QuickAdd: 👤 Create Person Note
type command
action QuickAdd: 👤 Create Person Note
```

## By Relationship
### None
```dataview
TABLE MBTI, Sentence
from #person AND !"Hidden"
where !contains(file.tags, "/")
sort file.ctime desc
```

### Family

```dataview
TABLE MBTI, Sentence
from #person/family AND !"Hidden"
sort file.name asc
```

### Work

```dataview
TABLE MBTI, Sentence
from #person/work AND !"Hidden"
sort file.name asc
```

### Friend

```dataview
TABLE MBTI, Sentence
from #person/friend AND !"Hidden"
sort file.name asc
```

## Keep In Touch

### Catch up with

For people I haven't talked to in over a month 🤯

```dataview
TABLE LastChatted, date(today) - date(LastChatted) as "Days"
from #person
where KeepInTouch and (date(today) - date(LastChatted) >= dur(1 month))
sort LastChatted asc
```

## All
### By Alphabetical Order

```dataview
TABLE MBTI, Sentence
from #person AND !"Hidden"
sort file.name
```
