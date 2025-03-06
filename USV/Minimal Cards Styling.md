---
Status: 
tags:
  - "note"
Links: ["[[Managing appearance and theme]]"]
Created: 2024-01-20T01:29:45
---
Some notes like [[My Vision Board]] have the `cards` class added in the metadata to turn Dataview table queries into cards instead.

I personally think this is useful if you have lots of fields you need to show

You can see the other classes you can add to a note with `cards` [here](https://minimal.guide/cards)

If you want to only apply it to a single query, you will have to turn it into a dataviewjs query ([source](https://forum.obsidian.md/t/possible-to-apply-css-class-cards-not-to-every-dataview-table/47563/4)):
```dataviewjs
// insert here your DQL query (replace the example below but leave the "`" at the start and at the end)
const DQL = ` TABLE WITHOUT ID file.mday, Created, file.etags FROM "folder/path" SORT file.mday DESC `
// execute the DQL inside dvjs
dv.execute(DQL)
// add css class cards to this query container
dv.container.classList.add("cards")
```