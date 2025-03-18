---
tags:
  - "reviews/weekly"
Created: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
Summary: 
Personal: 
Career: 
Total: 0
Parent: "[[My Calendar/My Monthly Notes/<% moment(tp.file.title,'YYYY-[W]WW').format('YYYY-[M]MM') %>|<% moment(tp.file.title,'YYYY-[W]WW').format('YYYY-[M]MM') %>]]"
---
[[My Calendar/My Weekly Notes/<% moment(tp.file.title, "YYYY-[W]WW").add(-1, 'weeks').format("YYYY-[W]WW") %>|<% moment(tp.file.title, "YYYY-[W]WW").add(-1, 'weeks').format("YYYY-[W]WW") %>]] ⬅️ [[My Calendar/My Monthly Notes/<% moment(tp.file.title,'YYYY-[W]WW').format('YYYY-[M]MM') %>|<% moment(tp.file.title,'YYYY-[W]WW').format('YYYY-[M]MM') %>]] ➡️ [[My Calendar/My Weekly Notes/<% moment(tp.file.title, "YYYY-[W]WW").add(1, 'weeks').format("YYYY-[W]WW") %>|<% moment(tp.file.title, "YYYY-[W]WW").add(1, 'weeks').format("YYYY-[W]WW") %>]]

> [!TIP]+ Follow my weekly review workflow
> Visit https://publish.obsidian.md/johnmavrick/My+weekly+review+workflow for a guide on how to use this template

## Plan
### Action Items
All the unfinished tasks/reminders from last review:
```dataview
task
where file.name = "<% moment(tp.file.title, "YYYY-[W]WW").add(-1, 'weeks').format("YYYY-[W]WW") %>" AND !completed
```
### Projects
- [ ] Look at `My Vision Board` to remember what your vision is #hidden
- [ ] Visit `My Projects` note and update the status of your desired projects in `Backlog 🟥` or `Upcoming 🟧` to `In Progress 🟨`  #hidden 
- [ ] For each project you want to work on this week, go to the project's `## Weekly Progress` header and create a new weekly progress for the same week number as this weekly note. #hidden 
- [ ] Fill out each `# Plan` section to specify what you want to focus on this week #hidden 
- [ ] Brainstorm the tasks/steps needed to achieve that plan under the `Tasks` header or your task management app #hidden 
```dataview
TABLE
P-<% moment(tp.file.title, "YYYY-[W]WW").format("[W]WW") %> as Plan,
R-<% moment(tp.file.title, "YYYY-[W]WW").format("[W]WW") %> as Reflection,
Status, Deadline, Area
FROM [[]] AND (#project or #output) AND !"Hidden"
SORT deadline asc
```
## Recap
### Days
```dataview
table Rating as ⭐, Summary, Story, headings as ✍️
from [[]] AND #reviews/daily
WHERE contains(file.frontmatter.Parent, this.file.name)
sort file.name asc
```
### Logs
%% This is where you can set up queries to look for any inline metadata fields that you logged throughout the daily journals %%
#### Obstacles
```dataview
TABLE obstacle as Obstacles
from ""
WHERE date(<% moment(tp.file.title,'YYYY-[W]WW').day(1).format("YYYY-MM-DD") %>) < Created AND Created < date(<% moment(tp.file.title,'YYYY-[W]WW').add(1,'weeks').day(0).format("YYYY-MM-DD") %>) and obstacle
SORT file.name asc
```
### New Notes
```dataview
TABLE file.tags as "Note Type", dateformat(Created, "yyyy-MM-dd") as "Created"
from ""
WHERE date(<% moment(tp.file.title,'YYYY-[W]WW').day(1).format("YYYY-MM-DD") %>) <= Created AND Created <= date(<% moment(tp.file.title,'YYYY-[W]WW').add(1,'weeks').day(1).format("YYYY-MM-DD") %>)
SORT file.name asc
```
### Completed Tasks
```tasks
due in <% moment(tp.file.title,'YYYY-[W]WW').day(1).format("YYYY-MM-DD") %> to <% moment(tp.file.title,'YYYY-[W]WW').add(1, 'weeks').day(0).format("YYYY-MM-DD") %>
group by path
sort by due
```
### Key Metrics
#### Energy
``` tracker
searchType: frontmatter
searchTarget: Physical, Mental, Emotional, Spiritual
folder: /My Calendar/My Daily Notes
startDate: <% moment(tp.file.title,'YYYY-[W]WW').day(1).format("YYYY-MM-DD") %>
endDate: <% moment(tp.file.title,'YYYY-[W]WW').add(1,'weeks').day(0).format("YYYY-MM-DD") %>
line:
    title: Energy
    yMax: 10
    yAxisLabel: Phys (R) / Ment (B) Emot (Y) / Spir (G)
    lineColor: red, blue, yellow, green
```
```tracker
searchType: frontmatter
searchTarget: Physical, Mental, Emotional, Spiritual
folder: /My Calendar/My Daily Notes
startDate: <% moment(tp.file.title,'YYYY-[W]WW').day(1).format("YYYY-MM-DD") %>
endDate: <% moment(tp.file.title,'YYYY-[W]WW').add(1,'weeks').day(0).format("YYYY-MM-DD") %>
summary:
    template: "AVERAGES\nPhysical: {{average(dataset(0))}}\nMental: {{average(dataset(1))}}\nEmotional: {{average(dataset(2))}}\nSpiritual: {{average(dataset(3))}}\n"
```

