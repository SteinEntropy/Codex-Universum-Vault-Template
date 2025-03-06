---
Status: ""
tags:
  - plugin
Links:
  - "[[Obsidian Community Plugins]]"
Created: 2024-04-09T17:17:59
Description: Customize the visual appearance of a note title based on its attributes
updates: Removed emojis in file names with this
---

> [!WARNING] Title
> If you are using a previous version of the vault, you can remove the existing emojis with `Bulk Rename Plugin`.

I added this plugin so I could get rid of the emoji prefixes inside the note titles because:
- they would sometimes change to be the same emoji but be technically different, so previously existing links to them would be removed
- be corrupted upon unzipping and opening a vault
- make obsidian publish links bloated because of having to URL encode any emojis

So, with this plugin, you can now still see the prefixes to identify text, but it won't be an actual part of the title!

On top of emoji prefixes, you can also do further customizations like link styling, but I've decided to only enable the prefix on for now.
warning

If you want to set your own custom emoji prefixes up:
- Go to this plugins settings and add a new selector
- Configure the rule type (property, tag, folder)
- Go to [[My Plugins#Style Settings]] -> Supercharged Links -> Choose the tag -> Modify prepend text

Right now I have it for all note types except for:
- Periodic notes since those are self-evident
- Herb and all evergreen notes (just have it for seedlings)

## Alternatives
You can instead just use the [[Metadata Menu Plugin]] icon shown after notes to differentiate between note types. I've decided to use supercharged links because:
- Emojis are easier for me to distinguish
- Having them on the left helps me with readability
- Something else