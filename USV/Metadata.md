---
Status: 
tags:
  - note
Links:
  - "[[Obsidian]]"
Created: 2024-04-14T19:48:06
---
Information about a note.

For example, In [[Building a Second Brain]](which is the example I'll be using for the rest of this note), there are fields about the note like `Created`, `Author`, `Finished`, `Rating`

### Types of Metadata
#### Frontmatter Metadata
If I wanted to add the data `hoursSlept` with a value of 8, I can add a property at the top of my note:

```button
type command
name Add file property (Ctrl/Cmd+;)
action Add file property
```

Frontmatter usually looks something like this:
```
---
hoursSlept: 8
---
```

But as of August 31 2023, Obsidian made it more user friendly by making it similar to Notion's properties 😁 

If you need to learn more, you can watch my video on how to go from properties beginner to pro:
![Video](https://www.youtube.com/watch?v=zvI_XS-l4ko)
#### Inline Metadata Fields
Another way to create fields to have it inline in the text, with two colons after the name.

This requires the [[Dataview Plugin]]

Make sure there's a space between the `::` and the value and the field is at the start of it's own line, or else it won't work. It should look something like:

Field:: Awesome Value

Having it after a bullet point also works.

If you do want to include it after some text though, you can use square brackets like so: [inTextField:: Awesomer Value]

Here's proof of both working:
```dataview
table Field, inTextField
where file.name = "Metadata"
```
#### Why to use one over the other
Frontmatter metadata (also known as properties) is what I tend to use since it is natively part of Obsidian. And with their upcoming feature on dynamic views, I feel having them native will make it compatible for this upcoming update.

But there's still some missing features that I personally need, and am using [[Metadata Menu Plugin]] to solve.

**Reason 1:** Different types of notes have different set values for different fields
- ex. For a note's status:
	- Normal notes tagged `#note` use the [[My Greenhouse]] tagging system
	- [[My Brainstorms|My Brainstorms]] has 3 colored squares, and [[My Projects]] has 5 to distinguish the different phases
	- But thanks to [[Metadata Menu Plugin#FileClass Fields]], you can define what values can be for each type of note type you have by assigning it the tag.
		- If you look at [[input]] fileClass note, you can see how I override the default note Status (`🌱, 🌿, 🌲`) to be the squares

**Reason 2:** There's no way to automatically suggest property values unless you have already set it in a previous note
- But with the plugin, if you choose the `Link` icon in [[Project Template]] it will search through all areas you have in your vault (notes with the `#area` tag), even if you haven't necessarily used that area as a value for the `Area` field yet in a different note.

**Reason 3:** You can only access the properties of a note when you have it actively open, via the top menu or the sidebar pane
- I'm sounding like a broken record, but with the plugin you can access it via link or anything! Check out any note's icon to the right like [[Vault Onboarding]] there is a clipboard icon you can use to adjust the fields
### Uses
- Can view this data in [[Dataview Plugin|Dataview queries]] for a semi-automatic way to sort your notes and resurface them when you need in [[View notes]]
### Plugins
To help make classifying metadata per note easier based on the type of note it is, I personally use [[Metadata Menu Plugin#FileClasses]] which lets me classify a note using a tag.
### Common Metadata
- `Status` helps with keeping track of notes you need to work on, to know what stage of the knowledge process a certain note is at
- `tags` gives you a place to put hashtags to classify the note type it is, which is useful for plugins like [[Metadata Menu Plugin]]
- `Links` help you link things to a parent note

# Your Turn
Continue learning by visiting [[My metadata philosophy]]