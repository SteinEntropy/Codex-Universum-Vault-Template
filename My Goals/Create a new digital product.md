---
Status: 🟨
tags:
  - goal
Created: 2024-01-07T09:24:26
Description: having a product that is on sale at shop.johnmavrick.com
Why: first step towards passive income + i still have some workflows of mine to share and clarify
Timeframe: "[[2024-Q1]]"
Parent: "[[Continue working on my personal brand]]"
Area: "[[My Personal Brand]]"
Order: "2"
HoursWorked: 41
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
```dataview
table Description, Why
FROM #project AND !"Hidden"
WHERE icontains(this.frontmatter.Goal, this.file.name)
SORT Order, file.name asc
```
## Planning
### Objective
**What is the definition of DONE?**
`INPUT[textArea(placeholder(Description)):Description]`

**How is this project personally significant to me?**
`INPUT[textArea(placeholder(Why)):Why]`

**Envisioning success, what would it FEEL like to have completed this?**

### Key Results
**What are the measurable deliverables or statistics I am aiming for? How can I track progress to see my progression?**
```meta-bind
INPUT[progressBar(minValue(0), maxValue(100), title(HoursWorked)):HoursWorked]
```
### Obstacles
**What are some obstacles I may face, and what are their solutions? How can I remember these solutions when these obstacles come up?**

## Reflection
**What did I accomplish? Am I satisfied with my progress?**
- 

**What setbacks did I face? What did I learn from them?**
- 

**What are some possible improvements and solutions learned for the future?**
- 
