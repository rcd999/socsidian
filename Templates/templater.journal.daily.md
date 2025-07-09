<%*
const dv = tp.app.plugins.plugins.dataview.api;
const localdate = tp.date;
const today = localdate.now("YYYY-MM-DD");
const week = localdate.now("WW");
const weekday = localdate.now("dddd");
const day = localdate.now("DD");
const nmonth = localdate.now("MMMM");
const month = localdate.now("MM");
const year = localdate.now("YYYY");
const quarter = localdate.now("Q");
const qpath = `Journal/Quarterly/${year + "Q" + quarter}`;
const mpath = `Journal/Monthly/${year + "M" + month}`;
const wpath = `Journal/Weekly/${year + "W" + week}`;
tR +=
`---
date: ${tp.date.now("YYYY-MM-DD")}
quarter: ${quarter} 
month: ${nmonth} 
week: ${week} 
weekday: ${weekday}
aliases: []
tags: []
---

# Journal Details
`;
if (!await tp.file.exists(wpath + ".md")) {
	await tp.app.vault.create(wpath + ".md", "");
}
if (!await tp.file.exists(mpath + ".md")) {
	await tp.app.vault.create(mpath + ".md", "");
}
if (!await tp.file.exists(qpath + ".md")) {
	await tp.app.vault.create(qpath + ".md", "");
}
const qlink = dv.fileLink(qpath, false, "Q" + quarter);
const mlink = dv.fileLink(mpath, false, nmonth);
const wlink = dv.fileLink(wpath, false, week);
const table = dv.markdownTable(["Year ", "Month", "Day", "Weekday", "Week", "Quarter", "Tags 🏷️"], dv.array([[year, mlink, day, weekday, wlink, qlink, '`$= let ret = []; await dv.view("Scripts/inlineTagSuggester", ret); return ret.join("")`']]));
tR += `\n`;
tR += table;
%>
# ‼️ Top Priorities ‼️


# 📨 Inbox / Quick Capture 📪

## 🃏 Random 🎲


## Meetings 📉


## AI 🤖


---

# Notes & Reflections 💭

## Keep in Mind 🧠


## The Good, the Bad, and the Ugly 


## Outcomes 🥅


---

# Backlog 📜