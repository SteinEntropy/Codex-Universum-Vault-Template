---
tags:
  - reviews/yearly
Created: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
Summary:
Personal:
Career:
BodyGoal: "💪 "
MindGoal: "🧠 "
SoulGoal: "✨ "
MissionGoal: "🎯 "
MoneyGoal: "💸 "
GrowthGoal: "📈 "
RomanceGoal: "💕 "
FamilyGoal: "👨‍👩‍👧‍👦 "
FriendsGoal: "🤝 "
Total:
---

[[My Calendar/My Yearly Notes/<% moment(tp.file.title,'YYYY').subtract(1, 'year').format('YYYY') %>|<% moment(tp.file.title,'YYYY').subtract(1, 'year').format('YYYY') %>]] ⬅️ This Year ➡️ [[My Calendar/My Yearly Notes/<% moment(tp.file.title,'YYYY').add(1, 'year').format('YYYY') %>|<% moment(tp.file.title,'YYYY').add(1, 'year').format('YYYY') %>]]

> “Your decisions about allocating your personal time, energy, and talent ultimately shape your life’s strategy.”

> [!TIP]+ Follow my workflow
> Go to my published notes for my updated workflow https://publish.obsidian.md/johnmavrick/My+yearly+review+workflow

## Plan

### Action Items

All the uncompleted tasks from last review. Keep these as food for thought when planning your goals:

```dataview
task
where file.name = "<% moment(tp.file.title, "YYYY").add(-1, 'year').format("YYYY") %>" AND !completed
```

### Theme

**What is a theme or word I can use as direction for this year?**
`INPUT[text(placeholder(ex. Inner peace)):Theme]`

### Wheel of Life
%% State what rating you want to get to by the end of this year, then brainstorm the different things you want to achieve or be by the end of the 12 months %%

#### Joy
`INPUT[number():JoyGoalRating]`
#### Health

##### Body

**From 1-10, where do you want to be in this area and why?**
`INPUT[number():BodyGoalRating]`

**What are some things you can do this year to be at that level?**

##### Mind

**From 1-10, where do you want to be in this area and why?**
`INPUT[number():MindGoalRating]`

**What are some things you can do this year to be at that level?**

##### Soul

**From 1-10, where do you want to be in this area and why?**
`INPUT[number():SoulGoalRating]`

**What are some things you can do this year to be at that level?**

#### Work

##### Mission

**From 1-10, where do you want to be in this area and why?**
`INPUT[number():MissionGoalRating]`

**What are some things you can do this year to be at that level?**

##### Money

**From 1-10, where do you want to be in this area and why?**
`INPUT[number():MoneyGoalRating]`

**What are some things you can do this year to be at that level?**

##### Growth

**From 1-10, where do you want to be in this area and why?**
`INPUT[number():GrowthGoalRating]`

**What are some things you can do this year to be at that level?**

#### Relationships

##### Romance

**From 1-10, where do you want to be in this area and why?**
`INPUT[number():RomanceGoalRating]`

**What are some things you can do this year to be at that level?**

##### Family

**From 1-10, where do you want to be in this area and why?**
`INPUT[number():FamilyGoalRating]`

**What are some things you can do this year to be at that level?**

##### Friends

**From 1-10, where do you want to be in this area and why?**
`INPUT[number():FriendsGoalRating]`

**What are some things you can do this year to be at that level?**

#### Final List

##### Body Goal

`INPUT[textArea(defaultValue(💪 )):BodyGoal]`

##### Mind Goal

`INPUT[textArea(defaultValue(🧠 )):MindGoal]`

##### Soul Goal

`INPUT[textArea(defaultValue(✨ )):SoulGoal]`

##### Mission Goal

`INPUT[textArea(defaultValue(🎯 )):MissionGoal]`

##### Money Goal

`INPUT[textArea(defaultValue(💸 )):MoneyGoal]`

##### Growth Goal

`INPUT[textArea(defaultValue(📈 )):GrowthGoal]`

##### Romance Goal

`INPUT[textArea(defaultValue(💕 )):RomanceGoal]`

##### Family Goal

`INPUT[textArea(defaultValue(👨‍👩‍👧‍👦 )):FamilyGoal]`

