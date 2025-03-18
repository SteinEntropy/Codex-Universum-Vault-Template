---
tags:
  - plugin
Links:
  - "[[Metadata]]"
  - "[[Obsidian Community Plugins]]"
Created: 2023-05-17T08:18:37
Description: Have more control and customizability over the characteristics of your notes
---

> [!INFO] An outdated video showcasing the plugin's features
> ![Video](https://www.youtube.com/watch?v=7o9j7WJfhi0)

## Why I'm using this plugin

See my reasons in [[Metadata#Why to use one over the other]]

## FileClasses

The usefulness of this plugin comes from the main feature, `fileClasses`.

A `fileClass` outlines the [[Metadata]] fields of a note, and to apply this structure, you can add a tag with the `fileClass` name

Whenever you add the tag (ex. `#project`), it will refer to the `fileClass` with the same name, [[project]]
### Global fileclass
There is a global fileClass called [[all]] that is applied to all notes. This is for:
- Default `Status` being set to [[Evergreen Notes]]
- `tags` for tags
- `Links` giving you the option to search for them
## Setting up a fileClass
### Making a fileClass
- I have set the folder to store all fileClasses in `Extras/FileClass`
- Create a new note inside the folder with the name of the new fileClass then clear out the content to make the note empty (including the frontmatter!)
  - On the tab of the note, there should be a menu icon you can click to access the settings of the fileClass
  - ![](https://i.imgur.com/zz2fDzM.png)
  - If you don't see this, refreshing your vault might help

Once you're in the menu, be sure to do the following:
- Click the save icon button
- If there's overlap of metadata from using multiple `fileClasses` in one note, then it will prioritize the last tag you add to it.

### Adding fields to a fileClass
- Can click on the clipboard icon, which at the bottom will show all related fileClasses
  - Click the add icon to the right of the fileClass you want to add a field to
- There's a lot of customizability, but for the most part, you can just create your own selections
- Sometimes it will ask for a [[DataviewJS]] query (ex. links), which gives you the opportunity to dynamically choose what links are possible based on their tag
	- For example, for [[goal]] I have set the `Area` property to suggest notes with the `#area` tag through `dv.pages("#area").filter(p => !p.file.path.includes('Hidden'))`

### Overriding fields
For the inputs fileClass [[input]], I added a Status field with different options to override the default Status (🌱, 🌿, 🌲) set by [[all]]

Once you set up your fields, you can try it out on a note!
### Parent classes
If you have an extra field for a certain sub-type of a note, you can create a new [[#FileClasses]], set the parent to the parent fileClass, then add the fields you want to add.
## Usage
### Applying two fileClasses to a note
When creating a note, just add both tags to the note. If they have similar fields, put the tag you want to have priority last.

### Editing Fields
Once you have a few fields for a fileClass and have tagged a note with it, there are two ways to edit the field:

#### Via Field Menu
- If you set up the fileClass, you will be able to see a new button beside the name of the note in the:
  - tab
  - file explorer
  - link to the note
  - and more places, pretty much anywhere the note's name is also displayed
  - This is handy, but it can be obnoxious when there's lots of header preview links like in the list to see all days in the [[Weekly Review Template#Days]]:
    - ![[Pasted image 20230906201200.png]]
  - If you want to disable it, just head to `Settings -> Metadata Menu -> Metadata Menu Button`

#### Inside your note via inline field
Whenever there is [[Metadata#Inline Metadata Fields]], you can press space to the right of the field and it will show up with suggested values (if configured to do so). This is most useful for fields like `Status` where there are only a few allowed values, or `Area` where you will only want to link it to a specific area

### Setting up fileClass fields
You can click on the clipboard/box icon to the right of the "Add property" button at the top of the note to add any missing fields part of the fileClasses in the note.
## View fields

And now, to see and use these fields to further organize your notes, you can combine it with the [[Dataview Plugin]] to create custom queries. For example, the following code:

````
```dataview
table Deadline
from #view AND !"Hidden"
```
````

Will result in the following table

```dataview
table tags
from #view AND !"Hidden"
```

### fileClass Menu View

There should be an icon beside the title of a fileClass note, which should open a view to manage that specific fileClass.

#### Table View

One of the options is "Table View", to which you can easily modify metadata and have a complex menu for filtering and sorting notes.

#### FileClass Fields

Another way to create and modify fields of a fileClass.

#### FileClass settings
Where we customized the map with tag settings and etc. earlier in [[#Making a fileClass]].

### Field Options
#### Suggest based on DataviewJS query

- If you set a field to be a link, you can use a dataviewjs query to filter out options for the suggestion
- For `Area` field in [[project]], you can make the field only take in `Area` notes by setting the suggested dataview query to `dv.pages('#area')`

#### "Will" Options

`Accept a link`
- Create a dataviewJS query to find all relevant notes based on dataview

#### Lookup Fields
> [Example](https://www.youtube.com/watch?v=ad0nJf8TZP8&ab_channel=MathieuDelobelle)
- Created a field called `boys`, which found all notes that had a `#student` tag with `gender` set to `male`

Automatic queries that are run whenever you create a new inline field in your notes.

Essentially, you can attach a dataviewJS query onto a field so as soon as you create it, it automatically prints something.

In his video example, he uses it to get the averages of days.

