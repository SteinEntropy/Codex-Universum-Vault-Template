---
tags:
  - reviews/quarterly
Created: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
Parent: "[[My Calendar/My Yearly Notes/<% moment(tp.file.title,'YYYY-[Q]Q').format('YYYY')%>|<% moment(tp.file.title,'YYYY-[Q]Q').format('YYYY')%>]]"
---

[[My Calendar/My Quarterly Notes/<% moment(tp.file.title,'YYYY-[Q]Q').subtract(1, 'quarter').format('YYYY-[Q]Q') %>|<% moment(tp.file.title,'YYYY-[Q]Q').subtract(1, 'quarter').format('YYYY-[Q]Q') %>]] ⬅️ [[My Calendar/My Yearly Notes/<% moment(tp.file.title,'YYYY-[Q]Q').format("YYYY")%>|<% moment(tp.file.title,'YYYY-[Q]Q').format("YYYY")%>]] ➡️ [[My Calendar/My Quarterly Notes/<% moment(tp.file.title,'YYYY-[Q]Q').add(1, 'quarter').format('YYYY-[Q]Q') %>|<% moment(tp.file.title,'YYYY-[Q]Q').add(1, 'quarter').format('YYYY-[Q]Q') %>]]

> “Your decisions about allocating your personal time, energy, and talent ultimately shape your life’s strategy.”

> [!TIP]+ Follow my workflow
> Go to my published notes for my updated workflow https://publish.obsidian.md/johnmavrick/My+quarterly+review+workflow

## Plan

- [ ] Revisit the higher-order review to remember your long-term goals and vision #hidden

### Action Items

All the uncompleted tasks from last review:

```dataview
task
where file.name = "<% moment(tp.file.title, "YYYY-[Q]Q").add(-3, 'months').format("YYYY-[Q]Q") %>" AND !completed
```

### Goals

> [!DANGER]+ Plan at least 3 goals you want to achieve this quarter 🎯

```meta-bind-button
label: Create Goal Note 🎯
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: command
    command: quickadd:choice:0468ea18-5c37-4079-a9ef-25a64cb20934

```

```dataview
table list("🎯 " + Description, "💡 " + Why) as "Details"
FROM #goal AND !"Hidden"
WHERE contains(file.frontmatter.Timeframe, this.file.name)
SORT Order, file.name asc
```

## Recap
### Months
```dataview
table Total as Rating, Summary, Personal, Career
from #reviews/monthly AND [[]]
WHERE contains(file.frontmatter.Parent, this.file.name)
sort file.name asc
```

### Key Metrics

#### Energy

```tracker
searchType: frontmatter
searchTarget: Physical, Mental, Emotional, Spiritual
folder: /My Calendar/My Daily Notes
startDate: <% moment(tp.file.title,'YYYY-[Q]Q').startOf('quarter').format('YYYY-MM-DD') %>
endDate: <% moment(tp.file.title,'YYYY-[Q]Q').endOf('quarter').format('YYYY-MM-DD') %>
summary:
    template: "AVERAGES\nPhysical: {{average(dataset(0))}}\nMental: {{average(dataset(1))}}\nEmotional: {{average(dataset(2))}}\nSpiritual: {{average(dataset(3))}}\n"
```

##### Reflection
Are you happy or surprised with the results? What can you consciously work on for the future?
#### Wheel of Life
```dataviewjs
const currentPage = dv.current();
const pageYear = parseInt(currentPage.file.name.split('-Q')[0]);
const pageQuarter = parseInt(currentPage.file.name.split('-Q')[1]);

const emojis = ["🤩", "💪", "🧠", "✨", "🎯", "💸", "📈", "💕", "👨‍👩‍👧‍👦", "🤝"];
const fields = ["Joy", "Body", "Mind", "Soul", "Mission", "Money", "Growth", "Romance", "Family", "Friends"];
let sums = {}, counts = {}, averages = {};

// Initialize sums and counts
fields.forEach(field => {
    sums[field] = 0;
    counts[field] = 0;
});

function weekToDate(year, week) {
    let janFirst = new Date(year, 0, 1);
    // Calculate the number of days to the first Monday of the year
    let daysToFirstMonday = (7 - janFirst.getDay() + 1) % 7;
    let days = (week - 1) * 7 + daysToFirstMonday;

    janFirst.setDate(janFirst.getDate() + days);
    return janFirst;
}

function isInQuarter(fileDate, year, quarter) {
    const quarterStartMonth = (quarter - 1) * 3;
    const quarterStartDate = new Date(year, quarterStartMonth, 1);
    const quarterEndDate = new Date(year, quarterStartMonth + 3, 0);

    return fileDate >= quarterStartDate && fileDate <= quarterEndDate;
}


dv.pages("#reviews/weekly")
    .where(page => {
        let match = page.file.name.match(/(\d+)-W(\d+)/);
        if (match) {
            let year = parseInt(match[1]);
            let week = parseInt(match[2]);
            let pageDate = weekToDate(year, week);
            return isInQuarter(pageDate, pageYear, pageQuarter);
        }
        return false;
    })
    .forEach(page => {
        fields.forEach((field, index) => {
            if (page[field]) {
                sums[field] += parseInt(page[field]);
                counts[field]++;
            }
        });
    })

fields.forEach(field => {
	if (counts[field] > 0) {
		averages[field] = (sums[field] / counts[field]).toFixed(1); // Average with one decimal
	}
});

// Displaying averages
fields.forEach((field, index) => {
	if (averages[field]) {
		dv.paragraph(`${field} ${emojis[index]} - ${averages[field]} / 10`);
	} else {
		dv.paragraph(`ERROR: No values found for ${field} ${emojis[index]}`);
	}
});

// Display total
let total = 0;

fields.forEach(field => {
	total += parseFloat(averages[field]);
});

dv.paragraph(`Total - ${total} / 100`);
```

`INPUT[textArea(placeholder(Insert Total Here)):Total]`

##### Reflection
Are you happy or surprised with the results? What can you consciously work on for the future?

## Reflection

<% tp.file.include("[[Reflection Addon]]") %>
