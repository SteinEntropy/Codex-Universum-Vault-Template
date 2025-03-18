---
mapWithTag: true
limit: 100

excludes: 
extends: 
version: "2.23"
AutoNoteMover: disable
fields:
  - id: SmWvv0
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
  - id: 1Xz902
    name: tags
    options:
      valuesList:
        "1": input
        "2": input/articles
        "3": input/tweets
        "4": input/podcasts
        "5": input/videos
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: XiM2CL
    name: Rating
    options:
      min: "1"
      max: "10"
    type: Number
    path: ""
  - id: pXHABA
    name: Created
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: "false"
    type: Date
    path: ""
  - id: 3NQeNy
    name: Finished
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: "false"
    type: Date
    path: ""
  - id: wqZ1ym
    name: Author
    options: {}
    type: Input
    path: ""
  - id: DP31bN
    name: Source
    options: {}
    type: Input
    path: ""
  - id: iEMkC8
    name: Collection
    options:
      dvQueryString: dv.pages("#inputCollection").filter(p => !p.file.path.includes('Hidden'))
    type: File
    path: ""
  - name: Links
    type: MultiFile
    options: {}
    path: ""
    id: yneIaB
tagNames: 
filesPaths: 
bookmarksGroups: 
savedViews: []
favoriteView: 
fieldsOrder:
  - SmWvv0
  - 1Xz902
  - yneIaB
  - iEMkC8
  - DP31bN
  - wqZ1ym
  - 3NQeNy
  - pXHABA
  - XiM2CL
---
