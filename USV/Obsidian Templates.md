---
Status: 
tags:
  - note
Links:
  - "[[Obsidian]]"
Created: 2024-04-16T22:51:46
---
> [!INFO] Template Explanations
> Learn the structure of each template in https://notes.johnmavrick.com/USV+Glossary

This vault uses the [[Templater Plugin]] to allow for extreme customization using code snippets which look like `<% bla bla bla %>

You can learn more in [[Templater Plugin#Variables]]

## Why
Two main use cases:
- Creating structure for different [[Note types]] in your vault
- Creating "add-ons" you can use, [[My Addons]]
## Frequently Asked Questions

### How to create new notes with templates
Creating ordinary notes was covered in [[Creating and modifying notes]]

For the other [[Note types]] I use the [[QuickAdd Plugin]]

To create a new note or new project, open [[Command Palette]] and run:

```button
name QuickAdd: Run QuickAdd
type command
action QuickAdd: Run QuickAdd
```

### How to add templates
On top of templates
`Ctrl + Shift + T` to add a template to the current file

### How to modify existing templates?

- To modify the template selection process, go to quickadd settings, `Manage Macros`, and you will see the already existing quickadd
- Find `/templates` folder and just edit the text, structure, and queries to your liking :) My templates are only examples, and are not the "absolutely correct" way to do things- feel free to add in snippets that compliment your own daily routines and workflows!

To easier edit the properties of templates, you can toggle live preview/source mode with:
```button
name Toggle Live Preview/Source mode
type command
action Toggle Live Preview/Source mode
```
## Anatomy

To understand the metadata I have in my notes, refer to [[My metadata philosophy]]

### Why are there double colons?

- It converts the content after the colon into [[Metadata]], which can then be displayed and used in dataview queries

### Why are notes sorted by file.mtime?

- Tables will show the date of creation, but will be sorted at their latest modified time to allow for notes that were created a long time ago but are still used frequently

## Troubleshooting

### Templater commands aren't loading fully

ex) `<%tp.file.title%>` and `<%tp.date.now("YYYY-MM-DD")%>`

If the templates don't automatically load upon note creation, be sure to enable the `Trigger Templater file on new file creation` setting in the `Templater` community plugin

Sometimes you might need to run a command to trigger the templates (you can manually do it by opening command pallete `Ctrl/Cmd + P` and then typing in `Replace templates in the active file`)

# Your Turn
Visit [[Lesson Action Items#Obsidian Templates]]

Then go back to [[Module - Learn Obsidian]]