---
tags: []
Links:
  - "[[My Home]]"
Created: 2024-01-16T11:23:33
Date: 2024-01-07
cssclasses:
  - cards
  - table-max
  - cards-cols-2
---
![[Example note callout]]

This is an example version of [[My Vision Board]], what it would look like if today was 2024-01-07.

Since the queries dynamically change based on the current date, you probably won't see the same in the regular vision board by the time you 😅
## Year
```dataview
table Theme, list(BodyGoal, MindGoal, SoulGoal, MissionGoal, MoneyGoal, GrowthGoal, RomanceGoal, FamilyGoal, FriendsGoal) as "12-Month Celebrations"
from #reviews
WHERE file.name = string("2024")
```
```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details"
FROM #goal AND !"Hidden"
WHERE file.frontmatter.Timeframe = "[[2024]]"
SORT Order, file.name asc
```
## Quarter
```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details"
FROM #goal AND !"Hidden"
WHERE file.frontmatter.Timeframe = "[[2024-Q1]]"
SORT Order, file.name asc
```
## Month
```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details"
FROM #goal AND !"Hidden"
WHERE file.frontmatter.Timeframe = "[[2024-M01]]"
SORT Order, file.name asc
```
## Week
```dataview
table list("🎯 " + Description, "💡 " + Why, "🚩 " + link(file.name + "#W01 Plan", "Weekly Plan")) as "Details"
FROM #project AND !"Hidden"
WHERE contains(file.outlinks, link("2024-W01"))
SORT Order, file.name asc
```
