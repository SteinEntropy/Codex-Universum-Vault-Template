---
Status: 
tags:
  - note
Links:
  - "[[Dataview Plugin]]"
Created: 2024-04-14T19:56:44
---
## What
A code block used to display specific notes and their [[Metadata]] based on criteria you set.

I use this since it adds more organization beyond the traditional Backlinks view.
### Query Anatomy

When there is a Dataview query in a note, you can hover over it and look to the left of it for a `</>` icon that you can click to view the code.

Alternatively, you can also reach the code by putting your selector near it, then using your arrow keys.

````
```dataview

TABLE|LIST <field> [AS "Column Name"], <field>, …, <field>

FROM <source> (like #tag or "folder")

WHERE <expression> (like 'field = value')

SORT <expression> [ASC/DESC] (like 'field ASC')

… other data commands

````

`FROM`

- It selects certain notes based on its characteristics like:
  - What folder it's in
  - If it's linked to a certain note
  - What tags it has (see [[Obsidian Community Plugins#List]])
  - Whether it has certain metadata, etc

`WHERE`

- Usually used for filtering out notes based on their [[Metadata]]

`SORT`

- Used to show the order in which notes are displayed

### Creating Your Own

If you're not really into programming then it might take some time to get used to, and manual search is always an option.

I would recommend just looking at the existing queries in this vault to see how notes are found.

If you need help creating your own queries, you can visit https://s-blu.github.io/basic-dataview-query-builder/ for a step-by-step survey on what kind of form you want to make, or watch my video at the top of the note.

## How
### Scrapyard
*This is for my own personal reference*
require it to be a link

```
WHERE contains(Timeframe, link(dateformat(date(now), "yyyy-Qq")))
```

this.file.name to get current file name

```
list("[[2023-Q4]]", "[[2023"+"-Q2]]")
```

#### Average of periodic notes

````
```dataview
TABLE WITHOUT ID average(rows.Total) as "Average", rows.Total as "Values"
FROM [[]] AND #reviews/weekly
WHERE Total
GROUP BY ""
```
````

#### Custom sorts

https://forum.obsidian.md/t/specify-the-sort-order-in-dataview-query/37196/4

```
SORT choice(realm = "Literature", "1", choice(realm = "Math", "2", choice(realm = "Languages", "3", choice(realm = "Drawing", "4", choice(realm = "Tech", "5", choice(realm = "Personal", "6", "other"))))))
```

[[Dataview to CSV]]