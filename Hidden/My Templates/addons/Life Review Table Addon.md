---
Total: ''
---
%% You will need to add the total to the YAML field to be seen in other dataview queries %%
| Area             | Rating |
| ---------------- | ------ |
| Health           |       |
| Productivity     |       |
| Mental Wellbeing |       |
| Learning         |       |
| Relationships    |       |
| Goals            |       |
| Experiences      |       |
| Energy           |       |
| Finances         |       |
| Courage/Spirit   |       |
| Total            |       |
<!-- TBLFM: @>$2=sum(@I..@-1) -->
```button
name Calculate Total
type command
action Advanced Tables: Evaluate table formulas
```
^button-weekly-life-formula
