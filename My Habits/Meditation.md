---
Status: 🟨
tags:
  - habitNote
Created: 2024-01-19T09:37:03
Goal:
Area: "[[My Soul]]"
Frequency: Daily
HabitGroup: Morning Wakeup
---
> [!TIP] Workflow
> Follow https://publish.obsidian.md/johnmavrick/My+habits+workflow
## Notes
- 10 minute mindfulness meditation
## Tracking
``` tracker
searchType: task.done, task.all
searchTarget: Meditate, Meditate
folder: /My Calendar/My Daily Notes
summary:
    template: "Meditate - {{sum(dataset(0))/sum(dataset(1))*100}}% - {{sum(dataset(0))}}/{{sum(dataset(1))}} Days Completed"
```
```tracker
searchType: task.done, task.notdone
searchTarget: Meditate, Meditate
folder: /My Calendar/My Daily Notes
datasetName: Meditate, Not Meditate
month:
    color: green
    todayRingColor: white
    showSelectedValue: false
    startWeekOn: 'Mon'
    selectedRingColor: steelblue
    dimNotInMonth: false
```