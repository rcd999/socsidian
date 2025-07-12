
```dataview
TABLE WITHOUT ID
link(file.path, name) AS 📚,
choice(
	priority > 17, "🔺",
	choice(
		priority <= 17 and priority > 13, "⏫",
		choice(
			priority <= 13 and priority > 9, "🔼",
				choice(priority <= 9 and priority > 5, "🔽", "⏬️")))) AS "📃",
choice(contains(tags, "Investigation"), "🕵️", "📈") AS "❔",
length(filter(file.tasks, (t) => !t.fullyCompleted)) AS "⚙️"
FROM (#Project OR #Investigation) AND -"Tags"
WHERE status = "New"
SORT priority DESC
```


```dataview
TASK 
SORT priority/effort DESC
```
