---
mapWithTag: true
limit: 100

excludes: 
extends: 
version: "2.21"
fields:
  - id: fw0qSi
    name: Status
    options:
      valuesList:
        "1": 🟥
        "2": 🟧
        "3": 🟨
        "4": 🟩
        "5": ⬛️
      sourceType: ValuesListNotePath
      valuesListNotePath: Hidden/Utilities/Advanced Status Values.md
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: 1aDh25
    name: tags
    options:
      valuesList:
        "1": inputCollection/course
        "2": inputCollection/podcast
        "3": inputCollection/series
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: uuMg5y
    name: Rating
    options:
      min: "1"
      max: "10"
    type: Number
    path: ""
  - id: 8nsqtq
    name: Created
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: "false"
    type: Date
    path: ""
  - id: h8hwFU
    name: Finished
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: "false"
    type: Date
    path: ""
  - id: d02rSY
    name: Author
    options: {}
    type: Input
    path: ""
  - id: QlNPDY
    name: Source
    options: {}
    type: Input
    path: ""
  - name: Links
    type: File
    options: {}
    path: ""
    id: IdH1CG
tagNames: 
filesPaths: 
bookmarksGroups: 
savedViews: []
favoriteView: 
fieldsOrder:
  - fw0qSi
  - 1aDh25
  - QlNPDY
  - IdH1CG
  - d02rSY
  - h8hwFU
  - 8nsqtq
  - uuMg5y
---
