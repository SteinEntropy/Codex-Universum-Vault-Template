---
Status: 🟨
tags:
  - habitNote
Created: 2024-01-19T09:20:25
Goal: "[[Market the product on social media]]"
Area: "[[My Personal Brand]]"
Frequency: Weekdays
HabitGroup: Afternoon
---
## Notes
- Make a tweet that has a reply that links to my new product
## Tracking

``` tracker
searchType: task.done, task.all
searchTarget: Make a tweet, Make a tweet
folder: /My Calendar/My Daily Notes
summary:
    template: "Make a tweet - {{sum(dataset(0))/sum(dataset(1))*100}}% - {{sum(dataset(0))}}/{{sum(dataset(1))}} Days Completed"
```
```tracker
searchType: task.done, task.notdone
searchTarget: Make a tweet, Make a tweet
folder: /My Calendar/My Daily Notes
datasetName: Make a tweet, Not Make a tweet
month:
    color: green
    todayRingColor: white
    showSelectedValue: false
    startWeekOn: 'Mon'
    selectedRingColor: steelblue
    dimNotInMonth: false
```