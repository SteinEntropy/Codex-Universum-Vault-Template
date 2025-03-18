---
tags:
  - plugin
Links:
  - "[[Obsidian Community Plugins]]"
Created: 2023-05-14T11:01:42
Summary: Create powerful templates with variables
---
To learn about templates in the first place, visit [[Obsidian Templates]]
## Features
- Implementation of in-obsidian scripts and conditional logic
### Variables
- Variables are essential in almost all templates
	- Especially weekly templates as it has to link to all the previous week's notes
- Jumping to set cursor locations using <%tp.file.cursor(`number`)%>
- Setting a default template that automatically loads on root/folder notes
- Internal variables like dates, titles, etc
#### Examples
If you want to run all variables in a file, you can run the following command (feel free to try it then Ctrl+Z after):
```button
name Templater: Replace templates in the active file
type command
action Templater: Replace templates in the active file
```

<%tp.file.title%>
- Replaces with the title of the note

<%tp.date.now("YYYY-MM-DD")%>
- Replaces with the current day
##### ### tp.file.cursor
`<%tp.file.cursor(`number`)%>` are just jump points for the cursor, which you can jump to by pressing `Alt+8` or using the command

```button
name Templater: Jump to next cursor location
type command
action Templater: Jump to next cursor location
```

- Replace `number` with an actual number
- Makes the cursor jump there when that command is replaced
- Can have multiple in a vault
## Practices
- Adding writing only if a condition is met
	- ex) A todo only on certain days
- Automating references to other notes as seen in my [[Periodic reviews]] templates
	- ex) Referencing the days of a week in the weekly review
		- Connects daily notes to weeks, then weeks to months
## References
### Escaping frontmatter
https://github.com/SilentVoid13/Templater/issues/1191
Escape
<% "---" %>
Date: <% tp.date.now("DD-MM-YYYY") %>
Attendees:
tags:
<% "---" %>
### Update frontmatter
https://github.com/SilentVoid13/Templater/issues/302#issuecomment-1781497890