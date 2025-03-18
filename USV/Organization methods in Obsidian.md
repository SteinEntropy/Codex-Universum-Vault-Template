---
Status: 
tags:
  - note
Links:
  - "[[Obsidian]]"
Created: 2024-04-14T19:36:14
aliases:
  - Folders
---
There are three main ways to organize notes in Obsidian:
- [[#Folders]]
- [[#Links]]
- [[#Tags]]

## Folders
Using folders promotes [[Top-Down Thinking]] as a note can only be in one folder.
### View

```button
name Files: Show File Explorer
type command
action Files: Show File Explorer
```

There is also a more functional folder view using the `File Tree Alternative Plugin` that you might enjoy more. This lets you better navigate your folders with things like:
- Isolated views to only show the selected folder's contents
- Custom sorting
- Searching

I have heard it once caused performance issues for a customer, so if you find your Obsidian slowing down it could be a culprit 🧐

You can open it through the button:

```button
name File Tree Alternative: Open File Tree View
type command
action File Tree Alternative: Open File Tree View
```

### Uses
I don't actually access notes through folders most of the time, so I don't use them with retrievability and navigation in mind.

Instead, I mostly use them to group the different [[Note types]] in the vault into their folders. This is why there might be a good amount of.

This is because I feel using [[View notes]] allows for much more functionality and customizability compared to navigating through folders. And you can already technically navigate with folders since they are recognized during search in [[Creating and modifying notes]]

By having any note type in it's own folder, the root folder will be the one full of just purely [[Conceptual notes]].

Some of the important folder design choices in [[USV]] include:
- Anything in the `Hidden` folder can be easily excluded in queries or search methods by including it as part of the criteria
	- This is because you wouldn't want to see things like templates, [[QuickAdd Plugin]] fileClasses, archived notes, etc
- There are some nested notes if they are a subtype of the main note, but that is about it.
	- ex) [[Inputs]] `#input` has various subtypes to further classify the type of input it is, like `#input/books`
- Also used to organize the different file types aside from markdown (attachments, [[Obsidian Canvas]], [[Excalidraw Plugin]])
## Tags
Used to classify the [[Note types]] in the vault, and organize them into sub-types.

When you tag a note with something, you set it up to have specific metadata based on the [[Metadata Menu Plugin]].

To see the properties associated with each tag, you can look at [[Projects]]

Some notes will also have a subtag associated with it, like `#input/video,  #input/article, etc`

These help you further organize these broad types of notes, which can then be accessed in notes like [[My Videos]] or [[My Articles]].

![[Auto Note Mover Plugin#Specifying type of input]]

By specifically categorizing our data, we can give it detailed metadata most related to the type of information we are storing in there, which can be set using the [[Metadata Menu Plugin]]

## Links
Links are a dynamic way of organizing your notes by relatedness of ideas.

They allow for the functionality of both previous organizing methodologies. Just replace the idea of a folder or tag with a note representing it:
- You can still achieve the hierarchical organization of folders by using the `Links` [[Metadata]] to link to the parent "folder", which is actually a note
- Just like tags, we can classify a note as multiple things by linking it to "tag", which is actually just a note

This gives us another dimension to organize things, as beyond just the actual name of folders and tags, we can add context using the text surrounding a link.

For a certain type of thing in our Obsidian notes, the classification evolves from

`Thing/note`

to

`#thing`

to

This note is a `[[thing]]` because of x

In previous versions of the vault I had my note types also link back to their main note, like linking the book note `[[Building a Second Brain]] to [[My Books]]`, but I feel like it only clutters the backlinks and graph view.

I use links for...
- **Understanding**
	- Connect something new to something we already know, recording and building off of my previous thinking
- **Creativity**
	- The emergence of our own ideas by infusing our own personal ideas and the synthesis of various ideas
- **Productivity**
	- Organize based on actionability by linking the note to whatever goal, project, area, etc. I will need it for
# Your Turn
[[Lesson Action Items#Organization methods in Obsidian]]

Then go back to [[Module - Learn Obsidian]]