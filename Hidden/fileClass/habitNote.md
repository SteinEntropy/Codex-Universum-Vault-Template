---
fields:
  - id: nABqlo
    name: Status
    options:
      valuesList:
        "1": 🟥
        "2": 🟨
        "3": 🟩
        "4": ⬛️
      sourceType: ValuesListNotePath
      valuesListNotePath: Hidden/Utilities/Basic Status Values.md
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
  - name: Goal
    type: File
    options:
      dvQueryString: dv.pages('#goal')
    path: ""
    id: CohxM8
  - name: Type
    type: Select
    options:
      valuesList:
        "1": Task
        "2": Metric
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    path: ""
    id: OILyKu
limit: 100
mapWithTag: true

tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - OILyKu
  - nABqlo
  - CohxM8
  - QMcp8A
version: "2.7"
---
