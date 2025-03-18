---
limit: 100
mapWithTag: true

excludes: 
extends: 
version: "2.18"
fields:
  - id: nABqlo
    name: Status
    options:
      valuesList:
        "1": 🟥
        "2": 🟧
        "3": 🟨
        "4": 🟩
        "5": ⬛
      sourceType: ValuesListNotePath
      valuesListNotePath: Hidden/Utilities/Advanced Status Values.md
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: QMcp8A
    name: Area
    options:
      dvQueryString: |-
        dv.pages("#area")
        .filter(p => !p.file.path.includes('Hidden'))
    type: File
    path: ""
  - id: r8lx9h
    name: Deadline
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: "false"
      dateShiftInterval: 7 days
    type: Date
    path: ""
  - name: Goal
    type: File
    options:
      dvQueryString: dv.pages('#goal')
    path: ""
    id: CohxM8
tagNames: 
filesPaths: 
bookmarksGroups: 
savedViews: []
favoriteView: 
fieldsOrder:
  - nABqlo
  - r8lx9h
  - CohxM8
  - QMcp8A
---
