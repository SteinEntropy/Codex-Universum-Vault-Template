<%-* const taskName = await tp.system.prompt("Task Name", false, true); -%>

``` tracker
searchType: task.done, task.all
searchTarget: <%* tR += taskName %>, <%* tR += taskName %>
folder: /My Calendar/My Daily Notes
summary:
    template: "<%* tR += taskName %> - {{sum(dataset(0))/sum(dataset(1))*100}}% - {{sum(dataset(0))}}/{{sum(dataset(1))}} Days Completed"
```
```tracker
searchType: task.done, task.notdone
searchTarget: <%* tR += taskName %>, <%* tR += taskName %>
folder: /My Calendar/My Daily Notes
datasetName: <%* tR += taskName %>, Not <%* tR += taskName %>
month:
    color: green
    todayRingColor: white
    showSelectedValue: false
    startWeekOn: 'Mon'
    selectedRingColor: steelblue
    dimNotInMonth: false
```