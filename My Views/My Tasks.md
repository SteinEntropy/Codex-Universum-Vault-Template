---
tags:
  - view/custom
Links:
  - "[[My Home]]"
Created: 2025-03-05T19:36:00
Description: Manage all your tasks
---

## Inbox

%% Tasks with no due date %%

```tasks
not done
(no due date) AND (no scheduled date) AND (tags does not include habit)
sort by priority
```

## By Due Date

### Overdue

```tasks
not done
(((due before today) OR (scheduled before today)) AND (tags does not include habit))
sort by priority
```

### Due Today

```tasks
not done
(due today) OR (scheduled today)
sort by priority
```

### Due In 7 Days

```tasks
not done
((due on or before in 7 days) OR (scheduled on or before in 7 days) AND (tags does not include habit))
sort by priority
```

## By Type

### Waiting For `#waiting`

```tasks
not done
tags include waiting
sort by priority
```

### Someday/Maybe `#someday`

```tasks
not done
tags include someday
sort by priority
```

## Completed

%% Last 20 completed tasks %%

```tasks
done
sort by done
limit 20
```
