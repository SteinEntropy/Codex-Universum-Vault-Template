---
Status: 
tags:
  - goal
Description: 
Why: 
Timeframe: 
Parent: 
Area: 
Order: 
cssclasses:
  - cards
  - cards-cols-2
Created: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
---

## Related
### Sub-Goals

```meta-bind-button
label: Create Goal Note 🎯
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: command
    command: quickadd:choice:0468ea18-5c37-4079-a9ef-25a64cb20934

```

```dataview
table Description, Why
FROM #goal AND !"Hidden"
WHERE icontains(file.frontmatter.Parent, this.file.name)
SORT Order, file.name asc
```
### Projects

```meta-bind-button
label: Create Project Note 🚧
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: command
    command: quickadd:choice:703904fd-10b0-496d-9bda-07fbc455a73d

```

```dataview
table Description, Why
FROM #project AND !"Hidden"
WHERE icontains(file.frontmatter.Goal, this.file.name)
SORT Order, file.name asc
```
### Habits

```dataview
table Frequency, HabitGroup
FROM #habitNote AND !"Hidden"
WHERE icontains(file.frontmatter.Goal, this.file.name)
SORT Order, file.name asc
```
## Notes

## Planning
### Objective
**What is the definition of DONE?**
`INPUT[textArea(placeholder(Description)):Description]`

**How is this project personally significant to me?**
`INPUT[textArea(placeholder(Why)):Why]`

**Envisioning success, what would it FEEL like to have completed this?**

### Key Results
%% What are the measurable deliverables or statistics I am aiming for? How can I track progress to see my progression? %%

### Obstacles
**What are some obstacles I may face, and what are their solutions? How can I remember these solutions when these obstacles come up?**

## Reflection
**What did I accomplish? Am I satisfied with my progress?**
- 

**What setbacks did I face? What did I learn from them?**
- 

**What are some possible improvements and solutions learned for the future?**
- 