##### Friends Goal

`INPUT[textArea(defaultValue(🤝 )):FriendsGoal]`
#### Ideal Wheel of Life
```dataviewjs
const currentPage = dv.current();
const pageYear = parseInt(currentPage.file.name);

const emojis = ["💪", "🧠", "✨", "🎯", "💸", "📈", "💕", "👨‍👩‍👧‍👦", "🤝", "🤩"];
const fields = ["Body", "Mind", "Soul", "Mission", "Money", "Growth", "Romance", "Family", "Friends", "Joy"];

const combinedLabels = fields.map((field, index) => {
	return `${field} ${emojis[index]}`
});

const averagesArray = fields.map(field => currentPage[`${field}GoalRating`] ?? 0)

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
```
### Goals

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
SORT Order, desc

```
## Recap
### Quarters
```dataview
table Total as Rating, Summary, Personal, Career
from #reviews/quarterly AND [[]]
WHERE contains(file.frontmatter.Parent, this.file.name)
sort file.name asc
```

### Key Metrics

#### Energy

```tracker
searchType: dvField
searchTarget: Physical, Mental, Emotional, Spiritual
folder: /My Calendar/My Daily Notes
startDate: <% moment(tp.file.title,'YYYY').startOf('year').format('YYYY-MM-DD') %>
endDate: <% moment(tp.file.title,'YYYY').endOf('year').format('YYYY-MM-DD') %>
summary:
    template: "AVERAGES\nPhysical: {{average(dataset(0))}}\nMental: {{average(dataset(1))}}\nEmotional: {{average(dataset(2))}}\nSpiritual: {{average(dataset(3))}}\n"
```
#### Habits
##### Meditation
```tracker
searchType: task.done, task.all
searchTarget: Meditate, Meditate
folder: /My Calendar/My Daily Notes
startDate: <% moment(tp.file.title,'YYYY').startOf('year').format('YYYY-MM-DD') %>
endDate: <% moment(tp.file.title,'YYYY').endOf('year').format('YYYY-MM-DD') %>
summary:
    template: "Meditate - {{sum(dataset(0))/sum(dataset(1))*100}}% - {{sum(dataset(0))}}/{{sum(dataset(1))}} Days Completed"
```
#### Wheel of Life
%% If instead of the average of your weekly ratings you want to create your own manual chart, you can copy from [[Wheel of life manual chart]] %%

```dataviewjs
const currentPage = dv.current();
const pageYear = parseInt(currentPage.file.name);

const emojis = ["💪", "🧠", "✨", "🎯", "💸", "📈", "💕", "👨‍👩‍👧‍👦", "🤝", "🤩"];
const fields = ["Body", "Mind", "Soul", "Mission", "Money", "Growth", "Romance", "Family", "Friends", "Joy"];

const combinedLabels = fields.map((field, index) => {
	return `${field} ${emojis[index]}`
});

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

function isInYear(fileDate, year) {
    const yearStartDate = new Date(year, 0, 1); // January 1st of the specified year
    const yearEndDate = new Date(year + 1, 0, 0); // December 31st of the specified year

    return fileDate >= yearStartDate && fileDate <= yearEndDate;
}


dv.pages("#reviews/weekly")
    .where(page => {
        let match = page.file.name.match(/(\d+)-W(\d+)/);
        if (match) {
            let year = parseInt(match[1]);
            let week = parseInt(match[2]);
            let pageDate = weekToDate(year, week);
            return isInYear(pageDate, pageYear);
        }
        return false;
    })
    .forEach(page => {
        fields.forEach((field, index) => {
            if (page[field]) {
                sums[field] += page[field];
                counts[field]++;
            }
        });
    })

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

`INPUT[textArea(placeholder(Insert Total Here)):Total]`

## Reflection

> [!TIP]+ Want to dive deeper in your reflection?
> Feel free to make a copy of [My Annual Review Prompts](https://publish.obsidian.md/johnmavrick/My+Annual+Review+Prompts) and answer the most compelling prompts to help you reflect on the past year!
> After, fill out the below to curate only the most important.

<%tp.file.include("[[Reflection Addon]]") %>
