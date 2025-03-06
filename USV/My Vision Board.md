---
tags:
  - dailyReminders
  - view/custom
Links:
  - "[[My Home]]"
Created: 2025-03-05T19:33:00
cssclasses:
  - cards
  - table-max
  - cards-cols-2
Description: Visualize the alignment of your daily actions with your long-term goals
---

> [!INFO]+
> Used as a quick daily reminder for your higher-order projects, goals, and visions from [[My Calendar]]

> [!TIP]+
> If you want a more customizable dashboard, you can build off of [[My Canvas Vision Board.canvas|My Canvas Vision Board]]
> 
> To see an example on what this board looks like when full, see [[My Vision Board Example]]

## Values
![[My Values]]
## Year
### Wheel of life
%% Based on the values of your current yearly review %%
```dataviewjs
const currentYear = moment(Date.now()).format("YYYY");
const currentYearPage = dv.pages('#reviews/yearly').where(p => p.file.name === currentYear)[0];

const emojis = ["💪", "🧠", "✨", "🎯", "💸", "📈", "💕", "👨‍👩‍👧‍👦", "🤝", "🤩"];
const fields = ["Body", "Mind", "Soul", "Mission", "Money", "Growth", "Romance", "Family", "Friends", "Joy"];

const combinedLabels = fields.map((field, index) => {
	return `${field} ${emojis[index]}`
});

const averagesArray = fields.map(field => currentYearPage[`${field}GoalRating`] ?? 0)

dv.paragraph(`\`\`\`chart
type: polarArea
labels: [${combinedLabels}]
series:
  - title:
    data: [${averagesArray}]
tension: 0.2
width: 80%
labelColors: true
fill: true
beginAtZero: true
rMax: 10
bestFit: false
bestFitTitle: undefined
bestFitNumber: 0
legendPosition: right
\`\`\``)
```
### Goals
```dataview
table Theme, list(BodyGoal, MindGoal, SoulGoal, MissionGoal, MoneyGoal, GrowthGoal, RomanceGoal, FamilyGoal, FriendsGoal) as "12-Month Celebrations"
from #reviews
WHERE file.name = string(date(today).year)
```
```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details"
FROM #goal AND !"Hidden"
WHERE file.frontmatter.Timeframe = dateformat(date(now), "[[yyyy]]")
SORT Order, file.name asc
```
## Quarter
```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details"
FROM #goal AND !"Hidden"
WHERE contains(file.frontmatter.Timeframe, dateformat(date(now), "yyyy-Qq"))
SORT Order, file.name asc
```
## Month
```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details"
FROM #goal AND !"Hidden"
WHERE contains(file.frontmatter.Timeframe, dateformat(date(now), "yyyy-'M'MM"))
SORT Order, file.name asc
```
## Week
```dataview
table list("🎯 " + Description, "💡 " + Why, "🚩 " + link(file.name + dateformat(date(now), "'#W'WW' Plan'"), "Weekly Plan")) as "Details"
FROM #project AND !"Hidden"
WHERE contains(file.outlinks, link(dateformat(date(now), "yyyy-'W'WW")))
SORT Order, file.name asc
```
## Daily
### [[My Habits]]
### My Tasks
![[My Tasks#Overdue]]
![[My Tasks#Due Today]]