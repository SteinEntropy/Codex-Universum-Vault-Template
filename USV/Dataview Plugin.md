---
tags:
  - plugin
Links:
  - "[[Obsidian Community Plugins]]"
Created: 2023-05-14T07:07:18
Description: Turn your notes into a searachable database
---

> [!INFO] Video Example
> If you want to better understand how Dataview works, check out how I use queries to sort my school notes [here](https://youtu.be/0UTzpIdLbVo?t=98)

> [!INFO] Documentation
> If you want to see a complete list of Dataview's features, you can check their [documentation](https://blacksmithgu.github.io/obsidian-dataview/)

## Why

Let's say you had a note to keep track of all your assignments in a note like [[My Inputs]].

If you were to keep track of all inputs manually, you would have to add a link to each new input, or view them all through the backlinks pane.

I mean, that works fine for a couple, but what about years worth of content consumed? Would you have the patience to continue adding those links each time? And what about the other places in which you need to see them, like from a project note where you're following a tutorial? And what if you wanted to see them a different way, like sorting them by most recently finished or by their completion status?

You would then have to manually type out these links again and again, which is a huge waste of time.

Instead, we can let code automate this process for us ;) As soon as we make a note, we will be able to find it where it's relevant.

For example, the [[MOC Template]] lets us see all related notes, inputs, and thoughts related to a course.

## What
### Types

Dataview lets you see these notes through queries, which search through your notes based on instructions you give it.

Each query is made of different expressions to help determine what notes you want to show and why.

And there are two main types used throughout the course:

#### Lists

- Only show a link to the queried notes, nothing else

#### Tables

Let you also see the [[Metadata]] of a note as columns.

- The most common type of query I use in this vault
- The use cases for this include
  - categorizing notes like in [[My Inputs]] based on progress, while also showing its created/finished dates
- ex) See [[Obsidian Community Plugins#List]] and how the `Summary` value is being shown in the table

## How
As part of [[USV]] to prevent templates, `fileClass` notes, and other setup-related notes to be shown in these queries, we remove them by adding `AND !Hidden` to the query

Used in almost every [[Note types]]

# Your Turn

Then go back to [[USV Module - Learn Obsidian]]