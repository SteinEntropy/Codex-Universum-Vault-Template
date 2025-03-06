---
limit: 100
mapWithTag: true

tagNames: 
excludes: 
extends: 
version: "2.15"
fields:
  - id: mZWvz8
    name: Status
    options:
      valuesList:
        "1": 🌱
        "2": 🌿
        "3": 🌲
      sourceType: ValuesListNotePath
      valuesListNotePath: Hidden/Utilities/Evergreen Notes Status Values.md
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: E95r44
    name: Links
    options: {}
    type: MultiFile
    path: ""
  - name: tags
    type: Input
    options: {}
    path: ""
    id: GH8EOO
  - name: Created
    type: DateTime
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DDTHH:mm:ss
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: rg4ejg
filesPaths: 
bookmarksGroups: 
savedViews: []
favoriteView: 
fieldsOrder:
  - mZWvz8
  - GH8EOO
  - E95r44
  - rg4ejg
---
