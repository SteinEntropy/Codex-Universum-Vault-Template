---
Status: 🟨
tags:
  - goal
Created: 2024-01-16T11:25:14
Description: Have a personal brand with branding, content creation, and digital products
Why: I do not find the 9-5 corporate lifestyle fulfilling and want to push myself to grow by becoming a creator
Timeframe: "[[2024]]"
Parent: 
Area: 
Order: 
cssclasses:
  - cards
  - cards-cols-2
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
table list("🎯 " + Description, "💡 " + Why) as "Details", Timeframe, Status
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
table list("🎯 " + Description, "💡 " + Why) as "Details", Status
FROM #project AND !"Hidden"
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
I would feel liberated as I have complete autonomy over my work schedule. I get to choose which projects to take on, and I have a more direct influence on people's lives instead of being a cog in a machine.

I would feel driven to serve my audience and help them solve their problems on a daily basis by solving my own and sharing the solutions.
### Key Results
%% What are the measurable deliverables or statistics I am aiming for? How can I track progress to see my progression? %%
See goals
#### Trackers
%% For key results that manifest from a daily effort. Add a tracker by following https://publish.obsidian.md/johnmavrick/My+habit+tracking+workflow %%

### Obstacles
**What are some obstacles I may face, and what are their solutions? How can I remember these solutions when these obstacles come up?**

## Reflection
**What did I accomplish? Am I satisfied with my progress?**
- 

**What setbacks did I face? What did I learn from them?**
- 

**What are some possible improvements and solutions learned for the future?**
- 
