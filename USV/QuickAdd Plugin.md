---
Status: 
tags:
  - plugin
Links:
  - "[[Obsidian Community Plugins]]"
Created: 2023-05-07T11:51:13
Description: Lets you create new note types with templates, folders set, etc, from anywhere in the vault
---
## Principles

- A centralized command palette for custom workflows
- Tons of customizability, especially if you inject your own scripts, so let your imagination run wild 😎
- I just mainly use it to organize the different templates and use cases of the vault, like creating the different relevant notes
- Each command you see in the QuickAdd command pallete (`Ctrl+Shift+P`) are called choices
- I think you need to disable and enable the command palette action (click lightning bolt twice) to make changes effective, or else embedded buttons won't work

### Palette
To access all choices you have, you can run:

```button
name QuickAdd: Run QuickAdd
type command
action QuickAdd: Run QuickAdd
```

### Creating a Choice
#### Template Choice
- Add a [[QuickAdd Plugin]] command to easily create the new kind of note. Go to QuickAdd plugin settings.
	- ![[Pasted image 20240411192440.png]]
	- Fill out the name of the new command
		- ex) `🚧 Create Project Note`
	- Make sure `Template` is selected
	- Click `Add Choice`
- Click on the ⚙️ icon of the new choice you created