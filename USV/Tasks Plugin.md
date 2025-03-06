---
tags:
  - plugin
Links:
  - "[[Obsidian Community Plugins]]"
Created: 2023-10-11T08:25:11
Description: Turns Obsidian into a global tasks database
---

Whether you're wanting to save money from a monthly subscription or want all your digital stuff in one place, I hope the implementation of this plugin can be helpful for you :)

Just like how [[Dataview Plugin]] turns your notes into a searchable database, you can search through all your notes to find and organize the different types of tasks in your vault.

If you want, you can consider combining it with the [[Kanban Plugin]] for a more visual layout.

## References

- [Official documentation](https://publish.obsidian.md/tasks/Getting+Started/Getting+Started)

## Creating Tasks

### Command

Run the following command while your cursor line is on a line of text in a note:

```button
name Tasks: Create or edit task (Ctrl/Cmd+Alt/Option+T)
type command
action Tasks: Create or edit task
```

If it is on a non-task line, it will turn the contents into a task. If it is on an existing task, it will edit it.

#### Properties

The four most important things you need to set in this edit mode are:

- Tags
  - These are used to further categorize your tags, sese [[#Tags]]
  - Can be simply added as part of the name of the task
- Due date
  - Used to show when appropriate across all your different tasks
  - If you want to be more advanced you can also use the `start` property so you can use that as a reminder date and the "due" date as the day you ABSOLUTELY need to finish it, but I'm lazy
- Recurring
  - Documentation [Recurring tasks](https://publish.obsidian.md/tasks/Getting+Started/Recurring+Tasks)
  - This is for temporary recurring tasks related to a project, where if miss a day you will need to make up for it the next day. To see how to set up habits that do not roll over to the next day, see [[#Recurring tasks that do not roll over]]
- Priority
  - Used to sort them in the [[#Queries]]

### Text

Alternatively, you can also just type out the different [[#Properties]]

## Sources

Since these tasks are stored in text, we will need to find places to store them in.

When creating a task, be sure to add the [[#due]] date, related [[#Tags]], and you can trust that it will resurface on the correct day or place you're looking.

I've decided to roughly follow the [[PARA Method]] for storing tasks for consistency:

### Project Notes

To group all tasks related to a project, put under [[Projects#Tasks]]

### Area Notes

To group all tasks related to an area, put under [[Area Template#Tasks]]

### Resource Notes

To group all tasks related to a note, whether it be about the note itself or for the ideas related to it.

No specific header, just add as you need.

Some examples include:

- Creating a task to turn the highlights of a specific input note into conceptual notes
- Wanting to take action on brainstormed action items from a book you read

### Daily Notes

For the more random ideas and tasks that pop up throughout the day, add them in the [[Daily Template#Today]] area

In a sense your daily notes are an archive since you don't really look back on it outside of periodic reviews.

## Queries

These help us find tasks that we want to see based on certain instructions. They are used in the different [[#Views]].

### Filters

- [Filters](https://publish.obsidian.md/tasks/Queries/Filters)
- [Combining filters](https://publish.obsidian.md/tasks/Queries/Combining+Filters#Combining+Filters)

#### Commonly used

- tags
  - `tags include x`
  - `tags does not include x`
- path
  - `path includes x`
  - `path does not include x`
- certain note title text
  - `filter by function task.file.filename.includes("x")

#### Compound filters

- Will need to put brackets around each expression liberally for more complex filters
  - ex) `((due on 2023-12-19) OR (scheduled on 2023-12-19)) OR (((scheduled before 2023-12-19) OR (due before 2023-12-19)) AND (tags does not include habit)) sort by priority`
  - Brackets around the expression, then brackets around the compound expression, then brackets around the entire expression. Otherwise it will throw an error or not work 😅

### Sorting

- `sort by priority`
  - Daily notes
- `sort by due`
  - can maybe be used to see your sequential progression throughout a project

### Grouping

- For periodic days I use `group by path`, which will be the note the task is from. This will help you get a holistic view on your progress on different projects
  - For weekly review, can also consider `group by due` to see what you did on a day-to-day basis

### Global Query

A set of filters I added in the vault:
`(path does not include Hidden) AND (path does not include USV Onboarding) AND (tags does not include hidden)`

- Hiding hidden removes any templates or configuration files
- USV Onboarding is just to not include each kanban task into the lists
- Have an option to hide tasks via the [[#Hidden]] tag

## Views

The list of views inside the vault notes. This is mostly in relation to their [[#Tags]] or their [[#due]] dates

Made via [[#Queries]]

### [[My Tasks]]

This is the main place you will use to view your tasks.

The queries in this note are subjective and are based on the current day, while the other ones are based on the actual date or time frame derived from the note.

Feel free to customize them to your own workflows and make your own!

#### Inbox

- This is where you will find all tasks without a due date. When you remember something you need to do, you can write it down and get back to it at a later time, whether it be during break or at the end of the day
- If you find yourself making a lot of tasks without a due date, but you don't want to make them show in the inbox, you can use the [[#Hidden]] tag or add a condition in the query to require a tag like `#inbox`

#### By Due Date

- Self-explanatory, split into different types like overdue, due today, due in 7 days

#### By Type

- For different tags you create

### Daily Template

#### [[Daily Notes#Tasks]]

- See the tasks overdue and due today

#### [[Daily Notes#Reflection]]
- Has a `Accomplishments` section where you will see the list
- See all the tasks you completed today, which is calculated by finding any with the [[#completion]] property

### Weekly Review Template

#### [[Weekly Review Template#Completed Tasks]]

- See all completed tasks throughout the week based on [[#completion]] property for a holistic view on the week
## Properties

Can be modified by putting your cursor line on the task and then running the Create/edit task button, or just typing it yourself in the line.

Properties are stored in the text in `[field:value]` format

### priority
- type `[priority:: value]`

#### examples
- [ ] priority:: lowest #hidden [priority:: lowest] 
- [ ] priority:: low #hidden [priority:: low] 
- [ ] no priority #hidden
- [ ] priority:: medium #hidden [priority:: medium]
- [ ] priority:: high #hidden [priority:: high]
- [ ] priority:: highest #hidden [priority:: highest]

```tasks
not done
filter by function task.file.filename.includes("Tasks Plugin")
ignore global query
sort by priority
```
### due
- include  `[due:: date]` in the task in `YYYY-MM-DD` format
- the actual DUE date of the task
- when adding the due date via the command, you can use natural language which will be automatically converted to the above format
### completion
- include `[completion:: date]` in the task in `YYYY-MM-DD` format
- this is to help you review what you did
	- ex) [[#Daily Template Accomplishments]]
## Tags
For more customization and implementation of [[Getting Things Done]], I've used tags for different characteristics of a task:
### Hidden
For tasks that you don't want to include in [[#Queries]], because maybe they are just part of a reusable checklist, you can add the tag `#hidden` to the task. In the
### Types
I've created different tags for the different types of tasks:
- `#waiting` is for tasks you have to wait to do
- `#someday` is for tasks you want to do someday that you wish to review when you have more time in your weekly or periodic reviews
	- If you want to further organize them, you can organize by timeframe like
		- `#someday/month`
		- `#someday/quarter`
		- `#someday/year`
#### Recurring tasks that do not roll over
- `#habit` is for recurring tasks for a day that you do not want to see in to-do-lists for other days because they are only specific for that day.
	- For example, if you had a habit to brush your teeth, but you have not done so in the past 5 days, in today's task list you would not want to see 5 tasks to do so.
	- So, if you have a `#habit` tag on a task, if it was scheduled on a previous day, it will not show in the list
- If you want to see a task overdue, you can check out recurring field in [[#Properties]]
- If you want to hide habits in a task list, you can add the line `AND tag does not include habit`, might have to be wary of [[#Compound filters]] syntax though
### Contexts
`#context/` is for the different contexts you can do your task in
- ex) `#context/work`, `#context/mall`, `#context/transit`
### Time
How long the task will take, just used for personal understanding rather than sorting, and it doesn't have to be a tag
- ex) `#5`, `#15`, `#30`, `#60` `#60plus`