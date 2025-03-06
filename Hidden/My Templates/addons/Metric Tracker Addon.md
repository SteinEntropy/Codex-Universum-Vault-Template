<%-* const field = await tp.system.prompt("Metadata Field", false, true); -%>

```tracker
searchType: frontmatter
searchTarget:  <%* tR += field %>
folder: /My Calendar/My Daily Notes
summary:
    template: "Minimum: {{min()}}\nMaximum: {{max()}}\nMedian: {{median()}}\nAverage: {{average()}}\nSum: {{sum()}}"
```
``` tracker
searchType: frontmatter
searchTarget: <%* tR += field %>
datasetName: <%* tR += field %>
folder: /My Calendar/My Daily Notes
month:
    startWeekOn: 'Mon'
    threshold: <% tp.system.prompt("Threshold (minimum number for completion - 1)") %>
    selectedRingColor: steelblue
    color: green
    dimNotInMonth: false
```
