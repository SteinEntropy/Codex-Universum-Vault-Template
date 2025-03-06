---
mapWithTag: true
limit: 100
excludes: 
extends: output
version: "2.11"
fields:
  - name: Source
    type: Lookup
    options:
      autoUpdate: true
      dvQueryString: dv.pages("#input/books")
      targetFieldName: Application
      outputType: LinksList
      builtinSummarizingFunction: Count
      customListFunction: page.file.name
      customSummarizingFunction: return pages.length
      summarizedFieldName: ""
    path: ""
    id: 4FnBwx
tagNames: 
filesPaths: 
bookmarksGroups: 
savedViews: []
favoriteView: 
fieldsOrder:
  - 4FnBwx
icon: package
---