Was there any lacking energy? If so, how can I work on improving it this upcoming week?
- 
## Reflection
### Summary
`INPUT[textArea():Summary]`
### Biggest Personal Achievement
`INPUT[textArea():Personal]`
### Biggest Career Achievement
`INPUT[textArea():Career]`
### Wheel of life
Rate each field on a scale of 1-10 based on the wheel of life.
##### Joy
```meta-bind
INPUT[progressBar(minValue(1), maxValue(10)):Joy]
```

#### Health
##### Body
```meta-bind
INPUT[progressBar(minValue(1), maxValue(10)):Body]
```

##### Mind
```meta-bind
INPUT[progressBar(minValue(1), maxValue(10)):Mind]
```

##### Soul
```meta-bind
INPUT[progressBar(minValue(1), maxValue(10)):Soul]
```
#### Work
##### Mission
```meta-bind
INPUT[progressBar(minValue(1), maxValue(10)):Mission]
```

##### Money
```meta-bind
INPUT[progressBar(minValue(1), maxValue(10)):Money]
```

##### Growth
```meta-bind
INPUT[progressBar(minValue(1), maxValue(10)):Growth]
```
#### Relationships
##### Romance
```meta-bind
INPUT[progressBar(minValue(1), maxValue(10)):Romance]
```

##### Family
```meta-bind
INPUT[progressBar(minValue(1), maxValue(10)):Family]
```

##### Friends
```meta-bind
INPUT[progressBar(minValue(1), maxValue(10)):Friends]
```
#### Reflection

Total: `VIEW[{Body} + {Mind} + {Soul} + {Mission} + {Money} + {Growth} + {Romance} + {Family} + {Friends} + {Joy}]`

**What can I try and improve on this week?**

### Learning Review
**3 great things that happened to me last week were**
- 

**The main struggle I faced this week was...**
- 

**and if I were advising or mentoring someone dealing with the same struggle, I'd advise them to...**
- 

**2 things I learned about myself this past week include...**
- 

**2 things I learned about others include...**
- 

**1 decision I could have made last week to make my life better or to move ahead faster would have been...**
- 

### Focus
**Did you complete what you set out to do previously? Are you content with your productivity?**

**Does your calendar (and commitments) match your priorities and values?**

**Did I do something outside of my plans? How did it influence the week?**
### Time Management
**Could you have spent more time on something?**

**Could you have spent less time on something?**

**Advice for the future?**
## Next Steps
- [ ] Create the next weekly note through the Calendar pane and start filling out your next plan there! #hidden 
