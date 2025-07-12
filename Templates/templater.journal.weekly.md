<%*
const localdate = tp.date;
const today = localdate.now("YYYY-MM-DD");
const week = localdate.now("WW");
const weekday = localdate.now("dddd");
const day = localdate.now("DD");
const nmonth = localdate.now("MMMM");
const month = localdate.now("MM");
const year = localdate.now("YYYY");
const quarter = localdate.now("Q");
tR +=
`---
quarter: ${quarter} 
month: ${nmonth} 
week: ${week} 
weekday: ${weekday}
aliases: []
tags: []
---
`;
%>
# Weekly Details

## Daily Journals

```dataview
TABLE week
FROM "Journal/Daily" and [[]]
```

# Goals


# Inbox


---

# Notes & Reflections

## Keep in Mind


## The Good, the Bad, and the Ugly


## Outcomes
