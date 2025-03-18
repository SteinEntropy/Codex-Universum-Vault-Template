---
tags:
  - "reviews/monthly"
Created: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
Parent: "[[My Calendar/My Quarterly Notes/<% moment(tp.file.title,'YYYY-[M]MM').format('YYYY-[Q]Q') %>|<% moment(tp.file.title,'YYYY-[M]MM').format('YYYY-[Q]Q') %>]]"
---

[[My Calendar/My Monthly Notes/<% moment(tp.file.title, "YYYY-[M]MM").add(-1, 'months').format("YYYY-[M]MM") %>|<% moment(tp.file.title, "YYYY-[M]MM").add(-1, 'months').format("YYYY-[M]MM") %>]] ⬅️ [[My Calendar/My Quarterly Notes/<% moment(tp.file.title,'YYYY-[M]MM').format('YYYY-[Q]Q') %>|<% moment(tp.file.title,'YYYY-[M]MM').format('YYYY-[Q]Q') %>]] ➡️ [[My Calendar/My Monthly Notes/<% moment(tp.file.title, "YYYY-[M]MM").add(1, 'months').format("YYYY-[M]MM") %>|<% moment(tp.file.title, "YYYY-[M]MM").add(1, 'months').format("YYYY-[M]MM") %>]]

> “Your decisions about allocating your personal time, energy, and talent ultimately shape your life’s strategy.”

## Plan

### Action Items

All the unfinished tasks from last review:

```dataview
task
where file.name = "<% moment(tp.file.title, "YYYY-[M]MM").add(-1, 'months').format("YYYY-[M]MM") %>" AND !completed
```

### Goals

> [!DANGER]+ If you need more clarity plan any monthly goals you want to achieve 🎯

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
### Weeks
```dataview
table Total as Rating, Summary, Personal, Career
from #reviews/weekly AND [[]]
WHERE contains(file.frontmatter.Parent, this.file.name)
sort file.name asc
```

### Key Metrics

#### Energy

```tracker
searchType: frontmatter
searchTarget: Physical, Mental, Emotional, Spiritual
folder: /My Calendar/My Daily Notes
startDate: <% moment(tp.file.title,'YYYY-[M]MM').startOf('month').format('YYYY-MM-DD') %>
endDate: <% moment(tp.file.title,'YYYY-[M]MM').endOf('month').format('YYYY-MM-DD') %>
summary:
    template: "AVERAGES\nPhysical: {{average(dataset(0))}}\nMental: {{average(dataset(1))}}\nEmotional: {{average(dataset(2))}}\nSpiritual: {{average(dataset(3))}}\n"
```

```tracker
searchType: frontmatter
searchTarget: Physical, Mental, Emotional, Spiritual
datasetName: Physical, Mental, Emotional, Spiritual
folder: /My Calendar/My Daily Notes
month:
    startWeekOn: 'Sun'
    threshold: 7, 7, 7, 7
    color: green
    dimNotInMonth: false
    todayRingColor: white
    selectedRingColor: steelblue
    circleColorByValue: true
    showSelectedValue: true
    initMonth: <% moment(tp.file.title, "YYYY-[M]MM").format("YYYY-MM") %>
```

##### Reflection

Are you happy or surprised with the results? What can you consciously work on for the future?

#### Habits

##### Meditation

```tracker
searchType: task.done, task.notdone
searchTarget: Meditate, Meditate
folder: /My Calendar/My Daily Notes
datasetName: Meditate, Not Meditate
month:
    color: green
    todayRingColor: white
    selectedRingColor: steelblue
    showSelectedValue: false
    initMonth: <% moment(tp.file.title, "YYYY-[M]MM").format("YYYY-MM") %>
```

```tracker
searchType: task.done, task.all
searchTarget: Meditate, Meditate
folder: /My Calendar/My Daily Notes
startDate: <% moment(tp.file.title,'YYYY-[M]MM').startOf('month').format('YYYY-MM-DD') %>
endDate: <% moment(tp.file.title,'YYYY-[M]MM').endOf('month').format('YYYY-MM-DD') %>
summary:
    template: "Meditate - {{sum(dataset(0))/sum(dataset(1))*100}}% - {{sum(dataset(0))}}/{{sum(dataset(1))}} Days Completed"
```

##### Reflection

Are you happy or surprised with the results? What can you consciously work on for the future?

#### Wheel of Life

```dataviewjs
const currentPage = dv.current();
const pageYear = parseInt(currentPage.file.name.split('-M')[0]);
const pageMonth = parseInt(currentPage.file.name.split('-M')[1]);

const emojis = ["💪", "🧠", "✨", "🎯", "💸", "📈", "💕", "👨‍👩‍👧‍👦", "🤝", "🤩"];
const fields = ["Body", "Mind", "Soul", "Mission", "Money", "Growth", "Romance", "Family", "Friends", "Joy"];
let sums = {}, counts = {}, averages = {};

const combinedLabels = fields.map((field, index) => {
	return `${field} ${emojis[index]}`
});

// Initialize sums and counts
fields.forEach(field => {
    sums[field] = 0;
    counts[field] = 0;
});

function weekToDate(year, week) {
    let janFirst = new Date(year, 0, 1);
    let daysToFirstMonday = (7 - janFirst.getDay() + 1) % 7;
    let days = (week - 1) * 7 + daysToFirstMonday;

    janFirst.setDate(janFirst.getDate() + days);
    return janFirst;
}

function isInMonth(fileDate, year, month) {
    const monthStartDate = new Date(year, month - 1, 1);
    const monthEndDate = new Date(year, month, 0);

    return fileDate >= monthStartDate && fileDate <= monthEndDate;
}

dv.pages("#reviews/weekly")
    .where(page => {
        let match = page.file.name.match(/(\d+)-W(\d+)/);
        if (match) {
            let year = parseInt(match[1]);
            let week = parseInt(match[2]);
            let pageDate = weekToDate(year, week);
            return isInMonth(pageDate, pageYear, pageMonth);
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
    });

fields.forEach(field => {
    if (counts[field] > 0) {
        averages[field] = (sums[field] / counts[field]).toFixed(1); // Average with one decimal
    }
});

const averagesArray = fields.map(field => averages[field] ?? 0);

dv.paragraph(`\`\`\`chart
type: polarArea
labels: [${combinedLabels}]
series:
  - title:
    data: [${averagesArray}]
tension: 0.2
width: 80%
labelColors: true
fill: true
beginAtZero: true
rMax: 10
bestFit: false
bestFitTitle: undefined
bestFitNumber: 0
legendPosition: right
\`\`\``)

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

`INPUT[number(placeholder(Insert Total Here)):Total]`

##### Reflection

Are you happy or surprised with the results? What can you consciously work on for the future?

## Reflection

<%tp.file.include("[[Reflection Addon]]") %>
